# 강의 PDF / 필기

PDF를 이 폴더에 넣고 Claude 세션에서 요청합니다. 예:
> sources/pdf/전자기학3주차.pdf 에서 공식 추출해서 카드로 만들어줘

- 추출된 카드는 모두 `verified: false`, `source: <파일명>.pdf#p<페이지>` 로 만들어집니다.
- 사이트에서 "검토 필요" 배지가 붙고, 홈과 설정 화면의 "검토 필요" 목록에 모입니다.
- 직접 확인한 뒤 `verified: true`로 바꾸세요.
- 주의: GitHub Pages(무료)를 쓰려면 repo가 public이어야 하므로, 여기 커밋한 PDF는 누구나 볼 수 있습니다.
  강의 자료 저작권이 걱정되면 PDF는 커밋하지 말고 세션에서 바로 업로드하거나,
  `.gitignore`에 `sources/pdf/*.pdf`를 추가하세요.
