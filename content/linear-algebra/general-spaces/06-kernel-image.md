---
id: la-gs-kernel-image
title_ko: "핵과 상, 차원 정리"
title_en: "Kernel, image, and the dimension theorem"
question: "선형사상 F: V → W의 차원 정리와 전단사 판정 숏컷은?"
tags: [핵, 상, 차원 정리, rank-nullity, kernel, image]
importance: 3
related: [la-vs-fundamental-subspaces, la-gs-linear-map]
source: "notion:선대 06. 일반 벡터공간과 선형사상 (22~25강)"
verified: false
---

## formula
$$
\ker F = \{v\in V \mid F(v)=O\}
$$

$$
\operatorname{Im}F = \{F(v)\mid v\in V\}
$$

$$
\dim V = \dim(\ker F) + \dim(\operatorname{Im}F)
$$

## explanation
**rank-nullity 정리의 완전한 일반화**. 행렬 $A$의 $\operatorname{Null}(A)$가 $\ker(T_A)$, $\operatorname{Col}(A)$가 $\operatorname{Im}(T_A)$에 정확히 대응.

### 문제풀이 포인트
- 전단사 판정 숏컷: $\dim V=\dim W$(유한)이면 $\ker L=\{O\}$ **또는** $\operatorname{Im}L=W$ 둘 중 하나만 확인하면 자동으로 전단사.
- 핵이 $\{O\}$인 선형사상은 선형독립인 벡터들을 선형독립인 벡터들로 보낸다.

## supplement
노션 정리 문서를 거의 그대로 옮겼습니다 (표현만 카드 형식에 맞춤).
