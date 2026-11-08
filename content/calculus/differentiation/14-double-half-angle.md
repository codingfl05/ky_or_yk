---
id: calc-diff-double-half-angle
title_ko: "2배각·반각·3배각 공식"
title_en: "Double-, half-, and triple-angle formulas"
question: "2배각 공식, 반각(차수 내림) 공식, 3배각 공식은?"
tags: [2배각, 반각, 3배각, 차수 내림, double angle, half angle, power reduction]
importance: 3
related: [calc-diff-trig-addition]
source: "book:BLIS편입 미분 1장 (04 삼각함수의 덧셈정리)"
verified: false
---

## formula
$$
\sin 2x = 2\sin x \cos x, \qquad \cos 2x = \cos^2 x - \sin^2 x = 2\cos^2 x - 1 = 1 - 2\sin^2 x, \qquad \tan 2x = \frac{2\tan x}{1 - \tan^2 x}
$$

$$
\sin^2 x = \frac{1 - \cos 2x}{2}, \qquad \cos^2 x = \frac{1 + \cos 2x}{2}
$$

$$
\sin 3x = 3\sin x - 4\sin^3 x, \qquad \cos 3x = 4\cos^3 x - 3\cos x
$$

## conditions
- 모두 덧셈정리에서 $y = x$ (3배각은 $2x + x$)로 놓아 유도.

## explanation
반각 공식은 적분에서 $\sin^2 x$, $\cos^2 x$의 차수를 내릴 때 핵심이다. 3배각은 $\sin$이 $3 - 4$, $\cos$이 $4 - 3$ 순서라고 외운다.

## supplement
3배각 공식은 교재 예제(유도 문제)에서 가져왔습니다. 교재의 공식·정의를 옮기고, 조건·설명은 Claude가 추가했습니다.
