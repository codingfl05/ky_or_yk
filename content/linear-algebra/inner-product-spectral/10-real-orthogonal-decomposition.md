---
id: la-ip-real-orthogonal-decomposition
title_ko: "실 직교 작용소의 분해 (반사와 회전 블록)"
title_en: "Decomposition of real orthogonal operators"
tags: [직교 작용소, 회전 블록, 반사, 직합 분해, orthogonal operator, rotation block, reflection]
importance: 2
related: [la-ip-unitary-spectral-theorem, la-dec-standard-matrix]
source: "notion:선대 07. 내적공간과 스펙트럼 이론 (26~28강)"
verified: false
---

## formula
$$
V = V_1\oplus\cdots\oplus V_r\ (\dim V_i\in\{1,2\},\ \text{mutually orthogonal},\ T\text{-invariant})
$$

$$
\text{blocks: } (\pm1) \quad\text{or}\quad \begin{pmatrix}\cos\theta&-\sin\theta\\ \sin\theta&\cos\theta\end{pmatrix}
$$

## conditions
- $V$는 실수 벡터공간, $T$는 실 유니타리(직교) 작용소.

## explanation
### 문제풀이 포인트
실수 벡터공간에서는 복소수 고윳값 $e^{i\theta}$ ($\theta\ne 0,\pi$)이 실수 고유벡터를 갖지 못하므로, 대신 **2차원 회전 블록**으로 표현된다. 20강에서 배운 회전변환의 표준행렬이 **왜 하필 그 형태인지**를 스펙트럼 이론으로 설명해 주는 지점: 실수 직교 작용소를 가장 단순한 블록 형태로 분해하면 $1\times1$ 블록($\pm1$, 반사)과 $2\times2$ 회전 블록만 나온다.

이 강의 전체가 결국 "적절한 기저(정규직교기저, 고유벡터 기저)를 선택해 계산을 단순화한다"는 하나의 아이디어로 수렴한다.

## supplement
노션 정리 문서를 거의 그대로 옮겼습니다 (표현만 카드 형식에 맞춤).
