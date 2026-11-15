---
id: phys-qm-photon
title_ko: "광자의 에너지와 운동량"
title_en: "photon energy and momentum"
question: "진동수 f, 파장 λ인 빛의 광자 하나가 가진 에너지와 운동량은?"
tags: [광자, 플랑크 상수, 광자 에너지, 광자 운동량, 빛의 입자성, photon, Planck constant, photon energy, photon momentum]
importance: 3
related: [phys-qm-photoelectric, phys-qm-compton, phys-rel-energy]
source: "book:BLIS편입 일반물리 22-04"
verified: false
---

## formula
$$
E = hf = \frac{hc}{\lambda}
$$

$$
p = \frac{h}{\lambda} = \frac{hf}{c} = \frac{E}{c}
$$

## conditions
- $h$: 플랑크 상수(Planck constant).

$$
h = 6.63 \times 10^{-34}\,\text{J}\cdot\text{s} = 4.14 \times 10^{-15}\,\text{eV}\cdot\text{s}
$$

- 광자(photon): 빛을 이루는 입자. 질량이 없고 항상 속력 $c$로 움직인다.
- 빛 전체의 에너지는 광자 에너지의 정수배만 가능하다 (양자화).

## explanation
### 먼저 떠올릴 것
- 파동의 기본 관계: 속력 = 진동수 × 파장. 빛은 $c = f\lambda$.
- 상대성 이론의 에너지-운동량 관계 $E^2 = (pc)^2 + (mc^2)^2$. 광자는 $m = 0$이므로 $E = pc$이고, 여기에 $E = hf$를 넣으면 $p = hf/c = h/\lambda$가 나온다.

### 쉽게 말하면
- 빛은 에너지 $hf$짜리 알갱이들의 흐름이다.
- 진동수가 클수록(파장이 짧을수록) 알갱이 하나가 세다. 자외선과 X선이 위험한 이유다.
- 빛의 세기(밝기)는 알갱이의 개수를 정하고, 색(진동수)은 알갱이 하나의 에너지를 정한다. 이 구분이 광전 효과의 핵심이다.

### 빠른 계산
$$
hc \approx 1240\,\text{eV}\cdot\text{nm}
$$

파장을 $\text{nm}$로 넣으면 광자 에너지가 바로 $\text{eV}$로 나온다. 예: $620\,\text{nm}$(주황빛)는 $1240/620 = 2\,\text{eV}$.

### 한 번 따라 하기: 초당 광자 수
출력 $P$인 광원이 파장 $\lambda$의 빛을 내면 초당 나오는 광자의 수는 (에너지) ÷ (광자 하나의 에너지)다.

$$
\frac{N}{t} = \frac{P}{hf} = \frac{P\lambda}{hc}
$$

$100\,\text{W}$, $600\,\text{nm}$이면 광자 하나가 $hc/\lambda \approx 3.3 \times 10^{-19}\,\text{J}$이므로 초당 약 $3 \times 10^{20}$개다.

### 자주 틀리는 포인트
- 광자에 $p = mv$나 $K = \frac{1}{2}mv^2$를 쓰면 안 된다 (질량이 없다).
- 같은 출력이면 파장이 긴 빛일수록 광자 수가 많다 (하나하나가 약하니까).

## supplement
교재 내용을 옮기고, $hc \approx 1240\,\text{eV}\cdot\text{nm}$과 초당 광자 수 계산은 Claude가 추가했습니다.
