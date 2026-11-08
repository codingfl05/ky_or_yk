---
id: calc-int-polar-revolution
title_ko: "극곡선 회전체의 부피"
title_en: "Volume of revolution for polar regions"
question: "극곡선 영역을 극축(θ=0)이나 θ=π/2 축으로 돌린 회전체의 부피 공식은?"
tags: [극곡선, 회전체, 부피, polar region, volume of revolution]
importance: 1
related: [calc-int-polar-area, calc-int-volume]
source: "book:BLIS편입 적분 5장 (03 극곡선의 회전체)"
verified: false
---

## formula
$$
V_{\theta = 0} = \frac{2\pi}{3}\int_\alpha^\beta r^3\sin\theta\,d\theta, \qquad V_{\theta = \pi/2} = \frac{2\pi}{3}\int_\alpha^\beta r^3\cos\theta\,d\theta
$$

## conditions
- 회전축 한쪽에 있는 영역 $0 \le \rho \le r(\theta)$, $\alpha \le \theta \le \beta$를 돌릴 때.
- 겉넓이는 일반 공식 $\int 2\pi \ell\,ds$에 $\ell = r\sin\theta$ (극축 회전) 또는 $\ell = r\cos\theta$ ($\theta = \frac{\pi}{2}$ 회전)를 넣는다.

## explanation
파푸스 정리를 작은 부채꼴마다 적용하거나, $V = \iint 2\pi y\,dA$를 극좌표로 쓰면 유도된다. 예: 카디오이드 $r = a(1 + \cos\theta)$를 극축으로 돌리면 $V = \frac{8\pi a^3}{3}$.

## supplement
공식 계수는 교재 텍스트에서 깨져서, 유도(이중적분)로 확인한 값으로 썼습니다. 교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
