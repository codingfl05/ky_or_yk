// 그림 그리기 도우미 (인라인 SVG). 색은 CSS 토큰을 따른다 (global.css의 .fig .c-*).
// figures.ts의 도우미와 같은 내용이고, physics-figures.ts가 쓴다.

export const r1 = (n: number) => Math.round(n * 10) / 10;
/** extra에 stroke-width가 없을 때만 기본 굵기를 넣는다 (속성 중복 방지) */
const sw = (extra: string, w = 1.5) => (/stroke-width|stroke="none"/.test(extra) ? '' : `stroke-width="${w}"`);
export const svg = (h: number, label: string, body: string) =>
  `<svg viewBox="0 0 320 ${h}" role="img" aria-label="${label}" fill="none" stroke-linecap="round" stroke-linejoin="round">${body}</svg>`;

export type Cls = 'c-text' | 'c-mut' | 'c-acc' | 'c-pos' | 'c-neg' | 'c-ok';

export function line(x1: number, y1: number, x2: number, y2: number, cls: Cls = 'c-text', extra = '') {
  return `<line x1="${r1(x1)}" y1="${r1(y1)}" x2="${r1(x2)}" y2="${r1(y2)}" class="${cls}" stroke="currentColor" ${sw(extra)} ${extra}/>`;
}
export const dash = 'stroke-dasharray="4 3"';

export function head(x: number, y: number, ang: number, cls: Cls, hs = 7) {
  const bx = x - hs * Math.cos(ang);
  const by = y - hs * Math.sin(ang);
  const px = hs * 0.5 * Math.sin(ang);
  const py = -hs * 0.5 * Math.cos(ang);
  return `<polygon points="${r1(x)},${r1(y)} ${r1(bx + px)},${r1(by + py)} ${r1(bx - px)},${r1(by - py)}" class="${cls}" fill="currentColor" stroke="none"/>`;
}
export function arrow(x1: number, y1: number, x2: number, y2: number, cls: Cls = 'c-text', w = 1.5) {
  const a = Math.atan2(y2 - y1, x2 - x1);
  return `<line x1="${r1(x1)}" y1="${r1(y1)}" x2="${r1(x2 - 5 * Math.cos(a))}" y2="${r1(y2 - 5 * Math.sin(a))}" class="${cls}" stroke="currentColor" stroke-width="${w}"/>${head(x2, y2, a, cls)}`;
}
export function text(x: number, y: number, s: string, cls: Cls = 'c-text', anchor: 'start' | 'middle' | 'end' = 'middle', size = 11) {
  // 배경색 테두리(halo)를 둘러 선·점 위에서도 글자가 읽히게 한다
  return `<text x="${x}" y="${y}" class="${cls}" fill="currentColor" stroke="var(--bg)" stroke-width="3" paint-order="stroke" font-size="${size}" text-anchor="${anchor}">${s}</text>`;
}
export const sub = (b: string, s: string) => `${b}<tspan dy="3" font-size="8">${s}</tspan><tspan dy="-3">&#8203;</tspan>`;
export function charge(x: number, y: number, sign: '+' | '−', r = 9) {
  const cls = sign === '+' ? 'c-pos' : 'c-neg';
  return `<circle cx="${x}" cy="${y}" r="${r}" class="${cls}" fill="currentColor" stroke="none"/><text x="${x}" y="${y + r * 0.42}" class="c-bg" fill="currentColor" stroke="none" font-size="${r * 1.5}" font-weight="700" text-anchor="middle">${sign}</text>`;
}
export const circle = (x: number, y: number, r: number, cls: Cls = 'c-text', extra = '') =>
  `<circle cx="${x}" cy="${y}" r="${r}" class="${cls}" stroke="currentColor" ${sw(extra)} ${extra}/>`;
export const ellipse = (x: number, y: number, rx: number, ry: number, cls: Cls = 'c-text', extra = '') =>
  `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" class="${cls}" stroke="currentColor" ${sw(extra)} ${extra}/>`;
