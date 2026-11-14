---
id: la-ip-spectral-theorem-symmetric
title_ko: "스펙트럼 정리 (대칭 작용소)"
title_en: "Spectral theorem for symmetric operators"
question: "대칭 작용소에 대한 스펙트럼 정리의 내용과 증명의 세 단계는?"
tags: [스펙트럼 정리, 직교대각화, 대칭행렬, 고유벡터, spectral theorem, orthogonal diagonalization, symmetric]
importance: 3
related: [la-pq-orthogonal-diagonalization, la-ip-transpose-map, la-dec-cayley-hamilton]
source: "notion:선대 07. 내적공간과 스펙트럼 이론 (26~28강)"
verified: false
---

## formula
$$
\begin{aligned}
&A={}^tA \implies V\ \text{has an orthonormal basis} \\
&\qquad\qquad\quad \text{of eigenvectors of}\ A
\end{aligned}
$$

$$
\begin{aligned}
&\exists\, U\ (\text{real unitary}) \ \text{s.t.} \\
&\quad {}^tUAU = U^{-1}AU = D\ (\text{diagonal})
\end{aligned}
$$

$$
\begin{aligned}
&\lambda_1\ne\lambda_2 \implies (\lambda_1-\lambda_2)\langle v_1,v_2\rangle=0 \\
&\quad {}\implies v_1\perp v_2
\end{aligned}
$$

## conditions
- $V$는 유한차원 실벡터공간, 양의 정부호 내적. $A:V\to V$는 대칭 선형사상. 이때 $A$는 0이 아닌 고유벡터를 갖는다.

## explanation
**14강 직교대각화의 완전한 일반화판**. "실대칭행렬은 직교행렬로 대각화 가능"이라는 14강의 결과가 임의의 내적공간 위의 대칭 작용소에 대해 처음부터 증명된다.

### 증명의 핵심 아이디어 (문제풀이에도 자주 응용됨)
1. 대칭작용소는 항상 실수 고윳값을 가진다 (복소수 고유벡터를 가정해도 켤레를 이용한 계산으로 허수부가 0임을 보임). 대칭행렬의 고윳값이 항상 실수라는 12강 사실의 증명.
2. 고유벡터 $v_1$을 하나 찾고 $W=\operatorname{span}\{v_1\}$이라 하면, $W$가 $A$-불변이므로 $W^\perp$도 $A$-불변 (핵심 보조정리: $w\perp v$(고유벡터)이면 $Aw\perp v$).
3. $A$를 $W^\perp$로 제한해서 같은 논리를 반복(귀납법) → 정규직교 고유벡터 기저를 순차적으로 완성.

### 문제풀이 포인트
- 서로 다른 고윳값의 고유벡터는 직교: $\langle Av_1,v_2\rangle = \lambda_1\langle v_1,v_2\rangle$이고 $\langle v_1,Av_2\rangle=\lambda_2\langle v_1,v_2\rangle$인데 대칭이므로 두 값이 같아 $(\lambda_1-\lambda_2)\langle v_1,v_2\rangle=0$. 14강에서 결과만 외웠던 성질의 증명이며, 직접 유도해서 답에 활용하는 문제로 자주 출제.
- 대칭행렬 $A$의 서로 다른 고윳값 전부에 대해 $(A-\lambda_1I)\cdots(A-\lambda_rI)=O$. 해밀턴-케일리 정리(18강)를 대칭행렬의 최소다항식 관점에서 재확인하는 문제 유형.

## supplement
노션 정리 문서를 거의 그대로 옮겼습니다. 원문의 "$U^tAU$"는 ${}^tUAU$(전치를 왼쪽에)로 표기를 통일했습니다. 서로 다른 고윳값 직교 증명은 원문의 등식 연결을 "두 값이 같다"는 문장으로 풀어 썼습니다.
