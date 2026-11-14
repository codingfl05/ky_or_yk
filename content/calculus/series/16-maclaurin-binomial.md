---
id: calc-maclaurin-binomial
title_ko: "(1+x)ᵏ의 Maclaurin 급수 (이항급수)"
title_en: "Binomial series"
question: "(1+x)^k의 Maclaurin 급수(이항급수)와 수렴 구간은?"
tags: [이항급수, 이항정리, 일반화된 이항계수, binomial series, maclaurin series]
importance: 3
related: [calc-maclaurin-inv-sqrt, calc-maclaurin-geometric]
source: "book:BLIS편입 적분 6-02"
verified: false
---

## formula
$$
\begin{aligned}
&(1+x)^k = 1 + kx + \frac{k(k-1)}{2!}x^2 \\
&\quad {}+ \frac{k(k-1)(k-2)}{3!}x^3 + \cdots \\
&\quad {}= \sum_{n=0}^{\infty} \binom{k}{n} x^n
\end{aligned}
$$

## conditions
- $k$는 임의의 실수. $\dbinom{k}{n} = \dfrac{k(k-1)\cdots(k-n+1)}{n!}$ (일반화된 이항계수).
- 수렴 구간: $-1 < x < 1$. 양 끝의 수렴 여부는 $k$에 따라 다르다.
- $k$가 $0$ 이상의 정수이면 유한 개 항만 남는 다항식(이항정리)이라 모든 $x$에서 성립.

## explanation
이항정리를 지수가 정수가 아닐 때로 넓힌 것이다. $k = -1$이고 $x \to -x$이면 등비급수 $\dfrac{1}{1-x}$, $k = -\tfrac{1}{2}$이면 $\dfrac{1}{\sqrt{1 \pm x^2}}$ 급수가 된다. 근삿값 문제에서는 $(1+x)^k \approx 1 + kx$를 많이 쓴다.

## supplement
일반화된 이항계수 정의, 양 끝 수렴이 k에 따라 다르다는 점, k가 정수일 때를 추가했습니다. 교재 페이지에는 공식과 수렴 구간만 있고, 조건·설명은 Claude가 추가했습니다.
