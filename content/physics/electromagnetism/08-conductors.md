---
id: phys-em-conductors
title_ko: "정전기 평형의 도체"
title_en: "Conductors in electrostatic equilibrium"
question: "정전기 평형인 도체의 내부 전기장, 전하 위치, 전위, 표면 전기장은?"
tags: [도체, 정전기 평형, 등전위, 표면 전하, 접지, 공동, conductor, electrostatic equilibrium, equipotential]
importance: 3
related: [phys-em-gauss-applications, phys-em-electric-potential]
source: "book:BLIS편입 일반물리 13-32, 14-18"
verified: false
---

## formula
$$
\mathbf{E}_{\text{inside}} = 0
$$

$$
V = \text{const (equipotential)}
$$

$$
E_{\text{surface}} = \frac{\sigma}{\varepsilon_0}\ (\perp \text{surface})
$$

## conditions
- 전하가 더 이상 움직이지 않는 정전기 평형(electrostatic equilibrium) 상태일 때.

## explanation
### 쉽게 말하면
도체 안에는 자유롭게 움직이는 전자가 있다. 만약 도체 안에 전기장이 있으면 전자가 계속 움직여 전류가 흐를 텐데, 대전된 도체에 전류가 계속 흐르지는 않는다. 그러니 평형 상태에서는 도체 내부 전기장이 0이어야 한다.

여기서 나머지가 줄줄이 나온다.
1. 내부 $E=0$ → 도체 안에 가우스 면을 잡으면 $q_{\text{enc}}=0$ → 전하는 전부 바깥 표면에만 있다.
2. 내부 $E=0$ → 도체 안 어디서든 전위가 같다 (등전위). 표면도 등전위면.
3. 표면의 전기장은 표면에 수직이고 크기는 $\dfrac{\sigma}{\varepsilon_0}$ (수평 성분이 있으면 전하가 표면을 따라 움직였을 것).

### 공동(빈 구멍)이 있을 때
- 공동 안에 전하가 없으면: 공동 벽에도 전하가 없다 (전하는 가장 바깥 표면에만).
- 공동 안에 전하 $q$가 있으면: 공동 벽(안쪽 면)에 $-q$가 유도되고, 바깥 면에는 (도체 원래 전하 $+q$)가 모인다. 도체 속 가우스 면의 $q_{\text{enc}}$가 0이 되어야 하기 때문.

### 접지(ground)
접지는 그 도체의 전위를 0(무한대와 같게)으로 만든다는 뜻. 주변에 다른 전하가 없는 고립된 도체를 접지하면 전하가 빠져나가 0이 된다. 가까이에 다른 전하가 있으면 0이 되지 않고, 전위가 0이 되는 만큼의 유도 전하가 남는다.

## story
도체 안의 전자들은 "불만이 있으면 바로 움직이는" 사람들이다. 조금이라도 기울어진(전기장이 있는) 곳이 있으면 움직여서 평평하게 만들어 버린다. 그래서 평형이 되면 도체 안은 완전히 평평(E=0, V 일정)하다.

## supplement
교재 내용을 옮기고, 쉬운 설명·스토리는 Claude가 추가했습니다.
