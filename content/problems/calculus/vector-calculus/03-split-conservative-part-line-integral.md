---
id: prob-calc-vc-split-conservative-part-line-integral
title_ko: "벡터장을 보존장 + 나머지로 분해해서 푸는 선적분"
source: "BLIS편입 미적분학 총정리 문제풀이 31번"
difficulty: 2
tags: [선적분, 보존장, 벡터장의 분해, 선적분의 기본정리, 퍼텐셜 함수, 닫힌 곡선, 스토크스 정리, line integral, conservative field, potential function, closed curve, stokes' theorem]
related: [calc-vc-fundamental-theorem, calc-vc-vector-line-integral, calc-vc-stokes]
images: []
verified: false
---

## problem
$\mathbf{F} = \langle x^4 + y,\ e^y,\ \cos z\rangle$, $C: \mathbf{r}(t) = \langle \cos t,\ \sin t,\ t(2\pi - t)\rangle$ $(0 \le t \le 2\pi)$일 때 $\displaystyle\int_C \mathbf{F}\cdot d\mathbf{r}$를 구한다.

## answer
$-\pi$

## key-idea
- $\mathbf{F}$는 $y$ 하나 때문에 보존장이 아니다 ($\operatorname{curl}\mathbf{F} = \langle 0, 0, -1\rangle$) → 보존장 부분과 나머지로 분해: $\mathbf{F}_1 = \langle x^4, e^y, \cos z\rangle$, $\mathbf{F}_2 = \langle y, 0, 0\rangle$
- $\mathbf{F}_1 = \nabla f$ ($f = \dfrac{x^5}{5} + e^y + \sin z$) → 기본정리: $f(\text{끝}) - f(\text{시작})$, 그런데 $\mathbf{r}(0) = \mathbf{r}(2\pi) = (1, 0, 0)$인 닫힌 곡선 → $0$
- $\mathbf{F}_2$만 매개변수로 직접: $\displaystyle\int_0^{2\pi}\langle \sin t, 0, 0\rangle\cdot\langle -\sin t, \cos t, 2\pi - 2t\rangle\,dt = -\int_0^{2\pi}\sin^2 t\,dt = -\pi$

## solution
### 왜 분해하는가
매개변수를 그대로 넣으면 $\cos^4 t\cdot(-\sin t)$, $e^{\sin t}\cos t$, $\cos\bigl(t(2\pi - t)\bigr)(2\pi - 2t)$를 적분해야 한다. 특히 $z$ 성분은 손으로 하기 어렵다. 반대로 기본정리는 보존장일 때만 쓸 수 있는데 $\mathbf{F}$ 전체는 보존장이 아니다.

해결: 선적분은 벡터장에 대해 선형이라 $\displaystyle\int_C(\mathbf{F}_1 + \mathbf{F}_2)\cdot d\mathbf{r} = \int_C\mathbf{F}_1\cdot d\mathbf{r} + \int_C\mathbf{F}_2\cdot d\mathbf{r}$로 나눌 수 있다. 계산이 복잡한 항들을 보존장 쪽($\mathbf{F}_1$)으로 모으고, 보존장을 깨뜨리는 단순한 항($y$)만 $\mathbf{F}_2$로 남긴다.

### 분해의 순서
1. curl을 계산해 보존장을 깨는 항을 찾는다. $\operatorname{curl}\mathbf{F}$의 $\mathbf{k}$ 성분 $Q_x - P_y = 0 - 1$에서 $P$의 $y$가 범인이다.
2. 그 항만 떼어 $\mathbf{F}_2$로 둔다. 나머지 $\mathbf{F}_1$은 각 성분이 자기 변수만의 함수라 $\operatorname{curl}\mathbf{F}_1 = \mathbf{0}$이 바로 보인다.
3. $\mathbf{F}_1$: 시작점·끝점 확인. 닫힌 곡선이면 $0$, 아니면 $f(\text{끝}) - f(\text{시작})$.
4. $\mathbf{F}_2$: 성분이 단순하니 매개변수로 직접 적분한다. $\mathbf{F}_2 = \langle y, 0, 0\rangle$이라 $d\mathbf{r}$의 $x$ 성분 $-\sin t\,dt$만 필요하다 ($z$ 성분이 복잡해도 곱해지는 것이 0).

### 다른 풀이: Stokes 정리
필기에서는 Stokes를 ×로 지웠지만, 이 문제는 Stokes로도 된다. $\operatorname{curl}\mathbf{F} = \langle 0, 0, -1\rangle$이 상수라서, $C$를 경계로 하는 어떤 곡면을 잡아도 유량은 $-1\times(\text{곡면을 } xy\text{평면에 내린 넓이})$다. $C$를 위에서 보면 단위원을 반시계 방향으로 한 바퀴 돌므로 넓이 $\pi$, 답 $-\pi$. 곡면 식을 몰라도 curl이 상수면 "그림자 넓이"만으로 끝난다.

## mistakes
- 보존장이 아니라고 기본정리를 통째로 포기하거나, 반대로 $\mathbf{F}$ 전체에 기본정리를 써서 답을 $0$으로 내기 쉽다. 보존장인 부분만 떼어 쓴다.
- 기본정리 부분은 시작점과 끝점이 같은지 먼저 본다: $t = 0$과 $t = 2\pi$에서 $z = t(2\pi - t) = 0$이라 둘 다 $(1, 0, 0)$.

## supplement
풀이(벡터장 분해, 기본정리로 0, 나머지 $-\pi$)와 정답은 사용자 필기 그대로입니다. 필기에서 ×로 지운 Stokes 풀이도 curl이 상수라 실제로는 가능해서 다른 풀이로 추가했습니다. "왜 분해하는가", "분해의 순서"는 사용자 요청으로 Claude가 정리했습니다.
