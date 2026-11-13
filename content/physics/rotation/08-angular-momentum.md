---
id: phys-rot-angular-momentum
title_ko: "각운동량과 각운동량 보존"
title_en: "Angular momentum and its conservation"
question: "각운동량의 정의와 보존 조건, 대표적인 보존 상황은?"
tags: [각운동량, 각운동량 보존, 피겨 스케이팅, angular momentum, conservation of angular momentum]
importance: 3
related: [phys-rot-rotational-energy, phys-mech-orbits-kepler, phys-rot-precession]
source: "book:BLIS편입 일반물리 6-24~26"
verified: false
---

## formula
$$
\mathbf{L} = \mathbf{r}\times\mathbf{p}, \qquad L = I\omega, \qquad \boldsymbol{\tau}_{\text{net}} = \frac{d\mathbf{L}}{dt}
$$

$$
I_i\omega_i = I_f\omega_f \quad (\tau_{\text{ext}} = 0)
$$

## conditions
- 점 입자는 $L = rmv\sin\phi = r_\perp mv$ (직선 운동하는 입자도 기준점에 대해 각운동량이 있다).
- 보존은 외부 돌림힘이 0일 때. 계 안의 물체끼리 주고받는 돌림힘은 상관없다.

## explanation
### 쉽게 말하면
선운동량이 충돌에서 강력했듯, 각운동량은 "돌고 있는 물체의 모양이 바뀔 때" 강력하다. 모양이 바뀌면 $I$가 바뀌고, 그만큼 $\omega$가 반대로 변한다.

### 대표 상황
- 스케이터가 팔을 오므리면 $I$가 줄어 빨리 돈다. 운동 에너지 $\frac{L^2}{2I}$는 오히려 늘어난다 (팔을 당기며 한 일).
- 회전하는 원판에 다른 원판을 떨어뜨려 붙이기: 각운동량 보존, 운동 에너지는 손실 (회전판의 완전 비탄성 충돌).
- 회전 의자 위에서 도는 바퀴를 뒤집으면: 전체 각운동량이 보존되도록 사람이 반대로 돈다. 바퀴가 $+L$에서 $-L$이 되면 사람은 $2L$을 갖는다.
- 행성 궤도: 중력이 중심을 향해 돌림힘이 0 → 케플러 2법칙.
- 문에 박히는 총알: 경첩 기준 각운동량 보존 (경첩이 주는 힘은 돌림힘이 0).

## story
의자에 앉아 팔을 벌리고 돌다가 팔을 가슴에 모으면 갑자기 빨라진다. 아무도 밀어 주지 않았는데 빨라진 것은, 회전의 양(각운동량)은 그대로인데 몸이 작아졌기 때문이다.

## supplement
교재 내용을 옮기고, 쉬운 설명·스토리는 Claude가 추가했습니다.
