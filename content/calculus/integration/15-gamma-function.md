---
id: calc-int-gamma-function
title_ko: "감마함수"
title_en: "Gamma function"
question: "감마함수의 정의와 Γ(n+1), Γ(1/2)의 값은?"
tags: [감마함수, 팩토리얼, 이상적분, gamma function, factorial]
importance: 3
related: [calc-int-p-test]
source: "book:BLIS편입 적분 3장 (02 감마함수 개념)"
verified: false
---

## formula
$$
\Gamma(t) = \int_0^{\infty} x^{t-1}e^{-x}\,dx \ (t > 0)
$$

$$
\Gamma(t+1) = \int_0^{\infty} x^{t}e^{-x}\,dx = t\,\Gamma(t)
$$

$$
\Gamma(n+1) = n!, \qquad \Gamma\!\left(\frac{1}{2}\right) = \sqrt{\pi}
$$

## conditions
- $\int_0^\infty x^t e^{-x}\,dx$는 $t > -1$이면 수렴. $e^{-x}$ 대신 최고차항 계수가 음수인 다항식의 지수($e^{-x^3 + x}$ 등)여도 수렴 판정은 같다.

## explanation
$\int_0^\infty x^n e^{-ax}\,dx = \frac{n!}{a^{n+1}}$처럼 치환으로 감마함수 꼴로 바꿔 계산한다. $\Gamma\!\left(\frac{1}{2}\right) = \sqrt{\pi}$는 가우스 적분 $\int_{-\infty}^\infty e^{-x^2}\,dx = \sqrt{\pi}$와 같은 이야기다.

## supplement
Γ(1/2)=√π, 점화식 Γ(t+1)=tΓ(t), 치환 공식을 추가했습니다. 교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
