---
id: calc-vec-plane-equation
title_ko: "공간에서 평면의 방정식"
title_en: "Equation of a plane"
question: "법선벡터 <a, b, c>로 평면의 방정식을 세우는 법과 두 평면의 교선을 포함하는 평면은?"
tags: [평면의 방정식, 법선벡터, 교선, plane equation, normal vector]
importance: 3
related: [calc-vec-line-equation, calc-vec-distances, calc-vec-cross-product]
source: "book:BLIS편입 다변수 1장 (04 직선과 평면의 방정식)"
verified: false
---

## formula
$$
\begin{aligned}
&a(x - x_0) + b(y - y_0) + c(z - z_0) = 0 \\
&(\mathbf{n} = \langle a, b, c\rangle)
\end{aligned}
$$

$$
\begin{aligned}
&(a_1x + b_1y + c_1z - d_1) \\
&\quad {}+ k(a_2x + b_2y + c_2z - d_2) = 0
\end{aligned}
$$

## conditions
- 세 점 $P$, $Q$, $R$을 지나는 평면: $\mathbf{n} = \overrightarrow{PQ}\times\overrightarrow{PR}$.
- 두 번째 식: 두 평면의 교선을 포함하는 평면들 (단, 두 번째 평면 자신은 빠짐). 지나는 점을 대입해 $k$를 정한다.
- 두 평면의 사잇각: $\cos\theta = \dfrac{|\mathbf{n}_1\cdot\mathbf{n}_2|}{|\mathbf{n}_1||\mathbf{n}_2|}$. 직선과 평면의 사잇각: $\sin\theta = \dfrac{|\mathbf{d}\cdot\mathbf{n}|}{|\mathbf{d}||\mathbf{n}|}$.
- 두 평면의 교선 방향벡터: $\mathbf{n}_1\times\mathbf{n}_2$.

## explanation
직선과 평면의 사잇각은 $\cos$가 아니라 $\sin$이라는 점(법선과의 각의 여각)이 자주 틀린다. 평면에 수직인 직선의 방향벡터 = 평면의 법선벡터.

## supplement
교선을 포함하는 평면족, 사잇각 공식(직선-평면은 sin)을 추가했습니다. 교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
