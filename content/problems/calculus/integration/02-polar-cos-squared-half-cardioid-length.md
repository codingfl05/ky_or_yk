---
id: prob-calc-int-polar-cos-squared-half-cardioid-length
title_ko: "극곡선 r = cos²(θ/2)의 길이"
source: "BLIS편입 미적분학 총정리 문제풀이 29번"
difficulty: 2
tags: [극곡선, 곡선의 길이, 카디오이드, 반각 공식, 주기, polar curve, arc length, cardioid, half-angle]
related: [calc-int-arc-length, calc-int-polar-curves]
images: []
verified: false
---

## problem
극곡선 $r = \cos^2\dfrac{\theta}{2}$의 길이를 구한다.

## answer
$4$

## key-idea
- 반각 공식: $\cos^2\dfrac{\theta}{2} = \dfrac{1 + \cos\theta}{2}$ → $a = \dfrac{1}{2}$인 카디오이드 $r = a(1 + \cos\theta)$, 주기 $2\pi$ → 길이 $8a = 4$
- 직접 계산: 극곡선 길이 $\displaystyle\int\sqrt{r^2 + \left(\frac{dr}{d\theta}\right)^2}\,d\theta$, $r' = -\cos\dfrac{\theta}{2}\sin\dfrac{\theta}{2}$ → $r^2 + r'^2 = \cos^2\dfrac{\theta}{2}\left(\cos^2\dfrac{\theta}{2} + \sin^2\dfrac{\theta}{2}\right) = \cos^2\dfrac{\theta}{2}$
- $L = \displaystyle\int_0^{2\pi}\left\lvert\cos\frac{\theta}{2}\right\rvert d\theta = 2\int_0^{\pi}\cos\frac{\theta}{2}\,d\theta = 2\left[2\sin\frac{\theta}{2}\right]_0^{\pi} = 4$

## mistakes
- 주기를 $4\pi$로 잡았다. $\cos\dfrac{\theta}{2}$의 주기는 $4\pi$지만 제곱하면 음수 부분이 뒤집혀 주기가 절반인 $2\pi$가 된다. 반각 공식으로 $\dfrac{1 + \cos\theta}{2}$로 바꾸면 바로 보인다. 그래서 그림도 카디오이드 하나여야 한다.
- 길이 공식을 $\sqrt{1 + (\cdots)^2}$로 썼다. 이것은 $y = f(x)$ 꼴 공식이다. 극곡선은 $\sqrt{r^2 + \left(\frac{dr}{d\theta}\right)^2}$이고, $r^2$ 항이 있어야 근호가 $\cos^2\frac{\theta}{2}$로 깔끔하게 정리된다.
- $\sqrt{\cos^2\frac{\theta}{2}} = \left\lvert\cos\frac{\theta}{2}\right\rvert$다. $[0, 2\pi]$에서는 $\frac{\theta}{2} \in [0, \pi]$라 부호가 바뀌는 지점이 있으니, 대칭으로 $0 \sim \pi$의 두 배로 계산한다.

## supplement
필기는 주기 $4\pi$, $y = f(x)$용 길이 공식으로 시작한 풀이라 사용자 말대로 방향이 틀렸습니다. 올바른 풀이와 정답 4, mistakes는 Claude가 작성했습니다.
