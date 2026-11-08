---
id: calc-diff-continuity
title_ko: "함수의 연속"
title_en: "Continuity"
question: "x=a에서 f가 연속일 세 가지 조건과 합성함수의 연속은?"
tags: [연속, 불연속, 합성함수, continuity, continuous function]
importance: 3
related: [calc-diff-limit-one-sided, calc-diff-intermediate-value]
source: "book:BLIS편입 미분 2장 (02 함수의 연속성)"
verified: false
---

## formula
$$
\lim_{x \to a} f(x) = f(a)
$$

$$
\lim_{x \to a} g(f(x)) = g\!\left(\lim_{x \to a} f(x)\right) \quad (g\text{ continuous at } \lim_{x \to a} f(x))
$$

## conditions
- 세 조건: ① $\lim_{x \to a} f(x)$ 존재 ② $f(a)$ 정의 ③ 둘이 같다. 하나라도 어기면 불연속.
- 합성: 바깥 함수 $g$가 그 점에서 연속이면 극한을 안으로 넣을 수 있다. $g$가 불연속이면 $f(x)$가 $f(a)$로 위에서($t \to f(a)^+$) 오는지 아래에서($t \to f(a)^-$) 오는지 따져 $g$의 한쪽 극한을 쓴다. $f$가 $a$ 근방에서 상수이면 $g(f(x)) = g(f(a))$.

## explanation
미지 상수를 정하는 문제는 경계점에서 좌극한 = 우극한 = 함숫값을 세운다. 합성함수 $g(f(x))$의 연속성은 그래프 문제(보기 ㄱ, ㄴ, ㄷ)로 자주 나온다.

## supplement
g가 연속일 때 극한을 안으로 넣는 일반 정리를 추가했습니다. 교재의 공식·정의를 옮기고, 조건·설명은 Claude가 추가했습니다.
