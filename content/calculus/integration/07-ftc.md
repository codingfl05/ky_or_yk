---
id: calc-int-ftc
title_ko: "정적분의 도함수 (미적분의 기본정리·라이프니츠 공식)"
title_en: "Fundamental theorem of calculus and Leibniz rule"
question: "d/dx ∫_{h(x)}^{g(x)} f(t)dt와 적분 안에 x가 있을 때의 미분은?"
tags: [미적분의 기본정리, 정적분의 도함수, 라이프니츠 적분 공식, fundamental theorem of calculus, leibniz integral rule]
importance: 3
related: [calc-int-riemann-sum, calc-diff-lhopital]
source: "book:BLIS편입 적분 2장 (05 정적분의 도함수)"
verified: false
---

## formula
$$
\frac{d}{dx}\int_{h(x)}^{g(x)} f(t)\,dt = f(g(x))\,g'(x) - f(h(x))\,h'(x)
$$

$$
\begin{aligned}
&\frac{d}{dx}\int_{u(x)}^{v(x)} f(x, t)\,dt \\
&\quad {}= f(x, v(x))\,v'(x) - f(x, u(x))\,u'(x) \\
&\quad {}+ \int_{u(x)}^{v(x)} \frac{\partial f}{\partial x}(x, t)\,dt
\end{aligned}
$$

## conditions
- $f$가 연속일 때. 특히 $\dfrac{d}{dx}\int_a^x f(t)\,dt = f(x)$.
- 적분 안에 $x$가 있으면: $(x - t)g(t)$ 꼴은 전개해서 $x$를 밖으로 빼고, $\sin(xt)$ 꼴은 $xt = s$로 치환하거나 두 번째 식(라이프니츠 공식)을 쓴다.

## explanation
정적분이 포함된 극한($\frac{0}{0}$ 꼴)은 이 공식으로 로피탈을 쓰는 문제가 대부분이다. 예: $\lim_{x \to 0} \frac{1}{x}\int_0^x (1 + \sin 2t)\,dt = 1$.

## supplement
교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
