---
id: calc-vec-cross-product
title_ko: "벡터의 외적"
title_en: "Cross product"
question: "외적의 성분 계산, 크기, 방향, 기본 성질은?"
tags: [외적, 벡터곱, cross product, vector product]
importance: 3
related: [calc-vec-dot-product, calc-vec-triple-products, calc-vec-area-volume]
source: "book:BLIS편입 다변수 1장 (02 벡터의 외적)"
verified: false
---

## formula
$$
\begin{aligned}
&\mathbf{a}\times\mathbf{b} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ a_1 & a_2 & a_3 \\ b_1 & b_2 & b_3 \end{vmatrix} \\
&\quad {}= (a_2b_3 - a_3b_2)\mathbf{i} - (a_1b_3 - a_3b_1)\mathbf{j} \\
&\quad {}+ (a_1b_2 - a_2b_1)\mathbf{k}
\end{aligned}
$$

$$
|\mathbf{a}\times\mathbf{b}| = |\mathbf{a}||\mathbf{b}|\sin\theta
$$

$$
\mathbf{a}\times\mathbf{b} = -(\mathbf{b}\times\mathbf{a})
$$

$$
\mathbf{i}\times\mathbf{j} = \mathbf{k},\ \mathbf{j}\times\mathbf{k} = \mathbf{i},\ \mathbf{k}\times\mathbf{i} = \mathbf{j}
$$

## conditions
- 결과는 벡터이고 $\mathbf{a}$, $\mathbf{b}$ 모두에 수직 (방향은 오른손 법칙).
- $\mathbf{a}\times\mathbf{a} = \mathbf{0}$. 영벡터가 아닌 두 벡터에서 $\mathbf{a}\times\mathbf{b} = \mathbf{0} \iff \mathbf{a} \parallel \mathbf{b}$.
- 분배법칙 $\mathbf{a}\times(\mathbf{b}\pm\mathbf{c}) = \mathbf{a}\times\mathbf{b} \pm \mathbf{a}\times\mathbf{c}$, $(m\mathbf{a})\times\mathbf{b} = m(\mathbf{a}\times\mathbf{b})$. 결합법칙은 성립하지 않는다.

## explanation
$\mathbf{j}$ 성분 앞의 음수 부호를 빠뜨리는 실수가 가장 많다. 두 벡터에 동시에 수직인 벡터, 평면의 법선벡터, 넓이를 구할 때 쓴다.

## supplement
결합법칙이 성립하지 않는다는 점을 추가했습니다. 교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
