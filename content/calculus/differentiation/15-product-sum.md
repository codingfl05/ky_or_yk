---
id: calc-diff-product-sum
title_ko: "곱↔합 공식"
title_en: "Product-to-sum and sum-to-product formulas"
question: "삼각함수의 곱을 합으로, 합을 곱으로 바꾸는 공식은?"
tags: [곱을 합으로, 합을 곱으로, 삼각함수, product to sum, sum to product]
importance: 2
related: [calc-diff-trig-addition]
source: "book:BLIS편입 미분 1장 (04 삼각함수의 덧셈정리 2)"
verified: false
---

## formula
$$
\sin a \cos b = \frac{1}{2}\{\sin(a+b) + \sin(a-b)\}
$$

$$
\cos a \cos b = \frac{1}{2}\{\cos(a+b) + \cos(a-b)\}
$$

$$
\sin a \sin b = -\frac{1}{2}\{\cos(a+b) - \cos(a-b)\}
$$

$$
\sin A + \sin B = 2\sin\frac{A+B}{2}\cos\frac{A-B}{2}
$$

$$
\sin A - \sin B = 2\cos\frac{A+B}{2}\sin\frac{A-B}{2}
$$

$$
\cos A + \cos B = 2\cos\frac{A+B}{2}\cos\frac{A-B}{2}
$$

$$
\cos A - \cos B = -2\sin\frac{A+B}{2}\sin\frac{A-B}{2}
$$

## conditions
- 덧셈정리 두 식을 더하거나 빼서 유도.

## explanation
적분에서 $\sin(mx)\cos(nx)$ 같은 곱을 합으로 바꿀 때 쓴다. $\sin a \sin b$와 $\cos A - \cos B$에 붙는 음수 부호를 자주 빠뜨린다.

## supplement
교재에는 sin a cos b, cos a cos b, sin A + sin B만 있어서 나머지(sin a sin b, sin A − sin B, cos A ± cos B)를 추가했습니다. 교재의 공식·정의를 옮기고, 조건·설명은 Claude가 추가했습니다.
