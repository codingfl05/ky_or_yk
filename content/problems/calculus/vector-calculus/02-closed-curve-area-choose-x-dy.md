---
id: prob-calc-vc-closed-curve-area-choose-x-dy
title_ko: "곡선 (sin²(πt)/t, t² − 1)이 둘러싼 넓이: 넓이 공식 고르기"
source: "BLIS편입 미적분학 총정리 문제풀이 18번"
difficulty: 2
tags: [넓이, 그린 정리, 매개변수 곡선, 폐곡선, 넓이 공식 선택, area, green's theorem, parametric curve]
related: [calc-vc-green, calc-int-area]
images: []
verified: false
---

## problem
$\mathbf{r}(t) = \left\langle \dfrac{\sin^2(\pi t)}{t},\ t^2 - 1\right\rangle$ ($t \in [-1, 1]$, $t \ne 0$), $\mathbf{r}(0) = \langle 0, -1\rangle$인 곡선 $C$가 둘러싼 영역의 넓이를 구한다.

## answer
$2$

## key-idea
- $t = \pm 1$에서 모두 원점 → 닫힌 곡선이고 $t = 0$에서도 연속 → Green 정리의 넓이 공식
- 세 공식 $\oint x\,dy$, $-\oint y\,dx$, $\dfrac{1}{2}\oint x\,dy - y\,dx$ 중 미분이 쉬운 쪽을 고른다: $y' = 2t$가 $x$의 분모 $t$를 지운다 → $A = \oint_C x\,dy$
- $A = \displaystyle\int_{-1}^{1}\frac{\sin^2(\pi t)}{t}\cdot 2t\,dt = 2\int_{-1}^{1}\sin^2(\pi t)\,dt = 2$

## mistakes
처음에 $\dfrac{1}{2}\oint$ 꼴을 골라 $\dfrac{dx}{dt} = \dfrac{2\pi\sin\pi t\cos\pi t\cdot t - \sin^2\pi t}{t^2}$까지 미분해야 해서 계산이 매우 길어졌다. $x$가 복잡하고 $y$가 단순하면 $x$를 미분하지 않는 $\oint x\,dy$를, 반대면 $-\oint y\,dx$를 쓴다. $\dfrac{1}{2}$ 꼴은 $x$, $y$가 대칭적일 때(원, 타원, 장미곡선 등) 유리하다.

## supplement
풀이 메모는 $\frac{1}{2}\oint$ 꼴로 전개하다 멈춘 상태였고, 짧은 풀이와 정답 2(수치 적분으로 확인)는 Claude가 보완했습니다. 메모에는 $\frac{1}{2}\oint_C y\,dx - x\,dy$로 적혀 있는데, 이 곡선은 반시계 방향($t$가 증가하면 왼쪽 아래로 내려갔다가 오른쪽으로 올라옴)이라 이 식은 $-2$가 나옵니다. 넓이 공식은 $\frac{1}{2}\oint_C x\,dy - y\,dx$입니다.
