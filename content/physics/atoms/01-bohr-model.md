---
id: phys-atom-bohr-model
title_ko: "보어의 수소 원자 모델"
title_en: "Bohr model of the hydrogen atom"
question: "보어 모델의 두 가정과, 거기서 나오는 궤도 반지름과 속력은?"
tags: [보어 모델, 보어 반지름, 각운동량 양자화, 수소 원자, 러더퍼드, Bohr model, Bohr radius, quantization of angular momentum, hydrogen atom]
importance: 3
related: [phys-atom-hydrogen-energy, phys-qm-de-broglie, phys-em-coulomb-law, phys-rot-centripetal-force]
source: "book:BLIS편입 일반물리 23-02"
verified: false
---

## formula
$$
L = mvr = n\hbar
\qquad (n = 1, 2, 3, \dots)
$$

$$
r_n = a_0 n^2, \qquad a_0 = \frac{\varepsilon_0 h^2}{\pi m e^2} \approx 5.29 \times 10^{-11}\,\text{m}
$$

$$
v_n = \frac{e^2}{2\varepsilon_0 h}\,\frac{1}{n}
$$

## conditions
- 보어의 가정 1: 전자는 원자핵 주위를 원 궤도로 돈다.
- 보어의 가정 2: 전자의 각운동량이 양자화되어 있다. 정해진 궤도만 가능하다.
- $a_0$: 보어 반지름(Bohr radius). $n = 1$일 때의 궤도 반지름.
- 원자핵은 정지해 있다고 본다. 전자가 하나인 수소 원자에만 맞는다.

## explanation
### 먼저 떠올릴 것
- 쿨롱 법칙: 양성자($+e$)와 전자($-e$) 사이의 전기력은 $\dfrac{1}{4\pi\varepsilon_0}\dfrac{e^2}{r^2}$.
- 등속 원운동에는 중심을 향하는 힘 $mv^2/r$이 필요하다 (구심력).
- 각운동량: 원운동하는 질점은 $L = mvr$.

### 왜 이런 모델이 필요했나
러더퍼드의 알파 입자 산란 실험으로 원자 한가운데에 작고 무거운 양전하 원자핵이 있다는 것이 밝혀졌다. 그런데 고전 물리로는 두 가지를 설명할 수 없었다.
1. 원운동하는 전자는 가속 운동을 하므로 전자기파를 내며 에너지를 잃고 핵으로 떨어져야 한다. 왜 원자는 무너지지 않는가?
2. 그렇게 내는 빛은 연속적이어야 하는데, 수소는 특정 파장의 빛(선 스펙트럼)만 낸다. 왜인가?

### 한 번 따라 하기 (유도)
1. 전기력이 구심력 역할을 한다.

$$
\frac{1}{4\pi\varepsilon_0}\frac{e^2}{r^2} = \frac{mv^2}{r}
$$

2. 양자화 조건에서 $v = \dfrac{n\hbar}{mr}$.
3. 2를 1에 넣어 $v$를 없애면 $r_n = \dfrac{\varepsilon_0 h^2}{\pi m e^2}\,n^2$.

### 물질파로 보면
양자화 조건은 "궤도 둘레에 물질파가 정수 개 들어간다"는 정상파 조건과 같다.

$$
2\pi r = n\lambda, \qquad \lambda = \frac{h}{mv}
\quad\Longrightarrow\quad mvr = \frac{nh}{2\pi}
$$

둘레가 파장의 정수배가 아니면 한 바퀴 돌아온 파동이 자기 자신과 어긋나 상쇄된다.

### 꼭 기억할 비례
- 반지름 $r_n \propto n^2$: $a_0$, $4a_0$, $9a_0$, …
- 속력 $v_n \propto 1/n$: 바깥 궤도일수록 느리다.
- 가장 안쪽 궤도가 $a_0$이고 그보다 가까운 궤도는 없다. 전자가 핵에 떨어지지 않는 이유다.

### 자주 틀리는 포인트
- 보어 모델은 에너지는 정확히 맞히지만 엄밀하게는 틀린 모델이다. 실제 전자는 궤도를 도는 입자가 아니라 확률로 퍼져 있고, 각운동량의 값도 $n\hbar$가 아니다 (바닥 상태의 궤도 각운동량은 0).
- 원자핵의 크기는 $\text{fm}$($10^{-15}\,\text{m}$) 정도로, 원자 크기의 10만 분의 1이다. 원자의 대부분은 빈 공간이다.

## supplement
교재 내용을 옮기고, 유도 단계 정리와 비례 요약은 Claude가 추가했습니다.
