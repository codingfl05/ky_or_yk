---
id: phys-em-capacitor-energy
title_ko: "축전기의 에너지와 전기장 에너지 밀도"
title_en: "Energy stored in a capacitor"
tags: [축전기, 전기 에너지, 에너지 밀도, capacitor energy, energy density]
importance: 2
related: [phys-em-capacitance, phys-em-dielectric, phys-em-inductance]
source: "book:BLIS편입 일반물리 15-14"
verified: false
---

## formula
$$
U = \frac{q^2}{2C} = \frac{1}{2}CV^2 = \frac{1}{2}qV, \qquad u = \frac{1}{2}\varepsilon_0E^2
$$

## conditions
- $u$는 단위 부피당 에너지. 평행판에서 유도했지만 모든 전기장에 성립 (진공).

## explanation
### 쉽게 말하면
충전은 저절로 되지 않는다. 이미 쌓인 전하가 새로 들어오는 전하를 밀어내니, 배터리가 일을 해서 밀어 넣어야 한다. 그 일이 축전기에 퍼텐셜 에너지로 저장된다.

- $\dfrac{1}{2}$이 붙는 이유: 처음엔 전압 0에서 시작해 끝에 $V$가 되므로, 평균 전압 $\dfrac{V}{2}$로 전하 $q$를 옮긴 셈.
- 에너지는 극판이 아니라 극판 사이의 전기장 속에 저장된다고 볼 수 있다 ($u=\frac{1}{2}\varepsilon_0E^2$).
- 상황에 맞는 식 고르기: 전하가 고정이면 $\dfrac{q^2}{2C}$, 전압이 고정이면 $\dfrac{1}{2}CV^2$.

## story
풍선에 공기를 불어 넣는 것과 같다. 처음엔 쉽지만 공기가 찰수록 안에서 미는 힘이 세져 점점 힘들어진다. 넣은 수고가 풍선 안에 에너지로 쌓인다.

## derivation
$$
U = \int_0^q V\,dq' = \int_0^q\frac{q'}{C}\,dq' = \frac{q^2}{2C}
$$

평행판에서 $u=\dfrac{U}{Ad}=\dfrac{CV^2}{2Ad}=\dfrac{1}{2}\varepsilon_0\left(\dfrac{V}{d}\right)^2=\dfrac{1}{2}\varepsilon_0E^2$

## supplement
교재 내용을 옮기고, 쉬운 설명·스토리는 Claude가 추가했습니다.
