---
id: calc-int-inverse-function-integral
title_ko: "역함수의 정적분"
title_en: "Integral of an inverse function"
question: "∫_a^b f(x)dx와 ∫_{f(a)}^{f(b)} f⁻¹(x)dx의 관계는?"
tags: [역함수, 역함수 적분, 정적분, inverse function integral]
importance: 2
related: [calc-diff-composite-inverse]
source: "book:BLIS편입 적분 2장 (04 정적분과 역함수)"
verified: false
---

## formula
$$
\int_a^b f(x)\,dx + \int_{f(a)}^{f(b)} f^{-1}(x)\,dx = b\,f(b) - a\,f(a)
$$

## conditions
- $f$가 $[a, b]$에서 연속이고 일대일(증가 또는 감소)일 때.
- 다른 풀이: $\int f^{-1}(x)\,dx$에서 $f^{-1}(x) = t$, 즉 $x = f(t)$로 치환한 뒤 부분적분.

## explanation
증가함수이면 두 넓이를 합친 것이 큰 직사각형에서 작은 직사각형을 뺀 넓이라는 그림으로 기억한다. 역함수를 직접 구하기 어려운 $f(x) = x + x^3$ 같은 함수의 역함수 적분에 쓴다.

## supplement
교재는 증가함수 조건으로 적었는데, 공식은 감소함수에서도 성립해서 연속인 일대일 함수로 조건을 넓혔습니다. 교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
