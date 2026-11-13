---
id: phys-em-coulomb-law
title_ko: "쿨롱 법칙과 전하의 성질"
title_en: "Coulomb's law"
question: "두 점전하 사이의 전기력은? 전하량의 기본 성질 두 가지는?"
tags: [쿨롱 법칙, 전기력, 전하, 전하량 보존, 양자화, Coulomb's law, electric force, charge]
importance: 3
related: [phys-em-electric-field, phys-em-gauss-law]
source: "book:BLIS편입 일반물리 13-02~07"
verified: false
---

## formula
$$
\mathbf{F} = k\frac{q_1q_2}{r^2}\,\hat{\mathbf{r}}, \qquad k=\frac{1}{4\pi\varepsilon_0}\approx 9\times10^9\,\text{N}\cdot\text{m}^2/\text{C}^2
$$

$$
q = ne, \qquad e\approx1.602\times10^{-19}\,\text{C}
$$

## conditions
- 서로 정지한 점전하 (정전기, electrostatics). 같은 부호끼리는 척력, 다른 부호끼리는 인력.
- 전하가 여러 개면 각 전기력을 벡터로 더한다 (중첩, superposition).
- $\varepsilon_0$: 진공 유전율(permittivity of free space).

## explanation
### 쉽게 말하면
전하를 띠어도 역학은 그대로다. 질량을 가진 물체에 "전기력"이라는 힘이 하나 더 붙었을 뿐이라서, 힘을 그리고 뉴턴 법칙을 쓰는 방식은 똑같다.

쿨롱 법칙은 만유인력의 전하 버전이다. $G\dfrac{m_1m_2}{r^2}$에서 질량을 전하로, $G$를 $k$로 바꾼 꼴이고, 다른 점은 척력도 있다는 것뿐이다.

### 꼭 기억할 성질
- 전하량 보존(charge conservation): 어떤 과정에서도 전하는 새로 생기거나 사라지지 않는다.
- 양자화(quantization): 모든 전하량은 $e$의 정수배.
- 껍질 정리(shell theorem): 균일한 구껍질은 바깥에서 보면 중심에 모인 점전하, 안쪽에서는 알짜힘 0.
- 같은 크기의 두 도체를 접촉시키면 전하가 똑같이 나뉜다 ($+Q$와 $0$ → $\dfrac{Q}{2}$씩). 접지하면 그 도체의 전하는 $0$이 된다.
- 전자 두 개 사이에서 전기력은 중력의 약 $10^{42}$배. 그래서 문제에 중력 언급이 없으면 보통 무시한다.

## story
중력이 "질량끼리 당기는 힘"이라면 전기력은 "전하끼리 당기거나 미는 힘"이다. 우주에 질량은 플러스만 있어서 중력은 늘 당기기만 하지만, 전하는 플러스·마이너스가 있어서 밀기도 한다.

## supplement
교재 내용을 옮기고, 쉬운 설명·스토리는 Claude가 추가했습니다. 교재의 전자 전하량 1.609×10⁻¹⁹ C는 오타로 보여 1.602×10⁻¹⁹ C로 적었습니다. 전기력/중력 비는 계산하면 약 4×10⁴²이라 교재의 '10⁴³배'를 '약 10⁴²배'로 적었습니다.
