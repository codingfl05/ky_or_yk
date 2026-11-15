---
id: phys-nuc-decay-law
title_ko: "방사성 붕괴 법칙과 반감기"
title_en: "radioactive decay law and half-life"
question: "방사성 핵의 수는 시간에 따라 어떻게 줄고, 반감기와 붕괴 상수의 관계는?"
tags: [방사성 붕괴, 붕괴 상수, 반감기, 평균 수명, 붕괴율, 활동도, 베크렐, radioactive decay, decay constant, half-life, mean life, activity, becquerel]
importance: 3
related: [phys-nuc-alpha-decay, phys-nuc-beta-decay, phys-circ-rc-circuit]
source: "book:BLIS편입 일반물리 24-04"
verified: false
---

## formula
$$
N = N_0\,e^{-\lambda t}
$$

$$
R = -\frac{dN}{dt} = \lambda N
$$

$$
T_{1/2} = \frac{\ln 2}{\lambda} = \tau\ln 2, \qquad \tau = \frac{1}{\lambda}
$$

## conditions
- $N$: 아직 붕괴하지 않고 남은 핵의 수, $N_0$: 처음 핵의 수.
- $\lambda$: 붕괴 상수(decay constant). 핵의 종류마다 정해진 값. 단위는 $\text{s}^{-1}$.
- $R$: 붕괴율 또는 활동도(activity). 단위 시간에 붕괴하는 핵의 수. 단위는 베크렐, $1\,\text{Bq}$ = 1초에 1번 붕괴.
- $T_{1/2}$: 반감기(half-life). 핵의 수가 절반으로 줄어드는 데 걸리는 시간.
- $\tau$: 평균 수명. 핵의 수가 $1/e$배로 줄어드는 데 걸리는 시간.

## explanation
::fig decay-curve | 얼마가 남아 있든 반감기 하나가 지나면 그 절반이 된다.

### 먼저 떠올릴 것
- 불안정한 핵은 더 안정한 상태가 되려고 스스로 붕괴한다. 핵 하나가 언제 붕괴할지는 알 수 없고 확률만 정해져 있다.
- 핵 하나하나가 같은 확률로 붕괴하므로, 단위 시간에 붕괴하는 수는 남아 있는 핵의 수에 비례한다.
- "변하는 빠르기가 지금 양에 비례한다"는 식의 해는 지수 함수다. RC 회로에서 축전기가 방전될 때 전하가 $e^{-t/RC}$로 줄던 것과 같은 꼴이다.

### 한 번 따라 하기 (유도)
$$
-\frac{dN}{dt} = \lambda N
\quad\Longrightarrow\quad \frac{dN}{N} = -\lambda\,dt
$$

양변을 적분하면 $\ln\dfrac{N}{N_0} = -\lambda t$, 곧 $N = N_0e^{-\lambda t}$.

반감기는 $N = \frac{1}{2}N_0$이 되는 시간이다.

$$
\frac{1}{2} = e^{-\lambda T_{1/2}}
\quad\Longrightarrow\quad T_{1/2} = \frac{\ln 2}{\lambda}
$$

### 반감기로 바로 쓰기
$$
N = N_0\left(\frac{1}{2}\right)^{t/T_{1/2}}
$$

반감기가 1번, 2번, 3번 지나면 $\frac{1}{2}$, $\frac{1}{4}$, $\frac{1}{8}$이 남는다. 붕괴율 $R$도 $N$에 비례하므로 똑같이 줄어든다: $R = R_0e^{-\lambda t}$.

### 숫자 예 1: 남은 양
반감기가 $8$일인 핵은 $24$일 뒤에 반감기를 3번 지나 처음의 $\frac{1}{8}$이 남는다.

### 숫자 예 2: 붕괴율에서 붕괴 상수 구하기
시각 $t_1$에 $R_1$, $t_2$에 $R_2$였다면 $R_2 = R_1e^{-\lambda(t_2 - t_1)}$에서

$$
\lambda = \frac{\ln(R_1/R_2)}{t_2 - t_1}, \qquad T_{1/2} = \frac{(t_2 - t_1)\ln 2}{\ln(R_1/R_2)}
$$

### 숫자 예 3: 질량에서 활동도 구하기
질량 $m$, 몰질량 $M$인 시료의 핵의 수는 $N = \dfrac{m}{M}N_A$이고, 활동도는

$$
R = \lambda N = \frac{\ln 2}{T_{1/2}}\,N
$$

반감기는 반드시 초 단위로 바꿔 넣는다.

### 자주 틀리는 포인트
- 반감기가 2번 지나면 0이 되는 것이 아니라 $\frac{1}{4}$이 남는다.
- "붕괴한 양"을 묻는지 "남은 양"을 묻는지 확인한다. 붕괴한 양은 $N_0 - N$.
- 평균 수명은 반감기보다 길다: $\tau = T_{1/2}/\ln 2 \approx 1.44\,T_{1/2}$.
- 반감기는 온도, 압력, 화학 결합과 무관하다. 그래서 방사성 동위원소로 연대를 잴 수 있다.

## supplement
교재 내용을 옮기고, 반감기로 쓴 식과 숫자 예, RC 회로와의 비교, 그림(decay-curve)은 Claude가 추가했습니다.
