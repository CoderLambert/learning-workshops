const WordRoots = [
  {
    id: 1,
    root: "App Router",
    origin: "路由系统",
    meaning: "Next.js 13+ 引入的基于文件系统的新一代路由架构，16 版全面稳定",
    description: "App Router 是 Next.js 从 13 版本引入、在 16 版完全成熟的路由架构。它基于 app 目录下的文件夹结构自动生成路由，每个文件夹代表一个路由段（route segment）。通过在文件夹中创建 layout.tsx、page.tsx、loading.tsx、error.tsx 等特殊文件，可以轻松定义页面布局、内容、加载状态和错误处理。Next.js 16 对 App Router 进行了增强：布局去重（Layout Deduplication）避免重复渲染相同布局，增量预取（Incremental Prefetching）优化导航性能。App Router 原生支持 React Server Components，允许在服务端渲染组件，减少客户端 JavaScript 体积，是 Next.js 16 应用的核心架构。",
    examples: [
      { word: "基础路由", meaning: "app/page.tsx 映射到 / 路径", breakdown: { root: "App Router" }, explanation: "在 app 目录下创建 page.tsx 文件即可定义路由页面，文件夹结构即路由结构，无需额外配置。" },
      { word: "动态路由", meaning: "app/users/[id]/page.tsx 映射到 /users/:id", breakdown: { root: "App Router" }, explanation: "使用中括号创建动态路由段，可以捕获 URL 中的参数，如 /users/123 中的 123 可通过 params.id 获取。" },
      { word: "嵌套布局", meaning: "app/dashboard/layout.tsx 为 /dashboard 下的所有页面提供共享布局", breakdown: { root: "App Router" }, explanation: "layout.tsx 文件会在导航时保持挂载，不会重新渲染，适合放置侧边栏、导航栏等共享 UI。" }
    ],
    quiz: {
      question: "App Router 中哪个文件用于定义路由页面内容？",
      options: ["layout.tsx", "page.tsx", "template.tsx", "index.tsx"],
      correctAnswer: 1
    }
  },
  {
    id: 2,
    root: "Cache Components",
    origin: "Next.js 16 核心特性",
    meaning: "Next.js 16 全新缓存模型，使用 'use cache' 指令显式控制组件缓存",
    description: "Cache Components 是 Next.js 16 最重要的新增特性。与之前的隐式缓存不同，Cache Components 采用 opt-in 策略——所有动态代码默认在请求时执行，只有使用 'use cache' 指令标记的组件或函数才会被缓存。这解决了 Next.js 15 及之前版本中令人困惑的缓存行为问题。'use cache' 可以应用于页面、组件和函数级别，编译器会自动生成缓存键。Cache Components 完善了 Partial Prerendering（PPR）的故事，开发者可以选择页面的哪些部分静态渲染、哪些部分动态渲染。在 next.config.ts 中设置 cacheComponents: true 即可启用。这是 Next.js 16 与之前版本最大的架构差异之一。",
    examples: [
      { word: "组件级缓存", meaning: "在组件文件中添加 'use cache' 指令启用缓存", breakdown: { root: "Cache Components" }, explanation: "'use cache' 让组件的渲染结果被缓存，下次请求相同数据时直接使用缓存，无需重新执行。" },
      { word: "显式缓存控制", meaning: "默认不缓存，只有标记 'use cache' 的部分才缓存", breakdown: { root: "Cache Components" }, explanation: "与之前的隐式缓存相反，Next.js 16 默认所有代码在请求时执行，缓存行为更加可预测。" },
      { word: "结合 PPR", meaning: "静态外壳 + 动态 Suspense 区域组合渲染", breakdown: { root: "Cache Components" }, explanation: "Cache Components 让 PPR 更加灵活，静态部分立即展示，动态区域在数据就绪后流式填充。" }
    ],
    quiz: {
      question: "Next.js 16 中启用组件缓存的指令是？",
      options: ["'use cache'", "'use server'", "'use memo'", "'use static'"],
      correctAnswer: 0
    }
  },
  {
    id: 3,
    root: "Turbopack",
    origin: "Next.js 16 核心特性",
    meaning: "Rust 编写的下一代打包工具，Next.js 16 起成为默认 bundler",
    description: "Turbopack 是 Next.js 团队用 Rust 编写的增量打包工具，是 Webpack 的继任者。在 Next.js 16 中，Turbopack 达到了稳定状态，成为所有新项目的默认 bundler，同时用于开发和生产构建。性能表现：开发环境下 Fast Refresh 速度提升 5-10 倍，生产构建速度提升 2-5 倍。Turbopack 采用增量计算策略——只重新编译变更的部分，其余缓存结果可以复用。Next.js 16 还引入了 Turbopack 文件系统缓存（beta），进一步减少大型应用的启动和编译时间。开发者现在无需再使用 next dev --turbo 标志，Turbopack 已经是默认行为。",
    examples: [
      { word: "默认启用", meaning: "Next.js 16 中 next dev 和 next build 自动使用 Turbopack", breakdown: { root: "Turbopack" }, explanation: "无需任何配置，Next.js 16 项目自动使用 Turbopack 进行开发和生产构建。" },
      { word: "Fast Refresh", meaning: "代码修改后页面更新速度提升 5-10 倍", breakdown: { root: "Turbopack" }, explanation: "Turbopack 的增量计算特性使得只有变更的模块需要重新编译，其他模块直接复用缓存结果。" },
      { word: "文件系统缓存", meaning: "Turbopack 文件系统缓存（beta）进一步加速启动", breakdown: { root: "Turbopack" }, explanation: "文件系统缓存让重启开发服务器时不需要从头编译，可以复用之前的编译结果，大幅缩短冷启动时间。" }
    ],
    quiz: {
      question: "Turbopack 是用什么语言编写的？",
      options: ["JavaScript", "Go", "Rust", "C++"],
      correctAnswer: 2
    }
  },
  {
    id: 4,
    root: "proxy.ts",
    origin: "Next.js 16 变更",
    meaning: "替代 middleware.ts 的新请求拦截文件，运行在 Node.js 运行时",
    description: "Next.js 16 中，middleware.ts 被 proxy.ts 取代。proxy.ts 运行在 Node.js 运行时（不再是 Edge Runtime），使应用的网边界更加明确。使用方式：在项目根目录或 app 目录下创建 proxy.ts 文件，导出一个名为 proxy 的函数，接收 NextRequest 参数并返回 NextResponse。逻辑与之前的 middleware 保持一致，只是文件名和导出函数名变了。原来的 middleware.ts 仍然可用（兼容 Edge Runtime 用例），但已被标记为 deprecated，未来版本将被移除。这个变化简化了运行时模型，开发者不再需要区分 Edge Runtime 和 Node.js Runtime 两套 API。",
    examples: [
      { word: "身份验证", meaning: "在 proxy.ts 中检查用户登录状态，未登录则重定向", breakdown: { root: "proxy.ts" }, explanation: "proxy 函数在请求到达页面之前执行，可以在这里验证 token、检查 session，实现路由保护。" },
      { word: "迁移步骤", meaning: "将 middleware.ts 重命名为 proxy.ts，导出函数名改为 proxy", breakdown: { root: "proxy.ts" }, explanation: "业务逻辑无需改动，只需改文件名和导出函数名即可迁移到 Next.js 16 的新模式。" },
      { word: "地域化", meaning: "根据用户地理位置重写 URL 返回不同语言内容", breakdown: { root: "proxy.ts" }, explanation: "proxy.ts 运行在 Node.js 上，可以使用完整的 Node.js API，比之前的 Edge Runtime 限制更少。" }
    ],
    quiz: {
      question: "Next.js 16 中 proxy.ts 运行在什么环境？",
      options: ["Edge Runtime", "Node.js Runtime", "Browser Runtime", "Cloudflare Workers"],
      correctAnswer: 1
    }
  },
  {
    id: 5,
    root: "Server Components (RSC)",
    origin: "渲染架构",
    meaning: "在服务端执行的 React 组件，不发送 JavaScript 到客户端",
    description: "React Server Components 是 Next.js 的核心架构，默认情况下 App Router 中的所有组件都是服务端组件。它们在服务器上渲染，生成的 HTML 直接发送给浏览器。这意味着组件可以安全地访问数据库、读取文件系统、使用服务端专属 API，而不会将这些依赖打包到客户端 JavaScript 中。在 Next.js 16 中，RSC 得到了进一步增强：配合 Cache Components 和 PPR，可以实现更灵活的静态/动态混合渲染。RSC 大幅减少了发送到浏览器的 JavaScript 体积，提升了首屏加载速度。与服务端组件相对的是客户端组件（标记为 'use client'），它们可以在浏览器中运行，支持 useState、useEffect 等交互性 Hook。",
    examples: [
      { word: "数据库查询", meaning: "在服务端组件中直接查询数据库", breakdown: { root: "Server Components" }, explanation: "服务端组件可以直接 import 数据库客户端并执行查询，不需要创建 API 接口，减少了网络往返。" },
      { word: "减少客户端体积", meaning: "大型依赖只在服务端使用，不打包到客户端", breakdown: { root: "Server Components" }, explanation: "如 markdown 解析库、日期处理库等，如果在服务端组件中使用，不会被打包到浏览器端的 JS bundle 中。" },
      { word: "与客户端组件组合", meaning: "服务端组件可以渲染客户端组件作为子组件", breakdown: { root: "Server Components" }, explanation: "通过将客户端组件作为 props（children）传入服务端组件，可以实现两者的无缝组合使用。" }
    ],
    quiz: {
      question: "App Router 中默认创建的组件是什么类型？",
      options: ["客户端组件", "服务端组件", "同构组件", "静态组件"],
      correctAnswer: 1
    }
  },
  {
    id: 6,
    root: "Client Components",
    origin: "渲染架构",
    meaning: "标记为 'use client' 的组件，可在浏览器中运行，支持交互性 Hook",
    description: "客户端组件是通过在文件顶部添加 'use client' 指令来声明的 React 组件。它们会在服务端预渲染后，将 JavaScript 发送到浏览器进行水合（hydration），从而支持用户交互。客户端组件可以使用所有 React Hook，包括 useState（状态管理）、useEffect（副作用）、useRef（DOM 引用）等。适用场景包括：需要响应用户事件（点击、输入、滚动）、需要管理本地状态、需要使用浏览器 API（如 window、localStorage、navigator）。在 Next.js 16 + React 19.2 中，客户端组件还可以使用新 Hook 如 useEffectEvent 和 View Transitions API。关键原则是'尽量使用服务端组件，只在需要交互时才使用客户端组件'。",
    examples: [
      { word: "表单交互", meaning: "带有输入框和提交按钮的表单组件", breakdown: { root: "Client Components" }, explanation: "表单需要监听用户输入、验证数据、处理提交事件，这些都需要客户端交互能力。" },
      { word: "状态管理", meaning: "使用 useState 管理的计数器或切换组件", breakdown: { root: "Client Components" }, explanation: "useState、useReducer 等 Hook 只能在客户端组件中使用，因为它们需要在浏览器中维护状态。" },
      { word: "View Transitions", meaning: "使用 React 19.2 的 View Transitions 实现页面切换动画", breakdown: { root: "Client Components" }, explanation: "React 19.2 引入了 View Transitions API，客户端组件可以利用它实现流畅的页面过渡动画。" }
    ],
    quiz: {
      question: "如何声明一个客户端组件？",
      options: ["在文件顶部添加 'use server'", "在文件顶部添加 'use client'", "在组件中添加 useEffect", "导出时使用 export default"],
      correctAnswer: 1
    }
  },
  {
    id: 7,
    root: "Server Actions",
    origin: "数据操作",
    meaning: "在服务端安全执行的异步函数，可直接从组件中调用",
    description: "Server Actions 是 Next.js 提供的服务端函数执行机制，允许你在组件中直接调用服务端逻辑，而无需手动创建 API 路由。通过 'use server' 指令标记的异步函数可以在服务端安全执行数据库操作、文件读写、第三方 API 调用等敏感操作。Server Actions 可以与表单（form action）无缝集成，实现渐进增强——即使 JavaScript 未加载，表单提交仍然可以工作。同时，Server Actions 支持 revalidatePath 和 revalidateTag，在数据变更后自动刷新相关页面的缓存。在 Next.js 16 中，Server Actions 的性能和稳定性进一步提升，是 Next.js 全栈能力的重要体现。",
    examples: [
      { word: "表单提交", meaning: "使用 form action 直接调用 Server Action 处理表单", breakdown: { root: "Server Actions" }, explanation: "表单的 action 属性可以直接绑定 Server Action 函数，表单数据会自动作为参数传递，无需手动处理 fetch。" },
      { word: "数据库写入", meaning: "在 Server Action 中执行 INSERT/UPDATE 操作", breakdown: { root: "Server Actions" }, explanation: "Server Action 在服务端安全执行，可以直接操作数据库，不会暴露数据库凭据或连接信息到客户端。" },
      { word: "缓存刷新", meaning: "数据变更后调用 revalidatePath 刷新页面缓存", breakdown: { root: "Server Actions" }, explanation: "使用 revalidatePath('/dashboard') 可以让 Next.js 自动清除指定路径的缓存，下次访问时重新获取最新数据。" }
    ],
    quiz: {
      question: "Server Actions 中用于刷新缓存的函数是？",
      options: ["invalidateCache()", "revalidatePath()", "clearCache()", "refreshData()"],
      correctAnswer: 1
    }
  },
  {
    id: 8,
    root: "PPR（Partial Prerendering）",
    origin: "渲染策略",
    meaning: "混合静态外壳和动态内容的渲染模式，兼顾首屏速度和数据实时性",
    description: "Partial Prerendering（PPR）是 Next.js 16 通过 Cache Components 完善的渲染策略。PPR 消除了静态 SSG 和动态 SSR 之间的二选一困境——它允许页面的静态部分（如导航栏、侧边栏）在构建时预渲染为静态外壳，同时动态部分（如用户信息、实时数据）通过 Suspense 在请求时流式获取。在 Next.js 16 之前，PPR 需要通过实验性标志启用；现在它已整合到 Cache Components 体系中。PPR 的最佳实践是：将不频繁变化的布局元素设为静态缓存，将依赖用户上下文或实时数据的部分放在 Suspense 边界内。这种混合策略既能保证极快的首屏加载，又能确保数据的实时性。",
    examples: [
      { word: "静态外壳 + 动态内容", meaning: "页面框架（导航、侧边栏）静态渲染，用户数据通过 Suspense 动态加载", breakdown: { root: "PPR" }, explanation: "静态外壳立即展示，用户不需要等待数据库查询完成，动态区域在数据就绪后流式填充。" },
      { word: "Cache Components 启用", meaning: "在 next.config.ts 中设置 cacheComponents: true 启用 PPR", breakdown: { root: "PPR" }, explanation: "启用后，使用 'use cache' 的组件被静态缓存，其余部分在请求时动态执行。" },
      { word: "替代实验标志", meaning: "Next.js 16 移除了 experimental.ppr，统一使用 Cache Components", breakdown: { root: "PPR" }, explanation: "PPR 从实验性功能进化为正式架构的一部分，配置更加简洁和统一。" }
    ],
    quiz: {
      question: "PPR 结合了哪两种渲染模式？",
      options: ["CSR 和 SSR", "SSG 和 CSR", "静态外壳和动态 Suspense 内容", "SSR 和 ISR"],
      correctAnswer: 2
    }
  },
  {
    id: 9,
    root: "React Compiler",
    origin: "Next.js 16 核心特性",
    meaning: "自动对 React 组件进行 memoization 优化，无需手动 useMemo/useCallback",
    description: "React Compiler（原名 React Forget）是 React 团队开发的自动优化工具，在 Next.js 16 中获得稳定支持。它的核心能力是在编译阶段自动分析组件的数据依赖关系，并插入 useMemo、useCallback、React.memo 等优化代码，无需开发者手动添加。这意味着你可以用普通的 React 代码编写组件，Compiler 会自动帮你避免不必要的重新渲染。在 Next.js 16 中启用 React Compiler 非常简单——在 next.config.ts 中设置 reactCompiler: true 即可。配合 Turbopack 的快速构建，React Compiler 可以在不增加构建时间的情况下提供显著的性能提升。这是 React 19 生态中最重要的生产力改进之一。",
    examples: [
      { word: "自动 Memoization", meaning: "编译器自动插入 useMemo/useCallback，减少不必要的重渲染", breakdown: { root: "React Compiler" }, explanation: "开发者无需手动记忆化，只需编写普通的 React 代码，Compiler 会在构建时自动优化。" },
      { word: "启用方式", meaning: "在 next.config.ts 中设置 reactCompiler: true", breakdown: { root: "React Compiler" }, explanation: "一行配置即可启用，无需安装额外的包或修改现有代码。" },
      { word: "构建时优化", meaning: "所有优化在编译阶段完成，不增加运行时开销", breakdown: { root: "React Compiler" }, explanation: "React Compiler 生成的是普通的 React 代码，浏览器执行时没有额外的运行时依赖。" }
    ],
    quiz: {
      question: "React Compiler 的主要作用是？",
      options: ["自动生成测试代码", "自动插入 memoization 优化", "压缩 JavaScript 体积", "转换 TypeScript 代码"],
      correctAnswer: 1
    }
  },
  {
    id: 10,
    root: "Streaming SSR",
    origin: "渲染架构",
    meaning: "流式服务端渲染，逐步将 HTML 分块发送到浏览器",
    description: "流式 SSR 是 Next.js 对 React Suspense 的集成实现，允许服务端在数据就绪后立即发送 HTML 片段到浏览器，而不必等待所有内容都准备好。通过 loading.tsx 文件定义加载 UI，Next.js 会自动将该区域包裹在 React Suspense 边界中。当服务端获取到该区域的数据后，会以 HTML stream 的形式发送完整内容，替换掉 loading UI。这种方式的显著优势是：用户无需等待最慢的数据源，可以快速看到页面的可用部分；同时减少了 TTFB（首字节时间）。在 Next.js 16 中，Streaming SSR 配合 PPR 和 Cache Components 更加高效，可以实现精细到组件级别的流式渲染控制。",
    examples: [
      { word: "loading.tsx", meaning: "创建 app/dashboard/loading.tsx 定义加载 UI", breakdown: { root: "Streaming SSR" }, explanation: "loading.tsx 会自动包裹在 Suspense 边界中，当该路由段的数据加载时显示 skeleton，数据就绪后自动替换为实际内容。" },
      { word: "逐步渲染", meaning: "页面头部先显示，评论区后加载", breakdown: { root: "Streaming SSR" }, explanation: "不同数据源的加载速度不同，流式渲染让快速就绪的部分先展示给用户，减少整体感知等待时间。" },
      { word: "错误隔离", meaning: "某个组件出错不影响其他部分的渲染", breakdown: { root: "Streaming SSR" }, explanation: "结合 error.tsx，Suspense 边界可以将错误隔离在特定区域内，不会导致整个页面白屏。" }
    ],
    quiz: {
      question: "在 App Router 中启用流式渲染需要创建什么文件？",
      options: ["streaming.tsx", "loading.tsx", "suspense.tsx", "async.tsx"],
      correctAnswer: 1
    }
  },
  {
    id: 11,
    root: "缓存 APIs",
    origin: "数据操作",
    meaning: "Next.js 16 改进的缓存控制 API，包括 revalidateTag() 和新 updateTag()",
    description: "Next.js 16 对缓存 API 进行了重要改进。revalidateTag() 现在需要第二个参数——cacheLife profile，用于启用 stale-while-revalidate（SWR）行为。cacheLife profile 可以是内置的 'max'、'hours'、'days' 或在 next.config 中自定义的复用 profile。这使得缓存过期策略更加精细和可控。同时，Next.js 16 引入了新的 updateTag() 函数，允许在不使缓存失效的情况下更新缓存数据——这对于需要在后台静默更新数据的场景非常有用。配合 Cache Components 的显式缓存模型，Next.js 16 的缓存体系终于变得清晰、可预测和易于管理。fetch 的 next.revalidate 和 next.tags 选项也相应进行了调整。",
    examples: [
      { word: "revalidateTag + cacheLife", meaning: "revalidateTag('products', 'hours') 使用 hours 配置文件", breakdown: { root: "缓存 APIs" }, explanation: "新版本 revalidateTag 需要传入 profile 名称，控制缓存的 stale-while-revalidate 行为。" },
      { word: "updateTag", meaning: "使用 updateTag() 在不使缓存失效的情况下更新数据", breakdown: { root: "缓存 APIs" }, explanation: "updateTag 允许后台更新缓存数据，用户仍然看到旧版本直到新数据就绪，避免闪烁。" },
      { word: "自定义 Profile", meaning: "在 next.config 中定义可复用的 cacheLife profile", breakdown: { root: "缓存 APIs" }, explanation: "可以根据业务需求定义自定义 profile，如 staleTime: 300, revalidate: 3600 等。" }
    ],
    quiz: {
      question: "Next.js 16 中 revalidateTag 新增了什么必填参数？",
      options: ["timeout", "cacheLife profile", "maxAge", "strategy"],
      correctAnswer: 1
    }
  },
  {
    id: 12,
    root: "React 19.2",
    origin: "React 生态",
    meaning: "Next.js 16 支持的 React 版本，包含 View Transitions、useEffectEvent 等",
    description: "Next.js 16 全面支持 React 19.2（包括 Canary 版本），带来多项新特性。View Transitions API 允许开发者使用 CSS transition 实现页面之间的平滑动画过渡——通过 useViewTransitionState Hook 可以控制过渡的时机和状态。useEffectEvent 是一个新的 Hook，用于从 useEffect 中提取事件处理逻辑，解决闭包陷阱问题，让副作用代码更加清晰和正确。React 19.2 还引入了 <Activity> 组件，用于在隐藏状态时暂停组件树（而非卸载），适合实现 Tab 切换等场景而不丢失组件状态。这些新特性使 Next.js 应用在交互体验和代码质量上都有显著提升。",
    examples: [
      { word: "View Transitions", meaning: "页面导航时使用 CSS 过渡动画", breakdown: { root: "React 19.2" }, explanation: "通过 React 19.2 的 View Transitions，可以实现类似原生应用的页面切换效果，提升用户体验。" },
      { word: "useEffectEvent", meaning: "从 useEffect 中提取事件处理逻辑，避免闭包陷阱", breakdown: { root: "React 19.2" }, explanation: "useEffectEvent 创建的函数始终读取最新的闭包值，解决了 useEffect 中常见的新鲜度问题。" },
      { word: "<Activity> 组件", meaning: "隐藏时暂停组件，而非卸载，保留状态", breakdown: { root: "React 19.2" }, explanation: "<Activity> 让组件在不可见时暂停渲染，重新显示时立即恢复，适合 Tab、折叠面板等场景。" }
    ],
    quiz: {
      question: "React 19.2 中用于页面切换动画的 API 是？",
      options: ["useAnimation", "View Transitions API", "useTransition", "usePageTransition"],
      correctAnswer: 1
    }
  },
  {
    id: 13,
    root: "动态路由",
    origin: "路由系统",
    meaning: "使用方括号 [param] 创建带有可变参数的路由",
    description: "动态路由允许你创建包含可变参数的 URL 路径，是构建数据驱动应用的基础。在 Next.js 16 中，动态路由的参数（params）和查询参数（searchParams）都是 Promise 对象，需要 await 后才能获取值——这是 Next.js 15 引入的 Breaking Change，在 16 中继续有效。这为流式渲染和并行数据获取提供了更好的支持。单参数路由如 app/posts/[slug]/page.tsx 匹配 /posts/hello-world；捕获所有路由 [...slug] 匹配任意深度的路径。Next.js 16 的增强路由系统还包括布局去重和增量预取，使动态路由的导航更加高效。",
    examples: [
      { word: "Promise params", meaning: "const { id } = await params 需要 await 获取参数", breakdown: { root: "动态路由" }, explanation: "Next.js 16 中 params 是 Promise，必须 await 后才能访问具体值，这支持了更灵活的流式数据获取。" },
      { word: "多参数路由", meaning: "app/posts/[category]/[slug]/page.tsx 匹配 /posts/tech/nextjs", breakdown: { root: "动态路由" }, explanation: "可以组合多个动态段，实现更精细的路由结构，params 会包含所有动态段的值。" },
      { word: "可选捕获路由", meaning: "app/docs/[[...path]]/page.tsx 可选匹配任意深度路径", breakdown: { root: "动态路由" }, explanation: "双中括号 [[...path]] 使路由段变为可选，即使没有提供路径段也能匹配。" }
    ],
    quiz: {
      question: "Next.js 16 中 params 是什么类型的？",
      options: ["普通对象", "Promise 对象", "数组", "字符串"],
      correctAnswer: 1
    }
  },
  {
    id: 14,
    root: "Route Handlers",
    origin: "路由系统",
    meaning: "在 app 目录中定义的 API 端点，替代 Pages Router 的 API Routes",
    description: "Route Handlers 是 App Router 中用于创建 RESTful API 端点的机制。在 app 目录的任意路由文件夹中创建 route.ts 文件，即可定义该路由的 HTTP 处理方法（GET、POST、PUT、DELETE 等）。每个方法接收 Request 对象并返回 Response 对象，与标准 Web API 兼容。Route Handlers 支持完整的 HTTP 语义，可以设置状态码、响应头、Cookies 等。在 Next.js 16 中，Route Handlers 可以在 proxy.ts 之前或之后执行，配合新的 Node.js 运行时模型，可以更方便地处理复杂请求逻辑。它们适合构建 API 服务、Webhook 接收器、代理服务等。",
    examples: [
      { word: "REST API", meaning: "app/api/users/route.ts 定义 /api/users 的 GET/POST 方法", breakdown: { root: "Route Handlers" }, explanation: "通过在 route.ts 中导出 async function GET 和 async function POST，可以为同一端点提供多种 HTTP 方法处理。" },
      { word: "Webhook 处理", meaning: "接收 GitHub/Stripe 等服务的 Webhook 回调", breakdown: { root: "Route Handlers" }, explanation: "Route Handler 可以验证 Webhook 签名、解析请求体、执行相应业务逻辑，是处理第三方回调的理想方式。" },
      { word: "文件上传", meaning: "处理 multipart/form-data 文件上传请求", breakdown: { root: "Route Handlers" }, explanation: "通过 request.formData() 可以获取上传的文件数据，配合云存储服务实现文件上传功能。" }
    ],
    quiz: {
      question: "Route Handlers 文件应命名为？",
      options: ["api.ts", "route.ts", "handler.ts", "endpoint.ts"],
      correctAnswer: 1
    }
  },
  {
    id: 15,
    root: "并行路由",
    origin: "路由系统",
    meaning: "使用 @folder 语法在同一个布局中同时渲染多个页面",
    description: "并行路由（Parallel Routes）允许在同一个布局中同时渲染一个或多个独立的路由页面，每个路由可以独立导航而不影响其他路由。使用 @folder 命名约定（如 @analytics、@team）创建并行路由插槽，然后在 layout.tsx 中通过 props 接收这些插槽并渲染。典型应用场景包括：仪表盘中的多面板布局、模态对话框（URL 变化但背景页面保持不变）、团队/分析面板的并行加载。每个并行插槽都有独立的 loading.tsx 和 error.tsx，可以单独处理各自的加载和错误状态，实现了细粒度的用户体验控制。",
    examples: [
      { word: "仪表盘布局", meaning: "同时渲染 @team 和 @analytics 两个面板", breakdown: { root: "并行路由" }, explanation: "在 dashboard layout 中，@team 和 @analytics 可以独立导航和刷新，互不影响，但共享同一个父布局。" },
      { word: "模态对话框", meaning: "URL 变化时显示对话框，背景页面保持不变", breakdown: { root: "并行路由" }, explanation: "使用 parallel route + intercepting route 可以实现 URL 驱动的模态框，刷新页面时对话框内容会作为独立页面展示。" },
      { word: "独立加载状态", meaning: "@analytics 加载中时 @team 已经显示内容", breakdown: { root: "并行路由" }, explanation: "每个并行插槽可以有自己的 loading.tsx，实现了细粒度的加载状态管理，提升用户体验。" }
    ],
    quiz: {
      question: "并行路由使用什么语法创建命名插槽？",
      options: ["#folder", "@folder", "$folder", "%folder"],
      correctAnswer: 1
    }
  },
  {
    id: 16,
    root: "拦截路由",
    origin: "路由系统",
    meaning: "使用 (...) 语法在当前位置渲染另一个路由的页面",
    description: "拦截路由（Intercepting Routes）允许你在保持当前 URL 的同时，渲染另一个路由的页面内容。通过在文件夹名称前添加 (...) 前缀（如 (...)photos/[id]）来定义拦截路由。当用户从 /feed 导航到 /photos/123 时，如果存在拦截路由 (...)photos/[id]，Next.js 会在 /feed 的布局中渲染 photos/[id] 的内容，而不是跳转到 /photos/123 页面。但如果用户直接访问 /photos/123 或刷新页面，则会渲染正常的 /photos/[id] 页面。这种机制非常适合实现模态对话框、图片预览、快速查看等场景。",
    examples: [
      { word: "图片预览", meaning: "从相册点击照片，在当前页面以模态框展示大图", breakdown: { root: "拦截路由" }, explanation: "(...)photos/[id] 拦截路由在相册布局内渲染照片详情，URL 变为 /photos/[id] 但用户感觉没有离开相册页面。" },
      { word: "快速查看", meaning: "在列表页点击项目，弹出详情面板", breakdown: { root: "拦截路由" }, explanation: "拦截路由让列表页保持可见，同时展示选中项目的详细信息，提供了流畅的用户体验。" },
      { word: "直接访问回退", meaning: "直接访问 /photos/123 时渲染正常页面而非模态框", breakdown: { root: "拦截路由" }, explanation: "拦截路由只在从应用内部导航时生效，直接访问或刷新时会回退到正常的路由页面。" }
    ],
    quiz: {
      question: "拦截路由的前缀符号是？",
      options: ["[..]", "(...)", "{...}", "[...]"],
      correctAnswer: 1
    }
  },
  {
    id: 17,
    root: "增强路由导航",
    origin: "Next.js 16 增强",
    meaning: "布局去重和增量预取优化，提升导航性能",
    description: "Next.js 16 对路由导航进行了两项重要优化。布局去重（Layout Deduplication）：当多个路由段共享相同的布局组件时，Next.js 会避免重复渲染这些布局，减少不必要的渲染工作。增量预取（Incremental Prefetching）：在用户导航时，Next.js 只预取目标路由所需的数据，而不是预取整个路由树，减少了网络请求量。这两项优化结合起来，使得大型 Next.js 应用的页面切换更加流畅，特别是在深层嵌套路由的场景下。这些优化是自动生效的，开发者无需手动配置。",
    examples: [
      { word: "布局去重", meaning: "共享的布局组件在多个路由段中只渲染一次", breakdown: { root: "增强路由导航" }, explanation: "减少了相同布局在嵌套路由中的重复渲染开销，提升大型应用的导航性能。" },
      { word: "增量预取", meaning: "只预取目标路由需要的数据，不预取整个路由树", breakdown: { root: "增强路由导航" }, explanation: "减少了预取阶段的网络请求量和数据传输量，导航响应更快。" },
      { word: "自动生效", meaning: "无需配置，升级到 Next.js 16 即可享受优化", breakdown: { root: "增强路由导航" }, explanation: "这两项优化是框架层面的改进，开发者不需要修改代码即可获得性能提升。" }
    ],
    quiz: {
      question: "Next.js 16 的路由导航优化包括？",
      options: ["服务端渲染改进", "布局去重和增量预取", "新的缓存策略", "React 编译器"],
      correctAnswer: 1
    }
  },
  {
    id: 18,
    root: "数据获取",
    origin: "数据操作",
    meaning: "在服务端组件中使用 async/await 配合 fetch 获取数据",
    description: "Next.js 16 中，数据获取主要发生在服务端组件中，可以直接使用 async/await 获取数据，无需 useEffect 或 useState。Next.js 对原生 fetch API 进行了扩展，增加了缓存和重新验证能力。在 Cache Components 模型下，默认所有代码在请求时执行（类似 dynamic rendering），只有通过 'use cache' 标记的组件才会缓存 fetch 结果。fetch 函数接受 next 选项来控制缓存行为：next.revalidate 设置按时间自动重新验证，next.tags 设置用于按标签刷新的标签。此外，Next.js 16 内置了请求去重——在同一次请求中对同一 URL 的多次 fetch 只会执行一次。",
    examples: [
      { word: "缓存数据获取", meaning: "在 'use cache' 组件中使用 fetch，结果自动缓存", breakdown: { root: "数据获取" }, explanation: "Cache Components 下只有标记 'use cache' 的组件才会缓存 fetch 结果，行为更加可预测。" },
      { word: "动态数据获取", meaning: "默认组件在请求时执行，每次获取最新数据", breakdown: { root: "数据获取" }, explanation: "Next.js 16 的默认行为是动态执行，适合实时性要求高的数据，无需显式配置 no-store。" },
      { word: "数据库直连", meaning: "在服务端组件中直接调用 Prisma/Drizzle 查询", breakdown: { root: "数据获取" }, explanation: "服务端组件可以直接 import 数据库 ORM 执行查询，省去了 API 层的网络开销，简化了数据流。" }
    ],
    quiz: {
      question: "Next.js 16 Cache Components 模式下，默认 fetch 结果会缓存吗？",
      options: ["会，默认缓存", "不会，只有 'use cache' 组件才缓存", "只在生产环境缓存", "只在开发环境缓存"],
      correctAnswer: 1
    }
  },
  {
    id: 19,
    root: "TypeScript 集成",
    origin: "开发工具",
    meaning: "Next.js 对 TypeScript 的一等公民支持，零配置即可使用",
    description: "Next.js 16 对 TypeScript 提供了一等公民级别的支持，无需额外配置即可在项目中直接使用 .ts 和 .tsx 文件。关键类型变化：Next.js 15+ 中 params 和 searchParams 变为 Promise 类型，需要正确类型化（Promise<{ id: string }>）以获得类型安全。Route Handler 的函数签名使用 NextRequest 和 NextResponse 类型。Next.js 16 还会在开发服务器启动时和构建时进行类型检查，配合 Turbopack 的快速编译，类型检查反馈更加即时。推荐启用 strict 模式以获得最佳类型安全体验。对于大型项目，建议配合 ESLint 和 Husky 实现提交前的类型检查。",
    examples: [
      { word: "Promise 参数类型", meaning: "定义 params 的类型为 Promise<{ id: string }>", breakdown: { root: "TypeScript 集成" }, explanation: "Next.js 16 中 params 是 Promise，需要正确类型化以在 await 后获得类型安全的参数对象。" },
      { word: "SearchParams 类型", meaning: "定义 searchParams 的类型为 Promise<{ page?: string }>", breakdown: { root: "TypeScript 集成" }, explanation: "URL 查询参数也变为 Promise 类型，正确类型化可以避免运行时类型错误。" },
      { word: "API 路由类型", meaning: "使用 NextRequest 和 NextResponse 类型化 Route Handler", breakdown: { root: "TypeScript 集成" }, explanation: "Route Handler 的函数签名应使用 NextRequest 和 NextResponse 类型，获得完整的类型提示和自动补全。" }
    ],
    quiz: {
      question: "Next.js 项目中 TypeScript 配置文件是？",
      options: ["webpack.config.js", "tsconfig.json", "babel.config.js", "next.config.js"],
      correctAnswer: 1
    }
  },
  {
    id: 20,
    root: "环境变量",
    origin: "开发工具",
    meaning: "管理应用配置，区分服务端和客户端可访问的环境变量",
    description: "Next.js 16 提供了完善的环境变量管理系统。通过在项目根目录创建 .env.local 文件来定义环境变量。默认情况下，所有环境变量只在服务端可用（process.env.MY_VAR），不会被打包到客户端 JavaScript 中。如果需要在客户端使用某个环境变量，必须以 NEXT_PUBLIC_ 为前缀（如 NEXT_PUBLIC_API_URL）。Next.js 16 支持 .env.development、.env.production、.env.test 等环境专属文件，以及 .env.local（应在 .gitignore 中排除，存放敏感信息）。在 Vercel 部署时，可以通过项目设置界面配置环境变量，按 Production/Preview/Development 分类管理。",
    examples: [
      { word: "服务端变量", meaning: "DATABASE_URL 只能在服务端访问", breakdown: { root: "环境变量" }, explanation: "不带 NEXT_PUBLIC_ 前缀的变量仅在服务端可用，适合存放数据库连接串、API 密钥等敏感信息。" },
      { word: "客户端变量", meaning: "NEXT_PUBLIC_API_URL 可在浏览器中访问", breakdown: { root: "环境变量" }, explanation: "以 NEXT_PUBLIC_ 开头的变量会被内联到客户端 JS 中，前端代码可以通过 process.env.NEXT_PUBLIC_XXX 访问。" },
      { word: "环境区分", meaning: ".env.development 和 .env.production 自动按环境加载", breakdown: { root: "环境变量" }, explanation: "Next.js 会根据 NODE_ENV 自动加载对应环境的配置文件，开发用本地数据库，生产用远程数据库。" }
    ],
    quiz: {
      question: "哪个前缀的环境变量可以在客户端访问？",
      options: ["CLIENT_", "NEXT_PUBLIC_", "PUBLIC_", "BROWSER_"],
      correctAnswer: 1
    }
  },
  {
    id: 21,
    root: "错误处理",
    origin: "渲染架构",
    meaning: "使用 error.tsx 和 not-found.tsx 优雅处理运行时错误和 404",
    description: "Next.js 提供了多层次的错误处理机制。error.tsx 文件基于 React Error Boundaries，可以捕获同一路由段内组件的运行时错误，显示友好的错误页面而不是白屏。error.tsx 是一个客户端组件，可以使用 useState 实现'重试'功能。not-found.tsx 文件在路由未找到或调用 notFound() 函数时触发，显示自定义 404 页面。这两个文件都可以在任意路由段层级创建，实现细粒度的错误处理。在 Next.js 16 中，错误处理与 PPR 和 Streaming SSR 更好地集成——错误边界可以在流式渲染过程中捕获特定区域的错误，而不影响其他区域的渲染。此外，global-error.tsx 处理根层级的致命错误。",
    examples: [
      { word: "错误边界", meaning: "app/dashboard/error.tsx 捕获该段内的渲染错误", breakdown: { root: "错误处理" }, explanation: "error.tsx 替代了整个页面的白屏，用户可以在错误页面点击'重试'按钮尝试重新加载。" },
      { word: "自定义 404", meaning: "app/not-found.tsx 统一处理所有未匹配的路由", breakdown: { root: "错误处理" }, explanation: "当用户访问不存在的路径时，展示品牌化的 404 页面，引导用户回到正常导航路径。" },
      { word: "主动触发", meaning: "在数据查询为空时调用 notFound() 显示 404", breakdown: { root: "错误处理" }, explanation: "当文章 ID 对应的数据不存在时，调用 notFound() 函数可以主动触发 not-found.tsx 的渲染。" }
    ],
    quiz: {
      question: "Next.js 中处理运行时错误的文件是？",
      options: ["404.tsx", "error.tsx", "catch.tsx", "fallback.tsx"],
      correctAnswer: 1
    }
  },
  {
    id: 22,
    root: "Layout 系统",
    origin: "路由系统",
    meaning: "使用 layout.tsx 定义路由段的共享 UI 布局",
    description: "Layout 系统是 App Router 的核心概念之一。layout.tsx 文件定义了一个路由段的共享外壳 UI，它会在路由切换时保持挂载状态，不会重新渲染。这意味着侧边栏、导航栏、页脚等布局元素可以保留其状态。Layout 通过 props.children 接收子路由的内容，并将其包裹在共享布局中。在 Next.js 16 中，Layout 系统得到了布局去重优化——当多个路由段共享相同的布局组件时，Next.js 会避免重复渲染。Layout 默认是服务端组件，可以获取数据传递给子组件。根布局 app/layout.tsx 必须包含 <html> 和 <body> 标签。",
    examples: [
      { word: "根布局", meaning: "app/layout.tsx 定义全站共享的 HTML 结构和全局样式", breakdown: { root: "Layout 系统" }, explanation: "根布局必须包含 <html> 和 <body> 标签，是所有页面的最外层容器，适合定义全局字体、元数据、主题。" },
      { word: "嵌套布局", meaning: "app/dashboard/layout.tsx 为仪表盘区域提供侧边栏", breakdown: { root: "Layout 系统" }, explanation: "嵌套布局在导航时保持挂载，侧边栏状态不会丢失，提升了仪表盘的交互体验。" },
      { word: "布局去重", meaning: "Next.js 16 自动避免重复渲染相同布局组件", breakdown: { root: "Layout 系统" }, explanation: "当多个路由段引用相同的 layout 组件时，Next.js 16 会智能去重，减少渲染开销。" }
    ],
    quiz: {
      question: "Layout 在路由切换时会怎样？",
      options: ["完全重新渲染", "保持挂载不重新渲染", "先卸载再重新挂载", "部分更新"],
      correctAnswer: 1
    }
  },
  {
    id: 23,
    root: "图片优化",
    origin: "性能优化",
    meaning: "使用 next/image 组件自动优化图片格式、尺寸和加载策略",
    description: "Next.js 的 Image 组件（next/image）是前端图片优化的最佳实践封装。它自动执行多项优化：按需调整图片尺寸（响应式断点）、自动转换为现代格式（WebP/AVIF）、懒加载（默认 viewport 外图片延迟加载）、防止布局偏移（需要指定 width/height 或使用 fill）。在 Next.js 15/16 中，next/image 的默认行为发生了变化——remotePatterns 配置更加严格，未明确允许的外部图片源将被拒绝加载，这是安全性的提升。Image 组件还支持优先级加载（priority 属性，适用于 LCP 图片）、占位符（placeholder='blur'）、自定义加载器等功能。配合 Turbopack 的快速构建，图片优化的配置和预览体验都有显著提升。",
    examples: [
      { word: "响应式图片", meaning: "使用 sizes 属性定义不同视口下的图片尺寸", breakdown: { root: "图片优化" }, explanation: "sizes 属性告诉浏览器在不同屏幕尺寸下应加载多大的图片，避免移动端下载桌面级大图。" },
      { word: "外部图片安全", meaning: "Next.js 16 要求明确配置 remotePatterns 才允许加载外部图片", breakdown: { root: "图片优化" }, explanation: "这是安全性的提升，防止意外加载恶意或未授权的远程图片源。" },
      { word: "首屏图片优化", meaning: "LCP 图片添加 priority 属性避免懒加载", breakdown: { root: "图片优化" }, explanation: "首屏中的关键图片（如 Hero 图片）设置 priority 可以立即加载，不被懒加载延迟，改善 LCP 指标。" }
    ],
    quiz: {
      question: "next/image 组件默认使用什么加载策略？",
      options: ["立即加载", "懒加载", "预加载", "按需加载"],
      correctAnswer: 1
    }
  },
  {
    id: 24,
    root: "Metadata API",
    origin: "SEO 优化",
    meaning: "通过 metadata 导出或 generateMetadata 函数管理页面 SEO 元数据",
    description: "Metadata API 是 Next.js 提供的声明式元数据管理系统，用于控制页面的 title、description、Open Graph 标签、Twitter Card、favicon、sitemap 和 robots.txt 等 SEO 相关内容。有两种使用方式：静态元数据（export const metadata）适用于元数据不依赖动态数据的页面；动态元数据（export async function generateMetadata）适用于需要根据路由参数生成不同元数据的页面。在 Next.js 16 中，Metadata API 与 PPR 更好地集成——静态页面的元数据可以在构建时生成，动态页面的元数据在请求时生成。通过在 app 目录中添加特定文件（如 opengraph-image.tsx、sitemap.ts、robots.ts），可以自动生成对应的 SEO 文件。",
    examples: [
      { word: "静态元数据", meaning: "export const metadata = { title: '首页', description: '...' }", breakdown: { root: "Metadata API" }, explanation: "在 page.tsx 中导出 metadata 对象，Next.js 会自动生成对应的 <title>、<meta> 等 HTML 标签。" },
      { word: "动态元数据", meaning: "根据文章标题和摘要生成 Open Graph 标签", breakdown: { root: "Metadata API" }, explanation: "generateMetadata 函数可以 await 获取文章数据，然后动态生成 title、description、openGraph.image 等。" },
      { word: "OG 图片", meaning: "创建 opengraph-image.tsx 自动生成社交分享图片", breakdown: { root: "Metadata API" }, explanation: "使用 ImageResponse API 可以从 JSX 生成 Open Graph 图片，每个页面可以有独特的社交分享预览图。" }
    ],
    quiz: {
      question: "动态生成页面元数据应使用什么函数？",
      options: ["export const metadata", "export async function generateMetadata", "export function getMeta", "export async function getMetadata"],
      correctAnswer: 1
    }
  },
  {
    id: 25,
    root: "字体优化",
    origin: "性能优化",
    meaning: "使用 next/font 自动托管和优化 Web 字体，消除布局偏移",
    description: "next/font 是 Next.js 内置的字体优化模块，解决了 Web 字体加载的常见问题。它会在构建时自动下载字体文件，并将其与部署一起托管，避免了运行时的外部字体请求。它会生成带有正确 font-size 和 font-display 的 CSS，确保字体加载时不会造成布局偏移（CLS）。支持 Google Fonts 的自动集成（无需 API Key）和本地自定义字体。在 Next.js 16 中，next/font 与 Turbopack 的配合更加高效——字体文件的处理和内联速度更快。使用方式：通过 next/font/google 导入所需字体（如 Inter、Geist），在组件外调用字体函数生成 CSS 变量，然后在 Tailwind 或全局 CSS 中引用。",
    examples: [
      { word: "Google Fonts 集成", meaning: "import { Inter } from 'next/font/google' 自动下载优化", breakdown: { root: "字体优化" }, explanation: "只需导入所需字体，Next.js 会自动处理下载、子集化、CSS 生成，无需手动配置。" },
      { word: "消除布局偏移", meaning: "字体在构建时下载，避免加载时的文字闪烁和布局跳动", breakdown: { root: "字体优化" }, explanation: "通过 font-display: optional 和预计算字体指标，next/font 从根本上解决了 FOUT/FOIT 问题。" },
      { word: "Geist 字体", meaning: "Vercel 出品的 Geist 字体，专为 UI 设计", breakdown: { root: "字体优化" }, explanation: "Geist 是 Vercel 为 Next.js 生态设计的字体，通过 next/font/google 可以直接使用，是现代 Web 应用的推荐选择。" }
    ],
    quiz: {
      question: "next/font 如何解决字体加载导致的布局偏移？",
      options: ["使用更大的字体文件", "在构建时下载并预计算字体指标", "延迟渲染页面直到字体加载", "使用系统字体替代"],
      correctAnswer: 1
    }
  },
  {
    id: 26,
    root: "身份验证",
    origin: "架构模式",
    meaning: "在 Next.js 中实现用户登录、会话管理和路由保护",
    description: "Next.js 16 中的身份验证模式发生了变化——由于 middleware.ts 被 proxy.ts 替代（运行在 Node.js Runtime），身份验证逻辑的实现更加直接。最常用的方案是使用 Auth.js（原 NextAuth.js），它提供了 OAuth、邮箱密码、Magic Link 等多种认证策略。在 App Router 中，可以在 proxy.ts 中检查用户认证状态，未登录则重定向到登录页。Server Actions 中也可以验证用户身份，确保数据操作的安全性。关键原则是：敏感操作必须在服务端验证身份（不能只依赖客户端检查），会话信息应存储在 HTTP-only Cookie 中防止 XSS 攻击。",
    examples: [
      { word: "Proxy 保护", meaning: "在 proxy.ts 中检查 session，未登录重定向到 /login", breakdown: { root: "身份验证" }, explanation: "proxy.ts 是保护路由的第一道防线，在所有页面渲染前验证用户身份，避免闪现未授权内容。" },
      { word: "Server Actions 鉴权", meaning: "在 Server Action 中验证用户权限再执行操作", breakdown: { root: "身份验证" }, explanation: "即使是客户端触发的 Server Action，也需要在服务端验证当前用户的权限，防止越权操作。" },
      { word: "OAuth 登录", meaning: "使用 Auth.js 集成 GitHub/Google 等第三方登录", breakdown: { root: "身份验证" }, explanation: "OAuth 流程由 Auth.js 在服务端处理，用户无需在应用中注册新账号，降低了使用门槛。" }
    ],
    quiz: {
      question: "Next.js 16 中保护路由应该在哪里检查认证状态？",
      options: ["客户端组件的 useEffect 中", "proxy.ts", "CSS 文件中", "package.json 中"],
      correctAnswer: 1
    }
  },
  {
    id: 27,
    root: "状态管理",
    origin: "架构模式",
    meaning: "在 Next.js 应用中管理客户端状态和服务端数据",
    description: "Next.js 应用的状态管理需要区分服务端状态和客户端状态。服务端数据由 Next.js 的 Cache Components 系统管理，通过 RSC 直接获取，无需额外的状态管理库。客户端状态则根据复杂度选择方案：简单场景使用 useState/useReducer 即可；中等复杂度可以使用 Context API；大型应用可以考虑 Zustand、Jotai、Redux Toolkit 等。React Compiler 的引入进一步简化了状态管理——它自动优化组件的 memoization，减少了手动使用 useMemo/useCallback 的需求。关键原则是'尽量让数据靠近使用它的地方'——只在需要的组件或其父组件中管理状态。",
    examples: [
      { word: "Context 共享", meaning: "使用 React Context 在组件树中共享主题或用户信息", breakdown: { root: "状态管理" }, explanation: "Context 适合传递不频繁变化的全局配置（如主题、语言、用户信息），避免逐层传递 props。" },
      { word: "Zustand", meaning: "轻量级状态管理库，API 简单直观", breakdown: { root: "状态管理" }, explanation: "Zustand 使用 create 函数创建 store，组件通过 useStore hook 订阅状态，自动优化渲染。" },
      { word: "React Compiler 优化", meaning: "自动 memoization 减少了手动优化的需要", breakdown: { root: "状态管理" }, explanation: "React Compiler 在编译时自动插入 useMemo/useCallback，开发者可以更专注于业务逻辑而非性能优化。" }
    ],
    quiz: {
      question: "Next.js 16 中服务端数据的状态由什么管理？",
      options: ["Redux", "Zustand", "Cache Components 系统", "localStorage"],
      correctAnswer: 2
    }
  },
  {
    id: 28,
    root: "性能优化",
    origin: "性能优化",
    meaning: "通过 Turbopack、代码分割、资源优化等手段提升应用性能",
    description: "Next.js 16 内置了多项自动性能优化：Turbopack 作为默认 bundler 提供 2-5x 构建速度和 5-10x Fast Refresh；自动代码分割（按页面分割 JS bundle）；图片优化（next/image）；字体优化（next/font）；脚本优化（next/script）。开发者可以主动执行的优化包括：使用动态导入（next/dynamic）延迟加载非关键组件；合理使用 Cache Components 减少不必要的重新渲染；利用缓存系统减少重复数据请求；优化 Web Vitals 指标。配合 React Compiler，许多以前需要手动优化的场景现在可以自动处理，开发者可以更专注于业务逻辑。",
    examples: [
      { word: "动态导入", meaning: "使用 next/dynamic 延迟加载图表或富文本编辑器", breakdown: { root: "性能优化" }, explanation: "将重量级组件设为动态导入，它们不会包含在初始页面 bundle 中，而是在需要时才异步加载。" },
      { word: "脚本优化", meaning: "使用 next/script 控制第三方脚本的加载策略", breakdown: { root: "性能优化" }, explanation: "next/script 支持 beforeInteractive、afterInteractive、lazyOnload 等策略，优化 Google Analytics 等脚本对性能的影响。" },
      { word: "Turbopack 加速", meaning: "默认使用 Turbopack，构建速度提升 2-5 倍", breakdown: { root: "性能优化" }, explanation: "Turbopack 的增量计算特性使得只有变更的模块需要重新编译，大幅提升开发和构建速度。" }
    ],
    quiz: {
      question: "Next.js 16 的默认 bundler 是什么？",
      options: ["Webpack", "esbuild", "Turbopack", "Rollup"],
      correctAnswer: 2
    }
  },
  {
    id: 29,
    root: "SEO 优化",
    origin: "SEO 优化",
    meaning: "通过 Metadata API、sitemap、PPR 等手段优化搜索引擎收录",
    description: "Next.js 16 提供了全面的 SEO 优化能力。服务端渲染天然有利于 SEO——搜索引擎爬虫可以获取完整的 HTML 内容。PPR 模式下，静态外壳部分的内容可以在构建时生成，爬虫可以直接抓取这些静态 HTML。Metadata API 可以管理每个页面的 title、description、canonical URL、Open Graph 和 Twitter Card 标签。通过在 app 目录中创建 sitemap.ts 和 robots.ts 文件，可以动态生成站点地图和爬虫指令。结构化数据（JSON-LD）可以通过在页面中插入 <script type='application/ld+json'> 来实现。配合 Turbopack 的快速构建，SEO 页面的构建和部署速度也有显著提升。",
    examples: [
      { word: "PPR + SEO", meaning: "静态外壳部分可以被爬虫直接抓取", breakdown: { root: "SEO 优化" }, explanation: "PPR 的静态外壳在构建时生成，爬虫无需执行 JavaScript 即可获取核心内容，提升 SEO 效果。" },
      { word: "Sitemap 生成", meaning: "app/sitemap.ts 动态生成站点地图", breakdown: { root: "SEO 优化" }, explanation: "通过导出 generateSitemap 函数，可以从数据库或 CMS 获取所有页面 URL，生成符合 sitemap 协议的 XML。" },
      { word: "结构化数据", meaning: "在页面中注入 JSON-LD 增强搜索结果展示", breakdown: { root: "SEO 优化" }, explanation: "JSON-LD 为搜索引擎提供结构化信息，可以生成丰富的搜索结果卡片（如评分、价格、事件等）。" }
    ],
    quiz: {
      question: "Next.js 中生成 sitemap 的文件是？",
      options: ["app/robots.ts", "app/sitemap.ts", "app/seo.ts", "app/config.ts"],
      correctAnswer: 1
    }
  },
  {
    id: 30,
    root: "DevTools MCP",
    origin: "Next.js 16 核心特性",
    meaning: "Next.js 16 引入的 MCP 协议集成，支持 AI 辅助调试",
    description: "Next.js DevTools MCP（Model Context Protocol）是 Next.js 16 新引入的 AI 辅助调试系统。它为 AI 代理提供以下能力：Next.js 知识（路由、缓存、渲染行为的上下文）、统一日志（浏览器和服务端日志无需切换上下文）、自动错误访问（详细的堆栈追踪无需手动复制）、页面感知（对当前活动路由的上下文理解）。这使得 AI 代理可以直接在开发工作流中诊断问题、解释行为和建议修复方案。对于使用 Cursor、Claude Code 等 AI 编码工具的前端工程师来说，DevTools MCP 可以显著提升调试效率——AI 不再只是看代码，而是能直接访问 Next.js 的运行状态和日志。",
    examples: [
      { word: "统一日志", meaning: "AI 可以同时查看浏览器控制台和服务端日志", breakdown: { root: "DevTools MCP" }, explanation: "不需要在浏览器 DevTools 和终端之间来回切换，MCP 为 AI 提供完整的运行上下文。" },
      { word: "自动错误诊断", meaning: "AI 可以直接获取详细的错误堆栈信息", breakdown: { root: "DevTools MCP" }, explanation: "AI 不需要开发者手动复制粘贴错误信息，可以直接从 MCP 获取完整的错误上下文并给出修复建议。" },
      { word: "路由上下文理解", meaning: "AI 理解当前活动的路由及其缓存和渲染状态", breakdown: { root: "DevTools MCP" }, explanation: "MCP 为 AI 提供当前页面的路由信息、缓存状态、渲染模式等上下文，使诊断建议更加精准。" }
    ],
    quiz: {
      question: "Next.js DevTools MCP 的 MCP 代表什么？",
      options: ["Multi-Component Protocol", "Model Context Protocol", "Module Control Protocol", "Memory Cache Protocol"],
      correctAnswer: 1
    }
  }
];
