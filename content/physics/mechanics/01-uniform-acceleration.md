---
id: phys-mech-uniform-acceleration
title_ko: "등가속도 직선 운동"
title_en: "Motion with constant acceleration"
question: "등가속도 운동의 공식 네 개와 각각 언제 쓰는가?"
tags: [등가속도, 변위, 속도, 가속도, 그래프, constant acceleration, kinematics]
importance: 3
related: [phys-mech-projectile, phys-mech-work-energy-theorem]
source: "book:BLIS편입 일반물리 1-06~12, 3-08"
verified: false
---

## formula
$$
v = v_0 + at, \qquad x - x_0 = v_0t + \frac{1}{2}at^2
$$

$$
x - x_0 = \frac{1}{2}(v_0 + v)t, \qquad v^2 - v_0^2 = 2a(x - x_0)
$$

## conditions
- 가속도 $a$가 일정할 때만. 1차원에서 $x$, $v$, $a$의 부호는 방향이다 (크고 작음이 아님).
- 정의: $v = \dfrac{dx}{dt}$, $a = \dfrac{dv}{dt}$.

## explanation
### 어떤 식을 꺼낼까
| 식 | 빠진 양 | 쓰는 때 |
|---|---|---|
| $v = v_0 + at$ | 거리 | 속도와 시간 |
| $x - x_0 = v_0t + \frac{1}{2}at^2$ | 나중 속도 | 시간이 주어지거나 구할 때 |
| $x - x_0 = \frac{1}{2}(v_0+v)t$ | 가속도 | 평균 속력으로 한 번에 |
| $v^2 - v_0^2 = 2a\Delta x$ | 시간 | 시간이 필요 없을 때 (일-운동 에너지 정리와 같은 식) |

### 그래프 읽기
- $x$–$t$ 그래프의 기울기 = 속도, $v$–$t$ 그래프의 기울기 = 가속도.
- $v$–$t$ 그래프의 넓이 = 변위, $a$–$t$ 그래프의 넓이 = 속도 변화.

### 평균 속력 지름길
등가속도 구간은 처음과 나중 속도의 평균 $\dfrac{v_0+v}{2}$로 등속 운동한 것과 이동 거리·걸린 시간이 같다 ($v$–$t$ 그래프의 사다리꼴 넓이).

## story
가속하는 차는 출발할 때 느리고 나중에 빠르다. 그래도 걸린 시간과 간 거리만 물으면, "처음과 끝의 딱 중간 속도로 계속 달렸다"고 쳐도 답이 같다.

## supplement
교재 내용을 옮기고, 쉬운 설명·스토리는 Claude가 추가했습니다.
