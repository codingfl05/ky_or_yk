---
id: la-vs-determinant-properties
title_ko: "행렬식의 성질"
title_en: "Properties of determinants"
tags: [행렬식, 성질, determinant]
importance: 3
related: [la-vs-invertible-matrix-theorem]
source: "notion:선대 02. 벡터공간의 기초 (4~12강)"
verified: false
---

## formula
$$
\det(AB) = \det(A)\det(B)
$$

$$
\det(A^{-1}) = \frac{1}{\det(A)}
$$

$$
\det(A^T) = \det(A)
$$

$$
\det(kA) = k^n\det(A)
$$

## explanation
### 문제풀이 포인트
- $\det(AB)=\det(A)\det(B)$는 $A,B$가 정사각행렬일 때만 성립 — 크기 다른 행렬 곱의 함정 주의.
- $\det(kA)=k^n\det(A)$에서 지수 $n$(행렬 크기)을 빼먹는 실수가 잦음.
- $A$가 가역이면 $\det(A)\neq0$ — 가역행렬 동치조건 리스트의 핵심 항목.

## supplement
노션 정리 문서를 거의 그대로 옮겼습니다 (표현만 카드 형식에 맞춤).
