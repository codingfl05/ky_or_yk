---
id: calc-vc-flux
title_ko: "벡터장의 면적분 (유량)"
title_en: "Flux integrals"
question: "∬_S F·n dS를 z=f(x, y) 곡면, 매개변수 곡면, G(x, y, z)=0 곡면에서 계산하는 식은?"
tags: [면적분, 유량, 플럭스, 법선벡터, flux, surface integral]
importance: 3
related: [calc-vc-scalar-surface-integral, calc-vc-divergence, calc-mv-tangent-plane]
source: "book:BLIS편입 다변수 면적분 02 (벡터장의 면적분)"
verified: false
---

## formula
$$
z = f(x, y): \quad \iint_S \mathbf{F}\cdot\mathbf{n}\,dS = \iint_D \mathbf{F}(x, y, f(x, y))\cdot\langle -f_x, -f_y, 1\rangle\,dA \quad (\text{upward } \mathbf{n})
$$

$$
\mathbf{r}(u, v): \quad \iint_S \mathbf{F}\cdot\mathbf{n}\,dS = \iint_D \mathbf{F}(\mathbf{r}(u, v))\cdot(\mathbf{r}_u\times\mathbf{r}_v)\,du\,dv
$$

$$
G(x, y, z) = 0: \quad \iint_S \mathbf{F}\cdot\mathbf{n}\,dS = \iint_{D_{xy}} \mathbf{F}\cdot\frac{\nabla G}{|G_z|}\,dA
$$

## conditions
- 단위법선: $z = f(x, y)$이면 $\mathbf{n} = \dfrac{\langle -f_x, -f_y, 1\rangle}{\sqrt{f_x^2 + f_y^2 + 1}}$, $y = f(x, z)$이면 $\dfrac{\langle -f_x, 1, -f_z\rangle}{\sqrt{f_x^2 + f_z^2 + 1}}$, $x = f(y, z)$이면 $\dfrac{\langle 1, -f_y, -f_z\rangle}{\sqrt{f_y^2 + f_z^2 + 1}}$.
- $\mathbf{n}$과 $dS$의 근호가 약분되어 첫 식처럼 근호 없이 계산된다. 방향(위·아래, 바깥·안)이 반대이면 부호를 바꾼다.
- 셋째 식: 곡면을 $G = 0$으로 쓰고 $xy$평면에 사영할 때. $G = z - f(x, y)$이면 $|G_z| = 1$이라 $\iint \mathbf{F}\cdot\nabla G\,dA$가 된다.

## explanation
교재의 단축식 $\iint \mathbf{F}\cdot\nabla F\,dA$는 곡면을 $z - f(x, y) = 0$처럼 $z$의 계수가 $1$이 되게 쓴 경우에만 맞다. 구 $x^2 + y^2 + z^2 = 1$을 $G = x^2 + y^2 + z^2 - 1$로 쓰면 $|\nabla G| = 2$이지만 $dS = \frac{|\nabla G|}{|G_z|}dA = \frac{1}{z}\,dA$라서, $|G_z| = 2z$로 나눠야 한다.

## supplement
교재 단위법선 박스의 b), c)는 성분 위치가 틀렸습니다: y = f(x, z)이면 ⟨−f_x, 1, −f_z⟩ (교재: ⟨−f_x, −f_z, 1⟩), x = f(y, z)이면 ⟨1, −f_y, −f_z⟩ (교재: ⟨−f_y, −f_z, 1⟩). 또 교재의 ∬F·∇F dA 단축식은 z의 계수가 1일 때만 성립해서 일반형(∇G/|G_z|)과 구 예시를 추가했습니다. 교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
