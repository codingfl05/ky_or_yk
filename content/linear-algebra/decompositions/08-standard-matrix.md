---
id: la-dec-standard-matrix
title_ko: "행렬변환과 표준행렬"
title_en: "Matrix transformations and standard matrix"
tags: [행렬변환, 표준행렬, 선형변환, standard matrix, linear transformation]
importance: 3
related: [la-dec-transformation-table, la-vs-invertible-matrix-theorem]
source: "notion:선대 05. 행렬의 고급 이론과 분해 (18~20강)"
verified: false
---

## formula
$$
T_A(x)=Ax \qquad\Longrightarrow\qquad A = [\,T_A(e_1)\,|\,T_A(e_2)\,|\,\cdots\,|\,T_A(e_n)\,]
$$

$$
\ker(T_A)=\{0\} \iff R(T_A)=\mathbb R^n \iff T_A \text{ is bijective} \iff A \text{ invertible}
$$

## conditions
- 둘째 줄은 $T_A:\mathbb R^n\to\mathbb R^n$ (정사각)일 때 — 가역행렬 동치조건에 추가되는 항목.

## explanation
### 문제풀이 포인트
- 표준행렬은 기저벡터 $e_i$를 하나씩 대입해서 결과를 열로 쌓기만 하면 되는 기계적 계산.
- "가역성"이라는 하나의 성질이 대수(행렬식), 기하(변환의 일대일대응), 공간(rank, 기저)의 언어로 각각 번역된 것 — 새로 외울 것이 거의 없다.

## supplement
노션 정리 문서를 거의 그대로 옮겼습니다 (표현만 카드 형식에 맞춤).
