---
id: la-pq-projection-decomposition
title_ko: "사영의 정의와 유일한 분해"
title_en: "Orthogonal decomposition along a vector"
tags: [사영, 정사영, 직교분해, projection]
importance: 3
related: [la-vm-projection, la-pq-projection-subspace]
source: "notion:선대 03. 사영과 이차형식 (13~15강)"
verified: false
---

## formula
$$
u = w_1 + w_2
$$

$$
w_1 = ka \ (k\in\mathbb R),\quad w_2 \perp a
$$

$$
\Longrightarrow\quad k = \frac{u\cdot a}{\|a\|^2}
$$

$$
\operatorname{proj}_a u = \frac{u\cdot a}{\|a\|^2}\,a
$$

## explanation
임의의 벡터 $u$를 "$a$ 방향 성분"과 "$a$에 수직인 성분"으로 유일하게 분해한다. 이 분해는 항상 존재하고 유일하다 (계수 $k$를 $a$와 내적해서 유도).

### 문제풀이 포인트
- $k$를 구하는 유도 과정 자체가 시험에 자주 나온다 — $u\cdot a$를 계산해서 $w_2\perp a$ 조건으로 $k$를 역산.
- 이 사영 공식은 세 번 재활용된다: (1) 부분공간으로의 사영, (2) 그람-슈미트의 각 단계, (3) 최소제곱해/최적화.

## supplement
노션 정리 문서를 거의 그대로 옮겼습니다 (표현만 카드 형식에 맞춤).
