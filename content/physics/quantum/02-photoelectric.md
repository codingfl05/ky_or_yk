---
id: phys-qm-photoelectric
title_ko: "광전 효과"
title_en: "photoelectric effect"
question: "금속에 빛을 쪼일 때 튀어나오는 전자의 최대 운동 에너지는 무엇으로 정해지는가?"
tags: [광전 효과, 일함수, 정지 전압, 문턱 진동수, 한계 진동수, 광전자, photoelectric effect, work function, stopping potential, threshold frequency]
importance: 3
related: [phys-qm-photon, phys-qm-compton, phys-em-electric-potential]
source: "book:BLIS편입 일반물리 22-02"
verified: false
---

## formula
$$
hf = K_{\text{max}} + \Phi
$$

$$
K_{\text{max}} = eV_s, \qquad f_0 = \frac{\Phi}{h}
$$

## conditions
- $\Phi$: 일함수(work function). 전자를 금속 밖으로 꺼내는 데 필요한 최소 에너지. 금속의 종류마다 다르다.
- $K_{\text{max}}$: 튀어나온 전자(광전자)의 최대 운동 에너지.
- $V_s$: 정지 전압(stopping potential). 광전류가 0이 되게 하는 역방향 전압의 크기.
- $f_0$: 문턱 진동수. $f < f_0$이면 빛이 아무리 세도 전자가 나오지 않는다.

## explanation
::fig photoelectric-graph | 금속이 달라도 기울기는 모두 h로 같고, 절편만 달라진다.

### 먼저 떠올릴 것
- 광자 하나의 에너지는 $hf$다. 빛의 세기는 광자의 개수, 진동수는 광자 하나의 에너지를 정한다.
- 전위차 $V$를 거슬러 가는 전자는 운동 에너지 $eV$를 잃는다. 그래서 정지 전압으로 전자의 운동 에너지를 잴 수 있다.

### 쉽게 말하면
광자 하나가 전자 하나에게 에너지 $hf$를 통째로 준다. 그중 $\Phi$는 금속을 빠져나오는 "통행료"로 쓰이고, 남은 것이 운동 에너지다.

$$
K_{\text{max}} = hf - \Phi
$$

### 실험 결과와 해석
| 바꾸는 것 | 결과 |
|---|---|
| 빛의 세기를 키움 | 전자의 수(광전류)만 늘고, $K_{\text{max}}$와 $V_s$는 그대로 |
| 진동수를 키움 | $K_{\text{max}}$와 $V_s$가 커짐 |
| $f < f_0$ | 세기와 상관없이 전자가 안 나옴 |

빛이 파동이라면 세기가 곧 에너지이므로, 센 빛을 오래 쪼이면 어떤 진동수에서도 전자가 나와야 한다. 실험은 그렇지 않았다. 빛이 광자라는 입자여야 설명된다.

### 그래프 읽기
- $K_{\text{max}}$ 대 $f$ 그래프: 기울기 $h$, 가로축 절편 $f_0$, 세로축 절편 $-\Phi$.
- $V_s$ 대 $f$ 그래프: 기울기 $h/e$. 여러 금속의 직선은 서로 평행하고, 오른쪽에 있는 직선일수록 일함수가 크다.

### 한 번 따라 하기
문턱 진동수가 $5 \times 10^{14}\,\text{Hz}$인 금속의 일함수는

$$
\Phi = hf_0 = 4.14 \times 10^{-15} \times 5 \times 10^{14} \approx 2.07\,\text{eV}
$$

여기에 $3\,\text{eV}$짜리 광자를 쪼이면 $K_{\text{max}} \approx 0.93\,\text{eV}$, 정지 전압은 $0.93\,\text{V}$.

### 자주 틀리는 포인트
- 세기를 키워도 정지 전압은 변하지 않는다. 포화 전류만 커진다.
- "특정 파장보다 긴 빛"에서 전자가 안 나온다 (파장이 길면 진동수가 작다). 파장으로 물으면 부등호가 뒤집힌다: $\lambda > hc/\Phi$이면 방출 없음.
- $K_{\text{max}}$는 "최대"다. 금속 안쪽의 전자는 나오면서 에너지를 더 잃는다.

## supplement
교재 내용을 옮기고, 실험 결과 표와 숫자 예, 그림(photoelectric-graph)은 Claude가 추가했습니다.
