---
id: la-pq-quadratic-optimization
title_ko: "단위벡터 제약 이차형식 최적화"
title_en: "Constrained optimization of quadratic forms"
tags: [이차형식, 최댓값, 최솟값, 고윳값, rayleigh quotient, optimization]
importance: 3
related: [la-pq-principal-axis, calc-mv-lagrange]
source: "notion:선대 03. 사영과 이차형식 (13~15강)"
verified: false
---

## formula
$$
\max_{\|v\|=1} v^TAv = \lambda_{\max}, \qquad \min_{\|v\|=1} v^TAv = \lambda_{\min}
$$

## conditions
- $A$는 대칭행렬. 최댓값·최솟값은 각각 그 고윳값의 단위 고유벡터에서 달성.

## explanation
### 문제풀이 포인트
라그랑주 승수법으로 처음부터 풀 필요 없이, "단위벡터 제약 + 이차형식 최적화" 문제를 보면 즉시 **고윳값 계산 문제로 치환**하는 것이 표준 풀이. SVD에서 "특이값 = $A^TA$의 고윳값의 제곱근"이라는 정의의 근거이기도 하다.

## supplement
노션 정리 문서를 거의 그대로 옮겼습니다 (표현만 카드 형식에 맞춤).
