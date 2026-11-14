---
id: prob-phys-em-small-coil-at-loop-center-torque
title_ko: "큰 원형 고리 중심에 놓인 작은 코일이 받는 돌림힘"
source: "뿌리물리 워크북 93번"
difficulty: 2
tags: [자기 쌍극자, 돌림힘, 원형 고리 중심 자기장, 비오-사바르, 앙페르 법칙, 자기 자신의 자기장, magnetic dipole, torque, circular loop, biot-savart, ampere's law, self field]
related: [phys-em-magnetic-dipole, phys-em-biot-savart, phys-em-ampere-law]
images: []
verified: false
---

## problem
반지름 $R = 0.10\,\text{m}$인 큰 원형 고리에 $I_1 = \dfrac{5}{\pi}\,\text{A}$가 흐르고, 그 중심에 반지름 $r = \dfrac{1}{\pi}\,\text{cm}$, $N = 100$회인 작은 코일에 $I_2 = 2.0\,\text{A}$가 흐른다. 두 자기모멘트가 수직일 때 작은 코일이 받는 돌림힘의 크기를 구한다.

## answer
$\tau = \dfrac{2.0}{\pi}\times10^{-7}\,\text{N}\cdot\text{m}$

## key-idea
- 작은 코일이 받는 돌림힘은 바깥(큰 고리)이 만든 자기장만으로 정해진다 → 큰 고리 중심의 자기장 $B = \dfrac{\mu_0 I_1}{2R} = 1.0\times10^{-5}\,\text{T}$ (비오-사바르)
- 작은 코일은 균일한 $B$ 속의 자기 쌍극자: $\mu = NI_2\pi r^2 = \dfrac{2.0\times10^{-2}}{\pi}\,\text{A}\cdot\text{m}^2$
- 두 자기모멘트가 수직 → $\boldsymbol\mu_2 \perp \mathbf{B}$ ($\mathbf{B}$는 큰 고리의 자기모멘트 방향) → $\tau = \mu B = \dfrac{2.0}{\pi}\times10^{-7}\,\text{N}\cdot\text{m}$

## solution
### 왜 작은 코일의 전류는 자기장 계산에 넣지 않는가
1. 자기 자신이 만든 자기장으로는 자기를 돌릴 수 없다. 작은 코일의 전류도 자기장을 만들지만, 그 자기장이 코일 자신의 도선에 주는 힘은 코일 안의 도선 조각끼리 주고받는 힘(내력)이다. 뉴턴 제3법칙으로 쌍마다 크기가 같고 방향이 반대라 모두 더하면 알짜힘도, 알짜 돌림힘도 0이다. 사람이 자기 머리카락을 잡아당겨 자기 몸을 들어 올릴 수 없는 것과 같다. 그래서 $\boldsymbol\tau = \boldsymbol\mu\times\mathbf{B}$의 $\mathbf{B}$는 항상 "다른 것이 만든 바깥 자기장"이다.
2. $I_{\text{enc}}$는 앙페르 법칙에서만 쓰는 양이다. 이 문제의 $B = \dfrac{\mu_0 I_1}{2R}$은 비오-사바르 법칙으로 큰 고리 도선을 적분해서 얻은 값이라 "감싼 전류"라는 개념이 없다. 원형 고리 하나는 대칭성이 부족해서($B$가 일정한 앙페르 경로를 잡을 수 없음) 애초에 앙페르 법칙으로 구할 수 없다. 작은 코일이 큰 고리 "안"에 있다고 해서 $I_{\text{enc}}$에 들어가는 것이 아니다.
3. 덧붙여, 반대로 큰 고리도 작은 코일의 자기장 때문에 같은 크기의 반대 방향 돌림힘을 받는다 (작용-반작용). 이 문제는 작은 코일 쪽만 묻는다.

### 작은 코일을 "균일한 자기장 속 쌍극자"로 보는 이유
작은 코일($r \approx 0.32\,\text{cm}$)이 큰 고리($R = 10\,\text{cm}$)보다 훨씬 작아서, 코일이 차지하는 좁은 영역에서 큰 고리의 자기장은 중심값 $\dfrac{\mu_0 I_1}{2R}$으로 거의 일정하다.

## mistakes
- 작은 코일이 큰 고리 안에 있으니 $I_1 + NI_2$를 "감싼 전류"처럼 더해 $B$를 구하려 하기 쉽다. 돌림힘에 쓰는 $\mathbf{B}$는 바깥 자기장만이고, 고리 중심 자기장은 앙페르가 아니라 비오-사바르 결과다.
- "두 자기모멘트가 수직"을 $\sin\varphi$의 각으로 바로 쓸 수 있는 이유: 큰 고리 중심의 $\mathbf{B}$는 큰 고리의 자기모멘트와 같은 방향(고리 면에 수직)이다.

## supplement
문제·정답·해설은 사용자가 준 자료(뿌리물리 워크북 93번) 그대로 요약했습니다. 정답은 Claude가 다시 계산해 일치를 확인했습니다. solution(작은 코일의 전류를 넣지 않는 이유, 균일 자기장 근사)과 mistakes는 사용자 요청으로 Claude가 추가했습니다.
