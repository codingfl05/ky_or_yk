// 물리 공식 카드용 그림 (인라인 SVG). 카드 본문에서 "::fig 이름 | 캡션"으로 넣는다.
// 색: c-text 본체, c-mut 보조선·설명, c-acc 강조(파랑), c-pos 빨강, c-ok 초록.
import { r1, svg, line, dash, arrow, head, text, charge, circle, ellipse, dot, path, rect, soft, into, outOf, arcArrow, curve, axes, type Cls } from './fig-helpers';

const rad = (d: number) => (d * Math.PI) / 180;
const poly = (pts: number[][], cls: Cls = 'c-text', extra = '') =>
  `<polygon points="${pts.map((p) => p.map(r1).join(',')).join(' ')}" class="${cls}" stroke="currentColor" stroke-width="1.5" ${extra}/>`;
const box = (x: number, y: number, w: number, h: number, label = '', cls: Cls = 'c-text') =>
  rect(x, y, w, h, cls, 'fill="var(--surface-2)"') + (label ? text(x + w / 2, y + h / 2 + 4, label, cls) : '');

// ================================================================ 전자기학

function fieldLines() {
  let s = '';
  for (let k = 0; k < 8; k++) {
    const a = rad(k * 45);
    const c = Math.cos(a), sn = Math.sin(a);
    s += arrow(85 + 14 * c, 62 + 14 * sn, 85 + 46 * c, 62 + 46 * sn, 'c-acc', 1.4);
    s += arrow(235 + 48 * c, 62 + 48 * sn, 235 + 16 * c, 62 + 16 * sn, 'c-acc', 1.4);
  }
  return svg(
    136,
    '양전하의 전기장은 밖으로 나가고 음전하의 전기장은 안으로 들어온다',
    s + charge(85, 62, '+') + charge(235, 62, '−') + text(85, 130, '양전하: 밖으로 나간다', 'c-mut', 'middle', 10) + text(235, 130, '음전하: 안으로 들어온다', 'c-mut', 'middle', 10),
  );
}

function rodDq() {
  return svg(
    112,
    '막대를 작은 조각 dq로 쪼개 각 조각을 점전하로 본다',
    line(40, 70, 200, 70, 'c-text', 'stroke-width="5"') +
      line(112, 70, 128, 70, 'c-pos', 'stroke-width="7"') +
      text(120, 56, 'dq = λ dx', 'c-pos') +
      line(40, 84, 40, 92, 'c-mut') + line(120, 84, 120, 92, 'c-mut') + line(40, 88, 120, 88, 'c-mut', 'stroke-width="1"') +
      text(80, 102, 'x', 'c-mut') +
      line(128, 70, 268, 70, 'c-mut', `stroke-width="1" ${dash}`) +
      text(196, 62, 'r (조각에서 P까지)', 'c-mut', 'middle', 10) +
      dot(270, 70, 'c-text', 3) + text(270, 58, 'P') +
      arrow(274, 70, 308, 70, 'c-acc', 1.8) + text(292, 88, 'dE', 'c-acc') +
      text(160, 20, '조각 하나 = 점전하 → dE = k dq / r²,  전부 더하기 = 적분', 'c-mut', 'middle', 10),
  );
}

function arcCancel() {
  const cx = 160, cy = 120, R = 86;
  const p = (a: number) => [cx + R * Math.cos(rad(a)), cy - R * Math.sin(rad(a))];
  const [x0, y0] = p(30), [x1, y1] = p(150);
  const [ax, ay] = p(60), [bx, by] = p(120);
  const l = 44;
  // 조각에서 멀어지는 방향 (양전하)
  const d1 = [-(Math.cos(rad(60))), Math.sin(rad(60))];
  const d2 = [-(Math.cos(rad(120))), Math.sin(rad(120))];
  return svg(
    176,
    '원호의 대칭인 두 조각이 중심에 만드는 전기장: 옆 성분은 지워지고 이등분선 성분만 남는다',
    path(`M ${r1(x0)} ${r1(y0)} A ${R} ${R} 0 0 0 ${r1(x1)} ${r1(y1)}`, 'c-text', 2.5) +
      line(cx, 20, cx, 172, 'c-mut', `stroke-width="1" ${dash}`) +
      text(cx + 4, 28, '이등분선', 'c-mut', 'start', 10) +
      dot(ax, ay, 'c-pos', 4) + dot(bx, by, 'c-pos', 4) +
      text(ax + 8, ay - 4, 'dq', 'c-pos', 'start') + text(bx - 8, by - 4, 'dq', 'c-pos', 'end') +
      line(ax, ay, cx, cy, 'c-mut', `stroke-width="1" ${dash}`) + line(bx, by, cx, cy, 'c-mut', `stroke-width="1" ${dash}`) +
      arrow(cx, cy, cx + d1[0] * l, cy + d1[1] * l, 'c-mut', 1.5) +
      arrow(cx, cy, cx + d2[0] * l, cy + d2[1] * l, 'c-mut', 1.5) +
      arrow(cx, cy, cx, cy + 2 * l * Math.sin(rad(60)) * 0.62, 'c-acc', 2.2) +
      dot(cx, cy, 'c-text', 3) +
      text(cx + 30, cy + 46, '남는 성분', 'c-acc', 'start', 10) +
      text(cx - 30, cy + 30, 'dE', 'c-mut', 'end', 10) +
      text(250, 150, '옆 성분은 서로 반대라 0', 'c-mut', 'middle', 10),
  );
}

function dipoleTorque() {
  let s = '';
  for (const [x, y] of [[30, 22], [30, 124], [130, 124], [230, 124]]) s += arrow(x, y, x + 60, y, 'c-mut', 1.2);
  const nx = 122, ny = 96, px = 198, py = 50;
  return svg(
    144,
    '균일한 전기장 속 쌍극자: 두 힘은 크기가 같고 반대라 알짜힘은 0이지만 돌림힘이 생긴다',
    s + text(96, 26, 'E (균일)', 'c-mut', 'start', 10) +
      line(nx, ny, px, py, 'c-text', 'stroke-width="2"') +
      arrow(px, py, px + 52, py, 'c-pos', 2) + text(px + 56, py + 4, '+qE', 'c-pos', 'start') +
      arrow(nx, ny, nx - 52, ny, 'c-acc', 2) + text(nx - 56, ny + 4, '−qE', 'c-acc', 'end') +
      charge(px, py, '+') + charge(nx, ny, '−') +
      arrow(150, 112, 181, 93, 'c-ok', 1.6) + text(170, 120, 'p (− → +)', 'c-ok', 'start', 10) +
      arcArrow(160, 73, 58, 80, 42, 'c-text', 1.4) + text(176, 14, '돌아가는 방향', 'c-text', 'start', 10),
  );
}

function fluxTilt() {
  const panel = (ox: number, tilt: number, label: string, sub: string) => {
    // 면을 옆에서 본 모습: 중심 (ox, 54), 길이 56. tilt = 법선이 전기장과 이루는 각
    const t = rad(tilt);
    const dx = 28 * Math.sin(t), dy = 28 * Math.cos(t);
    let s = '';
    for (const y of [34, 54, 74]) s += arrow(ox - 44, y, ox + 44, y, 'c-acc', 1.2);
    s += line(ox - dx, 54 - dy, ox + dx, 54 + dy, 'c-text', 'stroke-width="4"');
    if (tilt > 0 && tilt < 90) s += arrow(ox, 54, ox + 30 * Math.cos(t), 54 - 30 * Math.sin(t), 'c-pos', 1.4) + text(ox + 34 * Math.cos(t), 54 - 34 * Math.sin(t) - 2, 'n', 'c-pos', 'start', 10) + text(ox + 20, 50, 'θ', 'c-mut', 'start', 9);
    return s + text(ox, 100, label, 'c-text', 'middle', 11) + text(ox, 114, sub, 'c-mut', 'middle', 9);
  };
  return svg(
    120,
    '선속은 면을 수직으로 뚫고 지나가는 전기장의 양이다',
    panel(56, 0, 'Φ = EA', '면이 E에 수직: 최대') + panel(160, 50, 'Φ = EA cosθ', '기울면 줄어든다') + panel(264, 90, 'Φ = 0', '면이 E와 나란함'),
  );
}

