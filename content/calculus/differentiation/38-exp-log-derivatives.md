---
id: calc-diff-exp-log-derivatives
title_ko: "지수·로그함수의 도함수"
title_en: "Derivatives of exponential and logarithmic functions"
question: "eˣ, aˣ, ln x, logₐ x의 도함수는?"
tags: [지수함수 미분, 로그함수 미분, 도함수, derivative of exponential, derivative of logarithm]
importance: 3
related: [calc-diff-log-laws, calc-diff-basic-derivative-rules]
source: "book:BLIS편입 미분 3장 (02 여러가지 미분법)"
verified: false
---

## formula
$$
(e^x)' = e^x, \qquad (a^x)' = a^x \ln a
$$

$$
(\ln x)' = \frac{1}{x}, \qquad (\log_a x)' = \frac{1}{x \ln a}
$$

## conditions
- $a > 0$, $a \neq 1$. $\ln x$, $\log_a x$는 $x > 0$.
- $(\ln|x|)' = \dfrac{1}{x}$ ($x \neq 0$).

## explanation
$a^x$, $\log_a x$는 밑을 $e$로 바꾸면($a^x = e^{x\ln a}$, $\log_a x = \frac{\ln x}{\ln a}$) $e^x$, $\ln x$ 공식에서 바로 나온다. $x^x$처럼 밑과 지수에 모두 $x$가 있으면 양변에 $\ln$을 취해 미분한다(로그 미분법).

## supplement
ln|x| 공식과 로그 미분법을 추가했습니다. 교재의 공식을 옮기고, 조건·설명은 Claude가 추가했습니다.
