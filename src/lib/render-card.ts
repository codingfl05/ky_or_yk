// 카드 HTML 렌더러. 단원 페이지(빌드 시)와 검색/저장목록(브라우저)에서 같은 마크업을 쓴다.
import type { CardView } from './types';
import { icons } from './icons';

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

export function importanceDots(n: number): string {
  const label = ['', '중요도 낮음', '중요도 보통', '중요도 높음'][n];
  return `<span class="imp imp-${n}" title="${label}" aria-label="${label}">${'<i></i>'.repeat(3)}</span>`;
}

export function renderCard(c: CardView, opts: { showPath?: boolean } = {}): string {
  const badge = c.verified ? '' : '<span class="badge-review">검토 필요</span>';
  const path = opts.showPath
    ? `<a class="card-path" href="${esc(c.href)}">${esc(c.subjectName)} · ${esc(c.chapterName)}</a>`
    : '';
  const derivation = c.derivationHtml
    ? `<details class="sub"><summary>유도</summary><div class="prose">${c.derivationHtml}</div></details>`
    : '';
  const example = c.exampleHtml
    ? `<section><h4>예제</h4><div class="prose">${c.exampleHtml}</div></section>`
    : '';
  const related = c.related.length
    ? `<section><h4>관련</h4><div class="chips">${c.related
        .map((r) => `<a class="chip" href="${esc(r.href)}">${esc(r.title)}</a>`)
        .join('')}</div></section>`
    : '';
  const tags = c.tags.length ? `<div class="tags">${c.tags.map((t) => `<span>#${esc(t)}</span>`).join('')}</div>` : '';

  return `<article class="card" id="${esc(c.id)}" data-card-id="${esc(c.id)}">
<div class="card-head">
<button class="card-toggle" type="button" aria-expanded="false" data-act="toggle">
<span class="t-ko">${esc(c.title_ko)}</span>${badge}
<span class="t-en">${esc(c.title_en)} ${importanceDots(c.importance)}</span>
</button>
<div class="card-acts">
<button class="ic act-fav" type="button" data-act="fav" aria-label="즐겨찾기" aria-pressed="false">${icons.star}</button>
<button class="ic act-wrong" type="button" data-act="wrong" aria-label="틀린 것 체크" aria-pressed="false">${icons.wrong}</button>
</div>
</div>
${path}
<div class="formula" data-act="formula">${c.formulaHtml}</div>
<div class="card-body" hidden>
<section><h4>조건</h4><div class="prose">${c.conditionsHtml}</div></section>
<section><h4>설명</h4><div class="prose">${c.explanationHtml}</div></section>
${derivation}${example}${related}
<div class="card-foot">${tags}<span class="src">출처: ${esc(c.source)}</span></div>
</div>
</article>`;
}
