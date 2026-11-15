---
id: phys-atom-hydrogen-like
title_ko: "수소꼴 이온과 환산 질량"
title_en: "hydrogen-like ions and reduced mass"
question: "전자가 하나뿐인 이온(원자 번호 Z)의 궤도 반지름과 에너지는?"
tags: [수소꼴 이온, 수소 유사 원자, 원자 번호, 환산 질량, 헬륨 이온, hydrogen-like ion, atomic number, reduced mass]
importance: 2
related: [phys-atom-bohr-model, phys-atom-hydrogen-energy, phys-atom-multi-electron]
source: "book:BLIS편입 일반물리 23-10"
verified: false
---

## formula
$$
E_n = -13.6\,\frac{Z^2}{n^2}\,\text{eV}
$$

$$
r_n = \frac{a_0\,n^2}{Z}
$$

## conditions
- $Z$: 원자 번호 (원자핵의 양성자 수). 핵의 전하량이 $+Ze$.
- 전자가 딱 1개인 경우에만 쓴다: $\text{H}$, $\text{He}^+$, $\text{Li}^{2+}$ 등. 전자가 둘 이상이면 전자끼리의 상호작용 때문에 보어 모델이 맞지 않는다.
- 원자핵의 움직임까지 넣으려면 전자의 질량 $m$ 대신 환산 질량(reduced mass)을 쓴다.

$$
m_r = \frac{m\,m_N}{m + m_N} \approx 0.99946\,m
\qquad (\text{H})
$$

## explanation
### 먼저 떠올릴 것
- 수소의 보어 모델: 전기력 = 구심력, $L = n\hbar$에서 $r_n = a_0n^2$, $E_n = -13.6/n^2\,\text{eV}$.
- 수소에서 전기력에 들어가던 $e^2$은 (핵의 전하) × (전자의 전하)였다.

### 한 번 따라 하기
핵의 전하가 $+Ze$가 되면 전기력의 $e^2$이 $Ze^2$으로 바뀐다. 수소의 결과에서 $e^2 \to Ze^2$만 바꾸면 된다.

$$
\frac{1}{4\pi\varepsilon_0}\frac{Ze^2}{r^2} = \frac{mv^2}{r}
$$

- 반지름: $r_n \propto 1/e^2$이었으므로 $1/Z$배. 핵이 세게 당기니 궤도가 작아진다.
- 에너지: $E_n \propto e^4$이었으므로 $Z^2$배. 더 깊이 묶인다.

### 숫자 예: 헬륨 이온
$\text{He}^+$는 $Z = 2$이므로 $E_n = -54.4/n^2\,\text{eV}$.

| $n$ | $\text{H}$ | $\text{He}^+$ |
|---|---|---|
| $1$ | $-13.6\,\text{eV}$ | $-54.4\,\text{eV}$ |
| $2$ | $-3.4\,\text{eV}$ | $-13.6\,\text{eV}$ |
| $4$ | $-0.85\,\text{eV}$ | $-3.4\,\text{eV}$ |

$\text{He}^+$의 $n = 2$ 준위는 수소의 $n = 1$ 준위와 값이 같다. 일반적으로 $\text{He}^+$의 $n = 2k$ 준위가 수소의 $n = k$ 준위와 겹친다.

### 자주 틀리는 포인트
- 이온화 에너지도 $Z^2$배: $\text{He}^+$는 $54.4\,\text{eV}$, $\text{Li}^{2+}$는 $122.4\,\text{eV}$.
- 같은 전이에서 나오는 빛의 파장은 $1/Z^2$배로 짧아진다.
- 중성 헬륨(전자 2개)에는 이 식을 쓸 수 없다.

### 환산 질량
실제로는 전자와 핵이 공통 질량 중심 둘레를 함께 돈다. 이 효과는 전자의 질량을 환산 질량으로 바꾸는 것만으로 반영된다. 핵이 전자보다 훨씬 무거워서 수소에서는 보정이 약 $0.05\%$에 그친다.

## supplement
교재 내용을 옮기고, 헬륨 이온 표와 "자주 틀리는 포인트"는 Claude가 추가했습니다.
