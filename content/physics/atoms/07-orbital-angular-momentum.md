---
id: phys-atom-orbital-angular-momentum
title_ko: "궤도 각운동량의 양자화"
title_en: "quantization of orbital angular momentum"
question: "궤도 양자수 l, 자기 양자수 m_l인 전자의 각운동량 크기와 z성분은?"
tags: [궤도 각운동량, 각운동량 양자화, 공간 양자화, orbital angular momentum, space quantization]
importance: 3
related: [phys-atom-quantum-numbers, phys-atom-orbital-magnetic-moment, phys-rot-angular-momentum, phys-atom-spin]
source: "book:BLIS편입 일반물리 23-30"
verified: false
---

## formula
$$
L = \sqrt{l(l + 1)}\,\hbar
$$

$$
L_z = m_l\hbar
$$

## conditions
- $l = 0, 1, \dots, n - 1$: 각운동량의 크기를 정한다.
- $m_l = 0, \pm 1, \dots, \pm l$: 각운동량의 $z$성분을 정한다. $z$축은 보통 외부 자기장의 방향으로 잡는다.
- $L_x$, $L_y$는 정해지지 않는다. 각운동량 벡터의 방향을 완전히 알 수는 없다.

## explanation
::fig l-cone | 길이가 같은 화살표가 정해진 높이로만 설 수 있다.

### 먼저 떠올릴 것
- 각운동량: 회전 운동의 "운동량". 원운동하는 질점은 $L = mvr$이고, 방향은 회전축 방향(오른손 법칙)인 벡터다.
- 보어 모델은 $L = n\hbar$라 가정했다. 양자화된다는 생각은 맞았지만 값은 틀렸다. 올바른 값이 위 식이다.

### 쉽게 말하면
- 크기도 띄엄띄엄, 방향도 띄엄띄엄하다. 방향까지 양자화되는 것을 공간 양자화라 한다.
- 화살표(각운동량 벡터)의 길이는 $l$이 정하고, 그 화살표가 $z$축에 드리운 그림자의 길이는 $m_l$이 정한다.

### 한 번 따라 하기: l = 2
- 크기: $L = \sqrt{2 \cdot 3}\,\hbar = \sqrt{6}\,\hbar \approx 2.45\hbar$.
- $z$성분: $-2\hbar, -\hbar, 0, \hbar, 2\hbar$ (5가지).
- $z$축과 이루는 각: $\cos\theta = \dfrac{L_z}{L} = \dfrac{m_l}{\sqrt{l(l + 1)}}$. $m_l = 2$이면 $\cos\theta = 2/\sqrt{6}$, $\theta \approx 35^\circ$.

### 왜 z축에 딱 나란할 수 없나
$L_z$의 최댓값 $l\hbar$는 크기 $\sqrt{l(l+1)}\,\hbar$보다 항상 작다. 만약 벡터가 $z$축과 완전히 나란하면 $L_x = L_y = 0$으로 세 성분이 모두 정확히 정해져 불확정성 원리에 어긋난다.

### 거꾸로 묻는 문제
각운동량의 크기가 $2\sqrt{3}\,\hbar$이면 $l(l + 1) = 12$에서 $l = 3$. 가능한 $m_l$은 $-3$부터 $3$까지 7가지다.

### 자주 틀리는 포인트
- 크기는 $l\hbar$가 아니라 $\sqrt{l(l+1)}\,\hbar$.
- $l = 0$($s$ 오비탈)이면 $L = 0$. 바닥 상태 수소의 궤도 각운동량은 0이다 (보어 모델의 $\hbar$와 다르다).
- 주 양자수 $n$은 각운동량에 직접 들어가지 않는다. $l$의 범위만 제한한다.

## supplement
교재 내용을 옮기고, $l = 2$ 예와 각도 계산, 그림(l-cone)은 Claude가 추가했습니다.
