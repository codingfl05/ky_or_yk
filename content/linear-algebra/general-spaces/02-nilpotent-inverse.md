---
id: la-gs-nilpotent-inverse
title_ko: "닐포텐트 행렬과 역행렬 항등식"
title_en: "Nilpotent matrices and inverse identities"
tags: [닐포텐트, 멱영행렬, 역행렬, nilpotent]
importance: 2
related: [la-dec-cayley-hamilton]
source: "notion:선대 06. 일반 벡터공간과 선형사상 (22~25강)"
verified: false
---

## formula
$$
A^n = O \implies (I-A)^{-1} = I+A+A^2+\cdots+A^{n-1}
$$

## explanation
등비수열의 합 공식 $(1-x)(1+x+\cdots+x^{n-1})=1-x^n$을 행렬에 그대로 적용한 것. $A^n=O$이므로 $x^n$ 항이 사라진다.

### 문제풀이 포인트
$A^2+2A+I=O$처럼 행렬이 만족하는 다항식 관계식이 주어지면, $A(-A-2I)=I$ 꼴로 만들어 역행렬을 직접 읽는다 — 해밀턴-케일리 활용법과 같은 테크닉.

## supplement
노션 정리 문서를 거의 그대로 옮겼습니다 (표현만 카드 형식에 맞춤).
