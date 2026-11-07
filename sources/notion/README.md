# Notion export

Notion 페이지를 Markdown으로 export해서 이 폴더에 넣습니다.
(Notion: 페이지 ⋯ → Export → Markdown & CSV)

변환은 Claude 세션에서 요청합니다. 예:
> sources/notion/ 에 있는 전자기학 노트를 카드로 변환해줘

노트 구조가 일정하면 변환 스크립트(scripts/notion-import.ts)를 만들 예정입니다.
아직 샘플이 없어서 스크립트는 없습니다.
