---
id: calc-int-trig-substitution
title_ko: "삼각치환"
title_en: "Trigonometric substitution"
question: "√(a²−x²), √(a²+x²), √(x²−a²) 꼴에 쓰는 삼각치환은?"
tags: [삼각치환, 무리함수 적분, trigonometric substitution]
importance: 3
related: [calc-int-substitution-parts, calc-diff-trig-identities]
source: "book:BLIS편입 적분 1장 (03 삼각치환법)"
verified: false
---

## formula
$$
\sqrt{a^2 - x^2}: \ x = a\sin\theta
$$

$$
\sqrt{a^2 + x^2}: \ x = a\tan\theta
$$

$$
\sqrt{x^2 - a^2}: \ x = a\sec\theta
$$

## conditions
- 각각 $1 - \sin^2\theta = \cos^2\theta$, $1 + \tan^2\theta = \sec^2\theta$, $\sec^2\theta - 1 = \tan^2\theta$를 이용해 근호를 없앤다.
- 이차식은 완전제곱으로 바꿔 쓴다: $x^2 + 2x + 5 = (x+1)^2 + 4 \to x + 1 = 2\tan\theta$.

## explanation
적분 후에는 직각삼각형을 그려 $\theta$의 삼각함수를 다시 $x$로 바꾼다. 유리함수 적분에서 분모가 인수분해되지 않는 이차식일 때도 쓰인다.

## supplement
교재의 공식·정리를 옮기고, 조건·설명은 Claude가 추가했습니다.
