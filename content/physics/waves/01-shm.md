---
id: phys-wave-shm
title_ko: "단진동의 위치·속도·가속도"
title_en: "Simple harmonic motion"
question: "단진동의 위치 식과 속도·가속도, 각진동수·진동수·주기의 관계는?"
tags: [단진동, 단조화 운동, 진폭, 위상, 각진동수, 주기, simple harmonic motion, amplitude, phase, angular frequency]
importance: 3
related: [phys-wave-spring-shm, phys-wave-shm-energy, phys-rot-rotational-kinematics]
source: "book:BLIS편입 일반물리 9-02~12"
verified: false
---

## formula
$$
x(t) = x_m\cos(\omega t + \phi)
$$

$$
v(t) = -\omega x_m\sin(\omega t + \phi), \qquad a(t) = -\omega^2x(t)
$$

$$
\omega = 2\pi f = \frac{2\pi}{T}
$$

## conditions
- $x_m$: 진폭, $\omega t + \phi$: 위상, $\phi$: 위상 상수 (처음 위치로 정해짐). 평형점이 $x = 0$.

## explanation
### 쉽게 말하면
단진동은 등속 원운동을 옆에서 본 그림자다. 각속도 $\omega$로 도는 점의 $x$좌표가 정확히 $x_m\cos(\omega t + \phi)$다. 그래서 "각"진동수라고 부른다.

### 단진동의 판별
가속도가 위치에 비례하고 방향이 반대 ($a = -\omega^2x$)이면 무엇이든 단진동이다. 문제에서 $a = -(\text{상수})x$ 꼴을 만들면 그 상수의 제곱근이 $\omega$.

### 위치에 따른 상태
| 위치 | 속력 | 가속도 크기 |
|---|---|---|
| 끝점 $x = \pm x_m$ | $0$ | 최대 $\omega^2x_m$ |
| 평형점 $x = 0$ | 최대 $\omega x_m$ | $0$ |

속도는 위치보다 $90^\circ$, 가속도는 $180^\circ$ 앞선다.

## story
회전목마를 옆에서 보면 말이 왼쪽 끝과 오른쪽 끝 사이를 왔다 갔다 하는 것처럼 보인다. 가운데를 지날 때 가장 빠르고 양 끝에서 잠깐 멈춘다. 그게 단진동이다.

## supplement
교재 내용을 옮기고, 쉬운 설명·스토리는 Claude가 추가했습니다.
