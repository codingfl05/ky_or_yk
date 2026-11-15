---
id: calc-series-geometric-test
title_ko: "판정 ③ 기하급수 판정"
title_en: "geometric series test"
question: "기하급수는 공비가 어떤 범위일 때 수렴하고, 그 합은 얼마인가?"
tags: [기하급수, 등비급수, 공비, 급수 판정 순서, geometric series, common ratio]
importance: 3
related: [calc-series-test-order, calc-series-dirichlet-test, calc-series-integral-p-test, calc-maclaurin-geometric]
source: "book:BLIS편입 급수 02 무한급수의 수렴과 발산 판정"
verified: false
---

## formula
$$
\sum_{n=0}^\infty a_1r^n:\quad
\begin{cases}
\lvert r\rvert < 1 & \text{converges} \\
\lvert r\rvert \ge 1 & \text{diverges}
\end{cases}
$$

$$
\sum_{n=0}^\infty a_1r^n = \frac{a_1}{1 - r}
\qquad (\lvert r\rvert < 1)
$$

## conditions
- $a_1 \ne 0$: 첫 항, $r$: 공비.
- 합의 공식은 (첫 항) ÷ (1 − 공비)다. 시작 번호가 0이 아니면 실제 첫 항을 넣는다.

## explanation
### 판정 순서에서의 위치
① 발산판정법, ② 디리클레 판정을 확인한 다음. → 기하급수 꼴이 아니면 ④ 적분 판정·$p$-급수로.

여기까지가 "꼴만 보고 바로 결론을 내는" 단계다. 우선 ①이 되는지 보고, 그다음 ②와 ③이 되는지 본다.

### 쉽게 말하면
앞 항에 같은 수를 계속 곱해 가는 급수다. 곱하는 수의 크기가 1보다 작으면 항이 빠르게 줄어 합이 유한하다.

### 한 번 따라 하기
$$
\sum_{n=0}^\infty \frac{2^n}{3^{n+1}} = \sum_{n=0}^\infty \frac{1}{3}\left(\frac{2}{3}\right)^n
$$

공비 $\dfrac{2}{3}$의 크기가 1보다 작으므로 수렴. 합은 $\dfrac{1/3}{1 - 2/3} = 1$.

### 자주 틀리는 포인트
- $r = 1$, $r = -1$도 발산이다. $r = -1$이면 항이 $a_1, -a_1, a_1, \dots$로 0에 가지 않는다 (①).
- 지수가 $2n$, $n + 1$처럼 되어 있으면 $r^n$ 꼴로 고쳐서 공비를 읽는다. $4^{-n}\cdot 3^{2n}$의 공비는 $\dfrac{9}{4}$다.

## supplement
교재 내용을 옮기고, 합의 공식과 예는 Claude가 추가했습니다. 교재에는 "반대로 $r < -1$이면 발산"이라고만 적혀 있는데, 발산하는 범위는 $\lvert r\rvert \ge 1$ 전체($r \ge 1$, $r \le -1$)라서 그렇게 적었습니다.
