---
id: calc-series-test-order
title_ko: "무한급수 수렴·발산 판정 순서 (전체 흐름)"
title_en: "order of convergence tests for infinite series"
question: "무한급수의 수렴·발산을 판정할 때 어떤 판정법을 어떤 순서로 시도하는가?"
tags: [급수 판정 순서, 수렴 판정, 발산 판정, 판정법 흐름, 무한급수, convergence tests, series test strategy, infinite series]
importance: 3
related: [calc-series-divergence-test, calc-series-dirichlet-test, calc-series-geometric-test, calc-series-integral-p-test, calc-series-comparison-test, calc-series-ratio-test, calc-series-root-test, calc-series-limit-comparison-test, calc-series-alternating-test]
source: "book:BLIS편입 급수 02 무한급수의 수렴과 발산 판정"
verified: false
---

## formula
$$
\text{①} \to \text{②} \to \text{③} \to \text{④} \to \text{⑤} \to \text{⑥} \to \text{⑦} \to \text{⑧}
$$

$$
(-1)^n a_n:\quad \text{⑨-1} \to \text{⑨-2}
$$

## conditions
- 번호는 시도하는 순서다. 앞 단계에서 결론이 나면 거기서 끝내고, 안 나면 다음 단계로 간다.
- ⑤~⑧은 양항급수($a_n \ge 0$)에 쓰는 판정법이다.
- 교대급수는 절댓값을 씌워 ①~⑧로 절대 수렴부터 보고(⑨-1), 안 되면 교대급수 판정(⑨-2)으로 간다.

## explanation
### 순서표
| 순서 | 판정법 | 이럴 때 쓴다 |
|---|---|---|
| ① | 발산판정법 | 항상 맨 먼저. $a_n \not\to 0$이면 바로 발산 |
| ② | 디리클레 판정 | $\sum a_nb_n$ 꼴, 한쪽 부분합이 유계 ($\sin n$, $\cos n$, $(-1)^n$) |
| ③ | 기하급수 판정 | $a_1r^n$ 꼴 |
| ④ | 적분 판정, $p$-급수 | $\dfrac{1}{n^p}$, $\dfrac{1}{n(\ln n)^p}$ 꼴 |
| ⑤ | 비교 판정 (차수 비교) | ①~③이 안 먹히는 양항급수 |
| ⑥ | 비판정법 | 팩토리얼, 서로 다른 차수의 함수가 곱해진 꼴 |
| ⑦ | 근판정법 | $(\cdots)^n$ 꼴 |
| ⑧ | 극한 비교 판정 | ①~⑦이 잘 안 될 때. $\sin\dfrac{1}{n^p}$ 등 |
| ⑨ | 교대급수 판정 | $(-1)^na_n$ 꼴. 절대 수렴 → 조건부 수렴 순서 |

### 왜 이 순서인가
- ①은 계산이 가장 싸고, 걸리면 한 줄로 끝난다. 그래서 어떤 판정법보다 먼저 본다.
- ②, ③은 "꼴"만 맞으면 바로 결론이 난다.
- ④의 $p$-급수는 ⑤와 ⑧에서 비교 대상으로 계속 쓰이므로 그 앞에 둔다.
- ⑤~⑦은 양항급수에서 꼴에 따라 고른다. 비교할 급수가 잘 안 보이면 ⑥, ⑦을 먼저 떠올린다.
- ⑧은 앞의 것이 모두 잘 안 될 때 쓰는 마무리 도구다.
- ⑨는 부호가 번갈아 나올 때만 해당하고, 그 안에서도 순서가 있다 (절대 수렴 먼저).

### 한 번 따라 하기
$\displaystyle\sum_{n=1}^\infty \frac{n}{n^3 + 1}$

1. ①: $a_n \to 0$. 발산이라고 못 한다. 다음.
2. ②, ③: 곱의 꼴도, 기하급수 꼴도 아니다. 다음.
3. ④, ⑤: $n$이 크면 $\dfrac{n}{n^3 + 1} < \dfrac{n}{n^3} = \dfrac{1}{n^2}$. $p = 2 > 1$인 $p$-급수가 수렴하므로 비교 판정으로 수렴.

### 자주 틀리는 포인트
- ①을 통과했다고($a_n \to 0$) 수렴하는 것이 아니다. 다음 단계로 갈 뿐이다.
- 어떤 판정법의 조건이 안 맞는 것은 "발산"이 아니라 "이 판정법으로는 모른다"이다.
- 교대급수에 절댓값을 씌운 급수가 발산해도 원래 급수는 수렴할 수 있다. ⑨-2까지 가야 한다.

## supplement
교재의 유형 1~9를 순서표 한 장으로 묶고, "왜 이 순서인가"와 예는 Claude가 추가했습니다. 각 판정법의 내용은 뒤따르는 ①~⑨ 카드에 있습니다.
