const uiText = {
  zh: {
    siteLabel: "Paper Reading Notes",
    siteTitle: "论文阅读笔记",
    searchLabel: "搜索论文",
    searchPlaceholder: "标题、作者、关键词",
    papers: "篇论文",
    topics: "个方向",
    libraryLabel: "Library",
    allPapers: "全部论文",
    showing: "显示",
    of: "共",
    items: "篇",
    noResults: "没有找到匹配的论文。",
    venue: "来源",
    year: "年份",
    status: "状态",
    summary: "主要内容",
    method: "方法脉络",
    takeaways: "阅读要点",
    notes: "我的笔记",
    pdf: "打开 PDF",
    project: "项目主页",
    arxiv: "arXiv",
  },
  en: {
    siteLabel: "Paper Reading Notes",
    siteTitle: "Paper Reading Notes",
    searchLabel: "Search papers",
    searchPlaceholder: "Title, author, keyword",
    papers: "papers",
    topics: "topics",
    libraryLabel: "Library",
    allPapers: "All Papers",
    showing: "Showing",
    of: "of",
    items: "items",
    noResults: "No matching papers found.",
    venue: "Venue",
    year: "Year",
    status: "Status",
    summary: "Main Idea",
    method: "Method",
    takeaways: "Takeaways",
    notes: "My Notes",
    pdf: "Open PDF",
    project: "Project",
    arxiv: "arXiv",
  },
};

