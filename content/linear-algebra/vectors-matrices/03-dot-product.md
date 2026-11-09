---
id: la-vm-dot-product
title_ko: "내적과 직교 판정"
title_en: "Dot product"
tags: [내적, 직교, 각도, dot product, orthogonal]
importance: 3
related: [la-vm-projection, calc-vec-dot-product]
source: "notion:선대 01. 벡터와 행렬 기초 (2~3강)"
verified: false
---

## formula
$$
\vec{u}\cdot\vec{v} = u_1v_1+u_2v_2+u_3v_3 = \|\vec u\|\,\|\vec v\|\cos\theta
$$

## conditions
- 직교 판정: $\vec u \cdot \vec v = 0 \iff \vec u \perp \vec v$ (영벡터 포함 시 항상 성립하므로 주의).

## explanation
### 문제풀이 포인트
- 각도를 구하는 문제는 항상 $\cos\theta = \dfrac{\vec u\cdot\vec v}{\|\vec u\|\|\vec v\|}$로 역산. 각도 자체보다 $\cos\theta$의 부호(예각/둔각)만 물어보는 문제가 많음.
- 이 내적의 공리(대칭성·선형성·양정치성, THEOREM 1.2.3)는 **26강 스칼라 내적(inner product)**의 일반화된 정의로 그대로 이어짐 — 일반 벡터공간에서 "내적"이라 부르려면 이 공리들을 만족해야 한다는 것이 핵심 연결고리.

## supplement
노션 정리 문서를 거의 그대로 옮겼습니다 (표현만 카드 형식에 맞춤).
