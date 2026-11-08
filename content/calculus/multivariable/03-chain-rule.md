---
id: calc-mv-chain-rule
title_ko: "다변수 연쇄법칙과 음함수 미분"
title_en: "Multivariable chain rule and implicit differentiation"
question: "z=f(x, y), x=g(s, t), y=h(s, t)일 때 ∂z/∂s는? F(x, y, z)=0에서 ∂z/∂x는?"
tags: [연쇄법칙, 합성함수 편미분, 음함수, chain rule, implicit differentiation]
importance: 3
related: [calc-mv-partial-derivative, calc-diff-implicit-differentiation]
source: "book:BLIS편입 다변수 2장 (02 편도함수 - 연쇄법칙)"
verified: false
---

## formula
$$
\frac{dz}{dt} = \frac{\partial z}{\partial x}\frac{dx}{dt} + \frac{\partial z}{\partial y}\frac{dy}{dt}, \qquad \frac{\partial z}{\partial s} = \frac{\partial z}{\partial x}\frac{\partial x}{\partial s} + \frac{\partial z}{\partial y}\frac{\partial y}{\partial s}
$$

$$
F(x, y, z) = 0: \quad \frac{\partial z}{\partial x} = -\frac{F_x}{F_z}, \qquad \frac{\partial z}{\partial y} = -\frac{F_y}{F_z} \quad (F_z \neq 0)
$$

## conditions
- 수형도(tree diagram)를 그려 $z$에서 $s$까지 가는 모든 경로의 곱을 더한다.
- 2계 편도함수에서는 $\frac{\partial z}{\partial x}$ 자체도 $x$, $y$의 함수라서 다시 연쇄법칙을 적용해야 한다.

## explanation
$g(t) = f(x(t), y(t))$의 $g'(t)$, $g(x) = f(x, 4x - x^2)$의 $g'(1)$처럼 한 변수로 합성된 꼴이 가장 자주 나온다. 음함수 공식의 음수 부호를 빠뜨리지 말 것.

## supplement
교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
