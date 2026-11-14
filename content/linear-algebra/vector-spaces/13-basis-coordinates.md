---
id: la-vs-basis-coordinates
title_ko: "기저와 좌표벡터"
title_en: "Basis and coordinate vectors"
tags: [기저, 좌표벡터, basis, coordinate vector]
importance: 2
related: [la-vs-dimension, la-vs-change-of-basis]
source: "notion:선대 02. 벡터공간의 기초 (4~12강)"
verified: false
---

## formula
$$
\begin{aligned}
&B=\{\mathbf v_1,\ldots,\mathbf v_n\}\text{ is a basis of } V \\
&\quad {}\iff B \text{ is linearly independent} \\
&\qquad\quad\ \text{and } \operatorname{span}(B)=V
\end{aligned}
$$

$$
[\mathbf u]_B = \begin{pmatrix}c_1\\ \vdots\\ c_n\end{pmatrix} \quad \text{where } \mathbf u = c_1\mathbf v_1+\cdots+c_n\mathbf v_n
$$

## explanation
같은 벡터라도 기준 기저를 바꾸면 좌표(성분 표현)가 달라진다. "벡터 자체"와 "좌표 표현"을 구분하는 것이 핵심 — 기저변환은 바로 이 좌표벡터들 사이의 변환.

## supplement
노션 정리 문서를 거의 그대로 옮겼습니다 (표현만 카드 형식에 맞춤).
