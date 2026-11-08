---
id: calc-diff-concavity-jensen
title_ko: "볼록성과 젠센 부등식"
title_en: "Concavity and Jensen's inequality"
question: "이계도함수 부호와 볼록성, 젠센 부등식은?"
tags: [볼록, 오목, 이계도함수, 젠센 부등식, concavity, convex function, jensen's inequality]
importance: 3
related: [calc-diff-inflection]
source: "book:BLIS편입 미분 5장 (02 젠센 부등식)"
verified: false
---

## formula
$$
f'' > 0 \Rightarrow \text{concave up (convex)}, \qquad f'' < 0 \Rightarrow \text{concave down}
$$

$$
\text{convex:} \ f\!\left(\frac{a+b}{2}\right) \le \frac{f(a) + f(b)}{2}, \qquad \text{concave:} \ f\!\left(\frac{a+b}{2}\right) \ge \frac{f(a) + f(b)}{2}
$$

## conditions
- 아래로 볼록(위로 오목, concave up): $f'' > 0$. 위로 볼록(아래로 오목, concave down): $f'' < 0$.
- 젠센 부등식(Jensen's inequality)은 미분 가능하지 않아도 쓸 수 있다 (예: $|x|$는 아래로 볼록). 점이 여러 개여도 같다: $f\!\left(\frac{x+y+z}{3}\right) \le \frac{f(x)+f(y)+f(z)}{3}$ (아래로 볼록).

## explanation
한국 교재의 "위로 볼록/아래로 볼록"과 영어 "concave down/up"이 반대 단어처럼 보여 헷갈린다: 아래로 볼록 = concave up = 컵 모양. 젠센 부등식은 "평균의 함숫값 vs 함숫값의 평균" 대소 비교 문제에 쓴다 (예: $e^x$는 아래로 볼록).

## supplement
점 3개 형태와 영어 용어 대응을 추가했습니다. 교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
