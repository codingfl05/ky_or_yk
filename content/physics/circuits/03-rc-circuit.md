---
id: phys-circ-rc-circuit
title_ko: "RC 회로 (충전과 방전)"
title_en: "RC circuits"
question: "RC 회로의 충전·방전 식과 시간 상수, t = 0과 t → ∞에서 축전기는 무엇처럼 보이는가?"
tags: [RC 회로, 충전, 방전, 시간 상수, 축전기, RC circuit, charging, discharging, time constant]
importance: 3
related: [phys-circ-rl-circuit, phys-em-capacitance, phys-circ-kirchhoff]
source: "book:BLIS편입 일반물리 18-08~12"
verified: false
---

## formula
$$
\text{charging: } q(t) = CV_0\left(1-e^{-t/RC}\right)
$$

$$
i(t) = \frac{V_0}{R}e^{-t/RC}
$$

$$
\text{discharging: } q(t) = q_0e^{-t/RC}
$$

$$
i(t) = -\frac{q_0}{RC}e^{-t/RC}
$$

$$
\tau_C = RC
$$

## conditions
- 충전: 빈 축전기에 전원 $V_0$를 연결. 방전: 충전된 축전기($q_0=CV_0$)에 저항만 연결.
- 방전 전류의 $-$는 충전 때와 반대 방향이라는 뜻.

## explanation
### 쉽게 말하면
축전기는 "처음엔 도선, 나중엔 끊긴 선"이다.

| | $t=0$ | $t\to\infty$ |
|---|---|---|
| 충전 | 빈 축전기 = 도선 ($i=\dfrac{V_0}{R}$ 최대) | 꽉 찬 축전기 = 끊긴 선 ($i=0$, $V_C=V_0$) |
| 방전 | 축전기가 전원 역할 ($i$ 최대) | 다 비어 아무 일도 없음 |

- 시간 상수 $\tau=RC$: 충전이 약 $63\%$($1-e^{-1}$) 되는 시간, 방전이 $37\%$($e^{-1}$) 남는 시간.
- 충전 중 $V_C = V_0(1-e^{-t/RC})$, $V_R = V_0e^{-t/RC}$, 항상 $V_C+V_R=V_0$.
- 복잡한 회로의 $t=0$, $t\to\infty$ 문제는 축전기를 도선 또는 끊긴 선으로 바꿔 그리면 저항 회로 문제가 된다.

## story
빈 물통에 호스로 물을 채우는 것과 같다. 처음엔 물이 콸콸 들어가지만(큰 전류), 물이 찰수록 안에서 밀어내는 압력이 세져 점점 느려지고, 꽉 차면 멈춘다.

## derivation
충전 고리 법칙: $V_0 - iR - \dfrac{q}{C} = 0$, $i=\dfrac{dq}{dt}$ →

$$
\begin{aligned}
&R\frac{dq}{dt}+\frac{q}{C}=V_0 \\
&\quad {}\Rightarrow \int_0^q\frac{dq}{q-CV_0} = -\int_0^t\frac{dt}{RC} \\
&\quad {}\Rightarrow q = CV_0\left(1-e^{-t/RC}\right)
\end{aligned}
$$

## example
충전 중 $V_C=V_R$가 되는 시간 (교재 예제): $1-e^{-t/RC}=e^{-t/RC}$ → $e^{-t/RC}=\dfrac{1}{2}$ → $t=RC\ln2$

## supplement
교재 내용을 옮기고, 쉬운 설명·스토리는 Claude가 추가했습니다. 예제 풀이는 Claude가 계산했습니다.
