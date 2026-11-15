// 현대물리(상대성 이론, 양자, 원자, 핵) 공식 카드용 그림 (인라인 SVG).
// 카드 본문에서 "::fig 이름 | 캡션"으로 넣는다. 색 규칙은 physics-figures.ts와 같다.
import { r1, svg, line, dash, arrow, text, circle, dot, path, rect, soft, curve, axes, type Cls } from './fig-helpers';

const thin = `stroke-width="1" ${dash}`;
/** (x0, y0) → (x1, y1) 방향으로 나아가는 물결선 (광자) + 끝 화살촉 */
function wavy(x0: number, y0: number, x1: number, y1: number, waves: number, amp: number, cls: Cls) {
  const len = Math.hypot(x1 - x0, y1 - y0);
  const ux = (x1 - x0) / len, uy = (y1 - y0) / len;
  const body = len - 8;
  let d = '';
  const n = Math.round(waves * 16);
  for (let i = 0; i <= n; i++) {
    const s = (body * i) / n;
    const o = amp * Math.sin((2 * Math.PI * waves * i) / n);
    d += `${i ? 'L' : 'M'}${r1(x0 + ux * s - uy * o)} ${r1(y0 + uy * s + ux * o)}`;
  }
  return path(d, cls, 1.5) + arrow(x0 + ux * body, y0 + uy * body, x1, y1, cls, 1.5);
}

// ================================================================ 상대성 이론

function simultaneity() {
  const car = (y: number, x: number) => rect(x, y, 150, 26, 'c-text', 'fill="var(--surface-2)"');
  return svg(
    176,
    '정지한 B에게는 두 빛이 동시에 오지만, 오른쪽으로 움직이는 A는 앞쪽 빛을 먼저 만난다',
    text(20, 14, '① 빛이 나오는 순간 (B가 본 모습)', 'c-mut', 'start', 10) +
      car(22, 60) + dot(135, 35, 'c-text', 3) + text(146, 39, 'A', 'c-text', 'middle', 10) +
      arrow(218, 35, 244, 35, 'c-mut', 1.2) + text(250, 39, 'v', 'c-mut', 'start', 10) +
      dot(60, 62, 'c-acc', 4) + dot(210, 62, 'c-pos', 4) + text(60, 78, '빛 P', 'c-acc', 'middle', 9) + text(210, 78, '빛 Q', 'c-pos', 'middle', 9) +
      dot(135, 62, 'c-text', 3) + text(135, 78, 'B', 'c-text', 'middle', 10) +
      text(20, 100, '② 조금 뒤', 'c-mut', 'start', 10) +
      car(108, 96) + dot(171, 121, 'c-text', 3) + text(182, 125, 'A', 'c-text', 'middle', 10) +
      line(171, 124, 171, 152, 'c-mut', thin) +
      arrow(60, 148, 126, 148, 'c-acc', 1.6) + arrow(210, 148, 175, 148, 'c-pos', 1.6) +
      dot(135, 148, 'c-text', 3) + text(135, 164, 'B', 'c-text', 'middle', 10) +
      text(250, 166, 'Q 빛이 A에 먼저 닿음', 'c-pos', 'middle', 9),
  );
}

function lightClock() {
  const mirror = (x: number) => rect(x - 16, 30, 32, 6, 'c-mut', soft) + rect(x - 16, 106, 32, 8, 'c-text', 'fill="var(--surface-2)"');
  return svg(
    150,
    '빛 시계: 같이 움직이는 A에게 빛은 수직으로 2D, 밖의 B에게는 비스듬히 2L을 간다',
    text(60, 16, 'A (시계와 함께)', 'c-text', 'middle', 10) + mirror(60) +
      arrow(55, 106, 55, 38, 'c-pos', 1.6) + arrow(65, 36, 65, 104, 'c-pos', 1.6) +
      line(88, 36, 88, 106, 'c-mut', 'stroke-width="1"') + text(96, 75, 'D', 'c-mut', 'middle', 10) +
      text(60, 134, 'Δt₀ = 2D/c', 'c-text', 'middle', 10) +
      text(226, 16, 'B (밖에서 본 모습)', 'c-text', 'middle', 10) + mirror(166) + mirror(226) + mirror(286) +
      arrow(166, 106, 225, 37, 'c-pos', 1.6) + arrow(227, 37, 286, 105, 'c-pos', 1.6) +
      text(188, 66, 'L', 'c-pos', 'middle', 10) + text(266, 66, 'L', 'c-pos', 'middle', 10) +
      line(226, 38, 226, 104, 'c-mut', thin) + text(233, 86, 'D', 'c-mut', 'middle', 9) +
      arrow(170, 124, 282, 124, 'c-mut', 1.2) + text(226, 138, 'v Δt 만큼 이동,  Δt = 2L/c', 'c-text', 'middle', 10),
  );
}

