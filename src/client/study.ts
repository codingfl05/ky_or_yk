// 학습 모드: 한 단원의 카드를 순서대로 한 장씩. 탭할 때마다 단계가 열린다.
//   공식 카드: 이름·질문 → 공식 → 조건·설명·스토리(유도·예제는 접힘)
//   문제 카드: 출처·요약 → 핵심 아이디어 → 막힌 곳·정답(풀이는 접힘)
import { BASE, loadFull, loadIndex, syncCards } from './ui';
import { getState, updateSettings } from './storage';
import { problemImages } from '../lib/render-card';
import { icons } from '../lib/icons';
import type { CardView } from '../lib/types';

const $ = <T extends HTMLElement>(s: string) => document.querySelector<T>(s)!;
const cardEl = $('#s-card');
const qp = new URLSearchParams(location.search);
const kind = qp.get('kind') === 'problem' ? 'problem' : 'formula';
const subject = qp.get('subject') ?? '';
const chapter = qp.get('chapter') ?? '';
const key = `${kind}/${subject}/${chapter}`;
const LAST_STAGE = 2;

let cards: CardView[] = [];
let idx = 0;
let stage = 0;

const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);
const sec = (label: string, h?: string, cls = '') => (h ? `<section class="${cls}"><h4>${label}</h4><div class="prose">${h}</div></section>` : '');
const fold = (label: string, h?: string) => (h ? `<details class="sub"><summary>${label}</summary><div class="prose">${h}</div></details>` : '');

function body(c: CardView): string {
  if (c.kind === 'problem') {
    const head = `<div class="st-title">${esc(c.title_ko)}</div><div class="st-sub">${esc(c.source)}</div><div class="prose st-problem">${c.problemHtml}${problemImages(c)}</div>`;
    const s1 = stage >= 1 ? sec('핵심 아이디어', c.keyIdeaHtml) : '';
    const s2 = stage >= 2 ? `${sec('내가 막힌 곳', c.mistakesHtml, 'mistakes')}${sec('정답', c.answerHtml, 'answer')}${fold('풀이', c.solutionHtml)}` : '';
    return head + s1 + s2;
  }
  const head = `<div class="st-title">${esc(c.title_ko)}</div><div class="st-sub">${esc(c.title_en)}</div>${
    c.question ? `<div class="st-q">${esc(c.question)}</div>` : ''
  }`;
  const s1 = stage >= 1 && c.formulaHtml ? `<div class="st-formula">${c.formulaHtml}</div>` : '';
  const s2 =
    stage >= 2
      ? `${sec('조건', c.conditionsHtml)}${sec('설명', c.explanationHtml)}${sec('💬 스토리', c.storyHtml, 'story')}${fold('유도', c.derivationHtml)}${fold('예제', c.exampleHtml)}`
      : '';
  return head + s1 + s2;
}

const HINTS = {
  formula: ['탭하면 공식', '탭하면 조건·설명', '다음 카드로 넘기세요'],
  problem: ['탭하면 핵심 아이디어', '탭하면 막힌 곳·정답', '다음 문제로 넘기세요'],
};

function draw() {
  const c = cards[idx];
  $('#s-pos').textContent = `${idx + 1} / ${cards.length}`;
  $('#s-bar').style.width = `${((idx + 1) / cards.length) * 100}%`;
  cardEl.dataset.cardId = c.id;
  cardEl.innerHTML = `<div class="st-acts">
<button class="ic act-fav" type="button" data-act="fav" aria-label="즐겨찾기" aria-pressed="false">${icons.star}</button>
<button class="ic act-wrong" type="button" data-act="wrong" aria-label="틀린 것 체크" aria-pressed="false">${icons.wrong}</button>
</div>${body(c)}`;
  syncCards(cardEl.parentElement!);
  $('#s-hint').textContent = HINTS[kind][stage];
  $<HTMLButtonElement>('#s-prev').disabled = idx === 0 && stage === 0;
  $('#s-next').textContent = stage < LAST_STAGE ? '펼치기' : idx === cards.length - 1 ? '처음으로' : '다음 카드';
  const study = { ...(getState().settings.study ?? {}), [key]: idx };
  updateSettings({ study });
}

function forward() {
  if (stage < LAST_STAGE) stage += 1;
  else {
    idx = (idx + 1) % cards.length;
    stage = 0;
    window.scrollTo(0, 0);
  }
  draw();
}
function back() {
  if (stage > 0) stage = 0;
  else if (idx > 0) {
    idx -= 1;
    stage = 0;
  }
  draw();
}

cardEl.addEventListener('click', (e) => {
  const t = e.target as HTMLElement;
  if (t.closest('[data-act], a, details')) return; // 별표·틀림·링크·접힘은 넘기지 않음
  if (stage < LAST_STAGE) forward();
});
$('#s-next').addEventListener('click', forward);
$('#s-prev').addEventListener('click', back);
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight' || e.key === ' ') {
    e.preventDefault();
    forward();
  } else if (e.key === 'ArrowLeft') back();
});

function fail(msg: string) {
  $('#study').querySelectorAll<HTMLElement>(':scope > :not(#s-empty)').forEach((el) => (el.hidden = true));
  const empty = $('#s-empty');
  empty.hidden = false;
  empty.innerHTML = msg;
}

loadIndex()
  .then(async (d) => {
    const s = d.subjects.find((x) => x.id === subject);
    const ch = s?.chapters.find((x) => x.id === chapter);
    if (!s || !ch) return fail(`단원을 찾을 수 없습니다. <a href="${BASE}">홈으로</a>`);
    const ids = d.cards.filter((c) => c.kind === kind && c.subject === subject && c.chapter === chapter).map((c) => c.id);
    if (!ids.length) return fail('이 단원에는 카드가 없습니다.');
    cards = await loadFull(ids);
    $('#s-where').textContent = `${kind === 'problem' ? '문제 · ' : ''}${s.name} · ${ch.name}`;
    const back = kind === 'problem' ? `${BASE}problems/${subject}/${chapter}/` : `${BASE}${subject}/${chapter}/`;
    document.querySelector('.topbar-side a[aria-label="뒤로"]')?.setAttribute('href', back);
    const saved = getState().settings.study?.[key] ?? 0;
    idx = saved < cards.length ? saved : 0;
    draw();
  })
  .catch(() => fail('카드 데이터를 불러오지 못했습니다.'));
