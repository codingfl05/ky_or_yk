---
id: calc-mv-double-integral
title_ko: "이중적분과 적분 순서 변경"
title_en: "Double integrals and changing the order"
question: "이중적분의 반복적분 계산과 적분 순서를 바꾸는 방법은?"
tags: [이중적분, 반복적분, 적분 순서 변경, 푸비니, double integral, fubini]
importance: 3
related: [calc-mv-polar-double-integral, calc-mv-triple-integral]
source: "book:BLIS편입 다변수 5장 (01 직교좌표계의 이중적분)"
verified: false
---

## formula
$$
\iint_R f(x, y)\,dA = \int_a^b\int_{g_1(x)}^{g_2(x)} f(x, y)\,dy\,dx = \int_c^d\int_{h_1(y)}^{h_2(y)} f(x, y)\,dx\,dy
$$

## conditions
- 직사각형 영역이면 순서만 바꾸면 된다 (푸비니 정리, Fubini's theorem).
- 그 밖의 영역은 영역을 그려서 다시 쓴다: 안쪽 적분 구간은 바깥 변수의 함수, 바깥 구간은 상수.
- $y = x$에 대칭인 영역에서 $f(a, b) = f(b, a)$이면 한쪽만 구해 2배.

## explanation
$e^{x^3}$, $\frac{\sin y}{y}$, $e^{-y^2}$처럼 원시함수가 없는 피적분함수가 안쪽에 있으면 적분 순서를 바꾸라는 신호다. 순서를 바꿀 때 구간을 숫자 그대로 옮기는 실수가 가장 흔하다.

## supplement
순서 변경 신호(원시함수 없는 함수)를 추가했습니다. 교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
