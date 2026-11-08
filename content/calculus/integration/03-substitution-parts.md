---
id: calc-int-substitution-parts
title_ko: "치환적분과 부분적분"
title_en: "Substitution and integration by parts"
question: "치환적분을 쓰는 형태와 부분적분 공식, g를 고르는 순서는?"
tags: [치환적분, 부분적분, 적분법, substitution, integration by parts, liate]
importance: 3
related: [calc-int-trig-substitution, calc-diff-basic-derivative-rules]
source: "book:BLIS편입 적분 1장 (02 치환적분법, 부분적분법)"
verified: false
---

## formula
$$
\int f(g(x))\,g'(x)\,dx = \int f(t)\,dt \quad (t = g(x))
$$

$$
\int f'(x)\,g(x)\,dx = f(x)\,g(x) - \int f(x)\,g'(x)\,dx
$$

## conditions
- 치환적분: 어떤 함수와 그 도함수가 곱해진 꼴. 정적분이면 적분 구간도 $t$의 범위로 바꾼다.
- 부분적분: 치환이 안 되는 곱. $g$는 미분하기 쉬운 것, $f'$은 적분하기 쉬운 것.
- $g$로 고르는 순서: 로그 → 역삼각 → 다항 → 삼각 → 지수 (LIATE).

## explanation
교재가 정리한 적분법은 치환, 부분, 삼각치환, 삼각함수, 유리함수, 무리함수, 지수함수 적분법이다. 무리함수는 근호 전체를 $t$로, 지수함수는 $e^x = t$로 치환하는 것이 기본이다. $\int e^x\sin x\,dx$처럼 부분적분을 두 번 하면 원래 적분이 다시 나오는 경우는 이항해서 푼다.

## supplement
부분적분이 원래 적분으로 돌아오는 경우의 처리를 추가했습니다. 교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
