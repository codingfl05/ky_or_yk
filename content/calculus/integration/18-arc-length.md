---
id: calc-int-arc-length
title_ko: "곡선의 길이"
title_en: "Arc length"
question: "직교·매개변수·극좌표 곡선의 길이 공식은?"
tags: [곡선의 길이, 호의 길이, 매개변수, 극곡선, arc length]
importance: 3
related: [calc-int-area, calc-int-surface-area]
source: "book:BLIS편입 적분 4장 (02 정적분과 길이) / 5장 (03 극곡선의 길이)"
verified: false
---

## formula
$$
L = \int \sqrt{(dx)^2 + (dy)^2}
$$

$$
L = \int_a^b \sqrt{1 + \{f'(x)\}^2}\,dx
$$

$$
L = \int_\alpha^\beta \sqrt{\left(\frac{dx}{dt}\right)^2 + \left(\frac{dy}{dt}\right)^2}\,dt
$$

$$
L = \int_\alpha^\beta \sqrt{r^2 + \left(\frac{dr}{d\theta}\right)^2}\,d\theta
$$

## conditions
- 공간곡선 $(x(t), y(t), z(t))$는 근호 안에 $\left(\frac{dz}{dt}\right)^2$을 더한다.

## explanation
모두 기본형 $\int\sqrt{dx^2 + dy^2}$에서 나온다. 자주 나오는 값: 사이클로이드 한 아치의 길이 $8r$, 카디오이드 $r = a(1 + \cos\theta)$의 전체 길이 $8a$. 근호 안이 완전제곱이 되도록 출제되는 경우가 많다 (예: $y = \cosh x$).

## supplement
자주 나오는 길이 값을 추가했습니다. 교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
