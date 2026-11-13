---
id: phys-wave-string-speed
title_ko: 줄의 파동 방정식과 파동 속력
title_en: Wave equation on a string / wave speed
importance: 3
tags: [파동방정식, 장력, 선밀도, 횡파, wave equation, tension, linear density, transverse wave]
related: [phys-wave-traveling-wave, phys-wave-standing-wave, phys-mech-newton-second-law]
source: manual
---

## formula
$$
\frac{\partial^2 y}{\partial x^2} = \frac{1}{v^2}\frac{\partial^2 y}{\partial t^2}
$$

$$
v = \sqrt{\frac{F_T}{\mu}}
$$

## conditions
- 균일한 선밀도(linear density) $\mu$의 줄이 장력(tension) $F_T$로 팽팽하게 당겨져 있을 때.
- 진폭이 작아서 기울기 $\left|\frac{\partial y}{\partial x}\right| \ll 1$인 경우.

## explanation
줄을 따라가는 횡파(transverse wave)의 속력은 장력이 클수록, 줄이 가벼울수록 빠르다. 진동수 $f$와 파장 $\lambda$는 $v = f\lambda$로 연결되는데, $v$는 매질이 정하고 $f$는 파원이 정한다.

## derivation
길이 $\Delta x$인 줄 조각에 뉴턴 제2법칙을 세로 방향으로 적용한다. 작은 각 근사에서 장력의 세로 성분은 $F_T\frac{\partial y}{\partial x}$이므로

$$
\mu\,\Delta x\,\frac{\partial^2 y}{\partial t^2} = F_T\left(\left.\frac{\partial y}{\partial x}\right|_{x+\Delta x} - \left.\frac{\partial y}{\partial x}\right|_{x}\right)
$$

양변을 $\mu\,\Delta x$로 나누고 $\Delta x \to 0$으로 보내면 $\frac{\partial^2 y}{\partial t^2} = \frac{F_T}{\mu}\frac{\partial^2 y}{\partial x^2}$이고, 따라서 $v^2 = \frac{F_T}{\mu}$.

## example
$\mu = 0.010\,\text{kg/m}$, $F_T = 100\,\text{N}$이면 $v = \sqrt{100/0.010} = 100\,\text{m/s}$.
