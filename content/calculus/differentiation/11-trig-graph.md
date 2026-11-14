---
id: calc-diff-trig-graph
title_ko: "삼각함수 그래프의 치역과 주기"
title_en: "Range and period of trigonometric graphs"
question: "y = a sin(bx+c)+d의 치역과 주기는? tan의 주기와 정의역은?"
tags: [삼각함수 그래프, 주기, 치역, period, range, amplitude]
importance: 2
related: [calc-diff-even-odd]
source: "book:BLIS편입 미분 1장 (04 삼각함수 그래프)"
verified: false
---

## formula
$$
y = a\sin(bx + c) + d: \quad d - |a| \le y \le d + |a|
$$

$$
T = \frac{2\pi}{|b|}
$$

$$
y = a\tan(bx + c) + d: \quad T = \frac{\pi}{|b|}
$$

$$
bx + c \neq \frac{\pi}{2} + n\pi
$$

## conditions
- $\cos$도 $\sin$과 같다 (치역 $[d - |a|, d + |a|]$, 주기 $\dfrac{2\pi}{|b|}$).
- 기본형: $\sin x$, $\cos x$는 치역 $[-1, 1]$, 주기 $2\pi$. $\tan x$는 치역 실수 전체, 주기 $\pi$, $x \neq \dfrac{\pi}{2} + n\pi$ ($n$은 정수).
- $\sin$, $\tan$은 기함수(원점 대칭), $\cos$은 우함수($y$축 대칭).

## explanation
주기가 다른 두 함수의 합 $\sin(5x) - \sin\!\left(\frac{9}{2}x\right)$의 주기는 각 주기의 최소공배수다. $a$, $b$가 음수일 수 있으니 절댓값을 빼먹지 말 것.

## supplement
교재에는 치역이 −a+d ≤ y ≤ a+d, 주기가 2π/b로 되어 있는데, a, b가 음수일 때도 맞도록 절댓값을 붙였습니다. 교재의 공식·정의를 옮기고, 조건·설명은 Claude가 추가했습니다.
