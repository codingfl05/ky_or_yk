---
id: phys-em-symmetry-cancellation
title_ko: 대칭성으로 상쇄되는 성분 모음
title_en: Cancellation by symmetry
question: "전하·전류 분포에서 대칭성 때문에 상쇄되는 대표적인 경우와 남는 성분은?"
tags: [대칭성, 상쇄, 원호, 고리, 막대, 원판, 껍질 정리, 쌍극자, symmetry, cancellation, arc, ring, rod, disk, shell theorem]
importance: 3
related: [phys-em-infinitesimal-elements, phys-em-gauss-law]
source: manual
verified: false
---

## formula
$$
\begin{aligned}
&\text{arc (angle } \theta\text{, radius } R\text{), at center:} \\
&E = \frac{2k\lambda}{R}\sin\frac{\theta}{2}
\end{aligned}
$$

$$
\left(k=\frac{1}{4\pi\varepsilon_0},\ \lambda=\frac{q}{R\theta}\right)
$$

$$
\text{ring, on axis: } E_z = \frac{kqz}{(R^2+z^2)^{3/2}}
$$

$$
\text{disk, on axis: } E_z = \frac{\sigma}{2\varepsilon_0}\left(1-\frac{z}{\sqrt{R^2+z^2}}\right)
$$

$$
\begin{aligned}
&\text{rod (length } L\text{), perpendicular bisector at } y: \\
&E = \frac{kq}{y\sqrt{y^2+L^2/4}} \ \xrightarrow{L\to\infty}\ \frac{\lambda}{2\pi\varepsilon_0 y}
\end{aligned}
$$

## conditions
- 상쇄는 벡터량($\mathbf{E}$, $\mathbf{B}$, $\mathbf{F}$)에서만 일어난다. 전위 $V$는 스칼라라 상쇄되지 않고 그냥 더해진다 (같은 부호 전하면 오히려 커짐).
- 상쇄 판단 기준: 분포 안에서 "대칭축(또는 대칭면)에 대해 거울상인 두 조각"을 짝지어, 두 $d\mathbf{E}$의 어느 성분이 반대인지 본다. 크기·거리가 같아야 짝이 된다.

## explanation
### 대표 경우 (남는 성분)
1. 원호 → 중심: 이등분선에 대칭인 두 조각의 수직 성분이 상쇄 → 이등분선 방향 성분 $dE\cos\phi$만 남는다. 반원이면 $\dfrac{2k\lambda}{R}$, 사분원이면 $\dfrac{\sqrt2\,k\lambda}{R}$, 완전한 원이면 $0$.
2. 고리 → 축 위의 점: 지름 반대편 조각끼리 반지름 방향 성분이 상쇄 → 축 방향만 남는다. 원판은 고리를 겹친 것이라 똑같이 축 방향만 남는다. 원형 전류의 $\mathbf{B}$도 같은 이유로 축 방향만 남는다 ($dB\cos\theta$).
3. 유한 막대 → 수직이등분선 위의 점: 중점 기준 대칭인 조각끼리 막대 방향 성분이 상쇄 → 수직 성분만 남는다. 무한 직선이면 어느 점에서나 같은 상황.
4. 정다각형 꼭짓점의 같은 전하들 → 중심: $\mathbf{E}=0$ (하지만 $V = n\cdot\dfrac{kq}{r}\neq 0$).
5. 균일한 구껍질 → 내부: $\mathbf{E}=0$ (껍질 정리, shell theorem). 마주 보는 두 원뿔 조각의 넓이가 거리의 제곱에 비례해서 $\dfrac{1}{r^2}$과 정확히 상쇄되기 때문. 가우스 법칙으로도 바로 나온다.
6. 전기 쌍극자(electric dipole) → 수직이등분선 위의 점: $+q$와 $-q$의 장에서 이등분선 방향 성분이 상쇄 → 쌍극자 축에 평행한 성분만 남는다 ($-q$ 쪽을 향함).
7. 무한 평행판 두 장 ($+\sigma$, $-\sigma$): 바깥에서는 상쇄되어 $0$, 사이에서는 더해져 $\dfrac{\sigma}{\varepsilon_0}$.
8. 균일한 자기장 속 닫힌 전류 고리: 알짜 자기력 $0$. 직선 도선 옆 직사각형 고리처럼 $B$가 위치마다 달라도, 도선에 수직인 두 변은 서로 반대 방향 전류라 힘이 상쇄된다.

### 문제풀이 포인트
- 적분 전에 "어느 성분이 지워지는가"부터 정하고, 남는 성분만 $\cos$를 붙여 적분한다.
- 같은 모양의 분포가 여러 개면 크기 인자만 비교한다. 예) 같은 각도의 원호는 $E\propto\dfrac{\lambda}{R}\propto\dfrac{q}{R^2}$.
- 대칭이 깨지는 부분(원호의 한쪽만 다른 전하, 고리의 일부가 끊김)만 따로 계산하고 나머지는 상쇄로 지운다.

## derivation
원호 공식: 중심각 $\theta$인 원호를 이등분선을 기준으로 $-\dfrac{\theta}{2}\le\phi\le\dfrac{\theta}{2}$로 둔다. 조각 $dq=\lambda R\,d\phi$가 중심에 만드는 장의 크기는 $\dfrac{k\lambda R\,d\phi}{R^2}$이고, 이등분선 성분만 남으므로

$$
E = \int_{-\theta/2}^{\theta/2}\frac{k\lambda}{R}\cos\phi\,d\phi = \frac{2k\lambda}{R}\sin\frac{\theta}{2}
$$

## example
진단 평가 4회 2번: 같은 사분면의 동심 사분원 3개 ($R$에 $+Q$, $2R$에 $-4Q$, $3R$에 $+9Q$). 각 원호의 장은 모두 같은 이등분선 위에 있고 크기는 $\dfrac{q}{R^2}$에 비례: $\dfrac{Q}{R^2}$, $\dfrac{4Q}{4R^2}$, $\dfrac{9Q}{9R^2}$로 모두 같다. 부호가 $+,-,+$이므로 두 개가 상쇄되고 원호 하나만 남는다.

$$
E = \frac{\sqrt2\,k}{R}\cdot\frac{Q}{R\pi/2} = \frac{2\sqrt2\,kQ}{\pi R^2} = \frac{Q}{\sqrt2\,\pi^2\varepsilon_0 R^2}
$$

## supplement
사용자 요청으로 Claude가 새로 작성한 카드입니다 (원본 노트 없음). 진단 평가 4회 2번 강의 화면의 원호 상쇄 풀이를 출발점으로, 자주 나오는 상쇄 사례 8개를 모았습니다.
