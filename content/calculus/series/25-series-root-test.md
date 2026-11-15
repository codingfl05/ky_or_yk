---
id: calc-series-root-test
title_ko: "판정 ⑦ 근판정법"
title_en: "root test"
question: "일반항의 n제곱근의 극한 L로 수렴·발산을 어떻게 판정하는가?"
tags: [근판정법, 멱근 판정법, 코시 판정법, 급수 판정 순서, root test, Cauchy root test]
importance: 3
related: [calc-series-test-order, calc-series-ratio-test, calc-series-limit-comparison-test]
source: "book:BLIS편입 급수 02 무한급수의 수렴과 발산 판정"
verified: false
---

## formula
$$
L = \lim_{n\to\infty}\lvert a_n\rvert^{1/n}:\quad
\begin{cases}
L < 1 & \text{converges} \\
L > 1 & \text{diverges} \\
L = 1 & \text{inconclusive}
\end{cases}
$$

## conditions
- 교재는 양항급수($a_n \ge 0$)의 판정법으로 다룬다.
- $L = 1$이면 이 판정법으로는 수렴·발산을 판정할 수 없다.
- 기준은 비판정법과 똑같다.

## explanation
### 판정 순서에서의 위치
⑥ 비판정법과 같은 단계에서, 일반항이 $(\cdots)^n$ 꼴일 때 고른다. → ①~⑦로 잘 안 되면 ⑧ 극한 비교 판정으로.

### 쉽게 말하면
$a_n \approx L^n$이라는 뜻이다. 비판정법과 마찬가지로 공비 $L$인 기하급수에 견주는 것이다. $n$제곱 꼴은 $n$제곱근을 씌우면 지수가 벗겨져 계산이 쉬워진다.

### 한 번 따라 하기
$$
\sum_{n=1}^\infty \left(\frac{2n + 1}{3n + 2}\right)^n:\quad
\lvert a_n\rvert^{1/n} = \frac{2n + 1}{3n + 2} \to \frac{2}{3}
$$

$L = \dfrac{2}{3} < 1$이므로 수렴.

### 알아 두면 좋은 극한
$$
\lim_{n\to\infty} n^{1/n} = 1, \qquad \lim_{n\to\infty} c^{1/n} = 1\ (c > 0)
$$

그래서 $n$이나 상수가 곱해져 있어도 근판정의 결과에는 영향을 주지 않는다.

### 자주 틀리는 포인트
- 밑이 1로 가는 꼴, 예를 들어 $\left(1 + \dfrac{1}{n}\right)^{n^2}$은 $n$제곱근을 씌우면 $\left(1 + \dfrac{1}{n}\right)^n \to e$가 된다. 밑의 극한이 1이라고 $L = 1$로 착각하지 않는다.
- 팩토리얼이 있으면 근판정보다 비판정이 편하다.

## supplement
교재 내용을 옮기고, 예와 $n^{1/n} \to 1$, "자주 틀리는 포인트"는 Claude가 추가했습니다.
