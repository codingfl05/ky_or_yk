---
id: phys-atom-radial-probability
title_ko: "방사 확률 밀도와 수소 바닥 상태"
title_en: "radial probability density and the hydrogen ground state"
question: "수소 바닥 상태 전자가 핵에서 거리 r인 곳에 있을 확률 밀도는?"
tags: [방사 확률 밀도, 지름 확률 밀도, 오비탈, 바닥 상태 파동함수, 보어 반지름, radial probability density, ground state wave function, 1s orbital]
importance: 2
related: [phys-atom-quantum-numbers, phys-qm-wave-function, phys-atom-bohr-model]
source: "book:BLIS편입 일반물리 23-20"
verified: false
---

## formula
$$
\rho(r) = 4\pi r^2\,\lvert\psi(r)\rvert^2
$$

$$
\psi_{1s}(r) = \frac{1}{\sqrt{\pi}\,a_0^{3/2}}\,e^{-r/a_0}
$$

$$
\rho_{1s}(r) = \frac{4}{a_0^3}\,r^2 e^{-2r/a_0}
$$

## conditions
- $\rho(r)$: 방사 확률 밀도(radial probability density). 핵에서 거리 $r \sim r + dr$ 사이의 구 껍질에서 전자를 발견할 확률이 $\rho(r)\,dr$.
- 첫 식은 방향에 따라 달라지지 않는 $s$ 오비탈($l = 0$)에서 성립한다.
- $p$, $d$ 오비탈처럼 방향에 따라 다른 경우는 $\rho(r) = r^2\lvert R_{nl}(r)\rvert^2$.
- 책에 따라 방사 확률 밀도를 $P(r)$로 적기도 한다. 문제에서 준 식이 밀도인지 확률인지 꼭 확인한다.

## explanation
::fig radial-prob | 원점에서는 0이고, 보어 반지름에서 가장 크다.

### 먼저 떠올릴 것
- $\lvert\psi\rvert^2$는 단위 부피당 확률(3차원 확률 밀도)이다. 확률을 얻으려면 부피 $dV$를 곱한다.
- 구의 겉넓이는 $4\pi r^2$. 반지름 $r$, 두께 $dr$인 얇은 구 껍질의 부피는 $4\pi r^2\,dr$.

### 기호 풀이
"핵에서 거리 $r$쯤에 있을 확률"은 그 거리에 있는 모든 방향의 점을 다 합친 것이다.

$$
dP = \lvert\psi\rvert^2\,dV = \lvert\psi\rvert^2 \cdot 4\pi r^2\,dr = \rho(r)\,dr
$$

3차원 확률 밀도를 거리에 대한 1차원 확률 밀도로 바꾼 것이 $\rho(r)$이다.

### 왜 r = 0에서 최대가 아닌가
- 한 "점"에서의 확률 밀도 $\lvert\psi\rvert^2$는 $r = 0$(핵의 위치)에서 가장 크다.
- 그러나 $r = 0$ 근처는 구 껍질의 부피가 0에 가깝다. 점 하나하나의 밀도는 높아도 점의 수가 없다.
- 멀어지면 껍질의 부피($\propto r^2$)는 커지고 밀도($e^{-2r/a_0}$)는 줄어든다. 둘의 곱이 가장 큰 곳이 따로 있다.

### 한 번 따라 하기: 최대가 되는 거리
$\rho(r) \propto r^2e^{-2r/a_0}$를 미분해 0으로 둔다.

$$
\frac{d\rho}{dr} \propto \left(2r - \frac{2r^2}{a_0}\right)e^{-2r/a_0} = 0
\quad\Longrightarrow\quad r = a_0
$$

전자가 있을 확률이 가장 높은 거리가 보어 반지름이다. 보어 모델이 틀린 모델인데도 중요한 이유다.

### 확률과 평균
- $r_1$과 $r_2$ 사이에 있을 확률: $P = \displaystyle\int_{r_1}^{r_2}\rho(r)\,dr$.
- 전체 확률: $\displaystyle\int_0^\infty\rho(r)\,dr = 1$.
- 평균 거리: $\displaystyle\int_0^\infty r\rho(r)\,dr = \dfrac{3}{2}a_0$. 가장 확률이 높은 거리 $a_0$보다 크다 (곡선의 꼬리가 바깥으로 길다).
- 반지름 $r$인 구 안에서 발견될 확률 ($x = r/a_0$):

$$
P(r) = 1 - e^{-2x}\,(1 + 2x + 2x^2)
$$

$r = a_0$이면 $P = 1 - 5e^{-2} \approx 0.32$. 보어 반지름 안쪽에 있을 확률은 3분의 1 정도뿐이다.

### 자주 틀리는 포인트
- "가장 확률이 높은 거리"는 $\rho(r)$의 최대, "가장 확률 밀도가 높은 점"은 $\lvert\psi\rvert^2$의 최대($r = 0$). 묻는 것이 다르다.
- 오비탈 그림은 $\lvert\psi\rvert^2$가 일정한 면(또는 농도)을 그린 것이다.

## supplement
교재 내용을 옮기고, 평균 거리 $\frac{3}{2}a_0$와 $P(a_0) \approx 0.32$, 그림(radial-prob)은 Claude가 추가했습니다.
