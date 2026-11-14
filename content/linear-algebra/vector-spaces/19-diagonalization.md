---
id: la-vs-diagonalization
title_ko: "대각화와 대각화 가능 조건"
title_en: "Diagonalization"
tags: [대각화, 대수적 중복도, 기하적 중복도, diagonalization, multiplicity]
importance: 3
related: [la-vs-eigen, la-vs-change-of-basis, la-vs-diagonal-powers]
source: "notion:선대 02. 벡터공간의 기초 (4~12강)"
verified: false
---

## formula
$$
A = PDP^{-1}
$$

$$
D=\operatorname{diag}(\lambda_1,\ldots,\lambda_n)
$$

$$
P=[\mathbf v_1\ \cdots\ \mathbf v_n]
$$

$$
\operatorname{AM}(\lambda) \geq \operatorname{GM}(\lambda) \geq 1
$$

$$
\begin{aligned}
&A \text{ diagonalizable} \\
&\quad {}\iff \operatorname{GM}(\lambda)=\operatorname{AM}(\lambda)\ \text{for all } \lambda
\end{aligned}
$$

## conditions
- $P$의 열은 고유벡터들 (같은 순서로 $D$에 고윳값).
- 실수 범위에서 대각화하려면 고윳값이 모두 실수여야 한다. 예: 회전행렬 $\begin{pmatrix}0&-1\\1&0\end{pmatrix}$은 고윳값이 $\pm i$라 실수 행렬 $P$로는 대각화되지 않는다 (복소수 범위에서는 가능).
- AM: 대수적 중복도 — 특성방정식에서 $\lambda$의 중복 횟수. GM: 기하적 중복도 — $\dim E_\lambda$.

## explanation
$P$는 "고유벡터 기저 좌표를 표준 좌표로 바꾸는 전이행렬"이다 ($P^{-1}$이 표준 좌표를 고유벡터 기저 좌표로 바꾼다). 대각화 가능하다는 것은 $\mathbb R^n$이 $A$의 고유벡터들로 이루어진 기저를 가진다는 뜻.

### 문제풀이 포인트 — 최다 출제 유형
- 서로 다른 고윳값이 $n$개면 **자동으로 대각화 가능**.
- 중복 고윳값이 있으면 반드시 GM = AM 확인. GM < AM인 순간 대각화 불가능으로 즉시 결론.
- 대칭행렬은 **항상** 대각화 가능하며, 직교대각화까지 가능 — 직교대각화와 스펙트럼 정리의 출발점.

## supplement
노션 정리 문서를 거의 그대로 옮겼습니다 (표현만 카드 형식에 맞춤). 검토 보완: P의 방향(고유벡터 기저 좌표 → 표준 좌표)을 분명히 하고, 실수 범위 대각화에는 고윳값이 모두 실수여야 한다는 조건과 회전행렬 예를 추가했습니다.
