# CLAUDE.md

편입(연세대/고려대 전기전자) 대비 공식 노트 + 문제 복습. 모바일용 정적 사이트 (Astro + KaTeX 빌드 타임 렌더링, Render Static Site 배포, 설정은 `render.yaml`).
이 문서는 카드를 추가·수정하는 모든 세션이 지켜야 할 규칙이다. 규칙을 바꾸면 이 문서도 같이 고친다.

## 작업 후 반드시

```bash
npm run validate   # schema + LaTeX(KaTeX) 검사. 에러 0개여야 함 (경고는 통과)
npm run build      # validate + astro build
```

validate가 실패하면 Render 빌드도 실패해서 배포되지 않는다. 커밋 전에 꼭 돌린다.

수식을 추가·수정했으면 `npm run check:width`로 폰 화면 폭도 확인한다 (아래 "폰 화면 폭과 수식 줄바꿈").

## 구조

- `config/subjects.yaml`: 과목 → 단원 목록, 순서, 단원별 id prefix. 과목/단원 추가·삭제·순서는 여기서.
- `content/<과목id>/<단원id>/_chapter.md`: 단원 이름·소개 (선택). 있으면 config의 `name`보다 우선.
- `content/<과목id>/<단원id>/<NN>-<slug>.md`: 카드 1개 = 파일 1개. `NN`(두 자리)이 단원 안 순서.
- `content/problems/<과목id>/<단원id>/<NN>-<slug>.md`: 문제 카드. 이미지는 `public/img/problems/`.
- `templates/card.md`: 새 카드 템플릿. `npm run new -- <과목id> <단원id> <카드id>`로 다음 번호 파일을 만든다.
- `src/lib/content.ts`: 로더 + 검증기 (schema는 여기의 `CardFrontmatter`, `ChapterFrontmatter`). 빌드와 validate가 같은 코드를 쓴다.
- `sources/notion/`, `sources/pdf/`: 원본 자료. 여기서 카드로 변환한다.
- `lessons/`: 학습 섹션(이야기 레슨) 원고. 아래 "학습 섹션" 참고.
- `quiz/`: 퀴즈 문제 (연습 탭 → 퀴즈). 아래 "퀴즈" 참고.
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

- 미적분학: 미분 `calc-diff-`, 적분 `calc-int-`, 급수 `calc-`, 벡터와 공간도형 `calc-vec-`, 다변수 미적분 `calc-mv-`, 선적분과 면적분 `calc-vc-` / 선형대수학: 벡터와 행렬 `la-vm-`, 벡터공간 `la-vs-`, 사영과 이차형식 `la-pq-`, 선형 미분방정식 `la-de-`, 행렬 분해 `la-dec-`, 일반 벡터공간과 선형사상 `la-gs-`, 내적공간과 스펙트럼 `la-ip-`
- 미분방정식: 1계 `de-first-`, 고계 선형 `de-linear-`, 라플라스 `de-laplace-`, 연립 `de-system-`, 급수해 `de-series-`
- 일반물리: 역학 `phys-mech-`, 회전 `phys-rot-`, 진동과 파동 `phys-wave-`, 유체 `phys-fluid-`, 열역학 `phys-thermo-`, 전자기 `phys-em-`, 회로 `phys-circ-`, 열역학 완결(엔트로피와 열기관) `thermo-`

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
- 그림: 섹션 안에 `::fig <이름> | 캡션` 줄을 쓰면 `src/lib/figures.ts`의 SVG 그림이 들어간다 (극곡선 그림은 `src/lib/polar-figures.ts`, r(θ)를 계산해서 그림). 연달아 쓴 `::fig` 줄은 2열(넓은 화면 3열) 격자로 묶인다. 없는 이름은 validate 에러.
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

## 학습 섹션 (이야기 레슨) — `/learn/`

공식 카드(사전)와 별개인 "읽는 책". 비유와 스토리로 개념을 설명하고, 문제 풀 때 쓰는 도구 3개가 붙는다. 현재 트랙은 역학(`lessons/mechanics`, 교재 1~11장)과 전자기학(`lessons/electromagnetism`, 13~18장). 트랙 순서는 `_track.md`의 `order`.

