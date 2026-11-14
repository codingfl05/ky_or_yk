---
id: prob-calc-mv-sphere-tangent-planes-through-point-circle
title_ko: "구 S₂의 부피를 이등분하는 S₁의 접평면들의 접점이 이루는 곡선의 길이"
source: "BLIS편입 미적분학 총정리 문제풀이 33번"
difficulty: 2
tags: [접평면, 구, 그래디언트, 부피 이등분, 점과 평면 사이의 거리, 단면 원, tangent plane, sphere, gradient, distance from point to plane]
related: [calc-mv-gradient-geometry-summary, calc-mv-tangent-plane, calc-vec-distances]
images: []
verified: false
---

## problem
$S_1: x^2 + y^2 + z^2 = 4$, $S_2: (x-2)^2 + (y-3)^2 + (z-4)^2 = 29$. $S_1$에 접하면서 $S_2$의 부피를 이등분하는 모든 접평면의 접점이 이루는 곡선 $C$의 길이를 구한다.

## answer
$\dfrac{20\pi}{\sqrt{29}}$

## key-idea
- 구의 부피를 이등분하는 평면 = 구의 중심을 지나는 평면 → 접평면이 $(2, 3, 4)$를 지나야 한다
- $S_1$ 위 접점 $(a, b, c)$의 접평면: 법선 $\nabla F = \langle 2a, 2b, 2c\rangle \parallel \langle a, b, c\rangle$ → $a(x-a) + b(y-b) + c(z-c) = 0$, $a^2 + b^2 + c^2 = 4$로 정리하면 $ax + by + cz = 4$ → $(2, 3, 4)$ 대입: $2a + 3b + 4c = 4$
- 접점은 구 $S_1$과 평면 $2x + 3y + 4z = 4$의 교선 = 원. 원점에서 평면까지 거리 $d = \dfrac{4}{\sqrt{29}}$ → 반지름 $r = \sqrt{4 - \dfrac{16}{29}} = \dfrac{10}{\sqrt{29}}$ → 길이 $2\pi r = \dfrac{20\pi}{\sqrt{29}}$

## solution
### 문제의 말을 식으로 바꾸는 순서
1. "부피를 이등분" → 구는 중심에 대해 대칭이라, 중심을 지나는 평면만 부피를 반으로 나눈다. $S_2$의 반지름 $\sqrt{29}$는 쓰이지 않는다.
2. "$S_1$에 접하는 평면" → 접점 $(a, b, c)$를 미지수로 두고 접평면 식을 세운다. 구의 접평면은 법선이 "중심 → 접점" 방향이라 $\langle a, b, c\rangle$이다.
3. 두 조건을 합치면 접점 $(a, b, c)$가 만족하는 식이 두 개 나온다: 구 위($a^2 + b^2 + c^2 = 4$)와 평면 위($2a + 3b + 4c = 4$). 이 둘의 교집합이 곡선 $C$다.

### 구와 평면의 교선(원)의 반지름
구의 반지름 $R$, 구의 중심에서 평면까지 거리 $d$이면 단면 원의 반지름은 피타고라스로 $r = \sqrt{R^2 - d^2}$.

$$
d = \frac{\lvert 2\cdot 0 + 3\cdot 0 + 4\cdot 0 - 4\rvert}{\sqrt{2^2 + 3^2 + 4^2}} = \frac{4}{\sqrt{29}}, \qquad r^2 = 4 - \frac{16}{29} = \frac{100}{29}
$$

## mistakes
- 접평면 식 $a(x-a) + b(y-b) + c(z-c) = 0$에서 $a^2 + b^2 + c^2 = 4$(접점이 구 위)를 써서 상수항을 정리해야 $ax + by + cz = 4$라는 깔끔한 꼴이 나온다.
- 곡선 $C$는 접점들의 자취이므로 $(x, y, z)$가 아니라 $(a, b, c)$에 대한 조건을 모아야 한다. 마지막에 $(a, b, c)$를 $(x, y, z)$로 바꿔 읽으면 평면 $2x + 3y + 4z = 4$가 된다.

## supplement
풀이와 정답은 사용자 필기 그대로입니다. 문제를 식으로 바꾸는 순서, 단면 원 반지름 설명, mistakes는 Claude가 정리했습니다. 출처 교재명은 앞 문제들(31번 등)과 같은 책으로 적었습니다.
