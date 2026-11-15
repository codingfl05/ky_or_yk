---
id: phys-rel-lorentz-transform
title_ko: "로런츠 변환"
title_en: "Lorentz transformation"
question: "정지 좌표계의 x, t와 움직이는 좌표계의 x', t'는 어떻게 바뀌는가?"
tags: [로런츠 변환, 갈릴레이 변환, 좌표 변환, 시공간, Lorentz transformation, Galilean transformation, spacetime]
importance: 3
related: [phys-rel-simultaneity, phys-rel-time-dilation, phys-rel-length-contraction, phys-rel-velocity-addition]
source: "book:BLIS편입 일반물리 21-14"
verified: false
---

## formula
$$
x' = \gamma\,(x - vt), \qquad t' = \gamma\left(t - \frac{vx}{c^2}\right)
$$

$$
x = \gamma\,(x' + vt'), \qquad t = \gamma\left(t' + \frac{vx'}{c^2}\right)
$$

## conditions
- $S(x, t)$: 정지한 관찰자의 좌표계. $S'(x', t')$: $S$에 대해 $+x$ 방향으로 속력 $v$로 움직이는 좌표계.
- $t = t' = 0$일 때 두 원점이 겹친다.
- 운동 방향에 수직인 좌표는 바뀌지 않는다: $y' = y$, $z' = z$.
- 두 사건 사이의 간격에도 같은 꼴이 성립한다 ($x \to \Delta x$, $t \to \Delta t$).
- $v \ll c$이면 갈릴레이 변환 $x' = x - vt$, $t' = t$로 돌아간다.

## explanation
### 먼저 떠올릴 것
- 고전 역학의 좌표 바꾸기(갈릴레이 변환): 움직이는 사람이 본 위치는 $x' = x - vt$이고, 시간은 누구에게나 같다 ($t' = t$).
- 상대성 이론에서는 시간도 관찰자마다 다르므로 $t$도 함께 바뀌어야 한다.

### 기호 풀이
- $x' = \gamma(x - vt)$: 갈릴레이 변환에 $\gamma$가 곱해진 꼴.
- $t' = \gamma(t - vx/c^2)$: 시간에 위치 $x$가 들어 있다. 위치가 다르면 시각도 다르게 읽힌다는 뜻이고, 이것이 동시성의 상대성이다. 시간과 공간이 서로 얽혀 있다.
- 역변환은 $v$를 $-v$로 바꾸고 프라임을 옮기면 된다.

### 간격으로 쓴 꼴
$$
\Delta x = \gamma\,(\Delta x' + v\,\Delta t')
$$

$$
\Delta t = \gamma\left(\Delta t' + \frac{v\,\Delta x'}{c^2}\right)
$$

### 한 번 따라 하기: 세 효과를 한 식에서 꺼내기
1. 동시성의 상대성: $S'$에서 동시($\Delta t' = 0$)이고 위치가 다르면

$$
\Delta t = \gamma\,\frac{v\,\Delta x'}{c^2} \ne 0
$$

2. 시간 지연: $S'$에서 같은 위치($\Delta x' = 0$)이면 $\Delta t = \gamma\,\Delta t'$. 이때 $\Delta t'$가 고유 시간이다.
3. 길이 수축: $S'$에 정지한 우주선의 고유 길이가 $\Delta x' = D_0$다. $S$에서는 양 끝을 동시에 읽으므로 $\Delta t = 0$이고, 읽은 길이가 $\Delta x = D$다.

$$
D_0 = \gamma\,(D - v \cdot 0) = \gamma D
\quad\Longrightarrow\quad D = \frac{D_0}{\gamma}
$$

### 자주 틀리는 포인트
- 시간 지연 공식 $\Delta t = \gamma\,\Delta t_0$는 $\Delta x' = 0$일 때만, 길이 수축 공식은 $\Delta t = 0$으로 잴 때만 쓸 수 있는 특수한 경우다. 두 사건의 위치와 시각이 모두 다르면 로런츠 변환을 그대로 써야 한다.
- 어느 쪽이 프라임인지 먼저 정하고, 부호($x - vt$인지 $x' + vt'$인지)를 그에 맞춘다.

## supplement
교재 내용을 옮기고, 쉬운 설명과 "자주 틀리는 포인트"는 Claude가 추가했습니다.