function gammaCurve() {
  const ox = 40, oy = 128, w = 216, h = 100;
  const X = (b: number) => ox + b * w, Y = (g: number) => oy - ((g - 0) / 5) * h;
  const g = (b: number) => 1 / Math.sqrt(1 - b * b);
  const mark = (b: number, lab: string) =>
    line(X(b), oy, X(b), Y(g(b)), 'c-mut', thin) + dot(X(b), Y(g(b)), 'c-acc', 2.6) + text(X(b), oy + 13, String(b), 'c-mut', 'middle', 9) + text(X(b) - 4, Y(g(b)) - 6, lab, 'c-acc', 'end', 9);
  return svg(
    156,
    '로런츠 인자 γ는 느릴 때는 거의 1이고, 광속에 가까워지면 급격히 커진다',
    axes(ox, oy, w + 14, h + 8, 'β', 'γ') + text(ox + 60, oy + 26, 'β = v/c', 'c-mut', 'middle', 9) +
      curve(g, 0, 0.979, X, Y, 'c-acc', 2) +
      line(X(1), oy, X(1), oy - h - 4, 'c-pos', thin) + text(X(1), oy + 13, '1', 'c-pos', 'middle', 9) +
      line(ox, Y(1), X(1), Y(1), 'c-mut', thin) + text(ox - 5, Y(1) + 3, '1', 'c-mut', 'end', 9) +
      mark(0.6, 'γ = 1.25') + mark(0.8, 'γ = 1.67') + text(ox - 5, Y(5) + 3, '5', 'c-mut', 'end', 9),
  );
}

function lengthContraction() {
  const rod = (x: number, y: number, w: number, cls: Cls) => rect(x, y, w, 14, cls, soft);
  return svg(
    124,
    '함께 정지한 관찰자가 잰 길이가 고유 길이, 움직이는 쪽에서 잰 길이는 운동 방향으로만 짧아진다',
    text(160, 16, '막대와 함께 정지한 관찰자', 'c-mut', 'middle', 10) + rod(60, 24, 200, 'c-text') +
      line(60, 48, 260, 48, 'c-mut', 'stroke-width="1"') + text(160, 60, 'L₀ (고유 길이)', 'c-text', 'middle', 10) +
      text(160, 80, '막대가 v로 지나가는 것을 보는 관찰자', 'c-mut', 'middle', 10) + rod(100, 88, 120, 'c-acc') +
      arrow(226, 95, 258, 95, 'c-mut', 1.3) + text(264, 99, 'v', 'c-mut', 'start', 10) +
      text(160, 118, 'L = L₀/γ  (높이는 그대로)', 'c-acc', 'middle', 10),
  );
}

function energyTriangle() {
  const A = [56, 118], B = [226, 118], C = [226, 38];
  return svg(
    140,
    '에너지 삼각형: 밑변 mc², 높이 pc, 빗변 E. 빗변에서 mc²를 뺀 나머지가 운동 에너지 K',
    `<polygon points="${A} ${B} ${C}" class="c-acc" stroke="currentColor" stroke-width="1.6" ${soft}/>` +
      line(B[0] - 9, B[1], B[0] - 9, B[1] - 9, 'c-mut', 'stroke-width="1"') + line(B[0] - 9, B[1] - 9, B[0], B[1] - 9, 'c-mut', 'stroke-width="1"') +
      text(141, 133, 'mc² (정지 에너지)', 'c-text', 'middle', 10) + text(232, 82, 'pc', 'c-text', 'start', 11) +
      text(128, 68, 'E = γmc²', 'c-text', 'middle', 11) +
      path(`M 86 118 A 30 30 0 0 0 ${r1(56 + 30 * Math.cos(0.44))} ${r1(118 - 30 * Math.sin(0.44))}`, 'c-mut', 1) + text(96, 112, 'θ', 'c-mut', 'middle', 10) +
      text(276, 30, 'sin θ = β', 'c-mut', 'middle', 9) + text(276, 44, 'cos θ = 1/γ', 'c-mut', 'middle', 9),
  );
}

