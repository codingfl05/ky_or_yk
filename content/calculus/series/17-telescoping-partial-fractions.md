---
id: calc-telescoping-partial-fractions
title_ko: "부분분수로 푸는 망원급수와 합에서 일반항 구하기"
title_en: "Telescoping series by partial fractions"
question: "곱 꼴 분모의 급수를 부분분수로 나눠 망원급수로 합하는 방법과, 부분합에서 일반항을 구하는 방법은?"
tags: [부분분수, 망원급수, 연쇄 소거, 급수의 합, 부분합, 일반항, partial fractions, telescoping series, partial sum]
importance: 3
related: [calc-int-partial-fractions]
source: manual
verified: false
---

## formula
$$
\frac{1}{AB} = \frac{1}{B - A}\left(\frac{1}{A} - \frac{1}{B}\right)
$$

$$
\frac{1}{ABC} = \frac{1}{C - A}\left(\frac{1}{AB} - \frac{1}{BC}\right)
$$

$$
\sum_{n=m}^{\infty}\bigl(f(n) - f(n+1)\bigr) = f(m) - \lim_{n\to\infty} f(n)
$$

$$
\sum_{k=1}^{n} b_k = S_n \ \Rightarrow\ b_1 = S_1
$$

$$
b_n = S_n - S_{n-1}\ (n \ge 2)
$$

## conditions
- $A$, $B$, $C$는 같은 간격으로 늘어선 일차식 (예: $n+1$, $n+2$, $n+3$). 계수 $\dfrac{1}{C - A}$는 "맨 뒤 − 맨 앞"이다.
- 망원급수 공식은 $\lim f(n)$이 존재할 때 (보통 0).
- $b_n = S_n - S_{n-1}$은 $n \ge 2$에서만 성립한다. $n = 1$은 $b_1 = S_1$로 따로 구한다.

## explanation
### 쪼개는 규칙: 맨 앞과 맨 뒤를 하나씩 뺀다
분모가 연속된 인수의 곱이면, "맨 뒤 인수를 뺀 곱"과 "맨 앞 인수를 뺀 곱"의 차로 쓰고 (맨 뒤 − 맨 앞)으로 나눈다.

- $\dfrac{1}{n(n+1)} = \dfrac{1}{n} - \dfrac{1}{n+1}$
- $\dfrac{1}{n(n+2)} = \dfrac{1}{2}\left(\dfrac{1}{n} - \dfrac{1}{n+2}\right)$
- $\dfrac{1}{(2n-1)(2n+1)} = \dfrac{1}{2}\left(\dfrac{1}{2n-1} - \dfrac{1}{2n+1}\right)$
- $\dfrac{1}{n(n+1)(n+2)} = \dfrac{1}{2}\left(\dfrac{1}{n(n+1)} - \dfrac{1}{(n+1)(n+2)}\right)$
- $\dfrac{1}{(n+1)(n+2)(n+3)} = \dfrac{1}{2}\left(\dfrac{1}{(n+1)(n+2)} - \dfrac{1}{(n+2)(n+3)}\right)$

검산은 통분 한 번이면 된다: $\dfrac{1}{AB} - \dfrac{1}{BC} = \dfrac{C - A}{ABC}$. 그래서 앞에 $\dfrac{1}{C - A}$를 곱해 맞춘다.

### 왜 이렇게 쪼개는가: 앞뒤가 지워지게
쪼갠 두 항이 "같은 함수 $f$의 $n$번째와 $n+1$번째"가 되도록 쪼갠다. 예를 들어 $f(n) = \dfrac{1}{(n+1)(n+2)}$이면 $\dfrac{1}{(n+2)(n+3)} = f(n+1)$이다. 그러면 더할 때 $f(2) - f(3) + f(3) - f(4) + \cdots$처럼 가운데가 연쇄적으로 지워지고 첫 항과 마지막 항만 남는다. 마지막 항은 $n \to \infty$에서 0이다.

### 자주 틀리는 포인트
- 앞의 계수 $\dfrac{1}{C - A}$를 빠뜨린다. 세 인수면 $\dfrac{1}{1}$이 아니라 간격의 두 배($\dfrac{1}{2}$)다.
- 간격이 2 이상인 두 항 차($\dfrac{1}{n} - \dfrac{1}{n+2}$)는 바로 이웃끼리 지워지지 않는다. 앞에서 두 개($\dfrac{1}{1} + \dfrac{1}{2}$)가 남는다.
- 시작 번호를 놓친다. $n = 2$부터 더하면 남는 첫 항은 $f(1)$이 아니라 $f(2)$다.
- 부분합에서 일반항을 구할 때 $S_n - S_{n-1}$ 식을 $n = 1$에도 쓴다. $a_1$은 $S_1$로 따로 구하고, 일반항 식에 $n = 1$을 넣은 값과 다르면 급수를 $a_1 + \sum_{n=2}^{\infty}$로 나눠 더한다.

## example
$\displaystyle\sum_{n=1}^{\infty}\frac{1}{n(n+1)(n+2)} = \frac{1}{2}\sum_{n=1}^{\infty}\left(\frac{1}{n(n+1)} - \frac{1}{(n+1)(n+2)}\right) = \frac{1}{2}\cdot\frac{1}{1\cdot 2} = \frac{1}{4}$

$\displaystyle\sum_{n=1}^{\infty}\frac{1}{n(n+2)} = \frac{1}{2}\left(1 + \frac{1}{2}\right) = \frac{3}{4}$ (간격이 2라 앞의 두 항이 남는다)

## supplement
사용자 요청(미적분학 총정리 21번 문제의 부분분수)으로 Claude가 새로 작성한 카드입니다.
