---
id: calc-mv-spherical
title_ko: "구면좌표계 삼중적분"
title_en: "Triple integrals in spherical coordinates"
question: "구면좌표 변환식과 dV, 각 변수의 범위는?"
tags: [구면좌표, 삼중적분, spherical coordinates]
importance: 3
related: [calc-mv-cylindrical, calc-mv-jacobian]
source: "book:BLIS편입 다변수 6-28~6-30 (구면좌표계의 삼중적분)"
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
- 유도: $z$축에서의 거리 $r = \rho\sin\phi$, $z = \rho\cos\phi$를 원주좌표 $x = r\cos\theta$, $y = r\sin\theta$에 대입.
- 영역이 구(구면의 일부)이거나 피적분함수에 $x^2 + y^2 + z^2$이 있을 때 쓴다.
- 대표 영역: 구 $x^2 + y^2 + z^2 \le a^2$, 아이스크림 콘 $x^2 + y^2 + z^2 \le a^2$, $z \ge \sqrt{x^2 + y^2}$ ($0 \le \rho \le a$, $0 \le \phi \le \frac{\pi}{4}$).

## explanation
$\rho^2\sin\phi$를 빠뜨리거나 $\sin\theta$로 잘못 쓰는 실수가 많다. 반지름 $a$인 구의 부피 $\int_0^{2\pi}\int_0^{\pi}\int_0^a \rho^2\sin\phi\,d\rho\,d\phi\,d\theta = \frac{4}{3}\pi a^3$으로 검산할 수 있다. 아이스크림 콘의 부피는 $\frac{2\pi a^3}{3}\left(1 - \frac{\sqrt{2}}{2}\right)$. 원뿔만 있는 영역은 원주좌표도 가능하다. 필기 노트의 "복숭아" $\rho = 1 - \cos\phi$ (구면좌표 카디오이드)의 부피는 $\frac{2\pi}{3}\int_0^\pi (1 - \cos\phi)^3\sin\phi\,d\phi = \frac{8\pi}{3}$.

## supplement
필기 노트 6-29의 변환식 유도와 ρ = 1 − cos φ 영역을 추가했습니다 (부피 8π/3은 직접 계산). 교재 6-28의 변환식과 적분식이 위 식과 같은 것을 확인했습니다 (기호 ρ, φ, θ). 아이스크림 콘 영역의 구간과 부피를 추가했습니다. 교재 기호(텍스트 추출 시 깨짐)를 표준 기호 ρ, φ, θ로 썼습니다. 구 부피 검산을 추가했습니다. 교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
