---
id: calc-diff-limit-e
title_ko: "e의 정의와 1^∞ 꼴 극한"
title_en: "Definition of e and limits of the form 1^∞"
question: "e의 극한 정의와 1^∞ 꼴 극한을 빠르게 구하는 공식은?"
tags: [자연상수, e, 1의 무한대, 극한, euler's number, limit]
importance: 3
related: [calc-diff-lhopital, calc-diff-indeterminate-forms]
source: "book:BLIS편입 미분 4장 (02 로피탈 정리)"
verified: false
---

## formula
$$
\lim_{n \to \infty}\left(1 + \frac{1}{n}\right)^n = \lim_{x \to 0}(1 + x)^{\frac{1}{x}} = e
$$

$$
\begin{aligned}
&\lim f(x)^{g(x)} = e^{\lim g(x)\{f(x) - 1\}} \\
&(f \to 1,\ g \to \infty)
\end{aligned}
$$

## conditions
- 두 번째 식은 $1^\infty$ 꼴일 때만. 다른 지수 꼴($0^0$, $\infty^0$)은 $e^{g \ln f}$로 바꿔 로피탈.

## explanation
$1^\infty$ 꼴은 로그를 취해 로피탈을 쓰는 대신 지수 $g(f - 1)$의 극한만 구하면 된다. 예: $\lim_{x \to 0}(1 - 2x)^{\frac{1}{x}} = e^{\lim \frac{1}{x}(-2x)} = e^{-2}$.

## supplement
1^∞ 꼴 단축 공식 e^{lim g(f−1)}과 예시를 추가했습니다. 교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