- `lessons/<트랙>/_track.md`: 트랙 제목·소개 (`id`는 폴더 이름과 같아야 함, `title`, `subtitle`, `order`).
- `lessons/<트랙>/<NN>-<slug>.md`: 레슨 1편. frontmatter는 `id`(전역 유일, 읽음 기록의 키라서 바꾸지 않는다), `title`, `hook`(한 줄 요약 문장), `minutes`, `cards`(관련 공식 카드 id. 그 카드를 쓰는 문제 카드가 자동으로 함께 표시된다).
  - 본문은 자유 마크다운. 소제목은 `###`. `##`는 `## summary`(한 줄 정리)와 `## quiz`(`Q: …` / `A: …` 쌍)만 허용.
  - `::fig <이름> | 캡션`: `src/lib/figures.ts`의 그림(인라인 SVG, 색은 `.c-*` 클래스로 토큰을 따름).
  - `::widget <이름> | 캡션`: `src/client/widgets.ts`의 인터랙티브 위젯. 이름은 `src/lib/lessons.ts`의 `WIDGETS`에도 등록한다.
- `lessons/<트랙>/flow.yaml`: 공식 선택 흐름도. 노드 `id`, `title`, `body`(마크다운), `options[{label, to}]`, `cards`, `lessons`. 시작 노드는 `start`, 선택지 없는 노드가 결론.
- `lessons/<트랙>/pairs.md`, `sheet.md`: 헷갈리는 쌍 비교, 한 장 요약. `## 제목` 단위로 카드가 된다. 표 안의 수식에는 `|` 대신 `\lvert`, `\rvert`를 쓴다.
- 로더·검증은 `src/lib/lessons.ts` (`npm run validate`에 포함). 페이지는 `src/pages/learn/`, 클라이언트는 `src/client/learn.ts`.
- 글투: 한국어 "~다"체. 트랙마다 소개의 비유 표(역학: 운동 에너지 = 지갑, 퍼텐셜 = 통장 / 전자기: 전위 = 높이, 전류 = 물, 축전기 = 물탱크, 코일 = 물레방아 등)를 그 트랙의 모든 레슨에서 일관되게 쓴다. 수식 규칙은 카드와 같다.
- 레슨 내용은 Claude가 쓴 것이다. 물리 내용을 고칠 때는 관련 공식 카드와 어긋나지 않는지 확인한다.

## 퀴즈 — 연습 탭 `/quiz/`

하단 "연습" 탭 = 플래시카드(`/flash/`) + 퀴즈(`/quiz/`). 맨 위 전환 버튼(`src/components/PracticeSwitch.astro`)으로 오가고, 탭은 마지막으로 연 쪽으로 열린다 (`src/client/ui.ts`). 지금은 물리만 있다.

- 구분: 역학 / 비역학(전자기·회로). 비역학 단원 목록은 `src/lib/quiz.ts`의 `QUIZ_GROUPS`, 거기 없는 물리 단원은 모두 역학으로 들어간다. 설정 화면에서 단원·유형·문항 수를 고른다.
- 로더·검증은 `src/lib/quiz.ts` (`npm run validate`에 포함), 데이터는 `/data/quiz.json`, 화면은 `src/pages/quiz/`, `src/client/quiz.ts`. 문제는 계산 없이 눈으로 보고 푸는 개념 문제만 낸다.
- 모드가 두 개다: 퀴즈(채점) / 공식 리마인드(채점 없이 고른 범위의 물리 공식 카드를 이름 + 공식으로 한 장씩 계속 보여 줌. 탭·왼쪽 밀기 = 다음, 오른쪽 밀기 = 이전). 리마인드는 한 바퀴마다 중요도 3은 항상, 2는 2/3, 1은 1/3 확률로 덱에 넣고 섞는다 (한 바퀴 안에서는 중복 없음). 공식 카드의 `## formula`가 그대로 나오므로 따로 데이터를 쓸 필요가 없다.

### `quiz/physics/situations.yaml` — 상황 → 공식·법칙

```yaml
- card: phys-em-biot-savart      # 정답 공식 카드
  label: 비오-사바르 법칙          # 보기에 보일 짧은 이름 (없으면 카드 제목)
  prompts:                        # 문제 1개 = 상황 1줄
    - 원형 전류 고리 중심의 자기장을 구한다
  avoid: [phys-em-infinitesimal-elements]   # 이 상황에도 답이 될 수 있어 오답 보기로 쓰면 안 되는 카드
```

- 보기 4개는 풀 때마다 같은 구분의 다른 항목에서 뽑는다 (같은 단원 먼저). 고르고 나면 정답 카드의 첫 공식 블록이 해설로 나온다.
- 공식 카드를 새로 만들면 여기에도 항목을 추가한다. 카드 하나에 한 항목(상황은 `prompts`에 여러 줄).
- 다른 카드도 정답이 될 수 있는 상황이면 그 카드를 `avoid`에 넣는다 (양방향으로 적용됨).

