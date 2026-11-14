---
id: calc-taylor-maclaurin-series
title_ko: "Taylor 급수와 Maclaurin 급수"
title_en: "Taylor series and Maclaurin series"
question: "x=a에서의 Taylor 급수와 Maclaurin 급수의 일반형은?"
tags: [테일러 급수, 매클로린 급수, 멱급수, 다항식 근사, taylor series, maclaurin series, power series]
importance: 3
related: [calc-maclaurin-exp, calc-maclaurin-geometric]
source: "book:BLIS편입 적분 6-02"
verified: false
---

## formula
$$
\begin{aligned}
&f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!}(x-a)^n \\
&\quad {}= f(a) + f'(a)(x-a) \\
&\quad {}+ \frac{f''(a)}{2!}(x-a)^2 + \cdots
\end{aligned}
$$

$$
\begin{aligned}
&f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(0)}{n!}x^n \\
&\quad {}= f(0) + f'(0)x + \frac{f''(0)}{2!}x^2 + \cdots \\
&(a = 0)
\end{aligned}
$$

## conditions
- $f$가 $x = a$ 근방에서 무한 번 미분 가능해야 급수를 만들 수 있다.
- 단, 무한 번 미분 가능하다고 급수가 $f$와 같아지는 것은 아니다. 나머지항(remainder) $R_n(x) \to 0$일 때만 $f(x)$와 같다 (반례: $e^{-1/x^2}$, $f(0)=0$).
- $a = 0$인 Taylor 급수가 Maclaurin 급수.

## explanation
Taylor 급수(Taylor series)는 함수를 $x = a$에서의 모든 미분계수로 만든 무한 다항식으로 근사한 것이고, 중심이 $0$이면 Maclaurin 급수(Maclaurin series)다. $n$번째 계수 $\dfrac{f^{(n)}(a)}{n!}$의 $n!$을 빠뜨리는 실수가 잦다. 편입 시험에서는 유도보다 아래 기본 Maclaurin 급수를 외워 대입·미분·적분으로 변형하는 문제가 대부분이다.

## supplement
무한 번 미분 가능성이 필요조건일 뿐이라는 점(나머지항 조건, 반례)을 추가했습니다. 교재 페이지에는 공식과 수렴 구간만 있고, 조건·설명은 Claude가 추가했습니다.
