---
id: calc-diff-lhopital
title_ko: "로피탈 정리"
title_en: "L'Hôpital's rule"
question: "로피탈 정리를 쓸 수 있는 조건과 내용은?"
tags: [로피탈 정리, 부정형, 극한, l'hopital's rule, indeterminate form]
importance: 3
related: [calc-diff-indeterminate-forms, calc-diff-basic-limits, calc-diff-limit-e]
source: "book:BLIS편입 미분 4장 (02 로피탈 정리)"
verified: false
---

## formula
$$
\lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f'(x)}{g'(x)}
$$

## conditions
- $\lim \frac{f}{g}$가 $\frac{0}{0}$ 또는 $\frac{\infty}{\infty}$ 꼴일 때만 쓴다. $x \to \pm\infty$, 한쪽 극한에서도 성립.
- $a$ 근방에서 $f$, $g$가 미분 가능하고 $g'(x) \neq 0$이며, 오른쪽 극한 $\lim \frac{f'}{g'}$이 존재(또는 $\pm\infty$)해야 한다.

## explanation
몫의 미분이 아니라 분자·분모를 따로 미분한다. 다른 부정형은 바꿔서 쓴다: $0 \cdot \infty$는 분수로, $\infty - \infty$는 통분, $1^\infty$, $0^0$, $\infty^0$은 $e^{\ln}$ 꼴로. 로피탈을 반복하면 계산이 길어지므로 기본 극한·테일러 전개와 섞어 쓰는 게 빠르다.

## supplement
교재 조건에는 '오른쪽 극한이 존재해야 한다'와 'g′≠0'이 빠져 있어 추가했습니다. 교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
