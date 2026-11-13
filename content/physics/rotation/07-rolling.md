---
id: phys-rot-rolling
title_ko: "구름 운동"
title_en: "Rolling motion"
question: "미끄러지지 않고 구르는 물체의 속도 관계, 운동 에너지, 빗면 가속도는?"
tags: [구름 운동, 미끄러짐 없이, 정지 마찰력, 빗면, rolling, smooth rolling, incline]
importance: 3
related: [phys-rot-moment-of-inertia, phys-rot-rotational-energy, phys-rot-parallel-axis]
source: "book:BLIS편입 일반물리 6-14~22"
verified: false
---

## formula
$$
v_{\text{com}} = R\omega, \qquad K = \frac{1}{2}Mv_{\text{com}}^2 + \frac{1}{2}I_{\text{com}}\omega^2 = \frac{1}{2}I_P\omega^2
$$

$$
a_{\text{com}} = \frac{g\sin\theta}{1 + I_{\text{com}}/(MR^2)} \quad (\text{incline})
$$

## conditions
- 미끄러지지 않을 때 (smooth rolling). 이때 바닥과 닿는 점의 속도는 0이고, 정지 마찰력은 일을 하지 않아 역학적 에너지가 보존된다.
- $I_P = I_{\text{com}} + MR^2$: 바닥 접점을 축으로 본 관성모멘트.

## explanation
### 쉽게 말하면
구름 = (질량 중심의 직선 운동) + (질량 중심을 축으로 한 회전). 두 운동을 따로 구해서 더한다.

- 맨 위 점의 속도 $2v_{\text{com}}$, 중심 $v_{\text{com}}$, 바닥 접점 $0$.
- 같은 순간을 "바닥 접점을 축으로 한 순수 회전"으로 봐도 된다 (평행축 정리로 에너지가 같음).

### 빗면 경주
$\dfrac{I_{\text{com}}}{MR^2}$이 작을수록 빨리 내려온다. 질량·반지름과 무관하다.
- 속이 찬 구 ($\frac{2}{5}$) > 원판 ($\frac{1}{2}$) > 구껍질 ($\frac{2}{3}$) > 고리 ($1$).
- 같은 높이 $h$에서 굴러 내려온 속력: $v = \sqrt{\dfrac{2gh}{1 + I_{\text{com}}/(MR^2)}}$. 미끄러지는(마찰 없는) 물체보다 느리다. 에너지 일부가 회전에 쓰이기 때문.

### 마찰력의 역할
정지 마찰력이 돌림힘 $Rf_s = I\alpha$를 만들어 회전을 일으킨다. 마찰이 전혀 없으면 구르지 못하고 미끄러진다.

## story
경사로에서 공과 고리를 함께 굴리면 공이 이긴다. 같은 높이에서 받은 에너지를 고리는 회전하는 데 많이 써 버려서 앞으로 나아갈 몫이 적다.

## supplement
교재 내용을 옮기고, 쉬운 설명·스토리는 Claude가 추가했습니다.
