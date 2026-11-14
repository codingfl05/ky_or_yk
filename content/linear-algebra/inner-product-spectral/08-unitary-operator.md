---
id: la-ip-unitary-operator
title_ko: "유니타리 작용소의 동치 조건"
title_en: "Unitary operators"
tags: [유니타리, 직교행렬, 에르미트 내적, 노름 보존, unitary, orthogonal matrix, Hermitian]
importance: 2
related: [la-pq-orthogonal-matrix]
source: "notion:선대 07. 내적공간과 스펙트럼 이론 (26~28강)"
verified: false
---

## formula
$$
\begin{aligned}
&U\ \text{unitary} \iff \text{preserves norm} \\
&\quad {}\iff \text{preserves inner product} \\
&\quad {}\iff \text{maps unit vectors to unit vectors}
\end{aligned}
$$

$$
U^{*}U = I\ (U^{-1}=U^{*}) \implies |\det(U)|=1
$$

## conditions
- $V$는 복소 내적공간(에르미트 내적), $U:V\to V$. $U^{*}$는 켤레전치(conjugate transpose, 에르미트 내적에 대한 전치사상). 실수 공간이면 $U^{*}={}^tU$.

## explanation
14강 "직교행렬"($A^{-1}=A^T$)의 복소수체 버전. 실수 벡터공간의 직교행렬이 복소수 벡터공간으로 일반화되면 유니타리 행렬이 된다.

## supplement
원문은 ${}^tU\,U = I$로 적었지만, 복소 에르미트 내적에서는 그냥 전치가 아니라 켤레전치 $U^{*}=\overline{U}^T$여야 합니다 (예: $U=(i)$는 유니타리인데 $U^TU=-1$). 카드에서는 $U^{*}$로 고쳐 썼습니다. 에르미트 내적에 대한 전치사상으로 ${}^tU$를 정의했다면 원문과 같은 뜻입니다.
