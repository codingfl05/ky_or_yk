---
id: phys-qm-compton
title_ko: "콤프턴 산란"
title_en: "Compton scattering"
question: "X선 광자가 전자와 충돌해 각 φ로 산란될 때 파장은 얼마나 늘어나는가?"
tags: [콤프턴 산란, 콤프턴 효과, 콤프턴 파장, 광자의 운동량, X선, Compton scattering, Compton shift, Compton wavelength]
importance: 3
related: [phys-qm-photon, phys-qm-photoelectric, phys-mech-momentum-conservation]
source: "book:BLIS편입 일반물리 22-06"
verified: false
---

## formula
$$
\Delta\lambda = \lambda' - \lambda = \frac{h}{mc}\,(1 - \cos\phi)
$$

## conditions
- $\lambda$: 입사 X선의 파장, $\lambda'$: 산란된 X선의 파장, $\phi$: 광자의 산란각 (원래 진행 방향에서 꺾인 각).
- $m$: 전자의 질량. 전자는 처음에 정지해 있다고 본다.
- $h/mc \approx 2.43 \times 10^{-12}\,\text{m}$: 전자의 콤프턴 파장.
- $\Delta\lambda$는 입사 파장과 무관하고 산란각에만 의존한다.

## explanation
::fig compton-scatter | 광자와 전자의 2차원 충돌. 에너지와 운동량이 모두 보존된다.

### 먼저 떠올릴 것
- 광자는 에너지 $hc/\lambda$와 운동량 $h/\lambda$를 가진 입자다.
- 역학의 2차원 충돌: 충돌 전후로 에너지가 보존되고, 운동량은 $x$방향과 $y$방향 각각 보존된다.

### 쉽게 말하면
광자가 당구공처럼 전자를 때리고 튕겨 나간다. 전자가 에너지를 받아 가므로 광자의 에너지는 줄고, 에너지가 줄면 ($E = hc/\lambda$) 파장이 길어진다.

빛이 파동이라면 산란되어도 진동수와 파장이 그대로여야 한다. 파장이 늘어난다는 것은 빛이 운동량을 가진 입자라는 증거다.

### 각도별 값
| 산란각 $\phi$ | $\Delta\lambda$ |
|---|---|
| $0^\circ$ (그대로 통과) | $0$ |
| $90^\circ$ | $\dfrac{h}{mc}$ |
| $180^\circ$ (되튐) | $\dfrac{2h}{mc}$ (최대) |

### 세우는 식 (유도의 출발점)
에너지 보존:

$$
\frac{hc}{\lambda} = \frac{hc}{\lambda'} + K_e
$$

운동량 보존 ($x$방향, $y$방향):

$$
\frac{h}{\lambda} = \frac{h}{\lambda'}\cos\phi + p_e\cos\theta
$$

$$
0 = \frac{h}{\lambda'}\sin\phi - p_e\sin\theta
$$

세 식에서 전자의 양($p_e$, $\theta$)을 없애면 위 공식이 나온다.

### 한 번 따라 하기
산란각이 $60^\circ$이면

$$
\Delta\lambda = \frac{h}{mc}\left(1 - \frac{1}{2}\right) = \frac{h}{2mc}
$$

전자가 얻은 에너지는 광자가 잃은 에너지와 같다.

$$
K_e = \frac{hc}{\lambda} - \frac{hc}{\lambda'}
$$

광자 에너지 중 전자로 넘어간 비율은 $K_e \div (hc/\lambda) = \Delta\lambda/\lambda'$.

### 자주 틀리는 포인트
- 공식의 각 $\phi$는 광자의 산란각이다. 전자가 튕겨 나간 각 $\theta$가 아니다.
- 산란 후에는 파장이 항상 같거나 길어진다 ($\Delta\lambda \ge 0$).
- $\Delta\lambda$는 최대 $4.86\,\text{pm}$로 아주 작아서, 파장이 짧은 X선이라야 변화가 눈에 띈다. 가시광선에서는 보이지 않는다.

## supplement
교재 내용을 옮기고, 각도별 값 표와 에너지 전달 비율, 그림(compton-scatter)은 Claude가 추가했습니다. 교재의 유도는 전자의 운동 에너지를 $p_e^2/2m_e$로 어림한 것이고, 공식 자체는 상대론적으로 정확합니다.
