---
id: phys-em-potential-distributions
title_ko: "대표 전하 분포의 전위"
title_en: "Potentials of common charge distributions"
question: "점전하, 쌍극자, 고리 축 위, 원판 축 위의 전위는?"
tags: [전위, 점전하, 쌍극자, 고리, 원판, potential, point charge, dipole, ring, disk]
importance: 3
related: [phys-em-electric-potential, phys-em-infinitesimal-elements, phys-em-symmetry-cancellation]
source: "book:BLIS편입 일반물리 14-10~20"
verified: false
---

## formula
$$
V_{\text{point}} = \frac{kq}{r}, \qquad V_{\text{dipole}} = \frac{k\,p\cos\theta}{r^2}
$$

$$
V_{\text{ring, axis}} = \frac{kq}{\sqrt{z^2+R^2}}
$$

$$
V_{\text{disk, axis}} = \frac{\sigma}{2\varepsilon_0}\left(\sqrt{z^2+R^2}-z\right)
$$

## conditions
- 무한대에서 $V=0$. 쌍극자는 $r\gg d$, $\theta$는 쌍극자 축과 이루는 각.

## explanation
### 쉽게 말하면
전위는 스칼라라서 방향을 따질 필요 없이 부호만 붙여 그냥 더하면 된다. 그래서 전기장보다 계산이 훨씬 쉽다.

- 구하는 두 가지 방법: (1) 점전하 전위 $dV=\dfrac{k\,dq}{r}$를 쪼개서 더하기, (2) 전기장을 $-\int\mathbf{E}\cdot d\mathbf{s}$로 적분.
- 원호나 고리의 중심: 모든 조각까지 거리가 $R$로 같아서 모양·각도와 무관하게 $V=\dfrac{kQ}{R}$. (전기장은 대칭 상쇄를 따져야 하는 것과 대비)
- 축 위의 전기장이 필요하면 전위를 먼저 구하고 $E_z=-\dfrac{dV}{dz}$로 미분하는 게 빠를 때가 많다.
- 같은 크기의 $+$, $-$ 전하 정중앙: 전기장은 0이 아니어도 전위는 0일 수 있고, 반대로 같은 부호 전하 정중앙은 전기장 0이어도 전위는 0이 아니다.

### 전기장과 비교
| 분포 | $E$ | $V$ |
|---|---|---|
| 점전하 | $\dfrac{kq}{r^2}$ | $\dfrac{kq}{r}$ |
| 쌍극자 (축 위) | $\dfrac{2kp}{z^3}$ | $\dfrac{kp}{z^2}$ |
| 고리 (축 위) | $\dfrac{kqz}{(z^2+R^2)^{3/2}}$ | $\dfrac{kq}{\sqrt{z^2+R^2}}$ |
| 원판 (축 위) | $\dfrac{\sigma}{2\varepsilon_0}\left(1-\dfrac{z}{\sqrt{z^2+R^2}}\right)$ | $\dfrac{\sigma}{2\varepsilon_0}\left(\sqrt{z^2+R^2}-z\right)$ |

$E$는 $V$를 거리로 한 번 더 나눈 꼴이다 ($E$와 $V$는 거리 한 개만큼 단위 차이, $E = -\dfrac{dV}{dr}$).

## supplement
교재 내용을 옮기고, 쉬운 설명·스토리는 Claude가 추가했습니다.
