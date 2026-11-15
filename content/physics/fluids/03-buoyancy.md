---
id: phys-fluid-buoyancy
title_ko: "부력 (아르키메데스 원리)"
title_en: "Buoyant force (Archimedes' principle)"
question: "부력의 크기와 물체가 뜨는 조건은?"
tags: [부력, 아르키메데스, 뜨기, 가라앉기, 잠긴 부피, buoyancy, Archimedes' principle]
importance: 3
related: [phys-fluid-hydrostatic-pressure]
source: "book:BLIS편입 일반물리 11-06~08"
verified: false
---

## formula
$$
F_b = \rho_{\text{fluid}}V_{\text{sub}}\,g
$$

$$
\text{floating: } \frac{V_{\text{sub}}}{V} = \frac{\rho_{\text{object}}}{\rho_{\text{fluid}}}
$$

## conditions
- $V_{\text{sub}}$: 유체에 잠긴 부분의 부피. 둘째 식은 떠서 평형일 때.

## explanation
::fig buoyancy-forces | 아랫면이 윗면보다 깊어서, 위로 미는 힘이 아래로 누르는 힘보다 크다. 그 차이가 부력이다.

### 식이 나오는 과정
먼저 떠올릴 것: 깊이 $h$만큼 더 내려가면 압력이 $\rho gh$만큼 커진다 (앞 카드).
밑넓이 $A$, 높이 $h$인 상자가 물에 잠겨 있으면 아랫면의 압력이 윗면보다 $\rho gh$만큼 크다. 힘은 압력 × 넓이이므로

$$
F_b = (\rho gh)\,A = \rho g\,(Ah) = \rho_{\text{fluid}}\,V g
$$

$Ah$는 상자의 부피다. 식에 들어가는 밀도는 물체가 아니라 유체의 밀도라는 점에 주의한다. 옆면이 받는 힘은 좌우가 같아 지워진다.

### 쉽게 말하면
물체 아래쪽이 위쪽보다 깊어서 더 큰 압력을 받는다. 그 차이가 위로 미는 힘(부력)이고, 크기는 "잠긴 부분만큼의 유체 무게"와 같다. 물체가 무엇으로 만들어졌는지와 무관하다.

### 뜰까 가라앉을까
- 다 잠겼다고 가정하고 밀도를 비교: 물체가 더 가벼우면 떠오르고, 무거우면 가라앉고, 같으면 어디서든 멈춘다.
- 뜨는 물체는 잠긴 부피가 줄어들어 부력 = 무게가 될 때까지 올라온다. 잠긴 비율 = 밀도 비. (얼음은 약 90% 잠김)
- 줄에 매달린 물체의 겉보기 무게 = 무게 − 부력.
- 저울 위 물그릇에 물체를 매달아 넣으면 저울 눈금이 부력만큼 증가 (작용·반작용).

## story
물속의 돌을 들어 올리면 가볍게 느껴진다. 돌이 차지한 자리에 원래 있었을 물을 주변 물이 떠받치던 그 힘으로 돌도 떠받쳐 주기 때문이다.

## supplement
교재 내용을 옮기고, 쉬운 설명·스토리는 Claude가 추가했습니다. 쉬운 설명·그림 보강: 부력 식 유도와 그림(buoyancy-forces).
