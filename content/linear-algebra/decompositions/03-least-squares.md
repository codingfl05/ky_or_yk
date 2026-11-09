---
id: la-dec-least-squares
title_ko: "최소제곱해와 정규방정식"
title_en: "Least squares and the normal equation"
question: "Ax = b가 해가 없을 때 최소제곱해를 구하는 정규방정식은?"
tags: [최소제곱, 정규방정식, 선형회귀, least squares, normal equation]
importance: 3
related: [la-pq-projection-subspace, la-vs-linear-independence]
source: "notion:선대 05. 행렬의 고급 이론과 분해 (18~20강)"
verified: false
---

## formula
$$
A^TAx=A^Tb
$$

$$
x=(A^TA)^{-1}A^Tb \quad (A^TA \text{ invertible})
$$

## conditions
- $A^TA$가 가역일 필요충분조건: $A$의 열들이 일차독립.

## explanation
$Ax$는 항상 $\operatorname{Col}(A)$ 안에 있으므로 $b$가 그 밖에 있으면 $Ax=b$는 풀리지 않는다. 대신 $b$를 $\operatorname{Col}(A)$로 **직교사영**한 점에 가장 가까운 $Ax$를 찾는 것 — 사영정리의 정면 응용.

### 문제풀이 포인트
- 유도 핵심: $b-Ax \perp \operatorname{Col}(A) \iff A^T(b-Ax)=0 \iff A^TAx=A^Tb$.
- 선형회귀직선 $y=ax+b$: 각 행이 $[x_i, 1]$인 행렬 $A$와 각 행이 $y_i$인 벡터 $b$로 세팅한 뒤 정규방정식을 푼다.

## supplement
노션 정리 문서를 거의 그대로 옮겼습니다 (표현만 카드 형식에 맞춤).
