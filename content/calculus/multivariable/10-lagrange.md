---
id: calc-mv-lagrange
title_ko: "라그랑주 승수법 (제약 조건의 최대·최소)"
title_en: "Lagrange multipliers"
question: "제약 조건 g=k 아래에서 f의 최대·최소를 구하는 라그랑주 조건과 빠른 대체 풀이는?"
tags: [라그랑주 승수법, 라그랑지 미정계수법, 제약 조건, 코시-슈바르츠, lagrange multiplier, constrained optimization]
importance: 3
related: [calc-mv-second-derivative-test]
source: "book:BLIS편입 다변수 4장 (02 다변수 함수의 최대/최소)"
verified: false
---

## formula
$$
\nabla f = \lambda\nabla g, \qquad g(x, y, z) = k \qquad (\nabla g \neq \mathbf{0})
$$

$$
\nabla f = \lambda\nabla g + \mu\nabla h \quad (\text{two constraints } g = k,\ h = c)
$$

$$
(ax + by + cz)^2 \le (a^2 + b^2 + c^2)(x^2 + y^2 + z^2)
$$

## conditions
- 라그랑주 조건을 만족하는 점은 최대·최소의 후보일 뿐이다. 후보들의 함숫값을 비교해서 정한다 (제약 영역이 닫혀 있고 유계이면 최대·최소가 존재).
- 2변수에서는 $\nabla f \parallel \nabla g$를 $f_x g_y - f_y g_x = 0$으로 쓰면 $\lambda$ 없이 풀린다.
- 대체 풀이: 구 위의 일차식은 코시-슈바르츠(마지막 식), 합이 일정할 때 곱은 산술-기하 평균, 원 위의 일차식은 매개변수 $x = a\cos t$, $y = a\sin t$.

## explanation
교재는 대부분의 제약 최대·최소 문제를 라그랑주로 풀 수 있지만, 정해진 꼴(구 위의 일차식, 곱의 최대)은 부등식이 훨씬 빠르다고 강조한다. 제약 영역이 내부까지 포함하면($x^2 + y^2 \le 1$) 내부 임계점도 같이 비교한다.

## supplement
교재는 승수를 제약 조건 값과 같은 문자 k로 써서(∇f = k∇g, g = k) 헷갈릴 수 있어 λ로 바꿨습니다. 후보 비교가 필요하다는 점, 제약 조건 2개일 때, 내부 영역 확인을 추가했습니다. 교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
