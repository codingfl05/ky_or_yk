---
id: phys-circ-ac-elements
title_ko: "교류 회로의 R, C, L (리액턴스와 위상)"
title_en: "Resistors, capacitors and inductors in AC circuits"
question: "교류에서 저항·축전기·코일의 전압과 전류 관계(리액턴스, 위상)는?"
tags: [교류, 리액턴스, 용량 리액턴스, 유도 리액턴스, 위상, AC circuit, reactance, phase]
importance: 3
related: [phys-circ-rlc-series, phys-circ-lc-oscillation]
source: "book:BLIS편입 일반물리 18-32~36"
verified: false
---

## formula
$$
v(t) = V_m\sin(\omega_d t)
$$

$$
V_R = I_RR\ (\text{in phase})
$$

$$
V_C = I_CX_C,\ X_C = \frac{1}{\omega_dC}\ (i\ \text{leads } 90^\circ)
$$

$$
V_L = I_LX_L,\ X_L = \omega_dL\ (i\ \text{lags } 90^\circ)
$$

## conditions
- $\omega_d$: 교류 전원의 각진동수. 리액턴스(reactance) 단위는 $\Omega$.

## explanation
### 쉽게 말하면
- 저항: 직류와 똑같다. 전압과 전류가 같이 오르내린다.
- 축전기: 전류가 먼저 흘러 들어와야 전하가 쌓이고 전압이 생긴다 → 전류가 전압보다 $90^\circ$ 앞선다. 진동수가 높을수록 충방전이 바빠 잘 통한다 ($X_C$ 작아짐). 직류($\omega_d=0$)는 막는다.
- 코일: 전류 변화를 싫어하니 전류가 늦게 따라온다 → 전류가 전압보다 $90^\circ$ 늦다. 진동수가 높을수록 변화가 빨라 더 막는다 ($X_L$ 커짐). 직류는 그냥 통과.

### 외우는 법
"ICE, ELI": 축전기(C)에서는 I가 E(전압)보다 먼저, 코일(L)에서는 E가 I보다 먼저.

- 리액턴스는 전류를 방해하지만 저항과 달리 평균 전력을 소모하지 않는다.
- LC 회로에 교류 전원을 연결하면 회로는 자기 고유 진동수가 아니라 전원의 진동수 $\omega_d$로 진동한다.

## story
축전기는 "먼저 돈(전류)을 넣어야 잔고(전압)가 생기는 통장", 코일은 "출발이 늦는 무거운 수레"라고 생각하면 위상 순서가 헷갈리지 않는다.

## supplement
교재 내용을 옮기고, 쉬운 설명·스토리는 Claude가 추가했습니다. 교재 18-36의 코일 설명 '전류가 90도만큼 느리다 (전류가 먼저 sin 최대값에 도달)'에서 괄호 안은 오타로 보입니다. 코일에서는 전압이 먼저 최대에 도달합니다.
