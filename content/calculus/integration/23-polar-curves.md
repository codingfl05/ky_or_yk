---
id: calc-int-polar-curves
title_ko: "자주 나오는 극곡선 (카디오이드·장미·연주형)"
title_en: "Common polar curves"
question: "장미곡선의 잎 개수와 넓이, 카디오이드와 연주형 곡선의 넓이는?"
tags: [극곡선, 장미곡선, 카디오이드, 연주형, rose curve, cardioid, lemniscate]
importance: 2
related: [calc-int-polar-area, calc-int-polar-coordinates]
source: "book:BLIS편입 적분 5장 (01 극곡선 개형)"
verified: false
---

## formula
$$
\begin{aligned}
&r = a\cos n\theta,\ a\sin n\theta: \\
&\text{petals} = \begin{cases} n & (n \text{ odd}) \\ 2n & (n \text{ even}) \end{cases}
\end{aligned}
$$

$$
A_{\text{rose}} = \begin{cases} \dfrac{\pi a^2}{4} & (n \text{ odd}) \\[1ex] \dfrac{\pi a^2}{2} & (n \text{ even}) \end{cases}
$$

$$
\begin{aligned}
&\text{cardioid } r = a(1 + \cos\theta): \\
&A = \frac{3\pi a^2}{2}, \quad L = 8a
\end{aligned}
$$

$$
\text{lemniscate } r^2 = a^2\cos 2\theta: \quad A = a^2
$$

## conditions
- 장미곡선의 전체 넓이는 $n$과 상관없이 $n$의 홀짝으로만 정해진다.

## explanation
시험에 나오는 극곡선은 대부분 아래 그림들이다. 여러 번 그려 보고 모양과 넓이 값을 외워 두면 넓이·길이 문제를 바로 확인할 수 있다. 그림은 모두 $a = 1$(또는 $b = 1$)로 그렸다.

### 원
$r = 2a\cos\theta$는 양변에 $r$을 곱해 $x^2 + y^2 = 2ax$, 곧 $(x - a)^2 + y^2 = a^2$이다. 원점을 지나고 중심이 $x$축 위에 있는 원이다. $\sin$이면 중심이 $y$축 위로 간다.

::fig polar-circle-cos | $r = 2a\cos\theta$
::fig polar-circle-sin | $r = 2a\sin\theta$
::fig polar-circle-a | $r = a$

### 카디오이드
$\theta = 0$에서 $r = 2a$로 가장 멀고, $\theta = \pi$에서 $r = 0$이라 원점에서 뾰족해진다.

::fig polar-cardioid-pcos | $r = a(1 + \cos\theta)$
::fig polar-cardioid-mcos | $r = a(1 - \cos\theta)$
::fig polar-cardioid-psin | $r = a(1 + \sin\theta)$
::fig polar-cardioid-msin | $r = a(1 - \sin\theta)$

극곡선의 회전 ($\cos n\theta$, $\sin n\theta$ 꼴 공통):
- $+\cos$ → $-\cos$ (함수는 그대로, 부호만 바뀜): $\dfrac{\pi}{n}$만큼 회전. $\cos n\left(\theta - \dfrac{\pi}{n}\right) = -\cos n\theta$이기 때문.
- $+\cos$ → $+\sin$, $-\cos$ → $-\sin$ (부호는 그대로, 함수만 바뀜): $\dfrac{\pi}{2n}$만큼 반시계 회전. $\cos n\left(\theta - \dfrac{\pi}{2n}\right) = \sin n\theta$이기 때문.

### 리마송 $r = a + b\cos\theta$
$a$와 $b$의 비로 모양이 정해진다. $a = b$이면 카디오이드다.

::fig polar-limacon-convex | $a \ge 2b$: 볼록
::fig polar-limacon-dimple | $b < a < 2b$: 오목하게 들어감
::fig polar-limacon-loop | $a < b$: 안쪽 고리

안쪽 고리는 $r < 0$이 되는 구간($\cos\theta < -\dfrac{a}{b}$)에서 생긴다. $r$이 음수면 반대 방향에 점이 찍혀 작은 고리가 바깥 곡선 안으로 들어온다.

### 장미곡선 $r = a\cos n\theta$, $a\sin n\theta$
잎 개수: $n$이 짝수면 $2n$개, 홀수면 $n$개. 넓이: 짝수면 $\dfrac{\pi a^2}{2}$, 홀수면 $\dfrac{\pi a^2}{4}$ (잎 개수와 상관없이 일정).

::fig polar-rose-cos2 | $r = a\cos 2\theta$ (잎 4개)
::fig polar-rose-cos3 | $r = a\cos 3\theta$ (잎 3개)
::fig polar-rose-sin2 | $r = a\sin 2\theta$ (잎 4개)
::fig polar-rose-sin3 | $r = a\sin 3\theta$ (잎 3개)

