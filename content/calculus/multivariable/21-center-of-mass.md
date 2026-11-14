---
id: calc-mv-center-of-mass
title_ko: "질량중심과 모멘트"
title_en: "Center of mass and moments"
question: "곡선·평면·공간에서 질량과 질량중심 공식은?"
tags: [질량중심, 무게중심, 모멘트, 밀도, center of mass, centroid, moment]
importance: 2
related: [calc-int-pappus, calc-vc-scalar-line-integral]
source: "book:BLIS편입 다변수 8-36 (질량중심과 모멘트)"
verified: false
---

## formula
$$
\text{curve: } m = \int_C \rho\,ds, \quad \bar{x} = \frac{1}{m}\int_C x\rho\,ds
$$

$$
\begin{aligned}
&\text{plane: } m = \iint_D \rho\,dA, \\
&\bar{x} = \frac{1}{m}\iint_D x\rho\,dA = \frac{M_y}{m}, \\
&\bar{y} = \frac{1}{m}\iint_D y\rho\,dA = \frac{M_x}{m}
\end{aligned}
$$

$$
\text{space: } m = \iiint_E \rho\,dV, \quad \bar{x} = \frac{1}{m}\iiint_E x\rho\,dV
$$

## conditions
- $\bar{y}$, $\bar{z}$도 같은 꼴 ($x$ 자리에 $y$, $z$).
- 밀도 언급이 없거나 균일하면 $\rho$를 상수로 두면 약분되어 도형의 중심(centroid)이 된다: 예: 곡선이면 $\bar{x} = \dfrac{\int_C x\,ds}{\int_C ds}$.
- 모멘트 $M_y = \iint x\rho\,dA$ ($y$축에 대한), $M_x = \iint y\rho\,dA$ ($x$축에 대한). 첨자와 곱하는 좌표가 반대라는 점에 주의.

## explanation
물리에 가까운 단원이라 편입에서는 공식을 대입하는 정도로 나온다. 질량 $m$은 밀도를 곡선(길이 요소 $ds$), 평면($dA$), 공간($dV$)에서 더한 것이다. 대칭인 도형은 대칭축 위에 중심이 있다는 것을 먼저 쓰면 계산이 줄어든다.

## supplement
교재 8-36의 평면 질량중심 식은 x̄, ȳ에 ∫_C(곡선 적분)로 적혀 있는데, 평면 영역이므로 ∬_D가 맞아 바로잡았습니다. 모멘트 M_x, M_y와 균일 밀도 중심(필기 노트)을 추가했습니다. 교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
