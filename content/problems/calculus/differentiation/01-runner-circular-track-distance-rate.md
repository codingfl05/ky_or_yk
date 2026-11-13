---
id: prob-calc-diff-runner-circular-track-distance-rate
title_ko: "원형 트랙을 달리는 주자와 친구 사이 거리의 변화율"
source: "BLIS 강의 37번"
difficulty: 2
tags: [관련 변화율, 코사인 법칙, 각속도, 원운동, related rates, law of cosines, angular speed]
related: [calc-diff-related-rates]
images: []
verified: false
---

## problem
반지름 $200\,\text{m}$인 원형 트랙을 $5\,\text{m/s}$로 달리는 주자와, 트랙 중심에서 $400\,\text{m}$ 떨어진 친구가 있다. 둘 사이 거리가 $300\,\text{m}$일 때 거리의 변화율을 구한다.

## answer
$\left|\dfrac{ds}{dt}\right| = \dfrac{5\sqrt{15}}{4}\,\text{m/s}\ (\approx 4.84\,\text{m/s})$

## key-idea
- 중심 $O$, 주자 $B$, 친구 $A$의 삼각형에서 두 변($200$, $400$)은 고정, 끼인각 $\theta$만 변함 → 코사인 법칙 $s^2 = 200^2+400^2-2\cdot200\cdot400\cos\theta$
- 속력 → 각속도: $v = r\dfrac{d\theta}{dt}$ → $\dfrac{d\theta}{dt} = \dfrac{5}{200} = \dfrac{1}{40}\,\text{rad/s}$
- $t$로 미분 $2s\dfrac{ds}{dt} = 2\cdot200\cdot400\sin\theta\,\dfrac{d\theta}{dt}$ → $s=300$에서 $\cos\theta=\dfrac{11}{16}$, $\sin\theta=\dfrac{3\sqrt{15}}{16}$ 대입

## supplement
강의 화면에는 그림까지만 있어서 풀이와 답은 Claude가 계산해 보완했습니다. 부호(멀어지는지 가까워지는지)는 달리는 방향에 따라 달라서 크기로 적었습니다. 출처는 화면의 BLIS 로고와 문제 번호로 적었습니다.
