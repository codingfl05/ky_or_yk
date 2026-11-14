---
id: la-gs-change-of-basis-similarity
title_ko: "기저 변경과 닮음행렬"
title_en: "Change of basis and similar matrices"
tags: [닮음행렬, 기저변환, 대각화, similar matrices, change of basis]
importance: 3
related: [la-gs-matrix-representation, la-vs-change-of-basis, la-vs-diagonalization]
source: "notion:선대 06. 일반 벡터공간과 선형사상 (22~25강)"
verified: false
---

## formula
$$
[F]_{\mathcal B'} = N^{-1}\,[F]_{\mathcal B}\,N
$$

$$
N = P_{\mathcal B'\to\mathcal B} = \big[\,(v'_1)_{\mathcal B}\ \cdots\ (v'_n)_{\mathcal B}\,\big]
$$

## conditions
- $F:V\to V$ 작용소, $\mathcal B$, $\mathcal B'=\{v'_i\}$: $V$의 두 기저. $N$의 열은 새 기저 $\mathcal B'$의 벡터들을 옛 기저 $\mathcal B$ 좌표로 나타낸 것.

## explanation
같은 작용소라도 기저를 바꾸면 표현행렬이 **닮음(similar)** 관계의 다른 행렬이 된다. 대각화 $A=PDP^{-1}$는 "고유벡터 기저로 바꾸면 표현행렬이 대각행렬 $D$가 되는 것"이라는 뜻.

### 문제풀이 포인트
"작용소 $F$가 대각화 가능하다" = 표현행렬이 대각행렬이 되는 기저(고유벡터 기저)가 존재한다. 이 번역을 알면 추상적으로 표현된 대각화 문제도 익숙한 계산으로 푼다.

## supplement
노션 문서 5.3은 N = M^{B}_{B′}(id)로 적었는데, 5.1 표기(위 첨자 = 정의역)로 읽으면 이는 B → B′ 전이행렬이라 식이 N[F]_B N⁻¹이 되어야 합니다. 5.2처럼 위 첨자를 공역으로 읽으면 맞는 식이라, 표기 혼용에서 생긴 문제입니다. 카드에는 N = P_{B′→B}(새 기저를 옛 좌표로)라고 명시해 어느 쪽으로 읽어도 맞게 썼습니다.
