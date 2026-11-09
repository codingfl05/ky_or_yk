---
id: la-dec-svd
title_ko: "특이값 분해 (SVD)"
title_en: "Singular value decomposition"
question: "SVD A = UΣVᵀ에서 U, V, Σ는 각각 무엇으로 구하는가?"
tags: [특이값 분해, 특이값, SVD, singular value decomposition, low-rank]
importance: 3
related: [la-vm-matrix-multiplication, la-pq-definiteness, la-pq-quadratic-optimization]
source: "notion:선대 05. 행렬의 고급 이론과 분해 (18~20강)"
verified: false
---

## formula
$$
A_{m\times n} = U\Sigma V^T, \qquad \sigma_i=\sqrt{\lambda_i(A^TA)}
$$

$$
A = \sigma_1u_1v_1^T + \sigma_2u_2v_2^T + \cdots + \sigma_ru_rv_r^T
$$

## conditions
- $U$: $AA^T$의 정규직교 고유벡터 ($m\times m$ 직교행렬). $V$: $A^TA$의 정규직교 고유벡터 ($n\times n$ 직교행렬).
- $\Sigma$: 특이값을 큰 순서로 대각에 배치. $A^TA$와 $AA^T$의 0이 아닌 고윳값은 같다.

## explanation
정사각행렬이 아니어도 되는 "일반화된 대각화" — 열-행 전개(rank-1 분해)가 가중치(특이값)를 가진 형태로 완성된다. $A^TA$는 항상 대칭이고 양의 준정부호라서 고윳값이 비음수 → $\sigma_i$가 항상 실수.

### 문제풀이 포인트
- 절차: (1) $A^TA$(또는 $AA^T$, 크기가 작은 쪽)의 고윳값·고유벡터로 $\Sigma, V$(또는 $U$) 확보. (2) $Av_i=\sigma_iu_i$로 나머지를 계산 ($U$를 따로 고유벡터로 구하면 부호가 안 맞을 수 있다).
- 이미지 압축: 특이값이 큰 항만 남기면 저차원(low-rank) 근사 — "rank가 작을수록 정보 손실 크지만 압축률 높음" 트레이드오프.

## supplement
노션 정리 문서를 거의 그대로 옮겼습니다. U를 AAᵀ의 고유벡터로 따로 구하면 부호가 Av = σu와 안 맞을 수 있다는 주의를 덧붙였습니다.
