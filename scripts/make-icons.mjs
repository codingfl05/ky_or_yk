// 앱 아이콘 생성 (한 번만 실행해서 public/icons/ 에 커밋). 아이콘을 바꾸고 싶을 때만 다시 실행.
//   node scripts/make-icons.mjs
import { createRequire } from 'node:module';
// playwright는 의존성에 넣지 않았다 (설치된 전역 playwright 사용)
const { chromium } = createRequire(import.meta.url)('playwright');
import { readFileSync } from 'node:fs';
import katex from 'katex';

const css = readFileSync('node_modules/katex/dist/katex.min.css', 'utf8').replace(
  /url\(fonts\//g,
  `url(file://${process.cwd()}/node_modules/katex/dist/fonts/`,
);
const glyph = katex.renderToString('\\oint', { displayMode: false });

const page = (size, pad) => `<!doctype html><html><head><style>${css}
html,body{margin:0;width:${size}px;height:${size}px;background:#2b62d9;}
.wrap{width:100%;height:100%;display:flex;align-items:center;justify-content:center;}
.katex{color:#fff;font-size:${size * (1 - pad) * 0.7}px;transform:translateX(5%);}
</style></head><body><div class="wrap">${glyph}</div></body></html>`;

const targets = [
  ['public/icons/icon-192.png', 192, 0.12],
  ['public/icons/icon-512.png', 512, 0.12],
  ['public/icons/maskable-512.png', 512, 0.32],
  ['public/icons/apple-touch-icon.png', 180, 0.12],
];

const browser = await chromium.launch();
for (const [out, size, pad] of targets) {
  const p = await browser.newPage({ viewport: { width: size, height: size }, deviceScaleFactor: 1 });
  await p.setContent(page(size, pad));
  await p.evaluate(() => document.fonts.ready);
  await p.screenshot({ path: out, omitBackground: false });
  await p.close();
  console.log('✓', out);
}
await browser.close();
