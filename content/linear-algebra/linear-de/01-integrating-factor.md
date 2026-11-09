---
id: la-de-integrating-factor
title_ko: "적분인자 방법 (1계 선형)"
title_en: "Integrating factor"
question: "y′ + p(t)y = g(t)의 적분인자와 해법은?"
tags: [적분인자, 1계 선형 미분방정식, integrating factor, first-order linear]
importance: 3
related: []
source: "notion:선대 04. 선형 미분방정식 (16~17강)"
verified: false
---

## formula
$$
y' + p(t)y = g(t) \qquad\Longrightarrow\qquad \mu(t) = \exp\left(\int p(t)\,dt\right)
$$

$$
\frac{d}{dt}\big(\mu(t)y\big) = \mu(t)g(t) \quad\Longrightarrow\quad \mu(t)y = \int \mu(t)g(t)\,dt + C
$$

## explanation
좌변을 곱의 미분법 형태 $\frac{d}{dt}(\mu y)$로 만들어주는 곱셈 인자를 찾는 방법. $\mu$가 만족해야 할 조건 $\mu'=p\mu$에서 $\mu=e^{\int p\,dt}$가 나온다.

### 문제풀이 포인트
- 방정식을 반드시 **표준형 $y'+p(t)y=g(t)$**($y'$의 계수가 1)로 먼저 정리한 뒤 $p(t)$를 대입 — 계수를 안 나누고 바로 적분인자를 구하는 실수가 흔함.
- 초깃값이 있는 문제는 일반해를 완전히 구한 뒤 마지막에 대입.

## supplement
노션 정리 문서를 거의 그대로 옮겼습니다 (표현만 카드 형식에 맞춤).
