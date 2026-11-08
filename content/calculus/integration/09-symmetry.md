---
id: calc-int-symmetry
title_ko: "대칭성과 구간 치환을 이용한 정적분"
title_en: "Symmetry and the a+b−x substitution"
question: "우함수·기함수의 대칭구간 적분, 구간 치환 a+b−x와 관련 공식은?"
tags: [대칭성, 우함수, 기함수, 구간 치환, 정적분, symmetry, even function, odd function]
importance: 3
related: [calc-diff-even-odd, calc-int-wallis]
source: "book:BLIS편입 적분 2장 (03 정적분과 대칭성)"
verified: false
---

## formula
$$
\int_{-a}^{a} f(x)\,dx = \begin{cases} 2\displaystyle\int_0^{a} f(x)\,dx & (f \text{ even}) \\[1ex] 0 & (f \text{ odd}) \end{cases}
$$

$$
\int_a^b f(x)\,dx = \int_a^b f(a + b - x)\,dx
$$

$$
\int_0^{\frac{\pi}{2}} f(\sin x)\,dx = \int_0^{\frac{\pi}{2}} f(\cos x)\,dx, \qquad \int_0^{\pi} x\,f(\sin x)\,dx = \frac{\pi}{2}\int_0^{\pi} f(\sin x)\,dx
$$

## conditions
- 점대칭: $f(a - x) = -f(a + x)$이면 $(a, 0)$에 대해 점대칭. 선대칭: $f(a - x) = f(b + x)$이면 $x = \frac{a+b}{2}$에 대해 대칭.
- 구간 치환은 $a + b - x = t$로 치환하는 것과 같다. 원래 적분과 더해서 $2I$를 만드는 데 쓴다.

## explanation
예: $\int_0^{\pi/2} \frac{\sin x}{\sin x + \cos x}\,dx$는 구간 치환하면 $\frac{\cos x}{\sin x + \cos x}$가 되어, 둘을 더한 $\frac{\pi}{2}$의 절반인 $\frac{\pi}{4}$. 대칭구간 적분은 피적분함수를 우함수·기함수 부분으로 나눠 기함수 부분을 지운다.

## supplement
구간 치환 예시를 추가했습니다. 교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
