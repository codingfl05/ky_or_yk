---
id: calc-diff-critical-extrema
title_ko: "임계점과 극대·극소 판정"
title_en: "Critical points and local extrema"
question: "임계점의 정의와 일계·이계 도함수로 극대·극소를 판정하는 법은?"
tags: [임계점, 극대, 극소, 극값, critical point, local maximum, local minimum]
importance: 3
related: [calc-diff-increasing-decreasing, calc-diff-extreme-value-theorem]
source: "book:BLIS편입 미분 5장 (02 임계점과 극대/극소)"
verified: false
---

## formula
$$
c \text{ is critical} \iff f'(c) = 0 \text{ or } f'(c) \text{ does not exist} \quad (c \in \operatorname{dom} f)
$$

$$
f'(c) = 0,\ f''(c) > 0 \Rightarrow \text{local min}, \qquad f'(c) = 0,\ f''(c) < 0 \Rightarrow \text{local max}
$$

## conditions
- 임계점(critical point)은 극값의 후보. $f$의 정의역 안의 점이어야 한다.
- 일계 도함수 판정: 임계점에서 $f'$의 부호가 $+ \to -$이면 극대, $- \to +$이면 극소, 바뀌지 않으면 극값 아님.
- 이계 도함수 판정에서 $f''(c) = 0$이면 판정 불가 (예: $x^3$, $x^4$).

## explanation
$f'(x) = \frac{g(x)}{h(x)}$ 꼴이면 $g = 0$인 점과 $h = 0$인 점(정의역 안)이 모두 임계점이다. 실전에서는 도함수를 그려 부호 변화를 보는 일계 판정이 주로 쓰이고, 이계 판정은 도함수를 그리기 어려울 때 쓴다.

## supplement
f″(c)=0일 때 판정 불가 예시를 추가했습니다. 교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
