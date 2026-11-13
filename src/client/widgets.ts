// 학습 레슨의 인터랙티브 위젯. 레슨 본문의 "::widget 이름"이 <figure data-widget="이름">이 되고 여기서 채운다.
// 색은 CSS 토큰(.c-*)을 쓰므로 다크 모드에서도 그대로 동작한다.

type Init = (el: HTMLElement) => void;

const fmt = (n: number, d = 2) => {
  const s = n.toFixed(Math.abs(n) >= 100 ? 0 : d);
  return s.includes('.') ? s.replace(/\.?0+$/, '') : s;
};

/** 세그먼트 버튼. 선택이 바뀌면 onChange(index) */
function seg(labels: string[], onChange: (i: number) => void, initial = 0): HTMLElement {
  const box = document.createElement('div');
  box.className = 'seg w-seg';
  labels.forEach((l, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.textContent = l;
    b.setAttribute('aria-pressed', String(i === initial));
    b.addEventListener('click', () => {
      box.querySelectorAll('button').forEach((x, j) => x.setAttribute('aria-pressed', String(j === i)));
      onChange(i);
    });
    box.appendChild(b);
  });
  return box;
}

function slider(label: string, min: number, max: number, step: number, value: number, onInput: (v: number) => void): HTMLElement {
  const wrap = document.createElement('label');
  wrap.className = 'w-slider';
  wrap.innerHTML = `<span>${label}</span><input type="range" min="${min}" max="${max}" step="${step}" value="${value}">`;
  const input = wrap.querySelector('input')!;
  input.addEventListener('input', () => onInput(Number(input.value)));
  return wrap;
}

/** 간단한 그래프: 0..xmax, 0..ymax 를 300x130 영역에 그린다 */
const G = { x0: 34, y0: 132, w: 270, hgt: 112 };
function graphFrame(_xLabel: string, yLabel: string, ticks: { x: number; label: string }[], xmax: number): string {
  const t = ticks
    .map((k) => {
      const x = G.x0 + (k.x / xmax) * G.w;
      return `<line x1="${x}" y1="${G.y0}" x2="${x}" y2="${G.y0 + 4}" class="c-mut" stroke="currentColor"/><text x="${x}" y="${G.y0 + 15}" class="c-mut" fill="currentColor" font-size="10" text-anchor="middle">${k.label}</text>`;
    })
    .join('');
  return `<line x1="${G.x0}" y1="${G.y0}" x2="${G.x0 + G.w}" y2="${G.y0}" class="c-mut" stroke="currentColor"/>
<line x1="${G.x0}" y1="${G.y0}" x2="${G.x0}" y2="${G.y0 - G.hgt - 6}" class="c-mut" stroke="currentColor"/>${t}
<text x="${G.x0 - 4}" y="${G.y0 - G.hgt - 2}" class="c-mut" fill="currentColor" font-size="10" text-anchor="end">${yLabel}</text>`;
}
function curve(fn: (x: number) => number, xmax: number, ymax: number, cls: string, extra = '', from = 0): string {
  let d = '';
  const n = 135;
  for (let i = 0; i <= n; i++) {
    const x = from + ((xmax - from) * i) / n;
    const y = Math.min(fn(x), ymax * 1.05);
    d += `${i ? 'L' : 'M'}${(G.x0 + (x / xmax) * G.w).toFixed(1)},${(G.y0 - (y / ymax) * G.hgt).toFixed(1)}`;
  }
  return `<path d="${d}" class="${cls}" stroke="currentColor" stroke-width="2" fill="none" ${extra}/>`;
}
const marker = (x: number, y: number, xmax: number, ymax: number, cls = 'c-pos') => {
  const px = G.x0 + (x / xmax) * G.w;
  const py = G.y0 - (Math.min(y, ymax) / ymax) * G.hgt;
  return `<line x1="${px}" y1="${G.y0}" x2="${px}" y2="${py}" class="${cls}" stroke="currentColor" stroke-dasharray="3 3"/><circle cx="${px}" cy="${py}" r="5" class="${cls}" fill="currentColor"/>`;
};
const svgBox = (hgt: number, inner: string) => `<svg viewBox="0 0 320 ${hgt}" fill="none" stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`;

// ------------------------------------------------------------------ 1. 균일한 구 / 구껍질의 전기장