const papers = [
  {
    id: "mimicgen",
    pdf: "2310.17596v1.pdf",
    project: "https://mimicgen.github.io",
    arxiv: "https://arxiv.org/abs/2310.17596",
    year: "2023",
    venue: "CoRL 2023 / arXiv:2310.17596",
    zh: {
      title: "MimicGen: A Data Generation System for Scalable Robot Learning using Human Demonstrations",
      authors: "Ajay Mandlekar, Soroush Nasiriany, Bowen Wen, Iretiayo Akinola, Yashraj Narang, Linxi Fan, Yuke Zhu, Dieter Fox",
      status: "已整理",
      categories: ["机器人学习", "模仿学习", "数据生成"],
      tags: ["Human Demonstrations", "Manipulation", "Data Scaling"],
      summary:
        "MimicGen 关注机器人模仿学习中的数据成本问题：只用少量人类遥操作示范，自动生成覆盖不同物体位置、场景配置、物体实例和机械臂的大规模演示数据。论文用约 200 条人类示范生成 50K+ 条新演示，并在 18 个任务上验证生成数据可以训练出表现很强的模仿学习策略。",
      method: [
        "把原始示范切成以物体为中心的动作片段，保留每段相对物体的运动结构。",
        "在新场景中根据目标物体位姿对片段做空间变换，再把多个片段拼接成新的机器人轨迹。",
        "让机器人执行合成轨迹并收集成功样本，形成可直接用于行为克隆的大规模数据集。",
      ],
      takeaways: [
        "核心价值不是提出新的策略网络，而是把少量高质量人类示范复用成更宽的训练分布。",
        "对长时程、多阶段、高精度操作尤其有意义，因为这些任务手工采集数据很贵。",
        "它提出了一个很实用的问题：什么时候真正需要继续找人采数据，什么时候可以通过结构化重放扩展数据。",
      ],
      notes:
        "这篇适合作为机器人数据生成方向的基础阅读。后续可以重点对比 Diffusion Policy、robomimic 以及真实机器人上的数据增强方法。",
    },
    en: {
      title: "MimicGen: A Data Generation System for Scalable Robot Learning using Human Demonstrations",
      authors: "Ajay Mandlekar, Soroush Nasiriany, Bowen Wen, Iretiayo Akinola, Yashraj Narang, Linxi Fan, Yuke Zhu, Dieter Fox",
      status: "Summarized",
      categories: ["Robot Learning", "Imitation Learning", "Data Generation"],
      tags: ["Human Demonstrations", "Manipulation", "Data Scaling"],
      summary:
        "MimicGen tackles the data bottleneck in imitation learning. Starting from a small number of teleoperated human demonstrations, it automatically synthesizes large and diverse robot demonstration datasets across object poses, scene layouts, object instances, and robot arms. The paper reports 50K+ generated demonstrations for 18 tasks from roughly 200 source demos.",
      method: [
        "Segment each source demonstration into object-centric motion snippets.",
        "Transform those snippets according to object poses in a new scene, then stitch them into a feasible robot trajectory.",
        "Execute the synthesized trajectory and keep successful rollouts as data for behavior cloning.",
      ],
      takeaways: [
        "The main contribution is a practical data generation system rather than a new policy architecture.",
        "The approach is especially useful for long-horizon and precision manipulation tasks where manual data collection is expensive.",
        "It reframes a useful scaling question: when should we collect more human data, and when can structured replay provide enough diversity?",
      ],
      notes:
        "A good anchor paper for robot data generation. Natural follow-ups include Diffusion Policy, robomimic, and real-robot data augmentation methods.",
    },
  },
  {
    id: "dreamzero",
    pdf: "2602.15922v1.pdf",
    project: "https://dreamzero0.github.io",
    arxiv: "https://arxiv.org/abs/2602.15922",
    year: "2026",
    venue: "arXiv:2602.15922",
    zh: {
      title: "World Action Models are Zero-shot Policies",
      authors:
        "Seonghyeon Ye, Yunhao Ge, Kaiyuan Zheng, Shenyuan Gao, Sihyun Yu, George Kurian, Yuke Zhu, Yilun Du, Linxi Fan, Joel Jang 等",
      status: "已整理",
      categories: ["机器人学习", "世界模型", "基础策略"],
      tags: ["World Action Model", "Video Diffusion", "Zero-shot Policy"],
      summary:
        "论文提出 DreamZero，一类 World Action Model：模型不仅预测动作，还联合预测未来视频帧，把视频扩散模型中的时空和物理先验迁移到机器人控制中。作者认为这比传统 VLA 更擅长处理未见过的物理动作、环境变化和跨 embodiment 迁移。",
      method: [
        "以预训练视频扩散 backbone 为基础，让模型同时生成未来世界状态和连续动作。",
        "把动作学习从单纯的状态到动作模仿，转向与视觉未来对齐的逆动力学建模。",
        "通过模型和系统优化，让 14B 自回归视频扩散模型达到 7Hz 闭环控制。",
      ],
      takeaways: [
        "它把机器人策略学习和视频世界建模合到一起，重点不是只理解语言指令，而是预测动作会如何改变世界。",
        "论文报告相对 VLA 在新任务和新环境上有超过 2x 的泛化提升。",
        "跨 embodiment 结果很值得关注：其他机器人或人类的视频数据也能提升未见任务表现，少量新 embodiment play data 可以完成适配。",
      ],
      notes:
        "这篇适合放在机器人基础模型和 VLA/WAM 方向。读的时候可以特别关注实时控制延迟、动作表示、视频预测质量和真实机器人实验设置。",
    },
    en: {
      title: "World Action Models are Zero-shot Policies",
      authors:
        "Seonghyeon Ye, Yunhao Ge, Kaiyuan Zheng, Shenyuan Gao, Sihyun Yu, George Kurian, Yuke Zhu, Yilun Du, Linxi Fan, Joel Jang, et al.",
      status: "Summarized",
      categories: ["Robot Learning", "World Models", "Foundation Policies"],
      tags: ["World Action Model", "Video Diffusion", "Zero-shot Policy"],
      summary:
        "The paper introduces DreamZero, a World Action Model that predicts both future video frames and continuous robot actions. By building on a pretrained video diffusion backbone, the model transfers spatiotemporal world priors into robot control and aims to improve generalization beyond traditional vision-language-action models.",
      method: [
        "Start from a pretrained video diffusion backbone and jointly model future world states and actions.",
        "Shift action learning from direct state-action imitation toward inverse dynamics aligned with predicted visual futures.",
        "Use model and system optimizations so a 14B autoregressive video diffusion model can run closed-loop control at 7Hz.",
      ],
      takeaways: [
        "The paper connects robot policy learning with video world modeling: the model learns how actions change the scene, not just how to follow language.",
        "It reports more than 2x improvement over VLA baselines on new-task and new-environment generalization.",
        "The cross-embodiment results are notable: video-only data from other robots or humans improves unseen-task performance, and limited play data supports adaptation to a new embodiment.",
      ],
      notes:
        "A useful paper for the VLA/WAM and robot foundation model thread. Key details to inspect include latency, action representation, video prediction quality, and real-robot evaluation design.",
    },
  },
];

const state = {
  lang: localStorage.getItem("paper-notes-lang") || "zh",
  category: "all",
  query: "",
  selectedId: "",
};

const nodes = {
  html: document.documentElement,
  langButtons: Array.from(document.querySelectorAll(".lang-button")),
  search: document.querySelector("#paper-search"),
  categoryNav: document.querySelector("#category-nav"),
  paperList: document.querySelector("#paper-list"),
  paperDetail: document.querySelector("#paper-detail"),
  viewTitle: document.querySelector("#view-title"),
  resultCount: document.querySelector("#result-count"),
  paperCount: document.querySelector("#paper-count"),
  categoryCount: document.querySelector("#category-count"),
};

function text(key) {
  return uiText[state.lang][key];
}

function localPaper(paper) {
  return paper[state.lang];
}

function allCategories() {
  return Array.from(new Set(papers.flatMap((paper) => localPaper(paper).categories))).sort();
}

function categoryCount(category) {
  return papers.filter((paper) => localPaper(paper).categories.includes(category)).length;
}

function searchableText(paper) {
  const localized = localPaper(paper);
  return [
    localized.title,
    localized.authors,
    localized.summary,
    localized.categories.join(" "),
    localized.tags.join(" "),
    paper.year,
    paper.venue,
  ]
    .join(" ")
    .toLowerCase();
}

