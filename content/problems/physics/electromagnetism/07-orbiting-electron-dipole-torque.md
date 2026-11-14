---
id: prob-phys-em-orbiting-electron-dipole-torque
title_ko: "원궤도를 도는 전자의 자기쌍극자모멘트와 돌림힘"
source: "문제 81 (교재명 미상)"
difficulty: 1
tags: [자기 쌍극자 모멘트, 돌림힘, 등가 전류, 전자 궤도, magnetic dipole moment, torque, equivalent current, orbiting electron]
related: [phys-em-magnetic-dipole]
images: [prob-phys-em-orbiting-electron-dipole-torque-1.webp]
verified: false
---

## problem
전자가 반지름 $r = 5.0\times10^{-11}\,\text{m}$인 원궤도를 $v = 2.0\times10^{6}\,\text{m/s}$로 돈다. 궤도면과 나란한 $B = 1.0\times10^{-2}\,\text{T}$가 걸릴 때 (a) 자기쌍극자모멘트의 크기, (b) 궤도에 작용하는 돌림힘의 크기를 구한다.

## answer
(a) $\mu = 8.0\times10^{-24}\,\text{A}\cdot\text{m}^2$, (b) $\tau = 8.0\times10^{-26}\,\text{N}\cdot\text{m}$

## key-idea
- 도는 전자 = 한 주기 $T = \dfrac{2\pi r}{v}$마다 전하 $e$가 지나가는 고리 전류 → $I = \dfrac{e}{T} = \dfrac{ev}{2\pi r}$
- $\mu = IA = \dfrac{ev}{2\pi r}\cdot\pi r^2 = \dfrac{evr}{2}$
- $\boldsymbol{\mu}$는 궤도면에 수직, $\mathbf{B}$는 궤도면과 나란함 → $\theta = 90^\circ$ → $\tau = \mu B$

## mistakes
"궤도면과 나란한 자기장"을 $\theta = 0$으로 읽기 쉽다. $\theta$는 궤도면이 아니라 $\boldsymbol{\mu}$(면의 법선)와 $\mathbf{B}$ 사이의 각이다. 면과 나란하면 $\theta = 90^\circ$로 돌림힘이 최대, 면에 수직이면 $\theta = 0$으로 돌림힘이 0이다. 전자는 음전하라 전류 방향은 속도와 반대지만, 크기를 묻는 문제에서는 상관없다.

## supplement
문제·정답·해설은 사용자가 준 자료 그대로 요약했습니다. 그림은 사용자가 준 것으로, Claude가 방향(전자 속도와 반대인 전류, 오른손 규칙의 $\boldsymbol{\mu}$, $\boldsymbol{\mu}$를 $\mathbf{B}$ 쪽으로 눕히는 돌림힘)을 확인했습니다. mistakes는 Claude가 적었습니다.
