---
id: calc-vec-tnb-frame
title_ko: "단위접선·주법선·종법선 벡터"
title_en: "Unit tangent, normal, and binormal vectors"
question: "곡선 r(t)의 T, N, B 벡터의 정의와 접촉평면의 법선은?"
tags: [단위접선벡터, 주법선벡터, 종법선벡터, 접촉평면, TNB, frenet frame, osculating plane]
importance: 2
related: [calc-vec-curvature-torsion]
source: "book:BLIS편입 다변수 1장 (06 T, N, B 벡터)"
verified: false
---

## formula
$$
\mathbf{T} = \frac{\mathbf{r}'}{|\mathbf{r}'|}, \qquad \mathbf{N} = \frac{\mathbf{T}'}{|\mathbf{T}'|}, \qquad \mathbf{B} = \mathbf{T}\times\mathbf{N}
$$

## conditions
- $\mathbf{N}$은 곡선이 휘는 안쪽을 향한다. $\mathbf{B}$는 $\mathbf{T}$, $\mathbf{N}$ 모두에 수직.
- $\mathbf{B}$의 방향은 $\mathbf{r}'\times\mathbf{r}''$와 같아서, 계산할 때 $\mathbf{B} = \dfrac{\mathbf{r}'\times\mathbf{r}''}{|\mathbf{r}'\times\mathbf{r}''|}$이 빠르다.
- 접촉평면(osculating plane): $\mathbf{T}$, $\mathbf{N}$을 포함하고 법선벡터가 $\mathbf{B}$. 법평면(normal plane): 법선벡터가 $\mathbf{T}$.

## explanation
$\mathbf{N}$을 $\mathbf{T}'$로 직접 구하면 계산이 길어서, $\mathbf{B}$를 먼저 구한 뒤 $\mathbf{N} = \mathbf{B}\times\mathbf{T}$로 구하는 것이 보통 빠르다.

## supplement
B를 r′×r″로 빠르게 구하는 방법과 N = B×T를 추가했습니다. 교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
