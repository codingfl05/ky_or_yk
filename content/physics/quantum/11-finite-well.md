---
id: phys-qm-finite-well
title_ko: "유한 퍼텐셜 우물"
title_en: "finite potential well"
question: "깊이가 유한한 우물에 갇힌 전자의 파동함수는 무한 우물과 무엇이 다른가?"
tags: [유한 퍼텐셜 우물, 침투 깊이, 속박 상태, finite potential well, penetration depth, bound state]
importance: 2
related: [phys-qm-infinite-well, phys-qm-tunneling, phys-qm-schrodinger]
source: "book:BLIS편입 일반물리 22-26"
verified: false
---

## formula
$$
\psi_{\text{II}} = Ae^{ikx} + Be^{-ikx}, \qquad k^2 = \frac{2mE}{\hbar^2}
$$

$$
\psi_{\text{I}} = C_1 e^{\beta x}, \qquad \psi_{\text{III}} = D_2 e^{-\beta x}
$$

$$
\beta^2 = \frac{2m(U_0 - E)}{\hbar^2}
$$

## conditions
- $U = 0$ ($0 < x < L$, 영역 II), $U = U_0$ ($x < 0$: 영역 I, $x > L$: 영역 III).
- 갇힌(속박된) 전자: $E < U_0$.
- 우물 밖에서 무한히 멀어질 때 발산하지 않도록, 왼쪽은 $e^{\beta x}$, 오른쪽은 $e^{-\beta x}$만 남긴다.
- 경계 $x = 0$, $x = L$에서 $\psi$와 그 기울기가 연속.
- 침투 깊이(penetration depth) $1/\beta$: 우물 밖에서 파동함수가 $1/e$배로 줄어드는 거리.

## explanation
### 먼저 떠올릴 것
- 무한 우물: 벽이 무한히 높아 벽 밖에서 $\psi = 0$이고, 파동함수가 벽에서 딱 0이 된다.
- 슈뢰딩거 방정식의 해의 꼴: $E > U$인 곳에서는 진동($\sin$, $\cos$), $E < U$인 곳에서는 지수 함수.

### 쉽게 말하면
벽이 유한하면 파동함수가 벽에서 바로 0이 되지 않고, 벽 안으로 조금 스며든 뒤 지수적으로 사라진다. 고전 역학에서는 에너지가 모자란 입자가 벽 속에 있을 수 없지만, 양자역학에서는 벽 속에서 발견될 확률이 있다.

### 무한 우물과 비교
| | 무한 우물 | 유한 우물 |
|---|---|---|
| 벽 밖의 $\psi$ | $0$ | 지수적으로 감소 |
| 갇힌 상태의 수 | 무한 개 | 유한 개 |
| 같은 $n$의 에너지 | 높음 | 더 낮음 |

- 에너지가 더 낮은 이유: 파동이 벽 밖으로 스며든 만큼 파장이 길어진다. 파장이 길면 운동량과 에너지가 작다.
- $n$이 클수록 $U_0 - E$가 작아 $\beta$가 작고, 더 깊이 침투한다.
- $E > U_0$이면 전자는 갇혀 있지 않다. 에너지가 양자화되지 않고 어떤 값이든 가질 수 있다 (자유 전자처럼 행동).

### 한 번 따라 하기: 빛을 받아 탈출하기
깊이 $U_0 = 570\,\text{eV}$인 우물의 바닥 상태 에너지가 $20\,\text{eV}$라 하자.
- 전자가 우물을 벗어나려면 적어도 $570 - 20 = 550\,\text{eV}$를 받아야 한다.
- 그 에너지를 주는 빛의 파장이 탈출시킬 수 있는 가장 긴 파장이다.

$$
\lambda_{\text{max}} = \frac{hc}{550\,\text{eV}} \approx \frac{1240}{550} \approx 2.25\,\text{nm}
$$

- 이보다 짧은 파장(더 큰 에너지)의 빛은 얼마든지 흡수할 수 있다. 남는 에너지는 자유 전자의 운동 에너지가 된다. 파장 $2\,\text{nm}$($620\,\text{eV}$)를 흡수하면 탈출 후 운동 에너지는 $70\,\text{eV}$.

### 자주 틀리는 포인트
- 우물 안의 준위 사이에서는 딱 맞는 에너지의 빛만 흡수하지만, 우물 밖(연속 상태)으로 나갈 때는 문턱 이상이면 모두 가능하다.
- 확률 밀도 $\lvert\psi\rvert^2$는 $e^{-2\beta x}$로 줄어든다. 확률 밀도가 $1/e$배가 되는 거리는 $1/2\beta$다.

## supplement
교재 내용을 옮기고, 비교 표와 탈출 예, 확률 밀도의 감소 거리에 대한 한 줄은 Claude가 추가했습니다.
