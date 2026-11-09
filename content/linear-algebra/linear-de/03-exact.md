---
id: la-de-exact
title_ko: "완전미분방정식"
title_en: "Exact equations"
tags: [완전미분방정식, exact equation, potential function]
importance: 3
related: [calc-vc-fundamental-theorem]
source: "notion:선대 04. 선형 미분방정식 (16~17강)"
verified: false
---

## formula
$$
M(x,y)+N(x,y)y'=0 \text{ is exact} \iff M_y(x,y)=N_x(x,y)
$$

$$
w_x=M,\ w_y=N \implies w(x,y)=c
$$

## explanation
### 문제풀이 포인트 — 표준 풀이 절차
1. $M_y=N_x$ 확인 (완전성 판정 — 생략하면 틀린 풀이로 직행).
2. $w_x=M$을 $x$로 적분 → $w(x,y)=\int M\,dx + h(y)$.
3. 이를 $y$로 편미분해서 $N$과 비교 → $h'(y)$를 구하고 적분해서 $h(y)$ 확정.
4. $w(x,y)=c$가 답.

**적분상수를 $h(y)$라는 "$y$만의 함수"로 두는 것**이 핵심 — $x$로 편적분했으므로 상수가 아니라 $y$의 함수가 될 수 있다.

## supplement
노션 정리 문서를 거의 그대로 옮겼습니다 (표현만 카드 형식에 맞춤).
