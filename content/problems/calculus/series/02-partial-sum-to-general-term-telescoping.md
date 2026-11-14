---
id: prob-calc-partial-sum-to-general-term-telescoping
title_ko: "Σ(k+1)a_k = (n+2)/(n+3)일 때 Σa_n 구하기"
source: "BLIS편입 미적분학 총정리 문제풀이 21번"
difficulty: 2
tags: [부분합, 일반항, 부분분수, 망원급수, partial sum, general term, partial fractions, telescoping series]
related: [calc-telescoping-partial-fractions]
images: []
verified: false
---

## problem
모든 자연수 $n$에 대해 $\displaystyle\sum_{k=1}^{n}(k+1)a_k = \frac{n+2}{n+3}$일 때 $\displaystyle\sum_{n=1}^{\infty}a_n$을 구한다.

## answer
$\dfrac{5}{12}$

## key-idea
- $b_k = (k+1)a_k$, $S_n = \dfrac{n+2}{n+3} = 1 - \dfrac{1}{n+3}$로 보면 $b_1 = S_1 = \dfrac{3}{4}$ → $a_1 = \dfrac{3}{8}$
- $n \ge 2$: $b_n = S_n - S_{n-1} = \dfrac{1}{n+2} - \dfrac{1}{n+3} = \dfrac{1}{(n+2)(n+3)}$ → $a_n = \dfrac{1}{(n+1)(n+2)(n+3)}$
- 부분분수 $\dfrac{1}{ABC} = \dfrac{1}{C - A}\left(\dfrac{1}{AB} - \dfrac{1}{BC}\right)$로 망원급수: $\dfrac{3}{8} + \dfrac{1}{2}\cdot\dfrac{1}{3\cdot 4} = \dfrac{3}{8} + \dfrac{1}{24} = \dfrac{5}{12}$

## solution
$$
\sum_{n=2}^{\infty}\frac{1}{(n+1)(n+2)(n+3)} = \frac{1}{2}\sum_{n=2}^{\infty}\left(\frac{1}{(n+1)(n+2)} - \frac{1}{(n+2)(n+3)}\right)
$$

$$
= \frac{1}{2}\left[\left(\frac{1}{3\cdot4} - \frac{1}{4\cdot5}\right) + \left(\frac{1}{4\cdot5} - \frac{1}{5\cdot6}\right) + \cdots\right] = \frac{1}{2}\cdot\frac{1}{12} = \frac{1}{24}
$$

가운데 항이 모두 지워지고 첫 항 $\dfrac{1}{3\cdot 4}$만 남는다 ($n = 2$부터 시작하므로 $\dfrac{1}{2\cdot 3}$이 아니다). 여기에 $a_1 = \dfrac{3}{8}$을 따로 더한다.

## mistakes
- $a_n = \dfrac{1}{(n+1)(n+2)(n+3)}$을 $n = 1$에도 써서 $a_1 = \dfrac{1}{24}$로 두고 $n = 1$부터 더했다. 이 식은 $S_n - S_{n-1}$에서 나왔으므로 $n \ge 2$에서만 맞다. $a_1$은 $S_1$에서 $2a_1 = \dfrac{3}{4}$, $a_1 = \dfrac{3}{8}$.
- 부분분수 계수 $\dfrac{1}{C - A} = \dfrac{1}{2}$을 빠뜨리지 않는다.

## supplement
풀이와 정답은 사용자 필기 그대로입니다. 필기에서 (x) 표시한 두 곳($n = 1$부터 일반항으로 더한 식, $a_1 = \frac{1}{24}$)을 mistakes로 옮겼습니다. 부분분수 정리는 공식 카드 "부분분수로 푸는 망원급수"에 따로 만들었습니다.
