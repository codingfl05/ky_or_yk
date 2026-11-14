// 학습 레슨용 그림 (인라인 SVG). 색은 CSS 토큰을 따른다 (global.css의 .fig .c-*).
// 레슨 본문에서 "::fig 이름 | 캡션"으로 넣는다.

const r1 = (n: number) => Math.round(n * 10) / 10;
const svg = (h: number, label: string, body: string) =>
  `<svg viewBox="0 0 320 ${h}" role="img" aria-label="${label}" fill="none" stroke-linecap="round" stroke-linejoin="round">${body}</svg>`;

type Cls = 'c-text' | 'c-mut' | 'c-acc' | 'c-pos' | 'c-neg' | 'c-ok';

function line(x1: number, y1: number, x2: number, y2: number, cls: Cls = 'c-text', extra = '') {
  return `<line x1="${r1(x1)}" y1="${r1(y1)}" x2="${r1(x2)}" y2="${r1(y2)}" class="${cls}" stroke="currentColor" stroke-width="1.5" ${extra}/>`;
}
const dash = 'stroke-dasharray="4 3"';

function head(x: number, y: number, ang: number, cls: Cls, hs = 7) {
  const bx = x - hs * Math.cos(ang);
  const by = y - hs * Math.sin(ang);
  const px = hs * 0.5 * Math.sin(ang);
  const py = -hs * 0.5 * Math.cos(ang);
  return `<polygon points="${r1(x)},${r1(y)} ${r1(bx + px)},${r1(by + py)} ${r1(bx - px)},${r1(by - py)}" class="${cls}" fill="currentColor" stroke="none"/>`;
}
function arrow(x1: number, y1: number, x2: number, y2: number, cls: Cls = 'c-text', w = 1.5) {
  const a = Math.atan2(y2 - y1, x2 - x1);
  return `<line x1="${r1(x1)}" y1="${r1(y1)}" x2="${r1(x2 - 5 * Math.cos(a))}" y2="${r1(y2 - 5 * Math.sin(a))}" class="${cls}" stroke="currentColor" stroke-width="${w}"/>${head(x2, y2, a, cls)}`;
}
function text(x: number, y: number, s: string, cls: Cls = 'c-text', anchor: 'start' | 'middle' | 'end' = 'middle', size = 11) {
  // 배경색 테두리(halo)를 둘러 선·점 위에서도 글자가 읽히게 한다
  return `<text x="${x}" y="${y}" class="${cls}" fill="currentColor" stroke="var(--bg)" stroke-width="3" paint-order="stroke" font-size="${size}" text-anchor="${anchor}">${s}</text>`;
}
const sub = (b: string, s: string) => `${b}<tspan dy="3" font-size="8">${s}</tspan><tspan dy="-3">&#8203;</tspan>`;
function charge(x: number, y: number, sign: '+' | '−', r = 9) {
  const cls = sign === '+' ? 'c-pos' : 'c-neg';
  return `<circle cx="${x}" cy="${y}" r="${r}" class="${cls}" fill="currentColor" stroke="none"/><text x="${x}" y="${y + r * 0.42}" class="c-bg" fill="currentColor" stroke="none" font-size="${r * 1.5}" font-weight="700" text-anchor="middle">${sign}</text>`;
}
const circle = (x: number, y: number, r: number, cls: Cls = 'c-text', extra = '') =>
  `<circle cx="${x}" cy="${y}" r="${r}" class="${cls}" stroke="currentColor" stroke-width="1.5" ${extra}/>`;
const ellipse = (x: number, y: number, rx: number, ry: number, cls: Cls = 'c-text', extra = '') =>
  `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" class="${cls}" stroke="currentColor" stroke-width="1.5" ${extra}/>`;
const dot = (x: number, y: number, cls: Cls = 'c-mut', r = 1.6) =>
  `<circle cx="${x}" cy="${y}" r="${r}" class="${cls}" fill="currentColor" stroke="none"/>`;
function dots(x0: number, y0: number, x1: number, y1: number, step = 26) {
  let s = '';
  for (let y = y0; y <= y1; y += step) for (let x = x0; x <= x1; x += step) s += dot(x, y);
  return s;
}

// ------------------------------------------------------------------ 그림들

