---
id: calc-diff-epsilon-delta
title_ko: "극한의 엄밀한 정의 (ε-δ)"
title_en: "Epsilon-delta definition of a limit"
question: "lim f(x) = L의 ε-δ 정의는?"
tags: [엡실론 델타, 극한의 정의, epsilon delta, limit definition]
importance: 2
related: [calc-diff-limit-one-sided]
source: "book:BLIS편입 미분 2장 (01 함수의 극한)"
verified: false
---

## formula
$$
\begin{aligned}
&\forall \varepsilon > 0,\ \exists \delta > 0: \\
&0 < |x - a| < \delta \;\Longrightarrow\; |f(x) - L| < \varepsilon
\end{aligned}
$$

## conditions
- $\varepsilon$이 먼저 주어지고, 그에 맞는 $\delta$를 찾는다 ($\delta$는 $\varepsilon$에 따라 정해짐).
- $0 < |x - a|$: $x = a$에서의 함숫값은 상관없다.

## explanation
연고대 외에는 잘 안 나온다. 문제는 대부분 주어진 $\varepsilon$에 대해 조건을 만족하는 $\delta$(의 최댓값)를 찾는 것이다. 예: $\lim_{x \to 3}(4x - 5) = 7$이면 $|4x - 12| < \varepsilon \iff |x - 3| < \frac{\varepsilon}{4}$이므로 $\delta = \frac{\varepsilon}{4}$.

## supplement
교재 설명은 'x와 a 사이가 작아질수록 간격이 좁아진다'는 순서였는데, 정의상 ε이 먼저 주어지고 δ를 찾는 것이라 그 순서로 썼습니다. 예시를 추가했습니다. 교재의 공식·정의를 옮기고, 조건·설명은 Claude가 추가했습니다.
