---
id: phys-mech-gravitational-potential
title_ko: "중력 퍼텐셜 에너지와 탈출 속력"
title_en: "Gravitational potential energy and escape speed"
question: "거시적 중력 퍼텐셜 에너지와 탈출 속력은? mgh와의 관계는?"
tags: [중력 퍼텐셜 에너지, 탈출 속력, 속박, gravitational potential energy, escape speed]
importance: 3
related: [phys-mech-gravitation, phys-mech-orbits-kepler, phys-mech-conservative-potential]
source: "book:BLIS편입 일반물리 8-04~06"
verified: false
---

## formula
$$
U = -\frac{GMm}{r}, \qquad v_{\text{esc}} = \sqrt{\frac{2GM}{R}}
$$

## conditions
- 기준점: 무한히 먼 곳에서 $U = 0$. 그래서 천체 근처에서는 항상 음수 (속박 상태).
- 탈출 속력은 천체 표면에서 쏘아 올릴 때, 공기 저항 무시. 쏘는 방향과 무관.

## explanation
### mgh와 같은 것인가
같은 것을 다른 기준점에서 본 것이다. 지표면에서 $h$만큼 올라갈 때

$$
\begin{aligned}
&\Delta U = GMm\left(\frac{1}{R} - \frac{1}{R+h}\right) \\
&\quad {}\approx \frac{GMm}{R^2}h = mgh \\
&(h \ll R)
\end{aligned}
$$

높이가 지구 반지름에 비해 클 때(인공위성, 탈출)는 반드시 $-\dfrac{GMm}{r}$을 쓴다.

### 탈출 속력
무한대까지 가서 딱 멈추는 조건: $\frac{1}{2}mv^2 - \dfrac{GMm}{R} = 0$. 역학적 에너지가 0 이상이면 탈출, 음수면 속박된다.

## story
중력 우물을 떠올리자. 천체는 깊은 우물 바닥에 있고, 우물 밖(무한대)이 높이 0이다. 바닥은 음의 높이라서, 그 깊이만큼 운동 에너지를 주어야 우물 밖으로 기어 나온다.

## supplement
교재 내용을 옮기고, 쉬운 설명·스토리는 Claude가 추가했습니다.
