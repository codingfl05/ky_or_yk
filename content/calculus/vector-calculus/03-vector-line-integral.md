---
id: calc-vc-vector-line-integral
title_ko: "벡터장의 선적분 (일)"
title_en: "Line integrals of vector fields (work)"
question: "∫_C F·dr의 성분 표현과 매개변수 계산식은?"
tags: [선적분, 벡터장, 일, work, line integral, vector field]
importance: 3
related: [calc-vc-overview, calc-vc-fundamental-theorem, calc-vc-green]
source: "book:BLIS편입 다변수 9-10 (벡터장의 선적분)"
verified: false
---

## formula
$$
\int_C \mathbf{F}\cdot d\mathbf{r} = \int_C P\,dx + Q\,dy + R\,dz = \int_a^b \mathbf{F}(\mathbf{r}(t))\cdot\mathbf{r}'(t)\,dt
$$

$$
= \int_a^b \{P\,x'(t) + Q\,y'(t) + R\,z'(t)\}\,dt
$$

## conditions
- $\mathbf{F} = \langle P, Q, R\rangle$, $d\mathbf{r} = \langle dx, dy, dz\rangle$.
- 경로 방향을 반대로 하면 부호가 바뀐다: $\int_{-C} = -\int_C$.
- 의미: 힘 $\mathbf{F}$가 곡선을 따라 한 일(work).

## explanation
매개변수 대입(위 식)은 기본정리·Green·Stokes를 쓸 수 없을 때의 최후 수단이다. 스칼라장 선적분과 달리 방향이 중요하다.

## supplement
방향을 바꾸면 부호가 바뀐다는 점을 추가했습니다. 교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
