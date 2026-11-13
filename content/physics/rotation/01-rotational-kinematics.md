---
id: phys-rot-rotational-kinematics
title_ko: "회전 운동의 기술과 직선 운동 대응"
title_en: "Rotational kinematics"
question: "각변위·각속도·각가속도와 선속도·접선 가속도·구심 가속도의 관계는?"
tags: [각속도, 각가속도, 라디안, 접선 가속도, 구심 가속도, angular velocity, angular acceleration, centripetal acceleration]
importance: 3
related: [phys-rot-centripetal-force, phys-rot-torque, phys-mech-uniform-acceleration]
source: "book:BLIS편입 일반물리 6-02, 6-10"
verified: false
---

## formula
$$
s = r\theta, \qquad v = r\omega, \qquad a_t = r\alpha, \qquad a_c = \frac{v^2}{r} = r\omega^2
$$

$$
\omega = \omega_0 + \alpha t, \qquad \theta = \omega_0t + \frac{1}{2}\alpha t^2, \qquad \omega^2 - \omega_0^2 = 2\alpha\theta
$$

## conditions
- 각은 라디안. 회전 방향은 오른손 엄지가 축이 되게 (반시계 방향이 +).
- 둘째 줄은 각가속도 $\alpha$가 일정할 때. 등가속도 공식에서 $x \to \theta$, $v \to \omega$, $a \to \alpha$.

## explanation
### 쉽게 말하면
회전 운동은 직선 운동의 공식을 그대로 쓰되 글자만 바꾼다. 둘을 잇는 다리는 반지름 $r$ 하나다.

### 가속도 두 개를 구분
- 접선 가속도 $a_t = r\alpha$: 속력을 바꾼다 (돌림힘이 만든다).
- 구심 가속도 $a_c = \dfrac{v^2}{r}$: 방향을 바꾼다 (구심력이 만든다). 등속 원운동에도 있다.
- 전체 가속도의 크기는 $\sqrt{a_t^2 + a_c^2}$.

### 강체에서는
모든 점의 각속도가 같다. 선속도는 축에서 멀수록 크다 ($v = r\omega$).

## supplement
교재 내용을 옮기고, 쉬운 설명·스토리는 Claude가 추가했습니다.
