---
id: calc-vc-green
title_ko: "Green 정리"
title_en: "Green's theorem"
question: "Green 정리의 공식과 쓸 수 있는 조건, 넓이 공식은?"
tags: [그린 정리, 선적분, 폐곡선, green's theorem]
importance: 3
related: [calc-vc-fundamental-theorem, calc-vc-stokes, calc-vc-vector-line-integral]
source: "book:BLIS편입 다변수 9-22 (Green 정리)"
verified: false
---

## formula
$$
\begin{aligned}
&\oint_C P\,dx + Q\,dy = \iint_D \begin{vmatrix} \dfrac{\partial}{\partial x} & \dfrac{\partial}{\partial y} \\ P & Q \end{vmatrix} dA \\
&\quad {}= \iint_D \left(\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}\right)dA
\end{aligned}
$$

$$
A = \oint_C x\,dy = -\oint_C y\,dx = \frac{1}{2}\oint_C x\,dy - y\,dx
$$

## conditions
- $C$: 평면의 단순 닫힌 곡선(폐곡선), 양의 방향 = 반시계 방향(영역 $D$가 왼쪽).
- $P$, $Q$의 편도함수가 $D$를 포함하는 영역에서 연속. $D$ 안에 특이점(예: 원점에서 정의 안 되는 $\mathbf{F}$)이 있으면 그대로 쓸 수 없다.
- 시계 방향이면 부호를 바꾼다. 닫혀 있지 않으면 선분을 더해 닫은 뒤 그 선분의 적분을 뺀다.

## explanation
선적분을 폐곡선이 둘러싼 영역의 이중적분으로 바꾼다. $Q_x - P_y$가 상수이면 "상수 × 넓이"로 바로 끝난다. 특이점이 안에 있으면 그 점을 작은 원으로 따로 감싸서 계산한다.

## supplement
넓이 공식, 특이점·시계방향·열린 경로 처리법을 추가했습니다. 교재 공식(행렬식 꼴 = Qx − Py)은 맞습니다. 교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
