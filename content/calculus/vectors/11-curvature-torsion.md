---
id: calc-vec-curvature-torsion
title_ko: "곡률과 열률"
title_en: "Curvature and torsion"
question: "곡선의 곡률과 열률 공식, 곡률원의 중심은?"
tags: [곡률, 열률, 비틀림률, 곡률원, curvature, torsion, osculating circle]
importance: 3
related: [calc-vec-tnb-frame]
source: "book:BLIS편입 다변수 1장 (06 곡률과 열률)"
verified: false
---

## formula
$$
\kappa = \frac{|\mathbf{r}'\times\mathbf{r}''|}{|\mathbf{r}'|^3}, \qquad \kappa = \frac{|y''|}{\left(1 + y'^2\right)^{3/2}} \quad (y = f(x))
$$

$$
\tau = \frac{(\mathbf{r}'\times\mathbf{r}'')\cdot\mathbf{r}'''}{|\mathbf{r}'\times\mathbf{r}''|^2}
$$

$$
\text{center of curvature} = \mathbf{r}(t_0) + \frac{1}{\kappa}\mathbf{N}(t_0)
$$

## conditions
- 곡률원(osculating circle)의 반지름은 $\frac{1}{\kappa}$.
- 평면 매개곡선 $(x(t), y(t))$: $\kappa = \dfrac{|x'y'' - y'x''|}{(x'^2 + y'^2)^{3/2}}$.
- 열률(torsion)은 3차원 곡선에서만 의미가 있다 (평면곡선은 $\tau = 0$).

## explanation
곡률 문제는 대부분 첫 공식으로 해결된다. 원의 곡률은 $\frac{1}{R}$, 나선 $\langle a\cos t, a\sin t, bt\rangle$의 곡률은 $\frac{a}{a^2 + b^2}$로 일정하다. 열률은 출제율이 낮지만 공식은 외워 둔다.

## supplement
평면 매개곡선 곡률 공식, 나선의 곡률 값을 추가했습니다. 교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
