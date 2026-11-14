---
id: la-dec-rank-trace-properties
title_ko: "rank·trace·고윳값의 성질과 닮은 행렬"
title_en: "Properties of rank, trace, and similar matrices"
tags: [rank, 대각합, trace, 닮은 행렬, similar matrices]
importance: 3
related: [la-vs-eigen, la-vs-fundamental-subspaces]
source: "notion:선대 05. 행렬의 고급 이론과 분해 (18~20강)"
verified: false
---

## formula
$$
\begin{aligned}
&\operatorname{rank}(A) = \operatorname{rank}(A^T) \\
&\quad {}= \operatorname{rank}(AA^T) = \operatorname{rank}(A^TA)
\end{aligned}
$$

$$
\operatorname{rank}(AB)\le\min\{\operatorname{rank}(A),\operatorname{rank}(B)\}
$$

$$
A, C \text{ invertible} \implies \operatorname{rank}(ABC)=\operatorname{rank}(B)
$$

$$
\sum_i \lambda_i = \operatorname{tr}(A)
$$

$$
\prod_i \lambda_i = \det(A)
$$

$$
\operatorname{tr}(AB)=\operatorname{tr}(BA)
$$

## explanation
### 문제풀이 포인트
- $\operatorname{tr}(ABC)=\operatorname{tr}(BCA)=\operatorname{tr}(CAB)$ (순환 이동은 가능하나 임의 순서 교환은 불가) — $\operatorname{tr}(PDP^{-1})=\operatorname{tr}(DP^{-1}P)=\operatorname{tr}(D)$로 축약하는 근거.
- 닮은 행렬(similar matrices, $B=P^{-1}AP$)은 특성다항식·고윳값·trace·det가 모두 같다 — "대각화 = 닮음"과 연결.

## supplement
노션 정리 문서를 거의 그대로 옮겼습니다 (표현만 카드 형식에 맞춤).
