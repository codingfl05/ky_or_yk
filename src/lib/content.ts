// 카드 로더 + 검증기. Astro 빌드와 scripts/validate.ts가 같은 코드를 쓴다.
// Astro 전용 API를 import하지 않는다 (tsx로 단독 실행 가능해야 함).

import fs from 'node:fs';
import path from 'node:path';
import YAML from 'yaml';
import { z } from 'zod';
import katex from 'katex';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import { visit } from 'unist-util-visit';
import type { CardView, SubjectInfo } from './types';

const ROOT = process.cwd();
const CONTENT_DIR = path.join(ROOT, 'content');
const CONFIG_FILE = path.join(ROOT, 'config', 'subjects.yaml');

export interface ContentError {
  file: string;
  id?: string;
  field: string;
  message: string;
}

export function formatError(e: ContentError): string {
  return `${e.file}${e.id ? ` [${e.id}]` : ''} ${e.field}: ${e.message}`;
}

// ---------------------------------------------------------------- config

const ChapterSchema = z.object({
  id: z.string().regex(/^[a-z0-9-]+$/),
  name: z.string().min(1),
  name_en: z.string().optional(),
  prefix: z.string().regex(/^[a-z0-9-]+$/),
});
const SubjectSchema = z.object({
  id: z.string().regex(/^[a-z0-9-]+$/),
  name: z.string().min(1),
  name_en: z.string().min(1),
  chapters: z.array(ChapterSchema).min(1),
});
const ConfigSchema = z.object({ subjects: z.array(SubjectSchema).min(1) });

export function loadSubjects(): SubjectInfo[] {
  const raw = YAML.parse(fs.readFileSync(CONFIG_FILE, 'utf8'));
  const parsed = ConfigSchema.safeParse(raw);
  if (!parsed.success) {
    throw new Error(`config/subjects.yaml 형식 오류:\n${z.prettifyError(parsed.error)}`);
  }
  return parsed.data.subjects;
}

// ---------------------------------------------------------------- KaTeX

const KATEX_BASE: katex.KatexOptions = {
  throwOnError: true,
  output: 'html',
  trust: false,
  // 수식 안의 한글은 \text{} 밖에 있으면 폰트가 깨지므로 에러로 취급한다.
  strict: (code: string) => (code === 'unicodeTextInMathMode' ? 'error' : 'ignore'),
};

function renderTex(tex: string, displayMode: boolean): { html: string; error?: string } {
  try {
    return { html: katex.renderToString(tex, { ...KATEX_BASE, displayMode }) };
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    return { html: `<code class="tex-error">${escapeHtml(tex)}</code>`, error: msg };
  }
}

/** Markdown(+ $..$ / $$..$$) → HTML. 수식 에러는 errors에 쌓는다. */
function markdownToHtml(md: string): { html: string; errors: string[] } {
  const errors: string[] = [];
  const remarkKatex = () => (tree: any) => {
    visit(tree, ['math', 'inlineMath'], (node: any, index, parent: any) => {
      if (!parent || index === undefined) return;
      const display = node.type === 'math';
      const r = renderTex(node.value, display);
      if (r.error) errors.push(`${display ? '$$' : '$'}${node.value}${display ? '$$' : '$'} → ${r.error}`);
      parent.children[index] = {
        type: 'html',
        value: display ? `<div class="fx">${r.html}</div>` : r.html,
      };
    });
  };
  const file = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkMath)
    .use(remarkKatex)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .processSync(md);
  return { html: String(file), errors };
}

export function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);
}

// ---------------------------------------------------------------- card schema

