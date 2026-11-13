---
id: phys-circ-series-parallel
title_ko: "저항과 축전기의 직렬·병렬 합성"
title_en: "Resistors and capacitors in series and parallel"
question: "저항과 축전기의 직렬·병렬 합성 공식은? 각각 무엇이 같은가?"
tags: [직렬, 병렬, 등가 저항, 등가 전기용량, 합성, series, parallel, equivalent resistance, equivalent capacitance]
importance: 3
related: [phys-circ-kirchhoff, phys-em-ohm-law, phys-em-capacitance]
source: "book:BLIS편입 일반물리 15-10~12, 15-30"
verified: false
---

## formula
$$
\text{series: } R_{\text{eq}} = R_1+R_2+\cdots, \qquad \frac{1}{C_{\text{eq}}} = \frac{1}{C_1}+\frac{1}{C_2}+\cdots
$$

$$
\text{parallel: } \frac{1}{R_{\text{eq}}} = \frac{1}{R_1}+\frac{1}{R_2}+\cdots, \qquad C_{\text{eq}} = C_1+C_2+\cdots
$$

## conditions
- 직렬: 전류(축전기는 전하 $q$)가 같고 전압을 나눠 가진다.
- 병렬: 전압이 같고 전류(축전기는 전하)를 나눠 가진다.

## explanation
### 쉽게 말하면 (모양으로 기억)
$R=\rho\dfrac{L}{A}$와 $C=\dfrac{\varepsilon_0A}{d}$를 떠올리면 공식이 저절로 나온다.

- 저항 직렬 = 길이 $L$이 늘어남 → $R$ 증가 (더함)
- 저항 병렬 = 단면적 $A$가 늘어남 → $R$ 감소 (역수 합)
- 축전기 병렬 = 극판 넓이 $A$가 늘어남 → $C$ 증가 (더함)
- 축전기 직렬 = 간격 $d$가 늘어남 → $C$ 감소 (역수 합)

저항과 축전기는 공식이 정확히 반대다.

### 나눠 가지는 비율
- 직렬 저항: 전압이 저항 비로 ($V=iR$)
- 병렬 저항: 전류가 저항의 역수 비로
- 직렬 축전기: 전압이 전기용량의 역수 비로 ($V=\dfrac{q}{C}$)
- 병렬 축전기: 전하가 전기용량 비로
- 두 개 병렬 저항: $R_{\text{eq}}=\dfrac{R_1R_2}{R_1+R_2}$

## example
충전된 축전기를 다른 빈 축전기에 연결 (교재 예제): $C_1=4\,\mu\text{F}$를 $6\,\text{V}$로 충전 후 전원을 떼고 $C_2=8\,\mu\text{F}$를 연결. 전하 $q_0=24\,\mu\text{C}$가 보존되고 평형에서 두 축전기의 전압이 같다 (병렬):

$$
V=\frac{q_0}{C_1+C_2}=2\,\text{V}, \qquad q_1=8\,\mu\text{C}, \qquad q_2=16\,\mu\text{C}
$$

## supplement
교재 내용을 옮기고, 쉬운 설명·스토리는 Claude가 추가했습니다. 예제 풀이는 Claude가 계산했습니다.
