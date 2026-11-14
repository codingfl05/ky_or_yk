import { getContent, formatError } from './content';
import { loadLessons, type LessonsResult } from './lessons';
import { loadQuiz, type QuizPayload } from './quiz';
import { BUILD_ID } from './build';
import type { CardKind, CardView, IndexPayload } from './types';

export const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');

export function content() {
  return getContent(base);
}

let lessonCache: LessonsResult | null = null;
/** 학습 섹션(이야기 레슨). 에러가 있으면 빌드를 멈춘다. */
export function lessons(): LessonsResult {
  if (lessonCache && process.env.NODE_ENV === 'production') return lessonCache;
  const r = loadLessons(base, content());
  if (r.errors.length) throw new Error(`레슨 에러 ${r.errors.length}개 (npm run validate 로 확인):\n` + r.errors.map(formatError).join('\n'));
  lessonCache = r;
  return r;
}

/** kind를 주지 않으면 공식·문제 모두 */
export function cardsIn(subject: string, chapter?: string, kind?: CardKind): CardView[] {
  return content().cards.filter(
    (c) => c.subject === subject && (!chapter || c.chapter === chapter) && (!kind || c.kind === kind),
  );
}

export function indexPayload(): IndexPayload {
  const { subjects, cards } = content();
  return {
    build: BUILD_ID,
    subjects: subjects.map((s) => ({ id: s.id, name: s.name, chapters: s.chapters.map((c) => ({ id: c.id, name: c.name })) })),
    cards: cards.map(({ kind, id, subject, chapter, subjectName, chapterName, title_ko, title_en, tags, importance, verified, source }) => ({
      kind, id, subject, chapter, subjectName, chapterName, title_ko, title_en, tags, importance, verified, source,
    })),
  };
}

/** 단원이 1개인 과목은 과목 페이지를 건너뛰고 단원으로 바로 간다. */
export function subjectHref(subjectId: string): string {
  const s = content().subjects.find((x) => x.id === subjectId)!;
  return s.chapters.length === 1 ? `${base}${s.id}/${s.chapters[0].id}/` : `${base}${s.id}/`;
}

let quizCache: QuizPayload | null = null;
/** 퀴즈 데이터. 에러가 있으면 빌드를 멈춘다. */
export function quizPayload(): QuizPayload {
  if (quizCache && process.env.NODE_ENV === 'production') return quizCache;
  const r = loadQuiz(content());
  if (r.errors.length) throw new Error(`퀴즈 에러 ${r.errors.length}개 (npm run validate 로 확인):\n` + r.errors.map(formatError).join('\n'));
  quizCache = r.payload;
  return r.payload;
}
