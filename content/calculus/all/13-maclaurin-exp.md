---
id: calc-maclaurin-exp
title_ko: "eˣ의 Maclaurin 급수"
title_en: "Maclaurin series of eˣ"
question: "eˣ의 Maclaurin 급수는?"
tags: [지수함수, 자연상수, 매클로린, exponential function, maclaurin series]
importance: 3
related: [calc-maclaurin-sinh, calc-maclaurin-cosh, calc-taylor-maclaurin-series]
source: "book:BLIS편입 적분 6-02"
verified: false
---

## formula
$$
e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots = \sum_{n=0}^{\infty} \frac{x^n}{n!}
$$

## conditions
- 모든 실수 $x$에서 수렴.

## explanation
모든 계수의 미분값이 $e^0 = 1$이라서 가장 단순한 형태가 된다. $x$ 자리에 $-x$, $x^2$ 등을 넣어 변형하는 문제가 많고, $x = 1$이면 $e = \sum \dfrac{1}{n!}$.

## supplement
교재 페이지에는 공식과 수렴 구간만 있고, 조건·설명은 Claude가 추가했습니다.
