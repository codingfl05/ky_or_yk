---
id: calc-vec-distances
title_ko: "점·직선·평면 사이의 거리"
title_en: "Distances in space"
question: "점과 평면, 평행한 두 평면, 점과 직선, 꼬인 두 직선 사이의 거리 공식은?"
tags: [거리, 점과 평면 사이의 거리, 꼬인 위치, distance, skew lines]
importance: 3
related: [calc-vec-plane-equation, calc-vec-line-equation]
source: "book:BLIS편입 다변수 1장 (04 직선과 평면의 방정식)"
verified: false
---

## formula
$$
\begin{aligned}
&d(P, \text{plane}) = \frac{|ax_0 + by_0 + cz_0 - d|}{\sqrt{a^2 + b^2 + c^2}} \\
&(ax + by + cz = d)
\end{aligned}
$$

$$
d(\text{parallel planes}) = \frac{|d_1 - d_2|}{\sqrt{a^2 + b^2 + c^2}}
$$

$$
d(P, \text{line}) = \frac{|\overrightarrow{QP}\times\mathbf{u}|}{|\mathbf{u}|}
$$

$$
d(\text{skew lines}) = \frac{|\overrightarrow{P_1P_2}\cdot(\mathbf{u}_1\times\mathbf{u}_2)|}{|\mathbf{u}_1\times\mathbf{u}_2|}
$$

## conditions
- 평행한 두 평면은 $ax + by + cz = d_1$, $ax + by + cz = d_2$처럼 법선벡터를 같게 맞춘 뒤 쓴다.
- 점과 직선: $Q$는 직선 위의 점, $\mathbf{u}$는 방향벡터. 꼬인 직선: $P_i$는 각 직선 위의 점.

## explanation
꼬인 두 직선의 거리는 두 직선에 공통으로 수직인 방향($\mathbf{u}_1\times\mathbf{u}_2$)으로의 스칼라 사영이다. 직선과 평행한 평면 사이의 거리는 직선 위의 아무 점과 평면 사이의 거리.

## supplement
교재 텍스트에서 거리 공식 본문이 추출되지 않아(문제만 남음) 표준 공식으로 정리했습니다. 교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
