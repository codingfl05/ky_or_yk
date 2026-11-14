---
id: la-pq-orthogonal-diagonalization
title_ko: "직교대각화"
title_en: "Orthogonal diagonalization"
question: "직교대각화 가능 조건과 계산 절차는?"
tags: [직교대각화, 대칭행렬, orthogonal diagonalization, symmetric matrix]
importance: 3
related: [la-vs-diagonalization, la-pq-gram-schmidt, la-pq-principal-axis]
source: "notion:선대 03. 사영과 이차형식 (13~15강)"
verified: false
---

## formula
$$
\begin{aligned}
&A \text{ orthogonally diagonalizable} \\
&\quad {}\iff A \text{ has } n \text{ orthonormal eigenvectors} \\
&\quad {}\iff A \text{ is symmetric}
\end{aligned}
$$

$$
D = P^TAP \quad (P^{-1} = P^T)
$$

## conditions
- 실수 행렬 기준.

## explanation
"대칭행렬은 항상 대각화 가능"의 강화판 — 대칭행렬은 **직교행렬로** 대각화된다 (역행렬 계산이 전치로 대체됨).

### 문제풀이 포인트 — 표준 계산 절차
1. 각 고유공간의 기저를 구한다.
2. 각 고유공간 내에서 그람-슈미트로 정규직교기저를 만든다 (**서로 다른 고윳값의 고유벡터는 자동으로 직교**하므로, 그람-슈미트는 중복도가 2 이상일 때만 필요).
3. 정규직교 고유벡터들을 열로 쌓아 $P$를 만들면 $D=P^TAP$.

주축정리, 스펙트럼 정리에서 그대로 재사용되는 시험 최빈출 알고리즘.

## supplement
노션 정리 문서를 거의 그대로 옮겼습니다 (표현만 카드 형식에 맞춤).