function coulomb() {
  return svg(
    118,
    '같은 부호는 밀고 다른 부호는 당긴다',
    text(160, 14, '같은 부호: 서로 민다', 'c-mut') +
      charge(120, 36, '+') +
      charge(200, 36, '+') +
      arrow(108, 36, 70, 36, 'c-acc') +
      arrow(212, 36, 250, 36, 'c-acc') +
      text(160, 72, '다른 부호: 서로 당긴다', 'c-mut') +
      charge(120, 94, '+') +
      charge(200, 94, '−') +
      arrow(132, 94, 156, 94, 'c-acc') +
      arrow(188, 94, 164, 94, 'c-acc'),
  );
}

function ringAxis() {
  const P = { x: 160, y: 72 };
  return svg(
    185,
    '고리 축 위에서 옆 성분은 상쇄되고 축 성분만 남는다',
    ellipse(160, 152, 92, 18, 'c-pos') +
      line(160, 152, 160, 14, 'c-mut', dash) +
      line(68, 152, P.x, P.y, 'c-mut', dash) +
      line(252, 152, P.x, P.y, 'c-mut', dash) +
      dot(68, 152, 'c-pos', 4) +
      dot(252, 152, 'c-pos', 4) +
      arrow(P.x, P.y, 189, 47, 'c-text') +
      arrow(P.x, P.y, 131, 47, 'c-text') +
      arrow(P.x, P.y, 160, 22, 'c-acc', 2.2) +
      dot(P.x, P.y, 'c-text', 2.5) +
      text(196, 44, 'dE', 'c-text', 'start') +
      text(124, 44, 'dE', 'c-text', 'end') +
      text(168, 20, '합: 축 방향만 남음', 'c-acc', 'start') +
      text(172, 80, 'P', 'c-text', 'start') +
      text(160, 180, '마주 보는 조각끼리 옆 성분 상쇄', 'c-mut'),
  );
}

function gaussBag() {
  let s = '';
  for (let k = 0; k < 8; k++) {
    const a = (k * Math.PI) / 4 + 0.2;
    s += arrow(82 + 13 * Math.cos(a), 70 + 13 * Math.sin(a), 82 + 66 * Math.cos(a), 70 + 60 * Math.sin(a), 'c-text');
  }
  return svg(
    150,
    '닫힌 면 안의 전하만 알짜 선속을 만든다',
    ellipse(82, 70, 50, 42, 'c-acc', dash) +
      s +
      charge(82, 70, '+') +
      text(82, 144, '안의 전하: 선속 ∝ q', 'c-mut') +
      ellipse(258, 70, 42, 42, 'c-acc', dash) +
      charge(180, 70, '+') +
      arrow(191, 70, 314, 70, 'c-text') +
      arrow(190, 65, 312, 34, 'c-text') +
      arrow(190, 75, 312, 106, 'c-text') +
      text(248, 144, '밖의 전하: 들어온 만큼 나감', 'c-mut'),
  );
}

function gaussSurfaces() {
  return svg(
    150,
    '대칭에 맞는 가우스 면: 구면, 원기둥, 납작한 원기둥',
    // 구
    circle(55, 68, 36, 'c-acc', dash) +
      charge(55, 68, '+', 7) +
      text(55, 142, '점·구 → 구면', 'c-mut') +
      // 직선
      line(160, 12, 160, 122, 'c-pos', 'stroke-width="3"') +
      ellipse(160, 36, 28, 8, 'c-acc', dash) +
      ellipse(160, 100, 28, 8, 'c-acc', dash) +
      line(132, 36, 132, 100, 'c-acc', dash) +
      line(188, 36, 188, 100, 'c-acc', dash) +
      text(160, 142, '직선 → 원기둥', 'c-mut') +
      // 평면
      `<polygon points="222,84 296,58 310,72 236,98" class="c-pos" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="1.5"/>` +
      ellipse(266, 42, 15, 5, 'c-acc', dash) +
      ellipse(266, 112, 15, 5, 'c-acc', dash) +
      line(251, 42, 251, 112, 'c-acc', dash) +
      line(281, 42, 281, 112, 'c-acc', dash) +
      text(266, 142, '평면 → 납작한 원기둥', 'c-mut'),
  );
}

