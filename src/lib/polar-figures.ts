// 극곡선 그림 (인라인 SVG). r(θ)를 직접 계산해서 그린다. 색은 CSS 토큰(.fig .c-*)을 따른다.
// 카드·레슨 본문에서 "::fig 이름 | 캡션"으로 넣는다.

type Cls = 'c-acc' | 'c-pos' | 'c-ok';

interface Curve {
  /** r(θ). sq=true면 이 함수는 r²을 돌려주고, r = ±√ 두 갈래를 그린다 */
  f: (t: number) => number;
  t0: number;
  t1: number;
  sq?: boolean;
  cls?: Cls;
  /** sq일 때 음의 갈래 색 */
  negCls?: Cls;
}

interface Opts {
  /** 고정 보기 범위 [xmin, xmax, ymin, ymax]. 없으면 곡선에 맞춘다 */
  box?: [number, number, number, number];
  steps?: number;
}

const PI = Math.PI;
const W = 200;
const fmt = (n: number) => (Math.round(n * 10) / 10).toString();

function plot(label: string, curves: Curve[], o: Opts = {}) {
  const steps = o.steps ?? 1600;
  // 갈래별 점열 (NaN = 끊김)
  const branches: { pts: [number, number][]; cls: Cls }[] = [];
  for (const c of curves) {
    const signs = c.sq ? [1, -1] : [1];
    for (const s of signs) {
      const pts: [number, number][] = [];
      for (let i = 0; i <= steps; i++) {
        const t = c.t0 + ((c.t1 - c.t0) * i) / steps;
        let r = c.f(t);
        if (c.sq) r = r < -1e-12 ? NaN : s * Math.sqrt(Math.max(0, r));
        pts.push([r * Math.cos(t), r * Math.sin(t)]);
      }
      branches.push({ pts, cls: s === 1 ? (c.cls ?? 'c-acc') : (c.negCls ?? 'c-pos') });
    }
  }
  // 보기 범위
  let [x0, x1, y0, y1] = o.box ?? [Infinity, -Infinity, Infinity, -Infinity];
  if (!o.box) {
    for (const b of branches)
      for (const [x, y] of b.pts) {
        if (!Number.isFinite(x) || !Number.isFinite(y)) continue;
        x0 = Math.min(x0, x, 0); x1 = Math.max(x1, x, 0);
        y0 = Math.min(y0, y, 0); y1 = Math.max(y1, y, 0);
      }
    const pad = 0.12 * Math.max(x1 - x0, y1 - y0);
    x0 -= pad; x1 += pad; y0 -= pad; y1 += pad;
  }
  // 가로세로 비율: 같은 축척, 높이는 0.6~1.25배 범위로
  const wSpan = x1 - x0;
  let hSpan = y1 - y0;
  const minH = 0.6 * wSpan;
  if (hSpan < minH) { const e = (minH - hSpan) / 2; y0 -= e; y1 += e; hSpan = minH; }
  const maxH = 1.25 * wSpan;
  if (hSpan > maxH) {
    const e = (hSpan / 1.25 - wSpan) / 2;
    x0 -= e;
    x1 += e;
  }
  const span = x1 - x0;
  const k = W / span;
  const H = Math.round((y1 - y0) * k);
  const X = (x: number) => (x - x0) * k;
  const Y = (y: number) => (y1 - y) * k;
  const inBox = (x: number, y: number) => x >= x0 - 1e-9 && x <= x1 + 1e-9 && y >= y0 - 1e-9 && y <= y1 + 1e-9;

  let body = '';
  // 축
  if (y0 < 0 && y1 > 0) body += `<line x1="0" y1="${fmt(Y(0))}" x2="${W}" y2="${fmt(Y(0))}" class="c-mut" stroke="currentColor" stroke-width="1"/>`;
  if (x0 < 0 && x1 > 0) body += `<line x1="${fmt(X(0))}" y1="0" x2="${fmt(X(0))}" y2="${H}" class="c-mut" stroke="currentColor" stroke-width="1"/>`;
  // 곡선: 범위 밖·정의 안 됨·큰 점프에서 끊는다
  const jump = 0.25 * span;
  for (const b of branches) {
    let d = '';
    let prev: [number, number] | null = null;
    for (const [x, y] of b.pts) {
      const ok = Number.isFinite(x) && Number.isFinite(y) && inBox(x, y);
      if (!ok) { prev = null; continue; }
      const cont = prev && Math.hypot(x - prev[0], y - prev[1]) < jump;
      d += `${cont ? 'L' : 'M'}${fmt(X(x))} ${fmt(Y(y))}`;
      prev = [x, y];
    }
    if (d) body += `<path d="${d}" class="${b.cls}" stroke="currentColor" stroke-width="1.8"/>`;
  }
  return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${label}" fill="none" stroke-linecap="round" stroke-linejoin="round">${body}</svg>`;
}

const full = (f: (t: number) => number, extra: Partial<Curve> = {}): Curve => ({ f, t0: 0, t1: 2 * PI, ...extra });
const { cos, sin, tan, exp } = Math;

