---
id: calc-mv-differentiability
title_ko: "다변수 함수의 미분 가능성"
title_en: "Differentiability of multivariable functions"
question: "f(x, y)가 (a, b)에서 미분 가능할 조건과 연속·편미분 가능과의 관계는?"
tags: [미분 가능성, 전미분, differentiability, total differential]
importance: 3
related: [calc-mv-partial-derivative, calc-mv-directional-derivative]
source: "book:BLIS편입 다변수 3장 (02 방향도함수)"
verified: false
---

## formula
$$
\begin{aligned}
&\lim_{(h, k) \to (0, 0)} \frac{\Delta f - f_x(a, b)h - f_y(a, b)k}{\sqrt{h^2 + k^2}} = 0, \\
&\Delta f = f(a + h, b + k) - f(a, b)
\end{aligned}
$$

$$
dz = f_x\,dx + f_y\,dy
$$

## conditions
- $f_x$, $f_y$가 근방에서 연속 $\Rightarrow$ 미분 가능 $\Rightarrow$ 연속이고 편미분 가능, 모든 방향도함수 존재.
- 역은 성립하지 않는다: 편미분 가능해도 불연속일 수 있고, 모든 방향도함수가 있어도 미분 불가능할 수 있다.

## explanation
구간별로 정의된 함수의 미분 가능성 판정 순서: ① 연속인가 ② 편미분계수가 있는가 ③ 위 극한이 $0$인가. 셋 다 만족해야 미분 가능. 전미분 $dz$는 오차 근사에 쓴다.

## supplement
미분 가능성의 함의 관계(역이 성립하지 않음)를 정리해 추가했습니다. 교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
