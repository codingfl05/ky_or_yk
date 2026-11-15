---
id: phys-rel-postulates
title_ko: "특수 상대성 이론의 가정과 로런츠 인자"
title_en: "postulates of special relativity and the Lorentz factor"
question: "특수 상대성 이론의 두 가정은 무엇이고, 로런츠 인자는 어떻게 정의하는가?"
tags: [상대성 이론, 광속 불변, 관성 좌표계, 로런츠 인자, 감마, 사건, special relativity, postulates, Lorentz factor, gamma, event]
importance: 3
related: [phys-rel-time-dilation, phys-rel-length-contraction, phys-mech-relative-velocity]
source: "book:BLIS편입 일반물리 21-02"
verified: false
---

## formula
$$
\gamma = \frac{1}{\sqrt{1 - \beta^2}}, \qquad \beta = \frac{v}{c}
$$

$$
c = 3 \times 10^8\,\text{m/s}
$$

## conditions
- 특수 상대성 이론은 관성 좌표계(inertial frame), 곧 가속하지 않는 관찰자에게만 쓴다.
- 가정 1: 모든 관성 좌표계의 관찰자에게 물리 법칙은 같다.
- 가정 2: 진공에서 빛의 속력은 모든 방향, 모든 관성 좌표계에서 $c$로 같다 (광속 불변).
- $v < c$이므로 항상 $\gamma \ge 1$. 물체, 에너지, 정보 어느 것도 $c$보다 빨리 갈 수 없다.

## explanation
::fig gamma-curve | 로런츠 인자는 느린 속력에서는 거의 1이라 일상에서는 상대성 효과가 보이지 않는다.

### 먼저 떠올릴 것
- 역학에서 배운 상대 속도는 "속도를 그냥 더하고 뺀다"였다. 기차 안에서 공을 던지면 땅에서 본 공의 속도는 기차 속도 + 던진 속도다.
- 빛에는 이 덧셈이 통하지 않는다. 달리는 기차에서 쏜 빛도, 서 있는 사람이 쏜 빛도 누가 재든 $c$다.
- 속력 = 거리 ÷ 시간인데 속력이 모두에게 같으려면, 거리와 시간이 관찰자마다 달라져야 한다. 이것이 상대성 이론의 출발점이다.

### 기호 풀이
- $\beta$: 속력이 광속의 몇 배인지 ($0.6c$면 $\beta = 0.6$).
- $\gamma$(로런츠 인자): 시간이 얼마나 늘어나고 길이가 얼마나 줄어드는지 정하는 배율.
- 사건(event): "어디서, 언제" 일어났는지 정해지는 일 하나. 전구가 켜졌다, 두 입자가 충돌했다 같은 것. 상대성 이론 문제는 사건 두 개 사이의 거리와 시간을 관찰자별로 비교하는 문제다.

### 자주 쓰는 값
| $\beta$ | $\gamma$ |
|---|---|
| $0.6$ | $1.25$ |
| $0.8$ | $\dfrac{5}{3} \approx 1.67$ |
| $\dfrac{\sqrt{3}}{2} \approx 0.866$ | $2$ |

$0.6$과 $0.8$은 $3:4:5$ 직각삼각형에서 나온다 ($\sqrt{1 - 0.6^2} = 0.8$). 시험에 거의 이 값들이 나온다.

### 자주 틀리는 포인트
- "정지한 관찰자"는 절대적으로 정지한 사람이 아니다. 문제에서 기준으로 삼은 사람일 뿐이다. 누가 기준인지 먼저 정한다.
- 대략 $0.1c$보다 느리면 $\gamma \approx 1$이라 고전 역학으로 충분하다.

## supplement
교재 내용을 옮기고, 자주 쓰는 $\gamma$ 값 표와 그림(gamma-curve), 쉬운 설명은 Claude가 추가했습니다.
