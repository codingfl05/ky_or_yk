---
id: calc-diff-linearization-differential
title_ko: "선형화와 미분(전미분)"
title_en: "Linearization and differentials"
question: "x=a에서의 선형화 식과 미분 dy의 정의는?"
tags: [선형화, 선형 근사, 미분, 전미분, 오차, linearization, differential]
importance: 3
related: [calc-diff-newton-method, calc-diff-derivative-def]
source: "book:BLIS편입 미분 5장 (01 미분과 근사)"
verified: false
---

## formula
$$
L(x) = f(a) + f'(a)(x - a)
$$

$$
dy = f'(x)\,dx
$$

## conditions
- 선형화(linearization): $x = a$에서의 접선으로 $f$를 근사. $x$가 $a$에 가까울수록 정확.
- 미분(differential) $dy$: $x$가 $dx$만큼 변할 때 $y$의 변화량 $\Delta y$의 근삿값 (교재 용어로 전미분).
- 오차 문제: 측정 오차 $dx$ → 계산값 오차 $dy$, 상대오차 $\dfrac{dy}{y}$.

## explanation
선형화로 근삿값을 구하라는 것은 접선의 방정식을 구하라는 것과 같다. 예: $\sqrt{4.1} \approx 2 + \frac{1}{4}(0.1) = 2.025$. 구의 반지름 측정 오차가 $dr$이면 부피 오차는 $dV = 4\pi r^2\,dr$, 상대오차는 $\frac{dV}{V} = 3\frac{dr}{r}$.

## supplement
예시와 상대오차 관계를 추가했습니다. 교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
