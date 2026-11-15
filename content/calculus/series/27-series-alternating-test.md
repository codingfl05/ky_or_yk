---
id: calc-series-alternating-test
title_ko: "판정 ⑨ 교대급수 판정: 절대 수렴 → 조건부 수렴"
title_en: "alternating series test, absolute and conditional convergence"
question: "교대급수는 어떤 순서로 판정하고, 교대급수 판정법의 두 조건은?"
tags: [교대급수, 교대급수 판정법, 라이프니츠 판정법, 절대 수렴, 조건부 수렴, 급수 판정 순서, alternating series test, Leibniz test, absolute convergence, conditional convergence]
importance: 3
related: [calc-series-test-order, calc-series-divergence-test, calc-series-dirichlet-test, calc-series-limit-comparison-test]
source: "book:BLIS편입 급수 02 무한급수의 수렴과 발산 판정"
verified: false
---

## formula
$$
\sum_{n=0}^\infty \lvert a_n\rvert \text{ converges}
\implies \sum_{n=0}^\infty a_n \text{ converges}
$$

$$
a_n \ge 0, \quad a_n \searrow 0
\implies \sum_{n=0}^\infty (-1)^na_n \text{ converges}
$$

## conditions
- 교대급수(alternating series): $a_n \ge 0$일 때 $\sum(-1)^na_n$처럼 부호가 $+, -, +, -, \dots$로 번갈아 나오는 급수.
- 절대 수렴: 절댓값을 씌운 급수 $\sum\lvert a_n\rvert$가 수렴한다.
- 조건부 수렴: 급수 자체는 수렴하지만 절댓값을 씌운 급수는 발산한다.
- 둘째 식(교대급수 판정법)의 조건: $\lim a_n = 0$이고 $a_n$이 감소수열이다.

## explanation
### 판정 순서에서의 위치
부호가 번갈아 나오는 급수에 쓴다. 이 안에서도 순서가 있다.

1. ⑨-1 절대 수렴인가: 절댓값을 씌워 양항급수로 만든 뒤 ①~⑧ 가운데 맞는 판정법을 쓴다. 수렴하면 절대 수렴이고, 원래 급수도 수렴한다. 끝.
2. ⑨-2 조건부 수렴인가: ⑨-1에서 절댓값 급수가 발산했을 때만 온다. 교대급수 판정법의 두 조건을 확인한다. 만족하면 조건부 수렴.
3. 둘 다 아니면 그제서야 발산이라고 답한다.

### 왜 절대 수렴부터 보나
절댓값을 씌운 급수가 수렴하면 원래 급수는 반드시 수렴한다. 부호가 섞이면 서로 상쇄되어 합이 더 작아질 뿐이기 때문이다. 그러니 절대 수렴이 확인되면 더 볼 것이 없다.

반대는 성립하지 않는다. 절댓값 급수가 발산한다고 해서 교대급수가 발산한다고 답하면 안 된다.

### 한 번 따라 하기
1. $\displaystyle\sum_{n=1}^\infty \frac{(-1)^n}{n^2}$: 절댓값을 씌우면 $\sum\dfrac{1}{n^2}$, $p = 2$로 수렴. 절대 수렴.

2. $\displaystyle\sum_{n=1}^\infty \frac{(-1)^n}{n}$: 절댓값을 씌우면 조화급수라 발산. ⑨-2로 간다. $\dfrac{1}{n}$은 감소하면서 0으로 가므로 수렴. 조건부 수렴.

3. $\displaystyle\sum_{n=1}^\infty \frac{(-1)^n\,n}{2n + 1}$: 일반항이 0으로 가지 않는다. ①에 의해 발산.

### 자주 틀리는 포인트
- 문제가 "절대 수렴 / 조건부 수렴 / 발산" 중에 고르라고 하면 반드시 ⑨-1부터 한다. 교대급수 판정법만 통과시키고 "수렴"이라고만 답하면 구분이 안 된다.
- 감소수열인지는 $n$이 충분히 클 때만 성립하면 된다. $f(x)$로 바꿔 미분해서 확인해도 된다.
- 교대급수 판정법의 조건이 안 맞는다고 바로 발산은 아니다. 발산의 근거는 대개 "일반항이 0으로 가지 않는다"(①)이다.

## supplement
교재 내용을 옮기고, 세 가지 예와 "자주 틀리는 포인트"는 Claude가 추가했습니다. 교재는 "여기까지 판정법을 진행했음에도 발산한다면 그제서야 발산한다고 한다"고 적었는데, 교대급수 판정법의 조건이 안 맞는 것만으로는 발산이 증명되지 않으므로 발산의 근거(일반항이 0으로 가지 않음)를 덧붙였습니다.
