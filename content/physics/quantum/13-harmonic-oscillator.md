---
id: phys-qm-harmonic-oscillator
title_ko: "양자 조화진동자 (단진동 우물)"
title_en: "quantum harmonic oscillator"
question: "용수철 퍼텐셜에 갇힌 입자의 에너지 준위는?"
tags: [양자 조화진동자, 단진동 우물, 영점 에너지, 에너지 준위, quantum harmonic oscillator, zero-point energy]
importance: 2
related: [phys-wave-shm, phys-wave-spring-shm, phys-qm-infinite-well, phys-qm-uncertainty]
source: "book:BLIS편입 일반물리 22-34"
verified: false
---

## formula
$$
E_n = \left(n + \frac{1}{2}\right)\hbar\omega
\qquad (n = 0, 1, 2, \dots)
$$

$$
\omega = \sqrt{\frac{k'}{m}}, \qquad \Delta E = \hbar\omega = hf
$$

## conditions
- 퍼텐셜 에너지 $U(x) = \frac{1}{2}k'x^2$. $k'$은 용수철 상수 (각파수 $k$와 구분하려고 프라임을 붙였다).
- $\omega$: 입자의 고전적인 진동 각진동수.
- 양자수가 $n = 0$부터 시작한다 (무한 우물은 $n = 1$부터).
- 바닥 상태의 파동함수 ($\alpha = m\omega/\hbar$):

$$
\psi_0(x) = \left(\frac{\alpha}{\pi}\right)^{1/4} e^{-\alpha x^2/2}
$$

## explanation
::fig sho-levels | 준위가 같은 간격으로 놓인 사다리 모양이다.

### 먼저 떠올릴 것
- 용수철에 매달린 물체의 단진동: 각진동수 $\omega = \sqrt{k/m}$, 퍼텐셜 에너지 $\frac{1}{2}kx^2$ (포물선).
- 고전 진동자는 진폭에 따라 어떤 에너지든 가질 수 있고, 가만히 멈춰 있으면 에너지가 0이다.

### 쉽게 말하면
- 양자 진동자의 에너지는 $\hbar\omega$ 간격의 사다리다: $\frac{1}{2}\hbar\omega$, $\frac{3}{2}\hbar\omega$, $\frac{5}{2}\hbar\omega$, …
- 가장 낮은 에너지도 $E_0 = \frac{1}{2}\hbar\omega > 0$ (영점 에너지). 완전히 멈추면 위치와 운동량이 둘 다 정확히 정해져 불확정성 원리에 어긋나기 때문이다.
- 한 칸 위로 올라가려면 에너지 $\hbar\omega$인 광자를 흡수해야 한다. 곧 입자의 진동 각진동수와 빛의 각진동수가 같아야 한다.

### 세 우물의 준위 비교
| 우물 | 에너지 | 간격 |
|---|---|---|
| 무한 우물 | $\propto n^2$ | 위로 갈수록 벌어짐 |
| 조화진동자 | $\propto \left(n + \frac{1}{2}\right)$ | 일정 |
| 수소 원자 | $\propto -\dfrac{1}{n^2}$ | 위로 갈수록 좁아짐 |

### 파동함수의 모양
- 양자수 $n$인 상태: 확률 밀도의 극대가 $n + 1$개, 0이 되는 점(마디)이 $n$개. $x = 0$에 대해 대칭이다.
- 고전적인 반환점($U = E$인 곳) 바깥으로도 조금 스며들었다가 지수적으로 줄어든다.
- $n$이 작으면 가운데에서 발견될 확률이 높다. 고전 진동자는 정반대로, 속력이 0이 되는 양 끝에 가장 오래 머문다.
- $n$이 커질수록 확률 분포가 양 끝에서 커져 고전 역학과 비슷해진다.

### 한 번 따라 하기
$\omega = 1.0 \times 10^{15}\,\text{rad/s}$, $\hbar \approx 1 \times 10^{-34}\,\text{J}\cdot\text{s}$이면 $\hbar\omega = 1 \times 10^{-19}\,\text{J}$.
- 바닥 상태: $E_0 = 0.5 \times 10^{-19}\,\text{J}$.
- 첫 번째 들뜬 상태: $E_1 = 1.5 \times 10^{-19}\,\text{J}$.
- 이웃한 준위의 차이는 $n$과 상관없이 $1 \times 10^{-19}\,\text{J}$.

### 자주 틀리는 포인트
- "첫 번째 들뜬 상태"는 $n = 1$이다 ($n = 0$이 바닥 상태).
- 간격에는 $\frac{1}{2}$이 없다: $\Delta E = \hbar\omega$.

## supplement
교재 내용을 옮기고, 세 우물의 비교 표와 그림(sho-levels)은 Claude가 추가했습니다.
