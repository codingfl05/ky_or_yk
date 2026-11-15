---
id: phys-mech-newton-second-law
title_ko: 뉴턴 운동 제2법칙
title_en: Newton's second law
importance: 3
tags: [힘, 가속도, 운동량, 운동방정식, force, acceleration, momentum]
related: [phys-mech-newton-first-third, phys-mech-connected-bodies, phys-mech-momentum-impulse]
source: manual
---

## formula
$$
\sum \mathbf{F} = m\mathbf{a} = \frac{d\mathbf{p}}{dt}
$$

## conditions
- 관성 기준계(inertial frame)에서만 성립.
- $\sum \mathbf{F} = m\mathbf{a}$ 꼴은 질량이 일정할 때. 질량이 변하는 계(로켓 등)는 $\frac{d\mathbf{p}}{dt}$ 꼴을 쓴다.

## explanation
::fig incline-fbd | 힘을 모두 그린 뒤, 축을 정하고 축마다 식을 세운다.

### 쉽게 말하면
힘은 속도를 "만드는" 것이 아니라 속도를 "바꾸는" 것이다. 알짜힘이 클수록 속도가 빨리 변하고(가속도 큼), 같은 힘이라도 무거운 물체는 덜 변한다. 힘이 여러 개면 화살표로 다 더한 알짜힘 하나만 가속도를 정한다.
$\dfrac{d\mathbf{p}}{dt}$는 "운동량 $\mathbf{p} = m\mathbf{v}$가 1초에 얼마나 변하는가"다. 질량이 변하지 않으면 $m\dfrac{d\mathbf{v}}{dt} = m\mathbf{a}$와 같은 말이다.

### 문제를 푸는 순서
1. 물체 하나를 고른다.
2. 그 물체가 "받는" 힘만 모두 그린다 (중력, 닿아 있는 것마다 수직항력·마찰력·장력). 물체가 남에게 주는 힘은 그리지 않는다.
3. 가속도 방향을 한 축으로 잡는다 (빗면이면 빗면 방향).
4. 축에 비스듬한 힘은 성분으로 나눈다.
5. 축마다 (힘의 합) $= ma$를 쓴다. 가속도가 없는 축은 (힘의 합) $= 0$.

물체에 작용하는 알짜힘(net force)이 운동량(momentum)의 시간 변화율과 같다. 문제를 풀 때는 자유물체도(free-body diagram)를 그리고 축마다 따로 $\sum F_x = ma_x$, $\sum F_y = ma_y$를 세운다.

## example
마찰 없는 경사각 $\theta$ 경사면 위의 물체: 경사면 방향 성분만 남아서

$$
mg\sin\theta = ma \quad\Rightarrow\quad a = g\sin\theta
$$

## supplement
쉬운 설명·그림 보강: 쉬운 설명과 풀이 순서, 그림(incline-fbd).