function conductor() {
  const cx = 160, cy = 80, rx = 82, ry = 44;
  let s = '';
  for (let k = 0; k < 10; k++) {
    const t = (k * 2 * Math.PI) / 10 + 0.31;
    const x = cx + rx * Math.cos(t), y = cy + ry * Math.sin(t);
    let nx = Math.cos(t) / rx, ny = Math.sin(t) / ry;
    const n = Math.hypot(nx, ny);
    nx /= n; ny /= n;
    s += arrow(x + nx * 3, y + ny * 3, x + nx * 27, y + ny * 27, 'c-acc');
    s += text(r1(x - nx * 9), r1(y - ny * 9 + 4), '+', 'c-pos', 'middle', 13);
  }
  return svg(
    160,
    '도체 내부 전기장은 0이고 전하는 표면에만 있다',
    `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" class="c-text" fill="var(--surface-2)" stroke="currentColor" stroke-width="1.5"/>` +
      s +
      text(cx, cy - 2, '안쪽: E = 0', 'c-text', 'middle', 12) +
      text(cx, cy + 14, '전위는 어디나 같음', 'c-mut'),
  );
}

function potentialHill() {
  const f = (x: number) => 138 - 92 / (1 + ((x - 118) / 28) ** 2);
  let pts = '';
  for (let x = 16; x <= 304; x += 4) pts += `${x},${r1(f(x))} `;
  return svg(
    170,
    '전위는 높이. 양전하는 내리막으로, 음전하는 오르막으로 움직인다',
    `<polyline points="${pts}" class="c-text" stroke="currentColor" stroke-width="1.8"/>` +
      line(16, 140, 304, 140, 'c-mut') +
      charge(118, 154, '+', 8) +
      text(132, 158, '← 산을 만든 전하', 'c-mut', 'start', 10) +
      // 양전하 (공)
      dot(146, f(146) - 6, 'c-pos', 6) +
      arrow(156, 84, 190, 112, 'c-pos') +
      text(196, 100, '양전하: 내리막으로', 'c-pos', 'start') +
      // 음전하 (풍선)
      dot(70, f(70) - 6, 'c-neg', 6) +
      arrow(72, 100, 92, 74, 'c-neg') +
      text(10, 60, '음전하: 오르막으로', 'c-neg', 'start') +
      text(304, 26, '높이 = 전위 V', 'c-mut', 'end') +
      text(304, 60, '경사 = 전기장 E', 'c-mut', 'end'),
  );
}

function capacitorTank() {
  let s = '';
  for (const y of [44, 64, 84, 104]) {
    s += arrow(58, y, 104, y, 'c-acc');
    s += text(42, y + 4, '+', 'c-pos', 'middle', 13) + text(120, y + 4, '−', 'c-neg', 'middle', 13);
  }
  return svg(
    160,
    '축전기는 물탱크: 바닥 넓이가 전기용량, 물 높이가 전압, 물의 양이 전하',
    line(50, 30, 50, 118, 'c-text', 'stroke-width="3"') +
      line(112, 30, 112, 118, 'c-text', 'stroke-width="3"') +
      s +
      text(81, 24, 'E', 'c-acc') +
      text(81, 146, '축전기', 'c-mut') +
      // 탱크
      `<rect x="196" y="70" width="100" height="50" class="c-acc" fill="currentColor" fill-opacity="0.22" stroke="none"/>` +
      `<polyline points="196,28 196,120 296,120 296,28" class="c-text" stroke="currentColor" stroke-width="2"/>` +
      line(196, 70, 296, 70, 'c-acc') +
      arrow(184, 120, 184, 72, 'c-text') +
      text(178, 100, 'V', 'c-text', 'end', 12) +
      text(246, 100, '물의 양 = q', 'c-text') +
      text(246, 146, '바닥 넓이 = C', 'c-mut') +
      text(246, 50, '물 높이 = V', 'c-mut'),
  );
}

function potentialStairs() {
  return svg(
    172,
    '회로 한 바퀴: 전원에서 올라가고 저항에서 내려와 제자리로',
    line(28, 140, 304, 140, 'c-mut') +
      `<polyline points="28,140 64,140 64,40 136,40 136,92 222,92 222,140 304,140" class="c-acc" stroke="currentColor" stroke-width="2.4"/>` +
      text(70, 30, `전원: +ε`, 'c-text', 'start') +
      text(142, 70, `저항 ${sub('R', '1')}: −i${sub('R', '1')}`, 'c-text', 'start') +
      text(228, 120, `저항 ${sub('R', '2')}: −i${sub('R', '2')}`, 'c-text', 'start') +
      text(100, 56, '도선: 그대로', 'c-mut') +
      text(24, 26, '전위', 'c-mut', 'start') +
      text(166, 164, '한 바퀴 돌면 높이 변화는 0', 'c-mut'),
  );
}

