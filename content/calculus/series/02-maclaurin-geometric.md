---
id: calc-maclaurin-geometric
title_ko: "1/(1−x)의 Maclaurin 급수 (등비급수)"
title_en: "Maclaurin series of 1/(1−x) (geometric series)"
question: "1/(1−x)의 Maclaurin 급수와 수렴 구간은?"
tags: [등비급수, 기하급수, 매클로린, geometric series, maclaurin series]
importance: 3
related: [calc-maclaurin-ln, calc-maclaurin-arctan, calc-maclaurin-arctanh]
source: "book:BLIS편입 적분 6-02"
verified: false
---

## formula
$$
\frac{1}{1-x} = 1 + x + x^2 + x^3 + \cdots = \sum_{n=0}^{\infty} x^n
$$

## conditions
- 수렴 구간(interval of convergence): $-1 < x < 1$ (양 끝 발산).

## explanation
공비가 $x$인 등비급수(geometric series)의 합 공식이다. 대부분의 Maclaurin 급수가 여기서 출발한다: $x$ 자리에 $-x$, $x^2$, $-x^2$을 넣거나 미분·적분해서 $\ln(1+x)$, $\tan^{-1}x$, $\tanh^{-1}x$ 등을 만든다. 대입하면 수렴 구간도 같이 바뀐다는 점(예: $x \to 2x$이면 $|x| < \tfrac{1}{2}$)에 주의.

## supplement
교재 페이지에는 공식과 수렴 구간만 있고, 조건·설명은 Claude가 추가했습니다.
