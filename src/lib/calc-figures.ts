// 미적분 카드용 그림 (인라인 SVG). 카드 본문에서 "::fig 이름 | 캡션"으로 넣는다.
import { r1, svg, line, dash, arrow, text, dot, path, soft, type Cls } from './fig-helpers';

const poly = (pts: number[][], cls: Cls, extra = '') =>
  `<polygon points="${pts.map((p) => p.map(r1).join(',')).join(' ')}" class="${cls}" stroke="currentColor" stroke-width="1" ${extra}/>`;

/** 곡선 위 한 점의 T, N, B와 접촉평면 */
function tnbFrame() {
  const P = [150, 128];
  // 접촉평면 안의 두 방향: 오른쪽(T), 비스듬히 뒤쪽(N)
  const curve = (() => {
    let d = '';
    for (let s = -96; s <= 96; s += 4) {
      const k = 0.0042 * s * s * 0.7;
      d += `${s === -96 ? 'M' : 'L'}${r1(P[0] + s + k)} ${r1(P[1] - k)}`;
    }
    return d;
  })();
  return svg(
    190,
    '곡선 위 한 점에서 T는 진행 방향, N은 휘는 안쪽, B는 둘에 수직. T와 N이 놓인 평면이 접촉평면이다',
    poly([[30, 164], [236, 164], [300, 100], [94, 100]], 'c-mut', soft) +
      text(50, 158, '접촉평면', 'c-mut', 'start', 9) +
      path(curve, 'c-text', 2.2) + text(66, 106, '곡선 r(t)', 'c-text', 'middle', 10) +
      arrow(P[0], P[1], P[0] + 70, P[1], 'c-acc', 2.2) + text(P[0] + 76, P[1] + 4, 'T', 'c-acc', 'start', 12) +
      arrow(P[0], P[1], P[0] + 40, P[1] - 40, 'c-pos', 2.2) + text(P[0] + 46, P[1] - 40, 'N', 'c-pos', 'start', 12) +
      arrow(P[0], P[1], P[0], P[1] - 96, 'c-ok', 2.2) + text(P[0] - 8, P[1] - 92, 'B', 'c-ok', 'end', 12) +
      line(P[0], P[1] - 10, P[0] + 10, P[1] - 10, 'c-mut', 'stroke-width="1"') + line(P[0] + 10, P[1] - 10, P[0] + 10, P[1], 'c-mut', 'stroke-width="1"') +
      dot(P[0], P[1], 'c-text', 3) +
      text(232, 26, 'T: 나아가는 방향', 'c-acc', 'middle', 10) + text(232, 42, 'N: 휘는 안쪽', 'c-pos', 'middle', 10) + text(232, 58, 'B = T × N', 'c-ok', 'middle', 10) +
      line(P[0], P[1], P[0], P[1] + 44, 'c-mut', `stroke-width="1" ${dash}`),
  );
}

/** 접촉원: N 방향으로 곡률 반지름만큼 떨어진 곳이 중심 */
function osculatingCircle() {
  const P = [120, 120], R = 52;
  let d = '';
  for (let x = -100; x <= 100; x += 5) d += `${x === -100 ? 'M' : 'L'}${r1(P[0] + x)} ${r1(P[1] - (x * x) / (2 * R) * 0.98)}`;
  return svg(
    150,
    '곡선은 그 점 근처에서 접촉원과 가장 잘 겹친다. N은 접촉원의 중심을 향하고, 반지름은 곡률의 역수다',
    `<circle cx="${P[0]}" cy="${P[1] - R}" r="${R}" class="c-mut" stroke="currentColor" stroke-width="1.2" ${dash} fill="none"/>` +
      path(d, 'c-text', 2.2) + dot(P[0], P[1] - R, 'c-mut', 2.4) +
      arrow(P[0], P[1], P[0] + 62, P[1], 'c-acc', 2.2) + text(P[0] + 68, P[1] + 4, 'T', 'c-acc', 'start', 12) +
      arrow(P[0], P[1], P[0], P[1] - 40, 'c-pos', 2.2) + text(P[0] + 7, P[1] - 30, 'N', 'c-pos', 'start', 12) +
      dot(P[0], P[1], 'c-text', 3) + text(P[0] - 6, P[1] - R + 4, '중심', 'c-mut', 'end', 9) +
      text(262, 92, '반지름 = 1/κ', 'c-mut', 'middle', 10) + text(262, 106, '(κ: 곡률)', 'c-mut', 'middle', 9) +
      text(262, 128, 'B는 종이에서', 'c-ok', 'middle', 10) + text(262, 142, '나오는 방향', 'c-ok', 'middle', 10),
  );
}

export const calcFigures: Record<string, string> = {
  'tnb-frame': tnbFrame(),
  'osculating-circle': osculatingCircle(),
};
