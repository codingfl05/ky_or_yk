---
id: phys-em-dielectric
title_ko: "유전체를 넣은 축전기"
title_en: "Capacitors with dielectrics"
question: "유전체를 넣으면 C, V, E, q, U가 어떻게 바뀌는가? (전하 일정 vs 전압 일정)"
tags: [유전체, 유전 상수, 축전기, 전하 일정, 전압 일정, dielectric, dielectric constant, capacitor]
importance: 3
related: [phys-em-capacitance, phys-em-capacitor-energy]
source: "book:BLIS편입 일반물리 15-16~20"
verified: false
---

## formula
$$
C = \kappa C_0, \qquad \varepsilon_0 \to \kappa\varepsilon_0
$$

$$
q\ \text{fixed: } V = \frac{V_0}{\kappa},\ E = \frac{E_0}{\kappa},\ U = \frac{U_0}{\kappa}
$$

$$
V\ \text{fixed: } q = \kappa q_0,\ E = E_0,\ U = \kappa U_0
$$

## conditions
- $\kappa\ge1$: 유전 상수(dielectric constant). 진공 $1$, 공기 $\approx1$. 축전기 사이를 빈틈없이 채웠을 때.
- 전하 일정 = 충전 후 배터리를 뗀 상태. 전압 일정 = 배터리가 계속 연결된 상태.

## explanation
### 쉽게 말하면
유전체(dielectric, 부도체)를 넣으면 안의 원자들이 전기장 때문에 살짝 늘어나 쌍극자가 된다. 이 쌍극자들이 원래 전기장과 반대 방향의 전기장을 만들어 전기장이 약해진다 ($E=E_0-E'$). 그래서 같은 전하로 더 낮은 전압이 걸리고, 결과적으로 $C$가 $\kappa$배 커진다.

### 문제의 핵심: 배터리가 붙어 있나?
- 떼었으면 (전하 일정): 전하가 못 들어오고 못 나가니 $q$ 고정 → $V$, $E$가 $\dfrac{1}{\kappa}$배, 에너지 $\dfrac{q^2}{2C}$도 $\dfrac{1}{\kappa}$배로 감소.
- 붙어 있으면 (전압 일정): 배터리가 전압을 유지하려고 전하를 더 보낸다 → $q$가 $\kappa$배, $E$는 그대로, 에너지 $\dfrac{1}{2}CV^2$는 $\kappa$배로 증가.
- 어느 경우든 $C$는 $\kappa$배.

### 도체판을 넣으면
도체 안은 $E=0$이라 그만큼 간격이 줄어든 효과 → 두께 $b$인 도체판이면 $C=\dfrac{\varepsilon_0A}{d-b}$.

## story
방에 사람(전하)이 들어와 있는데, 유전체는 "분위기를 누그러뜨리는 사람"이다. 문이 잠겨 있으면(배터리 뗌) 인원은 그대로고 분위기(전압)만 누그러진다. 문이 열려 있으면(배터리 연결) 분위기가 누그러진 만큼 사람이 더 들어와 원래 분위기를 회복한다.

## example
$C=12\,\mu\text{F}$를 $2\,\text{V}$로 충전 후 전원 제거, $\kappa=6$인 유전체로 채움 (교재 예제):

$$
U_0=\frac{1}{2}(12\times10^{-6})(2)^2=24\,\mu\text{J}
$$

$$
U=\frac{U_0}{\kappa}=4\,\mu\text{J}
$$

## supplement
교재 내용을 옮기고, 쉬운 설명·스토리는 Claude가 추가했습니다. 에너지 변화, 도체판 공식, 예제 풀이는 Claude가 추가·계산했습니다.
