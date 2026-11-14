---
id: calc-int-dirichlet-test
title_ko: "이상적분의 디리클레 판정법"
title_en: "Dirichlet's test for improper integrals"
question: "∫ f(x)g(x)dx가 수렴하는 디리클레 판정법의 조건은?"
tags: [디리클레 판정법, 이상적분, 조건수렴, dirichlet's test]
importance: 2
related: [calc-int-comparison-test]
source: "book:BLIS편입 적분 3장 (02 디리클레 판정)"
verified: false
---

## formula
$$
\begin{aligned}
&\left|\int_a^t f(x)\,dx\right| \le M \ (\forall t \ge a), \\
&g \text{ decreasing},\ \lim_{x \to \infty} g(x) = 0 \\
&\quad {}\Rightarrow \int_a^\infty f(x)g(x)\,dx \text{ converges}
\end{aligned}
$$

## conditions
- 대표적인 쓰임: $\int_1^\infty \frac{\sin x}{x^p}\,dx$ ($p > 0$)는 수렴 ($f = \sin x$, $g = \frac{1}{x^p}$).
- 조건을 만족하지 않는다고 발산은 아니다. 판정 불가로 보고 다른 방법(차수 비교)으로 넘어간다.

## explanation
교재의 판정 순서: 감마함수 꼴 확인 → 디리클레 → 차수 비교. 디리클레로 수렴이 나오면 차수 비교보다 우선한다 (예: $\int_1^\infty \frac{\sin x}{x}\,dx$는 절대수렴하지 않지만 수렴).

## supplement
교재에는 g가 감소해야 한다는 조건이 빠져 있고, 유계 조건이 |∫_a^∞ f| ≤ M으로 되어 있어서 '모든 t에 대해 |∫_a^t f| ≤ M'으로 바로잡았습니다. 교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