function sphereFieldGraph() {
  const ox = 40, oy = 124, R = 90, pk = 84;
  const X = (r: number) => ox + r, Y = (e: number) => oy - e;
  return svg(
    150,
    '구 안팎의 장: 꽉 찬 구는 안에서 r에 비례, 껍질은 안에서 0, 밖은 둘 다 1/r²',
    axes(ox, oy, 250, 108, 'r', 'E') +
      line(ox + R, oy, ox + R, oy - pk, 'c-mut', `stroke-width="1" ${dash}`) + text(ox + R, oy + 14, 'R', 'c-mut') +
      line(ox, oy, ox + R, oy - pk, 'c-acc', 'stroke-width="2"') +
      line(ox, oy, ox + R, oy, 'c-pos', 'stroke-width="3"') +
      curve((r) => (pk * R * R) / (r * r), R, 240, X, Y, 'c-text', 2) +
      text(ox + 30, oy - 44, '꽉 찬 구', 'c-acc', 'middle', 10) + text(ox + 30, oy - 32, '(r에 비례)', 'c-acc', 'middle', 9) +
      text(ox + 46, oy - 6, '껍질·도체: 0', 'c-pos', 'middle', 10) +
      text(ox + 180, oy - 46, '밖: 점전하처럼 1/r²', 'c-text', 'middle', 10),
  );
}

function conductorCavity() {
  let s = '';
  for (let k = 0; k < 8; k++) {
    const a = rad(k * 45 + 22);
    s += text(110 + 34 * Math.cos(a), 78 + 34 * Math.sin(a) + 4, '−', 'c-acc', 'middle', 13);
  }
  for (let k = 0; k < 12; k++) {
    const a = rad(k * 30);
    s += text(160 + 118 * Math.cos(a), 78 + 62 * Math.sin(a) + 4, '+', 'c-pos', 'middle', 12);
  }
  return svg(
    158,
    '공동 안에 +q가 있으면 공동 벽에 −q가 유도되고 바깥 면에 +q가 나타난다',
    ellipse(160, 78, 108, 54, 'c-mut', soft) + circle(110, 78, 26, 'c-mut', 'fill="var(--bg)"') + s + charge(110, 78, '+', 8) +
      text(206, 74, '도체 속: E = 0', 'c-text', 'middle', 11) +
      text(206, 90, '(가우스 면 안 전하 합 = 0)', 'c-mut', 'middle', 9) +
      text(160, 154, '공동 벽 −q, 바깥 면 +q (중성 도체일 때)', 'c-mut', 'middle', 10),
  );
}

function parallelPlate() {
  let s = '';
  for (const y of [34, 54, 74, 94]) {
    s += arrow(112, y, 206, y, 'c-acc', 1.3);
    s += text(96, y + 4, '+', 'c-pos', 'middle', 13) + text(224, y + 4, '−', 'c-acc', 'middle', 13);
  }
  return svg(
    140,
    '평행판 축전기: 두 판 사이에 균일한 전기장이 생긴다',
    rect(100, 22, 6, 84, 'c-pos', 'fill="currentColor"') + rect(214, 22, 6, 84, 'c-acc', 'fill="currentColor"') + s +
      text(160, 30, 'E = σ/ε₀', 'c-acc', 'middle', 10) +
      line(106, 116, 214, 116, 'c-mut', 'stroke-width="1"') + line(106, 111, 106, 121, 'c-mut') + line(214, 111, 214, 121, 'c-mut') + text(160, 132, '간격 d,  V = Ed', 'c-mut', 'middle', 10) +
      text(60, 68, '+q', 'c-pos') + text(262, 68, '−q', 'c-acc') + text(60, 84, '넓이 A', 'c-mut', 'middle', 10),
  );
}

function dielectricPolar() {
  let s = '';
  for (const y of [40, 66, 92]) for (const x of [128, 160, 192]) {
    s += ellipse(x, y, 12, 7, 'c-mut', 'stroke-width="1"') + text(x - 6, y + 3.5, '−', 'c-acc', 'middle', 10) + text(x + 6, y + 3.5, '+', 'c-pos', 'middle', 10);
  }
  for (const y of [34, 56, 78, 100]) s += text(88, y + 4, '+', 'c-pos', 'middle', 13) + text(232, y + 4, '−', 'c-acc', 'middle', 13);
  return svg(
    150,
    '유전체 속 분자들이 쌍극자로 늘어서서 원래 전기장과 반대인 전기장을 만든다',
    rect(92, 22, 6, 90, 'c-pos', 'fill="currentColor"') + rect(222, 22, 6, 90, 'c-acc', 'fill="currentColor"') +
      rect(106, 26, 108, 82, 'c-mut', `${soft} stroke-width="1"`) + s +
      arrow(110, 124, 210, 124, 'c-text', 1.6) + text(160, 120, 'E₀ (원래 전기장)', 'c-text', 'middle', 9) +
      arrow(190, 140, 130, 140, 'c-ok', 1.6) + text(160, 136, "E′ (쌍극자가 만든 반대 전기장)", 'c-ok', 'middle', 9) +
      text(276, 68, 'E = E₀ − E′', 'c-text', 'middle', 10) + text(276, 82, '= E₀/κ', 'c-text', 'middle', 10),
  );
}

function driftCylinder() {
  let s = '';
  for (const [x, y] of [[150, 52], [176, 70], [202, 56], [162, 82], [214, 80]]) {
    s += circle(x, y, 5, 'c-acc', 'fill="var(--surface-2)"') + line(x - 2.5, y, x + 2.5, y, 'c-acc', 'stroke-width="1.2"') + arrow(x - 7, y, x - 22, y, 'c-acc', 1.2);
  }
  return svg(
    132,
    '시간 Δt 동안 단면을 지나는 전하는 길이 v_d Δt인 원기둥 안에 든 전하다',
    rect(50, 40, 220, 54, 'c-text', 'fill="none"') + ellipse(50, 67, 8, 27, 'c-text', 'fill="var(--bg)"') + ellipse(270, 67, 8, 27, 'c-text', 'fill="var(--surface-2)"') +
      rect(130, 40, 100, 54, 'c-mut', `${soft} stroke-width="1" ${dash}`) + s +
      line(130, 104, 230, 104, 'c-mut', 'stroke-width="1"') + line(130, 99, 130, 109, 'c-mut') + line(230, 99, 230, 109, 'c-mut') +
      text(180, 120, '길이 v_d Δt', 'c-mut', 'middle', 10) +
      arrow(120, 24, 200, 24, 'c-pos', 1.8) + text(210, 28, '전류 i (전자와 반대 방향)', 'c-pos', 'start', 10) +
      text(288, 70, 'A', 'c-text', 'start') + text(46, 30, '전자는 ←', 'c-acc', 'start', 10),
  );
}

