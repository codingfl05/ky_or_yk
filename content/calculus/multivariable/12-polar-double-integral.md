---
id: calc-mv-polar-double-integral
title_ko: "극좌표 이중적분"
title_en: "Double integrals in polar coordinates"
question: "이중적분을 극좌표로 바꿀 때 dA는? 가우스 적분의 값은?"
tags: [극좌표, 이중적분, 가우스 적분, polar coordinates, gaussian integral]
importance: 3
related: [calc-mv-double-integral, calc-mv-jacobian, calc-int-polar-area]
source: "book:BLIS편입 다변수 5장 (02 극좌표계의 이중적분)"
verified: false
---

## formula
$$
\iint_R f(x, y)\,dA = \int_\alpha^\beta\int_{r_1(\theta)}^{r_2(\theta)} f(r\cos\theta, r\sin\theta)\,r\,dr\,d\theta
$$

$$
\int_{-\infty}^{\infty} e^{-x^2}\,dx = \sqrt{\pi}
$$

## conditions
- $dA = dx\,dy = r\,dr\,d\theta$. 야코비안 $r$을 빠뜨리지 말 것.
- 영역이 원·부채꼴이거나 피적분함수에 $x^2 + y^2$이 있을 때 쓴다.

## explanation
가우스 적분은 $I^2 = \iint e^{-(x^2+y^2)}\,dA$를 극좌표로 계산해 $\pi$를 얻는다. 반대로 극좌표로 주어진 영역을 직교좌표로 바꾸는 문제도 나온다.

## supplement
가우스 적분을 추가했습니다. 교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
