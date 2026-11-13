---
id: phys-em-faraday-law
title_ko: "패러데이 법칙과 렌츠 법칙 (전자기 유도)"
title_en: "Faraday's law and Lenz's law"
question: "유도 기전력의 크기와 방향은 어떻게 정해지는가?"
tags: [패러데이 법칙, 렌츠 법칙, 전자기 유도, 유도 기전력, 자기선속, Faraday's law, Lenz's law, induced emf, magnetic flux]
importance: 3
related: [phys-em-motional-emf, phys-em-induced-electric-field, phys-em-inductance]
source: "book:BLIS편입 일반물리 17-02~08"
verified: false
---

## formula
$$
\Phi_B = \int\mathbf{B}\cdot d\mathbf{A}\ (=BA\cos\theta), \qquad \mathcal{E} = -N\frac{d\Phi_B}{dt}
$$

$$
B\ \text{const: } \mathcal{E} = -NB\frac{dA}{dt}, \qquad A\ \text{const: } \mathcal{E} = -NA\frac{dB}{dt}
$$

## conditions
- 자기선속(magnetic flux) 단위 $\text{Wb}=\text{T}\cdot\text{m}^2$. $\theta$는 $\mathbf{B}$와 면의 법선 사이 각. $N$은 감은 수.
- $B$와 $A$가 서로 얽혀 있으면(위치마다 $B$가 다르면) $\Phi_B(t)$를 먼저 구하고 미분한다.

## explanation
### 쉽게 말하면
고리를 지나는 자기선속이 변하면 고리에 기전력(전압)이 생긴다. 이게 전부다.

- 크기 (패러데이): 선속이 빨리 변할수록 크다. 선속은 $B$, 넓이 $A$, 각도 중 무엇이 변해도 변한다. 변하지 않으면 아무리 센 자기장이어도 0.
- 방향 (렌츠, 부호 $-$): 변화를 싫어하는 방향. 선속이 늘면 반대 방향 자기장을, 줄면 같은 방향 자기장을 만드는 쪽으로 전류가 흐른다.

### 방향 정하는 순서
1. 원래 자기장 방향 확인
2. 선속이 증가하나 감소하나
3. 유도 자기장 방향 결정 (증가 → 반대, 감소 → 같은 방향)
4. 오른손(엄지 = 유도 자기장)으로 전류 방향

### 자주 나오는 상황
- 자석을 고리에 가까이/멀리 → $B$ 변화
- 막대가 레일 위를 움직임, 회전하는 막대 → $A$ 변화 (운동 기전력)
- 코일이 자기장 속에서 회전 → 각도 변화 (발전기)

## story
렌츠 법칙은 "관성"의 전자기 버전이다. 고리는 지금 지나가는 자기선속을 그대로 유지하고 싶어한다. 누가 늘리면 밀어내고, 누가 빼가면 붙잡는다. 그 버티는 힘이 유도 전류다.

## supplement
교재 내용을 옮기고, 쉬운 설명·스토리는 Claude가 추가했습니다.
