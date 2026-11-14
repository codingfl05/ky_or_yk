---
id: la-ip-inner-product-axioms
title_ko: "스칼라 내적의 공리와 대표 예시"
title_en: "Axioms of a scalar product"
question: "스칼라 내적의 공리와 시험에 자주 나오는 낯선 내적 세 가지는?"
tags: [내적, 스칼라 내적, 공리, 퇴화되지 않음, inner product, scalar product, non-degenerate]
importance: 3
related: [la-vm-dot-product, la-gs-trace-commuting-nilpotent]
source: "notion:선대 07. 내적공간과 스펙트럼 이론 (26~28강)"
verified: false
---

## formula
$$
\langle v,w\rangle=\langle w,v\rangle
$$

$$
\langle u,v+w\rangle=\langle u,v\rangle+\langle u,w\rangle
$$

$$
\langle ku,v\rangle=k\langle u,v\rangle=\langle u,kv\rangle
$$

$$
\langle X,Y\rangle = X^TMY\ (M^T=M)
$$

$$
\langle f,g\rangle=\int_a^b f(t)g(t)\,dt
$$

$$
\langle A,B\rangle=\operatorname{tr}(AB)
$$

## conditions
- 퇴화되지 않음(non-degenerate): $\langle v,w\rangle=0\ \forall w\in V \implies v=0$

## explanation
$\mathbb R^n$의 내적 $u\cdot v=\sum u_iv_i$는 이 공리를 만족하는 "가장 표준적인 예시"일 뿐이고, 실제로는 훨씬 다양한 내적이 가능하다.

### 문제풀이 포인트 — 내적 판정 문제의 표준 예시들
- 이차형식 기반 내적 $\langle X,Y\rangle = X^TMY$ ($M$: 대칭행렬): 대칭성은 $M^T=M$에서, 선형성은 행렬곱의 분배법칙에서 바로 유도.
- 함수공간의 내적 $\langle f,g\rangle=\int_a^b f(t)g(t)\,dt$: 적분의 선형성으로 공리 확인.
- 행렬공간의 내적 $\langle A,B\rangle=\operatorname{tr}(AB)$: $\operatorname{tr}(AB)=\operatorname{tr}(BA)$(23강)로 대칭성 확인, trace의 선형성으로 나머지 확인.
- 이 세 가지는 이 단원에서 가장 자주 등장하는 "낯선 내적"이므로 정의를 보자마자 어느 유형인지 분류하는 것이 시간 단축의 핵심.

## supplement
노션 정리 문서를 거의 그대로 옮겼습니다. 주의: $\langle A,B\rangle=\operatorname{tr}(AB)$는 대칭·선형·퇴화되지 않음은 만족하지만 양의 정부호는 아닙니다 (예: 반대칭행렬 $A=\begin{pmatrix}0&1\\-1&0\end{pmatrix}$이면 $\operatorname{tr}(A^2)=-2<0$). 양의 정부호 내적(노름을 정의할 수 있는 내적)이 필요하면 $\langle A,B\rangle=\operatorname{tr}(A^TB)$를 씁니다. 마찬가지로 $X^TMY$는 $M$이 양의 정부호일 때만 양의 정부호 내적입니다.
