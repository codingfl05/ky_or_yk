---
id: phys-rot-parallel-axis
title_ko: 평행축 정리
title_en: Parallel-axis theorem
formula: |
  I = I_{\text{cm}} + Md^2
importance: 3
tags: [관성모멘트, 회전축, moment of inertia, rotational inertia]
related: []
source: manual
---

## 조건
- 두 회전축이 평행하고, 그중 하나가 질량중심(center of mass)을 지날 때.
- $d$는 두 축 사이의 수직 거리, $M$은 전체 질량.

## 설명
질량중심 축에 대한 관성모멘트(moment of inertia) $I_{\text{cm}}$만 알면, 평행한 다른 축에 대한 관성모멘트를 바로 구할 수 있다. 질량중심 축에서 $I$가 가장 작다.

## 유도
질량중심에서 본 위치를 $\mathbf{r}'$, 새 축까지의 수직 변위를 $\mathbf{d}$라 하면 새 축에서 본 수직 위치는 $\mathbf{r}' + \mathbf{d}$:

$$
I = \int |\mathbf{r}' + \mathbf{d}|^2\, dm = \int r'^2\, dm + 2\,\mathbf{d}\cdot\int \mathbf{r}'\, dm + d^2 \int dm = I_{\text{cm}} + 0 + Md^2
$$

가운데 항은 질량중심의 정의 $\int \mathbf{r}'\,dm = 0$ 때문에 사라진다.

## 예제
길이 $L$인 균일한 막대를 한쪽 끝을 축으로 돌릴 때 ($I_{\text{cm}} = \frac{1}{12}ML^2$, $d = \frac{L}{2}$):

$$
I_{\text{end}} = \frac{1}{12}ML^2 + M\left(\frac{L}{2}\right)^2 = \frac{1}{3}ML^2
$$
