---
id: la-vs-cofactor-expansion
title_ko: "여인수 전개"
title_en: "Cofactor expansion"
tags: [행렬식, 여인수, 소행렬식, 사루스, determinant, cofactor]
importance: 2
related: []
source: "notion:선대 02. 벡터공간의 기초 (4~12강)"
verified: false
---

## formula
$$
\det(A) = \sum_{j=1}^{n} a_{ij}\,C_{ij} = \sum_{j=1}^{n} (-1)^{i+j} a_{ij}\,M_{ij}
$$

## conditions
- 임의의 행 $i$(또는 열)에 대해 성립. $M_{ij}$: $i$행 $j$열을 지운 소행렬식(minor), $C_{ij} = (-1)^{i+j}M_{ij}$: 여인수(cofactor).

## explanation
어떤 행/열을 기준으로 전개하든 값은 같다. 즉 계산량을 줄이려면 **0이 많은 행/열**을 골라서 전개하면 된다.

### 문제풀이 포인트
- $n\times n$ 행렬 전체를 전개하면 $O(n!)$이라 비효율적 — 실전에서는 **행연산으로 0을 만든 뒤 삼각행렬화**해서 대각원소의 곱으로 구하는 게 훨씬 빠름.
- 특정 행/열에 0이 많으면 그 줄로 여인수 전개하는 게 정석.
- $2\times2$는 $ad-bc$, $3\times3$은 사루스 법칙(rule of Sarrus).

## supplement
노션 정리 문서를 거의 그대로 옮겼습니다 (표현만 카드 형식에 맞춤).
