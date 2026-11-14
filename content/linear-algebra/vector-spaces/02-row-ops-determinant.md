---
id: la-vs-row-ops-determinant
title_ko: "행연산과 행렬식"
title_en: "Row operations and determinants"
tags: [행렬식, 행연산, 삼각화, row operation, determinant]
importance: 3
related: []
source: "notion:선대 02. 벡터공간의 기초 (4~12강)"
verified: false
---

## formula
$$
\begin{aligned}
&\det(A) = \pm\frac{\prod d_i}{\prod k_j} \\
&d_i: \text{diagonal entries after triangularization} \\
&k_j: \text{scaling factors}
\end{aligned}
$$

## conditions
- 두 행을 교환 → 부호 반전
- 한 행에 상수 $k$를 곱함 → $\det$도 $k$배
- 한 행에 다른 행의 배수를 더함 → $\det$ 불변

## explanation
### 문제풀이 포인트
큰 행렬의 행렬식은 **가우스 소거로 상삼각행렬을 만들고 대각원소를 곱한 뒤, 사용한 행 교환 횟수만큼 부호를 곱하고 스케일링 배율로 나눠주는 방식**이 표준 풀이. 가우스 소거, rank와 정확히 같은 계산 과정을 공유한다.

## supplement
노션 정리 문서를 거의 그대로 옮겼습니다 (표현만 카드 형식에 맞춤).
