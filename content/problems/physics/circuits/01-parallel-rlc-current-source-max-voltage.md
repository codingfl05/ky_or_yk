---
id: prob-phys-circ-parallel-rlc-current-source-max-voltage
title_ko: "전류원에 연결된 병렬 RLC: 전원 양단 전압이 최대가 되는 전기용량"
source: "뿌리물리 핵심 문제집 175번"
difficulty: 2
tags: [병렬 RLC, 전류원, 위상자, 공명, 리액턴스, parallel RLC, current source, phasor, resonance, reactance]
related: [phys-circ-rlc-series, phys-circ-ac-elements, phys-circ-series-parallel]
images: []
verified: false
---

## problem
$R = 100\,\Omega$, $L = 10\,\text{mH}$인 저항·코일·축전기가 모두 병렬로 연결되어 각진동수 $\omega = 1.0\times10^4\,\text{rad/s}$, 진폭 $1\,\text{mA}$인 교류 전류원에 의해 구동된다. 전류원 양단의 전압이 최대가 되게 하는 축전기의 전기용량을 구한다.

## answer
$C = \dfrac{1}{\omega^2 L} = 1\,\mu\text{F}$ (이때 전압 진폭 $V = IR = 0.1\,\text{V}$)

## key-idea
- 병렬 → 세 소자에 걸린 전압이 같고, 전류가 위상차를 가진다 → 전압 $V$를 기준으로 전류를 위상자로 더한다: $I_R = \dfrac{V}{R}$ (같은 위상), $I_C = \dfrac{V}{X_C}$ ($90^\circ$ 앞), $I_L = \dfrac{V}{X_L}$ ($90^\circ$ 뒤)
- $I_C$와 $I_L$은 정반대라 빼고, $I_R$과는 직각이라 피타고라스 →

$$
I = V\sqrt{\left(\frac{1}{R}\right)^2 + \left(\frac{1}{X_C} - \frac{1}{X_L}\right)^2}
$$

- 전류원이라 $I$ 고정 → $V$가 최대 = 근호가 최소 = $\dfrac{1}{X_C} = \dfrac{1}{X_L}$, 곧 $\omega C = \dfrac{1}{\omega L}$ →

$$
C = \frac{1}{\omega^2 L} = \frac{1}{(10^4)^2(10^{-2})} = 10^{-6}\,\text{F}
$$

## solution
::fig parallel-rlc | 병렬이면 전압이 공통이다. 전압을 기준(가로)으로 놓고 세 소자의 전류를 위상자로 더한다.

### 직렬과 병렬: 무엇을 기준으로 잡나
| | 직렬 RLC | 병렬 RLC |
|---|---|---|
| 모든 소자에 같은 것 | 전류 $I$ | 전압 $V$ |
| 기준(가로축)으로 놓는 것 | 전류 | 전압 |
| 위상차가 있어 위상자로 더하는 것 | 각 소자 전압 | 각 소자 전류 |
| 서로 빼는 짝 | $V_L$과 $V_C$ | $I_C$와 $I_L$ |
| 합 | $V = I\sqrt{R^2 + (X_L - X_C)^2}$ | $I = V\sqrt{\left(\frac{1}{R}\right)^2 + \left(\frac{1}{X_C} - \frac{1}{X_L}\right)^2}$ |

규칙은 하나다: "모든 소자에 공통인 양"을 기준으로 놓고, "소자마다 다른 양"을 위상자로 더한다. 직렬은 한 길이라 전류가 공통이고, 병렬은 양 끝이 같은 두 점이라 전압이 공통이다 (직류 회로의 직렬·병렬 규칙과 똑같다). 병렬에서는 저항값 대신 그 역수($\frac{1}{R}$, $\frac{1}{X}$)가 위상자의 길이가 된다는 점만 다르다.

### 위상 방향 확인
공통 전압 $V$를 기준으로 보면, 축전기 전류는 전압보다 $90^\circ$ 먼저, 코일 전류는 $90^\circ$ 늦다 (교류 회로의 R, C, L 카드). 그래서 $I_C$는 위, $I_L$은 아래로 정반대이고, 둘의 크기가 같으면 서로 완전히 지워진다.

### 왜 "최대"인가: 전원이 전류원
전류원은 전류 진폭 $I$를 고정해서 내보낸다. 식을 $V$에 대해 풀면

$$
V = \frac{I}{\sqrt{\left(\frac{1}{R}\right)^2 + \left(\frac{1}{X_C} - \frac{1}{X_L}\right)^2}}
$$

분모가 가장 작을 때 $V$가 최대다. $\left(\frac{1}{R}\right)^2$은 고정이므로 괄호가 0일 때, 곧 $I_C$와 $I_L$이 서로 지워질 때다. 이때 전류원이 내보낸 전류는 전부 저항으로 흐르고 $V = IR = (10^{-3})(100) = 0.1\,\text{V}$.

조건 $X_C = X_L$은 직렬 공명과 같은 식이라 $\omega = \dfrac{1}{\sqrt{LC}}$이다. 다만 결과는 반대다: 직렬 공명은 임피던스가 최소($R$)라 전류가 최대이고, 병렬 공명은 임피던스가 최대($R$, $L$과 $C$ 쪽 갈래는 서로 지워져 전류가 안 빠져나감)라 같은 전류에서 전압이 최대다.

## mistakes
- 병렬인데 직렬 공식 $Z = \sqrt{R^2 + (X_L - X_C)^2}$를 그대로 쓰면 틀린다. 병렬은 전압이 공통이라 전류를 더하고, 길이는 저항이 아니라 역수($\frac{1}{R}$, $\frac{1}{X}$)다.
- 세 전류의 크기를 그냥 더하면 틀린다 ($I \ne I_R + I_L + I_C$). 최댓값이 나오는 순간이 서로 달라서 위상자로 더해야 한다.
- "전압이 최대"를 직렬 공명처럼 "전류가 최대"로 읽으면 안 된다. 전원이 전류원(전류 고정)이라 묻는 것이 전압이다.

## supplement
풀이 흐름(병렬 → 전압 공통, 전류 위상차, 위상자 합)은 강의 판서 그대로입니다. 판서는 근호 식까지였고, 근호 최소 조건으로 $C = 1\,\mu\text{F}$를 구한 계산, 최대 전압 $0.1\,\text{V}$, 직렬·병렬 비교표, mistakes, 그림(parallel-rlc)은 Claude가 보완했습니다.
