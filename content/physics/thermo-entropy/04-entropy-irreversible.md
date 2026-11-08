---
id: thermo-entropy-irreversible
title_ko: 비가역 과정의 엔트로피 변화량 (가역 경로 우회)
title_en: Entropy change in an irreversible process
question: "비가역적인 반응의 엔트로피 변화량은 어떻게 계산할 수 있는가?"
tags: [열역학, thermodynamics, 엔트로피, entropy, 비가역 과정, irreversible, 가역 경로]
importance: 3
related: [thermo-entropy-state-function, thermo-entropy-free-expansion, thermo-second-law]
source: "notion:뿌리물리 15강"
verified: false
---

## formula
$$
\Delta S_{irr} = \int_i^f \frac{dQ_{rev}}{T} \quad (i \to f \text{를 잇는 임의의 가역 경로})
$$

## conditions
실제 과정이 비가역적일 때 (자유 팽창, 열 전도 등). 처음과 나중이 모두 평형 상태여야 합니다.

## explanation
실제 자연 현상(비가역 과정)은 마찰이나 급격한 변화가 섞여 있어서 엔트로피를 직접 계산하기 어렵습니다.

그런데 엔트로피는 상태함수이므로, 같은 처음 상태에서 나중 상태까지 가는 가상의 가역 경로를 하나 골라 그 경로로 계산하면 실제 비가역 과정의 $\Delta S$와 정확히 같습니다.

풀이 순서입니다.

1. 처음·나중 상태의 $T$, $V$, $P$를 정리한다.
2. 두 상태를 잇는, 계산하기 쉬운 가역 경로를 고른다 (등온, 등적, 등압의 조합 등).
3. 그 경로의 $dQ_{rev}$로 $\int dQ_{rev}/T$를 계산한다.

주의할 점이 있습니다. 실제 비가역 과정에서 오간 열을 그대로 $\int dQ/T$에 넣으면 안 됩니다. 비가역 과정에서는 $\Delta S > \int dQ/T$ 이기 때문입니다 (클라우지우스 부등식).

## story
줄의 질량이나 공기 저항을 무시하고 문제를 이상화했던 것과 같은 발상입니다. 실제 경로는 너무 복잡하니, 처음과 끝만 같다면 계산하기 쉬운 상상 속 경로로 갈아타서 계산합니다.

## example
단열 자유 팽창은 실제로는 $Q = 0$이지만, 등온 가역 팽창 경로로 우회해서 계산합니다. (자세한 계산은 단열 자유 팽창 카드 참고)

## supplement
풀이 3단계와 클라우지우스 부등식 주의점을 추가했습니다.
