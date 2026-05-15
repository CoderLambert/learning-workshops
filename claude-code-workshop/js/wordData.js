const WordRoots = [
  {
    id: 1,
    root: "Claude Code 简介",
    origin: "基础入门",
    meaning: "Anthropic推出的AI代码助手",
    difficulty: "入门级",
    duration: "5分钟",
    description: "Claude Code是Anthropic公司推出的专业AI代码助手，基于Claude 3系列大模型，支持代码生成、解释、调试、重构等全场景开发需求，支持100+编程语言，上下文窗口最高可达200K tokens，适合大型项目级开发任务。",
    examples: [
      {
        word: "核心优势",
        meaning: "对比其他AI代码助手的特点",
        breakdown: { root: "基础入门" },
        explanation: "超长上下文支持、代码质量更高、安全性更好、支持复杂项目级任务、支持多轮深度协作开发"
      },
      {
        word: "支持能力",
        meaning: "覆盖全开发流程",
        breakdown: { root: "基础入门" },
        explanation: "需求分析→架构设计→代码生成→调试排错→重构优化→测试编写→文档生成全流程支持"
      },
      {
        word: "适用场景",
        meaning: "适合的开发任务类型",
        breakdown: { root: "基础入门" },
        explanation: "新项目开发、遗留项目维护、bug排查、性能优化、代码审查、技术选型、学习新技术栈"
      }
    ],
    quiz: {
      question: "Claude Code是哪家公司推出的产品？",
      options: ["OpenAI", "Anthropic", "Google", "微软"],
      correctAnswer: 1
    }
  },
  {
    id: 2,
    root: "账号开通与访问",
    origin: "基础入门",
    meaning: "如何获取和使用Claude Code",
    difficulty: "入门级",
    duration: "5分钟",
    description: "Claude Code可以通过两种方式使用：网页版直接访问anthropic.com/code，或者通过IDE插件（VS Code、JetBrains系列）使用，需要注册Anthropic账号并开通Claude Pro订阅，也可以通过API方式调用集成到自有开发流程中。",
    examples: [
      {
        word: "访问方式",
        meaning: "多端支持",
        breakdown: { root: "基础入门" },
        explanation: "网页版：https://anthropic.com/code；IDE插件：VS Code插件市场搜索\"Claude Code\"；API：通过Anthropic官方API调用"
      },
      {
        word: "订阅方案",
        meaning: "收费模式",
        breakdown: { root: "基础入门" },
        explanation: "Claude Pro订阅：$20/月，包含优先访问、更高使用限额、高级功能；API按token计费，灵活按需付费"
      },
      {
        word: "支持地区",
        meaning: "可用区域",
        breakdown: { root: "基础入门" },
        explanation: "目前支持全球大部分地区访问，中国大陆地区需要通过合法合规的网络方式访问使用"
      }
    ],
    quiz: {
      question: "以下哪种方式不能使用Claude Code？",
      options: ["网页版", "VS Code插件", "微信小程序", "API调用"],
      correctAnswer: 2
    }
  },
  {
    id: 3,
    root: "核心功能 - 代码生成",
    origin: "核心功能",
    meaning: "根据需求自动生成高质量代码",
    difficulty: "入门级",
    duration: "8分钟",
    description: "Claude Code支持根据自然语言描述生成各种编程语言的代码，从简单函数到复杂项目模块都可以生成，生成的代码结构清晰、注释完善、符合最佳实践，支持边生成边调整需求，迭代优化代码。",
    examples: [
      {
        word: "多语言支持",
        meaning: "支持100+编程语言",
        breakdown: { root: "核心功能" },
        explanation: "Python/JavaScript/TypeScript/Java/C++/Go/Rust/Swift/Kotlin等主流语言全覆盖，同时支持各种框架和库的代码生成"
      },
      {
        word: "生成方式",
        meaning: "灵活的生成模式",
        breakdown: { root: "核心功能" },
        explanation: "从零生成完整模块、在现有代码基础上新增功能、根据注释生成对应代码、补全缺失的代码片段、根据伪代码生成真实代码"
      },
      {
        word: "质量保障",
        meaning: "生成代码符合最佳实践",
        breakdown: { root: "核心功能" },
        explanation: "自动遵循语言规范、包含完善注释、错误处理完善、考虑性能优化、安全漏洞少、可维护性高"
      }
    ],
    quiz: {
      question: "Claude Code生成代码时不会自动做以下哪项？",
      options: ["遵循语言规范", "添加完善注释", "自动部署上线", "考虑错误处理"],
      correctAnswer: 2
    }
  },
  {
    id: 4,
    root: "核心功能 - 代码调试",
    origin: "核心功能",
    meaning: "快速定位和修复代码bug",
    difficulty: "入门级",
    duration: "8分钟",
    description: "Claude Code可以帮助分析错误日志、定位bug原因、提供修复方案，甚至可以直接给出修复后的代码，支持各种复杂问题的调试，包括并发问题、内存泄漏、性能瓶颈等难以排查的问题。",
    examples: [
      {
        word: "错误分析",
        meaning: "解读错误日志",
        breakdown: { root: "核心功能" },
        explanation: "粘贴错误日志和相关代码，Claude Code会自动分析错误原因、定位问题位置、解释错误根源、提供修复方案"
      },
      {
        word: "复杂问题排查",
        meaning: "处理难以定位的问题",
        breakdown: { root: "核心功能" },
        explanation: "并发冲突、内存泄漏、性能瓶颈、偶现bug、跨模块问题、依赖冲突等复杂问题都可以辅助排查"
      },
      {
        word: "调试建议",
        meaning: "提供调试思路",
        breakdown: { root: "核心功能" },
        explanation: "提供调试步骤建议、建议添加的日志点、推荐使用的调试工具、帮助梳理排查思路"
      }
    ],
    quiz: {
      question: "关于Claude Code调试功能，以下说法错误的是？",
      options: ["可以分析错误日志", "可以直接修复所有bug", "可以提供调试思路", "可以排查复杂并发问题"],
      correctAnswer: 1
    }
  },
  {
    id: 5,
    root: "核心功能 - 代码重构",
    origin: "核心功能",
    meaning: "优化现有代码质量和结构",
    difficulty: "进阶",
    duration: "10分钟",
    description: "Claude Code可以帮助对现有代码进行重构优化，提升代码的可读性、可维护性、性能和安全性，支持各种重构操作：重命名、提取函数、优化结构、消除重复代码、替换过时API、升级框架版本等。",
    examples: [
      {
        word: "重构类型",
        meaning: "支持各种重构操作",
        breakdown: { root: "核心功能" },
        explanation: "代码结构优化、重复代码消除、命名规范化、函数拆分/合并、类结构优化、设计模式应用、性能优化、安全加固"
      },
      {
        word: "保持功能不变",
        meaning: "重构不改变原有功能",
        breakdown: { root: "核心功能" },
        explanation: "重构时会保证功能完全一致，只会优化代码结构和质量，不会引入新的功能或改变原有行为，降低重构风险"
      },
      {
        word: "重构说明",
        meaning: "提供详细重构解释",
        breakdown: { root: "核心功能" },
        explanation: "会解释重构的原因、重构前后的对比、带来的好处、需要注意的风险点，帮助理解重构的价值"
      }
    ],
    quiz: {
      question: "代码重构的核心目标是什么？",
      options: ["增加新功能", "优化代码质量保持功能不变", "提高运行速度", "减少代码行数"],
      correctAnswer: 1
    }
  },
  {
    id: 6,
    root: "提示词最佳实践",
    origin: "使用技巧",
    meaning: "写出高质量提示词获得更好结果",
    difficulty: "进阶",
    duration: "10分钟",
    description: "要获得更好的Claude Code使用效果，需要掌握提示词编写技巧：明确需求、提供足够上下文、给出示例、说明约束条件、分步骤提出需求，避免模糊和歧义的描述，让Claude Code准确理解你的意图。",
    examples: [
      {
        word: "提示词结构",
        meaning: "标准提示词结构",
        breakdown: { root: "使用技巧" },
        explanation: "1. 明确任务目标 2. 提供相关上下文（代码、文档、错误日志等）3. 说明约束条件（技术栈、规范、性能要求等）4. 给出输出要求（格式、风格、注释要求等）"
      },
      {
        word: "上下文管理",
        meaning: "有效控制上下文",
        breakdown: { root: "使用技巧" },
        explanation: "只提供相关的上下文，避免无关信息干扰；大文件可以只提供相关片段；上下文太长时分批次提供；定期清理无用的上下文信息"
      },
      {
        word: "迭代优化",
        meaning: "多轮迭代完善结果",
        breakdown: { root: "使用技巧" },
        explanation: "不要期望一次就得到完美结果，先得到基础版本，然后逐步提出修改意见，迭代优化，最终达到满意的效果，比一次性描述所有需求效率更高"
      }
    ],
    quiz: {
      question: "以下哪种提示词写法效果最好？",
      options: ["帮我写个登录接口", "帮我用Node.js + Express写个登录接口，参数是手机号和验证码，返回token，需要做参数校验、限流、错误处理，符合RESTful规范", "写个接口", "写个登录功能"],
      correctAnswer: 1
    }
  },
  {
    id: 7,
    root: "项目级开发支持",
    origin: "高级用法",
    meaning: "支持大型复杂项目开发",
    difficulty: "进阶",
    duration: "12分钟",
    description: "Claude Code支持大型项目级开发任务，可以理解整个项目的结构和逻辑，提供全流程支持：需求分析、架构设计、模块拆分、代码编写、测试编写、文档生成、部署建议，支持多轮协作完成整个项目开发。",
    examples: [
      {
        word: "项目理解",
        meaning: "理解整个项目结构",
        breakdown: { root: "高级用法" },
        explanation: "可以导入整个项目的代码结构，理解项目的架构、模块依赖、技术栈、编码规范，生成的代码符合项目整体风格和规范"
      },
      {
        word: "架构设计",
        meaning: "协助设计项目架构",
        breakdown: { root: "高级用法" },
        explanation: "协助进行技术选型、架构设计、数据库设计、接口设计、模块拆分、部署方案设计，提供专业的架构建议和最佳实践参考"
      },
      {
        word: "全流程协作",
        meaning: "端到端项目开发支持",
        breakdown: { root: "高级用法" },
        explanation: "从需求评审到上线部署的全流程支持，协助拆解任务、制定开发计划、编写各个模块代码、排查开发中的问题、指导测试和上线"
      }
    ],
    quiz: {
      question: "Claude Code支持大型项目开发的核心原因是？",
      options: ["生成速度快", "支持超长上下文窗口", "收费更便宜", "界面更美观"],
      correctAnswer: 1
    }
  },
  {
    id: 8,
    root: "API调用与集成",
    origin: "高级用法",
    meaning: "将Claude Code集成到自有开发流程",
    difficulty: "进阶",
    duration: "12分钟",
    description: "可以通过Anthropic官方API将Claude Code能力集成到自己的开发流程、IDE、CI/CD系统中，实现自定义的开发工作流，比如自动代码审查、自动bug修复、自动生成测试用例等自动化流程。",
    examples: [
      {
        word: "API能力",
        meaning: "API支持的功能",
        breakdown: { root: "高级用法" },
        explanation: "文本生成、代码生成、代码理解、多模态理解（支持图片输入）、函数调用、流式输出，所有网页版功能都可以通过API调用"
      },
      {
        word: "集成场景",
        meaning: "常见的集成场景",
        breakdown: { root: "高级用法" },
        explanation: "IDE插件集成、CI/CD自动代码审查、自动测试用例生成、知识库问答系统、自定义开发辅助工具、低代码平台集成"
      },
      {
        word: "调用方式",
        meaning: "API调用方法",
        breakdown: { root: "高级用法" },
        explanation: "支持HTTP REST调用、各语言SDK（Python/JavaScript/Java/Go等），支持流式响应，可灵活集成到各种系统中"
      }
    ],
    quiz: {
      question: "Claude API不支持以下哪种能力？",
      options: ["代码生成", "图片理解", "语音合成", "函数调用"],
      correctAnswer: 2
    }
  },
  {
    id: 9,
    root: "安全最佳实践",
    origin: "最佳实践",
    meaning: "安全使用Claude Code的注意事项",
    difficulty: "入门级",
    duration: "8分钟",
    description: "使用Claude Code时需要注意安全问题：不要上传敏感代码和数据到公共服务、对生成的代码进行安全审查、注意知识产权问题、遵守公司安全规范、避免生成恶意代码、敏感场景使用私有部署版本。",
    examples: [
      {
        word: "数据安全",
        meaning: "保护敏感数据",
        breakdown: { root: "最佳实践" },
        explanation: "不要上传公司涉密代码、用户隐私数据、密钥、密码等敏感信息到公共Claude服务，敏感场景使用私有部署的版本或者对敏感信息进行脱敏处理"
      },
      {
        word: "代码审查",
        meaning: "生成代码需要审查",
        breakdown: { root: "最佳实践" },
        explanation: "Claude生成的代码虽然质量较高，但仍然可能存在安全漏洞、bug或者不符合业务需求的地方，上线前必须经过严格的代码审查和测试"
      },
      {
        word: "知识产权",
        meaning: "注意知识产权问题",
        breakdown: { root: "最佳实践" },
        explanation: "生成的代码可能涉及知识产权问题，使用前需要确认合规性，重要项目建议进行知识产权扫描，避免侵权风险"
      }
    ],
    quiz: {
      question: "使用Claude Code时以下哪种行为是安全的？",
      options: ["直接上传公司涉密代码", "生成代码直接上线不测试", "对敏感信息脱敏后再上传", "生成恶意代码测试"],
      correctAnswer: 2
    }
  },
  {
    id: 10,
    root: "常见问题排查",
    origin: "最佳实践",
    meaning: "使用过程中常见问题的解决方法",
    difficulty: "入门级",
    duration: "8分钟",
    description: "使用Claude Code过程中常见的问题及解决方法：生成结果不符合预期、上下文太长报错、访问速度慢、API调用失败、生成代码有bug等问题的排查思路和解决方案。",
    examples: [
      {
        word: "结果不符合预期",
        meaning: "生成结果不对怎么办",
        breakdown: { root: "最佳实践" },
        explanation: "优化提示词，提供更明确的需求和更多上下文；指出具体哪里不符合要求，让Claude调整；分步骤提出需求，不要一次要求太多复杂功能"
      },
      {
        word: "上下文过长错误",
        meaning: "提示太长报错怎么办",
        breakdown: { root: "最佳实践" },
        explanation: "精简上下文，只保留相关信息；拆分需求为多个小任务分批处理；删除之前对话中无用的历史信息；使用更大上下文窗口的模型版本"
      },
      {
        word: "访问速度慢",
        meaning: "响应速度慢怎么办",
        breakdown: { root: "最佳实践" },
        explanation: "检查网络连接；减少提示词长度；简化需求复杂度；选择合适的模型版本（小模型速度更快）；高峰时段错峰使用"
      }
    ],
    quiz: {
      question: "遇到上下文过长报错时，以下哪种处理方式不对？",
      options: ["精简上下文只保留相关信息", "拆分需求分批处理", "删除无用的历史对话", "重复发送相同请求"],
      correctAnswer: 3
    }
  },
  {
    id: 11,
    root: "安装与环境配置",
    origin: "进阶使用",
    meaning: "多平台安装与环境配置指南",
    difficulty: "入门级",
    duration: "8分钟",
    description: "详细讲解Claude Code在不同操作系统的安装方式、国内用户特殊配置、版本升级、常见安装问题解决，支持终端、IDE插件、API等多种部署方式。",
    examples: [
      {
        word: "系统要求",
        meaning: "前置环境依赖",
        breakdown: { root: "进阶使用" },
        explanation: "Node.js 18+ 版本；macOS/Linux/Windows全系统支持；IDE版本支持VS Code 1.80+、JetBrains系列2023.1+"
      },
      {
        word: "安装方式",
        meaning: "不同安装渠道",
        breakdown: { root: "进阶使用" },
        explanation: "官方脚本安装：curl -fsSL https://claude.ai/install.sh | bash；npm安装：npm install -g @anthropic-ai/claude-code；brew安装：brew install --cask claude-code；国内阿里云百炼用户需配置ANTHROPIC_BASE_URL环境变量"
      },
      {
        word: "验证与更新",
        meaning: "版本管理",
        breakdown: { root: "进阶使用" },
        explanation: "验证安装：claude --version；版本更新：claude update；卸载：claude uninstall；查看配置：claude config list"
      }
    ],
    quiz: {
      question: "Claude Code运行需要的最低Node.js版本是多少？",
      options: ["Node.js 16", "Node.js 18", "Node.js 20", "Node.js 22"],
      correctAnswer: 1
    }
  },
  {
    id: 12,
    root: "核心命令与启动参数",
    origin: "进阶使用",
    meaning: "常用命令与高级启动参数详解",
    difficulty: "进阶",
    duration: "10分钟",
    description: "全面覆盖Claude Code的常用命令、启动参数、会话控制技巧，帮助你快速定制适合自己的工作流，大幅提升开发效率。",
    examples: [
      {
        word: "基础启动参数",
        meaning: "常用启动选项",
        breakdown: { root: "进阶使用" },
        explanation: "直接执行任务：claude -p '检查代码风格问题'；添加额外工作目录：--add-dir ../lib ../apps；替换系统提示词：--system-prompt '只回答TypeScript相关问题'；追加系统提示词：--append-system-prompt '始终添加完善的类型标注'"
      },
      {
        word: "会话管理命令",
        meaning: "历史会话管理",
        breakdown: { root: "进阶使用" },
        explanation: "列出历史会话：claude sessions list；恢复会话：claude sessions resume <id>；导出会话：claude sessions export <id>；删除会话：claude sessions delete <id>"
      },
      {
        word: "输出控制参数",
        meaning: "自定义输出方式",
        breakdown: { root: "进阶使用" },
        explanation: "输出到文件：claude -p '生成README文档' > README.md；静默模式：--quiet；JSON输出：--json；调试模式：--debug"
      }
    ],
    quiz: {
      question: "以下哪个参数可以添加多个额外的工作目录？",
      options: ["--work-dir", "--add-dir", "--extra-dir", "--project-dir"],
      correctAnswer: 1
    }
  },
  {
    id: 13,
    root: "Git与代码操作技巧",
    origin: "实战技巧",
    meaning: "Git协作与代码操作最佳实践",
    difficulty: "进阶",
    duration: "10分钟",
    description: "Claude Code深度集成Git工作流，可以自动完成代码审查、提交信息生成、版本回退、冲突解决等常见Git操作，大幅提升协作效率。",
    examples: [
      {
        word: "代码审查工作流",
        meaning: "自动代码审查",
        breakdown: { root: "实战技巧" },
        explanation: "审查当前修改：claude -p '审查git diff的代码，指出问题和优化建议'；生成commit信息：claude -p '根据git diff生成符合Conventional Commits规范的提交信息'；检查代码规范：claude -p '检查修改的代码是否符合ESLint/TSLint规范，自动修复可修复的问题'"
      },
      {
        word: "Monorepo支持",
        meaning: "多包项目适配",
        breakdown: { root: "实战技巧" },
        explanation: "Monorepo项目使用--add-dir参数添加多个子包目录；支持pnpm/yarn/npm workspace自动识别；跨包重构时自动同步依赖和类型定义"
      },
      {
        word: "版本管理辅助",
        meaning: "Git操作自动化",
        breakdown: { root: "实战技巧" },
        explanation: "自动解决代码冲突：claude -p '解决当前的Git冲突，保留两边的有效修改'；生成Changelog：claude -p '根据git log生成新版本的Changelog'；版本号自动升级：claude -p '升级package.json的版本号，自动更新相关引用'"
      }
    ],
    quiz: {
      question: "Claude Code生成的提交信息默认遵循什么规范？",
      options: ["Angular Commit规范", "Conventional Commits规范", "自定义规范", "Gitmoji规范"],
      correctAnswer: 1
    }
  },
  {
    id: 14,
    root: "高级工作模式",
    origin: "实战技巧",
    meaning: "自动接受、计划模式等高级功能",
    difficulty: "进阶",
    duration: "8分钟",
    description: "Claude Code提供多种高级工作模式，适合不同场景使用，包括自动接受模式、计划只读模式、调试模式等，可以大幅提升复杂任务的处理效率。",
    examples: [
      {
        word: "Auto-Accept模式",
        meaning: "自动接受修改",
        breakdown: { root: "实战技巧" },
        explanation: "使用!auto-accept命令开启自动接受模式，文件修改会自动执行，无需手动确认，适合简单任务快速迭代；Shell命令仍需手动确认，保障安全；可以设置只接受指定类型的修改"
      },
      {
        word: "Plan模式",
        meaning: "只读规划模式",
        breakdown: { root: "实战技巧" },
        explanation: "使用!plan命令开启计划模式，Claude只会分析问题和给出执行计划，不会做任何实际修改；适合复杂任务先评估方案，确认后再执行，降低风险"
      },
      {
        word: "会话上下文管理",
        meaning: "上下文优化技巧",
        breakdown: { root: "实战技巧" },
        explanation: "使用!clear命令清空上下文，避免历史信息干扰；使用!forget命令忘记最近的N条消息；使用!save命令保存当前会话到文件，后续可以恢复"
      }
    ],
    quiz: {
      question: "以下哪种模式下Claude不会修改任何文件？",
      options: ["Auto-Accept模式", "Plan模式", "Debug模式", "正常模式"],
      correctAnswer: 1
    }
  },
  {
    id: 15,
    root: "高级特性详解",
    origin: "高级功能",
    meaning: "MCP/Skills/SubAgents/Plugins核心特性",
    difficulty: "进阶",
    duration: "15分钟",
    description: "全面讲解Claude Code的五大核心高级特性：Plugins插件、MCP模型上下文协议、Skills技能包、SubAgents子代理、Slash Commands斜杠命令，掌握这些特性可以发挥Claude Code的全部潜力。",
    examples: [
      {
        word: "MCP协议",
        meaning: "外部能力连接器",
        breakdown: { root: "高级功能" },
        explanation: "MCP（Model Context Protocol）是Claude访问外部资源的标准协议，支持文件系统、网络搜索、数据库、API等外部能力；内置常用MCP服务器：filesystem文件访问、brave-search网络搜索、github仓库操作、playwright浏览器自动化等"
      },
      {
        word: "Skills技能包",
        meaning: "自动SOP工作流",
        breakdown: { root: "高级功能" },
        explanation: "Skills是可复用的标准化作业流程，Claude会根据场景自动触发；常用技能：代码审查、测试生成、文档生成、部署发布、故障排查等；支持自定义开发私有技能包"
      },
      {
        word: "SubAgents子代理",
        meaning: "任务拆分执行",
        breakdown: { root: "高级功能" },
        explanation: "复杂任务可以拆分为多个子任务，交给不同的子代理并行执行；子代理有独立的上下文和工具权限，执行完成后汇总结果；适合大型项目重构、多模块开发等复杂场景"
      },
      {
        word: "Slash Commands斜杠命令",
        meaning: "快捷操作指令",
        breakdown: { root: "高级功能" },
        explanation: "输入/开头的斜杠命令可以快速执行常用操作：/release发布版本、/test生成测试、/docs生成文档、/debug调试问题等；支持自定义斜杠命令"
      }
    ],
    quiz: {
      question: "Claude Code中用来访问外部资源的协议是什么？",
      options: ["MCP协议", "HTTP协议", "GraphQL协议", "REST协议"],
      correctAnswer: 0
    }
  },
  {
    id: 16,
    root: "团队协作最佳实践",
    origin: "最佳实践",
    meaning: "企业团队使用Claude Code的规范与技巧",
    difficulty: "进阶",
    duration: "10分钟",
    description: "针对企业团队使用场景，分享Claude Code的权限管理、协作规范、自定义技能开发、安全审计等最佳实践，帮助团队安全高效地使用AI辅助开发。",
    examples: [
      {
        word: "安全规范",
        meaning: "数据安全保障",
        breakdown: { root: "最佳实践" },
        explanation: "敏感代码不上传到公共Claude服务，使用私有部署版本；开启操作审计，所有文件修改和命令执行都有日志记录；禁止AI执行高危命令：rm -rf、数据库修改等操作默认需要二次确认"
      },
      {
        word: "团队自定义配置",
        meaning: "统一团队工作流",
        breakdown: { root: "最佳实践" },
        explanation: "团队统一配置共享系统提示词，强制遵循团队代码规范；开发团队私有技能包，适配内部技术栈和工作流；统一MCP配置，共享内部服务访问能力"
      },
      {
        word: "效率提升技巧",
        meaning: "团队协作提效",
        breakdown: { root: "最佳实践" },
        explanation: "Code Review阶段使用Claude做第一轮自动审查，减少人工工作量；新人入职使用Claude辅助学习项目代码和技术栈；公共组件开发自动生成文档和测试用例"
      }
    ],
    quiz: {
      question: "企业团队使用Claude Code时，以下哪种做法是不安全的？",
      options: ["开启操作审计", "使用私有部署版本", "直接上传包含敏感信息的代码", "高危命令二次确认"],
      correctAnswer: 2
    }
  }
]
window.WordRoots = WordRoots;