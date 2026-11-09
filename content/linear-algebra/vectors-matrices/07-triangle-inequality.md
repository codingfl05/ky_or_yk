---
id: la-vm-triangle-inequality
title_ko: "삼각부등식"
title_en: "Triangle inequality"
tags: [삼각부등식, 노름, triangle inequality]
importance: 2
related: []
source: "notion:선대 01. 벡터와 행렬 기초 (2~3강)"
verified: false
---

## formula
$$
\|\vec u+\vec v\| \le \|\vec u\|+\|\vec v\|, \qquad d(\vec u,\vec v)\le d(\vec u,\vec w)+d(\vec w,\vec v)
$$

## explanation
### 문제풀이 포인트
- $\|3\vec u\| - 5\|\vec v\| + \|\vec w\|$처럼 **노름의 선형결합**과 $\|3\vec u - 5\vec v+\vec w\|$처럼 **먼저 벡터를 합친 뒤 노름을 취하는 것**은 전혀 다른 값 — 삼각부등식 문제에서 등호조건(평행)까지 함께 자주 물어봄.
- 표준단위벡터 $\mathbf e_1,\dots,\mathbf e_n$을 이용한 전개 $\vec v=\sum v_i\mathbf e_i$는 **4강 이후 "기저"의 가장 단순한 예시**임을 인지해두면 좋음.

## supplement
노션 정리 문서를 거의 그대로 옮겼습니다. 등호조건 '평행'은 정확히는 같은 방향(한쪽이 다른 쪽의 음이 아닌 실수배)일 때입니다 — 반대 방향으로 평행하면 등호가 성립하지 않습니다.
