---
id: calc-vec-line-equation
title_ko: "공간에서 직선의 방정식"
title_en: "Equations of a line in space"
question: "점 (x₀, y₀, z₀)를 지나고 방향벡터가 <d₁, d₂, d₃>인 직선의 방정식 세 가지 형태는?"
tags: [직선의 방정식, 방향벡터, 대칭방정식, line equation, direction vector]
importance: 3
related: [calc-vec-plane-equation, calc-vec-distances]
source: "book:BLIS편입 다변수 1장 (04 직선과 평면의 방정식)"
verified: false
---

## formula
$$
\mathbf{r} = \mathbf{r}_0 + t\mathbf{d}
$$

$$
x = x_0 + td_1,\quad y = y_0 + td_2,\quad z = z_0 + td_3
$$

$$
\frac{x - x_0}{d_1} = \frac{y - y_0}{d_2} = \frac{z - z_0}{d_3}
$$

## conditions
- 순서대로 벡터방정식, 매개변수방정식, 대칭방정식(symmetric equation).
- 대칭방정식에서 $d_i = 0$이면 그 좌표는 상수로 따로 쓴다 (예: $x - 1 = \frac{y}{2},\ z = 3$).
- 두 직선의 사잇각: $\cos\theta = \dfrac{|\mathbf{d}_1\cdot\mathbf{d}_2|}{|\mathbf{d}_1||\mathbf{d}_2|}$.

## explanation
공간의 두 직선은 평행, 한 점에서 만남, 꼬인 위치 중 하나다. 방향벡터가 평행하지 않고 연립해도 해가 없으면 꼬인 위치(skew). 대칭방정식의 $z$ 앞에 음수가 있으면($-z + 1$) 방향벡터 성분이 $-1$이라는 점에 주의.

## supplement
d=0일 때 표기와 꼬인 위치 판별을 추가했습니다. 교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
