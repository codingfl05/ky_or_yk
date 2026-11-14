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
- AM: 대수적 중복도 — 특성방정식에서 $\lambda$의 중복 횟수. GM: 기하적 중복도 — $\dim E_\lambda$.

## explanation
$P$는 "고유벡터 기저로의 전이행렬". 대각화 가능하다는 것은 $\mathbb R^n$이 $A$의 고유벡터들로 이루어진 기저를 가진다는 뜻.

### 문제풀이 포인트 — 최다 출제 유형
- 서로 다른 고윳값이 $n$개면 **자동으로 대각화 가능**.
- 중복 고윳값이 있으면 반드시 GM = AM 확인. GM < AM인 순간 대각화 불가능으로 즉시 결론.
- 대칭행렬은 **항상** 대각화 가능하며, 직교대각화까지 가능 — 직교대각화와 스펙트럼 정리의 출발점.

## supplement
노션 정리 문서를 거의 그대로 옮겼습니다 (표현만 카드 형식에 맞춤).
