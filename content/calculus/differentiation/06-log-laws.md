---
id: calc-diff-log-laws
title_ko: "로그법칙"
title_en: "Laws of logarithms"
question: "로그법칙과 밑변환 공식은?"
tags: [로그, 로그법칙, 밑변환, 자연로그, logarithm, change of base]
importance: 3
related: [calc-diff-exponent-laws]
source: "book:BLIS편입 미분 1장 (03 지수함수와 로그함수)"
verified: false
---

## formula
$$
a^m = N \iff \log_a N = m
$$

$$
\log_a (mn) = \log_a m + \log_a n, \qquad \log_a \frac{m}{n} = \log_a m - \log_a n, \qquad \log_a m^n = n \log_a m
$$

$$
\log_a b = \frac{\ln b}{\ln a}, \qquad n^{\log_a m} = m^{\log_a n}, \qquad \log_a a = 1, \qquad \log_a 1 = 0
$$

## conditions
- $a > 0$, $a \neq 1$, 진수 $N > 0$.
- $\ln x = \log_e x$ (자연로그, natural logarithm). 미적분 교재에서는 $\log x$가 자연로그를 뜻하는 경우가 많고, 상용로그는 $\log_{10} x$로 쓴다.

## explanation
밑변환 공식(change of base)으로 모든 로그를 $\ln$으로 바꿀 수 있어서 미분·적분 계산에서 자주 쓴다. $n^{\log_a m} = m^{\log_a n}$은 양변에 $\log_a$를 취하면 바로 확인된다.

## supplement
교재의 공식·정의를 옮기고, 조건·설명은 Claude가 추가했습니다.
