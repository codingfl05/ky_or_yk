---
id: la-pq-principal-axis
title_ko: "주축정리"
title_en: "Principal axis theorem"
tags: [주축정리, 이차형식, 표준형, principal axis theorem]
importance: 3
related: [la-pq-orthogonal-diagonalization, la-pq-quadratic-form-matrix]
source: "notion:선대 03. 사영과 이차형식 (13~15강)"
verified: false
---

## formula
$$
\begin{aligned}
&A=PDP^T \implies v^TAv = y^TDy \\
&\quad {}= k_1y_1^2+\cdots+k_ny_n^2
\end{aligned}
$$

$$
y=P^Tv
$$

## explanation
교차항이 있는 이차형식을 직교좌표변환(회전)으로 교차항이 없는 "표준형"으로 바꿀 수 있다. 이때 계수 $k_i$는 정확히 $A$의 고윳값들이다.

## supplement
노션 정리 문서를 거의 그대로 옮겼습니다 (표현만 카드 형식에 맞춤).
