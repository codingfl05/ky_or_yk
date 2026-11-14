---
id: calc-diff-inverse-trig-identities
title_ko: "역삼각함수의 항등식"
title_en: "Inverse trigonometric identities"
question: "sin⁻¹x + cos⁻¹x, tan⁻¹x + tan⁻¹(1/x) 등 역삼각함수 항등식은?"
tags: [역삼각함수, 항등식, inverse trigonometric identity]
importance: 3
related: [calc-diff-inverse-trig-def]
source: "book:BLIS편입 미분 1장 (05 역삼각함수의 항등식)"
verified: false
---

## formula
$$
\sin^{-1}x + \cos^{-1}x = \frac{\pi}{2} \quad (-1 \le x \le 1)
$$

$$
\tan^{-1}x + \cot^{-1}x = \frac{\pi}{2}
$$

$$
\tan^{-1}x + \tan^{-1}\frac{1}{x} = \begin{cases} \dfrac{\pi}{2} & (x > 0) \\[1ex] -\dfrac{\pi}{2} & (x < 0) \end{cases}
$$

$$
\cot^{-1}x + \cot^{-1}\frac{1}{x} = \frac{\pi}{2} \quad (x > 0)
$$

$$
\cos^{-1}x + \cos^{-1}(-x) = \pi \quad (-1 \le x \le 1)
$$

## conditions
- 범위 조건을 같이 외워야 한다. 특히 $\tan^{-1}x + \tan^{-1}\frac{1}{x}$는 $x$의 부호에 따라 값이 다르다.

## explanation
교재는 증명 없이 암기하라고 한다. 확인할 때는 양변을 미분해서 $0$이 되는지 보고, 특정 값(예: $x = 1$)을 넣어 상수를 정하면 된다.

## supplement
미분으로 확인하는 방법을 추가했습니다. 교재의 공식·정의를 옮기고, 조건·설명은 Claude가 추가했습니다.
