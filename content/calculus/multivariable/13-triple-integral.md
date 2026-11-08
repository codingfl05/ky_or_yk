---
id: calc-mv-triple-integral
title_ko: "직교좌표 삼중적분"
title_en: "Triple integrals in rectangular coordinates"
question: "삼중적분의 적분 구간을 세우는 순서는?"
tags: [삼중적분, 부피, triple integral]
importance: 2
related: [calc-mv-cylindrical, calc-mv-spherical, calc-mv-double-integral]
source: "book:BLIS편입 다변수 6장 (01 직교좌표계의 삼중적분)"
verified: false
---

## formula
$$
\iiint_E f\,dV = \iint_D\left[\int_{u_1(x, y)}^{u_2(x, y)} f(x, y, z)\,dz\right]dA
$$

## conditions
- 면 → 선 → 점 순서: 아래 곡면 $z = u_1$에서 위 곡면 $z = u_2$까지 $z$ 적분 → 입체를 $xy$평면에 사영한 영역 $D$에서 이중적분.
- $f = 1$이면 부피.

## explanation
공간 도형을 그리고 단면을 그리는 연습이 핵심이다. 자주 나오는 도형: 구, 원기둥, 포물면 $z = a^2 - x^2 - y^2$, 원뿔 $z = \sqrt{x^2 + y^2}$.

## supplement
교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
