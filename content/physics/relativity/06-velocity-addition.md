---
id: phys-rel-velocity-addition
title_ko: "상대론적 속도 덧셈"
title_en: "relativistic velocity addition"
question: "움직이는 좌표계에서 본 물체의 속도를 정지 좌표계의 속도로 바꾸면?"
tags: [상대론적 상대속도, 속도 덧셈, 속도 변환, relativistic velocity addition, velocity transformation]
importance: 3
related: [phys-rel-lorentz-transform, phys-mech-relative-velocity, phys-rel-postulates]
source: "book:BLIS편입 일반물리 21-18"
verified: false
---

## formula
$$
u = \frac{u' + v}{1 + \dfrac{u'v}{c^2}}
$$

$$
u' = \frac{u - v}{1 - \dfrac{uv}{c^2}}
$$

## conditions
- $v$: 정지 좌표계 $S$에서 본 움직이는 좌표계 $S'$의 속도.
- $u$: $S$에서 본 물체의 속도, $u'$: $S'$에서 본 같은 물체의 속도.
- 모두 같은 직선($x$축) 위의 속도이고, 방향은 부호로 넣는다.
- $v \ll c$이면 고전적인 $u = u' + v$로 돌아간다.

## explanation
### 먼저 떠올릴 것
- 고전 역학의 상대 속도: 기차(속도 $v$) 안에서 속도 $u'$로 던진 공은 땅에서 $u = u' + v$로 보인다.
- 이대로면 $0.8c$로 나는 우주선에서 앞으로 $0.8c$로 쏜 탄환이 $1.6c$가 되어 광속을 넘는다. 상대성 이론에서는 분모가 이를 막는다.

### 한 번 따라 하기 (유도)
로런츠 변환의 간격 꼴을 나눈다.

$$
\frac{\Delta x}{\Delta t}
= \frac{\Delta x' + v\,\Delta t'}{\Delta t' + \dfrac{v\,\Delta x'}{c^2}}
$$

분자와 분모를 $\Delta t'$로 나누고 $u = \Delta x/\Delta t$, $u' = \Delta x'/\Delta t'$를 넣으면 위 공식이 된다.

### 숫자 예
1. 우주선이 $v = 0.8c$로 날면서 앞으로 $u' = 0.8c$인 탄환을 쏘면

$$
u = \frac{0.8c + 0.8c}{1 + 0.64} = \frac{1.6}{1.64}\,c \approx 0.976c
$$

2. 우주선에서 앞으로 빛을 쏘면 ($u' = c$)

$$
u = \frac{c + v}{1 + v/c} = c
$$

어떤 $v$에서도 빛은 $c$다. 광속 불변이 공식에 그대로 들어 있다.

### 자주 틀리는 포인트
- 서로 마주 보고 다가오는 두 우주선: 땅에서 본 속도가 $+0.6c$, $-0.6c$일 때 한 우주선에서 본 상대 속도는 $1.2c$가 아니다. $u = -0.6c$, $v = 0.6c$를 둘째 식에 넣으면

$$
u' = \frac{-0.6c - 0.6c}{1 + 0.36} \approx -0.88c
$$

- 분모의 부호는 분자의 부호와 같다 (분자가 $+$면 분모도 $1 + \cdots$).

## supplement
교재 내용을 옮기고, 숫자 예와 "자주 틀리는 포인트"는 Claude가 추가했습니다.
