---
id: thermo-entropy-boltzmann
title_ko: 볼츠만의 엔트로피
title_en: Boltzmann entropy
question: "볼츠만의 엔트로피 식은 무엇인가?"
tags: [열역학, thermodynamics, 엔트로피, entropy, 볼츠만, Boltzmann, 경우의 수]
importance: 3
related: [thermo-entropy-counting, thermo-entropy-meaning, thermo-entropy-free-expansion]
source: "notion:뿌리물리 15강"
verified: false
---

## formula
$$
S = k_B \ln \Omega, \qquad k_B \approx 1.38\times10^{-23}\ \mathrm{J/K}
$$

## conditions
경우의 수 $\Omega$(그 상태가 만들어질 수 있는 경우의 수)를 셀 수 있을 때. 가역·비가역과 상관없이 쓸 수 있고, 변화량이 아닌 엔트로피 자체의 값을 줍니다.

## explanation
앞의 적분 공식은 엔트로피의 변화량만 알려줄 뿐 절대적인 값은 말해주지 않습니다. 볼츠만은 무질서하다는 것을 "그 상태가 될 수 있는 경우의 수가 많다"는 뜻으로 보았습니다. 경우의 수 $\Omega$가 많을수록 엔트로피가 큽니다.

변화량으로 쓰면 다음과 같습니다.

$$
\Delta S = k_B \ln\frac{\Omega_f}{\Omega_i}
$$

로그를 쓰는 이유는, 독립인 두 계를 합치면 경우의 수는 곱($\Omega = \Omega_1\Omega_2$)이 되지만 엔트로피는 더해지는 양이어야 하기 때문입니다. $\ln(ab) = \ln a + \ln b$ 이니까요.

## story
방이 어질러진 상태는 경우의 수가 무수히 많습니다. 책이 아무 데나 있어도 다 "어질러진 상태"니까요. 반면 완벽하게 정리된 상태는 경우의 수가 거의 하나뿐입니다. 그래서 어질러진 쪽이 엔트로피가 큽니다.

## supplement
변화량 꼴과 로그를 쓰는 이유(곱 → 합)를 추가했습니다.
