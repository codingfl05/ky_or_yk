---
id: calc-diff-limit-one-sided
title_ko: "극한의 존재 조건 (좌극한·우극한)"
title_en: "Existence of a limit (one-sided limits)"
question: "x→a에서 극한이 존재할 조건은?"
tags: [극한, 좌극한, 우극한, one-sided limit, limit]
importance: 3
related: [calc-diff-continuity, calc-diff-floor-function]
source: "book:BLIS편입 미분 2장 (01 함수의 극한)"
verified: false
---

## formula
$$
\lim_{x \to a} f(x) = L \iff \lim_{x \to a^-} f(x) = \lim_{x \to a^+} f(x) = L
$$

## conditions
- 좌극한(left-hand limit) $x \to a^-$, 우극한(right-hand limit) $x \to a^+$.
- 무한대로의 극한 $\lim_{x \to \pm\infty} f(x) = L$: $x$가 한없이 커지거나 작아질 때 $f(x)$가 $L$에 한없이 가까워짐.

## explanation
단순 대입으로 끝나지 않는 네 경우는 반드시 좌·우극한을 따로 구한다: 분모 $\to 0$인데 분자 $\not\to 0$, 절댓값, 구간별로 정의된 함수, 가우스 함수. 예: $\lim_{x \to 0} \dfrac{|x|}{x}$는 좌극한 $-1$, 우극한 $1$이라 존재하지 않는다.

## supplement
교재의 공식·정의를 옮기고, 조건·설명은 Claude가 추가했습니다.
