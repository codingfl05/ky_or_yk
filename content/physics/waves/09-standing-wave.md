---
id: phys-wave-standing-wave
title_ko: "정상파와 경계 조건"
title_en: "Standing waves and resonance"
question: "정상파의 마디·배 위치와, 양끝 고정·한쪽 열림·양끝 열림일 때 가능한 파장은?"
tags: [정상파, 마디, 배, 고정단, 자유단, 기본 진동수, 배음, 관, standing wave, node, antinode, harmonics]
importance: 3
related: [phys-wave-interference, phys-wave-string-speed, phys-wave-traveling-wave]
source: "book:BLIS편입 일반물리 10-18~24"
verified: false
---

## formula
$$
y = (2y_m\sin kx)\cos\omega t
$$

$$
\begin{aligned}
&\text{both fixed / both open: } \lambda_n = \frac{2L}{n}, \\
&f_n = \frac{nv}{2L} \quad (n = 1, 2, 3, \ldots)
\end{aligned}
$$

$$
\begin{aligned}
&\text{one end closed: } \lambda_n = \frac{4L}{n}, \\
&f_n = \frac{nv}{4L} \quad (n = 1, 3, 5, \ldots)
\end{aligned}
$$

## conditions
- 진폭과 파장이 같은 두 파동이 반대로 진행할 때. 고정된 끝(닫힌 관 끝)은 마디, 자유로운 끝(열린 관 끝)은 배.
- 마디 사이 간격 $\frac{\lambda}{2}$, 마디와 배 사이 $\frac{\lambda}{4}$.

## explanation
### 쉽게 말하면
반대로 가는 두 파동이 겹치면 제자리에서 출렁이기만 하는 파동이 된다. 늘 0인 점(마디)과 가장 크게 흔들리는 점(배)이 고정된다.

### 끝 조건으로 파장 고르기 (외우지 말고 그리기)
1. 양 끝에 마디/배를 놓는다.
2. 가장 간단한 모양부터 그린다 (기본 진동).
3. 길이 $L$ 안에 $\frac{\lambda}{4}$가 몇 개 들어갔는지 센다.

- 양끝이 같은 종류(고정-고정, 열림-열림): 반 파장의 정수배 → 모든 배음.
- 한쪽만 닫힘: $\frac{\lambda}{4}$의 홀수배 → 홀수 배음만.

### 반사
- 고정단 반사: 위상이 뒤집혀 돌아온다. 자유단 반사: 그대로 돌아온다.

### 줄 문제
$f_n = \dfrac{n}{2L}\sqrt{\dfrac{T}{\mu}}$. 장력을 4배로 하면 진동수 2배.

## story
기타 줄은 양 끝이 묶여 있어서, 그 사이에 반 파장이 딱 정수 개 들어가는 진동만 살아남는다. 손가락으로 줄을 누르면 길이가 짧아져 살아남는 파장이 짧아지고 음이 높아진다.

## supplement
교재 내용을 옮기고, 쉬운 설명·스토리는 Claude가 추가했습니다.
