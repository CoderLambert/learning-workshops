const WordRoots = [
  {
    id: 1,
    root: "并发模式 (Concurrent Mode)",
    origin: "React 18 新特性",
    meaning: "React 18引入的底层并发渲染架构，让React可以同时准备多个UI版本",
    description: "并发模式是React 18的核心底层架构升级，它让React能够同时准备多个UI版本而不阻塞主线程。通过并发特性，React可以中断、重新排序或中止渲染任务，优先处理高优先级更新（如用户输入），延迟处理低优先级更新（如数据加载）。这使得用户界面始终保持响应性，不再因为大量渲染任务而卡顿。并发模式是渐进采用的，不需要修改现有代码即可享受部分好处。",
    examples: [
      {
        word: "自动并发渲染",
        meaning: "升级React 18后自动获得并发能力",
        breakdown: { root: "并发模式" },
        explanation: "使用ReactDOM.createRoot(rootNode).render(<App />)替代ReactDOM.render后，所有更新默认进入并发模式，React会自动将渲染任务拆分为可中断的小单元，在浏览器空闲时执行。"
      },
      {
        word: "优先级调度",
        meaning: "不同更新具有不同优先级",
        breakdown: { root: "并发模式" },
        explanation: "用户输入（点击、打字）是紧急更新，会立即执行；数据获取、渲染大量列表是非紧急更新，可以在后台处理。React会根据更新来源自动分配优先级。"
      },
      {
        word: "可中断渲染",
        meaning: "渲染过程可以被高优先级任务打断",
        breakdown: { root: "并发模式" },
        explanation: "当React正在渲染一个大型列表时，如果用户点击了按钮，React会暂停当前渲染，先处理按钮点击，然后再继续列表渲染。这让界面始终保持流畅响应。"
      }
    ],
    quiz: {
      question: "React 18并发模式的核心优势是什么？",
      options: ["减少了组件数量", "让渲染任务可中断，保持界面响应性", "自动优化CSS性能", "减少了JavaScript包体积"],
      correctAnswer: 1
    }
  },
  {
    id: 2,
    root: "自动批处理 (Automatic Batching)",
    origin: "React 18 新特性",
    meaning: "React 18将所有状态更新自动批处理，无论更新发生在何处",
    description: "在React 18之前，只有事件处理函数内的多个setState会被批处理为一次渲染。而在Promise回调、setTimeout、原生事件处理器中的setState每次都会触发单独渲染。React 18引入了自动批处理，将所有来源的状态更新统一收集，合并为一次渲染。这大幅减少了渲染次数，提升了应用性能。如果确实需要同步获取更新后的状态，可以使用flushSync()退出批处理。",
    examples: [
      {
        word: "事件处理中的批处理",
        meaning: "点击事件中的多个setState合并为一次渲染",
        breakdown: { root: "自动批处理" },
        explanation: "在onClick中调用setCount(c => c + 1)和setName('React')，React 17和18都会批处理为一次渲染，这是原有行为。"
      },
      {
        word: "异步操作中的批处理",
        meaning: "Promise回调中的setState也被批处理",
        breakdown: { root: "自动批处理" },
        explanation: "fetch('/api').then(() => { setCount(1); setName('React'); }) 在React 17会触发两次渲染，在React 18只触发一次，这是重大改进。"
      },
      {
        word: "退出批处理",
        meaning: "使用flushSync强制同步更新",
        breakdown: { root: "自动批处理" },
        explanation: "import { flushSync } from 'react-dom'; flushSync(() => { setCount(1); }); // 立即渲染。适用于需要立即读取更新后DOM的场景，如测量元素尺寸。"
      }
    ],
    quiz: {
      question: "React 18中，Promise回调内的多个setState会触发几次渲染？",
      options: ["每次setState都触发一次", "两次渲染", "一次渲染（自动批处理）", "不触发渲染"],
      correctAnswer: 2
    }
  },
  {
    id: 3,
    root: "Transitions API",
    origin: "React 18 新特性",
    meaning: "将更新标记为非紧急的过渡更新，避免阻塞用户交互",
    description: "Transitions API是React 18新增的并发特性，允许开发者将某些更新标记为'过渡'（非紧急）更新。通过startTransition回调或useTransition Hook，可以将如搜索过滤、列表渲染等耗时更新标记为低优先级。当有紧急更新（如用户输入）时，过渡更新会被中断并重新执行。这确保了界面始终保持响应，用户输入不会被大量渲染任务阻塞。过渡更新还提供了isPending状态，方便显示加载指示器。",
    examples: [
      {
        word: "startTransition函数",
        meaning: "将更新标记为过渡更新",
        breakdown: { root: "Transitions API" },
        explanation: "import { startTransition } from 'react'; startTransition(() => { setSearchResults(filterItems(input)); }); 这会将搜索过滤标记为非紧急更新，不会阻塞用户输入。"
      },
      {
        word: "useTransition Hook",
        meaning: "在组件中使用过渡状态",
        breakdown: { root: "Transitions API" },
        explanation: "const [isPending, startTransition] = useTransition(); startTransition(() => { setQuery(input); }); isPending为true时可以显示加载提示，让用户知道过渡更新正在进行中。"
      },
      {
        word: "搜索框优化",
        meaning: "输入是紧急的，搜索结果展示是过渡的",
        breakdown: { root: "Transitions API" },
        explanation: "用户输入 inputValue 时立即显示（紧急更新），但过滤列表结果用 startTransition 包装（过渡更新）。这样即使列表有上万条数据需要过滤，输入框也不会卡顿。"
      }
    ],
    quiz: {
      question: "以下哪种场景最适合使用Transitions API？",
      options: ["用户点击提交按钮", "输入框文字更新", "大型列表的搜索过滤结果展示", "表单验证错误提示"],
      correctAnswer: 2
    }
  },
  {
    id: 4,
    root: "Suspense 增强",
    origin: "React 18 新特性",
    meaning: "Suspense现在可以在服务端渲染和客户端任意位置使用",
    description: "React 18大幅增强了Suspense的能力。之前Suspense主要用于配合React.lazy做代码分割的加载状态管理。现在Suspense支持在服务端渲染中流式传输HTML、在客户端任意组件树下使用、嵌套使用实现细粒度加载控制。当Suspense树下的某个组件还在等待数据时，可以显示fallback内容，数据就绪后无缝替换。配合并发模式，Suspense可以实现优雅的加载体验，不再需要到处手动管理loading状态。",
    examples: [
      {
        word: "客户端数据获取",
        meaning: "用Suspense包裹异步数据组件",
        breakdown: { root: "Suspense 增强" },
        explanation: "<Suspense fallback={<Spinner />}><Comments /></Suspense> Comments内部使用use配合获取数据，数据未就绪时显示Spinner，就绪后自动切换显示评论内容。"
      },
      {
        word: "嵌套Suspense",
        meaning: "多层级细粒度加载控制",
        breakdown: { root: "Suspense 增强" },
        explanation: "外层Suspense显示大骨架屏，内层Suspense显示局部加载指示器。这样用户可以先看到页面框架，各部分数据逐个加载完成，而不是等所有数据齐了才显示整个页面。"
      },
      {
        word: "SSR流式渲染",
        meaning: "服务端渲染中逐步发送HTML",
        breakdown: { root: "Suspense 增强" },
        explanation: "服务端先发送外壳HTML，Suspense包裹的部分在数据就绪后通过<script>标签流式发送并hydrate。用户更早看到页面内容，不再需要等待所有数据加载完才返回HTML。"
      }
    ],
    quiz: {
      question: "React 18中Suspense的主要增强是什么？",
      options: ["只支持代码分割", "只能在顶层使用", "支持SSR流式渲染和任意位置嵌套使用", "不再需要fallback"],
      correctAnswer: 2
    }
  },
  {
    id: 5,
    root: "useId Hook",
    origin: "React 18 Hooks",
    meaning: "生成跨服务端和客户端唯一的稳定ID，用于无障碍访问",
    description: "useId是React 18新增的Hook，用于生成在服务端渲染和客户端渲染时保持一致的唯一ID。在服务端和客户端渲染两套独立的环境下（如SSR），之前的Math.random()或递增计数器方案会导致ID不匹配，引发hydration错误和Accessibility问题。useId生成的ID在服务器和客户端完全一致，特别适合表单label与input的关联、ARIA属性等无障碍访问场景。同一个组件内多次调用useId会返回不同ID，不同组件的ID也互不相同。",
    examples: [
      {
        word: "表单label关联",
        meaning: "用useId连接label和input",
        breakdown: { root: "useId Hook" },
        explanation: "function NameField() { const id = useId(); return (<><label htmlFor={id}>姓名</label><input id={id} /></>); } 确保label和input正确关联，提升无障碍访问体验。"
      },
      {
        word: "ARIA属性",
        meaning: "用于无障碍访问的ARIA关联",
        breakdown: { root: "useId Hook" },
        explanation: "const id = useId(); <div aria-describedby={id}>说明文字</div><p id={id}>详细描述</p> 使用useId确保aria-describedby在SSR时不会出现hydration mismatch。"
      },
      {
        word: "prefix参数",
        meaning: "在useId基础上添加前缀",
        breakdown: { root: "useId Hook" },
        explanation: "const id = useId(); const nameId = id + '-name'; const emailId = id + '-email'; 当需要生成多个相关ID时，可以用同一useId加不同后缀，保持ID的唯一性和关联性。"
      }
    ],
    quiz: {
      question: "useId Hook主要解决什么问题？",
      options: ["性能优化", "生成SSR和客户端一致的ID用于无障碍访问", "管理全局状态", "替代useRef"],
      correctAnswer: 1
    }
  },
  {
    id: 6,
    root: "useSyncExternalStore Hook",
    origin: "React 18 Hooks",
    meaning: "用于订阅外部数据源的Hook，状态管理库底层推荐方案",
    description: "useSyncExternalStore是React 18为支持外部状态管理库（如Redux、Zustand、Jotai）而设计的Hook。它提供了一种安全的方式让React组件订阅外部存储（不在React管理范围内的数据源），并在数据变化时高效地重新渲染。相比之前的useEffect订阅方案，useSyncExternalStore避免了并发模式下的tearing问题（即渲染过程中读取到不一致的快照），确保整个渲染树基于同一份数据快照。状态管理库作者应该使用此Hook来构建与React 18兼容的库。",
    examples: [
      {
        word: "订阅Redux store",
        meaning: "在组件中读取Redux状态",
        breakdown: { root: "useSyncExternalStore Hook" },
        explanation: "const state = useSyncExternalStore(store.subscribe, () => store.getState()); 当store变化时，组件会重新渲染，且在整个渲染过程中读取的是同一份快照。"
      },
      {
        word: "自定义store订阅",
        meaning: "订阅自定义外部数据源",
        breakdown: { root: "useSyncExternalStore Hook" },
        explanation: "const value = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot); subscribe注册回调、getSnapshot返回当前值、getServerSnapshot用于SSR时返回服务端初始值。"
      },
      {
        word: "避免tearing",
        meaning: "防止并发渲染中数据不一致",
        breakdown: { root: "useSyncExternalStore Hook" },
        explanation: "在并发模式下，如果两个组件在同一个渲染过程中读取外部store，旧方案可能导致读到不同时刻的值。useSyncExternalStore确保整个渲染使用同一快照，避免tearing问题。"
      }
    ],
    quiz: {
      question: "useSyncExternalStore主要用于什么场景？",
      options: ["组件内部状态管理", "订阅外部数据源并避免并发tearing", "替代useState", "处理副作用"],
      correctAnswer: 1
    }
  },
  {
    id: 7,
    root: "useInsertionEffect Hook",
    origin: "React 18 Hooks",
    meaning: "在DOM突变之前同步插入样式的专用Hook，CSS-in-JS库底层使用",
    description: "useInsertionEffect是React 18新增的底层Hook，专门给CSS-in-JS库（如styled-components、Emotion）使用。它在所有DOM突变发生之前同步执行，确保样式在DOM变更之前就已插入到document中。相比useLayoutEffect，useInsertionEffect的执行时机更早，避免了在并发渲染中可能出现的样式闪烁问题。普通应用开发者一般不需要直接使用这个Hook，但了解它的存在有助于理解React生态库的工作原理。",
    examples: [
      {
        word: "CSS-in-JS库使用",
        meaning: "在DOM突变前注入样式",
        breakdown: { root: "useInsertionEffect Hook" },
        explanation: "styled-components内部使用useInsertionEffect在组件渲染前将动态生成的CSS插入<style>标签，确保样式在DOM出现前就已就绪，避免样式闪烁。"
      },
      {
        word: "与useLayoutEffect对比",
        meaning: "理解不同Effect的执行顺序",
        breakdown: { root: "useInsertionEffect Hook" },
        explanation: "执行顺序：useInsertionEffect → DOM更新 → useLayoutEffect → 浏览器绘制。useInsertionEffect在DOM更新之前执行，适合注入样式；useLayoutEffect在DOM更新后执行，适合读取DOM尺寸。"
      },
      {
        word: "普通开发者建议",
        meaning: "一般不需要直接使用",
        breakdown: { root: "useInsertionEffect Hook" },
        explanation: "大多数场景使用useEffect或useLayoutEffect即可。useInsertionEffect主要面向CSS-in-JS库作者，确保样式注入时序正确。普通开发者了解其存在即可。"
      }
    ],
    quiz: {
      question: "useInsertionEffect的执行时机是？",
      options: ["在浏览器绘制之后", "在DOM突变之后", "在DOM突变之前", "与useEffect相同"],
      correctAnswer: 2
    }
  },
  {
    id: 8,
    root: "use Hook",
    origin: "React 18/19 Hooks",
    meaning: "读取Promise或Context值的实验性Hook，支持在条件语句中使用",
    description: "use是React实验性Hook（React 19正式推出），用于读取Promise或Context的值。与传统Hooks不同，use可以在条件语句、循环和事件处理中调用，不受Hooks调用规则限制。当传入Promise时，use会挂起组件渲染直到Promise resolved，配合Suspense使用可以实现优雅的数据获取。当传入Context时，use等同于useContext但更灵活。use的出现简化了异步数据获取的模式，未来可能成为React数据获取的标准方案。",
    examples: [
      {
        word: "读取Promise",
        meaning: "在组件中直接读取异步数据",
        breakdown: { root: "use Hook" },
        explanation: "function Comments() { const comments = use(commentsPromise); return <ul>{comments.map(c => <li>{c.text}</li>)}</ul>; } 配合Suspense使用，数据未就绪时显示fallback。"
      },
      {
        word: "条件语句中使用",
        meaning: "在if语句中调用use",
        breakdown: { root: "use Hook" },
        explanation: "if (shouldFetch) { const data = use(fetchData()); } 这是use相对于其他Hooks的重大区别——它不受React Hooks只能在顶层调用的规则限制，可以在任何位置使用。"
      },
      {
        word: "读取Context",
        meaning: "use替代useContext",
        breakdown: { root: "use Hook" },
        explanation: "const theme = use(ThemeContext); 等同于useContext(ThemeContext)但更灵活，可以在条件语句中调用。同时读取多个Context也更简洁。"
      }
    ],
    quiz: {
      question: "use Hook与传统Hooks的最大区别是什么？",
      options: ["只能在顶层调用", "可以在条件语句、循环中使用", "不能配合Suspense", "只能读取Context"],
      correctAnswer: 1
    }
  },
  {
    id: 9,
    root: "React Server Components (RSC)",
    origin: "Server Components",
    meaning: "在服务端执行的组件，不打包到客户端JS，减少客户端体积",
    description: "React Server Components是React的革命性架构升级，允许组件完全在服务端运行而不向客户端发送任何JavaScript代码。RSC可以直连数据库、读取文件系统、使用大型npm依赖，这些都不会增加客户端包体积。RSC组件在服务器渲染为特殊的序列化格式，由客户端React运行时接收并渲染。RSC与Client Components可以混合使用，通过import 'use client'指令标记客户端组件。这种架构大幅减少了首屏需要下载的JS量，提升了加载速度和SEO表现。",
    examples: [
      {
        word: "服务端组件基础",
        meaning: "组件默认就是服务端组件",
        breakdown: { root: "React Server Components" },
        explanation: "在Next.js App Router中，组件默认就是Server Component。可以直接在服务端读取数据库：async function Page() { const data = await db.query('SELECT * FROM users'); return <Users data={data} />; }"
      },
      {
        word: "use client指令",
        meaning: "标记客户端组件",
        breakdown: { root: "React Server Components" },
        explanation: "'use client'; 放在文件顶部表示此组件是客户端组件，可以使用useState、useEffect等Hook和浏览器API。Server Component可以import Client Component使用。"
      },
      {
        word: "减少客户端JS体积",
        meaning: "大型依赖只在服务端使用",
        breakdown: { root: "React Server Components" },
        explanation: "import { remark } from 'remark'; // 在Server Component中使用，remark库不会打包到客户端。客户端只收到渲染后的HTML和必要交互代码，大幅减少首屏JS体积。"
      }
    ],
    quiz: {
      question: "React Server Components的主要优势是什么？",
      options: ["可以在客户端使用浏览器API", "减少客户端JS体积，可以直连数据库", "替代了所有客户端组件", "不需要任何构建工具"],
      correctAnswer: 1
    }
  },
  {
    id: 10,
    root: "流式SSR (Streaming SSR)",
    origin: "Server Components",
    meaning: "服务端逐步发送HTML到客户端，用户更早看到页面内容",
    description: "流式SSR是React 18配合Server Components引入的服务端渲染改进。传统SSR需要等待所有数据加载完成才返回完整HTML，用户看到的是空白页面直到所有内容就绪。流式SSR允许React先将HTML外壳发送给用户，然后逐个将就绪的部分通过Suspense边界流式传输到客户端。用户可以更早看到页面布局和内容，各部分数据加载完成后逐个显示。这大幅改善了用户感知的首屏加载时间（FCP/LCP指标），是性能优化的重要手段。",
    examples: [
      {
        word: "基础流式渲染",
        meaning: "用Suspense实现流式加载",
        breakdown: { root: "流式SSR" },
        explanation: "在Next.js中，<Suspense fallback={<Skeleton />}><SlowComponent /></Suspense> 外壳HTML先发送，SlowComponent数据就绪后通过流式传输替换Skeleton。"
      },
      {
        word: "选择性Hydration",
        meaning: "优先Hydrate用户可见的部分",
        breakdown: { root: "流式SSR" },
        explanation: "React会优先Hydrate用户当前看到的部分，而非按照DOM顺序。比如用户滚动到底部时，底部的组件会优先获得交互能力，顶部的可以稍后Hydrate。"
      },
      {
        word: "渐进增强",
        meaning: "从静态HTML到完全交互的渐进过程",
        breakdown: { root: "流式SSR" },
        explanation: "用户访问时先看到静态HTML → 各部分数据逐个加载并替换 → JS逐步Hydrate使页面可交互 → 最终变为完整的SPA体验。整个过程平滑无闪断。"
      }
    ],
    quiz: {
      question: "流式SSR相比传统SSR的改进是什么？",
      options: ["需要更多客户端JS", "不再需要Suspense", "逐步发送HTML，用户更早看到内容", "只能在客户端使用"],
      correctAnswer: 2
    }
  },
  {
    id: 11,
    root: "Server Actions",
    origin: "Server Components",
    meaning: "在客户端组件中直接调用服务端函数的能力",
    description: "Server Actions是React/Next.js引入的服务端函数调用能力，允许在客户端组件中直接调用服务端代码而无需手动创建API路由。通过'use server'指令标记的函数可以在服务端运行，客户端通过函数引用来调用。这简化了表单提交、数据修改等操作的模式，不再需要fetch('/api/xxx')。Server Actions自动处理序列化、错误处理、CSRF防护，并支持revalidatePath/Tag来更新缓存数据。配合Next.js的表单增强（form action），可以实现渐进增强的表单提交。",
    examples: [
      {
        word: "use server指令",
        meaning: "定义服务端可调用函数",
        breakdown: { root: "Server Actions" },
        explanation: "'use server'; export async function createUser(formData) { const name = formData.get('name'); await db.users.create({ name }); revalidatePath('/users'); } 此函数在服务端运行。"
      },
      {
        word: "客户端组件调用",
        meaning: "从客户端调用Server Action",
        breakdown: { root: "Server Actions" },
        explanation: "'use client'; import { createUser } from './actions'; <form action={createUser}><input name='name' /><button>提交</button></form> 表单提交自动调用服务端函数。"
      },
      {
        word: "渐进增强表单",
        meaning: "无JS时也能正常工作的表单",
        breakdown: { root: "Server Actions" },
        explanation: "使用<form action={serverAction}>时，即使客户端JS未加载，表单也能通过传统POST提交到服务端执行。JS加载后自动升级为无刷新提交，实现渐进增强。"
      }
    ],
    quiz: {
      question: "Server Actions的主要优势是什么？",
      options: ["需要在客户端安装额外依赖", "简化了客户端调用服务端代码的模式", "只能在服务端组件中使用", "不支持表单提交"],
      correctAnswer: 1
    }
  },
  {
    id: 12,
    root: "RSC中的数据获取",
    origin: "Server Components",
    meaning: "在Server Component中使用async/await直接获取数据",
    description: "在React Server Components架构中，数据获取变得极其简单。Server Component本身就是async函数，可以直接使用await获取数据，无需useEffect、无需状态管理、无需loading状态（由Suspense接管）。React/Next.js还会自动对相同的数据请求去重和缓存，同一个请求参数在同一个请求周期内只会执行一次。数据获取后可以直接传递给子组件或客户端组件。这种模式消除了传统SPA中复杂的loading/error状态管理，代码更简洁，性能更好。",
    examples: [
      {
        word: "Server Component中获取数据",
        meaning: "直接用async/await获取数据",
        breakdown: { root: "RSC数据获取" },
        explanation: "async function Page({ params }) { const post = await fetch('/api/posts/' + params.id); return <Post post={post} />; } 无需useEffect，无需useState，简洁直观。"
      },
      {
        word: "并发数据获取",
        meaning: "多个不相关的数据请求并发执行",
        breakdown: { root: "RSC数据获取" },
        explanation: "async function Page() { const [users, posts] = await Promise.all([fetchUsers(), fetchPosts()]); return <><UserList users={users} /><PostList posts={posts} /></>; } 两个请求并发执行。"
      },
      {
        word: "自动缓存与去重",
        meaning: "相同请求自动缓存，避免重复请求",
        breakdown: { root: "RSC数据获取" },
        explanation: "Next.js默认对fetch请求进行缓存。如果在同一页面多个组件都请求/api/users，实际只会发送一次HTTP请求。可以通过cache: 'no-store'或revalidate配置控制缓存策略。"
      }
    ],
    quiz: {
      question: "在Server Component中获取数据，推荐使用什么方式？",
      options: ["useEffect + fetch", "async/await直接在组件中", "Redux + thunk", "只在useMemo中获取"],
      correctAnswer: 1
    }
  },
  {
    id: 13,
    root: "Next.js App Router",
    origin: "Next.js App Router",
    meaning: "Next.js 13+引入的全新路由系统，基于文件夹约定和React Server Components",
    description: "Next.js App Router是Next.js 13引入的全新应用架构，取代了传统的Pages Router。它基于文件系统约定：app/目录下的每个文件夹代表一个路由，layout.js定义共享布局，page.js定义路由内容，loading.js定义Suspense fallback，error.js定义错误边界。App Router默认使用React Server Components，支持嵌套布局、并行路由、拦截路由等高级特性。它与React 18的并发特性深度集成，提供了更灵活、更高效的应用架构。",
    examples: [
      {
        word: "文件约定路由",
        meaning: "通过文件夹结构定义路由",
        breakdown: { root: "Next.js App Router" },
        explanation: "app/dashboard/layout.js → 仪表盘共享布局；app/dashboard/page.js → /dashboard路由页面；app/dashboard/settings/page.js → /dashboard/settings路由页面。"
      },
      {
        word: "嵌套布局",
        meaning: "多层级共享布局自动嵌套",
        breakdown: { root: "Next.js App Router" },
        explanation: "app/layout.js（根布局）→ app/blog/layout.js（博客布局）→ app/blog/[slug]/page.js（文章页面）。子布局自动嵌套在父布局的children插槽中，无需手动组合。"
      },
      {
        word: "动态路由",
        meaning: "通过[参数]文件夹定义动态路由",
        breakdown: { root: "Next.js App Router" },
        explanation: "app/posts/[id]/page.js 匹配 /posts/1, /posts/2 等。组件通过props.params访问参数：export default function Page({ params }) { const { id } = params; }。[...slug]支持捕获所有剩余路径段。"
      }
    ],
    quiz: {
      question: "Next.js App Router中，定义路由页面应该使用哪个文件？",
      options: ["index.js", "route.js", "page.js", "component.js"],
      correctAnswer: 2
    }
  },
  {
    id: 14,
    root: "Server与Client组件协同",
    origin: "Next.js App Router",
    meaning: "在服务端组件和客户端组件之间正确传递数据和交互的模式",
    description: "Next.js App Router的核心概念是Server Component和Client Component的混合使用。默认所有组件都是Server Component，需要浏览器API或React Hook时用'use client'标记为Client Component。关键原则是：Server Component可以import Client Component，但Client Component不能import Server Component（因为Server Component只能在服务端运行）。最佳实践是尽量将组件保持为Server Component，在靠近叶子节点处使用Client Component，这种模式称为'组件插槽模式'，可以最大化利用服务端渲染的优势。",
    examples: [
      {
        word: "组件插槽模式",
        meaning: "将客户端组件作为props传入服务端组件",
        breakdown: { root: "Server与Client协同" },
        explanation: "Server Component中: <ClientWrapper><ServerExpensiveComponent /></ClientWrapper>。这样ServerExpensiveComponent在服务端渲染，只把渲染结果传给ClientWrapper，避免整个树被标记为客户端组件。"
      },
      {
        word: "数据流向",
        meaning: "服务端组件向客户端组件传递数据",
        breakdown: { root: "Server与Client协同" },
        explanation: "async function Page() { const data = await fetchData(); return <ClientComponent data={data} />; } Server Component获取数据后通过props传递给Client Component，数据会被序列化传输。"
      },
      {
        word: "use client最佳位置",
        meaning: "在组件树尽可能深的位置使用",
        breakdown: { root: "Server与Client协同" },
        explanation: "不要在顶层布局就用'use client'。应该让layout和page保持为Server Component，只在真正需要交互的子组件（如按钮、输入框）中用'use client'，最大化服务端渲染收益。"
      }
    ],
    quiz: {
      question: "Server Component和Client Component之间正确的关系是？",
      options: ["Client可以import Server", "Server可以import Client，但Client不能import Server", "两者完全隔离不能互相引用", "必须全部使用use client"],
      correctAnswer: 1
    }
  },
  {
    id: 15,
    root: "布局系统与并行路由",
    origin: "Next.js App Router",
    meaning: "Next.js App Router的嵌套布局和并行路由高级特性",
    description: "Next.js App Router提供了强大的布局系统：layout.js文件定义该路由及其子路由共享的布局，通过children prop渲染子页面。布局在导航时保持状态、不重新渲染，可以保持交互状态（如播放器、侧边栏展开状态）。此外，App Router还支持并行路由（parallel routes）——用@folder约定同时渲染多个页面，适合仪表盘、多面板布局；拦截路由（intercepting routes）用(..)或(...)前缀，适合模态框场景——在模态框中展示另一个路由的内容，关闭后回到原路由。",
    examples: [
      {
        word: "嵌套布局",
        meaning: "layout.js自动嵌套",
        breakdown: { root: "布局系统" },
        explanation: "app/layout.js包含<html><body>{children}</body></html>，app/dashboard/layout.js包含侧边栏导航，app/dashboard/analytics/page.js显示分析数据。三层布局自动嵌套。"
      },
      {
        word: "并行路由",
        meaning: "同时渲染多个独立页面",
        breakdown: { root: "布局系统" },
        explanation: "app/dashboard/@team/page.js和app/dashboard/@analytics/page.js，在app/dashboard/layout.js中通过{props.team}和{props.analytics}同时渲染，适合仪表盘多面板布局。"
      },
      {
        word: "拦截路由",
        meaning: "在模态框中展示另一个路由",
        breakdown: { root: "布局系统" },
        explanation: "app/photos/(..)photo/[id]/page.js 拦截了 /photo/[id] 路由，在模态框中展示照片详情。刷新页面时访问 /photo/[id] 则显示完整页面。适合社交媒体的照片查看体验。"
      }
    ],
    quiz: {
      question: "Next.js中实现模态框展示另一个路由的最佳方式是？",
      options: ["使用useState控制显示", "使用拦截路由(intercepting routes)", "使用iframe嵌入", "使用React Portal"],
      correctAnswer: 1
    }
  },
  {
    id: 16,
    root: "React Query / TanStack Query",
    origin: "React 生态工具",
    meaning: "React生态中最流行的服务端状态管理库，处理数据获取、缓存、同步",
    description: "TanStack Query（原名React Query）是React生态中用于管理服务端状态的标准方案。与zustand/Redux等管理客户端状态不同，TanStack Query专门处理从服务端获取的数据：自动缓存、后台重新获取、去重请求、乐观更新、无限滚动、分页等。它提供了useQuery获取数据、useMutation修改数据的Hook，自动处理loading、error状态。配合React 18的并发特性，TanStack Query v5实现了更好的性能和类型安全。使用TanStack Query可以消除大量手写的数据获取样板代码。",
    examples: [
      {
        word: "useQuery基础",
        meaning: "获取并缓存服务端数据",
        breakdown: { root: "TanStack Query" },
        explanation: "const { data, isLoading, error } = useQuery({ queryKey: ['users'], queryFn: fetchUsers }); 自动处理loading和error状态，数据被缓存并在后台定期刷新。"
      },
      {
        word: "useMutation",
        meaning: "处理数据修改操作",
        breakdown: { root: "TanStack Query" },
        explanation: "const mutation = useMutation({ mutationFn: createUser, onSuccess: () => queryClient.invalidateQueries(['users']) }); mutation.mutate({ name: 'React' }); 创建用户后自动刷新用户列表。"
      },
      {
        word: "乐观更新",
        meaning: "在服务器响应前更新UI",
        breakdown: { root: "TanStack Query" },
        explanation: "useMutation({ onMutate: async (newData) => { await queryClient.cancelQueries(['posts']); const previous = queryClient.getQueryData(['posts']); queryClient.setQueryData(['posts'], old => [...old, newData]); return { previous }; }, onError: (err, newData, context) => { queryClient.setQueryData(['posts'], context.previous); } }); 失败时自动回滚。"
      }
    ],
    quiz: {
      question: "TanStack Query主要管理什么类型的状态？",
      options: ["客户端UI状态（如开关、模态框）", "服务端状态（如API数据、缓存）", "全局应用状态", "表单状态"],
      correctAnswer: 1
    }
  },
  {
    id: 17,
    root: "React.memo性能优化",
    origin: "性能优化",
    meaning: "通过浅比较props来避免组件不必要的重新渲染",
    description: "React.memo是一个高阶组件，用于优化函数组件的渲染性能。当一个组件被React.memo包裹后，React会在props发生变化时才重新渲染该组件，否则复用上次渲染的结果。这对于渲染开销大的组件（如大型列表项、复杂图表）非常有用。React.memo使用浅比较（shallow comparison）判断props是否变化，如果props中有函数或对象字面量，每次渲染都会创建新引用，导致memo失效。因此需要配合useMemo和useCallback来稳定props引用。",
    examples: [
      {
        word: "基础用法",
        meaning: "包裹组件避免不必要的重渲染",
        breakdown: { root: "React.memo" },
        explanation: "const UserCard = React.memo(function UserCard({ user }) { return <div>{user.name}</div>; }); 当user prop没有变化时，UserCard不会重新渲染。"
      },
      {
        word: "自定义比较函数",
        meaning: "自定义props比较逻辑",
        breakdown: { root: "React.memo" },
        explanation: "const UserCard = React.memo(function UserCard({ user }) { /* ... */ }, (prevProps, nextProps) => prevProps.user.id === nextProps.user.id); 只有id变化时才重新渲染。"
      },
      {
        word: "配合useCallback",
        meaning: "稳定函数引用使memo生效",
        breakdown: { root: "React.memo" },
        explanation: "const handleClick = useCallback(() => { /* ... */ }, []); <MemoizedButton onClick={handleClick} /> 如果不用useCallback，每次父组件渲染都会创建新的函数引用，导致memo失效。"
      }
    ],
    quiz: {
      question: "React.memo默认使用什么方式比较props？",
      options: ["深度比较", "浅比较", "JSON序列化比较", "不比较"],
      correctAnswer: 1
    }
  },
  {
    id: 18,
    root: "useMemo与useCallback",
    origin: "性能优化",
    meaning: "缓存计算结果和函数引用，避免不必要的重新计算和子组件重渲染",
    description: "useMemo和useCallback是React最重要的性能优化Hook。useMemo缓存计算结果，只有依赖变化时才重新计算，适用于昂贵的计算操作（如大数据过滤、排序、复杂对象创建）。useCallback缓存函数引用，只有依赖变化时才创建新函数，主要用于配合React.memo避免子组件因函数引用变化而重渲染。注意这两个Hook都有自身的开销（依赖比较、内存分配），不应过度使用——只在真正有性能瓶颈的地方使用，而不是每个值都包裹。React 18的编译器未来可能自动进行这些优化。",
    examples: [
      {
        word: "useMemo缓存计算",
        meaning: "避免每次渲染都重新计算",
        breakdown: { root: "useMemo与useCallback" },
        explanation: "const sortedUsers = useMemo(() => users.sort((a, b) => a.name.localeCompare(b.name)), [users]); 只有users数组变化时才重新排序，避免每次渲染都执行昂贵的排序操作。"
      },
      {
        word: "useCallback稳定引用",
        meaning: "防止函数引用变化导致子组件重渲染",
        breakdown: { root: "useMemo与useCallback" },
        explanation: "const handleClick = useCallback((id) => { setSelected(id); }, []); <MemoizedItem onClick={handleClick} /> 函数引用稳定，MemoizedItem不会因父组件渲染而重渲染。"
      },
      {
        word: "使用原则",
        meaning: "不要过度使用，只在必要时优化",
        breakdown: { root: "useMemo与useCallback" },
        explanation: "React官方建议：先让代码正常工作，再用React Profiler找到真正的性能瓶颈，然后针对性地添加useMemo/useCallback。过早优化可能让代码更复杂且收益甚微。"
      }
    ],
    quiz: {
      question: "关于useMemo和useCallback，以下哪种说法正确？",
      options: ["每个值都应该用useMemo包裹", "它们完全没有开销，可以随意使用", "应该在识别到真实性能瓶颈后有针对性地使用", "它们可以替代React.memo"],
      correctAnswer: 2
    }
  },
  {
    id: 19,
    root: "React Profiler性能分析",
    origin: "性能优化",
    meaning: "React内置的性能分析工具，用于测量渲染耗时和优化",
    description: "React Profiler是React DevTools中的性能分析工具，可以测量组件树的渲染耗时、渲染次数和渲染原因。通过Profiler，开发者可以直观地看到哪些组件渲染最耗时、为什么重新渲染（props变化、state变化等），从而有针对性地优化。除了DevTools的可视化Profiler，React还提供了<Profiler>组件用于编程方式收集性能数据。性能优化的黄金法则是：先用Profiler测量，再优化，最后再测量验证。盲目优化往往适得其反。",
    examples: [
      {
        word: "React DevTools Profiler",
        meaning: "使用浏览器扩展测量性能",
        breakdown: { root: "React Profiler" },
        explanation: "安装React DevTools浏览器扩展 → 打开Profiler标签 → 点击录制按钮 → 与页面交互 → 停止录制。火焰图显示每个组件的渲染时间和原因，可以排序和筛选。"
      },
      {
        word: "Profiler组件",
        meaning: "在代码中嵌入性能测量",
        breakdown: { root: "React Profiler" },
        explanation: "import { Profiler } from 'react'; <Profiler id='App' onRender={callback}><App /></Profiler> onRender回调提供actualDuration（实际渲染时间）、baseDuration（无优化时的时间）等数据。"
      },
      {
        word: "优化验证流程",
        meaning: "测量→优化→再测量",
        breakdown: { root: "React Profiler" },
        explanation: "1) 用Profiler找到渲染最慢的组件和原因；2) 针对性添加React.memo、useMemo等优化；3) 再次用Profiler测量验证优化效果。这个循环确保优化是有效的而非猜测。"
      }
    ],
    quiz: {
      question: "性能优化的正确流程是什么？",
      options: ["凭感觉直接添加useMemo", "先测量(Profiler)→优化→再测量验证", "把所有组件都用React.memo包裹", "只在生产环境测量"],
      correctAnswer: 1
    }
  },
  {
    id: 20,
    root: "Error Boundaries",
    origin: "最佳实践",
    meaning: "捕获子组件树中的JavaScript错误，显示降级UI而非白屏",
    description: "Error Boundary是React提供的错误处理机制，可以捕获子组件树中任何位置的JavaScript错误，显示备用的降级UI，而不是让整个应用白屏崩溃。Error Boundary通过类组件的componentDidCatch或getDerivedStateFromError实现（目前尚无等价的Hook）。最佳实践是在应用的关键部分（如侧边栏、评论区、仪表盘卡片）包裹Error Boundary，这样一个部分的错误不会影响其他部分。React 19将引入use Hook的错误处理增强，但Error Boundary仍然是兜底方案。",
    examples: [
      {
        word: "基础Error Boundary",
        meaning: "捕获子组件错误并显示降级UI",
        breakdown: { root: "Error Boundaries" },
        explanation: "class ErrorBoundary extends React.Component { state = { hasError: false }; static getDerivedStateFromError() { return { hasError: true }; } componentDidCatch(error, info) { logError(error, info); } render() { return this.state.hasError ? <Fallback /> : this.props.children; } }"
      },
      {
        word: "局部包裹策略",
        meaning: "在关键部分使用Error Boundary",
        breakdown: { root: "Error Boundaries" },
        explanation: "<ErrorBoundary><Sidebar /></ErrorBoundary><ErrorBoundary><Comments /></ErrorBoundary> 每个部分独立处理错误，一个组件崩溃不会影响其他部分，提升应用整体稳定性。"
      },
      {
        word: "生产环境错误上报",
        meaning: "在componentDidCatch中上报错误",
        breakdown: { root: "Error Boundaries" },
        explanation: "componentDidCatch(error, errorInfo) { sendToErrorTracking(error, { componentStack: errorInfo.componentStack }); } 配合Sentry等错误追踪服务，可以监控生产环境的组件错误。"
      }
    ],
    quiz: {
      question: "Error Boundary目前只能通过什么方式实现？",
      options: ["useError Hook", "useEffect捕获", "类组件的componentDidCatch/getDerivedStateFromError", "try/catch包裹组件"],
      correctAnswer: 2
    }
  }
];
window.wordData = { words: WordRoots };
