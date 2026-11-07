// 템플릿으로 새 카드 파일을 만든다.
//   npm run new -- <과목id> <단원id> <카드id>
//   예) npm run new -- physics electromagnetism phys-em-ampere-law
import fs from 'node:fs';
import path from 'node:path';
import { loadSubjects } from '../src/lib/content.ts';

const [subjectId, chapterId, id] = process.argv.slice(2);
const subjects = loadSubjects();

function usage(msg: string): never {
  console.error(`✗ ${msg}\n\n사용법: npm run new -- <과목id> <단원id> <카드id>\n`);
  console.error('과목/단원 목록 (prefix):');
  for (const s of subjects) {
    console.error(`  ${s.id}  ${s.name}`);
    for (const c of s.chapters) console.error(`    ${c.id}  ${c.name}  (id는 "${c.prefix}-..."로 시작)`);
  }
  process.exit(1);
}

if (!subjectId || !chapterId || !id) usage('인자가 부족합니다');
const subject = subjects.find((s) => s.id === subjectId) ?? usage(`없는 과목: ${subjectId}`);
const chapter = subject.chapters.find((c) => c.id === chapterId) ?? usage(`없는 단원: ${chapterId}`);
if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(id)) usage('id는 kebab-case 소문자/숫자만');
if (!id.startsWith(chapter.prefix + '-')) usage(`이 단원의 id는 "${chapter.prefix}-"로 시작해야 합니다`);

const dir = path.join('content', subject.id, chapter.id);
const file = path.join(dir, `${id}.md`);
if (fs.existsSync(file)) usage(`이미 있습니다: ${file}`);

const tpl = fs.readFileSync('templates/card.md', 'utf8').replace(/^id: .*$/m, `id: ${id}`);
fs.mkdirSync(dir, { recursive: true });
fs.writeFileSync(file, tpl);
console.log(`✓ ${file} 생성. 내용을 채운 뒤 npm run validate 로 확인하세요.`);
