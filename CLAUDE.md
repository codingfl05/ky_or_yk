# CLAUDE.md

편입(연세대/고려대 전기전자) 대비 공식 노트. 모바일용 정적 사이트 (Astro + KaTeX 빌드 타임 렌더링, GitHub Pages).
이 문서는 카드를 추가·수정하는 모든 세션이 지켜야 할 규칙이다. 규칙을 바꾸면 이 문서도 같이 고친다.

## 작업 후 반드시

```bash
npm run validate   # schema + LaTeX + related 검사. 에러 0개여야 함
npm run build      # validate + astro build
```

validate가 실패하면 CI 배포도 실패한다. 커밋 전에 꼭 돌린다.

## 구조

- `config/subjects.yaml`: 과목 → 단원 목록, 순서, 단원별 id prefix. 과목/단원 추가·삭제는 여기서.
- `content/<과목id>/<단원id>/<카드id>.md`: 카드 1개 = 파일 1개. 파일명은 반드시 `<id>.md`.
- `templates/card.md`: 새 카드 템플릿. `npm run new -- <과목id> <단원id> <카드id>`로 복사.
- `src/lib/content.ts`: 로더 + 검증기 (schema는 여기의 `CardFrontmatter`). 빌드와 validate가 같은 코드를 쓴다.
- `sources/notion/`, `sources/pdf/`: 원본 자료. 여기서 카드로 변환한다.

## 카드 형식

```markdown
---
id: phys-em-gauss-law
title_ko: 가우스 법칙
title_en: Gauss's law
formula: |
  \oint_S \mathbf{E}\cdot d\mathbf{A} = \frac{Q_{\text{enc}}}{\varepsilon_0}
importance: 3
tags: [전기장, 전기선속, electric field, electric flux]
related: [phys-em-coulomb-law]
source: manual
verified: true
---

## 조건
...

## 설명
...

## 유도
...(선택)

## 예제
...(선택)
```

### frontmatter 필드

