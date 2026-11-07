import Fuse from 'fuse.js';
import { loadFull, loadIndex, syncCards } from './ui';
import { renderCard } from '../lib/render-card';
import type { CardMeta } from '../lib/types';

const input = document.querySelector<HTMLInputElement>('#q')!;
const results = document.querySelector<HTMLElement>('#results')!;
const count = document.querySelector<HTMLElement>('#count')!;
const filters = document.querySelector<HTMLElement>('#filters')!;
const MAX = 60;

let subject = new URLSearchParams(location.search).get('subject') ?? '';
input.value = new URLSearchParams(location.search).get('q') ?? '';

let fuse: Fuse<CardMeta> | null = null;
let all: CardMeta[] = [];
let seq = 0;

function setFilterUI() {
  filters.querySelectorAll<HTMLButtonElement>('[data-subject]').forEach((b) => {
    b.setAttribute('aria-pressed', String(b.dataset.subject === subject));
  });
}

async function run() {
  if (!fuse) return;
  const my = ++seq;
  const q = input.value.trim();
  const pool = (list: CardMeta[]) => (subject ? list.filter((c) => c.subject === subject) : list);
  let hits: CardMeta[];
  if (!q) {
    hits = subject ? pool(all) : [];
  } else {
    hits = pool(fuse.search(q, { limit: 300 }).map((r) => r.item));
  }
  const shown = await loadFull(hits.slice(0, MAX).map((c) => c.id));
  if (my !== seq) return; // 더 최근 입력이 있으면 버림
  results.innerHTML = shown.map((c) => renderCard(c, { showPath: true })).join('');
  count.textContent = !q && !subject
    ? `카드 ${all.length}개에서 검색`
    : hits.length === 0
      ? '결과 없음'
      : `${hits.length}개${hits.length > MAX ? ` (상위 ${MAX}개 표시)` : ''}`;
  syncCards(results);
  const url = new URL(location.href);
  q ? url.searchParams.set('q', q) : url.searchParams.delete('q');
  subject ? url.searchParams.set('subject', subject) : url.searchParams.delete('subject');
  history.replaceState(null, '', url);
}

let t: number | undefined;
input.addEventListener('input', () => {
  clearTimeout(t);
  t = window.setTimeout(run, 120);
});
filters.addEventListener('click', (e) => {
  const b = (e.target as HTMLElement).closest<HTMLButtonElement>('[data-subject]');
  if (!b) return;
  subject = b.dataset.subject ?? '';
  setFilterUI();
  run();
});

setFilterUI();
count.textContent = '불러오는 중…';
loadIndex()
  .then((data) => {
    all = data.cards;
    fuse = new Fuse(all, {
      keys: [
        { name: 'title_ko', weight: 3 },
        { name: 'title_en', weight: 3 },
        { name: 'tags', weight: 2 },
        { name: 'chapterName', weight: 0.5 },
        { name: 'subjectName', weight: 0.3 },
      ],
      threshold: 0.34,
      ignoreLocation: true,
      ignoreDiacritics: true,
      minMatchCharLength: 1,
    });
    return run();
  })
  .catch(() => {
    count.textContent = '카드 데이터를 불러오지 못했습니다.';
  });
