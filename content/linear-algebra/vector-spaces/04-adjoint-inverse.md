---
id: la-vs-adjoint-inverse
title_ko: "딸림행렬(수반행렬)과 역행렬 공식"
title_en: "Adjugate and inverse formula"
tags: [딸림행렬, 수반행렬, 역행렬, adjugate, adjoint]
importance: 2
related: []
source: "notion:선대 02. 벡터공간의 기초 (4~12강)"
verified: false
---

## formula
$$
A^{-1} = \frac{1}{\det(A)}\,\operatorname{adj}(A), \qquad \operatorname{adj}(A) = C^T
$$

## conditions
- $C$: 여인수행렬. $\operatorname{adj}(A)$는 여인수행렬의 전치.

## explanation
### 문제풀이 포인트
- $2\times2, 3\times3$처럼 작은 행렬의 역행렬을 손으로 빨리 구할 때 유용. $4\times4$ 이상은 $[A\,|\,I]$ 기본행연산 방식이 압도적으로 빠름 — **크기 보고 방법을 선택**하는 게 실전 스킬.
- $\det(A)=0$이면 $\operatorname{adj}(A)$는 존재해도 $A^{-1}$은 존재하지 않음.

## supplement
노션 정리 문서를 거의 그대로 옮겼습니다 (표현만 카드 형식에 맞춤).
