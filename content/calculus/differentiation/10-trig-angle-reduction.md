---
id: calc-diff-trig-angle-reduction
title_ko: "삼각함수 각 변환 (nπ/2 ± θ)"
title_en: "Reduction formulas"
question: "sin(nπ/2 ± θ) 꼴을 예각의 삼각함수로 바꾸는 규칙은?"
tags: [삼각함수, 각 변환, 둔각, reduction formula]
importance: 2
related: [calc-diff-special-angles]
source: "book:BLIS편입 미분 1장 (04 특수각이 아닌 경우)"
verified: false
---

## formula
$$
\sin\!\left(\frac{\pi}{2} \cdot 2 + \theta\right) = -\sin\theta
$$

$$
\cos\!\left(\frac{\pi}{2} \cdot 3 + \theta\right) = \sin\theta
$$

$$
\tan\!\left(\frac{\pi}{2} \cdot 4 - \theta\right) = -\tan\theta
$$

$$
\tan\!\left(\frac{\pi}{2} - \theta\right) = \cot\theta
$$

## conditions
- $\dfrac{\pi}{2} \cdot n \pm \theta$ 꼴에서 $\theta$를 예각으로 보고 판단한다.
- $n$이 짝수: 함수 그대로 ($\sin \to \sin$). $n$이 홀수: 짝 함수로 바뀜 ($\sin \leftrightarrow \cos$, $\tan \leftrightarrow \cot$).
- 부호: 원래 각이 놓인 사분면에서 원래 함수의 부호.

## explanation
변환 후의 함수가 아니라 원래 함수의 부호를 따진다는 점이 자주 틀리는 부분이다. 예: $\cos\!\left(\frac{3\pi}{2} + \theta\right)$는 제4사분면이고 $\cos > 0$이므로 $+\sin\theta$.

## supplement
교재의 공식·정의를 옮기고, 조건·설명은 Claude가 추가했습니다.
