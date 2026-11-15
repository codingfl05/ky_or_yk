---
id: phys-qm-free-electron
title_ko: "자유 전자의 파동함수"
title_en: "wave function of a free electron"
question: "퍼텐셜 에너지가 0인 자유 전자의 파동함수와 확률 밀도는?"
tags: [자유 전자, 평면파, 확률 밀도, free electron, plane wave]
importance: 1
related: [phys-qm-schrodinger, phys-qm-uncertainty, phys-qm-de-broglie]
source: "book:BLIS편입 일반물리 22-18"
verified: false
---

## formula
$$
\psi(x) = Ae^{ikx}, \qquad \lvert\psi\rvert^2 = A^2
$$

$$
E = \frac{\hbar^2 k^2}{2m}, \qquad p = \hbar k = \frac{h}{\lambda}
$$

## conditions
- 자유 전자(free electron): 넘어야 할 퍼텐셜 에너지가 없는 전자, $U(x) = 0$.
- $Ae^{ikx}$: $+x$ 방향으로 가는 전자. $Be^{-ikx}$: $-x$ 방향으로 가는 전자.
- $k = \sqrt{2mE}/\hbar$. 경계 조건이 없으므로 $k$와 $E$는 어떤 값이든 가능하다 (양자화되지 않음).

## explanation
### 먼저 떠올릴 것
- 슈뢰딩거 방정식에서 $U = 0$으로 두면

$$
\frac{d^2\psi}{dx^2} + k^2\psi = 0
$$

- 해는 $\psi = Ae^{ikx} + Be^{-ikx}$. 한 방향으로만 가는 전자라면 둘 중 한 항만 남는다.

### 쉽게 말하면
- 확률 밀도 $\lvert\psi\rvert^2 = Ae^{ikx} \cdot Ae^{-ikx} = A^2$는 $x$와 상관없는 상수다.
- 곧 전자를 발견할 확률이 모든 위치에서 같다. 측정하기 전까지 전자가 어디 있는지 전혀 모른다.
- 대신 운동량은 $p = \hbar k$ 하나로 정확히 정해져 있다.
- 운동량을 정확히 알면 위치를 전혀 모른다. 불확정성 원리의 한쪽 끝이다.

### 갇힌 전자와 비교
| | 자유 전자 | 우물에 갇힌 전자 |
|---|---|---|
| 에너지 | 연속 (아무 값) | 양자화 |
| 확률 밀도 | 어디서나 같음 | 위치마다 다름 |

에너지가 띄엄띄엄해지는 것은 전자가 "갇혀서" 경계 조건이 생길 때다.

## supplement
교재 내용을 옮기고, 비교 표와 불확정성 원리와의 연결은 Claude가 추가했습니다.