짝수일 때 잎이 두 배인 이유: $r < 0$인 구간의 점이 반대쪽에 찍히는데, 짝수면 그 자리가 비어 있어 새 잎이 생기고, 홀수면 이미 있는 잎과 겹친다.

### $r = 1 \pm \cos n\theta$, $1 + \sin n\theta$: 장미곡선이 아니다
$r = a(1 + \cos n\theta) \ne a\cos n\theta$이다. $r \ge 0$이라 음수 잎이 없으므로 잎(볼록한 덩어리)은 $n$의 홀짝과 상관없이 항상 $n$개다. 그래서 $n = 2$는 장미곡선 규칙($2n = 4$개)이 성립하지 않고, $n = 3$은 우연히 같아(3개) 성립하는 것처럼 보인다.

::fig polar-pcos2 | $r = 1 + \cos 2\theta$
::fig polar-mcos2 | $r = 1 - \cos 2\theta$
::fig polar-psin2 | $r = 1 + \sin 2\theta$
::fig polar-pcos3 | $r = 1 + \cos 3\theta$
::fig polar-mcos3 | $r = 1 - \cos 3\theta$
::fig polar-psin3 | $r = 1 + \sin 3\theta$

### $r = a + b\cos n\theta$ ($a \ne b$)
$a > b$이면 $r > 0$이라 매끈한 덩어리 $n$개, $a < b$이면 $r < 0$인 구간이 생겨 안쪽에 작은 고리(잎)가 더 생긴다.

::fig polar-abcos2-pos | $n = 2$, $a > b$
::fig polar-abcos2-neg | $n = 2$, $a < b$
::fig polar-abcos3-pos | $n = 3$, $a > b$
::fig polar-abcos3-neg | $n = 3$, $a < b$

### $r^2$ 꼴: 연주형(lemniscate) 등
$r^2 = g(\theta)$는 $r = \pm\sqrt{g(\theta)}$ 두 갈래를 함께 그린다 (파랑 $+$, 빨강 $-$). 연주형은 두 갈래가 정확히 겹쳐서 한 색으로 그렸다. $g(\theta) < 0$인 각에서는 점이 없다.

::fig polar-lemniscate-cos | $r^2 = a^2\cos 2\theta$ (연주형)
::fig polar-lemniscate-sin | $r^2 = a^2\sin 2\theta$
::fig polar-sq-cos1 | $r^2 = a^2\cos\theta$
::fig polar-sq-cos3 | $r^2 = a^2\cos 3\theta$ (잎 6개)
::fig polar-sq-1pcos | $r^2 = 1 + \cos\theta$
::fig polar-sq-1psin | $r^2 = 1 + \sin\theta$

$r^2 = a^2\cos 3\theta$는 $+$갈래가 잎 3개, $-$갈래가 반대쪽에 잎 3개를 만들어 6개다. 연주형의 넓이는 $a^2$.

### 나선과 직선
::fig polar-spiral-arch | $r = \theta$ (아르키메데스 나선)
::fig polar-spiral-exp | $r = e^{-\theta}$ (원점으로 감겨 들어감)
::fig polar-sec | $r = \sec\theta$: 직선 $x = 1$
::fig polar-csc | $r = \csc\theta$: 직선 $y = 1$
::fig polar-tan | $r = \tan\theta$

$r = \sec\theta$는 $r\cos\theta = 1$, 곧 $x = 1$이다. $r = \tan\theta$는 $x = \sin\theta$, $y = \dfrac{\sin^2\theta}{\cos\theta}$라 $\theta \to \pm\dfrac{\pi}{2}$에서 $x \to \pm 1$, $y \to \infty$인 점근선 $x = \pm 1$을 가진다.

### 변장한 꼴
$r = \cos^2\dfrac{\theta}{2} = \dfrac{1 + \cos\theta}{2}$, $r = \sin^2\dfrac{\theta}{2} = \dfrac{1 - \cos\theta}{2}$는 $a = \dfrac{1}{2}$인 카디오이드다. 제곱이 붙으면 주기가 절반이 되므로 $\theta$는 $0$부터 $2\pi$까지면 한 바퀴다.

## supplement
교재 5장 극곡선 개형 페이지(5-10~5-18, 사용자 제공 PDF)를 따라 곡선 그림을 코드로 다시 그려 넣었습니다. 교재는 리마송의 경우를 $a - b \ge 1$, $0 < a - b < 1$, $a - b < 0$으로 나눴는데, 이것은 $b = 1$일 때만 맞는 기준이라 비율 $a \ge 2b$, $b < a < 2b$, $a < b$로 고쳐 적었습니다. 잎 개수가 짝수일 때 두 배인 이유, $1 + \cos n\theta$ 꼴이 장미곡선 규칙을 따르지 않는 이유, $r = \tan\theta$ 설명은 Claude가 추가했습니다. 교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다. 반각 꼴 카디오이드 설명은 미적분학 총정리 29번을 보고 Claude가 보완했습니다.
