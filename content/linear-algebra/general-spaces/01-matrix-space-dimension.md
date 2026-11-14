---
id: la-gs-matrix-space-dimension
title_ko: "행렬공간의 차원과 부분공간 차원 숏컷"
title_en: "Dimension of matrix spaces"
tags: [행렬공간, 차원, 대칭행렬, 대각합, matrix space, dimension]
importance: 3
related: [la-vs-dimension]
source: "notion:선대 06. 일반 벡터공간과 선형사상 (22~25강)"
verified: false
---

## formula
$$
\dim(\operatorname{Mat}_{m\times n}(K)) = mn
$$

$$
\dim(\text{symmetric } n\times n) = \frac{n(n+1)}{2}
$$

$$
\dim(\operatorname{tr}=0) = n^2-1
$$

## conditions
- 표준기저: $E_{ij}$($(i,j)$ 성분만 1, 나머지 0) 전체.

## explanation
행렬도 결국 성분 나열이므로 $\mathbb R^{mn}$과 동형(isomorphic). trace $=0$이라는 조건 하나가 차원을 1 줄인다 (rank-nullity의 "조건 하나당 차원 1 감소" 감각).

### 문제풀이 포인트 — 최고 숏컷
새로운 벡터공간이 나오면 "원소를 몇 개의 자유로운 실수 성분으로 표현할 수 있는가"를 세는 것이 차원 계산의 지름길 — 기저를 명시적으로 나열하지 않아도 된다.

## supplement
노션 정리 문서를 거의 그대로 옮겼습니다 (표현만 카드 형식에 맞춤).
