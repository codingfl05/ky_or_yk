---
id: calc-series-comparison-test
title_ko: "판정 ⑤ 비교 판정법과 차수 비교"
title_en: "comparison test and order of growth"
question: "양항급수의 비교 판정은 어느 쪽이 수렴(발산)할 때 무엇을 말해 주고, 비교할 급수는 어떻게 고르는가?"
tags: [비교 판정법, 차수 비교, 증가 속도, 양항급수, 급수 판정 순서, comparison test, order of growth]
importance: 3
related: [calc-series-test-order, calc-series-integral-p-test, calc-series-ratio-test, calc-series-limit-comparison-test]
source: "book:BLIS편입 급수 02 무한급수의 수렴과 발산 판정"
verified: false
---

## formula
$$
0 \le a_n \le b_n
$$

$$
\sum b_n \text{ converges} \implies \sum a_n \text{ converges}
$$

$$
\sum a_n \text{ diverges} \implies \sum b_n \text{ diverges}
$$

## conditions
- 양항급수($a_n \ge 0$)에만 쓴다.
- 부등식은 충분히 큰 $n$부터만 성립하면 된다.
- 큰 쪽이 수렴하면 작은 쪽도 수렴, 작은 쪽이 발산하면 큰 쪽도 발산. 반대 방향으로는 아무것도 알 수 없다.

## explanation
### 판정 순서에서의 위치
① 발산판정, ② 디리클레, ③ 기하급수가 모두 먹히지 않는 양항급수에서 떠올린다. 비교 대상으로는 ④의 $p$-급수와 ③의 기하급수를 쓴다. → 비교할 급수를 잡기 어려우면 ⑥ 비판정법으로.

이상적분의 비교 판정과 논리가 완전히 같다.

### 비교할 급수 고르기: 차수 비교
어려운 점은 비교할 급수를 잡는 것이다. $n$이 클 때 어느 함수가 더 큰지의 순서를 기준으로 삼는다 (왼쪽이 작고 오른쪽이 크다).

$$
\begin{aligned}
&a^x\ (0 < a < 1) < \sin x,\ \cos x < \ln x \\
&\quad {}< x^n < a^x\ (a > 1) < x! < x^x < (2x)!
\end{aligned}
$$

분자와 분모에서 가장 빨리 커지는 항만 남기면 비교할 급수가 보인다.

### 한 번 따라 하기
1. 수렴을 보일 때는 더 큰 수렴 급수를 찾는다.

$$
\frac{\ln n}{n^3} < \frac{n}{n^3} = \frac{1}{n^2}
$$

$\sum\dfrac{1}{n^2}$이 수렴하므로 수렴.

2. 발산을 보일 때는 더 작은 발산 급수를 찾는다.

$$
\frac{1}{\sqrt{n} - 1} > \frac{1}{\sqrt{n}}
$$

$\sum\dfrac{1}{\sqrt{n}}$이 발산($p = \frac{1}{2}$)하므로 발산.

### 자주 틀리는 포인트
- 방향을 거꾸로 쓰는 실수가 가장 많다. "수렴하는 급수보다 크다"나 "발산하는 급수보다 작다"에서는 아무 결론도 나오지 않는다.
- 부등식의 방향이 원하는 쪽으로 안 잡히면 억지로 맞추지 말고 ⑧ 극한 비교 판정을 쓴다.
- $\sin x$, $\cos x$는 크기가 1 이하라는 뜻으로 순서에 들어 있다.

## supplement
교재 내용을 옮기고, 판정 순서에서의 위치와 예 두 개는 Claude가 추가했습니다.