const SOURCE_RE = /^(manual|notion(:.+)?|.+\.pdf(#p\d+(-\d+)?)?)$/i;

export const CardFrontmatter = z.strictObject({
  id: z.string().regex(/^[a-z0-9]+(-[a-z0-9]+)*$/, 'kebab-case 소문자/숫자만 허용'),
  title_ko: z.string().min(1),
  title_en: z.string().min(1),
  formula: z.union([z.string().min(1), z.array(z.string().min(1)).min(1)]),
  importance: z.number().int().min(1, '1~3 정수').max(3, '1~3 정수') as z.ZodType<1 | 2 | 3>,
  tags: z.array(z.string().min(1)).default([]),
  related: z.array(z.string()).default([]),
  source: z.string().regex(SOURCE_RE, "'manual', 'notion', 'notion:<페이지>', '<파일>.pdf' 또는 '<파일>.pdf#p12' 형식"),
  verified: z.boolean().default(true),
  order: z.number().optional(),
});

const SECTION_KEYS = { 조건: 'conditions', 설명: 'explanation', 유도: 'derivation', 예제: 'example' } as const;
type SectionKey = (typeof SECTION_KEYS)[keyof typeof SECTION_KEYS];
const REQUIRED_SECTIONS: SectionKey[] = ['conditions', 'explanation'];

function splitSections(body: string): { sections: Partial<Record<SectionKey, string>>; problems: string[] } {
  const sections: Partial<Record<SectionKey, string>> = {};
  const problems: string[] = [];
  let current: SectionKey | null = null;
  let buf: string[] = [];
  const flush = () => {
    const text = buf.join('\n').trim();
    if (current) sections[current] = text;
    else if (text) problems.push('첫 "## 조건" 섹션 앞에 내용이 있습니다');
    buf = [];
  };
  for (const line of body.split(/\r?\n/)) {
    const m = /^##\s+(.+?)\s*$/.exec(line);
    if (m) {
      flush();
      const key = SECTION_KEYS[m[1] as keyof typeof SECTION_KEYS];
      if (!key) {
        problems.push(`알 수 없는 섹션 "## ${m[1]}" (허용: ${Object.keys(SECTION_KEYS).join(', ')})`);
        current = null;
        continue;
      }
      if (key in sections) problems.push(`"## ${m[1]}" 섹션이 중복됩니다`);
      current = key;
    } else {
      buf.push(line);
    }
  }
  flush();
  for (const k of REQUIRED_SECTIONS) {
    if (!sections[k]) {
      const ko = Object.entries(SECTION_KEYS).find(([, v]) => v === k)![0];
      problems.push(`필수 섹션 "## ${ko}"이(가) 없거나 비어 있습니다`);
    }
  }
  return { sections, problems };
}

// ---------------------------------------------------------------- loading

interface RawCard {
  file: string;
  subject: SubjectInfo;
  chapter: SubjectInfo['chapters'][number];
  fm: z.infer<typeof CardFrontmatter>;
  view: Omit<CardView, 'related'>;
}

export interface LoadResult {
  subjects: SubjectInfo[];
  cards: CardView[];
  errors: ContentError[];
}

function walkMarkdown(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  const out: string[] = [];
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) out.push(...walkMarkdown(p));
    else if (ent.name.endsWith('.md')) out.push(p);
  }
  return out.sort();
}

/**
 * @param base 사이트 base 경로 (예: "/"). 링크 생성에 쓴다.
 */
