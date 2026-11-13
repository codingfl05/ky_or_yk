// 모든 카드/단원의 schema와 LaTeX(KaTeX)를 검사한다. 에러가 있으면 exit 1 → Render 배포 실패.
// 경고(예: 아직 없는 related id)는 출력만 하고 통과시킨다.
//   npm run validate
import { loadContent, formatError } from '../src/lib/content.ts';
import { loadLessons } from '../src/lib/lessons.ts';

const loaded = loadContent('/');
const { cards, subjects } = loaded;
const learn = loadLessons('/', loaded);
const errors = [...loaded.errors, ...learn.errors];
const warnings = [...loaded.warnings, ...learn.warnings];

const unverified = cards.filter((c) => !c.verified);
console.log(`카드 ${cards.length}개 검사 (과목 ${subjects.length}개)`);
for (const t of learn.tracks) console.log(`학습 트랙 "${t.title}": 레슨 ${t.lessons.length}개, 흐름도 노드 ${t.flow.length}개, 비교 ${t.pairs.length}개, 요약 ${t.sheet.length}개`);
if (unverified.length) {
  console.log(`\n검토 필요(verified: false) ${unverified.length}개:`);
  for (const c of unverified) console.log(`  - ${c.id}  (${c.source})`);
}

if (warnings.length) {
  console.warn(`\n경고 ${warnings.length}개:`);
  for (const w of warnings) console.warn(`  ! ${formatError(w)}`);
}

if (errors.length) {
  console.error(`\n에러 ${errors.length}개:`);
  for (const e of errors) console.error(`  ✗ ${formatError(e)}`);
  process.exit(1);
}
console.log('\n✓ 에러 없음');
