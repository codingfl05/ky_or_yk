---
id: la-gs-matrix-representation
title_ko: "일반 기저에 대한 표현행렬"
title_en: "Matrix of a linear map relative to bases"
question: "기저 B에서 B′로 가는 선형사상 F의 표현행렬을 만드는 절차는?"
tags: [표현행렬, 기저, 좌표, matrix representation]
importance: 3
related: [la-gs-map-matrix-correspondence, la-gs-change-of-basis-similarity, la-vs-change-of-basis]
source: "notion:선대 06. 일반 벡터공간과 선형사상 (22~25강)"
verified: false
---

## formula
$$
\begin{aligned}
&[F]_{\mathcal B\to\mathcal B'} \\
&\quad {}= \big[\,(F(v_1))_{\mathcal B'} \,\big|\, (F(v_2))_{\mathcal B'} \,\big|\, \cdots \,\big|\, (F(v_n))_{\mathcal B'}\,\big]
\end{aligned}
$$

$$
[F+G]=[F]+[G]
$$

$$
[cF]=c[F]
$$

$$
[G\circ F]_{\mathcal B\to\mathcal B''} = [G]_{\mathcal B'\to\mathcal B''}\,[F]_{\mathcal B\to\mathcal B'}
$$

## conditions
- $\mathcal B=\{v_1,\ldots,v_n\}$: 정의역 기저, $\mathcal B'$: 공역 기저. 노트의 $M^{\mathcal B}_{\mathcal B'}(F)$와 같다 (위 첨자 = 정의역 기저).

## explanation
표준행렬(표준기저)을 **임의의 기저**로 확장한 것 — 기저변환의 전이행렬과 같은 원리.

### 문제풀이 포인트 — 계산 절차
1. 정의역 기저의 각 원소에 $F$를 적용.
2. 결과 $F(v_i)$를 공역 기저 $\mathcal B'$에 대한 좌표로 표현 (연립방정식).
3. 좌표들을 열로 쌓는다.

## supplement
노션 문서 5.1은 M^{B}_{B′}(F)에서 위 첨자를 정의역 기저로 썼는데, 5.2의 합성 공식 M^{B″}_{B}(G∘F) = M^{B″}_{B′}(G)M^{B′}_{B}(F)는 위 첨자를 공역 기저로 써서 두 표기가 섞여 있습니다. 5.1 표기로 통일하면 M^{B}_{B″}(G∘F) = M^{B′}_{B″}(G)M^{B}_{B′}(F)입니다. 카드에는 헷갈리지 않게 [F]_{B→B′}(화살표 = 정의역 → 공역) 표기를 썼습니다.
