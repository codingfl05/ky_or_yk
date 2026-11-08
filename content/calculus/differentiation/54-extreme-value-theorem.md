---
id: calc-diff-extreme-value-theorem
title_ko: "최대·최소 정리"
title_en: "Extreme value theorem"
question: "최대·최소 정리의 조건과, 극값과 최댓값·최솟값을 구하는 법의 차이는?"
tags: [최대 최소 정리, 최댓값, 최솟값, extreme value theorem, absolute maximum]
importance: 3
related: [calc-diff-critical-extrema, calc-diff-intermediate-value]
source: "book:BLIS편입 미분 6장 (01 최대/최소 정리)"
verified: false
---

## formula
$$
f \text{ continuous on } [a, b] \;\Longrightarrow\; f \text{ attains a maximum and a minimum on } [a, b]
$$

## conditions
- 닫힌 구간에서 연속이어야 한다. 열린 구간이거나 불연속이면 최댓값·최솟값이 없을 수 있다 (예: $(0, 1)$에서 $\frac{1}{x}$).
- 최댓값·최솟값 구하기: 구간 안의 임계점의 함숫값 + 양 끝점의 함숫값을 모두 비교.

## explanation
극대·극소는 국소적인 값이고 최대·최소는 구간 전체에서의 값이라, 양 끝점 확인을 빼먹는 실수가 가장 흔하다. 열린 구간에서 최대·최소를 묻는 문제는 보통 극값이 하나뿐이라 극대 = 최대, 극소 = 최소인 상황이다.

## supplement
열린 구간 반례를 추가했습니다. 교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
