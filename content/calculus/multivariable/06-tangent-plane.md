---
id: calc-mv-tangent-plane
title_ko: "접평면과 법선"
title_en: "Tangent planes and normal lines"
question: "곡면 F(x, y, z)=0과 z=f(x, y) 위의 점에서의 접평면, 두 곡면의 교선의 접선은?"
tags: [접평면, 법선, 그래디언트, 교선, tangent plane, normal line]
importance: 3
related: [calc-mv-parametric-tangent-plane, calc-mv-intersection-tangent-line, calc-mv-gradient-geometry-summary, calc-mv-directional-derivative, calc-vec-plane-equation]
source: "book:BLIS편입 다변수 3장 (01 접평면의 방정식)"
verified: false
---

## formula
$$
\begin{aligned}
&F_x(x - x_0) + F_y(y - y_0) + F_z(z - z_0) = 0 \\
&(\nabla F = \langle F_x, F_y, F_z\rangle \text{ at } P_0)
\end{aligned}
$$

$$
z - z_0 = f_x(a, b)(x - a) + f_y(a, b)(y - b)
$$

$$
\mathbf{n} = \mathbf{r}_u\times\mathbf{r}_v \ (\text{parametric surface})
$$

$$
\mathbf{d} = \nabla g\times\nabla h \ (\text{curve } g = 0,\ h = 0)
$$

## conditions
- 첫 식: 곡면이 $F(x, y, z) = 0$으로 주어질 때. $F_x$, $F_y$, $F_z$는 접점 $P_0(x_0, y_0, z_0)$에서의 값이다.
- 둘째 식: 곡면이 $z = f(x, y)$로 주어질 때. 접점은 $(a, b, z_0)$, $z_0 = f(a, b)$.
- 셋째 식(매개변수 곡면)과 넷째 식(두 곡면의 교선)은 따로 카드가 있다. 여기서는 한 줄씩만 적는다.
- 법선(normal line): 접점을 지나고 접평면에 수직인 직선.

$$
\frac{x - x_0}{F_x} = \frac{y - y_0}{F_y} = \frac{z - z_0}{F_z}
$$

- $\nabla F(P_0) \ne \mathbf{0}$이어야 한다.

## explanation
::fig tangent-plane-gradient | 곡면 위의 어떤 곡선을 따라가도 그 접선벡터는 그래디언트에 수직이다.

### 먼저 떠올릴 것
- 평면의 방정식은 "지나는 점 하나"와 "평면에 수직인 벡터(법선벡터) 하나"만 있으면 쓸 수 있다. 법선벡터가 $\langle A, B, C\rangle$이고 점 $(x_0, y_0, z_0)$을 지나면

$$
A(x - x_0) + B(y - y_0) + C(z - z_0) = 0
$$

- 그래디언트(gradient) $\nabla F = \langle F_x, F_y, F_z\rangle$는 편미분 세 개를 모은 벡터다.
- 접평면(tangent plane)은 그 점에서 곡면에 딱 붙는 평면이다. 곡선의 접선을 한 차원 올린 것이다.

그러니 접평면 문제는 결국 "법선벡터를 어떻게 구하느냐"의 문제다. 지나는 점은 접점으로 이미 주어져 있다.

### 그래디언트가 법선벡터인 까닭
곡면 $F = 0$ 위에 누운 곡선 $\mathbf{r}(t)$를 아무거나 하나 잡는다 (그림의 $C$). 곡선이 곡면 위에 있으니 모든 $t$에서

$$
F(x(t), y(t), z(t)) = 0
$$

양변을 $t$로 미분하면 (연쇄법칙)

$$
F_x\,x' + F_y\,y' + F_z\,z' = 0
\quad\Longrightarrow\quad \nabla F\cdot\mathbf{r}'(t) = 0
$$

