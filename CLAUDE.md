# CLAUDE.md

편입(연세대/고려대 전기전자) 대비 공식 노트 + 문제 복습. 모바일용 정적 사이트 (Astro + KaTeX 빌드 타임 렌더링, Render Static Site 배포, 설정은 `render.yaml`).
이 문서는 카드를 추가·수정하는 모든 세션이 지켜야 할 규칙이다. 규칙을 바꾸면 이 문서도 같이 고친다.

## 작업 후 반드시

```bash
npm run validate   # schema + LaTeX(KaTeX) 검사. 에러 0개여야 함 (경고는 통과)
npm run build      # validate + astro build
```

validate가 실패하면 Render 빌드도 실패해서 배포되지 않는다. 커밋 전에 꼭 돌린다.

## 구조

- `config/subjects.yaml`: 과목 → 단원 목록, 순서, 단원별 id prefix. 과목/단원 추가·삭제·순서는 여기서.
- `content/<과목id>/<단원id>/_chapter.md`: 단원 이름·소개 (선택). 있으면 config의 `name`보다 우선.
- `content/<과목id>/<단원id>/<NN>-<slug>.md`: 카드 1개 = 파일 1개. `NN`(두 자리)이 단원 안 순서.
- `content/problems/<과목id>/<단원id>/<NN>-<slug>.md`: 문제 카드. 이미지는 `public/img/problems/`.
- `templates/card.md`: 새 카드 템플릿. `npm run new -- <과목id> <단원id> <카드id>`로 다음 번호 파일을 만든다.
- `src/lib/content.ts`: 로더 + 검증기 (schema는 여기의 `CardFrontmatter`, `ChapterFrontmatter`). 빌드와 validate가 같은 코드를 쓴다.
- `sources/notion/`, `sources/pdf/`: 원본 자료. 여기서 카드로 변환한다.
- `inbox/`: Gemini/Antigravity 결과물 임시 폴더. `scripts/ingest.ts`(`npm run ingest`)가 처리한다. `main`에는 README만 둔다.
- `docs/gemini-instructions.md`: Gemini/Antigravity에게 주는 문제 카드 작성 지시문.
- `.agents/rules/problem-cards.md`: Antigravity 워크스페이스 규칙 (위 지시문을 참조). 지시문을 바꾸면 같이 확인.

## 카드 형식

```markdown
---
id: phys-em-gauss-law
title_ko: 가우스 법칙
title_en: Gauss's law
question: "폐곡면을 지나는 전기선속은 무엇으로 정해지는가?"
tags: [전기장, 전기선속, electric field, electric flux]
importance: 3
related: [phys-em-coulomb-law]
source: manual
verified: true
---

## formula
$$
\oint_S \mathbf{E}\cdot d\mathbf{A} = \frac{Q_{\text{enc}}}{\varepsilon_0}
$$

## conditions
...

## explanation
...
```

### 파일명

- `<NN>-<slug>.md`. `NN`은 두 자리 번호(단원 안에서 중복 금지), `slug`는 보통 id에서 단원 prefix를 뺀 것 (`phys-em-gauss-law` → `01-gauss-law.md`).
- 파일명과 id는 따로 관리한다. 순서를 바꿀 때는 파일명 번호만 바꾸고 id는 그대로 둔다.

### frontmatter 필드

