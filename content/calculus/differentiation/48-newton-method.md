---
id: calc-diff-newton-method
title_ko: "뉴턴의 방법"
title_en: "Newton's method"
question: "f(x)=0의 근을 근사하는 뉴턴 방법의 점화식은?"
tags: [뉴턴 방법, 근사, 방정식의 근, newton's method, root finding]
importance: 2
related: [calc-diff-linearization-differential]
source: "book:BLIS편입 미분 5장 (01 미분과 근사)"
verified: false
---

## formula
$$
x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}
$$

## conditions
- 반드시 방정식을 $f(x) = 0$ 꼴로 만든 뒤 그 좌변을 $f$로 잡는다.
- $f'(x_n) \neq 0$이어야 한다.

## explanation
$(x_n, f(x_n))$에서 그은 접선이 $x$축과 만나는 점을 다음 근삿값으로 삼는 방법이다. 예: $\sqrt{2}$의 근사는 $f(x) = x^2 - 2$로 놓고 $x_{n+1} = x_n - \frac{x_n^2 - 2}{2x_n}$.

## supplement
예시를 추가했습니다. 교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