function velocitySelector() {
  let s = '';
  for (const y of [52, 76, 100]) for (const x of [70, 120, 170, 220, 270]) s += into(x, y, 'c-mut', 4);
  for (const x of [50, 100, 150, 200, 250]) s += text(x + 12, 26, '+', 'c-pos', 'middle', 12) + text(x + 12, 134, '−', 'c-acc', 'middle', 12);
  return svg(
    160,
    '속도 선택기: 전기력과 자기력이 반대 방향이라 v = E/B인 입자만 직진한다',
    rect(40, 30, 250, 5, 'c-pos', 'fill="currentColor"') + rect(40, 118, 250, 5, 'c-acc', 'fill="currentColor"') + s +
      charge(96, 76, '+', 8) + arrow(106, 76, 158, 76, 'c-text', 2) + text(162, 72, 'v', 'c-text', 'start') +
      arrow(96, 86, 96, 114, 'c-pos', 2) + text(102, 110, 'qE', 'c-pos', 'start', 10) +
      arrow(96, 66, 96, 38, 'c-ok', 2) + text(102, 48, 'qvB', 'c-ok', 'start', 10) +
      text(300, 80, 'B ⊗', 'c-mut', 'start', 10) + text(300, 52, 'E ↓', 'c-mut', 'start', 10) +
      text(160, 154, 'qE = qvB 이면 알짜힘 0 → 직진', 'c-mut', 'middle', 10),
  );
}

function parallelWires() {
  const wire = (x: number, up: boolean) => line(x, 24, x, 116, 'c-text', 'stroke-width="3"') + (up ? head(x, 40, -Math.PI / 2, 'c-pos', 9) : head(x, 100, Math.PI / 2, 'c-pos', 9));
  return svg(
    150,
    '같은 방향 전류는 서로 당기고 반대 방향 전류는 서로 민다',
    wire(52, true) + wire(112, true) + text(44, 20, 'i', 'c-pos', 'end') + text(120, 20, 'i', 'c-pos', 'start') +
      into(84, 70, 'c-mut', 5) + text(84, 90, 'B', 'c-mut', 'middle', 9) +
      arrow(56, 70, 74, 70, 'c-acc', 2) + arrow(108, 70, 94, 70, 'c-acc', 2) +
      text(82, 136, '같은 방향: 당긴다', 'c-text', 'middle', 11) +
      wire(208, true) + wire(268, false) + text(200, 20, 'i', 'c-pos', 'end') + text(276, 20, 'i', 'c-pos', 'start') +
      into(240, 70, 'c-mut', 5) + text(240, 90, 'B', 'c-mut', 'middle', 9) +
      arrow(204, 70, 184, 70, 'c-acc', 2) + arrow(272, 70, 292, 70, 'c-acc', 2) +
      text(238, 136, '반대 방향: 민다', 'c-text', 'middle', 11) +
      text(160, 148, '왼쪽 도선이 만든 자기장 B 속에서 오른쪽 도선이 힘을 받는다', 'c-mut', 'middle', 9),
  );
}

function loopDipole() {
  let s = '';
  for (const [x, y] of [[226, 30], [20, 96], [226, 96], [20, 160]]) s += arrow(x, y, x + 60, y, 'c-mut', 1.2);
  const cx = 150, cy = 96, hx = 24, hy = 40; // 고리를 옆에서 본 선분: 위 끝 (cx - hx, cy - hy), 아래 끝 (cx + hx, cy + hy)
  const tx = cx - hx, ty = cy - hy, bx = cx + hx, by = cy + hy;
  // 법선(자기 모멘트): 오른쪽 위
  const nl = 62, nx = (hy / Math.hypot(hx, hy)) * nl, ny = -(hx / Math.hypot(hx, hy)) * nl;
  return svg(
    196,
    '자기장 속 전류 고리(옆에서 본 모습): 두 변이 받는 힘이 고리를 돌려 μ를 B 쪽으로 눕힌다',
    s + text(292, 34, 'B', 'c-mut', 'start') +
      line(tx, ty, bx, by, 'c-text', 'stroke-width="3"') +
      outOf(tx, ty, 'c-pos', 7) + into(bx, by, 'c-pos', 7) +
      text(tx - 12, ty + 4, 'i ⊙', 'c-pos', 'end', 10) + text(bx + 12, by + 4, 'i ⊗', 'c-pos', 'start', 10) +
      arrow(tx, ty - 9, tx, ty - 34, 'c-acc', 2) + text(tx + 6, ty - 28, 'F', 'c-acc', 'start') +
      arrow(bx, by + 9, bx, by + 34, 'c-acc', 2) + text(bx + 6, by + 32, 'F', 'c-acc', 'start') +
      arrow(cx, cy, cx + nx, cy + ny, 'c-ok', 2) + text(cx + nx + 6, cy + ny, 'μ (고리 면에 수직)', 'c-ok', 'start', 10) +
      line(cx, cy, cx + 60, cy, 'c-mut', `stroke-width="1" ${dash}`) + text(cx + 40, cy - 6, 'θ', 'c-mut', 'middle', 10) +
      text(190, 186, '돌림힘 τ = μB sinθ', 'c-mut', 'middle', 10),
  );
}

function ampereLoops() {
  const cx = 86, cy = 80, R = 34;
  const ox = 184, oy = 130, Rg = 46, pk = 70;
  return svg(
    160,
    '굵은 도선 안팎에 잡은 앙페르 고리와 자기장 그래프',
    circle(cx, cy, R, 'c-text', soft) + outOf(cx, cy, 'c-pos', 5) + text(cx, cy + 18, '전류 i', 'c-pos', 'middle', 9) +
      circle(cx, cy, 20, 'c-acc', `stroke-width="1.2" ${dash} fill="none"`) + circle(cx, cy, 62, 'c-acc', `stroke-width="1.2" ${dash} fill="none"`) +
      head(cx, cy - 62, Math.PI, 'c-acc') + head(cx, cy - 20, Math.PI, 'c-acc', 6) +
      text(cx + 46, cy - 50, 'B', 'c-acc', 'start') +
      text(cx, 156, '안쪽 고리: 전류의 일부만 감싼다', 'c-mut', 'middle', 9) +
      axes(ox, oy, 118, 100, 'r', 'B') +
      line(ox, oy, ox + Rg, oy - pk, 'c-acc', 'stroke-width="2"') +
      curve((r) => (pk * Rg) / r, Rg, 112, (r) => ox + r, (b) => oy - b, 'c-acc', 2) +
      line(ox + Rg, oy, ox + Rg, oy - pk, 'c-mut', `stroke-width="1" ${dash}`) + text(ox + Rg, oy + 14, 'R', 'c-mut') +
      text(ox + 18, oy - 50, 'r에 비례', 'c-mut', 'middle', 9) + text(ox + 90, oy - 44, '1/r', 'c-mut', 'middle', 9),
  );
}

function lenzMagnet() {
  let s = '';
  for (const y of [58, 80, 102]) s += arrow(150, y, 196, y, 'c-mut', 1.2);
  return svg(
    160,
    '자석의 N극이 다가오면 코일은 자석 쪽 면을 N극으로 만들어 밀어낸다',
    rect(30, 62, 44, 36, 'c-acc', 'fill="var(--surface-2)"') + rect(74, 62, 44, 36, 'c-pos', 'fill="var(--surface-2)"') + text(52, 84, 'S', 'c-acc') + text(96, 84, 'N', 'c-pos') +
      arrow(60, 46, 104, 46, 'c-text', 1.8) + text(82, 38, '다가옴', 'c-text', 'middle', 10) + s +
      text(172, 48, '자석의 B (늘어남)', 'c-mut', 'middle', 9) +
      ellipse(236, 80, 16, 46, 'c-text', 'stroke-width="3" fill="none"') +
      arrow(300, 80, 258, 80, 'c-ok', 2.2) + text(282, 70, '유도 B', 'c-ok', 'middle', 10) +
      text(214, 128, 'N', 'c-pos', 'middle', 11) + text(214, 140, '(자석 쪽 면)', 'c-mut', 'middle', 8) +
      text(160, 156, '늘어나는 선속을 막으려고 반대 방향 자기장을 만든다', 'c-mut', 'middle', 10),
  );
}

