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
  { id: "teleop-bc", label: { zh: "遥操BC", en: "Teleoperation BC" } },
  { id: "bc-rl", label: { zh: "BC+RL", en: "BC+RL" } },
  { id: "world-model", label: { zh: "世界模型", en: "World Model" } },
  { id: "vla", label: { zh: "vla", en: "VLA" } },
];

const papers = [
  {
    id: "dextrah-rgb",
    categories: ["sim2real"],
    pdf: "read/document.pdf",
    project: "https://dextrah-rgb.github.io/",
    arxiv: "https://arxiv.org/abs/2412.01791",
    year: "2025",
    venue: "arXiv:2412.01791",
    zh: {
      title: "DextrAH-RGB: Visuomotor Policies to Grasp Anything with Dexterous Hands",
      authors: "Ritvik Singh, Arthur Allshire, Ankur Handa, Nathan Ratliff, Karl Van Wyk",
      status: "已整理",
      tags: ["Sim-to-Real", "Dexterous Grasping", "RGB Policy"],
      mainContent:
        "DextrAH-RGB 研究如何只用 RGB 图像输入训练端到端灵巧臂手抓取策略，并从仿真零样本迁移到真实世界。它先训练带特权状态的 fabric-guided teacher policy，再用高保真 tiled rendering 和在线 DAgger 蒸馏成 RGB-based student policy，实现对新物体、新纹理和不同光照条件的真实灵巧抓取。",
      innovations: [
        "展示了复杂、动态、接触丰富的 dexterous grasping 任务中端到端 RGB policy 的 robust sim-to-real transfer。",
        "相比依赖深度图、点云或物体 pose 的方法，RGB 策略避免了透明/反光物体和深度传感器伪影带来的限制。",
        "复用 geometric fabric controller，把 RL 动作限制在安全、反应式、适合抓取的 palm pose 与手部 PCA action space 中。",
        "使用 photorealistic tiled rendering、材质/纹理/光照随机化和 stereo RGB 输入，让纯仿真蒸馏出的视觉策略能泛化到真实场景。",
      ],
      implementation: [
        "第一阶段在 Isaac Lab 中用 PPO 训练 state-based teacher FGP，actor 使用带噪状态，critic 使用完整特权状态和接触/力矩信息。",
        "teacher action 不是直接关节命令，而是 geometric fabric 的参数化目标，包括 palm 6D pose 和 5D 手指 PCA 子空间。",
        "第二阶段用 online DAgger 蒸馏 student FGP，student 输入左右 RGB 相机图像和本体状态，监督匹配 teacher action distribution，并辅助预测物体 3D 位置。",
        "训练中使用 HDRI、材质、纹理、相机和物理参数随机化，并通过 ADR 逐步提高任务和动力学难度。",
        "真实部署时 student 直接从 RGB 与本体感知输出 fabric action，由 fabric controller 和底层 PD 控制器保证安全、平滑执行。",
      ],
    },
    en: {
      title: "DextrAH-RGB: Visuomotor Policies to Grasp Anything with Dexterous Hands",
      authors: "Ritvik Singh, Arthur Allshire, Ankur Handa, Nathan Ratliff, Karl Van Wyk",
      status: "Summarized",
      tags: ["Sim-to-Real", "Dexterous Grasping", "RGB Policy"],
      mainContent:
        "DextrAH-RGB studies end-to-end dexterous arm-hand grasping from RGB image input with zero-shot transfer from simulation to the real world. It first trains a privileged state-based fabric-guided teacher policy, then distills it into an RGB-based student policy using photorealistic tiled rendering and online DAgger, enabling grasping of novel objects under unseen geometry, texture, and lighting.",
      innovations: [
        "It demonstrates robust sim-to-real transfer of an end-to-end RGB policy for complex, dynamic, contact-rich dexterous grasping.",
        "Compared with depth, point-cloud, or object-pose-based methods, RGB avoids limitations from transparent/reflective objects and depth-sensor artifacts.",
        "A geometric fabric controller constrains RL actions to a safe, reactive grasping-friendly palm pose and hand PCA action space.",
        "Photorealistic tiled rendering, material/texture/lighting randomization, and stereo RGB inputs allow a simulation-only distilled visual policy to generalize to real scenes.",
      ],
      implementation: [
        "Stage one trains a state-based teacher FGP in Isaac Lab with PPO; the actor receives noisy state observations, while the critic receives privileged state plus contact and torque information.",
        "The teacher does not output raw joint commands. It emits parameterized fabric targets, including palm 6D pose and a 5D finger PCA subspace.",
        "Stage two distills a student FGP with online DAgger. The student receives left/right RGB images and proprioception, matches the teacher action distribution, and also predicts the 3D object position.",
        "Training randomizes HDRI lighting, materials, textures, cameras, and physics parameters, with ADR gradually increasing task and dynamics difficulty.",
        "At real deployment, the student maps RGB and proprioception directly to fabric actions, while the fabric controller and low-level PD controller ensure safe and smooth execution.",
      ],
    },
  },
  {
    id: "resfit-real-robot-rl",
    categories: ["real-robot-rl"],
    pdf: "read/2509.19301v2.pdf",
    project: "https://residual-offpolicy-rl.github.io",
    arxiv: "https://arxiv.org/abs/2509.19301",
    year: "2025",
    venue: "arXiv:2509.19301",
    zh: {
      title: "Residual Off-Policy RL for Finetuning Behavior Cloning Policies",
      authors: "Lars Ankile, Zhenyu Jiang, Rocky Duan, Guanya Shi, Pieter Abbeel, Anusha Nagabandi",
      status: "已整理",
      tags: ["Real-World RL", "Behavior Cloning", "Residual Policy"],
      mainContent:
        "ResFiT 研究如何在真实机器人上用在线 RL 提升已有 BC 策略，而不是重新训练一个完整策略。方法冻结 action-chunked BC base policy，只学习每一步的 lightweight residual correction，并在 29 DoF 轮式 humanoid 双臂五指手上完成真实世界 RL 微调。",
      innovations: [
        "把大型 BC 策略当作黑盒，只在动作上叠加 per-step residual，避免直接用 RL 优化大模型或 diffusion/action chunk 结构。",
        "使用 off-policy RL、demonstration replay 和 critic warmup 提升样本效率，使 sparse binary reward 也能用于真实长时程任务。",
        "可以直接限制 residual 幅度，让真实机器人探索更稳定、更安全，适合高自由度双手机器人。",
        "展示了在带灵巧手 humanoid 上直接做真实世界 RL 训练，并提升视觉操作任务成功率。",
      ],
      implementation: [
        "先用遥操作数据训练 BC base policy，base 输出未来 action chunk，随后冻结 base policy。",
        "residual policy 输入当前观测和 base action，输出修正项，真实执行动作为 base action 与 residual action 的和。",
        "critic 对完整动作估值，训练时混合 offline demonstrations 和 online interaction buffer，并使用 Q ensemble 与 high UTD 更新。",
        "在线阶段只需要任务成败的稀疏奖励，演示数据同时用于 base policy、critic 初始化和持续 replay。",
      ],
    },
    en: {
      title: "Residual Off-Policy RL for Finetuning Behavior Cloning Policies",
      authors: "Lars Ankile, Zhenyu Jiang, Rocky Duan, Guanya Shi, Pieter Abbeel, Anusha Nagabandi",
      status: "Summarized",
      tags: ["Real-World RL", "Behavior Cloning", "Residual Policy"],
      mainContent:
        "ResFiT studies how online RL can improve an existing BC policy on real robots without retraining the whole policy. It freezes an action-chunked BC base policy and learns lightweight per-step residual corrections, demonstrating real-world RL finetuning on a 29-DoF wheeled humanoid with bimanual dexterous hands.",
      innovations: [
        "The method treats large BC policies as black boxes and adds per-step action residuals, avoiding direct RL optimization of large diffusion or action-chunked models.",
        "Off-policy RL, demonstration replay, and critic warmup make sparse-binary-reward real-world learning sample efficient.",
        "Residual magnitudes can be explicitly bounded, making exploration more stable and safer for high-DoF bimanual robots.",
        "The paper demonstrates real-world RL training on a humanoid with dexterous hands and improves visuomotor manipulation performance.",
      ],
      implementation: [
        "A BC base policy is first trained from teleoperation demonstrations to output future action chunks, then frozen.",
        "The residual policy receives the current observation and base action and outputs a correction; the executed action is their sum.",
        "The critic evaluates full actions, with training batches mixed from offline demonstrations and online interaction buffers using Q ensembles and high UTD updates.",
        "The online phase only needs sparse task success rewards, while demonstrations are reused for base training, critic initialization, and replay.",
      ],
    },
  },
  {
    id: "serl-real-robot-rl",
    categories: ["real-robot-rl"],
    pdf: "https://arxiv.org/pdf/2401.16013",
    project: "https://serl-robot.github.io/",
    arxiv: "https://arxiv.org/abs/2401.16013",
    year: "2024",
    venue: "ICRA 2024 / arXiv:2401.16013",
    zh: {
      title: "SERL: A Software Suite for Sample-Efficient Robotic Reinforcement Learning",
      authors: "Jianlan Luo, Zheyuan Hu, Charles Xu, You Liang Tan, Jacob Berg, Archit Sharma, Stefan Schaal, Chelsea Finn, Abhishek Gupta, Sergey Levine",
      status: "已整理",
      tags: ["Real-World RL", "Sample Efficiency", "Software Suite"],
      mainContent:
        "SERL 提供一套面向真实机器人强化学习的开源软件栈，目标是让 sample-efficient off-policy deep RL 更容易复现和部署。它整合高质量机器人控制器、奖励计算、环境 reset、示范数据和视觉 RL 训练流程，在真实 Franka 机器人上实现 PCB 插装、线缆走线和物体搬运等任务的快速学习。",
      innovations: [
        "把真实机器人 RL 中大量关键实现细节系统化封装成可复用软件套件，降低复现实验和开发新任务的门槛。",
        "强调 sample-efficient off-policy RL，在真实硬件上用几十分钟级别的数据学习复杂接触操作任务。",
        "将 demonstrations、prior experience、视觉观测和自动 reset 机制纳入统一训练流程，提高真实机器人训练效率。",
        "展示策略在扰动、目标位姿变化和未见物体/场景变化下具备鲁棒恢复与纠错行为。",
      ],
      implementation: [
        "软件栈包含 off-policy RL 算法实现、Franka 控制器、任务环境、奖励计算和 reset 策略等模块。",
        "训练时可结合少量 demonstrations 与在线真实机器人交互数据，并使用高效 replay 和视觉表示学习。",
        "任务包括 PCB board assembly、cable routing 和 object relocation，覆盖高精度插装、柔性物体交互和目标搬运。",
        "实验在真实机器人上评估学习速度、成功率和鲁棒性，并开源代码、文档与机器人控制器。",
      ],
    },
    en: {
      title: "SERL: A Software Suite for Sample-Efficient Robotic Reinforcement Learning",
      authors: "Jianlan Luo, Zheyuan Hu, Charles Xu, You Liang Tan, Jacob Berg, Archit Sharma, Stefan Schaal, Chelsea Finn, Abhishek Gupta, Sergey Levine",
      status: "Summarized",
      tags: ["Real-World RL", "Sample Efficiency", "Software Suite"],
      mainContent:
        "SERL provides an open-source software stack for real-world robotic reinforcement learning, making sample-efficient off-policy deep RL easier to reproduce and deploy. It integrates high-quality robot control, reward computation, environment resets, demonstrations, and visual RL training, learning tasks such as PCB assembly, cable routing, and object relocation on a real Franka robot.",
      innovations: [
        "It packages many critical real-robot RL implementation details into a reusable software suite, lowering the barrier for reproducing and extending robotic RL systems.",
        "The work emphasizes sample-efficient off-policy RL, learning complex contact-rich manipulation tasks on real hardware with tens of minutes of data.",
        "Demonstrations, prior experience, visual observations, and automated reset mechanisms are integrated into one training workflow.",
        "Policies exhibit robust recovery and correction behavior under perturbations, object-pose changes, and unseen scene variations.",
      ],
      implementation: [
        "The stack includes an off-policy RL implementation, Franka controllers, task environments, reward computation, and reset strategies.",
        "Training can combine small numbers of demonstrations with online real-robot interaction data using efficient replay and visual representation learning.",
        "Tasks include PCB board assembly, cable routing, and object relocation, covering precision insertion, deformable object interaction, and target transport.",
        "Experiments evaluate learning speed, success rate, and robustness on real robots, with code, documentation, and robot controllers released.",
      ],
    },
  },
  {
    id: "hil-serl-real-robot-rl",
    categories: ["real-robot-rl"],
    pdf: "https://hil-serl.github.io/static/hil-serl-paper.pdf",
    project: "https://hil-serl.github.io/",
    arxiv: "https://arxiv.org/abs/2410.21845",
    year: "2024",
    venue: "arXiv:2410.21845",
    zh: {
      title: "Precise and Dexterous Robotic Manipulation via Human-in-the-Loop Reinforcement Learning",
      authors: "Jianlan Luo, Charles Xu, Jeffrey Wu, Sergey Levine",
      status: "已整理",
      tags: ["Real-World RL", "Human-in-the-Loop", "Dexterous Manipulation"],
      mainContent:
        "HIL-SERL 研究如何把人类介入、示范数据和高效视觉 RL 结合起来，在真实机器人上快速学习精密、灵巧的操作任务。系统先用遥操作收集正负样本训练二值奖励分类器，再用少量示范初始化 replay buffer，在线训练期间允许人类介入纠正，从而在 1 到 2.5 小时内学到高成功率、快执行速度的策略。",
      innovations: [
        "把 human interventions 融入真实机器人 RL 训练，让人在早期高频纠错、后期逐渐减少介入，兼顾安全性和探索效率。",
        "使用 binary reward classifier 作为稀疏奖励来源，减少手写奖励和复杂传感器标注需求。",
        "结合 demonstrations、在线 RL、视觉观测和系统级工程设计，在动态操作、精密装配和双臂协作任务上达到接近满成功率。",
        "相比 imitation learning baseline 和先前真实机器人 RL，平均成功率和执行速度都有显著提升。",
      ],
      implementation: [
        "先通过遥操作采集正负样本，训练 reward classifier 判断任务成功或阶段性进展。",
        "收集少量 demonstrations 并加入 demo buffer，在 RL 开始时提供有效初始经验。",
        "在线训练阶段用 efficient off-policy RL 更新策略，同时由人类在失败或危险状态下介入并提供纠正轨迹。",
        "评估任务覆盖动态操作、精密插装和双臂协调，重点比较成功率、cycle time、鲁棒性和人类介入量。",
      ],
    },
    en: {
      title: "Precise and Dexterous Robotic Manipulation via Human-in-the-Loop Reinforcement Learning",
      authors: "Jianlan Luo, Charles Xu, Jeffrey Wu, Sergey Levine",
      status: "Summarized",
      tags: ["Real-World RL", "Human-in-the-Loop", "Dexterous Manipulation"],
      mainContent:
        "HIL-SERL studies how to combine human interventions, demonstrations, and efficient visual RL to learn precise and dexterous manipulation directly on real robots. The system first collects positive and negative teleoperation samples to train a binary reward classifier, initializes RL with a small demonstration buffer, and allows humans to intervene during online training, learning high-success, fast policies within 1 to 2.5 hours.",
      innovations: [
        "Human interventions are built into real-robot RL training: frequent early corrections improve safety and exploration, then intervention frequency is reduced as the policy improves.",
        "A binary reward classifier provides sparse reward signals, reducing dependence on hand-designed rewards or complex instrumentation.",
        "Demonstrations, online RL, visual observations, and system-level design choices are combined to solve dynamic manipulation, precision assembly, and bimanual coordination tasks.",
        "The method substantially improves average success rate and execution speed compared with imitation-learning baselines and prior real-robot RL approaches.",
      ],
      implementation: [
        "Teleoperation first collects positive and negative samples for training a reward classifier.",
        "A small set of demonstrations is added to the demo buffer to give RL useful initial experience.",
        "During online training, efficient off-policy RL updates the policy while humans intervene in failure or unsafe states and provide corrective trajectories.",
        "Evaluation covers dynamic manipulation, precision insertion, and bimanual coordination, measuring success rate, cycle time, robustness, and human intervention effort.",
      ],
    },
  },
  {
    id: "silri-real-robot-rl",
    categories: ["real-robot-rl"],
    pdf: "https://arxiv.org/pdf/2512.24288",
    project: "https://silri-rl.github.io/",
    arxiv: "https://arxiv.org/abs/2512.24288",
    year: "2025",
    venue: "arXiv:2512.24288",
    zh: {
      title: "Real-world Reinforcement Learning from Suboptimal Interventions",
      authors: "Yinuo Zhao, Huiqian Jin, Lechun Jiang, Xinyi Zhang, Kun Wu, Pei Ren, Zhiyuan Xu, Zhengping Che, Lei Sun, Dapeng Wu, Chi Harold Liu, Jian Tang",
      status: "已整理",
      tags: ["Real-World RL", "Suboptimal Interventions", "Lagrangian RL"],
      mainContent:
        "SiLRI 研究真实机器人 RL 中如何利用不一定最优、带噪声的人类介入。论文指出，把 intervention 数据无差别混进 RL 目标会样本效率低，而纯模仿人类动作又会限制最终性能；因此它把在线机器人操作写成约束 RL 问题，用状态相关的人类不确定性决定每个状态的约束强度。",
      innovations: [
        "显式处理 human interventions 的 suboptimality，而不是假设人类在所有状态都能给出最优动作。",
        "提出 state-wise Lagrangian RL，让策略在不同状态自适应平衡 RL 目标和接近人类介入动作的约束。",
        "基于 human-as-copilot 遥操作系统进行真实机器人在线训练，在早期充分利用人类介入，后期允许策略超越不完美示范。",
        "相比 HIL-SERL，达到 90% 成功率所需时间至少减少一半，并在长时程操作任务上达到 100% 成功率。",
      ],
      implementation: [
        "把在线操作建模为 constrained RL，每个状态的 constraint bound 由 human intervention uncertainty 决定。",
        "引入 state-wise Lagrange multiplier，并通过 min-max optimization 联合优化策略和乘子，寻找 saddle point。",
        "训练系统由 human-as-copilot teleoperation 提供实时介入，介入动作可以作为约束信号但不被绝对模仿。",
        "真实实验覆盖多种机器人 embodiment 和操作任务，包括混合技能、关节物体、精密操作和柔性物体处理。",
      ],
    },
    en: {
      title: "Real-world Reinforcement Learning from Suboptimal Interventions",
      authors: "Yinuo Zhao, Huiqian Jin, Lechun Jiang, Xinyi Zhang, Kun Wu, Pei Ren, Zhiyuan Xu, Zhengping Che, Lei Sun, Dapeng Wu, Chi Harold Liu, Jian Tang",
      status: "Summarized",
      tags: ["Real-World RL", "Suboptimal Interventions", "Lagrangian RL"],
      mainContent:
        "SiLRI studies how real-world robot RL can benefit from human interventions that may be noisy or suboptimal. The paper argues that indiscriminately mixing intervention data into RL remains sample inefficient, while purely imitating interventions can cap final performance. It therefore formulates online manipulation as constrained RL, where state-dependent human uncertainty determines how strongly the policy should stay near intervention actions.",
      innovations: [
        "It explicitly models the suboptimality of human interventions instead of assuming that operators provide optimal actions everywhere.",
        "State-wise Lagrangian RL lets the policy adaptively balance the RL objective against intervention-matching constraints in each state.",
        "A human-as-copilot teleoperation system supports online real-robot training: early interventions accelerate learning, while later RL can surpass imperfect demonstrations.",
        "Compared with HIL-SERL, SiLRI cuts the time to 90% success by at least half and reaches 100% success on long-horizon manipulation tasks.",
      ],
      implementation: [
        "The online manipulation problem is cast as constrained RL, with each state's constraint bound determined by human intervention uncertainty.",
        "A state-wise Lagrange multiplier is optimized together with the policy through min-max optimization toward a saddle point.",
        "Real-time human-as-copilot teleoperation supplies intervention actions as constraint signals without forcing unconditional imitation.",
        "Real-world experiments cover multiple robot embodiments and manipulation tasks involving mixed skills, articulated objects, precision manipulation, and deformable objects.",
      ],
    },
  },
  {
    id: "dexndm",
    categories: ["rl"],
    pdf: "read/2510.08556v1.pdf",
    project: "https://meowuu7.github.io/DexNDM",
    arxiv: "https://arxiv.org/abs/2510.08556",
    year: "2025",
    venue: "arXiv:2510.08556",
    zh: {
      title: "DexNDM: Closing the Reality Gap for Dexterous In-Hand Rotation via Joint-wise Neural Dynamics Model",
      authors: "Xueyi Liu, He Wang, Li Yi",
      status: "已整理",
      tags: ["Reinforcement Learning", "In-Hand Rotation", "Neural Dynamics"],
      mainContent:
        "DexNDM 研究如何把仿真训练的灵巧手手内旋转策略迁移到真实世界，并覆盖复杂形状、高长宽比、小物体、多手腕姿态和不同旋转轴。核心是学习 joint-wise neural dynamics model，用少量真实交互数据估计真实动力学影响，再训练 residual policy 修正仿真策略动作。",
      innovations: [
        "把整手-物体复杂动力学分解成关节级模型，每个关节用自己的本体历史预测演化，减少对物体位姿估计的依赖。",
        "用低维变量压缩系统级影响，如关节耦合、负载和接触效应，使模型在少量真实数据下也能泛化。",
        "提出自主数据采集策略，通过随机负载收集任务无关真实交互数据，减少掉物体和人工 reset。",
        "结合 specialist-to-generalist 仿真策略训练和 residual sim-to-real adaptation，实现广泛真实物体手内旋转。",
      ],
      implementation: [
        "先在仿真中训练类别专家策略，覆盖不同物体比例、几何复杂度和手腕姿态，再蒸馏成统一 base policy。",
        "真实数据采集阶段不要求完成目标任务，而是对手施加随机负载，记录关节本体状态和响应。",
        "joint-wise dynamics model 从每个关节的 proprioceptive history 学习真实系统动态，并避免依赖遮挡严重的物体状态。",
        "根据 learned dynamics 训练 residual policy，输出对 base policy action 的修正，用于弥合真实动力学差异。",
      ],
    },
    en: {
      title: "DexNDM: Closing the Reality Gap for Dexterous In-Hand Rotation via Joint-wise Neural Dynamics Model",
      authors: "Xueyi Liu, He Wang, Li Yi",
      status: "Summarized",
      tags: ["Reinforcement Learning", "In-Hand Rotation", "Neural Dynamics"],
      mainContent:
        "DexNDM studies how to transfer simulation-trained dexterous in-hand rotation policies to the real world across complex shapes, high aspect ratios, small objects, diverse wrist poses, and rotation axes. Its core is a joint-wise neural dynamics model that uses limited real interaction data to model reality-gap effects and train residual action corrections.",
      innovations: [
        "It factorizes whole-hand object dynamics into joint-wise models, predicting each joint's evolution from its own proprioceptive history and reducing dependence on object pose estimation.",
        "Low-dimensional variables compress system-level influences such as coupling, load, and contact effects for data-efficient generalization.",
        "An autonomous task-agnostic data collection strategy applies randomized loads to gather real interaction data with fewer drops and human resets.",
        "Specialist-to-generalist simulation policy learning plus residual adaptation enables broad real-world in-hand rotation.",
      ],
      implementation: [
        "Category-specific expert policies are trained in simulation over object aspect ratios, geometry, and wrist poses, then distilled into a unified base policy.",
        "Real data collection does not require task success; randomized loads are applied to the hand while proprioceptive responses are recorded.",
        "The joint-wise dynamics model learns real dynamics from each joint's history, avoiding heavily occluded object-state estimation.",
        "A residual policy is trained from the learned dynamics to correct base policy actions for real hardware deployment.",
      ],
    },
  },
  {
    id: "vitra-human-video-vla",
    categories: ["vla"],
    pdf: "https://arxiv.org/pdf/2510.21571",
    project: "https://microsoft.github.io/VITRA/",
    arxiv: "https://arxiv.org/abs/2510.21571",
    year: "2025",
    venue: "ICRA 2026 / arXiv:2510.21571",
    zh: {
      title: "Scalable Vision-Language-Action Model Pretraining for Robotic Manipulation with Real-Life Human Activity Videos",
      authors: "Qixiu Li, Yu Deng, Yaobo Liang, Lin Luo, Lei Zhou, Chengtang Yao, Lingqi Zeng, Zhiyuan Feng, Huizhi Liang, Sicheng Xu, Yizhong Zhang, Xi Chen, Hao Chen, Lily Sun, Dong Chen, Jiaolong Yang, Baining Guo",
      status: "已整理",
      tags: ["VLA", "Human Activity Videos", "Dexterous Manipulation"],
      mainContent:
        "VITRA 研究如何用大规模真实人类第一视角手部活动视频预训练机器人操作 VLA。方法把人手看作灵巧机器人末端执行器，自动把无标注、非脚本化的人类视频转成与机器人 VLA 数据对齐的任务片段、语言描述、逐帧 3D 手部动作和相机运动，构建 1M+ episode 级别的 hand-VLA 数据用于预训练。",
      innovations: [
        "把 in-the-wild 人类手部视频转成 VLA 训练数据，显著扩大机器人数据中的物体、任务和真实环境覆盖。",
        "提出自动化 holistic human activity analysis pipeline，可生成 atomic-level 活动片段、语言标签、3D 手部轨迹和相机运动。",
        "将人手动作空间作为机器人手动作空间的上位表示，使预训练模型能通过少量真实机器人数据适配到灵巧操作。",
        "展示预训练数据规模带来的 scaling behavior，并在 unseen 真实观测和少量机器人 fine-tuning 场景中提升泛化。",
      ],
      implementation: [
        "从 egocentric human activity videos 中自动分割原子级操作 episode，并为每段生成对应语言指令。",
        "对视频逐帧恢复 3D hand motion 与 camera motion，将人手轨迹组织成类似机器人 VLA 的 observation-action 数据。",
        "用生成的 hand-VLA 数据预训练 dexterous hand VLA model，再用少量真实机器人 action data fine-tune。",
        "真实机器人部署时将机器人动作空间与人手动作空间对齐，用模型执行 pick-and-place、functional grasping 和顺序任务。",
      ],
    },
    en: {
      title: "Scalable Vision-Language-Action Model Pretraining for Robotic Manipulation with Real-Life Human Activity Videos",
      authors: "Qixiu Li, Yu Deng, Yaobo Liang, Lin Luo, Lei Zhou, Chengtang Yao, Lingqi Zeng, Zhiyuan Feng, Huizhi Liang, Sicheng Xu, Yizhong Zhang, Xi Chen, Hao Chen, Lily Sun, Dong Chen, Jiaolong Yang, Baining Guo",
      status: "Summarized",
      tags: ["VLA", "Human Activity Videos", "Dexterous Manipulation"],
      mainContent:
        "VITRA studies how to pretrain robotic manipulation VLA models from large-scale real-life egocentric videos of human hand activities. It treats human hands as dexterous robot end-effectors and automatically converts unannotated, unscripted videos into robot-VLA-aligned task segments, language descriptions, framewise 3D hand motions, and camera motion, forming a 1M+ episode hand-VLA dataset.",
      innovations: [
        "It turns in-the-wild human hand videos into VLA training data, greatly expanding object, task, and real-environment coverage beyond existing robot datasets.",
        "A fully automated holistic human activity analysis pipeline generates atomic activity segments, language labels, 3D hand trajectories, and camera motion.",
        "The human hand action space is used as a superset for robot hand actions, enabling the pretrained model to adapt with a small amount of real robot data.",
        "The paper shows scaling behavior from larger pretraining data and stronger generalization on unseen real observations and robot fine-tuning tasks.",
      ],
      implementation: [
        "Egocentric human activity videos are automatically segmented into atomic manipulation episodes with matching language instructions.",
        "Framewise 3D hand motion and camera motion are reconstructed and formatted as robot-VLA-like observation-action data.",
        "A dexterous hand VLA model is pretrained on the generated hand-VLA data, then fine-tuned with a small real robot action dataset.",
        "For deployment, the robot action space is aligned with the human hand action space to perform pick-and-place, functional grasping, and sequential tasks.",
      ],
    },
  },
  {
    id: "groot-n1",
    categories: ["vla"],
    pdf: "https://arxiv.org/pdf/2503.14734",
    project: "https://developer.nvidia.com/isaac/gr00t",
    arxiv: "https://arxiv.org/abs/2503.14734",
    year: "2025",
    venue: "arXiv:2503.14734",
    zh: {
      title: "GR00T N1: An Open Foundation Model for Generalist Humanoid Robots",
      authors: "NVIDIA: Johan Bjorck, Fernando Castañeda, Nikita Cherniadev, Xingye Da, Runyu Ding, Linxi \"Jim\" Fan, Yu Fang, Dieter Fox, Fengyuan Hu, Spencer Huang, Joel Jang, Zhenyu Jiang, Jan Kautz, Kaushil Kundalia, Lawrence Lao, Zhiqi Li, Zongyu Lin, Kevin Lin, Guilin Liu, Edith Llontop, Loic Magne, Ajay Mandlekar, Avnish Narayan, Soroush Nasiriany, Scott Reed, You Liang Tan, Guanzhi Wang, Zu Wang, Jing Wang, Qi Wang, Jiannan Xiang, Yuqi Xie, Yinzhen Xu, Zhenjia Xu, Seonghyeon Ye, Zhiding Yu, Ao Zhang, Hao Zhang, Yizhou Zhao, Ruijie Zheng, Yuke Zhu",
      status: "已整理",
      tags: ["VLA", "Humanoid Foundation Model", "Diffusion Transformer"],
      mainContent:
        "GR00T N1 是 NVIDIA 提出的开源 humanoid robot foundation model，面向通用人形机器人操作。它采用 dual-system VLA 架构：System 2 的视觉语言模块理解环境和语言指令，System 1 的 diffusion transformer 实时生成流畅运动动作，并把两部分端到端联合训练。",
      innovations: [
        "把 VLA foundation model 明确扩展到通用人形机器人，覆盖语言条件双臂操作和多 embodiment 仿真基准。",
        "提出 System 2 / System 1 双系统架构，把高层视觉语言理解和低层连续动作生成紧密耦合。",
        "使用 diffusion transformer 生成实时运动动作，相比离散动作 token 更适合高频、平滑的人形机器人控制。",
        "混合真实机器人轨迹、人类视频和合成数据训练，展示异构数据对 humanoid generalist policy 的价值。",
      ],
      implementation: [
        "System 2 负责从视觉观测和语言指令中提取任务语义，System 1 基于 diffusion transformer 生成连续 motor actions。",
        "训练数据由 real-robot trajectories、human videos 和 synthetically generated datasets 组成，并进行端到端联合训练。",
        "模型在多个机器人 embodiment 的标准仿真基准上与 imitation learning baselines 对比评估。",
        "真实部署在 Fourier GR-1 humanoid 上完成语言条件双臂操作任务，并展示较高数据效率。",
      ],
    },
    en: {
      title: "GR00T N1: An Open Foundation Model for Generalist Humanoid Robots",
      authors: "NVIDIA: Johan Bjorck, Fernando Castañeda, Nikita Cherniadev, Xingye Da, Runyu Ding, Linxi \"Jim\" Fan, Yu Fang, Dieter Fox, Fengyuan Hu, Spencer Huang, Joel Jang, Zhenyu Jiang, Jan Kautz, Kaushil Kundalia, Lawrence Lao, Zhiqi Li, Zongyu Lin, Kevin Lin, Guilin Liu, Edith Llontop, Loic Magne, Ajay Mandlekar, Avnish Narayan, Soroush Nasiriany, Scott Reed, You Liang Tan, Guanzhi Wang, Zu Wang, Jing Wang, Qi Wang, Jiannan Xiang, Yuqi Xie, Yinzhen Xu, Zhenjia Xu, Seonghyeon Ye, Zhiding Yu, Ao Zhang, Hao Zhang, Yizhou Zhao, Ruijie Zheng, Yuke Zhu",
      status: "Summarized",
      tags: ["VLA", "Humanoid Foundation Model", "Diffusion Transformer"],
      mainContent:
        "GR00T N1 is NVIDIA's open humanoid robot foundation model for generalist robot manipulation. It uses a dual-system VLA architecture: a vision-language module, System 2, interprets the scene and language instructions, while a diffusion transformer module, System 1, generates fluid motor actions in real time, with both modules jointly trained end to end.",
      innovations: [
        "It explicitly extends VLA foundation modeling to generalist humanoid robots, covering language-conditioned bimanual manipulation and multi-embodiment simulation benchmarks.",
        "The System 2 / System 1 architecture tightly couples high-level vision-language reasoning with low-level continuous action generation.",
        "A diffusion transformer produces real-time motor actions, making the model better suited to smooth high-frequency humanoid control than discrete action tokens.",
        "Training mixes real robot trajectories, human videos, and synthetic datasets, showing the value of heterogeneous data for humanoid generalist policies.",
      ],
      implementation: [
        "System 2 extracts task semantics from visual observations and language instructions, while System 1 generates continuous motor actions with a diffusion transformer.",
        "The training mixture combines real-robot trajectories, human videos, and synthetically generated datasets in end-to-end joint training.",
        "The model is evaluated against imitation-learning baselines on standard simulation benchmarks across multiple robot embodiments.",
        "Real-world deployment uses the Fourier GR-1 humanoid for language-conditioned bimanual manipulation tasks and demonstrates strong data efficiency.",
      ],
    },
  },
  {
    id: "diffudepgrasp",
    categories: ["sim2real"],
    pdf: "read/2511.12912v1.pdf",
    project: "https://diffudepgrasp.github.io/",
    arxiv: "https://arxiv.org/abs/2511.12912",
    year: "2025",
    venue: "arXiv:2511.12912",
    zh: {
      title: "DiffuDepGrasp: Diffusion-based Depth Noise Modeling Empowers Sim2Real Robotic Grasping",
      authors: "Yingting Zhou, Wenbo Cui, Weiheng Liu, Guixing Chen, Haoran Li, Dongbin Zhao",
      status: "已整理",
      tags: ["Sim-to-Real", "Depth Policy", "Diffusion"],
      mainContent:
        "DiffuDepGrasp 解决深度图策略从仿真到真实迁移时的观测 gap：真实深度图有空洞和噪声，而仿真深度过于干净。论文用 Diffusion Depth Generator 在训练期把仿真深度转成带真实传感器噪声的深度图，让最终策略部署时只吃 raw depth，无额外在线修复模块。",
      innovations: [
        "用 conditional diffusion 学习真实深度传感器噪声分布，而不是手写 procedural noise。",
        "Diffusion Depth Module 借助视频深度 foundation model 提供时间稳定的几何先验，降低少量非配对 RGB-D 数据训练难度。",
        "Noise Grafting Module 把学习到的噪声 graft 到仿真真值深度上，同时保留 metric accuracy。",
        "部署阶段不需要额外深度恢复或 foundation model 推理，避免实时控制延迟。",
      ],
      implementation: [
        "先在 Isaac Gym 中用 privileged state 和 PPO 训练 state-based teacher policy，得到高成功率抓取专家。",
        "用少量真实 RGB-D 数据训练 Diffusion Depth Module，学习真实相机噪声、空洞和伪影。",
        "对 teacher 轨迹中的仿真深度运行 DDG，生成接近真实传感器风格的 noisy depth。",
        "用这些深度图和 teacher action 做 imitation learning，蒸馏出 depth-based student policy 并零样本部署到真机。",
      ],
    },
    en: {
      title: "DiffuDepGrasp: Diffusion-based Depth Noise Modeling Empowers Sim2Real Robotic Grasping",
      authors: "Yingting Zhou, Wenbo Cui, Weiheng Liu, Guixing Chen, Haoran Li, Dongbin Zhao",
      status: "Summarized",
      tags: ["Sim-to-Real", "Depth Policy", "Diffusion"],
      mainContent:
        "DiffuDepGrasp addresses the observation gap for depth-based sim-to-real grasping: real depth maps contain holes and noise, while simulation depth is too clean. A Diffusion Depth Generator converts simulated depth into sensor-realistic noisy depth during training, so the final deployed policy uses only raw depth without online restoration overhead.",
      innovations: [
        "A conditional diffusion model learns real depth sensor noise distributions instead of relying on hand-crafted procedural noise.",
        "The Diffusion Depth Module uses a video depth foundation model as a temporally stable geometric prior for sample-efficient training with small unpaired RGB-D data.",
        "The Noise Grafting Module injects learned artifacts onto simulator ground-truth depth while preserving metric accuracy.",
        "Deployment requires no extra depth restoration or foundation-model inference, avoiding latency during real-time control.",
      ],
      implementation: [
        "A privileged state-based teacher policy is first trained in Isaac Gym with PPO to collect expert grasping trajectories.",
        "A small set of real RGB-D data trains the Diffusion Depth Module to model real camera noise, holes, and artifacts.",
        "The DDG converts simulated depth from teacher trajectories into realistic noisy depth observations.",
        "A depth-based student policy is distilled from teacher actions using the generated depth and deployed zero-shot on real hardware.",
      ],
    },
  },
  {
    id: "pi06-recap",
    categories: ["vla"],
    pdf: "read/2511.14759v2.pdf",
    project: "https://pi.website/blog/pistar06",
    arxiv: "https://arxiv.org/abs/2511.14759",
    year: "2025",
    venue: "arXiv:2511.14759",
    zh: {
      title: "π0.6*: a VLA That Learns From Experience",
      authors: "Physical Intelligence",
      status: "已整理",
      tags: ["VLA", "Real-World RL", "Advantage Conditioning"],
      mainContent:
        "π0.6* / RECAP 研究 VLA 如何通过真实部署经验继续提升。方法把 demonstrations、on-policy autonomous rollouts 和 human interventions 一起纳入 RL 流程，训练 value function 估计动作 advantage，再用 advantage-conditioned policy extraction 微调 VLA。",
      innovations: [
        "把 VLA 的自我提升写成通用 RECAP recipe：先离线 RL 预训练，再在真实机器人任务上收集经验和纠错数据迭代提升。",
        "用 advantage conditioning 代替直接对大型 flow-matching VLA 做复杂 policy gradient，能利用 off-policy/offline 数据。",
        "同时利用成功/失败 reward、专家介入和自主执行数据，解决真实任务奖励稀疏和数据异构问题。",
        "在折衣、组装纸箱、做咖啡等长时程真实任务上显著提升 throughput 并降低失败率。",
      ],
      implementation: [
        "预训练阶段让 π0.6* 具备按二值 advantage indicator 条件化生成动作的能力。",
        "部署到下游任务后，收集 autonomous rollouts，并允许人在机器人执行时进行 teleoperated corrections。",
        "用累计数据训练语言条件 distributional value function，估计动作对任务完成进度的影响。",
        "把 advantage 转成最优性/改进指示，作为条件输入继续训练 VLA，使模型偏向高 advantage 行为。",
      ],
    },
    en: {
      title: "π0.6*: a VLA That Learns From Experience",
      authors: "Physical Intelligence",
      status: "Summarized",
      tags: ["VLA", "Real-World RL", "Advantage Conditioning"],
      mainContent:
        "π0.6* and RECAP study how VLA models can improve from real-world deployment experience. The method combines demonstrations, autonomous on-policy rollouts, and human interventions, trains a value function to estimate action advantages, and finetunes the VLA through advantage-conditioned policy extraction.",
      innovations: [
        "RECAP provides a general self-improvement recipe for VLAs: offline-RL pretraining followed by iterative real-world experience and corrections.",
        "Advantage conditioning avoids complicated policy-gradient training of large flow-matching VLAs while still using off-policy and offline data.",
        "The method combines success/failure reward labels, expert interventions, and autonomous experience to handle sparse rewards and heterogeneous data.",
        "It improves throughput and reduces failure rates on long-horizon real tasks such as laundry folding, box assembly, and espresso making.",
      ],
      implementation: [
        "Pretraining gives π0.6* the ability to condition action generation on a binarized advantage indicator.",
        "During deployment, autonomous rollouts are collected and humans can provide teleoperated corrections when the robot makes mistakes.",
        "A language-conditioned distributional value function is trained on all collected data to estimate action impact on task progress.",
        "Advantages are converted into optimality or improvement indicators and used as conditions for continued VLA training.",
      ],
    },
  },
  {
    id: "viral-humanoid",
    categories: ["sim2real"],
    pdf: "read/2511.15200v2.pdf",
    project: "https://viral-humanoid.github.io",
    arxiv: "https://arxiv.org/abs/2511.15200",
    year: "2025",
    venue: "arXiv:2511.15200",
    zh: {
      title: "VIRAL: Visual Sim-to-Real at Scale for Humanoid Loco-Manipulation",
      authors: "Tairan He, Zi Wang, Haoru Xue, Qingwei Ben, Zhengyi Luo, Wenli Xiao, Ye Yuan, Xingye Da, Fernando Castaneda, Shankar Sastry, Changliu Liu, Guanya Shi, Linxi \"Jim\" Fan, Yuke Zhu",
      status: "已整理",
      tags: ["Sim-to-Real", "Humanoid", "Loco-Manipulation"],
      mainContent:
        "VIRAL 研究如何完全在仿真中训练 RGB-based humanoid loco-manipulation 策略，并零样本部署到 Unitree G1。系统用 privileged RL teacher 学会走路、抓取、放置和搬运，再用大规模渲染和 DAgger/BC 蒸馏成只看 RGB 与本体感知的 student policy。",
      innovations: [
        "把视觉 sim-to-real 扩展到长时程 humanoid loco-manipulation，覆盖移动、操作和物体运输的连续闭环任务。",
        "强调 compute scale 的作用：teacher 和 student 训练扩展到多 GPU/64 GPU 量级后才稳定可靠。",
        "结合大规模视觉 domain randomization 与真实到仿真对齐，包括手部 SysID、相机外参和传感延迟。",
        "student policy 在真实 G1 上连续执行最多 54 个循环，无需真实 fine-tuning。",
      ],
      implementation: [
        "第一阶段训练 privileged teacher，输入完整状态和任务信息，输出 WBC command 的 delta action，由底层 WBC 保证稳定运动。",
        "teacher 使用阶段化奖励，覆盖 walking、placing、grasping 和 turning，并用 reference state initialization 降低长时程探索难度。",
        "第二阶段用 tiled rendering 大规模生成 RGB 观测，通过 online DAgger 与 behavior cloning 蒸馏 student。",
        "student 训练中随机化场景资产、材质、光照、相机参数、图像质量和 sensor delay，部署时只用真实机载 RGB 和本体感知。",
      ],
    },
    en: {
      title: "VIRAL: Visual Sim-to-Real at Scale for Humanoid Loco-Manipulation",
      authors: "Tairan He, Zi Wang, Haoru Xue, Qingwei Ben, Zhengyi Luo, Wenli Xiao, Ye Yuan, Xingye Da, Fernando Castaneda, Shankar Sastry, Changliu Liu, Guanya Shi, Linxi \"Jim\" Fan, Yuke Zhu",
      status: "Summarized",
      tags: ["Sim-to-Real", "Humanoid", "Loco-Manipulation"],
      mainContent:
        "VIRAL studies how to train RGB-based humanoid loco-manipulation entirely in simulation and deploy it zero-shot on a Unitree G1. A privileged RL teacher learns walking, grasping, placing, and object transport, then large-scale rendering plus DAgger/BC distill it into a student policy that uses only RGB and proprioception.",
      innovations: [
        "It extends visual sim-to-real to long-horizon humanoid loco-manipulation involving navigation, manipulation, and object transport.",
        "The paper highlights compute scale: reliable teacher and student learning requires multi-GPU training up to 64 GPUs.",
        "Large-scale visual domain randomization is combined with real-to-sim alignment, including hand SysID, camera calibration, and sensor delays.",
        "The student policy runs up to 54 continuous cycles on a real G1 humanoid without real-world fine-tuning.",
      ],
      implementation: [
        "Stage one trains a privileged teacher with full state and task information to output delta commands to a WBC controller.",
        "Teacher training uses stage-based rewards for walking, placing, grasping, and turning plus reference state initialization for long-horizon exploration.",
        "Stage two uses tiled rendering at scale to produce RGB observations and distills the student with online DAgger and behavior cloning.",
        "Student training randomizes scene assets, materials, lighting, camera parameters, image quality, and sensor delay; deployment uses onboard RGB and proprioception.",
      ],
    },
  },
  {
    id: "demobot",
    categories: ["rl"],
    pdf: "read/2601.01651v1.pdf",
    project: "https://demobot-seed.github.io/",
    arxiv: "https://arxiv.org/abs/2601.01651",
    year: "2026",
    venue: "arXiv:2601.01651",
    zh: {
      title: "DemoBot: Efficient Learning of Bimanual Manipulation with Dexterous Hands From Third-Person Human Videos",
      authors: "ByteDance Seed",
      status: "已整理",
      tags: ["Reinforcement Learning", "Human Video", "Bimanual Dexterity"],
      mainContent:
        "DemoBot 研究如何从一段第三人称、未标注 RGB-D 人类视频中学习长时程双手机巧操作。视频处理模块提取人手和物体轨迹并 retarget 成机器人 motion prior，RL 模块不硬模仿轨迹，而是学习 residual correction 来补足视觉示范缺失的接触动力学。",
      innovations: [
        "把单个 unannotated human video 转成机器人可用的 motion prior 和 object sub-goals，降低遥操作数据需求。",
        "用 corrective residual RL 而不是纯 BC，从 imperfect visual demonstration 中学习可执行的物理交互策略。",
        "提出 temporal-segment based RL，按关键帧把长任务切成阶段，减少时间错位和跨阶段误导。",
        "Success-gated reset 与 event-driven reward curriculum 帮助后期阶段探索和高精度装配学习。",
      ],
      implementation: [
        "先手动选关键帧，并用 hand/object pose estimator 从 RGB-D 视频中恢复 3D 手-物体轨迹。",
        "通过任务相关优化细化物体位姿，再将人手动作 retarget 到双臂灵巧手机器人，生成 full-body trajectory。",
        "RL action 表示为示范 motion prior 加 residual，策略只学习当前阶段所需的修正动作。",
        "环境失败时按 success-gated reset 回到最近成功阶段末端，保证训练样本覆盖后续关键阶段。",
      ],
    },
    en: {
      title: "DemoBot: Efficient Learning of Bimanual Manipulation with Dexterous Hands From Third-Person Human Videos",
      authors: "ByteDance Seed",
      status: "Summarized",
      tags: ["Reinforcement Learning", "Human Video", "Bimanual Dexterity"],
      mainContent:
        "DemoBot learns long-horizon bimanual dexterous manipulation from a single third-person unannotated RGB-D human video. The video pipeline extracts hand and object trajectories and retargets them into robot motion priors, while RL learns residual corrections instead of rigidly imitating the noisy visual trajectory.",
      innovations: [
        "It converts one unannotated human video into robot motion priors and object sub-goals, reducing the need for teleoperation data.",
        "Corrective residual RL learns executable physical interaction policies from imperfect visual demonstrations instead of pure BC.",
        "Temporal-segment based RL splits the long task by keyframes to reduce temporal misalignment and cross-stage distraction.",
        "Success-gated resets and an event-driven reward curriculum improve exploration of later stages and high-precision assembly.",
      ],
      implementation: [
        "Keyframes are selected and hand/object pose estimators recover 3D hand-object trajectories from RGB-D video.",
        "Task-aware optimization refines object poses, and human motion is retargeted to a bimanual dexterous robot as a full-body trajectory.",
        "The RL action is represented as the demonstration motion prior plus a residual, so the policy only learns stage-specific corrections.",
        "When environments fail, success-gated resets return them to the latest successful stage endpoint, maintaining coverage of later stages.",
      ],
    },
  },
  {
    id: "xhugwbc",
    categories: ["rl"],
    pdf: "read/2602.05791v1.pdf",
    project: "https://arxiv.org/abs/2602.05791",
    arxiv: "https://arxiv.org/abs/2602.05791",
    year: "2026",
    venue: "arXiv:2602.05791",
    zh: {
      title: "Scalable and General Whole-Body Control for Cross-Humanoid Locomotion",
      authors: "Yufei Xue, Yunfeng Lin, Wentao Dong, Yang Tang, Jingbo Wang, Jiangmiao Pang, Ming Zhou, Minghuan Liu, Weinan Zhang",
      status: "已整理",
      tags: ["Reinforcement Learning", "Whole-Body Control", "Cross-Embodiment"],
      mainContent:
        "XHugWBC 研究是否能训练一个跨 humanoid embodiment 的通用 whole-body controller。论文通过物理一致的形态随机化、语义对齐的 observation/action space 和显式建模形态/动力学的策略结构，让单个 policy 零样本泛化到多种仿真与真实 humanoid。",
      innovations: [
        "提出 physics-consistent morphological randomization，保证随机化后的质量、惯量和关节参数仍对应物理可实现刚体。",
        "构建跨机器人统一 joint/action 表示，把不同自由度、关节顺序和形态映射到 semantically aligned global joint space。",
        "用 GCN/Transformer 等结构编码机器人拓扑和形态属性，让 policy 学到 embodiment-agnostic motion priors。",
        "单个 generalist policy 在多个真实 humanoid 上零样本 whole-body control，并可作为 teleoperation/loco-manipulation 底层控制器。",
      ],
      implementation: [
        "从 template URDF 出发，对 link inertial parameters 与 joint parameters 做物理一致随机化，生成多样但合理的 humanoid morphology。",
        "把机器人状态投影到全局 joint space，构建 embodiment graph，并用 mask 处理不同机器人缺失的关节/动作维度。",
        "策略学习采用形态编码器、state estimator 和统一 command space，在随机 embodiment 分布上一次性训练。",
        "部署时将真实机器人状态映射到同一表示，直接运行 generalist controller，无需每台机器人重新训练。",
      ],
    },
    en: {
      title: "Scalable and General Whole-Body Control for Cross-Humanoid Locomotion",
      authors: "Yufei Xue, Yunfeng Lin, Wentao Dong, Yang Tang, Jingbo Wang, Jiangmiao Pang, Ming Zhou, Minghuan Liu, Weinan Zhang",
      status: "Summarized",
      tags: ["Reinforcement Learning", "Whole-Body Control", "Cross-Embodiment"],
      mainContent:
        "XHugWBC asks whether one whole-body controller can generalize across humanoid embodiments. It combines physics-consistent morphological randomization, semantically aligned observation/action spaces, and policy architectures that model morphology and dynamics, enabling one policy to transfer zero-shot to diverse simulated and real humanoids.",
      innovations: [
        "Physics-consistent morphological randomization keeps randomized mass, inertia, and joint parameters physically realizable.",
        "A unified joint/action representation maps different DoFs, joint orders, and morphologies into a semantically aligned global joint space.",
        "GCN/Transformer-style encoders represent robot topology and morphology so the policy learns embodiment-agnostic motion priors.",
        "A single generalist policy achieves zero-shot whole-body control on multiple real humanoids and can serve as a teleoperation/loco-manipulation controller.",
      ],
      implementation: [
        "Starting from a template URDF, link inertial parameters and joint parameters are randomized under physical consistency constraints.",
        "Robot states are projected into a global joint space, an embodiment graph is built, and masks handle missing joints or action dimensions.",
        "Policy learning uses morphology encoders, a state estimator, and a unified command space trained over randomized embodiments.",
        "Deployment maps each real robot into the same representation and runs the generalist controller without robot-specific retraining.",
      ],
    },
  },
  {
    id: "simtoolreal",
    categories: ["sim2real"],
    pdf: "read/2602.16863v2.pdf",
    project: "https://simtoolreal.github.io",
    arxiv: "https://arxiv.org/abs/2602.16863",
    year: "2026",
    venue: "arXiv:2602.16863",
    zh: {
      title: "SimToolReal: An Object-Centric Policy for Zero-Shot Dexterous Tool Manipulation",
      authors: "Kushal Kedia, Tyler Ga Wei Lum, Jeannette Bohg, C. Karen Liu",
      status: "已整理",
      tags: ["Sim-to-Real", "Dexterous Tool Use", "Object-Centric Policy"],
      mainContent:
        "SimToolReal 研究如何用一个仿真训练的通用 object-centric RL policy，零样本完成真实工具操作。它把工具使用抽象成让工具依次达到一串 6D goal poses，在仿真中用程序生成的 tool-like primitives 和随机目标位姿训练，再在真实工具上跟踪从人类视频提取的工具轨迹。",
      innovations: [
        "把 tool use 统一成 object pose reaching，而不是为每个工具/任务单独建模和设计奖励。",
        "用程序生成 primitive objects 训练单个策略，诱导出抓取、手内重定向和稳定接触等通用灵巧能力。",
        "object-centric 表示绕开视觉 sim-to-real gap：策略条件化于工具 6D pose 和 graspable region 的粗 3D box。",
        "通过 SAM 3D 与 FoundationPose 等 foundation perception 获取真实工具状态，实现新工具/新任务零样本部署。",
      ],
      implementation: [
        "仿真训练中随机生成工具状物体和目标位姿，RL policy 控制 29 DoF dexterous arm-hand 去跟踪对象目标姿态。",
        "策略输入包括机器人本体状态、当前对象 6D pose、粗略对象描述/可抓区域和目标 pose。",
        "真实部署时从人类视频提取工具目标轨迹，并把该轨迹分解成连续 goal poses。",
        "感知管线用 SAM 3D 做分割和 mesh extraction，用 FoundationPose 跟踪 6D pose，再驱动同一个仿真训练策略执行。",
      ],
    },
    en: {
      title: "SimToolReal: An Object-Centric Policy for Zero-Shot Dexterous Tool Manipulation",
      authors: "Kushal Kedia, Tyler Ga Wei Lum, Jeannette Bohg, C. Karen Liu",
      status: "Summarized",
      tags: ["Sim-to-Real", "Dexterous Tool Use", "Object-Centric Policy"],
      mainContent:
        "SimToolReal trains one general object-centric RL policy in simulation for zero-shot real-world tool use. It abstracts tool manipulation as moving a tool through a sequence of 6D goal poses, trains on procedurally generated tool-like primitives and random goals, then tracks tool trajectories extracted from human videos on real tools.",
      innovations: [
        "Tool use is unified as object-pose reaching instead of per-tool modeling and task-specific reward engineering.",
        "Training on procedural primitive objects induces general dexterous skills such as grasping, in-hand reorientation, and stable contact.",
        "An object-centric representation bypasses much of the visual sim-to-real gap by conditioning on tool 6D pose and a coarse 3D graspable-region box.",
        "Foundation perception modules such as SAM 3D and FoundationPose recover real tool state for zero-shot deployment.",
      ],
      implementation: [
        "Simulation training generates random tool-like objects and goal poses, and an RL policy controls a 29-DoF dexterous arm-hand to reach object goals.",
        "The policy input includes robot proprioception, current object 6D pose, coarse object/grasp-region descriptors, and the target pose.",
        "At deployment, a human video provides the tool goal trajectory, decomposed into sequential goal poses.",
        "The perception pipeline segments and reconstructs the tool with SAM 3D, tracks 6D pose with FoundationPose, and feeds the same simulation-trained policy.",
      ],
    },
  },
  {
    id: "mode-vla-imcopilot",
    categories: ["vla"],
    pdf: "read/2603.08122v1.pdf",
    project: "https://arxiv.org/abs/2603.08122",
    arxiv: "https://arxiv.org/abs/2603.08122",
    year: "2026",
    venue: "arXiv:2603.08122",
    zh: {
      title: "Towards Human-Like Manipulation through RL-Augmented Teleoperation and Mixture-of-Dexterous-Experts VLA",
      authors: "Tutian Tang, Xingyu Ji, Wanli Xing, Ce Hao, Wenqiang Xu, Lin Shao, Cewu Lu, Qiaojun Yu, Jiangmiao Pang, Kaifeng Zhang",
      status: "已整理",
      tags: ["VLA", "Dexterous Manipulation", "Force/Tactile"],
      mainContent:
        "这篇论文提出 IMCopilot + MoDE-VLA，用 RL 训练的手内操作原子技能辅助高自由度双手遥操作采集数据，并作为 VLA 执行时可调用的低层技能。MoDE-VLA 则把力/触觉通过专用路径、MoE routing 和 residual injection 融入预训练 VLA，用于接触丰富的人类式双手机巧任务。",
      innovations: [
        "IMCopilot 同时用于数据采集阶段的 shared autonomy 和自主执行阶段的 callable low-level in-hand skill。",
        "通过脚踏触发 RL-trained atomic skills，降低 63 DoF 双手遥操作中人类操作者的认知与控制负担。",
        "MoDE-VLA 为 force/tactile tokens 建立独立融合通路，经 self-attention、sparse MoE 和 residual injection 做接触感知修正。",
        "在齿轮装配、充电器插入、试管整理和削苹果等任务中验证高自由度 VLA 的接触丰富操作能力。",
      ],
      implementation: [
        "机器人平台由双 7 DoF 机械臂、双 22 DoF 灵巧手、头部/腕部相机、关节力矩和十指 6 DoF 触觉力传感组成。",
        "遥操作系统使用上肢外骨骼、手套、VR 视觉反馈和触觉/力反馈 overlay；脚踏板用于调用 IMCopilot 技能。",
        "IMCopilot 技能通过 RL 训练，包括稳定抓持和指定轴手内旋转等低层 primitive。",
        "MoDE-VLA 保留预训练 VLA backbone，额外注入力/触觉专家残差，避免破坏原有视觉语言知识。",
      ],
    },
    en: {
      title: "Towards Human-Like Manipulation through RL-Augmented Teleoperation and Mixture-of-Dexterous-Experts VLA",
      authors: "Tutian Tang, Xingyu Ji, Wanli Xing, Ce Hao, Wenqiang Xu, Lin Shao, Cewu Lu, Qiaojun Yu, Jiangmiao Pang, Kaifeng Zhang",
      status: "Summarized",
      tags: ["VLA", "Dexterous Manipulation", "Force/Tactile"],
      mainContent:
        "This paper proposes IMCopilot and MoDE-VLA. RL-trained in-hand atomic skills assist high-DoF bimanual teleoperation during data collection and become callable low-level skills during VLA execution. MoDE-VLA fuses force and tactile signals into a pretrained VLA through dedicated pathways, MoE routing, and residual injection for contact-rich human-like dexterous tasks.",
      innovations: [
        "IMCopilot serves both shared-autonomy data collection and callable low-level in-hand control during autonomous execution.",
        "Foot-pedal-triggered RL atomic skills reduce the cognitive and control burden of teleoperating a 63-DoF dual-dexterous-hand system.",
        "MoDE-VLA gives force/tactile tokens a dedicated fusion pathway with self-attention, sparse MoE routing, and residual contact-aware correction.",
        "The system is validated on gear assembly, charger plugging, tube rearranging, and apple peeling.",
      ],
      implementation: [
        "The robot uses dual 7-DoF arms, dual 22-DoF hands, head/wrist cameras, joint torques, and ten fingertip 6-DoF force/tactile sensors.",
        "The teleoperation setup combines arm exoskeletons, gloves, VR visual feedback, force/tactile overlays, and pedals for triggering IMCopilot.",
        "IMCopilot primitives are trained with RL, including stable grasp maintenance and specified-axis in-hand rotation.",
        "MoDE-VLA preserves the pretrained VLA backbone while injecting force/tactile expert residuals to refine contact-aware actions.",
      ],
    },
  },
  {
    id: "omnireset",
    categories: ["sim2real"],
    pdf: "read/2603.15789v2.pdf",
    project: "https://omnireset.github.io",
    arxiv: "https://arxiv.org/abs/2603.15789",
    year: "2026",
    venue: "ICLR 2026 / arXiv:2603.15789",
    zh: {
      title: "Emergent Dexterity via Diverse Resets and Large-Scale Reinforcement Learning",
      authors: "Patrick Yin, Tyler Westenbroek, Eeshani Shilamkar, Joshua Tran, Ignacio Dagnino, Xinlei Liu, Zhengyu Zhang, Numfor Mbiziwo-Tiapo, Simran Bagaria, Galen Mullins, Andrey Kolobov, Abhishek Gupta",
      status: "已整理",
      tags: ["Sim-to-Real", "Large-Scale RL", "Dexterous Manipulation"],
      mainContent:
        "OmniReset 研究如何让大规模 on-policy RL 在长时程接触丰富 manipulation 中真正随 compute scaling。核心不是设计复杂探索算法，而是自动生成覆盖关键中间交互状态的 diverse simulator resets，让 PPO 经常看到接近成功和不同接触模式的状态，从而学会拼接推、翻、插入等行为。",
      innovations: [
        "把长时程探索难题转化为 reset distribution 设计，用通用多样 reset 暴露机器人-物体交互模式。",
        "无需人类示范、任务专用 curriculum 或复杂 reward shaping，也能在大规模并行环境中学习动态灵巧行为。",
        "随着并行环境和 compute 增大，性能继续提升，而不是像窄初始分布 RL 那样很快饱和。",
        "通过 teacher-student distillation 把全状态策略蒸馏到 RGB visuomotor policy，并零样本迁移到真实世界。",
      ],
      implementation: [
        "程序化生成覆盖接近、接触、抓持、翻转、插入等中间状态的 simulator resets，不直接编码任务解法。",
        "用 PPO 和固定超参数在这些 reset 分布上训练动态 policy，主要依靠稀疏/简单任务奖励。",
        "训练出的 policy 可从宽初始状态分布完成 drawer insertion、screw-in-table-leg、peg insertion 等任务。",
        "最后用 teacher policy 产生数据，蒸馏成 RGB camera policy，在真实机器人上展示 retry 和 recovery 行为。",
      ],
    },
    en: {
      title: "Emergent Dexterity via Diverse Resets and Large-Scale Reinforcement Learning",
      authors: "Patrick Yin, Tyler Westenbroek, Eeshani Shilamkar, Joshua Tran, Ignacio Dagnino, Xinlei Liu, Zhengyu Zhang, Numfor Mbiziwo-Tiapo, Simran Bagaria, Galen Mullins, Andrey Kolobov, Abhishek Gupta",
      status: "Summarized",
      tags: ["Sim-to-Real", "Large-Scale RL", "Dexterous Manipulation"],
      mainContent:
        "OmniReset studies how to make large-scale on-policy RL scale for long-horizon contact-rich manipulation. Rather than adding complex exploration algorithms, it automatically generates diverse simulator resets that cover key intermediate interaction states, letting PPO frequently experience useful contact modes and learn to stitch pushing, flipping, insertion, and recovery behaviors.",
      innovations: [
        "It reframes long-horizon exploration as reset-distribution design, exposing the agent to generic robot-object interaction modes.",
        "The method needs no human demonstrations, task-specific curriculum, or heavy reward shaping to learn dynamic dexterity at scale.",
        "Performance continues improving with more parallel environments and compute, unlike RL from narrow initial distributions.",
        "Teacher-student distillation transfers full-state policies into RGB visuomotor policies for zero-shot real-world deployment.",
      ],
      implementation: [
        "Simulator resets are generated to cover intermediate states such as approach, contact, grasping, flipping, and insertion without directly encoding task solutions.",
        "PPO with fixed hyperparameters trains dynamic policies over these reset distributions using sparse or simple task rewards.",
        "The learned policies solve drawer insertion, screw-in-table-leg, peg insertion, and related tasks from broad initial states.",
        "Teacher rollouts are distilled into RGB camera policies that show retry and recovery behavior on real robots.",
      ],
    },
  },
  {
    id: "rainbow-demorl",
    categories: ["bc-rl"],
    pdf: "read/2603.27400v1.pdf",
    project: "https://arxiv.org/abs/2603.27400",
    arxiv: "https://arxiv.org/abs/2603.27400",
    year: "2026",
    venue: "arXiv:2603.27400",
    zh: {
      title: "Rainbow-DemoRL: Combining Improvements in Demonstration-Augmented Reinforcement Learning",
      authors: "Dwait Bhatt, Shih-Chieh Chou, Nikolay Atanasov",
      status: "已整理",
      tags: ["BC+RL", "Demo-Augmented RL", "Sample Efficiency"],
      mainContent:
        "Rainbow-DemoRL 系统比较如何用 offline demonstrations 提升 online RL 样本效率。论文把方法分成三类：直接复用离线数据、用 BC/offline RL 初始化策略和价值函数、用离线策略给 online policy 提供 reference actions，并研究这些策略能否组合出更好的机器人操作 RL。",
      innovations: [
        "像 Rainbow-DQN 一样对 demo-augmented RL 组件做系统分类和消融，比较单独与组合收益。",
        "结论指出直接 replay offline data 和 BC 初始化通常比更复杂 offline RL pretraining 更稳定、更有效。",
        "分析 prefill、auxiliary BC loss、offline RL finetuning、IBRL/CHEQ/residual action mixing 等多种组合。",
        "用 sample efficiency improvement 指标跨多个 ManiSkill 操作任务聚合比较学习速度和最终表现。",
      ],
      implementation: [
        "基础 online RL 使用 SAC/TD3 actor-critic，并支持 high UTD、critic ensemble 和 replay buffer。",
        "Strategy A 从 offline demo buffer 与 online buffer 共同采样，或加入辅助 BC loss。",
        "Strategy B 用 BC、CQL、CalQL、MCQ 等方法预训练 policy/value，再进入 online finetuning。",
        "Strategy C 将 offline policy 动作与 online action 混合，包括高 Q 选择、线性插值和 residual RL。",
      ],
    },
    en: {
      title: "Rainbow-DemoRL: Combining Improvements in Demonstration-Augmented Reinforcement Learning",
      authors: "Dwait Bhatt, Shih-Chieh Chou, Nikolay Atanasov",
      status: "Summarized",
      tags: ["BC+RL", "Demo-Augmented RL", "Sample Efficiency"],
      mainContent:
        "Rainbow-DemoRL systematically studies how offline demonstrations can improve the sample efficiency of online RL. It groups methods into direct reuse of offline data, BC/offline-RL initialization of policy and value functions, and reference actions from offline policies, then evaluates which combinations help robot manipulation RL.",
      innovations: [
        "It provides a Rainbow-DQN-style taxonomy and ablation of demo-augmented RL components.",
        "The main finding is that offline-data replay and BC initialization often outperform more complex offline-RL pretraining for online sample efficiency.",
        "It compares prefill, auxiliary BC loss, offline-RL finetuning, and IBRL/CHEQ/residual action mixing combinations.",
        "A sample-efficiency-improvement metric aggregates learning speed and performance across ManiSkill manipulation tasks.",
      ],
      implementation: [
        "The base online RL algorithms are SAC/TD3 actor-critic variants with high UTD, critic ensembles, and replay buffers.",
        "Strategy A samples from both offline demonstration and online buffers, or adds an auxiliary BC loss.",
        "Strategy B pretrains policy/value functions with BC, CQL, CalQL, or MCQ before online finetuning.",
        "Strategy C mixes offline-policy actions with online actions through higher-Q selection, linear interpolation, or residual RL.",
      ],
    },
  },
  {
    id: "posterior-bc",
    categories: ["bc-rl"],
    pdf: "read/14421_Posterior_Behavioral_Clo.pdf",
    project: "read/14421_Posterior_Behavioral_Clo.pdf",
    arxiv: "read/14421_Posterior_Behavioral_Clo.pdf",
    year: "2026",
    venue: "ICLR 2026 submission",
    zh: {
      title: "Posterior Behavioral Cloning: Pretraining BC Policies for Efficient RL Finetuning",
      authors: "Anonymous authors",
      status: "已整理",
      tags: ["BC+RL", "Behavior Cloning", "RL Finetuning"],
      mainContent:
        "这篇论文研究 BC 预训练本身如何影响后续 RL finetuning。标准 BC 只拟合 demonstration 的经验动作分布，在低数据密度状态会过窄，导致 finetuning rollout 缺少有用探索。Posterior BC 改为拟合 demonstrator action 的 posterior distribution，让模型在不确定状态保持更高熵，从而为 RL 微调提供更好的动作覆盖。",
      innovations: [
        "提出 posterior behavioral cloning，把预训练目标从克隆样本动作改为克隆示范者行为的后验分布。",
        "理论上证明 Posterior BC 能覆盖 demonstrator 的动作支持，同时不降低预训练策略性能。",
        "指出标准 BC 若想获得类似覆盖，需要付出明显采样成本或性能 tradeoff。",
        "把思想落到 diffusion policy 等 generative robot policy 上，提升多种 RL finetuning 算法的效率。",
      ],
      implementation: [
        "在 tabular 分析中定义 demonstrator action coverage / gamma-sampler，作为 finetuning 能否匹配示范者的前提。",
        "用后验采样思想根据数据密度调节动作分布熵：高置信状态接近标准 BC，低置信状态保留更宽动作分布。",
        "在连续动作机器人任务中用生成式策略近似 demonstrator posterior，尤其适配 diffusion policy。",
        "随后对 Posterior BC 与标准 BC 初始化的策略分别做 RL 微调，比较样本效率和最终性能。",
      ],
    },
    en: {
      title: "Posterior Behavioral Cloning: Pretraining BC Policies for Efficient RL Finetuning",
      authors: "Anonymous authors",
      status: "Summarized",
      tags: ["BC+RL", "Behavior Cloning", "RL Finetuning"],
      mainContent:
        "This paper studies how BC pretraining affects downstream RL finetuning. Standard BC fits the empirical action distribution in demonstrations and can become too narrow in low-data-density states, producing rollout data with poor exploration. Posterior BC instead fits the posterior distribution of demonstrator actions, keeping higher entropy where the demonstrator is uncertain and improving action coverage for RL.",
      innovations: [
        "It proposes posterior behavioral cloning, changing the pretraining target from demonstration actions to the posterior over demonstrator behavior.",
        "The theory shows Posterior BC covers the demonstrator's action support without reducing pretrained policy performance.",
        "It explains why standard BC needs a sampling-cost or performance tradeoff to obtain similar coverage.",
        "The approach is instantiated with generative robot policies such as diffusion policies and improves multiple RL finetuning algorithms.",
      ],
      implementation: [
        "The tabular analysis defines demonstrator action coverage/gamma-samplers as a prerequisite for finetuning to match demonstrator behavior.",
        "Posterior sampling adjusts action entropy by data density: high-confidence states behave like standard BC, while uncertain states keep broader action distributions.",
        "For continuous-control robotics, a generative policy approximates the demonstrator posterior, especially with diffusion policies.",
        "Policies initialized by Posterior BC and standard BC are then finetuned with RL and compared on sample efficiency and final performance.",
      ],
    },
  },
  {
    id: "house-of-dextra",
    categories: ["rl"],
    pdf: "read/paper.pdf",
    project: "https://houseofdextra.github.io",
    arxiv: "read/paper.pdf",
    year: "2026",
    venue: "ICLR 2026",
    zh: {
      title: "House of Dextra: Cross-Embodied Co-Design for Dexterous Hands",
      authors: "Kehlani Fay, Darin Djapri, Anya Zorin, Ali El Lahib, Hao Su, Michael T. Tolley, James Clinton, Sha Yi, Xiaolong Wang",
      status: "已整理",
      tags: ["Reinforcement Learning", "Co-Design", "Dexterous Hands"],
      mainContent:
        "House of Dextra 研究灵巧手硬件形态和控制策略如何联合优化。框架在仿真中搜索手掌、手指数量、关节、指尖和长度等设计，同时用 morphology-conditioned cross-embodied control 快速评估设计，并把生成的手在 24 小时内制造和零样本迁移到真实世界。",
      innovations: [
        "把 dexterous hand 的形态设计和 RL 控制作为 co-design 问题联合优化，而不是固定硬件后再训练策略。",
        "提供可制造的模块化手部 grammar，搜索空间覆盖 palm、finger count、servo count、link length 和 fingertip type。",
        "用 cross-embodiment policy 在多种手形态之间共享控制能力，避免为每个候选设计单独训练。",
        "从仿真设计、训练、制造到真实部署形成完整闭环，并在真实 in-hand rotation 上验证。",
      ],
      implementation: [
        "每个手形态表示为带属性图，包含 palm node 与 finger-slot nodes；GNN 编码 morphology 供 design value network 使用。",
        "控制策略输入机器人关节状态、物体位姿和 one-hot morphology vector，并用 action mask 屏蔽不存在的执行器。",
        "外层用 graph heuristic search 和 design value network 搜索手形态，内层用 RL 训练/微调对应控制策略。",
        "生成设计遵守真实模块化硬件约束、碰撞几何和关节限制，便于 3D 打印/组装后真实部署。",
      ],
    },
    en: {
      title: "House of Dextra: Cross-Embodied Co-Design for Dexterous Hands",
      authors: "Kehlani Fay, Darin Djapri, Anya Zorin, Ali El Lahib, Hao Su, Michael T. Tolley, James Clinton, Sha Yi, Xiaolong Wang",
      status: "Summarized",
      tags: ["Reinforcement Learning", "Co-Design", "Dexterous Hands"],
      mainContent:
        "House of Dextra jointly optimizes dexterous-hand hardware morphology and control policies. The framework searches over palms, finger counts, joints, fingertips, and lengths in simulation, evaluates designs with morphology-conditioned cross-embodied control, and fabricates/deploys generated hands zero-shot in the real world within 24 hours.",
      innovations: [
        "It formulates dexterous hand morphology and RL control as a co-design problem instead of training policies only after hardware is fixed.",
        "A manufacturable modular hand grammar spans palm geometry, finger count, servo count, link length, and fingertip type.",
        "A cross-embodiment policy shares control ability across hand morphologies, avoiding separate full training for each candidate design.",
        "The pipeline closes the loop from simulation design and training to fabrication and real-world in-hand rotation deployment.",
      ],
      implementation: [
        "Each hand morphology is represented as an attributed graph with a palm node and finger-slot nodes; a GNN encodes morphology for a design value network.",
        "The control policy observes robot joints, object pose, and a one-hot morphology vector, with action masks disabling nonexistent actuators.",
        "The outer loop uses graph heuristic search and the design value network to search morphologies, while the inner loop trains or fine-tunes control with RL.",
        "Generated designs obey real modular hardware constraints, collision geometry, and joint limits for fabrication and deployment.",
      ],
    },
  },
  {
    id: "visual-dexterity",
    categories: ["sim2real-dynamics-id"],
    pdf: "read/VisualDexterity.pdf",
    project: "https://arxiv.org/abs/2211.11744",
    arxiv: "https://arxiv.org/abs/2211.11744",
    year: "2023",
    venue: "arXiv:2211.11744",
    zh: {
      title: "Visual Dexterity: In-Hand Reorientation of Novel and Complex Object Shapes",
      authors: "Tao Chen, Megha Tippur, Siyang Wu, Vikash Kumar, Edward Adelson, Pulkit Agrawal",
      status: "已整理",
      tags: ["Sim-to-Real", "Visual Dexterity", "In-Hand Reorientation"],
      mainContent:
        "Visual Dexterity 研究如何用单个普通深度相机实现真实世界中复杂未知物体的手内重定向。策略在仿真中用 RL 训练，并在真实开源低成本 D'Claw 类硬件上部署，能够实时把手中物体旋转到任意目标姿态，尤其关注向下手掌持物时需要对抗重力的困难场景。",
      innovations: [
        "不依赖多相机、专用触觉套件或每个物体单独训练的 pose estimator，只用单个 commodity depth camera。",
        "处理复杂、训练未见物体形状，并支持任意方向重定向，而不是只绕固定轴或只操作简单几何体。",
        "在向下手掌、物体悬空的设置中验证，比向上手掌更接近工具使用场景，也更考验 sim-to-real。",
        "用仿真 RL 学习动态接触策略，再迁移到低成本真实硬件，展示视觉闭环灵巧操作可行性。",
      ],
      implementation: [
        "在仿真中训练全状态 RL controller 学习多指协调重定向，利用大规模交互解决接触丰富控制问题。",
        "视觉策略使用单个深度相机观测，学习从深度输入和本体状态到动作的闭环控制。",
        "训练中覆盖多种物体形状和目标姿态，使 policy 学习对新物体几何的泛化。",
        "真实评估使用开源硬件和真实未知物体，统计重定向时间、角度误差和掉落率等指标。",
      ],
    },
    en: {
      title: "Visual Dexterity: In-Hand Reorientation of Novel and Complex Object Shapes",
      authors: "Tao Chen, Megha Tippur, Siyang Wu, Vikash Kumar, Edward Adelson, Pulkit Agrawal",
      status: "Summarized",
      tags: ["Sim-to-Real", "Visual Dexterity", "In-Hand Reorientation"],
      mainContent:
        "Visual Dexterity studies real-world in-hand reorientation of complex unseen objects using a single commodity depth camera. The policy is trained with RL in simulation and deployed on low-cost open-source D'Claw-like hardware, rotating held objects to arbitrary target orientations in real time, including the difficult downward-facing hand setting where the hand must counteract gravity.",
      innovations: [
        "It avoids multi-camera setups, specialized tactile suites, and object-specific pose estimators, relying on one commodity depth camera.",
        "The system handles complex unseen object shapes and arbitrary target rotations rather than fixed-axis rotations or simple geometries.",
        "Evaluation includes a downward-facing, in-air hand configuration that is harder and more relevant to tool-use scenarios than upward-facing setups.",
        "Simulation RL learns dynamic contact-rich manipulation strategies that transfer to low-cost real hardware with visual feedback.",
      ],
      implementation: [
        "A full-state RL controller is trained in simulation to coordinate multi-finger reorientation under rich contacts.",
        "The visual policy uses a single depth camera and proprioception for closed-loop action prediction.",
        "Training covers diverse object shapes and target orientations to encourage generalization to novel geometry.",
        "Real-world evaluation uses open-source hardware and unseen objects, measuring reorientation time, angular error, and drop rate.",
      ],
    },
  },
  {
    id: "sim2real-humanoid-dexterous-rl",
    categories: ["sim2real"],
    pdf: "read/2502.20396v2.pdf",
    project: "https://toruowo.github.io/recipe",
    arxiv: "https://arxiv.org/abs/2502.20396",
    year: "2025",
    venue: "CoRL 2025 / arXiv:2502.20396",
    zh: {
      title: "Sim-to-Real Reinforcement Learning for Vision-Based Dexterous Manipulation on Humanoids",
      authors: "Toru Lin, Kartik Sachdev, Linxi \"Jim\" Fan, Jitendra Malik, Yuke Zhu",
      status: "已整理",
      tags: ["Sim-to-Real", "Dexterous Manipulation", "Humanoid"],
      mainContent:
        "这篇论文研究如何把视觉输入的 sim-to-real 强化学习扩展到低成本类人机器人上的接触丰富双手机巧操作。作者在 Fourier GR-1 humanoid 上训练 grasp-and-reach、box lift 和 bimanual handover 三类任务，输入来自第三视角/自视角 RGB-D 与本体感知，目标是在未见物体和不同灵巧手硬件上零样本迁移。",
      innovations: [
        "提出一套面向 humanoid dexterous manipulation 的实用 sim-to-real RL recipe，把视觉感知、接触奖励、探索和硬件误差处理串成完整流程。",
        "用少量真实数据做自动 real-to-sim tuning，补偿低成本手臂/手部执行器中的控制噪声和动力学偏差。",
        "设计基于 contact 与 object goal 的通用 keypoint reward，使 grasp、lift、handover 等双手协调任务可以共享奖励结构。",
        "采用 divide-and-conquer policy distillation 与混合对象表示，让单任务专家知识蒸馏到泛化策略中，并显著提升未见物体 sim-to-real 成功率。",
      ],
      implementation: [
        "先在仿真中建立 humanoid 双臂多指手环境，并用真实轨迹自动调节仿真控制参数，使 simulated rollout 更贴近真实硬件。",
        "针对每个任务/对象训练 RL expert policy，结合任务感知初始化、接触项、物体目标项和动作正则，降低长时程双手操作的探索难度。",
        "再用 expert rollouts 做 policy distillation，得到可处理多对象/多任务的 generalist policy。",
        "视觉对象表示同时使用低维目标特征和高维视觉特征，并分别做 modality-specific augmentation 来覆盖外观、深度和几何差异。",
        "真实部署时直接使用仿真训练策略，在不同真实物体、扰动和手部硬件变体上评估零样本迁移表现。",
      ],
    },
    en: {
      title: "Sim-to-Real Reinforcement Learning for Vision-Based Dexterous Manipulation on Humanoids",
      authors: "Toru Lin, Kartik Sachdev, Linxi \"Jim\" Fan, Jitendra Malik, Yuke Zhu",
      status: "Summarized",
      tags: ["Sim-to-Real", "Dexterous Manipulation", "Humanoid"],
      mainContent:
        "This paper studies how to scale vision-based sim-to-real reinforcement learning to contact-rich bimanual dexterous manipulation on a low-cost humanoid robot. The authors train a Fourier GR-1 humanoid for grasp-and-reach, box lifting, and bimanual handover using third-view RGB-D, egocentric RGB-D, and proprioception, aiming for zero-shot transfer to unseen objects and hand hardware variations.",
      innovations: [
        "It proposes a practical sim-to-real RL recipe for humanoid dexterous manipulation, connecting vision, contact-rich rewards, exploration, and hardware mismatch handling.",
        "An automated real-to-sim tuning module uses a small amount of real data to compensate for noisy low-cost actuators and dynamics mismatch.",
        "A generalized contact-and-object-goal keypoint reward supports grasping, lifting, and handover with one reusable reward structure.",
        "Divide-and-conquer policy distillation plus hybrid object representations transfer single-task expert knowledge into a generalist policy and improve unseen-object sim-to-real success.",
      ],
      implementation: [
        "The authors build a simulated humanoid bimanual multi-finger environment and tune simulation control parameters from real trajectories to better match hardware rollouts.",
        "RL expert policies are trained for task/object settings with task-aware initialization, contact rewards, object-goal rewards, and action regularization to ease exploration.",
        "Expert rollouts are distilled into a generalist policy that can handle multiple objects and tasks.",
        "Object perception combines compact low-dimensional object features with high-dimensional visual features, using modality-specific augmentation for appearance, depth, and geometry shifts.",
        "The final policy is deployed directly on real hardware and evaluated under novel objects, force disturbances, and hand hardware variations.",
      ],
    },
  },
  {
    id: "dual-arm-flat-object-grasp",
    categories: ["rl"],
    pdf: "read/2504.03500v1.pdf",
    project: "https://sites.google.com/view/grasplargeflat",
    arxiv: "https://arxiv.org/abs/2504.03500",
    year: "2025",
    venue: "arXiv:2504.03500",
    zh: {
      title: "Learning Dual-Arm Coordination for Grasping Large Flat Objects",
      authors: "Yongliang Wang, Hamidreza Kasaei",
      status: "已整理",
      tags: ["Reinforcement Learning", "Dual-arm Manipulation", "Visual Policy"],
      mainContent:
        "这篇论文研究双臂机器人如何直接协同抓取平放在桌面上的大而薄物体，例如书本、键盘等。相比单臂需要把物体推到墙边或桌边，作者用 model-free DRL 学习两只机械臂同时抬起和夹取物体的策略，并在 Isaac Gym 与真实双臂机器人上验证零微调迁移。",
      innovations: [
        "把大平面物体抓取从依赖环境约束的 push-to-wall / push-to-edge，改成双臂直接协同 lift-and-grasp。",
        "使用大型 grasp pose detection backbone 提取视觉特征，再让 PPO 策略学习双臂动作，减少从原始图像直接学习的样本压力。",
        "采用共享 Actor-Critic 层的 CNN-based PPO，使两个机械臂在同一策略结构中学习协调，而不是各自独立决策。",
        "策略能处理未见物体，并从 Isaac Gym 直接迁移到真实机器人，不需要额外真实数据或 fine-tuning。",
      ],
      implementation: [
        "系统用上方 RGB-D 相机生成 color/depth heightmap 和目标 mask，把视觉观测建模为 MDP state。",
        "Angle-View Network / grasp pose detection backbone 从 RGB 图像抽取高维 grasp-related feature，作为 RL 模型的视觉状态表征。",
        "CNN-based PPO policy 输出双臂 primitive motion，训练时共享 actor-critic 特征层以学习协同行为。",
        "深度信息用于动作有效性检查和执行几何约束，视觉特征用于策略决策。",
        "训练与测试主要在 Isaac Gym 中完成，随后把策略部署到真实双臂系统，对常见与未见大平面物体测试成功率。",
      ],
    },
    en: {
      title: "Learning Dual-Arm Coordination for Grasping Large Flat Objects",
      authors: "Yongliang Wang, Hamidreza Kasaei",
      status: "Summarized",
      tags: ["Reinforcement Learning", "Dual-arm Manipulation", "Visual Policy"],
      mainContent:
        "This paper studies how a dual-arm robot can directly coordinate to grasp large flat objects lying on a table, such as books or keyboards. Instead of pushing objects to a wall or table edge, the method uses model-free DRL to learn coordinated lifting and grasping with both arms, and validates zero-finetuning transfer from Isaac Gym to real robots.",
      innovations: [
        "It replaces environment-dependent push-to-wall or push-to-edge strategies with direct dual-arm lift-and-grasp coordination.",
        "A large-scale grasp pose detection backbone extracts visual features before PPO policy learning, reducing the burden of learning directly from raw images.",
        "A CNN-based PPO policy with shared actor-critic layers lets both arms learn coordination inside one policy structure instead of acting independently.",
        "The policy generalizes to unseen objects and transfers from Isaac Gym to real robots without extra real-world data or fine-tuning.",
      ],
      implementation: [
        "An overhead RGB-D camera produces color and depth heightmaps plus a target mask, forming the visual state of the MDP.",
        "An Angle-View Network or grasp pose detection backbone extracts high-dimensional grasp-related features from RGB input for the RL model.",
        "A CNN-based PPO policy outputs dual-arm primitive motions and uses shared actor-critic feature layers to learn coordination.",
        "Depth information is used for action validation and geometric constraints, while learned visual features guide policy decisions.",
        "Training and testing are performed in Isaac Gym, followed by deployment on a real dual-arm robot for seen and unseen large flat objects.",
      ],
    },
  },
  {
    id: "human2sim2robot",
    categories: ["rl"],
    pdf: "read/2504.12609v3.pdf",
    project: "https://human2sim2robot.github.io",
    arxiv: "https://arxiv.org/abs/2504.12609",
    year: "2025",
    venue: "arXiv:2504.12609",
    zh: {
      title: "Crossing the Human-Robot Embodiment Gap with Sim-to-Real RL using One Human Demonstration",
      authors: "Tyler Ga Wei Lum, Olivia Y. Lee, C. Karen Liu, Jeannette Bohg",
      status: "已整理",
      tags: ["Reinforcement Learning", "Human Demonstration", "Dexterous Manipulation"],
      mainContent:
        "这篇论文提出 HUMAN2SIM2ROBOT，用一段 RGB-D 人类演示视频训练真实灵巧手策略。方法不把人手动作直接 retarget 成机器人动作，而是从视频中提取物体 6D pose 轨迹和操作前人手姿态，在仿真里用 RL 学习适合机器人 embodiment 的策略，再零样本迁移到 Kuka + Allegro Hand 真机。",
      innovations: [
        "用单个 human RGB-D demo 完成 real-to-sim-to-real 学习，避免可穿戴设备、遥操作和大规模机器人示范采集。",
        "把演示转化为 object-centric reward 和探索初始化，而不是强制机器人模仿人手逐帧轨迹，从而缓解人机 embodiment gap。",
        "pre-manipulation hand pose 只用于初始化和引导探索，允许 RL 找到更适合机器人手形态的接触方式。",
        "在 grasping、non-prehensile manipulation 和 multi-step task 中，相比 object-aware replay 与 imitation learning 在单演示设置下显著更强。",
      ],
      implementation: [
        "从一段 RGB-D 人类演示中估计物体 6D pose trajectory，用它构造与机器人形态无关的 object-centric reward。",
        "从视频中提取操作前人手姿态，映射到仿真机器人初始接触/手部配置，用于提升 RL 探索效率。",
        "为目标任务快速建立 digital twin，并在仿真中做 domain randomization 和 RL policy training。",
        "策略学习过程不需要任务专用奖励调参，奖励主要来自物体轨迹匹配与任务完成度。",
        "训练出的 closed-loop policy 在真实 Kuka arm + Allegro Hand 上零样本部署，覆盖倒水、推转盒子、盘子入架等任务。",
      ],
    },
    en: {
      title: "Crossing the Human-Robot Embodiment Gap with Sim-to-Real RL using One Human Demonstration",
      authors: "Tyler Ga Wei Lum, Olivia Y. Lee, C. Karen Liu, Jeannette Bohg",
      status: "Summarized",
      tags: ["Reinforcement Learning", "Human Demonstration", "Dexterous Manipulation"],
      mainContent:
        "This paper introduces HUMAN2SIM2ROBOT, which trains real dexterous-hand policies from a single RGB-D video of a human demonstration. Rather than retargeting human hand motion into robot actions, it extracts the object 6D pose trajectory and a pre-manipulation hand pose, uses them to guide RL in simulation, and transfers the resulting policy zero-shot to a Kuka arm with an Allegro Hand.",
      innovations: [
        "It learns from one human RGB-D demo in a real-to-sim-to-real pipeline, avoiding wearables, teleoperation, and large-scale robot demonstrations.",
        "The demonstration becomes an object-centric reward and exploration guide, instead of a per-frame robot action target, reducing the human-robot embodiment gap.",
        "The pre-manipulation hand pose is used only for initialization and exploration guidance, letting RL discover contact strategies better suited to the robot hand.",
        "Across grasping, non-prehensile manipulation, and multi-step tasks, it substantially outperforms object-aware replay and imitation learning in the single-demo setting.",
      ],
      implementation: [
        "The method estimates an object 6D pose trajectory from one RGB-D human video and uses it to build an embodiment-agnostic object-centric reward.",
        "It extracts the pre-manipulation human hand pose and maps it into an initial robot contact/hand configuration in simulation to improve exploration.",
        "A digital twin is constructed for the task, followed by domain randomization and RL policy training in simulation.",
        "The learning process avoids task-specific reward tuning; reward mainly comes from object trajectory matching and task completion.",
        "The final closed-loop policy is deployed zero-shot on a real Kuka arm with an Allegro Hand for tasks such as pouring, box pivoting, and dish insertion.",
      ],
    },
  },
  {
    id: "pi05-open-world-vla",
    categories: ["vla"],
    pdf: "read/2504.16054v1.pdf",
    project: "https://pi.website/blog/pi05",
    arxiv: "https://arxiv.org/abs/2504.16054",
    year: "2025",
    venue: "arXiv:2504.16054",
    zh: {
      title: "π0.5: a Vision-Language-Action Model with Open-World Generalization",
      authors: "Kevin Black, Noah Brown, James Darpinian, Karan Dhabalia, Danny Driess, Adnan Esmail, Michael Equi, Chelsea Finn, Niccolo Fusai, Manuel Y. Galliker, Dibya Ghosh, Lachy Groom, Karol Hausman, Brian Ichter, Szymon Jakubczak, Tim Jones, Liyiming Ke, Devin LeBlanc, Sergey Levine, Adrian Li-Bell, Mohith Mothukuri, Suraj Nair, Karl Pertsch, Allen Z. Ren, Lucy Xiaoyang Shi, Laura Smith, Jost Tobias Springenberg, Kyle Stachowicz, James Tanner, Quan Vuong, Homer Walke, Anna Walling, Haohuan Wang, Lili Yu, Ury Zhilinsky",
      status: "已整理",
      tags: ["VLA", "Open-world Generalization", "Co-training"],
      mainContent:
        "π0.5 在 π0 的基础上研究 VLA 如何泛化到真实家庭中的开放世界机器人任务。模型通过多机器人动作数据、高层语义子任务预测、网页视觉语言数据、目标检测和口头指令等异构数据共同训练，使移动操作机器人能在训练中未见过的家庭里完成清理厨房、整理卧室等 10 到 15 分钟长时程任务。",
      innovations: [
        "把 VLA 训练扩展为 heterogeneous co-training，不只学习低层动作，也学习高层语义、对象知识和 web-scale 视觉语言能力。",
        "引入高层 semantic subtask prediction，让模型先判断下一步应做什么，再生成低层 action chunk，增强长时程任务组织能力。",
        "大量训练样本并非目标移动机器人数据，而来自其他机器人、网页数据和语义标注任务，证明跨数据源知识迁移对 open-world generalization 很关键。",
        "展示端到端学习系统可以在全新真实家庭中完成清洁厨房/卧室等复杂、多阶段、灵巧操作任务。",
      ],
      implementation: [
        "模型继承 π0 的 VLA/action expert 结构，并加入能同时处理图像、语言、检测框、高层子任务标签和机器人动作的训练格式。",
        "第一阶段在混合数据上预训练，数据包括移动操作机器人、静态机器人、实验室任务、web 图文问答、目标定位和语义预测样本。",
        "第二阶段针对移动操作做 fine-tuning，同时包含低层动作示例和高层 semantic action 示例。",
        "推理时先根据当前观测和任务预测 semantic subtask，再以该子任务为条件输出低层动作 chunk。",
        "实验在全新家庭环境中评估厨房/卧室清理、挂毛巾、铺床等长时程任务，分析不同数据源和训练阶段的贡献。",
      ],
    },
    en: {
      title: "π0.5: a Vision-Language-Action Model with Open-World Generalization",
      authors: "Kevin Black, Noah Brown, James Darpinian, Karan Dhabalia, Danny Driess, Adnan Esmail, Michael Equi, Chelsea Finn, Niccolo Fusai, Manuel Y. Galliker, Dibya Ghosh, Lachy Groom, Karol Hausman, Brian Ichter, Szymon Jakubczak, Tim Jones, Liyiming Ke, Devin LeBlanc, Sergey Levine, Adrian Li-Bell, Mohith Mothukuri, Suraj Nair, Karl Pertsch, Allen Z. Ren, Lucy Xiaoyang Shi, Laura Smith, Jost Tobias Springenberg, Kyle Stachowicz, James Tanner, Quan Vuong, Homer Walke, Anna Walling, Haohuan Wang, Lili Yu, Ury Zhilinsky",
      status: "Summarized",
      tags: ["VLA", "Open-world Generalization", "Co-training"],
      mainContent:
        "π0.5 extends π0 to study how VLA models can generalize to open-world robot tasks in real homes. The model is co-trained on heterogeneous data from multiple robots, high-level semantic subtask prediction, web vision-language data, object detection, verbal instructions, and low-level action data, enabling a mobile manipulator to clean kitchens and bedrooms in homes unseen during training.",
      innovations: [
        "It expands VLA training into heterogeneous co-training, learning not only low-level actions but also high-level semantics, object knowledge, and web-scale vision-language capabilities.",
        "High-level semantic subtask prediction lets the model infer what to do next before generating low-level action chunks, improving long-horizon task organization.",
        "Most training examples are not target mobile-manipulator action data, showing that transfer from other robots, web data, and semantic tasks is essential for open-world generalization.",
        "The paper demonstrates an end-to-end learned system performing complex multi-stage household cleaning and manipulation in entirely new real homes.",
      ],
      implementation: [
        "The model builds on the π0 VLA/action-expert architecture and uses a training format that can represent images, language, detections, high-level subtask labels, and robot actions.",
        "The first phase pretrains on mixed data from mobile manipulators, static robots, lab tasks, web visual QA, object localization, and semantic prediction examples.",
        "The second phase fine-tunes for mobile manipulation with both low-level action examples and high-level semantic action labels.",
        "At inference, the model first predicts a semantic subtask from the current observation and task, then conditions low-level action chunk generation on that subtask.",
        "Experiments evaluate long-horizon tasks such as kitchen/bedroom cleaning, towel hanging, and bed making in unseen homes, with ablations over data sources and training stages.",
      ],
    },
  },
  {
    id: "symdex",
    categories: ["rl"],
    pdf: "read/2505.05287v2.pdf",
    project: "https://supersglzc.github.io/projects/symdex/",
    arxiv: "https://arxiv.org/abs/2505.05287",
    year: "2025",
    venue: "CoRL 2025 / arXiv:2505.05287",
    zh: {
      title: "Morphologically Symmetric Reinforcement Learning for Ambidextrous Bimanual Manipulation",
      authors: "Zechu Li, Yufeng Jin, Daniel Ordonez Apraez, Claudio Semini, Puze Liu, Georgia Chalvatzaki",
      status: "已整理",
      tags: ["Reinforcement Learning", "Bimanual Manipulation", "Equivariant Policy"],
      mainContent:
        "这篇论文提出 SYMDEX，用机器人自身的左右形态对称性作为归纳偏置，学习能左右手互换执行任务的双臂/多臂灵巧操作策略。方法把复杂双手任务拆成每只手的子任务，用等变网络训练子策略，再蒸馏成全局 ambidextrous policy，并在六个仿真任务和两个真实任务上验证。",
      innovations: [
        "把 morphological symmetry 系统引入双手/多臂 manipulation RL，使一侧手臂学到的经验天然迁移到对称的另一侧。",
        "把 MTMA-POMDP 中的 task-agent assignment 与 group action 结合，形式化说明全局策略应满足的等变约束。",
        "先学习每个子任务的 G-equivariant policy，再通过 teacher-student distillation 获得不固定左右手任务分配的全局策略。",
        "方法可扩展到四臂设置，并通过 curriculum learning 支持零样本 sim-to-real 部署。",
      ],
      implementation: [
        "先把双手任务拆成 agent-subtask 对，每个子任务观察只包含对应手臂状态和任务相关物体状态，从而降低动作/观察维度和 credit assignment 难度。",
        "每个子任务策略使用 ESCNN 实现的 equivariant MLP，value function 使用 invariant MLP，并用 PPO 并行训练。",
        "收集子任务 expert policies 的状态-动作数据，训练全局 G-equivariant student policy，使其从观测中自动推断任务-手臂分配。",
        "sim-to-real curriculum 逐步加入场景级对称随机化、物体/物理参数随机化、碰撞惩罚和能量惩罚。",
        "评估任务包括 box-lift、table-clean、drawer-insert、threading、bowl-stir、handover，并在真实机器人上部署 box-lift 和 table-clean。",
      ],
    },
    en: {
      title: "Morphologically Symmetric Reinforcement Learning for Ambidextrous Bimanual Manipulation",
      authors: "Zechu Li, Yufeng Jin, Daniel Ordonez Apraez, Claudio Semini, Puze Liu, Georgia Chalvatzaki",
      status: "Summarized",
      tags: ["Reinforcement Learning", "Bimanual Manipulation", "Equivariant Policy"],
      mainContent:
        "This paper introduces SYMDEX, which uses a robot's left-right morphological symmetry as an inductive bias for ambidextrous bimanual and multi-arm manipulation. It decomposes complex bimanual tasks into per-hand subtasks, trains equivariant subtask policies, distills them into a global ambidextrous policy, and validates the method on six simulated tasks plus two real-world deployments.",
      innovations: [
        "It brings morphological symmetry into bimanual and multi-arm manipulation RL, letting experience from one limb transfer naturally to its symmetric counterpart.",
        "The paper formalizes task-agent assignment and group actions in an MTMA-POMDP to define the equivariance constraints required by the global policy.",
        "It first learns G-equivariant subtask policies and then distills them into a global policy that does not require fixed left/right task assignment.",
        "The framework extends to four-arm settings and uses curriculum learning for zero-shot sim-to-real deployment.",
      ],
      implementation: [
        "Bimanual tasks are decomposed into agent-subtask pairs; each subtask observation includes only the assigned arm state and task-relevant object state, reducing dimensionality and credit assignment difficulty.",
        "Each subtask policy uses an equivariant MLP implemented with ESCNN, while the value function uses an invariant MLP, trained in parallel with PPO.",
        "State-action data from subtask expert policies is collected to train a global G-equivariant student policy that infers task-arm assignment from observations.",
        "The sim-to-real curriculum gradually introduces scene-level symmetry randomization, object and physics randomization, collision penalties, and energy penalties.",
        "Evaluation covers box-lift, table-clean, drawer-insert, threading, bowl-stir, and handover, with real deployments on box-lift and table-clean.",
      ],
    },
  },
  {
    id: "spi-active",
    categories: ["sim2real-dynamics-id"],
    pdf: "read/2505.14266v1.pdf",
    project: "https://lecar-lab.github.io/spi-active/",
    arxiv: "https://arxiv.org/abs/2505.14266",
    year: "2025",
    venue: "arXiv:2505.14266",
    zh: {
      title: "Sampling-Based System Identification with Active Exploration for Legged Robot Sim2Real Learning",
      authors: "Nikhil Sobanbabu, Guanqi He, Tairan He, Yuxiang Yang, Guanya Shi",
      status: "已整理",
      tags: ["System Identification", "Sim-to-Real", "Legged Robots"],
      mainContent:
        "这篇论文提出 SPI-Active，用采样式系统辨识和主动探索缩小腿式机器人 RL 的 sim-to-real gap。方法不要求可微仿真器或真实力矩测量，而是在大规模并行仿真中采样物理参数，使仿真轨迹匹配真实轨迹；随后优化探索策略的命令序列，以最大化 Fisher Information，采集更有辨识价值的真实数据。",
      innovations: [
        "把白盒动力学参数辨识做成 massively parallel sampling optimization，适合接触丰富、不可微、难测力矩的腿式系统。",
        "引入主动探索阶段，通过最大化 Fisher Information 让真实轨迹更能激发关键动力学参数，而不是依赖手写 motion script。",
        "探索不直接训练危险的底层动作，而是在预训练多行为 RL policy 的 command space 中优化，兼顾信息量和硬件安全。",
        "辨识后的参数提升下游 locomotion policy 的精准 sim-to-real transfer，在四足和人形机器人多个任务上优于 domain randomization 等基线。",
      ],
      implementation: [
        "第一阶段用已有 RL policy 或运动先验在真实机器人上采集轨迹，并在 4096 个并行仿真环境中采样参数候选。",
        "参数识别目标是最小化真实轨迹与仿真 rollout 之间的状态预测误差，识别质量、惯量、摩擦、执行器相关参数等结构化物理量。",
        "第二阶段根据当前参数估计构造 Fisher Information 目标，优化多行为探索 policy 的输入 command sequence。",
        "机器人执行优化后的 command，采集更高信息量的新轨迹，再重复参数估计以获得更准确的模型。",
        "最终用辨识参数训练下游 locomotion controllers，并在 Go2 四足和 G1 人形上测试精确跳跃、绕杆、高精度速度跟踪等任务。",
      ],
    },
    en: {
      title: "Sampling-Based System Identification with Active Exploration for Legged Robot Sim2Real Learning",
      authors: "Nikhil Sobanbabu, Guanqi He, Tairan He, Yuxiang Yang, Guanya Shi",
      status: "Summarized",
      tags: ["System Identification", "Sim-to-Real", "Legged Robots"],
      mainContent:
        "This paper proposes SPI-Active, a framework that narrows the sim-to-real gap for legged-robot RL through sampling-based system identification and active exploration. It does not require differentiable simulation or real torque measurements. Instead, it samples physical parameters in massively parallel simulation to match real trajectories, then optimizes exploration commands to maximize Fisher Information and collect more informative real data.",
      innovations: [
        "It formulates white-box parameter identification as massively parallel sampling optimization, suitable for contact-rich legged systems without differentiable dynamics or torque sensing.",
        "An active exploration stage maximizes Fisher Information so real trajectories excite important dynamics parameters instead of relying on hand-written motion scripts.",
        "Exploration is optimized in the command space of a pretrained multi-behavior RL policy, improving informativeness while keeping deployment reliable.",
        "Identified parameters improve downstream locomotion sim-to-real transfer on quadruped and humanoid tasks, outperforming domain randomization and other baselines.",
      ],
      implementation: [
        "Stage one collects real trajectories using existing RL policies or motion priors, then samples candidate parameters across 4096 parallel simulation environments.",
        "The identification objective minimizes state prediction error between real trajectories and simulated rollouts, estimating structured physical parameters such as mass, inertia, friction, and actuator terms.",
        "Stage two builds a Fisher Information objective from the current parameter estimate and optimizes the command sequence of a multi-behavior exploration policy.",
        "The robot executes the optimized commands to collect more informative trajectories, and parameter estimation is repeated for a refined model.",
        "The final parameters are used to train downstream locomotion controllers, evaluated on Go2 and G1 robots for precise jumping, weave-pole navigation, and velocity tracking.",
      ],
    },
  },
  {
    id: "multimodal-visual-transformer-rl",
    categories: ["rl"],
    pdf: "read/2507.09180v3.pdf",
    project: "https://arxiv.org/abs/2507.09180",
    arxiv: "https://arxiv.org/abs/2507.09180",
    year: "2025",
    venue: "arXiv:2507.09180",
    zh: {
      title: "Multimodal Visual Transformer for Sim2real Transfer in Visual Reinforcement Learning",
      authors: "Zichun Xu, Yuntao Li, Zhaomin Wang, Lei Zhuang, Guocai Yang, Jingdong Zhao",
      status: "已整理",
      tags: ["Visual Reinforcement Learning", "RGB-D", "Sim-to-Real"],
      mainContent:
        "这篇论文研究视觉强化学习中 RGB-D 表征如何提升样本效率、泛化和 sim-to-real 迁移。作者提出一个轻量 ViT-based multimodal visual backbone，用不同 CNN stem 处理 RGB 与深度，再在 Transformer 中融合，并配合 masked/unmasked token 的对比学习和课程式 domain randomization，实现真实机器人零样本操作迁移。",
      innovations: [
        "不是简单把深度拼成 RGB-D 通道，而是用独立 CNN stems 与 ViT self-attention 深度融合 RGB 和 depth modality。",
        "提出基于 masked 与 unmasked convolutional features 的 contrastive unsupervised learning，提升视觉 RL 的样本效率和任务相关注意力。",
        "结合 SVEA/DrQ-v2 风格的增强训练与课程式 domain randomization，让视觉 backbone 更关注物体和机器人等任务关键区域。",
        "验证训练好的视觉编码器和策略可以零样本迁移到真实操作任务中。",
      ],
      implementation: [
        "RGB 图像和 depth 图像分别经过对应 convolution stem，加入二维位置编码和模态 embedding 后拼接送入 scalable ViT。",
        "ViT 输出 token 经 pooling 得到 visual representation，再接入 DrQ-v2 / off-policy actor-critic 框架训练策略。",
        "对比学习阶段先做 random shift，再在卷积特征层随机 mask，使用未遮挡和遮挡后的 latent 构造 query/key 对比损失。",
        "训练中用随机背景 overlay 等强增强替代单纯弱增强，并使用 SVEA 稳定 critic 更新。",
        "课程式 domain randomization 根据评估表现逐步开启，使策略先学会任务，再逐渐适应仿真到真实的外观差异。",
      ],
    },
    en: {
      title: "Multimodal Visual Transformer for Sim2real Transfer in Visual Reinforcement Learning",
      authors: "Zichun Xu, Yuntao Li, Zhaomin Wang, Lei Zhuang, Guocai Yang, Jingdong Zhao",
      status: "Summarized",
      tags: ["Visual Reinforcement Learning", "RGB-D", "Sim-to-Real"],
      mainContent:
        "This paper studies how RGB-D representation learning can improve sample efficiency, generalization, and sim-to-real transfer in visual reinforcement learning. It proposes a lightweight ViT-based multimodal visual backbone with separate CNN stems for RGB and depth, Transformer-based fusion, masked/unmasked-token contrastive learning, and curriculum domain randomization for zero-shot real-robot transfer.",
      innovations: [
        "Instead of early RGB-D channel concatenation, it uses separate CNN stems and ViT self-attention to deeply fuse RGB and depth modalities.",
        "A contrastive unsupervised objective built from masked and unmasked convolutional features improves visual RL sample efficiency and task-relevant attention.",
        "SVEA/DrQ-v2-style augmentation plus curriculum domain randomization encourages the visual backbone to focus on objects and robot-relevant regions.",
        "The trained visual encoder and policy transfer zero-shot to real-world manipulation tasks.",
      ],
      implementation: [
        "RGB and depth images are processed by separate convolution stems, augmented with 2D positional encodings and modality embeddings, then concatenated for a scalable ViT.",
        "ViT tokens are pooled into a visual representation and plugged into a DrQ-v2/off-policy actor-critic RL framework.",
        "For contrastive learning, random shift is applied first; convolutional features are then randomly masked, and masked/unmasked latents form query-key pairs.",
        "Training uses strong augmentation such as random background overlay and SVEA-style critic stabilization.",
        "Curriculum domain randomization is enabled according to evaluation performance, letting the policy learn the task first and then adapt to visual sim-to-real variation.",
      ],
    },
  },
  {
    id: "pace-legged-sim2real",
    categories: ["sim2real-dynamics-id"],
    pdf: "read/2509.06342v1.pdf",
    project: "https://arxiv.org/abs/2509.06342",
    arxiv: "https://arxiv.org/abs/2509.06342",
    year: "2025",
    venue: "IJRR submission / arXiv:2509.06342",
    zh: {
      title: "Towards bridging the gap: Systematic sim-to-real transfer for diverse legged robots",
      authors: "Filip Bjelonic, Fabian Tischhauser, Marco Hutter",
      status: "已整理",
      tags: ["Dynamics Identification", "Legged Locomotion", "Energy Model"],
      mainContent:
        "这篇论文提出 PACE，一套面向多种腿式机器人的系统化 sim-to-real RL 管线。核心是先从固定基座、腿部悬空的真实轨迹中辨识少量关键动力学参数，再把 PMSM 电机的物理能耗模型纳入奖励，让训练出的盲 locomotion policy 同时具备可迁移性和能效。",
      innovations: [
        "用 bottom-up 动力学辨识流程，从单执行器、整机悬空轨迹到地面 locomotion 逐级验证 simulator alignment。",
        "只辨识紧凑参数集，包括 joint armature/inertia、viscous damping、Coulomb friction、joint bias 和全局 delay，避免高维随机化。",
        "把 PMSM 的电气损耗、机械功和重力势能功写成物理 grounded energetic reward，用更少 reward terms 训练高效步态。",
        "在多个主平台和十多个额外机器人上验证，不随机化动力学参数也能可靠迁移，并降低 ANYmal 的 Cost of Transport。",
      ],
      implementation: [
        "真实数据采集采用固定基座、腿部悬空的 chirp joint target，避免接触外力和 base motion 混入辨识问题。",
        "仿真中重放真实 joint targets，用 CMA-ES 在大量并行环境中优化参数，使模拟关节轨迹最小化与真实轨迹的均方误差。",
        "策略训练阶段不做 dynamics randomization，只随机化任务推力、地面摩擦和地形，policy 使用本体观测，critic 使用 privileged state。",
        "控制输出为相对默认姿态的关节位置偏移，并通过硬限位安全 PD saturation 保护硬件。",
        "奖励只包含速度跟踪、能耗、碰撞和足端触地速度四类项，其中能耗项由电阻损耗、机械功率和势能功共同构成。",
      ],
    },
    en: {
      title: "Towards bridging the gap: Systematic sim-to-real transfer for diverse legged robots",
      authors: "Filip Bjelonic, Fabian Tischhauser, Marco Hutter",
      status: "Summarized",
      tags: ["Dynamics Identification", "Legged Locomotion", "Energy Model"],
      mainContent:
        "This paper proposes PACE, a systematic sim-to-real RL pipeline for diverse legged robots. It first identifies a compact set of key dynamics parameters from fixed-base, legs-in-air real trajectories, then incorporates a physics-grounded PMSM motor energy model into the reward so blind locomotion policies become both transferable and energy efficient.",
      innovations: [
        "A bottom-up dynamics-identification workflow validates simulator alignment from single actuators to full in-air robot trajectories and on-ground locomotion.",
        "Only a compact parameter set is identified: joint armature/inertia, viscous damping, Coulomb friction, joint bias, and a global delay, avoiding high-dimensional dynamics randomization.",
        "A PMSM-based energetic reward models electrical dissipation, mechanical power, and potential power with physical grounding and fewer reward terms.",
        "The method transfers reliably across several primary platforms and more than ten additional robots without dynamics randomization, while reducing ANYmal's Cost of Transport.",
      ],
      implementation: [
        "Real data is collected with a fixed base and free-swinging legs using chirp joint targets, avoiding contact forces and base motion in the identification problem.",
        "Simulation replays the real joint targets, and CMA-ES optimizes parameters across many parallel environments to minimize mean squared error between simulated and real joint trajectories.",
        "Policy training uses no dynamics randomization; only task pushes, ground friction, and terrain are randomized. The policy observes proprioception while the critic gets privileged state.",
        "Actions are joint-position offsets relative to a default posture, executed through hard-limit-safe PD saturation to protect hardware.",
        "The reward contains only velocity tracking, energy, collisions, and touchdown velocity, with energy combining Joule losses, mechanical power, and gravitational potential power.",
      ],
    },
  },
  {
    id: "anyteleop",
    categories: ["teleop-bc"],
    pdf: "read/2307.04577v3.pdf",
    project: "https://yzqin.github.io/anyteleop/",
    arxiv: "https://arxiv.org/abs/2307.04577",
    year: "2024",
    venue: "arXiv:2307.04577",
    zh: {
      title: "AnyTeleop: A General Vision-Based Dexterous Robot Arm-Hand Teleoperation System",
      authors: "Yuzhe Qin, Wei Yang, Binghao Huang, Karl Van Wyk, Hao Su, Xiaolong Wang, Yu-Wei Chao, Dieter Fox",
      status: "已整理",
      tags: ["Teleoperation", "Behavior Cloning Data", "Dexterous Arm-Hand"],
      mainContent:
        "AnyTeleop 提出一个通用视觉遥操作系统，用于不同机械臂、灵巧手、仿真器和真实硬件中的数据采集与控制。它面向大规模 robot teaching / imitation learning 数据收集，支持 IsaacGym、SAPIEN 和真实世界，能够用低成本 RGB/RGB-D 相机完成 dexterous arm-hand teleoperation，并支持远程和多人协作遥操作。",
      innovations: [
        "提出统一遥操作框架，支持任意 arm-hand 组合、任意现实环境（仿真或真实）、任意相机配置和多 operator-robot 协作设置。",
        "运动重定向和碰撞避免模块不依赖针对特定机器人训练的模型，只需机器人 URDF/运动学模型即可适配新硬件。",
        "提供基于浏览器的 web visualizer，使远程遥操作和仿真/真机可视化解耦于特定 simulator 或硬件驱动。",
        "相比专门为某个机器人或仿真器设计的系统，AnyTeleop 在真实任务成功率和用遥操作数据训练 imitation learning policy 的效果上都有提升。",
      ],
      implementation: [
        "系统由 camera driver、human hand detection、hand pose retargeting、motion generation 和 web visualization 等模块组成，各模块通过统一接口解耦。",
        "视觉输入支持 RGB/RGB-D、单相机或多相机；多相机设置通过检测融合提高姿态估计稳定性，并降低部署标定要求。",
        "retargeting 模块把人手腕部和手指姿态映射到不同机器人手形态；motion generation 使用 CUDA/GPU 加速的几何查询和 CuRobo 生成平滑、无碰撞关节轨迹。",
        "系统可连接不同 simulator 或真实机器人后端，同一套软件栈用于仿真数据采集、真实遥操作和协作操作场景。",
        "采集到的遥操作 demonstration 可用于 imitation learning / BC，论文在仿真任务中比较了不同遥操作系统采集数据训练出的 policy 成功率。",
      ],
    },
    en: {
      title: "AnyTeleop: A General Vision-Based Dexterous Robot Arm-Hand Teleoperation System",
      authors: "Yuzhe Qin, Wei Yang, Binghao Huang, Karl Van Wyk, Hao Su, Xiaolong Wang, Yu-Wei Chao, Dieter Fox",
      status: "Summarized",
      tags: ["Teleoperation", "Behavior Cloning Data", "Dexterous Arm-Hand"],
      mainContent:
        "AnyTeleop proposes a general vision-based teleoperation system for data collection and control across different robot arms, dexterous hands, simulators, and real hardware. It targets scalable robot teaching and imitation-learning data collection, supporting IsaacGym, SAPIEN, and real-world deployment with low-cost RGB/RGB-D cameras, remote operation, and collaborative teleoperation.",
      innovations: [
        "It provides a unified teleoperation framework for arbitrary arm-hand systems, different realities, flexible camera configurations, and multi operator-robot partnerships.",
        "Retargeting and collision avoidance are learning-free and adapt to new robots from kinematic models or URDF files, rather than requiring robot-specific trained models.",
        "A browser-based web visualizer decouples remote visual feedback from specific simulators or hardware drivers.",
        "Compared with systems specialized for one robot or simulator, AnyTeleop improves real-world task success and the downstream imitation-learning performance of collected demonstrations.",
      ],
      implementation: [
        "The system is composed of camera drivers, human hand detection, hand pose retargeting, motion generation, and web visualization, connected through standardized interfaces.",
        "Vision input supports RGB or RGB-D, single-camera or multi-camera setups; multi-camera detection fusion improves pose stability and reduces calibration burden.",
        "The retargeting module maps human wrist and finger poses to different robot hands, while the motion generation module uses GPU-accelerated geometry queries and CuRobo for smooth collision-free joint trajectories.",
        "The same software stack connects to different simulators or real robot backends for simulation data collection, real teleoperation, and collaborative manipulation.",
        "Collected teleoperation demonstrations can be used for imitation learning or behavior cloning, and the paper compares downstream policy success from different teleoperation systems.",
      ],
    },
  },
  {
    id: "groot-object-centric-3d",
    categories: ["teleop-bc"],
    pdf: "https://zhuyifengzju.github.io/files/GROOT_CoRL2023.pdf",
    project: "https://ut-austin-rpl.github.io/GROOT/",
    arxiv: "https://arxiv.org/abs/2310.14386",
    year: "2023",
    venue: "CoRL 2023 / arXiv:2310.14386",
    zh: {
      title: "Learning Generalizable Manipulation Policies with Object-Centric 3D Representations",
      authors: "Yifeng Zhu, Zhenyu Jiang, Peter Stone, Yuke Zhu",
      status: "已整理",
      tags: ["Imitation Learning", "Object-centric 3D", "Generalization"],
      mainContent:
        "GROOT 研究如何让基于示范的视觉操作策略在背景、相机视角和物体实例变化时仍能泛化。方法不直接依赖端到端 RGB 表征，而是构建 object-centric 3D representation，并用 transformer policy 在这些对象级 3D 特征上推理，从而学习更稳健的 manipulation policy。",
      innovations: [
        "把 object-centric 和 3D priors 引入 imitation learning policy，使策略对背景变化和相机视角变化更鲁棒。",
        "使用对象级 3D 表示替代纯图像特征，减少环境外观和相机配置对行为克隆策略的干扰。",
        "提出 segmentation correspondence model，让策略在测试时能迁移到新的物体实例。",
        "在仿真和真实机器人上系统评估，对背景、视角和新物体泛化明显优于端到端学习和 object proposal baselines。",
      ],
      implementation: [
        "先从视觉输入中构建对象中心的 3D 表征，把与任务相关的物体几何和空间关系显式编码出来。",
        "策略网络使用 transformer 在 object-centric 3D tokens 上建模，并输出机器人操作动作。",
        "通过 segmentation correspondence 在训练物体和测试新物体之间建立对象区域对应关系，支持 instance-level generalization。",
        "用 imitation learning / behavior cloning 从 demonstration 数据训练策略，并在 sim-to-real 与真实机器人设置中测试泛化能力。",
      ],
    },
    en: {
      title: "Learning Generalizable Manipulation Policies with Object-Centric 3D Representations",
      authors: "Yifeng Zhu, Zhenyu Jiang, Peter Stone, Yuke Zhu",
      status: "Summarized",
      tags: ["Imitation Learning", "Object-centric 3D", "Generalization"],
      mainContent:
        "GROOT studies how demonstration-based visuomotor policies can generalize across changes in background, camera viewpoint, and object instances. Instead of relying only on end-to-end RGB features, it constructs object-centric 3D representations and uses a transformer policy to reason over object-level 3D features, producing more robust manipulation policies.",
      innovations: [
        "It brings object-centric and 3D priors into imitation-learning policies, improving robustness to background and camera-view changes.",
        "Object-level 3D representations replace purely image-based features, reducing policy sensitivity to visual appearance and camera configuration.",
        "A segmentation correspondence model allows policies to transfer to new object instances at test time.",
        "Simulation and real-robot evaluations show stronger generalization over background, viewpoint, and object-instance shifts than end-to-end and object-proposal baselines.",
      ],
      implementation: [
        "Object-centric 3D representations are built from visual input to explicitly encode task-relevant object geometry and spatial relationships.",
        "A transformer policy reasons over object-centric 3D tokens and outputs robot manipulation actions.",
        "Segmentation correspondence links object regions between training objects and unseen test objects, enabling instance-level generalization.",
        "The policy is trained from demonstration data with imitation learning or behavior cloning and evaluated in sim-to-real and real-robot settings.",
      ],
    },
  },
  {
    id: "hawor",
    categories: ["vla"],
    pdf: "https://arxiv.org/pdf/2501.02973",
    project: "https://hawor-project.github.io/",
    arxiv: "https://arxiv.org/abs/2501.02973",
    year: "2025",
    venue: "arXiv:2501.02973",
    zh: {
      title: "HaWoR: World-Space Hand Motion Reconstruction from Egocentric Videos",
      authors: "Jinglei Zhang, Jiankang Deng, Chao Ma, Rolandos Alexandros Potamias",
      status: "已整理",
      tags: ["Egocentric Video", "Hand Motion Reconstruction", "Teleoperation Data"],
      mainContent:
        "HaWoR 研究如何从第一视角视频中恢复世界坐标系下的人手运动轨迹。它针对 egocentric video 中相机和手都在持续运动的问题，把任务拆成相机坐标系手部重建与世界坐标系相机轨迹估计，从而得到可用于机器人遥操作、示范学习和人手动作分析的稳定 3D 手部运动。",
      innovations: [
        "从传统单帧、相机坐标系 3D hand pose estimation 扩展到世界坐标系 hand motion reconstruction，更适合第一视角视频数据。",
        "把手部运动重建和相机轨迹估计解耦，降低 egocentric camera motion 对手部轨迹的干扰。",
        "提出 adaptive egocentric SLAM framework，在剧烈相机运动和手部遮挡场景下提升世界坐标系轨迹估计鲁棒性。",
        "设计 motion infiller network，在手移出视野或缺帧时补全手部运动序列，得到更连续的动作轨迹。",
      ],
      implementation: [
        "先在 camera space 中重建逐帧手部姿态和运动，再估计相机在 world coordinate system 中的轨迹。",
        "用 adaptive egocentric SLAM 处理第一视角视频中快速运动、动态遮挡和传统 SLAM 容易失效的问题。",
        "对手部不可见或超出视锥的帧使用 motion infiller network 进行时序补全。",
        "最终把 camera-space hand motion 与 world-space camera trajectory 组合，输出世界坐标系下连续的人手运动轨迹。",
      ],
    },
    en: {
      title: "HaWoR: World-Space Hand Motion Reconstruction from Egocentric Videos",
      authors: "Jinglei Zhang, Jiankang Deng, Chao Ma, Rolandos Alexandros Potamias",
      status: "Summarized",
      tags: ["Egocentric Video", "Hand Motion Reconstruction", "Teleoperation Data"],
      mainContent:
        "HaWoR studies how to recover world-space hand motion trajectories from egocentric videos. Because both the camera and hands move continuously, it decouples the problem into camera-space hand reconstruction and world-space camera trajectory estimation, producing stable 3D hand motion useful for teleoperation data, imitation learning, and human-hand action analysis.",
      innovations: [
        "It moves beyond single-frame camera-space 3D hand pose estimation toward world-space hand motion reconstruction for egocentric video.",
        "Hand motion reconstruction and camera trajectory estimation are decoupled, reducing interference from egocentric camera motion.",
        "An adaptive egocentric SLAM framework improves world-frame camera trajectory estimation under challenging camera dynamics.",
        "A motion infiller network completes hand motion when hands leave the view frustum or frames are missing, yielding more continuous trajectories.",
      ],
      implementation: [
        "The method first reconstructs framewise hand pose and motion in camera space, then estimates the camera trajectory in the world coordinate system.",
        "Adaptive egocentric SLAM handles fast motion, dynamic occlusion, and failure cases of conventional SLAM in first-person videos.",
        "A motion infiller network fills temporal gaps when hands become invisible or move outside the camera frustum.",
        "Camera-space hand motion and world-space camera trajectory are combined to output continuous hand trajectories in world coordinates.",
      ],
    },
  },
  {
    id: "rma-legged-robots",
    categories: ["rl"],
    pdf: "read/2107.04034v1.pdf",
    project: "https://ashish-kmr.github.io/rma-legged-robots/",
    arxiv: "https://arxiv.org/abs/2107.04034",
    year: "2021",
    venue: "arXiv:2107.04034",
    zh: {
      title: "RMA: Rapid Motor Adaptation for Legged Robots",
      authors: "Ashish Kumar, Zipeng Fu, Deepak Pathak, Jitendra Malik",
      status: "已整理",
      tags: ["Reinforcement Learning", "Legged Locomotion", "Online Adaptation"],
      mainContent:
        "RMA 研究四足机器人如何在真实世界中快速适应未见过的地形、负载变化、摩擦变化和硬件差异。论文提出 Rapid Motor Adaptation 框架，完全在仿真中训练，不依赖参考轨迹或手写足端轨迹生成器，然后直接部署到 Unitree A1 真机。机器人能够在沙地、泥地、草地、碎石、楼梯、变形地面等复杂场景中实时调整运动策略。",
      innovations: [
        "把腿式机器人 sim-to-real 问题转化为在线快速适应：不需要在新环境中先采几分钟数据，也不需要真实世界微调。",
        "提出 base policy + adaptation module 的结构：base policy 使用特权环境信息训练，adaptation module 在部署时从最近状态/动作历史估计 latent extrinsics。",
        "adaptation module 的输出不追求真实物理参数精确辨识，而是学习对动作决策有用的低维环境表征，从而绕开部分不可辨识问题。",
        "使用多样地形生成器和生物能量学启发奖励，在仿真中覆盖质量、摩擦、质心、马达强度、地形高度等变化，提高真实泛化能力。",
      ],
      implementation: [
        "第一阶段在仿真中训练 base policy：输入当前状态、上一时刻动作和由环境因子编码器生成的 extrinsics latent，通过 model-free RL 输出目标关节位置。",
        "第二阶段冻结 base policy，训练 adaptation module：用 on-policy 仿真数据，从过去约 50 步状态和动作历史监督预测 extrinsics latent。",
        "部署时没有真实环境参数，adaptation module 以约 10Hz 在线估计 extrinsics，base policy 以约 100Hz 根据最新 extrinsics 输出动作，两者异步运行。",
        "动作输出是目标关节位置，再由 A1 机器人的 PD controller 转成关节力矩执行。",
        "训练过程结合地形随机化和动力学参数随机化，覆盖摩擦、质量、质心、马达强度等因素，提升零微调真机迁移表现。",
      ],
    },
    en: {
      title: "RMA: Rapid Motor Adaptation for Legged Robots",
      authors: "Ashish Kumar, Zipeng Fu, Deepak Pathak, Jitendra Malik",
      status: "Summarized",
      tags: ["Reinforcement Learning", "Legged Locomotion", "Online Adaptation"],
      mainContent:
        "RMA studies how quadruped robots can rapidly adapt to unseen terrains, payload changes, friction changes, and hardware mismatch in the real world. The paper proposes Rapid Motor Adaptation, trained entirely in simulation without reference trajectories or hand-designed foot trajectory generators, and directly deployed on a Unitree A1 robot. The robot adapts online across sand, mud, grass, pebbles, stairs, deformable surfaces, and other challenging environments.",
      innovations: [
        "It frames legged sim-to-real transfer as rapid online adaptation, avoiding minutes of real-world data collection or real-world fine-tuning in each new environment.",
        "The architecture combines a base policy trained with privileged environment information and an adaptation module that estimates latent extrinsics from recent state-action history at deployment.",
        "The adaptation module does not need exact physical system identification; it learns a low-dimensional environment representation that is useful for choosing actions.",
        "A diverse terrain generator and bioenergetics-inspired rewards expose the policy to variations in mass, friction, center of mass, motor strength, and terrain height during simulation training.",
      ],
      implementation: [
        "Phase one trains the base policy in simulation with model-free RL. It receives the current state, previous action, and an extrinsics latent produced by an environment factor encoder, then outputs desired joint positions.",
        "Phase two freezes the base policy and trains the adaptation module with on-policy simulation data to predict the extrinsics latent from roughly 50 steps of recent state-action history.",
        "At deployment, no privileged environment parameters are available. The adaptation module runs around 10Hz, while the base policy runs around 100Hz using the latest predicted extrinsics.",
        "The policy outputs desired joint positions, which are converted to torques by the A1 robot's PD controller.",
        "Training combines terrain randomization and dynamics randomization over friction, mass, center of mass, motor strength, and related factors for zero-finetuning real-world transfer.",
      ],
    },
  },
  {
    id: "pen-spinning",
    categories: ["rl"],
    pdf: "read/2407.18902v2.pdf",
    project: "https://penspin.github.io/",
    arxiv: "https://arxiv.org/abs/2407.18902",
    year: "2024",
    venue: "CoRL 2024 / arXiv:2407.18902",
    zh: {
      title: "Lessons from Learning to Spin \"Pens\"",
      authors: "Jun Wang, Ying Yuan, Haichuan Che, Haozhi Qi, Yi Ma, Jitendra Malik, Xiaolong Wang",
      status: "已整理",
      tags: ["Reinforcement Learning", "Dexterous Manipulation", "Sim-to-Real"],
      mainContent:
        "这篇论文研究如何让灵巧手学习连续旋转笔状物体。作者先在仿真中用强化学习训练带特权信息的 oracle policy，生成高质量轨迹数据；这些轨迹一方面用于预训练 sensorimotor policy，另一方面作为真实机器人上的 open-loop controller 来筛选成功真实轨迹；最后用少于 50 条真实轨迹微调策略，使其适应真实动力学并能旋转多种不同物理属性的笔状物。",
      innovations: [
        "针对动态、难以遥操示范的 pen spinning 任务，用仿真 RL oracle 生成高质量轨迹，绕开直接人工遥操作难以收集数据的问题。",
        "将仿真轨迹作为真实世界 open-loop controller，筛选能在真机成功旋转超过一圈的轨迹，再作为高质量真实示范数据。",
        "结合仿真预训练和少量真实轨迹微调，让 proprioceptive sensorimotor policy 在真实动态中快速适应。",
        "系统分析了初始状态分布、特权信息、触觉/视觉/本体感知输入和 sim-to-real gap 对动态手内操作的影响。",
      ],
      implementation: [
        "第一步在仿真中训练 oracle policy，输入包含关节位置、上一动作、触觉信号、指尖位置、笔姿态/角速度和点云等特权信息，使用 PPO 优化连续旋转奖励。",
        "第二步 rollout oracle policy 生成仿真轨迹和动作数据，用这些数据预训练只依赖本体感知历史的 student policy。",
        "第三步把 oracle 轨迹作为 open-loop action sequence 在真实机器人上回放，由人工筛选能成功旋转的真实轨迹。",
        "第四步用筛选出的少量真实轨迹微调 student policy，使其从仿真 motion prior 适配到真实世界动力学。",
        "部署时策略主要使用关节位置和过去动作历史，避免视觉/触觉在仿真到真实中更大的分布偏移。",
      ],
    },
    en: {
      title: "Lessons from Learning to Spin \"Pens\"",
      authors: "Jun Wang, Ying Yuan, Haichuan Che, Haozhi Qi, Yi Ma, Jitendra Malik, Xiaolong Wang",
      status: "Summarized",
      tags: ["Reinforcement Learning", "Dexterous Manipulation", "Sim-to-Real"],
      mainContent:
        "This paper studies how to learn continuous spinning of pen-like objects with a dexterous hand. The authors first train an oracle policy with privileged information in simulation using reinforcement learning, producing high-quality trajectories. Those trajectories are used both to pretrain a sensorimotor policy and as an open-loop controller on the real robot to collect successful real-world trajectories. Finally, the policy is fine-tuned with fewer than 50 real trajectories to adapt to real dynamics and spin diverse pen-like objects.",
      innovations: [
        "For a dynamic task that is hard to teleoperate, the method uses a simulated RL oracle to generate high-quality trajectories instead of relying on human demonstrations.",
        "Simulation trajectories are replayed open-loop on the real robot, and successful trials are selected as high-quality real demonstrations.",
        "Simulation pretraining plus a small number of real trajectories lets a proprioceptive sensorimotor policy adapt efficiently to real dynamics.",
        "The paper analyzes how initial-state design, privileged information, tactile/visual/proprioceptive inputs, and the sim-to-real gap affect dynamic in-hand manipulation.",
      ],
      implementation: [
        "First, an oracle policy is trained in simulation with PPO. Its observation includes joint positions, previous actions, tactile signals, fingertip positions, pen pose and angular velocity, and point clouds.",
        "Second, oracle rollouts generate simulation trajectory/action data used to pretrain a student policy that depends mainly on proprioceptive history.",
        "Third, oracle trajectories are replayed as open-loop action sequences on the real robot, and a human-in-the-loop process keeps successful spinning trajectories.",
        "Fourth, the student policy is fine-tuned on the selected real trajectories, transferring the simulation motion prior to real-world dynamics.",
        "At deployment, the policy mainly uses joint-position and previous-action history, avoiding larger sim-to-real mismatch from vision or tactile observations.",
      ],
    },
  },
  {
    id: "dual-arm-push-grasp",
    categories: ["rl"],
    pdf: "read/2412.04052v2.pdf",
    project: "https://sites.google.com/view/pg4da/home",
    arxiv: "https://arxiv.org/abs/2412.04052",
    year: "2025",
    venue: "IEEE RA-L / arXiv:2412.04052",
    zh: {
      title: "Learning Dual-Arm Push and Grasp Synergy in Dense Clutter",
      authors: "Yongliang Wang, Hamidreza Kasaei",
      status: "已整理",
      tags: ["Reinforcement Learning", "Dual-arm Manipulation", "Push-Grasp"],
      mainContent:
        "这篇论文研究密集杂乱场景中的目标导向双臂 push-grasp。作者提出一个层次化深度强化学习框架，从 RGB-D 视觉输入中学习何时推、如何双臂协同推、何时执行 6-DoF 抓取，从而在目标物体周围创造可抓取空间。系统在 Isaac Gym 中训练，并在仿真和真实双臂机器人上测试。",
      innovations: [
        "把双臂系统作为一个统一学习 agent，学习目标导向的双臂 push-grasp 协同，而不是把 pushing 和 grasping 拆成独立模块。",
        "相比传统固定长度直线 push，提出自适应 push action generation，可从 learned feature map 采样连通像素点并生成单臂或双臂协调推路径。",
        "输出 6-DoF grasp candidates，而不是只做 top-down grasp，因此更适合密集杂乱场景中的复杂抓取姿态。",
        "设计 fuzzy-based reward，根据目标孤立程度、动作有效性和 push/grasp 合适性提供连续反馈，加速 PPO 策略学习。",
      ],
      implementation: [
        "输入由双臂 UR5e 上方 RGB-D 相机转换成 color/depth heightmaps，目标物体在训练环境中被条件化标记。",
        "Angle-View Network backbone 处理 RGB 图像并预测像素级 gripper orientation heatmap，为 6-DoF grasp 方向提供视觉特征。",
        "CNN-based RL model 接收 backbone 特征并用 PPO 训练，生成 feature map，再由 grasp decoder 和 push decoder 解码成抓取或推的动作。",
        "push decoder 根据扩展目标 mask 生成推路径，并在 3D 空间中用 Savitzky-Golay filter 平滑轨迹。",
        "系统先在 Isaac Gym 的简化训练版本中学习，再在完整双臂系统和真实机器人上测试，不需要额外真实数据或微调。",
      ],
    },
    en: {
      title: "Learning Dual-Arm Push and Grasp Synergy in Dense Clutter",
      authors: "Yongliang Wang, Hamidreza Kasaei",
      status: "Summarized",
      tags: ["Reinforcement Learning", "Dual-arm Manipulation", "Push-Grasp"],
      mainContent:
        "This paper studies target-oriented dual-arm push-grasping in dense clutter. It proposes a hierarchical deep reinforcement learning framework that learns when to push, how to coordinate dual-arm pushes, and when to execute a 6-DoF grasp from RGB-D observations. The goal is to create graspable space around a target object in dense clutter. The system is trained in Isaac Gym and evaluated in simulation and on a real dual-arm robot.",
      innovations: [
        "It treats the dual-arm system as one learning agent for target-oriented push-grasp synergy, rather than separating pushing and grasping into independent modules.",
        "The adaptive push generation samples connected pixels from learned feature maps and produces single-arm or coordinated dual-arm push paths, beyond fixed-length straight pushes.",
        "The framework outputs 6-DoF grasp candidates instead of top-down grasps, making it more suitable for dense clutter.",
        "A fuzzy reward function evaluates target isolation, action validity, and push/grasp suitability, providing smoother feedback for PPO learning.",
      ],
      implementation: [
        "An overhead RGB-D camera on a dual-arm UR5e setup is converted into color and depth heightmaps, with target conditioning in the training environment.",
        "An Angle-View Network backbone processes RGB images and predicts pixel-wise gripper orientation heatmaps for 6-DoF grasp reasoning.",
        "A CNN-based RL model receives backbone features and is trained with PPO to produce a feature map, decoded by grasp and push motion decoders.",
        "The push decoder uses an expanded target mask to generate push paths, then smooths the 3D trajectory with a Savitzky-Golay filter.",
        "Training is done in a simplified Isaac Gym setup, then evaluated in the full dual-arm system and on a real robot without extra real-world data or fine-tuning.",
      ],
    },
  },
  {
    id: "hora-in-hand-rotation",
    categories: ["rl"],
    pdf: "read/2210.04887v1.pdf",
    project: "https://haozhi.io/hora/",
    arxiv: "https://arxiv.org/abs/2210.04887",
    year: "2022",
    venue: "CoRL 2022 / arXiv:2210.04887",
    zh: {
      title: "In-Hand Object Rotation via Rapid Motor Adaptation",
      authors: "Haozhi Qi, Ashish Kumar, Roberto Calandra, Yi Ma, Jitendra Malik",
      status: "已整理",
      tags: ["Reinforcement Learning", "In-Hand Manipulation", "Rapid Adaptation"],
      mainContent:
        "这篇论文把 RMA 的快速在线适应思想迁移到灵巧手手内物体旋转任务。方法只在仿真中用圆柱体训练控制器，然后无需真实世界微调，直接部署到 Allegro Hand 上，依靠本体感知历史适应不同物体的大小、质量、形状和软硬程度，实现多种真实物体绕 z 轴旋转。",
      innovations: [
        "把快速运动适应从腿式机器人扩展到手内灵巧操作，证明仅用 proprioception 也能完成对不同物体属性的在线适应。",
        "训练只使用简单圆柱体，但真实测试覆盖 30+ 个不同形状、尺寸、质量和材质的物体，展示了强 sim-to-real 泛化。",
        "学习到的 extrinsics latent 与物体质量和尺度等因素有可解释相关性，不要求显式精确辨识真实物理参数。",
        "RL 训练过程中自然涌现稳定 finger gait，不依赖预定义手指步态、视觉或触觉传感器。",
      ],
      implementation: [
        "第一阶段在仿真中联合训练 object property encoder 和 base policy：object properties 包括位置、尺度、质量、质心和摩擦系数，经 encoder 压缩成 8 维 extrinsics。",
        "base policy 输入当前关节位置、上一时刻动作和 extrinsics，使用 PPO 训练，输出 Allegro Hand 的目标关节位置。",
        "第二阶段冻结 base policy，用监督学习训练 adaptation module，从最近的关节位置和动作历史估计 extrinsics。",
        "真实部署时没有 object properties，adaptation module 在线更新 extrinsics，base policy 以约 20Hz 输出动作，完全依赖 proprioception。",
        "仿真中随机化圆柱体尺寸、质量、质心、摩擦等参数，并通过旋转奖励、姿态正则、力矩惩罚和物体稳定项塑造可迁移控制策略。",
      ],
    },
    en: {
      title: "In-Hand Object Rotation via Rapid Motor Adaptation",
      authors: "Haozhi Qi, Ashish Kumar, Roberto Calandra, Yi Ma, Jitendra Malik",
      status: "Summarized",
      tags: ["Reinforcement Learning", "In-Hand Manipulation", "Rapid Adaptation"],
      mainContent:
        "This paper transfers the Rapid Motor Adaptation idea to dexterous in-hand object rotation. The controller is trained only in simulation on cylindrical objects, then directly deployed on an Allegro Hand without real-world fine-tuning. Using proprioceptive history, it adapts to object size, mass, shape, and softness and rotates diverse real objects around the z-axis.",
      innovations: [
        "It extends rapid motor adaptation from legged locomotion to dexterous in-hand manipulation, showing that proprioception alone can support online adaptation to object properties.",
        "The policy is trained only on simple cylinders but tested on 30+ real objects with different shapes, sizes, masses, and materials, showing strong sim-to-real generalization.",
        "The learned extrinsics latent correlates with interpretable object factors such as mass and scale without requiring exact physical system identification.",
        "Stable finger gaits emerge from RL training without predefined finger-gait controllers, vision, or tactile sensing.",
      ],
      implementation: [
        "Phase one jointly trains an object property encoder and base policy in simulation. Object position, scale, mass, center of mass, and friction are compressed into an 8D extrinsics latent.",
        "The base policy takes current joint positions, previous action, and extrinsics as input, is trained with PPO, and outputs target Allegro Hand joint positions.",
        "Phase two freezes the base policy and trains an adaptation module with supervised learning to estimate extrinsics from recent joint-position and action history.",
        "During real deployment, object properties are unavailable. The adaptation module updates extrinsics online, while the base policy outputs actions at about 20Hz using only proprioception.",
        "Simulation randomizes cylinder size, mass, center of mass, and friction, with rewards for rotation plus pose regularization, torque penalties, and object stability.",
      ],
    },
  },
  {
    id: "tacgnn",
    categories: ["rl"],
    pdf: "read/2304.00736v1.pdf",
    project: "https://sites.google.com/view/tacgnn",
    arxiv: "https://arxiv.org/abs/2304.00736",
    year: "2023",
    venue: "IEEE RA-L / arXiv:2304.00736",
    zh: {
      title: "TacGNN: Learning Tactile-based In-hand Manipulation with a Blind Robot using Hierarchical Graph Neural Network",
      authors: "Linhan Yang, Bidan Huang, Qingbiao Li, Ya-Yen Tsai, Wang Wei Lee, Chaoyang Song, Jia Pan",
      status: "已整理",
      tags: ["Reinforcement Learning", "Tactile Sensing", "Dexterous Manipulation"],
      mainContent:
        "TacGNN 研究没有视觉输入的灵巧手如何仅依靠触觉和本体感知完成手内操作。论文先用层次化图神经网络从分布式触觉传感器中预测物体相关状态，再把预测状态和机器人状态输入 PPO 策略，完成类似保定球的双球手内旋转任务。方法在仿真中训练，并迁移到真实 Allegro Hand 上。",
      innovations: [
        "把触觉信号建模为动态点集/图结构，只使用被激活的触觉 taxels，避免把稀疏、不规则触觉数据强行 reshape 成图像。",
        "提出层次化 TacGNN，通过 kNN 建图、局部邻域聚合和 farthest point sampling 提取多层触觉特征，能处理节点数量和连接随接触变化的动态图。",
        "将触觉感知模型与 RL 控制解耦：先预测物体状态，再用 PPO 学习操作策略，使盲机器人能完成需要持续接触反馈的手内 manipulation。",
        "相较 MLP、CNN、静态 GCN，TacGNN 在物体状态预测和最终操作成功率上表现更好，并能迁移到真实机器人。",
      ],
      implementation: [
        "硬件使用带分布式触觉传感器的 Allegro Hand，任务是同时操控两个球在手内相对旋转约 180 度。",
        "触觉输入被表示为激活 taxel 的 3D 坐标点集，通过 kNN 构建动态 tactile graph，图节点数量随接触状态变化。",
        "TacGNN 使用多层 message passing 和采样聚合预测物体位置/姿态等 object states，并用监督学习训练该 perception model。",
        "控制策略使用 PPO：状态由 TacGNN 预测的物体状态、机器人关节状态/速度等组成，奖励包含角度进展、成功奖励和失败惩罚。",
        "训练流程先收集触觉-物体状态数据训练感知模型，再冻结/使用该模型为 RL policy 提供状态估计，最后在不同难度任务和真实机器人上验证。",
      ],
    },
    en: {
      title: "TacGNN: Learning Tactile-based In-hand Manipulation with a Blind Robot using Hierarchical Graph Neural Network",
      authors: "Linhan Yang, Bidan Huang, Qingbiao Li, Ya-Yen Tsai, Wang Wei Lee, Chaoyang Song, Jia Pan",
      status: "Summarized",
      tags: ["Reinforcement Learning", "Tactile Sensing", "Dexterous Manipulation"],
      mainContent:
        "TacGNN studies dexterous in-hand manipulation without vision, relying only on tactile sensing and proprioception. The paper first predicts object-related states from distributed tactile sensors using a hierarchical graph neural network, then feeds those predicted states and robot states into a PPO policy for a Baoding-ball-style in-hand rotation task. The method is trained in simulation and transferred to a real Allegro Hand.",
      innovations: [
        "It models tactile readings as a dynamic point set or graph using only activated taxels, avoiding image-like reshaping of sparse and irregular tactile signals.",
        "The hierarchical TacGNN uses kNN graph construction, local message passing, and farthest point sampling to capture multi-level tactile features under changing contact topology.",
        "The method decouples tactile perception from RL control: object states are predicted first, then PPO learns manipulation policies from those estimates.",
        "Compared with MLP, CNN, and static GCN baselines, TacGNN improves object-state prediction and manipulation success, while transferring to a real robot.",
      ],
      implementation: [
        "The setup uses an Allegro Hand with distributed tactile sensors, manipulating two balls in hand to rotate them around each other by about 180 degrees.",
        "Tactile inputs are represented as 3D coordinates of activated taxels; a dynamic tactile graph is constructed with kNN, so graph size changes with contact.",
        "TacGNN applies multi-layer message passing and sampling aggregation to predict object states such as position and orientation, trained with supervised learning.",
        "The control policy uses PPO. Its state includes TacGNN-predicted object states plus robot joint state and velocity, with rewards for angle progress, success, and failure.",
        "The workflow first collects tactile/object-state data to train the perception model, then uses it to provide state estimates for RL policy learning and real-robot transfer.",
      ],
    },
  },
  {
    id: "bidexhands",
    categories: ["rl"],
    pdf: "read/2206.08686v2.pdf",
    project: "https://github.com/PKU-MARL/DexterousHands",
    arxiv: "https://arxiv.org/abs/2206.08686",
    year: "2022",
    venue: "NeurIPS 2022 Datasets and Benchmarks / arXiv:2206.08686",
    zh: {
      title: "Towards Human-Level Bimanual Dexterous Manipulation with Reinforcement Learning",
      authors:
        "Yuanpei Chen, Tianhao Wu, Shengjie Wang, Xidong Feng, Jiechuang Jiang, Stephen Marcus McAleer, Yiran Geng, Hao Dong, Zongqing Lu, Song-Chun Zhu, Yaodong Yang",
      status: "已整理",
      tags: ["Reinforcement Learning", "Dexterous Manipulation", "Benchmark"],
      mainContent:
        "这篇论文提出 Bi-DexHands，一个面向双手灵巧操作的强化学习 benchmark。它在 Isaac Gym 中构建两个 Shadow Hands、数十个双手操作任务和大量目标物体，用来评估单智能体 RL、多智能体 RL、离线 RL、多任务 RL 和 Meta RL。论文目标不是只解决某个单一操作，而是提供一个逼近人类双手精细运动能力的系统化测试平台。",
      innovations: [
        "提出首个大规模双手灵巧操作 RL benchmark，覆盖抓取、传递、开瓶、抛接、堆叠等不同人类精细运动阶段对应的任务。",
        "用 Isaac Gym 支持大规模并行仿真，在单张 RTX 3090 上可达到 30,000+ FPS，大幅降低灵巧手 RL 训练成本。",
        "把双手、手指、关节等建模成异构协作主体，为 MARL 提供比同质智能体环境更接近真实机器人操作的挑战。",
        "系统比较 PPO、SAC、TRPO、DDPG、TD3、MAPPO、HAPPO、HATRPO、离线 RL、多任务 RL 和 Meta RL，指出现有算法在多任务泛化和少样本适应上仍明显不足。",
      ],
      implementation: [
        "仿真环境使用两个 24-DoF Shadow Hands，底层控制器 1kHz 运行，RL policy 以 30Hz 输出可驱动关节的相对位置。",
        "任务设计参考 Fine Motor Subtest，把不同操作难度和儿童运动技能发展阶段对应起来，并引入 YCB、SAPIEN 等物体资源。",
        "环境形式支持 Dec-POMDP：可把手、手指或关节划分为多个异构 agent，用于单智能体和多智能体 RL 设置。",
        "benchmark 实现了在线 RL、MARL、离线 RL、多任务 RL 和 Meta RL 的统一评估接口，包括 MT/ML 任务划分和不同目标/物体变化。",
        "实验主要在 Isaac Gym 中并行运行大量环境，评估成功率、训练效率、任务难度、多任务泛化和离线数据利用能力。",
      ],
    },
    en: {
      title: "Towards Human-Level Bimanual Dexterous Manipulation with Reinforcement Learning",
      authors:
        "Yuanpei Chen, Tianhao Wu, Shengjie Wang, Xidong Feng, Jiechuang Jiang, Stephen Marcus McAleer, Yiran Geng, Hao Dong, Zongqing Lu, Song-Chun Zhu, Yaodong Yang",
      status: "Summarized",
      tags: ["Reinforcement Learning", "Dexterous Manipulation", "Benchmark"],
      mainContent:
        "This paper introduces Bi-DexHands, a reinforcement learning benchmark for bimanual dexterous manipulation. Built in Isaac Gym, it uses two Shadow Hands, tens of bimanual manipulation tasks, and many target objects to evaluate single-agent RL, multi-agent RL, offline RL, multi-task RL, and meta-RL. The goal is to provide a systematic testbed for moving toward human-level bimanual fine motor skills.",
      innovations: [
        "It proposes a large-scale bimanual dexterous manipulation benchmark covering grasping, handover, bottle opening, catching, stacking, and other tasks inspired by human fine motor development.",
        "Isaac Gym parallel simulation enables more than 30,000 FPS on a single RTX 3090, making dexterous-hand RL training much more practical.",
        "Hands, fingers, and joints can be modeled as heterogeneous cooperative agents, creating a more realistic MARL challenge than homogeneous-agent benchmarks.",
        "The paper systematically benchmarks PPO, SAC, TRPO, DDPG, TD3, MAPPO, HAPPO, HATRPO, offline RL, multi-task RL, and meta-RL, showing that multi-task generalization and few-shot adaptation remain difficult.",
      ],
      implementation: [
        "The simulator uses two 24-DoF Shadow Hands. The low-level controller runs at 1kHz, while the RL policy outputs relative joint positions at 30Hz.",
        "Tasks are designed according to the Fine Motor Subtest and use object resources such as YCB and SAPIEN to create diverse manipulation scenarios.",
        "The environment supports Dec-POMDP formulations, allowing hands, fingers, or joints to be treated as heterogeneous agents for single-agent and multi-agent RL.",
        "The benchmark provides unified evaluation setups for online RL, MARL, offline RL, multi-task RL, and meta-RL, including MT/ML task splits and object or goal variations.",
        "Experiments run many parallel Isaac Gym environments and evaluate success rate, training speed, task difficulty, multi-task generalization, and offline data usage.",
      ],
    },
  },
  {
    id: "dextrah-g",
    categories: ["sim2real"],
    pdf: "read/2407.02274v3.pdf",
    project: "https://sites.google.com/view/dextrah-g",
    arxiv: "https://arxiv.org/abs/2407.02274",
    year: "2024",
    venue: "CoRL 2024 / arXiv:2407.02274",
    zh: {
      title: "DextrAH-G: Pixels-to-Action Dexterous Arm-Hand Grasping with Geometric Fabrics",
      authors: "Tyler Ga Wei Lum, Martin Matak, Viktor Makoviychuk, Ankur Handa, Arthur Allshire, Tucker Hermans, Nathan D. Ratliff, Karl Van Wyk",
      status: "已整理",
      tags: ["Sim-to-Real", "Dexterous Grasping", "Teacher-Student Distillation"],
      mainContent:
        "DextrAH-G 研究如何让 23 电机的灵巧臂手机器人从流式深度图像中直接输出动作，实现快速、安全、鲁棒的真实物体抓取。方法完全在仿真中训练，结合 reinforcement learning、geometric fabrics 和 teacher-student distillation，最后零样本迁移到真实硬件，在多种未知物体上完成连续抓取和搬运。",
      innovations: [
        "把 geometric fabric controller 嵌入策略学习，为 RL 提供安全、自然且受约束的动作空间，同时处理自碰撞、环境碰撞和关节限制。",
        "先训练 privileged fabric-guided teacher policy，再蒸馏成使用深度图和本体感知的 pixels-to-action student policy，解决真实部署时无法访问特权状态的问题。",
        "通过深度图输入和多模态状态融合实现对不同物体几何的泛化，不依赖完整点云、真实物体模型或人工指定 grasp pose。",
        "展示了高自由度 dexterous arm-hand 系统上的零样本 sim2real 抓取能力，并强调硬件安全约束对真实部署的重要性。",
      ],
      implementation: [
        "底层 geometric fabric 以 60Hz 运行，定义碰撞避免、关节约束、姿态塑形和 grasping 行为，并把策略 action 映射为 fabric driving force。",
        "teacher policy 在仿真中用 RL 训练，使用不完全但特权的对象/机器人状态作为 actor 输入，并用 asymmetric critic 访问更多仿真状态提升训练效率。",
        "训练任务覆盖 140 个对象，teacher 的动作不是直接关节命令，而是作用在 geometric fabric 上的低维 action space。",
        "student policy 通过在线 DAgger 式 teacher-student distillation 学习，输入机器人本体状态、目标和 160x120 深度图，输出 teacher action 并辅助预测物体位置。",
        "真实部署时使用 student depth policy 加状态机完成 bin packing，直接从仿真迁移到硬件，并依赖 fabric controller 保持安全和实时控制。",
      ],
    },
    en: {
      title: "DextrAH-G: Pixels-to-Action Dexterous Arm-Hand Grasping with Geometric Fabrics",
      authors: "Tyler Ga Wei Lum, Martin Matak, Viktor Makoviychuk, Ankur Handa, Arthur Allshire, Tucker Hermans, Nathan D. Ratliff, Karl Van Wyk",
      status: "Summarized",
      tags: ["Sim-to-Real", "Dexterous Grasping", "Teacher-Student Distillation"],
      mainContent:
        "DextrAH-G studies how a 23-motor dexterous arm-hand robot can map streaming depth images directly to actions for fast, safe, and robust grasping. The method is trained entirely in simulation and combines reinforcement learning, geometric fabrics, and teacher-student distillation. It is deployed zero-shot on real hardware to grasp and transport diverse unseen objects.",
      innovations: [
        "It embeds a geometric fabric controller into policy learning, giving RL a safe and constrained action space while handling self-collision, environment collision, and joint limits.",
        "The method trains a privileged fabric-guided teacher policy, then distills it into a pixels-to-action student policy using depth images and proprioception for real deployment.",
        "Depth-based multimodal policy learning generalizes across object geometry without requiring complete point clouds, object models, or manually specified grasp poses.",
        "The paper demonstrates zero-shot sim-to-real dexterous arm-hand grasping and highlights hardware safety constraints as a core part of deployment.",
      ],
      implementation: [
        "A geometric fabric runs at 60Hz, encoding collision avoidance, joint constraints, posture shaping, and grasping behavior while mapping policy actions into fabric driving forces.",
        "The teacher policy is trained with RL in simulation, using limited privileged actor observations and an asymmetric critic with richer simulation state for faster learning.",
        "Training covers 140 objects, and the teacher action is a low-dimensional input to the geometric fabric rather than a raw joint command.",
        "The student policy is learned with online DAgger-style teacher-student distillation. It takes robot proprioception, goal state, and a 160x120 depth image, then predicts teacher actions and object position.",
        "Real deployment uses the student depth policy plus a state machine for bin packing, transferring directly from simulation to hardware while relying on the fabric controller for safety and real-time control.",
      ],
    },
  },
  {
    id: "mimicgen",
    categories: ["teleop-bc"],
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
    id: "pi0",
    categories: ["vla"],
    pdf: "read/2410.24164v1.pdf",
    project: "https://physicalintelligence.company/blog/pi0",
    arxiv: "https://arxiv.org/abs/2410.24164",
    year: "2024",
    venue: "arXiv:2410.24164",
    zh: {
      title: "π0: A Vision-Language-Action Flow Model for General Robot Control",
      authors:
        "Kevin Black, Noah Brown, Danny Driess, Adnan Esmail, Michael Equi, Chelsea Finn, Niccolo Fusai, Lachy Groom, Karol Hausman, Brian Ichter, Szymon Jakubczak, Tim Jones, Liyiming Ke, Sergey Levine, Adrian Li-Bell, Mohith Mothukuri, Suraj Nair, Karl Pertsch, Lucy Xiaoyang Shi, James Tanner, Quan Vuong, Anna Walling, Haohuan Wang, Ury Zhilinsky",
      status: "已整理",
      tags: ["VLA", "Flow Matching", "Robot Foundation Model"],
      mainContent:
        "π0 是 Physical Intelligence 提出的通用机器人 VLA 模型。它以预训练 VLM 为 backbone，引入 action expert，用 flow matching 生成连续 action chunks，从而支持高频、流畅、灵巧的机器人控制。模型在跨 embodiment 的大规模机器人数据上预训练，再通过 post-training / fine-tuning 适配复杂下游任务，例如洗衣折叠、桌面清理、装箱和组装盒子。",
      innovations: [
        "把 VLM 的视觉语言语义能力和连续机器人控制结合起来，不再像早期 VLA 那样把动作简单离散成 token。",
        "提出 flow matching action expert，为 VLM 增加连续动作输出能力，可生成高频 action chunks，支持最高约 50Hz 的灵巧控制。",
        "采用 cross-embodiment training，把单臂、双臂、移动操作机器人等不同配置的数据统一到一个 generalist policy 中。",
        "强调 pre-training / post-training recipe：大规模多样数据提供泛化和恢复能力，高质量任务数据塑造效率、鲁棒性和灵巧性。",
      ],
      implementation: [
        "模型 backbone 初始化自 PaliGemma VLM，继承互联网级视觉语言表征；额外加入约 300M 参数的 action expert 处理机器人状态和动作。",
        "动作表示为未来 H 步 action chunk，训练时对连续动作使用 conditional flow matching loss，而不是自回归离散 token 交叉熵。",
        "预训练数据包含自有 dexterous manipulation 数据、OXE 等开放数据，覆盖 7 种机器人配置、68 个任务和 10,000+ 小时机器人数据。",
        "post-training 阶段使用更窄但更高质量的任务数据做 fine-tuning，让模型获得复杂任务中的灵巧性、效率和稳定恢复行为。",
        "评估覆盖 zero-shot language control、下游 fine-tuning，以及由高层 VLM 输出中间语言指令、π0 执行低层控制的长时程任务。",
      ],
    },
    en: {
      title: "π0: A Vision-Language-Action Flow Model for General Robot Control",
      authors:
        "Kevin Black, Noah Brown, Danny Driess, Adnan Esmail, Michael Equi, Chelsea Finn, Niccolo Fusai, Lachy Groom, Karol Hausman, Brian Ichter, Szymon Jakubczak, Tim Jones, Liyiming Ke, Sergey Levine, Adrian Li-Bell, Mohith Mothukuri, Suraj Nair, Karl Pertsch, Lucy Xiaoyang Shi, James Tanner, Quan Vuong, Anna Walling, Haohuan Wang, Ury Zhilinsky",
      status: "Summarized",
      tags: ["VLA", "Flow Matching", "Robot Foundation Model"],
      mainContent:
        "π0 is a generalist robot VLA model from Physical Intelligence. It builds on a pretrained VLM backbone and adds an action expert that uses flow matching to generate continuous action chunks, enabling high-frequency and fluent dexterous robot control. The model is pretrained on large cross-embodiment robot data and then post-trained or fine-tuned for complex downstream tasks such as laundry folding, table cleaning, box assembly, and grocery bagging.",
      innovations: [
        "It connects VLM semantic knowledge with continuous robot control, rather than discretizing actions into autoregressive tokens as in earlier VLA designs.",
        "A flow-matching action expert augments the VLM with continuous action outputs and can generate high-frequency action chunks up to about 50Hz.",
        "Cross-embodiment training combines data from single-arm robots, dual-arm systems, and mobile manipulators into one generalist policy.",
        "The paper highlights a pre-training/post-training recipe: broad diverse data gives generalization and recovery behavior, while high-quality task data shapes dexterity, efficiency, and robustness.",
      ],
      implementation: [
        "The backbone is initialized from the PaliGemma VLM to inherit visual-language representations, with an additional roughly 300M-parameter action expert for robot states and actions.",
        "Actions are represented as future action chunks. Training uses a conditional flow matching loss over continuous actions instead of discrete autoregressive token cross-entropy.",
        "Pretraining uses a mixture of internal dexterous manipulation data and open datasets such as OXE, covering 7 robot configurations, 68 tasks, and more than 10,000 hours of robot data.",
        "Post-training fine-tunes the model on narrower but higher-quality task datasets to specialize for dexterity, efficiency, and robust recovery.",
        "Evaluation includes zero-shot language control, downstream fine-tuning, and long-horizon setups where a high-level VLM emits intermediate language commands and π0 performs low-level control.",
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
  selectedId: "dextrah-rgb",
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
