// 퀴즈 로더 + 검증기. 빌드(/data/quiz.json)와 scripts/validate.ts가 같은 코드를 쓴다.
//   quiz/<과목>/situations.yaml   상황 → 쓸 공식/법칙 (보기는 같은 구분의 다른 항목에서 그때그때 뽑는다)
//   quiz/<과목>/*.yaml            직접 쓴 문제 (틀린 설명 고르기·참거짓·비례와 기호)
// 형식과 규칙은 CLAUDE.md "퀴즈".
import fs from 'node:fs';
import path from 'node:path';
import YAML from 'yaml';
import { z } from 'zod';
import { markdownToHtml, type ContentError, type LoadResult } from './content';

const QUIZ_DIR = path.join(process.cwd(), 'quiz');
const ID_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

/** 물리 퀴즈의 큰 구분. 여기에 없는 물리 단원은 '역학'으로 들어간다. */
export const QUIZ_GROUPS: Record<string, { id: string; name: string; chapters?: string[] }[]> = {
  physics: [
    { id: 'mech', name: '역학' },
    { id: 'em', name: '비역학 (전자기·회로)', chapters: ['electromagnetism', 'circuits'] },
  ],
};
export const QUIZ_TYPES = [
  { id: 'situation', name: '상황 → 공식·법칙' },
  { id: 'concept', name: '틀린 설명·참거짓' },
  { id: 'ratio', name: '비례·기호' },
] as const;
type QType = 'concept' | 'tf' | 'ratio';

const Situation = z
  .object({
    card: z.string().regex(ID_RE),
    /** 보기에 보일 짧은 이름. 없으면 카드 제목 */
    label: z.string().min(1).optional(),
    prompts: z.array(z.string().min(1)).min(1),
    /** 이 항목의 상황에서 보기(오답)로 쓰면 안 되는 카드 (답이 둘 이상이 될 수 있는 것) */
    avoid: z.array(z.string().regex(ID_RE)).default([]),
  })
  .strict();

const Question = z
  .object({
    id: z.string().regex(ID_RE),
    chapter: z.string().regex(ID_RE),
    type: z.enum(['concept', 'tf', 'ratio']),
    q: z.string().min(1),
    /** tf는 생략 (보기 = 참/거짓) */
    choices: z.array(z.string().min(1)).min(2).max(5).optional(),
    /** 보기 번호(0부터) 또는 tf의 true/false */
    answer: z.union([z.number().int().min(0), z.boolean()]),
    explain: z.string().min(1),
    cards: z.array(z.string().regex(ID_RE)).default([]),
  })
  .strict();

export interface QuizCardRef {
  id: string;
  title: string;
  href: string;
}
export interface QuizSituation {
  card: string;
  label: string;
  chapter: string;
  group: string;
  /** 정답 공식(카드의 첫 공식 블록) HTML */
  formulaHtml: string;
  prompts: string[];
  avoid: string[];
}
export interface QuizQuestion {
  id: string;
  chapter: string;
  group: string;
  type: 'concept' | 'ratio';
  /** 참거짓 문제 여부 */
  tf: boolean;
  qHtml: string;
  choicesHtml: string[];
  answer: number;
  explainHtml: string;
  cards: QuizCardRef[];
}
export interface QuizSubject {
  id: string;
  name: string;
  groups: { id: string; name: string; chapters: { id: string; name: string }[] }[];
  situations: QuizSituation[];
  questions: QuizQuestion[];
}
export interface QuizPayload {
  types: { id: string; name: string }[];
  subjects: QuizSubject[];
}
export interface QuizResult {
  payload: QuizPayload;
  errors: ContentError[];
  warnings: ContentError[];
}

const inline = (html: string) => html.replace(/^<p>([\s\S]*)<\/p>\s*$/, '$1');

