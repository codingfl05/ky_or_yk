---
id: calc-mv-tangent-plane
title_ko: "접평면과 법선"
title_en: "Tangent planes and normal lines"
question: "곡면 F(x, y, z)=0과 z=f(x, y) 위의 점에서의 접평면, 두 곡면의 교선의 접선은?"
tags: [접평면, 법선, 그래디언트, 교선, tangent plane, normal line]
importance: 3
related: [calc-mv-gradient-geometry-summary, calc-mv-directional-derivative, calc-vec-plane-equation]
source: "book:BLIS편입 다변수 3장 (01 접평면의 방정식)"
verified: false
---

## formula
$$
\begin{aligned}
&F_x(x - x_0) + F_y(y - y_0) + F_z(z - z_0) = 0 \\
&(\nabla F = \langle F_x, F_y, F_z\rangle \text{ at } P_0)
\end{aligned}
$$

$$
z - z_0 = f_x(a, b)(x - a) + f_y(a, b)(y - b)
$$

$$
\mathbf{n} = \mathbf{r}_u\times\mathbf{r}_v \ (\text{parametric surface})
$$

$$
\mathbf{d} = \nabla g\times\nabla h \ (\text{curve } g = 0,\ h = 0)
$$

## conditions
- $\nabla F$는 등위면 $F = 0$에 수직인 법선벡터. 법선의 방정식: $\dfrac{x - x_0}{F_x} = \dfrac{y - y_0}{F_y} = \dfrac{z - z_0}{F_z}$.
- 두 곡면의 교선의 접선 방향은 두 법선벡터의 외적. 그 점에서의 법평면은 이 벡터를 법선으로 하는 평면.

## explanation
$z = f(x, y)$는 $F = f(x, y) - z = 0$으로 보면 첫 식과 같다. 접평면은 선형근사 $L(x, y)$의 그래프다.

## supplement
교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
