import { getContent } from './content';
import { BUILD_ID } from './build';
import type { CardKind, CardView, IndexPayload } from './types';

export const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');

export function content() {
  return getContent(base);
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
