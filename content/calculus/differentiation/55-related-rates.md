---
id: calc-diff-related-rates
title_ko: "관련 변화율"
title_en: "Related rates"
question: "부피 변화율이 주어졌을 때 반지름 변화율을 구하는 식은?"
tags: [변화율, 관련 변화율, 연쇄법칙, related rates, chain rule]
importance: 3
related: [calc-diff-basic-derivative-rules]
source: "book:BLIS편입 미분 6장 (02 변화율 문제 해결)"
verified: false
---

## formula
$$
\frac{dV}{dt} = \frac{dV}{dr} \cdot \frac{dr}{dt}
$$

## conditions
- 변화율(rate of change) = 시간 $t$에 대한 미분.
- 풀이: ① 구하는 양과 주어진 양 사이의 관계식을 세운다 ② 양변을 $t$로 미분(연쇄법칙) ③ 그 순간의 값을 대입. 값은 미분한 뒤에 대입한다.

## explanation
예: 구의 부피 $V = \frac{4}{3}\pi r^3$이면 $\frac{dV}{dt} = 4\pi r^2 \frac{dr}{dt}$. 원뿔 물탱크 문제는 닮음비로 반지름을 높이로 바꿔 변수를 하나로 줄인 뒤 미분한다. 미분하기 전에 특정 순간의 값을 대입하면 틀린다.

## supplement
풀이 3단계와 원뿔 탱크 요령을 추가했습니다. 교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
