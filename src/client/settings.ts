import './ui';
import { exportJson, getState, parseBackup, replaceState, resetState, updateSettings, type Theme } from './storage';

const $ = <T extends HTMLElement>(s: string) => document.querySelector<T>(s)!;

function toast(msg: string) {
  const el = document.createElement('div');
  el.className = 'toast';
  el.textContent = msg;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2200);
}

function render() {
  const s = getState();
  $('#theme').querySelectorAll<HTMLButtonElement>('button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.v === s.settings.theme)));
  $('#font').querySelectorAll<HTMLButtonElement>('button').forEach((b) => b.setAttribute('aria-pressed', String(Number(b.dataset.v) === s.settings.fontStep)));
  $<HTMLInputElement>('#review-mode').checked = s.settings.reviewMode;
  $('#summary').textContent = `현재: 즐겨찾기 ${Object.keys(s.favorites).length}개 · 틀린 것 ${Object.keys(s.wrong).length}개`;
}

$('#theme').addEventListener('click', (e) => {
  const b = (e.target as HTMLElement).closest<HTMLButtonElement>('button');
  if (b) updateSettings({ theme: b.dataset.v as Theme });
});
$('#font').addEventListener('click', (e) => {
  const b = (e.target as HTMLElement).closest<HTMLButtonElement>('button');
  if (b) updateSettings({ fontStep: Number(b.dataset.v) });
});

$<HTMLInputElement>('#review-mode').addEventListener('change', (e) => {
  updateSettings({ reviewMode: (e.target as HTMLInputElement).checked });
});

// ---------------------------------------------------------------- export
const fileName = () => {
  const d = new Date();
  const p = (n: number) => String(n).padStart(2, '0');
  return `kyyk-backup-${d.getFullYear()}${p(d.getMonth() + 1)}${p(d.getDate())}.json`;
};

$('#export-file').addEventListener('click', async () => {
  const json = exportJson();
  const file = new File([json], fileName(), { type: 'application/json' });
  // iOS 홈 화면 앱에서는 다운로드가 불안정해서 공유 시트를 우선 사용
  if (navigator.canShare?.({ files: [file] })) {
    try {
      await navigator.share({ files: [file] });
      return;
    } catch (e) {
      if ((e as Error).name === 'AbortError') return;
    }
  }
  const a = document.createElement('a');
  a.href = URL.createObjectURL(file);
  a.download = file.name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
});

$('#export-copy').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(exportJson());
    toast('클립보드에 복사했습니다');
  } catch {
    $('#paste-box').hidden = false;
    ($('#paste') as HTMLTextAreaElement).value = exportJson();
    ($('#paste') as HTMLTextAreaElement).select();
    toast('자동 복사가 안 돼서 아래에 표시했습니다. 직접 복사하세요');
  }
});

// ---------------------------------------------------------------- import
function applyBackup(text: string) {
  try {
    const next = parseBackup(text);
    const msg = `즐겨찾기 ${Object.keys(next.favorites).length}개, 틀린 것 ${Object.keys(next.wrong).length}개로 현재 데이터를 덮어씁니다. 계속할까요?`;
    if (!confirm(msg)) return;
    replaceState(next);
    toast('가져왔습니다');
    $('#paste-box').hidden = true;
  } catch (e) {
    alert(`가져오기 실패: ${(e as Error).message}`);
  }
}

$('#import-file').addEventListener('click', () => $<HTMLInputElement>('#file').click());
$<HTMLInputElement>('#file').addEventListener('change', async (e) => {
  const input = e.target as HTMLInputElement;
  const f = input.files?.[0];
  if (f) applyBackup(await f.text());
  input.value = '';
});
$('#import-paste').addEventListener('click', () => {
  const box = $('#paste-box');
  box.hidden = !box.hidden;
  ($('#paste') as HTMLTextAreaElement).value = '';
});
$('#paste-apply').addEventListener('click', () => applyBackup(($('#paste') as HTMLTextAreaElement).value));

$('#reset').addEventListener('click', () => {
  if (confirm('즐겨찾기, 틀린 것, 설정을 모두 지웁니다. 되돌릴 수 없습니다. 계속할까요?')) {
    resetState();
    toast('초기화했습니다');
  }
});

document.addEventListener('kyyk:state', render);
render();