### `quiz/physics/<이름>.yaml` — 직접 쓴 문제

```yaml
- id: qe-gauss-cube             # 전역 유일 (역학 qm-/qr-/qw-/qf-/qt-, 전자기 qe-, 회로 qc-)
  chapter: electromagnetism     # 물리 단원 id
  type: ratio                   # concept(틀린 설명 고르기 등) / tf(참거짓) / ratio(비례·기호)
  q: 정육면체 중심에 점전하 $q$가 있다. 한 면을 지나는 전기선속은?
  choices:                      # tf는 쓰지 않음 (보기 = 참/거짓)
    - $\dfrac{q}{6\varepsilon_0}$
    - $\dfrac{q}{\varepsilon_0}$
  answer: 0                     # 보기 번호(0부터). tf는 true/false
  explain: 전체 선속이 대칭인 6개 면에 똑같이 나뉜다.
  cards: [phys-em-gauss-law]    # 해설 아래 "관련 카드" (탭하면 그 자리에서 카드가 열림)
```

- 보기 순서는 화면에서 섞인다. "위 모두", "①과 ②" 같은 위치에 의존하는 보기는 쓰지 않는다. 보기는 4개가 기본.
- "틀린 것은?"을 물을 때는 `q`에 `**틀린**`을 굵게 쓴다.
- 문제·해설은 반드시 기존 카드·레슨 내용에 근거하고, 해설에는 왜 그 답인지와 헷갈리는 반대 경우를 한 줄로 쓴다.
- YAML: 값에 `: `(콜론+공백)이 있거나 `*`·`"`로 시작하면 작은따옴표로 감싼다 (안의 `'`는 `''`).
- 수식은 카드와 같은 KaTeX 규칙. 보기 안 수식도 폰 폭에 맞게 짧게 쓴다. `npm run check:width`가 `/quiz/?audit=1`(모든 문제를 해설까지 펼친 점검 화면)도 잰다.

## 약점 메모 정리 — 사용자가 "[약점 메모 정리 요청]"을 붙여넣으면

사이트의 약점 메모 페이지(`/notes/`, `src/pages/notes/`, `src/client/notes.ts`)는 사용자가 약한 부분을 적어 두는 곳이다. 메모는 브라우저에만 저장되므로, 사용자가 "클로드에게 보낼 내용 복사"로 복사한 글을 채팅에 붙여넣어야 볼 수 있다.

붙여넣은 글의 각 줄은 `번호. [제목 / id] 메모` 형식이다 (`[...]`는 카드나 레슨에서 적었을 때만 있고, id는 카드 id 또는 레슨 id).

1. 메모마다 무엇이 약한지 한 줄로 해석한다. 뜻이 모호하면 추측하지 말고 사용자에게 묻는다.
2. 관련 자료를 찾는다: id가 있으면 그 카드·레슨, 없으면 `grep`으로 관련 공식 카드, 레슨(`lessons/`), 비교표(`pairs.md`), 흐름도(`flow.yaml`).
3. 반영한다. 기존 자료를 보강하는 것을 우선한다.
   - 공식 카드: `## explanation`에 "자주 틀리는 포인트"나 판단 순서를 추가, 필요하면 `## example`. 보완한 내용은 `## supplement`에 "약점 메모 반영: …"으로 적는다.
   - 레슨: 해당 문단을 더 풀어 쓰거나 퀴즈를 추가한다.
   - 두 개념을 헷갈리는 메모면 `pairs.md`에 비교 항목을 추가한다.
   - 맞는 카드가 없으면 새 카드를 만든다 (`source: manual`, `verified: false`).
4. `npm run validate` → `npm run build` → 커밋(`약점 메모 반영: <요약>`) → `main`에 push.
5. 사용자에게 보고: 메모별로 무엇을 어디에 반영했는지(카드·레슨 이름), 반영하지 못한 것과 이유.

사용자 메모에 물리·수학적으로 틀린 이해가 들어 있으면 그대로 반영하지 말고, 무엇이 틀렸는지 설명하고 올바른 내용으로 보강한다.

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
- 블록 수식은 폰 화면 폭에 맞게 나눠 쓴다. 규칙은 바로 아래 "폰 화면 폭과 수식 줄바꿈".

### 폰 화면 폭과 수식 줄바꿈

