---
id: calc-series-limit-comparison-test
title_ko: "판정 ⑧ 극한 비교 판정법"
title_en: "limit comparison test"
question: "두 양항급수의 일반항의 비의 극한 L이 0과 무한대 사이, 0, 무한대일 때 각각 무엇을 말할 수 있는가?"
tags: [극한 비교 판정법, 양항급수, 급수 판정 순서, limit comparison test]
importance: 3
related: [calc-series-test-order, calc-series-comparison-test, calc-series-integral-p-test, calc-series-alternating-test]
source: "book:BLIS편입 급수 02 무한급수의 수렴과 발산 판정"
verified: false
---

## formula
$$
\begin{aligned}
&L = \lim_{n\to\infty}\frac{a_n}{b_n}, \qquad 0 < L < \infty \\
&\quad \implies \sum a_n,\ \sum b_n \text{ behave alike}
\end{aligned}
$$

## conditions
- 양항급수($a_n \ge 0$, $b_n > 0$)에 쓴다.
- $0 < L < \infty$: 두 급수가 함께 수렴하거나 함께 발산한다.
- $L = 0$: $\sum b_n$이 수렴하면 $\sum a_n$도 수렴한다. 역은 성립하지 않는다.
- $L = \infty$: $\sum a_n$이 수렴하면 $\sum b_n$도 수렴한다. 역은 성립하지 않는다.

## explanation
### 판정 순서에서의 위치
①~⑦을 진행해도 잘 되지 않는 급수에 쓰는 마무리 도구다. → 부호가 번갈아 나오는 급수는 ⑨ 교대급수 판정으로.

### 쉽게 말하면
$n$이 클 때 $a_n \approx L\,b_n$이면 두 급수는 상수배 차이일 뿐이라 운명이 같다. ⑤ 비교 판정처럼 부등식의 방향을 맞출 필요가 없다는 것이 장점이다.

### 대표적으로 쓰는 꼴
- $\sin\dfrac{1}{n^p}$, $\sin^{-1}\dfrac{1}{n^p}$, $\tan\dfrac{1}{n^p}$ 등: $x \to 0$일 때 $\sin x \approx x$이므로 $b_n = \dfrac{1}{n^p}$과 비교한다.
- 로피탈 정리에서 외운 극한의 꼴: $\ln(1 + x) \approx x$, $e^x - 1 \approx x$, $1 - \cos x \approx \dfrac{x^2}{2}$ 등.
- 분수식: 분자와 분모의 최고차항만 남긴 것과 비교한다.

### 한 번 따라 하기
$$
\sum_{n=1}^\infty \sin\frac{1}{n}:\quad
\lim_{n\to\infty}\frac{\sin(1/n)}{1/n} = 1
$$

$0 < L < \infty$이고 $\sum\dfrac{1}{n}$이 발산하므로 발산.

같은 방법으로 $\displaystyle\sum\left(1 - \cos\frac{1}{n}\right)$은 $\dfrac{1}{2n^2}$과 견주어 수렴.

### L = 0, 무한대일 때 외우는 법
$L = 0$은 $a_n$이 $b_n$보다 훨씬 작다는 뜻이다. 큰 쪽($b_n$)이 수렴하면 작은 쪽도 수렴한다. $L = \infty$는 반대로 $a_n$이 훨씬 크므로, 큰 쪽($a_n$)이 수렴하면 작은 쪽($b_n$)도 수렴한다. ⑤ 비교 판정과 같은 논리다.

### 자주 틀리는 포인트
- $L = 0$인데 $\sum b_n$이 발산하면 아무것도 알 수 없다. 비교할 급수를 다시 고른다.
- 비교할 급수 $b_n$은 수렴·발산을 이미 아는 것이어야 한다 (보통 $p$-급수).

## supplement
교재 내용을 옮기고, 근사식 목록과 예, "외우는 법"은 Claude가 추가했습니다.
