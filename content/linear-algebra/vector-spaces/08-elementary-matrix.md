---
id: la-vs-elementary-matrix
title_ko: "기본행렬과 역행렬 계산"
title_en: "Elementary matrices and computing inverses"
tags: [기본행렬, 역행렬, 행연산, elementary matrix, inverse]
importance: 2
related: []
source: "notion:선대 02. 벡터공간의 기초 (4~12강)"
verified: false
---

## formula
$$
E \cdot A = (\text{one row operation applied to } A), \qquad [A\,|\,I] \to [I\,|\,A^{-1}]
$$

## conditions
- 기본행렬 $E$는 항등행렬 $I$에 행연산 한 번을 가한 것.

## explanation
"행연산"이라는 절차적 조작을 "행렬 곱"이라는 대수적 대상으로 바꿔주는 다리. 이 덕분에 $A = E_1^{-1}E_2^{-1}\cdots E_k^{-1}$ 같은 **행렬의 인수분해**가 가능해진다 (LU분해의 이론적 근거).

### 문제풀이 포인트
- $4\times4$ 이상 크기의 역행렬은 $[A|I]$ 방법이 사실상 유일한 실전적 선택.
- 소거 도중 좌측 블록에 전체가 0인 행이 나오면 $A$는 특이행렬(비가역) → 즉시 중단하고 "역행렬 없음"으로 결론.

## supplement
노션 정리 문서를 거의 그대로 옮겼습니다 (표현만 카드 형식에 맞춤).
