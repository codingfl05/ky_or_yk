---
id: calc-mv-spherical
title_ko: "구면좌표계 삼중적분"
title_en: "Triple integrals in spherical coordinates"
question: "구면좌표 변환식과 dV, 각 변수의 범위는?"
tags: [구면좌표, 삼중적분, spherical coordinates]
importance: 3
related: [calc-mv-cylindrical, calc-mv-jacobian]
source: "book:BLIS편입 다변수 6장 (03 구면좌표계의 삼중적분)"
verified: false
---

## formula
$$
x = \rho\sin\phi\cos\theta, \quad y = \rho\sin\phi\sin\theta, \quad z = \rho\cos\phi
$$

$$
dV = \rho^2\sin\phi\,d\rho\,d\phi\,d\theta, \qquad \rho^2 = x^2 + y^2 + z^2
$$

## conditions
- $\rho \ge 0$, $0 \le \phi \le \pi$ ($z$축 양의 방향에서 잰 각), $0 \le \theta \le 2\pi$.
- 구, 구의 일부, 원뿔 $z = \sqrt{x^2 + y^2}$ ($\phi = \frac{\pi}{4}$)이 있는 영역에 쓴다.

## explanation
$\rho^2\sin\phi$를 빠뜨리거나 $\sin\theta$로 잘못 쓰는 실수가 많다. 반지름 $a$인 구의 부피 $\int_0^{2\pi}\int_0^{\pi}\int_0^a \rho^2\sin\phi\,d\rho\,d\phi\,d\theta = \frac{4}{3}\pi a^3$으로 검산할 수 있다.

## supplement
교재 기호(텍스트 추출 시 깨짐)를 표준 기호 ρ, φ, θ로 썼습니다. 구 부피 검산을 추가했습니다. 교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
