---
id: phys-wave-interference
title_ko: "파동의 간섭과 위상자"
title_en: "Interference of waves"
question: "같은 두 파동의 합성 진폭과 경로차에 따른 보강·상쇄 조건은?"
tags: [간섭, 보강 간섭, 상쇄 간섭, 경로차, 위상차, 위상자, 중첩, interference, path difference, phase difference, phasor, superposition]
importance: 3
related: [phys-wave-traveling-wave, phys-wave-standing-wave]
source: "book:BLIS편입 일반물리 10-12~16"
verified: false
---

## formula
$$
y = y_1 + y_2 = \left(2y_m\cos\frac{\phi}{2}\right)\sin\left(kx - \omega t + \frac{\phi}{2}\right)
$$

$$
\phi = \frac{2\pi\,\Delta L}{\lambda}, \qquad \text{constructive: } \Delta L = m\lambda, \qquad \text{destructive: } \Delta L = \left(m + \frac{1}{2}\right)\lambda
$$

## conditions
- 진폭·파장·진동수가 같고 같은 위상으로 출발한 두 파동. $\Delta L$은 두 파원에서 그 점까지의 경로차, $m = 0, 1, 2, \ldots$
- 파원끼리 처음부터 위상차가 있으면 그것까지 더한다.

## explanation
### 쉽게 말하면
파동이 만나면 그냥 더한다 (중첩). 지나간 뒤에는 서로 아무 영향도 남기지 않는다.

- 위상이 같으면 진폭 2배 (보강), 반대면 0 (상쇄). 그 사이는 $2y_m\left|\cos\frac{\phi}{2}\right|$.
- 경로차가 반 파장 늘 때마다 보강과 상쇄가 번갈아 온다.

### 위상자
진폭을 길이, 위상을 각으로 하는 화살표로 파동을 그리고 벡터처럼 더한다. 진폭이 다르거나 파동이 세 개 이상일 때 특히 편하다.
- 같은 진폭 $N$개가 위상이 $\phi$씩 어긋나면 화살표가 다각형을 그린다. 닫히면(한 바퀴) 합이 0.
- 예: 4개가 $90^\circ$씩 어긋나면 정사각형으로 닫혀 0, $180^\circ$씩이면 $+,-,+,-$로 0.

## story
두 사람이 같은 박자로 그네를 밀면 크게 흔들리고, 정반대 박자로 밀면 서로 힘이 상쇄돼 그네가 멈춘다. 박자가 얼마나 어긋났는지(위상차)는 둘이 그네까지 온 거리 차(경로차)로 정해진다.

## supplement
교재 내용을 옮기고, 쉬운 설명·스토리는 Claude가 추가했습니다.
