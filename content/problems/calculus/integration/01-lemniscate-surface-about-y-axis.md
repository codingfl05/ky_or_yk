---
id: prob-calc-int-lemniscate-surface-about-y-axis
title_ko: "렘니스케이트 r² = 5cos2θ를 y축 둘레로 회전한 곡면의 넓이"
source: "BLIS 강의 40번"
difficulty: 2
tags: [회전체 겉넓이, 극좌표, 렘니스케이트, 호의 길이, surface area, polar curve, lemniscate, arc length]
related: [calc-int-polar-revolution, calc-int-surface-area]
images: []
verified: false
---

## problem
극곡선 $r^2 = 5\cos2\theta$ (렘니스케이트)를 $y$축 둘레로 회전시켜 얻은 곡면의 넓이를 구한다.

## answer
$S = 10\sqrt2\,\pi$

## key-idea
- 회전체 겉넓이 $S = 2\pi\int(\text{축까지 거리})\,ds$ → $y$축 회전이므로 거리 $= x = r\cos\theta = \sqrt{5\cos2\theta}\cos\theta$, 극좌표 $ds = \sqrt{r^2+(r')^2}\,d\theta$
- $r^2$꼴은 $r'$을 직접 구하지 말고 $rr' = -5\sin2\theta$로 → $r^2+(r')^2 = \dfrac{25\cos^2 2\theta + 25\sin^2 2\theta}{5\cos2\theta} = \dfrac{5}{\cos2\theta}$ → 근호가 상쇄되어 피적분함수가 $5\cos\theta$
- 대칭: 오른쪽 고리의 위쪽 절반($0\le\theta\le\dfrac{\pi}{4}$)만 계산하고 $\times2$ (아래쪽 절반). 왼쪽 고리는 $y$축 회전으로 같은 곡면을 다시 만들 뿐이라 더하지 않는다 → $S = 2\cdot2\pi\int_0^{\pi/4}5\cos\theta\,d\theta$

## mistakes
왼쪽 고리까지 더해 $\times4$로 하면 두 배가 나온다. 회전축 기준으로 겹치는 부분은 한 번만 센다.

## supplement
강의 화면에는 적분식 세팅까지만 있어서, $r^2+(r')^2$ 정리와 답은 Claude가 계산해 보완했습니다. 화면의 "×2"는 오른쪽 고리의 위·아래 절반으로 해석했습니다. mistakes는 사용자 메모가 아니라 이 유형에서 흔한 실수를 Claude가 적은 것입니다.
