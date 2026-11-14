---
id: calc-int-basic-integrals
title_ko: "기본 적분 공식 (1) 거듭제곱·지수·삼각"
title_en: "Basic integrals (1)"
question: "xⁿ, 1/x, eˣ, aˣ, sin, cos, sec², csc², sec tan, csc cot의 부정적분은?"
tags: [부정적분, 적분 공식, 원시함수, indefinite integral, antiderivative]
importance: 3
related: [calc-int-basic-integrals-2, calc-diff-trig-derivatives]
source: "book:BLIS편입 적분 1장 (01 기본 공식)"
verified: false
---

## formula
$$
\int x^n\,dx = \frac{x^{n+1}}{n+1} + C \ (n \neq -1)
$$

$$
\int \frac{1}{x}\,dx = \ln|x| + C
$$

$$
\int e^x\,dx = e^x + C, \qquad \int a^x\,dx = \frac{a^x}{\ln a} + C
$$

$$
\int \sin x\,dx = -\cos x + C
$$

$$
\int \cos x\,dx = \sin x + C
$$

$$
\int \sec^2 x\,dx = \tan x + C
$$

$$
\int \csc^2 x\,dx = -\cot x + C
$$

$$
\int \sec x \tan x\,dx = \sec x + C
$$

$$
\int \csc x \cot x\,dx = -\csc x + C
$$

## conditions
- $F'(x) = f(x)$이면 $\int f(x)\,dx = F(x) + C$, $\int_a^b f(x)\,dx = F(b) - F(a)$.
- $a > 0$, $a \neq 1$.

## explanation
적분은 미분의 역연산이므로 미분 공식을 거꾸로 읽은 것이다. $\int \frac{1}{x}\,dx$의 절댓값과 $\int \sin x\,dx$의 음수 부호를 빠뜨리는 실수가 많다.

## supplement
교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
