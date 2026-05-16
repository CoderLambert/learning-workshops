const WordRoots = [
  {
    id: 1,
    root: "TypeScript 简介",
    origin: "基础入门",
    meaning: "带类型系统的JavaScript超集",
    difficulty: "基础",
    duration: "5分钟",
    description: "TypeScript是微软开发的JavaScript超集，为JS添加了可选的静态类型系统，在运行前就能发现代码中的类型错误，大幅提升大型项目的可维护性和开发效率，支持最新的ECMAScript特性，编译后可以运行在任何支持JS的环境中。最新稳定版本为TypeScript 5.5。",
    examples: [
      {
        word: "核心优势",
        meaning: "对比原生JavaScript的优势",
        breakdown: { root: "基础入门" },
        explanation: "静态类型检查、智能代码提示、更好的IDE支持、重构更安全、代码可读性更高、适合大型团队协作、提前发现潜在bug、生态系统完善"
      },
      {
        word: "应用场景",
        meaning: "适合的项目类型",
        breakdown: { root: "基础入门" },
        explanation: "大型前端项目、全栈项目、团队协作项目、长期维护的项目、库和框架开发、对代码质量要求高的项目"
      },
      {
        word: "运行方式",
        meaning: "如何执行TypeScript代码",
        breakdown: { root: "基础入门" },
        explanation: "通过tsc编译器编译为JavaScript执行、ts-node直接运行、打包工具（Vite/Webpack/Rollup）集成编译、在线运行环境直接运行"
      }
    ],
    quiz: {
      question: "TypeScript编译后最终运行的是什么语言？",
      options: ["TypeScript", "JavaScript", "Java", "C#"],
      correctAnswer: 1
    }
  },
  {
    id: 2,
    root: "环境安装与配置",
    origin: "基础入门",
    meaning: "安装和配置TypeScript开发环境",
    difficulty: "基础",
    duration: "6分钟",
    description: "TypeScript可以通过npm全局安装，也可以在项目中局部安装，配置文件tsconfig.json用于配置编译选项，包括目标版本、模块系统、严格模式、输出目录等各种编译参数，最新版本还支持自动类型检测和配置优化。",
    examples: [
      {
        word: "安装方式",
        meaning: "不同的安装方式",
        breakdown: { root: "基础入门" },
        explanation: "全局安装：npm install -g typescript；项目局部安装：npm install -D typescript；查看版本：tsc -v；初始化配置：tsc --init"
      },
      {
        word: "核心配置项",
        meaning: "tsconfig.json常用配置",
        breakdown: { root: "基础入门" },
        explanation: "target：编译目标JS版本；module：模块系统；strict：开启严格模式；outDir：输出目录；rootDir：源码目录；esModuleInterop：ES模块兼容性；skipLibCheck：跳过库文件类型检查"
      },
      {
        word: "最新配置优化",
        meaning: "TS 5.0+新增的配置项",
        breakdown: { root: "基础入门" },
        explanation: "verbatimModuleSyntax：精确模块语法；allowImportingTsExtensions：允许导入TS扩展名；noUncheckedSideEffectImports：无副作用导入检查；moduleResolution：支持NodeNext等新的模块解析策略"
      }
    ],
    quiz: {
      question: "TypeScript的配置文件名是什么？",
      options: ["tsconfig.json", "config.json", "ts.json", "typescript.json"],
      correctAnswer: 0
    }
  },
  {
    id: 3,
    root: "基础类型系统",
    origin: "核心特性",
    meaning: "TypeScript的基础类型",
    difficulty: "基础",
    duration: "8分钟",
    description: "TypeScript提供了丰富的基础类型系统，包括JS原始类型的类型标注：string、number、boolean、null、undefined、symbol、bigint，还有any、unknown、never、void等特殊类型，以及数组、元组、枚举等复合类型。",
    examples: [
      {
        word: "原始类型标注",
        meaning: "基础类型的标注方式",
        breakdown: { root: "核心特性" },
        explanation: "const name: string = '张三'; const age: number = 25; const isStudent: boolean = true; const count: bigint = 100n; const sym: symbol = Symbol('id');"
      },
      {
        word: "特殊类型",
        meaning: "特殊类型的使用场景",
        breakdown: { root: "核心特性" },
        explanation: "any：任意类型，跳过类型检查；unknown：未知类型，需要类型断言才能使用；never：永远不会返回的类型；void：没有返回值的函数返回类型"
      },
      {
        word: "复合基础类型",
        meaning: "数组、元组、枚举的使用",
        breakdown: { root: "核心特性" },
        explanation: "数组：const arr: number[] = [1,2,3] 或 Array<number>；元组：const tuple: [string, number] = ['张三', 25]; 枚举：enum Color { Red, Green, Blue }"
      }
    ],
    quiz: {
      question: "以下哪种类型可以跳过TypeScript的类型检查？",
      options: ["unknown", "any", "never", "void"],
      correctAnswer: 1
    }
  },
  {
    id: 4,
    root: "高级类型系统",
    origin: "核心特性",
    meaning: "TypeScript的高级类型特性",
    difficulty: "进阶",
    duration: "10分钟",
    description: "TypeScript提供了强大的高级类型系统，包括联合类型、交叉类型、类型别名、接口、类型推断、类型断言、字面量类型、类型守卫、条件类型、映射类型、模板字面量类型等，可以实现非常灵活的类型定义。",
    examples: [
      {
        word: "联合与交叉类型",
        meaning: "Union和Intersection类型",
        breakdown: { root: "核心特性" },
        explanation: "联合类型：type Status = 'success' | 'error' | 'loading'; 交叉类型：type User = Person & { id: number; email: string };"
      },
      {
        word: "接口与类型别名",
        meaning: "interface vs type",
        breakdown: { root: "核心特性" },
        explanation: "interface用于定义对象类型，支持扩展和合并；type可以定义任意类型，包括基础类型、联合类型等；最新版本中两者功能越来越接近，大部分场景可以互换使用"
      },
      {
        word: "类型守卫",
        meaning: "Type Guard缩小类型范围",
        breakdown: { root: "核心特性" },
        explanation: "typeof、instanceof、in操作符、自定义类型谓词函数：function isString(x: unknown): x is string { return typeof x === 'string'; }"
      }
    ],
    quiz: {
      question: "以下哪个操作符可以用于判断对象是否包含某个属性，同时起到类型守卫的作用？",
      options: ["in", "of", "for", "if"],
      correctAnswer: 0
    }
  },
  {
    id: 5,
    root: "泛型（Generics）",
    origin: "核心特性",
    meaning: "可复用的类型组件",
    difficulty: "进阶",
    duration: "10分钟",
    description: "泛型是TypeScript的核心特性，允许创建可复用的类型组件，支持多种类型而不是单一类型，提高代码的复用性，同时保持类型安全。泛型可以用于函数、接口、类等各种场景，最新版本中泛型的类型推断能力大幅提升。",
    examples: [
      {
        word: "泛型函数",
        meaning: "函数中使用泛型",
        breakdown: { root: "核心特性" },
        explanation: "function identity<T>(arg: T): T { return arg; }；调用时可以显式指定类型：identity<number>(123)，或者让TS自动推断：identity('hello')"
      },
      {
        word: "泛型约束",
        meaning: "限制泛型的类型范围",
        breakdown: { root: "核心特性" },
        explanation: "interface Lengthwise { length: number; } function loggingIdentity<T extends Lengthwise>(arg: T): T { console.log(arg.length); return arg; }"
      },
      {
        word: "泛型工具类型",
        meaning: "TS内置的泛型工具",
        breakdown: { root: "核心特性" },
        explanation: "Partial<T>：将所有属性变为可选；Readonly<T>：将所有属性变为只读；Pick<T, K>：选择部分属性；Omit<T, K>：排除部分属性；Record<K, T>：定义键值对类型；ReturnType<T>：获取函数返回值类型"
      }
    ],
    quiz: {
      question: "如果需要将一个接口的所有属性变为可选，应该使用哪个内置泛型工具？",
      options: ["Readonly", "Partial", "Pick", "Omit"],
      correctAnswer: 1
    }
  },
  {
    id: 6,
    root: "装饰器（Decorators）",
    origin: "高级特性",
    meaning: "元编程特性，稳定版",
    difficulty: "高级",
    duration: "12分钟",
    description: "装饰器是TS 5.0+正式稳定的高级特性，是一种特殊类型的声明，可以附加到类、方法、访问器、属性或参数上，修改类的行为，添加元数据，广泛应用于Nest.js、Angular、TypeORM等框架中。",
    examples: [
      {
        word: "装饰器类型",
        meaning: "不同类型的装饰器",
        breakdown: { root: "高级特性" },
        explanation: "类装饰器：修饰整个类；方法装饰器：修饰类的方法；属性装饰器：修饰类的属性；参数装饰器：修饰方法的参数；访问器装饰器：修饰get/set访问器"
      },
      {
        word: "使用方式",
        meaning: "装饰器的语法",
        breakdown: { root: "高级特性" },
        explanation: "使用@符号标记：@Controller('users') class UserController { @Get() getUsers() { /* ... */ } }，装饰器可以带参数，也可以组合使用"
      },
      {
        word: "元数据反射",
        meaning: "配合reflect-metadata使用",
        breakdown: { root: "高级特性" },
        explanation: "通过reflect-metadata库可以在装饰器中添加和读取元数据，这是很多框架依赖注入功能的基础：Reflect.defineMetadata('path', '/users', UserController);"
      }
    ],
    quiz: {
      question: "装饰器在哪个TypeScript版本中正式稳定？",
      options: ["4.8", "4.9", "5.0", "5.5"],
      correctAnswer: 2
    }
  },
  {
    id: 7,
    root: "最新版本特性（5.5+）",
    origin: "新特性",
    meaning: "TypeScript 5.5版本新增特性",
    difficulty: "进阶",
    duration: "8分钟",
    description: "TypeScript 5.5是2024年发布的最新稳定版本，带来了很多重要的新特性和性能提升：控制流分析优化、类型推断增强、类型谓词自动推断、增量编译提速、正则表达式类型检查、模块解析优化等。",
    examples: [
      {
        word: "控制流分析优化",
        meaning: "更智能的类型缩小",
        breakdown: { root: "新特性" },
        explanation: "5.5版本大幅优化了控制流分析，支持更复杂的场景下的类型自动缩小，比如函数返回的类型守卫、数组方法中的类型推断，减少了不必要的类型断言"
      },
      {
        word: "类型谓词自动推断",
        meaning: "自动识别类型守卫函数",
        breakdown: { root: "新特性" },
        explanation: "对于返回布尔值的函数，如果逻辑是类型判断，TS 5.5会自动将其推断为类型谓词函数，不需要手动标注x is T，大幅简化类型守卫的编写"
      },
      {
        word: "性能大幅提升",
        meaning: "编译速度更快",
        breakdown: { root: "新特性" },
        explanation: "5.5版本优化了编译流程，增量编译速度提升20-30%，类型检查速度提升，内存占用降低，对于大型项目来说开发体验更好"
      }
    ],
    quiz: {
      question: "TypeScript 5.5中新增的自动推断类型谓词功能，以下哪种说法正确？",
      options: ["需要手动添加类型谓词标注", "自动将返回布尔值的类型判断函数识别为类型守卫", "仅支持内置方法的类型推断", "不支持自定义函数"],
      correctAnswer: 1
    }
  },
  {
    id: 8,
    root: "类型体操（Type Challenges）",
    origin: "高级用法",
    meaning: "复杂类型编程技巧",
    difficulty: "高级",
    duration: "15分钟",
    description: "类型体操是指利用TS的高级类型特性编写复杂的类型逻辑，实现类型层面的计算和转换，常用于类型库开发、复杂业务场景的类型定义，提升类型安全和开发体验，社区有大量的类型体操练习题可以练习。",
    examples: [
      {
        word: "常见类型体操场景",
        meaning: "常用的类型编程场景",
        breakdown: { root: "高级用法" },
        explanation: "API请求/响应类型自动生成、表单类型校验、配置文件类型约束、工具库类型定义、复杂业务逻辑的类型安全保障"
      },
      {
        word: "常用类型编程技巧",
        meaning: "类型体操常用技术",
        breakdown: { root: "高级用法" },
        explanation: "条件类型、infer类型推断、映射类型、递归类型、模板字面量类型、分布式条件类型、类型约束组合"
      },
      {
        word: "社区资源",
        meaning: "类型体操学习资源",
        breakdown: { root: "高级用法" },
        explanation: "Type Challenges仓库：https://github.com/type-challenges/type-challenges，包含从简单到地狱难度的各种类型编程练习题，附带解答"
      }
    ],
    quiz: {
      question: "在类型体操中，哪个关键字可以用于在条件类型中提取类型？",
      options: ["extends", "infer", "keyof", "typeof"],
      correctAnswer: 1
    }
  },
  {
    id: 9,
    root: "与前端框架集成",
    origin: "实战应用",
    meaning: "在前端框架中使用TypeScript",
    difficulty: "进阶",
    duration: "10分钟",
    description: "现在主流前端框架都原生支持TypeScript：React 18+完美支持TS，Vue 3使用TS重写，Angular原生基于TS开发，Svelte、SolidJS等新框架也都优先支持TS，最新的框架版本都提供了非常好的TS开发体验。",
    examples: [
      {
        word: "React + TS",
        meaning: "在React中使用TS",
        breakdown: { root: "实战应用" },
        explanation: "使用.tsx扩展名，组件Props类型定义，React Hooks类型支持，@types/react和@types/react-dom提供完整的类型定义，最新的React 19对TS支持更好，不需要额外的类型导入"
      },
      {
        word: "Vue 3 + TS",
        meaning: "在Vue 3中使用TS",
        breakdown: { root: "实战应用" },
        explanation: "<script setup lang=\"ts\">语法，defineProps、defineEmits类型定义，Vue 3组合式API完美支持TS，Volar插件提供优秀的IDE支持，Pinia等生态库也完全支持TS"
      },
      {
        word: "全栈TS开发",
        meaning: "前后端都使用TS",
        breakdown: { root: "实战应用" },
        explanation: "后端使用Nest.js、Express、Fastify等TS框架，前端使用TS框架，前后端类型共享，使用tRPC、Prisma等工具实现类型安全的全栈开发，减少类型不一致的错误"
      }
    ],
    quiz: {
      question: "React中使用TypeScript编写组件时，文件的扩展名应该是什么？",
      options: [".ts", ".jsx", ".tsx", ".react"],
      correctAnswer: 2
    }
  },
  {
    id: 10,
    root: "类型声明文件",
    origin: "高级特性",
    meaning: "为JS库提供类型支持",
    difficulty: "进阶",
    duration: "8分钟",
    description: "类型声明文件（.d.ts）用于为已经存在的JavaScript库提供类型定义，让TS可以识别JS库的类型，获得代码提示和类型检查。社区的DefinitelyTyped仓库提供了大量流行JS库的类型声明文件，可以通过@types/xxx安装。",
    examples: [
      {
        word: "安装类型声明",
        meaning: "安装第三方库的类型",
        breakdown: { root: "高级特性" },
        explanation: "npm install -D @types/lodash @types/node @types/react，大部分流行库的类型声明都已经在DefinitelyTyped仓库中维护好了"
      },
      {
        word: "自定义类型声明",
        meaning: "为自己的JS模块写类型",
        breakdown: { root: "高级特性" },
        explanation: "创建xxx.d.ts文件，使用declare module '模块名' { /* 类型定义 */ }，可以为没有类型的JS模块添加类型支持，也可以扩展现有类型"
      },
      {
        word: "类型声明发布",
        meaning: "自己开发库时的类型处理",
        breakdown: { root: "高级特性" },
        explanation: "开发库时推荐使用TS编写，自动生成类型声明文件，在package.json中配置types字段指向生成的.d.ts文件，用户安装时就能自动获得类型支持"
      }
    ],
    quiz: {
      question: "类型声明文件的扩展名是什么？",
      options: [".ts", ".d.ts", ".tsx", ".type.ts"],
      correctAnswer: 1
    }
  },
  {
    id: 11,
    root: "运行时类型校验",
    origin: "实战应用",
    meaning: "结合Zod等库实现运行时类型安全",
    difficulty: "进阶",
    duration: "10分钟",
    description: "TypeScript的类型检查只在编译时生效，运行时无法校验类型，对于用户输入、API请求等外部数据需要做运行时类型校验。Zod是目前最流行的运行时类型校验库，完美结合TS的类型系统，一次定义同时获得静态类型和运行时校验。",
    examples: [
      {
        word: "Zod基础使用",
        meaning: "定义校验模式",
        breakdown: { root: "实战应用" },
        explanation: "import { z } from 'zod'; const UserSchema = z.object({ name: z.string(), age: z.number().min(18) }); type User = z.infer<typeof UserSchema>; // 自动生成TS类型"
      },
      {
        word: "运行时校验",
        meaning: "校验数据是否符合类型",
        breakdown: { root: "实战应用" },
        explanation: "const result = UserSchema.safeParse(userInput); if (result.success) { // 类型安全，result.data是User类型 } else { // 校验失败，处理错误 }"
      },
      {
        word: "应用场景",
        meaning: "哪里需要运行时校验",
        breakdown: { root: "实战应用" },
        explanation: "API请求参数/响应数据校验、表单输入校验、配置文件校验、用户上传数据校验、微服务之间的通信数据校验，任何外部不可信数据都应该做运行时校验"
      }
    ],
    quiz: {
      question: "以下哪个库专门用于TypeScript运行时类型校验？",
      options: ["Lodash", "Zod", "Axios", "React Query"],
      correctAnswer: 1
    }
  },
  {
    id: 12,
    root: "测试与TypeScript",
    origin: "实战应用",
    meaning: "在测试中使用TypeScript",
    difficulty: "基础",
    duration: "7分钟",
    description: "主流测试框架都完美支持TypeScript：Jest、Vitest、Mocha、Cypress、Playwright等，TS可以让测试代码更安全，类型提示更完善，提升测试代码的可维护性和开发效率。",
    examples: [
      {
        word: "Vitest配置",
        meaning: "Vitest原生支持TS",
        breakdown: { root: "实战应用" },
        explanation: "Vitest内置TS支持，不需要额外配置，直接编写.ts测试文件，自动编译和类型检查，和TS项目完美集成，测试代码也能享受类型安全"
      },
      {
        word: "测试工具类型",
        meaning: "@types/jest等类型定义",
        breakdown: { root: "实战应用" },
        explanation: "安装@types/jest、@types/node等类型定义包，测试代码中的所有API都有完整的类型提示，避免拼写错误和参数错误"
      },
      {
        word: "类型测试",
        meaning: "测试类型定义是否正确",
        breakdown: { root: "实战应用" },
        explanation: "对于库开发，可以使用tsd、vitest的类型测试功能，测试类型定义是否符合预期，确保类型定义的正确性，避免类型bug"
      }
    ],
    quiz: {
      question: "以下哪个测试框架原生内置支持TypeScript，不需要额外配置？",
      options: ["Jest", "Vitest", "Mocha", "Cypress"],
      correctAnswer: 1
    }
  },
  {
    id: 13,
    root: "Node.js后端开发",
    origin: "实战应用",
    meaning: "使用TypeScript开发后端服务",
    difficulty: "进阶",
    duration: "10分钟",
    description: "TypeScript在Node.js后端开发中也越来越流行，Nest.js是最流行的TS后端框架，还有Express、Fastify、Koa等框架也都有很好的TS支持，TS可以大幅提升后端代码的可维护性和开发效率。",
    examples: [
      {
        word: "Nest.js框架",
        meaning: "企业级TS后端框架",
        breakdown: { root: "实战应用" },
        explanation: "Nest.js是基于TS的渐进式Node.js框架，使用装饰器和依赖注入，架构类似Angular，适合开发大型企业级应用，支持微服务、GraphQL、WebSocket等各种场景"
      },
      {
        word: "Prisma ORM",
        meaning: "类型安全的数据库访问",
        breakdown: { root: "实战应用" },
        explanation: "Prisma是下一代ORM，基于TS开发，自动生成类型安全的数据库访问代码，查询结果自动带类型，不需要手动写类型定义，大幅减少数据库相关的类型错误"
      },
      {
        word: "tRPC",
        meaning: "类型安全的API调用",
        breakdown: { root: "实战应用" },
        explanation: "tRPC允许你定义一次API类型，前后端自动共享类型，调用API时自动类型检查，不需要手写类型定义，也不需要生成API文档，完全类型安全"
      }
    ],
    quiz: {
      question: "以下哪个是专门为TypeScript设计的企业级Node.js后端框架？",
      options: ["Express", "Koa", "Nest.js", "Fastify"],
      correctAnswer: 2
    }
  },
  {
    id: 14,
    root: "微服务开发",
    origin: "高级实战",
    meaning: "使用TypeScript开发微服务架构",
    difficulty: "高级",
    duration: "12分钟",
    description: "TS非常适合微服务架构开发，类型安全可以大幅降低服务间通信的错误，强大的生态系统支持各种微服务场景：服务发现、API网关、配置中心、链路追踪、消息队列等都有完善的TS支持。",
    examples: [
      {
        word: "微服务技术栈",
        meaning: "TS微服务常用技术",
        breakdown: { root: "高级实战" },
        explanation: "Nest.js微服务模块、gRPC + TS、Redis、RabbitMQ、Kafka消息队列、Consul/Eureka服务发现、Docker容器化、Kubernetes部署、Prometheus监控"
      },
      {
        word: "服务间通信类型安全",
        meaning: "避免接口类型不一致",
        breakdown: { root: "高级实战" },
        explanation: "将API类型定义抽取为公共包，所有服务共享类型，服务间调用时自动类型检查，避免因为接口定义不一致导致的线上bug，大幅提升微服务的稳定性"
      },
      {
        word: "部署与运维",
        meaning: "TS服务的部署优化",
        breakdown: { root: "高级实战" },
        explanation: "使用tsup、esbuild等快速打包TS代码，减少启动时间；使用source map支持线上错误定位；集成日志、监控、链路追踪，提升服务的可观测性"
      }
    ],
    quiz: {
      question: "在微服务架构中使用TypeScript的最大优势是什么？",
      options: ["运行速度更快", "服务间通信类型安全", "占用内存更少", "部署更简单"],
      correctAnswer: 1
    }
  },
  {
    id: 15,
    root: "最佳实践",
    origin: "最佳实践",
    meaning: "TypeScript开发最佳实践",
    difficulty: "基础",
    duration: "8分钟",
    description: "使用TypeScript开发时遵循一定的最佳实践可以大幅提升开发效率和代码质量：开启严格模式、避免使用any类型、合理使用类型推断、统一团队编码规范、定期升级TS版本、利用类型系统做运行时校验等。",
    examples: [
      {
        word: "严格模式必须开启",
        meaning: "strict: true的重要性",
        breakdown: { root: "最佳实践" },
        explanation: "开启严格模式会启用所有严格类型检查选项，包括noImplicitAny、strictNullChecks等，能最大程度发挥TS的类型检查能力，提前发现更多潜在问题，推荐所有项目都开启"
      },
      {
        word: "尽量避免使用any",
        meaning: "any是类型安全的敌人",
        breakdown: { root: "最佳实践" },
        explanation: "使用any会跳过所有类型检查，失去TS的优势，遇到类型不明确的场景优先使用unknown，或者用类型断言，实在不行再用any，但要加注释说明原因，并且尽量限制使用范围"
      },
      {
        word: "合理使用类型推断",
        meaning: "不要过度标注类型",
        breakdown: { root: "最佳实践" },
        explanation: "TS的类型推断能力很强，大部分场景不需要手动标注类型，比如常量定义、简单函数返回值等，只有当推断不符合预期或者需要明确类型的时候才手动标注，保持代码简洁"
      }
    ],
    quiz: {
      question: "以下哪种TypeScript使用方式是不推荐的？",
      options: ["开启严格模式", "大量使用any类型", "利用类型推断减少冗余标注", "为第三方库安装类型声明"],
      correctAnswer: 1
    }
  },
  {
    id: 16,
    root: "性能优化",
    origin: "最佳实践",
    meaning: "优化TS项目的编译性能",
    difficulty: "进阶",
    duration: "8分钟",
    description: "大型TS项目可能会遇到编译速度慢的问题，可以通过一些优化手段提升编译速度：增量编译、skipLibCheck、合理配置include/exclude、使用Project References、升级到最新版本的TS等。",
    examples: [
      {
        word: "增量编译配置",
        meaning: "incremental选项",
        breakdown: { root: "最佳实践" },
        explanation: "在tsconfig中配置incremental: true，TS会保存编译信息，下次编译只编译变化的部分，可以大幅提升增量编译速度，开发环境下效果明显"
      },
      {
        word: "跳过库文件检查",
        meaning: "skipLibCheck选项",
        breakdown: { root: "最佳实践" },
        explanation: "配置skipLibCheck: true，跳过对node_modules中.d.ts文件的类型检查，这些库文件通常已经经过验证，不需要每次都检查，可以节省大量编译时间"
      },
      {
        word: "项目引用",
        meaning: "Project References",
        breakdown: { root: "最佳实践" },
        explanation: "对于大型多包项目，可以使用Project References将项目拆分为多个小项目，每个项目独立编译，依赖其他项目的编译结果，可以大幅提升大项目的编译速度和可维护性"
      }
    ],
    quiz: {
      question: "以下哪个配置项可以跳过对第三方库类型声明文件的检查，提升编译速度？",
      options: ["incremental", "skipLibCheck", "strict", "outDir"],
      correctAnswer: 1
    }
  },
  {
    id: 17,
    root: "常见问题与调试技巧",
    origin: "最佳实践",
    meaning: "TS常见问题解决与调试",
    difficulty: "基础",
    duration: "7分钟",
    description: "开发过程中会遇到各种类型错误，掌握一些常用的调试技巧可以快速解决问题：使用TS Playground复现问题、开启noEmitOnError、使用tsc --noEmit快速检查类型、查看官方文档、利用社区资源等。",
    examples: [
      {
        word: "类型错误排查技巧",
        meaning: "快速定位类型错误",
        breakdown: { root: "最佳实践" },
        explanation: "仔细阅读错误信息，TS的错误信息通常很详细，会告诉你哪个文件哪一行有问题，期望什么类型，实际是什么类型；使用// @ts-expect-error临时忽略错误，但最好还是解决根本问题"
      },
      {
        word: "常用工具",
        meaning: "TS开发辅助工具",
        breakdown: { root: "最佳实践" },
        explanation: "TS Playground：在线测试TS代码，方便分享问题；tsc --noEmit：只做类型检查，不生成代码；TypeScript ESLint：代码规范检查，提前发现问题；类型可视化工具：帮助理解复杂类型"
      },
      {
        word: "常见问题解决",
        meaning: "常见错误解决方案",
        breakdown: { root: "最佳实践" },
        explanation: "类型不匹配：检查类型定义是否正确，使用类型断言；模块导入错误：检查moduleResolution配置；类型缺失：安装对应的@types包，或者自己写类型声明"
      }
    ],
    quiz: {
      question: "如果只想做类型检查而不生成编译后的代码，应该使用tsc的哪个参数？",
      options: ["--watch", "--noEmit", "--outDir", "--strict"],
      correctAnswer: 1
    }
  }
]
window.WordRoots = WordRoots;window.wordData = { words: WordRoots };
