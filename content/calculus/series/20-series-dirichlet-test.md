---
id: calc-series-dirichlet-test
title_ko: "판정 ② 디리클레 판정법"
title_en: "Dirichlet's test"
question: "두 수열의 곱으로 된 급수가 수렴한다고 말할 수 있는 디리클레 판정의 두 조건은?"
tags: [디리클레 판정법, 유계 부분합, 급수 판정 순서, Dirichlet test, bounded partial sums]
importance: 2
related: [calc-series-test-order, calc-series-divergence-test, calc-series-geometric-test, calc-series-alternating-test]
source: "book:BLIS편입 급수 02 무한급수의 수렴과 발산 판정"
verified: false
---

## formula
$$
\left\lvert\sum_{n=0}^{N} a_n\right\rvert \le M, \qquad b_n \searrow 0
\implies \sum_{n=0}^\infty a_nb_n \text{ converges}
$$

## conditions
- 첫째 조건: $a_n$의 부분합이 모든 $N$에 대해 유계다 (어떤 상수 $M$을 넘지 않는다).
- 둘째 조건: $b_n$이 단조 감소하면서 0으로 수렴한다 ($b_n \searrow 0$).
- 둘 중 하나라도 안 맞으면 발산이라는 뜻이 아니다. 이 판정법으로는 모르는 것이고, 다른 판정법으로 간다.

## explanation
### 판정 순서에서의 위치
① 발산판정법에서 결론이 안 났을 때. → 꼴이 안 맞거나 조건이 안 맞으면 ③ 기하급수 판정으로.

### 쉽게 말하면
한쪽은 더해도 일정 범위 안에서만 왔다 갔다 하고(유계), 다른 쪽은 점점 작아져 0으로 가면, 곱한 것의 합은 수렴한다.

부분합이 유계인 대표적인 수열:
- $(-1)^n$: 부분합이 $1, 0, 1, 0, \dots$
- $\sin n$, $\cos n$: 부분합이 유계라는 것이 알려져 있다.

### 한 번 따라 하기
$$
\sum_{n=1}^\infty \frac{\sin n}{n}
$$

- $a_n = \sin n$: 부분합이 유계.
- $b_n = \dfrac{1}{n}$: 감소하면서 0으로.

두 조건을 모두 만족하므로 수렴.

### 자주 틀리는 포인트
- 유계여야 하는 것은 $a_n$ 자체가 아니라 $a_n$의 부분합이다. $a_n = 1$은 유계지만 부분합은 무한히 커진다.
- $a_n = (-1)^n$으로 두면 교대급수 판정(⑨-2)이 이 판정법의 특수한 경우임을 알 수 있다.

## supplement
교재 내용을 옮기고, 판정 순서에서의 위치와 예는 Claude가 추가했습니다. 교재에는 둘째 조건이 $\lim b_n = 0$으로만 적혀 있는데, 디리클레 판정에는 $b_n$이 단조 감소한다는 조건도 필요해서 함께 적었습니다. 교재의 첫째 조건은 무한합에 절댓값을 씌운 꼴로 적혀 있지만 뜻은 부분합이 유계라는 것입니다.
