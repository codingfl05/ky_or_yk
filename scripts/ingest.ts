// Gemini/Antigravity가 만든 "파일 묶음"(bundle)을 풀어서 content/에 넣고, 문제 이미지를 붙인다.
//
//   npm run ingest                         # inbox/ 폴더의 묶음(.md)과 이미지를 처리
//   npm run ingest -- <묶음.md> <사진...>   # 파일을 직접 지정 (폴더도 가능)
//   npm run ingest -- --dry-run ...        # 쓰지 않고 무엇을 할지만 출력
//   npm run ingest -- --overwrite ...      # 같은 경로의 기존 파일을 덮어씀
//   npm run ingest -- --clean              # 성공하면 처리한 inbox/ 파일을 지움
//   npm run ingest -- --map=사진1=<경로> ...  # images의 이름을 특정 사진 파일에 직접 연결 (이름이 안 맞을 때)
//
// 묶음 형식 (docs/gemini-instructions.md 참고):
//   ===== FILE: content/problems/physics/thermo-entropy/NN-carnot-compare.md =====
//   ---
//   id: prob-...
//   images: ["IMG_1234.jpg"]      ← 보낸 사진의 원래 파일명
//   ---
//   ## problem
//   ...
//   ===== END =====               (선택)
//
// - 파일명의 NN은 그 단원의 다음 번호로 바뀐다.
// - images의 원래 파일명은 입력 사진과 이름으로 매칭되고, 리사이즈(가로 최대 1600px, webp)해서
//   public/img/problems/<카드id>-<n>.webp 로 저장한 뒤 frontmatter를 그 이름으로 고친다.
// - 마지막에 전체 검사(validate)를 돌린다. 에러가 있으면 exit 1.

import fs from 'node:fs';
import path from 'node:path';
import YAML from 'yaml';
import sharp from 'sharp';
import { formatError, loadContent, PROBLEM_IMG_DIR, PROBLEM_IMG_URL } from '../src/lib/content.ts';

const ROOT = process.cwd();
const INBOX = path.join(ROOT, 'inbox');
const IMG_EXT = /\.(jpe?g|png|webp|gif|avif|tiff?)$/i;
const HEIC_EXT = /\.(heic|heif)$/i;
const MAX_WIDTH = 1600;

const argv = process.argv.slice(2);
const maps = new Map<string, string>();
for (const a of argv.filter((x) => x.startsWith('--map='))) {
  const v = a.slice('--map='.length);
  const i = v.indexOf('=');
  if (i <= 0) fail(`--map 형식: --map=<images에 적힌 이름>=<사진 경로>  (${a})`);
  maps.set(v.slice(0, i).normalize('NFC'), path.resolve(v.slice(i + 1)));
}
const flags = new Set(argv.filter((a) => a.startsWith('--') && !a.startsWith('--map=')));
const dryRun = flags.has('--dry-run');
const overwrite = flags.has('--overwrite');
const clean = flags.has('--clean');
const inputs = argv.filter((a) => !a.startsWith('--'));
for (const f of flags) {
  if (!['--dry-run', '--overwrite', '--clean'].includes(f)) fail(`알 수 없는 옵션: ${f}`);
}

function fail(msg: string): never {
  console.error(`✗ ${msg}`);
  process.exit(1);
}

const nfc = (s: string) => s.normalize('NFC');

// ---------------------------------------------------------------- 입력 모으기

function collect(p: string, out: string[]) {
  const abs = path.resolve(p);
  if (!fs.existsSync(abs)) fail(`없는 경로: ${p}`);
  if (fs.statSync(abs).isDirectory()) {
    for (const name of fs.readdirSync(abs).sort()) {
      if (name.startsWith('.')) continue;
      collect(path.join(abs, name), out);
    }
  } else out.push(abs);
}

const usedInbox = inputs.length === 0;
const files: string[] = [];
if (usedInbox) {
  if (!fs.existsSync(INBOX)) fail('inbox/ 폴더가 없습니다. 묶음 파일 경로를 인자로 주거나 inbox/에 넣으세요');
  collect(INBOX, files);
} else for (const p of inputs) collect(p, files);

const bundles = files.filter((f) => /\.(md|txt)$/i.test(f) && path.basename(f).toLowerCase() !== 'readme.md');
const images = files.filter((f) => IMG_EXT.test(f));
const heics = files.filter((f) => HEIC_EXT.test(f));
if (heics.length) {
  fail(
    `HEIC 사진은 처리할 수 없습니다: ${heics.map((f) => path.basename(f)).join(', ')}\n` +
      '  스크린샷이나 JPG로 보내주세요 (iPhone: 설정 > 카메라 > 포맷 > 높은 호환성).',
  );
}
if (bundles.length === 0) fail('묶음 파일(.md/.txt)이 없습니다');

