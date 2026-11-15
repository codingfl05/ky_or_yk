---
id: phys-mech-gravitation
title_ko: "만유인력과 중력가속도"
title_en: "Newton's law of gravitation"
question: "만유인력 법칙과 지표면·지구 밖·지구 안의 중력은?"
tags: [만유인력, 중력, 중력가속도, 껍질 정리, 지구 내부, gravitation, gravitational acceleration, shell theorem]
importance: 3
related: [phys-mech-gravitational-potential, phys-mech-orbits-kepler, phys-em-coulomb-law]
source: "book:BLIS편입 일반물리 2-04, 8-02~04, 9-24"
verified: false
---

## formula
$$
F = \frac{Gm_1m_2}{r^2}, \qquad g = \frac{GM}{R^2}
$$

$$
F_{\text{inside}} = \frac{GMm}{R^3}\,r \quad (r < R)
$$

## conditions
- $G = 6.67\times10^{-11}\,\text{N}\cdot\text{m}^2/\text{kg}^2$. 구형 천체는 바깥에서 중심에 질량이 모인 점처럼 계산 (껍질 정리).
- 지구 내부 식은 밀도가 균일하다고 가정.

## explanation
::fig sphere-field-graph | 중력도 같은 모양이다. 세로축을 중력가속도 g로 읽으면, 지구 안에서는 중심에서의 거리에 비례하고 밖에서는 1/r²로 줄어든다.

### 먼저 떠올릴 것: 껍질 정리
균일한 구 껍질은 (1) 바깥의 물체에게는 모든 질량이 중심에 모인 점처럼 당기고, (2) 안쪽의 물체에게는 아무 힘도 주지 않는다 (사방에서 당기는 힘이 정확히 상쇄). 지구를 양파처럼 껍질 여러 겹으로 보면, 내가 있는 곳보다 바깥 껍질들은 (2)로 사라지고 안쪽 껍질들만 (1)로 남는다.
안쪽에 남는 질량은 부피에 비례한다: $M_{\text{in}} = M\dfrac{r^3}{R^3}$. 이것이 거리 $r$에서 당기므로

$$
F = \frac{G\left(M\dfrac{r^3}{R^3}\right)m}{r^2} = \frac{GMm}{R^3}\,r
$$

### 세 구간
- 지표면 근처: $r \approx R$로 일정하다고 보고 $F = mg$. 높이 차가 지구 반지름에 비해 작을 때.
- 지구 밖: $F = \dfrac{GMm}{r^2}$. $r$은 지구 중심에서 잰 거리 (높이 $h$면 $R + h$).
- 지구 안: 바깥 껍질의 중력은 상쇄되고 안쪽 질량 $M\dfrac{r^3}{R^3}$만 당긴다. 결과가 $r$에 비례 → 탄성력과 같은 꼴이라 지구를 관통하는 터널 속 물체는 단진동을 한다 ($\omega = \sqrt{\dfrac{GM}{R^3}}$).

전기력의 쿨롱 법칙과 같은 모양이고, 가우스 법칙의 균일한 구와도 같은 구조다.

## story
지구 속으로 내려가면 머리 위의 흙은 모든 방향에서 나를 당겨 서로 지워지고, 발밑의 작은 공만 나를 당긴다. 중심에 가까울수록 그 공이 작아져서 중심에서는 무게가 0이 된다.

## supplement
교재 내용을 옮기고, 쉬운 설명·스토리는 Claude가 추가했습니다. 쉬운 설명·그림 보강: 껍질 정리 복습과 지구 내부 식 유도, 그림(sphere-field-graph 재사용).
