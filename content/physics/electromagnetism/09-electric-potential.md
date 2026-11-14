---
id: phys-em-electric-potential
title_ko: "전위 (전기적 퍼텐셜)"
title_en: "Electric potential"
question: "전위의 정의와 전기장과의 관계, 퍼텐셜 에너지는?"
tags: [전위, 전기적 퍼텐셜, 전압, 퍼텐셜 에너지, 등전위면, electric potential, voltage, potential energy]
importance: 3
related: [phys-em-electric-field, phys-em-potential-distributions, phys-em-conductors]
source: "book:BLIS편입 일반물리 14-02~08"
verified: false
---

## formula
$$
\Delta V = V_f - V_i = -\int_i^f \mathbf{E}\cdot d\mathbf{s}
$$

$$
E_x = -\frac{\partial V}{\partial x}\ \left(E=-\frac{dV}{dr}\right)
$$

$$
U = qV, \qquad \Delta K = -\Delta U = -q\,\Delta V
$$

## conditions
- 스칼라, 단위 $\text{V} = \text{J/C}$. 기준점은 보통 무한대에서 $V=0$ (정하기 나름이고, 차이만 의미가 있음).
- 전기력만 작용하면 역학적 에너지 보존 $\Delta K + q\Delta V = 0$.

## explanation
### 쉽게 말하면 (중력 비유)
| 중력 | 전기 |
|---|---|
| 질량 $m$ | 전하 $q$ |
| 중력가속도 $g$ | 전기장 $E$ |
| 높이 $h$ | 거리 $r$ |
| $gh$ | 전위 $V$ |
| $mgh$ | $U = qV$ |

전위는 "전기적인 높이"다. 퍼텐셜 에너지 $U$를 전하량으로 나눠, 만드는 쪽의 영향만 남긴 값이라는 점이 전기장($F$를 $q_0$로 나눔)과 같은 발상이다.

- 양전하는 전위가 높은 곳 → 낮은 곳으로 간다 (물체가 아래로 떨어지듯). 이때 $U$가 줄고 $K$가 는다.
- 음전하는 반대로 낮은 곳 → 높은 곳으로 간다. 중력과 다른 점이라 꼭 체크.
- 전기장은 전위가 가장 빨리 내려가는 방향을 가리킨다 ($E=-\dfrac{dV}{dr}$).
- 등전위면(equipotential surface)은 전기장과 수직이고, 등전위면을 따라 움직이면 전기력이 한 일은 0.
- 균일한 전기장에서 전기장 방향으로 $d$만큼 가면 $\Delta V = -Ed$ (평행판 사이 $V=Ed$).

## story
산에서 물은 높은 곳에서 낮은 곳으로 흐른다. 전위는 그 "높이 지도"다. 전기장 화살표는 지도에서 가장 가파르게 내려가는 방향을 가리키고, 등고선(등전위면)을 따라 걸으면 오르내림이 없으니 에너지도 변하지 않는다.

## example
전자가 연직 아래 방향 $E=100\,\text{N/C}$인 전기장에서 위로 $500\,\text{m}$ 이동 (교재 예제):

$$
\begin{aligned}
&\Delta V = -\int\mathbf{E}\cdot d\mathbf{s} \\
&\quad {}= -(-100)(500) = +5\times10^4\,\text{V}
\end{aligned}
$$

$$
\begin{aligned}
&\Delta U = q\Delta V = (-1.6\times10^{-19})(5\times10^4) \\
&\quad {}= -8\times10^{-15}\,\text{J}
\end{aligned}
$$

전기장을 거슬러 올라가면 전위는 올라가고, 음전하라서 퍼텐셜 에너지는 오히려 줄어든다.

## supplement
교재 내용을 옮기고, 쉬운 설명·스토리는 Claude가 추가했습니다. 예제 풀이는 Claude가 계산했습니다.
