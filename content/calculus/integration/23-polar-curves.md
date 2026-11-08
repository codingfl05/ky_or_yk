---
id: calc-int-polar-curves
title_ko: "자주 나오는 극곡선 (카디오이드·장미·연주형)"
title_en: "Common polar curves"
question: "장미곡선의 잎 개수와 넓이, 카디오이드와 연주형 곡선의 넓이는?"
tags: [극곡선, 장미곡선, 카디오이드, 연주형, rose curve, cardioid, lemniscate]
importance: 2
related: [calc-int-polar-area, calc-int-polar-coordinates]
source: "book:BLIS편입 적분 5장 (01 극곡선 개형)"
verified: false
---

## formula
$$
r = a\cos n\theta \text{ or } a\sin n\theta: \quad \text{petals} = \begin{cases} n & (n \text{ odd}) \\ 2n & (n \text{ even}) \end{cases}, \qquad A = \begin{cases} \dfrac{\pi a^2}{4} & (n \text{ odd}) \\[1ex] \dfrac{\pi a^2}{2} & (n \text{ even}) \end{cases}
$$

$$
\text{cardioid } r = a(1 + \cos\theta): \ A = \frac{3\pi a^2}{2},\ L = 8a, \qquad \text{lemniscate } r^2 = a^2\cos 2\theta: \ A = a^2
$$

## conditions
- 장미곡선의 전체 넓이는 $n$과 상관없이 $n$의 홀짝으로만 정해진다.

## explanation
시험에 나오는 극곡선은 대부분 원, 카디오이드, 리마송, 장미곡선, 연주형(lemniscate)이다. 직접 여러 번 그려 보고 넓이 값을 외워 두면 넓이 문제를 바로 확인할 수 있다.

## supplement
교재의 극곡선 그림은 대부분 그림이라 추출되지 않아, 표준 결과(잎 개수, 넓이, 카디오이드 길이)로 정리했습니다. 교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