// ================================================================ 빛과 물질의 이중성

function photoelectricGraph() {
  const ox = 56, oy = 92;
  return svg(
    162,
    '광전자의 최대 운동 에너지 대 진동수: 기울기는 h, 가로축 절편은 문턱 진동수, 세로축 절편은 −Φ',
    arrow(ox, oy, 296, oy, 'c-mut', 1.2) + arrow(ox, 152, ox, 14, 'c-mut', 1.2) + text(298, oy + 14, 'f', 'c-mut', 'end', 10) + text(ox, 10, 'K_max', 'c-mut', 'middle', 10) +
      line(ox, 142, 136, oy, 'c-mut', thin) + line(136, oy, 256, 17, 'c-acc', 'stroke-width="2"') +
      dot(136, oy, 'c-acc', 2.8) + text(140, oy + 14, 'f₀ = Φ/h', 'c-acc', 'start', 10) +
      dot(ox, 142, 'c-pos', 2.8) + text(ox - 6, 146, '−Φ', 'c-pos', 'end', 10) +
      text(206, 70, '기울기 = h', 'c-text', 'start', 10) + text(96, 84, '전자 안 나옴', 'c-mut', 'middle', 9) +
      text(ox - 6, oy + 4, '0', 'c-mut', 'end', 9),
  );
}

function comptonScatter() {
  const ex = 160, ey = 78;
  const a = (40 * Math.PI) / 180, b = (32 * Math.PI) / 180;
  return svg(
    146,
    '콤프턴 산란: X선 광자가 정지한 전자와 당구공처럼 충돌해 파장이 길어진다',
    line(20, ey, 300, ey, 'c-mut', thin) +
      wavy(24, ey, ex - 10, ey, 6, 6, 'c-acc') + text(84, ey - 14, '입사 광자 λ', 'c-acc', 'middle', 10) +
      dot(ex, ey, 'c-text', 5) + text(ex - 4, ey + 20, '전자 (정지)', 'c-mut', 'middle', 9) +
      wavy(ex + 8 * Math.cos(a), ey - 8 * Math.sin(a), ex + 96 * Math.cos(a), ey - 96 * Math.sin(a), 3, 7, 'c-pos') +
      text(268, 46, '산란 광자 λ′ &gt; λ', 'c-pos', 'middle', 10) +
      arrow(ex + 8 * Math.cos(b), ey + 8 * Math.sin(b), ex + 96 * Math.cos(b), ey + 96 * Math.sin(b), 'c-text', 2) +
      text(262, 136, '튕겨 나간 전자', 'c-text', 'middle', 10) +
      path(`M ${ex + 34} ${ey} A 34 34 0 0 0 ${r1(ex + 34 * Math.cos(a))} ${r1(ey - 34 * Math.sin(a))}`, 'c-mut', 1) + text(ex + 44, ey - 10, 'φ', 'c-mut', 'middle', 10) +
      path(`M ${ex + 30} ${ey} A 30 30 0 0 1 ${r1(ex + 30 * Math.cos(b))} ${r1(ey + 30 * Math.sin(b))}`, 'c-mut', 1) + text(ex + 40, ey + 14, 'θ', 'c-mut', 'middle', 10),
  );
}

function blackbodyCurve() {
  const ox = 44, oy = 128, w = 240, h = 92;
  const B = (x: number) => 1 / (x ** 5 * (Math.exp(5 / x) - 1));
  const peak = B(1.007);
  const X = (x: number) => ox + (x / 6) * w, Y = (y: number) => oy - y * h;
  return svg(
    154,
    '흑체 복사 스펙트럼: 고전 이론은 짧은 파장에서 끝없이 커지지만, 플랑크 식은 봉우리를 만들고 내려온다',
    axes(ox, oy, w + 12, h + 22, '파장 λ', '세기') +
      curve((x) => B(x) / peak, 0.25, 6, X, Y, 'c-acc', 2) +
      curve((x) => 1 / (5 * x ** 4) / peak, 2.25, 6, X, Y, 'c-pos', 1.6, dash) +
      line(X(1.007), oy, X(1.007), Y(1), 'c-mut', thin) + text(X(1.007), oy + 13, 'λ_max', 'c-mut', 'middle', 9) +
      text(X(2.3) + 6, Y(1.2), '고전 이론 (발산)', 'c-pos', 'start', 10) + text(X(2.1), Y(0.5), '플랑크 (실험과 일치)', 'c-acc', 'start', 10),
  );
}

