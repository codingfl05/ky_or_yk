---
id: phys-rel-momentum-force
title_ko: "상대론적 운동량과 힘"
title_en: "relativistic momentum and force"
question: "광속에 가까운 물체의 운동량은 어떻게 정의하고, 힘과 가속도의 관계는?"
tags: [상대론적 운동량, 상대론적 힘, 운동량 보존, relativistic momentum, relativistic force]
importance: 2
related: [phys-mech-momentum-impulse, phys-mech-newton-second-law, phys-rel-energy]
source: "book:BLIS편입 일반물리 21-20"
verified: false
---

## formula
$$
p = \gamma m v
$$

$$
F_{\parallel} = \gamma^3 m a, \qquad F_{\perp} = \gamma m a
$$

## conditions
- $m$: 정지 질량, $v$: 관찰자가 본 물체의 속력, $\gamma = 1/\sqrt{1 - v^2/c^2}$.
- $F_{\parallel}$: 속도와 같은 방향으로 작용하는 힘, $F_{\perp}$: 속도에 수직으로 작용하는 힘.
- 힘의 정의 $F = dp/dt$는 그대로 성립한다.

## explanation
### 먼저 떠올릴 것
- 고전 역학의 운동량은 $p = mv$이고, 충돌 전후로 운동량의 합이 보존된다.
- 상대성 이론에서는 시간과 위치가 관찰자마다 달라서, $p = mv$로는 모든 좌표계에서 운동량 보존이 성립하지 않는다. 보존 법칙을 지키려면 정의를 $p = \gamma mv$로 바꿔야 한다.

### 쉽게 말하면
- 느릴 때는 $\gamma \approx 1$이라 $p \approx mv$로 돌아간다.
- $v \to c$이면 $\gamma \to \infty$이므로 운동량은 끝없이 커진다. 속력에는 한계($c$)가 있지만 운동량에는 한계가 없다.

### 일정한 힘을 줘도 등가속도가 아니다
속도와 같은 방향의 힘에 대해

$$
a = \frac{F}{\gamma^3 m} = \frac{F}{m}\left(1 - \frac{v^2}{c^2}\right)^{3/2}
$$

- $F$가 일정해도 $v$가 커질수록 $a$가 작아진다.
- $v \to c$이면 $a \to 0$. 그래서 정지한 물체를 아무리 밀어도 $c$ 이상으로 가속할 수 없다.

### 한 번 따라 하기
전자($m$)가 $0.8c$로 움직이면 $\gamma = 5/3$이므로

$$
p = \frac{5}{3} \times m \times 0.8c = \frac{4}{3}\,mc
$$

고전적인 값 $0.8\,mc$보다 크다.

### 자주 틀리는 포인트
- $F = \gamma ma$는 힘이 속도에 수직일 때(예: 자기장 속 원운동)만 맞다. 직선 가속에서는 $\gamma^3$이다.
- 자기장 속 원운동의 반지름은 $r = p/(qB) = \gamma mv/(qB)$로, 고전 식의 $mv$ 자리에 $\gamma mv$가 들어간다.

## supplement
교재 내용을 옮기고, 숫자 예와 원운동 반지름에 대한 한 줄은 Claude가 추가했습니다.