const sphereField: Init = (el) => {
  let shell = 0;
  let r = 0.5;
  const E = (x: number) => (x >= 1 ? 1 / (x * x) : shell ? 0 : x);
  const view = document.createElement('div');
  const draw = () => {
    const enc = r >= 1 ? 1 : shell ? 0 : r ** 3;
    const inside = r < 1;
    view.innerHTML =
      svgBox(152, graphFrame('r', 'E', [{ x: 1, label: 'R' }, { x: 2, label: '2R' }, { x: 3, label: '3R' }], 3) + curve(E, 3, 1, 'c-acc') + marker(r, E(r), 3, 1)) +
      `<p class="w-read"><b>가우스 면 반지름 r = ${fmt(r)}R</b> (${inside ? '구 안쪽' : '구 바깥'})<br>
면 안에 든 전하: 전체의 <b>${fmt(enc * 100, 1)}%</b><br>
전기장: 표면 값의 <b>${fmt(E(r) * 100, 1)}%</b>
${inside ? (shell ? ' — 껍질 안에는 전하가 없으니 0' : ' — 안쪽 전하만 세므로 r에 비례') : ' — 바깥에서는 점전하처럼 1/r²'}</p>`;
  };
  el.append(
    seg(['속이 찬 구', '구껍질'], (i) => {
      shell = i;
      draw();
    }),
    view,
    slider('가우스 면 반지름 r', 0, 3, 0.05, r, (v) => {
      r = v;
      draw();
    }),
  );
  draw();
};

// ------------------------------------------------------------------ 2. 유전체: 전하 고정 vs 전압 고정

const dielectric: Init = (el) => {
  let connected = 0;
  let k = 2;
  const view = document.createElement('div');
  const draw = () => {
    const rows: [string, number, string][] = connected
      ? [
          ['전기용량 C', k, '모양이 정함: 항상 κ배'],
          ['전하 q', k, '배터리가 전하를 더 보냄'],
          ['전압 V', 1, '배터리가 붙잡고 있음'],
          ['전기장 E', 1, 'V = Ed 그대로'],
          ['에너지 U', k, '½CV²: C만큼 증가'],
        ]
      : [
          ['전기용량 C', k, '모양이 정함: 항상 κ배'],
          ['전하 q', 1, '갈 곳이 없어 그대로'],
          ['전압 V', 1 / k, 'V = q/C: 줄어듦'],
          ['전기장 E', 1 / k, '쌍극자가 반대로 깎음'],
          ['에너지 U', 1 / k, 'q²/2C: 줄어듦'],
        ];
    view.innerHTML =
      `<div class="w-bars">` +
      rows
        .map(([name, v, why]) => {
          const cls = v > 1.001 ? 'up' : v < 0.999 ? 'down' : 'same';
          return `<div class="w-bar ${cls}"><span class="nm">${name}</span><span class="track"><i style="width:${(v / 6) * 100}%"></i><em style="left:${100 / 6}%"></em></span><span class="val">×${fmt(v)}</span><span class="why">${why}</span></div>`;
        })
        .join('') +
      `</div><p class="w-read">세로 점선이 유전체를 넣기 전(×1)이다. ${connected ? '배터리가 연결되어 있으면 <b>전압이 고정</b>되고 전하가 늘어난다.' : '배터리를 떼면 <b>전하가 고정</b>되고 전압이 줄어든다.'}</p>`;
  };
  el.append(
    seg(['배터리 분리 (q 고정)', '배터리 연결 (V 고정)'], (i) => {
      connected = i;
      draw();
    }),
    view,
    slider('유전 상수 κ', 1, 6, 0.5, k, (v) => {
      k = v;
      draw();
    }),
  );
  draw();
};

// ------------------------------------------------------------------ 3. 렌츠 법칙

