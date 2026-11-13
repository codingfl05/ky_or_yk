---
id: phys-em-gauss-law
title_ko: "가우스 법칙"
title_en: "Gauss's law"
question: "폐곡면을 지나는 전기선속은 무엇으로 정해지는가? 가우스 법칙을 쓰는 3단계는?"
tags: [가우스 법칙, 전기선속, 가우스 면, 대칭성, 맥스웰 방정식, Gauss's law, electric flux, gaussian surface, maxwell]
importance: 3
related: [phys-em-gauss-applications, phys-em-electric-field, phys-em-ampere-law]
source: "book:BLIS편입 일반물리 13-24~26"
verified: false
---

## formula
$$
\Phi_E = \oint_S \mathbf{E}\cdot d\mathbf{A}, \qquad \varepsilon_0\oint_S \mathbf{E}\cdot d\mathbf{A} = q_{\text{enc}}
$$

$$
\nabla\cdot\mathbf{E} = \frac{\rho}{\varepsilon_0}
$$

## conditions
- 법칙 자체는 항상 성립 (맥스웰 방정식 중 하나). 가우스 면(Gaussian surface)은 반드시 닫힌 면.
- 이것만으로 $\mathbf{E}$를 구할 수 있는 건 전하 분포가 구·원통·평면 대칭(symmetry)일 때뿐. 대칭에 맞는 가우스 면을 골라 $E$를 적분 밖으로 꺼낸다.
- 유전체 안이면 $\varepsilon_0$ 대신 $\kappa\varepsilon_0$.

## explanation
### 쉽게 말하면
전기선속(electric flux)은 닫힌 면을 "수직으로 뚫고 나가는 전기장의 양"이다. 가우스 법칙은 "닫힌 면을 뚫고 나가는 전기장의 총량은 그 안에 든 전하량만으로 정해진다"는 말이다.

- 안의 알짜 전하가 $+$면 선속도 $+$(나감), $-$면 $-$(들어옴), $0$이면 $0$ (들어온 만큼 나감).
- 바깥 전하는 들어왔다 그대로 나가므로 선속에 기여하지 않는다. (전기장 자체에는 기여함에 주의)
- 면 위에서 $E$가 일정하고 면에 수직이면 $\Phi = EA$로 곱셈이 된다. 그렇게 되도록 가우스 면을 잡는 게 요령.

### 쓰는 순서 (3단계)
1. 가우스 면 정하기: 대칭에 맞게 (점·구 → 구면, 직선 → 원기둥, 평면 → 납작한 원기둥).
2. 면 안의 전하 $q_{\text{enc}}$ 구하기 (밀도 × 부피·넓이·길이).
3. $\varepsilon_0 E A = q_{\text{enc}}$ 풀기.

전기장을 알면 거꾸로 안의 전하량도 구할 수 있다.

## story
닫힌 주머니 안에 전구를 넣었다고 생각하자. 주머니 모양을 아무리 바꿔도 주머니를 뚫고 나오는 빛의 총량은 전구 밝기로만 정해진다. 주머니 밖에 있는 전구 빛은 한쪽으로 들어왔다 반대쪽으로 나가서 총량에 안 잡힌다.

## derivation
점전하 $q$를 중심으로 반지름 $r$인 구면을 잡으면 쿨롱 법칙에서 $E = \frac{q}{4\pi\varepsilon_0 r^2}$로 구면 위에서 일정하므로

$$
\oint \mathbf{E}\cdot d\mathbf{A} = E\,(4\pi r^2) = \frac{q}{\varepsilon_0}
$$

곡면 모양에 무관한 이유는 선속이 입체각(solid angle)에만 의존하기 때문이고, 중첩 원리로 임의의 전하 분포로 확장된다. 두 번째 식은 발산 정리(divergence theorem)로 바꾼 미분형(differential form).

## example
반지름 $R$, 총전하 $Q$로 균일하게 대전된 구 (부피 전하):

$$
E(r) = \begin{cases} \dfrac{Q\,r}{4\pi\varepsilon_0 R^3} & (r < R) \\[2ex] \dfrac{Q}{4\pi\varepsilon_0 r^2} & (r \ge R) \end{cases}
$$

## supplement
교재 내용을 옮기고, 쉬운 설명·스토리는 Claude가 추가했습니다. 기존 카드(공식·유도·예제)에 교재의 전기선속 설명, 3단계 적용법, 스토리를 보강했습니다.
