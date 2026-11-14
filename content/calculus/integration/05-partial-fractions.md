---
id: calc-int-partial-fractions
title_ko: "유리함수 적분 (부분분수)"
title_en: "Partial fractions"
question: "유리함수를 부분분수로 나누는 방법과 Heaviside 방법은?"
tags: [부분분수, 유리함수 적분, 헤비사이드, partial fractions, heaviside cover-up]
importance: 3
related: [calc-int-trig-substitution, calc-telescoping-partial-fractions]
source: "book:BLIS편입 적분 1장 (05 유리함수의 적분법)"
verified: false
---

## formula
$$
\frac{1}{(x-a)(x-b)} = \frac{1}{a-b}\left(\frac{1}{x-a} - \frac{1}{x-b}\right)
$$

$$
\frac{p(x)}{(x-a)(x-b)} = \frac{A}{x-a} + \frac{B}{x-b}
$$

$$
A = \frac{p(a)}{a-b}, \quad B = \frac{p(b)}{b-a}
$$

$$
\frac{1}{(x-a)(x^2+b)} = \frac{A}{x-a} + \frac{Bx + C}{x^2 + b}
$$

## conditions
- 분자 차수 $\ge$ 분모 차수이면 먼저 나눗셈.
- Heaviside 방법: 양변에 $(x - a)$를 곱하고 $x \to a$로 보내면 $A$가 나온다 (1차 인수만).
- 인수분해되지 않는 이차식 분모는 분자를 $Bx + C$로 두고 계수 비교. 이차식 하나만 남으면 완전제곱 후 삼각치환.

## explanation
1차 인수에는 Heaviside가 가장 빠르고, 이차 인수가 섞이면 남은 계수만 직접 비교한다. 나눈 뒤의 적분은 결국 $\ln|x - a|$와 $\tan^{-1}$ 꼴이 된다.

## supplement
일반 분자 p(x)에 대한 Heaviside 공식을 추가했습니다. 교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
