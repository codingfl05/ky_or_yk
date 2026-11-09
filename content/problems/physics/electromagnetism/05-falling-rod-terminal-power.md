---
id: prob-phys-em-falling-rod-terminal-power
title_ko: "연직 ㄷ자 도선 위에서 낙하하는 막대의 종단 속력과 중력의 일률"
source: "문제 169 (교재명 미상)"
difficulty: 2
tags: [운동 기전력, 종단 속도, 일률, 자기력, 렌츠 법칙, motional emf, terminal velocity, power, magnetic force]
related: []
images: []
verified: false
---

## problem
지면에서 나오는 균일한 자기장 $B$ 안에, 저항 $R$이 달린 폭 $L$인 ㄷ자 도선이 연직으로 서 있다. 질량 $m$인 막대가 도선에 걸쳐 떨어지다가 속력 $v$로 등속 운동한다. 이때 중력이 막대에 하는 일률을 구한다.

## answer
$P = mgv = \dfrac{B^2L^2v^2}{R}$ (등속 조건 $mg = \dfrac{B^2L^2v}{R}$이라 두 식이 같음)

## key-idea
- 등속 운동 → 알짜힘 0 → $F_B = mg$ → 중력과 자기력의 일률은 크기가 같고 부호만 반대 ($P = Fv$)
- 자기력 쪽으로 계산: $\mathcal{E} = B\dfrac{dA}{dt} = BLv$ → $i = \dfrac{BLv}{R}$ → $F_B = iLB$ → $P = F_Bv = \dfrac{B^2L^2v^2}{R}$
- 방향: 내려갈수록 회로 넓이·선속 증가 → 렌츠 법칙으로 운동을 막는 쪽(위쪽) 자기력 → 그래서 결국 등속이 됨

## supplement
메모의 "P = F·v = mgv로 계산 가능, 이 문제에서는 자기장으로 … 이용 X" 부분은 끝이 잘 안 읽혀서, 답에 두 형태를 모두 적었습니다.
