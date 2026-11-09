---
id: la-dec-jordan
title_ko: "조르당 표준형"
title_en: "Jordan canonical form"
tags: [조르당 표준형, 조르당 블록, jordan form]
importance: 2
related: [la-vs-diagonalization, la-de-systems-eigen]
source: "notion:선대 05. 행렬의 고급 이론과 분해 (18~20강)"
verified: false
---

## formula
$$
A = PJP^{-1}, \qquad J = \begin{pmatrix}J_1 & & \\ & \ddots & \\ & & J_k\end{pmatrix}, \qquad J_i = \begin{pmatrix}\lambda&1&&\\&\lambda&\ddots&\\&&\ddots&1\\&&&\lambda\end{pmatrix}
$$

## conditions
- 대각화 불가능해도 존재 (복소수 범위).
- 고윳값 $\lambda$의 조르당 블록 개수 = 기하적 중복도(고유공간의 차원), 블록 크기의 합 = 대수적 중복도.

## explanation
GM < AM이라 대각화가 안 되는 경우, 대각선 바로 위에 1을 허용하는 "거의 대각" 형태로 타협한 것.

### 문제풀이 포인트
- "서로 다른 조르당 표준형의 개수"는 각 고윳값의 대수적 중복도를 블록 크기들의 분할(partition)로 나누는 경우의 수를 세는 조합론 문제.
- 조르당 형태여도 대각합·행렬식은 대각원소(고윳값)들로 결정된다.

## supplement
노션 정리 문서를 거의 그대로 옮겼습니다 (표현만 카드 형식에 맞춤).
