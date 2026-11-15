---
id: calc-mv-second-derivative-test
title_ko: "이변수 극값 판정 (Hessian 판정)"
title_en: "Second derivative test (Hessian)"
question: "임계점에서 Hessian D로 극대·극소·안장점을 판정하는 법은?"
tags: [극값, 헤시안, 안장점, 이계도함수 판정, second derivative test, hessian, saddle point]
importance: 3
related: [calc-mv-lagrange, calc-mv-taylor-linearization]
source: "book:BLIS편입 다변수 4장 (02 다변수 함수의 최대/최소)"
verified: false
---

## formula
$$
D = f_{xx}f_{yy} - f_{xy}^2 = \begin{vmatrix} f_{xx} & f_{xy} \\ f_{xy} & f_{yy} \end{vmatrix}
$$

$$
\begin{aligned}
&D > 0,\ f_{xx} > 0 \Rightarrow \text{local min}; \\
&D > 0,\ f_{xx} < 0 \Rightarrow \text{local max}; \\
&D < 0 \Rightarrow \text{saddle}
\end{aligned}
$$

## conditions
- 임계점: $f_x = f_y = 0$ (또는 편도함수가 존재하지 않는 점).
- $D = 0$이면 판정 불가: 근처 값과 직접 비교.
- $D > 0$이면 $f_{xx}$와 $f_{yy}$의 부호가 같아서 어느 쪽으로 판단해도 된다.
- 제약 조건이 없으면 극대·극소가 곧 최대·최소인 문제가 대부분이다. 이차식이면 완전제곱이 더 빠르다.

## explanation
예: $f = x^2 + ky^2 - 2xy$에서 원점이 극소가 되려면 $D = 4k - 4 > 0$, 즉 $k > 1$. 안장점은 한 방향으로는 극대, 다른 방향으로는 극소인 점이다.

## supplement
교재 판정은 맞습니다. D>0일 때 f_xx, f_yy 부호가 같다는 이유와 예시를 추가했습니다. 교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
