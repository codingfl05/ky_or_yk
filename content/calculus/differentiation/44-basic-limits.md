---
id: calc-diff-basic-limits
title_ko: "암기할 기본 극한"
title_en: "Standard limits to memorize"
question: "x→0일 때 sin x/x, (1−cos x)/x², (eˣ−1)/x, ln(1+x)/x 등의 극한값은?"
tags: [기본 극한, 극한, standard limits, limit]
importance: 3
related: [calc-diff-lhopital, calc-maclaurin-sin, calc-maclaurin-cos]
source: "book:BLIS편입 미분 4장 (02 로피탈 정리)"
verified: false
---

## formula
$$
\lim_{x \to 0} \frac{\sin x}{x} = \lim_{x \to 0} \frac{\tan x}{x} = \lim_{x \to 0} \frac{\sin^{-1}x}{x} = \lim_{x \to 0} \frac{\tan^{-1}x}{x} = 1
$$

$$
\lim_{x \to 0} \frac{1 - \cos x}{x^2} = \frac{1}{2}
$$

$$
\lim_{x \to 0} \frac{e^x - 1}{x} = 1, \qquad \lim_{x \to 0} \frac{a^x - 1}{x} = \ln a
$$

$$
\lim_{x \to 0} \frac{\ln(1+x)}{x} = 1, \qquad \lim_{x \to 0} \frac{\log_a(1+x)}{x} = \frac{1}{\ln a}
$$

## conditions
- 모두 $x \to 0$. $x$ 자리에 $0$으로 가는 다른 식이 와도 같다 (예: $\lim_{x \to 1} \frac{\sin(x-1)}{x-1} = 1$).

## explanation
모두 Maclaurin 급수의 첫 항에서 바로 보인다 ($\sin x \approx x$, $1 - \cos x \approx \frac{x^2}{2}$, $e^x - 1 \approx x$, $\ln(1+x) \approx x$). 로피탈을 쓰지 않고 이 값으로 바꿔 계산하면 훨씬 빠르다.

## supplement
교재의 암기 극한 목록은 텍스트가 깨져 일부만 읽혀서, 표준 목록으로 채웠습니다. 교재 목록과 같은지 확인해 주세요. 교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
