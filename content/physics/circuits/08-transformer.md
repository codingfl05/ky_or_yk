---
id: phys-circ-transformer
title_ko: "변압기"
title_en: "Transformers"
question: "이상적인 변압기에서 전압·전류와 감은 수의 관계, 고압 송전의 이유는?"
tags: [변압기, 감은 수, 상호 유도, 송전, transformer, turns ratio, power transmission]
importance: 2
related: [phys-em-inductance, phys-em-faraday-law, phys-circ-rlc-series]
source: "book:BLIS편입 일반물리 18-44"
verified: false
---

## formula
$$
\frac{V_2}{V_1} = \frac{N_2}{N_1}, \qquad V_1I_1 = V_2I_2\ \Rightarrow\ \frac{I_2}{I_1} = \frac{N_1}{N_2}, \qquad R_{\text{eq}} = \left(\frac{N_1}{N_2}\right)^2R
$$

## conditions
- 이상적인 변압기 (에너지 손실 없음), 교류 전원일 때만 동작. $R_{\text{eq}}$는 2차 쪽 부하 $R$이 1차 쪽에서 보이는 저항.

## explanation
### 쉽게 말하면
1차 코일의 교류가 철심 속 자기선속을 계속 바꾸고, 그 같은 선속 변화가 2차 코일을 지나가 기전력을 만든다 (상호 유도). 감은 한 바퀴마다 같은 $\dfrac{d\Phi}{dt}$를 받으니 전압은 감은 수에 비례한다.

- 전압을 올리면 그만큼 전류는 줄어든다 (전력은 그대로).
- 고압 송전의 이유: 송전선 손실은 $P_{\text{loss}}=i^2R$. 같은 전력을 보낼 때 전압을 높이면 전류가 줄어 손실이 크게 준다.
- 직류는 선속이 변하지 않아 변압이 안 된다.

## story
변압기는 자전거 기어다. 페달을 빨리 돌리는 대신 힘을 적게 쓰거나, 천천히 돌리는 대신 힘을 많이 쓰는 것처럼, 전압과 전류를 맞바꿀 뿐 들어간 일(전력)은 같다.

## supplement
교재 내용을 옮기고, 쉬운 설명·스토리는 Claude가 추가했습니다.