function lorentzCircle() {
  return svg(
    180,
    '자기력은 속도에 수직이라 원운동을 만든다',
    dots(30, 30, 300, 160) +
      circle(160, 96, 56, 'c-mut', dash) +
      dot(160, 96, 'c-text', 2) +
      arrow(172, 40, 222, 40, 'c-text') +
      arrow(160, 52, 160, 84, 'c-acc', 2) +
      charge(160, 40, '+') +
      text(226, 36, 'v', 'c-text', 'start', 12) +
      text(168, 74, 'F', 'c-acc', 'start', 12) +
      text(160, 132, 'r = mv / qB', 'c-text') +
      text(12, 16, 'B ⊙ (화면에서 나오는 방향)', 'c-mut', 'start'),
  );
}

function wireField() {
  let s = '';
  for (const y of [58, 114]) {
    s += `<path d="M 36 ${y} A 44 12 0 0 1 124 ${y}" class="c-acc" stroke="currentColor" stroke-width="1.5" ${dash}/>`;
    s += `<path d="M 36 ${y} A 44 12 0 0 0 124 ${y}" class="c-acc" stroke="currentColor" stroke-width="1.5"/>`;
    s += head(86, y + 12, 0, 'c-acc') + head(74, y - 12, Math.PI, 'c-acc');
  }
  let sol = '';
  for (let x = 196; x <= 296; x += 20) {
    sol += circle(x, 52, 6, 'c-text') + dot(x, 52, 'c-text', 1.8);
    sol += circle(x, 122, 6, 'c-text') + line(x - 4, 118, x + 4, 126, 'c-text') + line(x - 4, 126, x + 4, 118, 'c-text');
  }
  return svg(
    176,
    '직선 전류 주위의 자기장과 솔레노이드 내부 자기장',
    s +
      line(80, 14, 80, 46, 'c-text', 'stroke-width="3"') +
      line(80, 70, 80, 102, 'c-text', 'stroke-width="3"') +
      line(80, 126, 80, 152, 'c-text', 'stroke-width="3"') +
      head(80, 10, -Math.PI / 2, 'c-text', 9) +
      text(92, 20, 'i', 'c-text', 'start', 12) +
      text(132, 62, 'B', 'c-acc', 'start', 12) +
      text(80, 170, '직선: 도선을 감싸는 원', 'c-mut') +
      sol +
      arrow(188, 78, 304, 78, 'c-acc') +
      arrow(188, 98, 304, 98, 'c-acc') +
      `<rect x="222" y="26" width="48" height="62" class="c-pos" stroke="currentColor" stroke-width="1.3" ${dash}/>` +
      text(246, 20, '앙페르 고리', 'c-pos', 'middle', 10) +
      text(246, 170, '솔레노이드: 안쪽만 균일', 'c-mut'),
  );
}

function railRod() {
  return svg(
    172,
    '레일 위를 움직이는 막대: 유도 전류와 운동을 방해하는 힘',
    dots(60, 62, 300, 114, 30) +
      line(40, 44, 290, 44, 'c-text') +
      line(40, 128, 290, 128, 'c-text') +
      line(40, 44, 40, 72, 'c-text') +
      line(40, 100, 40, 128, 'c-text') +
      `<rect x="32" y="72" width="16" height="28" class="c-text" stroke="currentColor" stroke-width="1.5"/>` +
      text(26, 90, 'R', 'c-text', 'end') +
      line(196, 36, 196, 136, 'c-text', 'stroke-width="4"') +
      arrow(204, 76, 250, 76, 'c-text', 2) +
      text(254, 80, 'v', 'c-text', 'start', 12) +
      arrow(188, 100, 146, 100, 'c-pos', 2) +
      text(140, 96, 'F (운동을 방해)', 'c-pos', 'end') +
      arrow(96, 38, 130, 38, 'c-acc') +
      arrow(130, 134, 96, 134, 'c-acc') +
      arrow(206, 52, 206, 68, 'c-acc') +
      text(113, 30, 'i', 'c-acc', 'middle', 12) +
      text(113, 150, 'i', 'c-acc', 'middle', 12) +
      text(300, 20, 'B ⊙', 'c-mut', 'end') +
      text(196, 164, '넓이가 늘어난다 → 늘어나는 선속을 막는 방향', 'c-mut'),
  );
}

