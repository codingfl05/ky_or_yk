---
id: calc-vc-divergence
title_ko: "발산 정리"
title_en: "Divergence theorem"
question: "발산 정리의 공식과, 폐곡면이 아닐 때 쓰는 방법은?"
tags: [발산 정리, 가우스 정리, 다이버전스, 폐곡면, divergence theorem]
importance: 3
related: [calc-vc-flux, calc-vc-stokes, calc-mv-spherical]
source: "book:BLIS편입 다변수 면적분 02 (발산 정리)"
verified: false
---

## formula
$$
\iint_S \mathbf{F}\cdot\mathbf{n}\,dS = \iiint_E \nabla\cdot\mathbf{F}\,dV
$$

$$
\nabla\cdot\mathbf{F} = \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z}
$$

$$
\begin{aligned}
&\iint_S \mathbf{F}\cdot\mathbf{n}\,dS = \iiint_E \nabla\cdot\mathbf{F}\,dV - \iint_{S'} \mathbf{F}\cdot\mathbf{n}\,dS \\
&(S \cup S' \text{ closed})
\end{aligned}
$$

## conditions
- $S$: 입체 $E$를 둘러싼 폐곡면, $\mathbf{n}$은 바깥 방향. $\mathbf{F}$의 편도함수가 $E$ 전체(내부 모든 점)에서 연속이어야 한다. 내부에 한 점이라도 정의되지 않으면 쓸 수 없다.
- 반례: $\mathbf{F} = \dfrac{\mathbf{r}}{|\mathbf{r}|^3}$은 원점 밖에서 $\nabla\cdot\mathbf{F} = 0$이지만, 원점을 감싸는 구면의 유량은 $4\pi$. 이럴 땐 원점 주위 작은 구를 따로 빼서 계산한다.
- 폐곡면이 아니면 뚜껑(보통 평면 원판) $S'$을 덮어 폐곡면을 만든 뒤, 뚜껑의 면적분을 직접 구해 뺀다 (둘째 식).

## explanation
면적분(곡면 껍데기)이 곡면이 감싸는 내부 부피 전체의 적분으로 바뀐다. 필기 노트 정리: ① 폐곡면이 주어지면 바로 발산 정리 (쉬움) ② 폐곡면이 아니면 뚜껑을 덮어 발산 정리 − 뚜껑 ③ 그래도 안 되면 면적분을 직접 계산. $\nabla\cdot\mathbf{F}$에 $x^2 + y^2 + z^2$이 나오면 구면좌표, $x^2 + y^2$이면 원주좌표로 삼중적분한다.

## supplement
교재 본문을 받아 대조했습니다. 공식과 div 정의는 맞습니다. 다만 교재의 '내부 영역 모두에서 F가 불연속이라면 사용할 수 없다'는 문장은 논리가 반대입니다 (한 점이라도 불연속이면 쓸 수 없음). 그래서 조건을 바로잡고 r/|r|³ 반례를 추가했습니다. 바깥 방향·연속 조건과 좌표계 선택을 추가했습니다. 교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
