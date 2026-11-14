---
id: prob-calc-vc-parametric-closed-curve-area-rose
title_ko: "매개변수 폐곡선 (sin t + sin 3t)/2, (cos t − cos 3t)/2가 둘러싼 넓이"
source: "BLIS편입 미적분학 총정리 문제풀이 11번"
difficulty: 2
tags: [넓이, 그린 정리, 매개변수 곡선, 폐곡선, 합차 공식, 극좌표, 장미곡선, area, green's theorem, parametric curve, polar, rose curve]
related: [calc-vc-green, calc-int-polar-area, calc-int-polar-curves]
images: []
verified: false
---

## problem
$x = \dfrac{\sin t + \sin 3t}{2}$, $y = \dfrac{\cos t - \cos 3t}{2}$ $\left(0 \le t \le \dfrac{\pi}{2}\right)$로 둘러싸인 영역의 넓이를 구한다.

## answer
$\dfrac{\pi}{8}$

## key-idea
- $t = 0$과 $t = \dfrac{\pi}{2}$에서 모두 원점 → 닫힌 경로 → Green 정리의 넓이 공식 $A = \dfrac{1}{2}\oint_C x\,dy - y\,dx$
- 합차 공식: $\sin t + \sin 3t = 2\sin 2t\cos t$, $\cos t - \cos 3t = 2\sin 2t\sin t$ → $x = \sin 2t\cos t$, $y = \sin 2t\sin t$, 즉 극좌표 $r = \sin 2\theta$ ($\theta = t$)인 장미곡선의 한 잎
- $x\,dy - y\,dx = r^2\,d\theta$ → $A = \dfrac{1}{2}\displaystyle\int_0^{\pi/2}\sin^2 2t\,dt = \dfrac{1}{2}\cdot\dfrac{\pi}{4} = \dfrac{\pi}{8}$

## mistakes
$x\,dy - y\,dx$를 그대로 전개하면 삼각함수 곱이 많아 계산이 길어지고 실수하기 쉽다. $\sin$끼리 더하고 $\cos$끼리 빼는 꼴이 보이면 합차 공식으로 묶어 극좌표 꼴인지 먼저 확인한다.

## supplement
풀이 메모는 닫힌 경로 확인과 넓이 공식 $A = \frac{1}{2}\oint_C x\,dy - y\,dx$까지였습니다. 합차 공식으로 극좌표 장미곡선으로 바꾸는 단계, 정답 $\frac{\pi}{8}$(수치 적분으로 확인), mistakes는 Claude가 보완했습니다. 문제의 $y$ 식 가운데 부호는 필기로 가려져 있었는데, 메모의 $t = 0$일 때 $(0, 0)$과 맞도록 빼기로 읽었습니다.
