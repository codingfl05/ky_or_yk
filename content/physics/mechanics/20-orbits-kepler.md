---
id: phys-mech-orbits-kepler
title_ko: "원궤도 운동과 케플러 법칙"
title_en: "Circular orbits and Kepler's laws"
question: "원궤도 위성의 속력·에너지와 케플러의 세 법칙은?"
tags: [인공위성, 궤도, 케플러 법칙, 면적 속도, 주기, satellite, orbit, Kepler's laws]
importance: 3
related: [phys-mech-gravitation, phys-mech-gravitational-potential, phys-rot-angular-momentum]
source: "book:BLIS편입 일반물리 8-06~10"
verified: false
---

## formula
$$
v = \sqrt{\frac{GM}{r}}, \qquad K = \frac{GMm}{2r}, \qquad E = -\frac{GMm}{2r}
$$

$$
T^2 = \frac{4\pi^2}{GM}r^3, \qquad \frac{dA}{dt} = \frac{L}{2m} = \text{const}
$$

## conditions
- 중심 천체 질량 $M \gg m$. 타원 궤도에서는 $r$ 대신 긴반지름 $a$ ($T^2 \propto a^3$, $E = -\frac{GMm}{2a}$).

## explanation
### 원궤도
중력이 구심력 역할: $\dfrac{GMm}{r^2} = \dfrac{mv^2}{r}$. 여기서 모든 것이 나온다.
- $K = \frac{1}{2}|U|$, $E = -K$. 에너지를 잃으면(대기 마찰) 궤도가 작아지고 오히려 빨라진다.
- 높은 궤도로 옮기려면 에너지를 더 줘야 한다 ($E$가 0에 가까워짐).

### 케플러 법칙
1. 행성은 태양을 한 초점으로 하는 타원 궤도를 돈다.
2. 같은 시간에 휩쓰는 넓이가 같다 = 각운동량 보존 (중력은 중심을 향해 돌림힘이 0). 가까울 때 빠르고 멀 때 느리다.
3. $T^2 \propto a^3$. 중심 천체가 같으면 비례식으로 바로 푼다.

## story
인공위성은 계속 지구로 떨어지고 있다. 다만 옆으로 너무 빨리 달려서, 떨어지는 만큼 지구 표면이 둥글게 멀어져 영원히 땅에 닿지 못한다.

## derivation
케플러 2법칙: 짧은 시간 $dt$ 동안 휩쓰는 넓이 $dA = \frac{1}{2}r^2d\theta$이므로

$$
\frac{dA}{dt} = \frac{1}{2}r^2\omega = \frac{L}{2m}
$$

## supplement
교재 내용을 옮기고, 쉬운 설명·스토리는 Claude가 추가했습니다.
