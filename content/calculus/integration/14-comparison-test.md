---
id: calc-int-comparison-test
title_ko: "이상적분의 비교판정법과 극한비교판정법"
title_en: "Comparison tests for improper integrals"
question: "이상적분의 비교판정법과 극한비교판정법의 조건과 결론은?"
tags: [비교판정법, 극한비교판정법, 이상적분, comparison test, limit comparison test]
importance: 3
related: [calc-int-p-test, calc-int-dirichlet-test]
source: "book:BLIS편입 적분 3장 (02 수렴/발산 판정법)"
verified: false
---

## formula
$$
0 \le f(x) \le g(x): \quad \int_a^\infty g \text{ converges} \Rightarrow \int_a^\infty f \text{ converges}, \qquad \int_a^\infty f \text{ diverges} \Rightarrow \int_a^\infty g \text{ diverges}
$$

$$
f, g > 0,\ \lim_{x \to \infty}\frac{f(x)}{g(x)} = L \ (0 < L < \infty) \;\Rightarrow\; \int_a^\infty f \text{ and } \int_a^\infty g \text{ both converge or both diverge}
$$

## conditions
- 비교판정법(comparison test): 큰 쪽이 수렴하면 작은 쪽도 수렴, 작은 쪽이 발산하면 큰 쪽도 발산. 반대 방향으로는 아무 결론도 없다.
- 극한비교판정법(limit comparison test): $f$, $g$가 양수이기만 하면 되고 대소 관계는 필요 없다. 결론은 양방향.

## explanation
비교 대상은 보통 $\frac{1}{x^p}$ (p-판정)이다. 극한비교는 "최고차항만 남기기"를 엄밀하게 한 것이다.

## supplement
교재는 극한비교판정법 조건에 '0≤f≤g'를 붙였는데, 극한비교판정법은 f, g가 양수이기만 하면 되고 대소 관계는 필요 없어서 그렇게 썼습니다. 교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