const lenz: Init = (el) => {
  let mode = 0; // 0: N 접근, 1: N 멀어짐, 2: S 접근, 3: S 멀어짐
  const view = document.createElement('div');
  const draw = () => {
    const north = mode < 2;
    const approach = mode % 2 === 0;
    const magDown = north; // N극이 고리를 향하면 고리 안 자기장은 아래(자석에서 멀어지는 쪽)
    const indUp = approach ? magDown : !magDown; // 접근: 반대, 멀어짐: 같은 방향
    const ccw = indUp; // 위에서 볼 때 반시계 ↔ 유도 자기장이 위
    const my = approach ? 26 : 8;
    const arrowUp = (x: number, y1: number, y2: number, cls: string, w = 2) =>
      `<line x1="${x}" y1="${y1}" x2="${x}" y2="${y2 + (y2 < y1 ? 6 : -6)}" class="${cls}" stroke="currentColor" stroke-width="${w}"/><polygon points="${x},${y2} ${x - 4},${y2 + (y2 < y1 ? 8 : -8)} ${x + 4},${y2 + (y2 < y1 ? 8 : -8)}" class="${cls}" fill="currentColor"/>`;
    const top = north ? 'S' : 'N';
    const bottom = north ? 'N' : 'S';
    const frontDir = ccw ? 1 : -1; // 앞쪽 호의 전류 방향 (오른쪽 +1)
    view.innerHTML =
      svgBox(
        176,
        // 자석
        `<rect x="140" y="${my}" width="40" height="30" class="c-mut" fill="currentColor" fill-opacity="0.25" stroke="currentColor"/>
<rect x="140" y="${my + 30}" width="40" height="30" class="${north ? 'c-pos' : 'c-neg'}" fill="currentColor" fill-opacity="0.3" stroke="currentColor"/>
<text x="160" y="${my + 20}" class="c-text" fill="currentColor" font-size="13" font-weight="700" text-anchor="middle">${top}</text>
<text x="160" y="${my + 50}" class="c-text" fill="currentColor" font-size="13" font-weight="700" text-anchor="middle">${bottom}</text>` +
          // 자석 이동 방향
          (approach ? arrowUp(205, my + 14, my + 46, 'c-text') : arrowUp(205, my + 46, my + 14, 'c-text')) +
          `<text x="214" y="${my + 34}" class="c-text" fill="currentColor" font-size="11">${approach ? '가까이' : '멀리'}</text>` +
          // 고리
          `<path d="M 80 140 A 80 18 0 0 1 240 140" class="c-text" stroke="currentColor" stroke-width="2" stroke-dasharray="4 3"/>
<path d="M 80 140 A 80 18 0 0 0 240 140" class="c-text" stroke="currentColor" stroke-width="2.5"/>
<polygon points="${160 + frontDir * 8},158 ${160 - frontDir * 4},152 ${160 - frontDir * 4},164" class="c-acc" fill="currentColor"/>
<polygon points="${160 - frontDir * 8},122 ${160 + frontDir * 4},116 ${160 + frontDir * 4},128" class="c-acc" fill="currentColor"/>` +
          // 자석의 자기장(회색)과 유도 자기장(강조)
          (magDown ? arrowUp(138, 104, 134, 'c-mut') : arrowUp(138, 134, 104, 'c-mut')) +
          (indUp ? arrowUp(178, 150, 106, 'c-acc', 2.6) : arrowUp(178, 106, 150, 'c-acc', 2.6)) +
          `<text x="130" y="100" class="c-mut" fill="currentColor" font-size="10" text-anchor="end">자석의 B</text>
<text x="188" y="118" class="c-acc" fill="currentColor" font-size="10">유도 B</text>
<text x="250" y="160" class="c-acc" fill="currentColor" font-size="10">전류 i</text>`,
      ) +
      `<ol class="w-steps">
<li>고리 안, 자석이 만든 자기장: <b>${magDown ? '아래' : '위'}</b> 방향 (N극에서 나와 S극으로)</li>
<li>${approach ? '가까워지니' : '멀어지니'} 그 선속이 <b>${approach ? '증가' : '감소'}</b></li>
<li>고리는 변화를 싫어한다 → 유도 자기장은 <b>${indUp ? '위' : '아래'}</b> (${approach ? '반대 방향으로 막음' : '같은 방향으로 붙잡음'})</li>
<li>오른손 엄지를 유도 B로 → 전류는 위에서 볼 때 <b>${ccw ? '반시계' : '시계'}</b> 방향</li>
<li>결과: 고리가 자석을 <b>${approach ? '밀어낸다' : '끌어당긴다'}</b> (항상 움직임을 방해)</li>
</ol>`;
  };
  el.append(
    seg(['N극 가까이', 'N극 멀리', 'S극 가까이', 'S극 멀리'], (i) => {
      mode = i;
      draw();
    }),
    view,
  );
  draw();
};

// ------------------------------------------------------------------ 4. RC / RL 과도 현상