사이트는 폰(가로 375px)에서 본다. 블록 수식이 칸보다 넓으면 글자를 줄여 맞추고(최대 절반), 그래도 넓으면 잘려서 가로 스크롤이 된다. 그래서 카드·문제·레슨의 모든 블록 수식은 처음부터 폰 폭에 맞게 쓴다.

감 잡기: 한 줄에 들어가는 양은 대략 "분수 2~3개가 섞인 등식 하나" 또는 "짧은 식 2개"다. 등호가 3개 이상 이어지거나, 공식 3개를 `\qquad`로 나열하거나, `\text{}` 문장이 긴 명제는 거의 항상 넘친다.

쓰는 순서 (위에서부터 먼저 시도):

1. 공식 여러 개를 나열할 때는 한 블록에 하나씩. `A, \qquad B, \qquad C` 대신 `$$` 블록 3개 (블록 사이는 빈 줄).

   ```markdown
   $$
   \det(AB) = \det(A)\det(B)
   $$

   $$
   \det(A^T) = \det(A)
   $$
   ```

   짧은 식 2개가 한 줄에 들어가면 `\qquad`로 한 블록에 두어도 된다.
2. 조건·단서 `(…)`는 따로 블록으로 떼지 말고 그 식의 다음 줄에 붙인다 (`aligned`의 둘째 줄).
3. 긴 등식·명제 하나는 `aligned`로 여러 줄. 줄마다 맨 앞에 `&`, 이어지는 줄은 `&\quad`로 들여쓰고 연산자를 줄 맨 앞에 둔다. 줄 맨 앞 연산자 앞에는 `{}`를 붙인다 (간격이 맞게).

   ```markdown
   $$
   \begin{aligned}
   &\cos 2x = \cos^2 x - \sin^2 x \\
   &\quad {}= 2\cos^2 x - 1 = 1 - 2\sin^2 x
   \end{aligned}
   $$
   ```

   끊는 자리의 우선순위: ① 나열 구분(`\quad`, 쉼표) → ② `\iff`, `\implies`, `\Rightarrow` 앞 → ③ `=`, `\approx` 앞 → ④ 긴 합의 `+`, `-` 앞. 괄호·분수·`\left…\right`·`cases` 안에서는 끊지 않는다.
   - 좌변이 짧은데 우변 하나가 너무 길면 좌변만 첫 줄에 두고 `&\quad {}= …`로 내린다.
   - `=` 하나만 덩그러니 남는 줄(`= 0`, `= L`)은 만들지 않는다. 앞줄이나 뒷줄에 붙인다.
   - `\text{}` 문장이 들어간 명제는 `=`가 아니라 `\iff`·`\implies`나 문장의 의미 단위에서 끊는다.
4. 그래도 한 줄이 넘치면 식의 꼴을 바꾼다: 긴 분자·긴 부분식을 기호로 빼고 다음 줄에 정의(`N = …`, `D = b^2 - 4ac`), 긴 영어 `\text{}` 설명은 `d_i: \text{…}`처럼 줄을 나눠 적거나 수식 밖 문장으로 뺀다.
5. `\Longrightarrow`만 든 블록처럼 기호 하나짜리 블록은 만들지 않는다. 다음 식 앞에 `\Longrightarrow\quad`로 붙인다.

그 밖에:

- 표는 폰에서 칸 안에서 줄바꿈된다. 칸에 긴 `\dfrac` 수식을 넣어 표가 넘치면 표 대신 목록(`- 식`)으로 쓴다. 3열을 넘기지 않는다.
- 문단 안의 인라인 수식 `$…$`은 줄바꿈이 안 된다. 화면 폭의 절반이 넘을 것 같으면 블록 수식으로 뺀다.
- 넓은 화면(PC)에서도 같은 줄바꿈이 보인다. 폰 기준으로 쓴다.

확인: 카드를 여러 개 추가하거나 수식을 많이 고쳤으면 커밋 전에 `npm run check:width`를 돌린다 (`AUDIT_TEX=1` 빌드 후 `scripts/check-width.cjs`가 사이트 전체를 폰 폭으로 재서, 칸의 120%를 넘는 블록 수식과 넘치는 표를 파일 경로·원문과 함께 찍는다. 에러 0개여야 함). Playwright가 필요하다 (클라우드 세션에는 설치돼 있음). 이 명령은 점검용 `dist/`를 남기니, 뒤에 `npm run build`를 다시 돌린다 (Render는 자체 빌드라 영향 없음).

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
