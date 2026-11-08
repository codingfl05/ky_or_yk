---
id: calc-diff-inverse-hyperbolic
title_ko: "역쌍곡선함수의 로그 표현"
title_en: "Inverse hyperbolic functions as logarithms"
question: "sinh⁻¹x, cosh⁻¹x, tanh⁻¹x를 로그로 나타내면?"
tags: [역쌍곡선함수, 로그 표현, inverse hyperbolic function, arsinh, arcosh, artanh]
importance: 3
related: [calc-diff-hyperbolic-def, calc-maclaurin-arctanh, calc-maclaurin-arcsinh]
source: "book:BLIS편입 미분 1장 (06 쌍곡선함수)"
verified: false
---

## formula
$$
\sinh^{-1}x = \ln\!\left(x + \sqrt{x^2 + 1}\right) \quad (\text{all } x)
$$

$$
\cosh^{-1}x = \ln\!\left(x + \sqrt{x^2 - 1}\right) \quad (x \ge 1)
$$

$$
\tanh^{-1}x = \frac{1}{2}\ln\frac{1 + x}{1 - x} \quad (-1 < x < 1)
$$

## conditions
- $\cosh$는 일대일이 아니라서 $x \ge 0$ 부분만 써서 역함수를 정의한다 ($\cosh^{-1}x \ge 0$).
- $\coth^{-1}x = \dfrac{1}{2}\ln\dfrac{x+1}{x-1}$ ($|x| > 1$).

## explanation
$y = \sinh^{-1}x$로 놓고 $x = \dfrac{e^y - e^{-y}}{2}$를 $e^y$에 대한 이차방정식으로 풀면 유도된다. 적분 결과로 자주 나오므로 로그 꼴과 역쌍곡선 꼴을 서로 바꿀 줄 알아야 한다.

## supplement
로그 표현은 교재 텍스트에서 추출되지 않아(필기 부분) 표준 공식으로 채웠습니다. 교재의 공식·정의를 옮기고, 조건·설명은 Claude가 추가했습니다.
