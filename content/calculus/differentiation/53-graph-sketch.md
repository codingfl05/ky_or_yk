---
id: calc-diff-graph-sketch
title_ko: "그래프 개형 그리기와 실근의 개수"
title_en: "Curve sketching and number of real roots"
question: "그래프 개형을 그리는 5단계와 실근 개수 문제의 접근법은?"
tags: [그래프 개형, 실근의 개수, curve sketching, number of roots]
importance: 2
related: [calc-diff-critical-extrema, calc-diff-even-odd]
source: "book:BLIS편입 미분 5장 (02 그래프 개형) / 6장 (01 실근의 개수)"
verified: false
---

## formula
$$
\begin{aligned}
&\text{domain} \to \text{symmetry} \to \text{critical points} \\
&\quad {}\to \text{sign of } f' \to \lim_{x \to \pm\infty},\ \lim_{x \to a}
\end{aligned}
$$

## conditions
- Step 1 정의역, Step 2 대칭성(우함수·기함수), Step 3 임계점, Step 4 임계점 주변 $f'$ 부호로 극대·극소, Step 5 $x \to \pm\infty$와 정의되지 않는 점 근처의 극한.
- 실근의 개수: 미지 상수가 있으면 상수와 $x$의 식을 분리해 $k = g(x)$로 놓고 수평선 $y = k$와 $y = g(x)$의 교점을 센다. 없으면 $f(x) = 0$ 꼴로 그래프를 그린다.

## explanation
교재는 편입에 나오는 그래프의 대부분을 이 5단계로 그릴 수 있다고 한다. 자주 나오는 개형($xe^{-x}$, $x^2e^{-x}$, $e^{-x^2}$, $\frac{\ln x}{x}$ 등)은 외워 두는 것이 좋다.

## supplement
교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
