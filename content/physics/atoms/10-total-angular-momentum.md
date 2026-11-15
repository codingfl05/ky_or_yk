---
id: phys-atom-total-angular-momentum
title_ko: "전체 각운동량"
title_en: "total angular momentum"
question: "궤도 각운동량과 스핀 각운동량을 더한 전체 각운동량의 크기와 z성분은?"
tags: [전체 각운동량, 스핀 궤도 결합, total angular momentum, spin-orbit coupling]
importance: 1
related: [phys-atom-orbital-angular-momentum, phys-atom-spin]
source: "book:BLIS편입 일반물리 23-36"
verified: false
---

## formula
$$
\mathbf{J} = \mathbf{L} + \mathbf{S}
$$

$$
J = \sqrt{j(j + 1)}\,\hbar, \qquad j = l + \frac{1}{2},\ l - \frac{1}{2}
$$

$$
J_z = m_j\hbar, \qquad m_j = -j, -j + 1, \dots, j
$$

## conditions
- 전자 하나($s = \frac{1}{2}$)에 대한 식이다.
- $l = 0$이면 $j = \frac{1}{2}$ 하나뿐이다 ($j$는 음수가 될 수 없다).
- $m_j$는 $-j$부터 $j$까지 1씩 커지는 $2j + 1$개의 값.

## explanation
### 먼저 떠올릴 것
- 궤도 각운동량 $\mathbf{L}$ (크기 $\sqrt{l(l+1)}\,\hbar$)과 스핀 각운동량 $\mathbf{S}$ (크기 $\frac{\sqrt{3}}{2}\hbar$)는 각각 양자화된 벡터다.
- 전자는 둘을 모두 가지므로 전체 각운동량은 두 벡터의 합이다.

### 쉽게 말하면
- 스핀이 궤도 각운동량과 대체로 같은 쪽이면 $j = l + \frac{1}{2}$, 반대쪽이면 $j = l - \frac{1}{2}$.
- 합한 결과도 같은 규칙을 따른다: 크기는 $\sqrt{j(j+1)}\,\hbar$, $z$성분은 $m_j\hbar$.
- 궤도와 스핀은 서로 영향을 준다 (스핀-궤도 결합). 전체 자기 쌍극자 모멘트도 궤도와 스핀의 합이고, 전체 각운동량과 반대 방향이다.

### 한 번 따라 하기
$l = 1$($p$ 오비탈)인 전자:
- $j = \frac{3}{2}$: $m_j = -\frac{3}{2}, -\frac{1}{2}, \frac{1}{2}, \frac{3}{2}$ (4가지), 크기 $J = \frac{\sqrt{15}}{2}\hbar$.
- $j = \frac{1}{2}$: $m_j = -\frac{1}{2}, \frac{1}{2}$ (2가지), 크기 $J = \frac{\sqrt{3}}{2}\hbar$.

합하면 6가지 상태. $(m_l, m_s)$로 센 $3 \times 2 = 6$가지와 개수가 같다.

### 자주 틀리는 포인트
- 크기를 그냥 더하면 안 된다: $J \ne L + S$. 벡터의 합이고, 크기는 $j$로 다시 계산한다.

## supplement
교재 내용을 옮기고 예는 Claude가 추가했습니다. 교재 23-36에는 $m_j = \pm j, \pm(j - 1)$로만 적혀 있어, $-j$부터 $j$까지 1 간격이라는 일반적인 꼴로 적었습니다.
