---
id: calc-maclaurin-ln
title_ko: "ln(1+x)의 Maclaurin 급수"
title_en: "Maclaurin series of ln(1+x)"
question: "ln(1+x)의 Maclaurin 급수와 수렴 구간은?"
tags: [로그, 자연로그, 매클로린, natural logarithm, maclaurin series]
importance: 3
related: [calc-maclaurin-geometric]
source: "book:BLIS편입 적분 6-02"
verified: false
---

## formula
$$
\begin{aligned}
&\ln(1+x) = x - \frac{x^2}{2} + \frac{x^3}{3} - \cdots \\
&\quad {}= \sum_{n=0}^{\infty} (-1)^n \frac{x^{n+1}}{n+1}
\end{aligned}
$$

## conditions
- 수렴 구간: $-1 < x \le 1$ ($x = 1$에서는 수렴, $x = -1$에서는 발산).

## explanation
$\dfrac{1}{1+t} = \sum (-1)^n t^n$을 $0$부터 $x$까지 적분하면 나온다. $x = 1$을 넣으면 $\ln 2 = 1 - \tfrac{1}{2} + \tfrac{1}{3} - \cdots$ (교대 조화급수). 같은 식을 $\sum_{n=1}^{\infty} (-1)^{n+1}\dfrac{x^n}{n}$으로 쓰기도 하니 지수와 분모의 번호를 헷갈리지 말 것.

## supplement
교재 페이지에는 공식과 수렴 구간만 있고, 조건·설명은 Claude가 추가했습니다.
