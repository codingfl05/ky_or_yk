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

## story
축전기는 늘어난 용수철, 코일은 매달린 추다. 용수철이 추를 밀고(방전), 추는 관성으로 지나쳐 용수철을 반대로 누르고(역충전), 이게 끝없이 반복된다.

## supplement
교재 내용을 옮기고, 쉬운 설명·스토리는 Claude가 추가했습니다. 에너지 비율 예시는 교재 예제를 Claude가 계산한 것입니다.