function inducedE() {
  const cx = 160, cy = 78;
  let s = '';
  for (const [x, y] of [[146, 64], [174, 64], [146, 92], [174, 92], [160, 78]]) s += into(x, y, 'c-mut', 4);
  let rings = '';
  for (const R of [40, 62]) {
    rings += circle(cx, cy, R, 'c-acc', `stroke-width="1.4" ${dash} fill="none"`) + head(cx, cy - R, Math.PI, 'c-acc') + head(cx, cy + R, 0, 'c-acc');
  }
  return svg(
    160,
    '변하는 자기장 둘레에는 소용돌이 모양의 전기장이 생긴다',
    circle(cx, cy, 28, 'c-mut', soft) + s + rings +
      text(cx + 70, cy - 40, 'E', 'c-acc', 'start') +
      text(cx - 112, cy + 4, 'B ⊗ 증가', 'c-mut', 'middle', 10) +
      text(160, 156, '도선이 없어도 생긴다. 전하가 있으면 이 방향으로 밀린다', 'c-mut', 'middle', 10),
  );
}

// ================================================================ 회로

function seriesParallel() {
  const res = (x: number, y: number, label: string) => rect(x, y - 8, 40, 16, 'c-text', 'fill="var(--surface-2)"') + text(x + 20, y - 13, label, 'c-text', 'middle', 10);
  return svg(
    150,
    '직렬은 한 길이라 전류가 같고, 병렬은 양 끝이 같아 전압이 같다',
    line(20, 50, 50, 50) + res(50, 50, 'R₁') + line(90, 50, 110, 50) + res(110, 50, 'R₂') + line(150, 50, 170, 50) +
      arrow(24, 66, 60, 66, 'c-pos', 1.4) + text(96, 80, '같은 전류 i', 'c-pos', 'middle', 10) +
      text(96, 104, '직렬: 전압을 나눠 가진다', 'c-text', 'middle', 10) + text(96, 118, 'R = R₁ + R₂', 'c-mut', 'middle', 10) +
      line(196, 50, 216, 50) + line(216, 30, 216, 70) + line(216, 30, 232, 30) + res(232, 30, 'R₁') + line(272, 30, 288, 30) +
      line(216, 70, 232, 70) + res(232, 70, 'R₂') + line(272, 70, 288, 70) + line(288, 30, 288, 70) + line(288, 50, 308, 50) +
      dot(216, 50, 'c-acc', 3) + dot(288, 50, 'c-acc', 3) +
      text(252, 104, '병렬: 전류를 나눠 가진다', 'c-text', 'middle', 10) + text(252, 118, '1/R = 1/R₁ + 1/R₂', 'c-mut', 'middle', 10) +
      text(252, 92, '두 점 사이 전압이 같다', 'c-acc', 'middle', 10) +
      text(160, 142, '축전기는 반대: 병렬이 더하기, 직렬이 역수 합', 'c-mut', 'middle', 10),
  );
}

function rcCurves() {
  const g = (ox: number, title: string, f: (t: number) => number, mark: number, lab: string) => {
    const oy = 112, w = 112, h = 80;
    return axes(ox, oy, w, h + 6, 't', '') + text(ox + 56, 18, title, 'c-text', 'middle', 11) +
      curve(f, 0, 4, (t) => ox + (t / 4) * (w - 8), (y) => oy - y * h, 'c-acc', 2) +
      line(ox + (w - 8) / 4, oy, ox + (w - 8) / 4, oy - mark * h, 'c-mut', `stroke-width="1" ${dash}`) +
      line(ox, oy - mark * h, ox + (w - 8) / 4, oy - mark * h, 'c-mut', `stroke-width="1" ${dash}`) +
      text(ox + (w - 8) / 4, oy + 14, 'τ', 'c-mut') + text(ox - 4, oy - mark * h + 3, lab, 'c-mut', 'end', 9);
  };
  return svg(
    136,
    '충전: 전하는 차오르고 전류는 줄어든다. 시간 상수 τ에서 63%와 37%',
    g(38, '축전기 전하 q (충전)', (t) => 1 - Math.exp(-t), 1 - Math.exp(-1), '63%') + line(38, 32, 150, 32, 'c-mut', `stroke-width="1" ${dash}`) + text(150, 28, 'CV₀', 'c-mut', 'end', 9) +
      g(194, '전류 i', (t) => Math.exp(-t), Math.exp(-1), '37%') + text(200, 28, 'V₀/R', 'c-mut', 'start', 9),
  );
}

function acPhase() {
  const g = (ox: number, title: string, lead: number, note: string) => {
    const oy = 70, w = 124;
    const X = (t: number) => ox + (t / (2.5 * Math.PI)) * w, Y = (y: number) => oy - y * 30;
    return line(ox, oy, ox + w + 6, oy, 'c-mut', 'stroke-width="1"') + text(ox + 62, 18, title, 'c-text', 'middle', 11) +
      curve((t) => Math.sin(t), 0, 2.5 * Math.PI, X, Y, 'c-text', 1.8) +
      curve((t) => Math.sin(t + lead), 0, 2.5 * Math.PI, X, Y, 'c-pos', 1.8) +
      text(ox + 62, 122, note, 'c-mut', 'middle', 10);
  };
  return svg(
    150,
    '축전기에서는 전류가 전압보다 먼저, 코일에서는 전류가 전압보다 늦게 오르내린다',
    g(24, '축전기 (C)', Math.PI / 2, '전류가 90° 먼저') + g(174, '코일 (L)', -Math.PI / 2, '전류가 90° 늦게') +
      line(110, 140, 128, 140, 'c-text', 'stroke-width="2"') + text(132, 144, '전압 v', 'c-text', 'start', 10) +
      line(184, 140, 202, 140, 'c-pos', 'stroke-width="2"') + text(206, 144, '전류 i', 'c-pos', 'start', 10),
  );
}

function transformer() {
  let s = '';
  for (let k = 0; k < 4; k++) s += line(92, 48 + k * 14, 124, 54 + k * 14, 'c-pos', 'stroke-width="2.5"');
  for (let k = 0; k < 8; k++) s += line(196, 42 + k * 8, 228, 46 + k * 8, 'c-acc', 'stroke-width="2.5"');
  return svg(
    150,
    '변압기: 같은 철심의 선속 변화를 두 코일이 함께 받는다',
    rect(96, 26, 128, 98, 'c-mut', `${soft}`) + rect(120, 46, 80, 58, 'c-mut', 'fill="var(--bg)"') + s +
      arcArrow(160, 75, 54, 150, 30, 'c-ok', 1.4) + text(160, 16, '철심 속 자기선속 Φ (같이 변함)', 'c-ok', 'middle', 10) +
      text(52, 70, '1차', 'c-pos', 'middle', 11) + text(52, 86, 'N₁ 감음', 'c-pos', 'middle', 10) + text(52, 100, 'V₁', 'c-pos', 'middle', 10) +
      text(270, 70, '2차', 'c-acc', 'middle', 11) + text(270, 86, 'N₂ 감음', 'c-acc', 'middle', 10) + text(270, 100, 'V₂', 'c-acc', 'middle', 10) +
      text(160, 142, '한 바퀴마다 같은 기전력 → V₂/V₁ = N₂/N₁', 'c-mut', 'middle', 10),
  );
}

// ================================================================ 역학

function vtGraph() {
  const ox = 50, oy = 120, x1 = 230, y0 = 86, y1 = 36;
  return svg(
    146,
    '속도-시간 그래프: 기울기가 가속도, 넓이가 이동 거리',
    axes(ox, oy, 220, 104, 't', 'v') +
      poly([[ox, oy], [ox, y0], [x1, y1], [x1, oy]], 'c-acc', `${soft} stroke-width="1"`) +
      line(ox, y0, x1, y1, 'c-acc', 'stroke-width="2.4"') +
      text(ox - 6, y0 + 4, 'v₀', 'c-mut', 'end', 10) + text(x1 + 6, y1 + 4, 'v', 'c-mut', 'start', 10) + text(x1, oy + 14, 't', 'c-mut') +
      text(140, 104, '넓이 = 이동 거리', 'c-acc', 'middle', 11) + text(140, 118, '= ½(v₀ + v)t', 'c-acc', 'middle', 10) +
      text(128, 52, '기울기 = 가속도 a', 'c-text', 'middle', 10),
  );
}

