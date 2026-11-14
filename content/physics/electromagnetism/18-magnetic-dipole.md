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
- $\mathbf{B}$는 다른 전류가 만든 바깥 자기장이다. 고리 자신의 자기장은 자기 도선끼리의 내력이라 알짜 힘·돌림힘이 0이므로 넣지 않는다.

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
- 에너지 기준: $U=-\mu B\cos\theta$는 $\theta=90^\circ$를 0으로 잡은 식이다. 문제가 "$\boldsymbol\mu\parallel\mathbf{B}$일 때 0"으로 정하면 상수 $\mu B$를 더해 $U'=\mu B(1-\cos\theta)$로 쓴다. 단진자의 $mgL(1-\cos\theta)$와 같은 꼴이라, 정지 상태로 놓은 코일은 $\theta=0$을 지나 반대쪽 같은 각까지 흔들린다 (마찰이 없을 때).
- 고리 자신도 축 위 먼 곳에 $B\approx\dfrac{\mu_0}{2\pi}\dfrac{\mu}{z^3}$의 자기장을 만든다 (전기 쌍극자의 $\dfrac{1}{2\pi\varepsilon_0}\dfrac{p}{z^3}$과 같은 꼴).

### 왜 에너지는 내적, 돌림힘은 외적인가
1. 결과의 종류가 다르다. 에너지는 방향이 없는 숫자(스칼라)라서 두 벡터로 숫자 하나를 만드는 내적을 쓴다. 돌림힘은 "어느 축으로 돌리는가"라는 방향이 있는 벡터라서 벡터를 만드는 외적을 쓴다.
2. 무엇을 재는지가 다르다.
   - 내적 $\boldsymbol\mu\cdot\mathbf{B} = \mu B\cos\theta$는 "얼마나 같은 방향인가"를 잰다. 나란할수록($\theta = 0$) 크고, 앞에 $-$가 붙어 에너지가 가장 낮다. 그래서 정렬이 안정한 자세다.
   - 외적의 크기 $\lvert\boldsymbol\mu\times\mathbf{B}\rvert = \mu B\sin\theta$는 "얼마나 어긋나 있는가"를 잰다. 나란하면($\theta = 0$, $180^\circ$) 0이고 수직일 때($90^\circ$) 최대다. 이미 정렬된 자세는 더 돌릴 이유가 없으니 돌림힘이 0이어야 맞다.
   - 외적의 방향은 회전축이다. 오른손 네 손가락을 $\boldsymbol\mu$에서 $\mathbf{B}$ 쪽으로 감으면 엄지가 $\boldsymbol\tau$이고, 이 회전은 $\boldsymbol\mu$를 $\mathbf{B}$ 쪽으로 눕힌다.
3. 둘은 같은 정보다. 돌림힘은 에너지를 각도로 미분한 것이다 (힘 $F = -\dfrac{dU}{dx}$의 회전 버전).

$$
\tau = -\frac{dU}{d\theta} = -\frac{d}{d\theta}\left(-\mu B\cos\theta\right) = -\mu B\sin\theta
$$

$-$ 부호는 $\theta$를 줄이는 쪽(정렬 쪽)으로 돌린다는 뜻이고, 크기는 $\mu B\sin\theta$다. $\cos$를 미분하면 $\sin$이 되는 것이 "에너지는 $\cos$, 돌림힘은 $\sin$"의 이유다.

같은 규칙이 다른 공식에도 그대로 있다. 일·일률·선속처럼 숫자 하나가 답이면 내적($W = \mathbf{F}\cdot\mathbf{d}$, $P = \mathbf{F}\cdot\mathbf{v}$, $\Phi_B = \mathbf{B}\cdot\mathbf{A}$), 돌림힘이나 자기력처럼 "두 방향 모두에 수직인 방향"이 답이면 외적($\boldsymbol\tau = \mathbf{r}\times\mathbf{F}$, $\mathbf{F} = q\mathbf{v}\times\mathbf{B}$)이다. 자기력 $q\mathbf{v}\times\mathbf{B}$는 항상 $\mathbf{v}$에 수직이라 $P = \mathbf{F}\cdot\mathbf{v} = 0$, 즉 자기력은 일을 하지 않는다.

## story
나침반 바늘이 북쪽을 향하는 것과 같은 현상이다. 전류 고리도 "자기장 방향을 엄지로 가리키는 자세"가 가장 편해서 그쪽으로 돌아간다.

## supplement
교재 내용을 옮기고, 쉬운 설명·스토리는 Claude가 추가했습니다. 에너지 기준 바꾸기와 진자 비유, 내적·외적을 쓰는 이유, 바깥 자기장 조건은 뿌리물리 워크북 84번 문제를 추가하면서 Claude가 보완했습니다.
