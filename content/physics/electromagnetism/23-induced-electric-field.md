---
id: phys-em-induced-electric-field
title_ko: "유도 전기장 (변하는 자기장이 만드는 전기장)"
title_en: "Induced electric field"
tags: [유도 전기장, 패러데이 법칙, 솔레노이드, induced electric field, Faraday's law, nonconservative]
importance: 2
related: [phys-em-faraday-law, phys-em-ampere-law]
source: "book:BLIS편입 일반물리 17-14"
verified: false
---

## formula
$$
\oint\mathbf{E}\cdot d\mathbf{s} = -\frac{d\Phi_B}{dt}
$$

$$
E_{\text{solenoid}} = \begin{cases}\dfrac{r}{2}\dfrac{dB}{dt} & (r<R)\\[1.5ex] \dfrac{R^2}{2r}\dfrac{dB}{dt} & (r>R)\end{cases}
$$

## conditions
- 솔레노이드 식은 반지름 $R$인 긴 솔레노이드 안의 자기장이 균일하게 변할 때, 축과 동심인 원 위의 크기.

## explanation
::fig induced-e | 지면으로 들어가는 자기장이 세지면 그 둘레에 반시계 방향 소용돌이 전기장이 생긴다.

### 기호 풀이
기전력 $\mathcal{E}$는 전하 $1\,\text{C}$이 고리를 한 바퀴 돌 때 받는 일이다. 일은 힘 × 거리이고, 전하 $1\,\text{C}$이 받는 힘이 전기장 $E$이므로, 한 바퀴 돌며 받는 일은 $\oint\mathbf{E}\cdot d\mathbf{s}$ (전기장 × 걸은 길이를 한 바퀴 더한 값)다. 그래서 패러데이 법칙을 전기장으로 쓰면 맨 위 식이 된다.
원형 대칭이면 원 위 어디서나 $E$가 같고 원을 따라 향하므로 $\oint\mathbf{E}\cdot d\mathbf{s} = E\cdot 2\pi r$이다. 앙페르 법칙에서 $B\cdot 2\pi r$로 쓴 것과 같은 계산이다.

### 한 번 따라 하기: 솔레노이드 안팎
- 안 ($r < R$): 반지름 $r$인 원이 감싼 선속은 $B\pi r^2$. $E\cdot 2\pi r = \pi r^2\dfrac{dB}{dt}$ → $E = \dfrac{r}{2}\dfrac{dB}{dt}$.
- 밖 ($r > R$): 자기장은 솔레노이드 안에만 있으니 선속은 $B\pi R^2$로 더 늘지 않는다. $E\cdot 2\pi r = \pi R^2\dfrac{dB}{dt}$ → $E = \dfrac{R^2}{2r}\dfrac{dB}{dt}$.

### 쉽게 말하면
유도 기전력이 생긴다는 건 전하를 미는 힘, 즉 전기장이 생겼다는 뜻이다. 결론: 변하는 자기장은 도선이 없어도 주변에 소용돌이 모양의 전기장을 만든다.

- 이 전기장은 전하가 만든 전기장과 달리 닫힌 경로 적분이 0이 아니다 (보존장이 아님). 그래서 이 전기장에는 전위를 정의할 수 없다.
- 원형 대칭이면 $E\cdot2\pi r = \left|\dfrac{d\Phi_B}{dt}\right|$로 바로 푼다. 솔레노이드 밖에서는 $B=0$이어도 선속은 안쪽 넓이 $\pi R^2$만큼 있으므로 전기장이 생긴다.

## example
$n=500\,\text{m}^{-1}$, $\dfrac{di}{dt}=100\,\text{A/s}$, 단면적 $1\,\text{cm}^2$인 솔레노이드 바깥의 동심 원형 도선 (교재 예제):

$$
\frac{dB}{dt}=\mu_0n\frac{di}{dt}=2\pi\times10^{-2}\,\text{T/s}
$$

$$
\mathcal{E}=A\frac{dB}{dt}=2\pi\times10^{-6}\,\text{V}\approx6.3\,\mu\text{V}
$$

반지름 $2\,\text{cm}$ 도선 위 전기장: $E=\dfrac{\mathcal{E}}{2\pi r}=5\times10^{-5}\,\text{V/m}$

## supplement
교재 내용을 옮기고, 쉬운 설명·스토리는 Claude가 추가했습니다. 솔레노이드 안팎 공식과 예제 풀이는 Claude가 추가·계산했습니다. 쉬운 설명·그림 보강: 기전력과 전기장의 관계 풀이, 솔레노이드 안팎 유도, 그림(induced-e).
