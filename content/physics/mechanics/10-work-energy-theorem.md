---
id: phys-mech-work-energy-theorem
title_ko: "일-운동 에너지 정리"
title_en: "Work-kinetic energy theorem"
question: "알짜힘이 한 일과 운동 에너지의 관계는?"
tags: [일-운동 에너지 정리, 운동 에너지, 알짜일, work-energy theorem, kinetic energy]
importance: 3
related: [phys-mech-work, phys-mech-uniform-acceleration, phys-mech-energy-conservation]
source: "book:BLIS편입 일반물리 3-02, 3-06~08"
verified: false
---

## formula
$$
W_{\text{net}} = \Delta K = \frac{1}{2}mv_f^2 - \frac{1}{2}mv_i^2
$$

## conditions
- $W_{\text{net}}$은 알짜힘이 한 일 = 모든 힘이 한 일의 합.

## explanation
### 쉽게 말하면
운동 에너지 $K = \frac{1}{2}mv^2$은 "지금 당장 쓸 수 있는 돈"이다. 모든 힘이 한 일을 다 더하면 그만큼 이 돈이 늘거나 준다.

- 힘이 일정하면 $W = ma\,\Delta x$이므로 $v_f^2 - v_i^2 = 2a\Delta x$. 등가속도 공식의 넷째 식이 여기서 나온다.
- 시간이 필요 없고 거리와 속력만 물을 때 가장 빠른 도구.
- 에너지는 스칼라라서 방향 정보는 없다. 속력은 알아도 운동 방향은 따로 따져야 한다.

### 한 번 따라 하기: 마찰로 멈추는 거리
속력 $v$로 미끄러지던 물체가 운동 마찰(계수 $\mu_k$)로 멈출 때까지 간 거리 $d$.
- 일을 하는 힘은 마찰력뿐이고, 운동 반대 방향이라 음의 일: $W = -\mu_kmg\,d$.
- 운동 에너지 변화: $0 - \dfrac{1}{2}mv^2$.

$$
-\mu_kmg\,d = -\frac{1}{2}mv^2 \ \Rightarrow\ d = \frac{v^2}{2\mu_kg}
$$

속력이 2배면 멈추는 거리는 4배다. 시간을 구하지 않고 바로 거리가 나온다.

### 유도의 한 줄 풀이
아래 유도에서 $\dfrac{dv}{dt}\,dx$를 $v\,dv$로 바꾼 것은 순서만 바꿔 묶은 것이다: $\dfrac{dv}{dt}\,dx = dv\cdot\dfrac{dx}{dt} = v\,dv$.

## derivation
$$
\begin{aligned}
&W = \int F\,dx = \int m\frac{dv}{dt}\,dx \\
&\quad {}= \int m\,v\,dv = \frac{1}{2}mv_f^2 - \frac{1}{2}mv_i^2
\end{aligned}
$$

## supplement
교재 내용을 옮기고, 쉬운 설명·스토리는 Claude가 추가했습니다. 쉬운 설명·그림 보강: 마찰로 멈추는 거리 계산 예와 유도 보충.
