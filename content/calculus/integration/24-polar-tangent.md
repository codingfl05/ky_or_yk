---
id: calc-int-polar-tangent
title_ko: "극곡선의 접선의 기울기"
title_en: "Tangent lines to polar curves"
question: "극곡선 r=f(θ)의 접선의 기울기 dy/dx는?"
tags: [극곡선, 접선, 기울기, polar curve, tangent line]
importance: 2
related: [calc-int-polar-coordinates]
source: "book:BLIS편입 적분 5장 (02 극곡선의 미분)"
verified: false
---

## formula
$$
\frac{dy}{dx} = \frac{\dfrac{dr}{d\theta}\sin\theta + r\cos\theta}{\dfrac{dr}{d\theta}\cos\theta - r\sin\theta}
$$

$$
\tan\psi = \frac{r}{dr/d\theta}
$$

## conditions
- $x = r\cos\theta$, $y = r\sin\theta$를 $\theta$로 미분해 $\frac{dy/d\theta}{dx/d\theta}$를 만든 것.
- $\psi$: 동경(반지름 방향)과 접선이 이루는 각. 접선의 기울각은 $\theta + \psi$.

## explanation
수평접선은 분자 $= 0$, 수직접선은 분모 $= 0$에서 생긴다 (둘 다 0이면 따로 확인). 예: $r = e^{a\theta}$이면 $\tan\psi = \frac{1}{a}$로 일정하다.

## supplement
교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
