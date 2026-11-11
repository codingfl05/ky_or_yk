---
id: prob-phys-em-rotating-charged-rings-axis
title_ko: "회전하는 두 동심 대전 고리의 축 위 전위·전기장·자기장"
source: "문제 159 (교재명 미상)"
difficulty: 2
tags: [대전 고리, 전위, 전기장, 자기장, 회전 전하, 원형 전류, charged ring, potential, rotating charge, current loop]
related: [phys-em-infinitesimal-elements, phys-em-symmetry-cancellation]
images: []
verified: false
---

## problem
$xy$평면에 중심이 원점인 얇은 원형 고리 두 개(반지름 $a$에 $-q$, 반지름 $b$에 $+q$, 균일 분포)가 $z$축을 축으로 각속력 $\omega$로 회전한다. $z$축 위 점 $A(0,0,z)$에서 (1) 전위 (2) 전기장 (3) 자기장을 구한다 (무한대에서 전위 0).

## answer
- (1) $V_A = \dfrac{q}{4\pi\varepsilon_0}\left(\dfrac{1}{\sqrt{b^2+z^2}} - \dfrac{1}{\sqrt{a^2+z^2}}\right)$
- (2) $E_z = \dfrac{qz}{4\pi\varepsilon_0}\left(\dfrac{1}{(b^2+z^2)^{3/2}} - \dfrac{1}{(a^2+z^2)^{3/2}}\right)$
- (3) $B_z = \dfrac{\mu_0 q\omega}{4\pi}\left(\dfrac{b^2}{(b^2+z^2)^{3/2}} - \dfrac{a^2}{(a^2+z^2)^{3/2}}\right)$ ($+z$ 방향 기준)

## key-idea
- (1) 고리 위 모든 $dq$가 $A$에서 같은 거리 $\sqrt{R^2+z^2}$ → $V=\int \dfrac{dq}{4\pi\varepsilon_0 r}$ 에서 거리가 상수라 적분 밖으로 → 두 고리 전위를 그냥 더한다
- (2) 전기장은 $dq$ 적분 / 가우스 / 전위 미분 중 선택 → 축 위라 $z$에 대한 함수 $V(z)$가 이미 있음 → $E_z = -\dfrac{dV}{dz}$
- (3) 전류가 따로 주어지지 않음 → 회전하는 전하 = 전류, $i = \dfrac{q}{T} = \dfrac{q\omega}{2\pi}$ → 원형 전류 축 위 자기장 $B = \dfrac{\mu_0 i R^2}{2(R^2+z^2)^{3/2}}$ ($dB\cos\theta$ 성분만 남음) → 부호가 반대인 두 고리이므로 $B_b - B_a$
