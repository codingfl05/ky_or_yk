import { BASE, loadFull, loadIndex, syncCards } from './ui';
import { getState, updateSettings, WRONG_CLEAR_STREAK } from './storage';
import { renderCard } from '../lib/render-card';


type Tab = 'fav' | 'wrong';
const list = document.querySelector<HTMLElement>('#list')!;
const empty = document.querySelector<HTMLElement>('#empty')!;
const tools = document.querySelector<HTMLElement>('#tools')!;
const hint = document.querySelector<HTMLElement>('#hint')!;
const flashLink = document.querySelector<HTMLAnchorElement>('#flash-link')!;

let tab: Tab = location.hash === '#wrong' ? 'wrong' : 'fav';
let known = new Set<string>();
let seq = 0;

/** 최근 추가 순 */
function idsOf(t: Tab): string[] {
  const s = getState();
  const entries: [string, number][] =
    t === 'fav'
      ? Object.entries(s.favorites)
      : Object.entries(s.wrong).map(([id, w]) => [id, w.added] as [string, number]);
  return entries.sort((a, b) => b[1] - a[1]).map(([id]) => id).filter((id) => known.has(id));
}

function updateCounts() {
  for (const t of ['fav', 'wrong'] as Tab[]) {
    const n = idsOf(t).length;
    document.querySelector(`[data-count="${t}"]`)!.textContent = n ? String(n) : '';
  }
}

/** 탭 진입/전환 시에만 목록을 다시 그린다. 별표를 해제해도 카드가 그 자리에서 바로 사라지지 않게 (실수 되돌리기 가능). */
async function redraw() {
  const my = ++seq;
  document.querySelectorAll<HTMLButtonElement>('[data-tab]').forEach((b) =>
    b.setAttribute('aria-selected', String(b.dataset.tab === tab)),
  );
  const shown = await loadFull(idsOf(tab));
  if (my !== seq) return;
  list.innerHTML = shown.map((c) => renderCard(c, { showPath: true })).join('');
  syncCards(list);
  empty.hidden = shown.length > 0;
  empty.textContent = tab === 'fav' ? '별표한 카드가 없습니다.' : '틀린 것으로 체크한 카드가 없습니다.';
  tools.hidden = shown.length === 0;
  hint.textContent = tab === 'wrong' ? `${shown.length}개 · "알았음" ${WRONG_CLEAR_STREAK}번 연속이면 빠짐` : `${shown.length}개`;
  updateCounts();
}

flashLink.href = `${BASE}flash/`;
flashLink.addEventListener('click', () => {
  const f = getState().settings.flash ?? {};
  updateSettings({ flash: { ...f, subject: '', chapter: '', pool: tab } });
});

document.querySelectorAll<HTMLButtonElement>('[data-tab]').forEach((b) =>
  b.addEventListener('click', () => {
    tab = b.dataset.tab as Tab;
    history.replaceState(null, '', tab === 'wrong' ? '#wrong' : location.pathname);
    redraw();
  }),
);
document.addEventListener('kyyk:state', updateCounts);

loadIndex()
  .then((d) => {
    known = new Set(d.cards.map((c) => c.id));
    return redraw();
  })
  .catch(() => {
    empty.hidden = false;
    empty.textContent = '카드 데이터를 불러오지 못했습니다.';
  });
