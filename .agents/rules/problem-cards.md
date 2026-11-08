# 문제 카드 만들기 (Antigravity 규칙)

이 저장소는 편입 대비 복습 앱이다. 사용자가 inbox/에 넣은 문제 사진과 풀이·해설로 "문제 카드"를 만든다.

- 카드 작성 규칙(묶음 형식, 필드, 섹션, LaTeX, 단원 목록)은 @docs/gemini-instructions.md 의 "지시문" 블록을 그대로 따른다. 작업 전에 반드시 이 파일을 읽는다.
- 사용자 풀이 내용을 지어내거나 고치지 않는다. 불확실한 판독·의문점은 `## supplement`에 적는다.

## 작업 순서

1. inbox/의 사진을 보고 문제마다 카드를 써서 묶음 파일 inbox/bundle-<YYYYMMDD-HHMM>.md 하나로 저장한다.
   - images에는 문제 문장·그림이 담긴 사진의 실제 파일명(inbox/ 안의 이름)을 정확히 쓴다. 풀이 사진은 넣지 않는다.
2. 처음 한 번 `npm ci`. 그다음 `npm run ingest -- --clean`.
   - 에러가 나면 메시지대로 묶음을 고쳐 다시 실행한다 (실패하면 아무 파일도 쓰지 않으므로 재실행 안전).
3. `npm run validate` 에러 0개 (경고는 괜찮음).
4. `git checkout -b inbox/<YYYYMMDD-HHMM>` → `content/problems/`와 `public/img/problems/`의 변경만 커밋 → 그 브랜치를 push.
5. 사용자에게 만든 문제 목록(제목·출처·난이도)과 supplement에 적은 의문점을 보고하고, "Claude에게 inbox 브랜치 처리해라고 하세요"라고 안내한다.

## 하지 말 것

- main 브랜치에 직접 커밋·push하지 않는다.
- 코드, 설정, CLAUDE.md, 기존 공식 카드(content/<과목>/...)를 고치지 않는다.
- `related`는 비워 둔다 (Claude가 최종 검토 때 채운다).