function wellStates() {
  const x0 = 76, x1 = 196, base = 156;
  const lv = (n: number) => base - 14 * n * n;
  let s = '';
  for (const n of [1, 2, 3]) {
    const y = lv(n);
    s += line(x0, y, x1, y, 'c-mut', thin) +
      curve((x) => Math.sin(n * Math.PI * x), 0, 1, (x) => x0 + x * (x1 - x0), (v) => y - v * 13, n === 1 ? 'c-acc' : n === 2 ? 'c-ok' : 'c-pos', 1.8) +
      text(x1 + 32, y + 4, ['', 'n = 1,  E₁', 'n = 2,  4E₁', 'n = 3,  9E₁'][n], 'c-text', 'start', 10);
  }
  return svg(
    178,
    '무한 퍼텐셜 우물: 벽에서 0이 되는 정상파만 허용되고, 에너지는 n²에 비례해 벌어진다',
    line(x0, 12, x0, base, 'c-text', 'stroke-width="2.2"') + line(x1, 12, x1, base, 'c-text', 'stroke-width="2.2"') + line(x0, base, x1, base, 'c-text', 'stroke-width="2.2"') +
      rect(x0 - 26, 12, 26, base - 12, 'c-mut', `${soft} stroke="none"`) + rect(x1, 12, 26, base - 12, 'c-mut', `${soft} stroke="none"`) +
      text(x0 - 34, 84, 'U = ∞', 'c-mut', 'end', 9) + text(x0, base + 14, '0', 'c-mut', 'middle', 10) + text(x1, base + 14, 'L', 'c-mut', 'middle', 10) + s,
  );
}

function tunnelBarrier() {
  const mid = 78, bx0 = 130, bx1 = 180, k = 0.3, lam = 30;
  const end = 22 * Math.exp(-(bx1 - bx0) / lam);
  const f = (x: number) => (x < bx0 ? 22 * Math.cos(k * (x - bx0)) : x < bx1 ? 22 * Math.exp(-(x - bx0) / lam) : end * Math.cos(k * (x - bx1)));
  return svg(
    154,
    '터널링: 장벽 안에서 파동함수가 지수적으로 줄고, 장벽을 지난 뒤에는 진폭만 작아진 같은 파장의 파동이 된다',
    line(16, 122, bx0, 122, 'c-text', 'stroke-width="2"') + rect(bx0, 34, bx1 - bx0, 88, 'c-text', `${soft} stroke-width="2"`) + line(bx1, 122, 304, 122, 'c-text', 'stroke-width="2"') +
      text(155, 28, 'U₀', 'c-text', 'middle', 10) + line(16, mid, 304, mid, 'c-mut', thin) + text(308, mid + 14, 'E', 'c-mut', 'end', 10) +
      curve(f, 20, 300, (x) => x, (y) => mid - y, 'c-acc', 2) +
      text(72, 116, '입사 + 반사', 'c-mut', 'middle', 9) + text(155, 116, '지수 감소', 'c-mut', 'middle', 9) + text(244, 116, '투과 (진폭만 감소)', 'c-mut', 'middle', 9) +
      arrow(bx0 + 2, 136, bx1 - 2, 136, 'c-mut', 1) + arrow(bx1 - 2, 136, bx0 + 2, 136, 'c-mut', 1) + text(155, 150, '폭 a', 'c-mut', 'middle', 9),
  );
}

