---
id: calc-diff-higher-derivative-limit
title_ko: "극한으로 나타낸 2계·3계 도함수"
title_en: "Higher derivatives as limits"
question: "f''(x)와 f'''(x)를 h에 대한 극한으로 나타내면?"
tags: [고계도함수, 이계도함수, 극한, 파스칼 삼각형, higher derivative, finite difference]
importance: 2
related: [calc-diff-derivative-def, calc-diff-lhopital]
source: "book:BLIS편입 미분 4장 (02 로피탈 정리와 도함수)"
verified: false
---

## formula
$$
f''(x) = \lim_{h \to 0} \frac{f(x + 2h) - 2f(x + h) + f(x)}{h^2}
$$

$$
\begin{aligned}
&f'''(x) = \lim_{h \to 0} \frac{N}{h^3}, \\
&N = f(x + 3h) - 3f(x + 2h) \\
&\qquad {}+ 3f(x + h) - f(x)
\end{aligned}
$$

## conditions
- $f$가 충분히 여러 번 미분 가능할 때. 로피탈 정리를 반복 적용해 확인할 수 있다.
- 계수는 파스칼 삼각형에 부호를 번갈아 붙인 것 ($1, -2, 1$ / $1, -3, 3, -1$).

## explanation
중심 차분 꼴도 자주 나온다: $\lim_{h \to 0} \dfrac{f(x+h) - 2f(x) + f(x-h)}{h^2} = f''(x)$. 분자의 $h$ 계수 합과 분모 차수를 맞춰 보면 몇 계 도함수인지 알 수 있다.

## supplement
중심 차분 꼴을 추가했습니다. 교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
