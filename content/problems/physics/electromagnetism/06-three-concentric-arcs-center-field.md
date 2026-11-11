---
id: prob-phys-em-three-concentric-arcs-center-field
title_ko: "동심 사분원 3개가 원점에 만드는 전기장"
source: "BLIS 진단 평가 4회 2번"
difficulty: 2
tags: [원호, 사분원, 대칭성, 상쇄, 전기장, arc, symmetry, cancellation, electric field]
related: [phys-em-symmetry-cancellation, phys-em-infinitesimal-elements]
images: []
verified: false
---

## problem
원점이 중심인 사분원 3개(제2사분면)에 전하가 균일하게 분포한다: 반지름 $R$에 $+Q$, $2R$에 $-4Q$, $3R$에 $+9Q$. 원점의 전체 전기장 크기를 구한다 (오지선다).

## answer
$E = \dfrac{Q}{\sqrt2\,\pi^2\varepsilon_0 R^2}$ (④)

## key-idea
- 원호 하나 → 이등분선에 대칭인 조각끼리 수직 성분 상쇄 → 이등분선 성분만 남음: $E = \dfrac{2k\lambda}{R}\sin\dfrac{\theta}{2}$, 사분원이면 $\dfrac{\sqrt2\,k\lambda}{R}$
- 세 원호가 같은 사분면 → 장이 모두 같은 직선 위 → 크기 인자 $\dfrac{\lambda}{R}\propto\dfrac{q}{R^2}$만 비교: $\dfrac{Q}{R^2}=\dfrac{4Q}{(2R)^2}=\dfrac{9Q}{(3R)^2}$
- 부호 $+,-,+$ → 둘이 상쇄되고 원호 하나만 남음 → $\lambda=\dfrac{Q}{R\pi/2}$ 대입
