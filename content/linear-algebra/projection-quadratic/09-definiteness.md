---
id: la-pq-definiteness
title_ko: "정부호성 판정"
title_en: "Definiteness tests"
question: "대칭행렬의 양의 정부호·음의 정부호를 판정하는 두 가지 방법은?"
tags: [정부호, 양의 정부호, 선도주소행렬식, positive definite, leading principal minor]
importance: 3
related: [la-pq-principal-axis, calc-mv-second-derivative-test]
source: "notion:선대 03. 사영과 이차형식 (13~15강)"
verified: false
---

## formula
$$
A \text{ positive definite} \iff |A_1|>0,\ |A_2|>0,\ \ldots,\ |A_n|>0
$$

$$
A \text{ negative definite} \iff |A_1|<0,\ |A_2|>0,\ |A_3|<0,\ \ldots \ (\text{alternating})
$$

$$
\text{all } \lambda_i>0 \Rightarrow \text{positive definite}, \quad \text{all } \lambda_i<0 \Rightarrow \text{negative definite}, \quad \text{mixed signs} \Rightarrow \text{indefinite}
$$

## conditions
- $A$는 대칭행렬. $|A_k|$: 왼쪽 위 $k\times k$ 선도주소행렬식(leading principal minor).
- 준정부호(semidefinite)는 선도주소행렬식만으로 판정할 수 없다 (고윳값 $\ge 0$으로 판정).

## explanation
### 문제풀이 포인트 — 방법 선택 기준
- $3\times3$ 이하이고 성분이 간단하면 **선도주소행렬식**이 빠르다 (특성방정식 안 풀어도 됨).
- 크기가 크거나 고윳값이 이미 알려진 문제라면 **고윳값 부호 판정**이 압도적으로 빠르다.
- 뒤에서 두 번 더 나온다: "$A^TA$는 항상 양의 준정부호"(최소제곱, SVD의 근거), 스칼라 내적의 "양의 정부호" 정의.

## supplement
노션 정리 문서를 거의 그대로 옮겼습니다. 준정부호는 선도주소행렬식으로 판정할 수 없다는 주의를 추가했습니다 (예: diag(0, −1)은 선도주소행렬식이 0, 0이지만 음의 준정부호).
