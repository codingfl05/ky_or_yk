---
id: calc-vec-projection
title_ko: "벡터 사영과 스칼라 사영"
title_en: "Vector and scalar projections"
question: "b를 a 위로 사영한 벡터 사영과 스칼라 사영은?"
tags: [사영, 정사영, 벡터 사영, 스칼라 사영, projection]
importance: 3
related: [calc-vec-dot-product, calc-vec-distances]
source: "book:BLIS편입 다변수 1장 (05 사영)"
verified: false
---

## formula
$$
\operatorname{proj}_{\mathbf{a}}\mathbf{b} = \frac{\mathbf{a}\cdot\mathbf{b}}{|\mathbf{a}|^2}\,\mathbf{a}, \qquad \operatorname{comp}_{\mathbf{a}}\mathbf{b} = |\mathbf{b}|\cos\theta = \frac{\mathbf{a}\cdot\mathbf{b}}{|\mathbf{a}|}
$$

## conditions
- 스칼라 사영(scalar projection)은 $\frac{\pi}{2} < \theta \le \pi$이면 음수.
- $\mathbf{b}$를 $\mathbf{a}$에 평행한 성분과 수직인 성분으로 분해: $\mathbf{b} = \operatorname{proj}_{\mathbf{a}}\mathbf{b} + (\mathbf{b} - \operatorname{proj}_{\mathbf{a}}\mathbf{b})$.

## explanation
분모가 벡터 사영은 $|\mathbf{a}|^2$, 스칼라 사영은 $|\mathbf{a}|$라는 차이를 헷갈리기 쉽다. 점에서 평면에 내린 수선의 발, 대칭점, 빛의 반사 문제도 법선 방향 사영으로 푼다.

## supplement
평행·수직 성분 분해를 추가했습니다. 교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
