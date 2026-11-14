---
id: la-pq-orthonormal-coordinates
title_ko: "직교기저에서의 좌표"
title_en: "Coordinates in an orthogonal basis"
tags: [좌표, 직교기저, 정규직교기저, coordinates, orthonormal basis]
importance: 2
related: [la-vs-basis-coordinates, la-pq-projection-subspace]
source: "notion:선대 03. 사영과 이차형식 (13~15강)"
verified: false
---

## formula
$$
u = \sum_i \frac{u\cdot v_i}{\|v_i\|^2}v_i \ (\text{orthogonal})
$$

$$
u = \sum_i \langle u,v_i\rangle v_i \ (\text{orthonormal})
$$

## explanation
### 문제풀이 포인트
기저변환에서 "좌표를 구하려면 연립방정식(가우스 소거)을 풀어야 했던 것"이, 정규직교기저에서는 **내적 계산만으로 즉시 좌표가 나온다** — 정규직교기저를 쓰는 결정적 이유. 시험에서 "직교기저인지 먼저 확인"하는 습관이 계산량을 절반 이하로 줄인다.

## supplement
노션 정리 문서를 거의 그대로 옮겼습니다 (표현만 카드 형식에 맞춤).
