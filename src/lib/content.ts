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
import { figures } from './figures';
import type { CardView, FormulaCardView, ProblemCardView, SubjectInfo } from './types';

const ROOT = process.cwd();
const CONTENT_DIR = path.join(ROOT, 'content');
const CONFIG_FILE = path.join(ROOT, 'config', 'subjects.yaml');
/** 문제 카드 폴더: content/problems/<과목>/<단원>/ */
export const PROBLEMS_DIR = 'problems';
/** 문제 이미지: public/img/problems/<파일> → 사이트 /img/problems/<파일> */
export const PROBLEM_IMG_URL = 'img/problems';
export const PROBLEM_IMG_DIR = path.join(ROOT, 'public', PROBLEM_IMG_URL);
export const IMAGE_RE = /^[A-Za-z0-9][A-Za-z0-9._-]*\.(jpe?g|png|webp)$/i;

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
  // _chapter.md가 있으면 그 title_ko/title_en이 우선한다. 둘 다 없으면 에러.
  name: z.string().min(1).optional(),
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

type ConfigSubject = z.infer<typeof SubjectSchema>;

/** config만 읽는다 (단원 이름이 비어 있을 수 있음). 화면용 이름은 loadContent()의 subjects를 쓴다. */
export function loadSubjects(): ConfigSubject[] {
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
    let html = katex.renderToString(tex, { ...KATEX_BASE, displayMode });
    // 점검용: AUDIT_TEX=1로 빌드하면 블록 수식에 원본 TeX를 붙인다 (폰 너비 넘침 점검 스크립트가 읽는다)
    if (displayMode && process.env.AUDIT_TEX) html = html.replace('<span class="katex-display">', `<span class="katex-display" data-tex="${escapeHtml(tex).replace(/"/g, '&quot;')}">`);
    return { html };
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    return { html: `<code class="tex-error">${escapeHtml(tex)}</code>`, error: msg };
  }
}

/** Markdown(+ $..$ / $$..$$) → HTML. 수식 에러는 errors에 쌓는다. */
export function markdownToHtml(md: string): { html: string; errors: string[] } {
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

/**
 * 카드 섹션 마크다운 + "::fig 이름 | 캡션" 줄 (src/lib/figures.ts의 그림).
 * 연달아 쓴 ::fig 줄은 한 줄에 여러 개 놓이는 격자(.fig-grid)로 묶는다.
 */
export function renderWithFigures(src: string): { html: string; errors: string[] } {
  const errors: string[] = [];
  let html = '';
  let buf: string[] = [];
  let figs: string[] = [];
  const flushText = () => {
    if (buf.join('').trim()) {
      const r = markdownToHtml(buf.join('\n'));
      errors.push(...r.errors);
      html += r.html;
    }
    buf = [];
  };
  const flushFigs = () => {
    if (figs.length) html += figs.length > 1 ? `<div class="fig-grid">${figs.join('')}</div>` : figs[0];
    figs = [];
  };
  for (const line of src.split('\n')) {
    const d = /^::fig\s+([a-z0-9-]+)\s*(?:\|\s*(.*))?$/.exec(line.trim());
    if (!d) {
      if (figs.length && !line.trim()) continue; // 그림 사이 빈 줄은 격자를 끊지 않는다
      flushFigs();
      buf.push(line);
      continue;
    }
    flushText();
    const svg = figures[d[1]];
    if (!svg) errors.push(`없는 그림: ${d[1]} (src/lib/figures.ts)`);
    let cap = '';
    if (d[2]) {
      const r = markdownToHtml(d[2]);
      errors.push(...r.errors);
      cap = `<figcaption>${r.html.replace(/^<p>|<\/p>\s*$/g, '')}</figcaption>`;
    }
    figs.push(`<figure class="fig">${svg ?? ''}${cap}</figure>`);
  }
  flushFigs();
  flushText();
  return { html, errors };
}

export function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);
}

// ---------------------------------------------------------------- card schema

