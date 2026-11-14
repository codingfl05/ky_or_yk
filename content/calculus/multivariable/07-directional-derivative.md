---
id: calc-mv-directional-derivative
title_ko: "방향도함수와 그래디언트"
title_en: "Directional derivatives and the gradient"
question: "방향도함수의 정의와 ∇f·u 공식, 최대 증가 방향과 최댓값은?"
tags: [방향도함수, 그래디언트, 기울기 벡터, directional derivative, gradient]
importance: 3
related: [calc-mv-gradient-geometry-summary, calc-mv-tangent-plane, calc-mv-differentiability]
source: "book:BLIS편입 다변수 3장 (02 방향도함수)"
verified: false
---

## formula
$$
\begin{aligned}
&D_{\mathbf{u}}f(a, b) = \lim_{h \to 0}\frac{f(a + hu_1, b + hu_2) - f(a, b)}{h} \\
&(|\mathbf{u}| = 1)
\end{aligned}
$$

$$
D_{\mathbf{u}}f = \nabla f\cdot\mathbf{u} = |\nabla f|\cos\theta
$$

$$
\max D_{\mathbf{u}}f = |\nabla f| \ (\mathbf{u} \parallel \nabla f)
$$

## conditions
- $\nabla f\cdot\mathbf{u}$ 공식은 $f$가 미분 가능할 때만. 구간별로 정의된 함수는 정의(극한)로 구한다.
- $\mathbf{u}$는 반드시 단위벡터. 문제에서 $\langle 3, 2\rangle$ 같은 방향이 주어지면 먼저 정규화.
- 최소 변화율은 $-|\nabla f|$ ($-\nabla f$ 방향), 변화율 $0$인 방향은 $\nabla f$에 수직.

## explanation
방향벡터를 단위벡터로 바꾸지 않는 실수가 가장 흔하다. 그래디언트는 등위선(등위면)에 수직이고 함수가 가장 빠르게 증가하는 방향을 가리킨다.

## supplement
단위벡터 정규화 주의와 최소·0 방향을 추가했습니다. 교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
