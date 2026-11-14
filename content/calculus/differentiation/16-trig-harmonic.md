---
id: calc-diff-trig-harmonic
title_ko: "삼각함수의 합성"
title_en: "Harmonic addition (a sin x + b cos x)"
question: "a sin x + b cos x를 하나의 sin으로 합성하는 방법과 최댓값·최솟값은?"
tags: [삼각함수의 합성, 최댓값, 최솟값, harmonic addition, amplitude]
importance: 3
related: [calc-diff-trig-addition]
source: "book:BLIS편입 미분 1장 (04 삼각함수의 합성)"
verified: false
---

## formula
$$
a\sin x + b\cos x = \sqrt{a^2 + b^2}\,\sin(x + \alpha)
$$

$$
\cos\alpha = \frac{a}{\sqrt{a^2+b^2}},\ \sin\alpha = \frac{b}{\sqrt{a^2+b^2}}
$$

## conditions
- $\sin$과 $\cos$의 각이 같을 때만 가능 ($\sin 4x + \cos 5x$는 불가).
- 최댓값 $\sqrt{a^2+b^2}$, 최솟값 $-\sqrt{a^2+b^2}$.

## explanation
$\tan\alpha = \dfrac{b}{a}$만으로는 $\alpha$의 사분면이 정해지지 않으니, $\cos\alpha$와 $\sin\alpha$의 부호로 확인한다. 최댓값·최솟값만 물으면 $\alpha$를 구할 필요 없이 $\pm\sqrt{a^2+b^2}$이 답이다.

## supplement
교재는 tan α = b/a로만 적었는데, 사분면 판단을 위해 cos α, sin α를 추가했습니다. 교재의 공식·정의를 옮기고, 조건·설명은 Claude가 추가했습니다.
