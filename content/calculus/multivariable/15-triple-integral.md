---
id: calc-mv-triple-integral
title_ko: "직교좌표 삼중적분"
title_en: "Triple integrals in rectangular coordinates"
question: "삼중적분의 적분 구간을 세우는 순서는?"
tags: [삼중적분, 부피, triple integral]
importance: 2
related: [calc-mv-cylindrical, calc-mv-spherical, calc-mv-double-integral]
source: "book:BLIS편입 다변수 6-02~6-08 (직교좌표계의 삼중적분)"
verified: false
---

## formula
$$
\iiint_E f\,dV = \int_c^d\int_{h_1(y)}^{h_2(y)}\int_{u_1(x, y)}^{u_2(x, y)} f(x, y, z)\,dz\,dx\,dy
$$

## conditions
- 면 → 선 → 점 순서: 아래 곡면 $z = u_1(x, y)$에서 위 곡면 $z = u_2(x, y)$까지 $z$ 적분 → 입체를 $xy$평면에 사영한 영역 $D$에서 선 $x = h_1(y) \to h_2(y)$ → 점 $y = c \to d$.
- 직육면체 영역이면 $dx\,dy\,dz$의 순서를 아무렇게나 바꿔도 된다.
- 순서 변경: 한 번에 세 변수를 바꾸지 말고 인접한 두 변수씩 단면(평면 영역)으로 그려서 바꾼다.
- $f = 1$이면 부피.

## explanation
공간 도형을 그리고 단면을 그리는 연습이 핵심이다. 자주 나오는 도형: 구, 원기둥, 포물면 $z = a^2 - x^2 - y^2$, 원뿔 $z = \sqrt{x^2 + y^2}$.

## supplement
교재 6-02 본문에 'z = h₁(y) → z = h₂(y) 순서로 증가'라고 되어 있는데, 같은 쪽 그림과 최종 적분식은 z = u₁(x, y) → u₂(x, y)라서 u로 바로잡았습니다 (h₁, h₂는 그다음 x 구간). 인접한 두 구간씩 순서를 바꾸는 요령(교재 6-08)을 추가했습니다. 교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
