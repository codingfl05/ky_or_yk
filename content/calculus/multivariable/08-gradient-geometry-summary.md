---
id: calc-mv-gradient-geometry-summary
title_ko: "그래디언트로 푸는 접평면·법선·접선·법평면 총정리"
title_en: "Gradient geometry: tangent planes, normal lines and normal planes"
question: "그래디언트 하나로 접평면, 법선, 교선의 접선과 법평면, 곡면끼리 접하거나 직교하는 조건을 어떻게 구하는가?"
tags: [그래디언트, 기울기 벡터, 접평면, 법선, 법평면, 접선, 교선, 등위면, 등위선, 방향도함수, 곡면의 교각, gradient, tangent plane, normal line, normal plane, level surface]
importance: 3
related: [calc-mv-tangent-plane, calc-mv-directional-derivative, calc-vec-line-equation, calc-vec-plane-equation, calc-vec-tnb-frame, calc-mv-taylor-linearization]
source: manual
verified: false
---

## formula
$$
\nabla F(P) = \langle F_x, F_y, F_z\rangle \ \perp\ \text{level surface } F = c \text{ at } P
$$

곡면 $F(x, y, z) = c$ 위의 점 $P$에서:

$$
\text{tangent plane: } \nabla F(P)\cdot(\mathbf{x} - P) = 0
$$

$$
\text{normal line: } \mathbf{x} = P + t\,\nabla F(P)
$$

두 곡면 $F = 0$, $G = 0$의 교선 위의 점 $P$에서:

$$
\mathbf{d} = \nabla F(P)\times\nabla G(P)
$$

$$
\text{tangent line: } \mathbf{x} = P + t\,\mathbf{d}
$$

$$
\text{normal plane: } \mathbf{d}\cdot(\mathbf{x} - P) = 0
$$

매개변수 곡선 $\mathbf{r}(t)$에서는 $\mathbf{d} = \mathbf{r}'(t_0)$로 두고 위 두 식을 그대로 쓴다.

## conditions
- $\nabla F(P) \ne \mathbf{0}$이어야 접평면이 정해진다. $P$가 곡면 위의 점인지 먼저 확인한다.
- $z = f(x, y)$ 꼴이면 $F = f(x, y) - z$ (또는 $z - f(x, y)$)로 바꿔서 쓴다. 이때 $\nabla F = \langle f_x, f_y, -1\rangle$.
- 법선 벡터는 길이와 부호가 상관없다. $\nabla F$의 상수배는 모두 같은 법선이다.

## explanation
### 핵심은 한 문장
> 그래디언트 $\nabla F$는 등위면 $F = c$에 수직이다.

곡면 위에서 움직이면 $F$의 값이 변하지 않는다. 그 방향으로의 변화율(방향도함수) $\nabla F\cdot\mathbf{u}$가 0이니, 곡면에 접하는 모든 방향 $\mathbf{u}$와 $\nabla F$는 수직이다. 그래서 $\nabla F$가 그대로 법선벡터가 되고, 아래 모든 공식이 여기서 나온다.

### 무엇을 묻는가 → 무엇을 쓰는가
| 구하는 것 | 필요한 벡터 | 식 |
|---|---|---|
| 곡면의 접평면 | 법선 $\mathbf{n} = \nabla F(P)$ | $\mathbf{n}\cdot(\mathbf{x} - P) = 0$ |
| 곡면의 법선(직선) | 방향 $\nabla F(P)$ | $\dfrac{x - x_0}{F_x} = \dfrac{y - y_0}{F_y} = \dfrac{z - z_0}{F_z}$ |
| 두 곡면의 교선의 접선 | 방향 $\nabla F\times\nabla G$ | $\mathbf{x} = P + t\,\mathbf{d}$ |
| 두 곡면의 교선의 법평면 | 법선 $\nabla F\times\nabla G$ | $\mathbf{d}\cdot(\mathbf{x} - P) = 0$ |
| 매개변수 곡선의 접선·법평면 | $\mathbf{r}'(t_0)$ | 교선과 같은 식 ($\mathbf{d} = \mathbf{r}'(t_0)$) |
| 평면 곡선 $F(x, y) = 0$의 접선 | 법선 $\langle F_x, F_y\rangle$ | $F_x(x - x_0) + F_y(y - y_0) = 0$ |
| 매개변수 곡면 $\mathbf{r}(u, v)$의 접평면 | 법선 $\mathbf{r}_u\times\mathbf{r}_v$ | $\mathbf{n}\cdot(\mathbf{x} - P) = 0$ |

헷갈리기 쉬운 짝: 곡면의 "법선"은 직선(방향 = $\nabla F$)이고, 곡선의 "법평면"은 평면(법선 = 곡선의 접선 방향)이다. 곡면에는 접평면과 법선이, 곡선에는 접선과 법평면이 짝을 이룬다.

