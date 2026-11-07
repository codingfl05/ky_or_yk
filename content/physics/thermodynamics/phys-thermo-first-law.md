---
id: phys-thermo-first-law
title_ko: 열역학 제1법칙
title_en: First law of thermodynamics
formula: |
  \Delta E_{\text{int}} = Q - W
importance: 3
tags: [내부에너지, 열, 일, 에너지 보존, internal energy, heat, work]
related: []
source: manual
verified: false
---

## 조건
- 닫힌계(closed system).
- 부호 규약: $Q$는 계가 흡수한 열이면 $+$, $W$는 계(기체)가 외부에 한 일이면 $+$. 교재에 따라 $\Delta U = Q + W$(외부가 계에 한 일을 $+$)로 쓰기도 하니 문제의 규약을 먼저 확인.

## 설명
에너지 보존 법칙(conservation of energy)의 열역학 버전. 내부에너지(internal energy)는 상태함수(state function)라서 경로와 무관하지만, $Q$와 $W$는 각각 경로에 따라 달라진다. 기체의 일은 $W = \int_{V_i}^{V_f} p\,dV$.

## 예제
이상기체 등온과정(isothermal): $\Delta E_{\text{int}} = 0$이므로

$$
Q = W = nRT\ln\frac{V_f}{V_i}
$$
