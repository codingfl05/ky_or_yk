---
id: calc-maclaurin-sin
title_ko: "sin x의 Maclaurin 급수"
title_en: "Maclaurin series of sin x"
question: "sin x의 Maclaurin 급수는?"
tags: [사인, 삼각함수, 매클로린, sine, maclaurin series]
importance: 3
related: [calc-maclaurin-cos, calc-maclaurin-sinh]
source: "book:BLIS편입 적분 6-02"
verified: false
---

## formula
$$
\begin{aligned}
&\sin x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!} + \cdots \\
&\quad {}= \sum_{n=0}^{\infty} (-1)^n \frac{x^{2n+1}}{(2n+1)!}
\end{aligned}
$$

## conditions
- 모든 실수 $x$에서 수렴.

## explanation
홀함수라서 홀수 차수만 있고, 부호가 번갈아 바뀐다. $x$가 작을 때 $\sin x \approx x - \dfrac{x^3}{6}$은 극한 문제에서 자주 쓰인다.

## supplement
교재 페이지에는 공식과 수렴 구간만 있고, 조건·설명은 Claude가 추가했습니다.
