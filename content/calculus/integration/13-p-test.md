---
id: calc-int-p-test
title_ko: "이상적분의 p-판정법"
title_en: "p-test for improper integrals"
question: "∫₁^∞ 1/xᵖ dx와 ∫₀¹ 1/xᵖ dx가 수렴하는 p의 범위는?"
tags: [p-판정법, 이상적분, 수렴, p-test, improper integral]
importance: 3
related: [calc-int-improper-def, calc-int-comparison-test]
source: "book:BLIS편입 적분 3장 (02 수렴/발산 판정법)"
verified: false
---

## formula
$$
\int_1^{\infty} \frac{dx}{x^p} \text{ converges} \iff p > 1, \qquad \int_0^{1} \frac{dx}{x^p} \text{ converges} \iff p < 1
$$

## conditions
- 무한구간과 불연속점(0 근처)의 기준이 반대다. 둘을 섞어 쓰면 안 된다.
- 응용: $\int_e^{\infty} \frac{dx}{x(\ln x)^p}$는 $p > 1$일 때 수렴 ($\ln x = t$ 치환).

## explanation
실전 판정법의 기준이 되는 공식이다. 유리함수 꼴의 이상적분은 분모·분자의 최고차항만 남긴 뒤 이 판정을 쓴다 (예: $\int_1^\infty \frac{x}{x^3 + 1}\,dx \sim \int_1^\infty \frac{dx}{x^2}$ → 수렴). $p = 1$은 양쪽 모두 발산.

## supplement
로그 꼴 응용의 수렴 조건(p>1)은 교재에서 추출이 깨져서 표준 결과로 채웠습니다. 교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
