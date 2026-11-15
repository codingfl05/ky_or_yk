---
id: calc-mv-taylor-linearization
title_ko: "이변수 테일러 근사와 선형화"
title_en: "Taylor approximation in two variables"
question: "(a, b)에서 f(x, y)의 선형근사와 2차 근사식은?"
tags: [테일러 근사, 선형근사, 2차 근사, taylor approximation, linearization]
importance: 3
related: [calc-mv-second-derivative-test, calc-diff-linearization-differential]
source: "book:BLIS편입 다변수 4장 (01 테일러 식과 선형화)"
verified: false
---

## formula
$$
\begin{aligned}
&L(x, y) = f(a, b) + f_x(a, b)(x - a) \\
&\quad {}+ f_y(a, b)(y - b)
\end{aligned}
$$

$$
\begin{aligned}
&f(x, y) \approx L(x, y) + \frac{1}{2}\Big\{f_{xx}(x - a)^2 \\
&\qquad {}+ 2f_{xy}(x - a)(y - b) + f_{yy}(y - b)^2\Big\}
\end{aligned}
$$

## conditions
- 2차 항의 편도함수는 모두 $(a, b)$에서의 값.
- 혼합항의 계수는 $f_{xy}$ (전체에 $\frac{1}{2}$, 괄호 안에 $2$가 있어 상쇄).

## explanation
매클로린 꼴은 일변수 급수를 대입하는 것이 빠르다: 예: $e^x\ln(1+y) \approx (1 + x)(y - \frac{y^2}{2}) \approx y + xy - \frac{y^2}{2}$. $(x - a)^2$의 계수는 $\frac{f_{xx}}{2}$이지 $f_{xx}$가 아니다.

## supplement
일변수 급수 대입 요령을 추가했습니다. 교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
