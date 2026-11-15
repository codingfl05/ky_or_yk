---
id: phys-fluid-continuity
title_ko: "연속 방정식"
title_en: "Equation of continuity"
question: "관의 굵기가 변할 때 유체의 속력은 어떻게 변하는가?"
tags: [연속 방정식, 유량, 이상 유체, continuity equation, flow rate, ideal fluid]
importance: 3
related: [phys-fluid-bernoulli]
source: "book:BLIS편입 일반물리 11-12"
verified: false
---

## formula
$$
A_1v_1 = A_2v_2 = R_V \ (\text{volume flow rate})
$$

## conditions
- 이상 유체: 정상 흐름, 비압축성, 점성 없음, 비회전. 관 중간에 새거나 들어오는 곳이 없을 때.

## explanation
::fig bernoulli-pipe | 좁은 곳에서 빨라진다.

### 식이 나오는 과정
단면적 $A$인 곳을 속력 $v$로 지나는 물은 1초 동안 길이 $v$만큼 나아가므로, 1초에 지나는 부피는 (넓이) × (길이) $= Av$다. 물은 압축되지 않고 중간에 새지도 않으니 관의 어느 곳에서나 이 값이 같아야 한다. 넓은 곳에서 $A_1v_1$만큼 들어왔으면 좁은 곳에서도 $A_2v_2$만큼 나가야 한다.

### 쉽게 말하면
같은 시간에 관의 어느 단면을 지나는 유체의 부피는 같다 (중간에 쌓이거나 사라지지 않으니까). 그래서 좁은 곳에서 빠르고 넓은 곳에서 느리다.

- 원형 관이면 $A \propto r^2$: 반지름이 절반이면 속력 4배.
- 수도꼭지에서 떨어지는 물줄기가 아래로 갈수록 가늘어지는 이유: 빨라지니까 단면이 줄어든다.

## story
호스 끝을 손가락으로 반쯤 막으면 물이 멀리 뻗는다. 나가는 구멍이 좁아졌는데 초당 나가야 할 물의 양은 그대로라서 더 빨리 나갈 수밖에 없다.

## supplement
교재 내용을 옮기고, 쉬운 설명·스토리는 Claude가 추가했습니다. 쉬운 설명·그림 보강: Av가 1초당 부피인 이유, 그림(bernoulli-pipe 재사용).
