---
id: phys-mech-connected-bodies
title_ko: "여러 물체가 함께 움직일 때 (한 덩어리로 보기)"
title_en: "Systems of connected bodies"
question: "함께 움직이는 여러 물체의 가속도와 서로 주고받는 힘은 어떻게 구하는가?"
tags: [연결된 물체, 내력, 장력, 도르래, 애트우드, connected bodies, internal force, pulley, Atwood]
importance: 3
related: [phys-mech-newton-second-law, phys-mech-normal-friction]
source: "book:BLIS편입 일반물리 2-20~22"
verified: false
---

## formula
$$
a = \frac{F_{\text{ext}}}{m_1 + m_2 + \cdots}, \qquad \text{Atwood: } a = \frac{(m_1 - m_2)g}{m_1 + m_2},\quad T = \frac{2m_1m_2g}{m_1+m_2}
$$

## conditions
- 모든 물체가 같은 크기의 가속도로 움직일 때 (줄이 늘어나지 않고 팽팽함).
- 애트우드 기계: 질량 없는 줄과 도르래로 연결된 두 물체 ($m_1 > m_2$).

## explanation
### 순서
1. 전체를 한 덩어리로 본다. 물체끼리 주고받는 힘(내력)은 작용·반작용이라 서로 지워진다.
2. 바깥에서 오는 힘(외력)만으로 $a = \dfrac{F_{\text{ext}}}{M_{\text{total}}}$.
3. 내력(장력, 접촉력)이 필요하면 물체 하나만 떼어 내 $F = ma$를 세운다. 이때는 내력이 외력이 된다.

### 예
마찰 없는 바닥에서 $m_A$, $m_B$를 나란히 놓고 A를 $F$로 밀면 $a = \dfrac{F}{m_A + m_B}$, A가 B를 미는 힘은 B만 보면 $m_Ba = \dfrac{m_B}{m_A+m_B}F$.

애트우드는 "더 무거운 쪽으로 끄는 알짜힘 $(m_1 - m_2)g$가 전체 질량을 움직인다"로 이해한다.

## story
기차를 끄는 기관차를 생각하자. 기차 전체의 가속도는 기관차가 선로를 미는 힘과 전체 무게로 정해진다. 객차를 잇는 고리에 걸리는 힘은 그다음에, 그 고리 뒤에 매달린 객차들만 떼어 보면 나온다.

## supplement
교재 내용을 옮기고, 쉬운 설명·스토리는 Claude가 추가했습니다.
