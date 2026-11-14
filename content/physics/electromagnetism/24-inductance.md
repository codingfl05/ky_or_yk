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
L = \frac{N\Phi_B}{i}
$$

$$
L_{\text{solenoid}} = \mu_0n^2Al
$$

$$
\mathcal{E}_L = -L\frac{di}{dt}
$$

$$
\mathcal{E}_2 = -M\frac{di_1}{dt}\ (M_{12}=M_{21}=M)
$$

$$
U_B = \frac{1}{2}Li^2
$$

$$
u_B = \frac{B^2}{2\mu_0}
$$

## conditions
- 단위 $\text{H}=\text{T}\cdot\text{m}^2/\text{A}$. $A$는 솔레노이드 단면적, $l$은 길이.
- $u_B$는 단위 부피당 자기 에너지.

## explanation
### 용어 정리
- 자기선속(magnetic flux) $\Phi_B = \int \mathbf{B}\cdot d\mathbf{A}$: 한 감김(고리 하나)을 지나는 자기장 선의 양. 균일한 $B$가 면에 수직이면 $\Phi_B = BA$. 단위 $\text{Wb} = \text{T}\cdot\text{m}^2$.
- 자기선속결합(flux linkage) $N\Phi_B$: 감은 수 $N$을 곱한 값. 코일 전체가 "엮고 있는" 선속이고, 패러데이 법칙 $\mathcal{E} = -\dfrac{d(N\Phi_B)}{dt}$와 인덕턴스 정의에 들어가는 양이 이것이다. 단위는 $\Phi_B$와 같은 Wb (감은 수는 단위가 없음).
- 자체유도계수(self-inductance) $L$: 코일 자신의 전류 $i$가 만든 선속결합을 그 전류로 나눈 값, $L = \dfrac{N\Phi_{\text{self}}}{i}$. 바깥 자기장이 만든 선속은 $L$에 들어가지 않는다. $L$은 코일의 모양·감은 수로만 정해지는 상수다.
- 상호유도계수(mutual inductance) $M$: 다른 코일의 전류가 이 코일에 만든 선속결합을 그 전류로 나눈 값, $M = \dfrac{N_2\Phi_{21}}{i_1}$.

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
교재 내용을 옮기고, 쉬운 설명·스토리는 Claude가 추가했습니다. 상호 유도 M 공식과 예제 풀이는 Claude가 계산했습니다. 용어 정리(자기선속, 자기선속결합, 자체유도계수, 상호유도계수)는 뿌리물리 워크북 107번을 추가하면서 Claude가 보완했습니다.
