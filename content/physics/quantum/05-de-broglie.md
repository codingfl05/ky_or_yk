---
id: phys-qm-de-broglie
title_ko: "물질파 (드 브로이 파장)"
title_en: "matter wave and de Broglie wavelength"
question: "운동량 p인 입자의 물질파 파장은?"
tags: [물질파, 드 브로이 파장, 물질의 이중성, 전자 회절, 각파수, matter wave, de Broglie wavelength, electron diffraction, wave number]
importance: 3
related: [phys-qm-photon, phys-qm-schrodinger, phys-atom-bohr-model]
source: "book:BLIS편입 일반물리 22-12"
verified: false
---

## formula
$$
\lambda = \frac{h}{p} = \frac{h}{mv}
$$

$$
p = \hbar k, \qquad \hbar = \frac{h}{2\pi}, \qquad k = \frac{2\pi}{\lambda}
$$

## conditions
- $p$: 입자의 운동량, $k$: 물질파의 각파수(angular wave number).
- 느린 입자($v \ll c$)의 운동 에너지가 $K$이면 $p = \sqrt{2mK}$.
- 전자, 양성자, 원자, 분자처럼 질량이 아주 작은 입자에서만 관측된다.

## explanation
### 먼저 떠올릴 것
- 광자의 운동량은 $p = h/\lambda$였다. 파동인 빛이 입자의 성질(운동량)을 가진다는 식이다.
- 드 브로이는 이 식을 거꾸로 읽었다. 입자인 전자도 파장 $\lambda = h/p$인 파동의 성질을 가질 것이다.
- 실제로 전자를 이중 슬릿이나 결정에 통과시키면 X선과 똑같은 회절·간섭 무늬가 나온다.

### 운동 에너지로 쓰면
$K = p^2/2m$에서 $p = \sqrt{2mK}$이므로

$$
\lambda = \frac{h}{\sqrt{2mK}}
$$

전위차 $V$로 가속한 전자는 $K = eV$이므로 $\lambda = h/\sqrt{2meV}$.

### 크기 감각
- $50\,\text{g}$의 골프공이 $20\,\text{m/s}$로 날 때: $\lambda \approx 6.6 \times 10^{-34}\,\text{m}$. 너무 짧아 파동성이 드러날 수 없다.
- $100\,\text{eV}$의 전자: $\lambda \approx 0.12\,\text{nm}$. 원자 사이 간격과 비슷해서 결정에서 회절된다.

### 한 번 따라 하기
같은 운동 에너지를 가진 전자와 양성자 중 누구의 파장이 긴가?

$\lambda = h/\sqrt{2mK}$이므로 질량이 작은 전자의 파장이 더 길다. 양성자가 약 1836배 무거우므로 전자의 파장이 $\sqrt{1836} \approx 43$배 길다.

### 자주 틀리는 포인트
- 운동 에너지가 4배가 되면 파장은 $1/2$배 ($\lambda \propto 1/\sqrt{K}$). 속력이 2배면 파장은 $1/2$배 ($\lambda \propto 1/v$).
- 같은 속력이면 무거운 입자의 파장이 짧고, 같은 운동량이면 파장이 같다. 무엇이 같은지 먼저 본다.
- 광자에는 $E = hc/\lambda$, 전자에는 $K = h^2/(2m\lambda^2)$. 같은 파장이라도 에너지 식이 다르다.

## supplement
교재 내용을 옮기고, 운동 에너지로 쓴 식과 비교 예는 Claude가 추가했습니다.
