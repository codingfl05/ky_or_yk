---
id: calc-mv-jacobian
title_ko: "야코비안 변수변환"
title_en: "Change of variables (Jacobian)"
question: "중적분의 변수변환 공식과 야코비안 계산, 역변환 야코비안의 관계는?"
tags: [야코비안, 변수변환, 중적분, jacobian, change of variables]
importance: 3
related: [calc-mv-polar-double-integral, calc-mv-spherical]
source: "book:BLIS편입 다변수 7-02~7-05 (변수변환과 중적분)"
verified: false
---

## formula
$$
\begin{aligned}
&\iint_R f(x, y)\,dx\,dy \\
&\quad {}= \iint_S f(x(u, v), y(u, v))\left|\frac{\partial(x, y)}{\partial(u, v)}\right|du\,dv
\end{aligned}
$$

$$
\begin{aligned}
&\iiint_R f\,dx\,dy\,dz \\
&\quad {}= \iiint_G f(x, y, z)\left|\frac{\partial(x, y, z)}{\partial(u, v, w)}\right|du\,dv\,dw \\
&(x, y, z \text{ as functions of } u, v, w)
\end{aligned}
$$

$$
\frac{\partial(x, y)}{\partial(u, v)} = \begin{vmatrix} x_u & x_v \\ y_u & y_v \end{vmatrix}, \qquad \frac{\partial(x, y)}{\partial(u, v)} = \frac{1}{\dfrac{\partial(u, v)}{\partial(x, y)}}
$$

## conditions
- 변환이 일대일이고 야코비안이 $0$이 아닐 때. 절댓값을 붙인다.
- $u$, $v$가 $x$, $y$의 식으로 주어지면 $\frac{\partial(u, v)}{\partial(x, y)}$를 구해 역수를 취하는 것이 빠르다.
- 극좌표 $r$, 원주좌표 $r$, 구면좌표 $\rho^2\sin\phi$도 야코비안이다: 극좌표는 $\begin{vmatrix} \cos\theta & -r\sin\theta \\ \sin\theta & r\cos\theta \end{vmatrix} = r\cos^2\theta + r\sin^2\theta = r$.
- 언제 쓰나: ① 영역이 복잡할 때(타원, 복잡한 삼각형·사각형) 간단한 영역 $D \to D^*$로 ② 피적분함수의 식이 복잡할 때 그 식을 통째로 치환.

## explanation
일변수 치환적분 $\int_0^1 x^2\sqrt{1+x^3}\,dx = \frac{1}{3}\int_1^2\sqrt{t}\,dt$의 보정 상수 $\frac{1}{3}$과 같은 역할이다. 예: $y = x$, $y = 3x$, $xy = 1$, $xy = 9$ ($x, y > 0$)로 둘러싸인 영역은 $u = xy$, $v = \frac{y}{x}$로 두면 $1 \le u \le 9$, $1 \le v \le 3$인 직사각형이 되고, $\frac{\partial(u, v)}{\partial(x, y)} = \frac{2y}{x} = 2v$이므로 $\left|\frac{\partial(x, y)}{\partial(u, v)}\right| = \frac{1}{2v}$. 타원 $\frac{x^2}{a^2} + \frac{y^2}{b^2} \le 1$은 $x = au$, $y = bv$로 넓이 $\pi ab$, 타원체 부피 $\frac{4}{3}\pi abc$.

## supplement
교재 7-02~7-05(필기 포함)로 확인했습니다. 쌍곡선 영역 예시를 필기와 같은 문자(u = xy, v = y/x)로 맞췄고, 삼중적분 형태와 사용 상황 두 가지를 추가했습니다. 역변환 야코비안 공식, 쌍곡선 영역 예시, 타원·타원체 결과를 추가했습니다. 교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
