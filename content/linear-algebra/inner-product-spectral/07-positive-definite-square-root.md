---
id: la-ip-positive-definite-square-root
title_ko: "양의 정부호 행렬의 분해와 제곱근"
title_en: "Positive definite matrices and square roots"
tags: [양의 정부호, 제곱근 행렬, 직교대각화, positive definite, square root, matrix square root]
importance: 2
related: [la-pq-definiteness, la-ip-spectral-theorem-symmetric, la-pq-principal-axis]
source: "notion:선대 07. 내적공간과 스펙트럼 이론 (26~28강)"
verified: false
---

## formula
$$
A\ \text{symmetric, positive definite} \iff \exists N\ (\text{invertible})\ \text{s.t.}\ A={}^tNN
$$

$$
A=UDU^T \implies \sqrt A = U\sqrt D\, U^T
$$

## conditions
- $\sqrt D$는 $D$의 대각성분(양의 고윳값)에 각각 제곱근을 취한 대각행렬. 이렇게 만든 $\sqrt A$는 대칭·양의 정부호이고 $(\sqrt A)^2=A$.

## explanation
"양의 정부호 = 제곱근이 존재". 15강 정부호성 → 26강 내적의 공리 → 27강 제곱근 행렬로 이어지는 흐름은, "정부호"라는 하나의 개념이 이차형식·내적·행렬분해의 언어로 계속 재등장한다는 것을 보여준다.

### 문제풀이 포인트
$\sqrt A$는 $A=UDU^T$의 $D$를 $\sqrt D$로 바꿔서 구성한다. 15강 주축정리 계산과 14강 직교대각화 절차를 그대로 응용한 것.

## supplement
노션 정리 문서를 거의 그대로 옮겼습니다. $\sqrt D$의 정의와 $(\sqrt A)^2=A$ 확인을 conditions에 추가했습니다. 참고: $N=\sqrt A$로 잡으면 $A={}^tNN$이 바로 성립합니다.
