---
id: phys-rot-precession
title_ko: "자이로스코프의 세차 운동"
title_en: "Precession of a gyroscope"
tags: [세차 운동, 자이로스코프, precession, gyroscope]
importance: 1
related: [phys-rot-angular-momentum]
source: "book:BLIS편입 일반물리 6-28"
verified: false
---

## formula
$$
\Omega = \frac{Mgr}{I\omega}
$$

## conditions
- 바퀴가 충분히 빠르게 돌아 $|d\mathbf{L}| \ll |\mathbf{L}|$일 때. $r$은 지지점에서 바퀴 질량 중심까지 거리.

## explanation
### 쉽게 말하면
빠르게 도는 팽이는 기울어져도 쓰러지지 않고, 축이 원뿔을 그리며 천천히 돈다. 이 느린 회전이 세차 운동이다.

### 먼저 떠올릴 것
- 각운동량 $\mathbf{L}$은 화살표다. 방향은 회전축 방향(오른손 네 손가락을 도는 방향으로 감았을 때 엄지), 크기는 $I\omega$.
- 돌림힘은 각운동량을 바꾼다: $\boldsymbol\tau = \dfrac{d\mathbf{L}}{dt}$. 짧은 시간 $dt$ 동안 $\mathbf{L}$은 돌림힘 방향으로 $\tau\,dt$만큼 변한다.

### 왜 쓰러지지 않고 옆으로 도나
중력이 만드는 돌림힘의 방향은 $\mathbf{L}$(팽이 축)에 수직인 수평 방향이다. 화살표에 수직인 방향으로 조금씩 밀면 화살표는 길이는 그대로인 채 방향만 돈다. 그래서 팽이 축은 아래로 떨어지는 대신 옆으로 돌아간다.
팽이가 빨리 돌수록($L$이 클수록) 같은 돌림힘으로 방향이 덜 바뀌어 세차가 느리다 ($\Omega = \dfrac{\tau}{L}$). 느려지면 세차가 빨라지다 결국 쓰러진다.

중력의 돌림힘 $\tau = Mgr$은 $\mathbf{L}$에 수직이라 $\mathbf{L}$의 크기는 못 바꾸고 방향만 돌린다 (등속 원운동에서 구심력이 속도 방향만 돌리는 것과 같은 구조). 그래서 바퀴는 떨어지지 않고 지지점을 축으로 수평으로 돈다. $dL = \tau\,dt = L\,d\phi$에서 $\Omega = \dfrac{d\phi}{dt} = \dfrac{\tau}{L}$.

## supplement
교재 내용을 옮기고, 쉬운 설명·스토리는 Claude가 추가했습니다. 쉬운 설명·그림 보강: 쉬운 설명과 각운동량·돌림힘 복습.
