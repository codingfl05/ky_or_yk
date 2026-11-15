---
id: phys-circ-kirchhoff
title_ko: "회로 해석의 기본 (키르히호프 법칙)"
title_en: "Kirchhoff's rules"
question: "회로를 한 바퀴 돌 때와 갈림길에서 성립하는 두 규칙은?"
tags: [키르히호프 법칙, 고리 법칙, 접합점 법칙, 기전력, 내부 저항, Kirchhoff's rules, loop rule, junction rule, emf]
importance: 3
related: [phys-circ-series-parallel, phys-em-ohm-law, phys-em-electric-potential]
source: "book:BLIS편입 일반물리 18-02~04"
verified: false
---

## formula
$$
\sum_{\text{loop}}\Delta V = 0, \qquad \sum i_{\text{in}} = \sum i_{\text{out}}
$$

$$
V_{\text{terminal}} = \mathcal{E} - ir
$$

## conditions
- 도선의 저항은 무시. 내부 저항 $r$이 있는 전원은 이상적인 전원 + 직렬 저항 $r$로 본다.
- 저항을 전류 방향으로 지나면 $-iR$, 전원을 $-$극에서 $+$극으로 지나면 $+\mathcal{E}$.

## explanation
::fig potential-stairs | 전원에서 올라가고, 저항마다 iR씩 내려오고, 도선에서는 그대로다.

### 쉽게 말하면 (전위 = 등산)
1. 전원을 지나면 전위가 $\mathcal{E}$만큼 올라간다 (펌프가 물을 퍼 올림).
2. 저항, 축전기, 코일을 지날 때마다 전위가 내려간다 (전위를 "먹는다").
3. 도선만 지날 때는 전위가 그대로.
4. 한 바퀴 돌아 제자리에 오면 높이 변화는 0 → 고리 법칙(loop rule).
5. 전하는 사라지지 않으므로 갈림길에서 들어온 전류 = 나간 전류 → 접합점 법칙(junction rule).

### 저항 회로 푸는 순서
1. 전체 전압 $V$와 등가 저항 $R_{\text{eq}}$ 구하기
2. 전체 전류 $i=\dfrac{V}{R_{\text{eq}}}$
3. 한 바퀴씩 돌며 각 저항의 전압 $iR$, 전류, 전력 $i^2R$ 구하기 (복잡하면 고리마다 식을 세워 연립)

전원이 여러 개라 합성이 안 되면, 전류 방향을 임의로 정하고 고리 법칙·접합점 법칙으로 연립한다. 답이 음수면 실제 방향이 반대라는 뜻.

### 한 번 따라 하기: 내부 저항이 있는 전지
기전력 $12\,\text{V}$, 내부 저항 $1\,\Omega$인 전지에 $5\,\Omega$ 저항을 연결했다.
1. 한 바퀴 돌며 전위 변화를 더한다: $+12 - i(1) - i(5) = 0$.
2. $i = \dfrac{12}{6} = 2\,\text{A}$.
3. 전지 양 끝에서 실제로 재는 전압(단자 전압)은 전지 안에서 이미 $ir = 2\,\text{V}$를 잃었으므로 $12 - 2 = 10\,\text{V}$. 이것이 바깥 저항에 걸리는 $iR = 10\,\text{V}$와 같다.

전류가 클수록 전지 안에서 잃는 전압이 커져 단자 전압이 내려간다. 전류가 0이면(아무것도 연결 안 함) 단자 전압 = 기전력.

## story
회로는 워터파크의 미끄럼틀이다. 펌프(전원)가 물을 꼭대기까지 올리고, 물은 미끄럼틀(저항)을 타고 내려오면서 높이를 잃는다. 한 바퀴 돌아 출발점에 오면 높이는 원래대로다.

## supplement
교재 내용을 옮기고, 쉬운 설명·스토리는 Claude가 추가했습니다. 쉬운 설명·그림 보강: 내부 저항 계산 예와 그림(potential-stairs).
