---
id: phys-mech-energy-conservation
title_ko: "역학적 에너지 보존과 비보존력의 일"
title_en: "Conservation of mechanical energy"
question: "역학적 에너지는 언제 보존되고, 보존되지 않을 때는 어떻게 쓰는가?"
tags: [역학적 에너지, 에너지 보존, 비보존력, 마찰, mechanical energy, conservation of energy, non-conservative force]
importance: 3
related: [phys-mech-conservative-potential, phys-mech-work-energy-theorem]
source: "book:BLIS편입 일반물리 4-10~16"
verified: false
---

## formula
$$
K_i + U_i = K_f + U_f \quad (\text{conservative forces only})
$$

$$
W_{\text{nc}} = \Delta E_{\text{mec}} = \Delta K + \Delta U
$$

## conditions
- $W_{\text{nc}}$: 비보존력이 한 일. 운동 마찰력이면 $-f_kd$ (열 에너지 $f_kd$로 빠져나감).
- 정지 마찰력은 미끄러짐이 없어서 일을 하지 않는다 (굴러가는 물체).

## explanation
### 세 가지 관계
| 무엇이 | 무엇을 바꾸나 |
|---|---|
| 알짜힘 | 운동 에너지 ($W_{\text{net}} = \Delta K$) |
| 보존력 | 퍼텐셜 에너지 ($W_c = -\Delta U$) |
| 비보존력 | 역학적 에너지 ($W_{\text{nc}} = \Delta E_{\text{mec}}$) |

### 문제풀이 순서
1. 처음과 끝 상태를 정한다 (속력, 높이, 용수철 길이).
2. 비보존력이 일을 하는지 본다 (마찰, 외력).
3. 없으면 $K + U$가 같다고 놓고, 있으면 그 일만큼 차이를 둔다.

경로 모양(곡면, 미끄럼틀)은 몰라도 된다. 처음과 끝만 본다. 단, 원운동의 "꼭대기를 지나려면" 같은 조건은 에너지만으로 안 되고 구심력 조건($mg \le \frac{mv^2}{r}$)을 함께 쓴다.

### 충돌은 예외
충돌 순간에는 큰 내력이 열·소리를 만들어 역학적 에너지가 보통 보존되지 않는다. 충돌은 운동량으로 풀고, 충돌 전후 구간만 에너지로 푼다.

## story
통장(퍼텐셜)과 지갑(운동 에너지)의 합이 전 재산(역학적 에너지)이다. 보존력만 있으면 돈이 통장과 지갑 사이만 오가서 전 재산은 그대로다. 마찰이라는 소매치기가 있으면 털린 만큼 전 재산이 준다.

## supplement
교재 내용을 옮기고, 쉬운 설명·스토리는 Claude가 추가했습니다.
