/* =========================================================
   Interview Navigator — DevOps Engineer
   App logic: topic switching, search, follow-up windows.
   ========================================================= */

(() => {
  const $  = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  /* --------------------- CATEGORIES --------------------- */
  const CATEGORY_MAP = {
    // topic id -> category
    introduction:  "fundamentals",
    projects:      "fundamentals",
    ai:            "fundamentals",
    linux:         "ops",
    ansible:       "ops",
    monitoring:    "ops",
    git:           "cicd",
    jenkins:       "cicd",
    githubactions: "cicd",
    argocd:        "cicd",
    sonarqube:     "cicd",
    docker:        "containers",
    kubernetes:    "containers",
    helm:          "containers",
    aws:           "cloud",
    azure:         "cloud",
    gcp:           "cloud",
    terraform:     "cloud",
    networking:    "cloud",
  };

  const CATEGORIES = [
    { id: "all",          label: "All" },
    { id: "fundamentals", label: "Fundamentals" },
    { id: "containers",   label: "Containers" },
    { id: "cicd",         label: "CI/CD" },
    { id: "cloud",        label: "Cloud & Infra" },
    { id: "ops",          label: "Ops & Config" },
  ];

  const state = {
    activeTopicId: TOPICS[0].id,
    search: "",
    category: "all",
    followupWindows: [],
    nextWinId: 1,
  };

  function topicCategory(topic) {
    return CATEGORY_MAP[topic.id] || "tools";
  }

  function filteredTopics() {
    const q = state.search.trim().toLowerCase();
    return TOPICS.filter((t) => {
      if (state.category !== "all" && topicCategory(t) !== state.category) return false;
      if (!q) return true;
      if (t.name.toLowerCase().includes(q)) return true;
      // deep match: any item title / question / body
      return t.items.some((it) => {
        const hay = [
          it.q, it.a, it.title, it.body, it.summary,
          ...(it.tech || []),
          ...(it.highlights || []),
        ].filter(Boolean).join(" ").toLowerCase();
        return hay.includes(q);
      });
    });
  }

  /* --------------------- FILTER PILLS --------------------- */
  function renderFilterPills() {
    const wrap = $("#filterPills");
    if (!wrap) return;
    wrap.innerHTML = "";
    CATEGORIES.forEach((c) => {
      const count =
        c.id === "all"
          ? TOPICS.length
          : TOPICS.filter((t) => topicCategory(t) === c.id).length;
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "pill" + (state.category === c.id ? " active" : "");
      btn.dataset.cat = c.id;
      btn.innerHTML = `${escapeHtml(c.label)}<span class="pill-count">${count}</span>`;
      btn.addEventListener("click", () => {
        state.category = c.id;
        renderFilterPills();
        renderSidebar();
      });
      wrap.appendChild(btn);
    });
  }

  /* --------------------- SIDEBAR --------------------- */
  function renderSidebar() {
    const list = $("#topicList");
    list.innerHTML = "";
    const topics = filteredTopics();

    if (!topics.length) {
      const empty = document.createElement("div");
      empty.className = "topics-empty";
      empty.textContent = "No topics match your filter.";
      list.appendChild(empty);
      return;
    }

    topics.forEach((t) => {
      const el = document.createElement("div");
      el.className = "topic-item" + (t.id === state.activeTopicId ? " active" : "");
      el.dataset.topic = t.id;
      el.title = t.name;
      el.innerHTML = `
        <div class="ti-count">${t.items.length}</div>
        <div class="ti-icon">${t.icon}</div>
        <div class="ti-name">${escapeHtml(t.name)}</div>
      `;
      el.addEventListener("click", () => selectTopic(t.id));
      list.appendChild(el);
    });
  }

  function selectTopic(id) {
    state.activeTopicId = id;
    state.search = "";
    const searchInput = $("#searchInput");
    if (searchInput) searchInput.value = "";
    closeAllFollowupWindows();
    renderSidebar();
    renderContent();
    // close mobile sidebar
    $("#sidebar").classList.remove("open");
  }

  /* --------------------- MAIN CONTENT --------------------- */
  function renderContent() {
    const topic = TOPICS.find((t) => t.id === state.activeTopicId);
    if (!topic) return;

    $("#currentTopic").textContent = topic.name;
    $("#qCount").textContent = topic.items.length;

    const content = $("#content");
    content.innerHTML = "";

    // Header
    const header = document.createElement("div");
    header.className = "topic-header";
    header.innerHTML = `
      <h2>${topic.icon} ${topic.name}</h2>
      <p>${escapeHtml(topic.description)}</p>
    `;
    content.appendChild(header);

    if (topic.kind === "intro") {
      renderIntro(topic, content);
    } else if (topic.kind === "projects") {
      renderProjects(topic, content);
    } else {
      renderQA(topic, content);
    }
  }

  function renderIntro(topic, container) {
    const grid = document.createElement("div");
    grid.className = "cards-grid";

    topic.items.forEach((item) => {
      const card = document.createElement("div");
      card.className = "intro-card";
      card.innerHTML = `
        <h3>${escapeHtml(item.title)}</h3>
        <div class="card-body">${item.body}</div>
        <div class="card-more">
          <span class="more-label"></span>
          <svg class="chev" viewBox="0 0 24 24" fill="none" width="12" height="12">
            <path d="m6 9 6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      `;
      card.addEventListener("click", () => card.classList.toggle("expanded"));
      grid.appendChild(card);
    });

    container.appendChild(grid);
  }

  function renderProjects(topic, container) {
    const grid = document.createElement("div");
    grid.className = "cards-grid";

    topic.items.forEach((item) => {
      const card = document.createElement("div");
      card.className = "project-card";
      const techPills = (item.tech || [])
        .map((t) => `<span class="tech">${escapeHtml(t)}</span>`)
        .join("");
      const highlights = (item.highlights || [])
        .map((h) => `<li>${h}</li>`)
        .join("");
      card.innerHTML = `
        <h3>${escapeHtml(item.title)}</h3>
        <div class="card-body">
          <p>${escapeHtml(item.summary || "")}</p>
          <div class="project-meta">${techPills}</div>
          ${highlights ? `<ul>${highlights}</ul>` : ""}
        </div>
        <div class="card-more">
          <span class="more-label"></span>
          <svg class="chev" viewBox="0 0 24 24" fill="none" width="12" height="12">
            <path d="m6 9 6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      `;
      card.addEventListener("click", () => card.classList.toggle("expanded"));
      grid.appendChild(card);
    });

    container.appendChild(grid);
  }

  function renderQA(topic, container) {
    const q = state.search.trim().toLowerCase();
    const items = topic.items.filter((it) => {
      if (!q) return true;
      return (
        (it.q || "").toLowerCase().includes(q) ||
        (it.a || "").toLowerCase().includes(q)
      );
    });

    if (!items.length) {
      const empty = document.createElement("div");
      empty.className = "qa-empty";
      empty.innerHTML = `
        <h3>No matching questions</h3>
        <p>Try a different search term or pick another topic.</p>
      `;
      container.appendChild(empty);
      $("#qCount").textContent = "0";
      return;
    }

    $("#qCount").textContent = items.length;

    const list = document.createElement("div");
    list.className = "qa-list";

    items.forEach((it, idx) => {
      const followupCount = (it.followups || []).length;
      const diff = it.difficulty || "core";
      const el = document.createElement("div");
      el.className = "qa-item";
      el.innerHTML = `
        <div class="qa-header">
          <div class="qa-num">${String(idx + 1).padStart(2, "0")}</div>
          <div class="qa-q">
            ${escapeHtml(it.q)}
            <div class="qa-tags">
              <span class="tag ${diff}">${diff}</span>
              ${followupCount ? `<span class="tag followup">${followupCount} follow-up${followupCount>1?"s":""}</span>` : ""}
            </div>
          </div>
          <svg class="qa-chevron" viewBox="0 0 24 24" fill="none" width="18" height="18">
            <path d="m6 9 6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="qa-body">
          <div class="qa-answer">${it.a || ""}</div>
          ${followupCount ? `
            <button class="qa-followup-btn" data-qid="${idx}">
              <svg viewBox="0 0 24 24" fill="none" width="14" height="14"><path d="M7 8h10M7 12h6M12 20l-4-4H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3l-4 4Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
              Open follow-ups
              <span class="count">${followupCount}</span>
            </button>` : ""}
        </div>
      `;

      const header = $(".qa-header", el);
      header.addEventListener("click", (e) => {
        // don't toggle when clicking the follow-up button
        if (e.target.closest(".qa-followup-btn")) return;
        el.classList.toggle("open");
      });

      const fbtn = $(".qa-followup-btn", el);
      if (fbtn) {
        fbtn.addEventListener("click", (ev) => {
          ev.stopPropagation();
          openFollowupWindow({
            topicId: topic.id,
            parentQ: it.q,
            followups: it.followups,
            path: [topic.name],
          });
        });
      }

      list.appendChild(el);
    });

    container.appendChild(list);
  }

  /* --------------------- FOLLOW-UP FLOATING WINDOWS --------------------- */

  function openFollowupWindow({ topicId, parentQ, followups, path, spawnFromEl }) {
    const tpl = $("#followup-template").content.cloneNode(true);
    const win = tpl.querySelector(".followup-window");
    const winId = state.nextWinId++;
    win.dataset.wid = winId;

    win.querySelector(".fw-title-text").textContent =
      `${path.join(" › ")} · Follow-ups`;

    // Parent question card
    const body = win.querySelector(".fw-body");
    const parent = document.createElement("div");
    parent.className = "fw-parent-q";
    parent.innerHTML = `<b>Parent Q:</b> ${escapeHtml(parentQ)}`;
    body.appendChild(parent);

    if (!followups || !followups.length) {
      const empty = document.createElement("div");
      empty.className = "fw-empty";
      empty.textContent = "No follow-ups for this question.";
      body.appendChild(empty);
    } else {
      followups.forEach((f) => {
        const item = document.createElement("div");
        item.className = "fw-followup";
        const nested = f.followups && f.followups.length;
        item.innerHTML = `
          <div class="fw-followup-q">
            <div class="dot"></div>
            <div>${escapeHtml(f.q)}</div>
          </div>
          <div class="fw-followup-a">
            ${f.a || ""}
            ${nested ? `<div><button class="fw-nested-btn" type="button">
              Explore deeper (${nested})
            </button></div>` : ""}
          </div>
        `;
        const q = $(".fw-followup-q", item);
        q.addEventListener("click", () => item.classList.toggle("open"));
        if (nested) {
          const btn = $(".fw-nested-btn", item);
          btn.addEventListener("click", (ev) => {
            ev.stopPropagation();
            openFollowupWindow({
              topicId,
              parentQ: f.q,
              followups: f.followups,
              path: [...path, "↳"],
            });
          });
        }
        body.appendChild(item);
      });
    }

    // header actions
    win.querySelector(".fw-close").addEventListener("click", () => closeFollowupWindow(winId));
    win.querySelector(".fw-min").addEventListener("click", () => win.classList.toggle("minimized"));

    // draggable
    makeDraggable(win, win.querySelector(".fw-header"));

    // position: stagger the windows so multiple can be seen
    const offset = state.followupWindows.length;
    win.style.top = `${100 + offset * 28}px`;
    win.style.left = `calc(100vw - 420px - ${offset * 20}px)`;

    document.body.appendChild(win);
    state.followupWindows.push({ id: winId, el: win });
  }

  function closeFollowupWindow(id) {
    const idx = state.followupWindows.findIndex((w) => w.id === id);
    if (idx === -1) return;
    const w = state.followupWindows[idx];
    w.el.style.transition = "opacity 0.15s ease, transform 0.15s ease";
    w.el.style.opacity = "0";
    w.el.style.transform = "translateY(8px) scale(0.97)";
    setTimeout(() => w.el.remove(), 160);
    state.followupWindows.splice(idx, 1);
  }

  function closeAllFollowupWindows() {
    [...state.followupWindows].forEach((w) => closeFollowupWindow(w.id));
  }

  /* --------------------- DRAGGABLE --------------------- */
  function makeDraggable(win, handle) {
    let dragging = false;
    let startX, startY, startLeft, startTop;

    handle.addEventListener("mousedown", (e) => {
      if (e.target.closest(".fw-btn")) return;
      dragging = true;
      const rect = win.getBoundingClientRect();
      startX = e.clientX;
      startY = e.clientY;
      startLeft = rect.left;
      startTop = rect.top;
      win.style.userSelect = "none";
      // bring to front
      state.followupWindows.forEach((w) => { w.el.style.zIndex = 100; });
      win.style.zIndex = 200;
      e.preventDefault();
    });

    window.addEventListener("mousemove", (e) => {
      if (!dragging) return;
      const nx = Math.max(4, Math.min(window.innerWidth - 60,  startLeft + (e.clientX - startX)));
      const ny = Math.max(4, Math.min(window.innerHeight - 60, startTop  + (e.clientY - startY)));
      win.style.left = `${nx}px`;
      win.style.top  = `${ny}px`;
      win.style.right = "auto";
    });

    window.addEventListener("mouseup", () => {
      if (dragging) {
        dragging = false;
        win.style.userSelect = "";
      }
    });
  }

  /* --------------------- SEARCH --------------------- */
  function bindSearch() {
    const input = $("#searchInput");
    input.addEventListener("input", (e) => {
      state.search = e.target.value;
      renderSidebar();
    });
  }

  /* --------------------- THEME --------------------- */
  function bindTheme() {
    const stored = localStorage.getItem("in-theme");
    if (stored === "light") document.body.classList.add("light");
    updateThemeLabel();

    $("#themeToggle").addEventListener("click", () => {
      document.body.classList.toggle("light");
      const isLight = document.body.classList.contains("light");
      localStorage.setItem("in-theme", isLight ? "light" : "dark");
      updateThemeLabel();
    });
  }

  function updateThemeLabel() {
    const isLight = document.body.classList.contains("light");
    $("#themeLabel").textContent = isLight ? "Dark Mode" : "Light Mode";
    $("#themeIcon").innerHTML = isLight
      ? '<circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>'
      : '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
  }

  /* --------------------- MOBILE SIDEBAR --------------------- */
  function bindMobileMenu() {
    $("#menuBtn").addEventListener("click", () => {
      $("#sidebar").classList.toggle("open");
    });
    // close on outside click (mobile)
    document.addEventListener("click", (e) => {
      const sb = $("#sidebar");
      if (
        window.innerWidth <= 900 &&
        sb.classList.contains("open") &&
        !e.target.closest("#sidebar") &&
        !e.target.closest("#menuBtn")
      ) {
        sb.classList.remove("open");
      }
    });
  }

  /* --------------------- KEYBOARD SHORTCUTS --------------------- */
  function bindShortcuts() {
    document.addEventListener("keydown", (e) => {
      // ESC closes topmost follow-up window
      if (e.key === "Escape" && state.followupWindows.length) {
        const last = state.followupWindows[state.followupWindows.length - 1];
        closeFollowupWindow(last.id);
      }
      // "/" focuses search
      if (e.key === "/" && document.activeElement.tagName !== "INPUT") {
        e.preventDefault();
        $("#searchInput").focus();
      }
    });
  }

  /* --------------------- UTIL --------------------- */
  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, (c) => (
      { "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]
    ));
  }

  /* --------------------- INIT --------------------- */
  function init() {
    renderFilterPills();
    renderSidebar();
    renderContent();
    bindSearch();
    bindTheme();
    bindMobileMenu();
    bindShortcuts();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
