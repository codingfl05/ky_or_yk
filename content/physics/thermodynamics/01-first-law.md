---
id: phys-thermo-first-law
title_ko: 열역학 제1법칙
title_en: First law of thermodynamics
importance: 3
tags: [내부에너지, 열, 일, 에너지 보존, internal energy, heat, work]
related: []
source: manual
verified: false
---

## formula
$$
\Delta E_{\text{int}} = Q - W
$$

## conditions
- 닫힌계(closed system).
- 부호 규약: $Q$는 계가 흡수한 열이면 $+$, $W$는 계(기체)가 외부에 한 일이면 $+$. 교재에 따라 $\Delta U = Q + W$(외부가 계에 한 일을 $+$)로 쓰기도 하니 문제의 규약을 먼저 확인.

## explanation
::fig pv-work | 압력-부피 그래프에서 곡선 아래 넓이가 기체가 외부에 한 일이다.

### 쉽게 말하면
기체의 내부 에너지는 통장 잔고다. 열 $Q$는 들어오는 돈, 기체가 피스톤을 밀며 한 일 $W$는 나가는 돈이다. 잔고의 변화는 (들어온 것) − (나간 것) $= Q - W$.
- 기체가 팽창하면 피스톤을 밀어 일을 한다 ($W > 0$). 압축되면 일을 받는다 ($W < 0$).
- 기체의 일이 $\int P\,dV$인 이유: 힘은 (압력) × (넓이), 일은 (힘) × (거리)이므로 $PA\,dx = P\,dV$. 부피가 변하는 동안 압력이 변하면 조금씩 나눠 더해야 해서 적분이다.

### 과정별로 무엇이 0인가
| 과정 | 조건 | 결과 |
|---|---|---|
| 등적 (부피 일정) | $W = 0$ | $\Delta E_{\text{int}} = Q$ |
| 단열 (열 출입 없음) | $Q = 0$ | $\Delta E_{\text{int}} = -W$ |
| 등온 (이상기체) | $\Delta E_{\text{int}} = 0$ | $Q = W$ |
| 순환 (제자리로) | $\Delta E_{\text{int}} = 0$ | $Q = W$ |

단열 팽창이면 열을 못 받은 채 일을 하니 잔고가 줄어 온도가 내려간다. 등온과 순환에서 $\Delta E_{\text{int}} = 0$인 것은 내부 에너지가 상태(이상기체는 온도)만으로 정해지기 때문이다.

에너지 보존 법칙(conservation of energy)의 열역학 버전. 내부에너지(internal energy)는 상태함수(state function)라서 경로와 무관하지만, $Q$와 $W$는 각각 경로에 따라 달라진다. 기체의 일은 $W = \int_{V_i}^{V_f} p\,dV$.

## example
이상기체 등온과정(isothermal): $\Delta E_{\text{int}} = 0$이므로

$$
Q = W = nRT\ln\frac{V_f}{V_i}
$$

## supplement
쉬운 설명·그림 보강: 쉬운 설명, 일의 식이 나오는 이유, 과정별 표, 그림(pv-work).
