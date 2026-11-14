---
id: phys-em-electric-dipole
title_ko: "전기 쌍극자 (전기장·돌림힘·에너지)"
title_en: "Electric dipole"
tags: [전기 쌍극자, 쌍극자 모멘트, 돌림힘, 퍼텐셜 에너지, electric dipole, dipole moment, torque]
importance: 2
related: [phys-em-electric-field, phys-em-magnetic-dipole]
source: "book:BLIS편입 일반물리 13-16, 13-42"
verified: false
---

## formula
$$
p = qd\ (\text{direction: } -\to+), \qquad E_{\text{axis}} \approx \frac{1}{2\pi\varepsilon_0}\frac{p}{z^3}
$$

$$
\boldsymbol{\tau} = \mathbf{p}\times\mathbf{E}\ (\tau = pE\sin\theta), \qquad U = -\mathbf{p}\cdot\mathbf{E} = -pE\cos\theta
$$

## conditions
- 전기 쌍극자(electric dipole): 크기가 같은 $+q$, $-q$가 거리 $d$만큼 떨어진 쌍. 축 위 공식은 $z \gg d$일 때.
- $U$는 $\theta=90^\circ$일 때를 $0$으로 잡은 값. $\theta$는 $\mathbf{p}$와 $\mathbf{E}$ 사이 각.

## explanation
### 쉽게 말하면
- 전기장이 $\dfrac{1}{z^3}$로 점전하($\dfrac{1}{z^2}$)보다 빨리 줄어든다. 멀리서 보면 $+$와 $-$가 거의 겹쳐 서로 상쇄되기 때문.
- 축 위 전기장의 방향은 쌍극자 모멘트(dipole moment) $\mathbf{p}$의 방향.
- 균일한 전기장 안에서 $+q$와 $-q$가 받는 힘은 크기가 같고 반대라 알짜힘은 0. 하지만 작용점이 달라서 돌림힘이 생기고, 쌍극자가 전기장 방향으로 돌아가 정렬된다.
- 정렬($\theta=0$)일 때 $U=-pE$로 가장 낮아 안정, 반대($\theta=180^\circ$)일 때 $U=+pE$로 불안정. 정렬 상태에서 반대로 뒤집는 데 필요한 일은 $2pE$.

### 왜 에너지는 내적, 돌림힘은 외적인가
에너지는 숫자(스칼라)이고 "얼마나 나란한가"($\cos\theta$)로 정해지니 내적, 돌림힘은 회전축이라는 방향이 있고 "얼마나 어긋났는가"($\sin\theta$)로 정해지니 외적이다. 둘은 $\tau = -\dfrac{dU}{d\theta}$로 연결된다: $-\dfrac{d}{d\theta}(-pE\cos\theta) = -pE\sin\theta$. 자세한 설명은 자기 쌍극자 카드에 있다 (식의 꼴이 $\mathbf{p}\to\boldsymbol\mu$, $\mathbf{E}\to\mathbf{B}$로 똑같다).

## story
나침반 바늘과 같다. 바늘이 자기장 방향으로 돌아가 서듯, 전기 쌍극자는 전기장 방향으로 돌아가 선다. 그 방향이 에너지가 가장 낮은 "편한 자세"다.

## derivation
축 위 거리 $z$인 점에서

$$
E = kq\left[\frac{1}{(z-d/2)^2}-\frac{1}{(z+d/2)^2}\right] = \frac{kq}{z^2}\cdot\frac{2d/z}{\left(1-(d/2z)^2\right)^2} \approx \frac{2kqd}{z^3} = \frac{1}{2\pi\varepsilon_0}\frac{p}{z^3}
$$

## supplement
교재 내용을 옮기고, 쉬운 설명·스토리, 내적·외적을 쓰는 이유는 Claude가 추가했습니다.
