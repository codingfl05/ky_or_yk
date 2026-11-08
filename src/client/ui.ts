// 모든 페이지 공통: 테마/글자크기/가리기 적용, 카드 상호작용(펼치기, 별표, 틀림, 가리기 해제).
import { FONT_SCALES, getState, isFav, isWrong, toggleFav, toggleWrong, updateSettings } from './storage';
import type { CardView, IndexPayload } from '../lib/types';

const root = document.documentElement;

export const BASE = (root.dataset.base || '/').replace(/\/?$/, '/');

export function applySettings() {
  const s = getState().settings;
  if (s.theme === 'system') delete root.dataset.theme;
  else root.dataset.theme = s.theme;
  root.style.fontSize = `${FONT_SCALES[s.fontStep] * 100}%`;
  root.dataset.hide = s.hideFormulas ? '1' : '0';
  root.dataset.review = s.reviewMode ? '1' : '0';
  const dark = s.theme === 'dark' || (s.theme === 'system' && matchMedia('(prefers-color-scheme: dark)').matches);
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#111214' : '#ffffff');
  document.querySelectorAll<HTMLButtonElement>('[data-hide-toggle]').forEach((b) => {
    b.setAttribute('aria-pressed', String(s.hideFormulas));
  });
}

/** 화면에 있는 카드의 별표/틀림 버튼 상태를 저장값과 맞춘다. */
export function syncCards(scope: ParentNode = document) {
  scope.querySelectorAll<HTMLElement>('[data-card-id]').forEach((card) => {
    const id = card.dataset.cardId!;
    const fav = isFav(id);
    const wrong = isWrong(id);
    card.classList.toggle('is-fav', fav);
    card.classList.toggle('is-wrong', wrong);
    card.querySelector('[data-act="fav"]')?.setAttribute('aria-pressed', String(fav));
    card.querySelector('[data-act="wrong"]')?.setAttribute('aria-pressed', String(wrong));
  });
}

export function setOpen(card: HTMLElement, open: boolean) {
  const body = card.querySelector<HTMLElement>('.card-body');
  if (!body) return;
  body.hidden = !open;
  card.classList.toggle('open', open);
  card.querySelector('[data-act="toggle"]')?.setAttribute('aria-expanded', String(open));
}

document.addEventListener('click', (e) => {
  const target = e.target as HTMLElement;

  const hideBtn = target.closest('[data-hide-toggle]');
  if (hideBtn) {
    updateSettings({ hideFormulas: !getState().settings.hideFormulas });
    document.querySelectorAll('.fx.revealed').forEach((el) => el.classList.remove('revealed'));
    return;
  }

  const card = target.closest<HTMLElement>('[data-card-id]');
  if (!card || card.closest('.flash')) return;
  const actEl = target.closest<HTMLElement>('[data-act]');
  const act = actEl?.dataset.act;
  const id = card.dataset.cardId!;

  if (act === 'fav') return toggleFav(id);
  if (act === 'wrong') return toggleWrong(id);
  if (act === 'review') {
    // 검토 필요 배지: 그 카드의 보완 내용을 펼치고/접는다
    const show = !card.classList.contains('show-supp');
    card.classList.toggle('show-supp', show);
    if (show) setOpen(card, true);
    return;
  }
  if (act === 'toggle') return setOpen(card, !card.classList.contains('open'));
  if (act === 'formula') {
    // 가리기 모드: 탭한 수식만 보이기
    if (root.dataset.hide === '1') {
      const fx = target.closest('.fx');
      if (fx) fx.classList.toggle('revealed');
      return;
    }
    // 가로 스크롤 중 텍스트 선택 등은 무시하고, 단순 탭이면 펼치기
    if (!getSelection()?.toString()) setOpen(card, !card.classList.contains('open'));
  }
});

document.addEventListener('kyyk:state', () => {
  applySettings();
  syncCards();
});
document.addEventListener('keydown', (e) => {
  const el = e.target as HTMLElement;
  if ((e.key === 'Enter' || e.key === ' ') && el.matches?.('[role="button"][data-act]')) {
    e.preventDefault();
    el.click();
  }
});
matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applySettings);

applySettings();
syncCards();

