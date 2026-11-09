---
id: la-vs-vector-space-axioms
title_ko: "벡터공간의 공리"
title_en: "Vector space axioms"
tags: [벡터공간, 공리, 닫힘성, vector space, axioms]
importance: 2
related: [la-vs-subspace-test]
source: "notion:선대 02. 벡터공간의 기초 (4~12강)"
verified: false
---

## formula
$$
\mathbf u+\mathbf v\in V,\quad k\mathbf u\in V \quad (\text{closure})
$$

$$
k(\mathbf u+\mathbf v)=k\mathbf u+k\mathbf v,\quad (k+l)\mathbf u = k\mathbf u+l\mathbf u,\quad k(l\mathbf u)=(kl)\mathbf u,\quad 1\cdot\mathbf u=\mathbf u
$$

## conditions
- 덧셈에 대해: 교환법칙, 결합법칙, 영벡터 존재, 역원 존재 + 위의 스칼라배·분배법칙·닫힘성, 모두 10개.

## explanation
### 문제풀이 포인트
- 실전에서 10개를 다 확인하는 경우는 거의 없고, **"닫힘성(덧셈/스칼라배)이 깨지는 반례 하나 찾기"**가 벡터공간이 "아님"을 보이는 가장 빠른 방법.
- 다항식 공간 $P_n$, 행렬공간 $M_{m\times n}$, 함수공간에서 공리 확인 문제가 자주 나옴 — 결국 "닫힘성"과 "영벡터의 정체"만 확인하면 대부분 해결.
- 이 공리들은 체 위의 일반 벡터공간(22강)에서 그대로 재사용된다.

## supplement
노션 정리 문서를 거의 그대로 옮겼습니다. 01 문서(벡터의 연산)에는 '9개의 벡터공간 공리'라고 되어 있어 이 문서의 10개와 다릅니다. 닫힘성 두 개를 공리로 셀지에 따라 교재마다 개수가 다르니 확인해 주세요.
