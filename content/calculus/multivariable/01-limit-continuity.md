---
id: calc-mv-limit-continuity
title_ko: "다변수 함수의 극한과 연속"
title_en: "Limits and continuity of multivariable functions"
question: "(x, y)→(0, 0) 극한이 존재하지 않음을 보이는 법과 존재함을 보이는 법은?"
tags: [다변수 극한, 경로, 극좌표 치환, 연속, multivariable limit, continuity]
importance: 3
related: [calc-mv-differentiability, calc-diff-squeeze-theorem]
source: "book:BLIS편입 다변수 2장 (01 다변수 함수의 극한)"
verified: false
---

## formula
$$
\lim_{(x, y) \to (a, b)} f(x, y) = L
$$

$$
\begin{aligned}
&\text{continuous at } (a, b) \\
&\quad {}\iff \lim_{(x, y) \to (a, b)} f(x, y) = f(a, b)
\end{aligned}
$$

## conditions
- 존재하지 않음: 두 경로에서 극한이 다르면 끝. 보통 $x = 0$, $y = 0$, $y = mx$, $y = mx^2$ 순으로 조사.
- 존재함: 여러 경로에서 같아도 증명이 아니다. 극좌표 $x = r\cos\theta$, $y = r\sin\theta$로 바꿔 $|f - L| \le g(r) \to 0$처럼 $\theta$와 상관없는 식으로 묶어야 한다 (조임정리).
- 동차 유리함수 $\frac{P}{Q}$ (분모가 원점에서만 $0$): $\deg P > \deg Q$이면 극한 $0$, $\deg P = \deg Q$이면 보통 반직선마다 값이 달라 존재하지 않는다.

## explanation
$\frac{xy}{x^2 + y^2}$은 $y = mx$에서 $\frac{m}{1+m^2}$로 기울기마다 달라 극한이 없다. $\frac{x^2y}{x^4 + y^2}$처럼 모든 직선에서 $0$이어도 $y = x^2$에서 $\frac{1}{2}$이 되는 경우가 있어 포물선 경로도 확인한다.

## supplement
교재는 극좌표 판정을 'lim f(x,y)=L ⇔ lim f(r)=L'로 적었는데, 이는 치환 결과가 θ와 무관하게 0으로 가는 식으로 묶일 때만 성립해서 그 조건을 명시했습니다. 예시를 추가했습니다. 교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
