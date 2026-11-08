---
id: calc-diff-squeeze-theorem
title_ko: "조임정리 (샌드위치 정리)"
title_en: "Squeeze theorem"
question: "조임정리의 내용과 0×(유계) 꼴 극한의 값은?"
tags: [조임정리, 샌드위치 정리, 유계, squeeze theorem, sandwich theorem]
importance: 3
related: [calc-diff-floor-function]
source: "book:BLIS편입 미분 2장 (01 함수의 극한)"
verified: false
---

## formula
$$
f(x) \le g(x) \le h(x), \quad \lim_{x \to a} f(x) = \lim_{x \to a} h(x) = L \;\Longrightarrow\; \lim_{x \to a} g(x) = L
$$

## conditions
- 부등식은 $x = a$ 근방에서만 성립하면 된다 ($x = a$ 자체는 제외 가능).

## explanation
$0 \times$ (유계·진동) 꼴은 조임정리로 항상 $0$이 된다. 예: $\lim_{x \to 0} x\sin\dfrac{1}{x} = 0$ ($-|x| \le x\sin\frac{1}{x} \le |x|$). 반면 $\lim_{x \to 0} \sin\dfrac{1}{x}$ 자체는 진동해서 존재하지 않는다.

## supplement
부등식으로 묶는 예와 반대 사례를 추가했습니다. 교재의 공식·정의를 옮기고, 조건·설명은 Claude가 추가했습니다.
