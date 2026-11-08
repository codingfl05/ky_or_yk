---
id: calc-vc-overview
title_ko: "선적분·면적분 정리 한눈에"
title_en: "Line and surface integrals: overview"
question: "스칼라장·벡터장 선적분과 면적분의 형태, 벡터장 선적분을 푸는 네 가지 방법의 우선순위는?"
tags: [선적분, 면적분, 벡터장, 스칼라장, line integral, surface integral]
importance: 3
related: [calc-vc-scalar-line-integral, calc-vc-vector-line-integral, calc-vc-fundamental-theorem, calc-vc-green, calc-vc-stokes, calc-vc-divergence]
source: "book:BLIS편입 다변수 9-02, 9-10, 필기 9-03 (선적분과 면적분)"
verified: false
---

## formula
$$
\int_C f\,ds, \qquad \int_C \mathbf{F}\cdot d\mathbf{r}, \qquad \iint_S f\,dS, \qquad \iint_S \mathbf{F}\cdot\mathbf{n}\,dS
$$

## conditions
- 선적분: 적분 구간이 곡선 $C$ (일변수 적분과 비슷). 면적분: 적분 구간이 곡면 $S$ (이중적분과 비슷).
- 스칼라장($f$)은 매개화해서 대입하면 끝. 벡터장($\mathbf{F} = \langle P, Q, R\rangle$)은 정리를 먼저 검토.
- 벡터장 선적분 우선순위: ① 선적분의 기본정리 (보존장) ② Green 정리 (2차원 폐곡선) ③ Stokes 정리 (3차원 폐곡선, 면적분으로) ④ 매개변수 대입 (최후의 수단).
- 벡터장 면적분: 폐곡면이면 발산 정리, 아니면 직접 계산 (또는 뚜껑을 덮어 발산 정리).

## explanation
교재는 벡터장 선적분에서 매개화를 맨 마지막 수단으로 두라고 강조한다. 문제를 보면 ① $\mathbf{F}$가 보존장인지(편미분 비교) ② 경로가 닫혀 있는지, 평면인지 공간인지를 먼저 확인한다.

## supplement
필기 노트 9-03, 11쪽의 정리 흐름을 카드로 정리했습니다. 교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
