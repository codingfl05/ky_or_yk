---
id: prob-calc-mv-paraboloid-parallel-tangent-plane
title_ko: "포물면 z = x² + y²의 접평면 중 주어진 평면에 평행한 것"
source: "BLIS편입 미적분학 총정리 문제풀이 06번"
difficulty: 1
tags: [접평면, 그래디언트, 법선벡터, 평행, 포물면, tangent plane, gradient, normal vector]
related: [calc-mv-tangent-plane, calc-mv-gradient-geometry-summary]
images: []
verified: false
---

## problem
곡면 $z = x^2 + y^2$에 접하는 접평면 중 평면 $x + 2y - z = 0$에 평행한 것을 구한다.

## answer
$x + 2y - z = \dfrac{5}{4}$ (접점 $\left(\dfrac{1}{2},\ 1,\ \dfrac{5}{4}\right)$)

## key-idea
- 평행한 평면 → 법선벡터가 평행: 주어진 평면의 법선 $\langle 1, 2, -1\rangle$
- 곡면을 $f = z - x^2 - y^2 = 0$으로 보면 접평면의 법선은 $\nabla f = \langle -2x, -2y, 1\rangle$ → $\langle -2x, -2y, 1\rangle = k\langle 1, 2, -1\rangle$에서 $k = -1$, $x = \dfrac{1}{2}$, $y = 1$
- 곡면 식으로 $z = \dfrac{5}{4}$ → 법선 $\langle 1, 2, -1\rangle$과 접점으로 평면: $\left(x - \dfrac{1}{2}\right) + 2(y - 1) - \left(z - \dfrac{5}{4}\right) = 0$

## mistakes
접점 $\left(\dfrac{1}{2}, 1, \dfrac{5}{4}\right)$에서 멈추기 쉽다. 문제는 접평면의 식을 묻는다. 마지막에 점-법선 꼴로 평면 식까지 쓴다.

## supplement
풀이 메모는 접점까지였고, 최종 평면 식 $x + 2y - z = \frac{5}{4}$은 Claude가 계산해 보완했습니다. mistakes도 이 점을 근거로 Claude가 적었습니다.
