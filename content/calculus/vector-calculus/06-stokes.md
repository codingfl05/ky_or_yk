---
id: calc-vc-stokes
title_ko: "Stokes 정리"
title_en: "Stokes' theorem"
question: "Stokes 정리의 공식과 곡선 방향 규칙은?"
tags: [스톡스 정리, 회전, 컬, stokes' theorem, curl]
importance: 3
related: [calc-vc-green, calc-vc-fundamental-theorem, calc-vc-flux]
source: "book:BLIS편입 다변수 9장 03 (Stokes 정리)"
verified: false
---

## formula
$$
\oint_C \mathbf{F}\cdot d\mathbf{r} = \iint_S (\nabla\times\mathbf{F})\cdot\mathbf{n}\,dS
$$

## conditions
- $C$: 곡면 $S$의 경계인 3차원 폐곡선. 방향은 $\mathbf{n}$ 쪽에서 내려다볼 때 반시계 (오른손 법칙: 엄지 = $\mathbf{n}$, 네 손가락 = $C$ 방향).
- $\mathbf{F}$의 편도함수가 $S$를 포함하는 영역에서 연속.
- 같은 경계 $C$를 갖는 곡면이면 어떤 모양이든 된다: 보통 가장 간단한 평면 조각을 고른다 (예: 반구 $S$ 대신 바닥 원판 $S'$).
- 쓰는 경우 두 가지: ① 3차원 폐곡선의 선적분 ② 피적분함수가 $\operatorname{curl}\mathbf{F}$인 면적분. 그냥 $\mathbf{F}\cdot\mathbf{n}$의 면적분에는 쓸 수 없다 (그때는 발산 정리나 직접 계산).
- 폐곡면 전체에서 $\iint (\nabla\times\mathbf{F})\cdot\mathbf{n}\,dS = 0$ (경계가 없음, $\nabla\cdot(\nabla\times\mathbf{F}) = 0$).

## explanation
Green 정리의 3차원 확장판이다. 3차원 폐곡선의 선적분을 회전($\nabla\times\mathbf{F}$)의 면적분으로 바꾼다. 면적분을 이해하지 못하면 쓸 수 없어서 면적분과 함께 익힌다. $xy$평면 위의 곡선이면 Green 정리와 같다. 반대로 $\iint_S (\nabla\times\mathbf{F})\cdot\mathbf{n}\,dS$를 묻는 문제는 경계 곡선의 선적분으로 계산하는 것이 빠를 때가 많다.

## supplement
교재 9장 03쪽(Stokes 정리)을 받아 대조했습니다. 공식, '폐곡선 C를 포함하는 S이면 어떤 형태든 가능', 오른손 법칙 모두 맞습니다. 쓰는 두 경우, 폐곡면에서 0이 되는 성질(필기 예시)을 추가했습니다. 방향 규칙과 곡면 선택 요령을 추가했습니다. 교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
