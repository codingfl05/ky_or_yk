---
id: calc-vec-tnb-frame
title_ko: "단위접선·주법선·종법선 벡터"
title_en: "Unit tangent, normal, and binormal vectors"
question: "곡선 r(t)의 T, N, B 벡터의 정의와 접촉평면의 법선은?"
tags: [단위접선벡터, 주법선벡터, 종법선벡터, 접촉평면, TNB, frenet frame, osculating plane]
importance: 2
related: [calc-vec-curvature-torsion]
source: "book:BLIS편입 다변수 1장 (06 T, N, B 벡터)"
verified: false
---

## formula
$$
\mathbf{T} = \frac{\mathbf{r}'}{|\mathbf{r}'|}, \qquad \mathbf{N} = \frac{\mathbf{T}'}{|\mathbf{T}'|}, \qquad \mathbf{B} = \mathbf{T}\times\mathbf{N}
$$

## conditions
- $\mathbf{N}$은 곡선이 휘는 안쪽을 향한다. $\mathbf{B}$는 $\mathbf{T}$, $\mathbf{N}$ 모두에 수직.
- $\mathbf{B}$의 방향은 $\mathbf{r}'\times\mathbf{r}''$와 같아서, 계산할 때 $\mathbf{B} = \dfrac{\mathbf{r}'\times\mathbf{r}''}{|\mathbf{r}'\times\mathbf{r}''|}$이 빠르다.
- 접촉평면(osculating plane): $\mathbf{T}$, $\mathbf{N}$을 포함하고 법선벡터가 $\mathbf{B}$. 법평면(normal plane): 법선벡터가 $\mathbf{T}$.

## explanation
::fig tnb-frame | 세 벡터는 길이가 1이고 서로 수직이다. 점이 움직이면 이 틀도 곡선을 따라 함께 돈다.

### 먼저 떠올릴 것
- $\mathbf{r}(t)$는 시각 $t$에 점이 있는 위치다. $\mathbf{r}'(t)$는 속도 벡터로, 곡선에 접하고 진행 방향을 향한다.
- 벡터를 자기 크기로 나누면 방향만 남은 길이 1짜리 벡터(단위벡터)가 된다.
- 외적 $\mathbf{a}\times\mathbf{b}$는 두 벡터에 모두 수직인 벡터다 (오른손 법칙).

### 세 벡터 각각
1. 단위접선벡터 $\mathbf{T}$ (unit tangent): 지금 나아가는 방향.
   - 속도 벡터 $\mathbf{r}'$에서 빠르기를 떼어 내고 방향만 남긴 것이다.
   - 자동차로 치면 차의 앞쪽이다.
2. 주법선벡터 $\mathbf{N}$ (principal normal): 곡선이 휘는 쪽.
   - $\mathbf{T}$가 어느 쪽으로 돌아가고 있는지를 나타낸다. 그래서 $\mathbf{T}$를 미분한 $\mathbf{T}'$의 방향이다.
   - 항상 굽은 길의 안쪽, 곧 접촉원의 중심을 향한다.
   - 자동차로 치면 핸들을 꺾은 쪽이다.
3. 종법선벡터 $\mathbf{B}$ (binormal): 둘 모두에 수직인 방향.
   - 곡선이 그 순간 놓여 있는 평면(접촉평면)에 수직으로 서 있다.
   - 자동차로 치면 지붕 쪽이다. 길이 평평하면 $\mathbf{B}$는 변하지 않고, 길이 비틀리면 $\mathbf{B}$가 기운다. $\mathbf{B}$가 변하는 빠르기가 비틀림(열률)이다.

### N이 T에 수직인 까닭
$\mathbf{T}$의 길이는 항상 1이다. $\mathbf{T}\cdot\mathbf{T} = 1$의 양변을 미분하면

$$
2\,\mathbf{T}\cdot\mathbf{T}' = 0
$$

길이가 변하지 않는 벡터는 방향만 바뀔 수 있고, 그 변화는 자기 자신에 수직이다. 원운동에서 속도와 가속도가 수직인 것과 같은 이유다.

::fig osculating-circle | 접촉평면을 위에서 내려다본 모습.

### 세 벡터의 관계
오른손 좌표계의 $x, y, z$축처럼 차례로 돌아가며 외적이 성립한다.

$$
\mathbf{T}\times\mathbf{N} = \mathbf{B}, \qquad \mathbf{N}\times\mathbf{B} = \mathbf{T}, \qquad \mathbf{B}\times\mathbf{T} = \mathbf{N}
$$

순서를 뒤집으면 부호가 바뀐다.

### 세 평면
| 평면 | 포함하는 벡터 | 법선벡터 |
|---|---|---|
| 접촉평면 | $\mathbf{T}$, $\mathbf{N}$ | $\mathbf{B}$ |
| 법평면 | $\mathbf{N}$, $\mathbf{B}$ | $\mathbf{T}$ |
| 전직평면 | $\mathbf{T}$, $\mathbf{B}$ | $\mathbf{N}$ |

평면의 방정식을 세울 때는 법선벡터만 있으면 되고, 길이는 상관없다. 접촉평면은 $\mathbf{r}'\times\mathbf{r}''$를, 법평면은 $\mathbf{r}'$를 그대로 법선벡터로 쓴다 (단위벡터로 만들 필요가 없다).

### 계산 순서
$\mathbf{N}$을 $\mathbf{T}'$로 직접 구하면 계산이 길어서, $\mathbf{B}$를 먼저 구한 뒤 $\mathbf{N} = \mathbf{B}\times\mathbf{T}$로 구하는 것이 보통 빠르다.

1. $\mathbf{r}'$, $\mathbf{r}''$를 구하고 $t$ 값을 넣는다.
2. $\mathbf{T} = \mathbf{r}'/\lvert\mathbf{r}'\rvert$.
3. $\mathbf{B} = (\mathbf{r}'\times\mathbf{r}'')/\lvert\mathbf{r}'\times\mathbf{r}''\rvert$.
4. $\mathbf{N} = \mathbf{B}\times\mathbf{T}$.

### 한 번 따라 하기: 나선
$\mathbf{r}(t) = (\cos t, \sin t, t)$.

$$
\mathbf{r}' = (-\sin t, \cos t, 1), \qquad \lvert\mathbf{r}'\rvert = \sqrt{2}
$$

$$
\mathbf{T} = \frac{1}{\sqrt{2}}(-\sin t, \cos t, 1)
$$

$\mathbf{r}'' = (-\cos t, -\sin t, 0)$이므로

$$
\mathbf{r}'\times\mathbf{r}'' = (\sin t, -\cos t, 1)
$$

$$
\mathbf{B} = \frac{1}{\sqrt{2}}(\sin t, -\cos t, 1)
$$

$$
\mathbf{N} = \mathbf{B}\times\mathbf{T} = (-\cos t, -\sin t, 0)
$$

$\mathbf{N}$은 항상 $z$축을 향한다. 나선이 축 쪽으로 휘며 감겨 올라가기 때문이다. $t = 0$에서 접촉평면은 점 $(1, 0, 0)$을 지나고 법선이 $(0, -1, 1)$이므로 $-y + z = 0$.

### 자주 틀리는 포인트
- $\mathbf{N}$은 $\mathbf{r}''$(가속도)의 방향이 아니다. 가속도에는 빨라지는 성분($\mathbf{T}$ 방향)도 섞여 있다. 빠르기가 일정할 때만 $\mathbf{r}''$가 $\mathbf{N}$과 나란하다.
- 직선에서는 $\mathbf{T}$가 변하지 않아 $\mathbf{T}' = \mathbf{0}$이고, $\mathbf{N}$과 $\mathbf{B}$가 정해지지 않는다.
- 외적의 순서: $\mathbf{B} = \mathbf{T}\times\mathbf{N}$이지 $\mathbf{N}\times\mathbf{T}$가 아니다.
- 매개변수의 방향을 뒤집으면 $\mathbf{T}$와 $\mathbf{B}$는 부호가 바뀌고 $\mathbf{N}$은 그대로다 (휘는 쪽은 같다).

## supplement
B를 r′×r″로 빠르게 구하는 방법과 N = B×T를 추가했습니다. 교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다. 약점 메모 반영: 그림 두 개(tnb-frame, osculating-circle)와 세 벡터 각각의 뜻, N이 T에 수직인 까닭, 세 벡터의 관계, 세 평면(전직평면 포함), 계산 순서, 나선 예, 자주 틀리는 포인트를 Claude가 추가했습니다.
