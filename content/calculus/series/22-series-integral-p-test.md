---
id: calc-series-integral-p-test
title_ko: "판정 ④ 적분 판정법과 p-급수"
title_en: "integral test and p-series"
question: "적분 판정법을 쓸 수 있는 함수의 조건 세 가지와, p-급수가 수렴하는 p의 범위는?"
tags: [적분 판정법, p급수, 조화급수, 급수 판정 순서, integral test, p-series, harmonic series]
importance: 3
related: [calc-series-test-order, calc-series-geometric-test, calc-series-comparison-test, calc-series-limit-comparison-test]
source: "book:BLIS편입 급수 02 무한급수의 수렴과 발산 판정"
verified: false
---

## formula
$$
\begin{aligned}
&\int_1^\infty f(x)\,dx \text{ converges} \\
&\quad \iff \sum_{n=1}^\infty a_n \text{ converges}
\qquad (a_n = f(n))
\end{aligned}
$$

$$
\sum_{n=1}^\infty \frac{1}{n^p}:\quad
\begin{cases}
p > 1 & \text{converges} \\
p \le 1 & \text{diverges}
\end{cases}
$$

## conditions
- $f(x)$의 조건 세 가지: 양의 함수, 감소함수, 연속함수.
- 조건은 충분히 큰 $x$부터만 만족하면 된다. 적분의 아래끝도 급수의 시작 번호에 맞춘다.
- 이상적분이 발산하면 급수도 발산한다 (수렴·발산이 함께 간다).
- 적분값과 급수의 합이 같다는 뜻은 아니다.

## explanation
### 판정 순서에서의 위치
①~③(발산판정, 디리클레, 기하급수)이 해당하지 않을 때. → 여기서도 안 되면 ⑤ 비교 판정으로.

$p$-급수의 결과는 뒤의 ⑤와 ⑧에서 비교 대상으로 계속 쓰인다. 그래서 그 앞에 외워 둔다.

### 언제 쓰나
조건이 까다로워서 생각보다 제한적으로 쓴다. 주로
- $p$-급수의 판정을 증명할 때
- 다음 세 꼴

$$
\frac{1}{n(\ln n)^p}, \qquad \frac{1}{n^p\ln n}, \qquad \frac{1}{(\ln n)^p}
$$

꼭 이 꼴이 아니어도 함수 조건 세 가지를 만족하면 언제든 쓸 수 있다.

### 한 번 따라 하기
$$
\sum_{n=2}^\infty \frac{1}{n(\ln n)^2}
$$

$f(x) = \dfrac{1}{x(\ln x)^2}$는 $x \ge 2$에서 양수, 감소, 연속이다. $u = \ln x$로 치환하면

$$
\int_2^\infty \frac{dx}{x(\ln x)^2} = \int_{\ln 2}^\infty \frac{du}{u^2} = \frac{1}{\ln 2}
$$

적분이 수렴하므로 급수도 수렴.

같은 치환으로 $\displaystyle\sum\frac{1}{n(\ln n)^p}$는 $p > 1$일 때만 수렴한다. $p$-급수와 같은 기준이다.

### 자주 틀리는 포인트
- $p = 1$(조화급수)은 발산이다. 경계가 발산 쪽에 들어간다.
- 감소함수가 아닌데 적분 판정을 쓰면 안 된다 ($\sin$이 섞인 함수 등).
- $\dfrac{1}{(\ln n)^p}$은 어떤 $p$에서도 발산한다. $\ln n$은 $n$의 어떤 거듭제곱보다도 느리게 커지기 때문이다.

## supplement
교재 내용을 옮기고, 예와 $\frac{1}{n(\ln n)^p}$의 수렴 기준, "자주 틀리는 포인트"는 Claude가 추가했습니다. 교재에는 적분의 아래끝이 0으로 적혀 있는데, $\frac{1}{x^p}$ 같은 함수는 0에서 정의되지 않으므로 급수의 시작 번호에 맞춰 1로 적었습니다.
