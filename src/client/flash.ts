import { loadFull, loadIndex } from './ui';
import { getState, isFav, isWrong, markKnown, markUnknown, updateSettings } from './storage';
import type { CardMeta, CardView, IndexPayload } from '../lib/types';

type Pool = 'all' | 'fav' | 'wrong';
type Dir = 'fwd' | 'rev';
interface Opts {
  subject: string;
  chapter: string;
  pool: Pool;
  imp: number;
  dir: Dir;
  shuffle: boolean;
}

const $ = <T extends HTMLElement>(s: string) => document.querySelector<T>(s)!;
const setup = $('#setup');
const session = $('#session');
const done = $('#done');
const selSubject = $<HTMLSelectElement>('#f-subject');
const selChapter = $<HTMLSelectElement>('#f-chapter');
const shuffleBox = $<HTMLInputElement>('#f-shuffle');
const startBtn = $<HTMLButtonElement>('#start');
const cardEl = $('#card');

let data: IndexPayload;
const saved = (getState().settings.flash ?? {}) as Partial<Opts>;
const opts: Opts = {
  subject: saved.subject ?? '',
  chapter: saved.chapter ?? '',
  pool: saved.pool ?? 'all',
  imp: saved.imp ?? 1,
  dir: saved.dir ?? 'fwd',
  shuffle: saved.shuffle ?? true,
};
// URL(?subject=&chapter=)로 들어오면 그 범위로
const qp = new URLSearchParams(location.search);
if (qp.has('subject')) {
  opts.subject = qp.get('subject') ?? '';
  opts.chapter = qp.get('chapter') ?? '';
  opts.pool = 'all';
}

// ---------------------------------------------------------------- setup UI

function fillChapters() {
  const s = data.subjects.find((x) => x.id === opts.subject);
  selChapter.innerHTML =
    '<option value="">전체 단원</option>' +
    (s?.chapters.length! > 1 ? s!.chapters.map((c) => `<option value="${c.id}">${c.name}</option>`).join('') : '');
  selChapter.disabled = !s || s.chapters.length <= 1;
  if (!s?.chapters.some((c) => c.id === opts.chapter) || s.chapters.length <= 1) opts.chapter = '';
  selChapter.value = opts.chapter;
}

function deckFor(o: Opts): CardMeta[] {
  return data.cards.filter(
    (c) =>
      (!o.subject || c.subject === o.subject) &&
      (!o.chapter || c.chapter === o.chapter) &&
      c.importance >= o.imp &&
      (o.pool === 'all' || (o.pool === 'fav' ? isFav(c.id) : isWrong(c.id))),
  );
}

function renderSetup() {
  selSubject.value = opts.subject;
  fillChapters();
  document.querySelectorAll<HTMLElement>('.seg[data-key]').forEach((seg) => {
    const key = seg.dataset.key as 'pool' | 'imp' | 'dir';
    seg.querySelectorAll<HTMLButtonElement>('button').forEach((b) => {
      b.setAttribute('aria-pressed', String(String(opts[key]) === b.dataset.v));
    });
  });
  shuffleBox.checked = opts.shuffle;
  const n = deckFor(opts).length;
  startBtn.disabled = n === 0;
  startBtn.textContent = n === 0 ? '해당하는 카드가 없습니다' : `시작 (${n}장)`;
  updateSettings({ flash: { ...opts } });
}

selSubject.addEventListener('change', () => {
  opts.subject = selSubject.value;
  opts.chapter = '';
  renderSetup();
});
selChapter.addEventListener('change', () => {
  opts.chapter = selChapter.value;
  renderSetup();
});
shuffleBox.addEventListener('change', () => {
  opts.shuffle = shuffleBox.checked;
  renderSetup();
});
document.querySelectorAll<HTMLElement>('.seg[data-key]').forEach((seg) => {
  seg.addEventListener('click', (e) => {
    const b = (e.target as HTMLElement).closest<HTMLButtonElement>('button');
    if (!b) return;
    const key = seg.dataset.key!;
    if (key === 'imp') opts.imp = Number(b.dataset.v);
    else if (key === 'pool') opts.pool = b.dataset.v as Pool;
    else if (key === 'dir') opts.dir = b.dataset.v as Dir;
    renderSetup();
  });
});

// ---------------------------------------------------------------- session

