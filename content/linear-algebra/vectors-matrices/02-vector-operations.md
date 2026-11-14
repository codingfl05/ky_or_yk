---
id: la-vm-vector-operations
title_ko: "벡터의 연산과 성질"
title_en: "Vector operations"
tags: [벡터 연산, 스칼라배, 벡터공간 공리, scalar multiplication, vector space axioms]
importance: 2
related: []
source: "notion:선대 01. 벡터와 행렬 기초 (2~3강)"
verified: false
---

## formula
$$
\vec{u}+\vec{v} = \langle u_1+v_1,\, u_2+v_2,\, u_3+v_3\rangle
$$

$$
k\vec{u} = \langle ku_1, ku_2, ku_3\rangle
$$

$$
\|k\vec{u}\| = |k|\,\|\vec{u}\|
$$

## explanation
9개의 벡터공간 공리(교환, 결합, 항등원, 역원, 분배법칙 등)는 뒤에서 나올 **일반 벡터공간의 정의(4~9강, 22강)**로 그대로 확장되는 원형이므로, "왜 이 9개인가"를 기억해두면 이후 함수공간·행렬공간에서 벡터공간 여부를 판정할 때 체크리스트로 재사용 가능.

### 문제풀이 포인트
- $k$가 음수일 때 방향이 반대가 됨은 자명하지만, **크기는 항상 $|k|$배**라는 점(절댓값)을 놓치는 문제가 자주 나옴.
- 표준단위벡터 전개 $\vec v = v_1\mathbf i + v_2\mathbf j + v_3\mathbf k$는 뒤에서 좌표 벡터(coordinate vector) 개념, 기저 전개와 동일한 논리 — "기저의 선형결합으로 유일하게 표현된다"는 사실의 최초 등장.

## supplement
노션 정리 문서를 거의 그대로 옮겼습니다 (표현만 카드 형식에 맞춤).