function shoLevels() {
  const cx = 140, base = 150;
  const U = (dx: number) => base - (dx / 100) ** 2 * 128;
  let s = '';
  for (let n = 0; n < 4; n++) {
    const e = (n + 0.5) * 28;
    const hw = 100 * Math.sqrt(e / 128);
    s += line(cx - hw, base - e, cx + hw, base - e, n === 0 ? 'c-acc' : 'c-text', 'stroke-width="1.8"') +
      text(252, base - e + 4, ['n = 0,  ½ħω', 'n = 1,  (3/2)ħω', 'n = 2,  (5/2)ħω', 'n = 3,  (7/2)ħω'][n], n === 0 ? 'c-acc' : 'c-text', 'start', 9);
  }
  return svg(
    166,
    '양자 조화진동자: 에너지 준위 간격이 ħω로 일정하고, 바닥 상태 에너지도 0이 아니다',
    curve((dx) => (dx / 100) ** 2 * 128, -100, 100, (dx) => cx + dx, (v) => base - v, 'c-mut', 1.6) +
      line(cx - 110, base, cx + 110, base, 'c-mut', 'stroke-width="1"') + text(cx, base + 13, 'x = 0', 'c-mut', 'middle', 9) +
      text(cx - 92, 20, 'U = ½k′x²', 'c-mut', 'middle', 10) + s +
      arrow(cx, base - 44, cx, base - 68, 'c-pos', 1.2) + arrow(cx, base - 68, cx, base - 44, 'c-pos', 1.2) + text(cx + 6, base - 52, 'ħω', 'c-pos', 'start', 9) + `<!--${r1(U(0))}-->`,
  );
}

// ================================================================ 원자와 전자

function hydrogenLevels() {
  const Y = (n: number) => 28 + (1 / (n * n)) ** 0.6 * 150; // 위쪽 준위가 겹치지 않게 간격을 늘려 그림
  const lvl = (n: number, lab: string) => line(84, Y(n), 262, Y(n), 'c-text', 'stroke-width="1.6"') + text(78, Y(n) + 4, lab, 'c-text', 'end', 9);
  const down = (x: number, a: number, b: number, cls: Cls) => arrow(x, Y(a), x, Y(b) - 1, cls, 1.4);
  return svg(
    204,
    '수소 원자의 에너지 준위. n = 1로 떨어지면 라이먼(자외선), n = 2면 발머(가시광선), n = 3이면 파셴(적외선)',
    line(84, 28, 262, 28, 'c-mut', thin) + text(78, 26, 'n = ∞,  0', 'c-mut', 'end', 9) +
      lvl(1, 'n = 1,  −13.6 eV') + lvl(2, 'n = 2,  −3.4') + lvl(3, 'n = 3,  −1.51') + lvl(4, 'n = 4,  −0.85') +
      down(104, 2, 1, 'c-acc') + down(118, 3, 1, 'c-acc') + down(132, 4, 1, 'c-acc') + text(118, 196, '라이먼', 'c-acc', 'middle', 10) +
      down(176, 3, 2, 'c-ok') + down(190, 4, 2, 'c-ok') + text(198, Y(2) - 8, '발머', 'c-ok', 'start', 10) +
      down(232, 4, 3, 'c-pos') + text(238, Y(3) + 12, '파셴', 'c-pos', 'start', 10) +
      arrow(292, Y(1), 292, 30, 'c-mut', 1) + text(296, 106, '13.6', 'c-mut', 'middle', 8) + text(296, 116, 'eV', 'c-mut', 'middle', 8) + text(170, 14, '(준위 간격은 실제 비율이 아님)', 'c-mut', 'middle', 8),
  );
}

function radialProb() {
  const ox = 44, oy = 124, w = 240, h = 92;
  const X = (x: number) => ox + (x / 5) * w, Y = (y: number) => oy - (y / 0.6) * h;
  const rho = (x: number) => 4 * x * x * Math.exp(-2 * x);
  return svg(
    152,
    '수소 바닥 상태(1s)의 방사 확률 밀도: 보어 반지름 a₀에서 최대, 평균 거리는 1.5a₀',
    axes(ox, oy, w + 12, h + 12, 'r', 'ρ(r)') + curve(rho, 0, 5, X, Y, 'c-acc', 2) +
      line(X(1), oy, X(1), Y(rho(1)), 'c-pos', thin) + dot(X(1), Y(rho(1)), 'c-pos', 2.8) + text(X(1), oy + 13, 'a₀', 'c-pos', 'middle', 10) + text(X(1) + 8, Y(rho(1)) - 6, '최대', 'c-pos', 'start', 9) +
      line(X(1.5), oy, X(1.5), Y(rho(1.5)), 'c-mut', thin) + text(X(1.5) + 2, oy + 13, '1.5a₀', 'c-mut', 'start', 9) +
      text(X(3), Y(0.3), 'ρ = 4πr²|ψ|²', 'c-text', 'start', 10) + text(X(3), Y(0.3) + 14, '(r = 0에서는 0)', 'c-mut', 'start', 9),
  );
}

