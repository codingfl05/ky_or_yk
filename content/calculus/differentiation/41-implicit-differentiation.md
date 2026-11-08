---
id: calc-diff-implicit-differentiation
title_ko: "음함수의 미분"
title_en: "Implicit differentiation"
question: "f(x, y) = 0에서 dy/dx를 구하는 두 가지 방법은?"
tags: [음함수, 음함수 미분, 편미분, implicit differentiation, implicit function]
importance: 3
related: [calc-diff-basic-derivative-rules]
source: "book:BLIS편입 미분 3장 (02 여러가지 미분법)"
verified: false
---

## formula
$$
\frac{dy}{dx} = -\frac{f_x}{f_y} \qquad (f_y \neq 0)
$$

## conditions
- $f(x, y) = 0$ 꼴의 음함수(implicit function). $f_x$, $f_y$는 $f$의 편미분(partial derivative).
- 방법 1: 양변을 $x$로 미분하면서 $y$는 $x$의 함수로 보고 $y'$을 붙인다 (예: $(y^2)' = 2yy'$).
- 방법 2: 위 공식.

## explanation
$y = f(x)$로 풀기 어려운 식(예: $x^3 - 3xy + y^3 = 2$, $\sin(x+y) = y^2\cos x$)에 쓴다. 공식의 음수 부호를 빠뜨리는 실수가 많고, $f_y$를 구할 때는 $x$를 상수로 본다.

## supplement
교재의 공식을 옮기고, 조건·설명은 Claude가 추가했습니다.
