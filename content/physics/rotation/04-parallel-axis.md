---
id: phys-rot-parallel-axis
title_ko: 평행축 정리
title_en: Parallel-axis theorem
importance: 3
tags: [관성모멘트, 회전축, moment of inertia, rotational inertia]
related: [phys-rot-moment-of-inertia, phys-rot-rolling]
source: manual
---

## formula
$$
I = I_{\text{cm}} + Md^2
$$

## conditions
- 두 회전축이 평행하고, 그중 하나가 질량중심(center of mass)을 지날 때.
- $d$는 두 축 사이의 수직 거리, $M$은 전체 질량.

## explanation
::fig parallel-axis-rod | 질량 중심 축에서 d만큼 옮긴 평행한 축은 Md²만큼 더 돌리기 힘들다.

### 쉽게 말하면
축이 질량 중심에서 멀어지면 물체 전체가 그 축 둘레를 "크게" 돌아야 한다. 그 추가분이 $Md^2$이고, 이는 전체 질량 $M$이 질량 중심 한 점에 모여 거리 $d$에서 도는 것의 관성모멘트와 같다.
즉 (새 축에 대한 값) = (제자리에서 도는 몫 $I_{\text{cm}}$) + (질량 중심이 축 둘레를 도는 몫 $Md^2$).
주의: 반드시 한쪽 축이 질량 중심을 지나야 한다. 질량 중심을 지나지 않는 두 축 사이에는 바로 쓸 수 없고, 질량 중심 축을 거쳐서 두 번 써야 한다.

질량중심 축에 대한 관성모멘트(moment of inertia) $I_{\text{cm}}$만 알면, 평행한 다른 축에 대한 관성모멘트를 바로 구할 수 있다. 질량중심 축에서 $I$가 가장 작다.

## derivation
질량중심에서 본 위치를 $\mathbf{r}'$, 새 축까지의 수직 변위를 $\mathbf{d}$라 하면 새 축에서 본 수직 위치는 $\mathbf{r}' + \mathbf{d}$:

$$
\begin{aligned}
&I = \int |\mathbf{r}' + \mathbf{d}|^2\, dm \\
&\quad {}= \int r'^2\, dm + 2\,\mathbf{d}\cdot\int \mathbf{r}'\, dm + d^2 \int dm \\
&\quad {}= I_{\text{cm}} + 0 + Md^2
\end{aligned}
$$

가운데 항은 질량중심의 정의 $\int \mathbf{r}'\,dm = 0$ 때문에 사라진다.

## example
길이 $L$인 균일한 막대를 한쪽 끝을 축으로 돌릴 때 ($I_{\text{cm}} = \frac{1}{12}ML^2$, $d = \frac{L}{2}$):

$$
I_{\text{end}} = \frac{1}{12}ML^2 + M\left(\frac{L}{2}\right)^2 = \frac{1}{3}ML^2
$$

## supplement
쉬운 설명·그림 보강: 쉬운 설명과 주의점, 그림(parallel-axis-rod).
