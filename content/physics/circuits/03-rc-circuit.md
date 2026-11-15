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
::fig rc-curves | 충전할 때 전하는 차오르고 전류는 줄어든다. 시간 상수 τ가 지나면 전하는 63%까지 차고 전류는 37%로 줄어든다.

### 지수 함수 $e^{-t/\tau}$ 읽는 법
- $t = 0$에서 1로 시작해, 시간이 $\tau$만큼 지날 때마다 약 $0.37$배($\dfrac{1}{e}$)로 줄어든다. $\tau$가 지나면 37%, $2\tau$면 14%, $5\tau$면 1% 미만이라 "거의 끝났다"고 본다.
- $1 - e^{-t/\tau}$는 그 반대로 0에서 출발해 1을 향해 차오르는 곡선이다.
- $\tau = RC$가 크면 느리다. 저항이 크면 전하가 천천히 들어오고($R$), 그릇이 크면 채울 양이 많기($C$) 때문이다.

### 앞 개념과 이어 보기
축전기 전압은 $V_C = \dfrac{q}{C}$ (전기용량의 정의), 저항 전압은 $V_R = iR$ (옴의 법칙)이다. 한 바퀴 돌면 전위 변화의 합이 0이므로 (고리 법칙) $V_0 = V_R + V_C$가 매 순간 성립한다. 처음에는 $q = 0$이라 전압을 전부 저항이 가져가 전류가 최대이고, 축전기가 찰수록 저항 몫이 줄어 전류가 줄어든다.

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
교재 내용을 옮기고, 쉬운 설명·스토리는 Claude가 추가했습니다. 예제 풀이는 Claude가 계산했습니다. 쉬운 설명·그림 보강: 지수 함수 읽는 법, 고리 법칙과 연결한 설명, 그림(rc-curves).
