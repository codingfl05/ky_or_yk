---
id: calc-mv-quadric-surfaces
title_ko: "삼중적분에 자주 나오는 공간도형"
title_en: "Common quadric surfaces"
question: "원기둥, 포물면, 원뿔, 구, 일엽쌍곡면, 타원체의 식과 어떤 좌표계로 적분하는지는?"
tags: [공간도형, 이차곡면, 단면화, 원뿔, 포물면, 쌍곡면, quadric surface, cross section]
importance: 2
related: [calc-mv-cylindrical, calc-mv-spherical, calc-mv-jacobian, calc-mv-triple-integral]
source: "book:BLIS편입 다변수 6-04~6-07 (공간 기하 단면화)"
verified: false
---

## formula
$$
x^2 + y^2 = a^2
$$

$$
z = x^2 + y^2
$$

$$
z = a^2 - x^2 - y^2
$$

$$
z^2 = x^2 + y^2
$$

$$
x^2 + y^2 + z^2 = a^2
$$

$$
x^2 + y^2 - z^2 = a^2
$$

$$
\frac{x^2}{a^2} + \frac{y^2}{b^2} + \frac{z^2}{c^2} = 1
$$

## conditions
| 식 | 도형 | 적분 좌표 |
|---|---|---|
| $x^2 + y^2 = a^2$ | 원기둥 | 원주좌표 |
| $z = x^2 + y^2$ | 위로 열린 포물면 ("빗살무늬 토기") | 원주좌표 |
| $z = a^2 - x^2 - y^2$ | 아래로 열린 포물면 (꼭짓점 높이 $a^2$, 바닥 원 반지름 $a$) | 원주좌표 |
| $z^2 = x^2 + y^2$ | 원뿔 두 개 ($z = \pm\sqrt{x^2+y^2}$) | 원주좌표 (위에 구가 있으면 구면좌표) |
| $x^2 + y^2 + z^2 = a^2$ | 구 | 구면좌표 |
| $x^2 + y^2 - z^2 = a^2$ | 일엽쌍곡면 (심화) | 원주좌표 |
| $\frac{x^2}{a^2} + \frac{y^2}{b^2} + \frac{z^2}{c^2} = 1$ | 타원체 | 변수변환 → 구 → 구면좌표 |

## explanation
단면화: 높이를 정해 자른 단면(수평)과 바닥면에 나란한 단면(수직, 예: $y = 0$)을 각각 그려 입체를 떠올린다. 예를 들어 $z = x^2 + y^2$은 $y = 0$에서 포물선 $z = x^2$, 수평 단면은 원이다. 일엽쌍곡면은 $y = 0$ 단면이 쌍곡선 $x^2 - z^2 = a^2$이고, 높이 $z$에서 수평 단면은 반지름 $\sqrt{a^2 + z^2}$인 원이라 위아래로 갈수록 넓어진다. 타원체는 $x = au$, $y = bv$, $z = cw$로 구로 바꾼다 (부피 $\frac{4}{3}\pi abc$).

## supplement
교재 6-04~6-07의 단면화 예제(그림·필기)를 표로 정리했습니다. 각 도형에 쓰는 좌표계는 교재 6-20, 6-30과 필기 노트를 따랐습니다. Claude가 추가한 카드입니다.
