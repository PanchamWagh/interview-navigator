# Interview Navigator — DevOps Engineer

A beautiful, offline-first web app to prepare for **DevOps Engineer** interviews. Browse topic-wise interview material, expand answers inline, and pop out **follow-up questions in draggable side windows** to simulate the flow of a real interview.

---

## Features

- **Topic-wise sidebar**: Introduction, Projects, and 10 DevOps tool topics (Linux, Git, Docker, Kubernetes, Jenkins/CI-CD, Terraform, Ansible, AWS, Monitoring, Networking & Shell)
- **Inline Q&A** with syntax-highlighted code snippets
- **Follow-up "side windows"** — click any question's *Open follow-ups* button and a floating, draggable, closable panel appears beside your main content. Open several at once to walk through a tree of related questions.
- **Nested follow-ups** — some follow-ups have their own follow-ups, chained in cascading windows
- **Live search** across the currently selected topic (`/` to focus)
- **Dark / Light theme** (saved in localStorage)
- **Fully responsive** — works on desktop and mobile
- **Zero dependencies** — plain HTML/CSS/JS, opens straight in any browser

---

## How to Run

Just open `index.html` in your browser. No build step, no server needed.

- **Windows**: double-click `index.html`, or right-click → *Open with* → your preferred browser
- Or run from a terminal:

```bash
# Windows PowerShell
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

> For the best experience, use Chrome, Edge, Firefox, or any recent Chromium-based browser.

---

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `/` | Focus the search box |
| `Esc` | Close the topmost follow-up window |
| Click & drag on a follow-up window's header | Move it around |
| Click the `–` in the follow-up window | Minimize |
| Click the `×` | Close |

---

## Project Structure

```
InterviewNavigator/
├── index.html      # Layout + templates
├── style.css       # Modern glassy theme (dark & light)
├── data.js         # All interview content (topics, Q&A, follow-ups)
├── script.js       # UI logic + floating window manager
└── README.md       # This file
```

---

## Extending the Content

All interview content lives in **`data.js`** as a single `TOPICS` array. To add a new topic or question:

### Add a Q&A topic

```js
{
  id: "my-topic",
  name: "My Topic",
  icon: "🎯",
  kind: "qa",
  description: "Short description shown at the top.",
  items: [
    {
      q: "Main question?",
      difficulty: "medium",           // easy | medium | hard
      a: "<p>HTML answer</p><pre>code sample</pre>",
      followups: [
        {
          q: "Follow-up question?",
          a: "<p>Answer HTML</p>",
          followups: [ /* nested */ ]
        }
      ]
    }
  ]
}
```

### Add an Introduction card

```js
{
  id: "intro",
  name: "Introduction",
  icon: "👋",
  kind: "intro",
  description: "...",
  items: [
    { title: "Card title", body: "<p>HTML body</p>" }
  ]
}
```

### Add a Project card

```js
{
  id: "projects",
  name: "Projects",
  icon: "🚀",
  kind: "projects",
  items: [
    {
      title: "Project name",
      summary: "One-line summary",
      tech: ["Terraform", "AWS"],
      highlights: ["<b>Bullet 1</b>", "Bullet 2"]
    }
  ]
}
```

Just save the file and refresh the browser — no build step.

---

## Screenshots (what you'll see)

- **Left**: topic sidebar with search
- **Center**: expandable question cards
- **Floating right**: draggable follow-up windows that can be minimized, moved, or stacked

---

## Tips for the Interview

1. **Own your projects** — pick 1–2 from the *Projects* topic and know them cold. Be able to draw the architecture on a whiteboard.
2. **Master the fundamentals** — Linux, Git, and Networking come up in almost every DevOps interview.
3. **Speak in trade-offs** — "I'd use blue/green here because rollback speed matters more than infrastructure cost."
4. **Know the follow-ups** — interviewers drill down. The follow-up panels in this app mirror that pattern.

Good luck! 🎯
