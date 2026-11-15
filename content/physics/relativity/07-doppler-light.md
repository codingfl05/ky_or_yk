---
id: phys-rel-doppler-light
title_ko: "빛의 도플러 효과"
title_en: "relativistic Doppler effect for light"
question: "광원과 감지기가 서로 멀어지거나 가까워질 때 빛의 진동수와 파장은?"
tags: [빛의 도플러 효과, 상대론적 도플러 효과, 적색 편이, 청색 편이, relativistic Doppler effect, redshift, blueshift]
importance: 2
related: [phys-wave-doppler, phys-rel-postulates, phys-rel-time-dilation]
source: "book:BLIS편입 일반물리 21-18"
verified: false
---

## formula
$$
f = f_0\sqrt{\frac{1 - \beta}{1 + \beta}}
$$

$$
\lambda = \lambda_0\sqrt{\frac{1 + \beta}{1 - \beta}}
$$

## conditions
- $f_0$, $\lambda_0$: 광원과 함께 정지한 좌표계에서 잰 고유 진동수, 고유 파장.
- $\beta = v/c$, $v$는 광원과 감지기의 상대 속도.
- 부호 규약: 서로 멀어지면 $\beta > 0$, 가까워지면 $\beta < 0$.
- 광원과 감지기를 잇는 직선 방향으로 움직이는 경우의 식이다.

## explanation
### 먼저 떠올릴 것
- 소리의 도플러 효과에서는 음원이 움직이는지 관찰자가 움직이는지에 따라 식이 달랐다. 소리는 공기(매질)를 타고 가므로 "공기에 대해 누가 움직이는가"가 구별되기 때문이다.
- 빛은 매질이 필요 없다. 그래서 누가 움직이는지 구별할 수 없고, 둘 사이의 상대 속도 하나만 들어간다.

### 쉽게 말하면
- 멀어지면: 진동수가 줄고 파장이 길어진다 → 붉은 쪽으로 이동 (적색 편이, redshift).
- 가까워지면: 진동수가 늘고 파장이 짧아진다 → 푸른 쪽으로 이동 (청색 편이).
- 먼 은하의 빛이 적색 편이를 보이는 것은 우주가 팽창해 은하가 멀어지고 있기 때문이다. 편이량에서 멀어지는 속도를 계산한다.

### 한 번 따라 하기
고유 파장 $500\,\text{nm}$인 빛을 내는 별이 $0.6c$로 멀어지면

$$
\lambda = 500 \times \sqrt{\frac{1.6}{0.4}} = 500 \times 2 = 1000\,\text{nm}
$$

같은 속력으로 다가오면 $\beta = -0.6$이므로 $500 \times \sqrt{0.4/1.6} = 250\,\text{nm}$.

### 자주 틀리는 포인트
- 부호를 외우지 말고 결과로 검산한다. 멀어지면 파장이 길어져야 한다. 그러려면 $\lambda$ 식의 분자가 커야 한다.
- $f$와 $\lambda$의 근호 안은 서로 뒤집힌 꼴이다 ($f\lambda = c$로 일정).
- 소리의 도플러 공식 $f' = f(v \pm v_D)/(v \mp v_S)$를 빛에 쓰면 안 된다.

## supplement
교재 내용을 옮기고, 소리와의 차이 설명과 숫자 예는 Claude가 추가했습니다.
