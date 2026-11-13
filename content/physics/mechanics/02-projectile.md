---
id: phys-mech-projectile
title_ko: "포물선 운동"
title_en: "Projectile motion"
question: "비스듬히 던진 물체의 운동을 어떻게 나눠서 푸는가? 최고점 높이와 수평 도달 거리는?"
tags: [포물선 운동, 자유 낙하, 수평 도달 거리, 최고점, projectile motion, free fall, range]
importance: 3
related: [phys-mech-uniform-acceleration]
source: "book:BLIS편입 일반물리 2-04~12"
verified: false
---

## formula
$$
x = (v_0\cos\theta)\,t, \qquad y = (v_0\sin\theta)\,t - \frac{1}{2}gt^2
$$

$$
H = \frac{v_0^2\sin^2\theta}{2g}, \qquad R = \frac{v_0^2\sin2\theta}{g}
$$

## conditions
- 공기 저항 무시, $g$ 일정. $H$와 $R$은 같은 높이로 떨어질 때 (출발점과 도착점의 높이가 같을 때).
- 위쪽을 $+y$로 잡았다.

## explanation
### 핵심: 축끼리는 서로 모른다
- 수평 방향: 힘이 없으니 등속 운동.
- 연직 방향: 중력만 있으니 자유 낙하 (가속도 $-g$).
- 두 축을 이어 주는 것은 시간 $t$ 하나뿐이다. 한 축에서 시간을 구해 다른 축에 넣는다.

### 자주 쓰는 사실
- 최고점에서는 연직 속도만 $0$이다. 수평 속도 $v_0\cos\theta$는 남아 있다.
- 올라가는 시간 = 내려오는 시간 (같은 높이까지). 체공 시간 $T = \dfrac{2v_0\sin\theta}{g}$.
- 도달 거리는 $45^\circ$에서 최대이고, $\theta$와 $90^\circ - \theta$는 도달 거리가 같다.
- 수평으로 던진 것과 그냥 떨어뜨린 것은 같은 높이에서 동시에 땅에 닿는다.

## story
화면을 옆에서 보면 공이 포물선을 그리지만, 바닥에서 올려다보면 등속으로 지나가고, 정면에서 보면 위로 던졌다 떨어지는 공일 뿐이다. 두 그림자를 따로 풀고 시간으로 다시 묶는다.

## supplement
교재 내용을 옮기고, 쉬운 설명·스토리는 Claude가 추가했습니다.
