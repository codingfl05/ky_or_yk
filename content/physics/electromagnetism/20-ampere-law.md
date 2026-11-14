---
id: phys-em-ampere-law
title_ko: "앙페르 법칙"
title_en: "Ampère's law"
question: "앙페르 법칙과 직선 도선 안팎, 솔레노이드, 토로이드의 자기장은?"
tags: [앙페르 법칙, 암페어 법칙, 솔레노이드, 토로이드, 직선 도선, Ampère's law, solenoid, toroid]
importance: 3
related: [phys-em-gauss-law, phys-em-biot-savart, phys-em-inductance]
source: "book:BLIS편입 일반물리 16-14~22"
verified: false
---

## formula
$$
\oint\mathbf{B}\cdot d\mathbf{s} = \mu_0 i_{\text{enc}}
$$

$$
B_{\text{wire}} = \begin{cases}\dfrac{\mu_0 i}{2\pi R^2}\,r & (r<R)\\ \dfrac{\mu_0 i}{2\pi r} & (r\ge R)\end{cases}
$$

$$
B_{\text{solenoid}} = \mu_0 n i
$$

$$
B_{\text{toroid}} = \frac{\mu_0 N i}{2\pi r}
$$

## conditions
- 대칭이 좋을 때만 $B$를 적분 밖으로 꺼낼 수 있다 (원형 대칭, 긴 솔레노이드, 토로이드).
- 도선 내부 식은 전류가 단면에 균일할 때. $n$: 단위 길이당 감은 수, $N$: 토로이드 전체 감은 수.
- 부호: 오른손 네 손가락을 적분 방향으로 감았을 때 엄지 방향 전류가 $+$.

## explanation
### 쉽게 말하면
가우스 법칙의 자기장 버전이다. "닫힌 고리를 따라 자기장을 한 바퀴 더한 값은 그 고리를 꿰뚫는 전류로만 정해진다."

| 가우스 법칙 | 앙페르 법칙 |
|---|---|
| 닫힌 면(가우스 면) | 닫힌 고리(앙페르 고리) |
| $q_{\text{enc}}$ | $i_{\text{enc}}$ |
| $\oint\mathbf{E}\cdot d\mathbf{A}$ | $\oint\mathbf{B}\cdot d\mathbf{s}$ |

### 쓰는 순서 (3단계)
1. 앙페르 고리 정하기: 자기장이 고리를 따라 일정하고 나란하게 (직선 도선 → 동심원, 솔레노이드 → 직사각형).
2. 고리를 꿰뚫는 전류 $i_{\text{enc}}$ 구하기 (방향 부호 주의, 전류 밀도가 불균일하면 $\int J\,dA$).
3. $B\times(\text{length}) = \mu_0 i_{\text{enc}}$ 풀기.

### 결과 해석
- 도선 내부는 $r$에 비례, 외부는 $\dfrac{1}{r}$에 반비례 (균일한 구 안팎의 전기장과 같은 구조).
- 솔레노이드 내부는 위치와 무관하게 균일, 외부는 거의 0. 반지름과도 무관.
- 토로이드는 솔레노이드를 둥글게 이은 것이라 내부만 있고 $\dfrac{1}{r}$로 변한다.

## story
운동장 트랙을 한 바퀴 돌면서 바람(자기장)을 등에 받은 양을 다 더하면, 트랙 안쪽에 서 있는 선풍기(전류)들의 세기 합과 같다. 트랙 밖에 있는 선풍기는 한쪽에서 밀고 반대쪽에서 막아 합이 0이 된다.

## example
길이 $25\,\text{cm}$에 $150$번 감은 솔레노이드, $i=5\,\text{A}$, $\pi=3$ (교재 예제):

$$
n=\frac{150}{0.25}=600\,\text{m}^{-1}
$$

$$
\begin{aligned}
&B = \mu_0ni = (4\cdot3\times10^{-7})(600)(5) \\
&\quad {}= 3.6\times10^{-3}\,\text{T}
\end{aligned}
$$

## supplement
교재 내용을 옮기고, 쉬운 설명·스토리는 Claude가 추가했습니다. 예제 풀이는 Claude가 계산했습니다.
