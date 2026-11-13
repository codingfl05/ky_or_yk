---
id: phys-mech-normal-friction
title_ko: "수직항력과 마찰력 (빗면)"
title_en: "Normal force and friction"
question: "정지 마찰력과 운동 마찰력은 어떻게 다르고, 빗면 위 물체는 어떻게 푸는가?"
tags: [수직항력, 마찰력, 정지 마찰력, 운동 마찰력, 빗면, normal force, friction, incline]
importance: 3
related: [phys-mech-newton-second-law, phys-mech-connected-bodies]
source: "book:BLIS편입 일반물리 2-12~14, 2-20"
verified: false
---

## formula
$$
f_s \le \mu_sN, \qquad f_k = \mu_kN
$$

$$
\text{incline: } N = mg\cos\theta, \qquad a = g\sin\theta - \mu_kg\cos\theta\ (\text{sliding down})
$$

## conditions
- 정지 마찰력은 상황에 맞춰 변하는 값이고, $\mu_sN$은 그 최댓값이다. 보통 $\mu_k < \mu_s$.
- 빗면 식은 빗면에 수직인 방향으로 다른 힘이 없을 때.

## explanation
### 수직항력은 정해진 값이 아니다
수직항력(normal force)은 바닥을 누르는 만큼 받쳐 주는 힘이다. $mg$와 같다고 외우면 안 된다. 빗면이면 $mg\cos\theta$, 비스듬히 위로 당기면 그만큼 줄고, 위로 가속하는 엘리베이터에서는 커진다. 항상 수직 방향 운동 방정식으로 구한다.

### 마찰력 판단 순서
1. 마찰이 없다고 치고 물체가 어느 쪽으로 움직이려 하는지 본다. 마찰력은 그 반대쪽.
2. 그렇게 미끄러지지 않으려고 필요한 힘을 구한다.
3. 필요한 힘 $\le \mu_sN$이면 정지 (정지 마찰력 = 필요한 힘), 크면 미끄러지고 $f = \mu_kN$.

### 빗면
축을 빗면 방향과 빗면에 수직인 방향으로 잡는다. 중력을 $mg\sin\theta$(빗면 아래 방향)와 $mg\cos\theta$(빗면을 누름)로 나눈다. 미끄러지기 시작하는 각은 $\tan\theta = \mu_s$.

## story
정지 마찰력은 눈치 보는 사람이다. 살살 밀면 살살, 세게 밀면 세게 버티다가 한계를 넘으면 포기하고 미끄러진다. 미끄러지기 시작하면 그때부터는 일정한 힘(운동 마찰력)만 낸다.

## supplement
교재 내용을 옮기고, 쉬운 설명·스토리는 Claude가 추가했습니다.
