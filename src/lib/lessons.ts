// 학습 섹션(이야기 레슨) 로더 + 검증기. 빌드와 scripts/validate.ts가 같은 코드를 쓴다.
//   lessons/<트랙>/_track.md        트랙 제목·소개
//   lessons/<트랙>/<NN>-<slug>.md   레슨 1개
//   lessons/<트랙>/flow.yaml        공식 선택 흐름도
//   lessons/<트랙>/pairs.md         헷갈리는 쌍 비교
//   lessons/<트랙>/sheet.md         한 장 요약
import fs from 'node:fs';
import path from 'node:path';
import YAML from 'yaml';
import { z } from 'zod';
import { markdownToHtml, escapeHtml, type ContentError, type LoadResult } from './content';
import { figures } from './figures';

const LESSONS_DIR = path.join(process.cwd(), 'lessons');
const LESSON_FILE_RE = /^(\d{2})-([a-z0-9]+(?:-[a-z0-9]+)*)\.md$/;
/** src/client/widgets.ts에 구현된 위젯 이름 */
export const WIDGETS = ['sphere-field', 'dielectric', 'lenz', 'transient', 'right-hand', 'resonance'] as const;

type Link = { id: string; title: string; href: string };

export interface LessonView {
  id: string;
  slug: string;
  n: number;
  title: string;
  hook: string;
  minutes: number;
  href: string;
  bodyHtml: string;
  summaryHtml?: string;
  quiz: { q: string; a: string }[];
  cards: Link[];
  problems: Link[];
}
export interface FlowNode {
  id: string;
  title: string;
  bodyHtml?: string;
  options: { label: string; to: string }[];
  cards: Link[];
  lessons: Link[];
}
export interface DocSection {
  title: string;
  html: string;
}
export interface TrackView {
  id: string;
  title: string;
  subtitle?: string;
  introHtml: string;
  href: string;
  lessons: LessonView[];
  flow: FlowNode[];
  pairs: DocSection[];
  sheet: DocSection[];
}
export interface LessonsResult {
  tracks: TrackView[];
  errors: ContentError[];
  warnings: ContentError[];
}

const TrackFm = z.strictObject({ id: z.string().regex(/^[a-z0-9-]+$/), title: z.string().min(1), subtitle: z.string().optional() });
const LessonFm = z.strictObject({
  id: z.string().regex(/^[a-z0-9]+(-[a-z0-9]+)*$/),
  title: z.string().min(1),
  hook: z.string().min(1),
  minutes: z.number().int().min(1).max(30),
  cards: z.array(z.string()).default([]),
});
const FlowSchema = z.array(
  z.strictObject({
    id: z.string().regex(/^[a-z0-9-]+$/),
    title: z.string().min(1),
    body: z.string().optional(),
    options: z.array(z.strictObject({ label: z.string().min(1), to: z.string() })).default([]),
    cards: z.array(z.string()).default([]),
    lessons: z.array(z.string()).default([]),
  }),
);

function frontmatter(text: string): { data: unknown; body: string } | null {
  const m = /^---\r?\n([\s\S]*?)\r?\n---[ \t]*(?:\r?\n|$)([\s\S]*)$/.exec(text);
  if (!m) return null;
  return { data: YAML.parse(m[1]), body: m[2] };
}

