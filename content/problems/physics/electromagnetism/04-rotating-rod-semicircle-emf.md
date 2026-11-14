---
id: prob-phys-em-rotating-rod-semicircle-emf
title_ko: "반원형 도선 위를 회전하는 금속 막대의 유도 기전력과 전류 방향"
source: "뿌리물리 핵심 문제집 168번"
difficulty: 2
tags: [유도 기전력, 패러데이 법칙, 렌츠 법칙, 회전 막대, 자기선속, 부채꼴 넓이, induced emf, Faraday's law, Lenz's law, rotating rod, magnetic flux]
related: [phys-em-faraday-law, phys-em-motional-emf]
images: []
verified: false
---

## problem
$xy$평면의 반지름 $r$인 반원형 도선, 저항 $R$($x$축 위), 중심 $O$에 고정된 금속 막대로 회로를 만든다. 지면에서 나오는 균일한 자기장 $B$ 안에서 막대가 $O$를 중심으로 시계 방향 각속력 $\omega$로 돈다. 유도 전류의 방향과 유도 기전력의 크기를 구한다.

## answer
- 기전력: $\mathcal{E} = \dfrac{1}{2}B r^2\omega$
- 방향: 회로를 반시계 방향으로 (저항에서는 $O$에서 $+x$ 쪽으로)

## key-idea
- $B$가 일정 → 선속 변화는 넓이 변화뿐: $\mathcal{E} = \dfrac{d\Phi_B}{dt} = B\dfrac{dA}{dt}$
- 회로 넓이 = 막대와 $x$축 사이 부채꼴 $A = \dfrac{1}{2}r^2\theta$ → $\theta$만 변하므로 $\dfrac{dA}{dt} = \dfrac{1}{2}r^2\dfrac{d\theta}{dt}$ → $\mathcal{E} = \dfrac{1}{2}Br^2\omega$
- 시계 방향 회전이면 부채꼴이 줄어듦 → 나오는 선속 감소 → 렌츠 법칙(Lenz's law)으로 나오는 쪽 자기장을 만드는 반시계 방향 전류
