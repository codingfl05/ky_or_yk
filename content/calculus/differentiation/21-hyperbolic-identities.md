---
id: calc-diff-hyperbolic-identities
title_ko: "쌍곡선함수 항등식과 덧셈정리"
title_en: "Hyperbolic identities and addition formulas"
question: "쌍곡선함수의 기본 항등식과 덧셈정리는?"
tags: [쌍곡선함수, 항등식, 덧셈정리, hyperbolic identity, addition formula]
importance: 3
related: [calc-diff-hyperbolic-def, calc-diff-trig-identities]
source: "book:BLIS편입 미분 1장 (06 쌍곡선함수)"
verified: false
---

## formula
$$
\cosh^2 x - \sinh^2 x = 1
$$

$$
1 - \tanh^2 x = \operatorname{sech}^2 x
$$

$$
\coth^2 x - 1 = \operatorname{csch}^2 x
$$

$$
\sinh(x \pm y) = \sinh x \cosh y \pm \cosh x \sinh y
$$

$$
\cosh(x \pm y) = \cosh x \cosh y \pm \sinh x \sinh y
$$

$$
\tanh(x \pm y) = \frac{\tanh x \pm \tanh y}{1 \pm \tanh x \tanh y}
$$

## conditions
- 복부호 동순. 삼각함수와 달리 $\cosh$ 덧셈정리는 부호가 같고($\pm$), 기본 항등식은 빼기다.

## explanation
삼각함수 공식에서 $\sin^2$이 들어간 곳의 부호를 바꾸면 쌍곡선 공식이 된다(Osborn 규칙). 첫 항등식은 정의에 대입하면 바로 확인된다.

## supplement
교재 sinh 덧셈정리가 'sinh x cosh x ± cosh x sinh y'로 오타가 있어 'sinh x cosh y'로 바로잡았습니다. tanh 덧셈정리(교재에서 추출 안 됨)와 Osborn 규칙을 추가했습니다. 교재의 공식·정의를 옮기고, 조건·설명은 Claude가 추가했습니다.
