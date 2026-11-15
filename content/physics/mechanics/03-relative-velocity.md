---
id: phys-mech-relative-velocity
title_ko: "상대 속도"
title_en: "Relative velocity"
tags: [상대 속도, 상대 운동, 관찰자, 좌표계, relative velocity, reference frame]
importance: 2
related: [phys-mech-uniform-acceleration]
source: "book:BLIS편입 일반물리 1-12~16"
verified: false
---

## formula
$$
\mathbf{r}_{PA} = \mathbf{r}_{PB} + \mathbf{r}_{BA}
$$

$$
\mathbf{v}_{PA} = \mathbf{v}_{PB} + \mathbf{v}_{BA}
$$

$$
\mathbf{a}_{PA} = \mathbf{a}_{PB} + \mathbf{a}_{BA}
$$

## conditions
- 아래 첨자 $PA$는 "A가 본 P". 시간은 모든 관찰자에게 같다고 본다 (고전 역학).
- B가 A에 대해 등속으로 움직이면 ($\mathbf{a}_{BA}=0$) 두 관찰자가 보는 가속도는 같다.

## explanation
### 쉽게 말하면
"A가 본 P" = "A가 본 B" + "B가 본 P". 가운데 글자 B가 맞물려 사라지는 꼴로 기억한다. 순서를 바꾸면 부호가 바뀐다: $\mathbf{v}_{AB} = -\mathbf{v}_{BA}$.

### 문제풀이 포인트
- 강을 건너는 배, 비 오는 날 달리는 차처럼 2차원이면 벡터 삼각형을 그린다.
- 두 물체가 만나는지 묻는 문제는 한 물체 위에 올라탄 관찰자로 바꾸면 다른 물체가 직선으로 다가오는 문제가 된다.

### 한 번 따라 하기: 강 건너기
물에 대해 $5\,\text{m/s}$로 가는 배가 $3\,\text{m/s}$로 흐르는 강을 건넌다. "땅에서 본 배" = "물에서 본 배" + "땅에서 본 물"이다.
- 뱃머리를 강 건너편으로 똑바로 향하면: 건너는 방향 $5$, 떠내려가는 방향 $3$ → 땅에서 보면 비스듬히 $\sqrt{5^2 + 3^2} \approx 5.8\,\text{m/s}$로 간다. 건너는 데 걸리는 시간은 (강폭) ÷ 5로 가장 짧다.
- 똑바로 건너편에 닿으려면: 뱃머리를 상류 쪽으로 기울여, 물에 대한 속도의 상류 성분이 $3$이 되게 한다. 빗변 5, 한 변 3인 직각삼각형이므로 건너는 방향 성분은 $4\,\text{m/s}$. 시간은 (강폭) ÷ 4로 더 걸린다.

## story
달리는 기차 안에서 공을 던지면 기차 안 사람에게는 그냥 던진 공이지만, 밖에서 보는 사람에게는 기차 속도까지 더해진 공이다. 둘 다 맞다. 누가 보느냐만 분명히 하면 된다.

## supplement
교재 내용을 옮기고, 쉬운 설명·스토리는 Claude가 추가했습니다. 쉬운 설명·그림 보강: 강 건너기 계산 예.
