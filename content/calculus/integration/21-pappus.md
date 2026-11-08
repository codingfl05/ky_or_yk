---
id: calc-int-pappus
title_ko: "파푸스 정리"
title_en: "Pappus's theorem"
question: "파푸스 정리로 회전체의 부피와 겉넓이를 구하는 공식은?"
tags: [파푸스 정리, 무게중심, 회전체, pappus's theorem, centroid]
importance: 2
related: [calc-int-volume, calc-int-surface-area]
source: "book:BLIS편입 적분 4장 (05 파푸스 정리)"
verified: false
---

## formula
$$
V = 2\pi \bar{r} \cdot A, \qquad S = 2\pi \bar{r} \cdot L
$$

## conditions
- $\bar{r}$: 회전축에서 도형(또는 곡선)의 무게중심까지의 거리. $A$는 넓이, $L$은 곡선의 길이.
- 회전축이 도형을 가로지르지 않아야 한다.

## explanation
무게중심이 바로 보이는 도형(원, 삼각형, 사각형)을 회전시키거나, 축이 기울어진 직선일 때 특히 빠르다. 예: 반지름 $a$인 원을 중심에서 $R$만큼 떨어진 축으로 돌린 토러스의 부피는 $2\pi R \cdot \pi a^2$, 겉넓이는 $2\pi R \cdot 2\pi a$.

## supplement
토러스 예시를 추가했습니다. 교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