frontmatter에는 LaTeX를 쓰지 않는다 (`\`, `$`가 있으면 validate 에러). 수식은 본문에서만.

| 필드 | 필수 | 규칙 |
|---|---|---|
| `id` | O | 전역 유일. kebab-case 소문자/숫자. 단원 prefix로 시작 (아래) |
| `title_ko` | O | 한국어 정식 명칭 |
| `title_en` | O | 영어 정식 명칭. 고유명사만 대문자 |
| `question` | - | 체크리스트 문항 = 플래시카드 앞면. 없으면 앞면은 title_ko + conditions |
| `tags` | - | 검색용. 한국어 동의어 + 영어 keyword를 섞어서 |
| `importance` | O | 1~3 정수. 3 = 시험에 자주 나오는 핵심, 2 = 알아야 함, 1 = 참고 |
| `related` | - | 관련 카드 id. 카드 간 링크가 된다. 없는 id는 빌드 경고 (에러 아님) |
| `source` | O | `manual` / `notion` / `notion:<페이지명>` / `book:<교재명 쪽>` (교재 사진·스크린샷) / `<파일명>.pdf` / `<파일명>.pdf#p12` (범위는 `#p12-13`) |
| `verified` | - | 기본 true. PDF·Notion에서 가져온 카드는 `false`. 사용자가 확인 후 true로 바꾼다 |

모르는 필드를 넣으면 validate 에러다 (strict).

### 단원별 id prefix

`config/subjects.yaml`이 원본이다. 현재:

- 미적분학: 미분 `calc-diff-`, 적분 `calc-int-`, 급수 `calc-`, 벡터와 공간도형 `calc-vec-`, 다변수 미적분 `calc-mv-`, 선적분과 면적분 `calc-vc-` / 선형대수학 `la-`
- 미분방정식: 1계 `de-first-`, 고계 선형 `de-linear-`, 라플라스 `de-laplace-`, 연립 `de-system-`, 급수해 `de-series-`
- 일반물리: 역학 `phys-mech-`, 회전 `phys-rot-`, 파동 `phys-wave-`, 열역학 `phys-thermo-`, 전자기 `phys-em-`, 회로 `phys-circ-`, 열역학 완결(엔트로피와 열기관) `thermo-`

### 본문 섹션

섹션 이름은 영어로 고정. 이 순서로 쓰고, 없는 섹션은 생략한다 (빈 섹션은 에러).

| 섹션 | 화면 | 내용 |
|---|---|---|
| `## formula` | 항상 보임 (가리기 모드 대상) | 핵심 공식. `$$` 블록 여러 개 가능. 없으면 경고 |
| `## conditions` | 펼치면 | 적용 조건, 부호 규약, 기호 정의 |
| `## explanation` | 펼치면 | 의미와 직관, 자주 틀리는 포인트 |
| `## story` | 펼치면 ("💬 스토리") | 비유·스토리 |
| `## derivation` | 기본 접힘 | 유도 핵심 단계 |
| `## example` | 기본 접힘 | 대표 예제 |
| `## supplement` | 검토 모드에서만 | 원본 노트에 없던 내용을 보완한 부분이 무엇인지 |

- 첫 섹션 앞에 내용을 두지 않는다. `###` 이하 소제목은 섹션 안에서 자유롭게.
- 플래시카드: 앞면 = `question` (없으면 title_ko + conditions), 뒷면 = formula + explanation.
- 검토 모드: 설정 → 검토 모드를 켜거나, 카드의 "검토 필요" 배지를 탭하거나, 검토 페이지(`/review/`)에서 supplement가 보인다.

### 단원 파일 `_chapter.md`

```markdown
---
chapter_id: thermo-entropy
subject: physics
title_ko: "열역학 완결 — 엔트로피와 열기관"
title_en: "Entropy and Heat Engines"
source: "notion:뿌리물리 스토리텔링 노트 — 15강"
---

단원 소개 문구 (단원 페이지 맨 위에 표시)
```

- `chapter_id`, `subject`는 폴더 이름과 같아야 한다. `title_en`, `source`는 선택.
- 단원 순서와 prefix는 여전히 `config/subjects.yaml`에서 관리한다. `_chapter.md`가 있으면 config의 `name`은 생략 가능.

## 문제 카드

공식 카드와 별도. 위치는 `content/problems/<과목>/<단원>/<NN>-<slug>.md` (과목/단원은 config에 있는 것).
문제 원문은 사용자가 책으로 회독한다. 카드는 글로만: 출처, 문제 요약 1~2줄(`problem`), 정답 한 줄, 핵심 아이디어(화살표 흐름), 막힌 곳.
전체 풀이(`solution`)와 사진은 기본적으로 쓰지 않는다 (그림이 꼭 필요한 문제만 책 그림 사진을 첨부).

```markdown
---
id: prob-thermo-carnot-two-reservoirs
title_ko: "두 열저장체 사이 카르노 기관의 효율"
source: "2024 연세대 편입 3번"
difficulty: 3
tags: [카르노, carnot]
related: [thermo-carnot-efficiency]
images: [prob-thermo-carnot-two-reservoirs-1.webp]
verified: false
---

## problem
## answer
## key-idea
## solution
## mistakes
## supplement
```

| 필드 | 필수 | 규칙 |
|---|---|---|
| `id` | O | `prob-`로 시작. 보통 `prob-<단원prefix>-<slug>`. 공식 카드와 통틀어 유일 |
| `title_ko` | O | 문제를 한 줄로 요약한 제목 |
| `source` | O | 시험명·연도·번호 또는 교재명 (자유 형식, LaTeX 금지) |
| `difficulty` | O | 1~3 (3 = 어려움) |
| `tags`, `related` | - | 공식 카드와 같음. 문제 → 공식 related는 공식 카드에 "이 공식을 쓰는 문제"로 역링크된다 |
| `images` | - | `public/img/problems/` 안의 파일명. 없는 파일이면 에러 |
| `verified` | - | Gemini가 만든 카드는 `false` |

섹션: `problem`(문제 요약, 항상 보임), `answer`, `key-idea`(화살표 흐름), `solution`(선택, 접힘), `mistakes`, `supplement`(검토 모드에서만).
`problem` 또는 `images` 중 하나는 필수, `answer`·`key-idea`가 없으면 경고. 플래시카드: 앞면 = 출처 + 문제 요약, 뒷면 = 핵심 아이디어 + 막힌 곳 + 정답.

## 문제 올리기 (Gemini 결과물 최종 검토) — `/ingest`

사용자가 Gemini 묶음(붙여넣은 텍스트 또는 첨부 .md)과 문제 사진을 주거나, "inbox 브랜치 처리해"라고 하면 이 절차를 따른다.
비용을 아끼는 게 목적이다: 사진은 열어 보지 않고, 검토는 가볍게 한다.

1. 입력 준비
   - 붙여넣은 텍스트: 그대로 `inbox/bundle-<날짜시각>.md`로 저장. 첨부 파일·사진은 업로드 경로를 그대로 인자로 쓴다.
   - inbox 브랜치 (Antigravity 클라우드, 기본 경로): `main` 최신에서 시작해
     `git fetch origin 'refs/heads/inbox/*:refs/remotes/origin/inbox/*'` → `git checkout origin/inbox/<이름> -- inbox/`로 묶음만 가져온다.
     브랜치를 merge하지 않는다.
     images에 "사진1" 등이 있으면 사용자가 그 순서로 첨부한 그림 사진을 `--map=사진1=<경로>`로 연결하고,
     384px 정도로 줄인 사본만 보고 카드 요약과 맞는 그림인지 확인한다 (첨부가 없으면 요청).
2. `npm run ingest -- <묶음.md> <사진...>` (inbox/를 썼으면 인자 없이 `npm run ingest -- --clean`)
   - "사진을 찾지 못했습니다"면: 업로드 파일명이 Gemini가 쓴 이름과 다른 경우다. 사진 수가 1장이면 바로 `--map`.
     여러 장이면 각 사진을 가로 384px 정도로 줄인 사본(스크래치 폴더)만 보고 매칭해서 `--map=<이름>=<경로>`.
   - 실패하면 아무 파일도 쓰지 않으니 고쳐서 다시 실행하면 된다.
3. 가벼운 검토 (새 `.md`만 읽는다. 사진은 열지 않는다)
   - `npm run validate` 에러 0개. KaTeX 에러는 문법만 최소로 고친다.
   - 폴더(과목/단원)가 내용과 맞는지, 요약·정답·핵심 아이디어가 서로 맞는지, 깨진 흔적(빈 수식, 반복된 문장)이 없는지.
   - 핵심 아이디어가 화살표 흐름(1~3단계)이 아니라 긴 풀이로 써져 있으면 알려준다 (내용은 고치지 않음).
   - `related`: `grep -rh "^id:" content/`로 공식 카드 id를 보고, 이 문제에 실제로 쓰이는 공식 카드 id를 1~3개 채운다.
   - 사용자 풀이 내용은 고치지 않는다. 틀려 보이면 고치지 말고 보고만 한다 (필요하면 `## supplement`에 한 줄).
   - `verified: false`는 그대로 둔다 (사용자가 앱에서 확인 후 바꿈).
4. `npm run build` 통과 확인 → 커밋 (`문제 N개 추가: <출처 요약>`) → `main`에 push (Render 자동 배포).
   커밋 전에 `inbox/`에 README 말고 남은 파일이 없는지 확인한다 (`--clean`이 지움).
   inbox 브랜치였다면 push 후 원격 inbox 브랜치를 지운다 (`git push origin --delete inbox/...`).
   현재 세션의 작업 브랜치가 따로 지정돼 있으면 그 브랜치에도 push한다.
5. 사용자에게 보고: 추가한 문제 목록(제목·출처·난이도), 고친 것, 이상해 보였던 것.

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
- 긴 식은 억지로 줄바꿈하지 않는다 (수식 영역과 표는 화면에서 가로 스크롤됨). 논리적으로 나뉘는 식은 `## formula`에 `$$` 블록을 여러 개로

YAML 주의: frontmatter 문자열에 `:`나 `#`이 들어가면 큰따옴표로 감싼다 (`question: "...?"`).

## 원본 자료에서 카드 만들기

- 사용자가 직접 다듬어 준 카드 내용은 요약·재작성하지 않고 그대로 파일로 만든다. 수식 오류·오탈자·스타일 차이를 발견하면 고치지 말고 카드 id와 위치를 보고한다.
- 원본에 없던 내용을 보완했다면 `## supplement`에 무엇을 보완했는지 적는다.
- PDF (`sources/pdf/`): 공식을 추출해 카드로 만들 때 전부 `verified: false`, `source: <파일명>.pdf#p<페이지>`.
  강의 자료의 기호·부호 규약을 따르되, 교재와 다르면 `## conditions`에 명시한다.
- Notion (`sources/notion/`): 같은 방식, `source: notion:<페이지명>`, `verified: false`.
- 교재 사진·스크린샷: 같은 방식, `source: book:<교재명 쪽>` (예: `book:BLIS편입 적분 6-02`), `verified: false`. 교재의 오류는 바로잡아 쓰고 `## conditions`나 `## supplement`에 교재 표기와 다른 점을 적는다.
- 이미 같은 내용의 카드가 있으면 새로 만들지 말고 기존 카드를 보강하고 사용자에게 알린다.
- 확실하지 않은 공식·조건은 지어내지 말고 사용자에게 묻는다.

## 기타

- 사이트는 개인 복습용이다. `noindex` 메타와 `public/robots.txt`로 검색 노출을 막지만, 주소를 아는 사람은 볼 수 있다.
- 사용자 상태(즐겨찾기/틀린 것)는 카드 id로 저장된다. 이미 배포된 카드의 id를 바꾸면 그 카드의 기록이 사라지니 id 변경은 피한다.
- 디자인: 장식 최소, 정보 밀도 높게. 스타일은 `src/styles/global.css`의 토큰(`--bg` 등)으로만 색을 쓴다 (다크 모드 대응).