function filteredPapers() {
  const query = state.query.trim().toLowerCase();

  return papers.filter((paper) => {
    const matchesCategory =
      state.category === "all" || localPaper(paper).categories.includes(state.category);
    const matchesQuery = !query || searchableText(paper).includes(query);
    return matchesCategory && matchesQuery;
  });
}

function syncLanguage() {
  nodes.html.lang = state.lang === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = text(key);
  });
  nodes.search.placeholder = text("searchPlaceholder");
  nodes.langButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === state.lang);
  });
}

function renderCategories() {
  const categories = allCategories();
  nodes.categoryCount.textContent = categories.length;

  const buttons = [
    {
      label: text("allPapers"),
      value: "all",
      count: papers.length,
    },
    ...categories.map((category) => ({
      label: category,
      value: category,
      count: categoryCount(category),
    })),
  ];

  nodes.categoryNav.innerHTML = buttons
    .map(
      (category) => `
        <button class="category-button ${state.category === category.value ? "is-active" : ""}"
          type="button"
          data-category="${category.value}">
          <span>${category.label}</span>
          <small>${category.count}</small>
        </button>
      `,
    )
    .join("");
}

function renderList() {
  const list = filteredPapers();
  nodes.paperCount.textContent = papers.length;
  nodes.viewTitle.textContent = state.category === "all" ? text("allPapers") : state.category;
  nodes.resultCount.textContent = `${text("showing")} ${list.length} ${text("of")} ${papers.length} ${text("items")}`;

  if (!list.length) {
    nodes.paperList.innerHTML = `<div class="empty-state">${text("noResults")}</div>`;
    nodes.paperDetail.innerHTML = "";
    return;
  }

  const selectedStillVisible = list.some((paper) => paper.id === state.selectedId);
  if (!state.selectedId || !selectedStillVisible) {
    state.selectedId = list[0].id;
  }

  nodes.paperList.innerHTML = list.map(renderPaperCard).join("");
  renderDetail(papers.find((paper) => paper.id === state.selectedId));
}

function renderPaperCard(paper) {
  const localized = localPaper(paper);
  const tags = localized.tags.map((tag) => `<span class="tag">${tag}</span>`).join("");
  const selectedClass = paper.id === state.selectedId ? "is-selected" : "";

  return `
    <button class="paper-card ${selectedClass}" type="button" data-paper-id="${paper.id}">
      <div class="meta-row">
        <span>${paper.year}</span>
        <span>${paper.venue}</span>
      </div>
      <h3>${localized.title}</h3>
      <p>${localized.summary}</p>
      <div class="tag-row">${tags}</div>
    </button>
  `;
}

function renderDetail(paper) {
  if (!paper) return;

  const localized = localPaper(paper);
  const categories = localized.categories.map((category) => `<span class="tag">${category}</span>`).join("");
  const method = localized.method.map((item) => `<li>${item}</li>`).join("");
  const takeaways = localized.takeaways.map((item) => `<li>${item}</li>`).join("");

  nodes.paperDetail.innerHTML = `
    <div class="tag-row">${categories}</div>
    <h2 class="detail-title">${localized.title}</h2>
    <p class="detail-subtitle">${localized.authors}</p>

    <div class="detail-grid">
      <div class="info-tile">
        <span>${text("venue")}</span>
        <strong>${paper.venue}</strong>
      </div>
      <div class="info-tile">
        <span>${text("year")}</span>
        <strong>${paper.year}</strong>
      </div>
      <div class="info-tile">
        <span>${text("status")}</span>
        <strong>${localized.status}</strong>
      </div>
    </div>

    <section class="detail-section">
      <h3>${text("summary")}</h3>
      <p>${localized.summary}</p>
    </section>

    <section class="detail-section">
      <h3>${text("method")}</h3>
      <ul>${method}</ul>
    </section>

    <section class="detail-section">
      <h3>${text("takeaways")}</h3>
      <ul>${takeaways}</ul>
    </section>

    <section class="detail-section">
      <h3>${text("notes")}</h3>
      <p>${localized.notes}</p>
    </section>

    <div class="link-row">
      <a class="action-link primary" href="${paper.pdf}" target="_blank" rel="noreferrer">${text("pdf")}</a>
      <a class="action-link" href="${paper.arxiv}" target="_blank" rel="noreferrer">${text("arxiv")}</a>
      <a class="action-link" href="${paper.project}" target="_blank" rel="noreferrer">${text("project")}</a>
    </div>
  `;
}

function render() {
  syncLanguage();
  renderCategories();
  renderList();
}

nodes.langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.lang = button.dataset.lang;
    state.category = "all";
    localStorage.setItem("paper-notes-lang", state.lang);
    render();
  });
});

nodes.search.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderList();
});

nodes.categoryNav.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  state.category = button.dataset.category;
  renderCategories();
  renderList();
});

nodes.paperList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-paper-id]");
  if (!button) return;
  state.selectedId = button.dataset.paperId;
  renderList();
});

render();
