---
id: calc-vec-triple-products
title_ko: "스칼라 삼중적과 벡터 삼중적"
title_en: "Scalar and vector triple products"
question: "스칼라 삼중적의 순환 성질과 a×(b×c) 전개 공식은?"
tags: [스칼라 삼중적, 벡터 삼중적, 공면, scalar triple product, vector triple product]
importance: 3
related: [calc-vec-cross-product, calc-vec-area-volume]
source: "book:BLIS편입 다변수 1장 (02 스칼라 삼중적)"
verified: false
---

## formula
$$
\begin{aligned}
&\mathbf{a}\cdot(\mathbf{b}\times\mathbf{c}) = \mathbf{b}\cdot(\mathbf{c}\times\mathbf{a}) \\
&\quad {}= \mathbf{c}\cdot(\mathbf{a}\times\mathbf{b}) = \begin{vmatrix} a_1 & a_2 & a_3 \\ b_1 & b_2 & b_3 \\ c_1 & c_2 & c_3 \end{vmatrix}
\end{aligned}
$$

$$
\mathbf{a}\times(\mathbf{b}\times\mathbf{c}) = (\mathbf{a}\cdot\mathbf{c})\mathbf{b} - (\mathbf{a}\cdot\mathbf{b})\mathbf{c}
$$

$$
(\mathbf{a}\times\mathbf{b})\times\mathbf{c} = (\mathbf{a}\cdot\mathbf{c})\mathbf{b} - (\mathbf{b}\cdot\mathbf{c})\mathbf{a}
$$

$$
(\mathbf{a}\times\mathbf{b})\cdot(\mathbf{c}\times\mathbf{d}) = (\mathbf{a}\cdot\mathbf{c})(\mathbf{b}\cdot\mathbf{d}) - (\mathbf{a}\cdot\mathbf{d})(\mathbf{b}\cdot\mathbf{c})
$$

## conditions
- 스칼라 삼중적은 순환해도 같고, 두 벡터 순서를 바꾸면 부호가 바뀐다.
- 세 벡터가 한 평면 위에 있을(공면, coplanar) 필요충분조건: $\mathbf{a}\cdot(\mathbf{b}\times\mathbf{c}) = 0$.

## explanation
벡터 삼중적은 "BAC − CAB"로 외운다: $\mathbf{a}\times(\mathbf{b}\times\mathbf{c}) = \mathbf{b}(\mathbf{a}\cdot\mathbf{c}) - \mathbf{c}(\mathbf{a}\cdot\mathbf{b})$. 괄호 안의 두 벡터의 일차결합이 된다는 점을 기억하면 부호를 맞추기 쉽다.

## supplement
공면 조건과 BAC−CAB 암기법을 추가했습니다. 교재의 벡터 삼중적 두 식과 (a×b)·(c×d) 공식은 검산 결과 맞습니다. 교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
