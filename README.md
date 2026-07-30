# Interview Navigator — DevOps Engineer

A polished, browsable interview-preparation web app for DevOps Engineer positions.

Answers are written in a comprehensive, explanatory style that covers each concept clearly and thoroughly — suitable for both revision and interview practice. The content is aligned to real interview expectations from beginner to senior / CKA level.

**Live site (once GitHub Pages is enabled):** `https://Pancham.github.io/interview-navigator/`

---

## Features

- **Topic-wise coverage** — Introduction, Projects, Linux, Git, Docker, Kubernetes, Jenkins, Terraform, Ansible, AWS, Monitoring, Networking.
- **Question bank with detailed answers** — every question is written in a clear, explanatory format.
- **Follow-up questions** — each main question has drill-down follow-ups, opened in draggable side-by-side windows so you can compare answers or study threads in parallel.
- **Category filter pills + full-text search** — filter topics by category (Fundamentals, Containers, CI/CD, Cloud & Infra, Ops & Config) and search within any topic's questions, answers, titles, and highlights.
- **Compact card grid layout** — sidebar tiles, project cards, and Q&A items are laid out as a masonry-style grid; click a card to expand.
- **Dark / Light theme toggle** — persisted in `localStorage`.
- **100% static** — plain HTML, CSS, and JavaScript. No build step, no framework, no server.

---

## Repository Structure

```
InterviewNavigator/
├── index.html       # Application shell (sidebar, main content, follow-up windows)
├── style.css        # All styles — layout, themes, responsive rules
├── script.js        # Interactive logic — rendering, filtering, follow-up windows
├── data.js          # Question/answer dataset — the content you edit
├── .gitignore
└── README.md
```

---

## Running Locally

Because it is a static site, you only need to open `index.html` in a modern browser.

```powershell
# From the repository root
start index.html
```

To develop with live reload, use any static HTTP server, for example:

```powershell
# Python 3
python -m http.server 8000
# then browse http://localhost:8000
```

---

## Editing Content

All questions and answers live in `data.js`. Each topic is an object in the `TOPICS` array with:

```js
{
  id: "kubernetes",
  name: "Kubernetes",
  icon: "☸️",
  kind: "qa",                // "intro" | "projects" | "qa"
  description: "...",
  items: [
    {
      q: "Question text?",
      difficulty: "easy" | "medium" | "hard",
      a: "<p>HTML-formatted answer.</p>",
      followups: [
        { q: "Follow-up question?", a: "<p>Answer</p>" }
      ]
    }
  ]
}
```

After editing `data.js`, reload the browser (hard refresh with `Ctrl+F5`) to see changes.

---

## Deploying to GitHub Pages

1. Push this repository to GitHub.
2. In the repository settings, go to **Pages**.
3. Under **Source**, select `Deploy from a branch`, choose `main` and `/ (root)`.
4. Wait 1–2 minutes for the site to become available at the URL shown in settings.

Your app is then accessible from any device via that URL.

---

## Content Scope

The dataset currently covers:

| Topic        | Main Questions | Follow-ups |
|--------------|----------------|------------|
| Introduction | 6 cards        | —          |
| Projects     | 5 case studies | —          |
| Linux        | 6              | ~8         |
| Git          | 5              | ~7         |
| Docker       | 5              | ~8         |
| Kubernetes   | 52 (CKA-aligned) | 40       |
| Jenkins      | 4              | ~5         |
| Terraform    | 5              | ~5         |
| Ansible      | 4              | ~3         |
| AWS          | 5              | ~7         |
| Monitoring   | 4              | ~4         |
| Networking   | 4              | ~4         |

The Kubernetes section is aligned to the CKA (Certified Kubernetes Administrator) curriculum and covers Core Concepts, Workloads & Scheduling, Storage, Networking, Security, Cluster Maintenance, Troubleshooting, and advanced topics.

---

## License

Personal preparation material — use freely for your own study.
