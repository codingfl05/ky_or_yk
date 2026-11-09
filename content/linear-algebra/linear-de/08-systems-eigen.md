---
id: la-de-systems-eigen
title_ko: "연립 선형 미분방정식 (고윳값 방법)"
title_en: "Linear systems x′ = Ax"
question: "x′ = Ax에서 고윳값이 서로 다른 실수일 때 일반해는?"
tags: [연립 미분방정식, 고윳값, 고유벡터, system of odes, eigenvalue method]
importance: 3
related: [la-vs-eigen, la-vs-diagonalization]
source: "notion:선대 04. 선형 미분방정식 (16~17강)"
verified: false
---

## formula
$$
x' = Ax \qquad\Longrightarrow\qquad x^{(i)}(t) = \eta_i e^{r_it}
$$

$$
x(t) = c_1\eta_1 e^{r_1t} + c_2\eta_2 e^{r_2t} + \cdots
$$

## conditions
- $r_i$: $A$의 고윳값($\det(rI-A)=0$), $\eta_i$: 대응하는 고유벡터. 고윳값이 서로 다른 실수인 경우.

## explanation
$A$를 대각화($A=PDP^{-1}$)하면 좌표변환 $y=P^{-1}x$로 $y_i'=\lambda_iy_i$라는 독립된 1계 방정식들로 분리된다 — 고유벡터 방향으로 $e^{\lambda t}$ 해가 나오는 근본 원리.

### 문제풀이 포인트
- 절차: (1) 고윳값 (2) 고유벡터 (3) $\eta_ie^{r_it}$의 선형결합.
- 고윳값이 중복되고 기하적 중복도가 부족하면 $te^{rt}$ 항이 추가로 필요 — "일반화된 고유벡터"가 필요한 경우 (조르당 표준형과 직결).

## supplement
노션 정리 문서를 거의 그대로 옮겼습니다 (표현만 카드 형식에 맞춤).
