---
id: la-gs-composition-isomorphism
title_ko: "합성사상·작용소·동형사상"
title_en: "Composition, operators, isomorphisms"
tags: [합성사상, 작용소, 동형사상, isomorphism, operator]
importance: 2
related: [la-gs-kernel-image]
source: "notion:선대 06. 일반 벡터공간과 선형사상 (22~25강)"
verified: false
---

## formula
$$
(G\circ F)(u) = G(F(u)), \qquad F^{r+s}=F^r\circ F^s, \quad F^0=I
$$

$$
\ker F=\{O\} \text{ and } F \text{ surjective} \implies F^{-1} \text{ exists (isomorphism)}
$$

## conditions
- 작용소(operator): $V\to V$로 가는 선형사상.

## explanation
두 벡터공간이 동형이면 본질적으로 같은 구조 — 예: $\operatorname{Mat}_{m\times n}(K) \cong K^{mn}$. **모든 유한차원 벡터공간을 $K^n$처럼 다룰 수 있게 해주는 근거**. 회전 합성 $R(\theta_1)\circ R(\theta_2)=R(\theta_1+\theta_2)$가 지수법칙의 구체적 사례.

## supplement
노션 정리 문서를 거의 그대로 옮겼습니다 (표현만 카드 형식에 맞춤).
