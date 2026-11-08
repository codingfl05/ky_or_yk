---
id: calc-mv-surface-area
title_ko: "곡면적"
title_en: "Surface area"
question: "z=f(x, y)와 매개변수 곡면 r(u, v)의 곡면적 공식은?"
tags: [곡면적, 겉넓이, 매개변수 곡면, surface area, parametric surface]
importance: 3
related: [calc-mv-volume, calc-vc-scalar-surface-integral, calc-int-surface-area]
source: "book:BLIS편입 다변수 8-24~8-26 (곡면적)"
verified: false
---

## formula
$$
S = \iint_D \sqrt{1 + f_x^2 + f_y^2}\,dA \qquad (z = f(x, y))
$$

$$
S = \iint_D |\mathbf{r}_u\times\mathbf{r}_v|\,du\,dv \qquad (\mathbf{r}(u, v))
$$

## conditions
- $D$: 곡면을 $xy$평면(또는 $uv$평면)에 사영한 영역.
- 유도: $z = f(x, y)$를 $\mathbf{r}(x, y) = \langle x, y, f(x, y)\rangle$로 보면 $\mathbf{r}_x\times\mathbf{r}_y = \langle -f_x, -f_y, 1\rangle$, 크기 $\sqrt{1 + f_x^2 + f_y^2}$.

## explanation
넓이 $\iint 1\,dA$, 부피 $\iiint 1\,dV$처럼 곡면적은 $\iint 1\,dS$이고, $dS$를 곡면의 식에 맞게 바꾸는 것이 전부다. 구면은 매개변수 $\mathbf{r}(\phi, \theta) = \langle a\sin\phi\cos\theta, a\sin\phi\sin\theta, a\cos\phi\rangle$로 두면 $|\mathbf{r}_\phi\times\mathbf{r}_\theta| = a^2\sin\phi$라서 겉넓이 $4\pi a^2$.

## supplement
교재 8-24의 유도(a × b)를 확인했습니다 (맞음). 구면 매개변수화와 4πa² 검산을 추가했습니다. 교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
