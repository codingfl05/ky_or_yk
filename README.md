# 편입 공식노트 (ky_or_yk)

연세대/고려대 전기전자공학부 편입 대비용, 과목별 공식·정리·법칙을 폰에서 찾아보고 암기하는 정적 사이트.

- 사이트: Render Static Site (주소는 Render 대시보드에서 확인, `*.onrender.com`)
- 과목: 미적분학, 선형대수학, 미분방정식(공업수학), 일반물리
- 기능: 과목/단원별 카드, 검색(한/영/태그), 플래시카드(정·역방향), 공식 가리기, 즐겨찾기·틀린 것, 다크 모드, 글자 크기, 백업(JSON)

## 로컬 실행

Node 22.23.4 이상 필요.

```bash
npm install
npm run dev        # http://localhost:4321/
```

같은 Wi-Fi의 폰에서 보려면 `npm run dev -- --host` 후 표시되는 Network 주소로 접속.

```bash
npm run validate   # 카드 검사만
npm run build      # 검사 + 빌드 (dist/)
npm run preview    # 빌드 결과 미리보기
```

## 카드 추가

작성 규칙(필드, LaTeX 스타일, 한/영 keyword)은 [CLAUDE.md](CLAUDE.md)에 있다.

1. 파일 생성

   ```bash
   npm run new -- physics electromagnetism phys-em-ampere-law
   ```

   `content/physics/electromagnetism/phys-em-ampere-law.md`가 템플릿으로 만들어진다.
   인자 없이 `npm run new`를 실행하면 과목/단원 id와 prefix 목록이 나온다.

2. 내용 채우기 (frontmatter + `## 조건` / `## 설명` / `## 유도` / `## 예제`)

3. 검사

   ```bash
   npm run validate
   ```

   에러가 있으면 `파일경로 [카드id] 필드: 메시지` 형식으로 모두 출력된다.

4. 커밋 & push → 자동 배포

### Notion / PDF에서 가져오기

- `sources/notion/`, `sources/pdf/`에 파일을 넣고 Claude 세션에서 변환을 요청한다. 각 폴더의 README 참고.
- 자동 추출한 카드는 `verified: false`로 들어가고 사이트에 "검토 필요" 배지가 뜬다. 확인 후 `true`로 바꾼다.

### 과목/단원 추가·삭제

`config/subjects.yaml`만 수정한다. 단원을 지우면 그 폴더의 카드가 validate 에러가 되니 카드도 같이 옮기거나 지운다.

## 배포 (Render)

`render.yaml`에 설정이 있다. Render가 연결된 브랜치에 push될 때마다 `npm ci && npm run build`(validate 포함)를 실행하고 `dist/`를 배포한다.
validate가 실패하면 빌드가 실패하고, 이전 버전이 그대로 유지된다.

처음 한 번만 설정:

1. https://render.com 가입 (GitHub 계정으로 로그인)
2. Dashboard → New → Blueprint → 이 repo 선택 → `render.yaml`이 인식되면 Apply
   - private repo여도 된다 (Render GitHub 앱에 repo 접근 권한을 주면 됨)
3. 배포할 브랜치를 확인 (기본: repo의 default branch). 바꾸려면 서비스 Settings → Branch
4. 배포가 끝나면 표시되는 `https://<이름>.onrender.com` 주소로 접속

이후로는 push만 하면 자동 배포된다.

## 폰에 설치

- iPhone: Safari로 사이트 열기 → 공유 → 홈 화면에 추가
- Android: Chrome 메뉴 → 홈 화면에 추가 / 앱 설치

즐겨찾기·틀린 것은 그 브라우저의 localStorage에만 저장된다. iPhone은 Safari와 홈 화면 앱의 저장소가 서로 별개다.
기기나 앱을 옮길 때는 설정 → 백업에서 내보내기/가져오기를 쓴다 (파일 또는 복사·붙여넣기).

## 구조

```
config/subjects.yaml      과목 → 단원, id prefix
content/<과목>/<단원>/     카드 (1카드 = 1파일)
templates/card.md         카드 템플릿
sources/notion|pdf/       원본 자료
scripts/validate.ts       검사
scripts/new-card.ts       카드 생성
scripts/make-icons.mjs    앱 아이콘 생성 (Playwright 필요, 평소엔 불필요)
src/lib/content.ts        로더 + 검증 (KaTeX 빌드 타임 렌더링)
src/lib/render-card.ts    카드 HTML (빌드/브라우저 공용)
src/client/               브라우저 스크립트 (저장, 검색, 플래시카드 등)
src/pages/                화면
public/                   manifest, 아이콘
```

빌드 결과의 `data/index.json`(검색용 목록)과 `data/<과목>.json`(수식 HTML 포함 전체 카드)은 검색·플래시카드·저장목록이 필요한 과목만 불러간다.
