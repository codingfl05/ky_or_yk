---
id: prob-calc-mv-ellipse-major-axis-lagrange
title_ko: "곡면과 평면의 교선 타원의 장축 길이 (라그랑주 승수 2개)"
source: "BLIS 다변수 강의 29번"
difficulty: 2
tags: [라그랑주 승수, 교선, 타원, 장축, 최대 거리, Lagrange multiplier, ellipse, major axis, intersection]
related: [calc-mv-lagrange]
images: []
verified: false
---

## problem
곡면 $x^2+y^2-z^2=1$과 평면 $3x-5z=0$의 교선은 타원이다. 이 타원의 장축의 길이를 구한다.

## answer
$\dfrac{\sqrt{34}}{2}$ (반장축 $d=\dfrac{\sqrt{34}}{4}$, 단축은 $2$)

## key-idea
- 곡면·평면 모두 원점 대칭 → 교선 타원의 중심은 원점 → 반장축 = 원점에서 타원 위 점까지 거리의 최댓값 $d$, 장축 $=2d$
- 거리 대신 제곱을 최대화: $f=x^2+y^2+z^2$, 조건 $g=x^2+y^2-z^2=1$, $h=3x-5z=0$ → 조건 2개짜리 라그랑주 승수 $\nabla f=\lambda\nabla g+\mu\nabla h$
- (지름길) 평면으로 $z=\dfrac{3}{5}x$를 대입하면 $\dfrac{16}{25}x^2+y^2=1$, $f=1+\dfrac{18}{25}x^2$ → $y=0$, $x^2=\dfrac{25}{16}$에서 최대 $f=\dfrac{34}{16}$

## supplement
강의 화면에는 라그랑주 승수 세팅까지만 보여서, 답과 대입 지름길은 Claude가 계산해 보완했습니다 (최솟값 $d=1$은 $x=0$일 때로, 단축 $2$와도 맞음). 출처 이름은 화면의 BLIS 로고와 문제 번호로 적었습니다.
