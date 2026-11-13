---
id: prob-phys-em-current-sheet-field-in-plane
title_ko: "폭 L인 무한 도체판 옆 같은 평면 위 점의 자기장"
source: "문제 166 (교재명 미상)"
difficulty: 2
tags: [자기장, 도체판, 면전류, 직선 도선, 미소 요소, 적분, magnetic field, current sheet, infinite wire, integration]
related: [phys-em-infinitesimal-elements, phys-em-biot-savart]
images: []
verified: false
---

## problem
폭 $L$, 길이 무한인 얇은 도체판에 총 전류 $i$가 길이 방향으로 균일하게 흐른다. 판과 같은 평면 위, 판의 가장자리에서 $d$만큼 떨어진 점 $P$의 자기장 크기를 구한다.

## answer
$B_P = \dfrac{\mu_0 i}{2\pi L}\ln\dfrac{L+d}{d}$

## key-idea
- 판을 폭 $dr$인 가는 띠로 쪼갬 → 각 띠 = 무한 직선 도선, $dB = \dfrac{\mu_0\,di}{2\pi r}$ (공식을 아는 모양으로 쪼개는 게 출발점)
- 띠 하나의 전류는 폭에 비례: $dr : di = L : i$ → $di = \dfrac{i}{L}\,dr$, $P$까지 거리 $r$은 $d$부터 $L+d$까지
- 모든 띠의 $dB$ 방향이 같음 (같은 평면, 같은 쪽) → 크기를 그냥 적분: $\dfrac{\mu_0 i}{2\pi L}\displaystyle\int_d^{L+d}\dfrac{dr}{r}$

## mistakes
쪼개서 더하는 미소 요소($d$~) 개념이 약함 (본인 메모). 순서로 기억: ① 아는 공식이 있는 모양으로 쪼갠다 ② 조각의 양($di$, $dq$)을 적분 변수($dr$)로 바꾼다 (비율로) ③ 조각에서 $P$까지 거리를 적분 변수로 쓴다 ④ 방향이 모두 같은지 확인하고 (다르면 성분으로) 적분 구간을 정한다.

## supplement
mistakes의 ①~④ 순서는 풀이 흐름을 정리해 보완한 것입니다.
