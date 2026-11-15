---
id: phys-qm-schrodinger
title_ko: "슈뢰딩거 방정식과 일반해"
title_en: "Schrödinger equation and its general solution"
question: "1차원 시간 무관 슈뢰딩거 방정식과, E가 U보다 클 때·작을 때의 해의 꼴은?"
tags: [슈뢰딩거 방정식, 파동 방정식, 각파수, 일반해, Schrodinger equation, time-independent, general solution]
importance: 2
related: [phys-qm-wave-function, phys-qm-de-broglie, phys-qm-infinite-well, phys-qm-finite-well]
source: "book:BLIS편입 일반물리 22-14"
verified: false
---

## formula
$$
-\frac{\hbar^2}{2m}\frac{d^2\psi}{dx^2} + U(x)\,\psi = E\psi
$$

$$
\frac{d^2\psi}{dx^2} + \frac{2m}{\hbar^2}\,[E - U(x)]\,\psi = 0
$$

## conditions
- $E$: 입자의 역학적 에너지 (상수), $U(x)$: 퍼텐셜 에너지, $\hbar = h/2\pi$.
- 시간에 의존하지 않는 1차원 방정식이다.
- 상대론적 효과는 넣지 않는다 (입자의 속력이 $c$보다 한참 느릴 때).

## explanation
### 먼저 떠올릴 것
- 줄의 파동이 파동 방정식을 따르듯, 물질파의 파동함수도 따르는 방정식이 있다. 그것이 슈뢰딩거 방정식이다.
- 에너지 보존: 운동 에너지 = $E - U$. 그리고 $K = p^2/2m$, 물질파에서 $p = \hbar k$.

### 기호 풀이
- $\dfrac{d^2\psi}{dx^2}$: 파동함수가 얼마나 급하게 휘는지. 급하게 휠수록 파장이 짧고 운동 에너지가 크다.
- 첫 식은 "운동 에너지 + 퍼텐셜 에너지 = 전체 에너지"를 파동함수에 대한 식으로 쓴 것이다.

### 일반해: U가 일정한 구간에서
1. $E > U$ (고전적으로 갈 수 있는 곳): 진동하는 해.

$$
\psi = A\sin kx + B\cos kx, \qquad k = \frac{\sqrt{2m(E - U)}}{\hbar}
$$

같은 해를 $\psi = Ae^{ikx} + Be^{-ikx}$로 써도 된다 ($e^{i\theta} = \cos\theta + i\sin\theta$).

2. $E < U$ (고전적으로 못 가는 곳): 지수 함수 해.

$$
\psi = Ce^{\beta x} + De^{-\beta x}, \qquad \beta = \frac{\sqrt{2m(U - E)}}{\hbar}
$$

### 푸는 순서
1. 구간마다 $E$와 $U$를 비교해 해의 꼴(진동 / 지수)을 적는다.
2. 경계 조건을 건다: 구간의 이음매에서 $\psi$와 기울기가 연속, 무한히 먼 곳에서 발산하지 않음.
3. 규격화로 남은 상수를 정한다.

경계 조건을 만족하는 $k$가 몇 개뿐이면 에너지도 그 값들만 가능하다. 이것이 양자화다.

### 한 번 따라 하기
$k = \sqrt{2m(E - U)}/\hbar$는 $p = \hbar k$와 같은 말이다.

$$
E - U = K = \frac{p^2}{2m} = \frac{(\hbar k)^2}{2m}
$$

그래서 $k = p/\hbar = 2\pi/\lambda$, 곧 드 브로이 파장이 그대로 들어 있다.

### 자주 틀리는 포인트
- $E - U$가 큰 곳일수록 $k$가 커서 파장이 짧다 (입자가 빠르다).
- $E < U$인 곳에서도 $\psi$가 바로 0이 되지 않고 지수적으로 줄어든다. 터널링의 근원이다.

## supplement
교재 내용을 옮기고, $E < U$인 경우의 해를 같은 카드에 묶은 것과 "푸는 순서"는 Claude가 정리했습니다. 교재 22-16에는 $e^{i\theta} = \cos\theta - i\sin\theta$로 적혀 있는데, 오일러 공식은 $e^{i\theta} = \cos\theta + i\sin\theta$가 맞습니다.
