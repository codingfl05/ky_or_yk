---
id: la-vs-invertible-matrix-theorem
title_ko: "가역행렬 동치조건"
title_en: "Invertible matrix theorem"
question: "n×n 행렬 A가 가역인 것과 동치인 조건들은?"
tags: [가역행렬, 동치조건, 역행렬, invertible matrix theorem]
importance: 3
related: [la-vs-determinant-properties, la-vs-fundamental-subspaces, la-vs-eigen]
source: "notion:선대 02. 벡터공간의 기초 (4~12강)"
verified: false
---

## formula
$$
\begin{aligned}
&A \text{ invertible} \iff \det(A)\neq0 \\
&\quad {}\iff \operatorname{rank}(A)=n \\
&\quad {}\iff \operatorname{nullity}(A)=0 \\
&\quad {}\iff 0 \text{ is not an eigenvalue}
\end{aligned}
$$

## conditions
다음은 모두 동치 ($A$: $n\times n$):
1. $A$는 가역
2. $Ax=\mathbf0$은 오직 자명해만 갖는다
3. $A$의 RREF는 $I_n$
4. $\det(A)\neq0$
5. $\operatorname{rank}(A)=n$
6. $\operatorname{nullity}(A)=0$
7. $A$의 열벡터들은 선형독립
8. $A$의 열벡터들은 $\mathbb R^n$을 span
9. $A$의 행벡터들은 선형독립
10. $Ax=b$가 임의의 $b$에 대해 유일해
11. $A^T$도 가역
12. $0$은 $A$의 고윳값이 아니다

## explanation
### 문제풀이 포인트 — 시험 최빈출
- 어느 하나라도 참이면 나머지 전부 참, 하나라도 거짓이면 나머지 전부 거짓. "$A$가 가역이다"를 직접 보이기 어려우면 계산하기 가장 쉬운 조건(보통 $\det\neq0$ 또는 rank)으로 우회.
- (12)는 고윳값과 직결 — "$0$이 고윳값이면 특이행렬, 아니면 가역".
- SVD("특이값이 모두 0이 아니면 가역")도 이 리스트의 확장판.

## supplement
노션 정리 문서를 거의 그대로 옮겼습니다 (표현만 카드 형식에 맞춤).
