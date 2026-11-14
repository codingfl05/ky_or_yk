// 퀴즈 (연습 탭). 데이터는 /data/quiz.json (src/lib/quiz.ts).
// 상황 → 공식·법칙 문제는 보기를 그때그때 같은 구분의 다른 항목에서 뽑고, 직접 쓴 문제는 보기 순서만 섞는다.
// ?audit=1 이면 모든 문제를 해설까지 펼쳐 한 화면에 그린다 (npm run check:width 점검용).
import { BASE, loadFull, loadIndex, syncCards } from './ui';
import { getState, updateSettings } from './storage';
import { importanceDots, renderCard } from '../lib/render-card';
import type { QuizPayload, QuizQuestion, QuizSituation, QuizSubject } from '../lib/quiz';
import type { CardMeta, FormulaCardView } from '../lib/types';

type TypeId = 'situation' | 'concept' | 'ratio';
interface Opts {
  mode: 'quiz' | 'remind';
  group: string;
  chapters: string[];
  types: TypeId[];
  count: number;
}
interface Item {
  key: string;
  type: TypeId;
  chapter: string;
  tagHtml: string;
  qHtml: string;
  choices: string[];
  answer: number;
  /** 고른 뒤 보여 줄 해설 */
  explainHtml: string;
  cards: { id: string; title: string }[];
  /** 결과 목록용 짧은 글 */
  short: string;
}

const $ = <T extends HTMLElement>(s: string) => document.querySelector<T>(s)!;
const root = document.documentElement;
const setup = $('#q-setup');
const session = $('#q-session');
const done = $('#q-done');
const startBtn = $<HTMLButtonElement>('#q-start');
const box = $('#q-box');
const nextBar = $('#q-nextbar');
const nextBtn = $<HTMLButtonElement>('#q-next');
const rSession = $('#r-session');
const rBox = $('#r-box');

const TYPE_NAMES: Record<TypeId, string> = { situation: '상황 → 공식·법칙', concept: '틀린 설명·참거짓', ratio: '비례·기호' };
const shuffle = <T,>(a: T[]): T[] => {
  const b = [...a];
  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [b[i], b[j]] = [b[j], b[i]];
  }
  return b;
};
const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);
const textOf = (html: string) => {
  const d = document.createElement('div');
  d.innerHTML = html;
  d.querySelectorAll('.katex-mathml').forEach((m) => m.remove());
  return (d.textContent || '').replace(/\s+/g, ' ').trim();
};

let data: QuizSubject;
const saved = (getState().settings.quiz ?? {}) as Partial<Opts>;
const opts: Opts = {
  mode: saved.mode === 'remind' ? 'remind' : 'quiz',
  group: typeof saved.group === 'string' ? saved.group : 'mech',
  chapters: Array.isArray(saved.chapters) ? saved.chapters.filter((x) => typeof x === 'string') : [],
  types: Array.isArray(saved.types) && saved.types.length ? (saved.types.filter((t) => t in TYPE_NAMES) as TypeId[]) : ['situation', 'concept', 'ratio'],
  count: typeof saved.count === 'number' ? saved.count : 10,
};
const persist = () => updateSettings({ quiz: { ...opts } });

// ---------------------------------------------------------------- 문제 만들기

function chapterName(id: string) {
  for (const g of data.groups) for (const c of g.chapters) if (c.id === id) return c.name;
  return id;
}

function situationItem(s: QuizSituation, prompt: string, pi: number): Item {
  // 오답 보기: 같은 구분에서, 답이 겹칠 수 있는 카드(avoid, 양방향)는 빼고, 같은 단원을 먼저 2개까지
  const pool = data.situations.filter((o) => o.group === s.group && o.card !== s.card && !s.avoid.includes(o.card) && !o.avoid.includes(s.card) && o.label !== s.label);
  const same = shuffle(pool.filter((o) => o.chapter === s.chapter)).slice(0, 2);
  const rest = shuffle(pool.filter((o) => !same.includes(o)));
  const wrong = [...same, ...rest].slice(0, 3);
  const choices = shuffle([s, ...wrong]);
  return {
    key: `s:${s.card}:${pi}`,
    type: 'situation',
    chapter: s.chapter,
    tagHtml: `${esc(chapterName(s.chapter))} · ${TYPE_NAMES.situation}`,
    qHtml: `<p class="q-lead">이 상황에 쓰는 공식·법칙은?</p><p class="q-situation">${prompt}</p>`,
    choices: choices.map((c) => esc(c.label)),
    answer: choices.indexOf(s),
    explainHtml: `<p><b>${esc(s.label)}</b></p>${s.formulaHtml}`,
    cards: [{ id: s.card, title: s.label }],
    short: textOf(prompt),
  };
}

