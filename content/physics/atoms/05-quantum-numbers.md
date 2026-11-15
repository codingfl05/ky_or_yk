---
id: phys-atom-quantum-numbers
title_ko: "수소 원자의 양자수 n, l, m_l"
title_en: "quantum numbers of the hydrogen atom"
question: "수소 원자 전자의 상태를 정하는 양자수 n, l, m_l의 허용 값과 의미는?"
tags: [양자수, 주 양자수, 궤도 양자수, 자기 양자수, 오비탈, 껍질, 상태 수, quantum numbers, principal quantum number, orbital quantum number, magnetic quantum number, orbital, shell]
importance: 3
related: [phys-atom-hydrogen-energy, phys-atom-orbital-angular-momentum, phys-atom-spin, phys-atom-multi-electron]
source: "book:BLIS편입 일반물리 23-14"
verified: false
---

## formula
$$
n = 1, 2, 3, \dots
$$

$$
l = 0, 1, 2, \dots, n - 1
$$

$$
m_l = -l, \dots, -1, 0, 1, \dots, l
$$

## conditions
- $n$: 주 양자수(principal quantum number). 에너지와 전자 껍질을 정한다.
- $l$: 궤도 양자수(orbital quantum number). 궤도 각운동량의 크기와 오비탈의 모양을 정한다.
- $m_l$: 궤도 자기 양자수(orbital magnetic quantum number). 각운동량의 방향($z$성분)과 오비탈의 방향을 정한다.
- 수소 원자의 에너지는 $n$만으로 정해진다: $E_n = -13.6/n^2\,\text{eV}$ (보어 모델과 같은 값).

## explanation
### 먼저 떠올릴 것
- 1차원 우물에서는 양자수가 하나($n$), 3차원 상자에서는 축마다 하나씩 셋($n_x$, $n_y$, $n_z$)이었다. 차원 하나에 양자수 하나다.
- 원자 속 전자도 3차원에 있으므로 양자수가 3개 필요하다. 다만 원자는 공 모양으로 대칭이라 직교 좌표 $(x, y, z)$ 대신 구면 좌표 $(r, \theta, \phi)$로 푼다.

### 파동함수의 분리
$$
\psi(r, \theta, \phi) = R_{nl}(r)\,Y_{l m_l}(\theta, \phi)
$$

- $R_{nl}(r)$: 핵에서의 거리에 따라 어떻게 변하는가 ($n$, $l$로 정해짐).
- $Y_{lm_l}(\theta, \phi)$: 방향에 따라 어떻게 변하는가 ($l$, $m_l$로 정해짐).
- $\theta$는 $+z$축에서 잰 각($0 \sim \pi$), $\phi$는 $+x$축에서 $xy$평면을 따라 돈 각($0 \sim 2\pi$).
- 이 파동함수 $\psi_{nlm_l}$을 오비탈(orbital)이라 부른다.

### 이름 붙이기
$l$의 값에 글자를 붙인다.

| $l$ | 글자 | $m_l$의 개수 |
|---|---|---|
| $0$ | $s$ (공 모양) | $1$ |
| $1$ | $p$ (아령 모양) | $3$ |
| $2$ | $d$ | $5$ |
| $3$ | $f$ | $7$ |

$n = 3$, $l = 1$이면 $3p$ 오비탈이다. $l < n$이어야 하므로 $1p$, $2d$ 같은 것은 없다.

### 개수 세기
- $l$ 하나에 $m_l$은 $2l + 1$개.
- $n$ 하나에 $(l, m_l)$ 조합은 $n^2$개.

$$
\sum_{l=0}^{n-1}(2l + 1) = n^2
$$

- 스핀($m_s = \pm\frac{1}{2}$)까지 세면 2배: 부껍질 하나에 $2(2l + 1)$개, 껍질 하나에 $2n^2$개의 상태.

### 한 번 따라 하기
1. $n = 5$일 때 가능한 $l$: $0, 1, 2, 3, 4$ (5개).
2. $l = 3$일 때 가능한 $m_l$: $-3, -2, -1, 0, 1, 2, 3$ (7개).
3. $n = 3$, $l = 2$ ($3d$)에 전자가 있을 수 있는 상태의 수: $m_l$이 5가지, 각각 스핀 2가지 → 10개.

### 자주 틀리는 포인트
- $l$의 최댓값은 $n$이 아니라 $n - 1$.
- $m_l$에는 0과 음수가 있다. 개수는 $2l$이 아니라 $2l + 1$.
- "상태의 수"를 물으면 스핀을 포함하는지 문제에서 확인한다. 전자가 "존재할 수 있는 양자 상태"는 보통 스핀까지 센다.

## supplement
교재 내용을 옮기고, 개수 세기 정리와 예는 Claude가 추가했습니다. 교재 23-18 파동함수 표의 셋째 줄은 $n = 2$, $l = 0$으로 적혀 있는데, $m_l = 0, \pm 1$을 가지는 $2p$ 상태이므로 $l = 1$이 맞습니다.
