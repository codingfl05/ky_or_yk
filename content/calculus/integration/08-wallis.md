---
id: calc-int-wallis
title_ko: "Wallis 공식"
title_en: "Wallis formula"
question: "∫₀^{π/2} sinⁿx dx (= cosⁿ)의 값은 n이 홀수/짝수일 때 각각?"
tags: [왈리스 공식, 삼각함수 거듭제곱 적분, wallis formula, reduction formula]
importance: 3
related: [calc-int-symmetry]
source: "book:BLIS편입 적분 2장 (02 정적분의 기하학적 의미)"
verified: false
---

## formula
$$
\begin{aligned}
&\int_0^{\frac{\pi}{2}} \sin^n x\,dx = \int_0^{\frac{\pi}{2}} \cos^n x\,dx \\
&= \begin{cases} \dfrac{n-1}{n}\cdot\dfrac{n-3}{n-2}\cdots\dfrac{2}{3}\cdot 1 & (n \text{ odd}) \\[2ex] \dfrac{n-1}{n}\cdot\dfrac{n-3}{n-2}\cdots\dfrac{1}{2}\cdot\dfrac{\pi}{2} & (n \text{ even}) \end{cases}
\end{aligned}
$$

## conditions
- 구간이 $\left[0, \frac{\pi}{2}\right]$일 때. 예: $\int_0^{\pi/2}\sin^4 x\,dx = \frac{3}{4}\cdot\frac{1}{2}\cdot\frac{\pi}{2} = \frac{3\pi}{16}$, $\int_0^{\pi/2}\cos^5 x\,dx = \frac{4}{5}\cdot\frac{2}{3} = \frac{8}{15}$.
- 다른 구간은 그래프의 대칭으로 확장: $n$이 짝수이면 $\int_0^{\pi}$은 2배, $\int_0^{2\pi}$은 4배. $n$이 홀수이면 $\int_0^{\pi}\sin^n x\,dx$는 2배, $\int_0^{\pi}\cos^n x\,dx = 0$, $\int_0^{2\pi}$은 둘 다 $0$.

## explanation
$n$이 홀수면 끝이 $1$, 짝수면 끝에 $\frac{\pi}{2}$가 붙는다고 외운다. $\int_0^1 (1 - x^2)^n\,dx$ 같은 적분도 $x = \sin\theta$로 치환하면 Wallis 꼴이 된다.

## supplement
교재의 구간 확장 부분은 텍스트가 깨져서, 대칭성에 따른 표준 결과로 정리했습니다. 교재 원본과 같은지 확인해 주세요. 교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
