---
id: calc-int-volume
title_ko: "부피와 회전체의 부피 (원판·원통껍질)"
title_en: "Volume (disk and shell methods)"
question: "단면적으로 구하는 부피, 원판법(disk), 원통껍질법(shell) 공식은?"
tags: [부피, 회전체, 원판법, 원통껍질법, disk method, shell method, volume of revolution]
importance: 3
related: [calc-int-surface-area, calc-int-pappus]
source: "book:BLIS편입 적분 4장 (03 정적분과 부피)"
verified: false
---

## formula
$$
V = \int_a^b A(x)\,dx
$$

$$
\text{disk/washer:} \quad V = \pi\int_a^b \left\{R(x)^2 - r(x)^2\right\}dx
$$

$$
\text{shell:} \quad V = 2\pi\int_a^b (\text{radius})(\text{height})\,dx = 2\pi\int_a^b x\,f(x)\,dx \quad (\text{about the } y\text{-axis})
$$

## conditions
- 원판법: 회전축과 같은 변수로 적분 ($x$축 회전이면 $dx$). $R$은 바깥 반지름, $r$은 안쪽 반지름.
- 원통껍질법: 회전축과 다른 변수로 적분 ($y$축 회전인데 $dx$). 반지름 = 축까지의 거리, 높이 = 막대의 길이.

## explanation
공식을 그대로 외우기보다 의미($f(x)$가 반지름인지 높이인지)를 생각하고 대입하는 것이 중요하다. 회전축이 $x = k$ 같은 다른 직선이면 반지름을 축까지의 거리로 바꾼다.

### 주의: 와셔(washer)는 $(R-r)^2$가 아니라 $R^2-r^2$
두 곡선 사이 영역을 회전시키면 단면은 가운데가 뚫린 고리(와셔)다. 넓이는 큰 원에서 작은 원을 빼서 $\pi R^2-\pi r^2$이고, 두 곡선의 차이 $R-r$을 반지름으로 하는 원 $\pi(R-r)^2$이 아니다. 축에서 떨어져 있는 영역을 축에 붙여서 돌리는 꼴이 되어 부피가 작게 나온다.

$$
\pi\int_a^b (R-r)^2\,dx \ne \pi\int_a^b \left(R^2-r^2\right)dx
$$

예) $y=x^2$과 $y=x$ 사이 영역을 $x$축 둘레로 회전 (세종대): $0\le x\le1$에서 $R=x$, $r=x^2$

$$
V = \pi\int_0^1 \left(x^2-x^4\right)dx = \pi\left(\frac{1}{3}-\frac{1}{5}\right) = \frac{2}{15}\pi
$$

$\pi\int_0^1 (x-x^2)^2\,dx$로 계산하면 $\dfrac{\pi}{30}$이 나와 틀린다 (보기에도 없음).

영역이 축에 붙어 있을 때만 $r=0$이라 그냥 원판이 된다. 차이 $R-r$을 그대로 쓰는 것은 원통껍질법의 높이(height)뿐이다.

### 주의: 축이 $y=k$로 옮겨지면 반지름을 축에서 다시 잰다
축이 $y=-1$처럼 영역 밖으로 옮겨지면, 영역과 축 사이 빈 공간이 구멍이 되어 와셔가 된다. 반지름은 곡선 높이가 아니라 축까지의 거리로 다시 쓴다: $R = f(x)-k$, $r = (\text{가까운 경계}) - k$. 그다음 각각 제곱해서 뺀다.

자주 하는 실수: "원기둥 + 원래 회전체"로 쪼개서 $\pi\cdot1^2\cdot(\text{길이}) + \pi\int f^2\,dx$로 더하기. 두 가지가 틀렸다.
- $(f+1)^2 \ne f^2 + 1^2$: 교차항 $2f$가 빠진다.
- 축과 영역 사이의 빈 공간은 구멍이므로 $1^2$은 더하는 게 아니라 빼야 한다.

예) $x$축, $y=x^2$, $x=2$로 둘러싸인 영역을 $y=-1$ 둘레로 회전 (상명대): $R=x^2+1$, $r=0-(-1)=1$

$$
V = \pi\int_0^2\left\{(x^2+1)^2-1^2\right\}dx = \pi\int_0^2\left(x^4+2x^2\right)dx = \pi\left(\frac{32}{5}+\frac{16}{3}\right) = \frac{176}{15}\pi
$$

$2\pi + \pi\int_0^2 x^4\,dx$로 계산하면 $\dfrac{42}{5}\pi$가 나와 틀린다.

정리: 반지름은 항상 축에서 잰 거리로 쓰고, 제곱한 다음 뺀다 ($R^2-r^2$). 차이를 제곱하거나($(R-r)^2$), 합을 쪼개서 제곱하지($a^2+b^2$) 않는다.

## supplement
교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다. 와셔 주의사항은 사용자가 틀린 세종대 예제를 바탕으로 추가했습니다.
