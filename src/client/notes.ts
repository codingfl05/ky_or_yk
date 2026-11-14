// 약점 메모: 약한 부분을 적어 두고, 모아서 클로드 채팅에 붙여넣을 글로 복사한다.
import { addNote, getState, removeNote, clearSentNotes, markNotesSent, type Note } from './storage';

const $ = <T extends HTMLElement>(id: string) => document.getElementById(id) as T;
const form = $<HTMLFormElement>('note-form');
const input = $<HTMLTextAreaElement>('note-text');
const refEl = $('note-ref');
const list = $('note-list');
const empty = $('note-empty');
const tools = $('note-tools');
const count = $('note-count');
const after = $('note-after');
const fallback = $<HTMLTextAreaElement>('note-fallback');
const clearBtn = $('note-clear');

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

// 카드·레슨에서 넘어온 경우: ?ref=<id>&t=<제목>&href=<돌아갈 주소>
const params = new URLSearchParams(location.search);
const ref = params.get('ref') ? { id: params.get('ref')!, title: params.get('t') || params.get('ref')!, href: params.get('href') || '' } : null;
if (ref) {
  refEl.hidden = false;
  refEl.innerHTML = `관련: ${ref.href ? `<a href="${esc(ref.href)}">${esc(ref.title)}</a>` : esc(ref.title)}`;
  input.focus();
}

let lastCopied: string[] = [];

function render() {
  const notes = [...getState().notes].sort((a, b) => Number(a.sent) - Number(b.sent) || b.added - a.added);
  const pending = notes.filter((n) => !n.sent);
  empty.hidden = notes.length > 0;
  tools.hidden = pending.length === 0;
  clearBtn.hidden = notes.length === pending.length;
  count.textContent = `보낼 메모 ${pending.length}개`;
  list.innerHTML = notes
    .map((n) => {
      const d = new Date(n.added);
      const date = `${d.getMonth() + 1}/${d.getDate()}`;
      const refHtml = n.ref ? (n.ref.href ? `<a class="note-ref-link" href="${esc(n.ref.href)}">${esc(n.ref.title)}</a>` : `<span class="note-ref-link">${esc(n.ref.title)}</span>`) : '';
      return `<article class="note${n.sent ? ' sent' : ''}" data-id="${esc(n.id)}">
<div class="note-main"><p>${esc(n.text).replace(/\n/g, '<br>')}</p><div class="note-meta">${date}${n.sent ? ' · 보냄' : ''}${refHtml ? ' · ' + refHtml : ''}</div></div>
<button class="ic note-del" type="button" data-del aria-label="메모 삭제">×</button>
</article>`;
    })
    .join('');
}

function buildText(notes: Note[]): string {
  const d = new Date();
  const lines = notes.map((n, i) => `${i + 1}. ${n.ref ? `[${n.ref.title} / ${n.ref.id}] ` : ''}${n.text.replace(/\s*\n\s*/g, ' ')}`);
  return `[약점 메모 정리 요청] ${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}
공식노트 사이트에 적어 둔 약한 부분 ${notes.length}개입니다. CLAUDE.md의 "약점 메모 정리" 절차대로, 관련 공식 카드·레슨·비교표를 보강해서 사이트에 반영해 주세요.

${lines.join('\n')}`;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;
  addNote(text, ref ?? undefined);
  input.value = '';
  after.hidden = true;
});

list.addEventListener('click', (e) => {
  const btn = (e.target as HTMLElement).closest('[data-del]');
  const id = btn?.closest<HTMLElement>('.note')?.dataset.id;
  if (id) removeNote(id);
});

$('note-copy').addEventListener('click', async () => {
  const pending = getState().notes.filter((n) => !n.sent).sort((a, b) => a.added - b.added);
  if (!pending.length) return;
  const text = buildText(pending);
  lastCopied = pending.map((n) => n.id);
  try {
    await navigator.clipboard.writeText(text);
    fallback.hidden = true;
    after.firstChild!.textContent = '복사했습니다. 클로드 채팅에 붙여넣으면 됩니다. ';
  } catch {
    // 자동 복사가 막힌 환경: 글을 보여 주고 직접 복사하게 한다
    fallback.value = text;
    fallback.hidden = false;
    fallback.select();
    after.firstChild!.textContent = '자동 복사가 안 돼서 아래에 표시했습니다. 직접 복사해 주세요. ';
  }
  after.hidden = false;
});

$('note-mark').addEventListener('click', () => {
  markNotesSent(lastCopied);
  lastCopied = [];
  after.hidden = true;
  fallback.hidden = true;
});

clearBtn.addEventListener('click', () => {
  if (confirm('"보냄"으로 표시한 메모를 모두 지울까요?')) clearSentNotes();
});

document.addEventListener('kyyk:state', render);
render();
