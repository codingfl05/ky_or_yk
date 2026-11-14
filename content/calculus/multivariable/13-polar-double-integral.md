---
id: calc-mv-polar-double-integral
title_ko: "극좌표 이중적분"
title_en: "Double integrals in polar coordinates"
question: "이중적분을 극좌표로 바꿀 때 dA는? 가우스 적분의 값은?"
tags: [극좌표, 이중적분, 가우스 적분, polar coordinates, gaussian integral]
importance: 3
related: [calc-mv-double-integral, calc-mv-jacobian, calc-int-polar-area]
source: "book:BLIS편입 다변수 5-24 (극좌표계의 이중적분)"
verified: false
---

## formula
$$
\iint_R f(x, y)\,dA = \int_\alpha^\beta\int_{r_1(\theta)}^{r_2(\theta)} f(r\cos\theta, r\sin\theta)\,r\,dr\,d\theta
$$

$$
\int_{-\infty}^{\infty} e^{-x^2}\,dx = \sqrt{\pi}, \qquad \int_0^{\infty} e^{-x^2}\,dx = \frac{\sqrt{\pi}}{2}
$$

## conditions
- $dA = dx\,dy = r\,dr\,d\theta$. 야코비안 $r$을 빠뜨리지 말 것.
- 영역이 원·부채꼴이거나 피적분함수에 $x^2 + y^2$이 있을 때 쓴다. 원처럼 대칭인 영역이 많으니 대칭으로 일부만 계산할 수 있는지 먼저 본다.
- 가장 많이 나오는 유형: 직교좌표로 주어진 영역을 극좌표로, 극좌표로 주어진 영역을 직교좌표로 바꿔 계산.

## explanation
$\int_0^\infty e^{-x^2}\,dx$ 꼴은 일변수 적분을 이중적분으로 바꿔 푸는 대표 유형이다: $I^2 = \int_0^\infty\int_0^\infty e^{-(x^2+y^2)}\,dx\,dy = \int_0^{\pi/2}\int_0^\infty e^{-r^2}r\,dr\,d\theta = \frac{\pi}{4}$이므로 $I = \frac{\sqrt{\pi}}{2}$.

## supplement
교재 5-24에서 두 번째 유형도 '[유형 1]'로 번호가 매겨져 있습니다 (번호만 오타). 반쪽 구간 가우스 적분 √π/2와 그 유도를 추가했습니다. 가우스 적분을 추가했습니다. 교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
