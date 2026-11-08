---
id: calc-int-volume
title_ko: "부피와 회전체의 부피 (원판·원통껍질)"
title_en: "Volume (disk and shell methods)"
question: "단면적으로 구하는 부피, 원판법(disk), 원통껍질법(shell) 공식은?"
tags: [부피, 회전체, 원판법, 원통껍질법, disk method, shell method, volume of revolution]
importance: 3
related: [calc-int-surface-area, calc-int-pappus]
source: "book:BLIS편입 적분 4장 (03 정적분과 부피)"
verified: false
---

## formula
$$
V = \int_a^b A(x)\,dx
$$

$$
\text{disk/washer:} \quad V = \pi\int_a^b \left\{R(x)^2 - r(x)^2\right\}dx
$$

$$
\text{shell:} \quad V = 2\pi\int_a^b (\text{radius})(\text{height})\,dx = 2\pi\int_a^b x\,f(x)\,dx \quad (\text{about the } y\text{-axis})
$$

## conditions
- 원판법: 회전축과 같은 변수로 적분 ($x$축 회전이면 $dx$). $R$은 바깥 반지름, $r$은 안쪽 반지름.
- 원통껍질법: 회전축과 다른 변수로 적분 ($y$축 회전인데 $dx$). 반지름 = 축까지의 거리, 높이 = 막대의 길이.

## explanation
공식을 그대로 외우기보다 의미($f(x)$가 반지름인지 높이인지)를 생각하고 대입하는 것이 중요하다. 회전축이 $x = k$ 같은 다른 직선이면 반지름을 축까지의 거리로 바꾼다.

## supplement
교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
