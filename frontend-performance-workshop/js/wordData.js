const WordRoots = [
  {
    id: 1,
    root: "LCP（最大内容绘制）",
    origin: "核心指标",
    meaning: "Largest Contentful Paint，衡量页面主要内容加载速度的指标",
    description: "LCP衡量从用户开始加载页面到视口中最大内容元素（如大图片、标题、视频）渲染完成的时间。Google建议LCP在2.5秒以内为良好，2.5-4.0秒需要改进，超过4.0秒则较差。LCP是Core Web Vitals三大核心指标之一，直接影响用户感知到的加载速度。优化LCP需要减少资源加载时间、优化关键渲染路径。",
    examples: [
      {
        word: "优化首屏图片",
        meaning: "使用预加载提升LCP元素加载速度",
        breakdown: { root: "LCP" },
        explanation: "<link rel=\"preload\" as=\"image\" href=\"/hero.jpg\"> 使用preload预加载LCP元素，避免浏览器延迟发现资源，大幅缩短LCP时间。对于首屏大图、字体等关键资源特别有效。"
      },
      {
        word: "服务端渲染优化",
        meaning: "使用SSR/SSG直接输出HTML减少LCP",
        breakdown: { root: "LCP" },
        explanation: "使用Next.js的SSR或Gatsby的SSG，首屏HTML直接包含完整内容，浏览器无需等待JS执行就能渲染LCP元素。相比CSR（客户端渲染），LCP通常可以缩短50%以上。"
      },
      {
        word: "移除阻塞资源",
        meaning: "消除CSS/JS对LCP元素的阻塞",
        breakdown: { root: "LCP" },
        explanation: "将非关键CSS使用<link rel=\"stylesheet\" media=\"print\">延迟加载，将非关键JS添加defer/async属性，避免它们阻塞HTML解析和渲染。同时减少CSS体积，压缩合并关键CSS。"
      }
    ],
    quiz: {
      question: "Google建议的LCP良好阈值是？",
      options: ["1秒以内", "2.5秒以内", "3秒以内", "4秒以内"],
      correctAnswer: 1
    }
  },
  {
    id: 2,
    root: "FID（首次输入延迟）",
    origin: "核心指标",
    meaning: "First Input Delay，衡量用户首次交互时页面的响应速度",
    description: "FID衡量从用户首次与页面交互（如点击链接、点击按钮）到浏览器实际开始处理该事件之间的延迟时间。建议FID在100毫秒以内为良好，100-300毫秒需要改进，超过300毫秒较差。FID主要受JavaScript执行时间影响，长任务（超过50ms的JS执行）是主要元凶。注意：FID已被INP替代作为Core Web Vitals指标。",
    examples: [
      {
        word: "拆分长任务",
        meaning: "将长时间JS任务拆分为小块",
        breakdown: { root: "FID" },
        explanation: "使用setTimeout或requestIdleCallback将大型计算任务拆分：\nfunction processLargeData(data) {\n  const chunkSize = 50;\n  let index = 0;\n  function processChunk() {\n    const chunk = data.slice(index, index + chunkSize);\n    // 处理当前块\n    index += chunkSize;\n    if (index < data.length) {\n      setTimeout(processChunk, 0);\n    }\n  }\n  processChunk();\n}\n确保单个任务不超过50ms。"
      },
      {
        word: "延迟非关键JS",
        meaning: "将非关键JS延迟到交互需要时加载",
        breakdown: { root: "FID" },
        explanation: "使用动态import()按需加载：\ndocument.getElementById('chart-btn').addEventListener('click', async () => {\n  const { drawChart } = await import('./chart.js');\n  drawChart();\n});\n图表库只在用户点击时才加载，避免了初始化时阻塞主线程。"
      },
      {
        word: "Web Worker卸载任务",
        meaning: "使用Web Worker处理CPU密集型任务",
        breakdown: { root: "FID" },
        explanation: "const worker = new Worker('processor.js');\nworker.postMessage({ data: largeDataset });\nworker.onmessage = (e) => { updateUI(e.data); };\n在worker.js中进行复杂计算，不会阻塞主线程，用户可以正常交互，保持FID良好。"
      }
    ],
    quiz: {
      question: "FID主要受什么因素影响？",
      options: ["图片加载速度", "JavaScript执行时间", "CSS渲染时间", "网络带宽"],
      correctAnswer: 1
    }
  },
  {
    id: 3,
    root: "CLS（累积布局偏移）",
    origin: "核心指标",
    meaning: "Cumulative Layout Shift，衡量页面视觉稳定性的指标",
    description: "CLS衡量页面加载过程中，意外布局偏移对用户体验的影响程度。计算公式为每个不稳定元素的偏移分数之和。建议CLS在0.1以内为良好，0.1-0.25需要改进，超过0.25较差。常见原因包括：未指定尺寸的图片/视频、动态插入内容、字体切换导致的FOIT/FOUT、异步加载的广告等。",
    examples: [
      {
        word: "指定图片宽高",
        meaning: "为所有img元素设置width和height属性",
        breakdown: { root: "CLS" },
        explanation: "<img src=\"photo.jpg\" width=\"800\" height=\"600\" alt=\"描述\"> 或使用CSS aspect-ratio：\nimg { aspect-ratio: 4/3; width: 100%; height: auto; }\n浏览器提前预留空间，图片加载完成后不会导致布局偏移。"
      },
      {
        word: "字体加载优化",
        meaning: "避免字体切换导致的布局偏移",
        breakdown: { root: "CLS" },
        explanation: "使用font-display: swap让系统字体先显示，自定义字体加载后替换；同时选择尺寸接近的fallback字体：\n@font-face {\n  font-family: 'CustomFont';\n  src: url('/font.woff2') format('woff2');\n  font-display: swap;\n}\nbody { font-family: 'CustomFont', 'Arial', sans-serif; }"
      },
      {
        word: "动画替代布局变化",
        meaning: "用transform代替影响布局的属性做动画",
        breakdown: { root: "CLS" },
        explanation: "避免用JS动态改变元素的height、width、margin等影响布局的属性做动画。改用transform: scale()和transform: translateY()做动画，这些属性不会触发布局重新计算，不会导致CLS。"
      }
    ],
    quiz: {
      question: "以下哪个CSS属性做动画不会导致CLS？",
      options: ["width", "margin-top", "transform", "height"],
      correctAnswer: 2
    }
  },
  {
    id: 4,
    root: "INP（交互到下一次绘制）",
    origin: "核心指标",
    meaning: "Interaction to Next Paint，衡量页面交互响应性的新指标",
    description: "INP是Google在2024年3月正式取代FID成为Core Web Vitals的新指标。它观察页面整个生命周期内所有交互的响应延迟，取最差情况（第98百分位值）作为INP分数。建议INP在200毫秒以内为良好，200-500毫秒需要改进，超过500毫秒较差。INP比FID更全面，能反映页面整个生命周期内的交互体验。",
    examples: [
      {
        word: "优化事件处理函数",
        meaning: "确保事件处理函数快速返回",
        breakdown: { root: "INP" },
        explanation: "事件处理函数应该只做最小必要工作，耗时操作使用requestIdleCallback或setTimeout延迟：\ndocument.querySelector('.btn').addEventListener('click', (e) => {\n  e.currentTarget.classList.add('active'); // 立即视觉反馈\n  requestIdleCallback(() => { /* 耗时计算 */ });\n});"
      },
      {
        word: "避免同步布局读取",
        meaning: "不要在JS修改样式后立即读取布局属性",
        breakdown: { root: "INP" },
        explanation: "同步的读写布局属性会强制浏览器立即计算布局（强制同步回流），导致交互延迟：\n// 错误写法\nel.style.width = el.offsetWidth + 10 + 'px';\n// 正确写法：分批操作，先读后写\nconst w = el.offsetWidth;\nrequestAnimationFrame(() => { el.style.width = w + 10 + 'px'; });"
      },
      {
        word: "使用content-visibility优化",
        meaning: "延迟渲染屏幕外的内容",
        breakdown: { root: "INP" },
        explanation: ".offscreen-section { content-visibility: auto; contain-intrinsic-size: 0 500px; }\n浏览器会跳过屏幕外内容的渲染，减少主线程工作量，使交互响应更快。用户滚动到该区域时才渲染内容，大幅提升INP。"
      }
    ],
    quiz: {
      question: "INP在2024年取代了哪个指标成为Core Web Vitals指标？",
      options: ["FCP", "TTFB", "FID", "LCP"],
      correctAnswer: 2
    }
  },
  {
    id: 5,
    root: "TTFB（首字节时间）",
    origin: "核心指标",
    meaning: "Time to First Byte，从请求到收到第一个字节的时间",
    description: "TTFB衡量浏览器发起请求后到接收到服务器响应的第一个字节所花费的时间。建议TTFB在0.8秒以内为良好。TTFB包含了DNS解析、TCP连接、TLS协商、服务器处理时间。优化TTFB是优化所有后续指标的基础，因为TTFB慢了，LCP、FCP等都会变慢。TTFB不是Core Web Vitals指标，但它是性能优化的基础。",
    examples: [
      {
        word: "使用CDN加速",
        meaning: "通过CDN缩短用户到服务器的物理距离",
        breakdown: { root: "TTFB" },
        explanation: "将静态资源部署到Cloudflare、阿里云CDN等全球CDN节点，用户从最近的边缘节点获取内容，大幅减少网络往返时间。动态内容可以使用CDN的边缘计算功能缓存API响应，进一步降低TTFB。"
      },
      {
        word: "启用HTTP/2",
        meaning: "使用HTTP/2协议提升传输效率",
        breakdown: { root: "TTFB" },
        explanation: "HTTP/2支持多路复用、头部压缩（HPACK）、服务器推送等特性。同一个域名下的多个请求可以并行传输，不需要像HTTP/1.1那样受限于6个并发连接数。Nginx只需添加http2指令即可启用：listen 443 ssl http2;"
      },
      {
        word: "优化服务器响应",
        meaning: "减少服务器处理请求的时间",
        breakdown: { root: "TTFB" },
        explanation: "使用数据库查询缓存（Redis）、页面缓存、API响应缓存减少后端处理时间。对于SSR应用，可以使用ISR（增量静态再生成）缓存渲染结果。Node.js中避免阻塞事件循环的操作，使用异步I/O。"
      }
    ],
    quiz: {
      question: "TTFB的良好阈值是？",
      options: ["0.2秒以内", "0.5秒以内", "0.8秒以内", "1秒以内"],
      correctAnswer: 2
    }
  },
  {
    id: 6,
    root: "FCP（首次内容绘制）",
    origin: "核心指标",
    meaning: "First Contentful Paint，页面首次渲染出内容的时间",
    description: "FCP衡量从导航开始到页面渲染出第一个DOM内容（文本、图片、SVG、canvas等）的时间。建议FCP在1.8秒以内为良好，1.8-3.0秒需要改进，超过3.0秒较差。FCP是用户感知到的`页面开始加载`的标志。FCP和LCP的区别在于：FCP是第一个内容，LCP是最大的内容。优化FCP重点关注关键渲染路径。",
    examples: [
      {
        word: "内联关键CSS",
        meaning: "将首屏必需的CSS直接写入HTML",
        breakdown: { root: "FCP" },
        explanation: "<style>body{margin:0;font-family:system-ui,sans-serif}.hero{min-height:100vh}</style>\n<link rel=\"stylesheet\" href=\"styles.css\" media=\"print\" onload=\"this.media='all'\">\n将首屏必需的CSS内联到HTML中，非关键CSS延迟加载，浏览器无需等待外部CSS文件就能渲染首屏。"
      },
      {
        word: "最小化关键请求链",
        meaning: "减少阻塞渲染的资源数量和大小",
        breakdown: { root: "FCP" },
        explanation: "关键请求链深度 = 关键资源数量 × 每个资源加载时间。优化方法：减少渲染阻塞资源数量，压缩关键CSS/JS体积，使用preload提前加载关键资源，使用font-display: swap避免字体阻塞。"
      },
      {
        word: "使用预连接加速",
        meaning: "提前建立与第三方资源的连接",
        breakdown: { root: "FCP" },
        explanation: "<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n<link rel=\"preconnect\" href=\"https://cdn.example.com\" crossorigin>\n<link rel=\"dns-prefetch\" href=\"https://api.example.com\">\n提前进行DNS解析、TCP连接、TLS协商，后续请求直接发送数据，节省200-500ms。"
      }
    ],
    quiz: {
      question: "FCP衡量的是页面何时出现？",
      options: ["第一个DOM内容渲染时", "页面完全加载时", "用户可交互时", "LCP元素渲染时"],
      correctAnswer: 0
    }
  },
  {
    id: 7,
    root: "图片性能优化",
    origin: "资源优化",
    meaning: "通过多种技术手段优化图片加载，减少带宽和时间",
    description: "图片通常占据网页总下载量的60%以上，是性能优化的最大战场。优化策略包括：使用现代格式（WebP、AVIF）、响应式图片（srcset/sizes）、懒加载、压缩、CDN裁剪、预加载关键图片等。一张合适的图片应该同时满足格式最优、尺寸合适、加载时机正确三个条件。",
    examples: [
      {
        word: "使用现代图片格式",
        meaning: "用WebP/AVIF替代JPEG/PNG",
        breakdown: { root: "图片性能优化" },
        explanation: "<picture>\n  <source srcset=\"photo.avif\" type=\"image/avif\">\n  <source srcset=\"photo.webp\" type=\"image/webp\">\n  <img src=\"photo.jpg\" alt=\"描述\" loading=\"lazy\" width=\"800\" height=\"600\">\n</picture>\nAVIF比JPEG小50%，WebP比JPEG小25-35%，fallback保证兼容性。"
      },
      {
        word: "响应式图片",
        meaning: "根据屏幕尺寸加载合适大小的图片",
        breakdown: { root: "图片性能优化" },
        explanation: "<img srcset=\"small.jpg 480w, medium.jpg 800w, large.jpg 1200w\"\n     sizes=\"(max-width: 480px) 480px, (max-width: 800px) 800px, 1200px\"\n     src=\"medium.jpg\" alt=\"响应式图片\">\n浏览器根据屏幕宽度自动选择最合适的图片，移动端不会下载桌面端的大图。"
      },
      {
        word: "懒加载非首屏图片",
        meaning: "图片进入视口时才开始加载",
        breakdown: { root: "图片性能优化" },
        explanation: "<img src=\"placeholder.jpg\" data-src=\"real.jpg\" loading=\"lazy\" alt=\"描述\">\n使用原生loading=\"lazy\"属性，浏览器在图片接近视口时才发起请求。对于首屏图片不要加lazy，否则LCP会变差。可以结合IntersectionObserver实现自定义懒加载逻辑。"
      }
    ],
    quiz: {
      question: "以下哪个图片格式压缩率最高？",
      options: ["JPEG", "PNG", "WebP", "AVIF"],
      correctAnswer: 3
    }
  },
  {
    id: 8,
    root: "JavaScript性能优化",
    origin: "资源优化",
    meaning: "减少JS对页面加载和交互的负面影响",
    description: "JavaScript是阻塞渲染的主要资源，会延迟FCP和LCP。JS体积越大、执行时间越长，性能越差。优化策略包括：Tree Shaking消除未用代码、Code Splitting按需加载、使用defer/async非阻塞加载、压缩混淆、移除未用的Polyfill、使用原生API替代库函数等。现代构建工具（Vite、Webpack）内置了很多优化能力。",
    examples: [
      {
        word: "使用defer和async",
        meaning: "让JS不阻塞HTML解析",
        breakdown: { root: "JavaScript性能优化" },
        explanation: "<script src=\"app.js\" defer></script>\ndefer：HTML解析完成后按顺序执行，不阻塞渲染，适合应用脚本。\n<script src=\"analytics.js\" async></script>\nasync：下载完成后立即执行，不保证顺序，适合独立脚本如统计代码。"
      },
      {
        word: "Tree Shaking消除死代码",
        meaning: "只打包实际使用的代码",
        breakdown: { root: "JavaScript性能优化" },
        explanation: "// 只引入需要的函数\nimport { debounce } from 'lodash-es';\n// 而不是 import _ from 'lodash';\n\n// 使用ES模块语法，Webpack/Rollup才能进行Tree Shaking\nexport function helper() { /* ... */ }\nexport function unused() { /* 不会被打包 */ }\n配合ESM格式的库，构建工具可以消除未使用的导出。"
      },
      {
        word: "动态import按需加载",
        meaning: "路由/组件级别代码分割",
        breakdown: { root: "JavaScript性能优化" },
        explanation: "// 路由级别\nconst Dashboard = () => import('./Dashboard');\n// 事件级别\nbutton.addEventListener('click', async () => {\n  const { heavyCalc } = await import('./heavy.js');\n  heavyCalc();\n});\n只在需要时加载代码，首屏JS体积减少50-70%，大幅提升加载速度。"
      }
    ],
    quiz: {
      question: "script标签使用defer属性时，脚本何时执行？",
      options: ["立即下载并执行", "HTML解析完成后", "页面完全加载后", "用户交互时"],
      correctAnswer: 1
    }
  },
  {
    id: 9,
    root: "CSS性能优化",
    origin: "资源优化",
    meaning: "优化CSS加载和渲染，减少渲染阻塞",
    description: "CSS是渲染阻塞资源，浏览器必须在构建渲染树之前加载并解析所有CSS。优化CSS的核心思路是：减少关键CSS体积、延迟非关键CSS、消除未用样式、避免昂贵的CSS选择器。现代CSS还引入了容器查询、层叠层等新特性，也需要关注其性能影响。",
    examples: [
      {
        word: "消除未用CSS",
        meaning: "使用工具移除项目中未使用的样式",
        breakdown: { root: "CSS性能优化" },
        explanation: "使用PurgeCSS扫描HTML/JS/模板文件，移除未使用的CSS选择器：\n// postcss.config.js\nconst purgecss = require('@fullhuman/purgecss');\nmodule.exports = {\n  plugins: [purgecss({\n    content: ['./src/**/*.html', './src/**/*.js'],\n  })]\n};\n生产环境CSS可从500KB减少到20KB以下。"
      },
      {
        word: "避免昂贵选择器",
        meaning: "使用高效的CSS选择器",
        breakdown: { root: "CSS性能优化" },
        explanation: "避免深层嵌套和通用选择器：\n/* 昂贵 */\nbody div.container ul li a { }\n* { } .wrapper * { }\n/* 高效 */\n.card-title { }\n.card-link { }\n使用BEM命名或CSS Modules保持选择器扁平，减少浏览器的样式匹配计算。"
      },
      {
        word: "延迟非关键CSS",
        meaning: "首屏外的CSS延迟加载",
        breakdown: { root: "CSS性能优化" },
        explanation: "<link rel=\"preload\" as=\"style\" href=\"print.css\" onload=\"this.onload=null;this.rel='stylesheet'\">\n<noscript><link rel=\"stylesheet\" href=\"print.css\"></noscript>\n使用preload+onload技巧，CSS在后台下载但不阻塞渲染，下载完成后再应用样式。适合打印样式表、非首屏组件样式等。"
      }
    ],
    quiz: {
      question: "为什么CSS会阻塞渲染？",
      options: ["CSS文件太大", "浏览器必须在渲染前解析完CSS来构建渲染树", "CSS下载太慢", "CSS优先级高"],
      correctAnswer: 1
    }
  },
  {
    id: 10,
    root: "字体加载优化",
    origin: "资源优化",
    meaning: "优化自定义字体的加载和渲染，避免文字不可见或布局偏移",
    description: "自定义字体通常体积较大（50-200KB），且加载过程中的字体切换会导致CLS。字体加载策略需要平衡视觉效果（FOIT/FOUT）和CLS。优化方法包括：字体子集化、使用font-display、预加载关键字体、使用本地系统字体作为fallback、WOFF2格式等。",
    examples: [
      {
        word: "font-display策略选择",
        meaning: "根据场景选择合适的字体显示策略",
        breakdown: { root: "字体加载优化" },
        explanation: "@font-face {\n  font-family: 'HeadingFont';\n  src: url('/heading.woff2') format('woff2');\n  font-display: swap;\n}\nswap：先用fallback字体显示，加载完替换（适合正文）。\noptional：首次访问用fallback，后续用自定义字体。\noptional几乎零CLS，适合对布局敏感的场景。"
      },
      {
        word: "字体子集化",
        meaning: "只加载页面实际使用的字符",
        breakdown: { root: "字体加载优化" },
        explanation: "使用glyphhanger或Fonttools提取页面用到的字符，生成子集字体：\nglyphhanger https://example.com --subset=font.woff2\n原本100KB的中文字体，子集化后可能只有20-30KB。\n对于中文网站，可以使用分区加载策略：预加载常用字，其余延迟加载。"
      },
      {
        word: "预加载关键字体",
        meaning: "提前加载页面必需的字体文件",
        breakdown: { root: "字体加载优化" },
        explanation: "<link rel=\"preload\" href=\"/fonts/heading.woff2\" as=\"font\" type=\"font/woff2\" crossorigin>\n<preload>必须在HTML中发现字体引用前就开始下载，消除字体加载的延迟，确保LCP元素的文字使用自定义字体时不会被fallback字体影响。"
      }
    ],
    quiz: {
      question: "font-display: swap的行为是？",
      options: ["等待字体加载完再显示文字", "先用fallback字体显示，加载完替换", "字体加载失败时隐藏文字", "始终使用系统字体"],
      correctAnswer: 1
    }
  },
  {
    id: 11,
    root: "懒加载与延迟执行",
    origin: "加载策略",
    meaning: "按需加载非关键资源，减少首屏负担",
    description: "懒加载是前端性能优化的核心策略之一，核心理念是`只加载当前需要的内容`。适用于图片、视频、iframe、组件、数据、路由等。浏览器原生支持loading=\"lazy\"，框架层面也有React.lazy()、Vue defineAsyncComponent等。配合IntersectionObserver可实现更精细的懒加载控制。",
    examples: [
      {
        word: "iframe懒加载",
        meaning: "延迟加载嵌入的第三方内容",
        breakdown: { root: "懒加载与延迟执行" },
        explanation: "<iframe src=\"https://www.youtube.com/embed/xxx\"\n        loading=\"lazy\"\n        width=\"560\" height=\"315\"></iframe>\nYouTube嵌入可能增加2-5MB的JS，使用loading=\"lazy\"确保用户滚动到视频区域时才加载。对于地图嵌入、社交插件同样适用。"
      },
      {
        word: "IntersectionObserver懒加载",
        meaning: "使用IntersectionObserver实现自定义懒加载",
        breakdown: { root: "懒加载与延迟执行" },
        explanation: "const observer = new IntersectionObserver((entries) => {\n  entries.forEach(entry => {\n    if (entry.isIntersecting) {\n      const img = entry.target;\n      img.src = img.dataset.src;\n      observer.unobserve(img);\n    }\n  });\n});\ndocument.querySelectorAll('img[data-src]').forEach(img => observer.observe(img));\n比原生loading=\"lazy\"更灵活，可以自定义加载阈值和占位逻辑。"
      },
      {
        word: "React组件懒加载",
        meaning: "使用React.lazy()按需加载组件",
        breakdown: { root: "懒加载与延迟执行" },
        explanation: "import { lazy, Suspense } from 'react';\nconst HeavyComponent = lazy(() => import('./HeavyComponent'));\nfunction App() {\n  return (\n    <Suspense fallback={<div>Loading...</div>}>\n      <HeavyComponent />\n    </Suspense>\n  );\n}\n组件代码在渲染时才被加载，首屏JS减少，FCP提升。"
      }
    ],
    quiz: {
      question: "以下哪个API可以实现自定义的懒加载逻辑？",
      options: ["setTimeout", "IntersectionObserver", "requestAnimationFrame", "MutationObserver"],
      correctAnswer: 1
    }
  },
  {
    id: 12,
    root: "代码分割与按需加载",
    origin: "加载策略",
    meaning: "将代码拆分为多个块，按需加载以减少首屏体积",
    description: "代码分割是减少首屏JS体积的最有效手段。核心思想是将一个大bundle拆分为多个小chunk，只加载首屏必需的代码。分割策略包括：路由级别（每个路由一个chunk）、组件级别（懒加载非首屏组件）、库级别（第三方库单独拆分）。Webpack和Vite都支持自动代码分割。",
    examples: [
      {
        word: "路由级别代码分割",
        meaning: "每个路由对应一个独立的chunk",
        breakdown: { root: "代码分割与按需加载" },
        explanation: "const routes = [\n  { path: '/', component: () => import('./Home.vue') },\n  { path: '/about', component: () => import('./About.vue') },\n  { path: '/dashboard', component: () => import('./Dashboard.vue') },\n];\n用户访问首页时只加载Home的chunk，不会下载About和Dashboard的代码。"
      },
      {
        word: "拆分第三方库",
        meaning: "将vendor库拆分为独立的chunk",
        breakdown: { root: "代码分割与按需加载" },
        explanation: "// vite.config.js\nexport default {\n  build: {\n    rollupOptions: {\n      output: {\n        manualChunks: {\n          vendor: ['vue', 'vue-router'],\n          charts: ['echarts'],\n          utils: ['lodash-es', 'dayjs'],\n        }\n      }\n    }\n  }\n}\n第三方库更新频率低，可以长期缓存；业务代码频繁更新，分开拆分提高缓存命中率。"
      },
      {
        word: "魔法注释自定义chunk名",
        meaning: "使用Webpack魔法注释控制chunk名称",
        breakdown: { root: "代码分割与按需加载" },
        explanation: "// 将多个组件合并为一个chunk\nconst AdminPanel = () => import(/* webpackChunkName: \"admin\" */ './AdminPanel.vue');\nconst UserMgmt = () => import(/* webpackChunkName: \"admin\" */ './UserMgmt.vue');\n// 预加载chunk\nconst Chart = () => import(/* webpackPreload: true */ './Chart.vue');\n// 预取 chunk（空闲时加载）\nconst Settings = () => import(/* webpackPrefetch: true */ './Settings.vue');"
      }
    ],
    quiz: {
      question: "代码分割的主要目的是？",
      options: ["让代码更易读", "减少首屏JS体积，提升加载速度", "增加代码安全性", "减少服务器带宽"],
      correctAnswer: 1
    }
  },
  {
    id: 13,
    root: "浏览器缓存策略",
    origin: "缓存策略",
    meaning: "合理利用浏览器缓存减少重复请求，提升二次访问速度",
    description: "浏览器缓存是提升重复访问性能最经济有效的方式。合理的缓存策略应该：静态资源长期缓存（1年）、HTML不缓存或短缓存、API响应根据数据变化频率设置。Cache-Control头部是核心控制手段，配合ETag实现协商缓存。Service Worker可以实现更精细的缓存策略。",
    examples: [
      {
        word: "强缓存策略",
        meaning: "使用Cache-Control设置长期缓存",
        breakdown: { root: "浏览器缓存策略" },
        explanation: "// Nginx配置\nlocation ~* \\.(js|css|png|jpg|woff2)$ {\n  expires 1y;\n  add_header Cache-Control \"public, immutable\";\n}\npublic：CDN和浏览器都可缓存。\nimmutable：文件内容不变（通过文件名hash区分），浏览器无需再发请求验证。适合构建时添加了文件名hash的静态资源。"
      },
      {
        word: "协商缓存策略",
        meaning: "使用ETag验证资源是否变化",
        breakdown: { root: "浏览器缓存策略" },
        explanation: "当强缓存过期后，浏览器发送If-None-Match头部到服务器：\n// 首次响应\nHTTP/1.1 200 OK\nETag: \"abc123\"\nCache-Control: max-age=3600\n\n// 一小时后再次请求\nGET /style.css\nIf-None-Match: \"abc123\"\n// 未修改则返回304\nHTTP/1.1 304 Not Modified\n服务器确认资源未变则返回304，不传输body，节省带宽。"
      },
      {
        word: "Service Worker缓存",
        meaning: "使用Service Worker实现自定义缓存策略",
        breakdown: { root: "浏览器缓存策略" },
        explanation: "self.addEventListener('fetch', (event) => {\n  if (event.request.url.includes('/api/')) {\n    // API请求：网络优先，失败回退缓存\n    event.respondWith(\n      fetch(event.request).catch(() => caches.match(event.request))\n    );\n  } else {\n    // 静态资源：缓存优先\n    event.respondWith(\n      caches.match(event.request).then(r => r || fetch(event.request))\n    );\n  }\n});"
      }
    ],
    quiz: {
      question: "Cache-Control: immutable的含义是？",
      options: ["资源永远不会被缓存", "资源URL不变则内容也不变，浏览器无需重新验证", "资源只能被服务器缓存", "资源每次都需要验证"],
      correctAnswer: 1
    }
  },
  {
    id: 14,
    root: "CDN与边缘计算优化",
    origin: "架构优化",
    meaning: "利用CDN和边缘计算加速内容分发",
    description: "CDN（内容分发网络）通过将内容缓存到全球各地的边缘节点，让用户从物理距离最近的服务器获取资源。边缘计算更进一步，允许在CDN节点上运行代码（如Cloudflare Workers），实现A/B测试、个性化渲染、API聚合等功能。CDN是降低TTFB最简单有效的方式。",
    examples: [
      {
        word: "CDN静态资源加速",
        meaning: "将静态资源部署到CDN",
        breakdown: { root: "CDN与边缘计算优化" },
        explanation: "// 使用CDN域名提供静态资源\n<img src=\"https://cdn.example.com/images/hero.avif\">\n<script src=\"https://cdn.example.com/js/app.a1b2c3.js\"></script>\n关键配置：开启gzip/Brotli压缩、设置长期缓存、启用HTTP/2、开启图片自动格式转换（AVIF/WebP）。国内可用阿里云CDN、腾讯云CDN，海外可用Cloudflare。"
      },
      {
        word: "边缘HTML渲染",
        meaning: "在CDN边缘节点渲染HTML",
        breakdown: { root: "CDN与边缘计算优化" },
        explanation: "// Cloudflare Workers边缘渲染\naddEventListener('fetch', (event) => {\n  event.respondWith(handleRequest(event.request));\n});\nasync function handleRequest(request) {\n  const html = await renderPage(request.url);\n  return new Response(html, {\n    headers: { 'Content-Type': 'text/html' }\n  });\n}\n在离用户最近的节点渲染HTML，TTFB可以低至10-50ms。"
      },
      {
        word: "CDN缓存规则优化",
        meaning: "配置CDN缓存策略提升命中率",
        breakdown: { root: "CDN与边缘计算优化" },
        explanation: "CDN缓存命中率越高，回源越少，速度越快：\n1. 静态资源设置长缓存时间，使用文件名hash\n2. API响应根据数据变化频率设置不同TTL\n3. 使用Cache-Key忽略不必要的query参数\n4. 设置预热（Prefetch）预加载热门内容到边缘节点\n5. 配置适当的Vary头部避免缓存污染"
      }
    ],
    quiz: {
      question: "CDN降低TTFB的核心原理是？",
      options: ["压缩文件体积", "让用户从物理距离最近的节点获取内容", "增加服务器性能", "减少HTTP请求数"],
      correctAnswer: 1
    }
  },
  {
    id: 15,
    root: "Chrome DevTools性能分析",
    origin: "分析工具",
    meaning: "使用Chrome DevTools分析页面性能瓶颈",
    description: "Chrome DevTools是前端性能分析最强大的内置工具。Performance面板可以录制页面运行过程，查看每一帧的渲染开销、JS调用栈、网络请求、布局重排等。Lighthouse面板一键生成性能报告。Memory面板分析内存泄漏。Network面板查看资源加载瀑布图。Elements面板的Coverage功能分析CSS/JS代码利用率。",
    examples: [
      {
        word: "Performance面板录制分析",
        meaning: "录制页面交互过程，分析性能瓶颈",
        breakdown: { root: "Chrome DevTools性能分析" },
        explanation: "1. 打开DevTools > Performance面板\n2. 点击录制按钮（或Ctrl+E）\n3. 执行页面操作（如滚动、点击）\n4. 停止录制，查看分析结果\n\n重点关注：\n- FPS曲线：低于60fps说明有掉帧\n- 黄色区域（Scripting）：JS执行时间\n- 紫色区域（Rendering）：布局重排开销\n- 红色三角：性能警告（长任务、布局抖动）"
      },
      {
        word: "Coverage面板分析代码利用率",
        meaning: "找出未使用的CSS和JS代码",
        breakdown: { root: "Chrome DevTools性能分析" },
        explanation: "1. DevTools > Ctrl+Shift+P > 输入\"Show Coverage\"\n2. 点击录制按钮，刷新页面并交互\n3. 查看每个资源的代码利用率\n红色=未使用代码，蓝色=已使用代码\n通常首屏后30-70%的CSS和JS未使用，这些数据支撑了代码分割和按需加载的优化决策。"
      },
      {
        word: "Network瀑布图分析",
        meaning: "分析资源加载瀑布图，找出加载瓶颈",
        breakdown: { root: "Chrome DevTools性能分析" },
        explanation: "Network面板的瀑布图显示每个资源的时间线：\n- DNS/TCP/SSL：连接建立时间\n- TTFB（浅绿）：服务器响应时间\n- Content Download（深蓝）：下载时间\n\n重点关注：\n1. 串行请求链（一个接一个）→ 考虑preload\n2. 大文件下载慢 → 考虑压缩/CDN/现代格式\n3. 多个小文件 → 考虑合并/HTTP/2"
      }
    ],
    quiz: {
      question: "Chrome DevTools中哪个面板可以分析CSS/JS代码利用率？",
      options: ["Performance", "Coverage", "Network", "Memory"],
      correctAnswer: 1
    }
  },
  {
    id: 16,
    root: "Lighthouse审计",
    origin: "分析工具",
    meaning: "使用Lighthouse自动化审计页面性能和质量",
    description: "Lighthouse是Google开源的自动化工具，可以对页面进行全面的性能、无障碍、最佳实践、SEO审计，并生成0-100的评分。Lighthouse模拟慢速4G网络和中端手机设备，提供具体的优化建议。Lighthouse的Performance评分基于FCP、LCP、CLS、TBT（总阻塞时间）、SI（速度指数）等指标的加权计算。",
    examples: [
      {
        word: "Chrome DevTools运行Lighthouse",
        meaning: "在Chrome DevTools中一键运行Lighthouse",
        breakdown: { root: "Lighthouse审计" },
        explanation: "1. DevTools > Lighthouse面板\n2. 选择审计类别：Performance、Accessibility等\n3. 选择设备：Mobile或Desktop\n4. 点击\"Analyze page load\"\n5. 等待审计完成，查看报告和分数\n\nLighthouse会标注具体的问题（如\"减少未使用的JS\"）和预期节省（如\"可减少0.5s加载时间\"）。"
      },
      {
        word: "CI集成Lighthouse",
        meaning: "在CI/CD流水线中自动运行Lighthouse",
        breakdown: { root: "Lighthouse审计" },
        explanation: "// 使用lighthouse-ci\n// lighthouserc.js\nmodule.exports = {\n  ci: {\n    collect: {\n      url: ['http://localhost:3000'],\n      numberOfRuns: 3,\n    },\n    assert: {\n      assertions: {\n        'categories:performance': ['error', { minScore: 0.9 }],\n        'largest-contentful-paint': ['error', { maxNumericValue: 2500 }],\n      },\n    },\n  },\n};\n性能不达标时CI构建失败，阻止低质量代码上线。"
      },
      {
        word: "Lighthouse Performance评分计算",
        meaning: "了解Lighthouse性能评分的指标权重",
        breakdown: { root: "Lighthouse审计" },
        explanation: "Lighthouse Performance评分基于以下指标加权：\n- LCP（25%）：最大内容绘制\n- FID/INP（交互延迟）：交互响应\n- CLS（15%）：视觉稳定性\n- Speed Index（15%）：页面可见内容填充速度\n- TBT（总阻塞时间，25%）：主线程被长任务阻塞的时间\n- FCP（10%）：首次内容绘制\n每个指标的原始值通过log-normal分布转换为0-100的分数。"
      }
    ],
    quiz: {
      question: "Lighthouse Performance评分中权重最高的指标是？",
      options: ["FCP", "LCP", "TBT", "CLS"],
      correctAnswer: 2
    }
  },
  {
    id: 17,
    root: "Web Vitals API与性能监控",
    origin: "分析工具",
    meaning: "使用Web Vitals API在真实用户环境中监控性能",
    description: "实验室工具（Lighthouse、DevTools）反映的是受控环境下的性能，而真实用户的体验可能差异巨大。Web Vitals API（web-vitals库）可以在真实用户环境中采集Core Web Vitals数据，结合RUM（Real User Monitoring）方案，全面了解不同设备、网络、地区用户的实际体验。",
    examples: [
      {
        word: "web-vitals库采集指标",
        meaning: "使用web-vitals库采集Core Web Vitals数据",
        breakdown: { root: "Web Vitals API与性能监控" },
        explanation: "import { onLCP, onINP, onCLS } from 'web-vitals';\n\nonLCP(({ value }) => sendToAnalytics({ metric: 'LCP', value }));\nonINP(({ value }) => sendToAnalytics({ metric: 'INP', value }));\nonCLS(({ value }) => sendToAnalytics({ metric: 'CLS', value }));\n\nfunction sendToAnalytics(data) {\n  navigator.sendBeacon('/analytics', JSON.stringify(data));\n}\n使用sendBeacon确保页面关闭前数据也能发送成功。"
      },
      {
        word: "Performance API测量页面时间",
        meaning: "使用浏览器原生Performance API测量关键时间",
        breakdown: { root: "Web Vitals API与性能监控" },
        explanation: "// 测量自定义业务逻辑耗时\nconst markStart = performance.mark('fetch-start');\nawait fetchData();\nperformance.mark('fetch-end');\nperformance.measure('fetch-duration', 'fetch-start', 'fetch-end');\n\nconst measure = performance.getEntriesByName('fetch-duration')[0];\nconsole.log(`数据获取耗时: ${measure.duration.toFixed(2)}ms`);\n\n// 获取导航时间\nconst nav = performance.getEntriesByType('navigation')[0];\nconsole.log(`页面加载总耗时: ${nav.loadEventEnd - nav.startTime}ms`);"
      },
      {
        word: "RUM监控方案",
        meaning: "搭建真实用户监控方案",
        breakdown: { root: "Web Vitals API与性能监控" },
        explanation: "完整的RUM方案包括：\n1. 前端SDK（web-vitals）采集数据\n2. 数据上报API（sendBeacon发送）\n3. 后端存储（ClickHouse/Elasticsearch）\n4. 可视化Dashboard（P95/P75分位数，非平均值）\n5. 告警机制（指标劣化时通知）\n\n也可使用现成方案：Google CrUX、SpeedCurve、New Relic Browser、阿里云ARMS等。"
      }
    ],
    quiz: {
      question: "为什么RUM监控中应该关注P75分位数而非平均值？",
      options: ["平均值计算复杂", "平均值会被极端值扭曲，P75更能反映大多数用户体验", "P75计算更快", "Google推荐用P75"],
      correctAnswer: 1
    }
  },
  {
    id: 18,
    root: "性能优化实战案例",
    origin: "实战案例",
    meaning: "真实项目中的性能优化案例和效果",
    description: "理论知识最终需要落地到真实项目。本知识点通过一个典型的电商首页性能优化案例，串联前面学习的所有技术：从性能分析发现问题，到制定优化方案，再到逐项实施和验证效果。真实项目中，性能优化是一个持续的度量-优化-验证的循环过程。",
    examples: [
      {
        word: "电商首页优化案例",
        meaning: "从LCP 6s优化到1.8s的完整过程",
        breakdown: { root: "性能优化实战案例" },
        explanation: "问题诊断（Lighthouse）：\n- LCP 6.2s（首屏大图未压缩，3.2MB JPEG）\n- FCP 3.8s（JS bundle 1.2MB阻塞渲染）\n- CLS 0.35（产品卡片图片未指定尺寸）\n\n优化措施：\n1. 首图转AVIF格式+响应式裁剪 → 从3.2MB到180KB\n2. JS拆分为路由chunk+非关键组件lazy → 首屏JS从1.2MB到280KB\n3. 所有图片指定width/height+aspect-ratio\n4. 关键CSS内联，非关键CSS延迟加载\n5. CDN部署+gzip压缩\n\n结果：LCP 6.2s → 1.8s，FCP 3.8s → 1.1s，CLS 0.35 → 0.05，Lighthouse Performance从34分提升至92分。"
      },
      {
        word: "博客站性能优化",
        meaning: "从零开始构建高性能博客站",
        breakdown: { root: "性能优化实战案例" },
        explanation: "技术栈选择：Astro/Next.js（SSG）+ Markdown内容源\n性能策略：\n1. 构建时生成静态HTML，TTFB < 50ms\n2. 图片使用sharp插件自动转WebP+响应式尺寸\n3. 字体子集化，只包含中英文常用字符\n4. CSS使用Tailwind（Tree Shaking，生产<10KB）\n5. 纯静态站点，无需数据库查询\n\n结果：Lighthouse Performance 98+，LCP < 0.8s，零CLS，完全离线可用。"
      },
      {
        word: "长列表性能优化",
        meaning: "10万条数据的表格流畅滚动",
        breakdown: { root: "性能优化实战案例" },
        explanation: "问题：一次性渲染10万行DOM，浏览器卡死\n\n优化方案——虚拟滚动：\n1. 只渲染视口内可见的行（约20条）\n2. 滚动时动态替换数据，不创建/销毁DOM\n3. 使用transform: translateY定位容器\n4. 行高固定，便于计算可视范围\n\n核心逻辑：\nconst visibleStart = Math.floor(scrollTop / rowHeight);\nconst visibleEnd = visibleStart + visibleCount;\nconst visibleData = data.slice(visibleStart, visibleEnd);\n\n结果：从卡死到60fps流畅滚动，内存占用从500MB降到20MB。"
      }
    ],
    quiz: {
      question: "性能优化的正确流程是？",
      options: ["直接开始优化，凭经验选择方案", "先度量发现问题，再优化，最后验证效果", "使用所有优化技术", "等用户反馈慢了再优化"],
      correctAnswer: 1
    }
  }
];
window.wordData = { words: WordRoots };
