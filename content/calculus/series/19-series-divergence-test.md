---
id: calc-series-divergence-test
title_ko: "판정 ① 발산판정법 (일반항 판정)"
title_en: "divergence test (nth-term test)"
question: "일반항의 극한이 0이 아니면 급수는 어떻게 되는가? 그 역은 성립하는가?"
tags: [발산판정법, 일반항 판정, 급수 판정 순서, divergence test, nth term test]
importance: 3
related: [calc-series-test-order, calc-series-dirichlet-test, calc-series-alternating-test]
source: "book:BLIS편입 급수 02 무한급수의 수렴과 발산 판정"
verified: false
---

## formula
$$
\lim_{n\to\infty} a_n \ne 0
\implies \sum_{n=0}^\infty a_n \text{ diverges}
$$

## conditions
- 극한이 존재하지 않는 경우도 "0이 아님"에 포함된다.
- 역은 성립하지 않는다. $a_n \to 0$이어도 급수는 발산할 수 있다.
- 이상적분에는 적용하면 안 된다.

## explanation
### 판정 순서에서의 위치
맨 처음. 어떤 판정법보다 먼저 본다. → 결론이 안 나면 ② 디리클레 판정으로.

### 어디서 나온 것인가
"$\sum a_n$이 수렴하면 $\lim a_n = 0$"이라는 명제의 대우다. 원래 명제가 참이므로 대우도 참이다.

더해 가는 값이 0으로 줄어들지 않으면 합이 한 값에 머물 수 없다는 뜻이다.

### 한 번 따라 하기
$$
\sum_{n=1}^\infty \frac{n}{2n + 1}:\quad \lim_{n\to\infty}\frac{n}{2n + 1} = \frac{1}{2} \ne 0
$$

바로 발산. 다른 판정법을 볼 필요가 없다.

### 자주 틀리는 포인트
- $a_n \to 0$이면 수렴이라고 쓰면 틀린다. 조화급수 $\sum\dfrac{1}{n}$은 $a_n \to 0$인데 발산한다.
- 이상적분에서는 피적분함수가 0으로 가지 않아도 수렴할 수 있다. 그래서 적분에는 쓰지 않는다.
- 비판정법에서 $L = 1$이 나왔을 때도 여기로 돌아온다. 양항이 계속 커지면 $a_n \not\to 0$이라 발산이다.

## supplement
교재 내용을 옮기고, 판정 순서에서의 위치와 예는 Claude가 추가했습니다.
