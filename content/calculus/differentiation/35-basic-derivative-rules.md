---
id: calc-diff-basic-derivative-rules
title_ko: "기본 미분법 (곱·몫·합성)"
title_en: "Basic differentiation rules"
question: "상수, xⁿ, 곱, 몫, 합성함수의 미분 공식은?"
tags: [미분법, 곱의 미분, 몫의 미분, 연쇄법칙, 합성함수 미분, product rule, quotient rule, chain rule]
importance: 3
related: [calc-diff-derivative-def, calc-diff-implicit-differentiation]
source: "book:BLIS편입 미분 3장 (02 여러가지 미분법)"
verified: false
---

## formula
$$
(c)' = 0, \qquad (x^n)' = nx^{n-1}
$$

$$
(fg)' = f'g + fg', \qquad \left(\frac{f}{g}\right)' = \frac{f'g - fg'}{g^2}
$$

$$
\{f(g(x))\}' = f'(g(x))\,g'(x)
$$

## conditions
- $(x^n)' = nx^{n-1}$은 실수 지수 $n$ 전체에서 성립 ($x > 0$이면 항상).
- 몫의 미분은 $g(x) \neq 0$.

## explanation
몫의 미분은 분자의 순서(분자 미분 × 분모 − 분자 × 분모 미분)를 바꾸면 부호가 틀린다. 합성함수 미분(chain rule)은 바깥을 미분하고 안쪽의 미분을 곱한다: $(\sin x^2)' = 2x\cos x^2$.

## supplement
교재는 몫의 미분을 [g/f]′ 꼴로 적었는데, 흔히 쓰는 (f/g)′ 꼴로 바꿨습니다. 교재의 공식을 옮기고, 조건·설명은 Claude가 추가했습니다.
