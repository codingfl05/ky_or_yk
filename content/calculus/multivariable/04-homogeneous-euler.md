---
id: calc-mv-homogeneous-euler
title_ko: "동차함수와 오일러 정리"
title_en: "Homogeneous functions and Euler's theorem"
question: "n차 동차함수에서 x fx + y fy와 x² fxx + 2xy fxy + y² fyy는?"
tags: [동차함수, 오일러 정리, homogeneous function, euler's theorem]
importance: 2
related: [calc-mv-chain-rule]
source: "book:BLIS편입 다변수 2장 (02 편도함수)"
verified: false
---

## formula
$$
f(tx, ty) = t^n f(x, y)
$$

$$
x f_x + y f_y = n f, \qquad x^2 f_{xx} + 2xy f_{xy} + y^2 f_{yy} = n(n - 1) f
$$

## conditions
- $f$가 미분 가능한 $n$차 동차함수(homogeneous function)일 때. 변수가 3개여도 같다 ($x f_x + y f_y + z f_z = nf$).

## explanation
$f(tx, ty) = t^n f(x, y)$의 양변을 $t$로 미분하고 $t = 1$을 넣으면 첫 식이 나온다. 예: $f(tx, ty) = t^9 f$이면 두 번째 식의 값은 $9 \cdot 8 f = 72f$.

## supplement
유도 방법과 3변수 형태를 추가했습니다. 교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
