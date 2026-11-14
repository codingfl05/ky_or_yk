---
id: la-gs-linear-map
title_ko: "선형사상의 정의와 판별"
title_en: "Linear maps"
tags: [선형사상, 선형변환, linear map, linear transformation]
importance: 3
related: [la-dec-standard-matrix]
source: "notion:선대 06. 일반 벡터공간과 선형사상 (22~25강)"
verified: false
---

## formula
$$
\begin{aligned}
&F \text{ linear} \iff \\
&\quad F(u+v)=F(u)+F(v) \ \text{and}\ F(cv)=cF(v)
\end{aligned}
$$

## explanation
행렬변환의 성질(가산성, 동차성)을 일반 벡터공간(다항식공간, 함수공간 등)으로 확장한 것. 선형사상이면 $F(O)=O$가 항상 성립 — 이게 깨지면 즉시 선형사상 아님.

### 문제풀이 포인트 — 빠른 반례 찾기
- $T(x,y)=(x^2,y)$: 제곱항이 있으면 동차성이 깨짐 → 비선형.
- $T(x,y)=(x,y+1)$: 상수항이 있으면 $T(0)\ne 0$ → 비선형.
- 반대로 성분이 변수들의 1차 결합으로만 이루어져 있으면(상수항·제곱항·곱셈항 없이) 선형사상.

## supplement
노션 정리 문서를 거의 그대로 옮겼습니다 (표현만 카드 형식에 맞춤).
