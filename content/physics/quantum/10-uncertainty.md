---
id: phys-qm-uncertainty
title_ko: "하이젠베르크의 불확정성 원리"
title_en: "Heisenberg uncertainty principle"
question: "위치와 운동량, 에너지와 시간의 불확정성 사이의 관계는?"
tags: [불확정성 원리, 하이젠베르크, 위치 불확정성, 운동량 불확정성, uncertainty principle, Heisenberg]
importance: 3
related: [phys-qm-free-electron, phys-qm-infinite-well, phys-qm-de-broglie]
source: "book:BLIS편입 일반물리 22-24"
verified: false
---

## formula
$$
\Delta x\,\Delta p_x \ge \hbar
$$

$$
\Delta E\,\Delta t \ge \hbar
$$

## conditions
- $\Delta x$, $\Delta p_x$: 같은 방향의 위치와 운동량의 불확정성. $y$, $z$ 방향도 각각 같은 식.
- $\Delta E$, $\Delta t$: 에너지의 불확정성과 그 상태가 유지되는 시간.
- 우변은 교재(할리데이)를 따라 $\hbar$로 적었다. 불확정성을 표준 편차로 엄밀하게 정의하면 하한은 $\hbar/2$다. 문제에서 주는 꼴을 따른다.

## explanation
### 먼저 떠올릴 것
- 자유 전자: 운동량은 $\hbar k$ 하나로 정확하지만($\Delta p = 0$), 확률 밀도가 어디서나 같아 위치는 전혀 모른다($\Delta x = \infty$).
- 무한 우물의 전자: 위치는 $0 \sim L$ 안에 있다($\Delta x \approx L$). 대신 운동량은 $+\hbar k$(오른쪽)인지 $-\hbar k$(왼쪽)인지 모른다($\Delta p \approx 2\hbar k$).

### 쉽게 말하면
위치와 운동량을 동시에 정확히 정할 수는 없다. 한쪽을 좁히면 다른 쪽이 퍼진다.
- 측정 기술이 부족해서가 아니다. 입자가 파동이기 때문에 생기는 본질적인 한계다.
- 파동을 좁은 곳에 모으려면(위치를 정확히) 여러 파장의 파동을 섞어야 하고, 파장이 여럿이면 운동량($h/\lambda$)이 여럿이 된다.

### 한 번 따라 하기
전자를 폭 $0.1\,\text{nm}$(원자 크기) 안에 가두면 운동량의 불확정성은 적어도

$$
\Delta p \ge \frac{\hbar}{\Delta x} = \frac{1.05 \times 10^{-34}}{1 \times 10^{-10}} \approx 1 \times 10^{-24}\,\text{kg}\cdot\text{m/s}
$$

속력으로 바꾸면 $\Delta v = \Delta p/m \approx 10^6\,\text{m/s}$. 좁게 가둘수록 입자는 더 빨리 움직일 수밖에 없다. 무한 우물의 바닥 상태 에너지가 0이 될 수 없는 이유다.

### 자주 틀리는 포인트
- 서로 다른 방향끼리는 제한이 없다. $\Delta x$와 $\Delta p_y$는 동시에 작을 수 있다.
- 좁게 가둘수록 최소 에너지가 커진다 ($E_1 \propto 1/L^2$).
- 에너지-시간 관계: 들뜬 상태에 머무는 시간이 짧을수록 그 준위의 에너지 폭이 넓다 (스펙트럼선이 굵어진다).

## supplement
교재 내용을 옮기고, 숫자 예와 $\hbar/2$에 대한 설명은 Claude가 추가했습니다.
