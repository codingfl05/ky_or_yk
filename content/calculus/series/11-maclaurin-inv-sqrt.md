---
id: calc-maclaurin-inv-sqrt
title_ko: "1/√(1−x²)의 Maclaurin 급수"
title_en: "Maclaurin series of 1/√(1−x²)"
question: "1/√(1−x²)의 Maclaurin 급수와 수렴 구간은?"
tags: [이항급수, 무리함수, 매클로린, binomial series, maclaurin series]
importance: 2
related: [calc-maclaurin-binomial, calc-maclaurin-arcsin]
source: "book:BLIS편입 적분 6-02"
verified: false
---

## formula
$$
\begin{aligned}
&\frac{1}{\sqrt{1-x^2}} = 1 + \frac{1}{2}x^2 + \frac{1}{2}\cdot\frac{3}{4}x^4 \\
&\quad {}+ \frac{1}{2}\cdot\frac{3}{4}\cdot\frac{5}{6}x^6 + \cdots = \sum_{n=0}^{\infty} \frac{(2n)!}{4^n (n!)^2}\,x^{2n}
\end{aligned}
$$

## conditions
- 수렴 구간: $-1 < x < 1$ (양 끝 발산).

## explanation
이항급수(binomial series) $(1+u)^k$에 $k = -\tfrac{1}{2}$, $u = -x^2$을 넣은 것이다. 적분하면 $\sin^{-1} x$, 부호를 번갈아 바꾸면($x^2 \to -x^2$) $\dfrac{1}{\sqrt{1+x^2}}$이 되어 적분 시 $\sinh^{-1} x$가 된다.

## supplement
Σ 일반항을 추가했습니다. 교재 페이지에는 공식과 수렴 구간만 있고, 조건·설명은 Claude가 추가했습니다.