export function loadContent(base = '/'): LoadResult {
  const subjects = loadSubjects();
  const errors: ContentError[] = [];
  const raws: RawCard[] = [];
  const b = base.endsWith('/') ? base : base + '/';

  for (const file of walkMarkdown(CONTENT_DIR)) {
    const rel = path.relative(ROOT, file).split(path.sep).join('/');
    const parts = path.relative(CONTENT_DIR, file).split(path.sep);
    const err = (field: string, message: string, id?: string) => errors.push({ file: rel, id, field, message });

    if (parts.length !== 3) {
      err('path', 'content/<과목>/<단원>/<id>.md 위치여야 합니다');
      continue;
    }
    const [subjectId, chapterId, fileName] = parts;
    const subject = subjects.find((s) => s.id === subjectId);
    const chapter = subject?.chapters.find((c) => c.id === chapterId);
    if (!subject || !chapter) {
      err('path', `config/subjects.yaml에 없는 과목/단원입니다: ${subjectId}/${chapterId}`);
      continue;
    }

    const text = fs.readFileSync(file, 'utf8');
    const m = /^---\r?\n([\s\S]*?)\r?\n---[ \t]*(?:\r?\n|$)([\s\S]*)$/.exec(text);
    if (!m) {
      err('frontmatter', '파일 맨 앞에 --- 로 감싼 frontmatter가 없습니다');
      continue;
    }
    let data: unknown;
    try {
      data = YAML.parse(m[1]);
    } catch (e) {
      err('frontmatter', `YAML 파싱 실패: ${(e as Error).message}`);
      continue;
    }
    const parsed = CardFrontmatter.safeParse(data);
    const idGuess = (data as any)?.id;
    if (!parsed.success) {
      for (const issue of parsed.error.issues) {
        err(issue.path.join('.') || 'frontmatter', issue.message, typeof idGuess === 'string' ? idGuess : undefined);
      }
      continue;
    }
    const fm = parsed.data;
    const id = fm.id;
    if (fileName !== `${id}.md`) err('id', `파일명(${fileName})과 id가 다릅니다. ${id}.md 로 맞추세요`, id);
    if (!(id === chapter.prefix || id.startsWith(chapter.prefix + '-'))) {
      err('id', `이 단원의 카드 id는 "${chapter.prefix}-"로 시작해야 합니다`, id);
    }

    // 공식
    const formulas = Array.isArray(fm.formula) ? fm.formula : [fm.formula];
    const formulaHtml = formulas
      .map((f, i) => {
        const r = renderTex(f.trim(), true);
        if (r.error) err(formulas.length > 1 ? `formula[${i}]` : 'formula', r.error, id);
        return `<div class="fx">${r.html}</div>`;
      })
      .join('');

    // 본문 섹션
    const { sections, problems } = splitSections(m[2]);
    problems.forEach((p) => err('body', p, id));
    const rendered: Partial<Record<SectionKey, string>> = {};
    for (const [ko, key] of Object.entries(SECTION_KEYS)) {
      const src = sections[key];
      if (!src) continue;
      const r = markdownToHtml(src);
      r.errors.forEach((e) => err(`## ${ko}`, e, id));
      rendered[key] = r.html;
    }

    raws.push({
      file: rel,
      subject,
      chapter,
      fm,
      view: {
        id,
        subject: subject.id,
        chapter: chapter.id,
        subjectName: subject.name,
        chapterName: chapter.name,
        title_ko: fm.title_ko,
        title_en: fm.title_en,
        tags: fm.tags,
        importance: fm.importance,
        verified: fm.verified,
        source: fm.source,
        href: `${b}${subject.id}/${chapter.id}/#${id}`,
        formulaHtml,
        conditionsHtml: rendered.conditions ?? '',
        explanationHtml: rendered.explanation ?? '',
        derivationHtml: rendered.derivation,
        exampleHtml: rendered.example,
      },
    });
  }

  // id 중복
  const byId = new Map<string, RawCard>();
  for (const r of raws) {
    const prev = byId.get(r.fm.id);
    if (prev) errors.push({ file: r.file, id: r.fm.id, field: 'id', message: `id 중복 (${prev.file})` });
    else byId.set(r.fm.id, r);
  }

  // related
  const cards: CardView[] = raws.map((r) => {
    const related: CardView['related'] = [];
    for (const rid of r.fm.related) {
      const target = byId.get(rid);
      if (rid === r.fm.id) errors.push({ file: r.file, id: r.fm.id, field: 'related', message: '자기 자신을 참조합니다' });
      else if (!target) errors.push({ file: r.file, id: r.fm.id, field: 'related', message: `존재하지 않는 카드 id: ${rid}` });
      else related.push({ id: rid, title: target.fm.title_ko, href: target.view.href });
    }
    return { ...r.view, related };
  });

  // 정렬: config 순서 → order → 중요도 높은 순 → 이름
  const subjIdx = new Map(subjects.map((s, i) => [s.id, i]));
  const chapIdx = new Map(subjects.flatMap((s) => s.chapters.map((c, i) => [`${s.id}/${c.id}`, i] as const)));
  const orderOf = new Map(raws.map((r) => [r.fm.id, r.fm.order ?? Number.POSITIVE_INFINITY]));
  cards.sort(
    (a, b) =>
      subjIdx.get(a.subject)! - subjIdx.get(b.subject)! ||
      chapIdx.get(`${a.subject}/${a.chapter}`)! - chapIdx.get(`${b.subject}/${b.chapter}`)! ||
      orderOf.get(a.id)! - orderOf.get(b.id)! ||
      b.importance - a.importance ||
      a.title_ko.localeCompare(b.title_ko, 'ko'),
  );

  return { subjects, cards, errors };
}

// ---------------------------------------------------------------- Astro용

let cache: LoadResult | null = null;

/** Astro 페이지에서 사용. 콘텐츠 에러가 있으면 빌드를 멈춘다. */
export function getContent(base: string): LoadResult {
  // dev 서버에서는 파일 수정이 바로 반영되도록 캐시하지 않는다.
  if (cache && process.env.NODE_ENV === 'production') return cache;
  const result = loadContent(base);
  if (result.errors.length) {
    throw new Error(
      `콘텐츠 에러 ${result.errors.length}개 (npm run validate 로 확인):\n` + result.errors.map(formatError).join('\n'),
    );
  }
  cache = result;
  return result;
}
