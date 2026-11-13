## 전하와 전기장

| 상황 | 공식 | 기억할 그림 |
|---|---|---|
| 두 점전하의 힘 | $F = \dfrac{k\lvert q_1q_2\rvert}{r^2}$<br>$k = \dfrac{1}{4\pi\varepsilon_0}$ | 만유인력의 전하 버전 |
| 전기장의 정의 | $\mathbf{E} = \dfrac{\mathbf{F}}{q_0}$<br>$\mathbf{F} = q\mathbf{E}$ | 만드는 쪽의 존재감 |
| 점전하 | $E = \dfrac{kq}{r^2}$ | 구면에 퍼짐 |
| 원호의 중심 (중심각 $\theta$) | $E = \dfrac{2k\lambda}{R}\sin\dfrac{\theta}{2}$ | 대칭축 성분만 남음 |
| 고리의 축 위 | $E = \dfrac{kqz}{(z^2+R^2)^{3/2}}$ | 축 성분만 남음 |
| 원판의 축 위 | $E = \dfrac{\sigma}{2\varepsilon_0}\left(1 - \dfrac{z}{\sqrt{z^2+R^2}}\right)$ | 고리를 쌓은 것 |
| 쌍극자의 축 위 (먼 곳) | $E = \dfrac{1}{2\pi\varepsilon_0}\dfrac{p}{z^3}$<br>$p = qd$ | 멀리서 서로 지움 |
| 쌍극자가 받는 돌림힘 | $\tau = pE\sin\theta$, $U = -pE\cos\theta$ | 전기장 방향으로 정렬 |

## 가우스 법칙

$$
\varepsilon_0\oint\mathbf{E}\cdot d\mathbf{A} = q_{\text{enc}}
$$

| 분포 | 전기장 |
|---|---|
| 무한 직선 | $\dfrac{\lambda}{2\pi\varepsilon_0 r}$ |
| 얇은 부도체 판 | $\dfrac{\sigma}{2\varepsilon_0}$ |
| 도체 표면 바로 밖 | $\dfrac{\sigma}{\varepsilon_0}$ |
| 반대 부호 평행판 사이 | $\dfrac{\sigma}{\varepsilon_0}$ (바깥은 0) |
| 구껍질 | 안 $0$, 밖 $\dfrac{kq}{r^2}$ |
| 균일한 구 | 안 $\dfrac{kq}{R^3}r$, 밖 $\dfrac{kq}{r^2}$ |
| 도체 내부 | $0$ (전하는 표면에만, 전체가 등전위) |

## 전위와 에너지

| 상황 | 공식 |
|---|---|
| 정의 | $V = \dfrac{U}{q}$, $U = qV$ |
| 전기장과의 관계 | $\Delta V = -\displaystyle\int\mathbf{E}\cdot d\mathbf{s}$<br>$E = -\dfrac{dV}{dr}$ |
| 균일한 전기장 | $\lvert\Delta V\rvert = Ed$ |
| 점전하 | $V = \dfrac{kq}{r}$ |
| 두 점전하의 에너지 | $U = \dfrac{kq_1q_2}{r}$ |
| 원호·고리의 중심 | $V = \dfrac{kQ}{R}$ |
| 고리의 축 위 | $V = \dfrac{kq}{\sqrt{z^2+R^2}}$ |
| 원판의 축 위 | $V = \dfrac{\sigma}{2\varepsilon_0}\left(\sqrt{z^2+R^2} - z\right)$ |
| 쌍극자 | $V = \dfrac{kp\cos\theta}{r^2}$ |
| 에너지 보존 | $\Delta K = -q\,\Delta V$ |

## 축전기

| 상황 | 공식 |
|---|---|
| 정의 | $q = CV$ |
| 평행판 | $C = \dfrac{\varepsilon_0A}{d}$, $V = Ed$ |
| 원통형 | $C = \dfrac{2\pi\varepsilon_0L}{\ln(b/a)}$ |
| 구형 / 고립된 구 | $C = 4\pi\varepsilon_0\dfrac{ab}{b-a}$ / $4\pi\varepsilon_0a$ |
| 병렬 / 직렬 | $C_1 + C_2$ / $\dfrac{C_1C_2}{C_1+C_2}$ |
| 에너지 | $U = \dfrac{q^2}{2C} = \dfrac{1}{2}CV^2$ |
| 에너지 밀도 | $u = \dfrac{1}{2}\varepsilon_0E^2$ |
| 유전체 | $C = \kappa C_0$ ($\varepsilon_0 \to \kappa\varepsilon_0$) |

## 전류와 직류 회로

| 상황 | 공식 |
|---|---|
| 전류, 전류 밀도 | $i = \dfrac{dq}{dt}$<br>$J = \dfrac{i}{A} = nev_d$ |
| 옴의 법칙 | $V = iR$, $E = \rho J$ |
| 저항 | $R = \rho\dfrac{L}{A}$ |
| 직렬 / 병렬 | $R_1 + R_2$ / $\dfrac{R_1R_2}{R_1+R_2}$ |
| 전력 | $P = iV = i^2R = \dfrac{V^2}{R}$ |
| 고리 규칙 | 한 바퀴의 전위 변화 합 $= 0$ |
| 접합점 규칙 | 들어온 전류 $=$ 나간 전류 |
| 내부 저항 | 단자 전압 $= \mathcal{E} - ir$ |

## 자기력

