---
id: phys-wave-traveling-wave
title_ko: "진행파의 식과 속력"
title_en: "Traveling waves"
question: "진행파의 식에서 각 기호의 의미와 파동의 속력은?"
tags: [진행파, 파장, 각파수, 진동수, 횡파, 종파, traveling wave, wavelength, wave number]
importance: 3
related: [phys-wave-string-speed, phys-wave-shm, phys-wave-interference]
source: "book:BLIS편입 일반물리 10-02~08"
verified: false
---

## formula
$$
y(x,t) = y_m\sin(kx - \omega t + \phi)
$$

$$
k = \frac{2\pi}{\lambda}, \qquad \omega = \frac{2\pi}{T} = 2\pi f, \qquad v = \frac{\omega}{k} = f\lambda
$$

## conditions
- $kx - \omega t$면 $+x$ 방향, $kx + \omega t$면 $-x$ 방향으로 진행. 여기서 $k$는 각파수(용수철 상수가 아님).

## explanation
### 쉽게 말하면
파동은 단진동하는 점들이 줄지어 있는 것이다. 한 점을 고정해서 보면 시간에 따라 단진동 ($\omega$, $T$), 한 순간을 사진 찍으면 공간에 사인 곡선 ($k$, $\lambda$).

- 움직이는 것은 매질이 아니라 모양(에너지)이다. 매질은 제자리에서 진동만 한다.
- 파동의 속력 $v = \dfrac{dx}{dt}$와 매질 한 점의 진동 속도 $u = \dfrac{\partial y}{\partial t}$는 다르다. 매질의 최대 속력은 $\omega y_m$.
- 속력은 매질이 정하고 진동수는 파원이 정한다. 매질이 바뀌면 진동수는 그대로, 파장이 바뀐다.
- 횡파: 진동 방향 ⊥ 진행 방향 (줄의 파동). 종파: 나란함 (음파).

### 식에서 읽어 내기
$y = 0.02\sin(4x - 8t)$이면 $y_m = 0.02$, $k = 4$, $\omega = 8$, $v = \frac{8}{4} = 2$, $+x$ 방향.

## story
경기장 관중의 파도타기를 생각하자. 각 관중은 제자리에서 일어났다 앉을 뿐인데, 일어서는 모양은 경기장을 따라 빠르게 돈다.

## supplement
교재 내용을 옮기고, 쉬운 설명·스토리는 Claude가 추가했습니다.
