---
id: phys-em-lorentz-force
title_ko: "움직이는 전하가 받는 자기력 (로렌츠 힘)"
title_en: "Magnetic force on a moving charge"
question: "자기장 속 움직이는 전하가 받는 힘과 원운동의 반지름·주기는?"
tags: [자기력, 로렌츠 힘, 등속 원운동, 사이클로트론, 속도 선택기, 홀 효과, Lorentz force, cyclotron, Hall effect]
importance: 3
related: [phys-em-force-on-current, phys-em-biot-savart]
source: "book:BLIS편입 일반물리 16-02, 16-26~30"
verified: false
---

## formula
$$
\mathbf{F}_B = q\mathbf{v}\times\mathbf{B}, \qquad F_B = |q|vB\sin\phi
$$

$$
r = \frac{mv}{|q|B}, \qquad T = \frac{2\pi m}{|q|B}, \qquad f = \frac{|q|B}{2\pi m}, \qquad v = \frac{E}{B}\ (\text{velocity selector})
$$

## conditions
- 단위 $\text{T} = \text{N}/(\text{A}\cdot\text{m})$, $1\,\text{G}=10^{-4}\,\text{T}$.
- 원운동 식은 $\mathbf{v}\perp\mathbf{B}$이고 $B$가 균일할 때. $\phi$는 $\mathbf{v}$와 $\mathbf{B}$ 사이 각.

## explanation
### 쉽게 말하면
- 방향은 오른손: 네 손가락을 $\mathbf{v}$에서 $\mathbf{B}$로 감으면 엄지가 힘 방향 (양전하). 음전하는 반대.
- $\mathbf{v}\parallel\mathbf{B}$면 힘 0, 수직이면 최대 $qvB$.
- 자기력은 항상 속도에 수직 → 일을 하지 않는다 → 속력·운동에너지는 그대로, 방향만 바뀐다.
- 그래서 균일한 자기장에서는 자기력이 구심력이 되어 등속 원운동: $|q|vB=\dfrac{mv^2}{r}$.
- 주기가 속력과 무관하다는 게 사이클로트론(cyclotron)의 원리: 빨라져도 반바퀴 시간이 같아 같은 박자로 계속 가속할 수 있다.

### 전기력과 자기력이 함께
- 속도 선택기: $qE=qvB$이면 직진 → $v=\dfrac{E}{B}$인 입자만 통과.
- 홀 효과(Hall effect): 도선 속 전하가 자기력으로 한쪽에 쌓여 전기장이 생기고, $eE=ev_dB$에서 평형. 생긴 전위차의 부호로 전하 운반자의 부호를, 크기로 밀도 $n=\dfrac{Bi}{Vle}$를 알 수 있다 ($l$: 도선 두께).

## story
자기력은 "옆에서 계속 미는 손"이다. 달리는 방향과 늘 직각으로 밀어서 빨라지게도 느려지게도 못 하고, 방향만 꺾어 결국 원을 그리게 만든다.

## example
질량 분석기 (교재 예제): 전압 $V$로 가속된 $+q$가 자기장 $B$에서 반원을 돌아 거리 $x$에 도달.

$$
qV=\frac{1}{2}mv^2,\quad r=\frac{mv}{qB},\quad x=2r \ \Rightarrow\ m=\frac{qB^2x^2}{8V}
$$

## supplement
교재 내용을 옮기고, 쉬운 설명·스토리는 Claude가 추가했습니다. 예제 풀이는 Claude가 계산했습니다.
