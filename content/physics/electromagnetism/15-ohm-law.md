---
id: phys-em-ohm-law
title_ko: "옴의 법칙, 비저항, 전력"
title_en: "Ohm's law, resistivity and power"
question: "옴의 법칙, 저항과 비저항의 관계, 전력 공식은?"
tags: [옴의 법칙, 저항, 비저항, 전기전도도, 전력, Ohm's law, resistance, resistivity, power]
importance: 3
related: [phys-em-current-drift, phys-circ-series-parallel, phys-circ-kirchhoff]
source: "book:BLIS편입 일반물리 15-28~30"
verified: false
---

## formula
$$
V = iR, \qquad R = \rho\frac{L}{A}, \qquad \mathbf{E} = \rho\mathbf{J}, \qquad \sigma = \frac{1}{\rho}
$$

$$
P = iV = i^2R = \frac{V^2}{R}
$$

## conditions
- 옴의 법칙은 $V$와 $i$가 비례하는 물질(옴성 물질)에서 성립. 단위 $\Omega = \text{V/A}$, 비저항 $\Omega\cdot\text{m}$.
- 비저항(resistivity) $\rho$는 물질 고유값이지만 온도에 따라 변한다. 회로의 도선 저항은 보통 무시.

## explanation
### 쉽게 말하면
저항은 전하의 흐름을 방해하는 정도다. 길수록 방해받는 구간이 길어 커지고, 굵을수록 길이 넓어 작아진다 ($R=\rho\frac{L}{A}$). 모양 효과를 빼고 물질 자체의 성질만 남긴 게 비저항 $\rho$다.

### 전력 식 고르기
- 같은 전압에 연결된 것끼리 비교 → $P=\dfrac{V^2}{R}$ (저항이 작을수록 전력 큼)
- 같은 전류가 흐르는 것끼리(직렬) 비교 → $P=i^2R$ (저항이 클수록 전력 큼)

예) $72\,\Omega$ 전선에 $120\,\text{V}$ → $200\,\text{W}$. 반으로 잘라 각각 $36\,\Omega$에 $120\,\text{V}$를 걸면 하나에 $400\,\text{W}$, 합 $800\,\text{W}$ (4배).

## story
저항은 복도다. 복도가 길수록, 좁을수록 사람(전하)이 지나가기 힘들다. 복도 바닥 재질(비저항)이 미끄러운지 거친지는 복도 모양과 상관없는 성질이다.

## derivation
전자 수준: 충돌 사이 평균 시간 $\tau$ 동안 $a=\dfrac{eE}{m}$로 가속 → $v_d=\dfrac{eE\tau}{m}$. $J=nev_d$와 합치면

$$
\rho = \frac{E}{J} = \frac{m}{e^2n\tau}
$$

## supplement
교재 내용을 옮기고, 쉬운 설명·스토리는 Claude가 추가했습니다. 예시(전선 자르기) 계산은 Claude가 했습니다.
