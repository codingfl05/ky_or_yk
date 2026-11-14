---
id: calc-mv-cylindrical
title_ko: "원주좌표계 삼중적분"
title_en: "Triple integrals in cylindrical coordinates"
question: "원주좌표 변환식과 dV는? 언제 쓰는가?"
tags: [원주좌표, 원기둥좌표, 삼중적분, cylindrical coordinates]
importance: 3
related: [calc-mv-spherical, calc-mv-triple-integral]
source: "book:BLIS편입 다변수 6-20~6-21 (원주좌표계의 삼중적분)"
verified: false
---

## formula
$$
x = r\cos\theta, \quad y = r\sin\theta, \quad z = z, \qquad dV = r\,dz\,dr\,d\theta
$$

$$
\iiint_E f\,dV = \int_\alpha^\beta\int_{h_1(\theta)}^{h_2(\theta)}\int_{u_1(r\cos\theta,\,r\sin\theta)}^{u_2(r\cos\theta,\,r\sin\theta)} f(r\cos\theta, r\sin\theta, z)\,r\,dz\,dr\,d\theta
$$

## conditions
- $xy$평면에 사영한 영역이 원이거나, 피적분함수에 $x^2 + y^2$이 있을 때.
- 대표 도형: 원기둥 $x^2 + y^2 = a^2$, 포물면 $z = x^2 + y^2$·$z = a^2 - x^2 - y^2$, 원뿔 $z = \sqrt{x^2 + y^2}$ (원뿔만 있을 때. 위에 구가 얹히면 구면좌표), 심화로 일엽쌍곡면 $x^2 + y^2 - z^2 = a^2$.
- 높이 축이 $z$가 아니어도 된다: $x$가 높이이고 $yz$평면에 사영한 바닥이 원이면 $y = r\cos\theta$, $z = r\sin\theta$로 두고 $dV = r\,dx\,dr\,d\theta$ ($y$가 높이일 때도 같은 방식).

## explanation
극좌표 이중적분에 높이 축을 더한 것이다: "높이 변수 하나 + 바닥면(사영)은 $r$, $\theta$". 구는 구면좌표가 더 편하다. 일엽쌍곡면은 $r^2 - z^2 = a^2$에서 각 높이 $z$의 단면이 반지름 $\sqrt{a^2 + z^2}$인 원이라 원주좌표로 푼다.

## supplement
교재 6-20의 적분식과 네 가지 대표 도형을 반영했고, 다른 축을 높이로 쓰는 경우(필기 노트 6-21)와 쌍곡면 처리를 추가했습니다. 교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
