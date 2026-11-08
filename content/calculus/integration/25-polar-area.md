---
id: calc-int-polar-area
title_ko: "극곡선의 넓이"
title_en: "Area in polar coordinates"
question: "극곡선으로 둘러싸인 넓이와 두 극곡선 사이의 넓이 공식은?"
tags: [극곡선, 넓이, polar area]
importance: 3
related: [calc-int-polar-curves, calc-int-area]
source: "book:BLIS편입 적분 5장 (03 극곡선의 면적)"
verified: false
---

## formula
$$
A = \frac{1}{2}\int_\alpha^\beta r^2\,d\theta, \qquad A = \frac{1}{2}\int_\alpha^\beta \left(r_{\text{out}}^2 - r_{\text{in}}^2\right)d\theta
$$

## conditions
- $\theta$를 잘게 쪼갠 부채꼴 넓이 $\frac{1}{2}r^2\,d\theta$를 쌓은 것.
- 같은 부분을 두 번 지나지 않도록 $\theta$의 범위를 정한다 (예: $r = \cos 3\theta$는 $0 \le \theta \le \pi$에서 한 번 그려짐).

## explanation
곡선을 정확히 그리는 것이 핵심이다. 작은 고리(내부 루프)가 있는 리마송은 $r < 0$인 구간이 작은 고리를 그린다. 대칭을 이용해 일부만 계산하고 배수를 곱하면 실수가 줄어든다.

## supplement
교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