export function loadQuiz(content: LoadResult): QuizResult {
  const errors: ContentError[] = [];
  const warnings: ContentError[] = [];
  const payload: QuizPayload = { types: QUIZ_TYPES.map((t) => ({ ...t })), subjects: [] };
  if (!fs.existsSync(QUIZ_DIR)) return { payload, errors, warnings };
  const cardById = new Map(content.cards.map((c) => [c.id, c]));
  const seen = new Set<string>();

  for (const sid of fs.readdirSync(QUIZ_DIR).filter((d) => fs.statSync(path.join(QUIZ_DIR, d)).isDirectory()).sort()) {
    const subject = content.subjects.find((s) => s.id === sid);
    const groupsDef = QUIZ_GROUPS[sid];
    if (!subject || !groupsDef) {
      errors.push({ file: `quiz/${sid}`, field: 'path', message: `퀴즈를 지원하지 않는 과목 폴더입니다 (src/lib/quiz.ts의 QUIZ_GROUPS)` });
      continue;
    }
    const groupOf = (chapter: string) => (groupsDef.find((g) => g.chapters?.includes(chapter)) ?? groupsDef.find((g) => !g.chapters)!).id;
    const qs: QuizSubject = {
      id: sid,
      name: subject.name,
      groups: groupsDef.map((g) => ({
        id: g.id,
        name: g.name,
        chapters: subject.chapters.filter((c) => groupOf(c.id) === g.id).map((c) => ({ id: c.id, name: c.name })),
      })),
      situations: [],
      questions: [],
    };
    const dir = path.join(QUIZ_DIR, sid);
    for (const fname of fs.readdirSync(dir).filter((f) => f.endsWith('.yaml')).sort()) {
      const rel = `quiz/${sid}/${fname}`;
      const err = (field: string, message: string, id?: string) => errors.push({ file: rel, id, field, message });
      let raw: unknown;
      try {
        raw = YAML.parse(fs.readFileSync(path.join(dir, fname), 'utf8'));
      } catch (e) {
        err('yaml', e instanceof Error ? e.message : String(e));
        continue;
      }
      if (!Array.isArray(raw)) {
        err('yaml', '최상위는 목록(- ...)이어야 합니다');
        continue;
      }
      const md = (src: string, field: string, id?: string) => {
        const r = markdownToHtml(src);
        r.errors.forEach((e) => err(field, e, id));
        return r.html;
      };

      if (fname === 'situations.yaml') {
        raw.forEach((item, i) => {
          const p = Situation.safeParse(item);
          if (!p.success) {
            p.error.issues.forEach((iss) => err(iss.path.join('.') || 'item', iss.message, `#${i + 1}`));
            return;
          }
          const s = p.data;
          const card = cardById.get(s.card);
          if (!card || card.kind !== 'formula' || card.subject !== sid) {
            err('card', `이 과목의 공식 카드가 아닙니다: ${s.card}`, s.card);
            return;
          }
          if (qs.situations.some((x) => x.card === s.card)) err('card', '같은 카드가 두 번 나옵니다 (prompts에 합치세요)', s.card);
          s.avoid.forEach((a) => !cardById.has(a) && warnings.push({ file: rel, id: s.card, field: 'avoid', message: `존재하지 않는 카드 id: ${a}` }));
          const fx = /<div class="fx">[\s\S]*?<\/div>/.exec(card.formulaHtml)?.[0] ?? '';
          qs.situations.push({
            card: s.card,
            label: s.label ?? card.title_ko,
            chapter: card.chapter,
            group: groupOf(card.chapter),
            formulaHtml: fx,
            prompts: s.prompts.map((t) => inline(md(t, 'prompts', s.card))),
            avoid: s.avoid,
          });
        });
        continue;
      }

      raw.forEach((item, i) => {
        const p = Question.safeParse(item);
        if (!p.success) {
          p.error.issues.forEach((iss) => err(iss.path.join('.') || 'item', iss.message, (item as any)?.id ?? `#${i + 1}`));
          return;
        }
        const q = p.data;
        if (seen.has(q.id)) err('id', '중복된 퀴즈 id', q.id);
        seen.add(q.id);
        if (!subject.chapters.some((c) => c.id === q.chapter)) err('chapter', `이 과목에 없는 단원: ${q.chapter}`, q.id);
        let choices: string[];
        let answer: number;
        if (q.type === 'tf') {
          if (typeof q.answer !== 'boolean') err('answer', 'tf 문제의 answer는 true/false', q.id);
          if (q.choices) err('choices', 'tf 문제는 choices를 쓰지 않습니다', q.id);
          choices = ['참', '거짓'];
          answer = q.answer === true ? 0 : 1;
        } else {
          if (!q.choices) {
            err('choices', '보기가 없습니다', q.id);
            return;
          }
          if (typeof q.answer !== 'number' || q.answer >= q.choices.length) err('answer', `보기 번호(0~${q.choices.length - 1})여야 합니다`, q.id);
          if (new Set(q.choices).size !== q.choices.length) err('choices', '같은 보기가 두 번 있습니다', q.id);
          choices = q.choices;
          answer = Number(q.answer);
        }
        const cards: QuizCardRef[] = [];
        for (const cid of q.cards) {
          const c = cardById.get(cid);
          if (!c) warnings.push({ file: rel, id: q.id, field: 'cards', message: `존재하지 않는 카드 id: ${cid}` });
          else cards.push({ id: c.id, title: c.title_ko, href: c.href });
        }
        qs.questions.push({
          id: q.id,
          chapter: q.chapter,
          group: groupOf(q.chapter),
          type: q.type === 'ratio' ? 'ratio' : 'concept',
          tf: q.type === 'tf',
          qHtml: md(q.q, 'q', q.id),
          choicesHtml: choices.map((c) => inline(md(c, 'choices', q.id))),
          answer,
          explainHtml: md(q.explain, 'explain', q.id),
          cards,
        });
      });
    }
    // 상황 문제는 보기 4개를 만들 수 있어야 한다 (같은 구분 안에 항목 4개 이상)
    for (const g of qs.groups) {
      const n = qs.situations.filter((s) => s.group === g.id).length;
      if (n > 0 && n < 4) errors.push({ file: `quiz/${sid}/situations.yaml`, field: 'group', message: `"${g.name}" 구분의 항목이 ${n}개뿐이라 보기 4개를 만들 수 없습니다` });
    }
    payload.subjects.push(qs);
  }
  return { payload, errors, warnings };
}
