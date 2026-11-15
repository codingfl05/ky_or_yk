---
id: phys-circ-rl-circuit
title_ko: "RL 회로 (전류 켜기와 끄기)"
title_en: "RL circuits"
question: "RL 회로의 전류 식과 시간 상수, t = 0과 t → ∞에서 코일은 무엇처럼 보이는가?"
tags: [RL 회로, 시간 상수, 코일, 인덕터, RL circuit, time constant, inductor]
importance: 3
related: [phys-circ-rc-circuit, phys-em-inductance, phys-circ-kirchhoff]
source: "book:BLIS편입 일반물리 18-16~20"
verified: false
---

## formula
$$
\text{on: } i(t) = \frac{V_0}{R}\left(1-e^{-t/\tau_L}\right)
$$

$$
\text{off: } i(t) = i_0e^{-t/\tau_L}
$$

$$
\tau_L = \frac{L}{R}
$$

$$
V_L = L\frac{di}{dt}
$$

## conditions
- on: 전원 $V_0$를 연결해 전류가 흐르기 시작할 때. off: 전원을 빼고 코일과 저항만 남았을 때 ($i_0=\dfrac{V_0}{R}$).

## explanation
::fig rc-curves | RL 회로를 켤 때는 전류가 왼쪽 곡선처럼 차오르고(최종값 V₀/R), 코일 전압이 오른쪽 곡선처럼 줄어든다. 시간 상수는 τ = L/R.

### 먼저 떠올릴 것: 코일의 전압
코일은 전류가 변할 때만 전압이 생긴다: $V_L = L\dfrac{di}{dt}$ (인덕턴스 카드). $\dfrac{di}{dt}$는 전류가 1초에 얼마나 변하는가다. 전류가 급하게 변하려 할수록 코일이 크게 버틴다.
- 스위치를 닫는 순간: 전류가 0에서 갑자기 커지려 하니 코일이 전원 전압을 전부 받아 낸다 ($V_L = V_0$, $i = 0$).
- 시간이 지나면: 전류가 서서히 커지며 변화가 느려지고, 결국 전류가 일정해지면 $\dfrac{di}{dt} = 0$이라 코일은 그냥 도선이 된다.

### 쉽게 말하면
코일은 축전기와 정반대로 "처음엔 끊긴 선, 나중엔 도선"이다.

| | $t=0$ | $t\to\infty$ |
|---|---|---|
| 켜기 | 전류 변화를 막아 끊긴 선 ($i=0$, $V_L=V_0$) | 전류 일정 → 그냥 도선 ($i=\dfrac{V_0}{R}$) |
| 끄기 | 전류를 붙잡아 전원 역할 ($i=i_0$) | 다 줄어 0 |

- 시간 상수 $\tau=\dfrac{L}{R}$ (RC와 달리 $R$이 분모).
- 켤 때 $V_L=V_0e^{-t/\tau}$, $V_R=V_0(1-e^{-t/\tau})$.
- 끌 때 $V_L$이 음수로 나오는 건 코일이 전압을 "먹는" 게 아니라 "만들어" 전류를 밀어 주고 있다는 뜻.

## story
무거운 수레(코일)를 밀기 시작하면 처음엔 꿈쩍도 안 하다가(전류 0) 점점 속도가 붙어 일정해진다. 손을 떼도 바로 서지 않고 한동안 굴러간다(전류 유지).

## example
전류가 최종값의 절반이 되는 시간 (교재 예제): $1-e^{-tR/L}=\dfrac{1}{2}$ → $t=\dfrac{L}{R}\ln2$

## supplement
교재 내용을 옮기고, 쉬운 설명·스토리는 Claude가 추가했습니다. 예제 풀이는 Claude가 계산했습니다. 쉬운 설명·그림 보강: 코일 전압 복습과 그림(rc-curves 재사용).
