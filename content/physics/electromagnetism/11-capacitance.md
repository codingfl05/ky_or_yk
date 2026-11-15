---
id: phys-em-capacitance
title_ko: "전기용량과 축전기"
title_en: "Capacitance"
question: "전기용량의 정의와 평행판·원통·구형 축전기의 전기용량은?"
tags: [전기용량, 축전기, 평행판, 원통형, 구형, capacitance, capacitor, parallel plate]
importance: 3
related: [phys-em-capacitor-energy, phys-em-dielectric, phys-circ-series-parallel]
source: "book:BLIS편입 일반물리 15-02~08"
verified: false
---

## formula
$$
q = CV, \qquad C_{\text{parallel}} = \frac{\varepsilon_0 A}{d}
$$

$$
C_{\text{cylinder}} = \frac{2\pi\varepsilon_0 L}{\ln(b/a)}
$$

$$
C_{\text{sphere}} = 4\pi\varepsilon_0\frac{ab}{b-a}
$$

$$
C_{\text{isolated sphere}} = 4\pi\varepsilon_0 a
$$

## conditions
- $V$는 두 극판 사이 전위차의 크기. 단위 $\text{F} = \text{C/V}$ (보통 $\mu\text{F}$~$\text{pF}$).
- 원통·구: 안쪽 반지름 $a$, 바깥 반지름 $b$. 고립된 도체구는 $b\to\infty$.
- 평행판 사이 전기장 $E=\dfrac{\sigma}{\varepsilon_0}=\dfrac{q}{\varepsilon_0A}$, 전위차 $V=Ed$.

## explanation
::fig parallel-plate | 평행판 축전기: 두 판 사이에만 균일한 전기장이 있다.
::fig capacitor-tank | 물의 양 = 전하 q, 물 높이 = 전압 V, 바닥 넓이 = 전기용량 C.

### 쉽게 말하면
축전기(capacitor)는 전하를 담아 두는 그릇이고, 전기용량(capacitance) $C$는 그 그릇의 크기다. 같은 전위차 $V$를 걸었을 때 $C$가 클수록 전하가 많이 담긴다.

- $C$는 모양(넓이, 간격)만으로 정해진다. 전하나 전압을 바꿔도 $C$는 그대로.
- 평행판: 넓을수록, 가까울수록 크다.

### 구하는 순서 (3단계)
1. 가우스 법칙으로 $q$와 $E$의 관계: $\varepsilon_0 EA = q$
2. 전위의 정의로 $E$와 $V$의 관계: $V = \int_{+}^{-} E\,ds$ ($+$판에서 $-$판까지, 크기만)
3. $C = \dfrac{q}{V}$ — 이때 $q$가 약분되어 사라진다.

### 한 번 따라 하기: 평행판
앞에서 배운 두 가지만 쓴다.
1. 도체 표면의 전기장 (가우스 법칙): $E = \dfrac{\sigma}{\varepsilon_0}$. 면밀도는 $\sigma = \dfrac{q}{A}$이므로 $E = \dfrac{q}{\varepsilon_0A}$.
2. 균일한 전기장에서의 전위차 (전위의 정의): $V = Ed = \dfrac{qd}{\varepsilon_0A}$.
3. 나누면 $C = \dfrac{q}{V} = \dfrac{\varepsilon_0A}{d}$. 전하 $q$가 약분되어 모양($A$, $d$)만 남는다.

넓으면($A$ 큼) 같은 전하가 넓게 퍼져 전기장이 약해지고, 가까우면($d$ 작음) 전기장을 따라 걷는 거리가 짧아 전압이 작다. 둘 다 "같은 전하를 낮은 전압으로 담는다", 곧 $C$가 크다는 뜻이다.

## story
물탱크를 생각하자. 탱크 바닥 넓이가 전기용량 $C$, 물 높이가 전압 $V$, 담긴 물의 양이 전하 $q$다. 바닥이 넓은 탱크일수록 같은 높이까지 채우는 데 물이 많이 든다 ($q=CV$).

## derivation
원통형: $E(2\pi rL)\varepsilon_0 = q$ → $E=\dfrac{q}{2\pi\varepsilon_0 Lr}$ → $V=\displaystyle\int_a^b\frac{q}{2\pi\varepsilon_0 Lr}dr = \frac{q}{2\pi\varepsilon_0L}\ln\frac{b}{a}$

구형: $E=\dfrac{q}{4\pi\varepsilon_0r^2}$ → $V=\dfrac{q}{4\pi\varepsilon_0}\left(\dfrac{1}{a}-\dfrac{1}{b}\right)$ → $C=4\pi\varepsilon_0\dfrac{ab}{b-a}$

## supplement
교재 내용을 옮기고, 쉬운 설명·스토리는 Claude가 추가했습니다. 쉬운 설명·그림 보강: 평행판 전기용량 유도를 단계별로, 그림(parallel-plate, capacitor-tank).
