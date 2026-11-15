---
id: phys-qm-well-2d-3d
title_ko: "2차원·3차원 무한 퍼텐셜 우물"
title_en: "infinite potential well in two and three dimensions"
question: "직사각형 또는 직육면체 무한 우물에 갇힌 입자의 에너지 준위는?"
tags: [2차원 우물, 3차원 우물, 축퇴, 겹침, 양자수, two-dimensional well, three-dimensional well, degeneracy]
importance: 2
related: [phys-qm-infinite-well, phys-qm-wave-function, phys-atom-quantum-numbers]
source: "book:BLIS편입 일반물리 22-36"
verified: false
---

## formula
$$
E_{n_x n_y} = \frac{h^2}{8m}\left(\frac{n_x^2}{L_x^2} + \frac{n_y^2}{L_y^2}\right)
$$

$$
E_{n_x n_y n_z} = \frac{h^2}{8m}\left(\frac{n_x^2}{L_x^2} + \frac{n_y^2}{L_y^2} + \frac{n_z^2}{L_z^2}\right)
$$

## conditions
- 우물 안($0 < x < L_x$, $0 < y < L_y$, $0 < z < L_z$)에서만 $U = 0$, 밖은 무한대.
- $n_x$, $n_y$, $n_z$는 각각 1 이상의 정수. 축마다 양자수가 따로 있다.
- 2차원 파동함수는 각 축 파동함수의 곱이다.

$$
\begin{aligned}
&\psi_{n_x n_y}(x, y) = \psi_{n_x}(x)\,\psi_{n_y}(y) \\
&\quad {}= \sqrt{\frac{2}{L_x}}\sin\frac{n_x\pi x}{L_x} \cdot \sqrt{\frac{2}{L_y}}\sin\frac{n_y\pi y}{L_y}
\end{aligned}
$$

## explanation
### 먼저 떠올릴 것
- 1차원 무한 우물: $\psi_n = \sqrt{2/L}\sin(n\pi x/L)$, $E_n = n^2h^2/8mL^2$.
- 서로 수직인 방향의 운동은 독립이다 (포물선 운동을 가로·세로로 나눈 것처럼).

### 쉽게 말하면
- 각 축을 1차원 우물로 따로 풀고, 에너지는 더하고 파동함수와 확률은 곱한다.
- 영역 안에서 발견될 확률도 축별 확률의 곱이다.

$$
P = P_x\,P_y\,P_z, \qquad P_x = \int_{x_1}^{x_2} \lvert\psi_{n_x}(x)\rvert^2\,dx
$$

### 한 번 따라 하기: 정사각형 우물
$L_x = L_y = L$이면 $E = E_1(n_x^2 + n_y^2)$, 여기서 $E_1 = h^2/8mL^2$.

| $(n_x, n_y)$ | 에너지 |
|---|---|
| $(1, 1)$ | $2E_1$ |
| $(1, 2)$, $(2, 1)$ | $5E_1$ |
| $(2, 2)$ | $8E_1$ |
| $(1, 3)$, $(3, 1)$ | $10E_1$ |

$(1, 2)$와 $(2, 1)$처럼 서로 다른 상태가 같은 에너지를 가지는 것을 겹침(축퇴, degeneracy)이라 한다.

### 자주 틀리는 포인트
- 바닥 상태는 $(1, 1)$ 또는 $(1, 1, 1)$이다. 양자수에 0은 없다.
- 정육면체의 바닥 상태 에너지는 $3E_1$이다 ($E_1$이 아님).
- 변의 길이가 다르면 겹침이 풀린다. $n$을 각자의 $L$로 나눈 뒤 제곱해서 더한다.
- 에너지 순서를 물으면 $n_x^2 + n_y^2$의 값을 작은 것부터 나열해 본다. 양자수의 합이 아니라 제곱의 합이다.

## supplement
교재 내용을 옮기고, 정사각형 우물의 준위 표와 겹침(축퇴) 설명은 Claude가 추가했습니다. 교재 22-36의 2차원 파동함수 식은 분모가 $L$로만 적혀 있는데, 각 축의 길이 $L_x$, $L_y$로 바로잡아 썼습니다.
