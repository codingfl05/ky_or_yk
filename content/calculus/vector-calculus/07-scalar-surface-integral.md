---
id: calc-vc-scalar-surface-integral
title_ko: "스칼라장의 면적분"
title_en: "Surface integrals of scalar fields"
question: "∬_S g dS를 z=f(x, y)와 매개변수 곡면에서 계산하는 식은?"
tags: [면적분, 스칼라장, 곡면적, surface integral, scalar field]
importance: 3
related: [calc-mv-surface-area, calc-vc-flux]
source: "book:BLIS편입 다변수 면적분 01 (스칼라장의 면적분)"
verified: false
---

## formula
$$
\begin{aligned}
&\iint_S g\,dS = \iint_D g(x, y, f(x, y))\sqrt{1 + f_x^2 + f_y^2}\,dA \\
&(z = f(x, y))
\end{aligned}
$$

$$
\iint_S g\,dS = \iint_D g(\mathbf{r}(u, v))\,|\mathbf{r}_u\times\mathbf{r}_v|\,du\,dv
$$

## conditions
- $D$: 곡면을 $xy$평면(또는 $uv$평면)에 사영한 영역. $z$ 자리에 곡면의 식 $f(x, y)$를 대입한다.
- $g = 1$이면 곡면적.

## explanation
곡면의 정보를 $dS$(면적소)와 피적분함수에 대입하는 것이 풀이의 전부다. 곡면이 $y = f(x, z)$나 $x = f(y, z)$ 꼴이면 그 평면($xz$, $yz$)에 사영해 같은 식을 쓴다.

## supplement
교재 식은 오른쪽 이중적분의 적분 영역도 S로 적었는데, 사영 영역 D가 맞아 D로 썼습니다. 교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