내적이 0이니 $\nabla F$는 곡선의 접선벡터 $\mathbf{r}'$에 수직이다. 점 $P$를 지나는 곡면 위의 곡선은 얼마든지 많고, 그 접선벡터들이 모여 접평면을 이룬다. $\nabla F$는 그 전부에 수직이므로 접평면의 법선벡터다.

### 경우 1: F(x, y, z) = 0 꼴
1. 모든 항을 한쪽으로 모아 $F = 0$ 꼴로 만든다.
2. $F_x$, $F_y$, $F_z$를 구하고 접점의 좌표를 넣는다. 이것이 법선벡터다.
3. 평면의 방정식에 넣는다.

법선벡터는 방향만 중요하므로 공통인 수로 나눠 간단히 해도 된다.

### 경우 2: z = f(x, y) 꼴
$F = f(x, y) - z$로 두면 경우 1과 같다. 이때

$$
\nabla F = \langle f_x, f_y, -1\rangle
$$

평면의 방정식에 넣고 정리한 것이 둘째 공식이다. 따로 외울 필요 없이 "$z$를 넘겨서 $F = 0$으로 만든다"만 기억해도 된다.

이 접평면은 접점 근처에서 곡면을 가장 잘 흉내 내는 평면이다. 그래서 둘째 공식의 우변이 곧 선형근사 $L(x, y)$다.

### 법선
법선은 직선이므로 "지나는 점"과 "방향벡터"가 필요하다. 방향벡터가 바로 $\nabla F$다. 접평면에서는 $\nabla F$가 법선벡터로, 법선에서는 방향벡터로 쓰인다.

### 한 번 따라 하기
곡면 $x^2 + y^2 + z^2 = 14$ 위의 점 $(1, 2, 3)$.

1. $F = x^2 + y^2 + z^2 - 14$.
2. $\nabla F = \langle 2x, 2y, 2z\rangle = \langle 2, 4, 6\rangle$. 2로 나눠 $\langle 1, 2, 3\rangle$.
3. 접평면:

$$
\begin{aligned}
&(x - 1) + 2(y - 2) + 3(z - 3) = 0 \\
&\quad \Longrightarrow\quad x + 2y + 3z = 14
\end{aligned}
$$

4. 법선: $\dfrac{x - 1}{1} = \dfrac{y - 2}{2} = \dfrac{z - 3}{3}$.

구의 법선이 중심을 지나는 것을 확인할 수 있다 (원점을 넣으면 성립).

곡면 $z = x^2 + y^2$ 위의 점 $(1, 1, 2)$라면 $f_x = 2$, $f_y = 2$이므로

$$
z - 2 = 2(x - 1) + 2(y - 1)
$$

### 나머지 두 경우 (따로 카드)
- 곡면이 $\mathbf{r}(u, v)$로 주어지면 법선벡터는 $\mathbf{r}_u\times\mathbf{r}_v$. → "매개변수 곡면의 접평면" 카드.
- 두 곡면이 만나는 교선의 접선 방향은 $\nabla g\times\nabla h$. → "두 곡면의 교선의 접선과 법평면" 카드.

### 자주 틀리는 포인트
- 편미분한 식에 접점의 좌표를 넣지 않고 변수 그대로 두는 실수. 법선벡터는 숫자 벡터여야 한다.
- $z = f(x, y)$ 꼴에서 법선벡터의 셋째 성분 $-1$을 빠뜨린다.
- 주어진 점이 곡면 위에 있는지 먼저 확인한다. 곡면 밖의 점에서 그은 접평면을 묻는 문제는 접점을 미지수로 두어야 한다.
- 접평면이 어떤 평면과 평행하다는 조건은 "두 법선벡터가 나란하다"로 바꾼다.

## supplement
교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다. 약점 메모 반영: 교재 그림(유형 1)을 넣고, 그래디언트가 법선벡터인 까닭(연쇄법칙), 경우별 풀이 순서, 법선 설명, 예 두 개, 자주 틀리는 포인트를 Claude가 추가했습니다. 매개변수 곡면과 교선은 새 카드 두 장으로 나눠 자세히 적었습니다.
