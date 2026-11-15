---
id: calc-series-ratio-test
title_ko: "판정 ⑥ 비판정법"
title_en: "ratio test"
question: "이웃한 두 항의 비의 극한 L로 수렴·발산을 어떻게 판정하고, L = 1이면 어떻게 하는가?"
tags: [비판정법, 비율 판정법, 달랑베르 판정법, 팩토리얼, 급수 판정 순서, ratio test, d'Alembert test, factorial]
importance: 3
related: [calc-series-test-order, calc-series-comparison-test, calc-series-root-test, calc-series-divergence-test]
source: "book:BLIS편입 급수 02 무한급수의 수렴과 발산 판정"
verified: false
---

## formula
$$
L = \lim_{n\to\infty}\left\lvert\frac{a_{n+1}}{a_n}\right\rvert:\quad
\begin{cases}
L < 1 & \text{converges} \\
L > 1 & \text{diverges} \\
L = 1 & \text{inconclusive}
\end{cases}
$$

## conditions
- 교재는 양항급수($a_n \ge 0$)의 판정법으로 다룬다. 절댓값을 씌워 쓰면 $L < 1$일 때 절대 수렴까지 말해 준다.
- $L = \infty$도 발산이다.
- $L = 1$이면 이 판정법으로는 수렴·발산을 판정할 수 없다.

## explanation
### 판정 순서에서의 위치
⑤ 비교 판정을 쓰기 어려울 때. 특히 팩토리얼($!$)이 있거나, 서로 다른 차수의 두 함수가 곱해져 비교할 급수를 잡기 어려운 경우. → 일반항이 $(\cdots)^n$ 꼴이면 ⑦ 근판정법이 더 편하다.

### 쉽게 말하면
$n$이 클 때 다음 항이 앞 항의 약 $L$배라는 뜻이다. 곧 공비가 $L$인 기하급수처럼 행동한다. 기하급수의 기준($\lvert r\rvert < 1$이면 수렴)이 그대로 옮겨 온 것이다.

### 한 번 따라 하기
$$
\sum_{n=1}^\infty \frac{2^n}{n!}:\quad
\frac{a_{n+1}}{a_n} = \frac{2^{n+1}}{(n+1)!}\cdot\frac{n!}{2^n} = \frac{2}{n + 1} \to 0
$$

$L = 0 < 1$이므로 수렴.

### L = 1일 때
- $a_n$이 양항의 증가 수열이면 ($\left\lvert\dfrac{a_{n+1}}{a_n}\right\rvert > 1$이 계속 성립하면) $a_n \not\to 0$이므로 ①에 의해 발산이다. 극한이 1이더라도 비 자체가 1보다 큰지 확인한다.
- 그 밖의 경우는 다른 판정법(⑧ 극한 비교 등)을 써야 한다.

### 자주 틀리는 포인트
- $p$-급수 $\sum\dfrac{1}{n^p}$에 비판정법을 쓰면 항상 $L = 1$이 나온다. 거듭제곱 꼴에는 통하지 않는다.
- $\dfrac{(n+1)!}{n!} = n + 1$, $\dfrac{(2n+2)!}{(2n)!} = (2n+2)(2n+1)$. 팩토리얼의 약분에서 실수가 잦다.
- $\left(\dfrac{n+1}{n}\right)^n \to e$가 자주 나온다.

## supplement
교재 내용을 옮기고, 기하급수에 빗댄 설명과 예, "자주 틀리는 포인트"는 Claude가 추가했습니다.