function questionItem(q: QuizQuestion): Item {
  const order = q.tf ? q.choicesHtml.map((_, i) => i) : shuffle(q.choicesHtml.map((_, i) => i));
  return {
    key: `q:${q.id}`,
    type: q.type,
    chapter: q.chapter,
    tagHtml: `${esc(chapterName(q.chapter))} · ${q.tf ? '참거짓' : TYPE_NAMES[q.type]}`,
    qHtml: q.qHtml,
    choices: order.map((i) => q.choicesHtml[i]),
    answer: order.indexOf(q.answer),
    explainHtml: q.explainHtml,
    cards: q.cards.map((c) => ({ id: c.id, title: c.title })),
    short: textOf(q.qHtml).slice(0, 80),
  };
}

/** 지금 설정으로 만들 수 있는 문제 (보기는 아직 안 섞음: 개수 세기용) */
function poolKeys(o: Opts) {
  const inCh = (ch: string, g: string) => g === o.group && (!o.chapters.length || o.chapters.includes(ch));
  const sit = o.types.includes('situation') ? data.situations.filter((s) => inCh(s.chapter, s.group)).flatMap((s) => s.prompts.map((p, i) => ({ s, p, i }))) : [];
  const qs = data.questions.filter((q) => inCh(q.chapter, q.group) && o.types.includes(q.type));
  return { sit, qs };
}

function buildItems(o: Opts, only?: Set<string>): Item[] {
  const { sit, qs } = poolKeys(o);
  let items = [...sit.map(({ s, p, i }) => situationItem(s, p, i)), ...qs.map(questionItem)];
  if (only) items = items.filter((it) => only.has(it.key));
  items = shuffle(items);
  return o.count && !only ? items.slice(0, o.count) : items;
}

// ---------------------------------------------------------------- 설정 화면

