---
id: la-vs-fundamental-subspaces
title_ko: "네 기본부분공간과 rank-nullity 정리"
title_en: "Fundamental subspaces and rank-nullity"
tags: [행공간, 열공간, 영공간, rank-nullity, 직교여공간, null space, orthogonal complement]
importance: 3
related: [la-vs-rref-solutions, la-vs-invertible-matrix-theorem]
source: "notion:선대 02. 벡터공간의 기초 (4~12강)"
verified: false
---

## formula
$$
\begin{aligned}
&\operatorname{Row}(A), \quad \operatorname{Col}(A), \\
&\operatorname{Null}(A)=\{x: Ax=\mathbf 0\}, \quad \operatorname{Null}(A^T)
\end{aligned}
$$

$$
\begin{aligned}
&\operatorname{rank}(A) + \operatorname{nullity}(A) = n \\
&(n = \text{number of columns})
\end{aligned}
$$

$$
\operatorname{Row}(A)^\perp = \operatorname{Null}(A), \qquad \operatorname{Col}(A)^\perp = \operatorname{Null}(A^T)
$$

## explanation
rank-nullity: $Ax=\mathbf0$의 해공간 차원(자유변수 개수)과 rank(묶인 변수 개수)를 더하면 전체 변수 개수.

### 문제풀이 포인트
- rank를 구하면 nullity는 자동으로 나옴 (반대도 성립) — 둘 중 계산이 쉬운 쪽만 구하고 나머지는 뺄셈.
- 직교여공간 관계는 사영정리, 내적공간에서 그대로 재사용 — "영공간을 구하면 자동으로 행공간에 대한 직교여공간을 구한 것".

## supplement
노션 정리 문서를 거의 그대로 옮겼습니다 (표현만 카드 형식에 맞춤).
