---
id: prob-phys-em-coil-flux-linkage-self-inductance
title_ko: "외부 자기장 속 코일의 자기선속결합과, 알짜 선속을 0으로 만드는 전류로 구하는 자체유도계수"
source: "뿌리물리 워크북 107번"
difficulty: 1
tags: [자기선속, 자기선속결합, 자체유도계수, 인덕턴스, 코일, magnetic flux, flux linkage, self-inductance, inductance]
related: [phys-em-inductance, phys-em-faraday-law]
images: []
verified: false
---

## problem
반지름 $r = \dfrac{10}{\pi}\,\text{cm}$, $N = 40$회인 원형 코일이 코일 면에 수직인 균일한 외부 자기장 $B = 5.0\,\text{mT}$ 속에 있다. (a) 전류가 없을 때 코일의 자기선속결합, (b) 코일에 $I = 2.0\,\text{A}$를 흘렸더니 코일을 지나는 알짜 자기선속이 0이 되었을 때 자체유도계수를 구한다.

## answer
(a) $N\Phi_B = \dfrac{2.0\times10^{-3}}{\pi}\,\text{Wb}$, (b) $L = \dfrac{1.0}{\pi}\,\text{mH}$

## key-idea
- 한 감김의 선속: $A = \pi r^2 = \dfrac{1.0\times10^{-2}}{\pi}\,\text{m}^2$ → $\Phi_B = BA = \dfrac{5.0\times10^{-5}}{\pi}\,\text{Wb}$ → 선속결합 $= N\Phi_B$
- "알짜 선속 0" = 코일 전류가 만든 선속결합이 외부 선속결합과 크기가 같고 방향이 반대 → $N\Phi_{\text{self}} = N\Phi_B$
- 자체유도계수 정의 $L = \dfrac{N\Phi_{\text{self}}}{I} = \dfrac{2.0\times10^{-3}/\pi}{2.0}\,\text{H} = \dfrac{1.0}{\pi}\,\text{mH}$

## solution
### 용어 세 개를 구분한다
| 용어 | 식 | 뜻 |
|---|---|---|
| 자기선속 | $\Phi_B = BA$ | 고리 하나를 지나는 선속 |
| 자기선속결합 | $N\Phi_B$ | 감은 수만큼 곱한, 코일 전체의 선속 |
| 자체유도계수 | $L = \dfrac{N\Phi_{\text{self}}}{I}$ | 자기 전류가 만든 선속결합 ÷ 그 전류 |

- 감은 수 $N$은 "같은 선속이 $N$번 엮여 있다"는 뜻이다. 패러데이 법칙의 기전력도 감김마다 생겨 $N$배가 되므로, 기전력과 $L$에는 $\Phi_B$가 아니라 $N\Phi_B$가 들어간다.
- (a)에서 묻는 것은 외부 자기장이 만든 선속결합이다. 이것은 $L$과 관계없다.

### (b)의 논리
$L$은 원래 "코일 자신의 전류가 만든 선속결합"으로 정의된다. 코일 자신의 자기장은 코일 안에서 균일하지 않아 직접 계산하기 어렵다. 이 문제는 그것을 측정으로 우회한다.
1. 전류 $I$를 흘리면 코일이 스스로 선속결합 $LI$를 만든다.
2. 알짜 선속이 0이 됐다 → 자기 선속결합이 외부 선속결합을 정확히 지웠다 → $LI = N\Phi_B$ (크기).
3. 그래서 $L = \dfrac{N\Phi_B}{I}$. 외부 자기장은 $L$을 바꾸는 것이 아니라 "자기 선속결합의 크기를 재는 기준"으로만 쓰였다.

## mistakes
- (a)에서 $N$을 빼고 $\Phi_B$만 답하기 쉽다. "자기선속결합"이라는 말이 나오면 $N\Phi_B$다.
- (b)를 "알짜 선속이 0이니 $L = 0$"으로 읽으면 틀린다. $L$은 자기 전류가 만든 선속만으로 정의하므로, 바깥 선속과 상쇄되어 알짜가 0이어도 $L$은 0이 아니다.
- 단위: $\dfrac{1.0\times10^{-3}}{\pi}\,\text{H} = \dfrac{1.0}{\pi}\,\text{mH}$. 반지름의 cm를 m로 바꾸는 것도 잊지 않는다 ($\dfrac{10}{\pi}\,\text{cm} = \dfrac{0.10}{\pi}\,\text{m}$).

## supplement
문제·정답·해설은 사용자가 준 자료(뿌리물리 워크북 107번) 그대로 요약했고, 정답은 Claude가 다시 계산해 일치를 확인했습니다. solution의 용어 정리, (b)의 논리 설명, mistakes는 사용자 요청으로 Claude가 추가했습니다.
