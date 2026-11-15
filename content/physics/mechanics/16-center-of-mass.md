---
id: phys-mech-center-of-mass
title_ko: "질량 중심"
title_en: "Center of mass"
tags: [질량 중심, 무게 중심, 가중 평균, center of mass]
importance: 2
related: [phys-mech-momentum-conservation, phys-mech-static-equilibrium]
source: "book:BLIS편입 일반물리 5-10~16"
verified: false
---

## formula
$$
x_{\text{com}} = \frac{\sum m_ix_i}{\sum m_i} = \frac{1}{M}\int x\,dm
$$

$$
\mathbf{F}_{\text{net,ext}} = M\mathbf{a}_{\text{com}}
$$

## conditions
- $y$, $z$도 같은 꼴. 밀도가 균일하면 대칭 중심이 질량 중심.
- 중력이 모든 곳에서 같으면 무게 중심 = 질량 중심.

## explanation
### 쉽게 말하면
질량을 가중치로 둔 위치의 평균이다. 크기가 있는 물체도 질량 중심 한 점에 질량이 다 모여 있다고 보면 직선 운동은 그대로 계산된다. 지금까지 물체를 점으로 다룬 것이 바로 이것.

- 외력이 0이면 질량 중심은 등속으로 움직인다 (가만히 있었다면 계속 가만히). 배 위에서 사람이 걸으면 배가 반대로 밀려 질량 중심은 제자리.
- 내력(폭발, 충돌)은 질량 중심의 운동을 바꾸지 못한다. 공중에서 터진 포탄의 조각들의 질량 중심은 원래 포물선을 그대로 따라간다.
- 구멍 뚫린 판: 원래 판에서 구멍 부분을 "음의 질량"으로 빼서 계산.

### 한 번 따라 하기
$1\,\text{kg}$이 $x = 0$에, $3\,\text{kg}$이 $x = 4\,\text{m}$에 있으면

$$
x_{\text{com}} = \frac{1\cdot0 + 3\cdot4}{1 + 3} = 3\,\text{m}
$$

무거운 쪽으로 치우친다. 두 물체까지의 거리 비는 질량의 반대 비($3 : 1$)가 된다. 시소에서 무거운 사람이 받침점 가까이 앉아야 균형이 맞는 것과 같은 계산이다.

## supplement
교재 내용을 옮기고, 쉬운 설명·스토리는 Claude가 추가했습니다. 쉬운 설명·그림 보강: 질량 중심 계산 예.
