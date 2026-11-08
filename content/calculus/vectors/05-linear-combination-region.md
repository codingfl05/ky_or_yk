---
id: calc-vec-linear-combination-region
title_ko: "벡터의 일차결합이 나타내는 도형"
title_en: "Regions described by linear combinations"
question: "c = ra + sb에서 r, s 조건에 따라 c의 종점이 그리는 도형은?"
tags: [일차결합, 자취, 벡터 방정식, linear combination, locus]
importance: 1
related: [calc-vec-line-equation]
source: "book:BLIS편입 다변수 1장 (03 벡터와 자취의 방정식)"
verified: false
---

## formula
$$
\mathbf{c} = r\mathbf{a} + s\mathbf{b}
$$

$$
r + s = 1 \to \text{line}, \qquad r, s \ge 0,\ r + s \le 1 \to \text{triangle}, \qquad 0 \le r, s \le 1 \to \text{parallelogram}
$$

## conditions
- 시점은 원점 $O$, $\mathbf{a} = \overrightarrow{OA}$, $\mathbf{b} = \overrightarrow{OB}$.
- $r + s = 1$: 직선 $AB$ ($r, s \ge 0$이면 선분 $AB$). $r, s \ge 0$이고 $r + s \le 1$: 삼각형 $OAB$의 내부와 경계. $0 \le r, s \le 1$: $\mathbf{a}$, $\mathbf{b}$로 만든 평행사변형.
- $1$ 대신 $k$이면 $\mathbf{a}$, $\mathbf{b}$를 $k$배 한 도형. 3차원 $r\mathbf{a} + s\mathbf{b} + t\mathbf{c}$도 같은 방식 (평면 삼각형, 사면체, 평행육면체).

## explanation
$r + s \le 1$ 조건은 $r, s \ge 0$이 같이 있어야 삼각형이 된다. 조건이 빠지면 반평면 전체가 되니 문제의 부등식을 모두 확인한다.

## supplement
교재의 '0 ≤ r+s ≤ 1' 조건에는 r, s ≥ 0이 함께 필요해서 명시했습니다. 교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
