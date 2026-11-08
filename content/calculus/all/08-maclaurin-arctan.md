---
id: calc-maclaurin-arctan
title_ko: "tan⁻¹x의 Maclaurin 급수"
title_en: "Maclaurin series of arctan x"
question: "tan⁻¹x의 Maclaurin 급수와 수렴 구간은?"
tags: [역탄젠트, 아크탄젠트, 역삼각함수, 매클로린, arctangent, inverse tangent, maclaurin series]
importance: 3
related: [calc-maclaurin-geometric, calc-maclaurin-arctanh]
source: "book:BLIS편입 적분 6-02"
verified: false
---

## formula
$$
\tan^{-1} x = x - \frac{x^3}{3} + \frac{x^5}{5} - \frac{x^7}{7} + \cdots = \sum_{n=0}^{\infty} (-1)^n \frac{x^{2n+1}}{2n+1}
$$

## conditions
- 수렴 구간: $-1 \le x \le 1$ (양 끝에서도 수렴).

## explanation
$\dfrac{1}{1+t^2} = \sum (-1)^n t^{2n}$을 $0$부터 $x$까지 적분하면 나온다. 분모가 팩토리얼이 아니라 그냥 $2n+1$이라는 점이 $\sin x$와 다르다. $x = 1$을 넣으면 $\dfrac{\pi}{4} = 1 - \dfrac{1}{3} + \dfrac{1}{5} - \cdots$ (Leibniz 급수).

## supplement
교재 페이지에는 공식과 수렴 구간만 있고, 조건·설명은 Claude가 추가했습니다.
