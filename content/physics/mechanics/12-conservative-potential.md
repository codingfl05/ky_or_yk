---
id: phys-mech-conservative-potential
title_ko: "보존력과 퍼텐셜 에너지"
title_en: "Conservative forces and potential energy"
question: "보존력의 조건과 퍼텐셜 에너지와의 관계, 중력·탄성 퍼텐셜 에너지는?"
tags: [보존력, 비보존력, 퍼텐셜 에너지, 중력 퍼텐셜 에너지, 탄성 퍼텐셜 에너지, conservative force, potential energy]
importance: 3
related: [phys-mech-energy-conservation, phys-mech-gravitational-potential]
source: "book:BLIS편입 일반물리 4-02~10"
verified: false
---

## formula
$$
\Delta U = -W_c = -\int F\,dx, \qquad F = -\frac{dU}{dx}
$$

$$
U_g = mgh, \qquad U_s = \frac{1}{2}kx^2
$$

## conditions
- 보존력: 한 일이 경로와 무관하고 처음·끝 위치로만 정해지는 힘 (닫힌 경로를 돌면 일이 0). 중력, 탄성력, 전기력.
- 비보존력: 마찰력, 항력, 사람이 미는 힘 등. 퍼텐셜 에너지를 정의할 수 없다.
- 기준점(퍼텐셜 0)은 정하기 나름. 중력은 보통 지면, 탄성력은 원래 길이.

## explanation
::fig potential-curve | 퍼텐셜 에너지 그래프는 지형도다. 물체는 내리막 쪽으로 힘을 받고, 골짜기에서 안정하다.

### 기호 풀이
- $\Delta U = -W_c$: 보존력이 양의 일을 하면(공이 떨어짐) 퍼텐셜 에너지가 그만큼 줄어든다. 통장에서 돈을 꺼내 쓴 것이다. 보존력을 거슬러 움직이면(공을 들어 올림) 보존력이 음의 일을 하고 퍼텐셜 에너지가 는다.
- $F = -\dfrac{dU}{dx}$: $\dfrac{dU}{dx}$는 그래프의 기울기다. 오른쪽으로 갈수록 $U$가 커지는 곳(오르막)에서는 힘이 왼쪽($-$)을 향한다. 힘은 늘 내리막 쪽이라는 말을 식으로 쓴 것이다.
- 확인: $U = mgh$의 기울기는 $mg$, 그래서 힘은 $-mg$ (아래). $U = \dfrac{1}{2}kx^2$의 기울기는 $kx$, 그래서 힘은 $-kx$.

### 쉽게 말하면 (저축)
물체를 들어 올리면 중력이 음의 일을 해서 운동 에너지가 줄지만, 사라진 것이 아니라 "저축"된다. 떨어질 때 그대로 돌려받는다. 이 저축이 퍼텐셜 에너지다. 손실 없이 넣고 뺄 수 있는 은행만 저축이 되는데, 그런 힘이 보존력이다.

- 퍼텐셜 에너지 그래프에서 힘은 기울기의 반대: 내리막 쪽으로 힘이 작용한다. 기울기가 0인 곳이 평형점 (오목하면 안정, 볼록하면 불안정).
- 용수철에 $F = -kx$를 그대로 곱해 $W = -kx^2$로 쓰면 틀린다. 힘이 변하니 적분해야 $\frac{1}{2}kx^2$.

## story
보존력은 수수료 없는 은행, 비보존력은 주식이다. 은행에 넣은 돈은 언제든 그대로 찾을 수 있지만, 주식(마찰)에 넣은 돈은 열이나 소리로 새어 나가 돌아오지 않는다.

## supplement
교재 내용을 옮기고, 쉬운 설명·스토리는 Claude가 추가했습니다. 쉬운 설명·그림 보강: ΔU와 F = −dU/dx 기호 풀이, 그림(potential-curve).
