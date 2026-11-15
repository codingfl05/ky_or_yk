---
id: calc-mv-double-integral
title_ko: "이중적분과 적분 순서 변경"
title_en: "Double integrals and changing the order"
question: "이중적분의 반복적분 계산과 적분 순서를 바꾸는 방법은?"
tags: [이중적분, 반복적분, 적분 순서 변경, 푸비니, double integral, fubini]
importance: 3
related: [calc-mv-polar-double-integral, calc-mv-triple-integral]
source: "book:BLIS편입 다변수 5-02~5-04 (직교좌표계의 이중적분)"
verified: false
---

## formula
$$
\begin{aligned}
&\int_a^b\int_c^d f(x, y)\,dy\,dx = \int_c^d\int_a^b f(x, y)\,dx\,dy \\
&(R = [a, b]\times[c, d])
\end{aligned}
$$

$$
\begin{aligned}
&\iint_D f(x, y)\,dA = \int_a^b\int_{g_1(x)}^{g_2(x)} f(x, y)\,dy\,dx \\
&\quad {}= \int_c^d\int_{h_1(y)}^{h_2(y)} f(x, y)\,dx\,dy
\end{aligned}
$$

## conditions
- 계산: 안쪽에서 바깥쪽으로. 구간은 바깥쪽으로 갈수록 변수를 줄여 쓴다 (안쪽 구간은 바깥 변수의 함수, 가장 바깥은 상수).
- 직사각형 영역이면 적분 기호의 위치만 바꾸면 된다 (푸비니 정리, Fubini's theorem). 그 밖의 영역은 영역을 그려서 구간을 다시 쓴다.
- $y = x$에 대칭인 영역: $f(a, b) = f(b, a)$이면 한쪽만 구해 2배, $f(b, a) = -f(a, b)$이면 적분값 $0$.

## explanation
적분 순서 변경이 이 단원에서 가장 중요한 유형이다. $e^{x^3}$, $\frac{\sin y}{y}$, $e^{-y^2}$처럼 주어진 순서로 적분하기 어렵거나 불가능하면 순서를 바꾸라는 신호다 (예: $e^{x^3+y}$를 $dx\,dy$로 주면 $dy\,dx$로 바꾼다). 순서를 바꿀 때 구간을 숫자 그대로 옮기는 실수가 가장 흔하다.

대칭 예: $[0,1]^2$에서 $\iint |x - y|\,dA = 2\int_0^1\int_0^x (x - y)\,dy\,dx = \frac{1}{3}$이지만, $\iint (x - y)\,dA = 0$ ($f(b, a) = -f(a, b)$).

## supplement
교재 5-02의 첫 식 $\int_a^b\int_c^d f\,dx\,dy = \int_c^d\int_a^b f\,dy\,dx$는 같은 쪽 그림($x \in [a, b]$, $y \in [c, d]$)과 적분 구간 짝이 반대입니다 (식 자체는 $[c, d]\times[a, b]$에 대한 등식). 그림에 맞게 $\int_a^b\int_c^d f\,dy\,dx = \int_c^d\int_a^b f\,dx\,dy$로 썼습니다. 반대칭($f(b,a) = -f(a,b)$)이면 0이 되는 경우와 $|x - y|$ 예시(교재 예의 값)를 추가했습니다. 순서 변경 신호(원시함수 없는 함수)를 추가했습니다. 교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
