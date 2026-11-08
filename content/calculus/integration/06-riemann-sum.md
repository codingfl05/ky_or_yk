---
id: calc-int-riemann-sum
title_ko: "정적분과 급수 (구분구적법)"
title_en: "Riemann sums"
question: "lim Σ f(a + (b−a)k/n)·(b−a)/n을 정적분으로 바꾸면?"
tags: [구분구적법, 리만 합, 정적분과 급수, riemann sum, definite integral]
importance: 3
related: [calc-int-ftc]
source: "book:BLIS편입 적분 2장 (01 정적분과 무한급수)"
verified: false
---

## formula
$$
\lim_{n \to \infty} \sum_{k=1}^{n} f\!\left(a + \frac{b-a}{n}k\right)\frac{b-a}{n} = \int_a^b f(x)\,dx
$$

$$
\lim_{n \to \infty} \sum_{k=1}^{n} f\!\left(\frac{k}{n}\right)\frac{1}{n} = \int_0^1 f(x)\,dx
$$

## conditions
- 왼쪽 끝점 합($k = 0 \sim n-1$)도 오른쪽 끝점 합($k = 1 \sim n$)과 같은 정적분으로 수렴한다.
- 변환 규칙: $\dfrac{1}{n} \to dx$, $\dfrac{k}{n} \to x$, $\sum_{k=1}^{n} \to \int_0^1$.

## explanation
급수 극한 문제에서 $\frac{1}{n}$을 묶어 내고 나머지를 $\frac{k}{n}$의 함수로 만드는 것이 핵심이다. 예: $\lim \sum_{k=1}^{n} \frac{1}{n + k} = \lim \sum \frac{1}{1 + \frac{k}{n}}\cdot\frac{1}{n} = \int_0^1 \frac{dx}{1+x} = \ln 2$.

## supplement
예시를 추가했습니다. 교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
