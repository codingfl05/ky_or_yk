---
id: calc-diff-inflection
title_ko: "변곡점"
title_en: "Inflection points"
question: "변곡점의 정의는? f''(a)=0이면 항상 변곡점인가?"
tags: [변곡점, 이계도함수, 삼차함수, inflection point]
importance: 3
related: [calc-diff-concavity-jensen, calc-diff-critical-extrema]
source: "book:BLIS편입 미분 5장 (02 변곡점)"
verified: false
---

## formula
$$
\begin{aligned}
&x = a \text{ is an inflection point} \\
&\quad {}\iff f'' \text{ changes sign at } x = a
\end{aligned}
$$

## conditions
- 볼록성이 바뀌는 점. $f''(a) = 0$은 필요조건이지 충분조건이 아니다 (예: $y = x^4$는 $f''(0) = 0$이지만 변곡점이 아님).
- 삼차함수: 극대·극소가 있으면 두 극점은 변곡점에 대해 점대칭이다 (그래프 전체가 변곡점에 대해 점대칭).

## explanation
교재가 함께 다루는 성질: $f$가 미분 가능하고 $f(a) = 0$일 때, $|f(x)|$가 $x = a$에서 미분 가능할 필요충분조건은 $f'(a) = 0$이다. 반례로 $y = |\sin x|$는 $x = 0$에서 미분 불가($f'(0) = 1$).

## supplement
교재는 |f(x)|의 미분 가능 조건을 'f(a)=0, 변곡점, f′(a)=0'으로 적었는데, 변곡점 조건 없이 f(a)=0과 f′(a)=0만으로 충분해서 그렇게 썼습니다 (예: f(x)=x²이면 |f|=x²로 미분 가능). 교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
