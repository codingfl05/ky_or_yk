---
id: calc-diff-hyperbolic-derivatives
title_ko: "쌍곡선함수의 도함수"
title_en: "Derivatives of hyperbolic functions"
question: "sinh, cosh, tanh, coth, sech, csch의 도함수는?"
tags: [쌍곡선함수 미분, 도함수, derivative of hyperbolic functions]
importance: 2
related: [calc-diff-hyperbolic-def, calc-diff-trig-derivatives]
source: "book:BLIS편입 미분 3장 (02 여러가지 미분법)"
verified: false
---

## formula
$$
(\sinh x)' = \cosh x
$$

$$
(\cosh x)' = \sinh x
$$

$$
(\tanh x)' = \operatorname{sech}^2 x
$$

$$
(\coth x)' = -\operatorname{csch}^2 x
$$

$$
(\operatorname{sech} x)' = -\operatorname{sech} x \tanh x
$$

$$
(\operatorname{csch} x)' = -\operatorname{csch} x \coth x
$$

## conditions
- $\coth x$, $\operatorname{csch} x$는 $x \neq 0$.

## explanation
삼각함수와의 차이는 $(\cosh x)' = +\sinh x$ 하나뿐이다($\cos$는 $-\sin$). 나머지는 삼각함수 공식과 부호까지 같다.

## supplement
삼각함수와의 부호 비교를 추가했습니다. 교재의 공식을 옮기고, 조건·설명은 Claude가 추가했습니다.