let deck: CardView[] = [];
let idx = 0;
let flipped = false;
let known: string[] = [];
let unknown: string[] = [];

function shuffle<T>(a: T[]): T[] {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function show(which: 'setup' | 'session' | 'done') {
  setup.hidden = which !== 'setup';
  session.hidden = which !== 'session';
  done.hidden = which !== 'done';
  window.scrollTo(0, 0);
}

async function start(metas: CardMeta[]) {
  startBtn.disabled = true;
  let cards: CardView[];
  try {
    cards = await loadFull(metas.map((c) => c.id));
  } catch {
    alert('카드 데이터를 불러오지 못했습니다. 네트워크를 확인하세요.');
    return;
  } finally {
    startBtn.disabled = false;
  }
  deck = opts.shuffle ? shuffle([...cards]) : [...cards];
  idx = 0;
  known = [];
  unknown = [];
  show('session');
  draw();
}

const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);

function draw() {
  const c = deck[idx];
  $('#pos').textContent = `${idx + 1} / ${deck.length}`;
  $('#bar').style.width = `${(idx / deck.length) * 100}%`;
  const title = `<div class="fl-title">${esc(c.title_ko)}</div><div class="fl-en">${esc(c.title_en)}</div>`;
  const cond = `<div class="fl-cond"><h4>조건</h4><div class="prose">${c.conditionsHtml}</div></div>`;
  const formula = `<div class="formula">${c.formulaHtml}</div>`;
  const exp = `<div class="fl-exp"><h4>설명</h4><div class="prose">${c.explanationHtml}</div></div>`;
  const badge = c.verified ? '' : ' <span class="badge-review">검토 필요</span>';
  let html: string;
  if (opts.dir === 'fwd') {
    html = flipped
      ? `<span class="side">뒷면</span><div class="fl-mini">${esc(c.title_ko)}${badge}</div>${formula}${exp}`
      : `<span class="side">앞면</span>${title}${cond}`;
  } else {
    html = flipped
      ? `<span class="side">뒷면</span>${title}${cond}${exp}`
      : `<span class="side">앞면 · 이 공식의 이름은?</span>${formula}`;
  }
  cardEl.innerHTML = html;
  cardEl.classList.toggle('back', flipped);
}

function flip() {
  flipped = !flipped;
  draw();
}
cardEl.addEventListener('click', (e) => {
  // 수식 가로 스크롤 중 링크 탭 등은 무시하지 않아도 됨: 카드 전체가 뒤집기 영역
  if ((e.target as HTMLElement).closest('a')) return;
  flip();
});
cardEl.addEventListener('keydown', (e) => {
  if (e.key === ' ' || e.key === 'Enter') {
    e.preventDefault();
    flip();
  }
});

function answer(ok: boolean) {
  const c = deck[idx];
  if (ok) {
    known.push(c.id);
    markKnown(c.id);
  } else {
    unknown.push(c.id);
    markUnknown(c.id);
  }
  idx += 1;
  flipped = false;
  if (idx >= deck.length) finish();
  else draw();
}
$('#known').addEventListener('click', () => answer(true));
$('#unknown').addEventListener('click', () => answer(false));
$('#quit').addEventListener('click', () => (known.length + unknown.length ? finish() : (show('setup'), renderSetup())));

function finish() {
  const total = known.length + unknown.length;
  $('#r-score').textContent = `${known.length} / ${total}`;
  $('#r-ok').textContent = String(known.length);
  $('#r-ng').textContent = String(unknown.length);
  $<HTMLButtonElement>('#retry-wrong').hidden = unknown.length === 0;
  show('done');
}
$('#retry-wrong').addEventListener('click', () => start(data.cards.filter((c) => unknown.includes(c.id))));
$('#retry').addEventListener('click', () => start(deckFor(opts)));
$('#back').addEventListener('click', () => {
  show('setup');
  renderSetup();
});
startBtn.addEventListener('click', () => start(deckFor(opts)));

loadIndex()
  .then((d) => {
    data = d;
    selSubject.innerHTML += d.subjects.map((s) => `<option value="${s.id}">${s.name}</option>`).join('');
    if (!d.subjects.some((s) => s.id === opts.subject)) opts.subject = '';
    renderSetup();
  })
  .catch(() => {
    startBtn.textContent = '카드 데이터를 불러오지 못했습니다';
  });
