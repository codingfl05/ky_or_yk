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
\frac{V_2}{V_1} = \frac{N_2}{N_1}
$$

$$
V_1I_1 = V_2I_2\ \Rightarrow\ \frac{I_2}{I_1} = \frac{N_1}{N_2}
$$

$$
R_{\text{eq}} = \left(\frac{N_1}{N_2}\right)^2R
$$

## conditions
- 이상적인 변압기 (에너지 손실 없음), 교류 전원일 때만 동작. $R_{\text{eq}}$는 2차 쪽 부하 $R$이 1차 쪽에서 보이는 저항.

## explanation
::fig transformer | 1차 코일의 교류가 철심 속 선속을 바꾸고, 같은 선속 변화를 2차 코일이 받는다.

### 쉽게 말하면
1차 코일의 교류가 철심 속 자기선속을 계속 바꾸고, 그 같은 선속 변화가 2차 코일을 지나가 기전력을 만든다 (상호 유도). 감은 한 바퀴마다 같은 $\dfrac{d\Phi}{dt}$를 받으니 전압은 감은 수에 비례한다.

- 전압을 올리면 그만큼 전류는 줄어든다 (전력은 그대로).
- 고압 송전의 이유: 송전선 손실은 $P_{\text{loss}}=i^2R$. 같은 전력을 보낼 때 전압을 높이면 전류가 줄어 손실이 크게 준다.
- 직류는 선속이 변하지 않아 변압이 안 된다.

### 앞 개념과 이어 보기
- 전압 비: 패러데이 법칙에서 코일의 기전력은 (감은 수) × (선속이 변하는 빠르기)다. 두 코일이 같은 철심을 감고 있어 선속 변화가 같으므로 $\dfrac{V_1}{N_1} = \dfrac{V_2}{N_2}$.
- 전류 비: 이상적인 변압기는 에너지를 만들지도 잃지도 않으니 들어간 전력 $V_1I_1$과 나온 전력 $V_2I_2$가 같다. 전압이 $n$배면 전류는 $\dfrac{1}{n}$배.
- 등가 저항: 1차 쪽에서 보이는 저항은 $\dfrac{V_1}{I_1}$이다. $V_1 = \dfrac{N_1}{N_2}V_2$, $I_1 = \dfrac{N_2}{N_1}I_2$를 넣으면 $\left(\dfrac{N_1}{N_2}\right)^2\dfrac{V_2}{I_2} = \left(\dfrac{N_1}{N_2}\right)^2R$.

## story
변압기는 자전거 기어다. 페달을 빨리 돌리는 대신 힘을 적게 쓰거나, 천천히 돌리는 대신 힘을 많이 쓰는 것처럼, 전압과 전류를 맞바꿀 뿐 들어간 일(전력)은 같다.

## supplement
교재 내용을 옮기고, 쉬운 설명·스토리는 Claude가 추가했습니다. 쉬운 설명·그림 보강: 전압·전류 비와 등가 저항이 나오는 과정, 그림(transformer).
