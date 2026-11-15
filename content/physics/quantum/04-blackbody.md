---
id: phys-qm-blackbody
title_ko: "흑체 복사와 플랑크의 양자 가설"
title_en: "blackbody radiation and Planck's quantum hypothesis"
question: "흑체가 내는 복사 일률은 온도의 몇 제곱에 비례하고, 고전 이론은 어디서 실패했는가?"
tags: [흑체 복사, 슈테판 볼츠만 법칙, 복사율, 플랑크, 자외선 파탄, 빈 변위 법칙, blackbody radiation, Stefan-Boltzmann law, emissivity, Planck, ultraviolet catastrophe, Wien displacement law]
importance: 2
related: [phys-qm-photon, phys-qm-photoelectric]
source: "book:BLIS편입 일반물리 22-08"
verified: false
---

## formula
$$
P_{\text{rad}} = \sigma\varepsilon A T^4
$$

$$
I(\lambda) = \frac{2\pi hc^2}{\lambda^5}\,\frac{1}{e^{hc/\lambda kT} - 1}
$$

## conditions
- $P_{\text{rad}}$: 복사로 내보내는 일률, $A$: 표면적, $T$: 절대 온도.
- $\sigma = 5.67 \times 10^{-8}\,\text{W/m}^2\cdot\text{K}^4$: 슈테판-볼츠만 상수.
- $\varepsilon$: 복사율(emissivity), $0 < \varepsilon \le 1$. 흑체(blackbody)는 $\varepsilon = 1$인 이상적인 물체.
- $I(\lambda)$: 파장별 복사 세기 (플랑크의 복사 법칙), $k$: 볼츠만 상수.

## explanation
::fig blackbody-curve | 실험 곡선은 봉우리가 있고 짧은 파장에서 0으로 내려간다.

### 먼저 떠올릴 것
- 뜨거운 물체는 빛(전자기파)을 낸다. 달군 쇠가 붉게, 더 뜨거우면 희게 빛난다.
- 단위 넓이당 일률은 $S = P/A = \sigma\varepsilon T^4$. 온도가 2배면 복사 일률은 16배.

### 고전 이론의 실패
고전 이론(레일리-진스)은 파장별 세기를 이렇게 예측했다.

$$
I(\lambda) = \frac{2\pi ckT}{\lambda^4}
$$

파장이 짧아질수록 세기가 끝없이 커진다. 그러면 모든 파장을 더한 전체 에너지가 무한대가 되어 버린다. 실험과 전혀 맞지 않는다.

### 플랑크의 해결
플랑크는 빛의 에너지가 $hf$의 정수배로만 주고받아진다고 가정했다 ($E = hf$).
- 짧은 파장(큰 진동수)의 빛은 한 덩어리 $hf$가 너무 커서 열에너지 $kT$로는 만들기 어렵다. 그래서 짧은 파장 쪽 세기가 0으로 떨어진다.
- 긴 파장에서는 플랑크 식이 고전 식과 같아진다.
- 이 가정이 양자역학의 출발점이고, 아인슈타인이 이를 "빛은 광자라는 입자"로 발전시켰다.

### 온도가 오르면
- 전체 복사량은 $T^4$에 비례해 커진다.
- 봉우리 파장은 온도에 반비례해 짧아진다 (빈 변위 법칙).

$$
\lambda_{\text{max}}\,T \approx 2.9 \times 10^{-3}\,\text{m}\cdot\text{K}
$$

### 한 번 따라 하기
표면 온도가 $6000\,\text{K}$인 별의 봉우리 파장은

$$
\lambda_{\text{max}} \approx \frac{2.9 \times 10^{-3}}{6000} \approx 483\,\text{nm}
$$

가시광선 한가운데다. 온도가 절반인 별은 봉우리가 2배 긴 적외선 쪽에 있고, 같은 크기라면 복사 일률은 $1/16$이다.

### 자주 틀리는 포인트
- $T$는 반드시 켈빈 온도.
- 플랑크 식 지수의 $hf/kT$는 $hc/\lambda kT$와 같다.

## supplement
교재 내용을 옮겼습니다. 빈 변위 법칙과 숫자 예, 그림(blackbody-curve)은 교재에 없던 것으로 Claude가 추가했습니다.
