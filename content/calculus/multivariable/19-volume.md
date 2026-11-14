---
id: calc-mv-volume
title_ko: "중적분으로 구하는 부피"
title_en: "Volume by multiple integrals"
question: "곡면 아래 부피를 이중적분으로, 일반 입체의 부피를 삼중적분으로 나타내면?"
tags: [부피, 이중적분, 삼중적분, volume]
importance: 3
related: [calc-mv-double-integral, calc-mv-triple-integral, calc-int-volume]
source: "book:BLIS편입 다변수 8-02 (중적분과 부피)"
verified: false
---

## formula
$$
V = \iint_D f(x, y)\,dA, \qquad V = \iint_D \{f_{\text{top}}(x, y) - f_{\text{bottom}}(x, y)\}\,dA, \qquad V = \iiint_E 1\,dV
$$

## conditions
- 이중적분: $D$ 위에서 $z = f(x, y) \ge 0$ 아래의 부피. $D$는 입체를 $xy$평면에 사영한 영역.
- 두 곡면 사이: 위 곡면 − 아래 곡면을 사영 영역에서 적분.
- 회전축에 대칭이고 단면이 원이면 일변수 회전체 공식(원판·원통껍질)도 가능.

## explanation
세 방법(회전체 공식, 이중적분, 삼중적분) 중 무엇을 쓰든 같은 값이다. 이중적분은 "높이 함수 × 바닥 넓이", 삼중적분은 "$1$을 입체 전체에서 더하기"로 기억한다.

## supplement
두 곡면 사이 부피 식을 추가했습니다. 교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
