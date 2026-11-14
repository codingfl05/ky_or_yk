---
id: calc-diff-growth-order
title_ko: "무한대에서 함수의 증가 속도 비교"
title_en: "Order of growth at infinity"
question: "x→∞에서 ln x, xⁿ, aˣ, x!, xˣ의 증가 속도 순서는?"
tags: [증가 속도, 극한, 차수 비교, order of growth, limit at infinity]
importance: 3
related: [calc-diff-indeterminate-forms]
source: "book:BLIS편입 미분 2장 (01 함수의 극한)"
verified: false
---

## formula
$$
\begin{aligned}
&a^x\ (0 < a < 1) \;<\; \sin x,\ \cos x \;<\; \ln x \\
&\quad {}<\; x^n \;<\; a^x\ (a > 1) \;<\; x! \;<\; x^x \;<\; (2x)!
\end{aligned}
$$

## conditions
- $x \to \infty$일 때의 크기(증가 속도) 비교. $n > 0$.
- 왼쪽 함수를 오른쪽 함수로 나눈 극한은 $0$이다 (예: $\lim_{x \to \infty} \dfrac{\ln x}{x^n} = 0$, $\lim_{x \to \infty} \dfrac{x^n}{e^x} = 0$).

## explanation
$\dfrac{\infty}{\infty}$ 꼴에서는 가장 빠른 항만 남기면 된다. 수열 극한에서 $n!$, $n^n$, $a^n$이 섞여 나올 때 특히 유용하다.

## supplement
비의 극한이 0이 되는 예를 추가했습니다. 교재의 공식·정의를 옮기고, 조건·설명은 Claude가 추가했습니다.
