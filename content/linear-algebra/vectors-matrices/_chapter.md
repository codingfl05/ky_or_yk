---
chapter_id: vectors-matrices
subject: linear-algebra
title_ko: "벡터와 행렬 기초 (2~3강)"
title_en: "Vectors and matrices"
source: "notion:선대 01. 벡터와 행렬 기초 (2~3강)"
---

문제풀이에 바로 꺼내 쓸 수 있는 공식·숏컷·주의사항 정리. 이 단원에서 반드시 챙길 4가지:

1. **정사영 공식** $\operatorname{proj}_{\vec v}\vec u = \dfrac{\vec u\cdot\vec v}{\|\vec v\|^2}\vec v$ → Gram-Schmidt, 이차형식, 일반 내적공간까지 반복 사용.
2. **행렬 곱셈은 비가환** → $(AB)^{-1}=B^{-1}A^{-1}$, $(AB)^T=B^TA^T$ 순서 반전 패턴.
3. **대칭행렬의 특수성** → 직교대각화·스펙트럼 정리로 이어지는 이 과목의 최종 목적지.
4. **열-행 전개(rank-1 분해)** → SVD, 스펙트럼 정리에서 "행렬 = rank-1 행렬들의 합"이라는 관점의 시작점.
