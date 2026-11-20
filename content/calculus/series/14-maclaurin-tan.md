---
id: calc-maclaurin-tan
title_ko: "tan x의 Maclaurin 급수"
title_en: "Maclaurin series of tan x"
question: "tan x의 Maclaurin 급수 처음 몇 항과 수렴 구간은?"
tags: [탄젠트, 삼각함수, 매클로린, tangent, maclaurin series]
importance: 2
related: [calc-maclaurin-sin, calc-maclaurin-cos, calc-maclaurin-sec]
source: "book:BLIS편입 적분 6-02"
verified: false
---

## formula
$$
\tan x = x + \frac{1}{3}x^3 + \frac{2}{15}x^5 + \frac{17}{315}x^7 + \cdots
$$

## conditions
- 수렴 구간: $-\dfrac{\pi}{2} < x < \dfrac{\pi}{2}$ (원점에서 가장 가까운 특이점이 $\pm\dfrac{\pi}{2}$).

## explanation
일반항이 간단하지 않아서 처음 몇 항을 외운다. 기억이 안 나면 $\sin x$ 급수를 $\cos x$ 급수로 나누거나, $(\tan x)' = 1 + \tan^2 x$를 이용해 계수를 차례로 구할 수 있다. 시험에는 주로 $x^3$ 항까지($\tan x \approx x + \dfrac{x^3}{3}$) 나온다.

## derivation
### 미정계수법 ($\sec x$ 카드와 같은 방법)
$\tan x\cdot\cos x = \sin x$를 쓴다. $\sec x$를 구할 때 우변이 1이었던 자리에 $\sin x$의 급수가 들어간다.

$\tan(-x) = -\tan x$인 홀함수이므로 홀수 차수만 있다.

$$
\tan x = b_1x + b_3x^3 + b_5x^5 + \cdots
$$

$$
\begin{aligned}
&(b_1x + b_3x^3 + b_5x^5 + \cdots)\left(1 - \frac{x^2}{2} + \frac{x^4}{24} - \cdots\right) \\
&\quad {}= x - \frac{x^3}{6} + \frac{x^5}{120} - \cdots
\end{aligned}
$$

차수별로 비교한다.

- $x^1$: $b_1 = 1$
- $x^3$: $b_3 - \dfrac{b_1}{2} = -\dfrac{1}{6}$, 곧 $b_3 = \dfrac{1}{3}$
- $x^5$: $b_5 - \dfrac{b_3}{2} + \dfrac{b_1}{24} = \dfrac{1}{120}$, 곧

$$
b_5 = \frac{1}{120} + \frac{1}{6} - \frac{1}{24} = \frac{2}{15}
$$

이 방법이 되는 이유(급수의 곱, 계수 비교, 분모의 상수항 $\ne 0$)는 $\sec x$ 카드의 유도에 정리했다.

## supplement
교재 페이지에는 공식과 수렴 구간만 있고, 조건·설명은 Claude가 추가했습니다. 미정계수법 유도는 사용자 요청으로 Claude가 추가했습니다.
