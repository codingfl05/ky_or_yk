---
id: calc-diff-inverse-trig-def
title_ko: "역삼각함수의 정의역과 치역"
title_en: "Domains and ranges of inverse trigonometric functions"
question: "sin⁻¹, cos⁻¹, tan⁻¹의 정의역과 치역(주치)은?"
tags: [역삼각함수, 주치, 정의역, 치역, inverse trigonometric function, arcsin, arccos, arctan]
importance: 3
related: [calc-diff-inverse-trig-identities, calc-diff-inverse-trig-composition]
source: "book:BLIS편입 미분 1장 (05 역삼각함수)"
verified: false
---

## formula
$$
y = \sin^{-1}x \iff x = \sin y, \quad -1 \le x \le 1, \quad -\frac{\pi}{2} \le y \le \frac{\pi}{2}
$$

$$
y = \cos^{-1}x \iff x = \cos y, \quad -1 \le x \le 1, \quad 0 \le y \le \pi
$$

$$
y = \tan^{-1}x \iff x = \tan y, \quad -\infty < x < \infty, \quad -\frac{\pi}{2} < y < \frac{\pi}{2}
$$

## conditions
- 삼각함수는 일대일이 아니라서, 일대일이 되는 구간(주치, principal value)으로 제한한 뒤 역함수를 정의한다.
- $\cot^{-1}x$: 치역 $0 < y < \pi$. $\sec^{-1}x$, $\csc^{-1}x$: $|x| \ge 1$, 치역은 교재마다 약속이 다르다 (보통 $\sec^{-1}$은 $[0, \pi]$에서 $\frac{\pi}{2}$ 제외, $\csc^{-1}$은 $[-\frac{\pi}{2}, \frac{\pi}{2}]$에서 $0$ 제외).

## explanation
값을 구하는 문제는 $\theta = \sin^{-1}x$로 놓고 직각삼각형을 그려 변의 길이를 구하는 것이 기본이다. 치역 밖의 값을 답으로 쓰는 실수가 가장 흔하다.

## supplement
교재의 그래프·정의역·치역은 필기 부분이라 텍스트로 추출되지 않아 표준 정의로 채웠습니다. sec⁻¹, csc⁻¹의 치역 약속은 강의에서 쓴 것과 같은지 확인해 주세요. 교재의 공식·정의를 옮기고, 조건·설명은 Claude가 추가했습니다.
