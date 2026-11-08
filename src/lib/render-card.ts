// 카드 HTML 렌더러. 단원 페이지(빌드 시)와 검색/저장목록(브라우저)에서 같은 마크업을 쓴다.
import type { CardView, FormulaCardView, ProblemCardView } from './types';
import { icons } from './icons';

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

export function importanceDots(n: number, kind: 'formula' | 'problem' = 'formula'): string {
  const word = kind === 'problem' ? '난이도' : '중요도';
  const label = `${word} ${['', '낮음', '보통', '높음'][n]}`;
  return `<span class="imp imp-${n}" title="${label}" aria-label="${label}">${'<i></i>'.repeat(3)}</span>`;
}

type Opts = { showPath?: boolean };

export function renderCard(c: CardView, opts: Opts = {}): string {
  return c.kind === 'problem' ? renderProblem(c, opts) : renderFormula(c, opts);
}

const sec = (label: string, html?: string, cls = '') =>
  html ? `<section${cls ? ` class="${cls}"` : ''}><h4>${label}</h4><div class="prose">${html}</div></section>` : '';
const fold = (label: string, html?: string) =>
  html ? `<details class="sub"><summary>${label}</summary><div class="prose">${html}</div></details>` : '';
const chips = (label: string, list: { title: string; href: string }[]) =>
  list.length
    ? `<section><h4>${label}</h4><div class="chips">${list
        .map((r) => `<a class="chip" href="${esc(r.href)}">${esc(r.title)}</a>`)
        .join('')}</div></section>`
    : '';
const badgeOf = (c: CardView) =>
  c.verified
    ? ''
    : `<span class="badge-review" role="button" tabindex="0" data-act="review" title="탭하면 보완 내용 표시">검토 필요</span>`;
const pathOf = (c: CardView, opts: Opts) =>
  opts.showPath ? `<a class="card-path" href="${esc(c.href)}">${c.kind === 'problem' ? '문제 · ' : ''}${esc(c.subjectName)} · ${esc(c.chapterName)}</a>` : '';
const supplementOf = (c: CardView) =>
  c.supplementHtml
    ? `<section class="supp"><h4>${c.kind === 'problem' ? '보완·확인 필요 (Gemini 메모)' : '보완 내용 (원본 노트에 없던 부분)'}</h4><div class="prose">${c.supplementHtml}</div></section>`
    : '';
const tagsOf = (c: CardView) => (c.tags.length ? `<div class="tags">${c.tags.map((t) => `<span>#${esc(t)}</span>`).join('')}</div>` : '');
const acts = `<div class="card-acts">
<button class="ic act-fav" type="button" data-act="fav" aria-label="즐겨찾기" aria-pressed="false">${icons.star}</button>
<button class="ic act-wrong" type="button" data-act="wrong" aria-label="틀린 것 체크" aria-pressed="false">${icons.wrong}</button>
</div>`;

/** 문제 이미지 (탭하면 원본 크기로 열림) */
export function problemImages(c: ProblemCardView): string {
  return c.images.length
    ? `<div class="prob-imgs">${c.images
        .map((src, i) => `<a href="${esc(src)}" target="_blank" rel="noopener"><img src="${esc(src)}" alt="문제 이미지 ${i + 1}" loading="lazy" decoding="async"></a>`)
        .join('')}</div>`
    : '';
}

function renderProblem(c: ProblemCardView, opts: Opts): string {
  return `<article class="card prob" id="${esc(c.id)}" data-card-id="${esc(c.id)}">
<div class="card-head">
<button class="card-toggle" type="button" aria-expanded="false" data-act="toggle">
<span class="t-ko">${esc(c.title_ko)}</span>${badgeOf(c)}
<span class="t-en">${esc(c.source)} ${importanceDots(c.importance, 'problem')}</span>
</button>
${acts}
</div>
${pathOf(c, opts)}
<div class="problem prose">${c.problemHtml}${problemImages(c)}</div>
<button class="reveal" type="button" data-act="toggle">핵심 아이디어 · 정답 보기</button>
<div class="card-body" hidden>
${sec('핵심 아이디어', c.keyIdeaHtml)}${sec('내가 막힌 곳', c.mistakesHtml, 'mistakes')}${sec('정답', c.answerHtml, 'answer')}
${fold('풀이', c.solutionHtml)}
${chips('관련 공식·문제', c.related)}${supplementOf(c)}
<div class="card-foot">${tagsOf(c)}<span class="src">출처: ${esc(c.source)}</span></div>
</div>
</article>`;
}

function renderFormula(c: FormulaCardView, opts: Opts): string {
  return `<article class="card" id="${esc(c.id)}" data-card-id="${esc(c.id)}">
<div class="card-head">
<button class="card-toggle" type="button" aria-expanded="false" data-act="toggle">
<span class="t-ko">${esc(c.title_ko)}</span>${badgeOf(c)}
<span class="t-en">${esc(c.title_en)} ${importanceDots(c.importance)}</span>
</button>
${acts}
</div>
${pathOf(c, opts)}
${c.formulaHtml ? `<div class="formula" data-act="formula">${c.formulaHtml}</div>` : ''}
<div class="card-body" hidden>
${sec('조건', c.conditionsHtml)}${sec('설명', c.explanationHtml)}${sec('💬 스토리', c.storyHtml, 'story')}
${fold('유도', c.derivationHtml)}${fold('예제', c.exampleHtml)}${chips('관련', c.related)}${chips('이 공식을 쓰는 문제', c.usedBy)}${supplementOf(c)}
<div class="card-foot">${tagsOf(c)}<span class="src">출처: ${esc(c.source)}</span></div>
</div>
</article>`;
}
