---
id: prob-calc-limit-power-times-exp-gaussian
title_ko: "(1 + t/√n)ⁿ · e^(−√n t)의 극한"
source: "BLIS편입 미적분학 총정리 문제풀이 13번"
difficulty: 2
tags: [극한, 부정형, 매클로린 급수, 로그, 무한대 곱하기 0, limit, indeterminate form, maclaurin series, ln]
related: [calc-maclaurin-ln, calc-diff-indeterminate-forms, calc-diff-limit-e]
images: []
verified: false
---

## problem
$t \in \mathbb{R}$일 때 $\displaystyle\lim_{n\to\infty}\left(1 + \frac{t}{\sqrt{n}}\right)^{n} e^{-\sqrt{n}\,t}$를 구한다.

## answer
$e^{-t^2/2}$

## key-idea
- $\sqrt{n} = v$로 치환 → $\displaystyle\lim_{v\to\infty}\exp\!\left(v^2\ln\!\left(1 + \frac{t}{v}\right) - vt\right)$
- 지수가 $\infty - \infty$ → $\ln(1 + x) = x - \dfrac{x^2}{2} + \dfrac{x^3}{3} - \cdots$를 2차항까지 전개 ($x = \dfrac{t}{v}$)
- $v^2\left(\dfrac{t}{v} - \dfrac{t^2}{2v^2} + \dfrac{t^3}{3v^3} - \cdots\right) - vt = -\dfrac{t^2}{2} + \dfrac{t^3}{3v} - \cdots \to -\dfrac{t^2}{2}$

## mistakes
처음 풀이: $v\left(v\ln\!\left(1 + \frac{t}{v}\right) - t\right)$에서 $\dfrac{\ln(1 + t/v)}{t/v} \to 1$을 괄호 안에만 먼저 대입해 괄호를 $0$으로 만들고, $v\cdot 0 = 0$이라 답을 $e^0 = 1$로 냈다.

틀린 이유: 괄호는 $0$으로 가지만 앞의 $v$는 $\infty$로 간다. $\infty\cdot 0$ 꼴이라 괄호가 "얼마나 빨리" $0$으로 가는지가 답을 정한다. 괄호는 $-\dfrac{t^2}{2v}$처럼 $\dfrac{1}{v}$ 속도로 $0$이 되어 $v$와 곱하면 $-\dfrac{t^2}{2}$가 남는다. 곱해진 식의 일부에만 극한값을 먼저 넣으면 안 된다. 차가 $0$으로 상쇄되는 식은 1차항이 지워지므로 다음 항(2차항)까지 전개해야 한다.

## supplement
정답 풀이와 처음 풀이(답 1) 모두 사용자 필기 그대로입니다. 틀린 이유 설명과 마지막 정리 식은 Claude가 보완했습니다.
