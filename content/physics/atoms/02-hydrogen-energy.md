---
id: phys-atom-hydrogen-energy
title_ko: "수소 원자의 에너지 준위와 선 스펙트럼"
title_en: "hydrogen energy levels and line spectrum"
question: "수소 원자의 에너지 준위와, 전이할 때 나오는 빛의 파장을 주는 식은?"
tags: [수소 에너지 준위, 선 스펙트럼, 리드버그 상수, 라이먼 계열, 발머 계열, 파셴 계열, 이온화 에너지, hydrogen energy levels, line spectrum, Rydberg constant, Lyman, Balmer, Paschen, ionization energy]
importance: 3
related: [phys-atom-bohr-model, phys-qm-photon, phys-atom-hydrogen-like]
source: "book:BLIS편입 일반물리 23-06"
verified: false
---

## formula
$$
E_n = -\frac{me^4}{8\varepsilon_0^2 h^2}\,\frac{1}{n^2} = -\frac{13.6}{n^2}\,\text{eV}
$$

$$
hf = E_{\text{high}} - E_{\text{low}} = 13.6\left(\frac{1}{n_{\text{low}}^2} - \frac{1}{n_{\text{high}}^2}\right)\text{eV}
$$

$$
\frac{1}{\lambda} = R\left(\frac{1}{n_{\text{low}}^2} - \frac{1}{n_{\text{high}}^2}\right)
$$

## conditions
- $n = 1, 2, 3, \dots$ ($n = 1$이 바닥 상태).
- $R = \dfrac{me^4}{8\varepsilon_0^2 h^3 c} \approx 1.097 \times 10^7\,\text{m}^{-1}$: 리드버그 상수(Rydberg constant).
- 에너지의 기준: 전자가 핵에서 무한히 멀리 정지해 있을 때가 0. 묶여 있는 전자의 에너지는 음수다.
- $E > 0$이면 전자가 원자핵의 속박을 벗어난 자유 전자다 (이온화).

## explanation
::fig hydrogen-levels | 위로 갈수록 준위가 촘촘해져 0에 모인다.

### 먼저 떠올릴 것
- 보어 모델: $r_n = a_0n^2$, $v_n \propto 1/n$.
- 전기 퍼텐셜 에너지: 양성자와 전자 사이는 $U = -\dfrac{1}{4\pi\varepsilon_0}\dfrac{e^2}{r}$. 끌어당기는 힘이라 음수다.
- 광자 하나의 에너지는 $hf = hc/\lambda$.

### 한 번 따라 하기 (유도)
운동 에너지와 퍼텐셜 에너지를 따로 구해 더한다.

$$
K_n = \frac{1}{2}mv_n^2 = \frac{me^4}{8\varepsilon_0^2 h^2}\,\frac{1}{n^2}
$$

$$
U_n = -\frac{1}{4\pi\varepsilon_0}\frac{e^2}{r_n} = -\frac{me^4}{4\varepsilon_0^2 h^2}\,\frac{1}{n^2}
$$

$U_n = -2K_n$이므로 $E_n = K_n + U_n = -K_n$. 전체 에너지는 운동 에너지에 음의 부호를 붙인 것과 같다.

### 준위 값
| $n$ | $E_n$ |
|---|---|
| $1$ | $-13.6\,\text{eV}$ |
| $2$ | $-3.4\,\text{eV}$ |
| $3$ | $-1.51\,\text{eV}$ |
| $4$ | $-0.85\,\text{eV}$ |
| $\infty$ | $0$ |

바닥 상태 수소의 이온화 에너지는 $E_\infty - E_1 = 13.6\,\text{eV}$.

### 스펙트럼 계열
| 도착 준위 | 계열 | 영역 |
|---|---|---|
| $n = 1$ | 라이먼 | 자외선 |
| $n = 2$ | 발머 | 가시광선 |
| $n = 3$ | 파셴 | 적외선 |

- 전자가 높은 준위에서 낮은 준위로 떨어지면 그 차이만큼의 빛을 내고(방출), 낮은 준위에서 높은 준위로 올라가려면 그 차이와 꼭 맞는 빛을 받아야 한다(흡수).
- 준위가 띄엄띄엄하니 빛의 파장도 띄엄띄엄하다. 선 스펙트럼이 나오는 이유다.

### 계열의 양 끝 파장 구하기
한 계열에서
- 가장 긴 파장(가장 낮은 에너지): 바로 위 준위에서 떨어질 때.
- 가장 짧은 파장(가장 높은 에너지): $n_{\text{high}} = \infty$에서 떨어질 때.

라이먼 계열($n_{\text{low}} = 1$):

$$
\frac{1}{\lambda_{\text{max}}} = R\left(1 - \frac{1}{4}\right)
\quad\Longrightarrow\quad \lambda_{\text{max}} = \frac{4}{3R} \approx 122\,\text{nm}
$$

$$
\frac{1}{\lambda_{\text{min}}} = R
\quad\Longrightarrow\quad \lambda_{\text{min}} = \frac{1}{R} \approx 91\,\text{nm}
$$

### 자주 틀리는 포인트
- 부호: 준위는 음수, 광자 에너지는 양수. 큰 것에서 작은 것을 빼되 $-3.4 - (-13.6) = 10.2\,\text{eV}$처럼 계산한다.
- 에너지가 큰 빛일수록 파장이 짧다. "최소 파장"을 물으면 "최대 에너지"를 찾는다.
- $n = 3$에 있는 전자가 낼 수 있는 빛은 $3 \to 2$, $3 \to 1$, $2 \to 1$의 3가지.
- $K = +13.6/n^2$, $U = -27.2/n^2$, $E = -13.6/n^2$ (eV). 셋을 헷갈리지 않는다.

## supplement
교재 내용을 옮기고, 준위·계열 표와 계열 끝 파장 계산, 그림(hydrogen-levels)은 Claude가 추가했습니다. 교재 23-06의 $U_n$ 마지막 식에는 음의 부호가 빠져 있어 바로잡았습니다. 교재는 발머 계열을 "모두 가시광선"이라 했는데, 눈에 보이는 선은 4개이고 $n_{\text{high}}$가 큰 선들은 근자외선입니다.
