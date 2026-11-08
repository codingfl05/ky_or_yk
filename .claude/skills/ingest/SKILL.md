---
name: ingest
description: Gemini/Antigravity가 만든 문제 카드 묶음(붙여넣은 텍스트, 첨부 .md, 또는 inbox/ 브랜치)과 문제 사진을 받아 npm run ingest로 풀고, 가볍게 검토한 뒤 main에 올린다. 사용자가 묶음을 주며 "올려", "처리해", "inbox 브랜치 처리해"라고 할 때 사용.
---

CLAUDE.md의 "문제 올리기 (Gemini 결과물 최종 검토)" 절차를 그대로 따른다.

- 비용 절약이 목적이다. 사진은 열지 않는다 (이름 매칭이 안 될 때만 작게 줄인 사본을 본다).
- 사용자 풀이 내용은 고치지 않고, 이상한 점은 보고만 한다.
- `npm run validate` 에러 0개, `npm run build` 통과 후 `main`에 push.
- 끝나면 추가한 문제(제목·출처·난이도), 고친 것, 이상해 보인 것을 짧게 보고한다.

인자($ARGUMENTS)가 있으면 묶음 파일/사진 경로나 처리할 inbox 브랜치 이름으로 쓴다.
