---
id: calc-maclaurin-arcsin
title_ko: "sin⁻¹x의 Maclaurin 급수"
title_en: "Maclaurin series of arcsin x"
question: "sin⁻¹x의 Maclaurin 급수와 수렴 구간은?"
tags: [역사인, 아크사인, 역삼각함수, 매클로린, arcsine, inverse sine, maclaurin series]
importance: 2
related: [calc-maclaurin-inv-sqrt, calc-maclaurin-arcsinh]
source: "book:BLIS편입 적분 6-02"
verified: false
---

## formula
$$
\sin^{-1} x = x + \frac{1}{2}\cdot\frac{1}{3}x^3 + \frac{1}{2}\cdot\frac{3}{4}\cdot\frac{1}{5}x^5 + \frac{1}{2}\cdot\frac{3}{4}\cdot\frac{5}{6}\cdot\frac{1}{7}x^7 + \cdots
$$

$$
\sin^{-1} x = \sum_{n=0}^{\infty} \frac{(2n)!}{4^n (n!)^2}\,\frac{x^{2n+1}}{2n+1}
$$

## conditions
- 수렴 구간: $-1 \le x \le 1$. 교재에는 $-1 \le x < 1$로 되어 있지만, 홀함수이고 계수가 $n^{-3/2}$ 정도로 줄어들어 $x = \pm 1$ 모두에서 수렴한다.

## explanation
$\dfrac{1}{\sqrt{1-t^2}}$의 급수를 $0$부터 $x$까지 항별 적분한 것이다. 계수는 "$\dfrac{1}{2}\cdot\dfrac{3}{4}\cdot\dfrac{5}{6}\cdots$ (홀수/짝수 곱)"에 $\dfrac{1}{\text{차수}}$를 곱한 꼴로 외운다.

## supplement
Σ 일반항과 수렴 구간 수정(교재 −1≤x<1 → −1≤x≤1)을 추가했습니다. 교재 페이지에는 공식과 수렴 구간만 있고, 조건·설명은 Claude가 추가했습니다.
