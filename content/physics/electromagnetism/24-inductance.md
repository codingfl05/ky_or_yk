---
id: phys-em-inductance
title_ko: "인덕턴스 (자체 유도, 상호 유도, 자기 에너지)"
title_en: "Inductance"
question: "유도용량의 정의, 솔레노이드의 L, 자체 유도 기전력, 저장 에너지는?"
tags: [인덕턴스, 유도용량, 코일, 자체 유도, 상호 유도, 자기 에너지, inductance, inductor, self-induction, mutual induction]
importance: 3
related: [phys-em-faraday-law, phys-em-capacitor-energy, phys-circ-rl-circuit, phys-circ-lc-oscillation]
source: "book:BLIS편입 일반물리 17-18~20"
verified: false
---

## formula
$$
L = \frac{N\Phi_B}{i}, \qquad L_{\text{solenoid}} = \mu_0n^2Al, \qquad \mathcal{E}_L = -L\frac{di}{dt}
$$

$$
\mathcal{E}_2 = -M\frac{di_1}{dt}\ (M_{12}=M_{21}=M), \qquad U_B = \frac{1}{2}Li^2, \qquad u_B = \frac{B^2}{2\mu_0}
$$

## conditions
- 단위 $\text{H}=\text{T}\cdot\text{m}^2/\text{A}$. $A$는 솔레노이드 단면적, $l$은 길이.
- $u_B$는 단위 부피당 자기 에너지.

## explanation
### 쉽게 말하면
코일(inductor)은 "전류의 변화"를 싫어하는 소자다. 전류가 늘려고 하면 막고, 줄려고 하면 붙잡는다. 전류가 일정하면 아무 일도 안 하는 그냥 도선이다.

축전기와 짝을 이룬다.
| 축전기 | 코일 |
|---|---|
| $C=\dfrac{q}{V}$, $C=\dfrac{\varepsilon_0A}{d}$ | $L=\dfrac{N\Phi}{i}$, $L=\mu_0n^2Al$ |
| 전하를 저장 → 전기장 | 전류가 흐름 → 자기장 |
| $U_E=\dfrac{q^2}{2C}$ | $U_B=\dfrac{1}{2}Li^2$ |
| $u_E=\dfrac{1}{2}\varepsilon_0E^2$ | $u_B=\dfrac{B^2}{2\mu_0}$ |

- 상호 유도(mutual induction): 코일 1의 전류가 변하면 코일 2를 지나는 선속이 변해 코일 2에 기전력이 생긴다. 전원이 없는 코일에도 전류가 흐를 수 있다 (변압기의 원리).
- 큰 코일(반지름 $R_1$, $N_1$번) 중심의 작은 코일($R_2$, $N_2$번), $R_1\gg R_2$: $M=\dfrac{\mu_0N_1N_2\pi R_2^2}{2R_1}$.

## story
코일은 무거운 수레다. 정지한 수레를 밀기 시작하면 잘 안 움직이고(전류 증가 방해), 굴러가는 수레를 멈추려 하면 계속 굴러가려 한다(전류 감소 방해). 일정한 속도로 굴러갈 때는 아무 저항도 없다. 질량에 해당하는 것이 $L$이다.

## example
세기 $6\,\text{T}$인 자석의 두 극 사이 자기 에너지 밀도 (교재 예제):

$$
u_B=\frac{B^2}{2\mu_0}=\frac{36}{2(4\pi\times10^{-7})}\approx1.4\times10^7\,\text{J/m}^3
$$

## supplement
교재 내용을 옮기고, 쉬운 설명·스토리는 Claude가 추가했습니다. 상호 유도 M 공식과 예제 풀이는 Claude가 계산했습니다.