function lCone() {
  const cx = 120, cy = 92, k = 28, R = Math.sqrt(6) * k;
  let s = '';
  for (const m of [2, 1, 0, -1, -2]) {
    const z = m * k, x = Math.sqrt(R * R - z * z);
    s += line(cx, cy - z, cx + x, cy - z, 'c-mut', thin) + arrow(cx, cy, cx + x, cy - z, 'c-acc', 1.8) +
      text(cx - 8, cy - z + 4, m === 0 ? '0' : `${m > 0 ? '+' : '−'}${Math.abs(m) === 1 ? '' : 2}ħ`, 'c-text', 'end', 10);
  }
  return svg(
    184,
    'l = 2일 때 각운동량 벡터: 길이는 √6ħ로 같고, z성분만 −2ħ부터 +2ħ까지 ħ 간격으로 허용된다',
    arrow(cx, 176, cx, 8, 'c-mut', 1.2) + text(cx + 8, 14, 'z (자기장 방향)', 'c-mut', 'start', 9) +
      path(`M ${cx} ${r1(cy - R)} A ${r1(R)} ${r1(R)} 0 0 1 ${cx} ${r1(cy + R)}`, 'c-mut', 1, dash) + s +
      text(262, 60, 'l = 2', 'c-text', 'middle', 11) + text(262, 80, '|L| = √6 ħ', 'c-acc', 'middle', 10) + text(262, 98, 'L_z = m_l ħ', 'c-text', 'middle', 10) + text(262, 116, '(5가지 방향)', 'c-mut', 'middle', 9),
  );
}

function bandStructure() {
  const col = (x: number, name: string, cTop: number, cH: number, vTop: number, vH: number, note: string, metal = false) => {
    const w = 76;
    const cond = metal
      ? rect(x, cTop, w, cH, 'c-text', 'fill="none"') + rect(x, cTop + cH / 2, w, cH / 2, 'c-pos', `${soft} stroke="none"`) + line(x - 4, cTop + cH / 2, x + w + 4, cTop + cH / 2, 'c-pos', thin) + text(x + w / 2, cTop + cH / 2 - 5, 'E_F', 'c-pos', 'middle', 9)
      : rect(x, cTop, w, cH, 'c-acc', 'fill="none"') + text(x + w / 2, cTop + cH / 2 + 3, '전도 띠 (빈)', 'c-acc', 'middle', 8) +
        rect(x, vTop, w, vH, 'c-pos', soft) + text(x + w / 2, vTop + vH / 2 + 3, '원자가 띠 (참)', 'c-pos', 'middle', 8) +
        arrow(x + w + 8, vTop - 1, x + w + 8, cTop + cH + 1, 'c-mut', 1) + arrow(x + w + 8, cTop + cH + 1, x + w + 8, vTop - 1, 'c-mut', 1);
    return cond + text(x + w / 2, 138, name, 'c-text', 'middle', 11) + text(x + w / 2, 152, note, 'c-mut', 'middle', 9);
  };
  return svg(
    160,
    '띠 구조: 금속은 띠가 반만 차 있고, 반도체는 띠 간격이 작고, 절연체는 띠 간격이 크다',
    col(14, '금속', 46, 70, 0, 0, '띠가 덜 참', true) + col(116, '반도체', 34, 26, 84, 36, 'E_g 작음') + col(222, '절연체', 16, 24, 94, 30, 'E_g 큼'),
  );
}

