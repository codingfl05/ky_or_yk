# inbox

Gemini/Antigravity가 만든 묶음 파일(`bundle-*.md`)과 문제 사진을 두는 임시 폴더. 형식은 `docs/gemini-instructions.md`.

- Antigravity(클라우드, 터미널 없음)는 여기에 묶음과 사진을 넣어 `inbox/<날짜>` 브랜치로 push만 한다.
- Claude가 그 파일을 가져와 `npm run ingest -- --clean`으로 처리한다. 처리 후 이 폴더는 비워지고 `main`에는 이 README만 남는다.
- `main`에 묶음·원본 사진을 커밋하지 않는다.
