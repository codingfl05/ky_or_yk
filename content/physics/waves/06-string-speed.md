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
### 쉽게 말하면
줄을 튕기면 그 흔들림이 옆 조각을 잡아당겨 차례로 전달된다. 줄이 팽팽할수록(장력 $F_T$ 큼) 옆 조각을 세게 당겨 빨리 전달되고, 줄이 무거울수록(선밀도 $\mu$ 큼) 조각이 굼떠서 늦게 전달된다. 그래서 $v = \sqrt{\dfrac{F_T}{\mu}}$다.
- 선밀도 $\mu$: 줄 $1\,\text{m}$의 질량 (kg/m). 질량 $m$, 길이 $L$인 줄이면 $\mu = \dfrac{m}{L}$.
- 얼마나 세게, 얼마나 자주 흔드는지는 속력과 상관없다. 같은 줄이면 큰 파동도 작은 파동도 같은 빠르기로 간다.

### 기호 풀이: $\partial$
$y$는 위치 $x$와 시간 $t$ 두 가지에 따라 변한다. $\dfrac{\partial y}{\partial x}$는 "시간을 멈추고(사진) 본 줄의 기울기", $\dfrac{\partial y}{\partial t}$는 "한 점만 보고 있을 때 그 점이 위아래로 움직이는 속도"다. 둥근 $\partial$는 나머지 하나를 고정했다는 표시일 뿐 계산은 보통 미분과 같다.
맨 위 식(파동 방정식)은 "줄의 휘어진 정도($x$로 두 번 미분)가 그 점의 가속도($t$로 두 번 미분)를 정한다"는 뜻이고, 이 꼴의 식에서 $v$ 자리에 있는 것이 파동의 속력이다.

줄을 따라가는 횡파(transverse wave)의 속력은 장력이 클수록, 줄이 가벼울수록 빠르다. 진동수 $f$와 파장 $\lambda$는 $v = f\lambda$로 연결되는데, $v$는 매질이 정하고 $f$는 파원이 정한다.

## derivation
길이 $\Delta x$인 줄 조각에 뉴턴 제2법칙을 세로 방향으로 적용한다. 작은 각 근사에서 장력의 세로 성분은 $F_T\frac{\partial y}{\partial x}$이므로

$$
\mu\,\Delta x\,\frac{\partial^2 y}{\partial t^2} = F_T\left(\left.\frac{\partial y}{\partial x}\right|_{x+\Delta x} - \left.\frac{\partial y}{\partial x}\right|_{x}\right)
$$

양변을 $\mu\,\Delta x$로 나누고 $\Delta x \to 0$으로 보내면 $\frac{\partial^2 y}{\partial t^2} = \frac{F_T}{\mu}\frac{\partial^2 y}{\partial x^2}$이고, 따라서 $v^2 = \frac{F_T}{\mu}$.

## example
$\mu = 0.010\,\text{kg/m}$, $F_T = 100\,\text{N}$이면 $v = \sqrt{100/0.010} = 100\,\text{m/s}$.

## supplement
쉬운 설명·그림 보강: 쉬운 설명과 편미분 기호 풀이.
