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
교재 내용을 옮기고, 쉬운 설명·스토리는 Claude가 추가했습니다. 예제 풀이는 Claude가 계산했습니다.
