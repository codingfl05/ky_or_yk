---
id: prob-calc-diff-strict-inequality-limit
title_ko: "f(x) > 1이면 극한도 1보다 큰가 (참·거짓)"
source: "BLIS편입 미적분학 총정리 문제풀이 24번 (나)"
difficulty: 1
tags: [극한, 부등식, 극한의 대소 관계, 반례, 참거짓, limit, inequality, counterexample]
related: [calc-diff-limit-laws, calc-diff-squeeze-theorem]
images: []
verified: false
---

## problem
보기 (나): 모든 $x \in \mathbb{R}$에 대해 $f(x) > 1$이고 $\displaystyle\lim_{x\to 0} f(x)$가 유한한 값으로 존재하면 $\displaystyle\lim_{x\to 0} f(x) > 1$이다. (참·거짓)

## answer
거짓 ($\displaystyle\lim_{x\to 0} f(x) \ge 1$까지만 보장된다)

## key-idea
- 극한을 취하면 부등호는 유지되지만 등호가 붙는다: $f(x) > 1 \Rightarrow \lim f(x) \ge 1$
- 반례: $f(x) = 1 + x^2$ ($x \ne 0$), $f(0) = 2$ → 모든 $x$에서 $f(x) > 1$인데 $\displaystyle\lim_{x\to 0} f(x) = 1$
- 수열도 같다: $a_n = 1 + \dfrac{1}{n} > 1$이지만 $\lim a_n = 1$

## mistakes
- "모든 값이 1보다 크니까 극한도 1보다 크다"고 판단하기 쉽다. 값들이 1에 한없이 가까워지면서 1보다 크기만 하면 극한은 정확히 1이 될 수 있다. 극한은 $x = 0$에서의 값이 아니라 근처 값들이 다가가는 곳이라, $f(0)$이 얼마든 상관없다.
- 반례를 $f(x) = 1 + x^2$로만 들면 $f(0) = 1$이라 조건 "모든 $x$에서 $f(x) > 1$"을 어긴다. $x = 0$에서만 값을 따로 바꿔 준다.

## supplement
사용자가 24번 중 (나)만 올려 달라고 해서 이 보기만 카드로 만들었습니다. 필기의 판단(거짓)은 그대로이고, 반례와 설명은 Claude가 작성했습니다.