function phasor() {
  const o = { x: 104, y: 104 };
  return svg(
    176,
    'RLC 직렬 회로의 위상자: 저항 전압과 리액턴스 전압의 직각 합',
    line(o.x - 14, o.y, 300, o.y, 'c-mut', dash) +
      arrow(o.x, o.y, 216, o.y, 'c-text', 2) +
      arrow(o.x, o.y, o.x, 30, 'c-text', 2) +
      arrow(o.x, o.y, o.x, 148, 'c-text', 2) +
      line(216, o.y, 216, 70, 'c-mut', dash) +
      arrow(o.x, o.y, 216, 70, 'c-acc', 2.4) +
      `<path d="M 138 104 A 34 34 0 0 0 136.6 94" class="c-acc" stroke="currentColor" stroke-width="1.3"/>` +
      text(146, 100, 'φ', 'c-acc', 'start') +
      text(o.x - 8, 32, `${sub('V', 'L')} = I${sub('X', 'L')}`, 'c-text', 'end') +
      text(o.x - 8, 150, `${sub('V', 'C')} = I${sub('X', 'C')}`, 'c-text', 'end') +
      text(222, 120, `${sub('V', 'R')} = IR`, 'c-text', 'start') +
      text(222, 134, '(전류와 같은 방향)', 'c-mut', 'start', 10) +
      text(222, 66, `${sub('V', 'm')} = IZ`, 'c-acc', 'start') +
      text(222, 88, `${sub('V', 'L')} − ${sub('V', 'C')}`, 'c-mut', 'start', 10),
  );
}


// ------------------------------------------------------------------ 역학 그림

function inclineFbd() {
  const th = (30 * Math.PI) / 180;
  const ax = 30, ay = 150, bx = 290; // 빗면 바닥
  const by = ay - (bx - ax) * Math.tan(th);
  const cx = 170, cy = ay - (cx - ax) * Math.tan(th); // 접점
  const ux = Math.cos(th), uy = -Math.sin(th); // 빗면 위쪽 방향
  const nx = -Math.sin(th), ny = -Math.cos(th); // 빗면 바깥쪽 법선 (빗면에 수직, 위쪽)
  const bc = { x: cx + nx * 16, y: cy + ny * 16 }; // 상자 중심
  const box = [
    [cx - ux * 18, cy - uy * 18],
    [cx + ux * 18, cy + uy * 18],
    [cx + ux * 18 + nx * 32, cy + uy * 18 + ny * 32],
    [cx - ux * 18 + nx * 32, cy - uy * 18 + ny * 32],
  ].map((p) => p.map(r1).join(',')).join(' ');
  const g = 58;
  return svg(
    176,
    '빗면 위 물체의 자유물체도: 중력을 빗면 방향과 수직 방향으로 나눈다',
    `<polygon points="${ax},${ay} ${bx},${ay} ${bx},${r1(by)}" class="c-mut" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="1.5"/>` +
      `<polygon points="${box}" class="c-text" fill="var(--surface-2)" stroke="currentColor" stroke-width="1.5"/>` +
      arrow(bc.x, bc.y, bc.x, bc.y + g, 'c-text', 2) +
      text(bc.x + 6, bc.y + g + 4, 'mg', 'c-text', 'start') +
      arrow(bc.x, bc.y, bc.x - ux * g * Math.sin(th), bc.y - uy * g * Math.sin(th), 'c-acc', 1.8) +
      text(r1(bc.x - ux * g * Math.sin(th) - 6), r1(bc.y - uy * g * Math.sin(th) + 14), 'mg sinθ', 'c-acc', 'end') +
      arrow(bc.x, bc.y, bc.x - nx * g * Math.cos(th), bc.y - ny * g * Math.cos(th), 'c-acc', 1.8) +
      text(r1(bc.x - nx * g * Math.cos(th) + 6), r1(bc.y - ny * g * Math.cos(th) + 12), 'mg cosθ', 'c-acc', 'start') +
      arrow(bc.x, bc.y, bc.x + nx * 50, bc.y + ny * 50, 'c-pos', 1.8) +
      text(r1(bc.x + nx * 50 - 4), r1(bc.y + ny * 50), 'N', 'c-pos', 'end') +
      arrow(cx + ux * 20, cy + uy * 20, cx + ux * 56, cy + uy * 56, 'c-ok', 1.8) +
      text(r1(cx + ux * 60 + 4), r1(cy + uy * 60 + 2), 'f', 'c-ok', 'start') +
      `<path d="M ${ax + 34} ${ay} A 34 34 0 0 0 ${r1(ax + 34 * Math.cos(th))} ${r1(ay - 34 * Math.sin(th))}" class="c-mut" stroke="currentColor" stroke-width="1.2"/>` +
      text(ax + 42, ay - 6, 'θ', 'c-mut', 'start') +
      text(160, 170, 'N = mg cosθ, 빗면 방향 알짜힘 = mg sinθ − f', 'c-mut', 'middle', 10),
  );
}

