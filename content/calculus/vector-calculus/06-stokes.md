---
id: calc-vc-stokes
title_ko: "Stokes 정리"
title_en: "Stokes' theorem"
question: "Stokes 정리의 공식과 곡선 방향 규칙은?"
tags: [스톡스 정리, 회전, 컬, stokes' theorem, curl]
importance: 3
related: [calc-vc-green, calc-vc-fundamental-theorem, calc-vc-flux]
source: "book:BLIS편입 다변수 필기 9-03 (Stokes 정리)"
verified: false
---

## formula
$$
\oint_C \mathbf{F}\cdot d\mathbf{r} = \iint_S (\nabla\times\mathbf{F})\cdot\mathbf{n}\,dS
$$

## conditions
- $C$: 곡면 $S$의 경계인 3차원 폐곡선. 방향은 $\mathbf{n}$ 쪽에서 내려다볼 때 반시계 (오른손 법칙: 엄지 = $\mathbf{n}$, 네 손가락 = $C$ 방향).
- $\mathbf{F}$의 편도함수가 $S$를 포함하는 영역에서 연속.
- 같은 경계를 갖는 곡면이면 어느 것을 골라도 된다: 보통 가장 간단한 평면 조각을 고른다.

## explanation
3차원 폐곡선의 선적분을 회전($\nabla\times\mathbf{F}$)의 면적분으로 바꾼다. 면적분을 이해하지 못하면 쓸 수 없어서 면적분과 함께 익힌다. $xy$평면 위의 곡선이면 Green 정리와 같다. 반대로 $\iint_S (\nabla\times\mathbf{F})\cdot\mathbf{n}\,dS$를 묻는 문제는 경계 곡선의 선적분으로 계산하는 것이 빠를 때가 많다.

## supplement
Stokes 정리 본문 페이지는 아직 받지 못해, 필기 노트 9-03(조건: 양의 방향, 3차원 폐곡선)과 표준 정리로 작성했습니다. 방향 규칙과 곡면 선택 요령을 추가했습니다. 교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
