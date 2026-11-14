---
id: calc-maclaurin-arctanh
title_ko: "tanh⁻¹x의 Maclaurin 급수"
title_en: "Maclaurin series of artanh x"
question: "tanh⁻¹x의 Maclaurin 급수와 수렴 구간은?"
tags: [역쌍곡탄젠트, 쌍곡선함수, 매클로린, inverse hyperbolic tangent, maclaurin series]
importance: 2
related: [calc-maclaurin-geometric, calc-maclaurin-arctan, calc-maclaurin-ln]
source: "book:BLIS편입 적분 6-02"
verified: false
---

## formula
$$
\begin{aligned}
&\tanh^{-1} x = x + \frac{x^3}{3} + \frac{x^5}{5} + \frac{x^7}{7} + \cdots \\
&\quad {}= \sum_{n=0}^{\infty} \frac{x^{2n+1}}{2n+1}
\end{aligned}
$$

## conditions
- 수렴 구간: $-1 < x < 1$ (양 끝 발산).

## explanation
$\dfrac{1}{1-t^2} = \sum t^{2n}$을 적분하면 나온다. $\tan^{-1} x$와 항은 같고 부호만 모두 $+$. $\tanh^{-1} x = \dfrac{1}{2}\ln\dfrac{1+x}{1-x}$이므로 $\ln(1+x)$와 $\ln(1-x)$ 급수의 차로도 얻을 수 있다.

## supplement
교재 페이지에는 공식과 수렴 구간만 있고, 조건·설명은 Claude가 추가했습니다.
