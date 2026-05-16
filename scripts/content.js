window.resumeContent = {
  en: {
    meta: {
      heroEyebrow: "Full-stack engineering portfolio",
      heroSubtitle: "Computer Engineering graduate student building business workflow platforms, backend APIs, real-time systems, mobile AI prototypes, and distributed data tools.",
      heroLocation: "Los Angeles, CA",
      footerCopyright: "© 2023-2026 Wenjin Li",
      footerPowered: "Powered by GitHub Pages",
      footerUpdatedLabel: "Last updated:",
      footerUpdatedDate: "May 14, 2026"
    },
    nav: [
      { id: "profile", label: "Profile" },
      { id: "education", label: "Education" },
      { id: "experience", label: "Experience" },
      { id: "research", label: "Research" },
      { id: "projects", label: "Projects" },
      { id: "skills", label: "Skills" }
    ],
    sections: {
      profile: {
        title: "Technical Profile",
        kicker: "Backend, data, AI, and product delivery",
        paragraphs: [
          "Full-stack and AI/data systems engineer focused on business-facing data platforms, backend APIs, real-time workflows, and AI-assisted decision tools.",
          "Hands-on experience across Python, Node.js, React, TypeScript, Swift/iOS, SQL databases, Firebase, Linux, Docker, and cloud-backed deployment.",
          "Strongest project areas include operational workflow systems, scheduling and reporting platforms, real-time data synchronization, production web/API delivery, high-performance data processing, and practical LLM integration."
        ]
      },
      education: {
        title: "Education",
        kicker: "Academic background",
        entries: [
          {
            title: "University of Southern California",
            meta: "Los Angeles, CA | Aug 2024 - Jun 2026",
            role: "Master of Science in Computer Engineering | GPA: 3.75 / 4.0",
            body: ["Relevant Coursework: Parallel & Distributed Computing, Computer Networks, Cloud Computing, Computer Architecture, ML/AI, Cybersecurity"]
          },
          {
            title: "University of California Santa Barbara",
            meta: "Santa Barbara, CA | Sep 2021 - Jun 2024",
            role: "Bachelor of Science in Computer Engineering | GPA: 3.29 / 4.00",
            body: ["Relevant Coursework: Data Structures, Distributed Systems, FPGA & ASIC Design, Smartphone Architecture, Computer Architecture, Mobile Programming, ML/AI"]
          },
          {
            title: "Pasadena City College",
            meta: "Pasadena, CA | Feb 2018 - Jun 2021",
            role: "Associate of Arts in Engineering and Technology, Natural Sciences | GPA: 3.66 / 4.00"
          }
        ]
      },
      experience: {
        title: "Professional Experience",
        kicker: "Industry delivery",
        entries: [
          {
            title: "Context Consulting",
            meta: "Foshan, China / Toronto, Canada | May 2025 - Present",
            role: "Full-Stack Developer & Project Manager",
            bullets: [
              "Built full-stack business workflow features with React, HTML/CSS, and JavaScript, translating client requirements into responsive UI flows and maintainable front-end components.",
              "Developed RESTful APIs in Node.js and Python, integrated MySQL/PostgreSQL data models, and structured back-end endpoints for client-facing operational workflows.",
              "Deployed and maintained Linux services using Nginx, Docker, CI/CD automation, and patch management for production-facing web and API systems.",
              "Managed timelines, milestones, budgets, and implementation priorities across front-end, back-end, database, and infrastructure workstreams."
            ]
          },
          {
            title: "Rusty Hermit",
            meta: "Los Angeles, CA | Dec 2023 - Jun 2024",
            role: "Software Engineering Intern",
            bullets: [
              "Developed an automated warehouse management system using Python for GUI workflows and Firebase APIs for cloud-backed operational data.",
              "Streamlined inventory tracking and order fulfillment by reducing manual updates, centralizing operational status, and improving visibility across warehouse modules.",
              "Implemented real-time data synchronization across 5+ warehouse modules through Firebase cloud data flows, improving consistency of inventory and order state.",
              "Built secure user authentication and monthly performance-reporting workflows while iterating on UI changes from client and operations feedback."
            ]
          },
          {
            title: "Apexus-Tech",
            meta: "New York, NY | Aug 2023 - Nov 2023",
            role: "Developer Intern",
            bullets: [
              "Built Python and SQL tooling for market data ingestion, cleaning, and analysis to support algorithmic trading research and strategy evaluation.",
              "Optimized software execution paths and hardware configuration assumptions for trading workloads, reducing processing latency by 20%.",
              "Applied machine learning models to trading signals, improving predictive accuracy by 25% and supporting revised execution strategies under changing market conditions.",
              "Evaluated hardware/software compatibility constraints with IT stakeholders to improve reliability of proprietary trading infrastructure."
            ]
          }
        ]
      },
      research: {
        title: "Research Experience",
        kicker: "Applied systems and autonomy",
        entries: [
          {
            title: "NetRecon Lab",
            meta: "Los Angeles, CA | May 2025 - Aug 2025",
            role: "Graduate Research Assistant",
            bullets: [
              "Developed an iOS prototype for on-device AI note generation by combining CareKit task data, HealthKit sensor data, and patient metadata.",
              "Quantized a 1.7B-parameter language model to 4-bit precision and deployed it with MLX on an iPhone 14 Pro, sustaining 40 tokens/sec while preserving note quality.",
              "Built a SwiftUI front end and secure inference pipeline so all patient-data processing stays on device for HIPAA-aligned edge processing."
            ]
          },
          {
            title: "Kayak Drone Testbed (USV)",
            meta: "Santa Barbara, CA | Sep 2023 - Jun 2024",
            role: "Principal Member",
            bullets: [
              "Led a 5-engineer team building an AeroVironment-sponsored unmanned surface vehicle for coastal surveying and GPS-denied maritime environments.",
              "Constructed and deployed radar-based SLAM using ROS, improving real-time environmental mapping and autonomous navigation in complex maritime conditions.",
              "Designed MESH radio transceiver software and tuned communication parameters for stable surface-exploration data links up to 10 km.",
              "Co-authored research paper: \"Adopting Radar-Based SLAM in Autonomous Maritime Vehicles for Robust Environmental Exploration.\""
            ],
            links: [
              { label: "Demo Video", url: "https://youtu.be/DdH11Z4zw8o" },
              { label: "Poster", url: "https://web.ece.ucsb.edu/~yoga/capstone/static/img/projects/poster/usv_po.pdf" },
              { label: "Paper", url: "http://hdl.handle.net/10150/675424" },
              { label: "Repository", url: "https://github.com/Aquatic-Drone-Testbed" }
            ],
            note: "Instructor & Advisor: Dr. Yogananda Isukapalli | Sponsored by: AeroVironment"
          }
        ]
      },
      projects: {
        title: "Projects",
        kicker: "Selected engineering work",
        entries: [
          {
            title: "Harmony Scheduler",
            meta: "Los Angeles, CA | Jun 2025 - Dec 2025",
            role: "School Operations Platform",
            bullets: [
              "Built a multi-role scheduling platform with React 19, TypeScript, Vite, and Firebase Auth/Firestore for administrator, teacher, and student workflows.",
              "Implemented semester setup, teacher time-slot management, student enrollment/withdrawal, calendar-based course views, and cross-user schedule visibility.",
              "Developed Firebase-backed authentication, user metadata, real-time messaging/read-status flows, and online presence checks across teacher/student communication.",
              "Integrated Gemini API support and structured TypeScript models for scheduling, tuition records, swap requests, messages, and school-level operational data."
            ]
          },
          {
            title: "High-Performance Distributed MPP Query Engine",
            meta: "Los Angeles, CA | Jan 2026 - May 2026",
            role: "Parallel and Distributed Computing",
            bullets: [
              "Built a distributed in-memory MPP query engine in C++17 with MPI/OpenMP for star-schema analytical workloads over 20M-40M sales rows.",
              "Implemented dense key mapping, column-oriented aggregation, skew mitigation, and global reduction logic for revenue analytics workloads.",
              "Reduced 20M-row extreme-skew query time from 194.045 ms serial to 73.75 ms through OpenMP thread-private buffers and MPI communication overlap."
            ]
          },
          {
            title: "LLM-Generated Rewards for Reinforcement Learning",
            meta: "Los Angeles, CA | Aug 2025 - Dec 2025",
            role: "Reinforcement Learning",
            bullets: [
              "Built a trajectory-level LLM reward-shaping framework for PPO agents in Gym environments using episode summaries, score caching, and terminal-only bonus rewards.",
              "Generated learning-curve visualizations and validation analysis showing improved LunarLander-v2 peak mean return versus baseline PPO."
            ]
          },
          {
            title: "Vending Machine",
            meta: "Embedded systems",
            bullets: [
              "Designed and developed a vending machine that accepts coins and dispenses items based on user selections.",
              "Used IR obstacle avoidance sensors to detect coins and trigger interrupts on the STM32 board.",
              "Built the user interface with a 2.8-inch SPI TFT LCD display, Wii Nunchuck controller, and Termite UART admin interface.",
              "Controlled four motors through the STM32 board for item dispensing."
            ],
            links: [
              { label: "Project Site", url: "https://sites.google.com/view/ece-153b-vending-machine/home" },
              { label: "Demo Video", url: "https://youtu.be/CN42yPagX8k" }
            ]
          },
          {
            title: "UCSB Coral",
            meta: "Student scheduling and group communication",
            bullets: [
              "Built a UCSB-only scheduling and class communication app for auto-generated quarterly schedules and course group chats.",
              "Supported secure UCSB email login, card-list schedules, calendar views, class details, and teaching-team visibility.",
              "Enabled classmates to set status, share files, view profiles, and access UCSB resources such as Canvas and GOLD."
            ],
            links: [
              { label: "Demo Video", url: "https://www.youtube.com/watch?v=BeckvDo1MlE" }
            ]
          },
          {
            title: "Stock Pulse",
            meta: "Stock tracking and trading simulator",
            bullets: [
              "Integrated Firebase authentication for user login and account management.",
              "Provided real-time stock updates using Yahoo Finance and Finnhub APIs.",
              "Built user watchlists, randomized stock discovery, simulated buy/sell workflows, custom RecycleView layouts, and Firebase/shared-preference storage."
            ],
            links: [
              { label: "Project Site", url: "https://sites.google.com/view/stockpulse" },
              { label: "Source Code", url: "https://github.com/MarcuX009/StockPulse" },
              { label: "Demo Video", url: "https://youtu.be/0XFejCqryRs" }
            ]
          },
          {
            title: "Block-Blogger-Paxos",
            meta: "Distributed systems",
            bullets: [
              "Implemented Multi-Paxos consensus with PREPARE, PROMISE, and ACCEPT stages to coordinate agreement across multiple nodes.",
              "Developed a blockchain mechanism to record system operations for immutability and integrity.",
              "Built a distributed blog system with posts, comments, sockets, multithreading, message passing, and heartbeat mechanisms."
            ],
            links: [
              { label: "Source Code", url: "https://github.com/MarcuX009/Block-Blogger-Paxos" }
            ]
          },
          {
            title: "Piazza-File-Downloader",
            meta: "Python web scraping utility",
            bullets: [
              "Built a Python desktop utility for downloading files from Piazza class sessions.",
              "Used web scraping workflows to retrieve course materials and help organize files for later access."
            ],
            links: [
              { label: "Source Code", url: "https://github.com/MarcuX009/Piazza-File-Downloader" }
            ]
          }
        ]
      },
      skills: {
        title: "Skills",
        kicker: "Tools and languages",
        groups: [
          {
            title: "Programming",
            items: ["C", "C++", "Python", "Java", "JavaScript", "TypeScript", "Swift", "Verilog", "SystemVerilog", "HTML/CSS"]
          },
          {
            title: "Backend / Data / Infrastructure",
            items: ["Node.js", "REST APIs", "Firebase Auth/Firestore", "MySQL", "PostgreSQL", "MongoDB", "Linux", "Docker", "Nginx", "CI/CD", "Git", "MPI", "OpenMP"]
          },
          {
            title: "Frontend / Mobile / AI",
            items: ["React", "React Native", "Vite", "SwiftUI", "CareKit", "HealthKit", "MLX", "Gemini API", "PPO", "Gym", "Stable-Baselines3", "ROS", "SLAM"]
          },
          {
            title: "Languages",
            items: ["English", "Mandarin", "Cantonese"]
          }
        ]
      }
    }
  },
  zh: {
    meta: {
      heroEyebrow: "全栈工程与项目作品集",
      heroSubtitle: "计算机工程研究生，专注业务流程平台、后端 API、实时系统、端侧 AI 原型和分布式数据工具。",
      heroLocation: "洛杉矶，加州",
      footerCopyright: "© 2023-2026 Wenjin Li",
      footerPowered: "由 GitHub Pages 托管",
      footerUpdatedLabel: "最后更新：",
      footerUpdatedDate: "2026 年 5 月 14 日"
    },
    nav: [
      { id: "profile", label: "简介" },
      { id: "education", label: "教育" },
      { id: "experience", label: "经历" },
      { id: "research", label: "研究" },
      { id: "projects", label: "项目" },
      { id: "skills", label: "技能" }
    ],
    sections: {
      profile: {
        title: "技术简介",
        kicker: "后端、数据、AI 与产品交付",
        paragraphs: [
          "全栈与 AI/数据系统工程师，关注面向业务的数据平台、后端 API、实时工作流和 AI 辅助决策工具。",
          "具备 Python、Node.js、React、TypeScript、Swift/iOS、SQL 数据库、Firebase、Linux、Docker 和云端部署经验。",
          "最强项目方向包括运营工作流系统、排课与报表平台、实时数据同步、生产级 Web/API 交付、高性能数据处理和实用 LLM 集成。"
        ]
      },
      education: {
        title: "教育背景",
        kicker: "学术经历",
        entries: [
          {
            title: "南加州大学",
            meta: "洛杉矶，加州 | 2024 年 8 月 - 2026 年 6 月",
            role: "计算机工程硕士 | GPA: 3.75 / 4.0",
            body: ["相关课程：并行与分布式计算、计算机网络、云计算、计算机体系结构、机器学习/人工智能、网络安全"]
          },
          {
            title: "加州大学圣塔芭芭拉分校",
            meta: "圣塔芭芭拉，加州 | 2021 年 9 月 - 2024 年 6 月",
            role: "计算机工程学士 | GPA: 3.29 / 4.00",
            body: ["相关课程：数据结构、分布式系统、FPGA 与 ASIC 设计、智能手机架构、计算机体系结构、移动开发、机器学习/人工智能"]
          },
          {
            title: "帕萨迪纳城市学院",
            meta: "帕萨迪纳，加州 | 2018 年 2 月 - 2021 年 6 月",
            role: "工程与技术、自然科学副学士 | GPA: 3.66 / 4.00"
          }
        ]
      },
      experience: {
        title: "专业经历",
        kicker: "工程交付经验",
        entries: [
          {
            title: "Context Consulting",
            meta: "中国佛山 / 加拿大多伦多 | 2025 年 5 月 - 至今",
            role: "全栈开发工程师 & 项目经理",
            bullets: [
              "使用 React、HTML/CSS 和 JavaScript 构建业务工作流功能，将客户需求转化为响应式 UI 流程和可维护前端组件。",
              "使用 Node.js 和 Python 开发 RESTful API，整合 MySQL/PostgreSQL 数据模型，并为面向客户的运营流程设计后端端点。",
              "使用 Nginx、Docker、CI/CD 自动化和补丁管理部署维护 Linux 服务，支撑生产 Web 与 API 系统。",
              "管理前端、后端、数据库和基础设施工作流的时间线、里程碑、预算与实施优先级。"
            ]
          },
          {
            title: "Rusty Hermit",
            meta: "洛杉矶，加州 | 2023 年 12 月 - 2024 年 6 月",
            role: "软件工程实习生",
            bullets: [
              "使用 Python GUI 工作流和 Firebase API 构建自动化仓库管理系统，支撑云端运营数据。",
              "通过减少人工更新、集中运营状态和提升仓库模块可见性，优化库存追踪与订单履约流程。",
              "通过 Firebase 云端数据流实现 5+ 仓库模块的实时数据同步，提高库存与订单状态一致性。",
              "构建安全用户认证和月度绩效报表流程，并根据客户和运营反馈迭代 UI。"
            ]
          },
          {
            title: "Apexus-Tech",
            meta: "纽约，纽约州 | 2023 年 8 月 - 2023 年 11 月",
            role: "开发实习生",
            bullets: [
              "构建 Python 和 SQL 工具，用于市场数据采集、清洗和分析，支持算法交易研究与策略评估。",
              "优化交易工作负载的软件执行路径和硬件配置假设，将处理延迟降低 20%。",
              "将机器学习模型应用于交易信号，将预测准确率提升 25%，支持动态市场下的执行策略调整。",
              "与 IT 相关方评估软硬件兼容性约束，提高专有交易基础设施可靠性。"
            ]
          }
        ]
      },
      research: {
        title: "研究经历",
        kicker: "应用系统与自主导航",
        entries: [
          {
            title: "NetRecon Lab",
            meta: "洛杉矶，加州 | 2025 年 5 月 - 2025 年 8 月",
            role: "研究生研究助理",
            bullets: [
              "结合 CareKit 任务数据、HealthKit 传感器数据和患者元数据，开发端侧 AI 笔记生成 iOS 原型。",
              "将 1.7B 参数语言模型量化到 4-bit 并通过 MLX 部署到 iPhone 14 Pro，在保持笔记质量的同时达到 40 tokens/sec。",
              "构建 SwiftUI 前端和安全推理管线，使所有患者数据处理都留在设备端，支撑 HIPAA 对齐的边缘处理。"
            ]
          },
          {
            title: "Kayak Drone Testbed (USV)",
            meta: "圣塔芭芭拉，加州 | 2023 年 9 月 - 2024 年 6 月",
            role: "核心成员",
            bullets: [
              "带领 5 人工程团队构建由 AeroVironment 赞助的无人水面艇，用于海岸测绘和 GPS 受限海上环境。",
              "使用 ROS 构建并部署基于雷达的 SLAM，提升复杂海上环境中的实时建图和自主导航能力。",
              "设计 MESH 无线电收发器软件并调优通信参数，实现最远 10 km 的稳定水面探索数据链路。",
              "共同撰写论文：\"Adopting Radar-Based SLAM in Autonomous Maritime Vehicles for Robust Environmental Exploration.\""
            ],
            links: [
              { label: "演示视频", url: "https://youtu.be/DdH11Z4zw8o" },
              { label: "海报", url: "https://web.ece.ucsb.edu/~yoga/capstone/static/img/projects/poster/usv_po.pdf" },
              { label: "论文", url: "http://hdl.handle.net/10150/675424" },
              { label: "代码仓库", url: "https://github.com/Aquatic-Drone-Testbed" }
            ],
            note: "指导老师：Dr. Yogananda Isukapalli | 赞助方：AeroVironment"
          }
        ]
      },
      projects: {
        title: "项目",
        kicker: "代表性工程作品",
        entries: [
          {
            title: "Harmony Scheduler",
            meta: "洛杉矶，加州 | 2025 年 6 月 - 2025 年 12 月",
            role: "学校运营平台",
            bullets: [
              "使用 React 19、TypeScript、Vite 和 Firebase Auth/Firestore 构建面向管理员、教师和学生的多角色排课平台。",
              "实现学期设置、教师时段管理、学生报名/退课、日历课程视图和跨用户课表可见性。",
              "开发 Firebase 支撑的认证、用户元数据、实时消息/已读状态流程和教师/学生通信中的在线状态检查。",
              "集成 Gemini API，并为排课、学费记录、换课请求、消息和学校运营数据设计结构化 TypeScript 模型。"
            ]
          },
          {
            title: "High-Performance Distributed MPP Query Engine",
            meta: "洛杉矶，加州 | 2026 年 1 月 - 2026 年 5 月",
            role: "并行与分布式计算",
            bullets: [
              "使用 C++17、MPI/OpenMP 构建分布式内存 MPP 查询引擎，面向 2000 万到 4000 万销售行的星型模式分析负载。",
              "实现密集键映射、列式聚合、倾斜缓解和全局归约逻辑，用于营收分析工作负载。",
              "通过 OpenMP 线程私有缓冲区和 MPI 通信重叠，将 2000 万行极端倾斜查询从串行 194.045 ms 降至 73.75 ms。"
            ]
          },
          {
            title: "LLM-Generated Rewards for Reinforcement Learning",
            meta: "洛杉矶，加州 | 2025 年 8 月 - 2025 年 12 月",
            role: "强化学习",
            bullets: [
              "为 Gym 环境中的 PPO 智能体构建轨迹级 LLM 奖励塑形框架，使用 episode 摘要、分数缓存和终止奖励。",
              "生成学习曲线可视化和验证分析，显示 LunarLander-v2 峰值平均回报相较 baseline PPO 有提升。"
            ]
          },
          {
            title: "Vending Machine",
            meta: "嵌入式系统",
            bullets: [
              "设计并开发投币售货机，可根据用户选择识别硬币并出货。",
              "使用红外避障传感器检测管道中的硬币，并触发 STM32 中断。",
              "使用 2.8 英寸 SPI TFT LCD、Wii Nunchuck 控制器和 Termite UART 管理界面构建交互流程。",
              "通过 STM32 控制四个电机完成商品出货。"
            ],
            links: [
              { label: "项目页面", url: "https://sites.google.com/view/ece-153b-vending-machine/home" },
              { label: "演示视频", url: "https://youtu.be/CN42yPagX8k" }
            ]
          },
          {
            title: "UCSB Coral",
            meta: "学生排课与课程群聊",
            bullets: [
              "构建 UCSB 学生专用排课与班级沟通应用，支持季度自动课表和课程群聊。",
              "支持 UCSB 邮箱安全登录、卡片课表、日历视图、课程详情和教学团队信息展示。",
              "支持同学设置状态、共享文件、查看个人资料，并访问 Canvas 和 GOLD 等 UCSB 资源。"
            ],
            links: [
              { label: "演示视频", url: "https://www.youtube.com/watch?v=BeckvDo1MlE" }
            ]
          },
          {
            title: "Stock Pulse",
            meta: "股票追踪与交易模拟",
            bullets: [
              "集成 Firebase Authentication 管理用户登录和账号认证。",
              "使用 Yahoo Finance 和 Finnhub API 提供实时股票价格更新。",
              "构建自选股、随机股票展示、买卖模拟、定制 RecycleView 布局，以及 Firebase/shared preferences 数据存储。"
            ],
            links: [
              { label: "项目页面", url: "https://sites.google.com/view/stockpulse" },
              { label: "源码", url: "https://github.com/MarcuX009/StockPulse" },
              { label: "演示视频", url: "https://youtu.be/0XFejCqryRs" }
            ]
          },
          {
            title: "Block-Blogger-Paxos",
            meta: "分布式系统",
            bullets: [
              "实现 Multi-Paxos 共识算法，通过 PREPARE、PROMISE 和 ACCEPT 阶段协调多个节点达成一致。",
              "开发区块链机制记录系统操作，保障不可变性和完整性。",
              "构建分布式博客系统，支持帖子、评论、socket、多线程、消息传递和心跳机制。"
            ],
            links: [
              { label: "源码", url: "https://github.com/MarcuX009/Block-Blogger-Paxos" }
            ]
          },
          {
            title: "Piazza-File-Downloader",
            meta: "Python 网页抓取工具",
            bullets: [
              "构建 Python 桌面工具，用于从 Piazza 课程 session 下载文件。",
              "使用网页抓取流程获取课程资料，帮助整理和后续访问文件。"
            ],
            links: [
              { label: "源码", url: "https://github.com/MarcuX009/Piazza-File-Downloader" }
            ]
          }
        ]
      },
      skills: {
        title: "技能",
        kicker: "工具与语言",
        groups: [
          {
            title: "编程语言",
            items: ["C", "C++", "Python", "Java", "JavaScript", "TypeScript", "Swift", "Verilog", "SystemVerilog", "HTML/CSS"]
          },
          {
            title: "后端 / 数据 / 基础设施",
            items: ["Node.js", "REST APIs", "Firebase Auth/Firestore", "MySQL", "PostgreSQL", "MongoDB", "Linux", "Docker", "Nginx", "CI/CD", "Git", "MPI", "OpenMP"]
          },
          {
            title: "前端 / 移动端 / AI",
            items: ["React", "React Native", "Vite", "SwiftUI", "CareKit", "HealthKit", "MLX", "Gemini API", "PPO", "Gym", "Stable-Baselines3", "ROS", "SLAM"]
          },
          {
            title: "语言",
            items: ["英语", "普通话", "粤语"]
          }
        ]
      }
    }
  }
};
