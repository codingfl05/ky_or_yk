---
id: phys-rel-time-dilation
title_ko: "시간 지연"
title_en: "time dilation"
question: "고유 시간과 다른 관찰자가 잰 시간 간격의 관계는?"
tags: [시간 지연, 시간 팽창, 고유 시간, 빛 시계, 쌍둥이 역설, time dilation, proper time, light clock]
importance: 3
related: [phys-rel-postulates, phys-rel-length-contraction, phys-rel-lorentz-transform]
source: "book:BLIS편입 일반물리 21-08"
verified: false
---

## formula
$$
\Delta t = \gamma\,\Delta t_0 = \frac{\Delta t_0}{\sqrt{1 - v^2/c^2}}
$$

## conditions
- $\Delta t_0$(고유 시간, proper time): 두 사건이 같은 장소에서 일어났다고 보는 관찰자가 잰 시간 간격.
- $\Delta t$: 두 사건이 다른 장소에서 일어났다고 보는 관찰자가 잰 시간 간격.
- $\gamma \ge 1$이므로 항상 $\Delta t \ge \Delta t_0$. 고유 시간이 가장 짧다.

## explanation
::fig light-clock | 빛의 속력이 같으니, 더 긴 길을 가는 것으로 보는 B가 더 긴 시간을 잰다.

### 먼저 떠올릴 것
- 광속 불변: A에게도 B에게도 빛의 속력은 $c$다.
- 시간 = 거리 ÷ 속력. 속력이 같으면 긴 길을 본 사람이 긴 시간을 잰다.

### 한 번 따라 하기 (빛 시계)
우주선 안 바닥의 광원에서 나온 빛이 높이 $D$의 거울에 반사되어 돌아온다. 사건 1은 빛의 출발, 사건 2는 빛의 도착이다.

1. 우주선 안의 A: 빛이 수직으로 왕복한다. 두 사건이 같은 장소에서 일어났다.

$$
\Delta t_0 = \frac{2D}{c}
$$

2. 밖의 B: 우주선이 움직이므로 빛이 비스듬히 올라갔다 내려온다. 한쪽 경로의 길이는 피타고라스 정리로

$$
L = \sqrt{D^2 + \left(\frac{v\,\Delta t}{2}\right)^2}, \qquad \Delta t = \frac{2L}{c}
$$

3. 두 식에서 $D$와 $L$을 없애면 $\Delta t = \gamma\,\Delta t_0$.

### 고유 시간 찾는 법
"두 사건이 한 자리에서 일어났다고 보는 사람이 누구인가"를 묻는다.
- 우주선 승객의 손목시계로 잰 여행 시간 → 출발과 도착이 모두 "승객이 있는 자리"에서 일어난다 → 승객이 고유 시간.
- 지구에서 본 그 여행 시간 → 출발은 지구, 도착은 먼 행성 → 지구가 $\gamma$배 긴 시간.

### 숫자 예
$0.8c$로 나는 우주선의 승객이 $12$년이 걸렸다고 잰 여행은 ($\gamma = 5/3$)

$$
\Delta t = \frac{5}{3} \times 12 = 20\,\text{년}
$$

지구에서는 $20$년이 걸린 것으로 본다.

### 자주 틀리는 포인트
- "움직이는 사람의 시간이 느리다"로 외우면 누가 움직이는지 헷갈린다. "두 사건을 한 자리에서 본 사람이 가장 짧게 잰다"로 기억한다.
- $\gamma$는 항상 고유 시간 쪽에 곱한다. 답이 고유 시간보다 짧게 나오면 거꾸로 한 것이다.
- 쌍둥이 역설은 한쪽이 방향을 바꾸며 가속하므로 특수 상대성 이론의 대칭적인 상황이 아니다.

## supplement
교재의 빛 시계 유도를 옮기고, "고유 시간 찾는 법"과 숫자 예, 그림(light-clock)은 Claude가 추가했습니다.
