// 서버(빌드)와 브라우저 양쪽에서 쓰는 타입. 여기에는 런타임 코드를 두지 않는다.

export interface ChapterInfo {
  id: string;
  name: string;
  name_en?: string;
  prefix: string;
  /** _chapter.md 본문 (HTML) */
  introHtml?: string;
  /** _chapter.md의 source */
  source?: string;
}

export interface SubjectInfo {
  id: string;
  name: string;
  name_en: string;
  chapters: ChapterInfo[];
}

/** 빌드 결과로 화면에 넘기는 카드. HTML은 모두 KaTeX로 미리 렌더링된 상태. */
export interface CardView {
  id: string;
  subject: string;
  chapter: string;
  subjectName: string;
  chapterName: string;
  title_ko: string;
  title_en: string;
  /** 플래시카드 앞면용 질문 */
  question?: string;
  tags: string[];
  importance: 1 | 2 | 3;
  verified: boolean;
  source: string;
  /** 카드가 있는 단원 페이지의 앵커 링크 */
  href: string;
  formulaHtml: string;
  conditionsHtml?: string;
  explanationHtml?: string;
  storyHtml?: string;
  derivationHtml?: string;
  exampleHtml?: string;
  /** 원본 노트에 없던 보완 내용. 검토 모드에서만 보인다 */
  supplementHtml?: string;
  related: { id: string; title: string; href: string }[];
}

/** 검색/필터용 가벼운 카드 정보 */
export type CardMeta = Pick<
  CardView,
  'id' | 'subject' | 'chapter' | 'subjectName' | 'chapterName' | 'title_ko' | 'title_en' | 'tags' | 'importance' | 'verified'
>;

export interface IndexPayload {
  build: string;
  subjects: { id: string; name: string; chapters: { id: string; name: string }[] }[];
  cards: CardMeta[];
}
