---
id: phys-fluid-bernoulli
title_ko: "베르누이 방정식"
title_en: "Bernoulli's equation"
question: "흐르는 유체의 압력, 속력, 높이 사이의 관계는?"
tags: [베르누이, 유체 에너지 보존, 압력, 속력, 토리첼리, Bernoulli's equation, Torricelli]
importance: 3
related: [phys-fluid-continuity, phys-fluid-hydrostatic-pressure, phys-mech-energy-conservation]
source: "book:BLIS편입 일반물리 11-12~16"
verified: false
---

## formula
$$
P + \frac{1}{2}\rho v^2 + \rho gy = \text{const}
$$

$$
\text{Torricelli: } v = \sqrt{2gh}
$$

## conditions
- 이상 유체, 같은 유선(streamline)을 따라. 토리첼리 식은 넓은 탱크 수면보다 $h$ 아래 작은 구멍에서 나오는 속력.

## explanation
### 쉽게 말하면
유체의 에너지 보존이다. 각 항을 부피로 나눈 에너지로 읽는다.
| 항 | 역학의 무엇 |
|---|---|
| $\frac{1}{2}\rho v^2$ | 운동 에너지 |
| $\rho gy$ | 중력 퍼텐셜 에너지 |
| $P$ | 압력이 해 주는 일 |

### 핵심 결론
- 높이가 같으면 빠른 곳의 압력이 낮다. 연속 방정식과 합치면: 좁은 곳 → 빠름 → 압력 낮음.
- 흐르지 않으면 ($v = 0$) $P = P_0 + \rho gh$가 다시 나온다.
- 탱크 구멍: 수면과 구멍 모두 대기압이고 수면 속력 ≈ 0 → $v = \sqrt{2gh}$ (그 높이에서 자유 낙하한 속력과 같음).

### 문제 순서
연속 방정식으로 속력 비를 구하고 → 베르누이로 압력 차를 구한다. 벤투리관이 대표 문제.

## story
두 장의 종이를 나란히 들고 그 사이로 바람을 불면 종이가 벌어지지 않고 오히려 붙는다. 바람이 빠른 사이 공간의 압력이 낮아져 바깥 공기가 종이를 안으로 밀기 때문이다.

## derivation
관의 한 구간에서 유체 덩어리 $\Delta V$에 일-운동 에너지 정리를 쓴다. 압력이 한 일 $(P_1 - P_2)\Delta V$, 중력이 한 일 $-\rho\Delta V g(y_2 - y_1)$의 합이 $\frac{1}{2}\rho\Delta V(v_2^2 - v_1^2)$와 같으므로

$$
P_1 + \frac{1}{2}\rho v_1^2 + \rho gy_1 = P_2 + \frac{1}{2}\rho v_2^2 + \rho gy_2
$$

## supplement
교재 내용을 옮기고, 쉬운 설명·스토리는 Claude가 추가했습니다.
