// 학습 섹션: 읽음 표시, 진행률, 흐름도 이동, 위젯 초기화.
import { isLessonDone, setLessonDone } from './storage';
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
  const show = (push = true) => {
    const cur = stack[stack.length - 1];
    nodes.forEach((n, id) => (n.hidden = id !== cur));
    back.disabled = stack.length < 2;
    pathEl.textContent = stack.length > 1 ? `${stack.length - 1}단계` : '';
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

document.querySelectorAll<HTMLElement>('[data-flow]').forEach(initFlow);
initWidgets();
syncProgress();
