---
id: phys-em-gauss-applications
title_ko: "가우스 법칙으로 구한 대표 전기장"
title_en: "Electric fields from Gauss's law"
question: "무한 직선, 얇은 부도체 판, 도체 표면, 균일한 구 안팎의 전기장은?"
tags: [가우스 법칙, 무한 직선, 면전하, 도체 표면, 구껍질, 균일한 구, line charge, sheet, conductor, sphere]
importance: 3
related: [phys-em-gauss-law, phys-em-conductors, phys-em-symmetry-cancellation]
source: "book:BLIS편입 일반물리 13-30~36"
verified: false
---

## formula
$$
E_{\text{line}} = \frac{\lambda}{2\pi\varepsilon_0 r}
$$

$$
E_{\text{insulating sheet}} = \frac{\sigma}{2\varepsilon_0}
$$

$$
E_{\text{conductor surface}} = \frac{\sigma}{\varepsilon_0}
$$

$$
E_{\text{shell}} = \begin{cases} 0 & (r<R)\\ \dfrac{kq}{r^2} & (r>R)\end{cases}
$$

$$
E_{\text{solid sphere}} = \begin{cases} \dfrac{kq}{R^3}\,r & (r<R)\\ \dfrac{kq}{r^2} & (r\ge R)\end{cases}
$$

## conditions
- 직선·판은 무한히 길거나 넓을 때 (유한해도 아주 가까우면 근사적으로 성립).
- $\lambda$ 선전하밀도, $\sigma$ 면전하밀도, 구는 전하가 균일하게 분포할 때.

## explanation
::fig gauss-surfaces | 전하 분포의 대칭을 그대로 닮은 면을 고른다.
::fig sphere-field-graph | 구 안팎의 전기장. 꽉 찬 구는 안에서 r에 비례해 커지고, 껍질(도체)은 안에서 0이다. 밖은 둘 다 점전하와 같다.

### 한 번 따라 하기: 무한 직선
먼저 가우스 법칙을 떠올린다: (닫힌 면을 뚫는 전기장 × 넓이) × $\varepsilon_0$ = (안의 전하).
1. 가우스 면: 직선을 축으로 하는 반지름 $r$, 길이 $h$인 원기둥. 직선에서 사방으로 똑같이 퍼지는 전기장은 원기둥 옆면을 수직으로 뚫고, 크기도 옆면 어디서나 같다. 위아래 뚜껑은 전기장과 나란해서 선속이 0이다.
2. 안의 전하: 길이 $h$만큼 들어 있으니 $\lambda h$.
3. 식: $\varepsilon_0 E\,(2\pi rh) = \lambda h$ → $h$가 약분되어 $E = \dfrac{\lambda}{2\pi\varepsilon_0 r}$.

나머지도 똑같이 "뚫는 넓이"와 "안의 전하"만 바꾸면 아래 표가 된다.

| 분포 | 가우스 면 | $q_{\text{enc}}$ | 결과 |
|---|---|---|---|
| 점전하 | 구면 $4\pi r^2$ | $q$ | $\dfrac{kq}{r^2}$ |
| 무한 직선 | 원기둥 옆면 $2\pi rh$ | $\lambda h$ | $\dfrac{\lambda}{2\pi\varepsilon_0 r}$ |
| 얇은 부도체 판 | 판을 관통하는 원기둥, 양쪽 뚜껑 $2A$ | $\sigma A$ | $\dfrac{\sigma}{2\varepsilon_0}$ |
| 도체 표면 바로 밖 | 한쪽 뚜껑만 밖에 $A$ | $\sigma A$ | $\dfrac{\sigma}{\varepsilon_0}$ |
| 구껍질 | 구면 | 밖 $q$, 안 $0$ | 밖은 점전하, 안은 $0$ |
| 균일한 구 내부 | 구면 $r<R$ | $q\dfrac{r^3}{R^3}$ | $\dfrac{kq}{R^3}r$ |

### 헷갈리는 포인트
- 부도체 판은 $\dfrac{\sigma}{2\varepsilon_0}$, 도체 표면은 $\dfrac{\sigma}{\varepsilon_0}$. 부도체 판은 전기장이 양쪽으로 뚫고 나가 선속이 $2EA$이고, 도체는 안쪽 전기장이 0이라 바깥 한쪽($EA$)만 뚫고 나가기 때문.
- 반대 부호로 대전된 평행판 두 장: 사이에서는 더해져 $\dfrac{\sigma}{\varepsilon_0}$, 바깥에서는 상쇄되어 $0$ (평행판 축전기).
- 구껍질이든 꽉 찬 구든 바깥에서는 점전하처럼 계산한다.
- 균일한 구 내부의 $E\propto r$은 지구 내부의 중력과 같은 구조다 (안쪽 질량만 당김).

## story
지구 속으로 굴을 파고 내려가면 중력이 점점 약해져 중심에서 0이 된다. 내 위쪽 껍질은 아무 힘도 안 주고, 내 아래 작은 공만 당기기 때문이다. 균일하게 대전된 구 안의 전기장이 정확히 이 모양이다.

## supplement
교재 내용을 옮기고, 쉬운 설명·스토리는 Claude가 추가했습니다. 쉬운 설명·그림 보강: 무한 직선 유도를 단계별로 풀어 쓴 설명, 그림(gauss-surfaces, sphere-field-graph).
