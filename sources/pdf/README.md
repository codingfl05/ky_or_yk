# 강의 PDF / 필기

PDF를 이 폴더에 넣고 Claude 세션에서 요청합니다. 예:
> sources/pdf/전자기학3주차.pdf 에서 공식 추출해서 카드로 만들어줘

- 추출된 카드는 모두 `verified: false`, `source: <파일명>.pdf#p<페이지>` 로 만들어집니다.
- 사이트에서 "검토 필요" 배지가 붙고, 홈과 설정 화면의 "검토 필요" 목록에 모입니다.
- 직접 확인한 뒤 `verified: true`로 바꾸세요.
- 주의: repo가 public이면 여기 커밋한 PDF는 누구나 볼 수 있습니다. 강의 자료를 올릴 거면 repo를 private으로 두세요
  (Render 배포는 private repo에서도 됩니다. 사이트에는 PDF가 올라가지 않습니다).
