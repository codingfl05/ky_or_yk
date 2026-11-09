---
id: la-gs-trace-commuting-nilpotent
title_ko: "tr(AB) = tr(BA)의 증명과 가환 닐포텐트"
title_en: "Trace identity and commuting nilpotent matrices"
tags: [대각합, trace, 닐포텐트, 가환, 이항정리]
importance: 2
related: [la-dec-rank-trace-properties, la-gs-nilpotent-inverse]
source: "notion:선대 06. 일반 벡터공간과 선형사상 (22~25강)"
verified: false
---

## formula
$$
\operatorname{tr}(AB)=\sum_i\sum_j a_{ij}b_{ji} = \operatorname{tr}(BA)
$$

## explanation
### 문제풀이 포인트
닐포텐트 행렬 $A,B$가 $AB=BA$(가환)이면 $AB$와 $A+B$ 모두 닐포텐트 — 이항정리를 행렬에 적용한 뒤($AB=BA$일 때만 이항전개 가능) 지수가 충분히 크면 각 항에서 $A$ 또는 $B$의 거듭제곱이 0이 된다. **"가환성이 있어야 이항정리를 쓸 수 있다"**가 함정 포인트.

## supplement
노션 정리 문서를 거의 그대로 옮겼습니다 (표현만 카드 형식에 맞춤).
