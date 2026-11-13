---
id: phys-mech-momentum-impulse
title_ko: "운동량과 충격량"
title_en: "Momentum and impulse"
question: "운동량, 충격량의 정의와 힘과의 관계는?"
tags: [운동량, 충격량, 평균 힘, 힘-시간 그래프, momentum, impulse]
importance: 3
related: [phys-mech-momentum-conservation, phys-mech-newton-second-law]
source: "book:BLIS편입 일반물리 5-02~04"
verified: false
---

## formula
$$
\mathbf{p} = m\mathbf{v}, \qquad \mathbf{F}_{\text{net}} = \frac{d\mathbf{p}}{dt}
$$

$$
\mathbf{J} = \int\mathbf{F}\,dt = \Delta\mathbf{p}, \qquad F_{\text{avg}} = \frac{J}{\Delta t}
$$

## conditions
- 운동량과 충격량은 벡터. 단위 $\text{kg}\cdot\text{m/s} = \text{N}\cdot\text{s}$.
- 충격량은 $F$–$t$ 그래프의 넓이.

## explanation
### 일과 충격량의 짝
| | 힘을 거리로 쌓으면 | 힘을 시간으로 쌓으면 |
|---|---|---|
| 양 | 일 $\int F\,dx$ | 충격량 $\int F\,dt$ |
| 바뀌는 것 | 운동 에너지 (스칼라) | 운동량 (벡터) |

충돌은 이동 거리보다 지속 시간이 분명하므로 충격량으로 다룬다.

### 문제풀이 포인트
- 튕겨 나오면 방향이 반대라 운동량 변화가 커진다: $v$로 와서 $v'$로 튕기면 $|\Delta p| = m(v + v')$.
- 같은 충격량이라도 시간을 늘리면 평균 힘이 준다 (에어백, 무릎 굽히기).

## story
계란을 떨어뜨렸을 때 깨지느냐는 운동량 변화(충격량)가 아니라 그 변화를 얼마나 짧은 시간에 겪느냐(평균 힘)에 달려 있다. 방석은 충격량은 그대로 두고 시간만 늘려 준다.

## supplement
교재 내용을 옮기고, 쉬운 설명·스토리는 Claude가 추가했습니다.
