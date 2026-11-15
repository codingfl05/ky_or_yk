---
id: calc-mv-intersection-tangent-line
title_ko: "두 곡면의 교선의 접선과 법평면"
title_en: "Tangent line and normal plane of the intersection of two surfaces"
question: "두 곡면이 만나는 교선 위의 점에서 접선의 방향벡터는 어떻게 구하는가?"
tags: [교선, 접선, 법평면, 그래디언트, 외적, curve of intersection, tangent line, normal plane]
importance: 3
related: [calc-mv-tangent-plane, calc-mv-parametric-tangent-plane, calc-mv-gradient-geometry-summary, calc-vec-cross-product, calc-vec-line-equation, calc-vec-tnb-frame]
source: "book:BLIS편입 다변수 3장 (01 접평면의 방정식)"
verified: false
---

## formula
$$
\mathbf{d} = \nabla g\times\nabla h
$$

$$
\frac{x - x_0}{d_1} = \frac{y - y_0}{d_2} = \frac{z - z_0}{d_3}
$$

$$
d_1(x - x_0) + d_2(y - y_0) + d_3(z - z_0) = 0
$$

## conditions
- 두 곡면 $g(x, y, z) = 0$, $h(x, y, z) = 0$이 만나서 생기는 곡선(교선) 위의 점 $P(x_0, y_0, z_0)$.
- $\nabla g$, $\nabla h$는 점 $P$에서의 값. $\mathbf{d} = \langle d_1, d_2, d_3\rangle$.
- 둘째 식은 교선의 접선, 셋째 식은 교선의 법평면(접선에 수직인 평면)이다.
- $\mathbf{d} \ne \mathbf{0}$이어야 한다 (두 곡면이 그 점에서 서로 접하면 $\mathbf{d} = \mathbf{0}$).

## explanation
::fig intersection-tangent | 교선은 두 곡면 모두에 놓여 있으므로, 그 접선은 두 법선벡터 모두에 수직이다.

### 먼저 떠올릴 것
- 곡면 $g = 0$ 위의 점에서 $\nabla g$는 그 곡면에 수직이다. 곧 그 곡면 위에 놓인 어떤 곡선의 접선벡터와도 수직이다.
- 외적 $\mathbf{a}\times\mathbf{b}$는 $\mathbf{a}$와 $\mathbf{b}$ 모두에 수직인 벡터다.
- 직선은 지나는 점과 방향벡터로, 평면은 지나는 점과 법선벡터로 쓴다.

### 왜 외적인가
교선 $C$는 곡면 $g = 0$ 위에 있다. 그러니 $C$의 접선벡터는 $\nabla g$에 수직이다.

$C$는 곡면 $h = 0$ 위에도 있다. 그러니 $C$의 접선벡터는 $\nabla h$에도 수직이다.

두 벡터 모두에 수직인 방향은 하나뿐이고, 그것이 외적 $\nabla g\times\nabla h$다.

### 접선과 법평면
같은 벡터 $\mathbf{d}$가 두 가지 역할을 한다.

| 구하는 것 | $\mathbf{d}$의 역할 | 식 |
|---|---|---|
| 교선의 접선 (직선) | 방향벡터 | $\dfrac{x - x_0}{d_1} = \dfrac{y - y_0}{d_2} = \dfrac{z - z_0}{d_3}$ |
| 교선의 법평면 (평면) | 법선벡터 | $d_1(x - x_0) + \cdots = 0$ |

곡면에는 "접평면과 법선(직선)"이, 곡선에는 "접선과 법평면(평면)"이 짝을 이룬다. 이름이 비슷해서 헷갈리기 쉽다.

### 푸는 순서
1. 두 곡면을 $g = 0$, $h = 0$ 꼴로 만든다.
2. 점 $P$에서 $\nabla g$, $\nabla h$를 구한다 (숫자 벡터).
3. 외적해서 $\mathbf{d}$를 구한다. 공통인 수로 나눠 간단히 한다.
4. 접선이면 방향벡터로, 법평면이면 법선벡터로 쓴다.

### 한 번 따라 하기
구 $x^2 + y^2 + z^2 = 6$과 평면 $x + y + z = 4$의 교선 위의 점 $(1, 1, 2)$.

1. $g = x^2 + y^2 + z^2 - 6$, $h = x + y + z - 4$. (점을 넣어 둘 다 0인지 확인: $1 + 1 + 4 = 6$, $1 + 1 + 2 = 4$.)
2. $\nabla g = \langle 2, 2, 4\rangle$ → $\langle 1, 1, 2\rangle$, $\nabla h = \langle 1, 1, 1\rangle$.
3. 외적:

$$
\mathbf{d} = \langle 1, 1, 2\rangle\times\langle 1, 1, 1\rangle = \langle -1, 1, 0\rangle
$$

4. 접선: $x = 1 - t$, $y = 1 + t$, $z = 2$. 법평면: $-(x - 1) + (y - 1) = 0$, 곧 $y = x$.

방향벡터의 한 성분이 0이면 대칭 방정식 대신 이렇게 매개변수로 쓰거나, $\dfrac{x - 1}{-1} = \dfrac{y - 1}{1}$, $z = 2$로 쓴다.

### 자주 틀리는 포인트
- 접선의 방향을 $\nabla g + \nabla h$나 $\nabla g$ 하나로 쓰는 실수. 그것들은 법선 방향이다.
- 외적의 순서를 바꾸면 부호만 바뀐다. 접선과 법평면은 같다.
- 교선이 매개변수 $\mathbf{r}(t)$로 주어졌으면 외적이 필요 없다. 방향벡터는 그냥 $\mathbf{r}'(t_0)$다.

## supplement
교재의 유형 3(공식 한 줄)을 옮기고, 왜 외적인지, 접선과 법평면의 짝, 푸는 순서, 예는 Claude가 추가했습니다. 그림은 교재 그림 대신 Claude가 새로 그렸습니다. 교재의 유형 3 그림은 벡터 하나가 다른 뜻($\nabla f$가 $\nabla g$와 $\nabla h$가 이루는 평면 안에 있음)으로 그려져 있어, 접선 방향을 보여 주기에는 맞지 않았습니다. 약점 메모 반영으로 "접평면과 법선" 카드에서 나눠 만든 카드입니다.
