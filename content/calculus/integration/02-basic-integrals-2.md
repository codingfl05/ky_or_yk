---
id: calc-int-basic-integrals-2
title_ko: "기본 적분 공식 (2) 로그형·역삼각·쌍곡선"
title_en: "Basic integrals (2)"
question: "tan, cot, sec, csc의 적분과 1/(a²+x²), 1/√(a²−x²)의 적분은?"
tags: [부정적분, 적분 공식, 역삼각함수, 쌍곡선함수, indefinite integral]
importance: 3
related: [calc-int-basic-integrals, calc-diff-inverse-trig-derivatives]
source: "book:BLIS편입 적분 1장 (01 기본 공식)"
verified: false
---

## formula
$$
\int \tan x\,dx = \ln|\sec x| + C, \qquad \int \cot x\,dx = -\ln|\csc x| + C
$$

$$
\int \sec x\,dx = \ln|\sec x + \tan x| + C, \qquad \int \csc x\,dx = \ln|\csc x - \cot x| + C
$$

$$
\int \frac{dx}{a^2 + x^2} = \frac{1}{a}\tan^{-1}\frac{x}{a} + C, \qquad \int \frac{dx}{\sqrt{a^2 - x^2}} = \sin^{-1}\frac{x}{a} + C
$$

$$
\int \sinh x\,dx = \cosh x + C, \qquad \int \cosh x\,dx = \sinh x + C
$$

$$
\int \tanh x\,dx = \ln \cosh x + C, \qquad \int \coth x\,dx = \ln|\sinh x| + C
$$

## conditions
- $a > 0$.
- $\ln|\sec x| = -\ln|\cos x|$, $-\ln|\csc x| = \ln|\sin x|$로도 쓴다. 교재는 $\int \tanh x\,dx = -\ln|\operatorname{sech} x|$, $\int \coth x\,dx = -\ln|\operatorname{csch} x|$로 적었는데 같은 식이다.

## explanation
$\int \tan x\,dx$, $\int \cot x\,dx$는 $\frac{\sin x}{\cos x}$를 치환하면 바로 나온다. $\int \sec x\,dx$, $\int \csc x\,dx$는 유도가 까다로워서 외운다. $\frac{1}{a}\tan^{-1}$의 앞 계수 $\frac{1}{a}$이 $\sin^{-1}$에는 없다는 점이 자주 틀린다.

## supplement
교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
