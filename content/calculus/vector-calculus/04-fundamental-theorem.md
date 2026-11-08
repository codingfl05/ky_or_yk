---
id: calc-vc-fundamental-theorem
title_ko: "선적분의 기본정리와 보존장 판정"
title_en: "Fundamental theorem for line integrals"
question: "보존장의 선적분 공식과 보존장 판정법(조건 포함)은?"
tags: [선적분의 기본정리, 보존장, 퍼텐셜 함수, 경로 독립, conservative field, potential function]
importance: 3
related: [calc-vc-vector-line-integral, calc-vc-green, calc-vc-stokes]
source: "book:BLIS편입 다변수 9-10 (선적분의 기본정리)"
verified: false
---

## formula
$$
\mathbf{F} = \nabla f \;\Longrightarrow\; \int_C \mathbf{F}\cdot d\mathbf{r} = f(\mathbf{r}(b)) - f(\mathbf{r}(a))
$$

$$
\mathbf{F} = \langle P, Q\rangle: \ \frac{\partial Q}{\partial x} = \frac{\partial P}{\partial y}, \qquad \mathbf{F} = \langle P, Q, R\rangle: \ \operatorname{curl}\mathbf{F} = \nabla\times\mathbf{F} = \mathbf{0}
$$

$$
\nabla\times\mathbf{F} = (R_y - Q_z)\,\mathbf{i} + (P_z - R_x)\,\mathbf{j} + (Q_x - P_y)\,\mathbf{k}
$$

## conditions
- 보존장(conservative field) $\mathbf{F} = \nabla f$이면 경로와 무관하고 시작점과 끝점만 중요하다. 닫힌 곡선에서는 $0$.
- 판정법은 $P$, $Q$($R$)의 편도함수가 연속이고 영역이 단순연결(simply connected, 구멍 없음)일 때만 "보존장 $\iff$ 편미분 조건"이 성립한다.
- 반례: $\mathbf{F} = \left\langle \frac{-y}{x^2+y^2}, \frac{x}{x^2+y^2}\right\rangle$은 $Q_x = P_y$인데 원점을 도는 원에서 선적분이 $2\pi$라 보존장이 아니다 (원점이 구멍).
- 퍼텐셜 함수 $f$ 찾기: $f_x = P$를 $x$로 적분하고, $y$($z$)로 미분해 $Q$($R$)와 비교해 상수항을 정한다.

## explanation
풀이 순서: 보존장 판정 → 퍼텐셜 함수 찾기 → 끝점 값 − 시작점 값. 3차원 판정은 $P_y = Q_x$, $Q_z = R_y$, $P_z = R_x$ 세 쌍을 확인하는 것과 같다.

## supplement
교재 9-10은 판정법의 조건을 '영역 안에서 연속'으로만 적었는데, 영역이 단순연결이어야 한다는 조건이 빠져 있어 반례와 함께 추가했습니다. 퍼텐셜 함수 찾는 법을 추가했습니다. curl 전개는 필기 노트와 같습니다. 교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
