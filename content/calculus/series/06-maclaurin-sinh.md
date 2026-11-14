---
id: calc-maclaurin-sinh
title_ko: "sinh x의 Maclaurin 급수"
title_en: "Maclaurin series of sinh x"
question: "sinh x의 Maclaurin 급수는?"
tags: [쌍곡사인, 쌍곡선함수, 매클로린, hyperbolic sine, maclaurin series]
importance: 2
related: [calc-maclaurin-sin, calc-maclaurin-exp, calc-maclaurin-cosh]
source: "book:BLIS편입 적분 6-02"
verified: false
---

## formula
$$
\begin{aligned}
&\sinh x = x + \frac{x^3}{3!} + \frac{x^5}{5!} + \frac{x^7}{7!} + \cdots \\
&\quad {}= \sum_{n=0}^{\infty} \frac{x^{2n+1}}{(2n+1)!}
\end{aligned}
$$

## conditions
- 모든 실수 $x$에서 수렴.

## explanation
$\sinh x = \dfrac{e^x - e^{-x}}{2}$이므로 $e^x$ 급수에서 홀수 차수만 남는다. $\sin x$와 항은 같고 부호만 모두 $+$라고 기억하면 된다.

## supplement
교재 페이지에는 공식과 수렴 구간만 있고, 조건·설명은 Claude가 추가했습니다.
