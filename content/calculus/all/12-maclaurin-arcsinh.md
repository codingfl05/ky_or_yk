---
id: calc-maclaurin-arcsinh
title_ko: "sinh⁻¹x의 Maclaurin 급수"
title_en: "Maclaurin series of arsinh x"
question: "sinh⁻¹x의 Maclaurin 급수와 수렴 구간은?"
tags: [역쌍곡사인, 쌍곡선함수, 매클로린, inverse hyperbolic sine, maclaurin series]
importance: 2
related: [calc-maclaurin-arcsin, calc-maclaurin-inv-sqrt, calc-maclaurin-binomial]
source: "book:BLIS편입 적분 6-02"
verified: false
---

## formula
$$
\sinh^{-1} x = x - \frac{1}{2}\cdot\frac{1}{3}x^3 + \frac{1}{2}\cdot\frac{3}{4}\cdot\frac{1}{5}x^5 - \frac{1}{2}\cdot\frac{3}{4}\cdot\frac{5}{6}\cdot\frac{1}{7}x^7 + \cdots
$$

$$
\sinh^{-1} x = \sum_{n=0}^{\infty} (-1)^n \frac{(2n)!}{4^n (n!)^2}\,\frac{x^{2n+1}}{2n+1}
$$

## conditions
- 수렴 구간: $-1 \le x \le 1$ (수렴 반지름 1). 교재에는 $-1 < x < 1$로 되어 있는데, 계수가 $n^{-3/2}$ 정도로 줄어들어 양 끝에서도 수렴한다.

## explanation
$\dfrac{1}{\sqrt{1+t^2}}$의 급수를 적분한 것이다. $\sin^{-1} x$와 계수가 같고 부호만 번갈아 바뀐다. 함수 자체는 모든 실수에서 정의되지만 급수는 $|x| \le 1$에서만 쓸 수 있다.

## supplement
Σ 일반항과 수렴 구간 수정(교재 −1<x<1 → −1≤x≤1)을 추가했습니다. 교재 페이지에는 공식과 수렴 구간만 있고, 조건·설명은 Claude가 추가했습니다.
