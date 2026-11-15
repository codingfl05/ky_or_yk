---
id: phys-nuc-binding-energy
title_ko: "원자핵의 구조와 결합 에너지"
title_en: "nuclear structure and binding energy"
question: "원자핵의 결합 에너지는 질량과 어떤 관계인가?"
tags: [원자핵, 결합 에너지, 질량 결손, 동위원소, 원자 질량 단위, 핵자, nucleus, binding energy, mass defect, isotope, atomic mass unit, nucleon]
importance: 2
related: [phys-rel-energy, phys-nuc-decay-law, phys-nuc-fission-fusion]
source: "book:BLIS편입 일반물리 24-02"
verified: false
---

## formula
$$
\Delta E_b = \Delta M\,c^2
$$

$$
\Delta M = Z m_p + N m_n - M_{\text{nucleus}}
$$

## conditions
- $Z$: 양성자 수(원자 번호), $N$: 중성자 수, $A = Z + N$: 질량수.
- $\Delta M$: 질량 결손. 낱개 양성자·중성자의 질량 합에서 원자핵의 질량을 뺀 것.
- 원자 질량 단위: $1\,\text{u} = 1.66 \times 10^{-27}\,\text{kg}$. 에너지로는 $1\,\text{u}\cdot c^2 \approx 931.5\,\text{MeV}$.
- 원자핵의 크기는 $\text{fm}$($10^{-15}\,\text{m}$) 정도.

## explanation
### 먼저 떠올릴 것
- 질량-에너지 등가: 질량 $m$은 에너지 $mc^2$에 해당한다. 반응에서 질량이 줄면 그만큼의 에너지가 나온다.
- 양성자끼리는 같은 부호의 전하라 전기력으로 서로 밀어낸다. 그런데도 핵이 흩어지지 않는 것은 훨씬 센 인력(강한 핵력)이 양성자와 중성자를 묶고 있기 때문이다.

### 원자핵의 구성
- 원자핵 = 양성자 + 중성자. 둘을 합쳐 핵자(nucleon)라 한다.
- 양성자의 수가 원소의 종류를 정한다.
- 양성자 수가 같고 중성자 수가 다른 것이 동위원소(isotope)다. 같은 원소이지만 질량이 다르다.
- 표기: 왼쪽 위에 질량수, 왼쪽 아래에 원자 번호를 쓴다. ${}^{238}_{92}\text{U}$는 양성자 92개, 중성자 $238 - 92 = 146$개.

### 쉽게 말하면
낱개로 흩어져 있던 양성자와 중성자가 뭉쳐 핵이 되면 에너지가 밖으로 나간다. 에너지가 나간 만큼 질량이 줄어든다. 거꾸로 핵을 낱개의 핵자로 다시 떼어 놓으려면 그만큼의 에너지를 넣어 주어야 한다. 이 에너지가 결합 에너지(binding energy)다.

### 한 번 따라 하기: 헬륨 핵
헬륨-4 핵(양성자 2개, 중성자 2개)의 질량은 $4.0015\,\text{u}$다. 양성자는 $1.0073\,\text{u}$, 중성자는 $1.0087\,\text{u}$.

$$
\Delta M = 2(1.0073) + 2(1.0087) - 4.0015 = 0.0305\,\text{u}
$$

$$
\Delta E_b = 0.0305 \times 931.5 \approx 28.4\,\text{MeV}
$$

핵자 하나당 약 $7.1\,\text{MeV}$다. 원자에서 전자를 떼어 내는 에너지(수 eV)의 백만 배 수준이다.

### 자주 틀리는 포인트
- 결합 에너지가 클수록 핵이 "에너지를 많이 가진" 것이 아니라 더 단단히 묶여 안정하다는 뜻이다.
- 안정한 정도는 전체 결합 에너지가 아니라 핵자당 결합 에너지로 비교한다. 철 근처의 핵이 가장 크다. 그래서 가벼운 핵은 합쳐질 때(융합), 무거운 핵은 쪼개질 때(분열) 에너지가 나온다.
- 문제에서 $c^2$을 $\text{MeV/u}$ 단위로 주면 (예: $c^2 \approx 1000\,\text{MeV/u}$) 질량 차이에 그 값을 그대로 곱한다.

## supplement
교재 내용을 옮기고, 질량 결손 식과 $931.5\,\text{MeV}$, 헬륨 핵 예, 핵자당 결합 에너지 설명은 Claude가 추가했습니다.