/** 해시(#카드id)로 들어오면 그 카드를 펼치고 스크롤 */
function openFromHash() {
  const id = decodeURIComponent(location.hash.slice(1));
  if (!id) return;
  const card = document.querySelector<HTMLElement>(`[data-card-id="${CSS.escape(id)}"]`);
  if (!card) return;
  setOpen(card, true);
  card.classList.add('flash-highlight');
  setTimeout(() => card.classList.remove('flash-highlight'), 1600);
  card.scrollIntoView({ block: 'start' });
}
window.addEventListener('hashchange', openFromHash);
openFromHash();

// ---------------------------------------------------------------- 카드 데이터
// data/index.json: 전체 카드의 가벼운 목록 (검색/필터용)
// data/<과목>.json: 과목별 전체 카드 (수식 HTML 포함) — 필요한 과목만 받는다

let indexP: Promise<IndexPayload> | null = null;
const subjectP = new Map<string, Promise<CardView[]>>();

function getJson<T>(path: string): Promise<T> {
  return fetch(`${BASE}data/${path}?v=${root.dataset.build}`).then((r) => {
    if (!r.ok) throw new Error(`${path} ${r.status}`);
    return r.json() as Promise<T>;
  });
}

export function loadIndex(): Promise<IndexPayload> {
  indexP ??= getJson<IndexPayload>('index.json');
  return indexP;
}

/** 주어진 id들의 전체 카드를 (원래 순서대로) 가져온다. */
export async function loadFull(ids: string[]): Promise<CardView[]> {
  const index = await loadIndex();
  const subjOf = new Map(index.cards.map((c) => [c.id, c.subject]));
  const subjects = [...new Set(ids.map((id) => subjOf.get(id)).filter((s): s is string => !!s))];
  const lists = await Promise.all(
    subjects.map((s) => {
      if (!subjectP.has(s)) subjectP.set(s, getJson<CardView[]>(`${s}.json`));
      return subjectP.get(s)!;
    }),
  );
  const byId = new Map(lists.flat().map((c) => [c.id, c]));
  return ids.map((id) => byId.get(id)).filter((c): c is CardView => !!c);
}

// ---------------------------------------------------------------- 폰: 긴 공식 맞추기
// 폰 화면(폭 640px 이하)에서만, 블록 수식이 칸보다 넓으면 글자 크기를 줄여 한 화면에 들어오게 한다.
// 너무 길면(MIN_SCALE 미만) 그 크기에서 멈추고 나머지는 가로 스크롤. 웹(넓은 화면)에서는 아무것도 하지 않는다.
const phone = matchMedia('(max-width: 640px)');
const MIN_SCALE = 0.5;

function fitOne(fx: HTMLElement) {
  const k = fx.querySelector<HTMLElement>('.katex-display > .katex');
  if (!k) return;
  k.style.fontSize = '';
  if (!phone.matches) return;
  const style = getComputedStyle(fx);
  const avail = fx.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);
  const need = k.scrollWidth;
  if (avail <= 0 || need <= avail) return;
  const scale = Math.max(avail / need, MIN_SCALE);
  k.style.fontSize = `${parseFloat(getComputedStyle(k).fontSize) * scale}px`;
}

const fitObserver = new ResizeObserver((entries) => {
  for (const e of entries) {
    const w = Math.round(e.contentRect.width);
    const el = e.target as HTMLElement;
    if (el.dataset.fitW === String(w)) continue; // 높이만 바뀐 경우(우리가 글자를 줄인 결과)는 무시
    el.dataset.fitW = String(w);
    fitOne(el);
  }
});
function watchFormulas(scope: ParentNode) {
  scope.querySelectorAll<HTMLElement>('.fx').forEach((fx) => fitObserver.observe(fx));
}
new MutationObserver((muts) => {
  for (const m of muts) m.addedNodes.forEach((n) => n instanceof HTMLElement && watchFormulas(n.matches('.fx') ? n.parentElement! : n));
}).observe(document.body, { childList: true, subtree: true });
watchFormulas(document);
phone.addEventListener('change', () =>
  document.querySelectorAll<HTMLElement>('.fx').forEach((fx) => {
    delete fx.dataset.fitW;
    fitOne(fx);
  }),
);
