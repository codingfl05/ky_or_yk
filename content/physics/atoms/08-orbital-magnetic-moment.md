---
id: phys-atom-orbital-magnetic-moment
title_ko: "궤도 자기 쌍극자 모멘트와 보어 마그네톤"
title_en: "orbital magnetic dipole moment and the Bohr magneton"
question: "궤도 운동하는 전자의 자기 쌍극자 모멘트와, 자기장 속에서 준위가 갈라지는 크기는?"
tags: [궤도 자기 쌍극자 모멘트, 보어 마그네톤, 제이만 효과, 자기 모멘트, orbital magnetic dipole moment, Bohr magneton, Zeeman effect]
importance: 2
related: [phys-atom-orbital-angular-momentum, phys-em-magnetic-dipole, phys-atom-spin]
source: "book:BLIS편입 일반물리 23-32"
verified: false
---

## formula
$$
\boldsymbol{\mu}_{\text{orb}} = -\frac{e}{2m}\,\mathbf{L}
$$

$$
\mu_{\text{orb},z} = -m_l\,\mu_B
$$

$$
\mu_B = \frac{e\hbar}{2m} \approx 9.274 \times 10^{-24}\,\text{J/T}
$$

$$
U = -\boldsymbol{\mu}_{\text{orb}}\cdot\mathbf{B} = m_l\,\mu_B B
$$

## conditions
- $m$: 전자의 질량, $\mathbf{L}$: 궤도 각운동량.
- $\mu_B$: 보어 마그네톤(Bohr magneton). 원자 세계의 자기 모멘트 단위.
- 음의 부호: 전자의 전하가 음수라 자기 모멘트가 각운동량과 반대 방향이다.
- 셋째 식은 외부 자기장 $\mathbf{B}$가 $z$방향일 때.
- 크기: $\mu_{\text{orb}} = \dfrac{e}{2m}\sqrt{l(l + 1)}\,\hbar$.

## explanation
### 먼저 떠올릴 것
- 전류 고리는 작은 막대자석처럼 행동한다. 자기 쌍극자 모멘트는 $\mu = NIA$ (감은 수 × 전류 × 넓이).
- 자기장 속 자기 쌍극자의 에너지는 $U = -\boldsymbol{\mu}\cdot\mathbf{B}$. 자기장과 나란할 때 가장 낮다.
- 전류의 방향은 전자가 움직이는 방향과 반대다.

### 한 번 따라 하기 (유도)
반지름 $r$, 속력 $v$로 원운동하는 전자는 한 바퀴 도는 데 $2\pi r/v$가 걸리므로 전류는 $I = \dfrac{ev}{2\pi r}$이다.

$$
\mu_{\text{orb}} = IA = \frac{ev}{2\pi r}\cdot\pi r^2 = \frac{evr}{2} = \frac{e}{2m}(mvr) = \frac{e}{2m}L
$$

각운동량이 양자화되어 있으니 자기 모멘트도 양자화된다. $L_z = m_l\hbar$를 넣으면 $\mu_{\text{orb},z} = -m_l\mu_B$.

### 자기장을 걸면 준위가 갈라진다
자기장이 없을 때 같은 에너지였던 $m_l$ 상태들이, 자기장을 걸면 $m_l\mu_BB$만큼씩 벌어진다.
- $l = 1$이면 $m_l = -1, 0, 1$의 3개 준위로, $l = 2$이면 5개 준위로 갈라진다.
- 이웃한 준위의 간격은 $\mu_BB$로 일정하다.
- 이렇게 스펙트럼선이 자기장 속에서 갈라지는 것이 제이만 효과다.

### 숫자 예
$B = 1\,\text{T}$에서 간격은 $\mu_BB \approx 9.27 \times 10^{-24}\,\text{J} \approx 5.8 \times 10^{-5}\,\text{eV}$. 수소 준위 차이(수 eV)에 비해 아주 작다.

### 자주 틀리는 포인트
- 가능한 $\mu_{\text{orb},z}$의 "크기"를 물으면 $0, \mu_B, 2\mu_B, \dots, l\mu_B$.
- 자기 모멘트는 각운동량과 반대 방향이다. 에너지가 가장 낮은 상태는 자기 모멘트가 자기장과 나란한 상태, 곧 $m_l$이 가장 작은(음수) 상태다.

## supplement
교재 내용을 옮기고, 유도 설명과 숫자 예, 제이만 효과라는 이름은 Claude가 추가했습니다. 교재 23-30에는 "외부 자기장이 있으면 각운동량은 자기장과 같은 방향, 자기 쌍극자 모멘트는 반대 방향으로 정렬된다"고 적혀 있는데, 에너지 $U = -\boldsymbol{\mu}\cdot\mathbf{B}$가 낮아지는 쪽은 자기 모멘트가 자기장과 같은 방향(각운동량이 반대 방향)이므로 그렇게 적었습니다.