function fermiDirac() {
  const ox = 46, oy = 116, w = 236, h = 84;
  const X = (e: number) => ox + (e / 10) * w, Y = (p: number) => oy - p * h;
  const ef = 5;
  return svg(
    146,
    '페르미-디락 분포: 0 K에서는 E_F에서 뚝 끊기는 계단, 온도가 오르면 E_F 근처만 완만해진다. E_F에서 확률은 항상 ½',
    axes(ox, oy, w + 14, h + 14, 'E', 'P(E)') +
      path(`M ${X(0)} ${Y(1)} L ${X(ef)} ${Y(1)} L ${X(ef)} ${Y(0)} L ${X(10)} ${Y(0)}`, 'c-mut', 1.5, dash) +
      curve((e) => 1 / (Math.exp((e - ef) / 0.55) + 1), 0, 10, X, Y, 'c-acc', 2) +
      dot(X(ef), Y(0.5), 'c-pos', 3) + line(ox, Y(0.5), X(ef), Y(0.5), 'c-mut', thin) + text(ox - 5, Y(0.5) + 3, '½', 'c-mut', 'end', 10) + text(ox - 5, Y(1) + 3, '1', 'c-mut', 'end', 10) +
      text(X(ef), oy + 13, 'E_F', 'c-pos', 'middle', 10) + text(X(2), Y(1) - 6, 'T = 0 (점선)', 'c-mut', 'middle', 9) + text(X(7.6), Y(0.3), 'T &gt; 0', 'c-acc', 'middle', 10),
  );
}

function diodeIv() {
  const ox = 170, oy = 112;
  const X = (v: number) => ox + v * 62, Y = (i: number) => oy - i * 14;
  return svg(
    146,
    '다이오드의 전류-전압: 순방향에서는 지수적으로 커지고, 역방향에서는 아주 작은 −I₀에 머문다',
    arrow(30, oy, 300, oy, 'c-mut', 1.2) + arrow(ox, 138, ox, 12, 'c-mut', 1.2) + text(300, oy + 14, 'V', 'c-mut', 'end', 10) + text(ox + 8, 16, 'I', 'c-mut', 'start', 10) +
      curve((v) => 0.25 * (Math.exp(v / 0.26) - 1), -2.2, 0.88, X, Y, 'c-acc', 2) +
      text(86, oy - 10, '역방향: I ≈ −I₀', 'c-mut', 'middle', 10) + text(244, 60, '순방향', 'c-acc', 'middle', 10) + text(244, 74, '(잘 흐름)', 'c-mut', 'middle', 9),
  );
}

// ================================================================ 핵물리

function decayCurve() {
  const ox = 46, oy = 124, w = 232, h = 92;
  const X = (t: number) => ox + (t / 4) * w, Y = (n: number) => oy - n * h;
  let s = '';
  [1, 2, 3].forEach((t, i) => {
    const n = 0.5 ** t;
    s += line(X(t), oy, X(t), Y(n), 'c-mut', thin) + line(ox, Y(n), X(t), Y(n), 'c-mut', thin) + dot(X(t), Y(n), 'c-pos', 2.6) +
      text(X(t), oy + 13, ['T', '2T', '3T'][i], 'c-mut', 'middle', 9) + text(ox - 5, Y(n) + 3, ['½', '¼', '⅛'][i], 'c-mut', 'end', 9);
  });
  return svg(
    152,
    '방사성 붕괴: 반감기 T가 지날 때마다 남은 핵의 수가 절반씩 줄어든다',
    axes(ox, oy, w + 14, h + 12, 't', 'N/N₀') + text(ox - 5, Y(1) + 3, '1', 'c-mut', 'end', 9) + s +
      curve((t) => 0.5 ** t, 0, 4, X, Y, 'c-acc', 2) + text(X(2.4), Y(0.62), 'N = N₀ e^(−λt)', 'c-text', 'start', 10) + text(X(2.4), Y(0.62) + 14, 'T = ln 2 / λ', 'c-mut', 'start', 9),
  );
}

export const modernFigures: Record<string, string> = {
  simultaneity: simultaneity(),
  'light-clock': lightClock(),
  'gamma-curve': gammaCurve(),
  'length-contraction': lengthContraction(),
  'energy-triangle': energyTriangle(),
  'photoelectric-graph': photoelectricGraph(),
  'compton-scatter': comptonScatter(),
  'blackbody-curve': blackbodyCurve(),
  'well-states': wellStates(),
  'tunnel-barrier': tunnelBarrier(),
  'sho-levels': shoLevels(),
  'hydrogen-levels': hydrogenLevels(),
  'radial-prob': radialProb(),
  'l-cone': lCone(),
  'band-structure': bandStructure(),
  'fermi-dirac': fermiDirac(),
  'diode-iv': diodeIv(),
  'decay-curve': decayCurve(),
};