function projectileSplit() {
  const ox = 30, oy = 124, W = 240, H = 84;
  const X = (u: number) => ox + u * W, Y = (u: number) => oy - 4 * H * u * (1 - u);
  const v = (u: number, lab: boolean) => {
    const x = X(u), y = Y(u);
    const vy = -34 * (1 - 2 * u);
    return arrow(x, y, x + 34, y, 'c-acc', 1.6) + (Math.abs(vy) > 1 ? arrow(x, y, x, y + vy, 'c-pos', 1.6) : '') + dot(x, y, 'c-text', 3) + (lab ? text(x + 38, y + 4, 'v_x', 'c-acc', 'start', 10) : '');
  };
  return svg(
    150,
    '포물선 운동: 수평 속도는 그대로, 연직 속도만 중력으로 변한다',
    line(ox - 10, oy, ox + W + 30, oy, 'c-mut', 'stroke-width="1"') +
      curve((u) => 4 * H * u * (1 - u), 0, 1, (u) => ox + u * W, (y) => oy - y, 'c-text', 1.6, dash) +
      v(0, false) + v(0.25, false) + v(0.5, true) + v(0.75, false) + v(1, false) +
      text(X(0) - 6, Y(0) - 30, 'v_y', 'c-pos', 'end', 10) +
      text(X(0.5), Y(0.5) - 10, '최고점: v_y = 0', 'c-text', 'middle', 10) +
      text(160, 144, '수평: 등속 (파랑 길이 일정)   연직: 자유 낙하 (빨강이 변함)', 'c-mut', 'middle', 10),
  );
}

function actionReaction() {
  return svg(
    162,
    '책이 받는 두 힘(평형)과 작용·반작용 쌍은 다르다',
    rect(40, 96, 100, 10, 'c-mut', soft) + box(66, 72, 48, 24, '') + text(76, 88, '책', 'c-text', 'middle', 10) +
      arrow(90, 84, 90, 132, 'c-text', 2) + text(96, 130, '중력 (지구 → 책)', 'c-text', 'start', 9) +
      arrow(90, 72, 90, 30, 'c-pos', 2) + text(96, 36, '수직항력 (책상 → 책)', 'c-pos', 'start', 9) +
      text(90, 150, '한 물체에 작용: 힘의 평형', 'c-text', 'middle', 10) +
      line(176, 14, 176, 152, 'c-mut', `stroke-width="1" ${dash}`) +
      rect(196, 96, 100, 10, 'c-mut', soft) + box(222, 72, 48, 24, '') + text(246, 88, '책', 'c-text', 'middle', 10) +
      arrow(236, 72, 236, 36, 'c-pos', 2) + arrow(256, 96, 256, 128, 'c-acc', 2) +
      text(246, 28, '책상 → 책', 'c-pos', 'middle', 9) + text(260, 140, '책 → 책상', 'c-acc', 'middle', 9) +
      text(246, 156, '서로 다른 물체에 작용: 작용·반작용', 'c-text', 'middle', 9),
  );
}

function atwood() {
  return svg(
    170,
    '애트우드 기계: 한 줄로 이어진 두 물체는 같은 크기의 가속도로 움직인다',
    line(150, 8, 150, 26, 'c-mut') + circle(150, 44, 20, 'c-text', 'fill="var(--surface-2)"') + dot(150, 44, 'c-text', 2.5) +
      line(130, 44, 130, 96) + line(170, 44, 170, 66) +
      box(110, 96, 40, 34, 'm₁') + box(154, 66, 32, 26, 'm₂') +
      arrow(130, 96, 130, 66, 'c-pos', 1.8) + text(124, 74, 'T', 'c-pos', 'end') +
      arrow(130, 130, 130, 160, 'c-text', 1.8) + text(124, 158, 'm₁g', 'c-text', 'end', 10) +
      arrow(170, 66, 170, 46, 'c-pos', 1.8) + text(176, 54, 'T', 'c-pos', 'start') +
      arrow(170, 92, 170, 114, 'c-text', 1.8) + text(176, 112, 'm₂g', 'c-text', 'start', 10) +
      arrow(92, 100, 92, 126, 'c-acc', 1.6) + text(86, 116, 'a', 'c-acc', 'end') +
      arrow(204, 92, 204, 66, 'c-acc', 1.6) + text(210, 82, 'a', 'c-acc', 'start') +
      text(262, 60, '전체로 보면', 'c-mut', 'middle', 10) + text(262, 76, '(m₁ − m₂)g', 'c-text', 'middle', 10) + text(262, 90, '= (m₁ + m₂)a', 'c-text', 'middle', 10),
  );
}

function workAngle() {
  const x = 80, y = 96;
  return svg(
    136,
    '일에는 힘 가운데 움직인 방향 성분 F cosθ만 들어간다',
    line(20, 116, 300, 116, 'c-mut', 'stroke-width="1"') + box(x - 26, y - 20, 52, 40, '') +
      arrow(x, y, x + 86, y - 50, 'c-pos', 2.2) + text(x + 92, y - 52, 'F', 'c-pos', 'start') +
      arrow(x, y, x + 86, y, 'c-acc', 2) + text(x + 60, y + 14, 'F cosθ (일을 하는 성분)', 'c-acc', 'start', 10) +
      line(x + 86, y, x + 86, y - 50, 'c-mut', `stroke-width="1" ${dash}`) +
      text(x + 34, y - 6, 'θ', 'c-mut', 'middle', 10) +
      arrow(200, 128, 290, 128, 'c-text', 1.6) + text(245, 124, '이동 거리 d', 'c-text', 'middle', 10) +
      text(160, 20, 'W = F d cosθ', 'c-text', 'middle', 12),
  );
}

function potentialCurve() {
  const ox = 30, oy = 130;
  const f = (x: number) => 46 + 34 * Math.cos((x / 250) * 2 * Math.PI + 0.4) - 0.06 * x;
  const X = (x: number) => ox + x, Y = (u: number) => oy - u;
  const xmin = 250 * ((Math.PI - 0.4) / (2 * Math.PI)); // 골
  const xmax = 250 * ((2 * Math.PI - 0.4) / (2 * Math.PI)); // 마루
  return svg(
    156,
    '퍼텐셜 에너지 그래프: 힘은 내리막 쪽으로, 골짜기는 안정한 평형점',
    axes(ox, oy, 262, 116, 'x', 'U') + curve(f, 0, 250, X, Y, 'c-text', 2) +
      dot(X(40), Y(f(40)), 'c-acc', 4) + arrow(X(40) + 6, Y(f(40)) + 6, X(40) + 34, Y(f(40)) + 24, 'c-acc', 1.8) + text(X(40) + 40, Y(f(40)) + 14, 'F (내리막 쪽)', 'c-acc', 'start', 10) +
      dot(X(xmin), Y(f(xmin)), 'c-ok', 4) + text(X(xmin), Y(f(xmin)) + 16, '안정 평형', 'c-ok', 'middle', 10) +
      dot(X(xmax), Y(f(xmax)), 'c-pos', 4) + text(X(xmax), Y(f(xmax)) - 8, '불안정 평형', 'c-pos', 'middle', 10) +
      text(160, 152, '기울기 = 0인 곳이 평형점,  F = −dU/dx', 'c-mut', 'middle', 10),
  );
}

