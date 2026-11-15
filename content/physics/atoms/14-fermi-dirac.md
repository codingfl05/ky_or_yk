---
id: phys-atom-fermi-dirac
title_ko: "상태 밀도와 페르미-디락 분포"
title_en: "density of states and Fermi-Dirac distribution"
question: "에너지 E인 상태에 전자가 있을 확률과, 전자의 수 밀도를 구하는 식은?"
tags: [상태 밀도, 페르미 디락 분포, 페르미 준위, 페르미 에너지, 점유 확률, density of states, Fermi-Dirac distribution, Fermi level, occupancy probability]
importance: 2
related: [phys-atom-energy-bands, phys-atom-multi-electron, phys-atom-semiconductor]
source: "book:BLIS편입 일반물리 23-46"
verified: false
---

## formula
$$
P(E) = \frac{1}{e^{(E - E_F)/kT} + 1}
$$

$$
N(E) = \frac{8\sqrt{2}\,\pi m^{3/2}}{h^3}\,E^{1/2}
$$

$$
n = \int_0^\infty N(E)\,P(E)\,dE
$$

## conditions
- $P(E)$: 에너지 $E$인 상태 하나에 전자가 들어 있을 확률 (페르미-디락 분포).
- $N(E)$: 상태 밀도(density of states). 단위 부피, 단위 에너지당 전자가 들어갈 수 있는 상태의 수. 단위는 $\text{m}^{-3}\text{J}^{-1}$.
- $n$: 단위 부피당 전자의 수, $E_F$: 페르미 준위, $k$: 볼츠만 상수, $T$: 절대 온도.
- $N(E)$의 식은 금속 속 자유 전자에 대한 것이다.

## explanation
::fig fermi-dirac | 온도가 올라도 달라지는 것은 페르미 준위 근처의 좁은 구간뿐이다.

### 먼저 떠올릴 것
- 파울리 배타 원리: 한 상태에 전자는 하나만 들어간다. 그래서 전자들은 낮은 준위부터 차례로 채워진다.
- 페르미 준위: 그렇게 채웠을 때 마지막 전자가 들어가는 준위.

### 기호 풀이
"에너지가 $E$인 전자가 얼마나 있는가"는 두 가지의 곱이다.

(에너지 $E$인 전자의 밀도) = (에너지 $E$인 자리의 수) × (그 자리가 차 있을 확률)

- $N(E)$는 극장의 좌석 수, $P(E)$는 그 좌석에 사람이 앉아 있을 확률에 해당한다.
- 적분 $\int N(E)P(E)\,dE$는 모든 에너지에 걸쳐 앉아 있는 사람을 다 세는 것이다.

### P(E)의 모양
- $T = 0$: $E < E_F$이면 $P = 1$, $E > E_F$이면 $P = 0$. 페르미 준위 아래는 꽉 차고 위는 텅 빈 계단 모양이다.
- $T > 0$: 계단의 모서리가 $kT$ 정도의 폭으로 무뎌진다. 페르미 준위 바로 아래의 전자 일부가 열에너지를 받아 바로 위로 올라간다.
- 어떤 온도에서든 $E = E_F$이면

$$
P(E_F) = \frac{1}{e^0 + 1} = \frac{1}{2}
$$

### 한 번 따라 하기
$E - E_F = kT$인 준위가 차 있을 확률은

$$
P = \frac{1}{e^1 + 1} \approx 0.27
$$

$E - E_F = -kT$이면 $\dfrac{1}{e^{-1} + 1} \approx 0.73$. 두 값을 더하면 1이다. 페르미 준위 위로 $\Delta E$만큼 떨어진 준위가 차 있을 확률은, 아래로 $\Delta E$만큼 떨어진 준위가 비어 있을 확률과 같다.

### 자주 틀리는 포인트
- 분모가 $+1$이다 (플랑크의 흑체 복사 식은 $-1$). 전자는 한 상태에 하나만 들어가므로 확률이 1을 넘지 않는다.
- $E \gg E_F$이면 $P \approx e^{-(E - E_F)/kT}$로, 고전적인 볼츠만 분포와 같아진다.
- 상태 밀도는 $\sqrt{E}$에 비례한다. 에너지가 높을수록 자리가 많다.

## supplement
교재 내용을 옮기고, 좌석 비유와 숫자 예, 그림(fermi-dirac)은 Claude가 추가했습니다.
