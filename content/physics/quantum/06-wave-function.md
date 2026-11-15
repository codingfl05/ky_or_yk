---
id: phys-qm-wave-function
title_ko: "파동함수와 확률 밀도"
title_en: "wave function and probability density"
question: "파동함수의 절댓값 제곱은 무엇을 뜻하고, 파동함수가 갖춰야 할 조건은?"
tags: [파동함수, 확률 밀도, 규격화, 확률 해석, wave function, probability density, normalization]
importance: 3
related: [phys-qm-de-broglie, phys-qm-schrodinger, phys-qm-infinite-well]
source: "book:BLIS편입 일반물리 22-14"
verified: false
---

## formula
$$
dP = \lvert\psi\rvert^2\,dV
$$

$$
\int_{-\infty}^{\infty} \lvert\psi(x)\rvert^2\,dx = 1
$$

$$
P(x_1 \le x \le x_2) = \int_{x_1}^{x_2} \lvert\psi(x)\rvert^2\,dx
$$

## conditions
- $\psi$: 파동함수(wave function). 시간까지 넣으면 $\Psi(x, t) = \psi(x)\,e^{-i\omega t}$.
- $\lvert\psi\rvert^2$: 확률 밀도(probability density). 단위 부피(1차원에서는 단위 길이)당 입자를 발견할 확률.
- 둘째 식은 규격화(normalization) 조건: 입자는 어딘가에는 반드시 있다.
- 파동함수의 조건: 연속, 미분 가능(기울기도 연속), 한 점에서 값이 하나, 발산하지 않음.

## explanation
### 먼저 떠올릴 것
- 물질파: 전자는 파장 $\lambda = h/p$인 파동처럼 행동한다. 이 파동을 함수로 적은 것이 파동함수다.
- 빛의 이중 슬릿 무늬에서 밝은 곳은 "광자가 도착할 확률이 높은 곳"이고, 그 확률은 빛의 세기, 곧 전기장 진폭의 제곱에 비례했다. 전자의 파동함수도 같은 방식으로 읽는다.

### 기호 풀이
- $\psi$ 자체는 직접 측정되지 않는다. 측정과 이어지는 것은 $\lvert\psi\rvert^2$다.
- $\lvert\psi\rvert^2$는 "밀도"다. 한 점의 값 자체는 확률이 아니고, 구간의 길이 $dx$를 곱해야 확률이 된다. 사람 수 = 인구 밀도 × 넓이인 것과 같다.
- 적분 $\int_{x_1}^{x_2}\lvert\psi\rvert^2 dx$는 그 구간에서 확률 밀도 그래프 아래의 넓이다.
- $\psi$가 복소수이면 $\lvert\psi\rvert^2 = \psi^*\psi$ (켤레 복소수를 곱한다).

### 왜 조건이 필요한가
- 연속이 아니면 한 점에서 확률 밀도가 둘이 되어 버린다.
- 발산하면 전체 확률을 1로 맞출 수 없다.
- 이 조건들이 뒤에서 경계 조건으로 쓰이고, 경계 조건이 에너지를 띄엄띄엄하게 만든다.

### 한 번 따라 하기
$0 \le x \le L$에서 $\psi = A\sin\dfrac{\pi x}{L}$이고 그 밖에서 0인 입자의 $A$를 구한다.

$$
\int_0^L A^2\sin^2\frac{\pi x}{L}\,dx = A^2 \cdot \frac{L}{2} = 1
$$

따라서 $A = \sqrt{2/L}$. ($\sin^2$의 한 주기 평균이 $\frac{1}{2}$이라는 것을 쓰면 적분하지 않아도 된다.)

### 자주 틀리는 포인트
- "$\psi$가 최대인 곳"이 아니라 "$\lvert\psi\rvert^2$가 최대인 곳"에서 발견될 확률이 가장 높다. $\psi$가 음수여도 확률 밀도는 양수다.
- $\psi = 0$인 점(마디)에서는 입자가 발견되지 않는다.
- 파동함수는 파동이므로 중첩과 간섭이 일어난다.

## supplement
교재 내용을 옮기고, 규격화 조건 식과 구간 확률 식, 쉬운 설명과 예는 Claude가 추가했습니다.
