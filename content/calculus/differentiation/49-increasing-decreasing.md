---
id: calc-diff-increasing-decreasing
title_ko: "도함수와 함수의 증가·감소"
title_en: "Increasing and decreasing functions"
question: "증가·순증가 함수의 정의와 도함수 부호의 관계는?"
tags: [증가함수, 감소함수, 순증가, 단조, 도함수 판정, increasing function, monotonic]
importance: 3
related: [calc-diff-critical-extrema, calc-diff-injective-surjective]
source: "book:BLIS편입 미분 5장 (02 도함수의 판정)"
verified: false
---

## formula
$$
\text{increasing:} \quad x_1 < x_2 \Rightarrow f(x_1) \le f(x_2)
$$

$$
\text{strictly increasing:} \quad x_1 < x_2 \Rightarrow f(x_1) < f(x_2)
$$

$$
f' \ge 0 \text{ on } I \iff f \text{ increasing on } I
$$

$$
f' > 0 \text{ on } I \Rightarrow f \text{ strictly increasing on } I
$$

## conditions
- $f$가 구간 $I$에서 미분 가능할 때. 감소도 부등호만 반대.
- 순증가(strictly increasing)의 필요충분조건: $f' \ge 0$이고, $f' = 0$인 점들이 어떤 구간도 채우지 않을 것.
- 상수함수는 (넓은 뜻의) 증가함수이자 감소함수이지만, 순증가·순감소는 아니다.

## explanation
$f' > 0$은 순증가의 충분조건일 뿐 필요조건은 아니다: $y = x^3$은 순증가인데 $f'(0) = 0$. 그래서 "순증가이면 $f' > 0$"은 거짓 명제로 자주 나온다.

## supplement
교재는 '순증가와 증가 모두 f′≥0 조건'이라고 했는데, 상수함수도 f′≥0이지만 순증가가 아니므로 필요충분조건(f′=0인 점이 구간을 채우지 않음)을 따로 적었습니다. 교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
