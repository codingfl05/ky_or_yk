---
id: thermo-entropy-ideal-gas
title_ko: 이상기체의 엔트로피 변화량
title_en: Entropy change of an ideal gas
question: "이상기체의 엔트로피 변화량은 어떻게 표현되는가?"
tags: [열역학, thermodynamics, 엔트로피, entropy, 이상기체, ideal gas]
importance: 3
related: [thermo-entropy-reversible, thermo-entropy-free-expansion, thermo-cycle-analysis]
source: "notion:뿌리물리 15강"
verified: false
---

## formula
$$
\Delta S = nC_V \ln\frac{T_f}{T_i} + nR\ln\frac{V_f}{V_i}
$$

$$
\Delta S = nC_P \ln\frac{T_f}{T_i} - nR\ln\frac{P_f}{P_i}
$$

## conditions
이상기체이고 $C_V$(또는 $C_P$)가 상수일 때. 가역·비가역 모두 처음과 나중 상태만 알면 계산할 수 있습니다.

## explanation
엔트로피 변화량은 온도 변화에 의한 항과 부피 변화에 의한 항으로 나뉩니다. 부피가 커질수록, 온도가 높아질수록 엔트로피 변화량은 커집니다. 둘 다 분자가 움직일 수 있는 경우의 수가 늘어나는 방향이기 때문입니다.

자주 쓰는 특수 경우입니다.

- 등온: $\Delta S = nR\ln\dfrac{V_f}{V_i}$
- 등적: $\Delta S = nC_V\ln\dfrac{T_f}{T_i}$
- 등압: $\Delta S = nC_P\ln\dfrac{T_f}{T_i}$
- 가역 단열: $\Delta S = 0$

## derivation
열역학 제1법칙에서 가역 경로의 열은 다음과 같습니다.

$$
dQ_{rev} = dU + P\,dV = nC_V\,dT + \frac{nRT}{V}\,dV
$$

양변을 $T$로 나누면

$$
dS = nC_V\frac{dT}{T} + nR\frac{dV}{V}
$$

이것을 $i \to f$로 적분하면 위의 공식이 됩니다.

## supplement
원본 노트는 "부피와 온도의 변화로 표현된다"까지만 있었고, 구체적인 식·유도·특수 경우는 추가한 내용입니다.
