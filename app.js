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
  { id: "world-model", label: { zh: "世界模型", en: "World Model" } },
  { id: "vla", label: { zh: "vla", en: "VLA" } },
];

const papers = [
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
