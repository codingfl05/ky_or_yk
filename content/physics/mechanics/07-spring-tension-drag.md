---
id: phys-mech-spring-tension-drag
title_ko: "탄성력, 장력, 항력"
title_en: "Spring force, tension and drag"
tags: [탄성력, 훅의 법칙, 장력, 항력, 종단 속도, spring force, Hooke's law, tension, drag, terminal speed]
importance: 2
related: [phys-wave-spring-shm, phys-mech-connected-bodies]
source: "book:BLIS편입 일반물리 2-16~18"
verified: false
---

## formula
$$
F = -kx, \qquad D = \frac{1}{2}C\rho Av^2, \qquad v_t = \sqrt{\frac{2mg}{C\rho A}}
$$

## conditions
- 훅의 법칙: $x$는 원래 길이에서 늘어나거나 줄어든 길이. 음의 부호는 변형과 반대 방향.
- 줄의 질량은 보통 무시: 줄 전체에서 장력이 같고, 고정 도르래는 힘의 방향만 바꾼다.

## explanation
### 탄성력
늘어나면 줄이려 하고, 줄어들면 늘리려 한다. "크기가 변위에 비례하고 방향이 반대"인 힘은 무엇이든 탄성력처럼 행동하고, 이런 힘은 반드시 단진동을 만든다 (진자, 지구 관통 터널 등).

### 장력
질량 없는 줄은 받은 힘을 그대로 전달하는 역할만 한다. 줄이 물체를 당기는 방향은 항상 줄을 따라 물체에서 멀어지는 쪽.

### 항력
공기 저항은 속도의 제곱에 비례해 커진다. 떨어지는 물체는 빨라질수록 항력이 커져 결국 중력과 같아지고, 그 뒤로는 등속 낙하한다 (종단 속도). 단면적이 클수록 종단 속도가 작다.

### 한 번 따라 하기: 종단 속도
떨어지는 물체가 받는 힘은 아래로 중력 $mg$, 위로 항력 $D = \dfrac{1}{2}C\rho Av^2$ 두 개다.
1. 처음에는 느려서 항력이 작다 → 알짜힘이 아래 → 빨라진다.
2. 빨라질수록 항력이 ($v^2$에 비례해) 커진다 → 알짜힘이 줄어 덜 빨라진다.
3. 항력이 중력과 같아지면 알짜힘 0 → 더는 빨라지지 않고 그 속도로 계속 떨어진다.

$$
\frac{1}{2}C\rho Av_t^2 = mg \ \Rightarrow\ v_t = \sqrt{\frac{2mg}{C\rho A}}
$$

기호: $C$는 물체 모양으로 정해지는 항력 계수, $\rho$는 공기의 밀도, $A$는 떨어지는 방향에서 본 단면적이다.

## supplement
교재 내용을 옮기고, 쉬운 설명·스토리는 Claude가 추가했습니다. 쉬운 설명·그림 보강: 종단 속도가 생기는 과정과 기호 풀이.
