---
id: phys-em-electric-field
title_ko: "전기장"
title_en: "Electric field"
question: "전기장의 정의와 점전하가 만드는 전기장은?"
tags: [전기장, 시험 전하, 전기력선, 점전하, electric field, test charge, field line]
importance: 3
related: [phys-em-coulomb-law, phys-em-infinitesimal-elements, phys-em-symmetry-cancellation]
source: "book:BLIS편입 일반물리 13-10~14"
verified: false
---

## formula
$$
\mathbf{E} = \frac{\mathbf{F}}{q_0}, \qquad \mathbf{E}_{\text{point}} = k\frac{Q}{r^2}\,\hat{\mathbf{r}}, \qquad \mathbf{F} = q\mathbf{E}
$$

## conditions
- $q_0$: 전기장을 재기 위한 작은 양(+)의 시험 전하(test charge). 단위는 $\text{N/C} = \text{V/m}$.
- 방향 기준은 항상 양전하. 음전하는 전기장과 반대 방향으로 힘을 받는다.

## explanation
### 쉽게 말하면
전기장은 "전하의 존재감"이다. 전하 $Q$가 있으면 주변 공간이 "여기 오는 전하는 힘을 받는다"는 상태로 바뀐다. 힘은 받는 전하 $q_0$에 따라 달라지니까, $q_0$로 나눠서 만드는 쪽($Q$)의 영향만 남긴 것이 전기장이다.

- 만드는 전하($Q$)와 받는 전하($q$)를 구분하는 게 핵심. 전기장을 알면 그 자리에 어떤 전하를 놓든 $\mathbf{F}=q\mathbf{E}$로 힘이 바로 나온다.
- 벡터이므로 여러 전하의 전기장은 벡터 합.
- 전기력선은 $+$에서 나와 $-$로 들어간다. 촘촘할수록 세다.

### 모든 전기장 계산의 순서
1. 전기장을 구할 지점까지의 거리를 정한다 (보통 축 위).
2. 전하를 점전하 조각으로 쪼개 각각의 전기장을 더한다 (= 적분).
3. 대칭을 이용해 상쇄되는 성분을 지우고 식을 간단히 한다.

대칭이 아주 좋으면 이 대신 가우스 법칙을 쓴다.

## story
지구 근처의 중력장 $g$와 같다. 지구가 만든 중력장 $g$ 안에 질량 $m$을 놓으면 힘 $mg$를 받듯, 전하가 만든 전기장 $E$ 안에 전하 $q$를 놓으면 힘 $qE$를 받는다. 다른 점은 지구 중력장은 늘 같지만 전기장은 만드는 전하마다 모양이 제각각이라는 것.

## supplement
교재 내용을 옮기고, 쉬운 설명·스토리는 Claude가 추가했습니다.
