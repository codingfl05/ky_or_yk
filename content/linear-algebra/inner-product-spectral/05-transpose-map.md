---
id: la-ip-transpose-map
title_ko: "전치사상과 대칭 작용소"
title_en: "Transpose map and symmetric operators"
question: "내적으로 정의되는 전치사상의 정의와 계산 규칙은?"
tags: [전치사상, 수반, 대칭 작용소, transpose map, adjoint, symmetric operator]
importance: 2
related: [la-vm-special-matrices, la-gs-linear-map]
source: "notion:선대 07. 내적공간과 스펙트럼 이론 (26~28강)"
verified: false
---

## formula
$$
\begin{aligned}
&A:V\to V \implies \exists!\, {}^tA:V\to V \ \text{s.t.} \\
&\quad \langle Av,w\rangle = \langle v,{}^tAw\rangle \ \ \forall v,w
\end{aligned}
$$

$$
A = {}^tA \iff A\ \text{symmetric}
$$

$$
{}^t(A+B)={}^tA+{}^tB
$$

$$
{}^t(AB)={}^tB\,{}^tA
$$

$$
{}^t(cA)=c\,{}^tA
$$

$$
{}^t({}^tA)=A
$$

## conditions
- $A$는 $V$에서 $V$로 가는 선형 작용소(operator). 유한차원, 퇴화되지 않은 내적.

## explanation
3강에서 배운 "행렬의 전치"가 **내적을 통해 정의되는 추상적인 사상**으로 일반화된다. $\mathbb R^n$의 표준내적에서는 ${}^tA$가 정확히 $A^T$(전치행렬)와 일치하지만, 다른 내적을 쓰면 ${}^tA$는 $A^T$와 다를 수 있다.

### 문제풀이 포인트 — 계산 규칙
3강의 $(AB)^T=B^TA^T$와 정확히 같은 패턴. "순서가 뒤집힌다"는 것만 기억하면 나머지는 자동.

## supplement
노션 정리 문서를 거의 그대로 옮겼습니다 (표현만 카드 형식에 맞춤).
