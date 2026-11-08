---
id: thermo-entropy-reversible
title_ko: 가역 과정의 엔트로피 변화량
title_en: Entropy change in a reversible process
question: "가역적인 반응의 엔트로피 변화량은 어떻게 계산할 수 있는가?"
tags: [열역학, thermodynamics, 엔트로피, entropy, 가역 과정, reversible]
importance: 3
related: [thermo-entropy-state-function, thermo-entropy-irreversible, thermo-entropy-ideal-gas]
source: "notion:뿌리물리 15강"
verified: false
---

## formula
$$
\Delta S = S_f - S_i = \int_i^f \frac{dQ_{rev}}{T}
$$

## conditions
가역 과정(reversible process)에서 직접 적분할 때. $T$는 반드시 절대온도(K)를 씁니다.

## explanation
가역 과정에서 잘게 쪼갠 열 $dQ_{rev}$를 그때그때의 온도 $T$로 나누어 모두 더한 값이 엔트로피 변화량입니다.

온도가 일정한 가역 과정(등온)이면 적분 없이 아래처럼 간단해집니다.

$$
\Delta S = \frac{Q_{rev}}{T}
$$

## story
같은 열을 받아도 차가울 때 엔트로피가 더 크게 늘어납니다. 조용한 도서관에서 떠드는 한마디가 시끄러운 시장에서 떠드는 한마디보다 분위기를 훨씬 크게 흩뜨리는 것과 같습니다.

## example
0°C 얼음 1 kg이 녹는 경우입니다. 융해열 $L_f \approx 3.34\times10^5\ \mathrm{J/kg}$, 온도는 $T = 273\ \mathrm{K}$로 일정합니다.

$$
\Delta S = \frac{mL_f}{T} \approx \frac{3.34\times10^5}{273} \approx 1.22\times10^3\ \mathrm{J/K}
$$

## supplement
원본 노트의 $dQ$ 표기를 $dQ_{rev}$로 명시했고, 등온 특수 케이스·비유·예제를 추가했습니다.