| 상황 | 공식 |
|---|---|
| 움직이는 전하 | $\mathbf{F} = q\mathbf{v}\times\mathbf{B}$<br>$F = \lvert q\rvert vB\sin\phi$ |
| 원운동 | $r = \dfrac{mv}{\lvert q\rvert B}$<br>$T = \dfrac{2\pi m}{\lvert q\rvert B}$ |
| 속도 선택기 | $v = \dfrac{E}{B}$ |
| 전류 도선 | $\mathbf{F} = i\mathbf{L}\times\mathbf{B}$ |
| 평행한 두 도선 | $\dfrac{F}{L} = \dfrac{\mu_0i_ai_b}{2\pi d}$ (같은 방향이면 인력) |
| 전류 고리 | $\mu = NiA$<br>$\tau = \mu B\sin\theta$<br>$U = -\mu B\cos\theta$ |

## 전류가 만드는 자기장

$$
dB = \frac{\mu_0}{4\pi}\frac{i\,ds\,\sin\theta}{r^2}, \qquad \oint\mathbf{B}\cdot d\mathbf{s} = \mu_0i_{\text{enc}}
$$

| 모양 | 자기장 |
|---|---|
| 무한 직선 | $\dfrac{\mu_0i}{2\pi r}$ |
| 반직선 (끝에서 수직 거리 $R$) | $\dfrac{\mu_0i}{4\pi R}$ |
| 굵은 도선의 안쪽 | $\dfrac{\mu_0i}{2\pi R^2}r$ |
| 원호의 중심 (중심각 $\phi$) | $\dfrac{\mu_0i\phi}{4\pi R}$ |
| 원형 고리의 중심 | $\dfrac{\mu_0i}{2R}$ |
| 원형 고리의 축 위 | $\dfrac{\mu_0iR^2}{2(R^2+z^2)^{3/2}}$ |
| 솔레노이드 내부 | $\mu_0ni$ |
| 토로이드 내부 | $\dfrac{\mu_0Ni}{2\pi r}$ |

## 전자기 유도와 코일

| 상황 | 공식 |
|---|---|
| 자기선속 | $\Phi_B = BA\cos\theta$ |
| 패러데이·렌츠 | $\mathcal{E} = -N\dfrac{d\Phi_B}{dt}$ |
| 움직이는 막대 | $\mathcal{E} = BLv$<br>$F = \dfrac{B^2L^2v}{R}$<br>$P = \dfrac{B^2L^2v^2}{R}$ |
| 회전하는 막대 | $\mathcal{E} = \dfrac{1}{2}B\omega L^2$ |
| 유도 전기장 | $\displaystyle\oint\mathbf{E}\cdot d\mathbf{s} = -\dfrac{d\Phi_B}{dt}$ |
| 유도용량 | $L = \dfrac{N\Phi_B}{i}$, 솔레노이드 $L = \mu_0n^2Al$ |
| 자체 / 상호 유도 | $\mathcal{E} = -L\dfrac{di}{dt}$ / $\mathcal{E}_2 = -M\dfrac{di_1}{dt}$ |
| 코일의 에너지 | $U = \dfrac{1}{2}Li^2$<br>$u = \dfrac{B^2}{2\mu_0}$ |

## RC, RL, LC

| 회로 | 식 | 시간 상수·진동수 |
|---|---|---|
| RC 충전 | $q = CV_0\left(1 - e^{-t/RC}\right)$<br>$i = \dfrac{V_0}{R}e^{-t/RC}$ | $\tau = RC$ |
| RC 방전 | $q = q_0e^{-t/RC}$ | $\tau = RC$ |
| RL 켜기 | $i = \dfrac{V_0}{R}\left(1 - e^{-tR/L}\right)$ | $\tau = \dfrac{L}{R}$ |
| RL 끄기 | $i = i_0e^{-tR/L}$ | $\tau = \dfrac{L}{R}$ |
| LC 진동 | $q = Q\cos\omega t$, $I = \omega Q$ | $\omega = \dfrac{1}{\sqrt{LC}}$ |

> 스위치 직후: 빈 축전기는 도선, 코일은 끊긴 선. 한참 뒤에는 반대.

## 교류

| 상황 | 공식 |
|---|---|
| 리액턴스 | $X_C = \dfrac{1}{\omega C}$<br>$X_L = \omega L$ |
| 위상 | 축전기는 전류가 $90^\circ$ 먼저, 코일은 전류가 $90^\circ$ 늦게 |
| 임피던스 | $Z = \sqrt{R^2 + (X_L - X_C)^2}$<br>$I = \dfrac{V_m}{Z}$ |
| 위상각 | $\tan\phi = \dfrac{X_L - X_C}{R}$<br>$\cos\phi = \dfrac{R}{Z}$ |
| 공명 | $\omega = \dfrac{1}{\sqrt{LC}}$ ($Z = R$, 전류 최대) |
| 실횻값 | $V_{\text{rms}} = \dfrac{V_m}{\sqrt2}$<br>$I_{\text{rms}} = \dfrac{I}{\sqrt2}$ |
| 평균 전력 | $P = I_{\text{rms}}^2R = V_{\text{rms}}I_{\text{rms}}\cos\phi$ |
| 변압기 | $\dfrac{V_2}{V_1} = \dfrac{N_2}{N_1}$<br>$V_1I_1 = V_2I_2$ |

## 상수

| 기호 | 값 |
|---|---|
| $k = \dfrac{1}{4\pi\varepsilon_0}$ | $9\times10^9\,\text{N}\cdot\text{m}^2/\text{C}^2$ |
| $\varepsilon_0$ | $8.85\times10^{-12}\,\text{F/m}$ |
| $\mu_0$ | $4\pi\times10^{-7}\,\text{T}\cdot\text{m/A}$ |
| $e$ | $1.60\times10^{-19}\,\text{C}$ |
