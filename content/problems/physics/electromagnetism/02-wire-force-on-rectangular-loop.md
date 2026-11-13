---
id: prob-phys-em-wire-force-on-rectangular-loop
title_ko: "무한 직선 도선이 직사각형 고리에 주는 알짜 자기력"
source: "문제 165 (교재명 미상)"
difficulty: 2
tags: [자기력, 평행 도선, 직사각형 고리, 직선 도선 자기장, 미소 요소, magnetic force, parallel currents, current loop]
related: [phys-em-infinitesimal-elements, phys-em-symmetry-cancellation, phys-em-force-on-current]
images: []
verified: false
---

## problem
전류 $i_1$이 흐르는 무한 직선 도선과 같은 평면에, 전류 $i_2$가 흐르는 직사각형 고리(도선과 나란한 변의 길이 $L$, 수직인 변의 길이 $b$, 가까운 변까지 거리 $a$)가 있다. 고리가 받는 알짜 자기력의 크기를 구한다.

## answer
$F = \dfrac{\mu_0 i_1 i_2 L}{2\pi}\left(\dfrac{1}{a} - \dfrac{1}{a+b}\right)$ (가까운 변이 끌리는 쪽이 더 커서 도선 쪽으로)

## key-idea
- 직선 도선의 자기장 $B=\dfrac{\mu_0 i_1}{2\pi r}$ → 도선과 나란한 두 변은 각각 거리 $r$이 일정하므로 $F = i_2 L B$를 그대로 ($r=a$, $r=a+b$)
- 수직인 두 변은 거리마다 $B$가 달라 원래는 $dF$로 쪼개야 함 → 그런데 두 변의 전류가 반대 방향이라 같은 거리의 $dF$끼리 상쇄 → 적분할 필요 없음
- 나란한 두 변은 전류가 반대라 힘도 반대 (같은 방향 전류는 인력, 반대는 척력) → $F_{\text{net}} = F_1 - F_4$

## mistakes
쪼개서 더하는 미소 요소($d$~) 개념이 약함 (본인 메모). 이 문제에서는 수직인 두 변이 그 경우: 거리가 멀수록 $dF$가 약해지지만, 두 변이 대칭이라 계산 전에 상쇄로 지울 수 있다는 것을 먼저 보는 것이 핵심.
