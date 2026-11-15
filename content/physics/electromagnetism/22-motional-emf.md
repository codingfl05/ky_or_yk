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
\mathcal{E} = BLv
$$

$$
i = \frac{BLv}{R}
$$

$$
F = iLB = \frac{B^2L^2v}{R}
$$

$$
P = Fv = \frac{B^2L^2v^2}{R} = i^2R
$$

$$
\mathcal{E}_{\text{rotating rod}} = \frac{1}{2}B\omega L^2
$$

## conditions
- 균일한 $B$, 막대·속도·자기장이 서로 수직. $R$은 회로 전체 저항.
- 회전 막대: 한쪽 끝을 축으로 각속도 $\omega$로 도는 길이 $L$인 막대.

## explanation
::fig rail-rod | 막대가 오른쪽으로 가면 고리의 넓이가 늘어난다. 유도 전류는 그 증가를 막는 방향으로 흐른다.

### 앞 개념 네 개를 차례로 쓴다
1. 패러데이 법칙: 기전력 = 선속이 변하는 빠르기. 선속은 $B$ × (넓이)이고 넓이는 $Lx$이므로, 1초에 넓이가 $Lv$씩 늘어 $\mathcal{E} = BLv$.
2. 옴의 법칙: 기전력이 전지 역할을 해서 $i = \dfrac{\mathcal{E}}{R}$.
3. 전류가 받는 자기력: 전류가 흐르는 막대는 자기장 속에서 $F = iLB$를 받는다. 방향은 렌츠 법칙대로 막대의 운동을 방해하는 쪽.
4. 전력: 저항에서 1초에 나오는 열은 $i^2R$. 막대를 끄는 힘의 일률 $Fv$와 같아야 한다 (에너지 보존).

### 쉽게 말하면
막대가 움직이면 회로 넓이가 $Lx$로 변해서 선속 $BLx$가 변한다 → $\dfrac{d\Phi}{dt}=BLv$.

- 막대에 흐르는 유도 전류는 자기장 속에서 힘 $iLB$를 받는데, 렌츠 법칙 때문에 항상 운동을 방해하는 방향이다.
- 그래서 일정한 속력을 유지하려면 그만큼 외력으로 끌어야 하고, 외력이 한 일(일률 $Fv$)은 전부 저항의 열($i^2R$)로 바뀐다. 에너지 보존이 맞는지 확인하는 좋은 검산.
- 연직 레일에서 떨어지는 막대: 빨라질수록 위로 받는 자기력이 커지다가 $mg=\dfrac{B^2L^2v}{R}$에서 등속 → 종단 속도 $v_t=\dfrac{mgR}{B^2L^2}$.
- 회전 막대: 부채꼴 넓이 $\dfrac{1}{2}L^2\theta$가 변하므로 $\dfrac{1}{2}BL^2\omega$.

## story
자기장 속에서 도선을 움직이는 것은 물속에서 노를 젓는 것과 비슷하다. 빨리 저을수록 저항(자기력)이 세지고, 젓는 데 쓴 힘은 물을 휘젓는 열로 사라진다.

## supplement
교재 내용을 옮기고, 쉬운 설명·스토리는 Claude가 추가했습니다. 종단 속도, 회전 막대 공식은 Claude가 추가했습니다. 쉬운 설명·그림 보강: 패러데이·옴·자기력·전력을 순서대로 잇는 설명, 그림(rail-rod).
