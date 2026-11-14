---
id: calc-int-surface-area
title_ko: "회전체의 겉넓이"
title_en: "Surface area of revolution"
question: "회전체의 겉넓이 기본 공식과 y=f(x)를 x축으로 돌렸을 때의 식은?"
tags: [겉넓이, 회전체, 곡면적, surface area of revolution]
importance: 3
related: [calc-int-arc-length, calc-int-volume]
source: "book:BLIS편입 적분 4장 (04 정적분과 회전체의 겉넓이)"
verified: false
---

## formula
$$
S = \int 2\pi r\,ds, \qquad ds = \sqrt{(dx)^2 + (dy)^2}
$$

$$
\begin{aligned}
&y = f(x) \text{ about the } x\text{-axis:} \\
&S = 2\pi\int_a^b |f(x)|\sqrt{1 + \{f'(x)\}^2}\,dx
\end{aligned}
$$

## conditions
- $r$: 회전축에서 곡선까지의 거리 ($x$축 회전이면 $|y|$, $y$축 회전이면 $|x|$).
- 매개변수·극곡선도 $ds$만 바꿔 넣는다. 극곡선을 극축($x$축)으로 돌리면 $r = r(\theta)\sin\theta$.

## explanation
원판법처럼 $\pi y^2\,dx$로 잘못 쓰면 안 된다: 겉넓이는 반드시 곡선 길이 요소 $ds$를 쓴다. 예: $y = 2\cosh\frac{x}{2}$처럼 $\sqrt{1 + y'^2}$이 깔끔해지는 곡선이 자주 나온다.

## supplement
교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
