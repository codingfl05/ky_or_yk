---
id: la-vm-inverse
title_ko: "항등원·역행렬"
title_en: "Identity and inverse matrices"
tags: [역행렬, 항등행렬, 영인자, inverse matrix, identity matrix]
importance: 3
related: []
source: "notion:선대 01. 벡터와 행렬 기초 (2~3강)"
verified: false
---

## formula
$$
AI_n=A,\quad I_mA=A
$$

$$
\begin{aligned}
&A = \begin{pmatrix} a & b \\ c & d\end{pmatrix},\ ad-bc\neq0 \\
&\quad {}\implies A^{-1} = \frac{1}{ad-bc}\begin{pmatrix} d & -b \\ -c & a\end{pmatrix}
\end{aligned}
$$

$$
(AB)^{-1}=B^{-1}A^{-1}
$$

## explanation
### 문제풀이 포인트
- $(AB)^{-1}=B^{-1}A^{-1}$처럼 **순서가 뒤집히는 성질**은 전치행렬 $(AB)^T=B^TA^T$에서도 동일하게 나타남 — "역행렬이면서 전치"인 경우 $(A^{-1})^T=(A^T)^{-1}$ 등 순서를 헷갈리지 않도록 함께 기억.
- $cA=0 \Rightarrow c=0 \text{ or } A=0$은 스칼라 방정식과 똑같이 성립하지만, 행렬 곱셈에서는 **$AB=0$이라고 $A=0$ 또는 $B=0$이 성립하지 않음** (영인자 존재) — 이 비대칭성이 자주 출제됨.

## supplement
노션 정리 문서를 거의 그대로 옮겼습니다 (표현만 카드 형식에 맞춤). 검토 보완: 2×2 역행렬 공식에 A의 성분 표기(a, b, c, d)를 명시했습니다.
