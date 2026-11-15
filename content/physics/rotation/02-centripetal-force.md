---
id: phys-rot-centripetal-force
title_ko: "구심력과 원운동"
title_en: "Centripetal force"
question: "원운동하는 물체의 구심력은 어떻게 구하고, 연직 원운동의 조건은?"
tags: [구심력, 원운동, 연직 원운동, 원뿔 진자, centripetal force, circular motion]
importance: 3
related: [phys-rot-rotational-kinematics, phys-mech-energy-conservation, phys-mech-orbits-kepler]
source: "book:BLIS편입 일반물리 6-10"
verified: false
---

## formula
$$
F_c = \frac{mv^2}{r} = mr\omega^2
$$

$$
\begin{aligned}
&\text{vertical loop top: } mg + N = \frac{mv^2}{r} \\
&\quad {}\Rightarrow v_{\text{top}} \ge \sqrt{gr}
\end{aligned}
$$

## conditions
- 구심력은 새로운 힘이 아니라 원의 중심 방향 알짜힘의 이름이다 (장력, 중력, 마찰력, 수직항력이 그 역할을 함).

## explanation
::fig vertical-loop | 연직 원운동: 꼭대기에서는 중력과 장력이 모두 중심(아래)을 향하고, 바닥에서는 장력이 중력을 이기고 중심(위)을 향한다.

### 왜 등속인데 힘이 필요한가
속도는 빠르기와 방향을 함께 가진 양이다. 원운동은 빠르기가 같아도 방향이 계속 바뀌므로 속도가 변하고 있고, 속도가 변하면 가속도가 있다. 그 가속도는 항상 원의 중심을 향하고 크기가 $\dfrac{v^2}{r}$이다. 뉴턴 제2법칙으로 알짜힘도 중심을 향해 $\dfrac{mv^2}{r}$이어야 한다.

### 쉽게 말하면
원운동을 하려면 누군가 계속 중심 쪽으로 당겨 줘야 한다. 그 "누군가"를 찾아 중심 방향 성분을 더한 것이 $\dfrac{mv^2}{r}$과 같다고 놓는다.

### 대표 상황
- 줄에 매달아 수평으로 돌림: 장력.
- 평평한 커브길: 정지 마찰력 → 최대 속력 $\sqrt{\mu_sgr}$.
- 원뿔 진자: 장력의 수평 성분이 구심력, 수직 성분이 중력과 평형.
- 연직 원운동 꼭대기: 중력 + (줄 장력 또는 레일의 수직항력). 장력·수직항력이 0이 되는 순간이 떨어지기 직전 → $v = \sqrt{gr}$. 바닥에서 필요한 속력은 에너지 보존으로 $\sqrt{5gr}$.

### 흔한 실수
원심력을 그림에 같이 그리고 다시 구심력을 더하는 것. 바깥(관성) 기준계에서는 원심력이 없다.

### 한 번 따라 하기: 바닥에서 $\sqrt{5gr}$
꼭대기를 간신히 지나려면 꼭대기 속력이 $\sqrt{gr}$이어야 한다. 바닥과 꼭대기의 높이 차는 $2r$이므로 역학적 에너지 보존(바닥의 운동 에너지 = 꼭대기의 운동 에너지 + 퍼텐셜 에너지)으로

$$
\frac{1}{2}mv_{\text{bottom}}^2 = \frac{1}{2}m(gr) + mg(2r)
$$

$$
v_{\text{bottom}} = \sqrt{5gr}
$$

## story
줄에 돌을 매달아 돌리다가 줄을 놓으면 돌은 바깥으로 튀어 나가는 게 아니라 그 순간의 접선 방향으로 곧게 날아간다. 줄이 계속 중심 쪽으로 당겨 주었기 때문에 원을 그리고 있었을 뿐이다.

## supplement
교재 내용을 옮기고, 쉬운 설명·스토리는 Claude가 추가했습니다. 쉬운 설명·그림 보강: 등속 원운동에 힘이 필요한 이유, √(5gr) 유도, 그림(vertical-loop).
