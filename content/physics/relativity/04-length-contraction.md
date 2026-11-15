---
id: phys-rel-length-contraction
title_ko: "길이 수축"
title_en: "length contraction"
question: "고유 길이와 움직이는 관찰자가 잰 길이의 관계는?"
tags: [길이 수축, 고유 길이, 로런츠 수축, length contraction, proper length]
importance: 3
related: [phys-rel-time-dilation, phys-rel-postulates, phys-rel-lorentz-transform]
source: "book:BLIS편입 일반물리 21-12"
verified: false
---

## formula
$$
L = \frac{L_0}{\gamma} = L_0\sqrt{1 - \frac{v^2}{c^2}}
$$

## conditions
- $L_0$(고유 길이, proper length): 그 물체나 공간에 대해 함께 정지한 관찰자가 잰 길이.
- $L$: 그 물체나 공간에 대해 속력 $v$로 움직이는 관찰자가 잰 길이.
- $\gamma \ge 1$이므로 항상 $L \le L_0$. 고유 길이가 가장 길다.
- 수축은 운동 방향으로만 일어난다. 운동 방향에 수직인 길이는 그대로다.

## explanation
::fig length-contraction | 움직이는 막대는 운동 방향으로만 짧게 측정된다.

### 먼저 떠올릴 것
- 시간 지연: 두 사건을 한 자리에서 본 관찰자의 시간 $\Delta t_0$가 가장 짧고, 다른 관찰자는 $\Delta t = \gamma\,\Delta t_0$를 잰다.
- 움직이는 막대의 길이를 재려면 양 끝의 위치를 동시에 읽어야 한다. 그런데 동시는 관찰자마다 다르다. 그래서 길이도 달라진다.

### 한 번 따라 하기
지구(B)에서 볼 때 거리 $L_0$만큼 떨어진 두 점 P, Q 사이를 우주선(A)이 속력 $v$로 지나간다.

1. B의 입장: P와 Q는 B에 대해 정지해 있다. 이 거리가 고유 길이다. 우주선이 지나가는 데 걸린 시간을 $\Delta t$라 하면

$$
L_0 = v\,\Delta t
$$

2. A의 입장: "P를 지남"과 "Q를 지남"은 둘 다 A가 있는 자리에서 일어난다. 그러니 A가 잰 시간이 고유 시간 $\Delta t_0$이고, A가 본 거리는

$$
L = v\,\Delta t_0
$$

3. $\Delta t = \gamma\,\Delta t_0$를 넣으면 $L = L_0/\gamma$.

### 고유 길이 찾는 법
"그 길이의 양 끝과 함께 가만히 있는 사람이 누구인가"를 묻는다.
- 우주선의 길이 → 승객이 고유 길이.
- 지구와 별 사이의 거리 → 지구에 있는 사람이 고유 길이, 승객에게는 그 거리가 줄어든다.

### 자주 틀리는 포인트
- 한 문제 안에서 고유 시간을 재는 사람과 고유 길이를 재는 사람이 서로 다른 경우가 많다. 위 예에서 고유 시간은 A, 고유 길이는 B다.
- 서로가 서로를 짧게 본다. A에게는 B와 공간 PQ가 줄어 보이고, B에게는 A의 우주선이 줄어 보인다.
- 속력은 두 관찰자에게 같다 ($v = L_0/\Delta t = L/\Delta t_0$). 시간과 길이가 같은 비율로 줄어서 그렇다.

### 숫자 예
고유 길이 $100\,\text{m}$인 우주선이 $0.6c$로 지나가면 ($\gamma = 1.25$) 땅에서 잰 길이는

$$
L = \frac{100}{1.25} = 80\,\text{m}
$$

## supplement
교재 내용을 옮기고, "고유 길이 찾는 법"과 숫자 예, 그림(length-contraction)은 Claude가 추가했습니다.
