---
id: phys-wave-pendulums
title_ko: "단진자, 물리 진자, 비틀림 진자"
title_en: "Simple, physical and torsion pendulums"
question: "단진자·물리 진자·비틀림 진자의 주기는?"
tags: [단진자, 물리 진자, 비틀림 진자, 주기, 작은 각, pendulum, physical pendulum, torsion pendulum]
importance: 3
related: [phys-wave-shm, phys-rot-moment-of-inertia, phys-rot-parallel-axis]
source: "book:BLIS편입 일반물리 9-22~26"
verified: false
---

## formula
$$
T_{\text{simple}} = 2\pi\sqrt{\frac{L}{g}}
$$

$$
T_{\text{physical}} = 2\pi\sqrt{\frac{I}{mgd}}
$$

$$
T_{\text{torsion}} = 2\pi\sqrt{\frac{I}{\kappa}}
$$

## conditions
- 진자는 진동 각이 작을 때만 단진동 ($\sin\theta \approx \theta$).
- 물리 진자: $I$는 매달린 축에 대한 관성모멘트, $d$는 축에서 질량 중심까지 거리. 비틀림 진자: $\tau = -\kappa\theta$.

## explanation
### 공통 구조
복원 돌림힘이 각에 비례하면 각에 대한 단진동이다: $\tau = -(\text{상수})\theta = I\alpha$ → $\omega^2 = \dfrac{\text{상수}}{I}$.
- 물리 진자: 상수 $= mgd$.
- 단진자는 $I = mL^2$, $d = L$인 물리 진자의 특수한 경우 → $\sqrt{\frac{L}{g}}$. 질량과 무관.
- 비틀림 진자: 상수 $= \kappa$ (용수철 상수의 회전 버전).

### 문제풀이 포인트
- 막대 끝을 매단 물리 진자: $I = \frac{1}{3}mL^2$, $d = \frac{L}{2}$ → $T = 2\pi\sqrt{\dfrac{2L}{3g}}$.
- 엘리베이터가 위로 가속하면 $g$ 대신 $g + a$ (주기 감소).
- 진폭이 커도 주기는 거의 같다 (작은 각 범위에서).

## supplement
교재 내용을 옮기고, 쉬운 설명·스토리는 Claude가 추가했습니다.
