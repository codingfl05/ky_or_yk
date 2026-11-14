---
id: la-vs-rref-solutions
title_ko: "RREF와 해의 개수 판정"
title_en: "RREF and number of solutions"
tags: [RREF, 가우스-조르당, 해의 개수, rank, gauss-jordan]
importance: 3
related: [la-vs-fundamental-subspaces]
source: "notion:선대 02. 벡터공간의 기초 (4~12강)"
verified: false
---

## formula
$$
\operatorname{rank}(A) = \operatorname{rank}([A|b]) = n \Rightarrow \text{unique}
$$

$$
\operatorname{rank}(A) = \operatorname{rank}([A|b]) < n \Rightarrow \text{infinitely many}
$$

$$
\operatorname{rank}(A) < \operatorname{rank}([A|b]) \Rightarrow \text{no solution}
$$

## conditions
- $n$: 미지수 개수. 해가 없을 때는 RREF에 모순 행 $0 = c\ (c \neq 0)$이 생긴다. 무수히 많은 해는 자유변수 존재.

## explanation
$Ax=b$를 첨가행렬 $[A|b]$의 행연산만으로 가장 단순한 형태로 바꿔서 해를 즉시 읽어내는 방법. 이 rank 기반 판정법은 행공간·열공간·rank-nullity와 완전히 같은 언어로 다시 등장한다.

## supplement
노션 정리 문서를 거의 그대로 옮겼습니다 (표현만 카드 형식에 맞춤).
