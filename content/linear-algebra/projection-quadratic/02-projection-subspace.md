---
id: la-pq-projection-subspace
title_ko: "부분공간으로의 사영 (Projection theorem)"
title_en: "Projection onto a subspace"
tags: [사영정리, 직교기저, 정규직교기저, projection theorem]
importance: 3
related: [la-pq-projection-decomposition, la-pq-gram-schmidt, la-vs-fundamental-subspaces]
source: "notion:선대 03. 사영과 이차형식 (13~15강)"
verified: false
---

## formula
$$
\operatorname{proj}_W u = \frac{u\cdot v_1}{\|v_1\|^2}v_1 + \cdots + \frac{u\cdot v_r}{\|v_r\|^2}v_r
$$

$$
\operatorname{proj}_W u = \langle u,v_1\rangle v_1 + \cdots + \langle u,v_r\rangle v_r \quad (\text{orthonormal basis})
$$

## conditions
- $\{v_1,\ldots,v_r\}$는 $W$의 **직교기저**여야 한다 (직교가 아니면 이 공식 못 씀).

## explanation
$u = \operatorname{proj}_W u + w_2$로 분해되고, $w_2\in W^\perp$. 직교여공간 개념이 "임의의 벡터를 부분공간 성분 + 직교여공간 성분으로 쪼개는" 구체적 도구로 완성된다.

### 문제풀이 포인트
정규직교기저가 있으면 계산이 극도로 단순해진다(나눗셈 불필요) — 그래서 그람-슈미트로 직교기저를 만든 뒤 반드시 정규화하는 습관이 계산 속도를 좌우한다.

## supplement
노션 정리 문서를 거의 그대로 옮겼습니다 (표현만 카드 형식에 맞춤).
