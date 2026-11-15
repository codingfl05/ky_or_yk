---
id: phys-qm-tunneling
title_ko: "터널링과 투과 계수"
title_en: "tunneling and transmission coefficient"
question: "에너지 E인 입자가 높이 U0, 폭 a인 장벽을 뚫고 지나갈 확률은?"
tags: [터널링, 터널 효과, 투과 계수, 반사 계수, 퍼텐셜 장벽, tunneling, transmission coefficient, reflection coefficient, potential barrier]
importance: 2
related: [phys-qm-finite-well, phys-qm-schrodinger, phys-nuc-alpha-decay]
source: "book:BLIS편입 일반물리 22-30"
verified: false
---

## formula
$$
T \approx T_0\,e^{-2\beta a}
\qquad (\beta a \gg 1)
$$

$$
\beta = \frac{\sqrt{2m(U_0 - E)}}{\hbar}, \qquad T_0 = 16\,\frac{E}{U_0}\left(1 - \frac{E}{U_0}\right)
$$

## conditions
- $E < U_0$: 고전적으로는 넘을 수 없는 장벽.
- $a$: 장벽의 폭, $m$: 입자의 질량.
- $T$: 투과 계수(투과할 확률), $R$: 반사 계수(반사할 확률). $R + T = 1$.
- 파동함수로 쓰면 $T = \lvert\psi_{\text{투과}}\rvert^2 / \lvert\psi_{\text{입사}}\rvert^2$, $R = \lvert\psi_{\text{반사}}\rvert^2 / \lvert\psi_{\text{입사}}\rvert^2$ (진폭 제곱의 비).

## explanation
::fig tunnel-barrier | 장벽 안에서는 진동하지 않고 지수적으로 줄어든다.

### 먼저 떠올릴 것
- 역학: 공이 언덕을 넘으려면 역학적 에너지가 언덕 꼭대기의 퍼텐셜 에너지보다 커야 한다. 모자라면 반드시 되돌아온다.
- 유한 우물: $E < U_0$인 곳에서도 파동함수는 바로 0이 되지 않고 $e^{-\beta x}$로 줄어들며 스며든다.

### 쉽게 말하면
장벽이 충분히 얇으면, 파동함수가 다 사라지기 전에 장벽 반대편에 닿는다. 그러면 반대편에서도 입자가 발견될 확률이 생긴다. 에너지가 모자란 입자가 장벽을 "뚫고" 지나가는 이 현상이 터널링(tunneling)이다.

세 영역의 파동함수는 이렇다.
- 장벽 앞: 입사파 $A_1e^{ikx}$ + 반사파 $A_2e^{-ikx}$.
- 장벽 안: $B_2e^{-\beta x}$ (지수 감소).
- 장벽 뒤: 투과파 $C_1e^{ikx}$ ($+x$ 방향만).

### 무엇이 투과 확률을 정하나
지수 $-2\beta a$가 거의 모든 것을 정한다. 다음이 클수록 투과 확률이 지수적으로 줄어든다.
- 장벽의 폭 $a$
- 입자의 질량 $m$
- 에너지 부족분 $U_0 - E$

### 한 번 따라 하기
어떤 장벽에서 $2\beta a = 10$이면 $T \approx T_0\,e^{-10}$이다. 폭만 2배로 늘리면 $T \approx T_0\,e^{-20}$이 되어, 투과 확률이 $e^{-10} \approx 4.5 \times 10^{-5}$배로 줄어든다. 폭이 2배인데 확률은 약 2만 분의 1이다.

### 자주 틀리는 포인트
- 투과한 뒤에도 입자의 에너지와 각파수 $k$(파장)는 그대로다. 줄어드는 것은 진폭, 곧 발견될 확률뿐이다. "에너지를 잃고 통과한다"가 아니다.
- 입자 하나가 쪼개져 일부만 통과하는 것이 아니다. 입자 하나가 확률 $T$로 통째로 통과하거나 확률 $R$로 통째로 반사된다.
- 무거운 물체는 $\beta$가 엄청나게 커서 터널링이 사실상 일어나지 않는다.
- 쓰이는 곳: 주사 터널링 현미경(STM), 플래시 메모리, 알파 붕괴.

## supplement
교재 내용을 옮기고, $R + T = 1$과 숫자 예, 그림(tunnel-barrier)은 Claude가 추가했습니다. 교재의 "전자현미경"은 터널링을 직접 쓰는 주사 터널링 현미경(STM)으로 적었습니다.
