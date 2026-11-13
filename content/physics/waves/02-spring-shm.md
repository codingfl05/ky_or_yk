---
id: phys-wave-spring-shm
title_ko: "용수철 진자 (수평·수직)"
title_en: "Spring-mass oscillator"
question: "용수철 진자의 각진동수와 주기는? 수직으로 매달면 무엇이 달라지는가?"
tags: [용수철 진자, 용수철 상수, 주기, 수직 용수철, spring, mass-spring system, period]
importance: 3
related: [phys-wave-shm, phys-wave-shm-energy, phys-mech-spring-tension-drag]
source: "book:BLIS편입 일반물리 9-12, 9-18~22"
verified: false
---

## formula
$$
\omega = \sqrt{\frac{k}{m}}, \qquad T = 2\pi\sqrt{\frac{m}{k}}
$$

$$
\text{vertical: equilibrium stretch } \Delta x = \frac{mg}{k}
$$

## conditions
- 용수철 질량과 마찰을 무시할 때. 주기는 진폭과 무관하다.

## explanation
### 쉽게 말하면
$F = -kx = ma$에서 $a = -\dfrac{k}{m}x$이므로 $\omega^2 = \dfrac{k}{m}$. 주기는 질량과 용수철 상수로만 정해진다. 무거울수록 느리고, 뻣뻣할수록 빠르다. 얼마나 크게 흔드는지(진폭)는 주기와 상관없다.

### 수직 용수철
중력은 평형점만 $\Delta x = \frac{mg}{k}$만큼 아래로 옮긴다. 새 평형점에서 잰 변위로 쓰면 수평 용수철과 모든 것이 같다 (주기, 에너지 식 $\frac{1}{2}mv^2 + \frac{1}{2}kx^2$ 모두).

### 용수철 연결
- 직렬: $\dfrac{1}{k_{\text{eq}}} = \dfrac{1}{k_1} + \dfrac{1}{k_2}$ (더 무르다).
- 병렬: $k_{\text{eq}} = k_1 + k_2$ (더 뻣뻣하다).
- 용수철을 반으로 자르면 $k$는 2배.

### 충돌 후 진동
붙는 충돌이면 질량이 바뀌어 $\omega$가 바뀐다. 진폭은 충돌 직후의 위치와 속력으로 에너지 $\frac{1}{2}kx_m^2$에서 구한다.

## supplement
교재 내용을 옮기고, 쉬운 설명·스토리는 Claude가 추가했습니다.