function collisionTypes() {
  const ball = (x: number, y: number, cls: Cls, v: number, lab = '') => circle(x, y, 11, cls, 'fill="var(--surface-2)"') + (v ? arrow(x + (v > 0 ? 13 : -13), y, x + (v > 0 ? 13 : -13) + v, y, cls, 1.8) : '') + (lab ? text(x, y + 4, lab, cls, 'middle', 9) : '');
  return svg(
    168,
    '질량이 같은 두 공의 충돌: 탄성 충돌은 속도를 맞바꾸고, 붙으면 절반의 속도로 함께 간다',
    text(160, 14, '충돌 전', 'c-mut', 'middle', 10) + ball(110, 34, 'c-acc', 40) + ball(200, 34, 'c-pos', 0) + text(246, 38, '정지', 'c-mut', 'start', 9) + text(130, 24, 'v', 'c-acc', 'middle', 10) +
      line(20, 56, 300, 56, 'c-mut', `stroke-width="1" ${dash}`) +
      text(70, 76, '탄성 충돌', 'c-text', 'middle', 11) + ball(150, 86, 'c-acc', 0) + ball(210, 86, 'c-pos', 40) + text(110, 90, '멈춤', 'c-mut', 'middle', 9) + text(240, 76, 'v', 'c-pos', 'middle', 10) +
      text(70, 104, '운동 에너지 보존', 'c-mut', 'middle', 9) +
      text(70, 130, '완전 비탄성', 'c-text', 'middle', 11) + ball(168, 140, 'c-acc', 0) + ball(190, 140, 'c-pos', 20) + text(232, 130, 'v/2', 'c-text', 'middle', 10) +
      text(70, 158, '운동 에너지 절반 손실', 'c-mut', 'middle', 9) +
      text(256, 158, '운동량은 둘 다 보존', 'c-ok', 'middle', 9),
  );
}

// ================================================================ 회전

function torqueArm() {
  return svg(
    150,
    '돌림힘 = 힘 × 팔의 길이. 지렛대와 나란한 힘 성분은 돌리지 못한다',
    circle(50, 96, 7, 'c-text', 'fill="var(--surface-2)"') + text(50, 118, '회전축', 'c-mut', 'middle', 10) +
      line(50, 96, 230, 96, 'c-text', 'stroke-width="5"') +
      arrow(230, 96, 270, 44, 'c-pos', 2.2) + text(274, 42, 'F', 'c-pos', 'start') +
      arrow(230, 96, 230, 44, 'c-acc', 2) + text(224, 52, 'F sinφ', 'c-acc', 'end', 10) + text(184, 40, '(돌리는 성분)', 'c-acc', 'middle', 9) +
      arrow(230, 96, 270, 96, 'c-mut', 1.6) + text(274, 110, 'F cosφ (못 돌림)', 'c-mut', 'middle', 9) +
      text(242, 84, 'φ', 'c-mut', 'start', 10) +
      line(50, 128, 230, 128, 'c-mut', 'stroke-width="1"') + line(50, 123, 50, 133, 'c-mut') + line(230, 123, 230, 133, 'c-mut') + text(140, 144, 'r', 'c-mut') +
      text(120, 20, 'τ = r F sinφ', 'c-text', 'middle', 12),
  );
}

function verticalLoop() {
  const cx = 110, cy = 84, R = 56;
  return svg(
    168,
    '연직 원운동: 꼭대기에서는 중력과 장력이 함께 중심을 향한다',
    circle(cx, cy, R, 'c-mut', `stroke-width="1.2" ${dash} fill="none"`) + dot(cx, cy, 'c-mut', 2.5) +
      circle(cx, cy - R, 8, 'c-text', 'fill="var(--surface-2)"') +
      arrow(cx - 5, cy - R + 8, cx - 5, cy - R + 36, 'c-text', 1.8) + text(cx - 10, cy - R + 34, 'mg', 'c-text', 'end', 10) +
      arrow(cx + 5, cy - R + 8, cx + 5, cy - R + 30, 'c-pos', 1.8) + text(cx + 10, cy - R + 30, 'T', 'c-pos', 'start', 10) +
      circle(cx, cy + R, 8, 'c-text', 'fill="var(--surface-2)"') +
      arrow(cx, cy + R - 8, cx, cy + R - 42, 'c-pos', 1.8) + text(cx + 6, cy + R - 34, 'T', 'c-pos', 'start', 10) +
      arrow(cx, cy + R + 8, cx, cy + R + 24, 'c-text', 1.8) + text(cx + 6, cy + R + 22, 'mg', 'c-text', 'start', 10) +
      text(238, 34, '꼭대기', 'c-text', 'middle', 11) + text(238, 50, 'mg + T = mv²/r', 'c-text', 'middle', 10) + text(238, 64, 'T = 0일 때 최소 속력', 'c-mut', 'middle', 9) + text(238, 78, 'v = √(gr)', 'c-acc', 'middle', 11) +
      text(238, 116, '바닥', 'c-text', 'middle', 11) + text(238, 132, 'T − mg = mv²/r', 'c-text', 'middle', 10) + text(238, 146, '장력이 가장 크다', 'c-mut', 'middle', 9),
  );
}

function inertiaShapes() {
  const item = (x: number, shape: string, name: string, coef: string) => shape + text(x, 96, name, 'c-text', 'middle', 10) + text(x, 112, coef, 'c-acc', 'middle', 11);
  return svg(
    134,
    '질량이 축에서 멀리 있을수록 관성모멘트가 크다',
    item(46, circle(46, 46, 26, 'c-text', 'stroke-width="5" fill="none"'), '고리', 'MR²') +
      item(122, circle(122, 46, 26, 'c-text', 'stroke-width="3" fill="none"') + ellipse(122, 46, 26, 9, 'c-mut', 'stroke-width="1" fill="none"'), '구 껍질', '⅔ MR²') +
      item(198, circle(198, 46, 26, 'c-text', soft), '원판', '½ MR²') +
      item(274, circle(274, 46, 26, 'c-text', 'fill="currentColor" fill-opacity="0.3"') + ellipse(274, 46, 26, 9, 'c-mut', 'stroke-width="1" fill="none"'), '속이 찬 구', '⅖ MR²') +
      text(160, 130, '← 돌리기 힘들다 (질량이 바깥에)        돌리기 쉽다 →', 'c-mut', 'middle', 10),
  );
}

function parallelAxisRod() {
  return svg(
    136,
    '평행축 정리: 질량 중심 축에서 d만큼 옮긴 축의 관성모멘트는 Md²만큼 커진다',
    line(60, 80, 260, 80, 'c-text', 'stroke-width="6"') +
      line(160, 30, 160, 116, 'c-acc', `stroke-width="1.6" ${dash}`) + text(160, 24, '질량 중심 축', 'c-acc', 'middle', 10) + text(160, 130, 'I_cm = ML²/12', 'c-acc', 'middle', 10) +
      line(60, 30, 60, 116, 'c-pos', `stroke-width="1.6" ${dash}`) + text(60, 24, '끝 축', 'c-pos', 'middle', 10) + text(64, 130, 'I = ML²/3', 'c-pos', 'middle', 10) +
      line(60, 96, 160, 96, 'c-mut', 'stroke-width="1"') + text(110, 110, 'd = L/2', 'c-mut', 'middle', 10) +
      text(250, 110, 'I = I_cm + Md²', 'c-text', 'middle', 11),
  );
}

// ================================================================ 진동과 파동

