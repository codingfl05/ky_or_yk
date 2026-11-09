---
id: la-vm-matrix-multiplication
title_ko: "행렬 곱셈과 열-행 전개"
title_en: "Matrix multiplication and column-row expansion"
tags: [행렬 곱셈, 열-행 전개, 비가환, matrix multiplication, rank-1]
importance: 3
related: []
source: "notion:선대 01. 벡터와 행렬 기초 (2~3강)"
verified: false
---

## formula
$$
A=[a_{ij}]_{m\times n}, \qquad (AB)_{ij}=\sum_{k=1}^{r} a_{ik}b_{kj}
$$

$$
AB = c_1 r_1 + c_2 r_2 + \cdots + c_r r_r
$$

## conditions
- 열-행 전개(column-row expansion): $c_k$는 $A$의 $k$번째 열벡터, $r_k$는 $B$의 $k$번째 행벡터 — 각 항은 rank 1 행렬.

## explanation
### 문제풀이 포인트
- 열-행 전개는 **19강 SVD, 26강 이후 작용소 이론**에서 "행렬을 rank-1 행렬들의 합으로 분해"하는 사고방식의 원형. SVD를 배운 뒤 다시 돌아와서 보면 같은 아이디어임을 알 수 있음.
- 행렬 곱셈은 **결합법칙은 성립하지만 교환법칙은 성립하지 않는다** — $AB\neq BA$가 일반적. 시험에서 "다음이 항상 성립하는가"류 참/거짓 문제의 단골 함정.

## supplement
노션 정리 문서를 거의 그대로 옮겼습니다 (표현만 카드 형식에 맞춤).
