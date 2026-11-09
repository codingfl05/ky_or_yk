---
id: la-vs-cramer
title_ko: "크래머 공식"
title_en: "Cramer's rule"
tags: [크래머 공식, 연립방정식, cramer's rule]
importance: 2
related: []
source: "notion:선대 02. 벡터공간의 기초 (4~12강)"
verified: false
---

## formula
$$
x_i = \frac{\det(A_i)}{\det(A)}
$$

## conditions
- $A_i$: $A$의 $i$번째 열을 $b$로 치환한 행렬.
- $n$개 미지수, $n$개 방정식(정사각)이고 $\det(A)\neq0$일 때만 (유일해). $\det(A)=0$이면 RREF로 전환.

## explanation
역행렬을 직접 구하지 않고도 각 미지수를 행렬식만으로 구하는 공식. 미지수 1~2개만 필요한 문제에서 전체 행렬을 소거하지 않고 해당 $x_i$만 빠르게 구할 때 유리 — **"몇 번째 변수만 물어보는" 객관식·단답형 문제의 숏컷**.

## supplement
노션 정리 문서를 거의 그대로 옮겼습니다 (표현만 카드 형식에 맞춤).
