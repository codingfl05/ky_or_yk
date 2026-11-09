---
id: la-dec-cayley-hamilton
title_ko: "해밀턴-케일리 정리"
title_en: "Cayley-Hamilton theorem"
question: "해밀턴-케일리 정리의 내용과 두 가지 활용법은?"
tags: [해밀턴-케일리, 특성다항식, 행렬 다항식, cayley-hamilton]
importance: 3
related: [la-vs-eigen, la-vs-diagonal-powers]
source: "notion:선대 05. 행렬의 고급 이론과 분해 (18~20강)"
verified: false
---

## formula
$$
P(\lambda) = \det(\lambda I - A) \qquad\Longrightarrow\qquad P(A) = O
$$

## explanation
모든 정사각행렬은 자기 자신의 특성다항식을 만족시킨다. 대각화 가능 여부와 무관하게 **항상** 성립.

### 문제풀이 포인트 — 활용법 두 가지
1. **역행렬 빠르게 구하기**: 특성방정식이 $\lambda^2-\lambda+4=0$이면 $A^2-A+4I=O \Rightarrow A(A-I)=-4I \Rightarrow A^{-1}=-\frac{1}{4}(A-I)$.
2. **고차 거듭제곱을 저차식으로 낮추기**: $A^n$을 특성다항식으로 나눈 나머지로 표현 — $A^3=aA^2+bA+cI$ 꼴의 $a,b,c$는 다항식 나눗셈으로 결정.

## supplement
노션 정리 문서를 거의 그대로 옮겼습니다 (표현만 카드 형식에 맞춤).