function waveSnapshot() {
  const ox = 30, oy = 76, A = 34, lam = 110;
  return svg(
    150,
    '어느 한 순간에 찍은 파동의 모습: 파장과 진폭',
    line(ox - 6, oy, 300, oy, 'c-mut', 'stroke-width="1"') +
      curve((x) => A * Math.sin((2 * Math.PI * x) / lam), 0, 258, (x) => ox + x, (y) => oy - y, 'c-text', 2) +
      line(ox + lam / 4, oy - A - 14, ox + lam / 4 + lam, oy - A - 14, 'c-acc', 'stroke-width="1.2"') + line(ox + lam / 4, oy - A - 19, ox + lam / 4, oy - A - 4, 'c-acc', 'stroke-width="1"') + line(ox + lam / 4 + lam, oy - A - 19, ox + lam / 4 + lam, oy - A - 4, 'c-acc', 'stroke-width="1"') +
      text(ox + lam / 4 + lam / 2, oy - A - 20, '파장 λ (마루에서 마루)', 'c-acc', 'middle', 10) +
      line(ox + (3 * lam) / 4, oy, ox + (3 * lam) / 4, oy + A, 'c-pos', 'stroke-width="1.4"') + text(ox + (3 * lam) / 4 - 6, oy + A / 2 + 6, '진폭', 'c-pos', 'end', 10) +
      arrow(206, 128, 262, 128, 'c-ok', 1.8) + text(200, 132, '모양이 진행 (속력 v = fλ)', 'c-ok', 'end', 10) +
      arrow(ox + lam, oy + 8, ox + lam, oy + 26, 'c-mut', 1.2) + arrow(ox + lam, oy - 8, ox + lam, oy - 26, 'c-mut', 1.2) + text(ox + lam + 8, oy + 40, '매질은 제자리에서 위아래로만', 'c-mut', 'start', 9),
  );
}

function interferencePaths() {
  const s1 = [50, 46], s2 = [50, 110], p = [262, 62];
  return svg(
    150,
    '두 파원에서 온 파동은 경로차만큼 위상이 어긋난다',
    dot(s1[0], s1[1], 'c-acc', 5) + dot(s2[0], s2[1], 'c-acc', 5) + text(36, 50, 'S₁', 'c-acc', 'end') + text(36, 114, 'S₂', 'c-acc', 'end') +
      line(s1[0], s1[1], p[0], p[1], 'c-text') + line(s2[0], s2[1], p[0], p[1], 'c-text') +
      dot(p[0], p[1], 'c-pos', 5) + text(p[0] + 10, p[1] + 4, 'P', 'c-pos', 'start') +
      text(150, 44, 'L₁', 'c-text') + text(150, 104, 'L₂', 'c-text') +
      text(160, 132, '경로차 ΔL = L₂ − L₁', 'c-text', 'middle', 11) +
      text(160, 146, 'λ의 정수배 → 보강,   반파장이 남으면 → 상쇄', 'c-mut', 'middle', 10),
  );
}

function dopplerFronts() {
  let s = '';
  const xs = [152, 143, 134, 125];
  const rs = [10, 22, 34, 46];
  for (let k = 0; k < 4; k++) s += circle(xs[k], 72, rs[k], 'c-mut', 'stroke-width="1.2" fill="none"');
  return svg(
    150,
    '움직이는 음원: 앞쪽은 파면이 촘촘해지고 뒤쪽은 성겨진다',
    s + dot(162, 72, 'c-pos', 5) + arrow(168, 72, 200, 72, 'c-pos', 2) + text(184, 62, '음원', 'c-pos', 'middle', 10) +
      text(262, 60, '앞: 파장 짧음', 'c-text', 'middle', 10) + text(262, 76, '→ 높게 들림', 'c-acc', 'middle', 10) +
      text(26, 60, '뒤: 파장 김', 'c-text', 'start', 10) + text(26, 76, '→ 낮게 들림', 'c-acc', 'start', 10) +
      text(160, 146, '소리의 속력은 그대로이고 파면 간격(파장)이 달라진다', 'c-mut', 'middle', 10),
  );
}

function pendulumForces() {
  const px = 150, py = 14, L = 100, th = rad(28);
  const bx = px + L * Math.sin(th), by = py + L * Math.cos(th);
  const g = 46;
  return svg(
    168,
    '단진자: 중력의 접선 성분 mg sinθ가 추를 가운데로 되돌린다',
    line(100, py, 200, py, 'c-mut', 'stroke-width="3"') + line(px, py, px, py + L + 10, 'c-mut', `stroke-width="1" ${dash}`) +
      line(px, py, bx, by) + circle(bx, by, 9, 'c-text', 'fill="var(--surface-2)"') +
      text(px + 12, py + 36, 'θ', 'c-mut', 'start', 10) + text((px + bx) / 2 + 10, (py + by) / 2 - 4, 'L', 'c-text', 'start', 10) +
      arrow(bx, by, bx, by + g, 'c-text', 2) + text(bx + 6, by + g + 2, 'mg', 'c-text', 'start', 10) +
      arrow(bx, by, bx - g * Math.sin(th) * Math.cos(th), by + g * Math.sin(th) * Math.sin(th), 'c-acc', 2) +
      text(bx - g * Math.sin(th) * Math.cos(th) - 6, by + g * Math.sin(th) * Math.sin(th) + 14, 'mg sinθ (복원력)', 'c-acc', 'middle', 10) +
      arrow(bx, by, bx - 34 * Math.sin(th), by - 34 * Math.cos(th), 'c-pos', 1.8) + text(bx - 34 * Math.sin(th) + 8, by - 34 * Math.cos(th) - 2, 'T', 'c-pos', 'start', 10) +
      text(160, 162, '각이 작으면 sinθ ≈ θ → 변위에 비례하는 복원력 → 단진동', 'c-mut', 'middle', 9),
  );
}

// ================================================================ 유체

function pressureDepth() {
  return svg(
    150,
    '깊이 h인 곳은 그 위에 쌓인 물기둥의 무게만큼 압력이 더 크다',
    path('M 60 24 L 60 124 L 200 124 L 200 24', 'c-text', 1.5) +
      rect(60, 40, 140, 84, 'c-acc', `${soft} stroke="none"`) + line(60, 40, 200, 40, 'c-acc', 'stroke-width="1.5"') +
      arrow(130, 16, 130, 38, 'c-mut', 1.6) + text(140, 24, 'P₀ (대기압)', 'c-mut', 'start', 10) +
      rect(112, 40, 36, 58, 'c-text', `fill="none" stroke-width="1" ${dash}`) + text(130, 72, '물기둥', 'c-text', 'middle', 9) +
      dot(130, 98, 'c-pos', 4) +
      line(214, 40, 214, 98, 'c-mut', 'stroke-width="1"') + line(209, 40, 219, 40, 'c-mut') + line(209, 98, 219, 98, 'c-mut') + text(224, 73, 'h', 'c-mut', 'start') +
      text(266, 60, 'P = P₀ + ρgh', 'c-text', 'middle', 11) + text(266, 78, '깊이만으로 결정', 'c-mut', 'middle', 9) +
      text(160, 144, '물기둥 무게 ρ(Ah)g ÷ 밑넓이 A = ρgh', 'c-mut', 'middle', 10),
  );
}

function pascalPress() {
  return svg(
    150,
    '유압기: 압력이 같으니 넓은 피스톤에서 큰 힘이 나온다',
    path('M 40 50 L 40 120 L 280 120 L 280 50', 'c-text', 1.5) + path('M 80 50 L 80 96 L 180 96 L 180 50', 'c-text', 1.5) +
      rect(41, 70, 38, 49, 'c-acc', `${soft} stroke="none"`) + rect(41, 97, 238, 22, 'c-acc', `${soft} stroke="none"`) + rect(181, 70, 98, 49, 'c-acc', `${soft} stroke="none"`) +
      rect(42, 62, 36, 8, 'c-text', 'fill="currentColor"') + rect(182, 62, 96, 8, 'c-text', 'fill="currentColor"') +
      arrow(60, 26, 60, 58, 'c-pos', 2) + text(60, 20, 'F₁ (작은 힘)', 'c-pos', 'middle', 10) +
      arrow(230, 58, 230, 14, 'c-ok', 2.6) + text(274, 30, 'F₂ (큰 힘)', 'c-ok', 'middle', 10) +
      text(60, 138, '넓이 A₁', 'c-mut', 'middle', 10) + text(230, 138, '넓이 A₂', 'c-mut', 'middle', 10) +
      text(146, 112, '같은 압력', 'c-acc', 'middle', 10) + text(146, 146, 'F₁/A₁ = F₂/A₂', 'c-text', 'middle', 11),
  );
}

