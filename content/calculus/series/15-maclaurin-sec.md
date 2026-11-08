---
id: calc-maclaurin-sec
title_ko: "sec x의 Maclaurin 급수"
title_en: "Maclaurin series of sec x"
question: "sec x의 Maclaurin 급수 처음 몇 항과 수렴 구간은?"
tags: [시컨트, 삼각함수, 매클로린, secant, maclaurin series]
importance: 2
related: [calc-maclaurin-cos, calc-maclaurin-tan]
source: "book:BLIS편입 적분 6-02"
verified: false
---

## formula
$$
\sec x = \frac{1}{\cos x} = 1 + \frac{1}{2}x^2 + \frac{5}{24}x^4 + \frac{61}{720}x^6 + \cdots
$$

## conditions
- 수렴 구간: $-\dfrac{\pi}{2} < x < \dfrac{\pi}{2}$.

## explanation
짝함수라서 짝수 차수만 있다. 분모가 $2!, 4!, 6!$이고 분자가 $1, 1, 5, 61$(Euler 수)이라고 외우면 쉽다. $\cos x$ 급수의 역수를 나눗셈으로 직접 구할 수도 있다.

## supplement
분자 1, 1, 5, 61(Euler 수)로 외우는 방법을 추가했습니다. 교재 페이지에는 공식과 수렴 구간만 있고, 조건·설명은 Claude가 추가했습니다.
