---
chapter_id: projection-quadratic
subject: linear-algebra
title_ko: "사영과 이차형식 (13~15강)"
title_en: "Projection, Gram-Schmidt, quadratic forms"
source: "notion:선대 03. 사영과 이차형식 (13~15강)"
---

Projection Theorem → Gram-Schmidt → 직교대각화 → 이차형식·정부호성·최적화. 반드시 챙길 연결고리:

1. **사영 → 그람-슈미트**: 그람-슈미트는 사영 공식을 반복 적용하는 것뿐이다.
2. **그람-슈미트 → 직교대각화**: 각 고유공간 내에서 정규직교기저 만들기가 바로 그람-슈미트. 서로 다른 고윳값끼리는 자동 직교이므로 필요한 건 중복 고윳값이 있을 때뿐.
3. **직교대각화 → 이차형식**: 주축정리는 $A=PDP^T$를 이차형식에 대입한 것. 정부호성의 고윳값 판정이 여기서 나온다.
4. **정규직교기저**는 QR분해, 내적공간·스펙트럼 정리까지 계속 나온다.
