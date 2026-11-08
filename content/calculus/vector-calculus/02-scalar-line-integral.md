---
id: calc-vc-scalar-line-integral
title_ko: "스칼라장의 선적분"
title_en: "Line integrals of scalar fields"
question: "∫_C f ds를 매개변수로 계산하는 식과 의미는?"
tags: [선적분, 스칼라장, 호의 길이, line integral, scalar field, arc length]
importance: 3
related: [calc-vc-overview, calc-int-arc-length, calc-mv-center-of-mass]
source: "book:BLIS편입 다변수 9-02 (스칼라 장에서의 선적분)"
verified: false
---

## formula
$$
\int_C f\,ds = \int_a^b f(x(t), y(t), z(t))\sqrt{x'(t)^2 + y'(t)^2 + z'(t)^2}\,dt
$$

## conditions
- 경로 $\mathbf{r}(t) = \langle x(t), y(t), z(t)\rangle$ ($a \le t \le b$)를 대입. 평면 곡선이면 $z'$ 항 없음.
- $ds = |\mathbf{r}'(t)|\,dt$. 방향과 상관없다 (경로를 거꾸로 가도 값이 같음).
- 의미: $f$가 밀도이면 곡선의 질량, $f = 1$이면 곡선의 길이.

## explanation
풀이는 매개화 후 대입이 100%다. 선분은 $\mathbf{r}(t) = (1 - t)P + tQ$ ($0 \le t \le 1$), 원은 $\langle a\cos t, a\sin t\rangle$로 매개화한다. 경로가 여러 조각이면 조각별로 더한다.

## supplement
방향 무관 성질과 매개화 예시를 추가했습니다. 교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