const transient: Init = (el) => {
  let mode = 0;
  let t = 1;
  const rise = (x: number) => 1 - Math.exp(-x);
  const fall = (x: number) => Math.exp(-x);
  const defs = [
    { main: rise, other: fall, mainL: '전하 q (축전기 전압)', otherL: '전류 i', tau: 'RC', who: '축전기', start: '빈 축전기 = 그냥 도선 (전류 최대)', end: '꽉 찬 축전기 = 끊긴 선 (전류 0)' },
    { main: fall, other: fall, mainL: '전하 q', otherL: '전류 i (충전 때와 반대 방향)', tau: 'RC', who: '축전기', start: '축전기가 전원 노릇 (전류 최대)', end: '다 비어서 아무 일도 없음' },
    { main: rise, other: fall, mainL: '전류 i', otherL: '코일 전압', tau: 'L/R', who: '코일', start: '코일 = 끊긴 선 (전류 0, 전압을 혼자 다 가짐)', end: '코일 = 그냥 도선 (전류 일정)' },
    { main: fall, other: fall, mainL: '전류 i', otherL: '코일이 만드는 전압', tau: 'L/R', who: '코일', start: '코일이 전원 노릇 (전류를 붙잡음)', end: '전류가 다 줄어 0' },
  ];
  const view = document.createElement('div');
  const draw = () => {
    const d = defs[mode];
    const m = d.main(t);
    const o = d.other(t);
    const state = t < 0.25 ? d.start : t > 3.5 ? d.end : `${d.who}가 변하는 중`;
    view.innerHTML =
      svgBox(
        152,
        graphFrame('t', '', [1, 2, 3, 4, 5].map((x) => ({ x, label: `${x}τ` })), 5) +
          curve(d.other, 5, 1, 'c-mut', 'stroke-dasharray="5 4"') +
          curve(d.main, 5, 1, 'c-acc') +
          marker(t, m, 5, 1),
      ) +
      `<p class="w-read"><b>t = ${fmt(t, 1)}τ</b> (τ = ${d.tau})<br>
<span class="k-acc">━</span> ${d.mainL}: 최댓값의 <b>${fmt(m * 100, 0)}%</b><br>
<span class="k-mut">┅</span> ${d.otherL}: 최댓값의 <b>${fmt(o * 100, 0)}%</b><br>
지금 상태: <b>${state}</b></p>`;
  };
  el.append(
    seg(['RC 충전', 'RC 방전', 'RL 켜기', 'RL 끄기'], (i) => {
      mode = i;
      draw();
    }),
    view,
    slider('시간 t', 0, 5, 0.1, t, (v) => {
      t = v;
      draw();
    }),
  );
  draw();
};

// ------------------------------------------------------------------ 5. 오른손 법칙 연습

// ⊙/⊗ 는 글꼴마다 모양이 달라서 직접 그린다
const dirIcon = (inner: string) =>
  `<svg class="w-dir" viewBox="0 0 20 20" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="10" cy="10" r="8"/>${inner}</svg>`;
const OUT = dirIcon('<circle cx="10" cy="10" r="2.2" fill="currentColor" stroke="none"/>');
const IN = dirIcon('<path d="M5.5 5.5l9 9M14.5 5.5l-9 9"/>');

const rightHand: Init = (el) => {
  type V = [number, number, number];
  const dirs: { sym: string; name: string; v: V }[] = [
    { sym: '→', name: '오른쪽', v: [1, 0, 0] },
    { sym: '←', name: '왼쪽', v: [-1, 0, 0] },
    { sym: '↑', name: '위', v: [0, 1, 0] },
    { sym: '↓', name: '아래', v: [0, -1, 0] },
    { sym: OUT, name: '나오는 방향', v: [0, 0, 1] },
    { sym: IN, name: '들어가는 방향', v: [0, 0, -1] },
  ];
  const cross = (a: V, b: V): V => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
  const find = (v: V) => dirs.findIndex((d) => d.v.every((x, i) => x === v[i]));
  let ok = 0;
  let total = 0;
  let q = { vi: 0, bi: 4, neg: false };
  const view = document.createElement('div');
  const next = () => {
    // v와 B가 나란한 문제(힘 없음)는 가끔만 나오게 한다
    for (let tries = 0; tries < 4; tries++) {
      q = { vi: Math.floor(Math.random() * 6), bi: Math.floor(Math.random() * 6), neg: Math.random() < 0.4 };
      if (find(cross(dirs[q.vi].v, dirs[q.bi].v)) >= 0) break;
    }
    draw(-2);
  };
  const draw = (picked: number) => {
    const c = cross(dirs[q.vi].v, dirs[q.bi].v);
    const ci = find(c); // -1이면 평행 → 힘 없음
    const ans = ci < 0 ? -1 : q.neg ? find(c.map((x) => -x || 0) as V) : ci;
    const done = picked !== -2;
    const btn = (i: number, label: string) =>
      `<button type="button" data-i="${i}" class="${done ? (i === ans ? 'right' : i === picked ? 'wrong' : '') : ''}" ${done ? 'disabled' : ''}>${label}</button>`;
    const why =
      ci < 0
        ? 'v와 B가 나란하면 힘은 0이다.'
        : `v × B = ${dirs[ci].sym}${q.neg ? ` 인데 음전하라 반대 → ${dirs[ans].sym}` : ''}. 네 손가락을 v에서 B 쪽으로 감으면 엄지가 v × B.`;
    view.innerHTML = `<div class="w-rh-q">
<span><small>전하</small><b class="${q.neg ? 'k-neg' : 'k-pos'}">${q.neg ? '−q' : '+q'}</b></span>
<span><small>속도 v</small><b>${dirs[q.vi].sym}</b></span>
<span><small>자기장 B</small><b>${dirs[q.bi].sym}</b></span>
</div>
<p class="w-read">자기력 F의 방향은? <span class="muted">(${OUT} 화면에서 나옴, ${IN} 화면으로 들어감)</span></p>
<div class="w-rh-a">${dirs.map((d, i) => btn(i, d.sym)).join('')}${btn(-1, '힘 없음')}</div>
${done ? `<p class="w-read"><b class="${picked === ans ? 'k-ok' : 'k-pos'}">${picked === ans ? '정답' : '오답'}</b> — ${why}</p><button type="button" class="btn primary w-next">다음 문제</button>` : ''}
<p class="w-read muted">맞힌 수 ${ok} / ${total}</p>`;
  };
  view.addEventListener('click', (e) => {
    const b = (e.target as HTMLElement).closest('button');
    if (!b) return;
    if (b.classList.contains('w-next')) return next();
    if (b.dataset.i === undefined) return;
    const c = cross(dirs[q.vi].v, dirs[q.bi].v);
    const ci = find(c);
    const ans = ci < 0 ? -1 : q.neg ? find(c.map((x) => -x || 0) as V) : ci;
    total += 1;
    if (Number(b.dataset.i) === ans) ok += 1;
    draw(Number(b.dataset.i));
  });
  el.append(view);
  draw(-2);
};

