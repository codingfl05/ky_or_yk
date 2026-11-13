// 학습 섹션: 읽음 표시, 진행률, 흐름도 이동, 위젯 초기화.
import { getState, isLessonDone, setLessonDone } from './storage';
import { initWidgets } from './widgets';

function syncProgress() {
  document.querySelectorAll<HTMLElement>('[data-lesson-id]').forEach((row) => {
    row.classList.toggle('done', isLessonDone(row.dataset.lessonId!));
  });
  document.querySelectorAll<HTMLElement>('[data-track-count]').forEach((el) => {
    const holder = el.dataset.lessonIds !== undefined ? el : el.closest<HTMLElement>('[data-lesson-ids]');
    const ids = (holder?.dataset.lessonIds ?? '').split(' ').filter(Boolean);
    el.textContent = `${ids.filter(isLessonDone).length}/${ids.length}`;
  });
  document.querySelectorAll<HTMLElement>('[data-track-bar]').forEach((el) => {
    const ids = (el.dataset.lessonIds ?? '').split(' ').filter(Boolean);
    el.style.width = ids.length ? `${(ids.filter(isLessonDone).length / ids.length) * 100}%` : '0';
  });
  document.querySelectorAll<HTMLButtonElement>('[data-lesson-done]').forEach((b) => {
    b.setAttribute('aria-pressed', String(isLessonDone(b.dataset.lessonDone!)));
  });
}

document.addEventListener('click', (e) => {
  const b = (e.target as HTMLElement).closest<HTMLButtonElement>('[data-lesson-done]');
  if (!b) return;
  const id = b.dataset.lessonDone!;
  setLessonDone(id, !isLessonDone(id));
});
document.addEventListener('kyyk:state', syncProgress);

// ---- 흐름도: 한 번에 노드 하나만 보여 주고, 선택지를 누르면 다음 노드로
function initFlow(root: HTMLElement) {
  const nodes = new Map<string, HTMLElement>();
  root.querySelectorAll<HTMLElement>('[data-node]').forEach((n) => nodes.set(n.dataset.node!, n));
  const back = root.querySelector<HTMLButtonElement>('[data-flow-back]')!;
  const pathEl = root.querySelector<HTMLElement>('[data-flow-path]')!;
  let stack: string[] = ['start'];
  /** 지금까지 고른 선택지의 글자 (stack[i] → stack[i+1]로 간 버튼) */
  const labels = () =>
    stack.slice(1).map((id, i) => nodes.get(stack[i])?.querySelector<HTMLElement>(`[data-to="${id}"]`)?.textContent?.trim() ?? id);
  const show = (push = true) => {
    const cur = stack[stack.length - 1];
    nodes.forEach((n, id) => (n.hidden = id !== cur));
    back.disabled = stack.length < 2;
    pathEl.hidden = stack.length < 2;
    pathEl.textContent = labels().join(' › ');
    if (push) history.replaceState(null, '', stack.length > 1 ? `#${stack.join('/')}` : location.pathname);
    window.scrollTo({ top: 0 });
  };
  root.addEventListener('click', (e) => {
    const t = e.target as HTMLElement;
    const opt = t.closest<HTMLElement>('[data-to]');
    if (opt && nodes.has(opt.dataset.to!)) {
      stack.push(opt.dataset.to!);
      show();
    } else if (t.closest('[data-flow-back]')) {
      if (stack.length > 1) stack.pop();
      show();
    } else if (t.closest('[data-flow-reset]')) {
      stack = ['start'];
      show();
    }
  });
  // 새로고침·공유 시 위치 복원
  const fromHash = decodeURIComponent(location.hash.slice(1)).split('/').filter((id) => nodes.has(id));
  if (fromHash.length > 1 && fromHash[0] === 'start') {
    stack = fromHash;
    show(false);
  }
}

// ---- 홈의 "이어서 읽기": 가장 최근에 읽은 트랙의 다음 안 읽은 레슨 (없으면 첫 트랙의 첫 레슨)
type ContinueTrack = { title: string; lessons: { id: string; n: number; title: string; href: string; minutes: number }[] };
function syncContinue() {
  const row = document.querySelector<HTMLAnchorElement>('[data-continue]');
  if (!row) return;
  let tracks: ContinueTrack[] = [];
  try {
    tracks = JSON.parse(row.dataset.continue || '[]');
  } catch {
    return;
  }
  const done = getState().lessons;
  const withNext = tracks
    .map((t) => ({
      t,
      next: t.lessons.find((l) => !(l.id in done)),
      last: Math.max(0, ...t.lessons.map((l) => done[l.id] ?? 0)),
      read: t.lessons.filter((l) => l.id in done).length,
    }))
    .filter((x) => x.next);
  if (!withNext.length) {
    row.hidden = true;
    return;
  }
  const pick = withNext.sort((a, b) => b.last - a.last)[0];
  row.href = pick.next!.href;
  row.querySelector('[data-continue-label]')!.textContent =
    `${pick.read ? '이어서 읽기' : '읽기 시작'} · ${pick.t.title} ${pick.read}/${pick.t.lessons.length} · ${pick.next!.minutes}분`;
  row.querySelector('[data-continue-title]')!.textContent = `${pick.next!.n}. ${pick.next!.title}`;
  row.hidden = false;
}
document.addEventListener('kyyk:state', syncContinue);

// ---- 레슨 읽기 진행 막대
const readBar = document.querySelector<HTMLElement>('[data-read-progress]');
if (readBar) {
  const update = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    readBar.style.width = `${max > 0 ? Math.min(scrollY / max, 1) * 100 : 0}%`;
  };
  addEventListener('scroll', update, { passive: true });
  addEventListener('resize', update);
  update();
}

document.querySelectorAll<HTMLElement>('[data-flow]').forEach(initFlow);
syncContinue();
initWidgets();
syncProgress();
