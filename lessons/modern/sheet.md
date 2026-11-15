## 상대성 이론

$$
\gamma = \frac{1}{\sqrt{1 - \beta^2}}, \qquad \beta = \frac{v}{c}
$$

| 상황 | 공식 | 기억할 그림 |
|---|---|---|
| 자주 쓰는 값 | $0.6c \to 1.25$<br>$0.8c \to \frac{5}{3}$ | $3:4:5$ 삼각형 |
| 시간 지연 | $\Delta t = \gamma\,\Delta t_0$ | 한 자리에서 본 시간이 가장 짧다 |
| 길이 수축 | $L = \dfrac{L_0}{\gamma}$ | 함께 정지한 길이가 가장 길다 |
| 로런츠 변환 | $x' = \gamma(x - vt)$<br>$t' = \gamma\left(t - \dfrac{vx}{c^2}\right)$ | 시간에 위치가 섞인다 |
| 속도 덧셈 | $u = \dfrac{u' + v}{1 + u'v/c^2}$ | 분모가 $c$를 지킨다 |
| 빛의 도플러 | $f = f_0\sqrt{\dfrac{1 - \beta}{1 + \beta}}$ | 멀어지면 붉어진다 |

## 상대론적 운동량과 에너지

| 물리량 | 공식 |
|---|---|
| 운동량 | $p = \gamma mv$ |
| 힘 (속도와 나란히 / 수직) | $\gamma^3ma$ / $\gamma ma$ |
| 정지 에너지 | $E_0 = mc^2$ |
| 전체 에너지 | $E = \gamma mc^2$ |
| 운동 에너지 | $K = (\gamma - 1)mc^2$ |
| 에너지-운동량 | $E^2 = (pc)^2 + (mc^2)^2$ |
| 질량이 없는 입자 | $E = pc$ |

## 광자

| 상황 | 공식 |
|---|---|
| 광자의 에너지 | $E = hf = \dfrac{hc}{\lambda}$ |
| 광자의 운동량 | $p = \dfrac{h}{\lambda}$ |
| 빠른 계산 | $hc \approx 1240\,\text{eV}\cdot\text{nm}$ |
| 광전 효과 | $hf = K_{\text{max}} + \Phi$<br>$K_{\text{max}} = eV_s$ |
| 문턱 진동수 | $f_0 = \dfrac{\Phi}{h}$ |
| 콤프턴 산란 | $\Delta\lambda = \dfrac{h}{mc}(1 - \cos\phi)$ |
| 흑체 복사 | $P = \sigma\varepsilon AT^4$ |
| 봉우리 파장 | $\lambda_{\text{max}}T \approx 2.9 \times 10^{-3}\,\text{m}\cdot\text{K}$ |

## 물질파와 파동함수

| 상황 | 공식 |
|---|---|
| 드 브로이 파장 | $\lambda = \dfrac{h}{p} = \dfrac{h}{\sqrt{2mK}}$ |
| 확률 | $dP = \lvert\psi\rvert^2dx$ |
| 규격화 | $\displaystyle\int\lvert\psi\rvert^2dx = 1$ |
| 슈뢰딩거 방정식 | $\dfrac{d^2\psi}{dx^2} + \dfrac{2m}{\hbar^2}(E - U)\psi = 0$ |
| $E > U$인 곳 | $\sin kx$, $\cos kx$<br>$k = \dfrac{\sqrt{2m(E - U)}}{\hbar}$ |
| $E < U$인 곳 | $e^{\pm\beta x}$<br>$\beta = \dfrac{\sqrt{2m(U - E)}}{\hbar}$ |
| 불확정성 원리 | $\Delta x\,\Delta p_x \ge \hbar$<br>$\Delta E\,\Delta t \ge \hbar$ |

## 우물

| 우물 | 에너지 | 비고 |
|---|---|---|
| 무한 우물 | $E_n = \dfrac{h^2}{8mL^2}n^2$ | $n = 1, 2, \dots$ |
| 무한 우물의 파동함수 | $\psi_n = \sqrt{\dfrac{2}{L}}\sin\dfrac{n\pi x}{L}$ | 봉우리 $n$개 |
| 2차원 우물 | $\dfrac{h^2}{8m}\left(\dfrac{n_x^2}{L_x^2} + \dfrac{n_y^2}{L_y^2}\right)$ | 에너지는 더한다 |
| 조화진동자 | $E_n = \left(n + \frac{1}{2}\right)\hbar\omega$ | $n = 0, 1, \dots$ |
| 터널링 | $T \approx e^{-2\beta a}$ | 폭·질량에 지수적 |
| 전이 | $hf = E_{\text{high}} - E_{\text{low}}$ | |