function rollingSpeeds() {
  const c = { x: 150, y: 92 }, R = 52;
  return svg(
    170,
    '굴러가는 바퀴: 맨 위는 2v, 중심은 v, 바닥 접점은 0',
    line(20, c.y + R, 300, c.y + R, 'c-mut') +
      circle(c.x, c.y, R, 'c-text') +
      dot(c.x, c.y, 'c-text', 3) +
      `<path d="M ${c.x + 30} ${c.y - 20} A 36 36 0 0 1 ${c.x + 34} ${c.y + 12}" class="c-mut" stroke="currentColor" stroke-width="1.3"/>` +
      head(c.x + 34, c.y + 12, Math.PI / 2 + 0.3, 'c-mut', 6) +
      text(c.x + 42, c.y - 2, 'ω', 'c-mut', 'start') +
      arrow(c.x, c.y - R, c.x + 104, c.y - R, 'c-acc', 2.2) +
      text(c.x + 108, c.y - R + 4, '2v', 'c-acc', 'start', 12) +
      arrow(c.x, c.y, c.x + 52, c.y, 'c-acc', 2.2) +
      text(c.x + 58, c.y + 16, 'v = Rω', 'c-acc', 'start', 12) +
      dot(c.x, c.y + R, 'c-pos', 4) +
      text(c.x, c.y + R + 16, '접점: 순간 정지 → 정지 마찰력은 일을 안 함', 'c-pos', 'middle', 10) +
      text(12, 18, '직선 운동 v + 회전 Rω를 점마다 더한다', 'c-mut', 'start', 10),
  );
}

function shmCircle() {
  const c = { x: 96, y: 92 }, R = 58, a = (40 * Math.PI) / 180;
  const p = { x: c.x + R * Math.cos(a), y: c.y - R * Math.sin(a) };
  return svg(
    186,
    '등속 원운동의 그림자가 단진동이다',
    circle(c.x, c.y, R, 'c-mut', dash) +
      line(c.x - R - 14, c.y, c.x + R + 14, c.y, 'c-mut') +
      line(c.x, c.y, p.x, p.y, 'c-text') +
      dot(p.x, p.y, 'c-acc', 5) +
      line(p.x, p.y, p.x, c.y, 'c-acc', dash) +
      dot(p.x, c.y, 'c-pos', 5) +
      `<path d="M ${c.x + 22} ${c.y} A 22 22 0 0 0 ${r1(c.x + 22 * Math.cos(a))} ${r1(c.y - 22 * Math.sin(a))}" class="c-text" stroke="currentColor" stroke-width="1.2"/>` +
      text(c.x + 28, c.y - 6, 'ωt', 'c-text', 'start', 10) +
      text(r1(p.x), c.y + 18, `x = ${sub('x', 'm')} cos ωt`, 'c-pos', 'middle', 10) +
      text(c.x, c.y + R + 22, '원 위의 점 (각속도 ω)', 'c-acc', 'middle', 10) +
      // 오른쪽: 시간 그래프
      line(246, 30, 246, 156, 'c-mut') +
      `<polyline points="${Array.from({ length: 41 }, (_, i) => `${r1(246 + 50 * Math.cos((i / 40) * 2 * Math.PI))},${r1(30 + i * 3.15)}`).join(' ')}" class="c-pos" stroke="currentColor" stroke-width="2"/>` +
      text(246, 22, '그림자를 시간으로 펼치면', 'c-mut', 'middle', 10) +
      text(304, 160, 't ↓', 'c-mut', 'end', 10),
  );
}

