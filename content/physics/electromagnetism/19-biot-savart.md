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
교재 내용을 옮기고, 쉬운 설명·스토리는 Claude가 추가했습니다.
