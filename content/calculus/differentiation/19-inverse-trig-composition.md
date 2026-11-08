---
id: calc-diff-inverse-trig-composition
title_ko: "삼각함수와 역삼각함수의 합성"
title_en: "Composition of trig and inverse trig functions"
question: "sin⁻¹(sin x) = x가 성립하는 범위는? sin(sin⁻¹x)는?"
tags: [역삼각함수, 합성, 항등함수, inverse trigonometric function, composition]
importance: 3
related: [calc-diff-inverse-trig-def, calc-diff-composite-inverse]
source: "book:BLIS편입 미분 1장 (05 역삼각함수의 합성)"
verified: false
---

## formula
$$
\sin^{-1}(\sin x) = x \quad \left(-\frac{\pi}{2} \le x \le \frac{\pi}{2}\right), \qquad \sin(\sin^{-1}x) = x \quad (-1 \le x \le 1)
$$

$$
\cos^{-1}(\cos x) = x \quad (0 \le x \le \pi), \qquad \cos(\cos^{-1}x) = x \quad (-1 \le x \le 1)
$$

$$
\tan^{-1}(\tan x) = x \quad \left(-\frac{\pi}{2} < x < \frac{\pi}{2}\right), \qquad \tan(\tan^{-1}x) = x \quad (\text{all } x)
$$

## conditions
- 정의역: $\sin^{-1}(\sin x)$, $\cos^{-1}(\cos x)$는 모든 실수, $\tan^{-1}(\tan x)$는 $x \neq \frac{\pi}{2} + n\pi$. $\sin(\sin^{-1}x)$, $\cos(\cos^{-1}x)$는 $-1 \le x \le 1$.
- $= x$가 되는 것은 안쪽 함수가 일대일인 구간(주치)에서뿐이다.

## explanation
$\sin^{-1}\!\left(\sin\frac{5\pi}{3}\right)$처럼 주치 밖의 각이 들어오면 $x$가 아니다: 같은 $\sin$ 값을 갖는 주치 안의 각 $-\frac{\pi}{3}$이 답이다.

## supplement
교재의 공식·정의를 옮기고, 조건·설명은 Claude가 추가했습니다.
