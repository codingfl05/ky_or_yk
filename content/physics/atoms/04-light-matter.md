---
id: phys-atom-light-matter
title_ko: "빛과 물질의 상호작용: 흡수, 자발 방출, 유도 방출"
title_en: "absorption, spontaneous emission and stimulated emission"
question: "원자가 빛과 에너지를 주고받는 세 가지 과정과 레이저의 원리는?"
tags: [흡수, 자발 방출, 유도 방출, 레이저, 들뜬 상태, absorption, spontaneous emission, stimulated emission, laser]
importance: 1
related: [phys-atom-hydrogen-energy, phys-qm-photon, phys-qm-infinite-well]
source: "book:BLIS편입 일반물리 23-12"
verified: false
---

## formula
$$
hf = E_x - E_0
$$

## conditions
- $E_0$: 낮은 준위, $E_x$: 높은 준위(들뜬 상태).
- 세 과정 모두 광자의 에너지가 두 준위의 차이와 꼭 같아야 한다.

## explanation
### 먼저 떠올릴 것
- 원자 속 전자의 에너지는 띄엄띄엄한 준위만 가능하다.
- 준위를 옮기려면 그 차이만큼의 에너지를 가진 광자를 주고받는다.

### 세 가지 과정
| 과정 | 처음 | 나중 |
|---|---|---|
| 흡수 | 광자 1개 + 낮은 준위의 전자 | 높은 준위의 전자 |
| 자발 방출 | 높은 준위의 전자 | 낮은 준위의 전자 + 광자 1개 |
| 유도 방출 | 광자 1개 + 높은 준위의 전자 | 낮은 준위의 전자 + 광자 2개 |

- 자발 방출(spontaneous emission): 들뜬 전자가 저절로 떨어지며 광자를 낸다. 나오는 광자의 방향과 위상은 제멋대로다. 보통의 전등 빛이 이렇다.
- 유도 방출(stimulated emission): 들뜬 전자에 딱 맞는 에너지의 광자를 쏘면, 전자가 떨어지면서 들어온 광자와 진동수, 방향, 위상이 모두 같은 광자를 하나 더 낸다. 광자 1개가 2개가 된다.

### 레이저의 원리
유도 방출로 나온 똑같은 광자 2개가 다른 들뜬 원자들을 만나 4개, 8개로 불어난다. 이렇게 증폭된 빛이 레이저(LASER, light amplification by stimulated emission of radiation)다.
- 그래서 레이저 빛은 색이 하나이고(단색), 위상이 가지런하며, 한 방향으로 곧게 나간다.
- 증폭이 일어나려면 높은 준위에 있는 원자가 낮은 준위에 있는 원자보다 많아야 한다. 그렇지 않으면 흡수가 더 많이 일어난다.

## supplement
교재 내용을 옮기고, 세 과정 비교 표와 "높은 준위의 원자가 더 많아야 한다"는 조건은 Claude가 추가했습니다.
