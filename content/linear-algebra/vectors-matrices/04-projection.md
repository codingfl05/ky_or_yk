---
id: la-vm-projection
title_ko: "정사영"
title_en: "Projection"
tags: [정사영, 사영, projection, gram-schmidt]
importance: 3
related: [la-vm-dot-product, calc-vec-projection]
source: "notion:선대 01. 벡터와 행렬 기초 (2~3강)"
verified: false
---

## formula
$$
\operatorname{proj}_{\vec v}\vec u = \left(\frac{\vec u\cdot \vec v}{\|\vec v\|^2}\right)\vec v
$$

$$
\|\operatorname{proj}_{\vec v}\vec u\| = \frac{|\vec u\cdot \vec v|}{\|\vec v\|}
$$

## explanation
노트에는 $(\|\vec u\|\cos\theta)\dfrac{\vec v}{\|\vec v\|}$ 형태로 유도되어 있는데, $\|\vec u\|\cos\theta = \dfrac{\vec u\cdot\vec v}{\|\vec v\|}$를 대입하면 위 표준형이 나옴.

### 문제풀이 포인트
- 이 공식은 **13강 Projection Theorem, Gram-Schmidt**에서 그대로 재사용되는 가장 중요한 도구. 정사영 공식을 벡터가 아니라 부분공간으로 확장한 것이 Gram-Schmidt이므로, 여기서부터 "분자는 내적, 분모는 자기 자신과의 내적(norm 제곱)"이라는 패턴을 체화해두면 15강 이차형식, 26강 일반 내적공간까지 동일 패턴이 반복됨.
- 정사영의 **크기**만 물으면 둘째 식으로 바로 계산 가능 (벡터 전체를 구할 필요 없음 — 계산량을 줄이는 숏컷).

## supplement
노션 정리 문서를 거의 그대로 옮겼습니다 (표현만 카드 형식에 맞춤).
