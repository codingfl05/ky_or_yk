---
id: calc-diff-inverse-trig-derivatives
title_ko: "역삼각함수의 도함수"
title_en: "Derivatives of inverse trigonometric functions"
question: "sin⁻¹, cos⁻¹, tan⁻¹, cot⁻¹, sec⁻¹, csc⁻¹의 도함수는?"
tags: [역삼각함수 미분, 도함수, arcsin, arctan, derivative of inverse trigonometric functions]
importance: 3
related: [calc-diff-inverse-trig-def, calc-diff-trig-derivatives]
source: "book:BLIS편입 미분 3장 (02 여러가지 미분법)"
verified: false
---

## formula
$$
(\sin^{-1}x)' = \frac{1}{\sqrt{1-x^2}}
$$

$$
(\cos^{-1}x)' = -\frac{1}{\sqrt{1-x^2}}
$$

$$
(\tan^{-1}x)' = \frac{1}{1+x^2}, \qquad (\cot^{-1}x)' = -\frac{1}{1+x^2}
$$

$$
(\sec^{-1}x)' = \frac{1}{|x|\sqrt{x^2-1}}
$$

$$
(\csc^{-1}x)' = -\frac{1}{|x|\sqrt{x^2-1}}
$$

## conditions
- $\sin^{-1}$, $\cos^{-1}$: $|x| < 1$. $\sec^{-1}$, $\csc^{-1}$: $|x| > 1$.
- $\sec^{-1}x$, $\csc^{-1}x$의 $|x|$는 치역을 $[0, \pi]$(단 $\frac{\pi}{2}$ 제외) 등으로 정한 약속에서 나온다. 치역 약속이 다른 교재에서는 $|x|$ 대신 $x$로 쓴다.

## explanation
co가 붙은 짝($\cos^{-1}$, $\cot^{-1}$, $\csc^{-1}$)은 원래 함수 도함수에 음수만 붙인다. $\sin^{-1}x + \cos^{-1}x = \frac{\pi}{2}$이므로 도함수 합이 $0$인 것과 같다. 적분 공식 $\int \frac{dx}{1+x^2} = \tan^{-1}x + C$로 거꾸로도 쓰인다.

## supplement
치역 약속에 따른 |x| 차이와 항등식과의 관계를 추가했습니다. 교재의 공식을 옮기고, 조건·설명은 Claude가 추가했습니다.
