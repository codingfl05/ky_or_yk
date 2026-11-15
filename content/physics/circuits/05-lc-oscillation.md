---
id: phys-circ-lc-oscillation
title_ko: "LC 진동 회로"
title_en: "LC oscillations"
question: "LC 회로의 각진동수와, 용수철 진동과의 대응은?"
tags: [LC 회로, 전자기 진동, 단진동, 각진동수, LC circuit, oscillation, simple harmonic motion]
importance: 2
related: [phys-em-inductance, phys-em-capacitor-energy, phys-circ-rlc-series]
source: "book:BLIS편입 일반물리 18-24~28"
verified: false
---

## formula
$$
L\frac{d^2q}{dt^2}+\frac{q}{C}=0, \qquad \omega = \frac{1}{\sqrt{LC}}
$$

$$
q = Q\cos(\omega t+\phi)
$$

$$
i = -\omega Q\sin(\omega t+\phi)
$$

$$
U = \frac{q^2}{2C}+\frac{1}{2}Li^2 = \frac{Q^2}{2C}
$$

## conditions
- 저항이 없는 이상적인 회로. 시작은 보통 완전히 충전된 축전기.

## explanation
### 쉽게 말하면
충전된 축전기가 코일로 방전 → 코일이 전류를 붙잡아 반대 방향으로 다시 충전 → 다시 방전... 이 반복된다. 저항이 없으니 에너지가 줄지 않고 전기 에너지와 자기 에너지가 계속 주고받는다.

| 용수철 | LC 회로 |
|---|---|
| 위치 $x$ | 전하 $q$ |
| 속도 $v$ | 전류 $i$ |
| $k$ | $\dfrac{1}{C}$ |
| $m$ | $L$ |
| $\dfrac{1}{2}kx^2$ | $\dfrac{q^2}{2C}$ |
| $\dfrac{1}{2}mv^2$ | $\dfrac{1}{2}Li^2$ |
| $\omega=\sqrt{\dfrac{k}{m}}$ | $\omega=\dfrac{1}{\sqrt{LC}}$ |

- $q$가 최대일 때 $i=0$, $q=0$일 때 $i$ 최대 ($I=\omega Q$).
- 에너지 비율 문제: 자기 에너지가 전체의 $75\%$면 전기 에너지 $25\%$ → $q=\dfrac{Q}{2}$, $i=\dfrac{\sqrt3}{2}I$.

### 먼저 떠올릴 것: 용수철 진동
용수철에 매달린 물체는 $ma = -kx$, 곧 "가속도가 위치에 비례하고 방향이 반대"라서 $\omega = \sqrt{\dfrac{k}{m}}$로 진동한다 (진동 단원).
LC 회로에서 고리 법칙을 쓰면 코일 전압 $L\dfrac{di}{dt}$와 축전기 전압 $\dfrac{q}{C}$의 합이 0이다. $i = \dfrac{dq}{dt}$이므로

$$
L\frac{d^2q}{dt^2} = -\frac{1}{C}\,q
$$

$m \to L$, $k \to \dfrac{1}{C}$, $x \to q$로 글자만 바꾼 같은 식이다. 그래서 답도 글자만 바꾸면 된다: $\omega = \sqrt{\dfrac{1/C}{L}} = \dfrac{1}{\sqrt{LC}}$.

### 한 주기를 네 장면으로
1. 축전기가 가득 참: $q = Q$, $i = 0$. 에너지는 전부 축전기(전기장)에.
2. 방전 완료: $q = 0$, 전류 최대. 에너지는 전부 코일(자기장)에. 코일이 전류를 붙잡아 계속 흐르게 한다.
3. 반대로 가득 참: $q = -Q$, $i = 0$. 판의 부호가 뒤집혀 다시 전부 축전기에.
4. 다시 방전: 전류가 반대 방향으로 최대. 그 뒤 1로 돌아온다.

## story
축전기는 늘어난 용수철, 코일은 매달린 추다. 용수철이 추를 밀고(방전), 추는 관성으로 지나쳐 용수철을 반대로 누르고(역충전), 이게 끝없이 반복된다.

## supplement
교재 내용을 옮기고, 쉬운 설명·스토리는 Claude가 추가했습니다. 에너지 비율 예시는 교재 예제를 Claude가 계산한 것입니다. 쉬운 설명·그림 보강: 용수철 진동과 식을 나란히 놓은 설명, 한 주기 네 장면.
