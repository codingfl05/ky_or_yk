---
id: phys-em-motional-emf
title_ko: "운동 기전력 (레일 위 막대, 회전 막대)"
title_en: "Motional emf"
question: "자기장 속 레일 위를 움직이는 막대의 유도 기전력, 전류, 힘, 일률은?"
tags: [운동 기전력, 유도 기전력, 레일, 막대, 종단 속도, motional emf, sliding rod, terminal velocity]
importance: 3
related: [phys-em-faraday-law, phys-em-force-on-current]
source: "book:BLIS편입 일반물리 17-06"
verified: false
---

## formula
$$
\mathcal{E} = BLv, \qquad i = \frac{BLv}{R}, \qquad F = iLB = \frac{B^2L^2v}{R}, \qquad P = Fv = \frac{B^2L^2v^2}{R} = i^2R
$$

$$
\mathcal{E}_{\text{rotating rod}} = \frac{1}{2}B\omega L^2
$$

## conditions
- 균일한 $B$, 막대·속도·자기장이 서로 수직. $R$은 회로 전체 저항.
- 회전 막대: 한쪽 끝을 축으로 각속도 $\omega$로 도는 길이 $L$인 막대.

## explanation
### 쉽게 말하면
막대가 움직이면 회로 넓이가 $Lx$로 변해서 선속 $BLx$가 변한다 → $\dfrac{d\Phi}{dt}=BLv$.

- 막대에 흐르는 유도 전류는 자기장 속에서 힘 $iLB$를 받는데, 렌츠 법칙 때문에 항상 운동을 방해하는 방향이다.
- 그래서 일정한 속력을 유지하려면 그만큼 외력으로 끌어야 하고, 외력이 한 일(일률 $Fv$)은 전부 저항의 열($i^2R$)로 바뀐다. 에너지 보존이 맞는지 확인하는 좋은 검산.
- 연직 레일에서 떨어지는 막대: 빨라질수록 위로 받는 자기력이 커지다가 $mg=\dfrac{B^2L^2v}{R}$에서 등속 → 종단 속도 $v_t=\dfrac{mgR}{B^2L^2}$.
- 회전 막대: 부채꼴 넓이 $\dfrac{1}{2}L^2\theta$가 변하므로 $\dfrac{1}{2}BL^2\omega$.

## story
자기장 속에서 도선을 움직이는 것은 물속에서 노를 젓는 것과 비슷하다. 빨리 저을수록 저항(자기력)이 세지고, 젓는 데 쓴 힘은 물을 휘젓는 열로 사라진다.

## supplement
교재 내용을 옮기고, 쉬운 설명·스토리는 Claude가 추가했습니다. 종단 속도, 회전 막대 공식은 Claude가 추가했습니다.
