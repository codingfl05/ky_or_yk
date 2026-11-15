---
id: phys-circ-rlc-series
title_ko: "RLC 직렬 교류 회로 (임피던스, 공명, 평균 전력)"
title_en: "Series RLC circuits"
question: "RLC 직렬 회로의 임피던스, 위상각, 공명 조건, 평균 전력은?"
tags: [RLC 회로, 임피던스, 위상각, 공명, 실횻값, 역률, impedance, resonance, rms, power factor]
importance: 3
related: [phys-circ-ac-elements, phys-circ-lc-oscillation]
source: "book:BLIS편입 일반물리 18-40~42"
verified: false
---

## formula
$$
Z = \sqrt{R^2+(X_L-X_C)^2}
$$

$$
I = \frac{V_m}{Z}
$$

$$
\tan\phi = \frac{X_L-X_C}{R}
$$

$$
\omega_{\text{res}} = \frac{1}{\sqrt{LC}}
$$

$$
V_{\text{rms}} = \frac{V_m}{\sqrt2}
$$

$$
P_{\text{avg}} = I_{\text{rms}}^2R = V_{\text{rms}}I_{\text{rms}}\cos\phi
$$

## conditions
- 직렬이라 R, L, C에 흐르는 전류의 최댓값 $I$가 모두 같다. $\phi>0$이면 전류가 전압보다 $\phi$만큼 늦음.
- $\cos\phi=\dfrac{R}{Z}$: 역률(power factor).

## explanation
::fig phasor | 코일과 축전기의 전압은 정반대라 서로 빼고, 저항 전압과는 직각이라 피타고라스로 더한다.

### 먼저 떠올릴 것
- 저항·축전기·코일 각각의 전압 크기: $V_R = IR$, $V_C = IX_C$, $V_L = IX_L$ ($X_C = \dfrac{1}{\omega_dC}$, $X_L = \omega_dL$).
- 위상: 전류를 기준으로 $V_L$은 $90^\circ$ 앞, $V_C$는 $90^\circ$ 뒤 (앞 카드).
- 세 전압의 최댓값은 서로 다른 순간에 나오므로 그냥 더하면 안 된다 ($V_m \ne V_R + V_L + V_C$). 시간차를 각도로 나타낸 화살표로 더해야 한다.

### 쉽게 말하면
직렬이니 전류를 기준으로 잡는다. $V_R$는 전류와 같은 위상, $V_L$은 $90^\circ$ 앞, $V_C$는 $90^\circ$ 뒤. 그래서 전압들을 화살표(위상자)로 그리면 $V_L$과 $V_C$는 정반대라 빼고, $V_R$과는 직각이라 피타고라스로 더한다.

$$
\begin{aligned}
&V_m^2 = V_R^2+(V_L-V_C)^2 \\
&\quad {}\Rightarrow V_m = I\sqrt{R^2+(X_L-X_C)^2} = IZ
\end{aligned}
$$

임피던스(impedance) $Z$는 교류 회로 전체의 "등가 저항"이다.

### 푸는 순서
1. $X_L$, $X_C$ 계산 → $Z$
2. $I=\dfrac{V_m}{Z}$
3. $\tan\phi$ (또는 $\cos\phi=\dfrac{R}{Z}$)로 위상, 각 소자 전압 $IR$, $IX_L$, $IX_C$

### 공명(resonance)
$X_L=X_C$이면 $Z=R$로 최소 → 전류 최대. 그 조건이 $\omega_d=\dfrac{1}{\sqrt{LC}}$, 즉 LC 고유 진동수로 밀어 줄 때다 (그네를 고유 박자에 맞춰 밀기).

### 전력
전력을 쓰는 건 저항뿐. 사인파의 제곱 평균은 $\dfrac{1}{2}$이라 실횻값(rms) $=\dfrac{\text{peak}}{\sqrt2}$를 쓰면 직류 공식과 같은 꼴 $P=I_{\text{rms}}^2R$이 된다.

$V_{\text{rms}}I_{\text{rms}}$에 $\cos\phi$가 붙는 이유: 순간 전력 $vi$는 전압과 전류가 같은 부호일 때 $+$(회로가 에너지를 받음), 다른 부호일 때 $-$(돌려줌)다. 위상이 $\phi$만큼 어긋나면 한 주기 중 돌려주는 구간이 생겨 평균이 $\cos\phi$배로 준다. 저항만 있으면 $\phi = 0$이라 그대로이고, 축전기나 코일만 있으면 $\phi = 90^\circ$라 받은 만큼 돌려줘 평균 0이다. 그래서 리액턴스로 구한 $V_{\text{rms}}$, $I_{\text{rms}}$를 그냥 곱하면 안 된다.

## story
그네(LC)를 미는 사람(교류 전원)이 그네의 고유 박자에 맞춰 밀면 그네가 가장 크게 흔들린다. 박자가 어긋나면 힘만 들고 잘 안 흔들린다. 마찰(저항)만 실제로 에너지를 먹는다.

## supplement
교재 내용을 옮기고, 쉬운 설명·스토리는 Claude가 추가했습니다. 쉬운 설명·그림 보강: 앞 카드 복습과 전압을 그냥 더하면 안 되는 이유, 그림(phasor). 평균 전력에 cosφ가 붙는 이유를 사용자 질문에 따라 Claude가 추가했습니다.
