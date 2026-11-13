---
id: phys-rot-torque
title_ko: "돌림힘과 회전의 운동 법칙"
title_en: "Torque and Newton's second law for rotation"
question: "돌림힘의 정의와 회전 운동의 운동 방정식은?"
tags: [돌림힘, 토크, 각가속도, 회전 운동 방정식, torque, angular acceleration]
importance: 3
related: [phys-rot-moment-of-inertia, phys-mech-static-equilibrium, phys-rot-rolling]
source: "book:BLIS편입 일반물리 6-08"
verified: false
---

## formula
$$
\boldsymbol{\tau} = \mathbf{r}\times\mathbf{F}, \qquad \tau = rF\sin\phi = r_\perp F
$$

$$
\tau_{\text{net}} = I\alpha
$$

## conditions
- $\mathbf{r}$: 회전축에서 힘의 작용점까지. $\phi$: $\mathbf{r}$과 $\mathbf{F}$ 사이 각. $r_\perp$: 축에서 힘의 작용선까지 수직 거리(팔의 길이).
- 단위 $\text{N}\cdot\text{m}$이지만 에너지(J)와는 다른 양이다.

## explanation
### 쉽게 말하면
돌림힘 = 힘 × 팔의 길이. 축을 향하거나 축에서 멀어지는 방향의 힘(지렛대와 나란한 힘)은 돌리지 못한다. 수직 성분만 돌린다.

### 문제풀이: 도르래에 매달린 물체
1. 물체: $mg - T = ma$.
2. 도르래: $TR = I\alpha$.
3. 줄이 미끄러지지 않으면 $a = R\alpha$.
세 식을 연립하면 $a = \dfrac{mg}{m + I/R^2}$. 도르래의 관성모멘트는 $\dfrac{I}{R^2}$만큼의 질량이 더해진 것처럼 보인다.

## story
렌치로 나사를 풀 때 손잡이 끝을 수직으로 당기면 가장 잘 풀린다. 손잡이 방향으로 잡아당기면 아무리 세게 당겨도 안 돈다.

## supplement
교재 내용을 옮기고, 쉬운 설명·스토리는 Claude가 추가했습니다.
