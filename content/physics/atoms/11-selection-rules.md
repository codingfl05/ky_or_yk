---
id: phys-atom-selection-rules
title_ko: "전이의 선택 규칙"
title_en: "selection rules for transitions"
question: "전자가 광자를 내거나 받으며 전이할 때 l과 m_l은 얼마나 변할 수 있는가?"
tags: [선택 규칙, 전이, 각운동량 보존, 광자의 각운동량, selection rules, transition, angular momentum conservation]
importance: 2
related: [phys-atom-quantum-numbers, phys-atom-hydrogen-energy, phys-atom-orbital-angular-momentum]
source: "book:BLIS편입 일반물리 23-38"
verified: false
---

## formula
$$
\Delta l = \pm 1
$$

$$
\Delta m_l = 0, \pm 1
$$

## conditions
- 전자가 광자 1개를 방출하거나 흡수하며 준위를 옮길 때(전이)의 규칙.
- 주 양자수 $n$의 변화에는 제한이 없다.

## explanation
### 먼저 떠올릴 것
- 전이할 때 에너지가 보존된다: 광자의 에너지 = 두 준위의 차이.
- 각운동량도 보존되어야 한다. 전자의 궤도 각운동량은 $l$로 정해진다.

### 쉽게 말하면
광자도 각운동량을 가진다 (스핀 1인 입자다). 광자 하나가 나가거나 들어오면 그만큼의 각운동량을 가지고 가거나 가져온다. 그러니 전자의 궤도 각운동량도 그만큼, 곧 $l$이 정확히 1만큼 변해야 한다.

### 허용과 금지
| 전이 | $\Delta l$ | 가능한가 |
|---|---|---|
| $2p \to 1s$ | $-1$ | 허용 |
| $3d \to 2p$ | $-1$ | 허용 |
| $3s \to 2p$ | $+1$ | 허용 |
| $2s \to 1s$ | $0$ | 금지 |
| $3d \to 1s$ | $-2$ | 금지 |

글자로 보면 $s \leftrightarrow p \leftrightarrow d \leftrightarrow f$처럼 이웃한 글자 사이로만 옮겨 간다.

### 한 번 따라 하기
$3p$에 있는 전자가 광자 하나를 내며 갈 수 있는 곳은?
- 에너지가 더 낮아야 하고 $l$이 $1 \to 0$ 또는 $1 \to 2$로 바뀌어야 한다.
- $l = 0$: $2s$, $1s$. $l = 2$: $n \ge 3$이어야 하므로 더 낮은 $d$ 준위가 없다.
- 답: $3p \to 2s$, $3p \to 1s$.

### 자주 틀리는 포인트
- $\Delta l = 0$은 안 된다 (같은 글자끼리 금지). $\Delta m_l = 0$은 된다.
- 수소에서 에너지는 $n$만으로 정해지므로 $3s$, $3p$, $3d$의 에너지는 같다. 선택 규칙은 에너지가 아니라 "어느 오비탈에서 어느 오비탈로" 가는지에 대한 규칙이다.

## supplement
교재 내용을 옮기고, 허용·금지 표와 예는 Claude가 추가했습니다.
