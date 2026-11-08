---
id: calc-diff-floor-function
title_ko: "가우스 함수(최대정수함수)"
title_en: "Floor function"
question: "가우스 함수 [x]의 정의와 극한에서 쓰는 부등식은?"
tags: [가우스 함수, 최대정수함수, 바닥함수, floor function, greatest integer function]
importance: 2
related: [calc-diff-limit-one-sided, calc-diff-continuity]
source: "book:BLIS편입 미분 2장 (01 함수의 극한)"
verified: false
---

## formula
$$
[x] = x - k \quad (0 \le k < 1), \qquad x - 1 < [x] \le x
$$

## conditions
- $[x]$는 $x$를 넘지 않는 최대의 정수 (정수 부분).
- 모든 정수에서 불연속 (우극한 = 함숫값, 좌극한은 1 작음).

## explanation
극한 풀이는 두 가지다. 가우스 안쪽이 유한한 값으로 가면 좌·우극한을 따로 대입하고, 무한대로 가면 $[x] = x - k$로 바꾸거나 부등식 $x - 1 < [x] \le x$에 조임정리를 쓴다. 예: $\lim_{x \to \infty} \dfrac{[x]}{x} = 1$.

## supplement
부등식 x−1<[x]≤x와 조임정리 활용 예를 추가했습니다. 교재의 공식·정의를 옮기고, 조건·설명은 Claude가 추가했습니다.