export const dot = (x: number, y: number, cls: Cls = 'c-mut', r = 1.6) =>
  `<circle cx="${x}" cy="${y}" r="${r}" class="${cls}" fill="currentColor" stroke="none"/>`;
export function dots(x0: number, y0: number, x1: number, y1: number, step = 26) {
  let s = '';
  for (let y = y0; y <= y1; y += step) for (let x = x0; x <= x1; x += step) s += dot(x, y);
  return s;
}

// ------------------------------------------------------------------ 그림들

export const path = (d: string, cls: Cls = 'c-text', w = 1.5, extra = '') =>
  `<path d="${d}" class="${cls}" stroke="currentColor" ${sw(extra, w)} ${extra}/>`;
export const rect = (x: number, y: number, w: number, h: number, cls: Cls = 'c-text', extra = '') =>
  `<rect x="${r1(x)}" y="${r1(y)}" width="${r1(w)}" height="${r1(h)}" class="${cls}" stroke="currentColor" ${sw(extra)} ${extra}/>`;
/** 옅게 칠한 면 */
export const soft = 'fill="currentColor" fill-opacity="0.12"';
/** 지면으로 들어가는 방향 ⊗ */
export function into(x: number, y: number, cls: Cls = 'c-mut', r = 5) {
  const k = r * 0.6;
  return circle(x, y, r, cls, 'stroke-width="1"') + line(x - k, y - k, x + k, y + k, cls, 'stroke-width="1"') + line(x - k, y + k, x + k, y - k, cls, 'stroke-width="1"');
}
/** 지면에서 나오는 방향 ⊙ */
export function outOf(x: number, y: number, cls: Cls = 'c-mut', r = 5) {
  return circle(x, y, r, cls, 'stroke-width="1"') + dot(x, y, cls, 1.6);
}
/** 중심 (cx, cy), 반지름 r인 원호를 각 a0 → a1(도, 수학 방향: 반시계가 +)로 그리고 끝에 화살촉 */
export function arcArrow(cx: number, cy: number, r: number, a0: number, a1: number, cls: Cls = 'c-text', w = 1.5) {
  const rad = (a: number) => (a * Math.PI) / 180;
  const p = (a: number) => [cx + r * Math.cos(rad(a)), cy - r * Math.sin(rad(a))];
  const [x0, y0] = p(a0);
  const [x1, y1] = p(a1);
  const large = Math.abs(a1 - a0) > 180 ? 1 : 0;
  const sweep = a1 > a0 ? 0 : 1;
  // 끝점에서의 진행 방향 (화면 좌표)
  const dir = a1 > a0 ? 1 : -1;
  const ang = Math.atan2(-dir * Math.cos(rad(a1)), -dir * Math.sin(rad(a1)));
  return path(`M ${r1(x0)} ${r1(y0)} A ${r} ${r} 0 ${large} ${sweep} ${r1(x1)} ${r1(y1)}`, cls, w) + head(x1, y1, ang, cls);
}
/** y = f(x) 곡선 (화면 좌표로 바꾸는 함수 X, Y를 받는다) */
export function curve(f: (x: number) => number, x0: number, x1: number, X: (x: number) => number, Y: (y: number) => number, cls: Cls = 'c-acc', w = 1.8, extra = '') {
  let d = '';
  const n = 80;
  for (let i = 0; i <= n; i++) {
    const x = x0 + ((x1 - x0) * i) / n;
    d += `${i ? 'L' : 'M'}${r1(X(x))} ${r1(Y(f(x)))}`;
  }
  return path(d, cls, w, extra);
}
/** 그래프 축 (원점 ox, oy에서 오른쪽 w, 위로 h) */
export function axes(ox: number, oy: number, w: number, h: number, xl: string, yl: string) {
  return arrow(ox, oy, ox + w, oy, 'c-mut', 1.2) + arrow(ox, oy, ox, oy - h, 'c-mut', 1.2) + text(ox + w + 4, oy + 4, xl, 'c-mut', 'start', 10) + text(ox - 4, oy - h - 4, yl, 'c-mut', 'middle', 10);
}