// ---------------------------------------------------------------- 묶음 풀기

interface Entry {
  bundle: string;
  target: string; // content/... (NN 치환 전)
  text: string;
}

const START_RE = /^=====\s*FILE:\s*(.+?)\s*=====\s*$/;
const END_RE = /^=====\s*END\s*=====\s*$/;

function parseBundle(file: string): Entry[] {
  const lines = fs.readFileSync(file, 'utf8').replace(/^﻿/, '').split(/\r?\n/);
  const out: Entry[] = [];
  let cur: { target: string; buf: string[] } | null = null;
  const push = () => {
    if (!cur) return;
    while (cur.buf.length && !cur.buf[cur.buf.length - 1].trim()) cur.buf.pop();
    while (cur.buf.length && !cur.buf[0].trim()) cur.buf.shift();
    out.push({ bundle: file, target: cur.target, text: cur.buf.join('\n') + '\n' });
    cur = null;
  };
  for (const line of lines) {
    const m = START_RE.exec(line);
    if (m) {
      push();
      cur = { target: m[1].replace(/^\.?\//, ''), buf: [] };
    } else if (END_RE.test(line)) push();
    else if (cur) cur.buf.push(line);
  }
  push();
  if (out.length === 0) fail(`${path.basename(file)}: "===== FILE: 경로 =====" 줄이 없습니다`);
  return out;
}

const entries = bundles.flatMap(parseBundle);

// 경로 검사
for (const e of entries) {
  const t = e.target;
  if (path.isAbsolute(t) || t.split('/').includes('..') || !t.startsWith('content/') || !t.endsWith('.md')) {
    fail(`허용되지 않는 경로: ${t} (content/ 아래의 .md만)`);
  }
}

// NN → 다음 번호
const nextNum = new Map<string, number>();
function assignNumber(target: string): string {
  const dir = path.posix.dirname(target);
  const base = path.posix.basename(target);
  if (!/^NN-/.test(base)) return target;
  if (!nextNum.has(dir)) {
    const abs = path.join(ROOT, dir);
    const used = (fs.existsSync(abs) ? fs.readdirSync(abs) : [])
      .map((f) => /^(\d{2})-/.exec(f)?.[1])
      .filter(Boolean)
      .map(Number);
    nextNum.set(dir, used.length ? Math.max(...used) + 1 : 1);
  }
  const n = nextNum.get(dir)!;
  nextNum.set(dir, n + 1);
  return `${dir}/${String(n).padStart(2, '0')}-${base.slice(3)}`;
}

// ---------------------------------------------------------------- 이미지 매칭

/** 업로드된 파일은 앞에 "<해시>-"가 붙기도 하므로 끝부분 일치도 허용. Mac 한글 파일명(NFD)도 맞춘다. */
function findImage(name: string): string | undefined {
  const want = nfc(name);
  const mapped = maps.get(want);
  if (mapped) {
    if (!fs.existsSync(mapped)) fail(`--map 경로가 없습니다: ${mapped}`);
    if (!images.includes(mapped)) images.push(mapped);
    return mapped;
  }
  return (
    images.find((f) => nfc(path.basename(f)) === want) ??
    images.find((f) => nfc(path.basename(f)).endsWith(`-${want}`))
  );
}

const usedImages = new Set<string>();
const written: string[] = [];
const problems: string[] = [];

/** 쓰기 전에 전부 확인: 하나라도 문제가 있으면 아무것도 쓰지 않는다 (재실행 시 번호 중복 방지) */
function precheck(): string[] {
  const out: string[] = [];
  for (const e of entries) {
    if (!/^NN-/.test(path.posix.basename(e.target)) && fs.existsSync(path.join(ROOT, e.target)) && !overwrite) {
      out.push(`이미 있는 파일: ${e.target} (덮어쓰려면 --overwrite)`);
    }
    const fm = /^---\r?\n([\s\S]*?)\r?\n---/.exec(e.text);
    if (!fm) {
      out.push(`${e.target}: frontmatter(---)가 없습니다`);
      continue;
    }
    let data: any;
    try {
      data = YAML.parse(fm[1]);
    } catch (err) {
      out.push(`${e.target}: YAML 파싱 실패: ${(err as Error).message}`);
      continue;
    }
    for (const name of Array.isArray(data?.images) ? data.images.map(String) : []) {
      if (findImage(name) || fs.existsSync(path.join(PROBLEM_IMG_DIR, name))) continue;
      out.push(`${e.target}: 사진 "${name}"을(를) 찾지 못했습니다. 받은 사진: ${images.map((f) => path.basename(f)).join(', ') || '(없음)'}`);
    }
  }
  return out;
}

async function main() {
  const pre = precheck();
  if (pre.length) {
    console.error(`쓰기 전 확인에서 문제 ${pre.length}개 (아무 파일도 쓰지 않았습니다):`);
    for (const p of pre) console.error(`  ✗ ${p}`);
    console.error('\n사진 이름이 안 맞으면 --map=<images에 적힌 이름>=<사진 경로> 로 직접 연결하세요.');
    process.exit(1);
  }
  for (const e of entries) {
    const target = assignNumber(e.target);
    const abs = path.join(ROOT, target);
    if (fs.existsSync(abs) && !overwrite) {
      problems.push(`이미 있는 파일이라 건너뜀: ${target} (덮어쓰려면 --overwrite)`);
      continue;
    }

    let text = e.text;
    const fmMatch = /^---\r?\n([\s\S]*?)\r?\n---/.exec(text);
    if (fmMatch) {
      const doc = YAML.parseDocument(fmMatch[1]);
      const id = doc.get('id');
      const imgs = doc.get('images');
      if (imgs && YAML.isSeq(imgs)) {
        const names = imgs.items.map((it) => String(YAML.isScalar(it) ? it.value : it));
        const finals: string[] = [];
        for (const [i, name] of names.entries()) {
          if (fs.existsSync(path.join(PROBLEM_IMG_DIR, name)) && !findImage(name)) {
            finals.push(name); // 이미 저장된 이미지
            continue;
          }
          const src = findImage(name);
          if (!src) {
            problems.push(
              `${target}: 사진 "${name}"을(를) 찾지 못했습니다. 받은 사진: ${images.map((f) => path.basename(f)).join(', ') || '(없음)'}`,
            );
            finals.push(name);
            continue;
          }
          usedImages.add(src);
          const out = `${typeof id === 'string' ? id : path.posix.basename(target, '.md')}-${i + 1}.webp`;
          if (!dryRun) {
            fs.mkdirSync(PROBLEM_IMG_DIR, { recursive: true });
            await sharp(src)
              .rotate()
              .resize({ width: MAX_WIDTH, withoutEnlargement: true })
              .webp({ quality: 85 })
              .toFile(path.join(PROBLEM_IMG_DIR, out));
          }
          written.push(`public/${PROBLEM_IMG_URL}/${out}  ← ${path.basename(src)}`);
          finals.push(out);
        }
        const seq = new YAML.YAMLSeq();
        seq.flow = true;
        finals.forEach((f) => seq.add(f));
        doc.set('images', seq);
        text = text.replace(fmMatch[1], doc.toString({ flowCollectionPadding: false, lineWidth: 0 }).trimEnd());
      }
    } else {
      problems.push(`${target}: frontmatter(---)가 없습니다`);
    }

    if (!dryRun) {
      fs.mkdirSync(path.dirname(abs), { recursive: true });
      fs.writeFileSync(abs, text);
    }
    written.push(target);
  }

  const unused = images.filter((f) => !usedImages.has(f));

  console.log(`${dryRun ? '[dry-run] ' : ''}처리한 묶음: ${bundles.map((f) => path.relative(ROOT, f)).join(', ')}`);
  console.log(`\n${dryRun ? '만들 파일' : '만든 파일'} ${written.length}개:`);
  for (const w of written) console.log(`  + ${w}`);
  if (unused.length) console.log(`\n쓰이지 않은 사진 ${unused.length}개: ${unused.map((f) => path.basename(f)).join(', ')}`);
  if (problems.length) {
    console.error(`\n문제 ${problems.length}개:`);
    for (const p of problems) console.error(`  ✗ ${p}`);
  }
  if (dryRun) return;

  // 전체 검사
  const { errors, warnings } = loadContent('/');
  if (warnings.length) {
    console.warn(`\n검사 경고 ${warnings.length}개:`);
    for (const w of warnings) console.warn(`  ! ${formatError(w)}`);
  }
  if (errors.length) {
    console.error(`\n검사 에러 ${errors.length}개 (고친 뒤 npm run validate):`);
    for (const e of errors) console.error(`  ✗ ${formatError(e)}`);
  }
  if (errors.length || problems.length) process.exit(1);

  if (clean && usedInbox) {
    for (const f of files) fs.rmSync(f);
    console.log('\ninbox/ 비움');
  }
  console.log('\n✓ 완료');
}

main().catch((e) => fail(e instanceof Error ? e.stack ?? e.message : String(e)));
