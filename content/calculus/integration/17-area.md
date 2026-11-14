---
id: calc-int-area
title_ko: "정적분과 넓이 (매개변수 곡선 포함)"
title_en: "Area between curves"
question: "두 곡선 사이의 넓이와 매개변수 곡선의 넓이 공식은?"
tags: [넓이, 정적분, 매개변수 곡선, 사이클로이드, area between curves, parametric curve]
importance: 3
related: [calc-int-arc-length, calc-int-polar-area]
source: "book:BLIS편입 적분 4장 (01 정적분과 넓이)"
verified: false
---

## formula
$$
A = \int_a^b |f(x) - g(x)|\,dx
$$

$$
A = \int_c^d |f(y) - g(y)|\,dy
$$

$$
\begin{aligned}
&x = f(t),\ y = g(t): \\
&A = \int y\,dx = \int_{\alpha}^{\beta} g(t)\,f'(t)\,dt
\end{aligned}
$$

## conditions
- 그래프 개형을 먼저 그려 위·아래(또는 오른쪽·왼쪽) 함수와 교점을 확인.
- 매개변수 꼴: $x$가 $a \to b$로 증가하는 방향에 맞춰 $t$의 순서($\alpha \to \beta$)를 정해야 한다.

## explanation
예: 사이클로이드 $x = r(\theta - \sin\theta)$, $y = r(1 - \cos\theta)$ ($0 \le \theta \le 2\pi$) 한 아치와 $x$축 사이의 넓이는 $3\pi r^2$. 폐곡선의 넓이는 벡터미적분(그린 정리)의 공식이 편하다.

## supplement
사이클로이드 넓이 값을 추가했습니다. 교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
