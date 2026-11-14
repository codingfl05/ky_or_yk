---
id: calc-int-integral-mvt
title_ko: "적분의 평균값 정리"
title_en: "Mean value theorem for integrals"
question: "적분의 평균값 정리와 함수의 평균값은?"
tags: [적분의 평균값 정리, 함숫값의 평균, mean value theorem for integrals, average value]
importance: 2
related: [calc-diff-rolle-mvt, calc-int-ftc]
source: "book:BLIS편입 적분 2장 (07 적분의 평균값 정리)"
verified: false
---

## formula
$$
\int_a^b f(x)\,dx = f(c)(b - a) \quad (\exists\, c \in [a, b])
$$

$$
f_{\text{avg}} = \frac{1}{b - a}\int_a^b f(x)\,dx
$$

## conditions
- $f$가 $[a, b]$에서 연속일 때.

## explanation
미분의 평균값 정리를 $F(x) = \int_a^x f(t)\,dt$에 적용한 것과 같다. 넓이가 같은 직사각형의 높이가 $f(c)$라는 그림으로 이해한다.

## supplement
교재 텍스트에서 내용이 거의 추출되지 않아 표준 정리로 채웠습니다. 교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
