---
id: la-vs-span
title_ko: "Span (생성)"
title_en: "Span"
tags: [span, 생성, 선형결합, linear combination]
importance: 2
related: [la-vs-subspace-test, la-vs-linear-independence]
source: "notion:선대 02. 벡터공간의 기초 (4~12강)"
verified: false
---

## formula
$$
\operatorname{span}\{\mathbf v_1,\ldots,\mathbf v_k\} = \{c_1\mathbf v_1+\cdots+c_k\mathbf v_k : c_i\in\mathbb R\}
$$

## explanation
주어진 벡터들의 모든 선형결합의 집합. Span은 항상 부분공간이다.

### 문제풀이 포인트
"$\mathbf b \in \operatorname{span}\{\mathbf v_1,\ldots,\mathbf v_k\}$인가?"는 "$c_1\mathbf v_1+\cdots+c_k\mathbf v_k=\mathbf b$가 해를 갖는가?"라는 **연립방정식 문제로 환원**된다 — $[\mathbf v_1\ \cdots\ \mathbf v_k\ |\ \mathbf b]$의 RREF로 판정.

## supplement
노션 정리 문서를 거의 그대로 옮겼습니다 (표현만 카드 형식에 맞춤).
