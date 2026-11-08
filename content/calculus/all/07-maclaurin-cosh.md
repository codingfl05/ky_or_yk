---
id: calc-maclaurin-cosh
title_ko: "cosh x의 Maclaurin 급수"
title_en: "Maclaurin series of cosh x"
question: "cosh x의 Maclaurin 급수는?"
tags: [쌍곡코사인, 쌍곡선함수, 매클로린, hyperbolic cosine, maclaurin series]
importance: 2
related: [calc-maclaurin-cos, calc-maclaurin-exp, calc-maclaurin-sinh]
source: "book:BLIS편입 적분 6-02"
verified: false
---

## formula
$$
\cosh x = 1 + \frac{x^2}{2!} + \frac{x^4}{4!} + \frac{x^6}{6!} + \cdots = \sum_{n=0}^{\infty} \frac{x^{2n}}{(2n)!}
$$

## conditions
- 모든 실수 $x$에서 수렴.

## explanation
$\cosh x = \dfrac{e^x + e^{-x}}{2}$이므로 $e^x$ 급수에서 짝수 차수만 남는다. $\cos x$와 항은 같고 부호만 모두 $+$.

## supplement
교재 페이지에는 공식과 수렴 구간만 있고, 조건·설명은 Claude가 추가했습니다.
