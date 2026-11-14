// 폰 화면(가로 375px)에서 칸보다 넓은 블록 수식·표를 사이트 전체에서 찾는다.
//   npm run check:width            (AUDIT_TEX=1 빌드 → 이 스크립트)
//   node scripts/check-width.cjs [기준 배율=1.2]
// 블록 수식은 폰에서 칸보다 넓으면 글자를 줄여 맞추는데(src/client/ui.ts), 많이 줄면 읽기 어렵다.
// 기준 배율(기본 1.2 = 칸의 120%)보다 넓은 수식이 있으면 목록을 찍고 종료 코드 1로 끝난다.
// 고치는 방법은 CLAUDE.md "폰 화면 폭과 수식 줄바꿈" 참고.
const fs = require('fs');
const path = require('path');
const http = require('http');

const ROOT = path.join(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const LIMIT = parseFloat(process.argv[2] || '1.2');
const WIDTH = 375;

let chromium;
try {
  ({ chromium } = require('playwright'));
} catch {
  console.error('playwright가 없습니다. 클라우드 세션에는 미리 설치돼 있고, 로컬에서는 `npx playwright install chromium` 뒤 `npm i -D playwright`가 필요합니다.');
  process.exit(2);
}
if (!fs.existsSync(path.join(DIST, 'index.html'))) {
  console.error('dist/가 없습니다. `npm run check:width`로 실행하세요 (AUDIT_TEX=1 빌드가 먼저 필요).');
  process.exit(2);
}

const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.woff': 'font/woff', '.ttf': 'font/ttf', '.webp': 'image/webp', '.png': 'image/png' };
const server = http.createServer((req, res) => {
  let p = path.join(DIST, decodeURIComponent(req.url.split('?')[0]));
  if (!p.startsWith(DIST)) return res.writeHead(403).end();
  if (fs.existsSync(p) && fs.statSync(p).isDirectory()) p = path.join(p, 'index.html');
  if (!fs.existsSync(p)) return res.writeHead(404).end();
  res.writeHead(200, { 'content-type': TYPES[path.extname(p)] || 'application/octet-stream' });
  fs.createReadStream(p).pipe(res);
});

function pages() {
  const out = [];
  const walk = (d) => {
    for (const f of fs.readdirSync(d, { withFileTypes: true })) {
      const q = path.join(d, f.name);
      if (f.isDirectory()) walk(q);
      else if (f.name === 'index.html') out.push('/' + path.relative(DIST, d).split(path.sep).join('/') + '/');
    }
  };
  for (const f of fs.readdirSync(DIST, { withFileTypes: true })) {
    // 카드·문제·레슨이 그려지는 쪽만 (과목 폴더, problems, learn)
    if (f.isDirectory() && !['_astro', 'data', 'icons', 'img', 'flash', 'study', 'search', 'saved', 'settings', 'review', 'notes'].includes(f.name)) walk(path.join(DIST, f.name));
  }
  return out.sort();
}

function fileOfCard(id) {
  const hit = [];
  const walk = (d) => {
    for (const f of fs.readdirSync(d, { withFileTypes: true })) {
      const q = path.join(d, f.name);
      if (f.isDirectory()) walk(q);
      else if (f.name.endsWith('.md') && new RegExp(`^id: ${id}\\s*$`, 'm').test(fs.readFileSync(q, 'utf8'))) hit.push(path.relative(ROOT, q));
    }
  };
  walk(path.join(ROOT, 'content'));
  return hit[0];
}

(async () => {
  await new Promise((r) => server.listen(0, '127.0.0.1', r));
  const base = `http://127.0.0.1:${server.address().port}`;
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: WIDTH, height: 667 }, deviceScaleFactor: 1, isMobile: true, hasTouch: true });
  const page = await ctx.newPage();
  const found = [];
  let audited = false;
  for (const u of pages()) {
    await page.goto(base + u, { waitUntil: 'load' });
    await page.waitForTimeout(120);
    const res = await page.evaluate(() => {
      // 접힌 내용까지 모두 펼친 상태로 잰다
      document.querySelectorAll('.card').forEach((c) => c.classList.add('open', 'show-supp'));
      document.querySelectorAll('details').forEach((d) => (d.open = true));
      document.querySelectorAll('main [hidden]').forEach((e) => (e.hidden = false));
      const vw = document.documentElement.clientWidth;
      const card = (el) => { const c = el.closest('[data-card-id]'); return c ? c.dataset.cardId : ''; };
      const out = [];
      document.querySelectorAll('.fx').forEach((el) => {
        const k = el.querySelector('.katex-display > .katex');
        if (!k || !el.clientWidth) return;
        const keep = k.style.fontSize;
        k.style.fontSize = '';
        const st = getComputedStyle(el);
        const avail = el.clientWidth - parseFloat(st.paddingLeft) - parseFloat(st.paddingRight);
        const ratio = k.scrollWidth / avail;
        k.style.fontSize = keep;
        const src = el.querySelector('[data-tex]');
        out.push({ kind: '수식', ratio, card: card(el), tex: src ? src.dataset.tex.trim().replace(/\s+/g, ' ') : null });
      });
      document.querySelectorAll('main table').forEach((el) => {
        const wrap = el.parentElement;
        const over = Math.max(el.scrollWidth - el.clientWidth, el.getBoundingClientRect().right - vw, wrap.scrollWidth - wrap.clientWidth);
        if (el.clientWidth && over > 2) out.push({ kind: '표', ratio: 1 + over / vw, card: card(el), tex: (el.querySelector('tr') || el).textContent.trim().replace(/\s+/g, ' ').slice(0, 80) });
      });
      // 문단 안의 긴 인라인 수식 등: 화면 밖으로 나간 것
      document.querySelectorAll('main .katex').forEach((el) => {
        if (el.closest('.fx') || el.closest('table')) return;
        const r = el.getBoundingClientRect();
        if (r.width && r.right > vw + 2) out.push({ kind: '인라인 수식', ratio: 1 + (r.right - vw) / vw, card: card(el), tex: el.textContent.trim().slice(0, 80) });
      });
      return { out, pageOver: document.documentElement.scrollWidth - vw };
    });
    for (const f of res.out) {
      if (f.kind === '수식' && f.tex !== null) audited = true;
      found.push({ page: u, ...f });
    }
    if (res.pageOver > 0) found.push({ page: u, kind: '쪽 전체 가로 넘침', ratio: 1 + res.pageOver / WIDTH, card: '', tex: '' });
  }
  await browser.close();
  server.close();

  const math = found.filter((f) => f.kind === '수식');
  const bad = found.filter((f) => (f.kind === '수식' ? f.ratio > LIMIT : true)).sort((a, b) => b.ratio - a.ratio);
  const mild = math.filter((f) => f.ratio > 1.02 && f.ratio <= LIMIT).length;
  console.log(`블록 수식 ${math.length}개 점검 (폭 ${WIDTH}px). 칸보다 조금 넓어 글자가 약간 줄어드는 수식: ${mild}개 (허용).`);
  if (!audited) console.log('주의: 원본 TeX 표시가 없습니다. `npm run check:width`(AUDIT_TEX=1 빌드)로 실행하면 수식 원문이 함께 나옵니다.');
  if (!bad.length) {
    console.log(`✓ 칸의 ${Math.round(LIMIT * 100)}%를 넘는 수식·표 없음`);
    process.exit(0);
  }
  console.log(`\n고쳐야 할 곳 ${bad.length}개 (칸의 ${Math.round(LIMIT * 100)}% 초과, 넓은 순):`);
  for (const f of bad) {
    const where = f.card ? `${fileOfCard(f.card) || f.card}` : f.page;
    console.log(`- [${f.kind}] ${Math.round(f.ratio * 100)}%  ${where}${f.tex ? '\n    ' + f.tex.slice(0, 200) : ''}`);
  }
  process.exit(1);
})();
