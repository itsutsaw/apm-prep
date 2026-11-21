/* APM Prep: app logic. All content comes from data/content.js (window.APM_CONTENT). */
(function () {
  'use strict';

  var C = window.APM_CONTENT;
  var STORE_KEY = 'apmPrep.v1';
  var main = document.getElementById('main');

  /* ================= Storage (every read/write wrapped in try/catch) ================= */
  var memoryFallback = null;
  var storageOK = true;

  function defaultState() {
    return {
      version: 1,
      settings: { interviewDate: C.meta.defaultInterviewDate, theme: null, chime: true },
      plan: {},          // taskId -> true
      practised: {},     // questionId -> ISO date
      qnotes: {},        // questionId -> text
      sessions: [],      // timed practice sessions
      mocks: [],         // mock interviews
      teardowns: [],     // teardown entries
      story: {},         // storyId -> text
      links: {},         // editable resource links
      dayOf: {}          // index -> true
    };
  }

  function loadState() {
    var raw = null;
    try {
      raw = window.localStorage.getItem(STORE_KEY);
    } catch (e) {
      storageOK = false;
      raw = memoryFallback;
    }
    var s = defaultState();
    if (raw) {
      try {
        var parsed = JSON.parse(raw);
        s = mergeState(s, parsed);
      } catch (e) { /* corrupt data: keep defaults */ }
    }
    return s;
  }

  function mergeState(base, incoming) {
    if (!incoming || typeof incoming !== 'object') return base;
    Object.keys(base).forEach(function (k) {
      if (!(k in incoming)) return;
      var b = base[k], v = incoming[k];
      if (Array.isArray(b)) { if (Array.isArray(v)) base[k] = v; }
      else if (b && typeof b === 'object') { if (v && typeof v === 'object' && !Array.isArray(v)) base[k] = Object.assign({}, b, v); }
      else base[k] = v;
    });
    return base;
  }

  var state = loadState();

  function save() {
    var json = JSON.stringify(state);
    try {
      window.localStorage.setItem(STORE_KEY, json);
      return true;
    } catch (e) {
      storageOK = false;
      memoryFallback = json;
      toast('Could not save to this browser (storage blocked or full). Use Export to back up.');
      return false;
    }
  }

  /* ================= Helpers ================= */
  function esc(str) {
    return String(str == null ? '' : str).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function todayISO() { var d = new Date(); return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }
  function parseISO(iso) { var p = iso.split('-'); return new Date(+p[0], +p[1] - 1, +p[2]); }
  function fmtDate(iso, opts) {
    return parseISO(iso).toLocaleDateString('en-IN', opts || { weekday: 'short', day: 'numeric', month: 'short' });
  }
  function daysBetween(aISO, bISO) { return Math.round((parseISO(bISO) - parseISO(aISO)) / 86400000); }
  function catName(id) { var c = C.categories.find(function (x) { return x.id === id; }); return c ? c.name : id; }
  function qById(id) { return C.questions.find(function (q) { return q.id === id; }); }
  function taskId(dayIdx, tIdx) { return C.plan[dayIdx].date + '#' + tIdx; }
  function uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 7); }
  function diffBadge(d) { return '<span class="badge badge-' + d.toLowerCase() + '">' + esc(d) + '</span>'; }
  function isSafeUrl(u) { return /^https?:\/\/[^\s<>"]+$/i.test(String(u || '').trim()); }
  function ytSearch(title) { return 'https://www.youtube.com/results?search_query=' + encodeURIComponent(title); }

  var toastTimer;
  function toast(msg) {
    var t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove('show'); }, 2600);
  }

  function debounce(fn, ms) {
    var t;
    return function () { var a = arguments, self = this; clearTimeout(t); t = setTimeout(function () { fn.apply(self, a); }, ms); };
  }

  /* ================= Navigation ================= */
  var NAV = [
    { group: 'Start' },
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'overview', label: 'Interview overview' },
    { id: 'framework', label: 'Answer framework' },
    { group: 'Skills' },
    { id: 'vision', label: 'Product Vision' },
    { id: 'problem', label: 'Problem Space' },
    { id: 'strategy', label: 'Strategic Insight' },
    { group: 'Practise' },
    { id: 'plan', label: 'Day-by-day plan' },
    { id: 'questions', label: 'Question bank' },
    { id: 'practice', label: 'Practice mode' },
    { id: 'mock', label: 'Mock interview kit' },
    { id: 'teardown', label: 'Teardown log' },
    { group: 'Prepare' },
    { id: 'products', label: 'Google & India' },
    { id: 'story', label: 'My story' },
    { id: 'dayof', label: 'Day-of checklist' },
    { id: 'resources', label: 'Resources' },
    { id: 'settings', label: 'Settings & backup' }
  ];

  function renderNav() {
    $('#navList').innerHTML = NAV.map(function (n) {
      if (n.group) return '<li class="nav-group" aria-hidden="true">' + esc(n.group) + '</li>';
      return '<li><a href="#/' + n.id + '" data-route="' + n.id + '">' + esc(n.label) + '</a></li>';
    }).join('');
  }

  var sidebar = $('#sidebar'), menuBtn = $('#menuBtn'), scrim = $('#scrim');
  function setMenu(open) {
    sidebar.classList.toggle('open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    scrim.hidden = !open;
    if (open) { var a = $('a', sidebar); if (a) a.focus(); }
  }
  menuBtn.addEventListener('click', function () { setMenu(!sidebar.classList.contains('open')); });
  scrim.addEventListener('click', function () { setMenu(false); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && sidebar.classList.contains('open')) { setMenu(false); menuBtn.focus(); }
  });

  /* ================= Theme ================= */
  var themeBtn = $('#themeBtn');
  function applyTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    themeBtn.setAttribute('aria-label', t === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  }
  themeBtn.addEventListener('click', function () {
    var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    state.settings.theme = next; save(); applyTheme(next);
  });
  applyTheme(document.documentElement.getAttribute('data-theme') || 'light');

  /* ================= Router ================= */
  function parseHash() {
    var h = location.hash.replace(/^#\/?/, '');
    var parts = h.split('?');
    var params = {};
    (parts[1] || '').split('&').forEach(function (kv) {
      if (!kv) return; var p = kv.split('='); params[decodeURIComponent(p[0])] = decodeURIComponent(p[1] || '');
    });
    return { route: parts[0] || 'dashboard', params: params };
  }

  var cleanup = null;
  function router() {
    if (cleanup) { try { cleanup(); } catch (e) {} cleanup = null; }
    var r = parseHash();
    var page = PAGES[r.route] || PAGES.dashboard;
    if (!PAGES[r.route]) r.route = 'dashboard';
    main.className = 'main page-' + r.route;
    main.innerHTML = '';
    cleanup = page(r.params) || null;
    $all('#navList a').forEach(function (a) {
      if (a.dataset.route === r.route) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });
    var navItem = NAV.find(function (n) { return n.id === r.route; });
    document.title = (navItem ? navItem.label + ' · ' : '') + 'APM Prep';
    setMenu(false);
    if (!r.params.id) { window.scrollTo(0, 0); }
    main.focus({ preventScroll: true });
    updateTopCountdown();
  }
  window.addEventListener('hashchange', router);

  function head(title, sub) {
    return '<header class="page-head"><h1>' + esc(title) + '</h1>' + (sub ? '<p>' + sub + '</p>' : '') + '</header>';
  }

  /* ================= Countdown ================= */
  function daysLeft() { return daysBetween(todayISO(), state.settings.interviewDate); }
  function updateTopCountdown() {
    var d = daysLeft(), el = $('#topCountdown');
    el.textContent = d > 1 ? d + ' days to go' : d === 1 ? 'Interview tomorrow' : d === 0 ? 'Interview today' : 'Interview done';
  }

  /* ================= Plan helpers ================= */
  function planTotals() {
    var total = 0, done = 0;
    C.plan.forEach(function (day, di) {
      day.tasks.forEach(function (t, ti) { total++; if (state.plan[taskId(di, ti)]) done++; });
    });
    return { total: total, done: done };
  }
  function taskCheckbox(di, ti) {
    var id = taskId(di, ti), checked = !!state.plan[id], text = C.plan[di].tasks[ti];
    return '<label class="check' + (checked ? ' done' : '') + '"><input type="checkbox" data-task="' + esc(id) + '"' + (checked ? ' checked' : '') + '><span>' + esc(text) + '</span></label>';
  }
  function bindTaskBoxes(root, onChange) {
    $all('input[data-task]', root).forEach(function (cb) {
      cb.addEventListener('change', function () {
        if (cb.checked) state.plan[cb.dataset.task] = true; else delete state.plan[cb.dataset.task];
        save();
        cb.closest('.check').classList.toggle('done', cb.checked);
        if (onChange) onChange();
      });
    });
  }
  function progressBar(label, done, total) {
    var pct = total ? Math.min(100, Math.round(done / total * 100)) : 0;
    return '<div class="stat"><span>' + esc(label) + '</span><strong>' + done + ' / ' + total + '</strong></div>' +
      '<div class="progress" role="progressbar" aria-label="' + esc(label) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + pct + '"><div style="width:' + pct + '%"></div></div>';
  }
  function casesPractised() { return Object.keys(state.practised).length + state.sessions.filter(function (s) { return !s.qid || !state.practised[s.qid]; }).length; }

  /* ================= Pages ================= */
  var PAGES = {};

  /* ---------- Dashboard ---------- */
  PAGES.dashboard = function () {
    var today = todayISO();
    var idx = C.plan.findIndex(function (d) { return d.date === today; });
    var label = 'Today';
    if (idx === -1) {
      idx = C.plan.findIndex(function (d) { return d.date > today; });
      label = idx === -1 ? 'Plan complete' : 'Next up';
    }
    var d = daysLeft();
    var dateNice = fmtDate(state.settings.interviewDate, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

    var todayHtml;
    if (idx === -1) {
      todayHtml = '<p>The plan dates have passed. Keep practising with the Question bank and Practice mode.</p>';
    } else {
      var day = C.plan[idx];
      todayHtml = '<p class="muted small">' + esc(fmtDate(day.date, { weekday: 'long', day: 'numeric', month: 'long' })) + '</p>' +
        (day.busy ? '<div class="today-busy">' + esc(day.busy) + '</div>' : '') +
        (day.tasks.length ? day.tasks.map(function (_, ti) { return taskCheckbox(idx, ti); }).join('') : '<p>No tasks. Rest and recharge.</p>');
    }

    var pt = planTotals();
    main.innerHTML = head('Dashboard', 'Hi Utsaw. Follow the plan one day at a time; everything you tick, write and score is saved in this browser.') +
      '<div class="grid grid-2">' +
        '<section class="card" aria-labelledby="cd-h"><h2 id="cd-h">Countdown</h2>' +
          '<div class="countdown"><span class="big">' + Math.max(d, 0) + '</span><span>' + (d === 1 ? 'day' : 'days') + ' to your interview</span></div>' +
          '<p class="muted small" style="margin-top:8px">' + esc(dateNice) + ' · <a href="#/settings">change date</a></p></section>' +
        '<section class="card" aria-labelledby="td-h"><h2 id="td-h">' + label + '</h2><div id="todayTasks">' + todayHtml + '</div>' +
          '<p class="small" style="margin-top:8px"><a href="#/plan">See the full plan →</a></p></section>' +
      '</div>' +
      '<section class="card" aria-labelledby="pr-h" style="margin-top:16px"><h2 id="pr-h">Progress</h2>' +
        '<div class="grid grid-3" id="progressBars"></div></section>' +
      '<section class="card" aria-labelledby="qa-h"><h2 id="qa-h">Quick actions</h2><div class="btn-row">' +
        '<a class="btn btn-primary" href="#/practice?random=1">Start a timed case</a>' +
        '<a class="btn" href="#/mock">Log a mock</a>' +
        '<a class="btn" href="#/teardown">Today\'s teardown</a>' +
      '</div></section>' +
      (storageOK ? '' : '<div class="callout warn">This browser is blocking local storage, so progress will be lost on reload. Use Export in Settings to keep a backup.</div>');

    function renderBars() {
      var p = planTotals();
      $('#progressBars').innerHTML =
        '<div>' + progressBar('Plan tasks done', p.done, p.total) + '</div>' +
        '<div>' + progressBar('Cases practised', casesPractised(), C.meta.caseTarget) + '</div>' +
        '<div>' + progressBar('Mock interviews done', state.mocks.length, C.meta.mockTarget) + '</div>';
    }
    renderBars();
    bindTaskBoxes(main, renderBars);
  };

  /* ---------- Overview ---------- */
  PAGES.overview = function () {
    var o = C.overview;
    main.innerHTML = head('Interview overview', 'Round one: a 45-minute video interview with a Google Product Manager.') +
      '<h2>Format</h2><div class="grid grid-3">' + o.format.map(function (f) {
        return '<div class="card"><span class="badge">' + esc(f.time) + '</span><h3 style="margin-top:8px">' + esc(f.title) + '</h3><p>' + esc(f.body) + '</p></div>';
      }).join('') + '</div>' +
      '<h2>The three assessed skills</h2>' + o.skills.map(function (s) {
        return '<div class="card"><h3>' + esc(s.name) + '</h3><p><strong>' + esc(s.plain) + '</strong></p><p>' + esc(s.detail) + '</p><p class="small"><a href="#/' + s.page + '">Go to the ' + esc(s.name) + ' module →</a></p></div>';
      }).join('') +
      '<h2>Hiring timeline after round one</h2><div class="card"><ol>' + o.timeline.map(function (t) {
        return '<li><strong>' + esc(t.step) + ':</strong> ' + esc(t.detail) + '</li>';
      }).join('') + '</ol></div>' +
      '<h2>Questions candidates have reported</h2><div class="card"><ul>' + o.reported.map(function (r) {
        return '<li>' + esc(r.q) + ' <a class="small" href="#/questions?id=' + r.id + '">hints &amp; outline</a> · <a class="small" href="#/practice?q=' + r.id + '">practise</a></li>';
      }).join('') + '</ul></div>';
  };

  /* ---------- Framework ---------- */
  PAGES.framework = function () {
    var F = C.framework, total = 35;
    var bar = '<div class="timeline-bar" role="img" aria-label="35-minute timeline split into seven steps">' + F.steps.map(function (s, i) {
      return '<div class="seg seg-' + i + '" style="flex:' + (s.end - s.start) + '" title="' + esc(s.name) + '">' + esc(s.name) + '</div>';
    }).join('') + '</div><div class="timeline-scale"><span>0 min</span><span>12</span><span>26</span><span>35 min</span></div>';

    var steps = '<ol class="steps">' + F.steps.map(function (s, i) {
      return '<li class="step"><div class="step-time seg-' + i + '">' + s.start + '–' + s.end + '<br>min</div><div class="card">' +
        '<h3>' + esc(s.name) + '</h3><p>' + esc(s.what) + '</p><ul>' + s.tips.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ul>' +
        '<p class="say">' + esc(s.say) + '</p></div></li>';
    }).join('') + '</ol>';

    var cheat = '<section class="card cheatsheet" aria-labelledby="cs-h"><h2 id="cs-h">Cheat sheet: 35-minute product case</h2>' +
      '<div class="table-wrap"><table><thead><tr><th scope="col">Time</th><th scope="col">Step</th><th scope="col">What to do</th></tr></thead><tbody>' +
      F.steps.map(function (s) { return '<tr><td>' + s.start + '–' + s.end + ' min</td><td><strong>' + esc(s.name) + '</strong></td><td>' + esc(s.what) + '</td></tr>'; }).join('') +
      '</tbody></table></div>' +
      '<div class="cs-extra">' +
        '<div><h3>Strategic Insight (any time)</h3><p class="small">' + esc(F.strategicNote) + '</p></div>' +
        '<div><h3>Self-check</h3><ul class="small">' + C.mock.checklist.map(function (c) { return '<li>' + esc(c.text) + '</li>'; }).join('') + '</ul></div>' +
        '<div><h3>Google\'s advantages</h3><p class="small">' + C.googleAdvantages.map(function (a) { return esc(a.name); }).join(' · ') + '</p></div>' +
        '<div><h3>Pain-point ranking</h3><p class="small">Frequency × Severity × Gap in current solutions. Say the top 1–2 out loud.</p></div>' +
      '</div>' +
      '<div class="btn-row no-print"><button class="btn" id="printBtn" type="button">Print cheat sheet</button></div></section>';

    var ex = F.example;
    var example = '<h2>Worked example</h2><div class="card"><p class="q-current">“' + esc(ex.prompt) + '”</p>' +
      ex.sections.map(function (s) { return '<div class="example-step"><h3>' + esc(s.step) + '</h3><p>' + s.html + '</p></div>'; }).join('') + '</div>';

    main.innerHTML = head('Answer framework', 'The core structure for a 35-minute product case. Learn it until it feels natural, then adapt it to the question.') +
      '<div class="card">' + bar + '<div class="callout">' + esc(F.strategicNote) + '</div></div>' +
      cheat + '<h2>Step by step</h2>' + steps + example;
    $('#printBtn').addEventListener('click', function () { window.print(); });
  };

  /* ---------- Skill pages ---------- */
  function skillPage(id) {
    return function () {
      var s = C.skills.find(function (x) { return x.id === id; });
      var li = function (arr) { return '<ul>' + arr.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul>'; };
      main.innerHTML = head(s.title, '') +
        '<div class="card"><h2>What it is</h2><p>' + esc(s.what) + '</p></div>' +
        '<h2>What interviewers look for</h2><div class="grid grid-2">' +
          '<div class="card"><h3 style="color:var(--green)">Strong answer</h3>' + li(s.strong) + '</div>' +
          '<div class="card"><h3 style="color:var(--red)">Weak answer</h3>' + li(s.weak) + '</div></div>' +
        '<h2>Step-by-step approach</h2><div class="card"><ol>' + s.approach.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ol></div>' +
        '<h2>Mini-frameworks</h2>' + s.frameworks.map(function (f, i) {
          return '<details' + (i === 0 ? ' open' : '') + '><summary>' + esc(f.name) + '</summary><p>' + f.html + '</p></details>';
        }).join('') +
        '<details><summary>Google\'s advantages: full list</summary><ul>' + C.googleAdvantages.map(function (a) {
          return '<li><strong>' + esc(a.name) + ':</strong> ' + esc(a.body) + '</li>';
        }).join('') + '</ul></details>' +
        '<h2>Common mistakes</h2><div class="card">' + li(s.mistakes) + '</div>' +
        '<h2>Practice questions</h2><div class="card"><ul>' + s.practice.map(function (qid) {
          var q = qById(qid); if (!q) return '';
          return '<li>' + esc(q.q) + ' ' + diffBadge(q.diff) + ' <a class="small" href="#/questions?id=' + q.id + '">open in bank</a> · <a class="small" href="#/practice?q=' + q.id + '">practise</a></li>';
        }).join('') + '</ul></div>';
    };
  }
  PAGES.vision = skillPage('vision');
  PAGES.problem = skillPage('problem');
  PAGES.strategy = skillPage('strategy');

  /* ---------- Plan ---------- */
  PAGES.plan = function () {
    var today = todayISO();
    main.innerHTML = head('Day-by-day plan', 'Tick tasks as you finish them. Light days are planned around your campus interview (Nov 25), MTP (Nov 30) and Dec 3.') +
      '<div class="card" id="planProgress"></div>' +
      C.plan.map(function (day, di) {
        var isToday = day.date === today;
        return '<section class="card" ' + (isToday ? 'style="border-color:var(--primary);border-width:2px" ' : '') + 'aria-labelledby="pd-' + di + '">' +
          '<h3 id="pd-' + di + '">' + esc(fmtDate(day.date)) + (isToday ? ' <span class="badge badge-done">Today</span>' : '') + '</h3>' +
          (day.busy ? '<div class="today-busy">' + esc(day.busy) + '</div>' : '') +
          (day.tasks.length ? day.tasks.map(function (_, ti) { return taskCheckbox(di, ti); }).join('') : '<p class="muted">Day off. No tasks.</p>') +
          '</section>';
      }).join('');
    function upd() { var p = planTotals(); $('#planProgress').innerHTML = progressBar('Plan tasks done', p.done, p.total); }
    upd();
    bindTaskBoxes(main, upd);
    var t = main.querySelector('.badge-done');
    if (t) setTimeout(function () { t.closest('section').scrollIntoView({ block: 'start' }); }, 0);
  };

  /* ---------- Question bank ---------- */
  function outlineHtml(q) {
    if (!q.outline) return '';
    return '<h4>Sample answer outline</h4><dl class="outline">' + q.outline.map(function (o) {
      return '<dt>' + esc(o[0]) + '</dt><dd>' + esc(o[1]) + '</dd>';
    }).join('') + '</dl>';
  }

  PAGES.questions = function (params) {
    var f = { cat: params.cat || '', diff: '', text: '', status: '' };
    main.innerHTML = head('Question bank', C.questions.length + ' original practice questions. Open one to see hints, a sample outline (where available) and your notes.') +
      '<div class="card"><div class="filters">' +
        '<div class="f-search"><label for="qSearch">Search</label><input id="qSearch" type="search" placeholder="e.g. Maps, UPI, kids"></div>' +
        '<div><label for="qCat">Category</label><select id="qCat"><option value="">All</option>' + C.categories.map(function (c) { return '<option value="' + c.id + '">' + esc(c.name) + '</option>'; }).join('') + '</select></div>' +
        '<div><label for="qDiff">Difficulty</label><select id="qDiff"><option value="">All</option>' + C.difficulties.map(function (d) { return '<option>' + d + '</option>'; }).join('') + '</select></div>' +
        '<div><label for="qStatus">Status</label><select id="qStatus"><option value="">All</option><option value="todo">Not practised</option><option value="done">Practised</option><option value="outline">Has sample outline</option></select></div>' +
      '</div><div class="btn-row" style="margin-top:12px"><button class="btn" id="qRandom" type="button">Random question</button><span id="qCount" class="muted small" style="align-self:center" aria-live="polite"></span></div></div>' +
      '<div id="qList"></div>';
    $('#qCat').value = f.cat;

    function matches(q) {
      if (f.cat && q.cat !== f.cat) return false;
      if (f.diff && q.diff !== f.diff) return false;
      if (f.status === 'todo' && state.practised[q.id]) return false;
      if (f.status === 'done' && !state.practised[q.id]) return false;
      if (f.status === 'outline' && !q.outline) return false;
      if (f.text) {
        var hay = (q.q + ' ' + q.hints.join(' ') + ' ' + catName(q.cat)).toLowerCase();
        if (hay.indexOf(f.text.toLowerCase()) === -1) return false;
      }
      return true;
    }

    function itemHtml(q) {
      var done = !!state.practised[q.id];
      return '<article class="q-item" id="item-' + q.id + '">' +
        '<div class="q-head"><button class="q-toggle" aria-expanded="false" aria-controls="body-' + q.id + '" data-q="' + q.id + '">' + esc(q.q) +
          '<span class="q-meta"><span class="badge">' + esc(catName(q.cat)) + '</span>' + diffBadge(q.diff) + (q.outline ? '<span class="badge">Outline</span>' : '') + (done ? '<span class="badge badge-done">Practised</span>' : '') + '</span></button></div>' +
        '<div class="q-body" id="body-' + q.id + '" hidden>' +
          '<h4>Hints</h4><ul>' + q.hints.map(function (h) { return '<li>' + esc(h) + '</li>'; }).join('') + '</ul>' + outlineHtml(q) +
          '<label class="check"><input type="checkbox" data-practised="' + q.id + '"' + (done ? ' checked' : '') + '><span>Mark as practised</span></label>' +
          '<div class="field"><label for="note-' + q.id + '">My notes</label><textarea id="note-' + q.id + '" data-note="' + q.id + '" placeholder="What went well, what to fix, key ideas…">' + esc(state.qnotes[q.id] || '') + '</textarea><div class="saved-ind" aria-live="polite"></div></div>' +
          '<div class="btn-row"><a class="btn btn-primary btn-sm" href="#/practice?q=' + q.id + '">Practise with timer</a></div>' +
        '</div></article>';
    }

    function openItem(id, scroll) {
      var btn = $('button[data-q="' + id + '"]'); if (!btn) return;
      btn.setAttribute('aria-expanded', 'true');
      $('#body-' + id).hidden = false;
      if (scroll) {
        var it = $('#item-' + id);
        it.classList.add('highlight');
        it.scrollIntoView({ block: 'start' });
        btn.focus({ preventScroll: true });
        setTimeout(function () { it.classList.remove('highlight'); }, 2500);
      }
    }

    function render() {
      var list = C.questions.filter(matches);
      $('#qCount').textContent = list.length + ' of ' + C.questions.length + ' questions shown · ' + Object.keys(state.practised).length + ' practised';
      $('#qList').innerHTML = list.length ? list.map(itemHtml).join('') : '<p class="card">No questions match these filters.</p>';
      bindItems();
    }

    function bindItems() {
      $all('button.q-toggle').forEach(function (b) {
        b.addEventListener('click', function () {
          var open = b.getAttribute('aria-expanded') === 'true';
          b.setAttribute('aria-expanded', String(!open));
          $('#body-' + b.dataset.q).hidden = open;
        });
      });
      $all('input[data-practised]').forEach(function (cb) {
        cb.addEventListener('change', function () {
          var id = cb.dataset.practised;
          if (cb.checked) state.practised[id] = todayISO(); else delete state.practised[id];
          save();
          var meta = $('#item-' + id + ' .q-meta');
          var badge = meta.querySelector('.badge-done');
          if (cb.checked && !badge) meta.insertAdjacentHTML('beforeend', '<span class="badge badge-done">Practised</span>');
          if (!cb.checked && badge) badge.remove();
          $('#qCount').textContent = $all('.q-item').length + ' of ' + C.questions.length + ' questions shown · ' + Object.keys(state.practised).length + ' practised';
        });
      });
      $all('textarea[data-note]').forEach(function (ta) {
        var ind = ta.parentNode.querySelector('.saved-ind');
        var persist = debounce(function () {
          var v = ta.value;
          if (v.trim()) state.qnotes[ta.dataset.note] = v; else delete state.qnotes[ta.dataset.note];
          if (save()) ind.textContent = 'Saved';
        }, 400);
        ta.addEventListener('input', function () { ind.textContent = ''; persist(); });
      });
    }

    $('#qSearch').addEventListener('input', debounce(function (e) { f.text = e.target.value.trim(); render(); }, 150));
    $('#qCat').addEventListener('change', function (e) { f.cat = e.target.value; render(); });
    $('#qDiff').addEventListener('change', function (e) { f.diff = e.target.value; render(); });
    $('#qStatus').addEventListener('change', function (e) { f.status = e.target.value; render(); });
    $('#qRandom').addEventListener('click', function () {
      var pool = C.questions.filter(matches);
      if (!pool.length) { toast('No questions match the filters.'); return; }
      var q = pool[Math.floor(Math.random() * pool.length)];
      openItem(q.id, true);
    });

    render();
    if (params.id) {
      if (!$('#item-' + params.id)) { f = { cat: '', diff: '', text: '', status: '' }; $('#qCat').value = ''; render(); }
      setTimeout(function () { openItem(params.id, true); }, 0);
    }
  };

  /* ---------- Chime (soft, generated, works offline) ---------- */
  var audioCtx = null;
  function chime() {
    try {
      var Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return;
      audioCtx = audioCtx || new Ctx();
      var now = audioCtx.currentTime;
      [660, 880].forEach(function (freq, i) {
        var o = audioCtx.createOscillator(), g = audioCtx.createGain();
        o.type = 'sine'; o.frequency.value = freq;
        g.gain.setValueAtTime(0.0001, now + i * 0.18);
        g.gain.exponentialRampToValueAtTime(0.12, now + i * 0.18 + 0.03);
        g.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.18 + 0.6);
        o.connect(g); g.connect(audioCtx.destination);
        o.start(now + i * 0.18); o.stop(now + i * 0.18 + 0.65);
      });
    } catch (e) { /* audio not available */ }
  }

  /* ---------- Self-review checklist (shared by Practice and Mock) ---------- */
  function checklistHtml(prefix) {
    return C.mock.checklist.map(function (c) {
      return '<label class="check"><input type="checkbox" name="' + prefix + '-' + c.id + '" data-check="' + c.id + '"><span>' + esc(c.text) + '</span></label>';
    }).join('');
  }
  function readChecklist(root) {
    var out = {};
    $all('input[data-check]', root).forEach(function (cb) { out[cb.dataset.check] = cb.checked; });
    return out;
  }

  /* ---------- Practice mode ---------- */
  var TOTAL_SEC = 35 * 60;
  var timer = { running: false, startedAt: 0, elapsedBefore: 0, interval: null, lastPhase: -1, ended: false };

  function timerElapsed() {
    return Math.min(TOTAL_SEC, timer.elapsedBefore + (timer.running ? (Date.now() - timer.startedAt) / 1000 : 0));
  }
  function phaseAt(sec) {
    var steps = C.framework.steps;
    for (var i = 0; i < steps.length; i++) if (sec < steps[i].end * 60) return i;
    return steps.length - 1;
  }
  function mmss(sec) { sec = Math.max(0, Math.round(sec)); return pad(Math.floor(sec / 60)) + ':' + pad(sec % 60); }

  PAGES.practice = function (params) {
    var steps = C.framework.steps;
    var current = params.q ? qById(params.q) : null;
    if (!current && params.random) current = C.questions[Math.floor(Math.random() * C.questions.length)];

    timer = { running: false, startedAt: 0, elapsedBefore: 0, interval: null, lastPhase: -1, ended: false };

    main.innerHTML = head('Practice mode', 'Pick a question, start the 35-minute timer, and talk out loud as if the interviewer were listening. Record yourself if you can.') +
      '<div class="card"><label for="pqSelect">Question</label><select id="pqSelect"><option value="">Choose a question…</option>' +
        C.categories.map(function (c) {
          return '<optgroup label="' + esc(c.name) + '">' + C.questions.filter(function (q) { return q.cat === c.id; }).map(function (q) {
            return '<option value="' + q.id + '">' + esc(q.q) + '</option>';
          }).join('') + '</optgroup>';
        }).join('') + '</select>' +
        '<div class="btn-row" style="margin-top:10px"><button class="btn" id="pqRandom" type="button">Random question</button></div>' +
        '<div id="pqShow" style="margin-top:8px"></div></div>' +
      '<div class="card" aria-labelledby="tm-h"><h2 id="tm-h" class="sr-only">Timer</h2>' +
        '<div class="timer-display" id="tDisplay" aria-hidden="true">00:00</div>' +
        '<div class="timer-sub" id="tSub">35:00 remaining</div>' +
        '<div class="phase-track" id="tTrack" aria-hidden="true">' + steps.map(function (s, i) {
          return '<div class="seg seg-' + i + '" style="flex:' + (s.end - s.start) + '"></div>';
        }).join('') + '<div class="phase-cursor" id="tCursor" style="left:0"></div></div>' +
        '<div class="current-phase-box" id="tPhaseBox" aria-live="polite"></div>' +
        '<div class="btn-row" style="margin-top:12px">' +
          '<button class="btn btn-primary" id="tStart" type="button">Start</button>' +
          '<button class="btn" id="tReset" type="button">Reset</button>' +
          '<button class="btn" id="tFinish" type="button">Finish early &amp; review</button>' +
        '</div>' +
        '<label class="check"><input type="checkbox" id="tChime"' + (state.settings.chime ? ' checked' : '') + '><span>Soft chime at each phase change</span></label>' +
        '<ol class="phase-list" id="tPhases">' + steps.map(function (s, i) {
          return '<li data-phase="' + i + '"><span class="pt">' + s.start + '–' + s.end + ' min</span><span><span class="pn"><strong>' + esc(s.name) + '</strong></span><br><span class="small muted">' + esc(s.what) + '</span></span></li>';
        }).join('') + '</ol></div>' +
      '<section class="card" id="reviewCard" hidden aria-labelledby="rv-h"><h2 id="rv-h" tabindex="-1">Self-review</h2>' +
        '<p class="muted">Be honest; this is how you find your weakest step.</p>' + checklistHtml('pr') +
        '<div class="field" style="margin-top:10px"><label for="rvNotes">What would you do differently?</label><textarea id="rvNotes"></textarea></div>' +
        '<div class="btn-row"><button class="btn btn-primary" id="rvSave" type="button">Save session</button></div></section>' +
      '<section class="card" aria-labelledby="ps-h"><h2 id="ps-h">Recent practice sessions</h2><div id="sessList"></div></section>';

    var sel = $('#pqSelect');
    function showQ() {
      if (!current) { $('#pqShow').innerHTML = '<p class="muted small">No question selected. You can still run the timer.</p>'; return; }
      sel.value = current.id;
      $('#pqShow').innerHTML = '<p class="q-current">' + esc(current.q) + '</p><div class="q-meta"><span class="badge">' + esc(catName(current.cat)) + '</span>' + diffBadge(current.diff) + '</div>' +
        '<details style="margin-top:10px"><summary>Hints (peek only if stuck)</summary><ul>' + current.hints.map(function (h) { return '<li>' + esc(h) + '</li>'; }).join('') + '</ul></details>';
    }
    sel.addEventListener('change', function () { current = qById(sel.value) || null; showQ(); });
    $('#pqRandom').addEventListener('click', function () { current = C.questions[Math.floor(Math.random() * C.questions.length)]; showQ(); });
    showQ();

    $('#tChime').addEventListener('change', function (e) { state.settings.chime = e.target.checked; save(); });

    function draw() {
      var el = timerElapsed(), ph = phaseAt(el);
      $('#tDisplay').textContent = mmss(el);
      $('#tSub').textContent = mmss(TOTAL_SEC - el) + ' remaining';
      $('#tCursor').style.left = (el / TOTAL_SEC * 100) + '%';
      $all('#tTrack .seg').forEach(function (s, i) { s.classList.toggle('past', i < ph); s.classList.toggle('current', i === ph && (timer.running || el > 0)); });
      $all('#tPhases li').forEach(function (li, i) {
        var started = timer.running || el > 0;
        li.classList.toggle('past', started && i < ph);
        li.classList.toggle('current', started && i === ph);
        if (started && i === ph) li.setAttribute('aria-current', 'step'); else li.removeAttribute('aria-current');
      });
      var s = steps[ph];
      var phaseLeft = s.end * 60 - el;
      $('#tPhaseBox').innerHTML = (timer.running || el > 0)
        ? 'Now: <strong>' + esc(s.name) + '</strong> · ' + mmss(phaseLeft) + ' left in this step<br><span class="small">' + esc(s.what) + '</span>'
        : 'Press <strong>Start</strong> when you begin speaking. First step: <strong>' + esc(steps[0].name) + '</strong>.';
      if (timer.running && timer.lastPhase !== -1 && ph !== timer.lastPhase && state.settings.chime) chime();
      if (timer.running) timer.lastPhase = ph;
      if (el >= TOTAL_SEC && !timer.ended) endTimer(true);
    }

    function tick() { draw(); }
    function start() {
      if (timer.ended) reset();
      timer.running = true; timer.startedAt = Date.now();
      if (timer.lastPhase === -1) timer.lastPhase = phaseAt(timer.elapsedBefore);
      clearInterval(timer.interval);
      timer.interval = setInterval(tick, 250);
      $('#tStart').textContent = 'Pause';
      draw();
    }
    function pause() {
      timer.elapsedBefore = timerElapsed(); timer.running = false;
      clearInterval(timer.interval);
      $('#tStart').textContent = 'Resume';
      draw();
    }
    function reset() {
      clearInterval(timer.interval);
      timer.running = false; timer.elapsedBefore = 0; timer.lastPhase = -1; timer.ended = false;
      $('#tStart').textContent = 'Start';
      $('#reviewCard').hidden = true;
      draw();
    }
    function endTimer(natural) {
      timer.elapsedBefore = timerElapsed(); timer.running = false; timer.ended = true;
      clearInterval(timer.interval);
      $('#tStart').textContent = 'Start again';
      if (natural && state.settings.chime) chime();
      var rc = $('#reviewCard');
      rc.hidden = false;
      $all('input[data-check]', rc).forEach(function (cb) { cb.checked = false; });
      $('#rvNotes').value = '';
      rc.scrollIntoView({ block: 'start' });
      $('#rv-h').focus({ preventScroll: true });
      if (natural) toast('Time! Fill in the self-review.');
      draw();
    }

    $('#tStart').addEventListener('click', function () {
      // Unlock audio on first user gesture.
      if (state.settings.chime) { try { var Ctx = window.AudioContext || window.webkitAudioContext; if (Ctx) { audioCtx = audioCtx || new Ctx(); audioCtx.resume && audioCtx.resume(); } } catch (e) {} }
      if (timer.running) pause(); else start();
    });
    $('#tReset').addEventListener('click', reset);
    $('#tFinish').addEventListener('click', function () { endTimer(false); });

    $('#rvSave').addEventListener('click', function () {
      var entry = { id: uid(), date: todayISO(), qid: current ? current.id : '', question: current ? current.q : '(no question selected)', minutes: Math.round(timerElapsed() / 60), checklist: readChecklist($('#reviewCard')), notes: $('#rvNotes').value };
      state.sessions.unshift(entry);
      if (current) state.practised[current.id] = state.practised[current.id] || todayISO();
      save();
      toast('Session saved' + (current ? ' and question marked as practised' : '') + '.');
      $('#reviewCard').hidden = true;
      renderSessions();
    });

    function renderSessions() {
      var list = state.sessions.slice(0, 10);
      $('#sessList').innerHTML = list.length ? '<div class="table-wrap"><table><thead><tr><th>Date</th><th>Question</th><th>Min</th><th>Checklist</th></tr></thead><tbody>' +
        list.map(function (s) {
          var n = Object.keys(s.checklist || {}).filter(function (k) { return s.checklist[k]; }).length;
          return '<tr><td>' + esc(fmtDate(s.date)) + '</td><td>' + esc(s.question) + (s.notes ? '<br><span class="small muted">' + esc(s.notes) + '</span>' : '') + '</td><td>' + esc(s.minutes) + '</td><td>' + n + '/' + C.mock.checklist.length + '</td></tr>';
        }).join('') + '</tbody></table></div>' : '<p class="muted">No sessions yet.</p>';
    }
    renderSessions();
    draw();

    // Exposed for debugging/testing only.
    window.APMApp.timer = { state: timer, skip: function (sec) { if (timer.running) timer.startedAt -= sec * 1000; else timer.elapsedBefore += sec; draw(); } };

    return function () { clearInterval(timer.interval); timer.running = false; };
  };

  /* ---------- Mock interview kit ---------- */
  PAGES.mock = function () {
    var M = C.mock;
    main.innerHTML = head('Mock interview kit', 'Send the partner guide to whoever runs your mock. Log every mock so you can see your trend and weakest area.') +
      '<div class="grid grid-2">' +
        '<section class="card"><h2>Guide for your mock partner</h2><ol>' + M.partnerGuide.map(function (g) { return '<li>' + g + '</li>'; }).join('') + '</ol></section>' +
        '<section class="card"><h2>Follow-up questions to ask</h2><ul>' + M.followUps.map(function (q) { return '<li>“' + esc(q) + '”</li>'; }).join('') + '</ul></section>' +
      '</div>' +
      '<section class="card" style="margin-top:16px" aria-labelledby="lm-h"><h2 id="lm-h">Log a mock</h2><form id="mockForm" novalidate>' +
        '<div class="grid grid-3">' +
          '<div class="field"><label for="mDate">Date</label><input type="date" id="mDate" value="' + todayISO() + '" required></div>' +
          '<div class="field"><label for="mQ">Question</label><input type="text" id="mQ" list="mQList" placeholder="Pick or type"><datalist id="mQList">' + C.questions.map(function (q) { return '<option value="' + esc(q.q) + '">'; }).join('') + '</datalist></div>' +
          '<div class="field"><label for="mPartner">Partner</label><input type="text" id="mPartner" placeholder="Name"></div>' +
        '</div>' +
        '<h3>Scorecard (1 = weak, 5 = exceptional)</h3>' +
        M.scorecard.map(function (s) {
          return '<div class="score-row"><span id="lbl-' + s.id + '">' + esc(s.name) + '</span><fieldset aria-labelledby="lbl-' + s.id + '">' +
            [1, 2, 3, 4, 5].map(function (n) { return '<label class="score-opt"><input type="radio" name="sc-' + s.id + '" value="' + n + '"' + (n === 3 ? ' checked' : '') + '><span>' + n + '</span><span class="sr-only"> out of 5</span></label>'; }).join('') +
            '</fieldset></div>';
        }).join('') +
        '<h3 style="margin-top:16px">Self-review checklist</h3>' + checklistHtml('mk') +
        '<div class="field" style="margin-top:10px"><label for="mFeedback">Feedback</label><textarea id="mFeedback" placeholder="Partner\'s top fix, what went well, your own reflection"></textarea></div>' +
        '<button class="btn btn-primary" type="submit">Save mock</button></form></section>' +
      '<section class="card" aria-labelledby="av-h"><h2 id="av-h">Average scores</h2><div id="mockAvg"></div></section>' +
      '<section class="card" aria-labelledby="mh-h"><h2 id="mh-h">History</h2><div id="mockHist"></div></section>';

    $('#mockForm').addEventListener('submit', function (e) {
      e.preventDefault();
      var scores = {};
      M.scorecard.forEach(function (s) { var r = $('input[name="sc-' + s.id + '"]:checked'); scores[s.id] = r ? +r.value : 3; });
      state.mocks.unshift({
        id: uid(), date: $('#mDate').value || todayISO(), question: $('#mQ').value.trim(), partner: $('#mPartner').value.trim(),
        scores: scores, checklist: readChecklist($('#mockForm')), feedback: $('#mFeedback').value
      });
      var match = C.questions.find(function (q) { return q.q === $('#mQ').value.trim(); });
      if (match) state.practised[match.id] = state.practised[match.id] || todayISO();
      save();
      e.target.reset(); $('#mDate').value = todayISO();
      toast('Mock saved.');
      renderHist();
    });

    function renderHist() {
      var mocks = state.mocks;
      if (!mocks.length) {
        $('#mockAvg').innerHTML = '<p class="muted">Log your first mock to see averages.</p>';
        $('#mockHist').innerHTML = '<p class="muted">No mocks yet.</p>';
        return;
      }
      var avgs = M.scorecard.map(function (s) {
        var sum = mocks.reduce(function (a, m) { return a + (+m.scores[s.id] || 0); }, 0);
        return { id: s.id, name: s.name, avg: sum / mocks.length };
      });
      var min = Math.min.apply(null, avgs.map(function (a) { return a.avg; }));
      var weakest = avgs.filter(function (a) { return a.avg === min; });
      $('#mockAvg').innerHTML = '<p class="small muted">Across ' + mocks.length + ' mock' + (mocks.length > 1 ? 's' : '') + '.</p>' + avgs.map(function (a) {
        var w = a.avg === min;
        return '<div class="avg-bar' + (w ? ' weakest' : '') + '"><span>' + esc(a.name) + (w ? ' (weakest)' : '') + '</span><div class="progress"><div style="width:' + (a.avg / 5 * 100) + '%"></div></div><span>' + a.avg.toFixed(1) + '</span></div>';
      }).join('') + '<div class="callout warn"><strong>Focus next:</strong> ' + weakest.map(function (w) { return esc(w.name); }).join(', ') + '. ' + weakTip(weakest[0].id) + '</div>';

      $('#mockHist').innerHTML = '<div class="table-wrap"><table><thead><tr><th>Date</th><th>Question / partner</th>' + M.scorecard.map(function (s) { return '<th title="' + esc(s.name) + '">' + esc(s.name.split(' ')[0]) + '</th>'; }).join('') + '<th><span class="sr-only">Actions</span></th></tr></thead><tbody>' +
        mocks.map(function (m) {
          return '<tr><td>' + esc(fmtDate(m.date)) + '</td><td>' + esc(m.question || '—') + '<br><span class="small muted">' + esc(m.partner || 'No partner') + '</span>' + (m.feedback ? '<br><span class="small">' + esc(m.feedback) + '</span>' : '') + '</td>' +
            M.scorecard.map(function (s) { return '<td>' + esc(m.scores[s.id]) + '</td>'; }).join('') +
            '<td><button class="btn btn-sm btn-danger" data-del="' + esc(m.id) + '" type="button" aria-label="Delete mock from ' + esc(fmtDate(m.date)) + '">Delete</button></td></tr>';
        }).join('') + '</tbody></table></div>';
      $all('button[data-del]', $('#mockHist')).forEach(function (b) {
        b.addEventListener('click', function () {
          if (!confirm('Delete this mock entry?')) return;
          state.mocks = state.mocks.filter(function (m) { return m.id !== b.dataset.del; });
          save(); renderHist();
        });
      });
    }
    function weakTip(id) {
      return {
        vision: 'Practise one bold idea per case and always describe a concrete MVP. Re-read the Product Vision module.',
        problem: 'Slow down before solutions: narrate a journey, list 4–5 pains, rank them out loud. Re-read the Problem Space module.',
        strategy: 'Add “why Google”, business model and a competitor response to every case. Re-read the Strategic Insight module.',
        structure: 'Say the structure up front and signpost each step (“Now, users…”). Print the cheat sheet.',
        time: 'Use Practice mode with chimes on and move on when the step ends, even if mid-thought.'
      }[id] || '';
    }
    renderHist();
  };

  /* ---------- Teardown ---------- */
  PAGES.teardown = function () {
    var F = C.teardownFields;
    main.innerHTML = head('Product teardown log', 'Ten minutes a day. Open an app you used today and look at it like its PM would.') +
      '<section class="card" aria-labelledby="tn-h"><h2 id="tn-h">Today\'s teardown</h2><form id="tdForm">' +
        F.map(function (f) {
          var ctl = f.type === 'textarea'
            ? '<textarea id="td-' + f.id + '" placeholder="' + esc(f.placeholder) + '"></textarea>'
            : '<input type="text" id="td-' + f.id + '" placeholder="' + esc(f.placeholder) + '"' + (f.id === 'app' ? ' required' : '') + '>';
          return '<div class="field"><label for="td-' + f.id + '">' + esc(f.label) + '</label>' + ctl + '</div>';
        }).join('') +
        '<button class="btn btn-primary" type="submit">Save teardown</button></form></section>' +
      '<section aria-labelledby="ts-h"><h2 id="ts-h">Saved entries</h2><div id="tdList"></div></section>';

    $('#tdForm').addEventListener('submit', function (e) {
      e.preventDefault();
      var entry = { id: uid(), date: todayISO() };
      F.forEach(function (f) { entry[f.id] = $('#td-' + f.id).value.trim(); });
      if (!entry.app) { toast('Add the app name first.'); $('#td-app').focus(); return; }
      state.teardowns.unshift(entry); save();
      e.target.reset(); toast('Teardown saved.'); renderList();
    });

    function renderList() {
      var list = state.teardowns;
      $('#tdList').innerHTML = list.length ? list.map(function (t) {
        return '<article class="card"><h3>' + esc(t.app) + ' <span class="badge">' + esc(fmtDate(t.date)) + '</span></h3>' +
          F.filter(function (f) { return f.id !== 'app' && t[f.id]; }).map(function (f) {
            return '<p><strong>' + esc(f.label) + ':</strong> ' + esc(t[f.id]) + '</p>';
          }).join('') +
          '<button class="btn btn-sm btn-danger" type="button" data-del="' + esc(t.id) + '" aria-label="Delete teardown of ' + esc(t.app) + '">Delete</button></article>';
      }).join('') : '<p class="card muted">No teardowns yet. Try Google Maps, Google Pay or YouTube first.</p>';
      $all('button[data-del]', $('#tdList')).forEach(function (b) {
        b.addEventListener('click', function () {
          if (!confirm('Delete this teardown?')) return;
          state.teardowns = state.teardowns.filter(function (t) { return t.id !== b.dataset.del; });
          save(); renderList();
        });
      });
    }
    renderList();
  };

  /* ---------- Products & India ---------- */
  PAGES.products = function () {
    main.innerHTML = head('Google and India product knowledge', 'Know each product\'s users and business model well enough to reason about it on the spot.') +
      '<h2>Google products</h2><div class="grid grid-2">' + C.products.map(function (p) {
        return '<article class="card product-card"><h3>' + esc(p.name) + '</h3><dl>' +
          '<dt>Core users</dt><dd>' + esc(p.users) + '</dd>' +
          '<dt>How it makes money</dt><dd>' + esc(p.money) + '</dd>' +
          '<dt>Practice prompt</dt><dd><em>' + esc(p.improve) + '</em></dd></dl></article>';
      }).join('') + '</div>' +
      '<h2>Google\'s advantages</h2><div class="card"><ul>' + C.googleAdvantages.map(function (a) { return '<li><strong>' + esc(a.name) + ':</strong> ' + esc(a.body) + '</li>'; }).join('') + '</ul></div>' +
      '<h2>India context</h2>' + C.india.map(function (s) { return '<div class="card"><h3>' + esc(s.title) + '</h3><p>' + s.html + '</p></div>'; }).join('');
  };

  /* ---------- My story ---------- */
  PAGES.story = function () {
    main.innerHTML = head('My story', 'Drafts save automatically as you type. Read them aloud: if it sounds written, rewrite it.') +
      C.story.map(function (s) {
        var val = (s.id in state.story) ? state.story[s.id] : s.prefill;
        return '<section class="card" aria-labelledby="st-' + s.id + '"><h2 id="st-' + s.id + '">' + esc(s.title) + '</h2>' +
          '<details><summary>Template</summary><p style="white-space:pre-line">' + esc(s.template) + '</p></details>' +
          '<label class="sr-only" for="sta-' + s.id + '">' + esc(s.title) + ' draft</label>' +
          '<textarea id="sta-' + s.id + '" data-story="' + s.id + '" rows="6" placeholder="Write your draft here…">' + esc(val) + '</textarea>' +
          '<div class="saved-ind" aria-live="polite"></div></section>';
      }).join('');
    $all('textarea[data-story]').forEach(function (ta) {
      var ind = ta.parentNode.querySelector('.saved-ind');
      var persist = debounce(function () { state.story[ta.dataset.story] = ta.value; if (save()) ind.textContent = 'Saved'; }, 400);
      ta.addEventListener('input', function () { ind.textContent = 'Saving…'; persist(); });
    });
  };

  /* ---------- Day-of ---------- */
  PAGES.dayof = function () {
    main.innerHTML = head('Day-of checklist', 'Run through this on the morning of the interview.') +
      '<div class="card">' + C.dayOf.map(function (t, i) {
        var c = !!state.dayOf[i];
        return '<label class="check' + (c ? ' done' : '') + '"><input type="checkbox" data-dayof="' + i + '"' + (c ? ' checked' : '') + '><span>' + esc(t) + '</span></label>';
      }).join('') + '<div class="btn-row"><button class="btn btn-sm" id="dayofReset" type="button">Untick all</button></div></div>' +
      '<div class="callout">Breathe. Clarify, structure, pick one user, rank pains, three ideas, metrics, summary. You\'ve practised this.</div>';
    $all('input[data-dayof]').forEach(function (cb) {
      cb.addEventListener('change', function () {
        if (cb.checked) state.dayOf[cb.dataset.dayof] = true; else delete state.dayOf[cb.dataset.dayof];
        save(); cb.closest('.check').classList.toggle('done', cb.checked);
      });
    });
    $('#dayofReset').addEventListener('click', function () { state.dayOf = {}; save(); router(); });
  };

  /* ---------- Resources ---------- */
  PAGES.resources = function () {
    var R = C.resources;
    function link(name, url, note) {
      return '<li><a href="' + esc(url) + '" target="_blank" rel="noopener noreferrer">' + esc(name) + '</a>' + (note ? ' <span class="muted small">· ' + esc(note) + '</span>' : '') + '<div class="url muted">' + esc(url) + '</div></li>';
    }
    main.innerHTML = head('Resources', 'Only verified links. Paste the remaining official links from your recruiter email below.') +
      '<section class="card"><h2>Official (from your recruiter email)</h2><ul class="res-list">' +
        R.official.map(function (r) { return link(r.name, r.url, r.note); }).join('') +
        R.editableLinks.map(function (r) {
          var v = state.links[r.id] || '';
          return '<li><strong>' + esc(r.name) + '</strong> <span class="muted small">· ' + esc(r.note) + '</span>' +
            '<div class="link-edit" style="margin-top:6px"><div style="flex:1"><label class="sr-only" for="lk-' + r.id + '">' + esc(r.name) + ' URL</label><input type="url" id="lk-' + r.id + '" data-link="' + r.id + '" placeholder="https://…" value="' + esc(v) + '"></div>' +
            '<button class="btn" type="button" data-savelink="' + r.id + '">Save</button></div>' +
            '<div class="small" id="lkv-' + r.id + '" style="margin-top:4px"></div></li>';
        }).join('') + '</ul></section>' +
      '<section class="card"><h2>Google Students on YouTube</h2><p class="small muted">These open a YouTube search for the exact video title.</p><ul class="res-list">' +
        R.youtube.map(function (t) { return link(t, ytSearch(t)); }).join('') + '</ul></section>' +
      '<section class="card"><h2>Third-party guides</h2><ul class="res-list">' + R.guides.map(function (g) { return link(g.name, g.url); }).join('') + '</ul></section>' +
      '<section class="card"><h2>Books</h2><ul class="res-list">' + R.books.map(function (b) { return '<li><strong>' + esc(b.name) + '</strong> <span class="muted">by ' + esc(b.author) + '</span></li>'; }).join('') + '</ul></section>' +
      '<section class="card"><h2>Peer mock platforms</h2><ul class="res-list">' + R.peers.map(function (p) { return link(p.name, p.url); }).join('') + '</ul></section>';

    function showLink(id) {
      var v = state.links[id], out = $('#lkv-' + id);
      out.innerHTML = v ? 'Saved: <a href="' + esc(v) + '" target="_blank" rel="noopener noreferrer">' + esc(v) + '</a>' : '<span class="muted">No link saved yet.</span>';
    }
    R.editableLinks.forEach(function (r) { showLink(r.id); });
    $all('button[data-savelink]').forEach(function (b) {
      b.addEventListener('click', function () {
        var id = b.dataset.savelink, v = $('#lk-' + id).value.trim();
        if (v && !isSafeUrl(v)) { toast('Enter a full URL starting with https://'); return; }
        if (v) state.links[id] = v; else delete state.links[id];
        save(); showLink(id); toast(v ? 'Link saved.' : 'Link cleared.');
      });
    });
  };

  /* ---------- Settings & backup ---------- */
  PAGES.settings = function () {
    main.innerHTML = head('Settings & backup', 'Your progress lives only in this browser. Export regularly, especially before clearing browser data or switching devices.') +
      '<section class="card"><h2>Interview date</h2><div class="field" style="max-width:280px"><label for="sDate">Date</label><input type="date" id="sDate" value="' + esc(state.settings.interviewDate) + '"></div>' +
        '<button class="btn btn-primary" id="sDateSave" type="button">Save date</button></section>' +
      '<section class="card"><h2>Backup</h2><p>Export downloads a JSON file with all your checkboxes, notes, scores, mocks, teardowns, story drafts and links. Import replaces current progress with the file\'s contents.</p>' +
        '<div class="btn-row"><button class="btn btn-primary" id="exportBtn" type="button">Export progress (JSON)</button>' +
        '<label class="btn" for="importFile">Import progress (JSON)</label><input type="file" id="importFile" accept="application/json,.json" class="sr-only"></div></section>' +
      '<section class="card"><h2>Reset</h2><p>Delete all saved progress in this browser. Export first if you want to keep it.</p><button class="btn btn-danger" id="resetBtn" type="button">Reset all progress</button></section>' +
      '<p class="small muted">Storage: ' + (storageOK ? 'localStorage is working.' : 'localStorage is unavailable, so changes last only until you close this tab.') + '</p>';

    $('#sDateSave').addEventListener('click', function () {
      var v = $('#sDate').value;
      if (!/^\d{4}-\d{2}-\d{2}$/.test(v)) { toast('Pick a valid date.'); return; }
      state.settings.interviewDate = v; save(); updateTopCountdown(); toast('Interview date saved.');
    });
    $('#exportBtn').addEventListener('click', exportProgress);
    $('#importFile').addEventListener('change', function (e) {
      var file = e.target.files && e.target.files[0]; if (!file) return;
      var reader = new FileReader();
      reader.onload = function () { importProgress(String(reader.result)); e.target.value = ''; };
      reader.onerror = function () { toast('Could not read that file.'); };
      reader.readAsText(file);
    });
    $('#resetBtn').addEventListener('click', function () {
      if (!confirm('Delete ALL saved progress in this browser? This cannot be undone.')) return;
      state = defaultState(); state.settings.theme = document.documentElement.getAttribute('data-theme'); save(); toast('Progress reset.'); router();
    });
  };

  function exportProgress() {
    try {
      var data = JSON.stringify({ app: 'apm-prep', exportedAt: new Date().toISOString(), state: state }, null, 2);
      var blob = new Blob([data], { type: 'application/json' });
      var a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'apm-prep-progress-' + todayISO() + '.json';
      document.body.appendChild(a); a.click(); a.remove();
      setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
      toast('Progress exported.');
    } catch (e) { toast('Export failed: ' + e.message); }
  }

  function importProgress(text) {
    var parsed;
    try { parsed = JSON.parse(text); } catch (e) { toast('That file is not valid JSON.'); return false; }
    var incoming = parsed && parsed.state ? parsed.state : parsed;
    if (!incoming || typeof incoming !== 'object' || !('plan' in incoming || 'mocks' in incoming || 'settings' in incoming)) {
      toast('That file does not look like an APM Prep export.'); return false;
    }
    if (!confirm('Replace your current progress with the imported file?')) return false;
    state = mergeState(defaultState(), incoming);
    save();
    if (state.settings.theme) applyTheme(state.settings.theme);
    toast('Progress imported.');
    router();
    return true;
  }

  /* ================= Boot ================= */
  window.APMApp = { exportProgress: exportProgress, importProgress: importProgress, getState: function () { return state; } };
  renderNav();
  router();
})();
