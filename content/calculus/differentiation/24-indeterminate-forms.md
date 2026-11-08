---
id: calc-diff-indeterminate-forms
title_ko: "부정형의 극한"
title_en: "Indeterminate forms"
question: "극한의 부정형 7가지와 각각의 기본 처리법은?"
tags: [부정형, 극한, indeterminate form, limit]
importance: 3
related: [calc-diff-growth-order]
source: "book:BLIS편입 미분 2장 (01 함수의 극한)"
verified: false
---

## formula
$$
\frac{0}{0}, \quad \frac{\infty}{\infty}, \quad 0 \cdot \infty, \quad \infty - \infty, \quad 0^0, \quad \infty^0, \quad 1^\infty
$$

## conditions
- $\dfrac{0}{0}$: 인수분해·약분 등으로 식을 바꾼 뒤 대입.
- $\dfrac{\infty}{\infty}$: 분모·분자에서 가장 빠르게 커지는 항만 남겨 비교.
- $0 \cdot \infty$, $\infty - \infty$: $\dfrac{0}{0}$이나 $\dfrac{\infty}{\infty}$ 꼴로 바꾼다. 근호가 있는 $\infty - \infty$는 유리화.
- $0^0$, $\infty^0$, $1^\infty$: 로그를 취해 $0 \cdot \infty$ 꼴로 바꾼다.

## explanation
눈으로 수렴·발산을 판단할 수 없는 형태라서 식을 변형해야 한다. 예를 들어 $1^\infty$를 1로, $\infty - \infty$를 0으로 바로 답하는 실수가 많다. 이후 로피탈 정리로 대부분을 처리할 수 있다.

## supplement
지수 꼴(0⁰, ∞⁰, 1^∞)을 로그로 바꾸는 방법을 추가했습니다. 교재의 공식·정의를 옮기고, 조건·설명은 Claude가 추가했습니다.
