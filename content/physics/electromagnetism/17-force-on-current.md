---
id: phys-em-force-on-current
title_ko: "전류가 받는 자기력과 평행 도선 사이의 힘"
title_en: "Magnetic force on a current"
question: "자기장 속 전류가 흐르는 도선이 받는 힘과, 평행한 두 도선 사이의 힘은?"
tags: [자기력, 전류, 평행 도선, 플레밍 왼손 법칙, magnetic force, current-carrying wire, parallel wires]
importance: 3
related: [phys-em-lorentz-force, phys-em-biot-savart, phys-em-magnetic-dipole, phys-em-symmetry-cancellation]
source: "book:BLIS편입 일반물리 16-32, 16-38"
verified: false
---

## formula
$$
\mathbf{F} = i\mathbf{L}\times\mathbf{B}, \qquad d\mathbf{F} = i\,d\mathbf{L}\times\mathbf{B}
$$

$$
\frac{F}{L} = \frac{\mu_0 i_a i_b}{2\pi d}\quad (\text{parallel wires})
$$

## conditions
- $\mathbf{L}$의 방향은 전류 방향. $B$가 위치마다 다르면 $d\mathbf{F}$로 쪼개서 적분.
- 평행 도선: 같은 방향 전류는 인력, 반대 방향 전류는 척력.

## explanation
### 쉽게 말하면
전류는 움직이는 전하들의 행렬이라, 전하 하나하나가 받는 로렌츠 힘 $q\mathbf{v}\times\mathbf{B}$를 다 더하면 도선 전체가 받는 힘 $i\mathbf{L}\times\mathbf{B}$가 된다 (플레밍 왼손 법칙과 같은 내용).

### 평행 도선
도선 a가 만든 자기장 $B_a=\dfrac{\mu_0i_a}{2\pi d}$ 속에 도선 b가 있어서 힘 $i_bLB_a$를 받는다. 즉 "한쪽이 자기장을 만들고 다른 쪽이 그 안에서 힘을 받는다"로 나눠 생각한다. 크기는 서로 같다 (작용·반작용).

### 알아 두면 빠른 사실
- 균일한 자기장 속 닫힌 고리: 알짜힘 $0$ (돌림힘은 있을 수 있음).
- 균일한 자기장 속 휘어진 도선: 양 끝을 잇는 직선 도선과 같은 힘.
- 직선 도선 옆 직사각형 고리: 도선과 나란한 두 변의 힘 차이만 남는다 (수직인 두 변은 상쇄).

## story
같은 방향으로 흐르는 두 전류는 같은 방향으로 걷는 친구처럼 서로 끌리고, 반대로 흐르면 마주 지나치는 사람처럼 서로 밀어낸다. (전하는 같은 부호끼리 미는 것과 반대라 헷갈리기 쉬운 포인트)

## supplement
교재 내용을 옮기고, 쉬운 설명·스토리는 Claude가 추가했습니다. 휘어진 도선·닫힌 고리의 알짜힘 정리는 Claude가 추가했습니다.