/** "## 제목" 단위로 자른다 (코드 펜스 안은 무시). 첫 제목 앞 내용은 title ''. */
function splitH2(body: string): { title: string; text: string }[] {
  const out: { title: string; text: string }[] = [{ title: '', text: '' }];
  let inFence = false;
  for (const line of body.split(/\r?\n/)) {
    if (/^\s*(```|~~~)/.test(line)) inFence = !inFence;
    const m = inFence ? null : /^##\s+(.+?)\s*$/.exec(line);
    if (m) out.push({ title: m[1], text: '' });
    else out[out.length - 1].text += line + '\n';
  }
  return out.map((s) => ({ title: s.title, text: s.text.trim() }));
}

export function loadLessons(base = '/', content: Pick<LoadResult, 'cards'>): LessonsResult {
  const errors: ContentError[] = [];
  const warnings: ContentError[] = [];
  const b = base.endsWith('/') ? base : base + '/';
  const tracks: TrackView[] = [];
  if (!fs.existsSync(LESSONS_DIR)) return { tracks, errors, warnings };
  const cardById = new Map(content.cards.map((c) => [c.id, c]));

  for (const ent of fs.readdirSync(LESSONS_DIR, { withFileTypes: true }).sort((a, z) => a.name.localeCompare(z.name))) {
    if (!ent.isDirectory()) continue;
    const dir = path.join(LESSONS_DIR, ent.name);
    const rel = (f: string) => `lessons/${ent.name}/${f}`;
    const errOf = (f: string) => (field: string, message: string, id?: string) => errors.push({ file: rel(f), id, field, message });
    const md = (src: string, err: (f: string, m: string) => void, field: string) => {
      const r = markdownToHtml(src);
      r.errors.forEach((e) => err(field, e));
      return r.html;
    };
    const cardLinks = (ids: string[], file: string, id?: string): Link[] =>
      ids.flatMap((cid) => {
        const c = cardById.get(cid);
        if (!c) {
          warnings.push({ file: rel(file), id, field: 'cards', message: `존재하지 않는 카드 id: ${cid}` });
          return [];
        }
        return [{ id: cid, title: c.title_ko, href: c.href }];
      });

    // ---- 트랙
    const tErr = errOf('_track.md');
    const tFile = path.join(dir, '_track.md');
    if (!fs.existsSync(tFile)) {
      tErr('path', '_track.md가 없습니다');
      continue;
    }
    const tRaw = frontmatter(fs.readFileSync(tFile, 'utf8'));
    const tFm = tRaw && TrackFm.safeParse(tRaw.data);
    if (!tRaw || !tFm || !tFm.success) {
      tErr('frontmatter', tFm && !tFm.success ? z.prettifyError(tFm.error) : 'frontmatter가 없습니다');
      continue;
    }
    if (tFm.data.id !== ent.name) tErr('id', `폴더 이름(${ent.name})과 다릅니다`);
    const trackHref = `${b}learn/${ent.name}/`;
    const track: TrackView = {
      id: ent.name,
      title: tFm.data.title,
      subtitle: tFm.data.subtitle,
      introHtml: md(tRaw.body.trim(), tErr, '본문'),
      href: trackHref,
      lessons: [],
      flow: [],
      pairs: [],
      sheet: [],
    };

    // ---- 레슨
    const seenIds = new Set<string>();
    for (const name of fs.readdirSync(dir).sort()) {
      const m = LESSON_FILE_RE.exec(name);
      if (!m) continue;
      const err = errOf(name);
      const raw = frontmatter(fs.readFileSync(path.join(dir, name), 'utf8'));
      const fm = raw && LessonFm.safeParse(raw.data);
      if (!raw || !fm || !fm.success) {
        err('frontmatter', fm && !fm.success ? z.prettifyError(fm.error) : 'frontmatter가 없습니다');
        continue;
      }
      const id = fm.data.id;
      if (seenIds.has(id)) err('id', 'id 중복', id);
      seenIds.add(id);

      const parts = splitH2(raw.body);
      let summaryHtml: string | undefined;
      const quiz: { q: string; a: string }[] = [];
      for (const p of parts.slice(1)) {
        if (p.title === 'summary') summaryHtml = md(p.text, err, '## summary');
        else if (p.title === 'quiz') {
          for (const block of p.text.split(/\n(?=Q:)/)) {
            const qm = /^Q:\s*([\s\S]*?)\nA:\s*([\s\S]*)$/.exec(block.trim());
            if (!qm) err('## quiz', `"Q: … / A: …" 형식이 아닙니다: ${block.slice(0, 30)}`, id);
            else quiz.push({ q: md(qm[1].trim(), err, '## quiz'), a: md(qm[2].trim(), err, '## quiz') });
          }
        } else err('body', `알 수 없는 섹션 "## ${p.title}" (허용: summary, quiz. 본문 소제목은 ###)`, id);
      }
      if (!summaryHtml) warnings.push({ file: rel(name), id, field: 'body', message: '"## summary"가 없습니다' });

      // 본문: "::fig 이름 | 캡션", "::widget 이름 | 캡션" 줄을 그림/위젯으로 바꾼다
      let bodyHtml = '';
      let buf: string[] = [];
      const flush = () => {
        if (buf.join('').trim()) bodyHtml += md(buf.join('\n'), err, '본문');
        buf = [];
      };
      for (const line of parts[0].text.split('\n')) {
        const d = /^::(fig|widget)\s+([a-z0-9-]+)\s*(?:\|\s*(.*))?$/.exec(line);
        if (!d) {
          buf.push(line);
          continue;
        }
        flush();
        const cap = d[3] ? `<figcaption>${md(d[3], err, '캡션').replace(/^<p>|<\/p>\s*$/g, '')}</figcaption>` : '';
        if (d[1] === 'fig') {
          const svg = figures[d[2]];
          if (!svg) err('본문', `없는 그림: ${d[2]} (src/lib/figures.ts)`, id);
          bodyHtml += `<figure class="fig">${svg ?? ''}${cap}</figure>`;
        } else {
          if (!(WIDGETS as readonly string[]).includes(d[2])) err('본문', `없는 위젯: ${d[2]}`, id);
          bodyHtml += `<figure class="fig widget" data-widget="${escapeHtml(d[2])}"><div class="widget-body"></div>${cap}</figure>`;
        }
      }
      flush();

      const cards = cardLinks(fm.data.cards, name, id);
      const problems: Link[] = [];
      for (const c of cards) {
        const card = cardById.get(c.id)!;
        if (card.kind === 'formula') for (const p of card.usedBy) if (!problems.some((x) => x.id === p.id)) problems.push(p);
      }
      track.lessons.push({
        id,
        slug: name.replace(/\.md$/, ''),
        n: Number(m[1]),
        title: fm.data.title,
        hook: fm.data.hook,
        minutes: fm.data.minutes,
        href: `${trackHref}${name.replace(/\.md$/, '')}/`,
        bodyHtml,
        summaryHtml,
        quiz,
        cards,
        problems,
      });
    }
    const lessonById = new Map(track.lessons.map((l) => [l.id, l]));

    // ---- 흐름도
    if (fs.existsSync(path.join(dir, 'flow.yaml'))) {
      const err = errOf('flow.yaml');
      const parsed = FlowSchema.safeParse(YAML.parse(fs.readFileSync(path.join(dir, 'flow.yaml'), 'utf8')));
      if (!parsed.success) err('형식', z.prettifyError(parsed.error));
      else {
        const ids = new Set(parsed.data.map((n) => n.id));
        if (!ids.has('start')) err('id', '"start" 노드가 없습니다');
        for (const n of parsed.data) {
          for (const o of n.options) if (!ids.has(o.to)) err('options', `없는 노드: ${o.to}`, n.id);
          track.flow.push({
            id: n.id,
            title: n.title,
            bodyHtml: n.body ? md(n.body, (f, msg) => err(f, msg, n.id), 'body') : undefined,
            options: n.options,
            cards: cardLinks(n.cards, 'flow.yaml', n.id),
            lessons: n.lessons.flatMap((lid) => {
              const l = lessonById.get(lid);
              if (!l) err('lessons', `없는 레슨 id: ${lid}`, n.id);
              return l ? [{ id: lid, title: l.title, href: l.href }] : [];
            }),
          });
        }
      }
    }

    // ---- 비교표 / 한 장 요약 ("## 제목" 단위)
    for (const key of ['pairs', 'sheet'] as const) {
      const f = `${key}.md`;
      if (!fs.existsSync(path.join(dir, f))) continue;
      const err = errOf(f);
      for (const p of splitH2(fs.readFileSync(path.join(dir, f), 'utf8'))) {
        if (!p.title) {
          if (p.text) err('body', '첫 "## " 앞에 내용이 있습니다');
          continue;
        }
        track[key].push({ title: p.title, html: md(p.text, err, `## ${p.title}`) });
      }
    }
    tracks.push(track);
  }
  return { tracks, errors, warnings };
}
