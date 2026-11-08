---
id: calc-diff-derivative-def
title_ko: "미분계수와 도함수의 정의"
title_en: "Definition of the derivative"
question: "x=a에서의 미분계수와 도함수의 극한 정의는?"
tags: [미분계수, 도함수, 순간변화율, 평균변화율, derivative, rate of change]
importance: 3
related: [calc-diff-basic-derivative-rules]
source: "book:BLIS편입 미분 3장 (01 미분계수의 정의)"
verified: false
---

## formula
$$
f'(a) = \lim_{h \to 0} \frac{f(a+h) - f(a)}{h} = \lim_{x \to a} \frac{f(x) - f(a)}{x - a}
$$

$$
f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}
$$

## conditions
- 평균변화율(average rate of change): $\dfrac{\Delta y}{\Delta x} = \dfrac{f(x_2) - f(x_1)}{x_2 - x_1}$ (두 점을 잇는 할선의 기울기).
- 미분계수(순간변화율) = $x = a$에서 접선의 기울기. 표기: $f'(a)$, $y'\big|_{x=a}$, $\dfrac{dy}{dx}\Big|_{x=a}$.
- 극한이 존재할 때만 미분 가능. 좌·우 미분계수가 같아야 한다.

## explanation
교재가 미분 단원에서 가장 중요하다고 강조하는 부분이다. $\lim_{h \to 0} \dfrac{f(a + 2h) - f(a - h)}{h} = 3f'(a)$처럼 정의 꼴을 변형해 미분계수로 바꾸는 문제가 자주 나온다: $h$ 앞의 계수를 맞춰 정의 꼴로 만든다.

## supplement
좌·우 미분계수 조건과 정의 꼴 변형 예를 추가했습니다. 교재의 공식을 옮기고, 조건·설명은 Claude가 추가했습니다.