## 수소 원자

| 상황 | 공식 |
|---|---|
| 각운동량 양자화 (보어) | $mvr = n\hbar$ |
| 궤도 반지름 | $r_n = a_0n^2$<br>$a_0 \approx 0.053\,\text{nm}$ |
| 에너지 준위 | $E_n = -\dfrac{13.6}{n^2}\,\text{eV}$ |
| 준위 값 | $-13.6$, $-3.4$, $-1.51$, $-0.85$ |
| 스펙트럼 | $\dfrac{1}{\lambda} = R\left(\dfrac{1}{n_{\text{low}}^2} - \dfrac{1}{n_{\text{high}}^2}\right)$ |
| 리드버그 상수 | $R \approx 1.1 \times 10^7\,\text{m}^{-1}$ |
| 전자 하나인 이온 | $E_n = -13.6\dfrac{Z^2}{n^2}\,\text{eV}$<br>$r_n = \dfrac{a_0n^2}{Z}$ |
| 계열 | 라이먼(1, 자외선)<br>발머(2, 가시광선)<br>파셴(3, 적외선) |

## 양자수와 각운동량

| 물리량 | 공식 |
|---|---|
| 양자수의 범위 | $l = 0, \dots, n - 1$<br>$m_l = -l, \dots, l$<br>$m_s = \pm\frac{1}{2}$ |
| 상태의 수 | 부껍질 $2(2l + 1)$<br>껍질 $2n^2$ |
| 궤도 각운동량 | $L = \sqrt{l(l + 1)}\,\hbar$<br>$L_z = m_l\hbar$ |
| 궤도 자기 모멘트 | $\mu_{\text{orb},z} = -m_l\mu_B$ |
| 보어 마그네톤 | $\mu_B = \dfrac{e\hbar}{2m}$ |
| 스핀 | $S = \frac{\sqrt{3}}{2}\hbar$, $S_z = \pm\frac{1}{2}\hbar$<br>$\mu_{s,z} = \mp\mu_B$ |
| 전체 각운동량 | $J = \sqrt{j(j + 1)}\,\hbar$<br>$j = l \pm \frac{1}{2}$ |
| 선택 규칙 | $\Delta l = \pm 1$<br>$\Delta m_l = 0, \pm 1$ |
| 방사 확률 밀도 | $\rho = 4\pi r^2\lvert\psi\rvert^2$ |
| 다전자 원자 | $E_n \approx -13.6\dfrac{Z_{\text{eff}}^2}{n^2}\,\text{eV}$ |

## 고체

| 상황 | 공식 |
|---|---|
| 페르미-디락 분포 | $P(E) = \dfrac{1}{e^{(E - E_F)/kT} + 1}$ |
| 상태 밀도 | $N(E) \propto \sqrt{E}$ |
| 전자의 수 밀도 | $n = \displaystyle\int N(E)P(E)\,dE$ |
| 다이오드 | $I = I_0\left(e^{eV/kT} - 1\right)$ |
| 발광 다이오드 | $hf \approx E_g$ |

## 핵

| 상황 | 공식 |
|---|---|
| 결합 에너지, 반응 에너지 | $\Delta E = \Delta M\,c^2$ |
| 질량 단위 | $1\,\text{u} \approx 931.5\,\text{MeV}/c^2$ |
| 붕괴 법칙 | $N = N_0e^{-\lambda t}$ |
| 붕괴율 | $R = \lambda N$ |
| 반감기 | $T_{1/2} = \dfrac{\ln 2}{\lambda}$ |
| 평균 수명 | $\tau = \dfrac{1}{\lambda}$ |
| 알파 붕괴 | $Z - 2$, $A - 4$ |
| 베타 마이너스 붕괴 | $Z + 1$, $A$ 그대로 |
| 베타 플러스 붕괴 | $Z - 1$, $A$ 그대로 |
