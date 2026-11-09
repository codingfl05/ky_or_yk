---
id: la-vs-eigen
title_ko: "고윳값·고유벡터·고유공간"
title_en: "Eigenvalues, eigenvectors, eigenspaces"
tags: [고윳값, 고유벡터, 고유공간, 특성방정식, eigenvalue, eigenvector, eigenspace]
importance: 3
related: [la-vs-diagonalization, la-vs-invertible-matrix-theorem]
source: "notion:선대 02. 벡터공간의 기초 (4~12강)"
verified: false
---

## formula
$$
A\mathbf v = \lambda \mathbf v \ (\mathbf v\neq\mathbf 0) \quad\Longleftrightarrow\quad \det(A-\lambda I)=0
$$

$$
E_\lambda = \operatorname{Null}(A-\lambda I), \qquad \operatorname{tr}(A)=\sum\lambda_i, \qquad \det(A)=\prod\lambda_i
$$

## conditions
- $p(\lambda)=\det(A-\lambda I)$: 특성다항식(characteristic polynomial). $n\times n$이면 $n$차 → 고윳값은 중복 포함 $n$개 (복소수 포함).

## explanation
고유벡터는 $A$가 방향을 바꾸지 않고 크기만 $\lambda$배 하는 특별한 벡터. 같은 $\lambda$의 고유벡터들(+영벡터)은 부분공간(고유공간)을 이룬다.

### 문제풀이 포인트
- 특성방정식 풀이는 결국 행렬식 계산 + 다항식 인수분해.
- 고유공간 계산은 $(A-\lambda I)x=\mathbf 0$을 푸는 것이므로 **RREF·nullity 계산**과 완전히 동일한 절차.
- 삼각행렬의 고윳값은 **대각원소 그 자체** — 계산 없이 즉시 읽는 최고의 숏컷.
- 대각합 = 고윳값의 합, 행렬식 = 고윳값의 곱 — 검산하거나 일부 고윳값을 역산할 때 유용.

## supplement
노션 정리 문서를 거의 그대로 옮겼습니다 (표현만 카드 형식에 맞춤).
