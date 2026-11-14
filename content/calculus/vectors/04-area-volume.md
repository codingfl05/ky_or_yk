---
id: calc-vec-area-volume
title_ko: "벡터로 구하는 넓이와 부피"
title_en: "Area and volume with vectors"
question: "평행사변형·삼각형의 넓이와 평행육면체·사면체의 부피를 벡터로 구하면?"
tags: [넓이, 부피, 평행사변형, 평행육면체, 사면체, area, volume, parallelepiped]
importance: 3
related: [calc-vec-cross-product, calc-vec-triple-products]
source: "book:BLIS편입 다변수 1장 (02 외적과 도형의 면적 및 부피)"
verified: false
---

## formula
$$
S_{\text{parallelogram}} = |\mathbf{a}\times\mathbf{b}|, \qquad S_{\text{triangle}} = \frac{1}{2}|\mathbf{a}\times\mathbf{b}|
$$

$$
V_{\text{parallelepiped}} = |\mathbf{a}\cdot(\mathbf{b}\times\mathbf{c})|
$$

$$
V_{\text{tetrahedron}} = \frac{1}{6}|\mathbf{a}\cdot(\mathbf{b}\times\mathbf{c})|
$$

## conditions
- $\mathbf{a}$, $\mathbf{b}$($\mathbf{c}$)는 한 꼭짓점에서 나가는 변 벡터.
- 평면에서 꼭짓점 $(x_1, y_1)$, $(x_2, y_2)$, $(x_3, y_3)$인 삼각형: $S = \frac{1}{2}|(x_2 - x_1)(y_3 - y_1) - (x_3 - x_1)(y_2 - y_1)|$.

## explanation
평행사변형 꼭짓점 네 개가 주어지면 어느 꼭짓점에서 나가는 두 변인지 먼저 확인한다 (대각선을 변으로 잡는 실수). 사면체는 삼각뿔이라 평행육면체의 $\frac{1}{6}$이다.

## supplement
좌표로 구하는 삼각형 넓이 공식을 추가했습니다. 교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
