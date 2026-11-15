---
id: phys-em-biot-savart
title_ko: "비오-사바르 법칙과 대표 자기장"
title_en: "Biot-Savart law"
question: "비오-사바르 법칙과 무한 직선, 원호 중심, 원형 고리 축 위의 자기장은?"
tags: [비오-사바르 법칙, 자기장, 직선 도선, 원호, 원형 고리, Biot-Savart law, magnetic field, straight wire, circular loop]
importance: 3
related: [phys-em-ampere-law, phys-em-infinitesimal-elements, phys-em-symmetry-cancellation]
source: "book:BLIS편입 일반물리 16-04~10"
verified: false
---

## formula
$$
d\mathbf{B} = \frac{\mu_0}{4\pi}\frac{i\,d\mathbf{s}\times\hat{\mathbf{r}}}{r^2}, \qquad \mu_0 = 4\pi\times10^{-7}\,\text{T}\cdot\text{m/A}
$$

$$
B_{\text{infinite wire}} = \frac{\mu_0 i}{2\pi R}, \qquad B_{\text{half-infinite (end)}} = \frac{\mu_0 i}{4\pi R}
$$

$$
B_{\text{arc center}} = \frac{\mu_0 i\phi}{4\pi R}
$$

$$
B_{\text{loop center}} = \frac{\mu_0 i}{2R}
$$

$$
B_{\text{loop axis}} = \frac{\mu_0 iR^2}{2(R^2+z^2)^{3/2}}
$$

## conditions
- 반직선 공식은 반직선의 끝에서 수직으로 $R$ 떨어진 점. 원호의 $\phi$는 중심각(rad).
- 방향은 오른손 법칙: 엄지를 전류 방향으로 두면 네 손가락이 자기장 방향 (원형 고리는 네 손가락을 전류 방향으로 감으면 엄지가 중심의 자기장 방향).

## explanation
::fig wire-field | 오른손 엄지를 전류 방향으로 두면, 감아쥔 네 손가락이 자기장의 방향이다.

### 기호 풀이
- $i\,d\mathbf{s}$: 전류가 흐르는 도선의 아주 짧은 토막. $d\mathbf{s}$의 방향은 전류 방향이다. 전기장에서 점전하 조각 $dq$가 하던 역할을 한다.
- $\hat{\mathbf{r}}$: 그 토막에서 자기장을 구하려는 점을 향하는 길이 1인 화살표. $r$은 그 거리.
- $d\mathbf{s}\times\hat{\mathbf{r}}$: 외적이라 크기는 $ds\sin\theta$ ($\theta$: 전류 방향과 점을 향한 방향 사이 각), 방향은 둘 모두에 수직이다. 그래서 자기장은 도선을 향하거나 도선에서 멀어지는 방향이 아니라 도선을 "감는" 방향이 된다.
- $\theta = 0$이면 $\sin\theta = 0$: 토막이 가리키는 방향의 정면(연장선 위)에는 자기장을 만들지 못한다.

### 한 번 따라 하기: 원형 고리의 중심
고리 위 어느 토막에서든 중심까지 거리는 $R$로 같고, 전류 방향은 중심을 향한 방향과 항상 수직($\sin\theta = 1$)이다. 방향도 모두 같다 (고리 면에 수직). 그래서 토막마다 $\dfrac{\mu_0}{4\pi}\dfrac{i\,ds}{R^2}$를 그냥 더하면 되고, $ds$를 다 더하면 둘레 $2\pi R$이다.

$$
B = \frac{\mu_0 i}{4\pi R^2}\cdot 2\pi R = \frac{\mu_0 i}{2R}
$$

원호면 둘레 대신 호의 길이 $R\phi$를 넣어 $\dfrac{\mu_0 i\phi}{4\pi R}$가 된다.

### 쉽게 말하면
전기장을 쪼개서 더했던 것과 똑같은 방법이다. 아주 작은 전류 조각 $i\,d\mathbf{s}$가 만드는 작은 자기장을 다 더한다.

| | 전기장 | 자기장 |
|---|---|---|
| 만드는 것 | $dq$ | $i\,d\mathbf{s}$ |
| 크기 | $\dfrac{1}{4\pi\varepsilon_0}\dfrac{dq}{r^2}$ | $\dfrac{\mu_0}{4\pi}\dfrac{i\,ds\sin\theta}{r^2}$ |
| 방향 | $\hat{\mathbf{r}}$ | $d\mathbf{s}\times\hat{\mathbf{r}}$ |

차이는 크기에 $\sin\theta$가 붙는 것과 방향을 외적으로 따지는 것뿐이다.

### 문제풀이 포인트
- 직선 도선의 연장선 위에 있는 점: $d\mathbf{s}\parallel\hat{\mathbf{r}}$이라 기여 0. 원호 + 직선 조합 문제에서 직선이 중심을 향하면 원호만 계산하면 된다.
- 원형 고리 축 위: 축에 수직인 성분은 대칭으로 상쇄되고 $dB\cos\alpha$만 남는다.
- 반원이면 $\phi=\pi$ → $\dfrac{\mu_0 i}{4R}$, 사분원이면 $\dfrac{\mu_0 i}{8R}$.
- 여러 도선은 각각 구하고 방향을 고려해 벡터로 더한다.

## story
전류가 흐르는 도선을 오른손으로 쥐면, 감싼 손가락 방향으로 자기장이 소용돌이친다. 도선에서 멀어질수록 소용돌이가 약해질 뿐($\frac{1}{R}$), 모양은 항상 도선을 감싸는 원이다.

## supplement
교재 내용을 옮기고, 쉬운 설명·스토리는 Claude가 추가했습니다. 쉬운 설명·그림 보강: 기호 풀이, 원형 고리 중심 자기장 유도, 그림(wire-field).
