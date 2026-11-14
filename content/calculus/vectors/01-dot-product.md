---
id: calc-vec-dot-product
title_ko: "벡터의 내적"
title_en: "Dot product"
question: "내적의 두 가지 정의와 수직 조건, 방향코사인의 성질은?"
tags: [내적, 스칼라곱, 수직, 방향코사인, dot product, direction cosine]
importance: 3
related: [calc-vec-cross-product, calc-vec-projection]
source: "book:BLIS편입 다변수 1장 (01 벡터의 내적)"
verified: false
---

## formula
$$
\begin{aligned}
&\mathbf{a}\cdot\mathbf{b} = |\mathbf{a}||\mathbf{b}|\cos\theta = a_1b_1 + a_2b_2 + a_3b_3 \\
&(0 \le \theta \le \pi)
\end{aligned}
$$

$$
\mathbf{a}\cdot\mathbf{a} = |\mathbf{a}|^2, \qquad \mathbf{a}\cdot\mathbf{b} = 0 \iff \mathbf{a} \perp \mathbf{b}
$$

$$
\cos^2\alpha + \cos^2\beta + \cos^2\gamma = 1
$$

$$
\cos\alpha = \frac{a_1}{|\mathbf{a}|},\ \cos\beta = \frac{a_2}{|\mathbf{a}|},\ \cos\gamma = \frac{a_3}{|\mathbf{a}|}
$$

## conditions
- 수직 조건은 $\mathbf{a}$, $\mathbf{b}$가 영벡터가 아닐 때.
- 성질: 교환법칙 $\mathbf{a}\cdot\mathbf{b} = \mathbf{b}\cdot\mathbf{a}$, 분배법칙, $(m\mathbf{a})\cdot(n\mathbf{b}) = mn(\mathbf{a}\cdot\mathbf{b})$.
- 방향코사인(direction cosine): $\alpha$, $\beta$, $\gamma$는 $\mathbf{a}$가 $x$, $y$, $z$축의 양의 방향과 이루는 각.

## explanation
내적의 결과는 스칼라다. 두 벡터 사이의 각은 $\cos\theta = \dfrac{\mathbf{a}\cdot\mathbf{b}}{|\mathbf{a}||\mathbf{b}|}$로 구한다. $|k\mathbf{v} + \mathbf{w}|$처럼 크기가 주어지면 제곱해서 내적으로 전개한다: $|k\mathbf{v}+\mathbf{w}|^2 = k^2|\mathbf{v}|^2 + 2k\,\mathbf{v}\cdot\mathbf{w} + |\mathbf{w}|^2$.

## supplement
방향코사인 공식과 크기 전개 요령을 추가했습니다. 교재 성질 '(ma)·(mb)=m²(a·b)'를 일반형 mn으로 썼습니다. 교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
