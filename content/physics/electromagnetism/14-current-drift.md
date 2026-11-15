---
id: phys-em-current-drift
title_ko: "전류, 전류 밀도, 유동 속력"
title_en: "Current, current density and drift speed"
tags: [전류, 전류 밀도, 유동 속력, current, current density, drift speed]
importance: 2
related: [phys-em-ohm-law, phys-em-infinitesimal-elements]
source: "book:BLIS편입 일반물리 15-24~26"
verified: false
---

## formula
$$
i = \frac{dq}{dt}
$$

$$
J = \frac{i}{A}\ \left(i = \int J\,dA\right)
$$

$$
i = nAev_d \ \Rightarrow\ v_d = \frac{J}{ne}
$$

## conditions
- 단위 $\text{A}=\text{C/s}$, $J$는 $\text{A/m}^2$. $n$은 단위 부피당 전하 운반자 수.
- 전류 방향은 양전하가 움직이는 방향 (실제로 움직이는 전자와 반대).

## explanation
::fig drift-cylinder | 시간 Δt 동안 단면을 지나는 전하는 길이 v_d Δt인 원기둥 안에 든 전하다.

### 한 번 따라 하기: $i = nAev_d$
1. 전자들이 평균 속력 $v_d$로 움직이면, 시간 $\Delta t$ 동안 단면을 통과하는 전자는 단면 뒤쪽 길이 $v_d\Delta t$ 안에 있던 전자들이다.
2. 그 원기둥의 부피는 $A\,v_d\Delta t$, 그 안의 전자 수는 (부피당 개수 $n$) × (부피) $= nAv_d\Delta t$.
3. 전자 하나의 전하가 $e$이니 지나간 전하량은 $\Delta q = nAv_d\Delta t\cdot e$.
4. 전류는 1초당 지나간 전하량이므로 $i = \dfrac{\Delta q}{\Delta t} = nAev_d$.

"사람이 빽빽할수록($n$), 통로가 넓을수록($A$), 빨리 걸을수록($v_d$) 1초에 문을 지나는 사람이 많다"와 같은 계산이다.

### 쉽게 말하면
전류는 1초에 단면을 지나가는 전하량, 전류 밀도는 그것을 단면적으로 나눈 값이다. 도선 굵기의 영향을 빼고 "전하가 얼마나 빽빽하게 흐르는지"만 보려고 $J$를 쓴다.

- 갈림길에서 들어온 전류 = 나간 전류 (전하량 보존).
- $J$가 위치마다 다르면 쪼개서 더한다: 원형 단면이면 고리 띠 $dA=2\pi r\,dr$로 $i=\int J(r)\,2\pi r\,dr$.
- 유동 속력(drift speed)은 생각보다 매우 느리다 (보통 mm/s 이하). 전등이 바로 켜지는 건 전기장이 빛의 속도로 퍼지기 때문.

## example
반지름 $R$인 도선에 $J$가 균일할 때, $\dfrac{R}{2}<r<R$ 부분의 전류 (교재 예제):

$$
i = J\left(\pi R^2 - \pi\frac{R^2}{4}\right) = \frac{3}{4}\pi R^2 J
$$

## supplement
교재 내용을 옮기고, 쉬운 설명·스토리는 Claude가 추가했습니다. 예제 풀이는 Claude가 계산했습니다. 쉬운 설명·그림 보강: i = nAev_d 유도를 단계별로, 그림(drift-cylinder).
