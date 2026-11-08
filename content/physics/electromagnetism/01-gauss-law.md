---
id: phys-em-gauss-law
title_ko: 가우스 법칙
title_en: Gauss's law
importance: 3
tags: [전기장, 전기선속, 가우스면, 대칭성, 맥스웰 방정식, electric field, electric flux, gaussian surface, maxwell]
related: []
source: manual
---

## formula
$$
\oint_S \mathbf{E}\cdot d\mathbf{A} = \frac{Q_{\text{enc}}}{\varepsilon_0}
$$

$$
\nabla\cdot\mathbf{E} = \frac{\rho}{\varepsilon_0}
$$

## conditions
- 법칙 자체는 항상 성립 (맥스웰 방정식 중 하나).
- 이것만으로 $\mathbf{E}$를 구할 수 있는 건 전하 분포가 구·원통·평면 대칭(symmetry)일 때뿐. 대칭에 맞는 가우스면(Gaussian surface)을 골라 $E$를 적분 밖으로 꺼낸다.

## explanation
폐곡면을 지나는 전기선속(electric flux)은 곡면 내부의 알짜 전하에만 비례하고, 외부 전하는 기여하지 않는다. 두 번째 식은 발산 정리(divergence theorem)로 바꾼 미분형(differential form).

## derivation
점전하 $q$를 중심으로 반지름 $r$인 구면을 잡으면 쿨롱 법칙에서 $E = \frac{q}{4\pi\varepsilon_0 r^2}$로 구면 위에서 일정하므로

$$
\oint \mathbf{E}\cdot d\mathbf{A} = E\,(4\pi r^2) = \frac{q}{\varepsilon_0}
$$

곡면 모양에 무관한 이유는 선속이 입체각(solid angle)에만 의존하기 때문이고, 중첩 원리로 임의의 전하 분포로 확장된다.

## example
반지름 $R$, 총전하 $Q$로 균일하게 대전된 구 (부피 전하):

$$
E(r) = \begin{cases} \dfrac{Q\,r}{4\pi\varepsilon_0 R^3} & (r < R) \\[2ex] \dfrac{Q}{4\pi\varepsilon_0 r^2} & (r \ge R) \end{cases}
$$