const SOURCE_RE = /^(manual|notion(:.+)?|book:.+|.+\.pdf(#p\d+(-\d+)?)?)$/i;
const SOURCE_MSG = "'manual', 'notion', 'notion:<페이지>', 'book:<교재명 쪽>', '<파일>.pdf' 또는 '<파일>.pdf#p12' 형식";
const NO_TEX = (v: string) => !/[\\$]/.test(v);
const NO_TEX_MSG = 'frontmatter에는 LaTeX를 쓰지 않습니다 (\\ 또는 $ 금지). 수식은 본문에서';
const plain = () => z.string().min(1).refine(NO_TEX, NO_TEX_MSG);

export const CardFrontmatter = z.strictObject({
  id: z.string().regex(/^[a-z0-9]+(-[a-z0-9]+)*$/, 'kebab-case 소문자/숫자만 허용'),
  title_ko: plain(),
  title_en: plain(),
  question: plain().optional(),
  tags: z.array(plain()).default([]),
  importance: z.number().int().min(1, '1~3 정수').max(3, '1~3 정수') as z.ZodType<1 | 2 | 3>,
  related: z.array(z.string()).default([]),
  source: z.string().regex(SOURCE_RE, SOURCE_MSG),
  verified: z.boolean().default(true),
});

export const ChapterFrontmatter = z.strictObject({
  chapter_id: z.string().regex(/^[a-z0-9-]+$/),
  subject: z.string().regex(/^[a-z0-9-]+$/),
  title_ko: plain(),
  title_en: plain().optional(),
  source: z.string().regex(SOURCE_RE, SOURCE_MSG).optional(),
});

export const ProblemFrontmatter = z.strictObject({
  id: z.string().regex(/^prob(-[a-z0-9]+)+$/, '"prob-"로 시작하는 kebab-case 소문자/숫자'),
  title_ko: plain(),
  source: plain(),
  difficulty: z.number().int().min(1, '1~3 정수').max(3, '1~3 정수') as z.ZodType<1 | 2 | 3>,
  tags: z.array(plain()).default([]),
  related: z.array(z.string()).default([]),
  images: z.array(z.string().regex(IMAGE_RE, '영문/숫자 파일명 + .jpg/.png/.webp')).default([]),
  verified: z.boolean().default(true),
});

/** 본문 섹션. 화면 표시 순서도 이 순서. */
export const SECTION_NAMES = ['formula', 'conditions', 'explanation', 'story', 'derivation', 'example', 'supplement'] as const;
export const PROBLEM_SECTION_NAMES = ['problem', 'answer', 'key-idea', 'solution', 'mistakes', 'supplement'] as const;

function splitSections<K extends string>(
  body: string,
  allowed: readonly K[],
): { sections: Partial<Record<K, string>>; problems: string[] } {
  const sections: Partial<Record<K, string>> = {};
  const problems: string[] = [];
  let current: K | null = null;
  let buf: string[] = [];
  let inFence = false;
  let seenHeading = false;
  const flush = () => {
    const text = buf.join('\n').trim();
    if (current) sections[current] = text;
    else if (text && !seenHeading) problems.push('첫 "## " 섹션 앞에 내용이 있습니다');
    buf = [];
  };
  for (const line of body.split(/\r?\n/)) {
    if (/^\s*(```|~~~)/.test(line)) inFence = !inFence;
    const m = inFence ? null : /^##\s+(.+?)\s*$/.exec(line);
    if (m) {
      flush();
      seenHeading = true;
      const key = m[1] as K;
      if (!allowed.includes(key)) {
        problems.push(`알 수 없는 섹션 "## ${m[1]}" (허용: ${allowed.join(', ')})`);
        current = null;
        continue;
      }
      if (key in sections) problems.push(`"## ${key}" 섹션이 중복됩니다`);
      current = key;
    } else {
      buf.push(line);
    }
  }
  flush();
  for (const [k, v] of Object.entries(sections)) if (!v) problems.push(`"## ${k}" 섹션이 비어 있습니다 (없으면 섹션째 지우세요)`);
  return { sections, problems };
}

function splitFrontmatter(text: string): { yaml: string; body: string } | null {
  const m = /^---\r?\n([\s\S]*?)\r?\n---[ \t]*(?:\r?\n|$)([\s\S]*)$/.exec(text);
  return m ? { yaml: m[1], body: m[2] } : null;
}

// ---------------------------------------------------------------- loading

type Related = { id: string; title: string; href: string };

interface RawCard {
  file: string;
  related: string[];
  view: Omit<FormulaCardView, 'related' | 'usedBy'> | Omit<ProblemCardView, 'related'>;
}

export interface LoadResult {
  subjects: SubjectInfo[];
  /** 공식 카드 + 문제 카드 (kind로 구분) */
  cards: CardView[];
  /** 빌드를 멈추는 문제 */
  errors: ContentError[];
  /** 빌드는 되지만 알려야 하는 문제 (예: 아직 없는 related id) */
  warnings: ContentError[];
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

const CARD_FILE_RE = /^(\d{2})-([a-z0-9]+(?:-[a-z0-9]+)*)\.md$/;
const CHAPTER_FILE = '_chapter.md';

/** frontmatter 읽기 + zod 검사. 실패하면 에러를 쌓고 null */
function readFrontmatter<T extends z.ZodType>(
  file: string,
  schema: T,
  err: (field: string, message: string, id?: string) => void,
): { fm: z.infer<T>; body: string } | null {
  const split = splitFrontmatter(fs.readFileSync(file, 'utf8'));
  if (!split) {
    err('frontmatter', '파일 맨 앞에 --- 로 감싼 frontmatter가 없습니다');
    return null;
  }
  let data: unknown;
  try {
    data = YAML.parse(split.yaml);
  } catch (e) {
    err('frontmatter', `YAML 파싱 실패: ${(e as Error).message}`);
    return null;
  }
  const parsed = schema.safeParse(data);
  if (!parsed.success) {
    const idGuess = (data as any)?.id;
    for (const issue of parsed.error.issues) {
      err(issue.path.join('.') || 'frontmatter', issue.message, typeof idGuess === 'string' ? idGuess : undefined);
    }
    return null;
  }
  return { fm: parsed.data, body: split.body };
}

/**
 * @param base 사이트 base 경로 (예: "/"). 링크 생성에 쓴다.
 */
export function loadContent(base = '/'): LoadResult {
  const config = loadSubjects();
  const errors: ContentError[] = [];
  const warnings: ContentError[] = [];
  const b = base.endsWith('/') ? base : base + '/';
  const relOf = (file: string) => path.relative(ROOT, file).split(path.sep).join('/');

  // ---- 단원 정보: config(순서, prefix) + _chapter.md(이름, 소개)
  const subjects: SubjectInfo[] = config.map((s) => ({
    id: s.id,
    name: s.name,
    name_en: s.name_en,
    chapters: s.chapters.map((c) => ({ id: c.id, name: c.name ?? '', name_en: c.name_en, prefix: c.prefix })),
  }));
  const findChapter = (sid: string, cid: string) => {
    const subject = subjects.find((s) => s.id === sid);
    const chapter = subject?.chapters.find((c) => c.id === cid);
    return subject && chapter ? { subject, chapter } : null;
  };

  const all = walkMarkdown(CONTENT_DIR);
  const problemFiles = all.filter((f) => relOf(f).startsWith(`content/${PROBLEMS_DIR}/`));
  const files = all.filter((f) => !problemFiles.includes(f));

  for (const file of files.filter((f) => path.basename(f) === CHAPTER_FILE)) {
    const rel = relOf(file);
    const parts = path.relative(CONTENT_DIR, file).split(path.sep);
    const err = (field: string, message: string) => errors.push({ file: rel, field, message });
    if (parts.length !== 3) {
      err('path', `content/<과목>/<단원>/${CHAPTER_FILE} 위치여야 합니다`);
      continue;
    }
    const found = findChapter(parts[0], parts[1]);
    if (!found) {
      err('path', `config/subjects.yaml에 없는 과목/단원입니다: ${parts[0]}/${parts[1]}`);
      continue;
    }
    const r = readFrontmatter(file, ChapterFrontmatter, err);
    if (!r) continue;
    const { fm } = r;
    const chapter = found.chapter;
    if (fm.subject !== parts[0]) err('subject', `폴더(${parts[0]})와 다릅니다`);
    if (fm.chapter_id !== parts[1]) err('chapter_id', `폴더(${parts[1]})와 다릅니다`);
    chapter.name = fm.title_ko;
    if (fm.title_en) chapter.name_en = fm.title_en;
    if (fm.source) chapter.source = fm.source;
    const intro = r.body.trim();
    if (intro) {
      const h = markdownToHtml(intro);
      h.errors.forEach((e) => err('본문', e));
      chapter.introHtml = h.html;
    }
  }
  for (const s of subjects) {
    for (const c of s.chapters) {
      if (!c.name) {
        errors.push({
          file: 'config/subjects.yaml',
          field: `${s.id}/${c.id}`,
          message: `단원 이름이 없습니다. config에 name을 쓰거나 content/${s.id}/${c.id}/${CHAPTER_FILE}을 만드세요`,
        });
      }
    }
  }

  const raws: RawCard[] = [];
  const orderOf = new Map<string, number>();
  const numberSeen = new Map<string, string>();

  /** 경로 검사 공통: [과목, 단원, 파일명] → 단원 정보 + 번호 */
  const locate = (rel: string, parts: string[], kind: string, err: (f: string, m: string) => void) => {
    if (parts.length !== 3) {
      err('path', `${kind}/<과목>/<단원>/<NN>-<slug>.md 위치여야 합니다`);
      return null;
    }
    const [sid, cid, fileName] = parts;
    const found = findChapter(sid, cid);
    if (!found) {
      err('path', `config/subjects.yaml에 없는 과목/단원입니다: ${sid}/${cid}`);
      return null;
    }
    const m = CARD_FILE_RE.exec(fileName);
    if (!m) {
      err('path', `파일명은 <NN>-<slug>.md 형식이어야 합니다 (예: 01-gauss-law.md): ${fileName}`);
      return null;
    }
    const numKey = `${kind}/${sid}/${cid}/${m[1]}`;
    if (numberSeen.has(numKey)) err('path', `같은 단원에 번호 ${m[1]}이(가) 중복됩니다 (${numberSeen.get(numKey)})`);
    else numberSeen.set(numKey, rel);
    return { ...found, nn: Number(m[1]) };
  };

  /** 섹션 HTML 렌더 공통 */
  const renderSections = <K extends string>(body: string, allowed: readonly K[], id: string, err: (f: string, m: string, id?: string) => void) => {
    const { sections, problems } = splitSections(body, allowed);
    problems.forEach((p) => err('body', p, id));
    const html: Partial<Record<K, string>> = {};
    for (const key of allowed) {
      const src = sections[key];
      if (!src) continue;
      const r = renderWithFigures(src);
      r.errors.forEach((e) => err(`## ${key}`, e, id));
      html[key] = r.html;
    }
    return html;
  };

  // ---- 공식 카드
  for (const file of files.filter((f) => path.basename(f) !== CHAPTER_FILE)) {
    const rel = relOf(file);
    const err = (field: string, message: string, id?: string) => errors.push({ file: rel, id, field, message });
    const loc = locate(rel, path.relative(CONTENT_DIR, file).split(path.sep), 'content', err);
    if (!loc) continue;
    const { subject, chapter } = loc;
    const r = readFrontmatter(file, CardFrontmatter, err);
    if (!r) continue;
    const { fm } = r;
    const id = fm.id;
    if (id.startsWith('prob-')) err('id', '"prob-"는 문제 카드 전용입니다', id);
    if (!(id === chapter.prefix || id.startsWith(chapter.prefix + '-'))) {
      err('id', `이 단원의 카드 id는 "${chapter.prefix}-"로 시작해야 합니다`, id);
    }
    const html = renderSections(r.body, SECTION_NAMES, id, err);
    if (!html.formula) warnings.push({ file: rel, id, field: 'body', message: '"## formula" 섹션이 없습니다' });

    orderOf.set(id, loc.nn);
    raws.push({
      file: rel,
      related: fm.related,
      view: {
        kind: 'formula',
        id,
        subject: subject.id,
        chapter: chapter.id,
        subjectName: subject.name,
        chapterName: chapter.name,
        title_ko: fm.title_ko,
        title_en: fm.title_en,
        question: fm.question,
        tags: fm.tags,
        importance: fm.importance,
        verified: fm.verified,
        source: fm.source,
        href: `${b}${subject.id}/${chapter.id}/#${id}`,
        formulaHtml: html.formula ?? '',
        conditionsHtml: html.conditions,
        explanationHtml: html.explanation,
        storyHtml: html.story,
        derivationHtml: html.derivation,
        exampleHtml: html.example,
        supplementHtml: html.supplement,
      },
    });
  }

  // ---- 문제 카드 (content/problems/<과목>/<단원>/<NN>-<slug>.md)
  const problemRoot = path.join(CONTENT_DIR, PROBLEMS_DIR);
  for (const file of problemFiles) {
    const rel = relOf(file);
    const err = (field: string, message: string, id?: string) => errors.push({ file: rel, id, field, message });
    const loc = locate(rel, path.relative(problemRoot, file).split(path.sep), `content/${PROBLEMS_DIR}`, err);
    if (!loc) continue;
    const { subject, chapter } = loc;
    const r = readFrontmatter(file, ProblemFrontmatter, err);
    if (!r) continue;
    const { fm } = r;
    const id = fm.id;
    for (const img of fm.images) {
      if (!fs.existsSync(path.join(PROBLEM_IMG_DIR, img))) err('images', `이미지 파일이 없습니다: public/${PROBLEM_IMG_URL}/${img}`, id);
    }
    const html = renderSections(r.body, PROBLEM_SECTION_NAMES, id, err);
    if (!html.problem && fm.images.length === 0) err('body', '"## problem" 섹션이나 images 중 하나는 있어야 합니다', id);
    if (!html.answer) warnings.push({ file: rel, id, field: 'body', message: '"## answer" 섹션이 없습니다' });
    if (!html['key-idea']) warnings.push({ file: rel, id, field: 'body', message: '"## key-idea" 섹션이 없습니다' });

    orderOf.set(id, loc.nn);
    raws.push({
      file: rel,
      related: fm.related,
      view: {
        kind: 'problem',
        id,
        subject: subject.id,
        chapter: chapter.id,
        subjectName: subject.name,
        chapterName: chapter.name,
        title_ko: fm.title_ko,
        title_en: '',
        tags: fm.tags,
        importance: fm.difficulty,
        verified: fm.verified,
        source: fm.source,
        href: `${b}${PROBLEMS_DIR}/${subject.id}/${chapter.id}/#${id}`,
        images: fm.images.map((f) => `${b}${PROBLEM_IMG_URL}/${f}`),
        problemHtml: html.problem ?? '',
        answerHtml: html.answer,
        keyIdeaHtml: html['key-idea'],
        solutionHtml: html.solution,
        mistakesHtml: html.mistakes,
        supplementHtml: html.supplement,
      },
    });
  }

  // id 중복 (공식·문제 통틀어 유일: 즐겨찾기/틀린 것이 id로 저장됨)
  const byId = new Map<string, RawCard>();
  for (const r of raws) {
    const prev = byId.get(r.view.id);
    if (prev) errors.push({ file: r.file, id: r.view.id, field: 'id', message: `id 중복 (${prev.file})` });
    else byId.set(r.view.id, r);
  }

  // related: 없는 id는 경고 (카드를 나중에 추가할 수 있으므로 빌드는 계속)
  const usedBy = new Map<string, Related[]>();
  const relatedOf = new Map<string, Related[]>();
  for (const r of raws) {
    const list: Related[] = [];
    for (const rid of r.related) {
      const target = byId.get(rid);
      if (rid === r.view.id) warnings.push({ file: r.file, id: r.view.id, field: 'related', message: '자기 자신을 참조합니다' });
      else if (!target) warnings.push({ file: r.file, id: r.view.id, field: 'related', message: `존재하지 않는 카드 id: ${rid}` });
      else {
        list.push({ id: rid, title: target.view.title_ko, href: target.view.href });
        // 문제 → 공식 링크는 공식 카드 쪽에 "이 공식을 쓰는 문제"로 역링크
        if (r.view.kind === 'problem' && target.view.kind === 'formula') {
          const arr = usedBy.get(rid) ?? [];
          arr.push({ id: r.view.id, title: r.view.title_ko, href: r.view.href });
          usedBy.set(rid, arr);
        }
      }
    }
    relatedOf.set(r.view.id, list);
  }
  const cards: CardView[] = raws.map((r) =>
    r.view.kind === 'formula'
      ? { ...r.view, related: relatedOf.get(r.view.id)!, usedBy: usedBy.get(r.view.id) ?? [] }
      : { ...r.view, related: relatedOf.get(r.view.id)! },
  );

  // 정렬: 공식 → 문제, config 순서 → 파일 번호(NN)
  const subjIdx = new Map(subjects.map((s, i) => [s.id, i]));
  const chapIdx = new Map(subjects.flatMap((s) => s.chapters.map((c, i) => [`${s.id}/${c.id}`, i] as const)));
  cards.sort(
    (a, b) =>
      Number(a.kind === 'problem') - Number(b.kind === 'problem') ||
      subjIdx.get(a.subject)! - subjIdx.get(b.subject)! ||
      chapIdx.get(`${a.subject}/${a.chapter}`)! - chapIdx.get(`${b.subject}/${b.chapter}`)! ||
      orderOf.get(a.id)! - orderOf.get(b.id)!,
  );

  return { subjects, cards, errors, warnings };
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
  if (!cache && result.warnings.length) {
    console.warn(`콘텐츠 경고 ${result.warnings.length}개:\n` + result.warnings.map((w) => '  ! ' + formatError(w)).join('\n'));
  }
  cache = result;
  return result;
}
