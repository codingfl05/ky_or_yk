---
id: la-vs-diagonal-powers
title_ko: "대각화를 이용한 거듭제곱"
title_en: "Matrix powers by diagonalization"
tags: [거듭제곱, 대각화, matrix power]
importance: 2
related: [la-vs-diagonalization]
source: "notion:선대 02. 벡터공간의 기초 (4~12강)"
verified: false
---

## formula
$$
A^k = PD^kP^{-1}, \qquad D^k = \operatorname{diag}(\lambda_1^k,\ldots,\lambda_n^k)
$$

## explanation
### 문제풀이 포인트
$A^{100}$처럼 직접 곱하면 비현실적인 계산을 $\lambda_i^{100}$ 계산으로 환원 — 점화식/동역학계 문제(피보나치 수열의 행렬 표현 등)의 표준 풀이법. 연립 미분방정식에서 $e^{At}$를 구할 때도 같은 원리.

## supplement
노션 정리 문서를 거의 그대로 옮겼습니다 (표현만 카드 형식에 맞춤).
