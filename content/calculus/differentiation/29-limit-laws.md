---
id: calc-diff-limit-laws
title_ko: "극한의 성질"
title_en: "Limit laws"
question: "두 극한이 수렴할 때 합·곱·몫의 극한은?"
tags: [극한의 성질, 극한 법칙, limit laws]
importance: 2
related: [calc-diff-limit-one-sided]
source: "book:BLIS편입 미분 2장 (01 함수의 극한)"
verified: false
---

## formula
$$
\lim (f \pm g) = L \pm M, \qquad \lim (fg) = LM, \qquad \lim \frac{f}{g} = \frac{L}{M} \quad (M \neq 0)
$$

## conditions
- $\lim_{x \to a} f(x) = L$, $\lim_{x \to a} g(x) = M$이 둘 다 수렴할 때만 쓸 수 있다. 수열 $a_n$, $b_n$의 극한도 같다.

## explanation
수렴한다고 주어진 극한 식으로 구하려는 극한 식을 만들어 내는 문제에 쓴다. 각각이 발산하는데 합이나 곱이 수렴할 수도 있으니, 수렴이 보장된 식 단위로 쪼개야 한다. 분수 꼴의 극한이 수렴하고 분모 $\to 0$이면 분자도 $\to 0$이어야 한다.

## supplement
'분모→0이면 분자→0' 조건을 추가했습니다. 교재의 공식·정의를 옮기고, 조건·설명은 Claude가 추가했습니다.
