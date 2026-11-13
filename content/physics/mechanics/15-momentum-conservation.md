---
id: phys-mech-momentum-conservation
title_ko: "운동량 보존과 충돌"
title_en: "Conservation of momentum and collisions"
question: "운동량은 언제 보존되고, 탄성·비탄성·완전 비탄성 충돌은 어떻게 다른가?"
tags: [운동량 보존, 충돌, 탄성 충돌, 완전 비탄성 충돌, 반발 계수, conservation of momentum, elastic collision, inelastic collision, coefficient of restitution]
importance: 3
related: [phys-mech-momentum-impulse, phys-mech-center-of-mass]
source: "book:BLIS편입 일반물리 5-04~08"
verified: false
---

## formula
$$
m_1v_{1i} + m_2v_{2i} = m_1v_{1f} + m_2v_{2f}
$$

$$
e = -\frac{v_{1f} - v_{2f}}{v_{1i} - v_{2i}} \quad (e = 1: \text{elastic},\ 0<e<1,\ e = 0: \text{perfectly inelastic})
$$

## conditions
- 계(충돌하는 물체 전부)에 작용하는 외력의 합이 0일 때 (또는 충돌 시간이 짧아 외력의 충격량을 무시할 수 있을 때).
- 2차원 충돌은 $x$, $y$ 성분마다 따로 보존.

## explanation
### 충돌의 종류
| | 운동량 | 운동 에너지 | 반발 계수 |
|---|---|---|---|
| 탄성 충돌 | 보존 | 보존 | $e = 1$ (상대 속도의 크기 그대로) |
| 비탄성 충돌 | 보존 | 일부 손실 | $0<e<1$ |
| 완전 비탄성 (붙음) | 보존 | 가장 많이 손실 | $e = 0$ (같이 움직임) |

### 자주 쓰는 결과
- 완전 비탄성: $v_f = \dfrac{m_1v_1 + m_2v_2}{m_1 + m_2}$. 같은 질량이 정지한 것에 붙으면 속력 절반, 운동 에너지 절반.
- 1차원 탄성 충돌, 2가 정지: $v_{1f} = \dfrac{m_1 - m_2}{m_1 + m_2}v_1$, $v_{2f} = \dfrac{2m_1}{m_1+m_2}v_1$. 같은 질량이면 속도를 맞바꾼다.
- 탄성 충돌은 운동 에너지 식 대신 "상대 속도의 크기가 같고 방향이 반대"를 쓰면 일차식이라 쉽다.

### 충돌 후 다른 운동이 이어지면
충돌 순간은 운동량, 그 뒤(용수철 압축, 진자 상승)는 에너지로 나눠 푼다. 붙는 충돌에서 충돌 전 에너지를 그대로 쓰는 것이 가장 흔한 실수.

## story
운동량은 끝까지 지켜지는 공동 재산이다. 두 물체가 부딪혀 서로 얼마를 주고받든 합은 그대로다. 반면 운동 에너지는 부딪힐 때 소리와 열로 일부가 새어 나갈 수 있다. 딱 달라붙으면 가장 많이 샌다.

## derivation
탄성 충돌: 운동량 보존 $m_1(v_{1i} - v_{1f}) = m_2(v_{2f} - v_{2i})$, 운동 에너지 보존 $m_1(v_{1i}^2 - v_{1f}^2) = m_2(v_{2f}^2 - v_{2i}^2)$. 둘째 식을 첫째 식으로 나누면

$$
v_{1i} + v_{1f} = v_{2i} + v_{2f} \ \Rightarrow\ v_{1f} - v_{2f} = -(v_{1i} - v_{2i})
$$

## supplement
교재 내용을 옮기고, 쉬운 설명·스토리는 Claude가 추가했습니다.
