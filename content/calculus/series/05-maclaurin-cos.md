---
id: calc-maclaurin-cos
title_ko: "cos x의 Maclaurin 급수"
title_en: "Maclaurin series of cos x"
question: "cos x의 Maclaurin 급수는?"
tags: [코사인, 삼각함수, 매클로린, cosine, maclaurin series]
importance: 3
related: [calc-maclaurin-sin, calc-maclaurin-cosh, calc-maclaurin-sec]
source: "book:BLIS편입 적분 6-02"
verified: false
---

## formula
$$
\begin{aligned}
&\cos x = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \frac{x^6}{6!} + \cdots \\
&\quad {}= \sum_{n=0}^{\infty} (-1)^n \frac{x^{2n}}{(2n)!}
\end{aligned}
$$

## conditions
- 모든 실수 $x$에서 수렴.

## explanation
짝함수라서 짝수 차수만 있고, $\sin x$의 급수를 항별 미분하면 나온다. 극한 문제에서는 $1 - \cos x \approx \dfrac{x^2}{2}$ 형태로 자주 쓴다.

## supplement
교재 페이지에는 공식과 수렴 구간만 있고, 조건·설명은 Claude가 추가했습니다.