export const polarFigures: Record<string, string> = {
  // 원
  'polar-circle-cos': plot('r = 2a cos θ', [full((t) => 2 * cos(t))]),
  'polar-circle-sin': plot('r = 2a sin θ', [full((t) => 2 * sin(t))]),
  'polar-circle-a': plot('r = a', [full(() => 1)]),
  // 카디오이드
  'polar-cardioid-pcos': plot('r = a(1 + cos θ)', [full((t) => 1 + cos(t))]),
  'polar-cardioid-mcos': plot('r = a(1 − cos θ)', [full((t) => 1 - cos(t))]),
  'polar-cardioid-psin': plot('r = a(1 + sin θ)', [full((t) => 1 + sin(t))]),
  'polar-cardioid-msin': plot('r = a(1 − sin θ)', [full((t) => 1 - sin(t))]),
  // 리마송 r = a + b cos θ (b = 1)
  'polar-limacon-convex': plot('r = a + b cos θ, a ≥ 2b', [full((t) => 2.5 + cos(t))]),
  'polar-limacon-dimple': plot('r = a + b cos θ, b < a < 2b', [full((t) => 1.5 + cos(t))]),
  'polar-limacon-loop': plot('r = a + b cos θ, a < b', [full((t) => 0.5 + cos(t))]),
  // 장미곡선
  'polar-rose-cos2': plot('r = a cos 2θ', [full((t) => cos(2 * t))]),
  'polar-rose-cos3': plot('r = a cos 3θ', [full((t) => cos(3 * t))]),
  'polar-rose-sin2': plot('r = a sin 2θ', [full((t) => sin(2 * t))]),
  'polar-rose-sin3': plot('r = a sin 3θ', [full((t) => sin(3 * t))]),
  // r = 1 ± cos nθ
  'polar-pcos2': plot('r = 1 + cos 2θ', [full((t) => 1 + cos(2 * t))]),
  'polar-mcos2': plot('r = 1 − cos 2θ', [full((t) => 1 - cos(2 * t))]),
  'polar-psin2': plot('r = 1 + sin 2θ', [full((t) => 1 + sin(2 * t))]),
  'polar-pcos3': plot('r = 1 + cos 3θ', [full((t) => 1 + cos(3 * t))]),
  'polar-mcos3': plot('r = 1 − cos 3θ', [full((t) => 1 - cos(3 * t))]),
  'polar-psin3': plot('r = 1 + sin 3θ', [full((t) => 1 + sin(3 * t))]),
  // r = a + b cos nθ
  'polar-abcos2-pos': plot('r = a + b cos 2θ, a > b', [full((t) => 2 + cos(2 * t))]),
  'polar-abcos2-neg': plot('r = a + b cos 2θ, a < b', [full((t) => 1 + 2 * cos(2 * t))]),
  'polar-abcos3-pos': plot('r = a + b cos 3θ, a > b', [full((t) => 2 + cos(3 * t))]),
  'polar-abcos3-neg': plot('r = a + b cos 3θ, a < b', [full((t) => 1 + 2 * cos(3 * t))]),
  // r² 꼴 (파랑 = +√, 빨강 = −√)
  // 연주형은 +갈래만으로 이미 전체가 그려지고 −갈래가 정확히 겹친다 → 한 색으로
  'polar-lemniscate-cos': plot('r² = a² cos 2θ', [full((t) => cos(2 * t), { sq: true, negCls: 'c-acc' })]),
  'polar-lemniscate-sin': plot('r² = a² sin 2θ', [full((t) => sin(2 * t), { sq: true, negCls: 'c-acc' })]),
  'polar-sq-cos1': plot('r² = a² cos θ', [full((t) => cos(t), { sq: true })]),
  'polar-sq-cos3': plot('r² = a² cos 3θ', [full((t) => cos(3 * t), { sq: true })]),
  'polar-sq-1pcos': plot('r² = 1 + cos θ', [full((t) => 1 + cos(t), { sq: true })]),
  'polar-sq-1psin': plot('r² = 1 + sin θ', [full((t) => 1 + sin(t), { sq: true })]),
  // 나선
  'polar-spiral-arch': plot('r = θ', [{ f: (t) => t, t0: 0, t1: 10 * PI }], { steps: 4000 }),
  'polar-spiral-exp': plot('r = e^(−θ)', [{ f: (t) => exp(-t), t0: 0, t1: 4 * PI }]),
  // 직선과 tan
  'polar-sec': plot('r = sec θ', [full((t) => 1 / cos(t))], { box: [-1.2, 1.6, -1.2, 1.2] }),
  'polar-csc': plot('r = csc θ', [full((t) => 1 / sin(t))], { box: [-1.4, 1.4, -0.8, 1.6] }),
  'polar-tan': plot('r = tan θ', [full((t) => tan(t))], { box: [-1.6, 1.6, -2, 2], steps: 4000 }),
};
