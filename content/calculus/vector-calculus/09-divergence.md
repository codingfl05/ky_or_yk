---
id: calc-vc-divergence
title_ko: "발산 정리"
title_en: "Divergence theorem"
question: "발산 정리의 공식과, 폐곡면이 아닐 때 쓰는 방법은?"
tags: [발산 정리, 가우스 정리, 다이버전스, 폐곡면, divergence theorem]
importance: 3
related: [calc-vc-flux, calc-vc-stokes, calc-mv-spherical]
source: "book:BLIS편입 다변수 면적분 02 + 필기 (발산 정리)"
verified: false
---

## formula
$$
\iint_S \mathbf{F}\cdot\mathbf{n}\,dS = \iiint_E \nabla\cdot\mathbf{F}\,dV, \qquad \nabla\cdot\mathbf{F} = \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z}
$$

$$
\iint_S \mathbf{F}\cdot\mathbf{n}\,dS = \iiint_E \nabla\cdot\mathbf{F}\,dV - \iint_{S'} \mathbf{F}\cdot\mathbf{n}\,dS \qquad (S \cup S' \text{ closed})
$$

## conditions
- $S$: 입체 $E$를 둘러싼 폐곡면, $\mathbf{n}$은 바깥 방향. $\mathbf{F}$의 편도함수가 $E$를 포함하는 영역에서 연속.
- 폐곡면이 아니면 뚜껑(보통 평면 원판) $S'$을 덮어 폐곡면을 만든 뒤, 뚜껑의 면적분을 직접 구해 뺀다 (둘째 식).

## explanation
필기 노트 정리: ① 폐곡면이 주어지면 바로 발산 정리 (쉬움) ② 폐곡면이 아니면 뚜껑을 덮어 발산 정리 − 뚜껑 ③ 그래도 안 되면 면적분을 직접 계산. $\nabla\cdot\mathbf{F}$에 $x^2 + y^2 + z^2$이 나오면 구면좌표, $x^2 + y^2$이면 원주좌표로 삼중적분한다.

## supplement
발산 정리 본문 페이지는 아직 받지 못해, 필기 노트(뚜껑 덮기 풀이 포함)와 표준 정리로 작성했습니다. 바깥 방향·연속 조건과 좌표계 선택을 추가했습니다. 교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