### 조건형 문제는 "법선끼리"로 번역한다
| 문제의 말 | 번역 |
|---|---|
| 접평면이 평면 $ax + by + cz = d$에 평행 | $\nabla F \parallel \langle a, b, c\rangle$, 즉 $\nabla F = k\langle a, b, c\rangle$ |
| 접평면이 $xy$평면에 평행 (수평) | $\nabla F \parallel \langle 0, 0, 1\rangle$: $F_x = F_y = 0$ |
| 법선이 직선 $\mathbf{x} = \mathbf{p} + t\mathbf{v}$에 평행 | $\nabla F \parallel \mathbf{v}$ |
| 접평면이 직선에 평행 (직선이 접평면 위에 놓일 수 있음) | $\nabla F\cdot\mathbf{v} = 0$ |
| 두 곡면이 점 $P$에서 접한다 | $P$가 둘 다의 위에 있고 $\nabla F(P) \parallel \nabla G(P)$ |
| 두 곡면이 점 $P$에서 직교한다 | $\nabla F(P)\cdot\nabla G(P) = 0$ |
| 두 곡면이 이루는 각 | 법선 사이의 각: $\cos\theta = \dfrac{\lvert\nabla F\cdot\nabla G\rvert}{\lvert\nabla F\rvert\lvert\nabla G\rvert}$ |
| 접평면이 원점(또는 점 $Q$)을 지난다 | 접평면 식에 $Q$를 대입 → 접점이 만족할 조건 |

"평행" 조건에서 미지수(접점 $x$, $y$, $z$와 비례상수 $k$)를 구한 뒤, 접점이 곡면 위에 있다는 식을 꼭 함께 쓴다. 이 식을 빠뜨리면 접점이 하나로 정해지지 않는다.

### 그래디언트의 세 얼굴
1. 방향: 함수가 가장 빠르게 증가하는 방향. 최대 증가율은 $\lvert\nabla f\rvert$.
2. 변화율 계산기: 단위벡터 $\mathbf{u}$ 방향의 변화율은 $D_{\mathbf{u}}f = \nabla f\cdot\mathbf{u}$.
3. 법선: 등위선·등위면에 수직.

셋은 같은 사실이다. 등위면을 따라가면 값이 안 변하니(변화율 0) 그 방향은 $\nabla f$에 수직이고, 가장 가파르게 올라가는 방향은 등위면을 수직으로 가로지르는 $\nabla f$ 방향이다.

### 자주 틀리는 포인트
- $z = f(x, y)$를 $F = f - z$로 바꿀 때 $z$항의 $-1$을 빠뜨린다. 법선은 $\langle f_x, f_y, -1\rangle$.
- 접점을 구하고 멈춘다. 문제가 접평면을 물으면 평면 식까지 쓴다.
- 교선의 접선 방향을 $\nabla F + \nabla G$처럼 더한다. 두 법선 모두에 수직이어야 하므로 외적이다.
- 이변수 함수 $f(x, y)$의 그래디언트 $\langle f_x, f_y\rangle$는 등위선(평면 위의 곡선)에 수직이지, 그래프 $z = f(x, y)$(곡면)의 법선이 아니다. 곡면의 법선은 3차원 벡터 $\langle f_x, f_y, -1\rangle$.

## story
산의 등고선 지도를 떠올리자. 등고선을 따라 걸으면 높이가 변하지 않는다. 가장 가파르게 올라가는 길은 항상 등고선을 직각으로 가로지른다. 그 "직각으로 가로지르는 화살표"가 그래디언트다. 3차원에서는 등고선이 등위면이 되고, 그 면에 직각으로 꽂힌 화살표가 법선, 그 화살표에 수직으로 면에 딱 붙인 판이 접평면이다.

## example
곡면 $z = x^2 + y^2$의 접평면 중 평면 $x + 2y - z = 0$에 평행한 것:

$F = x^2 + y^2 - z$로 두면 $\nabla F = \langle 2x, 2y, -1\rangle = k\langle 1, 2, -1\rangle$ → $k = 1$, $x = \dfrac{1}{2}$, $y = 1$, 곡면 식에서 $z = \dfrac{5}{4}$.

$$
\left(x - \frac{1}{2}\right) + 2(y - 1) - \left(z - \frac{5}{4}\right) = 0 \ \Rightarrow\ x + 2y - z = \frac{5}{4}
$$

두 곡면 $x^2 + y^2 + z^2 = 6$과 $z = x^2 + y^2$의 교선 위 점 $(1, 1, 2)$에서 접선의 방향:

$$
\nabla F = \langle 2, 2, 4\rangle,\quad \nabla G = \langle 2, 2, -1\rangle \ (G = x^2 + y^2 - z),\quad \nabla F\times\nabla G = \langle -10, 10, 0\rangle \parallel \langle -1, 1, 0\rangle
$$

접선 $\mathbf{x} = \langle 1, 1, 2\rangle + t\langle -1, 1, 0\rangle$, 법평면 $-(x - 1) + (y - 1) = 0$, 곧 $y = x$.

## supplement
사용자 요청으로 Claude가 새로 작성한 총정리 카드입니다 (접평면과 법선, 방향도함수와 그래디언트 카드의 내용을 묶고, 조건형 문제 번역표와 예제를 추가). 첫 예제는 미적분학 총정리 06번 문제입니다.
