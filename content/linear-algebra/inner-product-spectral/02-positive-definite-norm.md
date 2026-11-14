---
id: la-ip-positive-definite-norm
title_ko: "양의 정부호 스칼라 내적과 노름"
title_en: "Positive definite scalar product and norm"
tags: [양의 정부호, 노름, 거리, 단위벡터, positive definite, norm, distance]
importance: 2
related: [la-pq-definiteness, la-ip-inner-product-axioms]
source: "notion:선대 07. 내적공간과 스펙트럼 이론 (26~28강)"
verified: false
---

## formula
$$
\begin{aligned}
&\text{positive definite} \\
&\quad {}\iff \langle v,v\rangle>0 \ \text{ for all } v\ne 0
\end{aligned}
$$

$$
\|v\|=\sqrt{\langle v,v\rangle}
$$

$$
d(v,w)=\|v-w\|
$$

$$
\|v\|=1\ (\text{unit vector})
$$

## explanation
15강 "양의 정부호 행렬"의 정의($v^TAv>0$)가 여기서 정확히 "내적이 양의 정부호"라는 조건과 동치임이 드러난다. $\langle v,v\rangle=v^TAv$로 두면 15강의 정부호성 판정법(선도주소행렬식, 고윳값 부호)이 **내적이 잘 정의되는지 판정하는 도구**로 그대로 재사용된다.

## supplement
노션 정리 문서를 거의 그대로 옮겼습니다 (표현만 카드 형식에 맞춤). 검토 보완: 첫 식을 정의 꼴(양의 정부호 ⟺ 0이 아닌 모든 v에 대해 ⟨v,v⟩ > 0)로 고쳐 썼습니다.
