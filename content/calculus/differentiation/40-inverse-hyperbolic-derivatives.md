---
id: calc-diff-inverse-hyperbolic-derivatives
title_ko: "역쌍곡선함수의 도함수"
title_en: "Derivatives of inverse hyperbolic functions"
question: "sinh⁻¹, cosh⁻¹, tanh⁻¹, coth⁻¹, sech⁻¹, csch⁻¹의 도함수는?"
tags: [역쌍곡선함수 미분, 도함수, derivative of inverse hyperbolic functions]
importance: 2
related: [calc-diff-inverse-hyperbolic, calc-diff-inverse-trig-derivatives]
source: "book:BLIS편입 미분 3장 (02 여러가지 미분법)"
verified: false
---

## formula
$$
(\sinh^{-1}x)' = \frac{1}{\sqrt{1+x^2}}, \qquad (\cosh^{-1}x)' = \frac{1}{\sqrt{x^2-1}}
$$

$$
(\tanh^{-1}x)' = \frac{1}{1-x^2} \ (|x| < 1), \qquad (\coth^{-1}x)' = \frac{1}{1-x^2} \ (|x| > 1)
$$

$$
(\operatorname{sech}^{-1}x)' = -\frac{1}{x\sqrt{1-x^2}}, \qquad (\operatorname{csch}^{-1}x)' = -\frac{1}{|x|\sqrt{1+x^2}}
$$

## conditions
- $\cosh^{-1}$: $x > 1$. $\operatorname{sech}^{-1}$: $0 < x < 1$. $\operatorname{csch}^{-1}$: $x \neq 0$.

## explanation
역삼각함수 공식에서 근호 안의 부호가 바뀐 꼴이다: $\sin^{-1} \to \frac{1}{\sqrt{1-x^2}}$, $\sinh^{-1} \to \frac{1}{\sqrt{1+x^2}}$. $\tanh^{-1}$과 $\coth^{-1}$은 도함수 식이 같고 정의역만 다르다. 적분에서 $\int \frac{dx}{\sqrt{x^2 \pm 1}}$의 답으로 쓰인다.

## supplement
역삼각함수 공식과의 비교, 정의역을 추가했습니다. 교재의 공식을 옮기고, 조건·설명은 Claude가 추가했습니다.
