---
id: la-vm-special-matrices
title_ko: "여러 가지 행렬의 정의와 성질"
title_en: "Special matrices"
tags: [전치행렬, 대칭행렬, 교대행렬, 멱등행렬, 대각합, symmetric matrix, idempotent, trace]
importance: 3
related: []
source: "notion:선대 01. 벡터와 행렬 기초 (2~3강)"
verified: false
---

## formula
$$
(AB)^T=B^TA^T
$$

$$
A=A^T \ (\text{symmetric})
$$

$$
A^T=-A \ (\text{skew})
$$

$$
A^2=A \ (\text{idempotent})
$$

$$
\operatorname{tr}(AB)=\operatorname{tr}(BA)
$$

## explanation
| 행렬 | 정의 | 핵심 성질 |
| --- | --- | --- |
| 전치행렬 $A^T$ | $(A^T)_{ij}=(A)_{ji}$ | $(AB)^T=B^TA^T$, $(A^{-1})^T=(A^T)^{-1}$ |
| 대각행렬 | 비대각 성분 $=0$ | 거듭제곱이 성분별로 계산됨 |
| 상/하부삼각행렬 | 대각 아래/위 성분 $=0$ | 삼각행렬끼리 곱해도 같은 형태 유지, $\det$은 대각성분의 곱 |
| 대칭행렬 | $A=A^T$ | $A+B,\,A-B,\,kA,\,A^{-1}$ 모두 대칭 유지 |
| 교대행렬(반대칭) | $A^T=-A$ | 주대각성분이 항상 $0$ |
| 멱등행렬 | $A^2=A$ | 사영(projection) 행렬의 대수적 정의 — 20강 행렬변환에서 재등장 |

### 문제풀이 포인트 (연결고리)
- **대칭행렬**은 14강 직교대각화("대칭행렬만 직교대각화 가능"), 27강 대칭 작용소, 27~28강 스펙트럼 정리로 계속 이어지는 이 과목 전체의 핵심 축.
- **멱등행렬** $A^2=A$는 사영행렬의 정의와 동치 — 13강 Gram-Schmidt/사영 이후, "정사영 연산자는 멱등이다"라는 사실과 연결됨.
- 대각합(trace)의 순환성 $\operatorname{tr}(AB)=\operatorname{tr}(BA)$ — 18강 해밀턴-케일리 정리, 고윳값의 합 $=\operatorname{tr}(A)$ 공식에서 바로 활용.

## supplement
노션 정리 문서를 거의 그대로 옮겼습니다. 보완 두 가지: ① 대칭행렬의 곱 AB는 AB = BA일 때만 대칭입니다 (표에 곱은 없음 — 맞음). ② '멱등 ⇔ 사영'은 일반 (사각)사영에 대한 말이고, 정사영(orthogonal projection) 행렬은 멱등이면서 대칭(A² = A = Aᵀ)이어야 합니다.