// ------------------------------------------------------------------ 6. RLC 공명

const resonance: Init = (el) => {
  let w = 0.6; // ω / ω0
  const X0 = 2; // 공명에서의 리액턴스 / R
  const cur = (x: number) => 1 / Math.hypot(1, X0 * x - X0 / x);
  const view = document.createElement('div');
  const draw = () => {
    const xl = X0 * w;
    const xc = X0 / w;
    const z = Math.hypot(1, xl - xc);
    const phi = (Math.atan(xl - xc) * 180) / Math.PI;
    const state =
      Math.abs(phi) < 3 ? '공명: 코일과 축전기가 서로 지워 저항만 남는다' : phi > 0 ? `코일 우세 → 전류가 전압보다 ${fmt(phi, 0)}° 늦다` : `축전기 우세 → 전류가 전압보다 ${fmt(-phi, 0)}° 앞선다`;
    const bar = (name: string, v: number, cls: string) =>
      `<div class="w-bar ${cls}"><span class="nm">${name}</span><span class="track"><i style="width:${Math.min(v / 7, 1) * 100}%"></i></span><span class="val">${fmt(v)}R</span></div>`;
    view.innerHTML =
      svgBox(
        152,
        graphFrame('ω', 'I', [{ x: 1, label: 'ω₀' }, { x: 2, label: '2ω₀' }, { x: 3, label: '3ω₀' }], 3) + curve(cur, 3, 1, 'c-acc', '', 0.05) + marker(w, cur(w), 3, 1),
      ) +
      `<div class="w-bars">${bar('코일 X<sub>L</sub>', xl, 'up')}${bar('축전기 X<sub>C</sub>', xc, 'down')}${bar('임피던스 Z', z, 'same')}</div>
<p class="w-read"><b>ω = ${fmt(w)}ω₀</b> · 전류: 최댓값의 <b>${fmt((1 / z) * 100, 0)}%</b><br>${state}</p>`;
  };
  el.append(
    view,
    slider('전원의 진동수 ω', 0.2, 3, 0.02, w, (v) => {
      w = v;
      draw();
    }),
  );
  draw();
};

const registry: Record<string, Init> = {
  'sphere-field': sphereField,
  dielectric,
  lenz,
  transient,
  'right-hand': rightHand,
  resonance,
};

export function initWidgets(scope: ParentNode = document) {
  scope.querySelectorAll<HTMLElement>('[data-widget]').forEach((fig) => {
    const body = fig.querySelector<HTMLElement>('.widget-body');
    const init = registry[fig.dataset.widget ?? ''];
    if (!body || !init || body.childElementCount) return;
    try {
      init(body);
    } catch (e) {
      body.textContent = '위젯을 불러오지 못했습니다.';
      console.error(e);
    }
  });
}
