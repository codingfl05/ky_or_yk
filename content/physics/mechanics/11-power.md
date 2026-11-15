---
id: phys-mech-power
title_ko: "일률"
title_en: "Power"
tags: [일률, 출력, 파워, power, watt]
importance: 2
related: [phys-mech-work, phys-rot-rotational-energy]
source: "book:BLIS편입 일반물리 3-10"
verified: false
---

## formula
$$
P = \frac{dW}{dt} = \frac{dE}{dt}, \qquad P = \mathbf{F}\cdot\mathbf{v}
$$

## conditions
- 단위 $\text{W} = \text{J/s}$. $1\,\text{hp} = 746\,\text{W}$.
- $P = Fv$는 그 순간의 힘과 속도로 구하는 순간 일률. 회전에서는 $P = \tau\omega$.

## explanation
### 쉽게 말하면
일률은 에너지가 바뀌는 빠르기다. 같은 일을 짧은 시간에 하면 일률이 크다.

- 등속으로 끄는데도 일률이 있는 경우: 마찰·항력에 맞서 계속 일을 하고 있기 때문. 끄는 힘의 일률 $Fv$가 열로 나가는 빠르기와 같다.
- 일을 직접 정의하기 어려운 경우(열, 전자기)에도 에너지 변화의 빠르기로 일률을 쓴다.

### $P = Fv$가 나오는 과정
짧은 시간 $dt$ 동안 힘 $F$가 물체를 $dx$만큼 옮기면 한 일은 $F\,dx$다. 이것을 걸린 시간으로 나누면 $P = F\dfrac{dx}{dt} = Fv$. 힘과 속도의 방향이 다르면 일과 마찬가지로 나란한 성분만 센다 ($\mathbf{F}\cdot\mathbf{v}$).

### 한 번 따라 하기
$1000\,\text{kg}$인 차가 저항력 $500\,\text{N}$을 받으며 $20\,\text{m/s}$로 등속 주행한다. 등속이면 알짜힘이 0이므로 엔진이 미는 힘도 $500\,\text{N}$이고, 엔진의 일률은 $P = Fv = 500 \times 20 = 10\,\text{kW}$다. 이 에너지는 속력을 올리는 데 쓰이지 않고 전부 저항력을 통해 열로 나간다.

## supplement
교재 내용을 옮기고, 쉬운 설명·스토리는 Claude가 추가했습니다. 쉬운 설명·그림 보강: P = Fv 유도와 계산 예.