function buoyancyForces() {
  let s = '';
  for (const x of [130, 150, 170]) s += arrow(x, 48, x, 60, 'c-mut', 1.2) + arrow(x, 122, x, 100, 'c-acc', 1.8);
  return svg(
    150,
    '부력: 아랫면이 더 깊어 위로 미는 압력이 윗면을 누르는 압력보다 크다',
    rect(40, 30, 220, 108, 'c-acc', `${soft} stroke="none"`) + line(40, 30, 260, 30, 'c-acc', 'stroke-width="1.5"') +
      box(120, 62, 60, 36, '물체') + s +
      text(196, 54, '윗면: 얕다 → 압력 작음', 'c-mut', 'start', 9) + text(196, 116, '아랫면: 깊다 → 압력 큼', 'c-acc', 'start', 9) +
      text(160, 148, '위아래 힘의 차 = 부력 = 잠긴 부피만큼의 유체 무게', 'c-mut', 'middle', 10),
  );
}

// ================================================================ 열역학

function pvWork() {
  const ox = 46, oy = 124;
  const f = (v: number) => 4200 / v;
  return svg(
    150,
    '압력-부피 그래프 아래 넓이가 기체가 한 일이다',
    axes(ox, oy, 230, 108, 'V', 'P') +
      path(`M ${ox + 60} ${oy} L ${ox + 60} ${r1(oy - f(60))} ` + Array.from({ length: 41 }, (_, i) => { const v = 60 + (130 * i) / 40; return `L ${r1(ox + v)} ${r1(oy - f(v))}`; }).join(' ') + ` L ${ox + 190} ${oy} Z`, 'c-acc', 1, soft) +
      curve(f, 60, 190, (v) => ox + v, (p) => oy - p, 'c-text', 2.2) +
      dot(ox + 60, oy - f(60), 'c-text', 3.5) + dot(ox + 190, oy - f(190), 'c-text', 3.5) +
      text(ox + 54, oy - f(60) - 6, '처음', 'c-text', 'end', 10) + text(ox + 196, oy - f(190) - 6, '나중', 'c-text', 'start', 10) +
      text(ox + 60, oy + 14, 'V_i', 'c-mut', 'middle', 10) + text(ox + 190, oy + 14, 'V_f', 'c-mut', 'middle', 10) +
      text(ox + 125, oy - 14, '넓이 = W = ∫P dV', 'c-acc', 'middle', 10) +
      text(232, 30, '팽창하면 W > 0', 'c-mut', 'middle', 10) + text(232, 44, '경로에 따라 넓이가 다르다', 'c-mut', 'middle', 9),
  );
}

function parallelRlc() {
  // 왼쪽: 병렬 회로, 오른쪽: 공통 전압 V를 기준으로 그린 전류 위상자
  const res = (x: number, y: number) => path(`M ${x} ${y} l 6 -6 l 8 12 l 8 -12 l 8 12 l 8 -12 l 6 6`, 'c-text', 1.4);
  const coil = (x: number, y: number) => path(`M ${x} ${y} ` + [0, 1, 2, 3].map((k) => `a 5 5 0 0 1 10 0`).join(' '), 'c-text', 1.4);
  const cap = (x: number, y: number) => line(x, y, x + 20, y) + line(x + 20, y - 9, x + 20, y + 9, 'c-text', 'stroke-width="2"') + line(x + 26, y - 9, x + 26, y + 9, 'c-text', 'stroke-width="2"') + line(x + 26, y, x + 46, y);
  const L0 = 24, R0 = 108;
  const circ =
    line(L0, 30, L0, 132) + line(R0, 30, R0, 132) +
    line(L0, 30, 44, 30) + res(44, 30) + line(88, 30, R0, 30) +
    line(L0, 62, 46, 62) + coil(46, 62) + line(86, 62, R0, 62) +
    line(L0, 94, 43, 94) + cap(43, 94) + line(89, 94, R0, 94) +
    line(L0, 132, 52, 132) + circle(66, 132, 12, 'c-pos', 'fill="var(--bg)"') + arrow(60, 132, 73, 132, 'c-pos', 1.4) + line(80, 132, R0, 132) +
    text(66, 156, '전류원 I (진폭 고정)', 'c-pos', 'middle', 9) +
    text(66, 12, '모두 같은 전압 V', 'c-acc', 'middle', 10) +
    text(14, 34, 'R', 'c-mut', 'middle', 9) + text(14, 66, 'L', 'c-mut', 'middle', 9) + text(14, 98, 'C', 'c-mut', 'middle', 9);
  const ox = 160, oy = 96;
  const ph =
    line(ox - 6, oy, 306, oy, 'c-mut', `stroke-width="1" ${dash}`) +
    arrow(ox, oy, 296, oy, 'c-acc', 1.4) + text(300, oy - 6, 'V', 'c-acc', 'end', 9) +
    arrow(ox, oy, 250, oy, 'c-text', 2.2) + text(206, oy + 16, 'I_R = V/R (같은 위상)', 'c-text', 'middle', 9) +
    arrow(ox, oy, ox, oy - 74, 'c-ok', 2) + text(ox + 6, oy - 66, 'I_C = V/X_C (90° 앞)', 'c-ok', 'start', 9) +
    arrow(ox, oy, ox, oy + 48, 'c-pos', 2) + text(ox + 6, oy + 46, 'I_L = V/X_L (90° 뒤)', 'c-pos', 'start', 9) +
    line(250, oy, 250, oy - 26, 'c-mut', `stroke-width="1" ${dash}`) +
    arrow(ox, oy, 250, oy - 26, 'c-text', 1.6) + text(254, oy - 26, 'I', 'c-text', 'start', 11) +
    text(ox - 6, oy - 30, 'I_C − I_L', 'c-mut', 'end', 9);
  return svg(
    168,
    '병렬 RLC: 전압이 같으니 전압을 기준으로 놓고, 세 전류를 위상자로 더한다',
    circ + ph + text(232, 162, 'I = √(I_R² + (I_C − I_L)²)', 'c-text', 'middle', 10),
  );
}

export const physicsFigures: Record<string, string> = {
  'field-lines': fieldLines(),
  'rod-dq': rodDq(),
  'arc-cancel': arcCancel(),
  'dipole-torque': dipoleTorque(),
  'flux-tilt': fluxTilt(),
  'sphere-field-graph': sphereFieldGraph(),
  'conductor-cavity': conductorCavity(),
  'parallel-plate': parallelPlate(),
  'dielectric-polar': dielectricPolar(),
  'drift-cylinder': driftCylinder(),
  'velocity-selector': velocitySelector(),
  'parallel-wires': parallelWires(),
  'loop-dipole': loopDipole(),
  'ampere-loops': ampereLoops(),
  'lenz-magnet': lenzMagnet(),
  'induced-e': inducedE(),
  'series-parallel': seriesParallel(),
  'rc-curves': rcCurves(),
  'ac-phase': acPhase(),
  transformer: transformer(),
  'vt-graph': vtGraph(),
  'projectile-split': projectileSplit(),
  'action-reaction': actionReaction(),
  atwood: atwood(),
  'work-angle': workAngle(),
  'potential-curve': potentialCurve(),
  'collision-types': collisionTypes(),
  'torque-arm': torqueArm(),
  'vertical-loop': verticalLoop(),
  'inertia-shapes': inertiaShapes(),
  'parallel-axis-rod': parallelAxisRod(),
  'wave-snapshot': waveSnapshot(),
  'interference-paths': interferencePaths(),
  'doppler-fronts': dopplerFronts(),
  'pendulum-forces': pendulumForces(),
  'pressure-depth': pressureDepth(),
  'pascal-press': pascalPress(),
  'buoyancy-forces': buoyancyForces(),
  'pv-work': pvWork(),
  'parallel-rlc': parallelRlc(),
};
