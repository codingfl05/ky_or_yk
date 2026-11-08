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

type Link = { id: string; title: string; href: string };

interface CardBase {
  id: string;
  subject: string;
  chapter: string;
  subjectName: string;
  chapterName: string;
  title_ko: string;
  /** 공식 카드: 영어 이름. 문제 카드: 빈 문자열 */
  title_en: string;
  tags: string[];
  /** 공식 카드: 중요도. 문제 카드: 난이도 */
  importance: 1 | 2 | 3;
  verified: boolean;
  source: string;
  /** 카드가 있는 페이지의 앵커 링크 */
  href: string;
  related: Link[];
  /** 원본에 없던 보완 내용 / 판독 불확실 메모. 검토 모드에서만 보인다 */
  supplementHtml?: string;
}

/** 빌드 결과로 화면에 넘기는 공식 카드. HTML은 모두 KaTeX로 미리 렌더링된 상태. */
export interface FormulaCardView extends CardBase {
  kind: 'formula';
  /** 플래시카드 앞면용 질문 */
  question?: string;
  formulaHtml: string;
  conditionsHtml?: string;
  explanationHtml?: string;
  storyHtml?: string;
  derivationHtml?: string;
  exampleHtml?: string;
  /** 이 공식을 related로 건 문제들 (자동) */
  usedBy: Link[];
}

/** 문제 카드 */
export interface ProblemCardView extends CardBase {
  kind: 'problem';
  /** 이미지 URL */
  images: string[];
  problemHtml: string;
  answerHtml?: string;
  keyIdeaHtml?: string;
  solutionHtml?: string;
  mistakesHtml?: string;
}

export type CardView = FormulaCardView | ProblemCardView;
export type CardKind = CardView['kind'];

/** 검색/필터용 가벼운 카드 정보 */
export type CardMeta = Pick<
  CardView,
  'kind' | 'id' | 'subject' | 'chapter' | 'subjectName' | 'chapterName' | 'title_ko' | 'title_en' | 'tags' | 'importance' | 'verified' | 'source'
>;

export interface IndexPayload {
  build: string;
  subjects: { id: string; name: string; chapters: { id: string; name: string }[] }[];
  cards: CardMeta[];
}
