---
id: phys-qm-infinite-well
title_ko: "1차원 무한 퍼텐셜 우물"
title_en: "one-dimensional infinite potential well"
question: "폭 L인 무한 퍼텐셜 우물에 갇힌 입자의 파동함수와 에너지 준위는?"
tags: [무한 퍼텐셜 우물, 무한 양자 우물, 상자 속 입자, 양자수, 바닥 상태, 에너지 양자화, 전이, infinite potential well, particle in a box, quantum number, ground state]
importance: 3
related: [phys-qm-schrodinger, phys-qm-wave-function, phys-wave-standing-wave, phys-qm-finite-well]
source: "book:BLIS편입 일반물리 22-20"
verified: false
---

## formula
$$
\psi_n(x) = \sqrt{\frac{2}{L}}\,\sin\frac{n\pi x}{L}
\qquad (0 < x < L)
$$

$$
E_n = \frac{h^2}{8mL^2}\,n^2 = \frac{\pi^2\hbar^2}{2mL^2}\,n^2
$$

## conditions
- $U = 0$ ($0 < x < L$), $U = \infty$ (그 밖). 우물 밖에서는 $\psi = 0$.
- $n = 1, 2, 3, \dots$: 양자수(quantum number). $n = 0$은 $\psi = 0$이 되어 입자가 없다는 뜻이므로 제외.
- 전자가 아니어도 아주 작은 입자면 똑같이 성립한다.
- 준위 사이를 옮겨 갈 때(전이) 주고받는 빛: $hf = \dfrac{hc}{\lambda} = E_{\text{high}} - E_{\text{low}}$.

## explanation
::fig well-states | 벽에서 0이 되어야 하므로 반파장이 정수 개 들어가는 파동만 남는다.

### 먼저 떠올릴 것
- 양 끝이 고정된 줄의 정상파: 줄의 길이에 반파장이 정수 개 들어가야 한다. $L = n\lambda/2$.
- 물질파: $p = h/\lambda$, 운동 에너지 $E = p^2/2m$.

### 한 번 따라 하기 (정상파로 바로 유도)
1. 벽에서 $\psi = 0$ → 정상파 조건 $\lambda_n = 2L/n$.
2. 운동량 $p_n = h/\lambda_n = nh/2L$.
3. 우물 안에서는 $U = 0$이라 에너지가 전부 운동 에너지다.

$$
E_n = \frac{p_n^2}{2m} = \frac{n^2h^2}{8mL^2}
$$

슈뢰딩거 방정식으로 풀어도 같다. 일반해 $A\sin kx + B\cos kx$에 $\psi(0) = 0$을 넣으면 $B = 0$, $\psi(L) = 0$을 넣으면 $k = n\pi/L$, 규격화하면 $A = \sqrt{2/L}$.

### 꼭 기억할 성질
- 에너지는 $n^2$에 비례한다: $E_1, 4E_1, 9E_1, \dots$ 준위 간격이 위로 갈수록 벌어진다.
- 바닥 상태(ground state, $n = 1$)의 에너지가 0이 아니다. 갇힌 입자는 가만히 있을 수 없다.
- 폭이 넓을수록($L$ 큼), 무거울수록($m$ 큼) 에너지가 낮고 준위가 촘촘하다.
- 확률 밀도 $\lvert\psi_n\rvert^2$의 극대는 $n$개, 우물 안쪽의 마디는 $n - 1$개.
- $n = 1$이면 가운데($x = L/2$)에서 발견될 확률이 가장 높다. 고전 입자라면 어디서나 같아야 한다.
- $n$이 아주 크면 확률 밀도가 촘촘하게 진동해 평균적으로 어디서나 같아진다 (고전 역학과 일치).

### 숫자 예
$n = 2 \to 1$로 전이할 때 나오는 광자의 에너지는

$$
hf = E_2 - E_1 = 3E_1 = \frac{3h^2}{8mL^2}
$$

$n = 3 \to 1$이면 $8E_1$, $n = 3 \to 2$이면 $5E_1$.

### 자주 틀리는 포인트
- 폭이 $2L$로 늘면 에너지는 $1/4$배 ($E \propto 1/L^2$).
- 극대의 개수는 양자수만으로 정해지고 폭과 무관하다.
- 준위 차이와 꼭 맞는 에너지의 빛만 흡수·방출한다. 중간 에너지의 빛은 흡수하지 못한다.
- 구간 확률은 대칭으로 읽는다. $n = 2$일 때 왼쪽 절반에서 발견될 확률은 적분 없이 $\frac{1}{2}$.

## supplement
교재 내용을 옮기고, 정상파를 이용한 빠른 유도와 숫자 예, 그림(well-states)은 Claude가 추가했습니다.
