---
id: calc-diff-hyperbolic-def
title_ko: "쌍곡선함수의 정의"
title_en: "Definitions of hyperbolic functions"
question: "sinh, cosh, tanh의 정의와 치역은?"
tags: [쌍곡선함수, 하이퍼볼릭, hyperbolic function, sinh, cosh, tanh]
importance: 3
related: [calc-diff-hyperbolic-identities, calc-diff-inverse-hyperbolic]
source: "book:BLIS편입 미분 1장 (06 쌍곡선함수)"
verified: false
---

## formula
$$
\sinh x = \frac{e^x - e^{-x}}{2}
$$

$$
\cosh x = \frac{e^x + e^{-x}}{2}
$$

$$
\tanh x = \frac{\sinh x}{\cosh x} = \frac{e^x - e^{-x}}{e^x + e^{-x}}
$$

$$
\operatorname{csch} x = \frac{1}{\sinh x}
$$

$$
\operatorname{sech} x = \frac{1}{\cosh x}
$$

$$
\coth x = \frac{1}{\tanh x}
$$

## conditions
- 치역: $\sinh x$는 실수 전체, $\cosh x \ge 1$, $-1 < \tanh x < 1$, $0 < \operatorname{sech} x \le 1$, $|\coth x| > 1$ ($x \neq 0$).
- $\cosh$는 우함수, $\sinh$, $\tanh$는 기함수.

## explanation
쌍곡선함수(hyperbolic function)는 이름과 공식 모양이 삼각함수와 비슷하지만 별개의 함수다. 값을 구할 때 삼각형을 그려서 풀면 안 되고, 지수함수 정의로 계산한다.

## supplement
교재의 정의·그래프는 필기 부분이라 추출되지 않아 표준 정의와 치역으로 채웠습니다. 교재의 공식·정의를 옮기고, 조건·설명은 Claude가 추가했습니다.
