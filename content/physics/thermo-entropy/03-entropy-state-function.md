---
id: thermo-entropy-state-function
title_ko: 엔트로피는 상태함수
title_en: Entropy as a state function
question: "엔트로피의 경로 의존성은 어떻게 되는가?"
tags: [열역학, thermodynamics, 엔트로피, entropy, 상태함수, state function, 경로 의존성]
importance: 2
related: [thermo-entropy-reversible, thermo-entropy-irreversible, thermo-carnot-efficiency]
source: "notion:뿌리물리 15강"
verified: false
---

## formula
$$
\Delta S = S_f - S_i \ (\text{경로와 무관}), \qquad \oint dS = 0
$$

## conditions
처음 상태와 나중 상태가 모두 평형 상태일 때. 경로가 달라도 처음·나중 상태가 같으면 $\Delta S$도 같습니다.

## explanation
엔트로피는 상태함수(state function)입니다. 처음 상태와 나중 상태만 정해지면 값이 정해지고, 어떤 경로로 갔는지는 상관이 없습니다 (경로 의존성이 없음).

그래서 한 바퀴 돌아 원래 상태로 돌아오는 순환 과정에서는 엔트로피 변화량이 0입니다.

열 $Q$와 일 $W$는 경로에 따라 값이 달라지는 양이지만, 가역 경로에서 $dQ_{rev}/T$로 묶으면 경로와 상관없는 값이 됩니다.

## story
산 아래에서 정상까지의 높이 차이는 케이블카로 직선으로 올라가든 구불구불한 등산로로 올라가든 똑같죠. 높이 차이가 상태함수이고, 걸어간 거리는 경로에 따라 달라지는 열·일에 해당합니다. 높이 차이만 알면 되니까 계산하기 쉬운 케이블카 경로(가역 경로)로 계산해도 됩니다.

## supplement
순환 적분이 0이라는 성질과, 열·일(경로함수)과의 대비를 추가했습니다.
