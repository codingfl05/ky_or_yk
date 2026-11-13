// localStorage 상태: 즐겨찾기, 틀린 것, 설정. 모든 접근은 try/catch (사파리 개인정보 보호 모드 등).

export type Theme = 'system' | 'light' | 'dark';

export interface WrongEntry {
  added: number;
  /** "알았음" 연속 횟수. 2가 되면 틀린 것 목록에서 빠진다. */
  streak: number;
}

export interface Settings {
  theme: Theme;
  /** 0~3: 작게 / 보통 / 크게 / 아주 크게 */
  fontStep: number;
  hideFormulas: boolean;
  /** 검토 모드: 모든 카드의 supplement(보완 내용) 표시 */
  reviewMode: boolean;
  flash?: Record<string, unknown>;
  /** 학습 모드: 단원별 마지막 위치 (키: kind/subject/chapter) */
  study?: Record<string, number>;
}

export interface State {
  version: 1;
  favorites: Record<string, number>;
  wrong: Record<string, WrongEntry>;
  /** 학습 섹션: 다 읽은 레슨 id → 시각 */
  lessons: Record<string, number>;
  settings: Settings;
}

export const KEY = 'kyyk:v1';
export const WRONG_CLEAR_STREAK = 2;
export const FONT_SCALES = [0.9, 1, 1.12, 1.25];

const defaults = (): State => ({
  version: 1,
  favorites: {},
  wrong: {},
  lessons: {},
  settings: { theme: 'system', fontStep: 1, hideFormulas: false, reviewMode: false },
});

function sanitize(raw: any): State {
  const s = defaults();
  if (!raw || typeof raw !== 'object') return s;
  if (raw.favorites && typeof raw.favorites === 'object') {
    for (const [k, v] of Object.entries(raw.favorites)) if (typeof v === 'number') s.favorites[k] = v;
  }
  if (raw.wrong && typeof raw.wrong === 'object') {
    for (const [k, v] of Object.entries<any>(raw.wrong)) {
      if (v && typeof v === 'object') s.wrong[k] = { added: Number(v.added) || Date.now(), streak: Number(v.streak) || 0 };
    }
  }
  if (raw.lessons && typeof raw.lessons === 'object') {
    for (const [k, v] of Object.entries(raw.lessons)) if (typeof v === 'number') s.lessons[k] = v;
  }
  const st = raw.settings ?? {};
  if (['system', 'light', 'dark'].includes(st.theme)) s.settings.theme = st.theme;
  if (Number.isInteger(st.fontStep) && st.fontStep >= 0 && st.fontStep < FONT_SCALES.length) s.settings.fontStep = st.fontStep;
  s.settings.hideFormulas = !!st.hideFormulas;
  s.settings.reviewMode = !!st.reviewMode;
  if (st.flash && typeof st.flash === 'object') s.settings.flash = st.flash;
  if (st.study && typeof st.study === 'object') {
    s.settings.study = {};
    for (const [k, v] of Object.entries(st.study)) if (Number.isInteger(v) && (v as number) >= 0) s.settings.study[k] = v as number;
  }
  return s;
}

let state: State = load();

function load(): State {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? sanitize(JSON.parse(raw)) : defaults();
  } catch {
    return defaults();
  }
}

function save() {
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    /* 저장 불가 환경: 이번 세션에서만 유지 */
  }
  document.dispatchEvent(new CustomEvent('kyyk:state'));
}

// 다른 탭에서 바뀐 경우
window.addEventListener('storage', (e) => {
  if (e.key === KEY) {
    state = load();
    document.dispatchEvent(new CustomEvent('kyyk:state'));
  }
});

export const getState = (): Readonly<State> => state;

export const isFav = (id: string) => id in state.favorites;
export const isWrong = (id: string) => id in state.wrong;

export function toggleFav(id: string) {
  if (isFav(id)) delete state.favorites[id];
  else state.favorites[id] = Date.now();
  save();
}

export function toggleWrong(id: string) {
  if (isWrong(id)) delete state.wrong[id];
  else state.wrong[id] = { added: Date.now(), streak: 0 };
  save();
}

/** 플래시카드 "몰랐음" */
export function markUnknown(id: string) {
  state.wrong[id] = { added: state.wrong[id]?.added ?? Date.now(), streak: 0 };
  save();
}

/** 플래시카드 "알았음". 틀린 것 목록에서 빠지면 true. */
export function markKnown(id: string): boolean {
  const w = state.wrong[id];
  if (!w) return false;
  w.streak += 1;
  const cleared = w.streak >= WRONG_CLEAR_STREAK;
  if (cleared) delete state.wrong[id];
  save();
  return cleared;
}

export const isLessonDone = (id: string) => id in state.lessons;

export function setLessonDone(id: string, done: boolean) {
  if (done) state.lessons[id] = Date.now();
  else delete state.lessons[id];
  save();
}

export function updateSettings(patch: Partial<Settings>) {
  state.settings = { ...state.settings, ...patch };
  save();
}

// ---------------------------------------------------------------- export / import

export function exportJson(): string {
  return JSON.stringify(
    {
      app: 'ky_or_yk',
      version: 1,
      exportedAt: new Date().toISOString(),
      favorites: state.favorites,
      wrong: state.wrong,
      lessons: state.lessons,
      settings: state.settings,
    },
    null,
    2,
  );
}

/** 백업 JSON으로 현재 상태를 덮어쓴다. 형식이 틀리면 Error. */
export function parseBackup(text: string): State {
  let raw: any;
  try {
    raw = JSON.parse(text);
  } catch {
    throw new Error('JSON 형식이 아닙니다');
  }
  if (!raw || raw.app !== 'ky_or_yk') throw new Error('이 앱의 백업 파일이 아닙니다');
  return sanitize(raw);
}

export function replaceState(next: State) {
  state = next;
  save();
}

export function resetState() {
  state = defaults();
  save();
}
