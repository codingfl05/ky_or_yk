---
id: calc-mv-cylindrical
title_ko: "원주좌표계 삼중적분"
title_en: "Triple integrals in cylindrical coordinates"
question: "원주좌표 변환식과 dV는? 언제 쓰는가?"
tags: [원주좌표, 원기둥좌표, 삼중적분, cylindrical coordinates]
importance: 3
related: [calc-mv-spherical, calc-mv-triple-integral]
source: "book:BLIS편입 다변수 6장 (02 원주좌표계의 삼중적분)"
verified: false
---

## formula
$$
x = r\cos\theta, \quad y = r\sin\theta, \quad z = z, \qquad dV = r\,dz\,dr\,d\theta
$$

## conditions
- $xy$평면에 사영한 영역이 원이거나, 피적분함수에 $x^2 + y^2$이 있을 때.
- 대표 도형: 원기둥 $x^2 + y^2 = a^2$, 포물면 $z = a^2 - x^2 - y^2$와 $z = x^2 + y^2$ 사이, 원뿔 $z = \sqrt{x^2 + y^2}$.

## explanation
극좌표 이중적분에 $z$축을 더한 것이다. 구는 구면좌표가 더 편하다.

## supplement
교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
