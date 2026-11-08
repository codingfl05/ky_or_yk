---
id: calc-diff-injective-surjective
title_ko: "단사·전사·전단사함수"
title_en: "Injective, surjective, bijective functions"
question: "단사함수, 전사함수, 전단사함수의 정의와 역함수 존재 조건은?"
tags: [단사, 전사, 전단사, 일대일 함수, 일대일 대응, injective, surjective, bijective]
importance: 2
related: [calc-diff-composite-inverse]
source: "book:BLIS편입 미분 1장 (01 전사·단사·전단사함수)"
verified: false
---

## formula
$$
\text{injective:} \quad x_1 \neq x_2 \;\Rightarrow\; f(x_1) \neq f(x_2)
$$

$$
\text{surjective:} \quad f(D) = E
$$

## conditions
- $f: D \to E$, $D$는 정의역(domain), $E$는 공역(codomain), $f(D)$는 치역(range).
- 단사함수(injective, 일대일 함수): 서로 다른 $x$는 서로 다른 값으로 간다. 공역의 원소가 다 쓰일 필요는 없다.
- 전사함수(surjective, 위로의 함수): 치역 = 공역. 중복 대응은 상관없다.
- 전단사함수(bijective, 일대일 대응): 단사이면서 전사. 역함수가 존재할 조건.

## explanation
일대일 함수(단사)와 일대일 대응(전단사)은 다른 개념이니 헷갈리지 말 것. 구간에서 연속인 함수라면 단사인 것과 순증가 또는 순감소인 것이 같다.

## supplement
교재 정의가 'x₁≠x₂ 이고 f(x₁)≠f(x₂)'로 되어 있는데, 정확히는 '이면(⇒)'입니다. 또 교재의 '전단사 = 증가 또는 감소'는 구간에서 연속인 함수일 때만 맞아서 조건을 붙였습니다. 교재의 공식·정의를 옮기고, 조건·설명은 Claude가 추가했습니다.
