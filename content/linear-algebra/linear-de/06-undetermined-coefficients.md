---
id: la-de-undetermined-coefficients
title_ko: "미정계수법 (비동차)"
title_en: "Method of undetermined coefficients"
question: "미정계수법에서 g(t) 형태별 특정해 Y(t)의 예상 형태와 t^s를 곱하는 규칙은?"
tags: [미정계수법, 비동차, 특정해, undetermined coefficients, particular solution]
importance: 3
related: [la-de-constant-coefficient]
source: "notion:선대 04. 선형 미분방정식 (16~17강)"
verified: false
---

## formula
$$
y = y_h + Y(t)
$$

## conditions
| $g(t)$의 형태 | 예상하는 $Y(t)$의 형태 |
| --- | --- |
| 다항식 $P_n(t)$ | $t^s(A_0t^n+\cdots+A_n)$ |
| $P_n(t)e^{at}$ | $t^s(A_0t^n+\cdots+A_n)e^{at}$ |
| $P_n(t)e^{at}\cos(bt)$ 또는 $\sin(bt)$ | $t^s\big[(\cdots)e^{at}\cos(bt)+(\cdots)e^{at}\sin(bt)\big]$ |

- $y_h$: 동차방정식의 일반해, $Y$: 특정해.
- $s$: 예상한 형태가 동차방정식의 FSS와 겹칠 때 곱하는 최소 승수 (한 번 겹치면 $t^1$, 중근이라 두 번 겹치면 $t^2$).

## explanation
### 문제풀이 포인트 — 최다 실수 지점
- **원칙 1**: 예상 특정해가 FSS와 겹치면 안 된다 — 겹치면 대입 시 항등적으로 0이 되어 계수를 못 구함. 겹치면 $t$를 곱해서 회피.
- **원칙 2**: "최대한 안전하게" 예상 — $g(t)$가 $\sin$만 있어도 $Y=A\sin+B\cos$로 둘 다 포함.
- $g(t)$가 여러 항의 합이면 **항 단위로 쪼개서 각각 구한 뒤 더한다** (선형성).
- 초기조건은 **반드시 비동차방정식의 일반해를 완성한 뒤에** 대입.

## supplement
노션 정리 문서를 거의 그대로 옮겼습니다 (표현만 카드 형식에 맞춤).
