---
id: calc-mv-parametric-tangent-plane
title_ko: "매개변수 곡면의 접평면"
title_en: "Tangent plane to a parametric surface"
question: "곡면이 r(u, v)로 주어질 때 접평면의 법선벡터는 어떻게 구하는가?"
tags: [매개변수 곡면, 접평면, 법선벡터, 외적, parametric surface, tangent plane, normal vector]
importance: 2
related: [calc-mv-tangent-plane, calc-mv-intersection-tangent-line, calc-vec-cross-product, calc-mv-surface-area, calc-mv-gradient-geometry-summary]
source: "book:BLIS편입 다변수 3장 (01 접평면의 방정식)"
verified: false
---

## formula
$$
\mathbf{n} = \mathbf{r}_u\times\mathbf{r}_v
$$

$$
\mathbf{n}\cdot\langle x - x_0,\ y - y_0,\ z - z_0\rangle = 0
$$

## conditions
- 곡면: $\mathbf{r}(u, v) = \langle x(u, v), y(u, v), z(u, v)\rangle$.
- $\mathbf{r}_u = \dfrac{\partial\mathbf{r}}{\partial u}$, $\mathbf{r}_v = \dfrac{\partial\mathbf{r}}{\partial v}$. 접점에 해당하는 $(u_0, v_0)$를 넣은 값이다.
- $(x_0, y_0, z_0) = \mathbf{r}(u_0, v_0)$.
- $\mathbf{r}_u\times\mathbf{r}_v \ne \mathbf{0}$이어야 한다.

## explanation
::fig parametric-surface-patch | 곡면의 작은 조각. 두 변이 r_u, r_v 방향이다.

### 먼저 떠올릴 것
- 접평면을 쓰려면 지나는 점과 법선벡터가 필요하다.
- 외적 $\mathbf{a}\times\mathbf{b}$는 $\mathbf{a}$와 $\mathbf{b}$ 모두에 수직인 벡터다.
- 평면 위에 놓인 나란하지 않은 두 벡터를 알면, 둘을 외적해서 그 평면의 법선벡터를 얻는다.

### 기호 풀이
$\mathbf{r}(u, v)$는 두 숫자 $(u, v)$를 넣으면 공간의 점 하나가 나오는 함수다. 지도의 경도·위도를 넣으면 지구 위의 한 점이 정해지는 것과 같다.

- $v$를 고정하고 $u$만 움직이면 곡면 위에 곡선 하나가 그려진다. 그 곡선의 접선벡터가 $\mathbf{r}_u$다.
- $u$를 고정하고 $v$만 움직이면 다른 곡선이 그려지고, 그 접선벡터가 $\mathbf{r}_v$다.

그림에서 $\mathbf{a}$는 $u$만 $\Delta u$ 늘렸을 때 옮겨 간 벡터로, 대략 $\mathbf{r}_u\,\Delta u$다. $\mathbf{b}$는 대략 $\mathbf{r}_v\,\Delta v$다.

### 왜 외적인가
$\mathbf{r}_u$와 $\mathbf{r}_v$는 둘 다 곡면 위 곡선의 접선벡터이니 접평면 안에 누워 있다. 접평면 안의 두 벡터에 모두 수직인 벡터가 법선벡터이므로 둘을 외적한다.

### 푸는 순서
1. 접점에 해당하는 $(u_0, v_0)$를 찾는다 (점의 좌표가 주어졌으면 $\mathbf{r}(u, v)$와 맞춰서).
2. $\mathbf{r}_u$, $\mathbf{r}_v$를 구하고 $(u_0, v_0)$를 넣는다.
3. 외적해서 $\mathbf{n}$을 구한다.
4. 접점과 $\mathbf{n}$으로 평면의 방정식을 쓴다.

### 한 번 따라 하기
$\mathbf{r}(u, v) = \langle u, v, u^2 + v^2\rangle$, $(u, v) = (1, 1)$.

1. 접점: $\mathbf{r}(1, 1) = (1, 1, 2)$.
2. $\mathbf{r}_u = \langle 1, 0, 2u\rangle = \langle 1, 0, 2\rangle$, $\mathbf{r}_v = \langle 0, 1, 2v\rangle = \langle 0, 1, 2\rangle$.
3. 외적:

$$
\mathbf{n} = \langle 1, 0, 2\rangle\times\langle 0, 1, 2\rangle = \langle -2, -2, 1\rangle
$$

4. 접평면:

$$
-2(x - 1) - 2(y - 1) + (z - 2) = 0
$$

이 곡면은 $z = x^2 + y^2$와 같은 곡면이다. "접평면과 법선" 카드의 둘째 공식으로 구한 $z - 2 = 2(x - 1) + 2(y - 1)$과 같은 식임을 확인할 수 있다.

### 다른 꼴과의 관계
$z = f(x, y)$는 $\mathbf{r}(x, y) = \langle x, y, f(x, y)\rangle$로 볼 수 있다.

$$
\mathbf{r}_x\times\mathbf{r}_y = \langle 1, 0, f_x\rangle\times\langle 0, 1, f_y\rangle = \langle -f_x, -f_y, 1\rangle
$$

$\nabla F = \langle f_x, f_y, -1\rangle$과 부호만 다른 같은 방향이다. 어느 방법으로 구해도 같은 평면이 나온다.

### 자주 틀리는 포인트
- 외적은 $(u_0, v_0)$를 넣은 뒤에 한다. 문자가 든 채로 외적하면 계산이 길어진다.
- 외적의 순서를 바꾸면 부호만 바뀐다. 접평면의 방정식은 같다. (방향이 중요한 면적분에서는 순서가 중요하다.)
- 그림의 넓이 이야기: 조각의 넓이는 대략 $\lvert\mathbf{r}_u\times\mathbf{r}_v\rvert\,\Delta u\,\Delta v$다. 같은 외적이 곡면의 넓이 공식에도 쓰인다.

## supplement
교재의 유형 2(한 줄 설명과 그림)를 옮기고, 기호 풀이와 왜 외적인지, 푸는 순서, 예, 다른 꼴과의 관계는 Claude가 추가했습니다. 약점 메모 반영으로 "접평면과 법선" 카드에서 나눠 만든 카드입니다.
