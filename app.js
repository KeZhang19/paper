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
    mainContent: "主要内容",
    innovations: "创新点",
    implementation: "实现方法",
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
    mainContent: "Main Content",
    innovations: "Innovations",
    implementation: "Implementation",
    pdf: "Open PDF",
    project: "Project",
    arxiv: "arXiv",
  },
};

const categories = [
  { id: "rl", label: { zh: "rl", en: "RL" } },
  { id: "real-robot-rl", label: { zh: "真机rl", en: "Real-robot RL" } },
  { id: "sim2real", label: { zh: "sim2real", en: "sim2real" } },
  { id: "sim2real-dynamics-id", label: { zh: "仿真向实机的动力学辨识", en: "Sim-to-real Dynamics Identification" } },
  { id: "world-model", label: { zh: "世界模型", en: "World Model" } },
  { id: "vla", label: { zh: "vla", en: "VLA" } },
];

const papers = [
  {
    id: "mimicgen",
    categories: ["sim2real"],
    pdf: "read/2310.17596v1.pdf",
    project: "https://mimicgen.github.io",
    arxiv: "https://arxiv.org/abs/2310.17596",
    year: "2023",
    venue: "CoRL 2023 / arXiv:2310.17596",
    zh: {
      title: "MimicGen: A Data Generation System for Scalable Robot Learning using Human Demonstrations",
      authors: "Ajay Mandlekar, Soroush Nasiriany, Bowen Wen, Iretiayo Akinola, Yashraj Narang, Linxi Fan, Yuke Zhu, Dieter Fox",
      status: "已整理",
      tags: ["模仿学习", "操作任务", "数据生成"],
      mainContent:
        "MimicGen 研究机器人学习中的数据扩展问题：如何用少量人类遥操作示范，自动生成大量覆盖不同物体位姿、场景配置、物体实例和机械臂的新演示数据。论文用约 200 条源示范生成 50K+ 条新演示，并在 18 个长时程、高精度操作任务上验证这些数据可以有效训练模仿学习策略。",
      innovations: [
        "把人类示范复用为可执行的新轨迹，而不是单纯做离线数据增强或继续人工采集。",
        "以物体为中心切分和变换示范片段，使同一操作技能能迁移到新的物体位置、场景和硬件配置。",
        "系统性比较了生成数据和额外人工示范的价值，说明结构化生成数据在很多任务上可以接近人工采集效果。",
      ],
      implementation: [
        "先把人类示范分解成多个 object-centric motion segments，记录每段相对目标物体的运动关系。",
        "在新场景中根据物体的新位姿对片段做空间变换，并把多个片段拼接成完整机器人轨迹。",
        "让机器人在模拟或真实设置中执行合成轨迹，过滤成功轨迹后形成数据集，再用行为克隆训练策略。",
      ],
    },
    en: {
      title: "MimicGen: A Data Generation System for Scalable Robot Learning using Human Demonstrations",
      authors: "Ajay Mandlekar, Soroush Nasiriany, Bowen Wen, Iretiayo Akinola, Yashraj Narang, Linxi Fan, Yuke Zhu, Dieter Fox",
      status: "Summarized",
      tags: ["Imitation Learning", "Manipulation", "Data Generation"],
      mainContent:
        "MimicGen studies how to scale robot learning data from a small number of human teleoperation demonstrations. It synthesizes large demonstration datasets across object poses, scene layouts, object instances, and robot arms. The paper reports 50K+ generated demonstrations for 18 long-horizon and precision manipulation tasks from roughly 200 source demos.",
      innovations: [
        "It reuses human demonstrations as executable new trajectories instead of only applying offline augmentation or collecting more human data.",
        "Object-centric segmentation and transformation allow the same manipulation skill to transfer across new poses, scenes, and hardware.",
        "The paper directly compares generated data with additional human demonstrations, showing that structured generation can often approach the value of manual collection.",
      ],
      implementation: [
        "Split each human demonstration into object-centric motion segments and preserve the motion relationship relative to target objects.",
        "Transform segments according to new object poses, then stitch them into a complete robot trajectory.",
        "Execute synthesized trajectories, keep successful rollouts, and train policies from the generated dataset using behavior cloning.",
      ],
    },
  },
  {
    id: "dreamzero",
    categories: ["world-model"],
    pdf: "read/2602.15922v1.pdf",
    project: "https://dreamzero0.github.io",
    arxiv: "https://arxiv.org/abs/2602.15922",
    year: "2026",
    venue: "arXiv:2602.15922",
    zh: {
      title: "World Action Models are Zero-shot Policies",
      authors:
        "Seonghyeon Ye, Yunhao Ge, Kaiyuan Zheng, Shenyuan Gao, Sihyun Yu, George Kurian, Yuke Zhu, Yilun Du, Linxi Fan, Joel Jang 等",
      status: "已整理",
      tags: ["世界动作模型", "视频扩散", "零样本策略"],
      mainContent:
        "论文提出 DreamZero，一种 World Action Model。它把预训练视频扩散模型改造成机器人策略，让模型同时预测未来视频帧和连续动作，从而把视频模型学到的时空动态、物理先验迁移到真实机器人控制。作者强调，WAM 不只是理解语言指令，而是显式学习“动作会怎样改变世界”，因此在未见任务、未见环境和跨 embodiment 迁移上比传统 VLA 更有优势。",
      innovations: [
        "把视频世界建模和动作预测放进同一个端到端模型，用联合 video-action prediction 替代单纯的 VLA 状态到动作映射。",
        "采用自回归 WAM 架构，并在闭环控制中用真实观测替换 KV cache 中的预测帧，减轻长时程视频生成的误差累积。",
        "提出 DreamZero-Flash 和系统级加速，使 14B 视频扩散策略能以约 7Hz 做真实机器人闭环控制。",
        "验证了跨 embodiment 学习：来自其他机器人或人类的视频数据，即使没有动作标注，也能提升未见任务表现；少量新机器人 play data 可以完成适配。",
      ],
      implementation: [
        "输入包括视觉上下文、语言指令和本体状态；视觉由 VAE 编码，语言由文本编码器编码，本体状态由 state encoder 编码。",
        "主体使用预训练 image-to-video diffusion backbone，加入最小额外参数，包括 state/action encoders 和 decoders，通过 flow matching 联合去噪视频 latent 与动作。",
        "训练时采用 teacher forcing 和 chunk-wise 预测：当前 chunk 的 noisy video/action 可以 attend 到前面 clean chunks，从而学习未来视频和动作的联合分布。",
        "推理时异步执行动作 chunk，同时模型基于最新观测生成下一段 video/action；执行后把真实观测写回 KV cache，减少自回归生成漂移。",
        "实时化依赖 CFG 并行、DiT velocity caching、torch.compile/CUDA Graph、量化、调度器优化，以及 DreamZero-Flash 的解耦噪声日程。",
      ],
    },
    en: {
      title: "World Action Models are Zero-shot Policies",
      authors:
        "Seonghyeon Ye, Yunhao Ge, Kaiyuan Zheng, Shenyuan Gao, Sihyun Yu, George Kurian, Yuke Zhu, Yilun Du, Linxi Fan, Joel Jang, et al.",
      status: "Summarized",
      tags: ["World Action Model", "Video Diffusion", "Zero-shot Policy"],
      mainContent:
        "The paper introduces DreamZero, a World Action Model that turns a pretrained video diffusion model into a robot policy. The model jointly predicts future video frames and continuous actions, transferring spatiotemporal and physical priors from video generation into real-robot control. The key idea is that a policy should learn how actions change the world, not only how to map language and observations to actions.",
      innovations: [
        "It combines video world modeling and action prediction in one end-to-end model instead of using a pure VLA-style state-to-action mapping.",
        "The autoregressive WAM architecture uses real observations to refresh the KV cache after each executed action chunk, reducing compounding errors in long-horizon generation.",
        "DreamZero-Flash and system optimizations make a 14B video diffusion policy run closed-loop real-robot control at about 7Hz.",
        "The paper demonstrates cross-embodiment learning: video-only data from other robots or humans improves unseen-task performance, and limited play data adapts the model to a new robot.",
      ],
      implementation: [
        "Inputs include visual context, language instructions, and proprioceptive state, encoded by a VAE, text encoder, and state encoder.",
        "The model builds on a pretrained image-to-video diffusion backbone with minimal added state/action encoders and decoders, trained with flow matching to jointly denoise video latents and actions.",
        "Training uses teacher forcing and chunk-wise prediction: each noisy video/action chunk attends to clean previous chunks to learn the joint future video-action distribution.",
        "During inference, action chunks are executed asynchronously while the model predicts the next chunk from the latest observation; real observations are written back into the KV cache to prevent drift.",
        "Real-time execution relies on CFG parallelism, DiT velocity caching, torch.compile/CUDA Graphs, quantization, scheduler optimization, and DreamZero-Flash decoupled noise schedules.",
      ],
    },
  },
  {
    id: "lda-1b",
    categories: ["world-model"],
    pdf: "read/2602.12215v1.pdf",
    project: "https://pku-epic.github.io/LDA/",
    arxiv: "https://arxiv.org/abs/2602.12215",
    year: "2026",
    venue: "arXiv:2602.12215",
    zh: {
      title: "LDA-1B: Scaling Latent Dynamics Action Model via Universal Embodied Data Ingestion",
      authors:
        "Jiangran Lyu, Kai Liu, Xuheng Zhang, Haoran Liao, Yusen Feng, Wenxuan Zhu, Tingrui Shen, Jiayi Chen, Jiazhao Zhang, Yifei Dong, Wenbo Cui, Senmao Qi, Shuo Wang, Yixin Zheng, Mi Yan, Xuesong Shi, Haoran Li, Dongbin Zhao, Ming-Yu Liu, Zhizheng Zhang, Li Yi, Yizhou Wang, He Wang",
      status: "已整理",
      tags: ["Latent Dynamics", "Unified World Model", "Embodied Data"],
      mainContent:
        "LDA-1B 研究如何把异构具身数据规模化地用于机器人基础模型训练。论文提出 1.6B 参数的 Latent Dynamics Action Model，在统一世界模型框架下同时学习策略、正向动力学、逆动力学和视觉预测，并用超过 30K 小时的人类与机器人交互数据 EI-30K 进行训练。核心观点是：高质量示范、低质量轨迹和无动作视频都包含有价值的动力学信息，不应该只按行为克隆思路丢弃非专家数据。",
      innovations: [
        "提出 universal embodied data ingestion：不同质量的数据承担不同训练角色，高质量轨迹训练策略和动力学，低质量轨迹用于动力学和视觉预测，无动作人类视频用于视觉预测。",
        "把未来视觉状态预测放到结构化 DINO latent 空间，而不是像素或 VAE latent，减少背景、纹理和光照等外观噪声对动力学学习的干扰。",
        "构建 EI-30K 数据集，统一 30K+ 小时真实机器人、仿真机器人、有动作人类示范和无动作人类视频，并对动作坐标系和质量标签做标准化。",
        "用 MM-DiT 统一处理异步视觉与动作流，在 1B 规模下稳定联合建模策略和世界动力学，并在仿真、真机、灵巧手、长时程任务上超过强基线。",
      ],
      implementation: [
        "训练目标来自 Unified World Model：同时建模 policy、forward dynamics、inverse dynamics 和 visual planning 四类条件分布。",
        "模型使用四个可学习 task embeddings 和 action/visual register tokens，在同一个 diffusion model 中选择性激活动作损失或视觉损失，使不同监督类型的数据都能参与训练。",
        "视觉目标由 DINOv3 特征表示，动作统一为 hand-centric action space，包括末端执行器 delta pose、夹爪宽度或灵巧手关键点。",
        "主体是 Multi-Modal Diffusion Transformer：动作 chunk 和未来 DINO visual tokens 分别加噪，经模态专用投影进入共享 self-attention，同时通过 cross-attention 接入 VLM 语言/视觉条件。",
        "预训练冻结 VLM 与 DINO encoder，只更新 MM-DiT 和动作编码/解码器；后训练阶段直接利用混合质量目标机器人遥操作数据做轻量适配。",
      ],
    },
    en: {
      title: "LDA-1B: Scaling Latent Dynamics Action Model via Universal Embodied Data Ingestion",
      authors:
        "Jiangran Lyu, Kai Liu, Xuheng Zhang, Haoran Liao, Yusen Feng, Wenxuan Zhu, Tingrui Shen, Jiayi Chen, Jiazhao Zhang, Yifei Dong, Wenbo Cui, Senmao Qi, Shuo Wang, Yixin Zheng, Mi Yan, Xuesong Shi, Haoran Li, Dongbin Zhao, Ming-Yu Liu, Zhizheng Zhang, Li Yi, Yizhou Wang, He Wang",
      status: "Summarized",
      tags: ["Latent Dynamics", "Unified World Model", "Embodied Data"],
      mainContent:
        "LDA-1B studies how to scale robot foundation models with heterogeneous embodied data. It introduces a 1.6B-parameter Latent Dynamics Action Model that jointly learns policy, forward dynamics, inverse dynamics, and visual forecasting under a unified world-model formulation. The model is trained with EI-30K, over 30K hours of human and robot interaction data. The main claim is that expert demonstrations, noisy trajectories, and actionless videos all contain useful dynamics knowledge and should not be discarded by behavior-cloning-centric pipelines.",
      innovations: [
        "It proposes universal embodied data ingestion: high-quality trajectories train both policy and dynamics, low-quality trajectories train dynamics and visual forecasting, and actionless human videos supervise visual forecasting.",
        "Future visual prediction is performed in structured DINO latent space instead of pixel or VAE latent space, reducing distraction from texture, lighting, and background appearance.",
        "The paper builds EI-30K, a 30K+ hour embodied interaction dataset unifying real-robot data, simulated robot data, human demonstrations with actions, and actionless human videos with standardized actions and quality labels.",
        "MM-DiT jointly handles asynchronous visual and action streams, enabling stable policy and dynamics learning at the 1B scale and outperforming strong baselines in simulation, real-world, dexterous, and long-horizon tasks.",
      ],
      implementation: [
        "The training objective follows a Unified World Model formulation with four conditional objectives: policy, forward dynamics, inverse dynamics, and visual planning.",
        "Four learnable task embeddings and action/visual register tokens allow one diffusion model to selectively activate action or visual losses depending on the supervision available in each data source.",
        "Visual targets are represented with DINOv3 features, while actions are unified into a hand-centric action space covering end-effector delta poses, gripper width, and dexterous-hand keypoints.",
        "The core model is a Multi-Modal Diffusion Transformer: noisy action chunks and future DINO visual tokens are projected into shared self-attention, while VLM language and visual conditioning enter through cross-attention.",
        "Pretraining freezes the VLM and DINO encoder and updates MM-DiT plus action encoders/decoders; post-training adapts the model with mixed-quality teleoperation data from the target robot.",
      ],
    },
  },
  {
    id: "gigaworld-policy",
    categories: ["world-model"],
    pdf: "read/2603.17240v2.pdf",
    project: "https://gigaai-research.github.io/GigaWorld-Policy/",
    arxiv: "https://arxiv.org/abs/2603.17240",
    year: "2026",
    venue: "arXiv:2603.17240",
    zh: {
      title: "GigaWorld-Policy: An Efficient Action-Centered World-Action Model",
      authors:
        "Angen Ye, Boyuan Wang, Chaojun Ni, Guan Huang, Guosheng Zhao, Hao Li, Hengtao Li, Jie Li, Jindi Lv, Jingyu Liu, Min Cao, Peng Li, Qiuping Deng, Wenjun Mei, Xiaofeng Wang, Xinze Chen, Xinyu Zhou, Yang Wang, Yifan Chang, Yifan Li, Yukun Zhou, Yun Ye, Zhichao Liu, Zheng Zhu",
      status: "已整理",
      tags: ["世界动作模型", "机器人策略", "动作中心建模"],
      mainContent:
        "GigaWorld-Policy 研究如何把视频世界模型变成高效机器人策略。论文提出 action-centered World-Action Model，让模型在训练时同时学习未来视频和动作，但在推理时主要输出动作，从而避免逐帧生成视频带来的高延迟。作者基于大规模视频模型和约 10K 小时多源视频数据预训练 GigaWorld-0.5，再用目标机器人轨迹做后训练，在真实机械臂任务上报告 0.83 成功率、约 0.36 秒单步推理，并显著快于需要在线生成视频的 WAM 方法。",
      innovations: [
        "把 WAM 设计成动作中心结构：动作预测是主路径，未来视频生成是训练期辅助信号，而不是每次控制都必须生成的视频规划结果。",
        "提出 block-causal attention mask，动作 token 只能看当前观测、本体状态和语言，未来视频 token 可以看动作，从结构上防止未来视觉信息泄漏到动作预测。",
        "采用 train complex, infer simple 的思路：训练时用视频预测强化物理和时空理解，推理时只走动作解码，兼顾世界建模能力和实时控制效率。",
        "通过大规模视频预训练把网络视频、机器人视频和人类第一视角视频中的动态先验迁移到机器人策略，再用少量目标机器人数据适配具体 embodiment。",
      ],
      implementation: [
        "输入包含多视角 RGB 观测、本体状态和语言指令；视觉由 VAE 编码，本体状态和动作通过线性投影进入共享的 diffusion Transformer。",
        "模型从 Wan2.2 5B 视频生成骨干初始化，预训练阶段主要做未来视频建模，后训练阶段联合优化视频 latent 和动作 token 的 flow matching 目标。",
        "注意力结构把序列分成当前观测、动作和未来视觉三类 token：动作不能 attend 到未来视觉，未来视觉可以 attend 到动作，以学习动作如何改变世界。",
        "部署时关闭未来视频解码分支，只根据最新观测和语言生成 action chunk；需要诊断或可视化时，仍可打开视频分支预测未来帧。",
        "实验覆盖自建 GigaWorld 数据、LIBERO 仿真和真实机械臂任务，重点比较成功率、推理时延以及相对 OpenVLA-OFT、Diffusion Policy、PI0 和 Motus 等方法的效率。",
      ],
    },
    en: {
      title: "GigaWorld-Policy: An Efficient Action-Centered World-Action Model",
      authors:
        "Angen Ye, Boyuan Wang, Chaojun Ni, Guan Huang, Guosheng Zhao, Hao Li, Hengtao Li, Jie Li, Jindi Lv, Jingyu Liu, Min Cao, Peng Li, Qiuping Deng, Wenjun Mei, Xiaofeng Wang, Xinze Chen, Xinyu Zhou, Yang Wang, Yifan Chang, Yifan Li, Yukun Zhou, Yun Ye, Zhichao Liu, Zheng Zhu",
      status: "Summarized",
      tags: ["World Action Model", "Robot Policy", "Action-centered Modeling"],
      mainContent:
        "GigaWorld-Policy studies how to turn a video world model into an efficient robot policy. The paper proposes an action-centered World-Action Model that learns future video and actions during training, but primarily outputs actions during inference, avoiding the latency of online video generation. The authors pretrain GigaWorld-0.5 from a large video model and about 10K hours of mixed video data, then post-train on target robot trajectories. In real-robot tasks, they report a 0.83 success rate and about 0.36 seconds per inference, substantially faster than WAM methods that generate video online.",
      innovations: [
        "It makes action prediction the primary path: future video generation is a training-time auxiliary signal, not a required online planning output.",
        "A block-causal attention mask lets action tokens see only current observations, proprioception, and language, while future visual tokens can condition on actions, preventing future-visual leakage into action prediction.",
        "The method follows a train-complex, infer-simple recipe: use video prediction to strengthen physical and temporal understanding during training, then decode only actions for real-time control.",
        "Large-scale video pretraining transfers dynamics priors from web videos, robot videos, and egocentric human videos into the policy, then limited target-robot data adapts the model to a specific embodiment.",
      ],
      implementation: [
        "Inputs include multi-view RGB observations, proprioceptive state, and language instructions; visual tokens are encoded with a VAE, while state and action tokens are projected into a shared diffusion Transformer.",
        "The backbone is initialized from the Wan2.2 5B video-generation model. Pretraining focuses on future-video modeling, and post-training jointly optimizes video latents and action tokens with flow matching.",
        "The sequence is divided into current observation, action, and future-visual tokens: actions cannot attend to future visuals, while future visuals can attend to actions to learn how actions change the world.",
        "At deployment, the future-video decoding branch is disabled and the policy predicts action chunks from the latest observation and language; the video branch can still be enabled for diagnosis or visualization.",
        "Experiments cover the GigaWorld data, LIBERO simulation, and real-robot manipulation tasks, emphasizing success rate, inference latency, and efficiency compared with OpenVLA-OFT, Diffusion Policy, PI0, and Motus.",
      ],
    },
  },
];

