---
id: la-pq-gram-schmidt
title_ko: "그람-슈미트 직교화"
title_en: "Gram-Schmidt process"
question: "기저 u₁, u₂, u₃에서 직교기저를 만드는 그람-슈미트 과정은?"
tags: [그람-슈미트, 직교화, 직교기저, gram-schmidt, orthogonalization]
importance: 3
related: [la-pq-projection-subspace, la-pq-orthogonal-diagonalization]
source: "notion:선대 03. 사영과 이차형식 (13~15강)"
verified: false
---

## formula
$$
v_1 = u_1, \qquad v_2 = u_2 - \frac{u_2\cdot v_1}{\|v_1\|^2}v_1
$$

$$
v_3 = u_3 - \operatorname{proj}_{v_1}u_3 - \operatorname{proj}_{v_2}u_3
$$

$$
v_k = u_k - \sum_{i=1}^{k-1}\operatorname{proj}_{v_i}u_k
$$

## explanation
"지금까지 만든 직교기저들이 span하는 부분공간으로의 사영을 빼서, 그 부분공간과 수직인 성분만 남기는" 그리디(greedy) 알고리즘. 각 단계의 $v_k$는 $W_{k-1}=\operatorname{span}\{u_1,\ldots,u_{k-1}\}$의 직교여공간 방향이다.

### 문제풀이 포인트 — 계산 실수 방지
- $v_2$부터는 반드시 **이미 만든 $v_i$들**(원래 $u_i$가 아니라)을 기준으로 사영을 빼야 한다 — $u_i$를 기준으로 빼면 직교성이 깨짐.
- 마지막에 각 $v_i$를 $\|v_i\|$로 나눠 정규화하면 정규직교기저 $\{q_1,\ldots,q_r\}$ 완성 — 직교대각화의 $P$, QR분해의 $Q$로 그대로 쓰인다.
- 직교집합(영벡터 제외)은 항상 선형독립이다 — 직교화가 끝나면 자동으로 기저 확인 완료.

## supplement
노션 정리 문서를 거의 그대로 옮겼습니다 (표현만 카드 형식에 맞춤).
