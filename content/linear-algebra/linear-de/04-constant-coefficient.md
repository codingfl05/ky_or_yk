---
id: la-de-constant-coefficient
title_ko: "2계 상수계수 동차 방정식"
title_en: "Second-order homogeneous equations with constant coefficients"
question: "ay″ + by′ + cy = 0의 특성방정식 근에 따른 일반해 세 가지는?"
tags: [특성방정식, 2계 선형, 상수계수, characteristic equation, second-order]
importance: 3
related: []
source: "notion:선대 04. 선형 미분방정식 (16~17강)"
verified: false
---

## formula
$$
ay''+by'+cy=0
$$

$$
\Longrightarrow\quad ar^2+br+c=0
$$

$$
y=\begin{cases} c_1e^{r_1t}+c_2e^{r_2t} & (D>0) \\ e^{kt}\left(c_1\cos lt+c_2\sin lt\right) & (D<0,\ r=k\pm il) \\ (c_1+c_2t)\,e^{r_1t} & (D=0) \end{cases}
$$

$$
D = b^2-4ac
$$

## explanation
중근: 특성다항식 $f(r)$이 중근을 가지면 $f(r_1)=f'(r_1)=0$이 되고, 이로부터 $te^{r_1t}$도 해가 됨을 보일 수 있다. 조르당 표준형의 "$(A-\lambda I)$의 거듭제곱이 0이 되는 구조"와 본질적으로 같은 발상.

### 문제풀이 포인트
- 오일러 공식 $e^{it}=\cos t + i\sin t$로 복소수해를 실수부·허수부로 분리한 것이 둘째 경우의 근거 — 복소근이 나오면 즉시 $k\pm il$을 삼각함수 형태로 쓰는 것을 자동화.
- 삼각함수 합성 $a\sin\theta+b\cos\theta=\sqrt{a^2+b^2}\sin(\theta+\alpha)$은 진폭·위상 문제에서 필수.

## supplement
노션 정리 문서를 거의 그대로 옮겼습니다 (표현만 카드 형식에 맞춤).
