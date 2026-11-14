---
id: calc-diff-intermediate-value
title_ko: "중간값 정리"
title_en: "Intermediate value theorem"
question: "중간값 정리와 그 따름정리(근의 존재)는?"
tags: [중간값 정리, 사잇값 정리, 근의 존재, intermediate value theorem, bolzano]
importance: 3
related: [calc-diff-continuity]
source: "book:BLIS편입 미분 2장 (03 중간값 정리)"
verified: false
---

## formula
$$
\begin{aligned}
&f \text{ continuous on } [a, b],\ k \text{ between } f(a) \text{ and } f(b) \\
&\quad {}\Longrightarrow \exists\, c \in (a, b):\ f(c) = k
\end{aligned}
$$

$$
\begin{aligned}
&f \text{ continuous on } [a, b],\ f(a)f(b) < 0 \\
&\quad {}\Longrightarrow \exists\, c \in (a, b):\ f(c) = 0
\end{aligned}
$$

## conditions
- 닫힌 구간 $[a, b]$에서 연속이어야 한다. $f(a) \neq f(b)$이고 $k$는 $f(a)$와 $f(b)$ 사이의 값.
- 존재만 보장하고 개수는 알려주지 않는다 ("적어도 하나").

## explanation
방정식 $f(x) = 0$의 해가 어느 구간에 있는지 묻는 문제는 식을 한쪽으로 모아 $f(x)$를 만든 뒤 구간 양 끝의 부호를 비교한다. 연속이 아니면 성립하지 않으니(예: $\tan x$, $\frac{1}{x}$) 구간 안 불연속점부터 확인한다.

## supplement
교재 표현 'f(a)<f(c)<f(b)를 만족하는 c'를 표준 형태(f(a)와 f(b) 사이의 임의의 값 k에 대해 f(c)=k)로 바꿨습니다. 교재의 공식·정의를 옮기고, 조건·설명은 Claude가 추가했습니다.
