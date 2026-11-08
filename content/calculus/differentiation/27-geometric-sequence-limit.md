---
id: calc-diff-geometric-sequence-limit
title_ko: "무한 등비수열의 수렴 조건"
title_en: "Convergence of geometric sequences"
question: "rⁿ (n→∞)이 수렴하는 r의 범위와 극한값은?"
tags: [등비수열, 무한 등비수열, 공비, 수렴, geometric sequence]
importance: 3
related: [calc-maclaurin-geometric]
source: "book:BLIS편입 미분 2장 (01 함수의 극한)"
verified: false
---

## formula
$$
\lim_{n \to \infty} r^n = \begin{cases} 0 & (-1 < r < 1) \\ 1 & (r = 1) \\ \text{diverges} & (r \le -1 \text{ or } r > 1) \end{cases}
$$

## conditions
- 수렴 조건: $-1 < r \le 1$. $r = -1$은 진동해서 발산.

## explanation
$x^n$, $x^{2n}$이 들어간 극한으로 함수를 정의하는 문제는 $|x| < 1$, $x = \pm 1$, $|x| > 1$로 나눠 계산한다. $|x| > 1$이면 분모·분자를 가장 큰 거듭제곱으로 나눈다.

## supplement
x에 대한 구간 나누기 풀이법을 추가했습니다. 교재의 공식·정의를 옮기고, 조건·설명은 Claude가 추가했습니다.
