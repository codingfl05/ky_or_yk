---
id: prob-phys-mech-collision-then-shm-amplitude
title_ko: "완전 비탄성 충돌 후 한 덩어리 단진동의 진폭"
source: "BLIS 진단 평가 3회 1번"
difficulty: 2
tags: [단진동, 진폭, 완전 비탄성 충돌, 운동량 보존, 역학적 에너지, simple harmonic motion, amplitude, inelastic collision, momentum]
related: []
images: []
verified: false
---

## problem
마찰 없는 수평면에서 용수철(상수 $k$)에 매달려 평형 위치에 정지한 물체 A(질량 $m$)에 물체 B(질량 $m$)가 속력 $v$로 충돌해 한 덩어리가 되어 단진동한다. 단진동의 진폭을 구한다 (오지선다).

## answer
$x_m = \sqrt{\dfrac{mv^2}{2k}}$ (②)

## key-idea
- 충돌 순간은 운동량 보존 (붙으므로 에너지는 보존 안 됨): $mv = 2m\,v'$ → $v' = \dfrac{v}{2}$
- 충돌 직후 평형 위치 → 용수철 에너지 0, 운동 에너지가 전부 → 단진동 에너지 $E = \dfrac{1}{2}kx_m^2 = \dfrac{1}{2}(2m)\left(\dfrac{v}{2}\right)^2$
- 정리하면 $x_m^2 = \dfrac{mv^2}{2k}$

## mistakes
충돌 전 B의 운동 에너지 $\dfrac{1}{2}mv^2$를 그대로 쓰면 ③ $\sqrt{\dfrac{mv^2}{k}}$이 나와 틀린다. 달라붙는 충돌에서는 운동 에너지의 절반이 사라진다.

## supplement
mistakes는 이 유형의 흔한 함정을 Claude가 적은 것입니다. 관련 공식 카드(단진동, 운동량 보존)가 아직 없어 related는 비워 두었습니다. 단원은 역학에 넣었습니다.
