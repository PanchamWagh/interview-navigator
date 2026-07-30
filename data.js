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
          "<p><b>DevOps</b> is a cultural and engineering practice that unifies software development (Dev) and IT operations (Ops) to enable teams to build, test, and release software faster and more reliably. Rather than being a specific tool or role, DevOps represents a fundamental shift in how organizations approach the software delivery lifecycle.</p><p>Traditional development followed a waterfall model where developers wrote code and handed it off to operations teams, who were then responsible for deploying and maintaining it. This separation created bottlenecks, mutual finger-pointing, and slow release cycles — often only quarterly or annual. DevOps eliminates these silos by fostering shared ownership across the entire lifecycle: developers understand the operational impact of their code, and operations engineers contribute to development tooling and practices.</p><p>The practice rests on four foundational pillars:</p><ul><li><b>Automation</b> — of builds, tests, deployments, infrastructure provisioning, and monitoring.</li><li><b>Collaboration</b> — between developers, operations, security, QA, and product stakeholders.</li><li><b>Continuous feedback</b> — through metrics, logs, traces, and blameless incident reviews.</li><li><b>Shared responsibility</b> — teams collectively own the health and reliability of their services in production.</li></ul><p>When implemented effectively, DevOps enables organizations to progress from monthly or quarterly releases to multiple daily deployments while simultaneously improving system reliability. Research by DORA (DevOps Research and Assessment) has consistently shown that faster-releasing teams experience fewer incidents — because smaller, more frequent changes are inherently easier to test, review, and debug.</p>",
      },
      {
        title: "Core DevOps Principles (CALMS)",
        body:
          "<p><b>CALMS</b> is a widely used framework that captures the five pillars of a mature DevOps practice. Each letter represents a principle that reinforces the others.</p><p><b>C — Culture:</b> The foundation of DevOps. Without a culture of trust, collaboration, and shared responsibility between Dev and Ops, no amount of tooling can deliver sustainable results. Culture is often the hardest pillar to establish and the most important to protect.</p><p><b>A — Automation:</b> Everything repeatable should be automated: builds, tests, deployments, infrastructure provisioning, monitoring configuration, security scanning, and even routine operational tasks. Automation removes human error, enables scale, and frees engineers to focus on higher-value work.</p><p><b>L — Lean:</b> Borrowed from Lean manufacturing, this principle emphasizes eliminating waste, working in small batches, and delivering value continuously. In DevOps, this translates to short-lived feature branches, small pull requests, and frequent releases rather than large, risky, quarterly launches.</p><p><b>M — Measurement:</b> Improvements cannot be made to what is not measured. Mature teams track meaningful metrics — DORA metrics, Service Level Indicators (SLIs), Service Level Objectives (SLOs), and business KPIs — rather than vanity metrics like lines of code committed.</p><p><b>S — Sharing:</b> Knowledge, tooling, ownership, and responsibility are shared across teams. Post-mortems are blameless and public. Runbooks are documented and accessible. On-call rotations include developers alongside operations engineers.</p>",
      },
      {
        title: "The DevOps Lifecycle",
        body:
          "<p>The DevOps lifecycle is commonly represented as an infinity loop to emphasize its continuous, iterative nature. Unlike traditional waterfall development, which treats deployment as an endpoint, DevOps treats operations as a source of ongoing feedback that flows back into planning.</p><p>The lifecycle consists of eight stages:</p><ol><li><b>Plan</b> — define requirements, prioritize backlogs, design changes.</li><li><b>Code</b> — write and review software changes.</li><li><b>Build</b> — compile source code and produce deployable artifacts.</li><li><b>Test</b> — validate functionality, performance, and security through automated tests.</li><li><b>Release</b> — package the artifact and prepare it for deployment.</li><li><b>Deploy</b> — promote the artifact into production environments.</li><li><b>Operate</b> — run and maintain the software in production.</li><li><b>Monitor</b> — observe system behavior and user impact, then feed insights back to planning.</li></ol><p>What distinguishes the DevOps lifecycle from traditional software delivery is the extent of <b>automation</b> at every stage and the depth of <b>observability</b> across the entire pipeline. When a deployment introduces a regression, metrics and traces surface the issue within minutes rather than days. This tight feedback loop allows teams to iterate quickly with confidence.</p>",
      },
      {
        title: "Key DORA Metrics",
        body:
          "<p>The <b>DORA metrics</b> were developed by Google's DevOps Research and Assessment team based on a multi-year study of thousands of engineering organizations. They are widely regarded as the most reliable indicators of software delivery performance because they balance speed with stability — improving one at the expense of the other is not possible over time.</p><p>The four metrics are:</p><ol><li><b>Deployment Frequency</b> — how often the organization deploys code to production. A measure of throughput and delivery speed.</li><li><b>Lead Time for Changes</b> — the elapsed time from a code commit being merged to that change running in production. A measure of end-to-end delivery efficiency.</li><li><b>Change Failure Rate</b> — the percentage of deployments that cause an incident, require a rollback, or result in degraded service. A measure of quality and stability.</li><li><b>Mean Time to Restore (MTTR)</b> — the average time required to restore service after a production incident. A measure of resilience and recovery capability.</li></ol><p>DORA classifies teams into four performance categories: Low, Medium, High, and Elite. <b>Elite performers</b> deploy multiple times per day, have lead times under one hour, keep their change failure rate below 15%, and restore service in under an hour. Low performers, by contrast, deploy less than once every six months and take weeks to recover from incidents.</p><p>A counter-intuitive but well-documented finding is that faster teams are also more stable. Smaller, more frequent changes are easier to test, review, and debug — so speed and reliability reinforce rather than oppose each other.</p>",
      },
      {
        title: "DevOps vs SRE vs Platform Engineering",
        body:
          "<p>These three disciplines are closely related and often overlap in practice, but they represent distinct approaches to solving different problems.</p><p><b>DevOps</b> is the broadest of the three — a cultural movement and a set of practices aimed at accelerating and improving software delivery through collaboration between Dev and Ops. It is deliberately implementation-agnostic; there is no single correct way to \"do DevOps.\"</p><p><b>Site Reliability Engineering (SRE)</b> is a specific implementation of DevOps pioneered by Google. It treats reliability as a first-class engineering discipline with concrete principles:</p><ul><li><b>Error budgets</b> — a quantified allowance for downtime derived from the SLO. When exhausted, feature work pauses in favor of reliability work.</li><li><b>Toil reduction</b> — measuring and systematically eliminating repetitive manual operational work.</li><li><b>The 50% rule</b> — SREs should not spend more than half their time on operations; the remainder is dedicated to engineering solutions that reduce future operational load.</li></ul><p><b>Platform Engineering</b> is a more recent discipline that has grown significantly since 2020. Instead of each product team independently building its own CI/CD, observability, and infrastructure tooling, a dedicated platform team builds an <b>Internal Developer Platform (IDP)</b> — a self-service, opinionated \"golden path\" that product teams consume. The goal is to reduce cognitive load on developers and improve developer velocity through productized internal tooling.</p><p>In large organizations, all three often coexist: SRE owns reliability, Platform Engineering owns developer productivity, and DevOps provides the cultural framework that binds them together.</p>",
      },
      {
        title: "The Toolchain at a Glance",
        body:
          "<p>A modern DevOps toolchain spans the entire software delivery lifecycle. Understanding how tools fit together — rather than simply knowing their names — is what distinguishes an experienced DevOps engineer.</p><p><b>Version Control Systems (VCS):</b> Git is the universal standard. It is typically hosted on <b>GitHub</b>, <b>GitLab</b>, or <b>Bitbucket</b>, each of which provides pull-request workflows, code review, and often built-in CI/CD.</p><p><b>Continuous Integration and Delivery (CI/CD):</b> <b>Jenkins</b> remains dominant in enterprise environments due to its plugin ecosystem. Newer teams often prefer <b>GitHub Actions</b> or <b>GitLab CI</b> for tighter SCM integration and simpler configuration. For Kubernetes-based deployments, CI (which builds artifacts) is commonly paired with a GitOps tool such as <b>ArgoCD</b> or <b>Flux</b>.</p><p><b>Configuration Management:</b> <b>Ansible</b> is the most widely used because it is agentless and low-friction. <b>Chef</b> and <b>Puppet</b> remain in mature environments but are less common in new projects.</p><p><b>Infrastructure as Code (IaC):</b> <b>Terraform</b> is the industry standard for cloud-agnostic provisioning. <b>Pulumi</b> is preferred by teams that want to use general-purpose programming languages. <b>CloudFormation</b> is used for AWS-specific scenarios that require deep integration.</p><p><b>Containers and Orchestration:</b> <b>Docker</b> (or <b>containerd</b> at the runtime level) is used for building and running container images. <b>Kubernetes</b> is the dominant orchestrator; managed alternatives include AWS <b>ECS/Fargate</b>, Azure Container Apps, and Google Cloud Run.</p><p><b>Observability:</b> The typical open-source stack combines <b>Prometheus</b> and <b>Grafana</b> for metrics, <b>Loki</b> or the <b>ELK stack</b> for logs, and <b>Tempo</b> or <b>Jaeger</b> for distributed traces. <b>Datadog</b>, <b>New Relic</b>, and <b>Dynatrace</b> are common commercial alternatives.</p><p><b>Cloud Providers:</b> <b>AWS</b> is the market leader, <b>Azure</b> is dominant in Microsoft-centric enterprises, and <b>GCP</b> is strong in data and machine learning workloads.</p>",
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
          "A fully automated CI/CD pipeline for a three-service application (two Node.js services and one Python worker) running on Kubernetes. The pipeline replaced a manual, error-prone deployment process with automated build, test, security scanning, and progressive delivery — reducing deployment time from hours to minutes while adding built-in security gates.",
        tech: ["GitHub", "Jenkins", "Docker", "SonarQube", "Trivy", "Helm", "Kubernetes", "ArgoCD"],
        highlights: [
          "<b>Webhook-triggered pipeline:</b> A GitHub webhook triggers the Jenkins pipeline automatically on every pull request to the <code>main</code> branch, providing fast feedback to developers within minutes.",
          "<b>Parallel testing stages:</b> Unit tests, static analysis using SonarQube, and Static Application Security Testing (SAST) run in parallel, reducing total pipeline duration from approximately 15 minutes to under 5 minutes.",
          "<b>Secure container builds:</b> Multi-stage Dockerfiles produce runtime images under 80 MB. Every image is scanned by Trivy for known CVEs before promotion; high-severity vulnerabilities fail the build with no exceptions.",
          "<b>GitOps deployment model:</b> Each service has a versioned Helm chart in a dedicated <code>k8s-config</code> repository. ArgoCD continuously reconciles the cluster state against this repository, meaning no cluster credentials are ever exposed to the CI system.",
          "<b>Progressive delivery:</b> Blue/green rollouts are managed by argo-rollouts. New pods must pass readiness probes for a defined stabilization period; failure triggers an automatic rollback to the previous version, effectively eliminating deploy-related outages.",
        ],
      },
      {
        title: "Infrastructure-as-Code AWS Landing Zone",
        summary:
          "A multi-account AWS Landing Zone provisioned entirely through Terraform, designed to move an organization from a single shared AWS account into a properly segmented multi-account architecture. The project established consistent guardrails, least-privilege IAM, and reproducible infrastructure across all environments.",
        tech: ["Terraform", "AWS Organizations", "S3", "DynamoDB", "IAM", "VPC", "EKS", "RDS"],
        highlights: [
          "<b>Reusable Terraform modules:</b> Independent, versioned modules for VPC, EKS, RDS, and IAM. Each environment workspace (dev, stage, prod) consumes the same module code with environment-specific variables, ensuring consistency across environments.",
          "<b>Secure remote state:</b> Terraform state is stored in a versioned, KMS-encrypted S3 bucket, with DynamoDB providing state locking to prevent concurrent modifications by multiple engineers.",
          "<b>Organizational structure:</b> AWS Organizations is configured with Security, Shared Services, Dev, and Prod Organizational Units. Service Control Policies (SCPs) at the OU level enforce guardrails such as region restrictions and prohibition of public S3 buckets.",
          "<b>Security-as-code in CI:</b> Every pull request runs <code>tfsec</code> and <code>Checkov</code> to detect misconfigurations. Non-compliant changes are blocked at merge time, shifting security left instead of relying on periodic audits.",
          "<b>Controlled apply workflow:</b> Atlantis is used to orchestrate plan/apply workflows. Engineers open pull requests; Atlantis posts the Terraform plan as a comment for review, and applies are triggered only after explicit approval.",
        ],
      },
      {
        title: "Kubernetes Observability Stack",
        summary:
          "A unified metrics, logs, and traces stack deployed on Amazon EKS, providing a single pane of glass for engineering and operations teams. The stack replaced fragmented, siloed monitoring tools with correlated telemetry and SLO-based alerting, significantly reducing incident detection and resolution times.",
        tech: ["Prometheus", "Grafana", "Loki", "Tempo", "OpenTelemetry", "AlertManager", "Kubernetes"],
        highlights: [
          "<b>Kubernetes-native metrics:</b> Deployed via the <code>kube-prometheus-stack</code> Helm chart, which bundles Prometheus, Grafana, and AlertManager with pre-configured dashboards, recording rules, and alerts appropriate for Kubernetes workloads.",
          "<b>Unified telemetry:</b> Logs are ingested by Loki using a label-indexed design that is more cost-effective at scale than full-text indexing. Distributed traces are captured by Tempo. Application services are instrumented with OpenTelemetry SDKs, ensuring trace IDs propagate consistently across service boundaries.",
          "<b>SLO-based alerting:</b> Service Level Objectives are defined for each critical user journey, with burn-rate alerts in Grafana. Fast burn rates (exhausting the monthly error budget within hours) page on-call engineers via PagerDuty; slower burn rates generate Slack notifications for asynchronous investigation.",
          "<b>Multi-tenant access control:</b> Grafana teams and folder-level permissions ensure that each product team sees only their own dashboards, enabling self-service without cross-team noise.",
        ],
      },
      {
        title: "Zero-Downtime Deployment with GitOps",
        summary:
          "Migration of a legacy push-based deployment pipeline to a pull-based GitOps model using ArgoCD. Beyond the tooling change, the project shifted the team's mental model from imperative deployments to declarative desired-state reconciliation, dramatically improving deployment reliability and rollback speed.",
        tech: ["ArgoCD", "Helm", "Kustomize", "Kubernetes", "GitHub Actions"],
        highlights: [
          "<b>Separation of concerns:</b> Application source code lives in the service repository, which builds container images and updates image tags via automated commits. Kubernetes manifests are maintained in a dedicated <code>k8s-config</code> repository, providing a clean audit trail of all changes to production.",
          "<b>Environment templating:</b> ArgoCD ApplicationSets generate per-environment Application resources (dev, stage, prod) from a single template using generators, eliminating YAML duplication across environments.",
          "<b>PR-based promotions:</b> Environment promotions are performed via pull requests that update the image tag in the target environment's overlay. Rollback is a single command (<code>argocd app rollback</code>) that reverts the manifest state.",
          "<b>Measurable business outcome:</b> Mean Time to Restore (MTTR) for deployment-related incidents dropped from approximately 45 minutes to under 5 minutes, driven by declarative state and instant, one-command rollbacks.",
        ],
      },
      {
        title: "Immutable Base AMIs with Packer + Ansible",
        summary:
          "A weekly automated pipeline that produces hardened, pre-configured Amazon Machine Images (AMIs) for use across the organization's EC2 fleet. The project established an immutable infrastructure pattern where every instance starts from a validated golden image, replacing the previous approach of configuring vanilla AMIs at boot time.",
        tech: ["Packer", "Ansible", "AWS", "Jenkins", "InSpec"],
        highlights: [
          "<b>Image build pipeline:</b> Packer provisions a temporary EC2 instance from the Amazon Linux 2 base image, applies configuration, and snapshots the result into a new AMI. The entire process runs unattended in Jenkins on a weekly schedule.",
          "<b>Provisioning with Ansible:</b> Ansible playbooks install standard operational agents (CloudWatch Agent, AWS Systems Manager Agent, Falco for runtime security) and apply CIS Benchmark hardening across the operating system.",
          "<b>Compliance validation:</b> InSpec compliance tests execute against the newly built AMI before it is published. If any control fails, the AMI is rejected and the build fails, preventing non-compliant images from reaching production.",
          "<b>Full traceability:</b> Each published AMI is tagged with the git SHA of the Packer configuration that produced it. Jenkins attaches the CVE scan report as a build artifact, ensuring every AMI in production can be traced back to its exact source code and security posture at build time.",
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
        a: "<p>Troubleshooting high CPU usage follows a systematic top-down approach: identify the offending process first, then progressively narrow down the root cause.</p><p><b>Step 1 — Identify the process:</b> Use <code>top</code> or <code>htop</code> to display processes sorted by CPU consumption. The interactive view shows the process ID (PID), user, command, and CPU percentage in real time. For a scriptable output, use:</p><pre>ps -eo pid,ppid,cmd,%cpu,%mem --sort=-%cpu | head</pre><p><b>Step 2 — Analyze the process behavior:</b> Once the offending PID is identified, deeper analysis depends on the process type. For multi-threaded processes, <code>pidstat -u -p &lt;PID&gt; 1</code> shows per-thread CPU usage. To observe what system calls the process is making, <code>strace -p &lt;PID&gt;</code> attaches to the process. For CPU profiling at the function level, <code>perf top -p &lt;PID&gt;</code> provides a sampling profile that highlights hot code paths.</p><p><b>Step 3 — Distinguish CPU-bound from I/O-bound workloads:</b> The <code>uptime</code> command shows the load average, but this metric alone is misleading. A high load with low CPU utilization typically indicates I/O wait rather than actual CPU saturation. Confirm using <code>vmstat 1</code> or the CPU breakdown in <code>top</code>: high <code>%wa</code> (I/O wait) points to disk or network bottlenecks, while high <code>%us</code> and <code>%sy</code> indicate genuine CPU pressure.</p><p><b>Step 4 — Correlate with application logs:</b> High CPU is often a symptom of an underlying issue — a Java garbage collection loop, a runaway cron job, an infinite loop introduced in a recent deployment, or excessive logging. Reviewing application logs alongside system metrics typically reveals the root cause.</p>",
        followups: [
          {
            q: "What's the difference between load average and CPU usage?",
            a: "<p>These two metrics measure different things and are commonly confused.</p><p><b>CPU usage percentage</b> represents the proportion of time the CPU is actively executing instructions rather than sitting idle. It is a direct measure of CPU utilization and is bounded between 0% and 100% per core.</p><p><b>Load average</b> represents the average number of processes that are either <b>running on the CPU</b> or <b>waiting in the run queue for CPU time</b>, plus processes in an <b>uninterruptible sleep state</b> (typically waiting on I/O). It is reported over three time windows: the last 1, 5, and 15 minutes.</p><p>On a 4-core system:</p><ul><li>A load average of <b>4</b> indicates full CPU utilization — one process running on each core with none queued.</li><li>A load average of <b>8</b> indicates 2× oversubscription — twice as much work as the system can process at once.</li><li>A load average of <b>2</b> indicates 50% utilization — CPU is available.</li></ul><p>The critical distinction: a system can have <b>high load average with low CPU utilization</b>. This almost always indicates I/O contention — processes are stuck waiting for disk or network operations to complete, so the CPU appears idle but the run queue is deep. Diagnosing this correctly requires looking at both metrics together, not either one in isolation.</p>",
          },
          {
            q: "How do you distinguish CPU-bound vs I/O-bound processes?",
            a: "<p>The distinction is made by analyzing the CPU time breakdown, which is visible in <code>top</code>, <code>vmstat 1</code>, or <code>mpstat -P ALL 1</code>. The breakdown categorizes CPU time by activity type:</p><ul><li><b>%us (user):</b> Time spent executing user-space code. High values indicate <b>CPU-bound</b> workloads executing application logic.</li><li><b>%sy (system):</b> Time spent executing kernel code on behalf of user processes. High values often indicate heavy system-call activity (e.g., many small file operations).</li><li><b>%wa (I/O wait):</b> Time the CPU is idle but has processes waiting for I/O to complete. High values indicate <b>I/O-bound</b> workloads — the CPU is not the bottleneck; storage or network is.</li><li><b>%si / %hi (soft/hard interrupts):</b> Time spent servicing interrupts. High values typically indicate heavy network packet processing.</li><li><b>%id (idle):</b> Time the CPU has no work to do.</li></ul><p>For I/O-bound investigations, the next diagnostic tool is <code>iostat -x 1</code>, which shows per-device metrics including queue depth (<code>avgqu-sz</code>), average wait time (<code>await</code>), and service time (<code>svctm</code>). When <code>await</code> is significantly higher than <code>svctm</code>, the storage device is saturated and requests are queuing up.</p>",
          },
          {
            q: "Show the exact command to find the top 5 memory-consuming processes.",
            a: "<p>The most reliable command uses <code>ps</code> sorted by resident set size (RSS):</p><pre>ps -eo pid,user,rss,vsz,cmd --sort=-rss | head -6</pre><p>The output includes six lines: one header and the top five processes by memory. Including both <b>RSS</b> and <b>VSZ</b> is useful because they measure different things:</p><ul><li><b>RSS (Resident Set Size)</b> — physical memory actually consumed by the process.</li><li><b>VSZ (Virtual Size)</b> — total virtual memory allocated, including memory that has been mapped but not actively used.</li></ul><p>A process with very high VSZ but low RSS is typically not a memory pressure concern — it has mapped a lot of address space but is only using a small portion. For interactive analysis, <code>top -o %MEM</code> or pressing <code>M</code> within <code>top</code> achieves the same sorted view in real time.</p>",
          },
        ],
      },
      {
        q: "Explain Linux file permissions (chmod, chown, umask).",
        difficulty: "easy",
        a: "<p>Linux file permissions control who can perform which operations on files and directories. The permission model consists of three permission classes and three permission types.</p><p><b>Permission classes:</b></p><ul><li><b>Owner (u):</b> The user who owns the file.</li><li><b>Group (g):</b> The group associated with the file.</li><li><b>Others (o):</b> All users who are neither the owner nor in the group.</li></ul><p><b>Permission types:</b></p><ul><li><b>Read (r) = 4:</b> View file contents or list directory contents.</li><li><b>Write (w) = 2:</b> Modify file contents or add/remove entries in a directory.</li><li><b>Execute (x) = 1:</b> Execute a file or traverse into a directory.</li></ul><p>Permissions are typically expressed as a three-digit octal number where each digit represents the sum of permissions for owner, group, and others respectively.</p><p><b>chmod</b> changes file permissions. For example, <code>chmod 755 script.sh</code> grants <code>rwx</code> (7 = 4+2+1) to the owner, <code>r-x</code> (5 = 4+1) to the group, and <code>r-x</code> to others — a common permission for executable scripts.</p><p><b>chown</b> changes file ownership. <code>chown user:group file</code> sets both the owner and the group; <code>chown user file</code> changes only the owner; <code>chown :group file</code> changes only the group.</p><p><b>umask</b> defines default permissions for newly created files and directories. It works as a subtractive mask against the system defaults (666 for files, 777 for directories). A common umask of <code>022</code> results in new files with permissions <code>644</code> (rw-r--r--) and new directories with <code>755</code> (rwxr-xr-x).</p><p>For more granular access control that cannot be expressed with the standard owner/group/other model, Linux supports <b>Access Control Lists (ACLs)</b> via <code>setfacl</code> and <code>getfacl</code>, which allow per-user or per-group permissions on a file.</p>",
        followups: [
          {
            q: "What is the SUID bit and when is it used?",
            a: "<p>The <b>SUID (Set User ID)</b> bit is a special permission that causes an executable to run with the privileges of its <b>owner</b> rather than the user who invoked it. When set on a file owned by root, any user who executes the file runs it with root privileges for the duration of the execution.</p><p>The canonical example is <code>/usr/bin/passwd</code>. Regular users need to change their own passwords, but password hashes are stored in <code>/etc/shadow</code>, which is owned by root and unreadable by regular users. The <code>passwd</code> binary is owned by root with the SUID bit set, allowing it to modify <code>/etc/shadow</code> on behalf of the invoking user.</p><p><b>Setting SUID:</b> The command <code>chmod u+s file</code> enables SUID. In directory listings, the SUID bit appears as an <code>s</code> in place of the owner's execute bit — e.g., <code>-rwsr-xr-x</code>.</p><p><b>Security considerations:</b> SUID binaries represent a significant attack surface. A vulnerability in an SUID-root binary can allow local users to gain root privileges. Well-managed systems periodically audit SUID binaries with:</p><pre>find / -perm -4000 -type f 2&gt;/dev/null</pre><p>Any unexpected entry in the result deserves investigation. A related bit, <b>SGID (Set Group ID)</b>, does the same thing for the group class. On directories, SGID causes new files created within to inherit the directory's group.</p>",
          },
          {
            q: "Difference between hard link and soft (symbolic) link?",
            a: "<p>Both are ways to reference a file by an additional name, but they operate at different levels of the filesystem.</p><p><b>Hard link:</b> A hard link is an additional directory entry that points to the <b>same underlying inode</b> as the original file. Since it references the inode directly, all hard links to a file are equivalent — none is more \"original\" than another. The file's data is only released when the inode's link count reaches zero (i.e., all hard links are deleted).</p><p><b>Constraints of hard links:</b></p><ul><li>Cannot span filesystems (inodes are filesystem-specific).</li><li>Cannot link directories (would create cycles that break filesystem traversal).</li></ul><p><b>Soft link (symbolic link):</b> Created with <code>ln -s target link</code>, a soft link is a small file whose contents are a <b>path</b> to the target. It is a reference by name, not by inode.</p><p><b>Characteristics of soft links:</b></p><ul><li>Can span filesystems.</li><li>Can point to directories.</li><li>Can point to nonexistent targets (dangling links).</li><li>Break if the target is moved or deleted.</li></ul><p><b>When to use each:</b> Hard links are appropriate when the second name must be indistinguishable from the first at the filesystem level — rare in typical system administration. Soft links are appropriate for most other use cases, such as versioned binary paths (e.g., <code>/usr/local/bin/python</code> pointing to a specific version) or configuration symlinks in package management.</p>",
          },
        ],
      },
      {
        q: "What is a systemd unit and how do you create one?",
        difficulty: "medium",
        a: "<p><b>systemd</b> is the init system used by most modern Linux distributions. It runs as PID 1 — the first process started by the kernel — and is responsible for starting, stopping, and supervising all other system services. It replaces the older SysV init and Upstart systems, offering parallel service startup, dependency management, and unified logging.</p><p>A <b>unit</b> is a systemd configuration file that describes a manageable resource. Unit types include:</p><ul><li><b>.service</b> — a background process (the most common).</li><li><b>.timer</b> — a scheduled trigger (systemd's cron replacement).</li><li><b>.socket</b> — a socket-activated service.</li><li><b>.mount</b> / <b>.automount</b> — filesystem mounts.</li><li><b>.target</b> — a grouping of units (analogous to SysV runlevels).</li></ul><p>To create a service unit for a custom application, place a file at <code>/etc/systemd/system/myapp.service</code>:</p><pre>[Unit]\nDescription=My App\nAfter=network.target\n\n[Service]\nType=simple\nUser=myapp\nExecStart=/usr/local/bin/myapp\nRestart=on-failure\nRestartSec=5\n\n[Install]\nWantedBy=multi-user.target</pre><p><b>Section breakdown:</b></p><ul><li><b>[Unit]:</b> Metadata and dependencies. <code>After=network.target</code> ensures the service starts only after networking is available.</li><li><b>[Service]:</b> How the service is executed. <code>Type=simple</code> is appropriate for foreground processes. <code>User=</code> runs the service as a non-root user. <code>Restart=on-failure</code> instructs systemd to automatically restart the service on abnormal exit.</li><li><b>[Install]:</b> Enablement configuration. <code>WantedBy=multi-user.target</code> means the service starts during normal boot.</li></ul><p>After creating the unit file:</p><pre>systemctl daemon-reload    # reload systemd's unit index\nsystemctl enable --now myapp    # start now and enable on boot</pre>",
        followups: [
          {
            q: "How do you check service logs with systemd?",
            a: "<p>systemd captures the standard output and standard error of every service into a centralized structured log store called the <b>journal</b>. The <code>journalctl</code> command is the standard interface to query it.</p><p><b>Common queries:</b></p><pre>journalctl -u myapp -f                    # tail live logs for a unit\njournalctl -u myapp --since \"1 hour ago\"  # time-filtered\njournalctl -u myapp --since today          # today's logs\njournalctl -p err -u myapp                # only error-level logs\njournalctl -u myapp -n 100                 # last 100 lines\njournalctl -k                              # kernel messages only</pre><p><b>Advantages over traditional log files:</b> The journal is structured (fields can be filtered), indexed (fast queries even on large logs), and unified (all services in one queryable store). Logs are automatically rotated based on disk usage and configurable retention.</p>",
          },
          {
            q: "What are the systemd `Type=` values and when to use each?",
            a: "<p>The <code>Type=</code> directive in the <code>[Service]</code> section tells systemd how to determine that a service has finished starting. Choosing the correct type is important for accurate dependency ordering.</p><ul><li><b>simple (default):</b> The main process runs in the foreground. systemd considers the service ready as soon as it is spawned. Appropriate for most modern applications that do not explicitly signal readiness.</li><li><b>forking:</b> The process forks a child and the parent exits. systemd considers the service started once the parent exits. Used for legacy daemons; <code>PIDFile=</code> is typically required.</li><li><b>oneshot:</b> The process runs, performs its work, and exits. Suitable for scripts and setup tasks. Often combined with <code>RemainAfterExit=yes</code> so systemd remembers the unit as \"active\" after the process exits.</li><li><b>notify:</b> The application explicitly signals readiness by calling <code>sd_notify(READY=1)</code>. This is the most reliable option for services that other units depend on, because systemd only considers the service ready when the application confirms it. Used by nginx, Docker, and other production-grade services.</li><li><b>idle:</b> The service starts only after all other queued jobs have completed. Rarely used outside boot ordering scenarios.</li></ul><p><b>Guideline:</b> For new applications, prefer <code>notify</code> when explicit readiness signaling is possible, or <code>simple</code> otherwise. The <code>forking</code> type should not be used for new code.</p>",
          },
        ],
      },
      {
        q: "How do you find files modified in the last 24 hours over 100MB?",
        difficulty: "easy",
        a: "<p>The <code>find</code> command supports combining multiple search criteria. To locate files modified within the last 24 hours that are larger than 100 MB:</p><pre>find /var/log -type f -mtime -1 -size +100M -exec ls -lh {} \\;</pre><p><b>Flag breakdown:</b></p><ul><li><b>/var/log</b> — the search root; adjust to any directory or use <code>/</code> for a filesystem-wide search.</li><li><b>-type f</b> — restricts results to regular files (excluding directories, symlinks, etc.).</li><li><b>-mtime -1</b> — modification time less than 1 day ago. The sign is significant: <code>-mtime 1</code> means <i>exactly</i> 1 day ago (24–48 hours), <code>-mtime -1</code> means less than 1 day, and <code>-mtime +1</code> means more than 1 day.</li><li><b>-size +100M</b> — size greater than 100 megabytes. Suffixes include <code>k</code> (KB), <code>M</code> (MB), <code>G</code> (GB).</li><li><b>-exec ls -lh {} \\;</b> — runs <code>ls -lh</code> on each matching file for human-readable sizes. The <code>{}</code> is replaced with each file path, and <code>\\;</code> terminates the command.</li></ul><p>An equivalent, simpler alternative is <code>-ls</code>, which prints similar information without invoking an external command:</p><pre>find /var/log -type f -mtime -1 -size +100M -ls</pre><p>This command is frequently used when investigating unexpected disk usage, since large recently modified files are common culprits (unrotated logs, core dumps, or misconfigured application output).</p>",
        followups: [
          {
            q: "What's the difference between -mtime, -atime, and -ctime?",
            a: "<p>All three flags filter files by timestamp, but each timestamp represents a different type of file activity:</p><ul><li><b>mtime (modification time):</b> When the <i>content</i> of the file was last changed. This is what most users mean by \"when the file was modified.\"</li><li><b>atime (access time):</b> When the file was last <i>read</i>. Many filesystems now mount with <code>relatime</code> or <code>noatime</code> to avoid the overhead of updating this on every read operation.</li><li><b>ctime (change time):</b> When the file's <i>inode</i> was last changed. This includes changes to content <i>and</i> to metadata such as permissions, ownership, or file name. Note that despite the name, <code>ctime</code> is <b>not</b> the file creation time.</li></ul><p>Historically, Linux did not track file creation time. Modern filesystems such as ext4, XFS, and Btrfs support a fourth timestamp — <b>btime (birth time)</b> — which is the actual creation time. It is not accessible through <code>find</code> but can be viewed with <code>stat</code>.</p>",
          },
        ],
      },
      {
        q: "How do you check what process is using port 8080?",
        difficulty: "easy",
        a: "<p>The modern preferred tool is <code>ss</code> (socket statistics), which is significantly faster than the older <code>netstat</code>, especially on busy systems:</p><pre>ss -ltnp | grep :8080</pre><p><b>Flag breakdown:</b></p><ul><li><b>-l</b> — show only listening sockets.</li><li><b>-t</b> — TCP sockets only (use <b>-u</b> for UDP).</li><li><b>-n</b> — do not resolve hostnames or port names (much faster).</li><li><b>-p</b> — show the process using each socket. Requires root or the <code>CAP_NET_ADMIN</code> capability.</li></ul><p>An alternative when <code>ss</code> is unavailable or additional detail is needed is <code>lsof</code>:</p><pre>lsof -iTCP:8080 -sTCP:LISTEN -n -P</pre><p><code>lsof</code> is slower but provides a comprehensive view of the process, including the user, PID, and any additional open file descriptors. Both tools require appropriate permissions to display process information.</p>",
        followups: [
          {
            q: "How to kill a process holding a port?",
            a: "<p>The most direct approach uses <code>fuser</code>, which combines process lookup and signaling in a single command:</p><pre>fuser -k 8080/tcp</pre><p>By default, <code>fuser -k</code> sends <b>SIGKILL</b>, which terminates the process immediately without allowing cleanup. To send a gentler signal first, use <code>-TERM</code>:</p><pre>fuser -k -TERM 8080/tcp</pre><p>Alternatively, using <code>lsof</code> to find the PID and then killing it explicitly:</p><pre>kill $(lsof -t -iTCP:8080 -sTCP:LISTEN)</pre><p><b>Best practice:</b> Always attempt a graceful shutdown first (<code>SIGTERM</code>, which is what <code>kill</code> sends by default) before escalating to <code>SIGKILL</code> (<code>kill -9</code>). SIGKILL cannot be caught or handled by the process, so it prevents cleanup of temporary files, network connections, and in-memory state.</p>",
          },
        ],
      },
      {
        q: "Explain the boot process of a Linux system.",
        difficulty: "hard",
        a: "<p>The Linux boot process is a series of handoffs from hardware to firmware to the kernel and finally to userspace. Understanding each stage is essential for diagnosing boot failures.</p><ol><li><b>BIOS / UEFI:</b> The system firmware runs the Power-On Self-Test (POST), initializes hardware, and loads the bootloader from a designated boot device. Modern systems use UEFI, which supports larger disks and provides Secure Boot; legacy systems use BIOS.</li><li><b>Bootloader (GRUB):</b> The bootloader — most commonly GRUB (GRand Unified Bootloader) on Linux — presents a boot menu, loads the selected kernel image and initramfs into memory, and transfers execution to the kernel entry point.</li><li><b>Kernel initialization:</b> The kernel decompresses itself, initializes essential hardware drivers, sets up memory management, and mounts the root filesystem in read-only mode. It then executes the first userspace process (PID 1).</li><li><b>initramfs execution:</b> The initramfs is a temporary in-memory root filesystem containing minimal drivers and userspace tools required to mount the real root filesystem. This handles complex root configurations such as LVM, encrypted LUKS volumes, iSCSI, or NFS. Once the real root is mounted, the kernel performs a <code>pivot_root</code> and hands off to the real init.</li><li><b>init / systemd:</b> PID 1 — systemd on modern distributions — reads its unit files and brings up services according to their dependencies. It progresses through boot targets (e.g., <code>basic.target</code> → <code>multi-user.target</code> → <code>graphical.target</code>), starting services in parallel where possible.</li><li><b>Login:</b> Once all services required by the default target are running, a login prompt is presented — either <code>getty</code> on a text console or a display manager for graphical sessions.</li></ol><p><b>Practical debugging value:</b> Knowing which stage a boot failure occurs in indicates which log or interface to consult. Firmware issues appear on the console before GRUB; GRUB errors appear at the menu; kernel issues appear in <code>dmesg</code>; systemd issues appear in the journal (<code>journalctl -b</code>); and application startup issues appear in per-service logs.</p>",
        followups: [
          {
            q: "What is initramfs and why do we need it?",
            a: "<p><b>initramfs (initial RAM filesystem)</b> is a temporary root filesystem loaded into memory by the bootloader alongside the kernel. Its purpose is to provide the environment needed to mount the actual root filesystem.</p><p><b>The bootstrapping problem it solves:</b> To run any userspace program, the kernel must have a root filesystem mounted. However, the root filesystem may reside on storage that itself requires drivers or setup to access — for example:</p><ul><li>A logical volume managed by LVM.</li><li>An encrypted LUKS volume that requires a passphrase.</li><li>A remote iSCSI target.</li><li>An NFS share.</li><li>A RAID array requiring assembly.</li></ul><p>If all the drivers and tools required for these scenarios were compiled into the kernel, kernel images would be enormous and inflexible. initramfs solves this by packaging exactly the drivers and utilities needed for a given system into a small cpio archive.</p><p><b>Boot sequence:</b> The bootloader loads both the kernel and the initramfs image into RAM. The kernel mounts initramfs as a temporary root, executes its <code>/init</code> script, which loads necessary modules and mounts the real root filesystem. The kernel then performs a <code>pivot_root</code> syscall to switch roots, and initramfs is discarded from memory.</p><p>The initramfs image is generated per system (e.g., by <code>mkinitcpio</code>, <code>dracut</code>, or <code>update-initramfs</code>), containing only the modules and tools relevant to that system's storage configuration.</p>",
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
        a: "<p>Both <code>git merge</code> and <code>git rebase</code> integrate changes from one branch into another, but they produce fundamentally different commit histories.</p><p><b>git merge</b> creates a new commit — a <i>merge commit</i> — that has two parents: the tip of each integrated branch. This preserves the complete history of both branches, including the fact that development happened in parallel. The result is visible as a graph structure in <code>git log --graph</code>, showing that a feature branch existed and was integrated at a specific point.</p><p><b>git rebase</b> replays the commits of the source branch onto the tip of the target branch, one at a time. The result is a linear history that looks as if all the work was done sequentially on the latest state of the target branch. However, because each replayed commit has a new parent, its SHA changes — Git rewrites history rather than preserving it.</p><p><b>Comparison:</b></p><ul><li><b>Merge:</b> Preserves history and context, non-destructive, but produces a non-linear graph.</li><li><b>Rebase:</b> Produces clean linear history, ideal for code review, but rewrites commit SHAs — problematic for shared branches.</li></ul><p><b>Recommended workflow:</b></p><ol><li>Rebase feature branches onto <code>main</code> before opening a pull request to produce a clean, reviewable history.</li><li>Merge (or squash-merge) the pull request into <code>main</code> according to team convention.</li><li>Never rebase a branch that other developers are working on — it forces them to reconcile history divergence and can lead to lost commits.</li></ol>",
        followups: [
          {
            q: "What is interactive rebase and when is it useful?",
            a: "<p><b>Interactive rebase</b> — invoked with <code>git rebase -i &lt;base&gt;</code> — opens an editor listing each commit in the range to be replayed, with a keyword next to each. Modifying the keyword controls what happens to that commit:</p><ul><li><b>pick</b> — apply the commit as-is (default).</li><li><b>reword</b> — apply the commit but edit its message.</li><li><b>edit</b> — pause after applying, allowing further edits before continuing.</li><li><b>squash</b> — combine the commit with the previous one, merging their messages.</li><li><b>fixup</b> — like squash, but discard the commit's message.</li><li><b>drop</b> — remove the commit entirely.</li></ul><p>Interactive rebase is commonly used to clean up a feature branch before opening a pull request. Work-in-progress commits like \"fix typo\" or \"wip\" can be squashed into their logical parent commits, producing a series of clean, self-contained changes that are easier for reviewers to evaluate.</p><p>Because interactive rebase rewrites history, it should only be used on local branches that have not yet been shared with others.</p>",
          },
          {
            q: "How do you recover a commit you accidentally lost via reset --hard?",
            a: "<p>The <code>git reflog</code> command records every movement of HEAD in the local repository — every commit, checkout, reset, rebase, and merge. Even when a <code>git reset --hard</code> appears to have destroyed work, the commits still exist in the object database; they are simply no longer reachable from any branch reference.</p><p><b>Recovery procedure:</b></p><ol><li>Run <code>git reflog</code> to display the history of HEAD movements. Each entry shows a SHA, a reference (e.g., <code>HEAD@{2}</code>), and the action that produced it.</li><li>Identify the SHA of the state to recover — typically the entry just before the <code>reset --hard</code> action.</li><li>Restore the state by creating a new branch or checking out the SHA:</li></ol><pre>git branch recovered &lt;sha&gt;\n# or\ngit reset --hard &lt;sha&gt;</pre><p>Reflog entries are retained for approximately 90 days by default (configurable via <code>gc.reflogExpire</code>), providing a substantial window for recovery. This mechanism makes destructive local operations far less risky than they appear.</p>",
          },
        ],
      },
      {
        q: "Explain Gitflow vs Trunk-Based Development.",
        difficulty: "medium",
        a: "<p><b>Gitflow</b> and <b>Trunk-Based Development (TBD)</b> are two fundamentally different branching strategies, each suited to different development contexts.</p><p><b>Gitflow</b> uses multiple long-lived branches with defined roles:</p><ul><li><code>main</code> (or <code>master</code>) — always reflects production-released code.</li><li><code>develop</code> — the integration branch for active development.</li><li><code>feature/*</code> — short-lived branches for individual features, merged into <code>develop</code>.</li><li><code>release/*</code> — stabilization branches created from <code>develop</code> when preparing a release.</li><li><code>hotfix/*</code> — emergency fix branches created from <code>main</code>.</li></ul><p>Gitflow is well-suited to products with scheduled releases and multiple supported versions in the field — traditional shipped software, desktop applications, or embedded systems. However, it introduces significant ceremony: branches live for weeks, merges become painful, and continuous delivery is difficult.</p><p><b>Trunk-Based Development</b> uses a single long-lived branch (<code>main</code>) as the source of truth. Developers either commit directly to <code>main</code> or use very short-lived feature branches lasting hours to at most a day. There is no <code>develop</code> branch. Releases are cut directly from <code>main</code> or via release tags.</p><p>TBD requires two supporting practices to work safely:</p><ul><li><b>Strong CI:</b> Every commit must be validated by comprehensive automated tests before merging.</li><li><b>Feature flags:</b> Incomplete features are guarded by runtime toggles rather than isolated on long-lived branches.</li></ul><p><b>Industry direction:</b> DORA research consistently identifies TBD as characteristic of elite-performing software delivery organizations. It enables true continuous delivery and eliminates the coordination overhead of long-lived branches. Gitflow remains appropriate primarily for versioned software that requires multiple maintained releases.</p>",
        followups: [
          {
            q: "What is a feature flag and why is it central to trunk-based?",
            a: "<p>A <b>feature flag</b> (also called a feature toggle) is a runtime configuration that gates the execution of a code path. It is typically implemented as a conditional check backed by a configuration store:</p><pre>if (flag.enabled(\"new-checkout\", user)) {\n  renderNewCheckout();\n} else {\n  renderLegacyCheckout();\n}</pre><p><b>Role in trunk-based development:</b> Feature flags allow incomplete or experimental code to be merged into <code>main</code> and deployed to production without exposing the functionality to users. This decouples two events that have historically been tied together:</p><ul><li><b>Deploy:</b> Code is running in production.</li><li><b>Release:</b> The functionality is visible to users.</li></ul><p>This separation enables continuous integration of small changes without requiring long-lived branches to isolate in-progress work.</p><p><b>Advanced patterns enabled by flags:</b></p><ul><li><b>Gradual rollouts</b> — release to 5%, then 25%, then 100% of users while monitoring metrics.</li><li><b>Targeted rollouts</b> — release only to specific user segments (beta users, specific regions).</li><li><b>Kill switches</b> — instantly disable a problematic feature without a deployment.</li><li><b>A/B experiments</b> — run competing implementations simultaneously.</li></ul><p><b>Common tooling:</b> LaunchDarkly, Unleash, Flagsmith, or Split.io for managed platforms; database-backed toggles for simpler cases.</p><p><b>Operational consideration:</b> Flag hygiene is critical. Stale flags accumulate as technical debt, turning code into a maze of conditional branches. Mature teams treat flag removal as an ongoing engineering task and enforce time-to-live policies.</p>",
          },
        ],
      },
      {
        q: "What is `git cherry-pick` and when do you use it?",
        difficulty: "easy",
        a: "<p><code>git cherry-pick &lt;sha&gt;</code> applies the changes introduced by a specific commit onto the current branch, creating a new commit with the same content but a different SHA. Unlike merge or rebase, cherry-pick copies a single commit rather than integrating an entire branch.</p><p><b>Common use cases:</b></p><ul><li><b>Back-porting hotfixes:</b> A critical bug is fixed on <code>main</code>, but a released version on <code>release/1.2</code> also needs the fix. The fix commit can be cherry-picked from <code>main</code> onto the release branch, producing a targeted patch release without pulling in unrelated changes.</li><li><b>Recovering isolated commits:</b> When a commit from an abandoned or discarded branch contains useful work, it can be cherry-picked onto an active branch.</li><li><b>Selective integration:</b> Applying specific commits from a fork or contributor branch without merging the entire branch.</li></ul><p><b>Considerations:</b> Cherry-picking creates a duplicate commit — the original and the cherry-picked version have the same changes but different SHAs. Excessive cherry-picking between long-lived branches can complicate history tracking and merge attempts. When the same commit exists in both branches, subsequent merges may produce spurious conflicts.</p>",
        followups: [
          {
            q: "How do you cherry-pick a range of commits?",
            a: "<p>Two range syntaxes are available depending on whether the starting commit is included:</p><pre>git cherry-pick A..B      # excludes A, includes B (and all between)\ngit cherry-pick A^..B     # includes A and B (and all between)</pre><p>The <code>^</code> suffix references the parent of commit A, effectively shifting the range boundary to include A itself. This distinction is a common source of confusion because Git's range syntax is exclusive on the left endpoint by default.</p><p>For non-contiguous commits, pass multiple SHAs:</p><pre>git cherry-pick &lt;sha1&gt; &lt;sha2&gt; &lt;sha3&gt;</pre><p>If conflicts occur during a range cherry-pick, Git pauses on the conflicting commit. After resolving, use <code>git cherry-pick --continue</code> to proceed, or <code>--abort</code> to cancel the entire operation.</p>",
          },
        ],
      },
      {
        q: "How do `git reset --soft`, `--mixed`, and `--hard` differ?",
        difficulty: "medium",
        a: "<p>All three variants of <code>git reset</code> move the <b>HEAD</b> pointer and the current branch reference to a specified target commit. They differ in what they do to two additional structures: the <b>index (staging area)</b> and the <b>working tree (files on disk)</b>.</p><ul><li><b>--soft:</b> Moves HEAD only. The index and working tree are unchanged. Any differences between the old and new HEAD appear as <b>staged changes</b>, ready to be committed. Useful for squashing several commits into one by resetting to their common base and re-committing.</li><li><b>--mixed (default):</b> Moves HEAD and resets the index, but leaves the working tree unchanged. Differences appear as <b>unstaged changes</b>. Useful for un-staging changes without losing them.</li><li><b>--hard:</b> Moves HEAD, resets the index, and resets the working tree. <b>All uncommitted changes are permanently lost.</b> This is the destructive variant.</li></ul><p><b>Summary table:</b></p><pre>Variant      HEAD moved   Index reset   Working tree reset\n--soft       Yes          No            No\n--mixed      Yes          Yes           No\n--hard       Yes          Yes           Yes</pre><p><b>Recovery from --hard:</b> If <code>git reset --hard</code> is used accidentally, the abandoned commits can typically be recovered via <code>git reflog</code>, as long as reflog retention (~90 days by default) has not expired.</p>",
        followups: [
          {
            q: "Difference between `git reset` and `git revert`?",
            a: "<p>The two commands both undo changes, but through fundamentally different mechanisms.</p><p><b>git reset</b> rewrites history by moving the branch pointer backwards. Commits after the reset point become unreachable from the branch reference. This is safe on local, unpushed branches but destructive on shared branches — collaborators who have already pulled the removed commits will experience history divergence.</p><p><b>git revert</b> creates a <b>new commit</b> whose contents are the inverse of the target commit. History is fully preserved: both the original commit and the revert commit remain in the log, in order. The state of the codebase changes, but no existing commits are modified or removed.</p><p><b>Rule of thumb:</b></p><ul><li>On local, unpushed branches: either is safe; <code>reset</code> is often more convenient.</li><li>On shared branches (especially <code>main</code>): <b>always use <code>revert</code></b>. Rewriting shared history breaks other developers' clones and can cause data loss.</li></ul>",
          },
        ],
      },
      {
        q: "What is a `.gitignore` and how does it work for already-tracked files?",
        difficulty: "easy",
        a: "<p><code>.gitignore</code> is a text file containing glob patterns that Git uses to identify files it should <b>not</b> track. Matching files are excluded from <code>git status</code> output and cannot be added to the index via <code>git add</code>.</p><p><b>Critical limitation:</b> <code>.gitignore</code> only affects <b>untracked</b> files. Once a file has been committed to the repository, Git continues to track it regardless of what patterns are added to <code>.gitignore</code>. This is a frequent source of confusion — for example, a developer accidentally commits a <code>.env</code> file, later adds it to <code>.gitignore</code>, and observes that Git still shows changes to it.</p><p><b>Removing a tracked file from Git while keeping it locally:</b></p><pre>git rm --cached path/to/file\necho \"path/to/file\" &gt;&gt; .gitignore\ngit commit -m \"stop tracking file\"</pre><p>The <code>--cached</code> flag removes the file from the Git index (staging area) but leaves it on disk. After the commit, subsequent modifications to the file are ignored.</p><p><b>Security consideration:</b> If the removed file contained secrets, credentials, or sensitive data, removing it from HEAD is insufficient. The file remains in the repository's history and can be recovered by anyone with clone access. Complete removal requires rewriting history with tools like <code>git filter-repo</code> or BFG Repo-Cleaner. More importantly, any exposed secret must be <b>rotated immediately</b>, since it must be assumed to be compromised.</p><p><b>Pattern precedence:</b> Patterns can be scoped globally (<code>~/.gitignore_global</code>), per-repository (<code>.gitignore</code> at any level), or per-user (<code>.git/info/exclude</code>). Local <code>.git/info/exclude</code> is useful for personal preferences that should not be committed to the shared repository.</p>",
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
        a: "<p>An <b>image</b> and a <b>container</b> represent two different concepts in Docker: a template and a running instance of that template.</p><p><b>Docker image:</b> An image is an immutable, read-only template that contains everything needed to run an application: application code, runtime, libraries, environment variables, and configuration. Internally, an image is a stack of filesystem layers plus a metadata manifest that specifies the default command, exposed ports, working directory, and other runtime parameters. Images are stored in registries (Docker Hub, ECR, GCR, private registries) and identified by name and tag (e.g., <code>nginx:1.25</code>).</p><p><b>Docker container:</b> A container is a running (or stopped) instance of an image. When a container is started, Docker adds a thin writable layer on top of the image's read-only layers and creates isolated namespaces for the container's processes, network interfaces, and filesystem view. Multiple containers can run from the same image, each with its own writable layer and namespaces.</p><p><b>Analogy:</b> The relationship is analogous to object-oriented programming: an image is a class, and a container is an instance of that class. The image defines what should happen; the container is a live execution of it.</p><p><b>Key implications:</b> Because images are immutable, they can be versioned, distributed, and reproduced reliably. Because containers add a writable layer, changes to a container's filesystem do not persist after it is removed unless explicitly captured (e.g., via volumes or by committing the container to a new image).</p>",
        followups: [
          {
            q: "How do Docker image layers work?",
            a: "<p>Docker images are constructed as a stack of read-only <b>layers</b>. Each layer represents the filesystem changes introduced by a single instruction in the Dockerfile (such as <code>RUN</code>, <code>COPY</code>, or <code>ADD</code>). When multiple instructions modify the same file, each layer records only the diff from the previous state.</p><p><b>Layer caching:</b> During builds, Docker caches each layer based on the instruction and its inputs. If an instruction and its inputs are unchanged from a previous build, Docker reuses the cached layer instead of re-executing the instruction. This dramatically speeds up incremental builds — a code change that only affects the final <code>COPY</code> step does not invalidate the layers for installing dependencies.</p><p><b>Optimization principle:</b> Order Dockerfile instructions from least likely to change to most likely to change. Base image selection and dependency installation should occur early; source code copying should occur late. This maximizes cache hits and minimizes rebuild time.</p><pre># Effective ordering\nFROM node:20-alpine\nWORKDIR /app\nCOPY package*.json ./       # dependency manifest first\nRUN npm ci --production      # dependency install (cached unless manifest changes)\nCOPY . .                     # source code last (changes most often)\nCMD [\"node\", \"server.js\"]</pre><p>Layers are also deduplicated across images — if two images share a base layer, that layer is stored only once on disk, saving significant space.</p>",
          },
          {
            q: "What is a multi-stage build and why use it?",
            a: "<p>A <b>multi-stage build</b> is a Dockerfile pattern that uses multiple <code>FROM</code> statements, each starting a new build stage. Artifacts can be copied from earlier stages into later ones using <code>COPY --from=&lt;stage&gt;</code>. The final image contains only the contents of the final stage.</p><p><b>Primary use case:</b> Separating build-time dependencies from runtime dependencies. Compilers, build tools, and intermediate artifacts are required to produce the application but should not be present in the final image, as they inflate size and increase the attack surface.</p><pre>FROM golang:1.22 AS build\nWORKDIR /src\nCOPY . .\nRUN go build -o /app ./cmd/api\n\nFROM gcr.io/distroless/base-debian12\nCOPY --from=build /app /app\nENTRYPOINT [\"/app\"]</pre><p><b>Benefits:</b></p><ul><li><b>Smaller images:</b> The runtime image contains only the compiled binary and minimal OS libraries, often reducing size from 800 MB to under 30 MB.</li><li><b>Reduced attack surface:</b> No compilers, package managers, or build tools are available in the running container.</li><li><b>Faster deployments:</b> Smaller images pull and start faster, particularly relevant at scale.</li><li><b>Single Dockerfile:</b> The complete build process is documented in one file, simplifying maintenance.</li></ul><p>Multi-stage builds are considered a best practice for all production images.</p>",
          },
        ],
      },
      {
        q: "How do you keep Docker images small and secure?",
        difficulty: "medium",
        a: "<p>Reducing image size and improving security are closely related goals: smaller images have fewer components, fewer components mean fewer vulnerabilities, and less attack surface. Several established practices work together to achieve both.</p><p><b>1. Choose a minimal base image.</b> Use <code>alpine</code>, <code>distroless</code>, or <code>scratch</code> where possible instead of full-featured distributions. Alpine adds ~5 MB; distroless images contain no shell or package manager at all.</p><p><b>2. Use multi-stage builds.</b> Separate build tooling from runtime. The final image should contain only what is required to execute the application.</p><p><b>3. Minimize the number of layers.</b> Combine related <code>RUN</code> commands into a single instruction and clean up temporary files within the same layer. For example, on Debian-based images:</p><pre>RUN apt-get update &amp;&amp; \\\n    apt-get install -y --no-install-recommends curl &amp;&amp; \\\n    rm -rf /var/lib/apt/lists/*</pre><p><b>4. Use .dockerignore.</b> Exclude files that should not be sent to the Docker build context (<code>node_modules</code>, <code>.git</code>, local logs, environment files). This speeds up builds and prevents accidental inclusion of secrets or bloat.</p><p><b>5. Pin base image versions.</b> Use specific tags such as <code>FROM node:20.11.1-alpine</code> rather than <code>FROM node:latest</code>. The <code>latest</code> tag is a moving target and produces non-reproducible builds. For maximum reproducibility, pin by digest: <code>FROM node@sha256:...</code>.</p><p><b>6. Run as a non-root user.</b> Create a dedicated user in the Dockerfile and switch to it with <code>USER</code>. Running as root is unnecessary for most workloads and increases the impact of a container escape.</p><p><b>7. Scan images in CI.</b> Integrate vulnerability scanners such as <b>Trivy</b>, <b>Grype</b>, or <b>Snyk</b> into the pipeline. Fail builds on high-severity CVEs to prevent known-vulnerable images from reaching production.</p><p><b>8. Sign images.</b> Use <b>cosign</b> or Docker Content Trust to sign images and verify signatures at deployment time, preventing tampered images from being deployed.</p>",
        followups: [
          {
            q: "Difference between COPY and ADD?",
            a: "<p>Both <code>COPY</code> and <code>ADD</code> transfer files from the build context into the image, but <code>ADD</code> has additional behavior that can be surprising.</p><p><b>COPY</b> simply copies files or directories from the build context to the specified destination in the image. It has no side effects and is the most predictable option.</p><p><b>ADD</b> supports the same operation but adds two features:</p><ol><li><b>Automatic archive extraction:</b> If the source is a local tar archive (recognized by extension), ADD extracts it into the destination rather than copying it as a file.</li><li><b>Remote URL support:</b> ADD can fetch files from URLs directly into the image (though this is discouraged in favor of explicit <code>RUN curl</code> or <code>wget</code> for better cache control).</li></ol><p><b>Recommendation:</b> Use <code>COPY</code> by default. Its behavior is explicit and predictable. Use <code>ADD</code> only when its archive-extraction behavior is specifically desired — and even then, the intent is clearer when using an explicit extraction step.</p>",
          },
          {
            q: "Why avoid running containers as root?",
            a: "<p>Containers provide isolation through Linux namespaces, but the isolation is not absolute. If a container process runs as root and a vulnerability allows escape from the container — through a kernel bug, misconfigured volume mount, or exposed Docker socket — that root process obtains root access on the host system.</p><p><b>Defense in depth:</b> Running as a non-root user does not prevent all escapes, but it significantly reduces the impact of many. A compromised non-root container process is limited to the privileges of that user, both inside the container and in the event of an escape.</p><p><b>Configuring a non-root user in a Dockerfile:</b></p><pre>FROM node:20-alpine\nRUN addgroup -S app &amp;&amp; adduser -S app -G app\nWORKDIR /home/app\nCOPY --chown=app:app . .\nUSER app\nCMD [\"node\", \"server.js\"]</pre><p><b>Additional hardening measures</b> in production include: dropping all Linux capabilities and adding back only what is required, mounting the root filesystem as read-only, using seccomp profiles to restrict system calls, and configuring AppArmor or SELinux policies.</p>",
          },
        ],
      },
      {
        q: "Difference between CMD and ENTRYPOINT?",
        difficulty: "medium",
        a: "<p>Both <code>CMD</code> and <code>ENTRYPOINT</code> specify what runs when a container starts, but they serve different purposes and interact with each other.</p><p><b>ENTRYPOINT</b> defines the executable that <i>always</i> runs when the container starts. It is intended to be the fixed command of the container — the thing the container fundamentally does.</p><p><b>CMD</b> provides <i>default arguments</i> to the ENTRYPOINT, or a default command if no ENTRYPOINT is defined. Arguments passed to <code>docker run</code> override CMD but do not affect ENTRYPOINT.</p><p><b>Example:</b></p><pre>ENTRYPOINT [\"nginx\"]\nCMD [\"-g\", \"daemon off;\"]</pre><p><b>Behavior:</b></p><ul><li><code>docker run image</code> → runs <code>nginx -g \"daemon off;\"</code> (ENTRYPOINT + CMD)</li><li><code>docker run image -v</code> → runs <code>nginx -v</code> (ENTRYPOINT + overridden CMD)</li><li><code>docker run --entrypoint sh image</code> → runs <code>sh -g \"daemon off;\"</code> (overridden ENTRYPOINT + CMD)</li></ul><p><b>Design guidance:</b> Use <code>ENTRYPOINT</code> for the primary purpose of the container (e.g., the application binary). Use <code>CMD</code> for default arguments that users may reasonably want to customize. This produces containers that behave like executables, where <code>docker run image [args]</code> works intuitively.</p><p>For containers intended as flexible environments rather than dedicated applications (e.g., a development shell), CMD alone is often more appropriate, with no ENTRYPOINT.</p>",
        followups: [
          {
            q: "What is the difference between exec and shell form?",
            a: "<p>Docker instructions like <code>CMD</code>, <code>ENTRYPOINT</code>, and <code>RUN</code> support two syntactic forms.</p><p><b>Exec form:</b> A JSON array — <code>CMD [\"executable\", \"arg1\", \"arg2\"]</code>. Docker executes the command directly, without invoking a shell. The process becomes PID 1 inside the container and receives signals directly, so <code>SIGTERM</code> from <code>docker stop</code> reaches the application immediately.</p><p><b>Shell form:</b> A plain string — <code>CMD executable arg1 arg2</code>. Docker executes the command via <code>/bin/sh -c \"executable arg1 arg2\"</code>. The shell becomes PID 1 and receives signals, which the shell does not forward to the child process. This causes <code>docker stop</code> to time out and eventually SIGKILL the container, preventing graceful shutdown.</p><p><b>Comparison:</b></p><ul><li><b>Exec form:</b> Direct execution, correct signal propagation, no shell features (variable expansion, wildcards, pipes).</li><li><b>Shell form:</b> Shell features available, but signals do not reach the application — poor for graceful shutdown.</li></ul><p><b>Recommendation:</b> Use exec form for production images to ensure clean shutdown behavior. If shell features are genuinely needed, invoke the shell explicitly in exec form:</p><pre>CMD [\"sh\", \"-c\", \"echo $HOME &amp;&amp; exec myapp\"]</pre><p>The <code>exec</code> builtin replaces the shell process with the application, preserving correct signal handling.</p>",
          },
        ],
      },
      {
        q: "How do you persist data in Docker?",
        difficulty: "easy",
        a: "<p>By default, any data written inside a container is stored in its writable layer and is lost when the container is removed. To persist data beyond a container's lifecycle, Docker provides three mechanisms, each with different trade-offs.</p><ol><li><b>Named volumes (recommended for most use cases):</b> Volumes are storage objects managed entirely by Docker, stored under <code>/var/lib/docker/volumes/</code> on Linux.<pre>docker volume create data\ndocker run -v data:/var/lib/mysql mysql:8</pre>Volumes are portable, decoupled from the host filesystem structure, and easier to back up. They are the preferred option for production workloads such as databases.</li><li><b>Bind mounts:</b> A directory on the host is mounted directly into the container.<pre>docker run -v /host/path:/container/path myapp</pre>Bind mounts couple the container to a specific host path. They are commonly used during development (for example, mounting source code for hot-reload) but are less portable in production.</li><li><b>tmpfs mounts:</b> An in-memory filesystem for the container. Data is not persisted at all — it exists only for the lifetime of the container and is stored in host RAM, not on disk.<pre>docker run --tmpfs /tmp myapp</pre>tmpfs is useful for storing temporary files, sensitive data that should not touch disk, or improving performance for scratch space.</li></ol><p><b>Storage drivers</b> such as <code>overlay2</code> (default on Linux) manage how layers and the writable layer are structured on disk. Volume plugins allow integration with external storage systems like NFS, Ceph, or cloud block storage.</p>",
        followups: [
          {
            q: "Named volume vs bind mount — when to use each?",
            a: "<p><b>Named volumes</b> are the preferred choice in production because Docker fully manages their lifecycle. Their contents are opaque to the host filesystem, avoiding accidental interference. They are portable between hosts, straightforward to back up, and integrate cleanly with volume plugins for network or cloud storage. Databases, message queues, and any stateful production service should use named volumes.</p><p><b>Bind mounts</b> are appropriate primarily in development contexts. Mounting a local source code directory into a container enables hot-reload workflows: changes on the host are immediately visible inside the container. Bind mounts are also useful for injecting configuration files or exposing host-specific data. However, they create tight coupling between the container and the host's directory structure, and host permission and SELinux/AppArmor labels can create difficult-to-debug issues.</p><p><b>Summary:</b> Named volumes for production data; bind mounts for development source code and host-specific inputs.</p>",
          },
        ],
      },
      {
        q: "Explain Docker networking modes.",
        difficulty: "medium",
        a: "<p>Docker provides several networking drivers, each suited to different use cases. The choice of mode determines how a container communicates with other containers, the host, and external networks.</p><ul><li><b>bridge (default):</b> Docker creates an internal virtual network (typically <code>docker0</code>) and assigns each container an IP address within it. Containers on the same bridge network can communicate with each other by container name (DNS resolution is built-in on user-defined bridges). External access requires explicit port publishing with <code>-p host:container</code>.</li><li><b>host:</b> The container shares the host's network namespace. It has no isolated IP or ports — its services bind directly to the host's interfaces. This eliminates NAT overhead and can improve performance, but sacrifices network isolation. Not available on Docker Desktop for Mac or Windows.</li><li><b>none:</b> The container has no network interfaces other than loopback. Used for offline batch processing or when networking is provided by an external mechanism.</li><li><b>overlay:</b> Enables multi-host networking. Containers on different Docker hosts can communicate as if on the same network, using VXLAN encapsulation. Used by Docker Swarm and can be created manually for other multi-host scenarios.</li><li><b>macvlan:</b> Assigns each container its own MAC address and makes it appear as a physical device on the host's network. Useful for legacy applications that expect to be directly on the physical LAN.</li></ul><p><b>User-defined networks:</b> Custom bridge networks created with <code>docker network create</code> are recommended over the default bridge, as they provide automatic DNS resolution between containers by name, better isolation, and cleaner teardown.</p>",
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
      "Comprehensive CKA-aligned coverage — control plane, workloads, scheduling, storage, networking, security, cluster maintenance, and troubleshooting. From beginner to senior/CKA exam level.",
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

      /* ============ CORE CONCEPTS / CONTROL PLANE ============ */
      {
        q: "Explain the Kubernetes cluster architecture (control plane vs worker nodes).",
        difficulty: "easy",
        a: "<p>A Kubernetes cluster is split into two roles:</p><p><b>Control Plane (master)</b> — makes global decisions and stores cluster state. Components:</p><ul><li><b>kube-apiserver</b> — front door for all cluster ops.</li><li><b>etcd</b> — distributed KV store, source of truth.</li><li><b>kube-scheduler</b> — assigns pods to nodes.</li><li><b>kube-controller-manager</b> — runs reconciliation loops.</li><li><b>cloud-controller-manager</b> — talks to cloud APIs.</li></ul><p><b>Worker Nodes</b> — run application pods. Components:</p><ul><li><b>kubelet</b> — agent that makes containers run.</li><li><b>kube-proxy</b> — implements Service networking.</li><li><b>Container Runtime</b> (containerd, CRI-O).</li></ul>",
        followups: [
          {
            q: "What happens when you run `kubectl apply -f pod.yaml`?",
            a: "<ol><li>kubectl authenticates & sends the YAML to <b>kube-apiserver</b>.</li><li>API server validates via <b>admission controllers</b>, then persists the desired state to <b>etcd</b>.</li><li><b>kube-scheduler</b> notices an unbound pod, picks a node using filters+scores, writes the binding back.</li><li>The chosen node's <b>kubelet</b> sees the assignment (via the API server watch), tells the container runtime to pull the image and start the container.</li><li>kubelet reports status; API server updates etcd.</li></ol>",
          },
          {
            q: "Can the control plane and worker roles run on the same node?",
            a: "<p>Yes — in small dev clusters (kind, minikube) they do. In production, keep control plane nodes dedicated (tainted with <code>node-role.kubernetes.io/control-plane:NoSchedule</code>) so workload pods don't compete with etcd for I/O.</p>",
          },
        ],
      },
      {
        q: "What is etcd and what does it store?",
        difficulty: "medium",
        a: "<p><b>etcd</b> is a distributed, consistent key-value store used as Kubernetes' <b>single source of truth</b>. It stores:</p><ul><li>All cluster objects (Pods, Deployments, ConfigMaps, Secrets, etc.).</li><li>Cluster configuration and metadata.</li><li>Service discovery data.</li></ul><p>etcd uses the <b>Raft consensus algorithm</b> — writes need a quorum (majority) of nodes. For HA, always run an <b>odd number</b> of etcd members (3 or 5); 3 tolerates 1 failure, 5 tolerates 2.</p>",
        followups: [
          {
            q: "How do you back up etcd?",
            a: "<pre>ETCDCTL_API=3 etcdctl snapshot save /backup/etcd.db \\\n  --endpoints=https://127.0.0.1:2379 \\\n  --cacert=/etc/kubernetes/pki/etcd/ca.crt \\\n  --cert=/etc/kubernetes/pki/etcd/server.crt \\\n  --key=/etc/kubernetes/pki/etcd/server.key</pre><p>Verify with <code>etcdctl snapshot status /backup/etcd.db</code>. Automate this in a nightly cron and offsite the snapshot.</p>",
          },
          {
            q: "How do you restore etcd from a snapshot?",
            a: "<ol><li>Stop the kube-apiserver on all control plane nodes.</li><li><code>etcdctl snapshot restore /backup/etcd.db --data-dir /var/lib/etcd-new</code></li><li>Update the etcd static pod manifest (<code>/etc/kubernetes/manifests/etcd.yaml</code>) to point <code>--data-dir</code> to the new directory.</li><li>Restart etcd, then the kube-apiserver.</li><li>Verify with <code>kubectl get nodes</code>.</li></ol>",
          },
          {
            q: "Why must etcd have an odd number of members?",
            a: "<p>Raft requires a <b>majority quorum</b> for writes. With 3 members, quorum = 2 (tolerates 1 loss). With 4 members, quorum still = 3 (still tolerates only 1 loss — adding a 4th doesn't help). Odd counts maximize fault tolerance for the same infrastructure cost.</p>",
          },
        ],
      },
      {
        q: "What is the role of the kube-apiserver?",
        difficulty: "easy",
        a: "<p>The <b>kube-apiserver</b> is the front-end of the Kubernetes control plane. Every component (kubectl, kubelet, controller-manager, scheduler) talks to it. Its responsibilities:</p><ul><li><b>Authenticate & Authorize</b> requests (via authn plugins + RBAC).</li><li><b>Validate & Mutate</b> requests through admission controllers.</li><li><b>Persist</b> objects to etcd.</li><li><b>Serve watches</b> so components can react to changes.</li></ul><p>It's the only component that talks directly to etcd — everything else goes through the API server.</p>",
        followups: [
          {
            q: "How do you scale the kube-apiserver?",
            a: "<p>The API server is stateless and horizontally scalable. In HA setups, run 3+ replicas behind a load balancer. Each connects to the same etcd cluster. Watches are load-balanced across replicas; writes still hit etcd's leader.</p>",
          },
        ],
      },
      {
        q: "What does the kube-scheduler do and how does it pick a node?",
        difficulty: "medium",
        a: "<p>The scheduler assigns unscheduled Pods to Nodes in a two-phase process:</p><ol><li><b>Filtering</b> — eliminate nodes that can't run the pod (insufficient resources, unmatched selectors, taints without matching tolerations, PV zone mismatch, etc.).</li><li><b>Scoring</b> — rank the remaining nodes (spread across zones, image-locality, resource balance) and pick the highest score. Ties broken randomly.</li></ol><p>The scheduler only writes a <b>binding</b> — it never starts containers. The kubelet on the chosen node does that.</p>",
        followups: [
          {
            q: "Can you run multiple schedulers or customize scheduling?",
            a: "<p>Yes — three options:</p><ul><li><b>Scheduler Profiles</b>: multiple named profiles in the default scheduler, each with different plugin configs. Pods choose a profile via <code>spec.schedulerName</code>.</li><li><b>Custom scheduler</b>: deploy a second scheduler binary with a different name.</li><li><b>Scheduling framework plugins</b>: extend filtering/scoring in Go via out-of-tree plugins.</li></ul>",
          },
          {
            q: "How would you manually schedule a pod to a specific node?",
            a: "<p>Two options:</p><ul><li><b>nodeName</b> in pod spec — bypasses the scheduler entirely (rarely recommended).</li><li><b>nodeSelector</b> or <b>nodeAffinity</b> targeting a label like <code>kubernetes.io/hostname: node-1</code>.</li></ul>",
          },
        ],
      },
      {
        q: "What does the kube-controller-manager do?",
        difficulty: "medium",
        a: "<p>The controller manager runs the built-in <b>reconciliation loops</b> that drive cluster state toward the desired spec. Notable controllers inside it:</p><ul><li><b>Node controller</b> — detects unreachable nodes.</li><li><b>Deployment / ReplicaSet controller</b> — maintains desired pod count.</li><li><b>Endpoints/EndpointSlice controller</b> — keeps Service endpoints up to date.</li><li><b>ServiceAccount & Token controllers</b> — create default SAs and their tokens.</li><li><b>Job/CronJob, StatefulSet, DaemonSet controllers</b>.</li></ul><p>Each controller watches the API server, computes a diff between desired and actual state, and takes action.</p>",
      },
      {
        q: "What is the kubelet and how does it manage pods?",
        difficulty: "medium",
        a: "<p><b>kubelet</b> is the node-level agent. It:</p><ul><li>Watches the API server for pods assigned to its node.</li><li>Tells the container runtime (via <b>CRI</b>) to pull images and start/stop containers.</li><li>Runs <b>liveness/readiness/startup probes</b>.</li><li>Reports pod & node status back to the API server.</li><li>Manages mounted volumes via CSI plugins.</li></ul><p>kubelet is <i>not</i> a container itself — it runs as a systemd service on every node (control plane + workers).</p>",
        followups: [
          {
            q: "What are Static Pods?",
            a: "<p>Pods managed directly by the <b>kubelet</b>, not the API server. kubelet watches a manifest directory (default <code>/etc/kubernetes/manifests/</code>) and creates a pod for each YAML file it finds. The API server sees them as <b>mirror pods</b> (read-only).</p><p>Used to bootstrap control plane components themselves — kubeadm places <code>kube-apiserver.yaml</code>, <code>etcd.yaml</code>, etc., in that folder.</p>",
          },
        ],
      },
      {
        q: "What is kube-proxy and what modes does it support?",
        difficulty: "medium",
        a: "<p><b>kube-proxy</b> runs on every worker node and implements the <b>Service abstraction</b> at the network layer. When traffic hits a ClusterIP, kube-proxy load-balances it to a healthy backend Pod.</p><p>Modes:</p><ul><li><b>iptables</b> (default): programs iptables NAT rules. Simple, no user-space hop, but rule evaluation is O(n) with the number of services.</li><li><b>IPVS</b>: kernel-level L4 load balancer, hash-table lookup (O(1)), supports more LB algorithms (rr, lc, sh). Better at large scale (thousands of services).</li><li><b>nftables</b> (newer, beta): successor to iptables, better performance.</li><li><b>userspace</b>: legacy, avoid.</li></ul>",
        followups: [
          {
            q: "How would you switch a cluster from iptables to IPVS?",
            a: "<ol><li>Ensure IPVS kernel modules are loaded on every node (<code>ip_vs</code>, <code>ip_vs_rr</code>, <code>ip_vs_wrr</code>, <code>ip_vs_sh</code>, <code>nf_conntrack</code>).</li><li>Edit the kube-proxy ConfigMap: set <code>mode: \"ipvs\"</code>.</li><li>Rollout the kube-proxy DaemonSet: <code>kubectl rollout restart ds/kube-proxy -n kube-system</code>.</li></ol>",
          },
        ],
      },

      /* ============ WORKLOADS & SCHEDULING ============ */
      {
        q: "What is a Namespace and when should you use one?",
        difficulty: "easy",
        a: "<p>Namespaces provide a <b>logical scope</b> for names — a way to divide a cluster into virtual sub-clusters. They enable:</p><ul><li><b>Multi-tenancy</b> — dev, staging, prod, or team-per-namespace isolation.</li><li><b>RBAC scoping</b> — grant a user access only to their namespace.</li><li><b>ResourceQuotas & LimitRanges</b> — cap CPU/memory per namespace.</li><li><b>Network policies</b> can select by namespace.</li></ul><p>Not namespaced: Nodes, PersistentVolumes, StorageClasses, ClusterRoles, ClusterRoleBindings.</p>",
        followups: [
          {
            q: "How do you enforce resource limits at the namespace level?",
            a: "<pre>apiVersion: v1\nkind: ResourceQuota\nmetadata:\n  name: team-a-quota\n  namespace: team-a\nspec:\n  hard:\n    requests.cpu: \"10\"\n    requests.memory: 20Gi\n    limits.cpu: \"20\"\n    pods: \"50\"</pre><p>Combine with a <b>LimitRange</b> to set per-pod defaults so users don't have to specify requests/limits explicitly.</p>",
          },
        ],
      },
      {
        q: "What is a ReplicaSet and how does it relate to a Deployment?",
        difficulty: "easy",
        a: "<p>A <b>ReplicaSet</b> keeps a specified number of identical Pods running. It uses a <b>label selector</b> to identify which pods it owns.</p><p>You almost never create a ReplicaSet directly. Instead you create a <b>Deployment</b>, which manages ReplicaSets for you:</p><ul><li>Each Deployment revision → a new ReplicaSet.</li><li>Rolling updates work by scaling the new RS up and the old RS down.</li><li>Rollback = point back to a previous RS.</li></ul>",
      },
      {
        q: "What is a Job and CronJob?",
        difficulty: "easy",
        a: "<p><b>Job</b>: runs pods until a specified number of them terminate successfully. Used for <b>batch/one-off work</b> — DB migrations, backups, data processing.</p><p><b>CronJob</b>: creates Jobs on a schedule (cron syntax). Used for periodic tasks — nightly reports, cache warm-ups.</p><pre>apiVersion: batch/v1\nkind: CronJob\nmetadata: { name: nightly-backup }\nspec:\n  schedule: \"0 2 * * *\"\n  jobTemplate:\n    spec:\n      template:\n        spec:\n          restartPolicy: OnFailure\n          containers:\n          - name: backup\n            image: my/backup:1.2</pre>",
        followups: [
          {
            q: "How do you handle Job retries and parallelism?",
            a: "<ul><li><b>backoffLimit</b>: max retries before marking Job failed.</li><li><b>completions</b>: how many successful pods needed.</li><li><b>parallelism</b>: how many pods can run at once.</li><li><b>activeDeadlineSeconds</b>: hard timeout for the whole Job.</li><li><b>ttlSecondsAfterFinished</b>: auto-delete completed Jobs.</li></ul>",
          },
        ],
      },
      {
        q: "Explain Taints and Tolerations.",
        difficulty: "medium",
        a: "<p><b>Taints</b> are applied to <i>Nodes</i> and repel pods that don't <i>tolerate</i> them. <b>Tolerations</b> are applied to <i>Pods</i> and allow them to be scheduled onto matching tainted nodes.</p><p>Effect values:</p><ul><li><b>NoSchedule</b>: pods without matching toleration won't be scheduled.</li><li><b>PreferNoSchedule</b>: soft version.</li><li><b>NoExecute</b>: also evicts existing pods that don't tolerate it.</li></ul><pre>kubectl taint nodes gpu-node dedicated=gpu:NoSchedule</pre><p>Pod that tolerates it:</p><pre>tolerations:\n- key: dedicated\n  operator: Equal\n  value: gpu\n  effect: NoSchedule</pre><p><b>Note</b>: toleration only <i>allows</i> — use <b>nodeAffinity</b> to actively <i>attract</i> pods.</p>",
        followups: [
          {
            q: "What's the difference between taints/tolerations and nodeAffinity?",
            a: "<p><b>Taints/tolerations (node-repels-pod)</b>: keep unwanted pods off a node. Pods opt-in to run there.</p><p><b>NodeAffinity (pod-attracts-node)</b>: pod chooses which nodes it wants to run on.</p><p>They compose: taint a GPU node <code>dedicated=gpu:NoSchedule</code>, and set nodeAffinity on GPU pods to prefer <code>hardware=gpu</code>. Result: only GPU pods on GPU nodes, and GPU pods prefer them.</p>",
          },
        ],
      },
      {
        q: "Compare NodeSelector, NodeAffinity, and PodAffinity.",
        difficulty: "medium",
        a: "<ul><li><b>nodeSelector</b>: simplest form — pod runs on nodes with matching labels. Hard requirement, exact match only.</li><li><b>nodeAffinity</b>: richer — supports <code>In</code>, <code>NotIn</code>, <code>Exists</code>, <code>Gt</code>, <code>Lt</code>. Has <b>requiredDuringScheduling</b> (hard) and <b>preferredDuringScheduling</b> (soft, weighted) modes.</li><li><b>podAffinity / podAntiAffinity</b>: schedule based on <i>other pods</i>' labels — e.g. \"run near a Redis pod\" (affinity) or \"never on the same node as another replica\" (anti-affinity, for HA).</li></ul>",
        followups: [
          {
            q: "How do you spread replicas across zones?",
            a: "<p>Use <b>Pod Topology Spread Constraints</b> — the modern replacement for podAntiAffinity + topology keys:</p><pre>topologySpreadConstraints:\n- maxSkew: 1\n  topologyKey: topology.kubernetes.io/zone\n  whenUnsatisfiable: DoNotSchedule\n  labelSelector:\n    matchLabels:\n      app: api</pre><p>This keeps replicas evenly spread across zones (max 1 replica difference).</p>",
          },
        ],
      },
      {
        q: "What is a Priority Class and how does preemption work?",
        difficulty: "hard",
        a: "<p><b>PriorityClass</b> assigns a numeric priority to pods. Higher-priority pods are scheduled first.</p><p><b>Preemption</b>: when a high-priority pod can't schedule due to insufficient resources, the scheduler evicts (preempts) lower-priority pods to make room.</p><pre>apiVersion: scheduling.k8s.io/v1\nkind: PriorityClass\nmetadata: { name: critical }\nvalue: 1000000\nglobalDefault: false\ndescription: \"Critical system pods\"</pre><p>System-reserved names <code>system-cluster-critical</code> and <code>system-node-critical</code> are used for essential components (CoreDNS, kube-proxy).</p>",
      },
      {
        q: "What is a PodDisruptionBudget (PDB)?",
        difficulty: "medium",
        a: "<p>A <b>PDB</b> limits how many pods of an app can be <b>voluntarily</b> disrupted at once (e.g. during a node drain, upgrade). It doesn't protect against involuntary failures (node crash).</p><pre>apiVersion: policy/v1\nkind: PodDisruptionBudget\nspec:\n  minAvailable: 2   # or maxUnavailable\n  selector:\n    matchLabels: { app: api }</pre><p>During <code>kubectl drain</code>, the eviction API respects the PDB — draining blocks until the PDB allows the eviction.</p>",
        followups: [
          {
            q: "When should you set minAvailable vs maxUnavailable?",
            a: "<p><b>minAvailable</b>: use when you know exact minimum needed (\"always keep 2 running\"). Static.</p><p><b>maxUnavailable</b>: use when replica count varies — expressed as % (\"never lose more than 25%\"). Scales with your HPA.</p>",
          },
        ],
      },
      {
        q: "How does the Horizontal Pod Autoscaler (HPA) work?",
        difficulty: "medium",
        a: "<p>HPA scales the number of pod replicas based on observed metrics — CPU, memory, or custom metrics.</p><p><b>Formula</b>: <code>desiredReplicas = ceil(currentReplicas × currentMetric / targetMetric)</code></p><pre>apiVersion: autoscaling/v2\nkind: HorizontalPodAutoscaler\nspec:\n  scaleTargetRef:\n    apiVersion: apps/v1\n    kind: Deployment\n    name: api\n  minReplicas: 2\n  maxReplicas: 20\n  metrics:\n  - type: Resource\n    resource:\n      name: cpu\n      target:\n        type: Utilization\n        averageUtilization: 70</pre><p>Requires the <b>metrics-server</b> (for resource metrics) or a custom metrics adapter (for Prometheus).</p>",
        followups: [
          {
            q: "HPA vs VPA vs Cluster Autoscaler — when to use each?",
            a: "<ul><li><b>HPA</b>: scales <i>replica count</i> (horizontal). Best for stateless workloads.</li><li><b>VPA</b>: adjusts <i>requests/limits</i> per pod (vertical). Restarts pods to apply changes. Good for workloads that can't be horizontally scaled.</li><li><b>Cluster Autoscaler</b>: scales the <i>number of nodes</i>. Adds nodes when pods are Pending due to insufficient capacity, removes underutilized nodes.</li></ul><p>They compose: HPA + Cluster Autoscaler is the classic pair. HPA + VPA together is tricky (they can fight over CPU).</p>",
          },
        ],
      },

      /* ============ STORAGE ============ */
      {
        q: "Explain PersistentVolume (PV) and PersistentVolumeClaim (PVC) — the storage lifecycle.",
        difficulty: "medium",
        a: "<p><b>PV</b> is a piece of storage in the cluster (a raw disk, NFS export, cloud volume). Cluster-scoped, provisioned by admin (static) or by a StorageClass (dynamic).</p><p><b>PVC</b> is a <i>request</i> for storage by a user (namespaced). Specifies size, access mode, and optionally a StorageClass.</p><p><b>Binding</b>: control plane matches a PVC to a suitable PV.</p><p><b>Lifecycle</b>: Available → Bound → Released → (Retained / Deleted / Recycled based on <code>persistentVolumeReclaimPolicy</code>).</p><p>Pod uses the PVC via <code>volumes.persistentVolumeClaim.claimName</code>.</p>",
        followups: [
          {
            q: "What are the PV reclaim policies?",
            a: "<ul><li><b>Retain</b>: PV kept after PVC delete — admin must manually clean up. Safest for prod.</li><li><b>Delete</b>: PV (and underlying cloud disk) deleted. Common default for dynamic provisioning.</li><li><b>Recycle</b>: (deprecated) does a rm -rf and makes PV Available again.</li></ul>",
          },
          {
            q: "What are the volume access modes?",
            a: "<ul><li><b>ReadWriteOnce (RWO)</b>: mount as R/W by one <i>node</i>.</li><li><b>ReadOnlyMany (ROX)</b>: mount R/O by many nodes.</li><li><b>ReadWriteMany (RWX)</b>: mount R/W by many nodes (NFS, CephFS, EFS).</li><li><b>ReadWriteOncePod (RWOP)</b>: mount R/W by exactly one <i>pod</i>. Newer, useful for singletons.</li></ul>",
          },
        ],
      },
      {
        q: "What is a StorageClass and how does dynamic provisioning work?",
        difficulty: "medium",
        a: "<p>A <b>StorageClass</b> defines a <i>type</i> of storage the cluster can dynamically provision — e.g. \"fast-ssd\" (io2), \"cheap-hdd\" (gp3), \"nfs\".</p><pre>apiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata: { name: fast }\nprovisioner: ebs.csi.aws.com\nparameters:\n  type: gp3\n  iops: \"3000\"\nreclaimPolicy: Delete\nvolumeBindingMode: WaitForFirstConsumer\nallowVolumeExpansion: true</pre><p>When a PVC references a StorageClass, the corresponding <b>CSI driver</b> creates the underlying volume and a matching PV automatically.</p>",
        followups: [
          {
            q: "What is `volumeBindingMode: WaitForFirstConsumer` and why does it matter?",
            a: "<p>With <b>Immediate</b> (default), the PV is provisioned as soon as the PVC is created — before the scheduler picks a node. If the volume is zonal (EBS), the pod may end up in a zone with no capacity.</p><p><b>WaitForFirstConsumer</b>: delays provisioning until a pod using the PVC is scheduled. The scheduler picks a node first, then the PV is created in the correct zone. Almost always the right choice.</p>",
          },
          {
            q: "How do you resize a PVC?",
            a: "<p>If the StorageClass has <code>allowVolumeExpansion: true</code>:</p><ol><li><code>kubectl edit pvc data</code> → increase <code>spec.resources.requests.storage</code>.</li><li>The CSI driver expands the underlying disk.</li><li>Some file systems require the pod to restart for the FS-level resize (\"FileSystemResizePending\" condition on the PVC).</li></ol>",
          },
        ],
      },
      {
        q: "What is CSI (Container Storage Interface)?",
        difficulty: "medium",
        a: "<p><b>CSI</b> is the standard interface between Kubernetes and storage backends. Before CSI, storage drivers were in-tree (compiled into Kubernetes). CSI moved them out — each vendor now ships a <b>CSI driver</b> as a set of pods.</p><p>A CSI driver typically has:</p><ul><li><b>Controller plugin</b>: creates/deletes/attaches volumes (talks to the cloud API).</li><li><b>Node plugin</b>: DaemonSet on every node — mounts the volume into the pod's filesystem.</li></ul><p>Examples: <code>ebs.csi.aws.com</code>, <code>disk.csi.azure.com</code>, <code>pd.csi.storage.gke.io</code>, <code>rook-ceph.rbd.csi.ceph.com</code>.</p>",
      },
      {
        q: "Why does StatefulSet use `volumeClaimTemplates` instead of a plain PVC?",
        difficulty: "hard",
        a: "<p>Each StatefulSet pod needs its <b>own</b> persistent volume (a database replica's data is unique to that replica). A plain PVC referenced in the pod spec would be shared by all replicas.</p><p><b>volumeClaimTemplates</b> tells the StatefulSet controller: \"for every replica, create a PVC named <code>&lt;template&gt;-&lt;podname&gt;-N</code>\".</p><pre>volumeClaimTemplates:\n- metadata: { name: data }\n  spec:\n    accessModes: [\"ReadWriteOnce\"]\n    storageClassName: fast\n    resources:\n      requests: { storage: 20Gi }</pre><p>When the pod is rescheduled, it keeps its identity (pod-0) and reattaches its original PVC.</p>",
      },

      /* ============ NETWORKING ============ */
      {
        q: "Explain the Kubernetes networking model.",
        difficulty: "medium",
        a: "<p>Kubernetes assumes a <b>flat network</b> where:</p><ol><li>Every Pod gets its <b>own IP</b>.</li><li>Pods can communicate with all other Pods, on any node, <b>without NAT</b>.</li><li>Nodes can communicate with all Pods, without NAT.</li><li>The IP a Pod sees itself as = the IP others see.</li></ol><p>Kubernetes doesn't implement this itself — it delegates to a <b>CNI plugin</b> (Calico, Cilium, Flannel, Weave). Services and their ClusterIPs are then layered on top by kube-proxy.</p>",
      },
      {
        q: "What is CNI and name some popular plugins.",
        difficulty: "easy",
        a: "<p><b>CNI (Container Network Interface)</b> is a spec that defines how a container runtime configures pod networking. When a pod starts, kubelet invokes the CNI plugin (a binary in <code>/opt/cni/bin</code>) which sets up the pod's network namespace, IP, and routes.</p><p>Popular CNI plugins:</p><ul><li><b>Calico</b>: BGP-based, supports NetworkPolicies out of the box, very scalable.</li><li><b>Cilium</b>: eBPF-based, extremely fast, rich observability, has its own service mesh.</li><li><b>Flannel</b>: simple, overlay networks (VXLAN). Good for small clusters.</li><li><b>Weave Net</b>: mesh with encryption.</li><li><b>AWS VPC CNI</b>: pods get real VPC IPs on EKS.</li></ul>",
      },
      {
        q: "How does CoreDNS work in a Kubernetes cluster?",
        difficulty: "medium",
        a: "<p><b>CoreDNS</b> runs as a Deployment in <code>kube-system</code> and provides in-cluster DNS. Every pod's <code>/etc/resolv.conf</code> points to CoreDNS's ClusterIP.</p><p>Service DNS pattern: <code>&lt;service&gt;.&lt;namespace&gt;.svc.cluster.local</code></p><ul><li><code>api.prod.svc.cluster.local</code> — resolves to the ClusterIP.</li><li>Pods in the same namespace can use just <code>api</code>.</li><li>Headless service returns each pod's A record separately.</li></ul><p>Non-cluster names (e.g. <code>google.com</code>) are forwarded upstream. Configurable via the <code>coredns</code> ConfigMap (<b>Corefile</b>).</p>",
        followups: [
          {
            q: "How do you debug a DNS resolution problem?",
            a: "<ol><li>Confirm CoreDNS pods are running: <code>kubectl get pods -n kube-system -l k8s-app=kube-dns</code>.</li><li>Run a debug pod: <code>kubectl run tmp --image=nicolaka/netshoot --rm -it -- sh</code></li><li>Inside: <code>nslookup kubernetes.default.svc.cluster.local</code></li><li>Check <code>cat /etc/resolv.conf</code> — should point to the kube-dns ClusterIP.</li><li>Check CoreDNS logs: <code>kubectl logs -n kube-system -l k8s-app=kube-dns</code>.</li><li>Inspect the Corefile ConfigMap for misconfigured forwarders.</li></ol>",
          },
        ],
      },
      {
        q: "What is a Headless Service and when do you use it?",
        difficulty: "medium",
        a: "<p>A Service with <code>clusterIP: None</code>. Instead of a load-balanced ClusterIP, DNS returns <b>each backend pod's IP</b> directly (via A records for each Endpoints entry).</p><p>Used when:</p><ul><li>You want <b>direct pod addressing</b> — e.g. StatefulSet peers (Cassandra, Kafka, ZooKeeper) discover each other by DNS.</li><li>Client-side load balancing (e.g. gRPC).</li><li>You want to consume a Service via its underlying IPs.</li></ul>",
      },
      {
        q: "Endpoints vs EndpointSlices — what changed?",
        difficulty: "hard",
        a: "<p><b>Endpoints</b> (v1): a single object per Service listing all backend pod IPs. Doesn't scale — every kube-proxy re-processes the entire object on any change (thundering herd on large services).</p><p><b>EndpointSlices</b> (v1, GA in 1.21): the same info split into multiple slices (default 100 endpoints per slice). Updates only push changed slices, dramatically reducing control-plane load in large clusters. Also carries richer info (topology hints, protocols).</p><p>Modern kube-proxy uses EndpointSlices; the legacy Endpoints object is kept in sync for backward compatibility.</p>",
      },
      {
        q: "What is a NetworkPolicy and how does it work?",
        difficulty: "medium",
        a: "<p>A NetworkPolicy defines <b>allowed ingress/egress traffic</b> for a set of pods (selected by label). By default, all pods are non-isolated (all traffic allowed). Once any policy selects a pod, that direction becomes <b>deny-by-default</b> — only explicitly allowed traffic passes.</p><pre>apiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata: { name: api-allow-web }\nspec:\n  podSelector:\n    matchLabels: { app: api }\n  policyTypes: [\"Ingress\"]\n  ingress:\n  - from:\n    - podSelector:\n        matchLabels: { app: web }\n    ports:\n    - port: 8080</pre><p><b>Requires a CNI that implements policies</b> (Calico, Cilium, Weave). Flannel alone won't enforce them.</p>",
        followups: [
          {
            q: "How do you write a default-deny policy for a namespace?",
            a: "<pre>apiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  name: default-deny-all\n  namespace: prod\nspec:\n  podSelector: {}\n  policyTypes: [\"Ingress\", \"Egress\"]</pre><p>Empty podSelector = all pods. Empty ingress+egress = deny everything. Then add specific allow policies on top.</p>",
          },
        ],
      },
      {
        q: "Explain Ingress in depth — Ingress resource vs Ingress controller.",
        difficulty: "medium",
        a: "<p><b>Ingress resource</b>: a Kubernetes object (YAML) describing HTTP routing rules — host/path → Service.</p><p><b>Ingress controller</b>: a pod actually implementing those rules (an L7 reverse proxy). Common controllers: NGINX, Traefik, HAProxy, AWS ALB Controller, Istio Gateway.</p><p>Without a controller, an Ingress resource does nothing. The controller watches Ingress objects and reconfigures its proxy.</p><pre>apiVersion: networking.k8s.io/v1\nkind: Ingress\nspec:\n  ingressClassName: nginx\n  rules:\n  - host: api.example.com\n    http:\n      paths:\n      - path: /\n        pathType: Prefix\n        backend:\n          service:\n            name: api\n            port: { number: 80 }\n  tls:\n  - hosts: [\"api.example.com\"]\n    secretName: api-tls</pre>",
      },

      /* ============ SECURITY ============ */
      {
        q: "Explain RBAC — Role, ClusterRole, RoleBinding, ClusterRoleBinding.",
        difficulty: "medium",
        a: "<p>RBAC controls who can do what.</p><ul><li><b>Role</b>: set of permissions <b>within a namespace</b>.</li><li><b>ClusterRole</b>: set of permissions <b>cluster-wide</b> (or for cluster-scoped resources like Nodes).</li><li><b>RoleBinding</b>: binds a Role (or ClusterRole) to subjects (User, Group, ServiceAccount) in a namespace.</li><li><b>ClusterRoleBinding</b>: binds a ClusterRole to subjects cluster-wide.</li></ul><pre># Read-only pods in the 'app' namespace\napiVersion: rbac.authorization.k8s.io/v1\nkind: Role\nmetadata: { namespace: app, name: pod-reader }\nrules:\n- apiGroups: [\"\"]\n  resources: [\"pods\", \"pods/log\"]\n  verbs: [\"get\", \"list\", \"watch\"]\n---\nkind: RoleBinding\nmetadata: { namespace: app, name: alice-reads }\nsubjects:\n- kind: User\n  name: alice\nroleRef:\n  kind: Role\n  name: pod-reader\n  apiGroup: rbac.authorization.k8s.io</pre>",
        followups: [
          {
            q: "Can you use a ClusterRole in a RoleBinding?",
            a: "<p>Yes — very common pattern. Define a reusable ClusterRole (e.g. <code>view</code>), then bind it via RoleBinding in each namespace. This scopes the ClusterRole's permissions to that single namespace.</p>",
          },
          {
            q: "How do you debug RBAC issues (`kubectl auth can-i`)?",
            a: "<pre>kubectl auth can-i list pods --namespace prod\nkubectl auth can-i list pods --namespace prod --as alice\nkubectl auth can-i list pods --namespace prod \\\n  --as system:serviceaccount:prod:api\nkubectl auth can-i --list --as alice</pre><p>Great for verifying policies without waiting for a real failure.</p>",
          },
        ],
      },
      {
        q: "What is a ServiceAccount and how do pods use it?",
        difficulty: "easy",
        a: "<p>A <b>ServiceAccount (SA)</b> is an identity for pods (not humans). Every pod runs as a SA — if you don't specify one, it uses <code>default</code> in the pod's namespace.</p><p>A SA is granted permissions via RBAC. Its token is projected into the pod at <code>/var/run/secrets/kubernetes.io/serviceaccount/token</code>.</p><pre>apiVersion: v1\nkind: ServiceAccount\nmetadata: { name: reader, namespace: app }\n---\napiVersion: v1\nkind: Pod\nspec:\n  serviceAccountName: reader\n  containers: [...]</pre>",
        followups: [
          {
            q: "How have SA tokens changed in modern Kubernetes?",
            a: "<p>Historically, each SA had a long-lived <b>Secret</b> auto-created holding its token. In 1.24+, this stopped — tokens are now <b>bound, time-limited, audience-scoped</b> and projected via <code>TokenRequest</code> API. Auto-refreshed by kubelet every ~1 hour.</p><p>You can still create a legacy Secret manually if needed, but it's not recommended.</p>",
          },
        ],
      },
      {
        q: "What is a SecurityContext?",
        difficulty: "medium",
        a: "<p>SecurityContext defines privilege and access controls at pod or container level.</p><pre>securityContext:\n  runAsNonRoot: true\n  runAsUser: 1000\n  runAsGroup: 3000\n  fsGroup: 2000\n  readOnlyRootFilesystem: true\n  allowPrivilegeEscalation: false\n  capabilities:\n    drop: [\"ALL\"]\n  seccompProfile:\n    type: RuntimeDefault</pre><p>Best-practice hardened baseline: non-root, read-only rootfs, all caps dropped, no priv escalation, RuntimeDefault seccomp.</p>",
      },
      {
        q: "What is Pod Security Admission (PSA)?",
        difficulty: "hard",
        a: "<p><b>PSA</b> is the built-in admission plugin (GA in 1.25) that enforces the <b>Pod Security Standards</b>. It replaced the deprecated PodSecurityPolicy (PSP).</p><p>Three standards:</p><ul><li><b>privileged</b>: unrestricted (host access allowed).</li><li><b>baseline</b>: minimally restrictive — prevents known privilege escalations.</li><li><b>restricted</b>: heavily restricted — non-root, seccomp default, no caps, etc.</li></ul><p>Enforced per namespace via labels:</p><pre>apiVersion: v1\nkind: Namespace\nmetadata:\n  name: prod\n  labels:\n    pod-security.kubernetes.io/enforce: restricted\n    pod-security.kubernetes.io/audit: restricted\n    pod-security.kubernetes.io/warn: restricted</pre>",
        followups: [
          {
            q: "PSA vs OPA/Gatekeeper vs Kyverno?",
            a: "<p><b>PSA</b>: built-in, only enforces the standard PSS profiles. Cheap, easy.</p><p><b>Gatekeeper</b> (OPA): flexible policy-as-code in Rego. Complex but very powerful.</p><p><b>Kyverno</b>: policies in YAML (native K8s feel), supports validate/mutate/generate. Easier learning curve than Gatekeeper.</p><p>Common stack: PSA for baseline + Kyverno for org-specific rules.</p>",
          },
        ],
      },
      {
        q: "How does Kubernetes authenticate users?",
        difficulty: "hard",
        a: "<p>Kubernetes has <b>no built-in user database</b>. It relies on external auth via one or more of:</p><ul><li><b>X.509 client certs</b>: kubectl uses a cert signed by the cluster CA. CN = username, O = groups.</li><li><b>Static token file / bootstrap tokens</b>: legacy, mostly for bootstrap.</li><li><b>OIDC</b>: production standard — integrate with Okta, Google, Azure AD, Keycloak.</li><li><b>Webhook authentication</b>: API server calls out to a custom webhook.</li><li><b>ServiceAccount tokens</b>: for in-cluster pods (JWTs signed by the cluster).</li></ul><p>After authentication, RBAC (or Webhook / ABAC / Node authorizer) decides <i>authorization</i>.</p>",
      },
      {
        q: "What is admission control? Give examples.",
        difficulty: "hard",
        a: "<p>Admission controllers are plugins that intercept API requests <b>after authentication/authorization but before persistence</b> to etcd. They can <b>validate</b> or <b>mutate</b> objects.</p><p>Built-in examples:</p><ul><li><b>NamespaceLifecycle</b>: blocks creating objects in terminating namespaces.</li><li><b>LimitRanger</b>: applies default resource requests/limits.</li><li><b>ResourceQuota</b>: enforces namespace quotas.</li><li><b>ServiceAccount</b>: automounts SA tokens.</li><li><b>PodSecurity</b>: enforces PSS profiles.</li></ul><p><b>Dynamic admission</b>: <code>ValidatingAdmissionWebhook</code> and <code>MutatingAdmissionWebhook</code> — your own logic via HTTPS callouts. Used by Istio (sidecar injection), OPA/Gatekeeper, Kyverno.</p>",
        followups: [
          {
            q: "Difference between validating and mutating webhooks?",
            a: "<p><b>Mutating</b> runs first — can modify the object (e.g. inject a sidecar). <b>Validating</b> runs after — can only accept or reject. Ordering matters: never validate a field that a later mutating webhook will change.</p>",
          },
        ],
      },
      {
        q: "How do you rotate cluster TLS certificates?",
        difficulty: "hard",
        a: "<p>With <b>kubeadm</b>-managed clusters:</p><pre>kubeadm certs check-expiration                # see when certs expire\nkubeadm certs renew all                       # renew all\nsystemctl restart kubelet                     # or restart control plane pods</pre><p>Kubeadm auto-renews non-kubelet certs on every <code>kubeadm upgrade</code>.</p><p><b>Kubelet client certificates</b> auto-rotate if <code>rotateCertificates: true</code> and <code>serverTLSBootstrap: true</code> are set. New CSRs need to be approved (<code>kubectl certificate approve</code>).</p>",
      },

      /* ============ CLUSTER MAINTENANCE ============ */
      {
        q: "How do you upgrade a Kubernetes cluster with kubeadm?",
        difficulty: "hard",
        a: "<p>Upgrade one <b>minor version at a time</b> (never skip). Order: control plane first, then workers.</p><pre># On the first control plane node:\nsudo apt-mark unhold kubeadm\nsudo apt-get install -y kubeadm=1.29.x-*\nsudo apt-mark hold kubeadm\nsudo kubeadm upgrade plan\nsudo kubeadm upgrade apply v1.29.x\n\n# Then kubelet+kubectl on the same node:\nkubectl drain cp-1 --ignore-daemonsets\nsudo apt-get install -y kubelet=1.29.x-* kubectl=1.29.x-*\nsudo systemctl daemon-reload &amp;&amp; sudo systemctl restart kubelet\nkubectl uncordon cp-1\n\n# Other control plane nodes: kubeadm upgrade node (not apply)\n# Then each worker: drain, upgrade kubelet, uncordon.</pre>",
        followups: [
          {
            q: "What does `kubectl drain` do exactly?",
            a: "<p><code>kubectl drain node-1 --ignore-daemonsets --delete-emptydir-data</code>:</p><ol><li>Marks node <b>unschedulable</b> (cordon).</li><li>Evicts all pods (respecting PDBs).</li><li>DaemonSet pods are skipped (they exist per-node by design) unless <code>--ignore-daemonsets</code> is set.</li></ol><p>After maintenance, <code>kubectl uncordon node-1</code> makes it schedulable again.</p>",
          },
          {
            q: "How would you handle a cluster upgrade in production with zero downtime?",
            a: "<ol><li>Pre-flight: check API deprecations (<code>kubectl deprecations</code> / <code>pluto</code>).</li><li>Backup etcd.</li><li>Confirm PDBs on critical workloads.</li><li>Roll control plane one node at a time.</li><li>Roll worker nodes with drain + upgrade + uncordon.</li><li>Or use <b>node group replacement</b>: create new node group on new version, drain and delete old.</li></ol>",
          },
        ],
      },
      {
        q: "How do you safely take a node out for maintenance?",
        difficulty: "medium",
        a: "<pre># 1. Cordon: no new pods scheduled\nkubectl cordon node-1\n\n# 2. Drain: evict existing pods (respecting PDBs)\nkubectl drain node-1 --ignore-daemonsets --delete-emptydir-data\n\n# 3. Do OS patches, kernel updates, reboot ...\n\n# 4. Bring the node back\nkubectl uncordon node-1</pre><p>Watch for pods stuck evicting (PDB blocks) — either raise <code>maxUnavailable</code> temporarily or wait.</p>",
      },
      {
        q: "What is a CertificateSigningRequest (CSR) and when is it used?",
        difficulty: "hard",
        a: "<p>A CSR is a K8s object representing a request for a certificate signed by the cluster CA. Used for:</p><ul><li><b>Kubelet serving cert rotation</b> — kubelet auto-generates CSRs, admin approves.</li><li>Adding a new user: generate a private key + CSR, submit as a K8s CSR, approve, then extract the signed cert.</li><li>Bootstrap tokens for kubeadm-joining nodes.</li></ul><pre>kubectl get csr\nkubectl certificate approve node-csr-abcd</pre>",
      },

      /* ============ TROUBLESHOOTING ============ */
      {
        q: "How do you debug a Pod stuck in `Pending`?",
        difficulty: "medium",
        a: "<p><code>kubectl describe pod &lt;name&gt;</code> — look at <b>Events</b>. Common reasons:</p><ul><li><b>Insufficient resources</b>: no node has enough CPU/mem for the pod's <code>requests</code>. Fix: add nodes (or Cluster Autoscaler), lower requests.</li><li><b>Unschedulable due to taints</b>: pod lacks matching toleration.</li><li><b>NodeSelector/Affinity</b> matches no node.</li><li><b>PVC not bound</b>: no PV available or dynamic provisioning failed.</li><li><b>Volume topology mismatch</b>: EBS in wrong zone.</li></ul>",
      },
      {
        q: "How do you debug `ImagePullBackOff` / `ErrImagePull`?",
        difficulty: "easy",
        a: "<p><code>kubectl describe pod</code> — Events show the exact error:</p><ul><li><b>Wrong image name/tag</b>: typo, missing tag, or tag deleted from registry.</li><li><b>Private registry, no imagePullSecret</b>: create the secret, reference it in the pod spec (or the pod's ServiceAccount).</li><li><b>Rate-limited</b> (Docker Hub anonymous limits): authenticate.</li><li><b>Wrong architecture</b>: <code>exec format error</code> — image built for amd64 but running on arm64.</li></ul>",
      },
      {
        q: "How do you debug a Service that isn't routing traffic?",
        difficulty: "hard",
        a: "<ol><li>Verify the Service exists: <code>kubectl get svc</code>.</li><li>Verify Endpoints are populated: <code>kubectl get endpoints &lt;svc&gt;</code>. Empty? → selector doesn't match any pod's labels.</li><li>Confirm backend pods are <code>Ready</code> (readiness probe passing) — unready pods are removed from Endpoints.</li><li>Test from inside the cluster: <code>kubectl run tmp --image=nicolaka/netshoot --rm -it -- curl svc-name.ns:port</code>.</li><li>Check NetworkPolicies: any policy blocking the traffic?</li><li>Check <code>kube-proxy</code> logs on the node.</li></ol>",
        followups: [
          {
            q: "Endpoints is empty even though the pod is Running — what next?",
            a: "<p>Almost always a label mismatch between Service selector and Pod labels.</p><pre>kubectl get svc api -o jsonpath='{.spec.selector}'\nkubectl get pods --show-labels</pre><p>Also check the pod's readiness — pods that fail the readiness probe won't appear in Endpoints.</p>",
          },
        ],
      },
      {
        q: "How would you troubleshoot a broken control plane component?",
        difficulty: "hard",
        a: "<p>In kubeadm clusters, control plane components run as <b>static pods</b> managed by kubelet from <code>/etc/kubernetes/manifests/</code>.</p><ol><li>SSH to the control plane node.</li><li>Check kubelet logs: <code>journalctl -u kubelet -f</code>.</li><li>Check the component's container logs: <code>crictl ps</code> → <code>crictl logs &lt;id&gt;</code>.</li><li>Validate the static manifest YAML (indentation errors are common).</li><li>Check certs: <code>kubeadm certs check-expiration</code>.</li><li>Verify etcd is healthy: <code>etcdctl endpoint health</code>.</li></ol>",
      },

      /* ============ ADVANCED / SENIOR ============ */
      {
        q: "What are Custom Resource Definitions (CRDs)?",
        difficulty: "medium",
        a: "<p>A CRD extends the Kubernetes API with your own resource types. Once installed, you can <code>kubectl apply -f mything.yaml</code> just like any built-in resource. K8s stores them in etcd and gives you a full API (list, watch, RBAC, etc.).</p><pre>apiVersion: apiextensions.k8s.io/v1\nkind: CustomResourceDefinition\nmetadata: { name: pgdatabases.acme.io }\nspec:\n  group: acme.io\n  scope: Namespaced\n  names: { plural: pgdatabases, singular: pgdatabase, kind: PGDatabase }\n  versions:\n  - name: v1\n    served: true\n    storage: true\n    schema:\n      openAPIV3Schema: { ... }</pre><p>By themselves, CRDs are just data. To make them <i>do</i> something you write a <b>controller/operator</b>.</p>",
      },
      {
        q: "What is the Operator pattern?",
        difficulty: "hard",
        a: "<p>An <b>Operator</b> = <b>CRD + custom controller</b> that encodes operational knowledge for a complex application (a database, a message queue, etc.).</p><p>The controller watches the CRD and reconciles reality toward the desired spec — provisioning storage, running failovers, applying schema migrations, taking backups.</p><p>Examples: <b>Prometheus Operator</b>, <b>PostgreSQL (CloudNativePG / Zalando)</b>, <b>Elasticsearch (ECK)</b>, <b>Strimzi (Kafka)</b>.</p><p>Build one with the <b>Operator SDK</b> or <b>Kubebuilder</b>.</p>",
        followups: [
          {
            q: "Explain the reconciliation loop pattern.",
            a: "<ol><li>Watch a resource (via the API server's watch API).</li><li>On each event, read <b>desired state</b> (spec) and <b>actual state</b> (status + real world).</li><li>Compute the diff.</li><li>Take action to bring actual closer to desired.</li><li>Update status.</li><li>Requeue for re-processing if not converged.</li></ol><p>Controllers must be <b>idempotent</b> and <b>level-triggered</b> — they should work correctly even if they miss events.</p>",
          },
        ],
      },
      {
        q: "Difference between `kubectl apply`, `create`, `replace`, and `patch`.",
        difficulty: "medium",
        a: "<ul><li><b>create</b>: creates the object; fails if it exists. Imperative.</li><li><b>replace</b>: replaces the whole object; fails if it doesn't exist. Wipes fields not in the file.</li><li><b>patch</b>: partial update (strategic merge, JSON merge, or JSON patch).</li><li><b>apply</b>: declarative — computes the diff between your YAML and current state, applies only the diff. Tracks its own field ownership via annotations (<b>client-side apply</b>) or Server-Side Apply managers.</li></ul>",
        followups: [
          {
            q: "What is Server-Side Apply?",
            a: "<p>An API-server-side implementation of <code>apply</code> (GA in 1.22). The server tracks which controller/user \"owns\" each field via <b>field managers</b>. Multiple controllers can safely modify different fields of the same object without stomping on each other. Recommended for controllers/operators.</p>",
          },
        ],
      },
      {
        q: "How would you design a highly-available multi-master cluster?",
        difficulty: "hard",
        a: "<ol><li><b>3+ control plane nodes</b> spread across AZs, each running <code>kube-apiserver</code>, <code>controller-manager</code>, <code>scheduler</code>, and an etcd member.</li><li><b>Load balancer</b> (external NLB, HAProxy, or keepalived+VIP) in front of the 3 API servers, with health-checked TCP:6443.</li><li><b>Stacked etcd</b> (etcd on the control plane nodes) is simplest; <b>external etcd</b> (dedicated etcd cluster) isolates blast radius.</li><li>Worker nodes point kubelet at the LB hostname, not a specific master.</li><li>PodDisruptionBudgets on control plane components (managed cluster) and any critical add-ons (CoreDNS, ingress controllers).</li><li>Regular etcd backups + tested restore runbook.</li></ol>",
      },
      {
        q: "How does leader election work for controllers?",
        difficulty: "hard",
        a: "<p>Only one instance of the controller-manager (and scheduler) should be <i>active</i> — leader election ensures that. It uses a <b>Lease</b> object (<code>coordination.k8s.io/v1</code>):</p><ul><li>Each replica tries to acquire the Lease by updating it with its identity + renewTime.</li><li>The one who gets the update becomes leader and continuously renews.</li><li>If it stops renewing, another instance takes over after the lease expires.</li></ul><pre>kubectl -n kube-system get lease</pre><p>Custom controllers implement the same via <code>client-go/tools/leaderelection</code>.</p>",
      },
      {
        q: "How does the HPA calculate desired replicas?",
        difficulty: "hard",
        a: "<p>Every ~15s the HPA controller:</p><ol><li>Fetches current metric values from metrics-server / custom metrics API.</li><li>Computes <code>desiredReplicas = ceil(currentReplicas × (currentMetric / targetMetric))</code>.</li><li>Applies tolerance (default 10%) — no change if within tolerance.</li><li>Applies scaling policies (max scale-up rate, stabilization window for scale-down to avoid flapping).</li><li>Writes new <code>spec.replicas</code> on the target Deployment.</li></ol><p>Multiple metrics: HPA computes desired for each and picks the <b>max</b>.</p>",
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