const state = {
  lang: localStorage.getItem("paper-notes-lang") || "zh",
  category: "all",
  query: "",
  selectedId: "lda-1b",
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

function categoryLabel(categoryId) {
  const category = categories.find((item) => item.id === categoryId);
  return category ? category.label[state.lang] : categoryId;
}

function categoryCount(categoryId) {
  return papers.filter((paper) => paper.categories.includes(categoryId)).length;
}

function listItems(items) {
  return items.map((item) => `<li>${item}</li>`).join("");
}

function searchableText(paper) {
  const localized = localPaper(paper);
  return [
    localized.title,
    localized.authors,
    localized.mainContent,
    localized.innovations.join(" "),
    localized.implementation.join(" "),
    paper.categories.map(categoryLabel).join(" "),
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
    const matchesCategory = state.category === "all" || paper.categories.includes(state.category);
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
  nodes.categoryCount.textContent = categories.length;

  const buttons = [
    {
      label: text("allPapers"),
      value: "all",
      count: papers.length,
    },
    ...categories.map((category) => ({
      label: category.label[state.lang],
      value: category.id,
      count: categoryCount(category.id),
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
  nodes.viewTitle.textContent = state.category === "all" ? text("allPapers") : categoryLabel(state.category);
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
  const tags = [
    ...paper.categories.map(categoryLabel),
    ...localized.tags,
  ]
    .map((tag) => `<span class="tag">${tag}</span>`)
    .join("");
  const selectedClass = paper.id === state.selectedId ? "is-selected" : "";

  return `
    <button class="paper-card ${selectedClass}" type="button" data-paper-id="${paper.id}">
      <div class="meta-row">
        <span>${paper.year}</span>
        <span>${paper.venue}</span>
      </div>
      <h3>${localized.title}</h3>
      <p>${localized.mainContent}</p>
      <div class="tag-row">${tags}</div>
    </button>
  `;
}

function renderDetail(paper) {
  if (!paper) return;

  const localized = localPaper(paper);
  const categoryTags = paper.categories.map(categoryLabel).map((category) => `<span class="tag">${category}</span>`).join("");

  nodes.paperDetail.innerHTML = `
    <div class="tag-row">${categoryTags}</div>
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
      <h3>${text("mainContent")}</h3>
      <p>${localized.mainContent}</p>
    </section>

    <section class="detail-section">
      <h3>${text("innovations")}</h3>
      <ul>${listItems(localized.innovations)}</ul>
    </section>

    <section class="detail-section">
      <h3>${text("implementation")}</h3>
      <ul>${listItems(localized.implementation)}</ul>
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
