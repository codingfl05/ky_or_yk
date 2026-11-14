---
id: calc-diff-density-reals
title_ko: "실수의 조밀성과 유리수·무리수로 나뉜 함수"
title_en: "Density of rationals and irrationals"
question: "유리수/무리수에서 다르게 정의된 함수가 연속인 점은 어떻게 찾는가?"
tags: [조밀성, 유리수, 무리수, 연속, density, dirichlet function]
importance: 1
related: [calc-diff-continuity]
source: "book:BLIS편입 미분 2장 (02 함수의 연속성)"
verified: false
---

## formula
$$
\begin{aligned}
&f(x) = \begin{cases} g(x) & (x \in \mathbb{Q}) \\ h(x) & (x \notin \mathbb{Q}) \end{cases} \text{ is continuous at } a \\
&\quad {}\iff g(a) = h(a)
\end{aligned}
$$

## conditions
- $g$, $h$가 연속함수일 때.
- 조밀성(density): 임의의 두 실수 사이에는 유리수와 무리수가 모두 있다.

## explanation
어느 점 근처에도 유리수와 무리수가 섞여 있으므로, 두 식의 값이 같아지는 점에서만 연속이다. 예: 유리수에서 $x$, 무리수에서 $1 - x$이면 $x = 1 - x$에서만, 즉 $x = \frac{1}{2}$에서만 연속.

## supplement
교재의 '조일성'은 조밀성(density)으로 고쳐 썼습니다. 일반 조건(두 식의 값이 같은 점)으로 정리했습니다. 교재의 공식·정의를 옮기고, 조건·설명은 Claude가 추가했습니다.
