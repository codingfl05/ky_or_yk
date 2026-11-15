---
id: phys-atom-spin
title_ko: "스핀 각운동량과 스핀 자기 쌍극자 모멘트"
title_en: "spin angular momentum and spin magnetic dipole moment"
question: "전자의 스핀 각운동량의 크기와 z성분, 스핀 자기 모멘트의 z성분은?"
tags: [스핀, 스핀 각운동량, 스핀 자기 양자수, 스핀 자기 쌍극자 모멘트, spin, spin angular momentum, spin magnetic quantum number, spin magnetic dipole moment]
importance: 2
related: [phys-atom-orbital-angular-momentum, phys-atom-orbital-magnetic-moment, phys-atom-total-angular-momentum, phys-atom-multi-electron]
source: "book:BLIS편입 일반물리 23-34"
verified: false
---

## formula
$$
S = \sqrt{s(s + 1)}\,\hbar = \frac{\sqrt{3}}{2}\hbar
\qquad \left(s = \frac{1}{2}\right)
$$

$$
S_z = m_s\hbar, \qquad m_s = \pm\frac{1}{2}
$$

$$
\boldsymbol{\mu}_s = -\frac{e}{m}\,\mathbf{S}, \qquad \mu_{s,z} = -2m_s\,\mu_B = \mp\mu_B
$$

## conditions
- $s$: 스핀 양자수. 전자는 $s = \frac{1}{2}$ 하나뿐이다.
- $m_s$: 스핀 자기 양자수. $+\frac{1}{2}$(스핀 업), $-\frac{1}{2}$(스핀 다운).
- $\mu_B = e\hbar/2m$: 보어 마그네톤. $\mu_{s,z}$의 계수 2는 정확히는 $2.00232$다.
- $z$방향 자기장 $B$ 속의 에너지: $U = -\boldsymbol{\mu}_s\cdot\mathbf{B} = 2m_s\mu_BB = \pm\mu_BB$.
- 전자의 상태는 $(n, l, m_l, m_s)$ 네 양자수로 정해진다.

## explanation
### 먼저 떠올릴 것
- 궤도 각운동량: $L = \sqrt{l(l+1)}\,\hbar$, $L_z = m_l\hbar$. 스핀도 똑같은 꼴에 $l \to s$, $m_l \to m_s$를 넣은 것이다.
- 궤도 자기 모멘트: $\boldsymbol{\mu}_{\text{orb}} = -\dfrac{e}{2m}\mathbf{L}$.

### 쉽게 말하면
- 전자는 궤도 운동과 별개로 스핀(spin)이라는 고유한 각운동량을 가진다. 질량이나 전하처럼 전자가 타고난 성질이다.
- 지구의 자전에 빗대어 설명하지만 전자가 실제로 도는 것은 아니다. 고전 역학에 대응하는 것이 없는 양자역학적인 양이다.
- 양성자, 중성자도 스핀을 가진다.

### 궤도와 스핀 비교
| | 궤도 | 스핀 |
|---|---|---|
| 양자수 | $l = 0, \dots, n - 1$ | $s = \frac{1}{2}$ 고정 |
| $z$성분 | $m_l\hbar$ ($2l + 1$가지) | $\pm\frac{1}{2}\hbar$ (2가지) |
| 자기 모멘트 $z$성분 | $-m_l\mu_B$ | $-2m_s\mu_B$ |

스핀은 각운동량에 비해 자기 모멘트가 2배로 세다 ($e/2m$ 대신 $e/m$). 그래서 $m_s$가 $\frac{1}{2}$이어도 자기 모멘트의 $z$성분은 $\mu_B$ 하나만큼이다.

### 한 번 따라 하기
자기장 $B$ 속에서 스핀 업과 스핀 다운의 에너지 차이는

$$
\Delta E = \mu_BB - (-\mu_BB) = 2\mu_BB
$$

이 차이와 같은 에너지의 광자($hf = 2\mu_BB$)를 쪼이면 스핀이 뒤집힌다.

### 자주 틀리는 포인트
- 스핀 각운동량의 크기는 $\frac{1}{2}\hbar$가 아니라 $\frac{\sqrt{3}}{2}\hbar$. $\frac{1}{2}\hbar$는 $z$성분이다.
- 스핀 업($m_s = +\frac{1}{2}$)의 자기 모멘트 $z$성분은 $-\mu_B$로 자기장과 반대라서 에너지가 높다.

## supplement
교재 내용을 옮기고, 궤도와 스핀 비교 표와 에너지 차이 예는 Claude가 추가했습니다.
