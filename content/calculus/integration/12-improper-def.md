---
id: calc-int-improper-def
title_ko: "이상적분의 정의"
title_en: "Improper integrals"
question: "무한구간과 불연속점이 있는 이상적분은 어떻게 정의하는가?"
tags: [이상적분, 특이적분, improper integral]
importance: 3
related: [calc-int-p-test, calc-int-comparison-test]
source: "book:BLIS편입 적분 3장 (01 이상적분의 수렴값 계산)"
verified: false
---

## formula
$$
\int_a^{\infty} f(x)\,dx = \lim_{t \to \infty}\int_a^t f(x)\,dx
$$

$$
\int_{-\infty}^{\infty} f(x)\,dx = \int_{-\infty}^{c} f(x)\,dx + \int_{c}^{\infty} f(x)\,dx
$$

$$
\begin{aligned}
&\int_a^b f(x)\,dx \\
&\quad {}= \lim_{t \to c^-}\int_a^t f(x)\,dx + \lim_{t \to c^+}\int_t^b f(x)\,dx \\
&(c\text{: discontinuity})
\end{aligned}
$$

## conditions
- 무한구간이나 구간 안의 불연속점(함수가 발산하는 점)이 있으면 극한으로 정의한다.
- 나눈 이상적분 중 하나라도 발산하면 전체가 발산.

## explanation
$\int_{-\infty}^{\infty} x\,dx$를 $\lim_{a \to \infty}\int_{-a}^{a} x\,dx = 0$으로 계산하면 틀린다: 두 극한을 따로 보내야 하고 각각 발산하므로 발산이다. 구간 중간의 불연속점(예: $\int_{-1}^{1}\frac{dx}{x^2}$)을 놓치고 그냥 계산하는 실수도 많다.

## supplement
구간 중간 불연속점 예시를 추가했습니다. 교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
