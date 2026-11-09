---
id: la-dec-transformation-table
title_ko: "기본 행렬변환 표준행렬 (2D)과 합성"
title_en: "Basic 2D transformations and composition"
tags: [회전, 반사, 사영, 층밀림, 합성변환, rotation, reflection, shear]
importance: 3
related: [la-dec-standard-matrix]
source: "notion:선대 05. 행렬의 고급 이론과 분해 (18~20강)"
verified: false
---

## formula
$$
R_\theta = \begin{pmatrix}\cos\theta&-\sin\theta\\\sin\theta&\cos\theta\end{pmatrix}, \qquad T_B\circ T_A = T_{BA}
$$

## conditions
| 변환 | 표준행렬 (2D) |
| --- | --- |
| $x$축 반사 | $\begin{pmatrix}1&0\\0&-1\end{pmatrix}$ |
| $y=x$ 반사 | $\begin{pmatrix}0&1\\1&0\end{pmatrix}$ |
| $x$축으로 사영 | $\begin{pmatrix}1&0\\0&0\end{pmatrix}$ |
| 반시계 회전 $\theta$ | $\begin{pmatrix}\cos\theta&-\sin\theta\\\sin\theta&\cos\theta\end{pmatrix}$ |
| $k$배 수축/팽창 | $\begin{pmatrix}k&0\\0&k\end{pmatrix}$ |
| $x$방향 층밀림 | $\begin{pmatrix}1&k\\0&1\end{pmatrix}$ |

## explanation
### 문제풀이 포인트 — 합성변환
여러 변환을 연속으로 적용하면 각 표준행렬을 **적용 순서의 역순으로 곱한다**: "$T_A$ 먼저, $T_B$ 나중"이면 최종 표준행렬은 $BA$ (오른쪽부터 적용). 행렬 곱의 비가환성과 직결.

## supplement
노션 정리 문서를 거의 그대로 옮겼습니다 (표현만 카드 형식에 맞춤).
