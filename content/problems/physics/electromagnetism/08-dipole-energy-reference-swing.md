---
id: prob-phys-em-dipole-energy-reference-swing
title_ko: "기준을 바꾼 자기쌍극자 퍼텐셜에너지와 코일이 흔들려 멈추는 각"
source: "뿌리물리 워크북 84번"
difficulty: 2
tags: [자기 쌍극자, 퍼텐셜에너지, 기준점, 에너지 보존, 진자, 돌림힘, magnetic dipole, potential energy, reference, energy conservation, pendulum]
related: [phys-em-magnetic-dipole]
images: []
verified: false
---

## problem
$\mu = 0.020\,\text{A}\cdot\text{m}^2$인 코일이 $B = 0.050\,\text{T}$ 속에 있다. $\boldsymbol{\mu}\parallel\mathbf{B}$일 때 퍼텐셜에너지를 0으로 잡으면, 코일은 퍼텐셜에너지 $0.50\,\text{mJ}$인 자세에서 정지 상태로 놓인다. (a) 처음 각도, (b) 에너지 손실 없이 돈 코일이 다음에 순간적으로 멈추는 각도를 구한다.

## answer
(a) $\theta_i = 60^\circ$, (b) $\theta_f = 300^\circ$ (즉 $-60^\circ$)

## key-idea
- 기준을 $\theta = 0$에서 0으로 옮김 → 상수 $\mu B$를 더함: $U' = -\mu B\cos\theta + \mu B = \mu B(1 - \cos\theta)$, $\mu B = 1.0\,\text{mJ}$
- $0.50 = 1.0(1 - \cos\theta_i)$ → $\cos\theta_i = \dfrac{1}{2}$ → $\theta_i = 60^\circ$
- 진자와 같은 운동: $\theta = 0$을 지나 반대쪽으로 넘어가고, 에너지 보존으로 $U'$가 처음 값이 되는 $\cos\theta_f = \dfrac{1}{2}$, 반대쪽 $\theta_f = -60^\circ$에서 멈춤

## solution
### 개념 1: 퍼텐셜에너지는 기준을 마음대로 잡을 수 있다
$U = -\mu B\cos\theta$는 $\theta = 90^\circ$를 0으로 잡은 식이다. 물리에 의미가 있는 것은 에너지의 차이(얼마나 내려가면 운동에너지가 얼마나 생기는가)뿐이라, 모든 자세에 같은 상수를 더해도 운동은 똑같다. 문제가 "$\theta = 0$일 때 0"으로 정했으니, $\theta = 0$에서 $U = -\mu B$인 값을 0으로 끌어올리려고 $\mu B$를 더한다.

$$
U' = \mu B(1 - \cos\theta)
$$

$\theta = 0$에서 0(가장 낮음), $\theta = 180^\circ$에서 $2\mu B$(가장 높음)이다.

### 개념 2: 자기장 속 코일은 진자다
단진자의 퍼텐셜에너지 $mgL(1 - \cos\theta)$와 꼴이 똑같다. $\theta = 0$($\boldsymbol{\mu}$가 $\mathbf{B}$ 방향)이 진자의 가장 낮은 점이고, 돌림힘 $\tau = \mu B\sin\theta$는 진자의 복원력처럼 항상 $\theta = 0$ 쪽으로 돌린다.

| 단진자 | 자기장 속 코일 |
|---|---|
| 가장 낮은 점 | $\boldsymbol{\mu}\parallel\mathbf{B}$ ($\theta = 0$) |
| $mgL(1 - \cos\theta)$ | $\mu B(1 - \cos\theta)$ |
| 복원력 $mg\sin\theta$ | 돌림힘 $\mu B\sin\theta$ |

### 풀이
1. $60^\circ$에서 정지 상태로 놓으면 돌림힘이 $\theta = 0$ 쪽으로 돌린다. 내려가면서 $U'$가 운동에너지로 바뀌고, $\theta = 0$에서 회전이 가장 빠르다.
2. $\theta = 0$에서 돌림힘이 0이 되지만 이미 돌고 있으므로 멈추지 않고 반대쪽으로 넘어간다. 이제 돌림힘이 회전을 늦춘다.
3. 마찰이 없으면 $U'$가 처음 값 $0.50\,\text{mJ}$로 돌아올 때 운동에너지가 0이 되어 순간 정지한다. $\cos\theta_f = \dfrac{1}{2}$인 각은 $\pm 60^\circ$인데, $+60^\circ$는 출발점이므로 "다음에" 멈추는 곳은 반대쪽 $-60^\circ = 300^\circ$이다. 이후 $\pm 60^\circ$ 사이를 계속 흔들린다.

## mistakes
- 기준을 무시하고 $-\mu B\cos\theta_i = 0.50\,\text{mJ}$를 바로 풀면 $\cos\theta_i = -\dfrac{1}{2}$, $\theta_i = 120^\circ$로 틀린다. 문제가 기준을 바꿨으면 $U'$ 식부터 다시 세운다.
- (b)에서 $\theta = 0$(평형점)에서 멈춘다고 쓰기 쉽다. 평형점은 돌림힘이 0인 곳이지 속력이 0인 곳이 아니다. 오히려 가장 빠르게 지나간다.

## supplement
문제·정답·해설은 사용자가 준 자료(뿌리물리 워크북 84번) 그대로 요약했습니다. solution의 개념 설명(기준 바꾸기, 진자 비유와 비교표)과 mistakes는 사용자 요청으로 Claude가 추가했습니다.
