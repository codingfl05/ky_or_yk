---
id: phys-em-magnetic-dipole
title_ko: "자기 쌍극자 (전류 고리의 돌림힘과 에너지)"
title_en: "Magnetic dipole"
tags: [자기 쌍극자, 자기 쌍극자 모멘트, 돌림힘, 전동기, magnetic dipole, magnetic moment, torque, motor]
importance: 2
related: [phys-em-electric-dipole, phys-em-force-on-current, phys-em-biot-savart]
source: "book:BLIS편입 일반물리 16-34~36"
verified: false
---

## formula
$$
\mu = NiA, \qquad \boldsymbol{\tau} = \boldsymbol{\mu}\times\mathbf{B}\ (\tau = NiAB\sin\theta), \qquad U = -\boldsymbol{\mu}\cdot\mathbf{B}
$$

## conditions
- $\boldsymbol{\mu}$의 방향: 오른손 네 손가락을 전류 방향으로 감았을 때 엄지 (고리 면의 법선). $\theta$는 $\boldsymbol{\mu}$와 $\mathbf{B}$ 사이 각.
- $N$: 감은 수, $A$: 고리 넓이.

## explanation
### 쉽게 말하면
전류가 흐르는 고리(코일)는 자기장 안에서 작은 막대자석처럼 행동한다. 전기 쌍극자와 1:1로 대응된다.

| 전기 쌍극자 | 자기 쌍극자 |
|---|---|
| $p=qd$ | $\mu=NiA$ |
| $\boldsymbol\tau=\mathbf{p}\times\mathbf{E}$ | $\boldsymbol\tau=\boldsymbol\mu\times\mathbf{B}$ |
| $U=-\mathbf{p}\cdot\mathbf{E}$ | $U=-\boldsymbol\mu\cdot\mathbf{B}$ |

- 균일한 자기장에서 알짜힘은 0, 돌림힘만 있어 $\boldsymbol\mu$가 $\mathbf{B}$ 방향으로 정렬된다. 정렬($\theta=0$)이 가장 안정 ($U=-\mu B$).
- 반 바퀴마다 전류 방향을 바꿔 주면 계속 돈다 → 전동기(motor).
- 여러 고리의 $\mu$는 방향을 고려해 더한다 (전류 방향이 반대면 뺀다).
- 고리 자신도 축 위 먼 곳에 $B\approx\dfrac{\mu_0}{2\pi}\dfrac{\mu}{z^3}$의 자기장을 만든다 (전기 쌍극자의 $\dfrac{1}{2\pi\varepsilon_0}\dfrac{p}{z^3}$과 같은 꼴).

## story
나침반 바늘이 북쪽을 향하는 것과 같은 현상이다. 전류 고리도 "자기장 방향을 엄지로 가리키는 자세"가 가장 편해서 그쪽으로 돌아간다.

## supplement
교재 내용을 옮기고, 쉬운 설명·스토리는 Claude가 추가했습니다.
