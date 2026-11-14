---
id: phys-rot-moment-of-inertia
title_ko: "관성모멘트"
title_en: "Moment of inertia"
question: "관성모멘트의 정의와 고리·원판·구·막대의 관성모멘트는?"
tags: [관성모멘트, 회전 관성, 원판, 구, 막대, moment of inertia, rotational inertia]
importance: 3
related: [phys-rot-parallel-axis, phys-rot-torque, phys-rot-rolling]
source: "book:BLIS편입 일반물리 6-02~06"
verified: false
---

## formula
$$
I = \sum m_ir_i^2 = \int r^2\,dm
$$

$$
\begin{aligned}
&I_{\text{ring}} = MR^2, \quad I_{\text{disk}} = \frac{1}{2}MR^2, \\
&I_{\text{solid sphere}} = \frac{2}{5}MR^2, \\
&I_{\text{shell}} = \frac{2}{3}MR^2, \quad I_{\text{rod,center}} = \frac{1}{12}ML^2
\end{aligned}
$$

## conditions
- $r$은 회전축까지의 수직 거리. 위 표는 질량 중심을 지나는 대칭축 기준 (원판은 면에 수직인 축, 막대는 막대에 수직인 축).
- 다른 축이면 평행축 정리.

## explanation
### 쉽게 말하면
회전에서의 질량이다. 같은 질량이라도 축에서 멀리 있을수록 돌리기 힘들다 ($r^2$에 비례).

- 고리 > 구껍질 > 원판 > 속이 찬 구 순서로 크다 ($MR^2$ 앞 계수 $1 > \frac{2}{3} > \frac{1}{2} > \frac{2}{5}$). 질량이 바깥에 몰릴수록 크다.
- 막대를 끝에서 돌리면 $\frac{1}{3}ML^2$ (평행축 정리).
- 여러 부분으로 된 물체는 각각의 $I$를 그냥 더한다.

## story
문을 돌릴 때 손잡이(경첩에서 먼 곳)를 밀면 쉽고 경첩 옆을 밀면 힘들다. 반대로 문 자체의 무게가 경첩에서 멀리 퍼져 있을수록 문을 돌리기 힘들다. 그 "멀리 퍼진 정도"가 관성모멘트다.

## supplement
교재 내용을 옮기고, 쉬운 설명·스토리는 Claude가 추가했습니다.
