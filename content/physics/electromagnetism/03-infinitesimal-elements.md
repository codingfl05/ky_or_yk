---
id: phys-em-infinitesimal-elements
title_ko: 쪼개서 더하기 (미소 요소 적분)
title_en: Superposition by infinitesimal elements
question: "연속 분포(선·면·판·원판)의 전위·전기장·자기장·힘을 구할 때 쪼개서 더하는 순서는?"
tags: [미소 요소, 쪼개서 더하기, 중첩, 적분, 선전하밀도, 면전하밀도, 띠, 고리, infinitesimal element, superposition, charge density, integration]
importance: 3
related: [phys-em-gauss-law]
source: manual
verified: false
---

## formula
$$
X = \int dX \qquad (X = V,\ \mathbf{E},\ \mathbf{B},\ \mathbf{F})
$$

$$
dq = \lambda\,dx = \sigma\,dA = \rho\,dV
$$

$$
di = \frac{i}{L}\,dr \quad (\text{uniform sheet of width } L)
$$

## conditions
- 전하·전류가 연속적으로 분포해 점전하·직선 도선 공식을 한 번에 쓸 수 없을 때.
- 대칭이 좋아서 가우스 법칙(Gauss's law)이나 앙페르 법칙(Ampère's law)으로 바로 풀리면 그쪽이 더 빠르다. 쪼개서 더하기는 대칭이 부족하거나 축 위의 한 점처럼 특정 위치를 물을 때 쓴다.
- 기호: $\lambda$ 선밀도, $\sigma$ 면밀도, $\rho$ 부피밀도. 균일하면 $\lambda = \dfrac{Q}{L}$, $\sigma = \dfrac{Q}{A}$.

## explanation
### 4단계 순서
1. 쪼개는 모양 정하기: 조각 하나가 이미 공식을 아는 모양이 되게 쪼갠다 (점전하, 고리, 무한 직선 도선 등).
2. 조각의 양을 적분 변수로 쓰기: $dq$나 $di$를 비율로 바꾼다. 예) $dr : di = L : i$ → $di = \dfrac{i}{L}\,dr$
3. 거리를 적분 변수로 쓰기: 조각에서 구하려는 점까지의 거리 $r$을 적분 변수로 표현하고, 적분 구간을 정한다.
4. 방향 확인: 전위 $V$는 스칼라라 그냥 더한다. $\mathbf{E}$, $\mathbf{B}$, $\mathbf{F}$는 벡터이므로 조각마다 방향이 같은지 본다. 다르면 대칭으로 상쇄되는 성분을 먼저 지우고 남는 성분($dB\cos\theta$ 등)만 적분한다.

### 자주 틀리는 포인트
- 방향이 다른 벡터의 크기를 그대로 더하는 실수. 적분하기 전에 대칭으로 지워지는 성분부터 확인한다.
- 대칭으로 통째로 상쇄되는 부분은 아예 적분하지 않는다 (예: 직사각형 고리의 수직인 두 변).
- 전기장은 $V$를 먼저 구해서 $E = -\dfrac{dV}{dz}$로 미분하는 것이 벡터 적분보다 쉬울 때가 많다 (축 위의 점).

## story
케이크 한 판의 무게를 모를 때 조각 하나의 무게를 알면 조각 수만큼 더하면 된다. 다만 조각마다 크기가 다르면(가장자리일수록 넓은 띠, 멀수록 약한 장) 조각 하나를 "위치의 함수"로 써서 더하는 것이 적분이다.

## example
| 분포 | 쪼개는 조각 | 조각의 양 | 조각에 쓰는 공식 |
|---|---|---|---|
| 막대 (길이 $L$) | 길이 $dx$ | $dq = \lambda\,dx$ | 점전하 |
| 고리 (반지름 $R$) | 호 $ds$ | $dq = \lambda\,ds$ | 점전하 (축 위에서는 모든 조각의 거리가 같음) |
| 원판 (반지름 $R$) | 반지름 $r$, 폭 $dr$인 고리 | $dq = \sigma\,2\pi r\,dr$ | 고리 |
| 회전하는 원판 | 반지름 $r$, 폭 $dr$인 고리 | $di = \dfrac{dq}{T} = \sigma\omega r\,dr$ | 원형 전류 |
| 폭 $L$인 판 전류 | 폭 $dr$인 띠 | $di = \dfrac{i}{L}\,dr$ | 무한 직선 도선 |
| 도선 옆 고리의 변 | 길이 $dx$ | $dF = i\,B(x)\,dx$ | 직선 도선의 $B = \dfrac{\mu_0 i}{2\pi x}$ |

예) 폭 $L$인 판에서 같은 평면 위, 가장자리로부터 $d$인 점:

$$
B = \int_d^{L+d}\frac{\mu_0}{2\pi r}\cdot\frac{i}{L}\,dr = \frac{\mu_0 i}{2\pi L}\ln\frac{L+d}{d}
$$

## supplement
사용자 요청으로 Claude가 새로 작성한 카드입니다 (원본 노트 없음). 문제 159, 165, 166의 풀이 흐름을 일반화했습니다.
