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
::fig wave-snapshot | 한 순간에 찍은 파동. 마루에서 다음 마루까지가 파장 λ, 가운데에서 마루까지가 진폭이다.

### 기호 풀이
- $\lambda$ (파장): 사진에서 같은 모양이 반복되는 길이. $k = \dfrac{2\pi}{\lambda}$는 "$1\,\text{m}$ 가는 동안 위상이 몇 라디안 변하나"다.
- $T$ (주기): 한 점이 한 번 진동하는 데 걸리는 시간. $\omega = \dfrac{2\pi}{T}$는 "1초에 위상이 몇 라디안 변하나".
- $v = f\lambda$: 한 번 진동하는 시간 $T$ 동안 파동은 정확히 한 파장 $\lambda$만큼 나아간다. 그래서 속력 $= \dfrac{\lambda}{T} = f\lambda$.

### 왜 $kx - \omega t$가 $+x$ 방향인가
마루 하나를 눈으로 따라간다고 하자. 마루는 괄호 안 $kx - \omega t$가 일정한 값인 점이다. 시간 $t$가 커지면 그 값을 유지하려고 $x$도 커져야 한다. 곧 마루가 $+x$ 쪽으로 간다. $kx + \omega t$이면 $t$가 커질 때 $x$가 작아져야 하므로 $-x$ 쪽이다.

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
교재 내용을 옮기고, 쉬운 설명·스토리는 Claude가 추가했습니다. 쉬운 설명·그림 보강: 기호 풀이, 진행 방향을 읽는 이유, 그림(wave-snapshot).
