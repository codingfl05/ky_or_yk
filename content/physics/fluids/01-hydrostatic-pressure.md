---
id: phys-fluid-hydrostatic-pressure
title_ko: "밀도, 압력, 깊이에 따른 압력"
title_en: "Density, pressure and hydrostatic pressure"
question: "정지한 유체에서 깊이 h인 곳의 압력은?"
tags: [밀도, 압력, 정수압, 대기압, 계기 압력, density, pressure, hydrostatic pressure]
importance: 3
related: [phys-fluid-pascal, phys-fluid-buoyancy, phys-fluid-bernoulli]
source: "book:BLIS편입 일반물리 11-02~04"
verified: false
---

## formula
$$
\rho = \frac{m}{V}, \qquad P = \frac{F}{A}
$$

$$
P = P_0 + \rho gh, \qquad \Delta P = \rho g\,\Delta h
$$

## conditions
- 정지한 유체, 밀도 일정(비압축성). $P_0$는 수면의 압력(보통 대기압 $1.01\times10^5\,\text{Pa}$).
- 압력은 스칼라. 한 점의 압력은 모든 방향으로 같고, 면에는 수직으로 힘을 준다.

## explanation
### 쉽게 말하면
유체는 담는 그릇 모양에 따라 바뀌니까 질량 대신 밀도, 힘 대신 압력을 쓴다. 깊이 $h$인 곳은 그 위에 쌓인 유체 기둥의 무게 $\rho gh$만큼 더 눌린다.

- 압력은 깊이로만 정해진다. 그릇 모양, 가로 위치와 무관 (같은 깊이면 같은 압력).
- 계기 압력(gauge pressure) $= P - P_0 = \rho gh$.
- 수은 기압계: 대기압이 $760\,\text{mm}$ 수은 기둥을 떠받친다.
- U자관에 두 액체: 경계면과 같은 높이의 두 점에서 압력이 같다고 놓는다.

## story
수영장 바닥으로 잠수하면 귀가 아프다. 머리 위에 쌓인 물의 무게가 그만큼 누르기 때문이다. 바닥이 넓은 수영장이든 좁은 우물이든 같은 깊이면 귀가 아픈 정도는 같다.

## supplement
교재 내용을 옮기고, 쉬운 설명·스토리는 Claude가 추가했습니다.
