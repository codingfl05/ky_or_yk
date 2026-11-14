---
id: phys-rot-rotational-energy
title_ko: "회전 운동 에너지, 일, 일률 (직선-회전 대응표)"
title_en: "Rotational kinetic energy, work and power"
question: "회전 운동 에너지와 돌림힘이 한 일, 일률은? 직선 운동과의 대응은?"
tags: [회전 운동 에너지, 돌림힘이 한 일, 일률, 대응 관계, rotational kinetic energy, work, power]
importance: 3
related: [phys-rot-moment-of-inertia, phys-rot-rolling, phys-mech-power]
source: "book:BLIS편입 일반물리 6-12~14"
verified: false
---

## formula
$$
K = \frac{1}{2}I\omega^2
$$

$$
W = \int\tau\,d\theta = \Delta K
$$

$$
P = \tau\omega
$$

## conditions
- 고정축 회전. 축이 움직이는 구름 운동은 병진 운동 에너지를 더한다.

## explanation
### 대응표
| 직선 | 관계 | 회전 |
|---|---|---|
| 변위 $x$ | $x = r\theta$ | 각변위 $\theta$ |
| 속도 $v$ | $v = r\omega$ | 각속도 $\omega$ |
| 가속도 $a$ | $a = r\alpha$ | 각가속도 $\alpha$ |
| 질량 $m$ | $I = \sum mr^2$ | 관성모멘트 $I$ |
| 힘 $F = ma$ | $\tau = rF$ | 돌림힘 $\tau = I\alpha$ |
| 운동 에너지 $\frac{1}{2}mv^2$ | | $\frac{1}{2}I\omega^2$ |
| 일 $\int F\,dx$ | | $\int\tau\,d\theta$ |
| 일률 $Fv$ | | $\tau\omega$ |
| 운동량 $p = mv$ | $L = rp$ | 각운동량 $L = I\omega$ |

물리 법칙은 하나다. 직선에서 아는 것을 표의 오른쪽으로 옮기면 된다.

## supplement
교재 내용을 옮기고, 쉬운 설명·스토리는 Claude가 추가했습니다.
