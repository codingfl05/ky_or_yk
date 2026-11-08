---
id: calc-mv-jacobian
title_ko: "야코비안 변수변환"
title_en: "Change of variables (Jacobian)"
question: "중적분의 변수변환 공식과 야코비안 계산, 역변환 야코비안의 관계는?"
tags: [야코비안, 변수변환, 중적분, jacobian, change of variables]
importance: 3
related: [calc-mv-polar-double-integral, calc-mv-spherical]
source: "book:BLIS편입 다변수 7장 (01 변수변환과 중적분)"
verified: false
---

## formula
$$
\iint_R f(x, y)\,dx\,dy = \iint_S f(x(u, v), y(u, v))\left|\frac{\partial(x, y)}{\partial(u, v)}\right|du\,dv
$$

$$
\frac{\partial(x, y)}{\partial(u, v)} = \begin{vmatrix} x_u & x_v \\ y_u & y_v \end{vmatrix}, \qquad \frac{\partial(x, y)}{\partial(u, v)} = \frac{1}{\dfrac{\partial(u, v)}{\partial(x, y)}}
$$

## conditions
- 변환이 일대일이고 야코비안이 $0$이 아닐 때. 절댓값을 붙인다.
- $u$, $v$가 $x$, $y$의 식으로 주어지면 $\frac{\partial(u, v)}{\partial(x, y)}$를 구해 역수를 취하는 것이 빠르다.
- 극좌표 $r$, 구면좌표 $\rho^2\sin\phi$도 야코비안이다.

## explanation
예: $y = x$, $y = 3x$, $xy = 1$, $xy = 9$로 둘러싸인 영역은 $u = \frac{y}{x}$, $v = xy$로 두면 직사각형이 되고 $\left|\frac{\partial(x, y)}{\partial(u, v)}\right| = \frac{1}{2u}$. 타원 $\frac{x^2}{a^2} + \frac{y^2}{b^2} \le 1$은 $x = au$, $y = bv$로 넓이 $\pi ab$, 타원체 부피 $\frac{4}{3}\pi abc$.

## supplement
역변환 야코비안 공식, 쌍곡선 영역 예시, 타원·타원체 결과를 추가했습니다. 교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
