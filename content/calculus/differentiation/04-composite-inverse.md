---
id: calc-diff-composite-inverse
title_ko: "합성함수와 역함수의 성질"
title_en: "Properties of composite and inverse functions"
question: "합성함수의 역함수는 어떤 순서로 쓰는가? 역함수의 기본 성질은?"
tags: [합성함수, 역함수, composite function, inverse function]
importance: 3
related: [calc-diff-injective-surjective, calc-diff-inverse-trig-composition]
source: "book:BLIS편입 미분 1장 (02 합성함수와 역함수)"
verified: false
---

## formula
$$
(f^{-1})^{-1} = f
$$

$$
f^{-1}(f(x)) = x
$$

$$
f(f^{-1}(x)) = x
$$

$$
(f \circ g)^{-1} = g^{-1} \circ f^{-1}
$$

$$
(f \circ g \circ h)^{-1} = h^{-1} \circ g^{-1} \circ f^{-1}
$$

## conditions
- 역함수(inverse function)는 $f$가 일대일 대응일 때만 존재한다. $f$의 정의역과 치역이 $f^{-1}$에서는 서로 바뀐다.
- 합성함수(composite function)는 일반적으로 교환법칙이 성립하지 않는다: $f \circ g \neq g \circ f$.

## explanation
합성의 역함수는 순서가 뒤집힌다 (양말 신고 신발 신기 → 신발 벗고 양말 벗기). $y = f(x)$와 $y = f^{-1}(x)$의 그래프는 $y = x$에 대칭이다. $f$가 증가함수이면 두 그래프의 교점은 $y = x$ 위에 있지만, 감소함수이면 아닐 수 있고(예: $f(x) = -x^3$은 $(1, -1)$에서도 만남), 교점이 아예 없을 수도 있다.

## supplement
교재에 '본함수와 역함수의 교점은 y=x 위에 존재'라고 되어 있는데, 이는 증가함수일 때만 맞습니다. 감소함수의 반례(f(x)=−x³)를 추가했습니다. 교재의 공식·정의를 옮기고, 조건·설명은 Claude가 추가했습니다.
