---
id: calc-maclaurin-tan
title_ko: "tan x의 Maclaurin 급수"
title_en: "Maclaurin series of tan x"
question: "tan x의 Maclaurin 급수 처음 몇 항과 수렴 구간은?"
tags: [탄젠트, 삼각함수, 매클로린, tangent, maclaurin series]
importance: 2
related: [calc-maclaurin-sin, calc-maclaurin-cos, calc-maclaurin-sec]
source: "book:BLIS편입 적분 6-02"
verified: false
---

## formula
$$
\tan x = x + \frac{1}{3}x^3 + \frac{2}{15}x^5 + \frac{17}{315}x^7 + \cdots
$$

## conditions
- 수렴 구간: $-\dfrac{\pi}{2} < x < \dfrac{\pi}{2}$ (원점에서 가장 가까운 특이점이 $\pm\dfrac{\pi}{2}$).

## explanation
일반항이 간단하지 않아서 처음 몇 항을 외운다. 기억이 안 나면 $\sin x$ 급수를 $\cos x$ 급수로 나누거나, $(\tan x)' = 1 + \tan^2 x$를 이용해 계수를 차례로 구할 수 있다. 시험에는 주로 $x^3$ 항까지($\tan x \approx x + \dfrac{x^3}{3}$) 나온다.

## supplement
교재 페이지에는 공식과 수렴 구간만 있고, 조건·설명은 Claude가 추가했습니다.
