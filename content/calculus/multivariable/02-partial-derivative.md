---
id: calc-mv-partial-derivative
title_ko: "편도함수와 클레로 정리"
title_en: "Partial derivatives and Clairaut's theorem"
question: "편미분계수의 정의와 클레로 정리의 조건은?"
tags: [편도함수, 편미분, 클레로 정리, 혼합편도함수, partial derivative, clairaut's theorem]
importance: 3
related: [calc-mv-chain-rule, calc-mv-differentiability]
source: "book:BLIS편입 다변수 2장 (02 편도함수)"
verified: false
---

## formula
$$
f_x(a, b) = \lim_{h \to 0}\frac{f(a + h, b) - f(a, b)}{h}, \qquad f_y(a, b) = \lim_{h \to 0}\frac{f(a, b + h) - f(a, b)}{h}
$$

$$
f_{xy}(a, b) = f_{yx}(a, b)
$$

## conditions
- 편미분은 다른 변수를 상수로 보고 미분.
- 클레로 정리(Clairaut's theorem): $f_{xy}$, $f_{yx}$가 $(a, b)$ 근방에서 연속이면 같다.
- 구간별로 정의된 함수의 원점 편미분계수는 반드시 정의(극한)로 구한다.

## explanation
편미분계수가 존재해도 연속이 아닐 수 있다 (예: $\frac{xy}{x^2+y^2}$, 원점값 $0$: $f_x(0,0) = f_y(0,0) = 0$인데 불연속). 혼합편도함수 계산은 클레로 정리를 이용해 쉬운 순서로 미분한다.

## supplement
편미분 가능해도 불연속일 수 있다는 예를 추가했습니다. 교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
