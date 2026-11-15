---
id: phys-rel-energy
title_ko: "질량-에너지와 상대론적 에너지"
title_en: "mass-energy equivalence and relativistic energy"
question: "정지 에너지, 전체 에너지, 운동 에너지, 운동량 사이의 관계식은?"
tags: [질량 에너지 등가, 정지 에너지, 상대론적 에너지, 상대론적 운동 에너지, 에너지 운동량 관계, mass-energy equivalence, rest energy, relativistic kinetic energy]
importance: 3
related: [phys-rel-momentum-force, phys-mech-work-energy-theorem, phys-nuc-binding-energy]
source: "book:BLIS편입 일반물리 21-22"
verified: false
---

## formula
$$
E_0 = mc^2, \qquad E = \gamma mc^2
$$

$$
K = E - E_0 = (\gamma - 1)\,mc^2
$$

$$
E^2 = (pc)^2 + (mc^2)^2
$$

## conditions
- $E_0$: 정지 에너지(rest energy), $E$: 전체 에너지, $K$: 운동 에너지, $p = \gamma mv$.
- 질량과 에너지는 따로 보존되지 않고, 질량-에너지 전체가 보존된다.
- 반응에서 질량이 $\Delta M$만큼 줄면 $\Delta M c^2$의 에너지가 나온다.
- $v \ll c$이면 $K \approx \frac{1}{2}mv^2$로 돌아간다.

## explanation
::fig energy-triangle | 세 양의 관계는 직각삼각형 하나로 기억한다.

### 먼저 떠올릴 것
- 고전 역학에서 운동 에너지는 $K = \frac{1}{2}mv^2$이고, 정지한 물체의 에너지는 0으로 쳤다.
- 상대성 이론에서는 질량 자체가 에너지다. 가만히 있는 물체도 $mc^2$의 에너지를 가진다.

### 기호 풀이
- $E = E_0 + K$: 전체 에너지는 "질량이 가진 몫"과 "움직여서 생긴 몫"의 합이다.
- $E^2 = (pc)^2 + (mc^2)^2$: 속력 없이 운동량과 에너지를 바로 잇는 식. 직각삼각형의 피타고라스 정리와 같은 꼴이다.
- 그림의 각 $\theta$에 대해 $\sin\theta = \beta$, $\cos\theta = 1/\gamma$. 따라서 $pc = \beta E$.

### 단위 감각
입자 물리에서는 에너지를 $\text{eV}$로 쓴다 ($1\,\text{eV} = 1.6 \times 10^{-19}\,\text{J}$).
- 전자의 정지 에너지: $mc^2 \approx 0.511\,\text{MeV}$.
- 운동량은 $pc$를 에너지 단위로 구한 뒤 $\text{MeV}/c$로 적는다.

### 한 번 따라 하기
운동 에너지가 $0.8\,\text{MeV}$인 전자 ($mc^2 \approx 0.5\,\text{MeV}$로 어림).

1. 전체 에너지: $E = 0.5 + 0.8 = 1.3\,\text{MeV}$.
2. 운동량:

$$
pc = \sqrt{1.3^2 - 0.5^2} = \sqrt{1.44} = 1.2\,\text{MeV}
$$

따라서 $p = 1.2\,\text{MeV}/c$. ($5:12:13$ 직각삼각형)

3. $\gamma = E/mc^2 = 2.6$.

### 자주 틀리는 포인트
- 빠른 입자에 $K = \frac{1}{2}mv^2$나 $K = p^2/2m$을 쓰면 안 된다. $K = (\gamma - 1)mc^2$만 쓴다.
- 질량이 없는 광자는 $m = 0$이므로 $E = pc$.
- $\gamma m$을 "상대론적 질량"이라 부르기도 한다 ($E = m_{\text{rel}}c^2$). 문제에서 그냥 "질량"이라고 하면 정지 질량 $m$이다.

## supplement
교재 내용을 옮기고, 단위 감각, 숫자 예, $pc = \beta E$, 그림(energy-triangle)은 Claude가 추가했습니다.