function standingModes() {
  const row = (y: number, L: number, kind: 'ff' | 'fo', n: number, label: string) => {
    const x0 = 30, h = 13;
    let up = '', dn = '';
    for (let i = 0; i <= 60; i++) {
      const x = x0 + (L * i) / 60;
      const t = i / 60;
      const amp = kind === 'ff' ? Math.sin(n * Math.PI * t) : Math.sin(((2 * n - 1) * Math.PI * t) / 2);
      up += `${r1(x)},${r1(y - h * amp)} `;
      dn += `${r1(x)},${r1(y + h * amp)} `;
    }
    return (
      line(x0, y, x0 + L, y, 'c-mut', dash) +
      `<polyline points="${up}" class="c-acc" stroke="currentColor" stroke-width="1.8"/>` +
      `<polyline points="${dn}" class="c-acc" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.5"/>` +
      line(x0, y - 18, x0, y + 18, 'c-text', 'stroke-width="3"') +
      (kind === 'ff' ? line(x0 + L, y - 18, x0 + L, y + 18, 'c-text', 'stroke-width="3"') : '') +
      text(x0 + L + 10, y + 4, label, 'c-text', 'start', 10)
    );
  };
  return svg(
    214,
    '정상파: 양 끝 고정과 한쪽 끝 열림의 가능한 모양',
    text(30, 14, '양 끝 고정 (또는 양 끝 열림): λ = 2L/n', 'c-mut', 'start', 10) +
      row(36, 200, 'ff', 1, 'n=1') +
      row(68, 200, 'ff', 2, 'n=2') +
      row(100, 200, 'ff', 3, 'n=3') +
      text(30, 132, '한쪽 끝 닫힘: λ = 4L/n (n 홀수)', 'c-mut', 'start', 10) +
      row(154, 200, 'fo', 1, 'n=1') +
      row(188, 200, 'fo', 2, 'n=3'),
  );
}

function bernoulliPipe() {
  const top = (x: number) => (x < 110 ? 60 : x < 150 ? 60 + ((x - 110) / 40) * 22 : x < 210 ? 82 : x < 250 ? 82 - ((x - 210) / 40) * 22 : 60);
  let t = '', b = '';
  for (let x = 20; x <= 300; x += 5) {
    t += `${x},${r1(top(x))} `;
    b += `${x},${r1(180 - top(x))} `;
  }
  return svg(
    186,
    '좁은 곳은 빠르고 압력이 낮아 세운 관의 물 높이가 낮다',
    `<polyline points="${t}" class="c-text" stroke="currentColor" stroke-width="2"/>` +
      `<polyline points="${b}" class="c-text" stroke="currentColor" stroke-width="2"/>` +
      // 세운 관 두 개
      `<rect x="60" y="14" width="12" height="46" class="c-acc" fill="currentColor" fill-opacity="0.25" stroke="none"/>` +
      line(60, 4, 60, 60, 'c-text') + line(72, 4, 72, 60, 'c-text') +
      `<rect x="174" y="44" width="12" height="38" class="c-acc" fill="currentColor" fill-opacity="0.25" stroke="none"/>` +
      line(174, 4, 174, 82, 'c-text') + line(186, 4, 186, 82, 'c-text') +
      arrow(36, 120, 80, 120, 'c-acc') +
      arrow(160, 120, 226, 120, 'c-acc', 2.2) +
      text(58, 140, 'A 큼 → v 작음', 'c-text', 'middle', 10) +
      text(194, 140, 'A 작음 → v 큼', 'c-text', 'middle', 10) +
      text(84, 30, 'P 높음', 'c-acc', 'start', 10) +
      text(198, 56, 'P 낮음', 'c-acc', 'start', 10) +
      text(160, 176, 'A₁v₁ = A₂v₂, P + ½ρv² 일정', 'c-mut', 'middle', 10),
  );
}

import { polarFigures } from './polar-figures';

export const figures: Record<string, string> = {
  ...polarFigures,
  coulomb: coulomb(),
  'ring-axis': ringAxis(),
  'gauss-bag': gaussBag(),
  'gauss-surfaces': gaussSurfaces(),
  conductor: conductor(),
  'potential-hill': potentialHill(),
  'capacitor-tank': capacitorTank(),
  'potential-stairs': potentialStairs(),
  'lorentz-circle': lorentzCircle(),
  'wire-field': wireField(),
  'rail-rod': railRod(),
  phasor: phasor(),
  'incline-fbd': inclineFbd(),
  'rolling-speeds': rollingSpeeds(),
  'shm-circle': shmCircle(),
  'standing-modes': standingModes(),
  'bernoulli-pipe': bernoulliPipe(),
};
