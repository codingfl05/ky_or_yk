---
id: la-gs-map-matrix-correspondence
title_ko: "선형사상과 행렬의 대응"
title_en: "Correspondence between linear maps and matrices"
tags: [선형사상, 행렬, 대응, linear map, matrix]
importance: 2
related: [la-dec-standard-matrix, la-gs-matrix-representation]
source: "notion:선대 06. 일반 벡터공간과 선형사상 (22~25강)"
verified: false
---

## formula
$$
L_A(X)=AX
$$

$$
L:K^n\to K^m \implies L=L_A \text{ for a unique } A
$$

$$
L_{A+B}=L_A+L_B, \quad L_{cA}=cL_A
$$

$$
L_B\circ L_A = L_{BA}
$$

## explanation
"선형사상"과 "행렬"은 같은 대상을 보는 두 관점 — 추상적인 선형사상 문제를 항상 행렬 계산으로 바꿔 풀 수 있다 (합성 순서 주의: 먼저 적용하는 쪽이 오른쪽).

### 문제풀이 포인트
$\ker L_A = \operatorname{Null}(A)$(동차 연립방정식의 해집합) — 연립방정식·rank 계산 기법을 선형사상 문제에 그대로 적용.

## supplement
노션 정리 문서를 거의 그대로 옮겼습니다 (표현만 카드 형식에 맞춤).
