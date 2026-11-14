---
id: calc-diff-rolle-mvt
title_ko: "롤의 정리와 평균값 정리"
title_en: "Rolle's theorem and the mean value theorem"
question: "롤의 정리와 평균값 정리의 조건과 결론은?"
tags: [평균값 정리, 롤의 정리, mean value theorem, rolle's theorem]
importance: 3
related: [calc-diff-intermediate-value, calc-diff-lhopital]
source: "book:BLIS편입 미분 4장 (01 평균값 정리)"
verified: false
---

## formula
$$
\begin{aligned}
&\text{Rolle:} \\
&f(a) = f(b) \;\Longrightarrow\; \exists\, c \in (a, b):\ f'(c) = 0
\end{aligned}
$$

$$
\text{MVT:} \quad \exists\, c \in (a, b):\ \frac{f(b) - f(a)}{b - a} = f'(c)
$$

## conditions
- 두 정리 모두: $f$가 $[a, b]$에서 연속, $(a, b)$에서 미분 가능.
- 롤의 정리(Rolle's theorem)는 평균값 정리(mean value theorem)에서 $f(a) = f(b)$인 특수한 경우.

## explanation
평균값 정리 문제는 세 유형이다. ① $f'$의 범위가 주어지면 $f(b) = f(a) + f'(c)(b - a)$로 $f(b)$의 범위를 구한다 (예: $f(1) = 8$, $f' \ge 3$이면 $f(3) \ge 14$). ② 부등식 증명: $|\sin x - \sin y| = |\cos c|\,|x - y| \le |x - y|$. ③ 극한 안의 $f(b) - f(a)$를 $f'(c)(b-a)$로 바꾼다.

## supplement
유형별 예시(부등식 증명 등)를 정리했습니다. 교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
