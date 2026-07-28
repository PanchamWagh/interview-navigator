/* =========================================================
   Interview Navigator — DevOps Engineer
   Question dataset. Each topic has:
     - id, name, icon (emoji), description
     - kind: "intro" | "projects" | "qa"
     - items: [ ... ]  (cards or Q&A with follow-ups)
   ========================================================= */

const TOPICS = [
  /* ============================================================ */
  {
    id: "introduction",
    name: "Introduction",
    icon: "👋",
    kind: "intro",
    description:
      "Foundational concepts every DevOps engineer should be able to speak to in the first 5 minutes of an interview.",
    items: [
      {
        title: "What is DevOps?",
        body:
          "<p>DevOps is a <b>cultural and engineering practice</b> that unifies software development (Dev) and IT operations (Ops) to shorten the systems-development life cycle and deliver features, fixes, and updates <b>frequently, reliably, and safely</b>.</p><p>It is built on <b>automation, collaboration, continuous feedback, and shared ownership</b> across the entire delivery pipeline — from code commit to production monitoring.</p>",
      },
      {
        title: "Core DevOps Principles (CALMS)",
        body:
          "<p><b>C</b>ulture — collaboration between Dev & Ops teams.<br/><b>A</b>utomation — build, test, deploy, provision, monitor.<br/><b>L</b>ean — eliminate waste, small batches, fast feedback.<br/><b>M</b>easurement — DORA metrics, SLIs, SLOs.<br/><b>S</b>haring — knowledge, tooling, and responsibility.</p>",
      },
      {
        title: "The DevOps Lifecycle",
        body:
          "<p><b>Plan → Code → Build → Test → Release → Deploy → Operate → Monitor</b>, feeding back into Plan.</p><p>Each stage is automated wherever possible and instrumented for observability so that teams can iterate quickly with confidence.</p>",
      },
      {
        title: "Key DORA Metrics",
        body:
          "<p><b>1. Deployment Frequency</b> — how often you ship to production.<br/><b>2. Lead Time for Changes</b> — commit → production.<br/><b>3. Change Failure Rate</b> — % of deploys causing incidents.<br/><b>4. Mean Time to Restore (MTTR)</b> — how quickly you recover.</p><p>Elite teams: deploy multiple times per day, lead time &lt; 1 hour, CFR &lt; 15%, MTTR &lt; 1 hour.</p>",
      },
      {
        title: "DevOps vs SRE vs Platform Engineering",
        body:
          "<p><b>DevOps</b>: cultural movement + practices for faster, reliable delivery.<br/><b>SRE</b> (Google): a concrete implementation of DevOps — reliability as a first-class engineering discipline, error budgets, toil reduction.<br/><b>Platform Engineering</b>: builds an internal developer platform (IDP) so product teams self-serve infra, pipelines, and observability.</p>",
      },
      {
        title: "The Toolchain at a Glance",
        body:
          "<p><b>VCS</b>: Git, GitHub, GitLab, Bitbucket.<br/><b>CI/CD</b>: Jenkins, GitHub Actions, GitLab CI, ArgoCD.<br/><b>Config Mgmt</b>: Ansible, Chef, Puppet.<br/><b>IaC</b>: Terraform, Pulumi, CloudFormation.<br/><b>Containers</b>: Docker, containerd.<br/><b>Orchestration</b>: Kubernetes, ECS, Nomad.<br/><b>Observability</b>: Prometheus, Grafana, Loki, ELK, Datadog.<br/><b>Cloud</b>: AWS, Azure, GCP.</p>",
      },
    ],
  },

  /* ============================================================ */
  {
    id: "projects",
    name: "Projects",
    icon: "🚀",
    kind: "projects",
    description:
      "Realistic DevOps portfolio projects you can talk about with confidence — pick 1–2 and know them cold.",
    items: [
      {
        title: "End-to-End CI/CD for a Microservices App",
        summary:
          "Automated build → test → security scan → containerize → deploy for a 3-service Node/Python app on Kubernetes.",
        tech: ["GitHub", "Jenkins", "Docker", "SonarQube", "Trivy", "Helm", "Kubernetes", "ArgoCD"],
        highlights: [
          "<b>SCM webhook</b> triggers Jenkins on every PR to `main`.",
          "<b>Parallel stages</b>: unit tests, static analysis (SonarQube), and SAST.",
          "<b>Container build</b> with multi-stage Dockerfiles; images scanned by <b>Trivy</b>.",
          "<b>Helm charts</b> versioned per service; <b>ArgoCD</b> syncs manifests to a GitOps repo.",
          "<b>Blue/Green rollouts</b> with automatic rollback on failing readiness probes.",
        ],
      },
      {
        title: "Infrastructure-as-Code AWS Landing Zone",
        summary:
          "Multi-account AWS foundation provisioned via Terraform with reusable modules, remote state, and least-privilege IAM.",
        tech: ["Terraform", "AWS Organizations", "S3", "DynamoDB", "IAM", "VPC", "EKS", "RDS"],
        highlights: [
          "<b>Terraform modules</b> for VPC, EKS, RDS, IAM — versioned and consumed by workspaces.",
          "<b>Remote state</b> in S3 with <b>DynamoDB locking</b> for concurrency safety.",
          "<b>OU structure</b>: Security, Shared Services, Dev, Prod — with SCPs.",
          "<b>tfsec + Checkov</b> in CI to enforce security baselines pre-merge.",
          "<b>Atlantis</b> for PR-driven `plan/apply` workflow with approvals.",
        ],
      },
      {
        title: "Kubernetes Observability Stack",
        summary:
          "Deployed a unified metrics + logs + traces stack on an EKS cluster with alerting and SLO dashboards.",
        tech: ["Prometheus", "Grafana", "Loki", "Tempo", "OpenTelemetry", "AlertManager", "Kubernetes"],
        highlights: [
          "<b>kube-prometheus-stack</b> Helm chart for Prometheus + Grafana + AlertManager.",
          "<b>Loki</b> for logs and <b>Tempo</b> for distributed traces; OpenTelemetry SDKs in apps.",
          "<b>SLO dashboards</b> in Grafana with burn-rate alerts routed to PagerDuty.",
          "<b>Multi-tenant</b>: label-based dashboard access via Grafana teams.",
        ],
      },
      {
        title: "Zero-Downtime Deployment with GitOps",
        summary:
          "Migrated a legacy push-based deployment to a pull-based GitOps model using ArgoCD.",
        tech: ["ArgoCD", "Helm", "Kustomize", "Kubernetes", "GitHub Actions"],
        highlights: [
          "Manifests in a dedicated <b>`k8s-config`</b> repo; app code repo builds & bumps image tags.",
          "<b>ArgoCD ApplicationSets</b> for env promotion (dev → stage → prod).",
          "<b>PR-based promotions</b> with approvals; automated rollback via `argocd app rollback`.",
          "Cut MTTR from 45 min → 4 min through declarative state + one-command rollback.",
        ],
      },
      {
        title: "Immutable Base AMIs with Packer + Ansible",
        summary:
          "Hardened, patched, and pre-configured Amazon Machine Images built weekly via CI.",
        tech: ["Packer", "Ansible", "AWS", "Jenkins", "InSpec"],
        highlights: [
          "<b>Packer</b> builds AMIs from an Amazon Linux 2 base.",
          "<b>Ansible</b> provisioner installs agents (CloudWatch, SSM, Falco) and applies CIS hardening.",
          "<b>InSpec</b> compliance tests run against the built AMI before publishing.",
          "AMIs tagged with git SHA + CVE scan report attached to Jenkins build artifacts.",
        ],
      },
    ],
  },

  /* ============================================================ */
  {
    id: "linux",
    name: "Linux",
    icon: "🐧",
    kind: "qa",
    description:
      "Linux fundamentals — process, files, permissions, networking, and troubleshooting. The bread and butter of DevOps.",
    items: [
      {
        q: "How do you troubleshoot a Linux server with high CPU usage?",
        difficulty: "medium",
        a: "<p>Start broad, then drill down:</p><ol><li><code>top</code> or <code>htop</code> — identify the offending process (%CPU).</li><li><code>ps -eo pid,ppid,cmd,%cpu,%mem --sort=-%cpu | head</code> — top consumers.</li><li><code>pidstat -u -p &lt;PID&gt; 1</code> — per-thread CPU.</li><li><code>strace -p &lt;PID&gt;</code> or <code>perf top -p &lt;PID&gt;</code> — see what it's doing.</li><li>Check <code>uptime</code> load-average — is it CPU-bound or I/O-bound?</li><li>Review app logs, GC pauses (Java), busy loops, or runaway crons.</li></ol>",
        followups: [
          {
            q: "What's the difference between load average and CPU usage?",
            a: "<p><b>CPU usage %</b> is the percentage of time the CPU is not idle.</p><p><b>Load average</b> is the average number of processes in the <b>run queue or waiting on uninterruptible I/O</b> over 1/5/15 minutes. So a load of 4 on a 4-core box = fully utilized. A load of 8 on 4 cores = 2x oversubscribed. A high load with low CPU% usually means I/O wait.</p>",
          },
          {
            q: "How do you distinguish CPU-bound vs I/O-bound processes?",
            a: "<p>Use <code>top</code> or <code>vmstat 1</code>:</p><ul><li><b>%us / %sy</b> high → CPU-bound.</li><li><b>%wa</b> (iowait) high → I/O-bound.</li><li><b>%si / %hi</b> high → soft/hard interrupts (often network).</li></ul><p>Also <code>iostat -x 1</code> for disk queue depth and await times.</p>",
          },
          {
            q: "Show the exact command to find the top 5 memory-consuming processes.",
            a: "<pre>ps -eo pid,user,rss,vsz,cmd --sort=-rss | head -6</pre><p>Or with <code>top -o %MEM</code> interactively.</p>",
          },
        ],
      },
      {
        q: "Explain Linux file permissions (chmod, chown, umask).",
        difficulty: "easy",
        a: "<p>Each file has three permission triads for <b>owner / group / others</b>: read (r=4), write (w=2), execute (x=1).</p><ul><li><code>chmod 755 script.sh</code> → rwxr-xr-x</li><li><code>chown user:group file</code> → change owner/group</li><li><code>umask 022</code> → default mask; new files get 644, dirs 755</li></ul>",
        followups: [
          {
            q: "What is the SUID bit and when is it used?",
            a: "<p><b>SUID</b> (Set User ID) lets a program run with the file owner's privileges regardless of who runs it. Classic example: <code>/usr/bin/passwd</code> is owned by root and SUID-set so any user can update their own password entry in <code>/etc/shadow</code>.</p><p>Set with <code>chmod u+s file</code>; visible as an <b>s</b> in the owner-exec position (<code>-rwsr-xr-x</code>).</p><p><b>Security note</b>: SUID binaries are a common attack surface — audit them regularly with <code>find / -perm -4000 -type f 2&gt;/dev/null</code>.</p>",
          },
          {
            q: "Difference between hard link and soft (symbolic) link?",
            a: "<p><b>Hard link</b>: another directory entry pointing to the <b>same inode</b>. Can't cross filesystems, can't link directories. File is deleted only when all hard links are removed.</p><p><b>Soft link</b> (<code>ln -s</code>): a small file containing a <b>path</b> to the target. Can cross filesystems, can link directories. Breaks if the target is moved/deleted.</p>",
          },
        ],
      },
      {
        q: "What is a systemd unit and how do you create one?",
        difficulty: "medium",
        a: "<p><b>systemd</b> is the init system on modern Linux. A <b>unit</b> declares how to manage a resource — most commonly a service (<code>.service</code>).</p><p>Create <code>/etc/systemd/system/myapp.service</code>:</p><pre>[Unit]\nDescription=My App\nAfter=network.target\n\n[Service]\nType=simple\nUser=myapp\nExecStart=/usr/local/bin/myapp\nRestart=on-failure\nRestartSec=5\n\n[Install]\nWantedBy=multi-user.target</pre><p>Then <code>systemctl daemon-reload &amp;&amp; systemctl enable --now myapp</code>.</p>",
        followups: [
          {
            q: "How do you check service logs with systemd?",
            a: "<p><code>journalctl -u myapp -f</code> — tail logs for a specific unit.<br/><code>journalctl -u myapp --since \"1 hour ago\"</code> — time-filtered.<br/><code>journalctl -p err -u myapp</code> — only errors.</p>",
          },
          {
            q: "What are the systemd `Type=` values and when to use each?",
            a: "<ul><li><b>simple</b> (default): process runs in foreground — most modern apps.</li><li><b>forking</b>: legacy daemons that fork and exit the parent.</li><li><b>oneshot</b>: runs, exits — good for scripts. Pair with <code>RemainAfterExit=yes</code>.</li><li><b>notify</b>: service sends <code>sd_notify(READY=1)</code> — used by nginx, docker, etc.</li><li><b>idle</b>: waits until other jobs are done — for boot ordering.</li></ul>",
          },
        ],
      },
      {
        q: "How do you find files modified in the last 24 hours over 100MB?",
        difficulty: "easy",
        a: "<pre>find /var/log -type f -mtime -1 -size +100M -exec ls -lh {} \\;</pre><p><code>-mtime -1</code> = modified within 1 day; <code>-size +100M</code> = larger than 100 MB.</p>",
        followups: [
          {
            q: "What's the difference between -mtime, -atime, and -ctime?",
            a: "<ul><li><b>mtime</b> — content modification time.</li><li><b>atime</b> — last access (read) time (often disabled with `noatime` mount).</li><li><b>ctime</b> — inode change time (permissions, owner, name).</li></ul>",
          },
        ],
      },
      {
        q: "How do you check what process is using port 8080?",
        difficulty: "easy",
        a: "<pre>ss -ltnp | grep :8080\n# or\nlsof -iTCP:8080 -sTCP:LISTEN -n -P</pre><p><code>ss</code> is the modern replacement for <code>netstat</code> and much faster on busy hosts.</p>",
        followups: [
          {
            q: "How to kill a process holding a port?",
            a: "<pre>fuser -k 8080/tcp\n# or\nkill -9 $(lsof -t -iTCP:8080 -sTCP:LISTEN)</pre>",
          },
        ],
      },
      {
        q: "Explain the boot process of a Linux system.",
        difficulty: "hard",
        a: "<ol><li><b>BIOS/UEFI</b> — POST, loads bootloader from disk.</li><li><b>Bootloader</b> (GRUB) — loads kernel + initramfs.</li><li><b>Kernel</b> — initializes drivers, mounts root FS read-only.</li><li><b>initramfs</b> — provides drivers needed to mount the real root FS.</li><li><b>init/systemd</b> (PID 1) — runs targets/units to bring up services.</li><li><b>Login</b> — getty / display manager.</li></ol>",
        followups: [
          {
            q: "What is initramfs and why do we need it?",
            a: "<p><b>initramfs</b> is a small root filesystem loaded into RAM by the bootloader. It contains just enough kernel modules and userspace tools to <b>mount the real root filesystem</b> (which might be on LVM, encrypted, on iSCSI, on NFS, etc.). Once the real root is mounted, the kernel <code>pivot_root</code>s into it.</p>",
          },
        ],
      },
    ],
  },

  /* ============================================================ */
  {
    id: "git",
    name: "Git & Version Control",
    icon: "🌿",
    kind: "qa",
    description:
      "Git workflows, branching strategies, and the everyday commands that make or break your PR hygiene.",
    items: [
      {
        q: "Difference between `git merge` and `git rebase`?",
        difficulty: "medium",
        a: "<p><b>merge</b> creates a new merge commit that joins two histories — preserves the exact chronology and branch topology.</p><p><b>rebase</b> replays your commits on top of the target branch — results in a linear history, but rewrites commit SHAs.</p><p><b>Rule of thumb</b>: rebase your local feature branch onto <code>main</code> before opening a PR, and merge (or squash-merge) into <code>main</code>. Never rebase branches others are working on.</p>",
        followups: [
          {
            q: "What is interactive rebase and when is it useful?",
            a: "<p><code>git rebase -i HEAD~5</code> opens an editor letting you <b>pick / reword / squash / drop / edit</b> the last 5 commits. Useful for cleaning up a messy feature branch before merging — e.g. squashing \"fix typo\" commits into their parent.</p>",
          },
          {
            q: "How do you recover a commit you accidentally lost via reset --hard?",
            a: "<p><code>git reflog</code> shows a log of every HEAD movement. Find the lost commit's SHA, then:</p><pre>git checkout &lt;sha&gt;\n# or restore the branch\ngit branch recovered &lt;sha&gt;</pre><p>Reflog entries are kept ~90 days by default.</p>",
          },
        ],
      },
      {
        q: "Explain Gitflow vs Trunk-Based Development.",
        difficulty: "medium",
        a: "<p><b>Gitflow</b>: long-lived branches (<code>develop</code>, <code>release/*</code>, <code>hotfix/*</code>). Good for scheduled releases and multiple maintained versions. Heavier ceremony.</p><p><b>Trunk-Based</b>: everyone commits to <code>main</code> (or short-lived feature branches lasting hours to a day). Requires strong CI + feature flags. Enables true continuous delivery.</p><p><b>Elite DevOps teams</b> almost always use trunk-based — DORA research shows it correlates strongly with high performance.</p>",
        followups: [
          {
            q: "What is a feature flag and why is it central to trunk-based?",
            a: "<p>A feature flag is a runtime toggle that gates a code path. It lets you <b>merge incomplete features to main</b> without exposing them to users. Combined with trunk-based: you ship code continuously, then flip flags to release features — decoupling <b>deploy</b> from <b>release</b>.</p><p>Tools: LaunchDarkly, Unleash, Flagsmith, or a homegrown DB-backed toggle.</p>",
          },
        ],
      },
      {
        q: "What is `git cherry-pick` and when do you use it?",
        difficulty: "easy",
        a: "<p><code>git cherry-pick &lt;sha&gt;</code> applies the changes from a specific commit onto your current branch. Common use: back-porting a hotfix from <code>main</code> to a <code>release/*</code> branch.</p>",
        followups: [
          {
            q: "How do you cherry-pick a range of commits?",
            a: "<pre>git cherry-pick A..B      # excludes A, includes B\ngit cherry-pick A^..B     # includes A and B</pre>",
          },
        ],
      },
      {
        q: "How do `git reset --soft`, `--mixed`, and `--hard` differ?",
        difficulty: "medium",
        a: "<p>All three move <b>HEAD</b> (and the branch pointer) to the target commit; they differ in what else they touch:</p><ul><li><b>--soft</b>: index and working tree untouched — changes remain staged.</li><li><b>--mixed</b> (default): resets index, keeps working tree — changes remain unstaged.</li><li><b>--hard</b>: resets index <b>and</b> working tree — changes are lost.</li></ul>",
        followups: [
          {
            q: "Difference between `git reset` and `git revert`?",
            a: "<p><b>reset</b> rewrites history — dangerous on shared branches.<br/><b>revert</b> creates a new commit that undoes a previous one — safe on shared branches. Always prefer <code>revert</code> on <code>main</code>.</p>",
          },
        ],
      },
      {
        q: "What is a `.gitignore` and how does it work for already-tracked files?",
        difficulty: "easy",
        a: "<p><code>.gitignore</code> lists patterns Git should ignore for <b>untracked</b> files. Once a file is tracked, <code>.gitignore</code> has no effect on it. To stop tracking a file already committed:</p><pre>git rm --cached path/to/file\necho \"path/to/file\" &gt;&gt; .gitignore\ngit commit -m \"stop tracking file\"</pre>",
      },
    ],
  },

  /* ============================================================ */
  {
    id: "docker",
    name: "Docker",
    icon: "🐳",
    kind: "qa",
    description:
      "Container fundamentals — images, layers, networking, storage, and the day-to-day of running containerized workloads.",
    items: [
      {
        q: "What is the difference between a Docker image and a container?",
        difficulty: "easy",
        a: "<p>An <b>image</b> is an immutable, read-only template — a stack of filesystem layers plus metadata (CMD, ENV, ports).</p><p>A <b>container</b> is a running (or stopped) <i>instance</i> of an image — adds a thin writable layer on top and its own PID/network namespaces.</p><p>Analogy: <b>image = class, container = object</b>.</p>",
        followups: [
          {
            q: "How do Docker image layers work?",
            a: "<p>Each instruction in a Dockerfile (<code>RUN</code>, <code>COPY</code>, <code>ADD</code>) creates a new read-only layer with just the diff. Layers are <b>cached</b> — if an instruction and its inputs are unchanged, Docker reuses the layer.</p><p>Optimize by <b>ordering</b> the Dockerfile so slow-changing instructions come first (e.g. install dependencies before copying source code).</p>",
          },
          {
            q: "What is a multi-stage build and why use it?",
            a: "<p>A single Dockerfile with multiple <code>FROM</code> stages. Build in a heavy image, copy only the final artifact into a slim runtime image — <b>drastically smaller</b> final images and no build tools in production.</p><pre>FROM golang:1.22 AS build\nWORKDIR /src\nCOPY . .\nRUN go build -o /app ./cmd/api\n\nFROM gcr.io/distroless/base-debian12\nCOPY --from=build /app /app\nENTRYPOINT [\"/app\"]</pre>",
          },
        ],
      },
      {
        q: "How do you keep Docker images small and secure?",
        difficulty: "medium",
        a: "<ul><li>Use a <b>small base</b> (<code>alpine</code>, <code>distroless</code>, <code>scratch</code>).</li><li><b>Multi-stage builds</b> — separate build & runtime.</li><li>Combine <code>RUN</code> commands to reduce layers; clean apt cache in the same layer.</li><li>Use <code>.dockerignore</code> to exclude node_modules, .git, etc.</li><li><b>Pin versions</b> — <code>FROM node:20.11.1-alpine</code>, not <code>node:latest</code>.</li><li>Run as <b>non-root</b>: <code>USER app</code>.</li><li>Scan images with <b>Trivy / Grype</b> in CI.</li></ul>",
        followups: [
          {
            q: "Difference between COPY and ADD?",
            a: "<p><code>COPY</code> just copies files. <code>ADD</code> additionally auto-extracts local tar archives and can fetch remote URLs.</p><p><b>Rule</b>: use <code>COPY</code> unless you explicitly need ADD's extra features — it's more predictable.</p>",
          },
          {
            q: "Why avoid running containers as root?",
            a: "<p>A process running as root inside a container is root as far as the container is concerned — and if a container escape vulnerability is exploited (via kernel bug, misconfigured mount, etc.), that root context can jeopardize the host.</p><p>Always add <code>USER 1000</code> or a named non-root user in your Dockerfile.</p>",
          },
        ],
      },
      {
        q: "Difference between CMD and ENTRYPOINT?",
        difficulty: "medium",
        a: "<p><b>ENTRYPOINT</b> defines the executable that always runs.<br/><b>CMD</b> provides default arguments (or a default command if no ENTRYPOINT).</p><pre>ENTRYPOINT [\"nginx\"]\nCMD [\"-g\", \"daemon off;\"]</pre><p>When you <code>docker run image -v</code>, the <code>-v</code> replaces CMD but ENTRYPOINT still runs — final command: <code>nginx -v</code>.</p>",
        followups: [
          {
            q: "What is the difference between exec and shell form?",
            a: "<p><b>Exec form</b>: <code>CMD [\"executable\", \"arg1\"]</code> — runs directly, no shell, signals propagate correctly (SIGTERM reaches the process).</p><p><b>Shell form</b>: <code>CMD executable arg1</code> — runs via <code>/bin/sh -c</code>. Signals go to sh, not your app — <b>bad for graceful shutdown</b>.</p><p><b>Always prefer exec form</b> for production images.</p>",
          },
        ],
      },
      {
        q: "How do you persist data in Docker?",
        difficulty: "easy",
        a: "<p>Three options:</p><ol><li><b>Named volumes</b> (recommended): <code>docker volume create data</code>, mount with <code>-v data:/var/lib/mysql</code>. Managed by Docker, portable.</li><li><b>Bind mounts</b>: <code>-v /host/path:/container/path</code>. Direct host path — good for dev, coupled to the host.</li><li><b>tmpfs</b>: <code>--tmpfs /tmp</code>. In-memory, non-persistent.</li></ol>",
        followups: [
          {
            q: "Named volume vs bind mount — when to use each?",
            a: "<p><b>Named volumes</b>: production, database data, portable across hosts, Docker manages lifecycle.</p><p><b>Bind mounts</b>: local development (mount your source code for hot-reload), or when you need a very specific host path.</p>",
          },
        ],
      },
      {
        q: "Explain Docker networking modes.",
        difficulty: "medium",
        a: "<ul><li><b>bridge</b> (default): private virtual network. Containers get IPs; ports must be published (<code>-p 8080:80</code>).</li><li><b>host</b>: container shares host's network namespace — no isolation but no NAT overhead.</li><li><b>none</b>: no networking at all.</li><li><b>overlay</b>: multi-host networking (Swarm / connected via VXLAN).</li><li><b>macvlan</b>: container gets its own MAC on the physical network.</li></ul>",
      },
    ],
  },

  /* ============================================================ */
  {
    id: "kubernetes",
    name: "Kubernetes",
    icon: "☸️",
    kind: "qa",
    description:
      "The single most-asked topic in DevOps interviews. Master pods, deployments, services, and how the control plane works.",
    items: [
      {
        q: "What is a Pod and why does Kubernetes group containers into Pods?",
        difficulty: "easy",
        a: "<p>A <b>Pod</b> is the smallest deployable unit — one or more containers that <b>share</b>:</p><ul><li>Network namespace (same IP, same localhost).</li><li>IPC namespace.</li><li>Storage volumes.</li></ul><p>Grouping is useful for tightly-coupled helpers (a <b>sidecar</b> like a log shipper, or an <b>init container</b> for setup) that must live and die together with the main app.</p>",
        followups: [
          {
            q: "What is a sidecar container? Give a real example.",
            a: "<p>A helper container that runs alongside the main app in the same Pod. Common examples:</p><ul><li><b>Envoy / Istio proxy</b> — service mesh data plane.</li><li><b>Fluent Bit</b> — tails app logs and ships to Loki/Elasticsearch.</li><li><b>Cloud SQL Auth Proxy</b> — authenticates connections to a managed DB.</li></ul>",
          },
          {
            q: "Init container vs sidecar?",
            a: "<p><b>Init containers</b> run to completion <i>before</i> app containers start — used for setup (schema migrations, waiting for a dependency, pulling secrets).</p><p><b>Sidecars</b> run alongside the app for its entire lifetime.</p>",
          },
        ],
      },
      {
        q: "Difference between Deployment, StatefulSet, and DaemonSet?",
        difficulty: "medium",
        a: "<ul><li><b>Deployment</b>: stateless replicas, any pod is interchangeable, supports rolling updates & rollbacks. Use for web APIs, workers.</li><li><b>StatefulSet</b>: stable network identity (pod-0, pod-1…), stable persistent storage per pod, ordered start/stop. Use for databases, Kafka, ZooKeeper.</li><li><b>DaemonSet</b>: one pod per node (or per matching node). Use for log agents, node exporters, CNI plugins.</li></ul>",
        followups: [
          {
            q: "When would you choose StatefulSet over Deployment?",
            a: "<p>Any time pods need <b>stable identity</b> or <b>durable per-pod storage</b>:</p><ul><li>Databases where each replica is a distinct role (primary/replica).</li><li>Distributed systems needing peer discovery by name (Zookeeper, Cassandra).</li><li>Systems that write to a per-pod PVC that must survive rescheduling.</li></ul>",
          },
          {
            q: "How do rolling updates work in a Deployment?",
            a: "<p>K8s creates a new ReplicaSet with the new spec, then gradually scales it up while scaling the old one down, respecting <code>maxSurge</code> (extra pods during rollout) and <code>maxUnavailable</code> (pods that can be down).</p><pre>strategy:\n  type: RollingUpdate\n  rollingUpdate:\n    maxSurge: 25%\n    maxUnavailable: 0</pre><p>Rollback with <code>kubectl rollout undo deploy/api</code>.</p>",
          },
        ],
      },
      {
        q: "Explain Service types: ClusterIP, NodePort, LoadBalancer, ExternalName.",
        difficulty: "medium",
        a: "<ul><li><b>ClusterIP</b> (default): internal virtual IP, only reachable inside the cluster.</li><li><b>NodePort</b>: opens the same port on every node — exposes via <code>&lt;nodeIP&gt;:&lt;30000-32767&gt;</code>.</li><li><b>LoadBalancer</b>: provisions a cloud LB (AWS ELB, GCP LB) mapped to the service.</li><li><b>ExternalName</b>: CNAME to an external DNS name — no proxying.</li></ul><p>Modern setups usually expose HTTP with an <b>Ingress</b> (or Gateway API) in front of ClusterIP services.</p>",
        followups: [
          {
            q: "Ingress vs LoadBalancer vs Gateway API?",
            a: "<p><b>LoadBalancer</b>: one cloud LB per service — expensive at scale.</p><p><b>Ingress</b>: one LB shared across many services with host/path routing (NGINX, Traefik, ALB).</p><p><b>Gateway API</b>: the newer, more expressive successor to Ingress — role-oriented (GatewayClass / Gateway / HTTPRoute), supports L4 & L7, and is the future standard.</p>",
          },
        ],
      },
      {
        q: "How do you troubleshoot a Pod stuck in `CrashLoopBackOff`?",
        difficulty: "medium",
        a: "<ol><li><code>kubectl describe pod &lt;name&gt;</code> — check Events, exit code, restart count.</li><li><code>kubectl logs &lt;name&gt; --previous</code> — logs from the crashed container.</li><li>Check <b>liveness/readiness</b> probes — misconfigured probes are a top cause.</li><li>Verify <b>resources</b> — OOMKilled? Insufficient memory?</li><li>Verify <b>configmaps/secrets</b> mounted correctly and <b>env vars</b>.</li><li><code>kubectl debug</code> or an ephemeral container to poke inside.</li></ol>",
        followups: [
          {
            q: "What is the difference between liveness, readiness, and startup probes?",
            a: "<ul><li><b>Liveness</b>: is the container alive? Failing → restart.</li><li><b>Readiness</b>: can it serve traffic? Failing → removed from Service endpoints (not restarted).</li><li><b>Startup</b>: has it finished starting? Once it succeeds, liveness/readiness take over. Great for slow-starting apps to avoid premature liveness kills.</li></ul>",
          },
          {
            q: "What does exit code 137 mean?",
            a: "<p>128 + 9 (SIGKILL). Almost always means the kernel OOM-killer terminated the container — set higher <code>resources.limits.memory</code> or fix the memory leak. Confirm with <code>kubectl describe</code> under Events (<code>OOMKilled</code>).</p>",
          },
        ],
      },
      {
        q: "What are Requests vs Limits, and how does the scheduler use them?",
        difficulty: "medium",
        a: "<p><b>Requests</b>: guaranteed amount the scheduler uses to place the pod. A pod is only scheduled onto a node with enough <i>unrequested</i> capacity.</p><p><b>Limits</b>: hard cap — CPU is throttled, memory over limit triggers OOMKill.</p><p><b>QoS classes</b>:</p><ul><li><b>Guaranteed</b>: requests == limits for all resources.</li><li><b>Burstable</b>: requests &lt; limits.</li><li><b>BestEffort</b>: neither set — first to be evicted under pressure.</li></ul>",
      },
      {
        q: "Explain how ConfigMaps and Secrets work.",
        difficulty: "easy",
        a: "<p><b>ConfigMap</b>: key/value config, mounted as env vars or as files in a volume.</p><p><b>Secret</b>: same shape, base64-encoded at rest (not encrypted by default — enable <b>encryption at rest</b> in etcd).</p><p>Best practice: rotate secrets via <b>External Secrets Operator</b> pulling from AWS Secrets Manager / HashiCorp Vault, rather than storing them in git.</p>",
        followups: [
          {
            q: "Are Kubernetes Secrets secure by default?",
            a: "<p>No — they are just <b>base64-encoded</b>, not encrypted. To make them secure:</p><ol><li>Enable <b>encryption at rest</b> for etcd (using a KMS provider).</li><li>Restrict access via <b>RBAC</b>.</li><li>Never commit secret YAML to git — use <b>Sealed Secrets</b>, <b>SOPS</b>, or an <b>External Secrets Operator</b>.</li></ol>",
          },
        ],
      },
    ],
  },

  /* ============================================================ */
  {
    id: "jenkins",
    name: "Jenkins & CI/CD",
    icon: "🔧",
    kind: "qa",
    description:
      "Pipelines, agents, shared libraries, and pragmatic patterns for reliable delivery automation.",
    items: [
      {
        q: "What is a Jenkinsfile and why use Declarative Pipeline?",
        difficulty: "easy",
        a: "<p>A <b>Jenkinsfile</b> is a text file (checked into your repo) that defines the build pipeline as code — versioned, reviewable, and reproducible.</p><p><b>Declarative</b> pipeline uses a rigid, predictable structure (<code>pipeline { agent … stages { … } }</code>) with rich validation. <b>Scripted</b> pipeline is raw Groovy — more powerful but harder to read.</p><p><b>Rule of thumb</b>: start declarative; drop into a <code>script { }</code> block only when you need Groovy escape hatches.</p>",
        followups: [
          {
            q: "Show a minimal Declarative Jenkinsfile.",
            a: "<pre>pipeline {\n  agent any\n  stages {\n    stage('Build') { steps { sh 'mvn -B clean package' } }\n    stage('Test')  { steps { sh 'mvn test' } }\n    stage('Deploy') {\n      when { branch 'main' }\n      steps { sh './deploy.sh' }\n    }\n  }\n  post {\n    failure { mail to: 'team@x.com', subject: \"FAIL: ${env.JOB_NAME}\" }\n  }\n}</pre>",
          },
          {
            q: "What is a Shared Library?",
            a: "<p>Reusable Groovy code (steps, classes) stored in a separate Git repo and imported via <code>@Library('my-shared')</code>. Great for DRY — one place for common build steps (docker build/push, Slack notifications, artifact promotion).</p>",
          },
        ],
      },
      {
        q: "How would you design a CI/CD pipeline for a microservices application?",
        difficulty: "hard",
        a: "<ol><li><b>Trigger</b>: webhook on PR + on merge to main.</li><li><b>Build</b>: install deps, compile.</li><li><b>Test (parallel)</b>: unit, lint, static analysis, license scan.</li><li><b>Security</b>: SAST (Semgrep/SonarQube), SCA (Snyk/Trivy on lockfiles).</li><li><b>Package</b>: multi-stage Docker build → push to registry with git SHA tag.</li><li><b>Image scan</b>: Trivy for CVEs, fail on HIGH+ if not allowlisted.</li><li><b>Deploy to dev</b>: helm upgrade / kustomize + ArgoCD sync.</li><li><b>Integration tests</b> against dev.</li><li><b>Promote</b>: PR to GitOps repo bumping image tag for stage → prod (manual approval for prod).</li></ol>",
        followups: [
          {
            q: "What is GitOps and how does it change deployment?",
            a: "<p><b>GitOps</b>: git is the single source of truth for cluster state. An operator (ArgoCD/Flux) continuously reconciles the cluster to match the repo.</p><p><b>Push vs Pull</b>:</p><ul><li>Classic CI/CD is <b>push</b>: pipeline runs <code>kubectl apply</code> against the cluster (requires cluster credentials in CI).</li><li>GitOps is <b>pull</b>: operator inside the cluster watches git — no credentials leave the cluster, and drift is auto-corrected.</li></ul>",
          },
          {
            q: "Difference between blue/green, canary, and rolling deployments?",
            a: "<ul><li><b>Rolling</b>: gradually replace old pods with new (K8s default). Simple, some blast radius.</li><li><b>Blue/Green</b>: two full environments; switch traffic atomically. Fast rollback, doubles infra.</li><li><b>Canary</b>: shift a small % of traffic (1% → 10% → 50% → 100%) with metric-based gates. Lowest risk, needs traffic-shifting (service mesh or ingress).</li></ul>",
          },
        ],
      },
      {
        q: "Master vs Agent architecture in Jenkins?",
        difficulty: "easy",
        a: "<p>The <b>controller</b> (formerly \"master\") schedules jobs, serves the UI, and stores config.</p><p><b>Agents</b> (formerly \"slaves\") execute the build steps — connected via SSH, JNLP, or dynamically provisioned in Kubernetes.</p><p>Best practice: keep the controller <b>build-free</b> — spin up ephemeral pod agents on Kubernetes so each build runs in a clean container.</p>",
        followups: [
          {
            q: "Why run Jenkins agents on Kubernetes?",
            a: "<ul><li><b>Ephemeral</b> — fresh pod per build, no state pollution.</li><li><b>Scalable</b> — spin up N agents when the queue grows.</li><li><b>Cost efficient</b> — nodes auto-scale down when idle.</li><li><b>Isolated</b> — build tools bundled per pipeline (Node 20 pod, Java 17 pod, etc.).</li></ul>",
          },
        ],
      },
      {
        q: "How do you manage secrets in Jenkins pipelines?",
        difficulty: "medium",
        a: "<p>Never hardcode. Use <b>Credentials Binding</b>:</p><pre>withCredentials([usernamePassword(\n    credentialsId: 'dockerhub',\n    usernameVariable: 'U',\n    passwordVariable: 'P')]) {\n  sh 'echo $P | docker login -u $U --password-stdin'\n}</pre><p>Or integrate with <b>HashiCorp Vault</b> / <b>AWS Secrets Manager</b> via the respective plugins so secrets are fetched at runtime and never persisted on disk.</p>",
      },
    ],
  },

  /* ============================================================ */
  {
    id: "terraform",
    name: "Terraform & IaC",
    icon: "🏗️",
    kind: "qa",
    description:
      "Provisioning cloud infra as declarative code — state, modules, backends, and the safety patterns that keep you out of trouble.",
    items: [
      {
        q: "What is Terraform state and why is it critical?",
        difficulty: "medium",
        a: "<p>Terraform state (<code>terraform.tfstate</code>) is the JSON snapshot of the real-world resources Terraform manages — mapping resource addresses in code to actual cloud resource IDs.</p><p>Without state, Terraform doesn't know <b>what already exists</b> and can't compute a diff. It also stores <b>sensitive values</b> (passwords, keys), so it must be protected.</p>",
        followups: [
          {
            q: "How do you store state safely for a team?",
            a: "<p>Use a <b>remote backend</b> with locking, versioning, and encryption:</p><ul><li><b>AWS</b>: S3 bucket (versioned + KMS-encrypted) + DynamoDB table for locking.</li><li><b>Azure</b>: Storage Account with blob leases.</li><li><b>GCP</b>: GCS bucket with locking.</li><li><b>Terraform Cloud / Enterprise</b>: fully managed, with RBAC & audit.</li></ul>",
          },
          {
            q: "What is a state lock and why do you need it?",
            a: "<p>A distributed lock (e.g. a DynamoDB item) that prevents two <code>terraform apply</code> runs from executing simultaneously against the same state — which could otherwise corrupt state or cause conflicting API calls.</p><p>If a lock gets stuck (e.g. a Ctrl-C during apply), release it with <code>terraform force-unlock &lt;LOCK_ID&gt;</code> after confirming no run is in progress.</p>",
          },
        ],
      },
      {
        q: "Difference between Terraform and Ansible / CloudFormation / Pulumi?",
        difficulty: "medium",
        a: "<ul><li><b>Terraform</b>: declarative HCL, cloud-agnostic, provisioning-focused, huge provider ecosystem.</li><li><b>CloudFormation</b>: declarative YAML/JSON, AWS-only, deeper AWS integration but slower to adopt new services than Terraform.</li><li><b>Pulumi</b>: same model as Terraform but you write in TypeScript/Python/Go. Great if your team prefers real programming languages.</li><li><b>Ansible</b>: primarily <b>config management</b> (imperative) — can provision but shines at configuring existing servers.</li></ul>",
      },
      {
        q: "What are Terraform Modules and how do you structure them?",
        difficulty: "medium",
        a: "<p>A module is a directory with <code>.tf</code> files that can be called from other configs — a reusable, versioned building block.</p><pre>modules/\n  vpc/\n    main.tf\n    variables.tf\n    outputs.tf\nenvs/\n  prod/\n    main.tf   # module \"vpc\" { source = \"../../modules/vpc\", cidr=... }\n  dev/\n    main.tf</pre><p>Publish shared modules to a private registry (Terraform Cloud, Artifactory) with SemVer tags.</p>",
        followups: [
          {
            q: "How do you version and pin modules?",
            a: "<pre>module \"vpc\" {\n  source  = \"app.terraform.io/acme/vpc/aws\"\n  version = \"~&gt; 3.2\"     # &gt;=3.2 &lt;4.0\n  cidr    = \"10.0.0.0/16\"\n}</pre><p>Or with a git ref: <code>source = \"git::https://github.com/acme/tf-vpc.git?ref=v3.2.0\"</code>.</p>",
          },
        ],
      },
      {
        q: "What is `terraform plan` vs `terraform apply` vs `terraform destroy`?",
        difficulty: "easy",
        a: "<ul><li><b>plan</b>: shows the diff — what will be created/updated/destroyed. Read-only, safe.</li><li><b>apply</b>: executes the plan against the cloud.</li><li><b>destroy</b>: reverses the config — removes all managed resources.</li></ul><p>In CI: <code>terraform plan -out=tf.plan</code>, review, then <code>terraform apply tf.plan</code> — ensures apply matches the reviewed plan exactly.</p>",
        followups: [
          {
            q: "How would you preview changes safely in a PR workflow?",
            a: "<p>Use <b>Atlantis</b> or Terraform Cloud VCS integration:</p><ol><li>PR opened → runs <code>terraform plan</code> and posts the diff as a PR comment.</li><li>Reviewers see exactly what will change.</li><li>Approver types <code>atlantis apply</code> (or clicks Approve+Merge in TFC) to apply.</li></ol>",
          },
        ],
      },
      {
        q: "What is drift and how do you detect it?",
        difficulty: "medium",
        a: "<p><b>Drift</b> = real infra diverging from what state says (someone clicked in the console, an auto-scaling event, etc.).</p><p>Detect with <code>terraform plan</code> — any non-empty diff on unchanged code is drift. Automate with a nightly <code>terraform plan -detailed-exitcode</code> and alert on exit code 2.</p>",
      },
    ],
  },

  /* ============================================================ */
  {
    id: "ansible",
    name: "Ansible",
    icon: "🎯",
    kind: "qa",
    description:
      "Agentless config management — playbooks, roles, inventory, and Ansible-flavored idempotence.",
    items: [
      {
        q: "How does Ansible differ from Puppet/Chef?",
        difficulty: "medium",
        a: "<ul><li><b>Agentless</b>: uses SSH (Linux) / WinRM (Windows). No agent to install, patch, or troubleshoot.</li><li><b>Push-based</b>: control node connects out to managed hosts (vs Puppet/Chef where agents pull).</li><li><b>YAML-based</b> playbooks — low barrier, readable by non-developers.</li><li><b>Order matters</b>: tasks execute top-to-bottom (unlike Puppet's declarative graph).</li></ul>",
        followups: [
          {
            q: "What is idempotence and how does Ansible achieve it?",
            a: "<p><b>Idempotent</b> = running the same playbook multiple times leaves the system in the same final state. Ansible's built-in modules (<code>package</code>, <code>copy</code>, <code>service</code>, <code>lineinfile</code>) check current state before making changes.</p><p><b>Watch out</b> for the <code>command</code>/<code>shell</code> modules — they are <b>not</b> idempotent by default; use <code>creates:</code>/<code>removes:</code> guards, or prefer a proper module.</p>",
          },
        ],
      },
      {
        q: "Explain Playbooks, Roles, and Inventory.",
        difficulty: "easy",
        a: "<ul><li><b>Inventory</b>: list of hosts, grouped (e.g. <code>[webservers]</code>). Static INI/YAML or dynamic (from AWS/GCP/Azure).</li><li><b>Playbook</b>: YAML file mapping groups → tasks/roles.</li><li><b>Role</b>: reusable bundle (<code>tasks/</code>, <code>handlers/</code>, <code>vars/</code>, <code>templates/</code>, <code>defaults/</code>) — the unit of sharing (Ansible Galaxy).</li></ul>",
        followups: [
          {
            q: "What is a handler in Ansible?",
            a: "<p>A task that only runs when <b>notified</b> by another task, and only once per play regardless of how many times notified. Classic use: restart a service after its config file changed.</p><pre>tasks:\n  - name: deploy nginx.conf\n    template: src=nginx.conf.j2 dest=/etc/nginx/nginx.conf\n    notify: restart nginx\n\nhandlers:\n  - name: restart nginx\n    service: name=nginx state=restarted</pre>",
          },
        ],
      },
      {
        q: "How do you secure secrets in Ansible?",
        difficulty: "medium",
        a: "<p>Use <b>Ansible Vault</b> to encrypt sensitive files (or values):</p><pre>ansible-vault encrypt group_vars/prod/secrets.yml\nansible-playbook site.yml --ask-vault-pass\n# or use a vault password file / a script that fetches from AWS Secrets Manager</pre><p>For dynamic secrets, integrate with <b>HashiCorp Vault</b> via the <code>community.hashi_vault</code> collection.</p>",
      },
      {
        q: "How do variables and their precedence work?",
        difficulty: "hard",
        a: "<p>Ansible has 20+ variable sources. The most common precedence (low → high):</p><ol><li>Role defaults (<code>defaults/main.yml</code>) — lowest.</li><li>Inventory group vars → host vars.</li><li>Play vars, role vars, block vars, task vars.</li><li><code>--extra-vars</code> on the CLI — highest, overrides everything.</li></ol><p><b>Rule</b>: put <i>sensible defaults</i> in <code>defaults/</code>, environment-specific values in group/host vars, and emergency overrides via <code>-e</code>.</p>",
      },
    ],
  },

  /* ============================================================ */
  {
    id: "aws",
    name: "AWS Cloud",
    icon: "☁️",
    kind: "qa",
    description:
      "Core AWS services every DevOps engineer should know — IAM, VPC, compute, and the operational sharp edges.",
    items: [
      {
        q: "Explain IAM Users, Groups, Roles, and Policies.",
        difficulty: "medium",
        a: "<ul><li><b>User</b>: long-lived identity for a human/app (has an access key).</li><li><b>Group</b>: a bundle of users sharing policies.</li><li><b>Role</b>: <b>temporary</b> identity assumed by an entity (EC2, Lambda, another account, a federated user). No long-lived credentials.</li><li><b>Policy</b>: JSON document listing allowed/denied actions on resources.</li></ul><p><b>Best practice</b>: use <b>roles + STS</b> instead of long-lived IAM user keys — especially for CI systems and cross-account access.</p>",
        followups: [
          {
            q: "What is an IAM Role's trust policy vs permission policy?",
            a: "<p><b>Trust policy</b>: who is allowed to <i>assume</i> this role (the Principal).</p><p><b>Permission policy</b>: what the role can <i>do</i> once assumed.</p><p>Example: an EC2 role has a trust policy allowing <code>ec2.amazonaws.com</code> to assume it, and a permission policy granting S3 read.</p>",
          },
          {
            q: "How do you give an EKS pod access to AWS APIs?",
            a: "<p>Use <b>IRSA (IAM Roles for Service Accounts)</b>:</p><ol><li>Enable the cluster's OIDC provider.</li><li>Create an IAM role with a trust policy trusting that OIDC provider + a specific K8s ServiceAccount.</li><li>Annotate the ServiceAccount: <code>eks.amazonaws.com/role-arn: arn:aws:iam::...:role/my-role</code>.</li><li>Pod uses that SA — the AWS SDK auto-picks up temporary credentials via a projected token.</li></ol>",
          },
        ],
      },
      {
        q: "What is a VPC and how do public and private subnets differ?",
        difficulty: "medium",
        a: "<p>A <b>VPC</b> is a logically isolated network in AWS. It contains subnets, route tables, gateways, and security groups.</p><ul><li><b>Public subnet</b>: route table has a route <code>0.0.0.0/0 → Internet Gateway</code>. Resources with public IPs are internet-reachable.</li><li><b>Private subnet</b>: no direct IGW route. Outbound internet via a <b>NAT Gateway</b> in a public subnet.</li></ul><p>Typical pattern: ALB in public subnets, EC2/EKS nodes in private subnets, RDS in isolated private subnets.</p>",
        followups: [
          {
            q: "Security Group vs Network ACL?",
            a: "<ul><li><b>Security Group</b>: stateful, instance-level, allow-only rules.</li><li><b>NACL</b>: stateless, subnet-level, allow + deny rules, evaluated in order.</li></ul><p>SGs are your day-to-day. NACLs are for coarse subnet-wide guardrails (e.g. block a known-bad IP range).</p>",
          },
        ],
      },
      {
        q: "How do EC2 Auto Scaling Groups work?",
        difficulty: "medium",
        a: "<p>An ASG launches / terminates EC2 instances based on:</p><ul><li><b>Desired capacity</b>, min, max.</li><li><b>Launch Template</b> (AMI, instance type, user-data).</li><li><b>Scaling policies</b>: target tracking (e.g. keep avg CPU at 50%), step scaling, scheduled.</li><li><b>Health checks</b>: EC2 status + ELB — unhealthy instances are replaced.</li></ul><p>Combined with a <b>Load Balancer target group</b>, this gives you self-healing + horizontal scaling.</p>",
      },
      {
        q: "S3 storage classes — when to use which?",
        difficulty: "easy",
        a: "<ul><li><b>Standard</b>: hot data, frequent access.</li><li><b>Standard-IA / One Zone-IA</b>: infrequent access, 30-day min.</li><li><b>Intelligent-Tiering</b>: unknown access pattern — S3 auto-moves objects.</li><li><b>Glacier Instant Retrieval</b>: quarterly access, ms retrieval.</li><li><b>Glacier Flexible / Deep Archive</b>: archive, minutes-to-hours retrieval, cheapest.</li></ul><p>Automate transitions with <b>lifecycle rules</b>.</p>",
      },
      {
        q: "How would you make an application highly available across AZs?",
        difficulty: "medium",
        a: "<ol><li>Spread compute across ≥ 2 AZs (ASG with subnets in different AZs).</li><li>Front with an <b>Application Load Balancer</b> that health-checks each target.</li><li>Use <b>Multi-AZ RDS</b> (synchronous replica in another AZ, auto-failover).</li><li>Store shared state in <b>S3</b> (11 nines durability, regional) or DynamoDB Global Tables.</li><li>Session state → <b>ElastiCache</b> (Redis, Multi-AZ).</li></ol>",
        followups: [
          {
            q: "AZ vs Region vs Edge Location?",
            a: "<ul><li><b>Region</b>: geographic area (e.g. us-east-1).</li><li><b>Availability Zone</b>: one or more discrete data centers in a region, isolated failure domain (e.g. us-east-1a).</li><li><b>Edge location</b>: CloudFront POPs — global, for content delivery.</li></ul>",
          },
        ],
      },
    ],
  },

  /* ============================================================ */
  {
    id: "monitoring",
    name: "Monitoring & Observability",
    icon: "📊",
    kind: "qa",
    description:
      "Metrics, logs, traces, and the SLO discipline that turns noisy alerts into meaningful signals.",
    items: [
      {
        q: "Monitoring vs Observability — what's the difference?",
        difficulty: "medium",
        a: "<p><b>Monitoring</b>: watching <i>known</i> failure modes with pre-defined dashboards & alerts (\"is CPU &gt; 90%?\").</p><p><b>Observability</b>: the ability to ask <i>new</i> questions about the system's state from the outside — using metrics, logs, and traces — <b>without shipping new code</b>. Answers <i>why</i>, not just <i>what</i>.</p><p>Slogan: monitoring tells you the system is down; observability tells you why.</p>",
        followups: [
          {
            q: "What are the three pillars of observability?",
            a: "<ol><li><b>Metrics</b>: numeric time-series (Prometheus).</li><li><b>Logs</b>: discrete events (Loki, ELK).</li><li><b>Traces</b>: request paths across services (Tempo, Jaeger).</li></ol><p>Modern additions: <b>events</b> (deploy markers), <b>profiles</b> (continuous CPU/memory profiling with Pyroscope/Parca).</p>",
          },
        ],
      },
      {
        q: "How does Prometheus work?",
        difficulty: "medium",
        a: "<p><b>Pull-based</b> — Prometheus scrapes HTTP <code>/metrics</code> endpoints on targets at a configured interval. Targets are discovered via <b>service discovery</b> (Kubernetes, Consul, EC2, static config).</p><p>Metrics are stored in a local <b>time-series DB</b>. Alerts are defined via PromQL and evaluated by Prometheus; firing alerts go to <b>AlertManager</b> for routing/de-dup/silencing.</p>",
        followups: [
          {
            q: "Why is Prometheus pull-based instead of push?",
            a: "<ul><li><b>Health-check by side effect</b>: if a target can't be scraped, that's a signal.</li><li>Easier to run <b>multiple Prometheus servers</b> without target coordination.</li><li>Simpler firewall model: Prometheus initiates outbound connections.</li></ul><p>For short-lived jobs (batch, cron), use the <b>Pushgateway</b> as a bridge.</p>",
          },
          {
            q: "What are the 4 Prometheus metric types?",
            a: "<ol><li><b>Counter</b>: monotonically increasing (requests_total).</li><li><b>Gauge</b>: goes up & down (memory_usage_bytes).</li><li><b>Histogram</b>: buckets + sum + count (request_duration_seconds).</li><li><b>Summary</b>: like histogram but with client-side quantiles.</li></ol><p><b>Prefer histograms</b> for latency — you can compute quantiles across instances server-side.</p>",
          },
        ],
      },
      {
        q: "What is an SLI, SLO, and SLA?",
        difficulty: "medium",
        a: "<ul><li><b>SLI</b> — Service Level Indicator: a metric you measure (e.g. request success rate).</li><li><b>SLO</b> — Service Level Objective: an internal target (e.g. success rate ≥ 99.9% over 30d).</li><li><b>SLA</b> — Service Level Agreement: a <i>contractual</i> promise to customers (usually looser than the SLO).</li></ul><p>Difference between SLO (100% - 99.9% = 0.1%) and current performance = your <b>error budget</b>.</p>",
        followups: [
          {
            q: "What is an error budget policy and how do you use it?",
            a: "<p>A team agreement: if you've <b>burned your monthly error budget</b>, you pause feature work and focus on reliability. If you have budget to spare, you can take more risk (faster deploys, experiments).</p><p>Common alert: <b>burn-rate alert</b> — fires if you're burning budget fast enough to exhaust it in less than X hours.</p>",
          },
        ],
      },
      {
        q: "How would you correlate logs, metrics, and traces?",
        difficulty: "hard",
        a: "<p>Use a shared identifier — typically a <b>trace ID</b> (from OpenTelemetry) — that is:</p><ul><li>Injected into every log line (<code>trace_id=…</code>).</li><li>Attached as an exemplar to Prometheus histograms.</li><li>Included in outbound HTTP headers (W3C traceparent).</li></ul><p>In Grafana, you can then click a slow trace → see all logs with that <code>trace_id</code> → jump to metrics for that service — Loki/Tempo/Prometheus integration handles this natively.</p>",
      },
    ],
  },

  /* ============================================================ */
  {
    id: "networking",
    name: "Networking & Shell",
    icon: "🌐",
    kind: "qa",
    description:
      "DNS, TCP, load balancing, and the shell scripting fundamentals that keep infrastructure glued together.",
    items: [
      {
        q: "Walk me through what happens when you type example.com into a browser.",
        difficulty: "medium",
        a: "<ol><li><b>DNS resolution</b>: browser cache → OS cache → resolver → root → TLD → authoritative NS → returns A/AAAA record.</li><li><b>TCP handshake</b>: SYN, SYN-ACK, ACK.</li><li><b>TLS handshake</b>: negotiate cipher, exchange keys, verify cert chain.</li><li><b>HTTP request</b>: browser sends GET / with headers.</li><li>Request hits <b>CDN</b> → <b>Load Balancer</b> → application server.</li><li>App may query DB / cache.</li><li>Response streamed back, browser renders (HTML → CSS → JS → paint).</li></ol>",
        followups: [
          {
            q: "Difference between A record, CNAME, and ALIAS?",
            a: "<ul><li><b>A</b>: name → IPv4. Fast, direct.</li><li><b>AAAA</b>: name → IPv6.</li><li><b>CNAME</b>: name → another name. Can't be used at the zone apex (bare <code>example.com</code>).</li><li><b>ALIAS / ANAME</b>: provider-specific record that behaves like CNAME but works at the apex — Route53 <b>Alias</b>, Cloudflare CNAME flattening.</li></ul>",
          },
          {
            q: "How does DNS caching work and what does TTL control?",
            a: "<p>Every DNS record has a <b>TTL</b> (seconds). Resolvers cache the answer for at most TTL seconds before re-querying.</p><p>Short TTL (60s) = fast propagation, more DNS load. Long TTL (24h) = fewer queries, slower changes. During a migration, drop TTL to 60s <i>ahead</i> of the change, then raise it back afterward.</p>",
          },
        ],
      },
      {
        q: "TCP vs UDP — when to use each?",
        difficulty: "easy",
        a: "<ul><li><b>TCP</b>: reliable, ordered, connection-oriented. Use for HTTP, SSH, database traffic, file transfer.</li><li><b>UDP</b>: fire-and-forget, no handshake, low overhead. Use for DNS, VoIP, streaming, gaming, QUIC (HTTP/3).</li></ul>",
        followups: [
          {
            q: "What is HTTP/3 and why is it built on UDP?",
            a: "<p>HTTP/3 runs on <b>QUIC</b>, a UDP-based protocol that provides reliability, congestion control, and TLS 1.3 in userspace. Benefits: eliminates head-of-line blocking (each stream is independent), <b>0-RTT</b> resumption, faster connection setup, and no dependence on kernel TCP quirks.</p>",
          },
        ],
      },
      {
        q: "Write a shell script that rotates old log files.",
        difficulty: "medium",
        a: "<pre>#!/usr/bin/env bash\nset -euo pipefail\n\nLOG_DIR=\"${1:-/var/log/myapp}\"\nRETAIN_DAYS=\"${2:-14}\"\n\nfind \"$LOG_DIR\" -type f -name '*.log' -mtime +\"$RETAIN_DAYS\" -print0 |\n  xargs -0 -r gzip -9\n\nfind \"$LOG_DIR\" -type f -name '*.gz'  -mtime +90 -delete\n\necho \"Rotation complete at $(date -Iseconds)\"</pre><p>Compresses logs older than N days, deletes gzipped ones older than 90.</p>",
        followups: [
          {
            q: "What does `set -euo pipefail` do?",
            a: "<ul><li><b>-e</b>: exit on any error.</li><li><b>-u</b>: error on unset variables.</li><li><b>-o pipefail</b>: pipeline exit code = last non-zero, not just the last command.</li></ul><p>Together these turn Bash from \"keeps going forever\" into a much safer scripting environment. Consider it mandatory at the top of every prod script.</p>",
          },
        ],
      },
      {
        q: "How would you debug a service that's slow only for some users?",
        difficulty: "hard",
        a: "<ol><li>Segment by <b>geography / ISP / device</b> in your APM to isolate the affected population.</li><li>Check <b>DNS resolution</b> and <b>CDN edge health</b> per region.</li><li>Look at <b>traces</b> for slow users vs fast users — where's the extra time?</li><li>Verify <b>MTU / PMTU-black-holing</b> if only some networks are affected.</li><li>Check <b>TLS handshake times</b> — expired intermediate cert?</li><li>Correlate with a <b>deployment</b> or a <b>feature flag rollout</b>.</li></ol>",
      },
    ],
  },
];
