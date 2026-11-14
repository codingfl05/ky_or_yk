---
id: la-vs-linear-independence
title_ko: "선형독립 판정"
title_en: "Linear independence"
tags: [선형독립, 선형종속, linear independence]
importance: 3
related: [la-vs-span, la-vs-basis-coordinates]
source: "notion:선대 02. 벡터공간의 기초 (4~12강)"
verified: false
---

## formula
$$
\begin{aligned}
&c_1\mathbf v_1 + c_2\mathbf v_2 + \cdots + c_k\mathbf v_k = \mathbf 0 \\
&\quad {}\Rightarrow c_1=c_2=\cdots=c_k=0
\end{aligned}
$$

## explanation
### 문제풀이 포인트 — 핵심 숏컷 모음
- 벡터들을 열로 쌓은 행렬 $A=[\mathbf v_1\cdots\mathbf v_k]$: **정사각이면 $\det(A)\neq0$ ⟺ 선형독립**. 정사각이 아니면 $\operatorname{rank}(A)=k$(벡터 개수) ⟺ 선형독립.
- 벡터 개수 $k$ > 차원 $n$이면 **무조건 선형종속** (증명 없이 즉시 판정 — 시험에서 가장 빠른 함정 문제 스킬).
- 이 판정법은 기저의 정의, 고유벡터들의 선형독립성 문제에서 반복적으로 재사용된다.

## supplement
노션 정리 문서를 거의 그대로 옮겼습니다 (표현만 카드 형식에 맞춤).
