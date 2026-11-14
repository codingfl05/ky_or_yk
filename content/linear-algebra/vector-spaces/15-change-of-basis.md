---
id: la-vs-change-of-basis
title_ko: "기저변환과 전이행렬"
title_en: "Change of basis (transition matrix)"
tags: [기저변환, 전이행렬, change of basis, transition matrix]
importance: 3
related: [la-vs-basis-coordinates, la-vs-diagonalization]
source: "notion:선대 02. 벡터공간의 기초 (4~12강)"
verified: false
---

## formula
$$
[\mathbf u]_{B'} = P_{B\to B'}\,[\mathbf u]_B
$$

$$
P_{B\to B'} = \big[\,[\mathbf v_1]_{B'} \ \cdots\ [\mathbf v_n]_{B'}\,\big]
$$

$$
P_{B'\to B} = (P_{B\to B'})^{-1}
$$

## conditions
- $B=\{\mathbf v_i\}$에서 $B'$로 갈 때, $P_{B\to B'}$는 "$B$(옛 기저)의 기저벡터들을 $B'$(새 기저) 좌표로 나타낸 것"을 열로 쌓은 행렬.

## explanation
좌표계를 바꾸는 것은 결국 행렬 곱셈 하나로 표현된다.

### 문제풀이 포인트
- $P$를 만드는 방향과 곱하는 방향(어느 쪽이 $P$이고 어느 쪽이 $P^{-1}$인지)을 헷갈리는 게 가장 흔한 실수 — "새 기저의 성분으로 옛 기저 벡터를 표현" 방식으로 항상 통일해서 암기.
- 대각화 $A=PDP^{-1}$에서 $P$(열 = 고유벡터)는 "고유벡터 기저 좌표를 표준 좌표로 바꾸는 전이행렬"이다. 즉 **대각화는 결국 기저변환**이라는 관점.

## supplement
노션 문서에는 '[u]_{B′} = P⁻¹[u]_B, P = [[v₁]_{B′} ⋯ [vₙ]_{B′}]'로 되어 있는데, P를 이렇게 정의하면 [u]_{B′} = P[u]_B가 맞습니다 (P⁻¹이 붙으면 반대 방향). 예: u = c₁v₁+⋯+cₙvₙ의 양변을 B′ 좌표로 쓰면 [u]_{B′} = c₁[v₁]_{B′}+⋯ = P[u]_B. 그래서 카드에는 P_{B→B′}로 표기해 바로잡았습니다. 노트의 '새 기저의 성분으로 옛 기저 벡터를 표현' 설명과는 일치합니다. 검토 보완: 대각화의 P는 고유벡터 기저 좌표 → 표준 좌표 방향의 전이행렬이라고 방향을 분명히 했습니다.