| 필드 | 필수 | 규칙 |
|---|---|---|
| `id` | O | 전역 유일. kebab-case 소문자/숫자. 단원 prefix로 시작 (아래 표). 파일명과 동일 |
| `title_ko` | O | 한국어 정식 명칭. 교재에서 흔히 쓰는 이름 (예: 가우스 법칙, 평행축 정리) |
| `title_en` | O | 영어 정식 명칭. 고유명사만 대문자 (예: Gauss's law, Parallel-axis theorem) |
| `formula` | O | 핵심 공식. 1개면 `\|` block scalar 문자열, 여러 개면 YAML 리스트. display mode로 렌더링됨 |
| `importance` | O | 1~3 정수. 3 = 시험에 자주 나오는 핵심, 2 = 알아야 함, 1 = 참고 |
| `tags` | - | 검색용. 한국어 동의어 + 영어 keyword를 섞어 3~8개. 영어는 소문자 |
| `related` | - | 관련 카드 id. 존재하는 id만 (없으면 validate 에러). 양방향일 필요는 없음 |
| `source` | O | `manual` / `notion` / `notion:<페이지명>` / `<파일명>.pdf` / `<파일명>.pdf#p12` (페이지, 범위는 `#p12-13`) |
| `verified` | - | 기본 true. PDF·Notion에서 자동 추출한 카드는 반드시 `false`. 사용자가 확인 후 true로 바꾼다 |
| `order` | - | 단원 안 정렬 순서(숫자). 없으면 중요도 높은 순 → 이름 순 |

모르는 필드를 넣으면 validate 에러다 (strict).

### 단원별 id prefix

`config/subjects.yaml`이 원본이다. 현재:

- 미적분학 `calc-` / 선형대수학 `la-`
- 미분방정식: 1계 `de-first-`, 고계 선형 `de-linear-`, 라플라스 `de-laplace-`, 연립 `de-system-`, 급수해 `de-series-`
- 일반물리: 역학 `phys-mech-`, 회전 `phys-rot-`, 파동 `phys-wave-`, 열역학 `phys-thermo-`, 전자기 `phys-em-`, 회로 `phys-circ-`

prefix 뒤는 영어 이름을 kebab-case로: `phys-em-gauss-law`, `la-rank-nullity-theorem`, `de-laplace-shift-theorem`.

### 본문 섹션

- 허용 섹션은 `## 조건`, `## 설명`, `## 유도`, `## 예제` 네 개뿐. 이 순서로 쓴다.
- `## 조건`, `## 설명`은 필수. `## 유도`, `## 예제`는 선택 (없으면 섹션째 삭제).
- 첫 섹션 앞에 내용을 두지 않는다. `###` 이하 소제목은 섹션 안에서 자유롭게 써도 된다.
- 조건: 적용 조건, 언제 쓰는지, 부호 규약, 기호 정의. 짧은 bullet 위주.
- 설명: 2~4문장. 의미와 직관, 시험에서 자주 틀리는 포인트.
- 유도: 화면에서 기본으로 접혀 있음. 핵심 단계만.
- 예제: 대표 예제 1개. 결과 식 위주로 짧게.

## 한국어 + 영어 keyword 규칙

- 본문은 한국어로 쓴다.
- 전공 용어는 카드에서 처음 나올 때 `한국어(english)` 형태로 쓴다: `전기선속(electric flux)`, `관성모멘트(moment of inertia)`. 같은 카드에서 두 번째부터는 한국어만.
- 영어 용어는 소문자 (고유명사 제외: Gauss, Laplace, Kirchhoff).
- 한국어 용어는 국내 교재(할리데이 번역본, Kreyszig 번역본 등) 표준 용어를 쓴다.
- `tags`에는 한국어 표현과 영어 keyword를 둘 다 넣어서, "가우스"/"gauss"/"전기장" 어느 쪽으로도 검색되게 한다.

## LaTeX 스타일

KaTeX로 렌더링된다 (MathJax 전용 명령은 안 됨). 인라인 `$...$`, 블록 `$$...$$` (블록은 `$$`를 단독 줄에).

- 벡터: `\mathbf{E}`, `\mathbf{r}'`. 단위벡터: `\hat{\mathbf{n}}`
- 첨자의 단어: `\text{}` → `Q_{\text{enc}}`, `I_{\text{cm}}`, `E_{\text{int}}`. 한 글자 변수 첨자는 그대로 `v_0`
- 미분: `\frac{dy}{dx}`, 편미분 `\frac{\partial^2 y}{\partial x^2}`, 미분 기호 d는 이탤릭 그대로 (`\mathrm{d}` 안 씀)
- 적분: `\int`, 폐적분 `\oint`. 적분 변수 앞 공백 `\,dm`
- 상수: `\varepsilon_0`, `\mu_0` (`\epsilon` 안 씀), `\hbar`
- 단위: 숫자와 단위 사이 `\,` + `\text{}` → `100\,\text{m/s}`, `9.8\,\text{m/s}^2`
- 행렬: `\begin{pmatrix} ... \end{pmatrix}` (선형대수는 pmatrix로 통일), 행렬식은 `\det(A)` 또는 `\begin{vmatrix}`
- 경우 나누기: `\begin{cases} ... \end{cases}`, 분수가 작게 나오면 `\dfrac`
- 수식 안에 한글 금지 (validate 에러). 한글이 필요하면 `\text{한글}`. 가능하면 수식 밖 문장으로 뺀다
- 내적 `\cdot`, 외적 `\times`, 근사 `\approx`, 비례 `\propto`
- 긴 식은 억지로 줄바꿈하지 않는다 (화면에서 수식 영역만 가로 스크롤됨). 단, 논리적으로 나뉘는 식은 `formula`를 리스트로

YAML 주의: `formula`는 `|` block scalar나 리스트 항목(따옴표 없이)으로 쓴다. 큰따옴표 문자열에 넣으면 `\`가 escape되어 깨진다.
리스트 항목이 `[`, `{`, `-`, `:`, `#`, `|`, `>`, `*`, `&`, `!`, `%`, `@`, `` ` `` 로 시작하면 작은따옴표로 감싼다.

## 원본 자료에서 카드 만들기

- PDF (`sources/pdf/`): 공식을 추출해 카드로 만들 때 전부 `verified: false`, `source: <파일명>.pdf#p<페이지>`.
  강의 자료의 기호·부호 규약을 따르되, 교재와 다르면 `## 조건`에 명시한다.
- Notion (`sources/notion/`): 같은 방식, `source: notion:<페이지명>`, `verified: false`.
- 이미 같은 내용의 카드가 있으면 새로 만들지 말고 기존 카드를 보강하고 사용자에게 알린다.
- 확실하지 않은 공식·조건은 지어내지 말고 사용자에게 묻는다.

## 기타

- 사용자 상태(즐겨찾기/틀린 것)는 카드 id로 저장된다. 이미 배포된 카드의 id를 바꾸면 그 카드의 기록이 사라지니 id 변경은 피한다.
- 디자인: 장식 최소, 정보 밀도 높게. 스타일은 `src/styles/global.css`의 토큰(`--bg` 등)으로만 색을 쓴다 (다크 모드 대응).