function renderSetup() {
  const g = data.groups.find((x) => x.id === opts.group) ?? data.groups[0];
  opts.group = g.id;
  opts.chapters = opts.chapters.filter((c) => g.chapters.some((x) => x.id === c));
  $('#q-group').innerHTML = data.groups.map((x) => `<button type="button" data-v="${x.id}" aria-pressed="${x.id === g.id}">${esc(x.name)}</button>`).join('');
  const { sit, qs } = poolKeys({ ...opts, chapters: [], types: ['situation', 'concept', 'ratio'] });
  const has = (ch: string) =>
    opts.mode === 'remind' ? formulaCards.some((c) => c.chapter === ch) : sit.some((x) => x.s.chapter === ch) || qs.some((q) => q.chapter === ch);
  $('#q-chapters').innerHTML = g.chapters
    .filter((c) => has(c.id))
    .map((c) => `<button type="button" class="chip" data-v="${c.id}" aria-pressed="${opts.chapters.includes(c.id)}">${esc(c.name)}</button>`)
    .join('');
  $('#q-types').innerHTML = (Object.keys(TYPE_NAMES) as TypeId[])
    .map((t) => `<button type="button" class="chip" data-v="${t}" aria-pressed="${opts.types.includes(t)}">${TYPE_NAMES[t]}</button>`)
    .join('');
  document.querySelectorAll<HTMLButtonElement>('#q-count button').forEach((b) => b.setAttribute('aria-pressed', String(Number(b.dataset.v) === opts.count)));
  document.querySelectorAll<HTMLButtonElement>('#q-mode button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.v === opts.mode)));
  document.querySelectorAll<HTMLElement>('#q-setup .quiz-only').forEach((el) => (el.hidden = opts.mode === 'remind'));
  if (opts.mode === 'remind') {
    const n = remindPool().length;
    $('#q-avail').textContent = n ? `이 범위의 공식 카드 ${n}개 (중요도가 높을수록 자주 나옴)` : '이 범위에 공식 카드가 없습니다';
    startBtn.disabled = !n;
    startBtn.textContent = n ? '리마인드 시작' : '공식 없음';
    return;
  }
  const p = poolKeys(opts);
  const n = p.sit.length + p.qs.length;
  $('#q-avail').textContent = n ? `이 설정으로 풀 수 있는 문제 ${n}개` : '고른 조건에 맞는 문제가 없습니다';
  startBtn.disabled = !n;
  startBtn.textContent = n ? `시작 (${opts.count ? Math.min(opts.count, n) : n}문제)` : '문제 없음';
}

$('#q-mode').addEventListener('click', (e) => {
  const b = (e.target as HTMLElement).closest<HTMLButtonElement>('button');
  if (!b) return;
  opts.mode = b.dataset.v === 'remind' ? 'remind' : 'quiz';
  persist();
  renderSetup();
});
$('#q-group').addEventListener('click', (e) => {
  const b = (e.target as HTMLElement).closest<HTMLButtonElement>('button');
  if (!b) return;
  opts.group = b.dataset.v!;
  opts.chapters = [];
  persist();
  renderSetup();
});
$('#q-chapters').addEventListener('click', (e) => {
  const b = (e.target as HTMLElement).closest<HTMLButtonElement>('button');
  if (!b) return;
  const v = b.dataset.v!;
  opts.chapters = opts.chapters.includes(v) ? opts.chapters.filter((x) => x !== v) : [...opts.chapters, v];
  persist();
  renderSetup();
});
$('#q-types').addEventListener('click', (e) => {
  const b = (e.target as HTMLElement).closest<HTMLButtonElement>('button');
  if (!b) return;
  const v = b.dataset.v as TypeId;
  const next = opts.types.includes(v) ? opts.types.filter((x) => x !== v) : [...opts.types, v];
  if (!next.length) return; // 하나는 남긴다
  opts.types = next;
  persist();
  renderSetup();
});
$('#q-count').addEventListener('click', (e) => {
  const b = (e.target as HTMLElement).closest<HTMLButtonElement>('button');
  if (!b) return;
  opts.count = Number(b.dataset.v);
  persist();
  renderSetup();
});

// ---------------------------------------------------------------- 진행

let items: Item[] = [];
let pos = 0;
let ok = 0;
let wrongKeys: string[] = [];
let answered = false;

function show(view: 'setup' | 'session' | 'done' | 'remind') {
  setup.hidden = view !== 'setup';
  session.hidden = view !== 'session';
  done.hidden = view !== 'done';
  rSession.hidden = view !== 'remind';
  scrollTo(0, 0);
}

function start(only?: Set<string>) {
  items = buildItems(opts, only);
  if (!items.length) return;
  pos = 0;
  ok = 0;
  wrongKeys = [];
  show('session');
  renderItem();
}

function cardButtons(it: Item) {
  return it.cards.length
    ? `<div class="q-cards"><span>관련 카드</span>${it.cards.map((c) => `<button type="button" class="chip q-card" data-card="${c.id}">${esc(c.title)}</button>`).join('')}</div><div class="q-card-view"></div>`
    : '';
}

function itemHtml(it: Item, reveal = false, picked = -1) {
  const choices = it.choices
    .map((c, i) => {
      const cls = reveal ? (i === it.answer ? ' is-answer' : i === picked ? ' is-wrong' : '') : '';
      return `<button type="button" class="quiz-choice${cls}" data-i="${i}"${reveal ? ' disabled' : ''}><span class="q-num">${i + 1}</span><span class="q-text">${c}</span></button>`;
    })
    .join('');
  const verdict = picked < 0 ? '' : picked === it.answer ? '<p class="q-verdict ok">맞았습니다</p>' : '<p class="q-verdict ng">틀렸습니다</p>';
  return `<div class="q-tag">${it.tagHtml}</div><div class="q-body prose">${it.qHtml}</div><div class="quiz-choices">${choices}</div>${
    reveal ? `<div class="q-explain">${verdict}<div class="prose">${it.explainHtml}</div>${cardButtons(it)}</div>` : ''
  }`;
}

function renderItem() {
  const it = items[pos];
  answered = false;
  $('#q-pos').textContent = `${pos + 1} / ${items.length}`;
  $('#q-score').textContent = pos ? `맞음 ${ok}` : '';
  $('#q-bar').style.width = `${(pos / items.length) * 100}%`;
  box.innerHTML = itemHtml(it);
  nextBar.hidden = true;
}

box.addEventListener('click', async (e) => {
  const t = e.target as HTMLElement;
  const choice = t.closest<HTMLButtonElement>('.quiz-choice');
  if (choice && !answered) {
    answered = true;
    const it = items[pos];
    const i = Number(choice.dataset.i);
    if (i === it.answer) ok++;
    else wrongKeys.push(it.key);
    box.innerHTML = itemHtml(it, true, i);
    $('#q-score').textContent = `맞음 ${ok}`;
    nextBtn.textContent = pos + 1 < items.length ? '다음' : '결과 보기';
    nextBar.hidden = false;
    box.querySelector('.q-explain')?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    return;
  }
  const cb = t.closest<HTMLButtonElement>('.q-card');
  if (cb) toggleCard(cb);
});

async function toggleCard(btn: HTMLButtonElement) {
  const view = btn.closest('.q-explain, .q-audit, .remind-box')!.querySelector<HTMLElement>('.q-card-view')!;
  const id = btn.dataset.card!;
  if (view.dataset.card === id) {
    if (btn.textContent === '카드 접기') btn.textContent = '카드 펼치기';
    view.innerHTML = '';
    delete view.dataset.card;
    btn.setAttribute('aria-pressed', 'false');
    return;
  }
  btn.parentElement!.querySelectorAll('.q-card').forEach((b) => b.setAttribute('aria-pressed', 'false'));
  btn.setAttribute('aria-pressed', 'true');
  if (btn.textContent === '카드 펼치기') btn.textContent = '카드 접기';
  view.dataset.card = id;
  view.innerHTML = '<p class="flash-hint">불러오는 중…</p>';
  const [card] = await loadFull([id]);
  if (view.dataset.card !== id) return;
  view.innerHTML = card ? renderCard(card, { showPath: true }) : '<p class="flash-hint">카드를 찾지 못했습니다</p>';
  const el = view.querySelector<HTMLElement>('.card');
  if (el) {
    el.classList.add('open');
    syncCards(view);
  }
}

nextBtn.addEventListener('click', () => {
  if (pos + 1 < items.length) {
    pos++;
    renderItem();
    scrollTo(0, 0);
  } else finish();
});
$('#q-quit').addEventListener('click', () => (pos > 0 || answered ? finish() : show('setup')));

function finish() {
  const total = pos + (answered ? 1 : 0);
  $('#q-r-score').textContent = total ? `${Math.round((ok / total) * 100)}점` : '-';
  $('#q-r-ok').textContent = String(ok);
  $('#q-r-ng').textContent = String(total - ok);
  const wrong = items.filter((it) => wrongKeys.includes(it.key));
  $('#q-r-wrong').innerHTML = wrong.length
    ? `<h3 class="q-r-h">틀린 문제</h3><ul class="q-r-list">${wrong
        .map((it) => `<li><span class="q-tag">${it.tagHtml}</span><span>${esc(it.short)}</span></li>`)
        .join('')}</ul>`
    : '';
  ($('#q-retry-wrong') as HTMLButtonElement).hidden = !wrong.length;
  $('#q-bar').style.width = '100%';
  show('done');
}
$('#q-retry-wrong').addEventListener('click', () => start(new Set(wrongKeys)));
$('#q-retry').addEventListener('click', () => start());
$('#q-back').addEventListener('click', () => {
  renderSetup();
  show('setup');
});
startBtn.addEventListener('click', () => (opts.mode === 'remind' ? startRemind() : start()));

// ---------------------------------------------------------------- 공식 리마인드
// 고른 범위의 공식 카드를 이름 + 공식으로 한 장씩 계속 보여 준다 (채점 없음).
// 한 바퀴(덱)마다 중요도 3은 항상, 2는 2/3, 1은 1/3 확률로 넣고 섞는다 → 길게 보면 3 : 2 : 1 비율로 나오고,
// 한 바퀴 안에서는 같은 카드가 다시 나오지 않는다.

let formulaCards: CardMeta[] = [];
const fullCache = new Map<string, FormulaCardView>();
let rHistory: string[] = [];
let rPos = -1;
let rDeck: string[] = [];

function remindPool(): CardMeta[] {
  const g = data.groups.find((x) => x.id === opts.group);
  const chs = g ? g.chapters.map((c) => c.id) : [];
  return formulaCards.filter((c) => chs.includes(c.chapter) && (!opts.chapters.length || opts.chapters.includes(c.chapter)));
}

function newDeck(pool: CardMeta[], avoid?: string) {
  let picked = pool.filter((c) => Math.random() < c.importance / 3);
  if (!picked.length) picked = pool;
  const ids = shuffle(picked).map((c) => c.id);
  // 덱이 바뀌는 경계에서 같은 카드가 연달아 나오지 않게
  if (ids.length > 1 && ids[0] === avoid) ids.push(ids.shift()!);
  return ids;
}

async function remindShow() {
  const id = rHistory[rPos];
  rBox.innerHTML = '<p class="flash-hint">불러오는 중…</p>';
  let c = fullCache.get(id);
  if (!c) {
    const pool = remindPool();
    const ids = pool.map((x) => x.id);
    const got = (await loadFull(ids)) as FormulaCardView[];
    got.forEach((x) => fullCache.set(x.id, x));
    c = fullCache.get(id);
  }
  if (rHistory[rPos] !== id || !c) return;
  rBox.innerHTML = `<div class="q-tag">${esc(c.chapterName)} ${importanceDots(c.importance)}</div>
    <h2 class="r-title">${esc(c.title_ko)}</h2>
    <div class="r-en">${esc(c.title_en)}</div>
    <div class="r-formula prose">${c.formulaHtml}</div>
    <div class="q-cards"><button type="button" class="chip q-card" data-card="${c.id}">카드 펼치기</button></div><div class="q-card-view"></div>`;
  $('#r-pos').textContent = `${rPos + 1}번째`;
  ($('#r-prev') as HTMLButtonElement).disabled = rPos === 0;
}

function remindNext() {
  if (rPos < rHistory.length - 1) {
    rPos++;
  } else {
    if (!rDeck.length) rDeck = newDeck(remindPool(), rHistory[rHistory.length - 1]);
    rHistory.push(rDeck.shift()!);
    rPos = rHistory.length - 1;
  }
  remindShow();
  scrollTo(0, 0);
}
function remindPrev() {
  if (rPos <= 0) return;
  rPos--;
  remindShow();
  scrollTo(0, 0);
}

function startRemind() {
  if (!remindPool().length) return;
  rHistory = [];
  rDeck = [];
  rPos = -1;
  show('remind');
  remindNext();
}

rBox.addEventListener('click', (e) => {
  const t = e.target as HTMLElement;
  const cb = t.closest<HTMLButtonElement>('.q-card');
  if (cb) {
    toggleCard(cb);
    return;
  }
  if (t.closest('.q-card-view, a')) return; // 펼친 카드 안의 탭은 넘기지 않는다
  remindNext();
});
rBox.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowRight') {
    e.preventDefault();
    remindNext();
  } else if (e.key === 'ArrowLeft') remindPrev();
});
{
  let x0 = 0;
  let y0 = 0;
  rBox.addEventListener('touchstart', (e) => {
    x0 = e.touches[0].clientX;
    y0 = e.touches[0].clientY;
  }, { passive: true });
  rBox.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].clientX - x0;
    const dy = e.changedTouches[0].clientY - y0;
    if (Math.abs(dx) < 60 || Math.abs(dx) < Math.abs(dy) * 1.5) return;
    if ((e.target as HTMLElement).closest('.fx, .q-card-view')) return; // 넓은 수식 가로 스크롤은 넘기기로 보지 않는다
    e.preventDefault();
    if (dx < 0) remindNext();
    else remindPrev();
  });
}
$('#r-next').addEventListener('click', remindNext);
$('#r-prev').addEventListener('click', remindPrev);
$('#r-quit').addEventListener('click', () => {
  renderSetup();
  show('setup');
});

// ---------------------------------------------------------------- 점검용: 전부 펼쳐 그리기

function renderAudit() {
  const all: Item[] = [
    ...data.situations.flatMap((s) => s.prompts.map((p, i) => situationItem(s, p, i))),
    ...data.questions.map(questionItem),
  ];
  setup.hidden = true;
  done.hidden = true;
  session.hidden = false;
  $('#q-pos').textContent = `전체 ${all.length}문제 (점검 모드)`;
  box.innerHTML = all.map((it) => `<div class="q-audit">${itemHtml(it, true, it.answer)}</div>`).join('<hr />');
}

// ---------------------------------------------------------------- 시작

Promise.all([fetch(`${BASE}data/quiz.json?v=${root.dataset.build}`).then((r) => r.json() as Promise<QuizPayload>), loadIndex()])
  .then(([p, index]) => {
    formulaCards = index.cards.filter((c) => c.subject === 'physics' && c.kind === 'formula');
    data = p.subjects.find((s) => s.id === 'physics')!;
    if (!data) throw new Error('physics quiz 없음');
    if (new URLSearchParams(location.search).has('audit')) renderAudit();
    else renderSetup();
  })
  .catch(() => {
    startBtn.textContent = '퀴즈를 불러오지 못했습니다';
  });
