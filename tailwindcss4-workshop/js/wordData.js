const WordRoots = [
  {
    id: 1,
    root: "安装与配置 (Installation)",
    origin: "基础入门",
    meaning: "在项目中安装和配置TailwindCSS v4的方法",
    description: "TailwindCSS v4可以通过npm/yarn/pnpm安装，支持Vite、Webpack、Rollup等多种构建工具。安装后需要创建tailwind.config.js配置文件，并在CSS入口文件中引入Tailwind的基础样式、组件和工具类指令。v4版本大幅简化了配置流程，默认支持更多特性，无需额外安装插件。",
    examples: [
      {
        word: "Vite项目安装",
        meaning: "在Vite项目中安装TailwindCSS v4",
        breakdown: { root: "安装与配置" },
        explanation: "执行pnpm add -D tailwindcss @tailwindcss/vite，然后在vite.config.js中引入插件：import tailwindcss from '@tailwindcss/vite'，并添加到plugins数组中，最后在主CSS文件中添加@tailwind base; @tailwind components; @tailwind utilities;"
      },
      {
        word: "CDN引入",
        meaning: "无需构建工具直接使用TailwindCSS",
        breakdown: { root: "安装与配置" },
        explanation: "在HTML的head标签中添加<script src=\"https://cdn.tailwindcss.com\"></script>即可直接使用，适合快速原型开发或小型项目，不需要构建流程，还可以通过script标签内的tailwind.config对象自定义配置。"
      },
      {
        word: "PostCSS配置",
        meaning: "使用传统PostCSS方式配置",
        breakdown: { root: "安装与配置" },
        explanation: "执行pnpm add -D tailwindcss postcss autoprefixer，然后npx tailwindcss init -p生成配置文件，在tailwind.config.js中配置content路径指定需要扫描的文件，v4版本默认支持很多特性，无需额外配置插件。"
      }
    ],
    quiz: {
      question: "TailwindCSS v4在Vite项目中推荐的安装方式是？",
      options: ["只安装tailwindcss即可", "安装tailwindcss + postcss + autoprefixer", "安装tailwindcss + @tailwindcss/vite插件", "直接使用CDN引入"],
      correctAnswer: 2
    }
  },
  {
    id: 2,
    root: "实用类基础 (Utility Classes)",
    origin: "核心概念",
    meaning: "Tailwind提供的原子化样式类，直接在HTML中组合使用",
    description: "实用类是Tailwind的核心，每个类对应一个单一的CSS属性，比如text-red-500对应color: #ef4444，p-4对应padding: 1rem。你不需要再为每个元素自定义类名，直接组合这些实用类就能实现想要的样式，避免在HTML和CSS文件之间频繁切换，大幅提升开发效率。",
    examples: [
      {
        word: "文本样式",
        meaning: "使用实用类设置文本颜色和大小",
        breakdown: { root: "实用类基础" },
        explanation: "<h1 class=\"text-3xl font-bold text-blue-600\">Hello World</h1> 实现了3xl字号、加粗、蓝色的标题样式，无需编写任何自定义CSS。"
      },
      {
        word: "按钮样式",
        meaning: "组合多个实用类实现按钮效果",
        breakdown: { root: "实用类基础" },
        explanation: "<button class=\"bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors\">点击</button> 组合了背景色、hover状态、文字颜色、内边距、圆角、过渡动画等多个实用类，直接实现了一个标准按钮样式。"
      },
      {
        word: "卡片样式",
        meaning: "组合实用类实现卡片组件",
        breakdown: { root: "实用类基础" },
        explanation: "<div class=\"bg-white shadow-md rounded-lg p-6 max-w-sm mx-auto hover:shadow-lg transition-shadow\">卡片内容</div> 组合了背景色、阴影、圆角、内边距、宽度、水平居中、hover阴影变化、过渡动画的实用类，实现了一个常见的卡片组件。"
      }
    ],
    quiz: {
      question: "以下关于Tailwind实用类的描述错误的是？",
      options: ["每个实用类对应单一CSS属性", "需要为每个元素自定义类名", "可以直接在HTML中组合使用", "避免在HTML和CSS之间切换"],
      correctAnswer: 1
    }
  },
  {
    id: 3,
    root: "间距系统 (Spacing)",
    origin: "核心系统",
    meaning: "Tailwind提供的统一间距体系，用于内边距、外边距、间距",
    description: "Tailwind的间距系统基于4px基准，提供了从0到96的间距值，对应0到24rem。间距类包括p（内边距）、m（外边距）、gap（网格/Flex间距），还支持指定方向，比如pt（上内边距）、mr（右外边距）、gap-x（水平间距）等，保持整个项目的间距一致性，避免随意的间距值。",
    examples: [
      {
        word: "内边距示例",
        meaning: "为元素添加内边距",
        breakdown: { root: "间距系统" },
        explanation: "p-4 → 上下左右内边距都是1rem；px-6 → 左右内边距1.5rem；py-3 → 上下内边距0.75rem；pt-2 → 顶部内边距0.5rem；ps-4 → 逻辑属性，行首内边距（LTR是左，RTL是右）。"
      },
      {
        word: "外边距示例",
        meaning: "为元素添加外边距",
        breakdown: { root: "间距系统" },
        explanation: "m-4 → 上下左右外边距1rem；mx-auto → 水平居中；my-8 → 上下外边距2rem；mb-6 → 底部外边距1.5rem；-mt-2 → 负的顶部外边距，向上偏移。"
      },
      {
        word: "间距示例",
        meaning: "为Flex/Grid容器添加子元素间距",
        breakdown: { root: "间距系统" },
        explanation: "gap-4 → 子元素之间的间距是1rem；gap-x-3 → 水平间距0.75rem；gap-y-6 → 垂直间距1.5rem；space-x-4 → 给子元素之间添加水平外边距（除了第一个元素）。"
      }
    ],
    quiz: {
      question: "Tailwind间距系统的基准单位是？",
      options: ["1px", "2px", "4px", "8px"],
      correctAnswer: 2
    }
  },
  {
    id: 4,
    root: "颜色系统 (Colors)",
    origin: "核心系统",
    meaning: "Tailwind预设的颜色体系，包含丰富的颜色和深浅层次",
    description: "Tailwind提供了一套完整的预设颜色系统，每种颜色有从50（最浅）到950（最深）的11个深浅层次，比如red-50到red-950。同时支持文字颜色（text-*）、背景颜色（bg-*）、边框颜色（border-*）、装饰颜色（decoration-*）、填充颜色（fill-*）、描边颜色（stroke-*）等不同用途的颜色类，还可以自定义扩展颜色。",
    examples: [
      {
        word: "文字颜色",
        meaning: "设置文本颜色",
        breakdown: { root: "颜色系统" },
        explanation: "text-gray-700 → 深灰色文本；text-blue-600 → 蓝色文本；text-red-500 → 红色文本；text-green-400 → 浅绿色文本；text-[#ff0000] → 任意值语法，自定义十六进制颜色。"
      },
      {
        word: "背景颜色",
        meaning: "设置元素背景色",
        breakdown: { root: "颜色系统" },
        explanation: "bg-white → 白色背景；bg-gray-100 → 浅灰色背景；bg-blue-500 → 蓝色背景；bg-red-50 → 极浅红色背景；bg-gradient-to-r from-blue-500 to-purple-600 → 线性渐变背景。"
      },
      {
        word: "状态颜色",
        meaning: "设置交互状态下的颜色",
        breakdown: { root: "颜色系统" },
        explanation: "hover:bg-blue-600 → 鼠标悬停时背景变为深蓝色；focus:ring-green-500 → 聚焦时显示绿色外发光；active:bg-red-700 → 点击时背景变为深红色；disabled:bg-gray-300 → 禁用时背景为浅灰色。"
      }
    ],
    quiz: {
      question: "Tailwind预设颜色的深浅层次范围是？",
      options: ["100到900", "50到950", "0到1000", "1到10"],
      correctAnswer: 1
    }
  },
  {
    id: 5,
    root: "排版系统 (Typography)",
    origin: "核心系统",
    meaning: "Tailwind提供的文本样式相关实用类",
    description: "Tailwind的排版系统包含了字号（text-xs到text-9xl）、字重（font-thin到font-black）、行高（leading-*）、字间距（tracking-*）、对齐方式（text-left/center/right/justify）、装饰线（underline/line-through/no-underline）、文本转换（uppercase/lowercase/capitalize/normal-case）等全面的文本样式类，满足各种排版需求。",
    examples: [
      {
        word: "标题样式",
        meaning: "实现不同层级的标题",
        breakdown: { root: "排版系统" },
        explanation: "<h1 class=\"text-4xl font-bold tracking-tight\">一级标题</h1> → 4xl字号、加粗、紧缩字间距；<h2 class=\"text-2xl font-semibold leading-tight\">二级标题</h2> → 2xl字号、半粗体、紧凑行高。"
      },
      {
        word: "正文样式",
        meaning: "实现正文文本样式",
        breakdown: { root: "排版系统" },
        explanation: "<p class=\"text-base leading-relaxed text-gray-700\">正文内容</p> → 基础字号、宽松行高、深灰色文本，适合长文本阅读，提高可读性。"
      },
      {
        word: "辅助文本",
        meaning: "实现辅助提示文本",
        breakdown: { root: "排版系统" },
        explanation: "<p class=\"text-sm text-gray-500 italic\">提示信息</p> → 小字号、浅灰色、斜体文本，适合辅助说明、提示信息、版权声明等场景。"
      }
    ],
    quiz: {
      question: "以下哪个类可以实现文本加粗效果？",
      options: ["text-bold", "font-bold", "weight-bold", "bold"],
      correctAnswer: 1
    }
  },
  {
    id: 6,
    root: "Flex布局 (Flexbox)",
    origin: "布局系统",
    meaning: "使用Tailwind的Flex类实现弹性布局",
    description: "Tailwind提供了完整的Flexbox布局实用类，包括容器属性（display: flex、flex-direction、flex-wrap、justify-content、align-items、align-content、gap）和子元素属性（flex-grow、flex-shrink、flex-basis、order、align-self），可以轻松实现各种弹性布局，无需编写复杂的CSS。",
    examples: [
      {
        word: "水平居中布局",
        meaning: "实现元素水平垂直居中",
        breakdown: { root: "Flex布局" },
        explanation: "<div class=\"flex items-center justify-center h-96\">居中内容</div> → flex容器，垂直居中（items-center）、水平居中（justify-center），高度24rem，内容完美居中。"
      },
      {
        word: "导航栏布局",
        meaning: "实现左右分布的导航栏",
        breakdown: { root: "Flex布局" },
        explanation: "<nav class=\"flex items-center justify-between p-4\"><div>Logo</div><ul class=\"flex gap-6\">导航项</ul></nav> → 导航栏容器flex布局，左右两边内容分布在两端，导航项flex横向排列，间距6。"
      },
      {
        word: "响应式卡片列表",
        meaning: "实现自动换行的卡片列表",
        breakdown: { root: "Flex布局" },
        explanation: "<div class=\"flex flex-wrap gap-6\"><div class=\"flex-1 min-w-[280px] max-w-sm\">卡片1</div><div class=\"flex-1 min-w-[280px] max-w-sm\">卡片2</div></div> → flex容器自动换行，卡片flex-1自动占满剩余空间，最小宽度280px，实现响应式布局。"
      }
    ],
    quiz: {
      question: "以下哪个类可以实现Flex容器的垂直居中？",
      options: ["justify-center", "items-center", "content-center", "align-center"],
      correctAnswer: 1
    }
  },
  {
    id: 7,
    root: "Grid布局 (Grid)",
    origin: "布局系统",
    meaning: "使用Tailwind的Grid类实现网格布局",
    description: "Tailwind提供了完整的CSS Grid布局实用类，包括网格容器（display: grid、grid-template-columns、grid-template-rows、grid-auto-columns、grid-auto-rows、gap、justify-items、align-items、justify-content、align-content）和网格项（grid-column、grid-row、justify-self、align-self、order），可以轻松实现复杂的网格布局。",
    examples: [
      {
        word: "等宽网格",
        meaning: "实现3列等宽网格布局",
        breakdown: { root: "Grid布局" },
        explanation: "<div class=\"grid grid-cols-3 gap-4\"><div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div></div> → 网格容器，3列等宽，间距4，自动排列网格项。"
      },
      {
        word: "响应式网格",
        meaning: "不同断点下自动调整列数",
        breakdown: { root: "Grid布局" },
        explanation: "<div class=\"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4\">内容</div> → 移动端1列，小屏幕2列，中等屏幕3列，大屏幕4列，完美响应式。"
      },
      {
        word: "跨列布局",
        meaning: "实现网格项跨列显示",
        breakdown: { root: "Grid布局" },
        explanation: "<div class=\"grid grid-cols-4 gap-4\"><div class=\"col-span-2\">跨2列</div><div>1</div><div>2</div><div class=\"col-span-3\">跨3列</div><div>3</div></div> → 第一个网格项占2列，第四个占3列，实现不规则网格布局。"
      }
    ],
    quiz: {
      question: "以下哪个类可以实现4列网格布局？",
      options: ["grid-cols-4", "columns-4", "grid-4", "cols-4"],
      correctAnswer: 0
    }
  },
  {
    id: 8,
    root: "响应式设计 (Responsive Design)",
    origin: "核心特性",
    meaning: "Tailwind的断点系统，实现响应式布局",
    description: "Tailwind默认提供了5个响应式断点：sm（640px）、md（768px）、lg（1024px）、xl（1280px）、2xl（1536px），采用移动优先的设计理念，所有实用类都可以添加断点前缀，实现不同屏幕尺寸下的样式变化，无需编写媒体查询。",
    examples: [
      {
        word: "响应式字体大小",
        meaning: "不同屏幕下自动调整字号",
        breakdown: { root: "响应式设计" },
        explanation: "<h1 class=\"text-2xl sm:text-3xl md:text-4xl lg:text-5xl\">标题</h1> → 移动端2xl，小屏幕3xl，中等屏幕4xl，大屏幕5xl，字号随屏幕自动变大。"
      },
      {
        word: "响应式布局切换",
        meaning: "移动端垂直排列，桌面端水平排列",
        breakdown: { root: "响应式设计" },
        explanation: "<div class=\"flex flex-col md:flex-row gap-4\"><div>1</div><div>2</div><div>3</div></div> → 移动端flex垂直排列，中等屏幕以上水平排列。"
      },
      {
        word: "元素显示隐藏",
        meaning: "移动端隐藏元素，桌面端显示",
        breakdown: { root: "响应式设计" },
        explanation: "<div class=\"hidden md:block\">仅中等屏幕以上显示</div><div class=\"block md:hidden\">仅移动端显示</div> → 通过hidden和断点前缀实现不同屏幕下的显示隐藏。"
      }
    ],
    quiz: {
      question: "Tailwind默认的中等屏幕断点md对应的宽度是？",
      options: ["640px", "768px", "1024px", "1280px"],
      correctAnswer: 1
    }
  },
  {
    id: 9,
    root: "交互状态 (State Variants)",
    origin: "核心特性",
    meaning: "为元素的不同交互状态设置样式",
    description: "Tailwind提供了丰富的状态变体前缀，可以为元素的不同状态设置样式，包括hover、focus、active、disabled、visited、checked、first、last、odd、even、focus-visible、focus-within等，所有实用类都可以添加这些前缀，无需编写额外的CSS选择器。",
    examples: [
      {
        word: "按钮交互效果",
        meaning: "按钮的hover、active、disabled状态",
        breakdown: { root: "交互状态" },
        explanation: "<button class=\"bg-blue-500 hover:bg-blue-600 active:bg-blue-700 disabled:bg-gray-300 text-white px-4 py-2 rounded\">按钮</button> → 正常蓝色，hover深蓝色，点击更深蓝色，禁用时灰色。"
      },
      {
        word: "表单输入效果",
        meaning: "输入框聚焦状态样式",
        breakdown: { root: "交互状态" },
        explanation: "<input type=\"text\" class=\"border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded px-3 py-2 outline-none\"> → 正常灰色边框，聚焦时蓝色边框和蓝色外发光。"
      },
      {
        word: "列表斑马纹效果",
        meaning: "列表奇数行和偶数行不同背景",
        breakdown: { root: "交互状态" },
        explanation: "<ul><li class=\"odd:bg-gray-50 even:bg-white p-3\">列表项1</li><li class=\"odd:bg-gray-50 even:bg-white p-3\">列表项2</li></ul> → 奇数行浅灰色背景，偶数行白色背景，实现斑马纹效果。"
      }
    ],
    quiz: {
      question: "以下哪个前缀表示鼠标悬停状态？",
      options: ["active:", "focus:", "hover:", "disabled:"],
      correctAnswer: 2
    }
  },
  {
    id: 10,
    root: "暗黑模式 (Dark Mode)",
    origin: "核心特性",
    meaning: "Tailwind的暗黑模式支持，实现深色主题",
    description: "Tailwind原生支持暗黑模式，有两种启用方式：class策略（通过在html标签添加dark类切换）和media策略（根据系统 prefers-color-scheme 自动适配）。启用后可以使用dark:前缀为暗黑模式设置样式，轻松实现亮/暗主题切换。",
    examples: [
      {
        word: "暗黑模式适配",
        meaning: "适配暗黑模式的页面背景和文字",
        breakdown: { root: "暗黑模式" },
        explanation: "<body class=\"bg-white text-gray-900 dark:bg-gray-900 dark:text-white\">页面内容</body> → 亮色模式白色背景深色文字，暗黑模式深色背景白色文字。"
      },
      {
        word: "卡片暗黑模式",
        meaning: "卡片在暗黑模式下的样式",
        breakdown: { root: "暗黑模式" },
        explanation: "<div class=\"bg-white shadow-md dark:bg-gray-800 dark:shadow-gray-900 p-6 rounded\">卡片内容</div> → 亮色模式白色背景灰色阴影，暗黑模式深灰色背景更深的阴影。"
      },
      {
        word: "主题切换按钮",
        meaning: "切换亮/暗主题的按钮实现",
        breakdown: { root: "暗黑模式" },
        explanation: "<button onclick=\"document.documentElement.classList.toggle('dark')\" class=\"px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded\">切换主题</button> → 点击按钮切换html标签的dark类，实现主题切换。"
      }
    ],
    quiz: {
      question: "Tailwind暗黑模式的默认类前缀是？",
      options: ["dark:", "night:", "theme-dark:", "d:"],
      correctAnswer: 0
    }
  },
  {
    id: 11,
    root: "边框与圆角 (Border & Radius)",
    origin: "样式系统",
    meaning: "使用Tailwind类设置边框和圆角样式",
    description: "Tailwind提供了完整的边框相关实用类，包括边框宽度（border、border-t、border-r、border-b、border-l、border-x、border-y）、边框颜色（border-*）、边框样式（border-solid、border-dashed、border-dotted、border-none）、圆角（rounded、rounded-t、rounded-r等），可以实现各种边框和圆角效果。",
    examples: [
      {
        word: "卡片边框圆角",
        meaning: "实现带边框的圆角卡片",
        breakdown: { root: "边框与圆角" },
        explanation: "<div class=\"border border-gray-200 rounded-xl p-6\">卡片内容</div> → 1px灰色边框，xl圆角，内边距6，清爽的卡片样式。"
      },
      {
        word: "按钮圆角",
        meaning: "不同圆角大小的按钮",
        breakdown: { root: "边框与圆角" },
        explanation: "<button class=\"rounded px-4 py-2\">小圆角</button><button class=\"rounded-full px-4 py-2\"> pill按钮</button><button class=\"rounded-none px-4 py-2\">直角按钮</button> → 不同圆角风格的按钮。"
      },
      {
        word: "分隔线",
        meaning: "实现水平和垂直分隔线",
        breakdown: { root: "边框与圆角" },
        explanation: "<div class=\"border-t border-gray-200 my-4\"></div> → 顶部边框1px灰色，上下外边距4，实现水平分隔线；<div class=\"border-r border-gray-200 h-6 mx-2\"></div> → 右边边框1px灰色，高度6，左右外边距2，实现垂直分隔线。"
      }
    ],
    quiz: {
      question: "以下哪个类可以实现最大的圆角（圆形/胶囊形）？",
      options: ["rounded-xl", "rounded-2xl", "rounded-full", "rounded-max"],
      correctAnswer: 2
    }
  },
  {
    id: 12,
    root: "阴影与效果 (Shadow & Effects)",
    origin: "样式系统",
    meaning: "使用Tailwind类设置阴影、透明度、渐变等效果",
    description: "Tailwind提供了丰富的效果类，包括阴影（shadow-sm、shadow、shadow-md、shadow-lg、shadow-xl、shadow-2xl、shadow-none）、透明度（opacity-*）、混合模式（mix-blend-*）、背景渐变（bg-gradient-to-*、from-*、via-*、to-*）、模糊（blur-*）、亮度（brightness-*）、对比度（contrast-*）等滤镜效果。",
    examples: [
      {
        word: "卡片悬浮阴影效果",
        meaning: "卡片hover时阴影加深效果",
        breakdown: { root: "阴影与效果" },
        explanation: "<div class=\"bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow\">卡片内容</div> → 正常小阴影，hover时大阴影，带过渡动画，实现悬浮效果。"
      },
      {
        word: "渐变背景按钮",
        meaning: "实现渐变背景的按钮",
        breakdown: { root: "阴影与效果" },
        explanation: "<button class=\"bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-2 rounded-lg shadow\">渐变按钮</button> → 蓝色到紫色的渐变背景，hover时颜色加深。"
      },
      {
        word: "半透明遮罩",
        meaning: "实现半透明的背景遮罩",
        breakdown: { root: "阴影与效果" },
        explanation: "<div class=\"fixed inset-0 bg-black/50 backdrop-blur-sm z-50\">遮罩内容</div> → 固定定位全屏覆盖，黑色背景透明度50%，背景模糊小，层级最高，实现模态框遮罩效果。"
      }
    ],
    quiz: {
      question: "以下哪个类可以实现50%的透明度？",
      options: ["opacity-50", "alpha-50", "transparent-50", "o-50"],
      correctAnswer: 0
    }
  },
  {
    id: 13,
    root: "动画与过渡 (Animation & Transition)",
    origin: "交互系统",
    meaning: "使用Tailwind类实现动画和过渡效果",
    description: "Tailwind提供了过渡和动画实用类，包括过渡属性（transition、transition-colors、transition-opacity、transition-shadow、transition-transform）、过渡时长（duration-*）、过渡曲线（ease-linear、ease-in、ease-out、ease-in-out）、延迟（delay-*），还有几个内置动画（animate-spin、animate-ping、animate-pulse、animate-bounce），也可以自定义动画。",
    examples: [
      {
        word: "按钮过渡效果",
        meaning: "按钮hover时平滑过渡颜色",
        breakdown: { root: "动画与过渡" },
        explanation: "<button class=\"bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors duration-300 ease-in-out\">按钮</button> → 颜色变化时300ms平滑过渡，缓入缓出曲线。"
      },
      {
        word: "加载动画",
        meaning: "实现旋转的加载图标",
        breakdown: { root: "动画与过渡" },
        explanation: "<svg class=\"animate-spin h-5 w-5 text-blue-600\" viewBox=\"0 0 24 24\">...</svg> → 应用animate-spin类，实现无限旋转的加载动画。"
      },
      {
        word: "元素入场动画",
        meaning: "元素出现时的淡入动画",
        breakdown: { root: "动画与过渡" },
        explanation: "<div class=\"opacity-0 translate-y-4 transition-all duration-500 ease-out\" x-show=\"isOpen\" x-transition.opacity x-transition.translate>淡入内容</div> → 初始透明向下偏移，显示时过渡到不透明正常位置，实现淡入上移效果。"
      }
    ],
    quiz: {
      question: "以下哪个类可以实现旋转加载动画？",
      options: ["animate-rotate", "animate-spin", "animate-loading", "animate-turn"],
      correctAnswer: 1
    }
  },
  {
    id: 14,
    root: "定位与层级 (Position & Z-Index)",
    origin: "布局系统",
    meaning: "使用Tailwind类设置元素定位和层级",
    description: "Tailwind提供了定位相关实用类，包括定位类型（static、relative、absolute、fixed、sticky）、定位偏移（top-*、right-*、bottom-*、left-*、inset-*）、层级（z-*、z-auto、z-0到z-50）、浮动（float-left、float-right、float-none）、清除浮动（clear-left、clear-right、clear-both）等，可以精确控制元素的位置和层级。",
    examples: [
      {
        word: "右上角角标",
        meaning: "在卡片右上角实现小红点角标",
        breakdown: { root: "定位与层级" },
        explanation: "<div class=\"relative p-6 bg-white rounded-lg\">卡片内容<span class=\"absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full\"></span></div> → 卡片相对定位，角标绝对定位，左上角偏移-1px，小红点样式。"
      },
      {
        word: "固定顶部导航",
        meaning: "实现滚动时固定在顶部的导航栏",
        breakdown: { root: "定位与层级" },
        explanation: "<nav class=\"fixed top-0 left-0 right-0 z-50 bg-white shadow-md p-4\">导航内容</nav> → 固定定位，顶部0，左右0，层级50（最高层级），白色背景带阴影，滚动时一直保持在顶部。"
      },
      {
        word: "粘性侧边栏",
        meaning: "滚动到一定位置时粘在顶部的侧边栏",
        breakdown: { root: "定位与层级" },
        explanation: "<aside class=\"sticky top-4 h-fit\">侧边栏内容</aside> → 粘性定位，距离顶部4px时开始粘住，高度适应内容，滚动时侧边栏一直保持在视口内。"
      }
    ],
    quiz: {
      question: "以下哪个类可以实现元素固定定位？",
      options: ["relative", "absolute", "fixed", "sticky"],
      correctAnswer: 2
    }
  },
  {
    id: 15,
    root: "任意值语法 (Arbitrary Values)",
    origin: "高级特性",
    meaning: "使用方括号语法自定义任意值的实用类",
    description: "Tailwind支持任意值语法，当你需要使用预设之外的值时，可以使用[value]的语法直接在类中写任意值，支持长度、颜色、百分比、自定义属性等，无需修改配置文件，非常灵活，满足各种特殊的样式需求。",
    examples: [
      {
        word: "自定义尺寸",
        meaning: "使用自定义的宽度和高度",
        breakdown: { root: "任意值语法" },
        explanation: "<div class=\"w-[300px] h-[200px] bg-blue-500\">自定义尺寸</div> → 宽度300px，高度200px，无需在配置中扩展，直接使用。"
      },
      {
        word: "自定义颜色",
        meaning: "使用自定义的十六进制颜色",
        breakdown: { root: "任意值语法" },
        explanation: "<p class=\"text-[#ff4500] bg-[rgba(255,69,0,0.1)]\">自定义颜色</p> → 文字颜色#ff4500，背景色rgba(255,69,0,0.1)，支持各种颜色格式。"
      },
      {
        word: "自定义属性",
        meaning: "使用CSS自定义属性（变量）",
        breakdown: { root: "任意值语法" },
        explanation: "<div class=\"bg-[var(--theme-color)] p-[var(--spacing)]\">使用CSS变量</div> → 直接使用CSS自定义属性作为值，非常适合主题系统。"
      }
    ],
    quiz: {
      question: "Tailwind中使用任意值的语法是？",
      options: ["(value)", "{value}", "[value]", "<value>"],
      correctAnswer: 2
    }
  },
  {
    id: 16,
    root: "@apply指令",
    origin: "高级特性",
    meaning: "使用@apply指令提取重复的实用类组合",
    description: "@apply指令允许你把多个Tailwind实用类组合成一个自定义CSS类，用于提取重复的样式模式，比如按钮、卡片等组件的通用样式，保持代码的DRY（Don't Repeat Yourself）原则。@apply只能在CSS文件中使用，不能在HTML中使用。",
    examples: [
      {
        word: "自定义按钮类",
        meaning: "提取按钮的通用样式为自定义类",
        breakdown: { root: "@apply指令" },
        explanation: "在CSS文件中：\n.btn-primary {\n  @apply bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors font-medium;\n}\n然后在HTML中直接使用：<button class=\"btn-primary\">按钮</button>"
      },
      {
        word: "自定义卡片类",
        meaning: "提取卡片的通用样式",
        breakdown: { root: "@apply指令" },
        explanation: "在CSS文件中：\n.card {\n  @apply bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg p-6 transition-shadow;\n}\n然后在HTML中直接使用：<div class=\"card\">卡片内容</div>"
      },
      {
        word: "配合自定义属性",
        meaning: "@apply和自定义属性一起使用",
        breakdown: { root: "@apply指令" },
        explanation: ".btn {\n  @apply px-4 py-2 rounded font-medium;\n  background-color: var(--btn-bg);\n  color: var(--btn-text);\n}\n既使用Tailwind的实用类，又添加自定义CSS属性，非常灵活。"
      }
    ],
    quiz: {
      question: "关于@apply指令的描述错误的是？",
      options: ["可以提取重复的实用类组合", "只能在CSS文件中使用", "可以在HTML标签中直接使用", "有助于保持代码DRY"],
      correctAnswer: 2
    }
  },
  {
    id: 17,
    root: "自定义配置 (Custom Configuration)",
    origin: "高级特性",
    meaning: "通过tailwind.config.js配置文件自定义Tailwind",
    description: "Tailwind可以通过tailwind.config.js配置文件进行高度自定义，包括扩展主题（颜色、间距、字体、断点等）、添加自定义实用类、配置插件、启用或禁用核心插件、配置内容扫描路径等，完全可以根据项目需求定制Tailwind的行为。",
    examples: [
      {
        word: "扩展自定义颜色",
        meaning: "在配置中添加自定义颜色",
        breakdown: { root: "自定义配置" },
        explanation: "tailwind.config.js:\nmodule.exports = {\n  theme: {\n    extend: {\n      colors: {\n        primary: '#ff4500',\n        secondary: '#3b82f6',\n      },\n    },\n  }\n}\n然后就可以使用text-primary、bg-primary等类。"
      },
      {
        word: "添加自定义断点",
        meaning: "添加自定义的响应式断点",
        breakdown: { root: "自定义配置" },
        explanation: "tailwind.config.js:\nmodule.exports = {\n  theme: {\n    extend: {\n      screens: {\n        '3xl': '1600px',\n        'xs': '360px',\n      },\n    },\n  }\n}\n然后就可以使用xs:text-sm、3xl:text-6xl等响应式类。"
      },
      {
        word: "配置内容扫描路径",
        meaning: "指定Tailwind需要扫描的文件路径",
        breakdown: { root: "自定义配置" },
        explanation: "tailwind.config.js:\nmodule.exports = {\n  content: [\n    './index.html',\n    './src/**/*.{vue,js,ts,jsx,tsx}',\n  ],\n}\nTailwind会扫描这些文件中的实用类，只打包用到的样式，减小CSS体积。"
      }
    ],
    quiz: {
      question: "Tailwind的配置文件名称是？",
      options: ["tailwind.config.js", "config.tailwind.js", "tw.config.js", "tailwind.js"],
      correctAnswer: 0
    }
  },
  {
    id: 18,
    root: "v4新特性 - @theme指令",
    origin: "v4新特性",
    meaning: "Tailwind v4新增的@theme指令，定义主题变量",
    description: "@theme是Tailwind v4新增的CSS指令，允许你直接在CSS文件中定义主题变量，替代之前tailwind.config.js中的theme配置，更加直观和灵活。支持直接定义颜色、间距、字体等主题值，还支持嵌套定义和@apply。",
    examples: [
      {
        word: "定义主题颜色",
        meaning: "在CSS中使用@theme定义颜色",
        breakdown: { root: "v4新特性 - @theme指令" },
        explanation: "在CSS文件中：\n@theme {\n  --color-primary: #ff4500;\n  --color-secondary: #3b82f6;\n  --color-gray-50: #f9fafb;\n  --color-gray-100: #f3f4f6;\n}\n然后就可以直接使用bg-primary、text-secondary等类，无需在JS配置中定义。"
      },
      {
        word: "定义主题间距",
        meaning: "在@theme中定义自定义间距",
        breakdown: { root: "v4新特性 - @theme指令" },
        explanation: "@theme {\n  --spacing-128: 32rem;\n  --spacing-144: 36rem;\n}\n然后就可以使用w-128、p-144等间距类，自动生成对应的实用类。"
      },
      {
        word: "内联@theme",
        meaning: "使用@theme inline在CSS中直接引用主题值",
        breakdown: { root: "v4新特性 - @theme指令" },
        explanation: ".custom-button {\n  @theme inline {\n    background-color: --color-primary;\n    padding: --spacing-4 --spacing-6;\n    border-radius: --radius-lg;\n  }\n}\n直接在自定义CSS中引用主题变量，自动对应Tailwind的主题值。"
      }
    ],
    quiz: {
      question: "Tailwind v4新增的用于定义主题的指令是？",
      options: ["@config", "@theme", "@variables", "@customize"],
      correctAnswer: 1
    }
  },
  {
    id: 19,
    root: "v4新特性 - 简化配置",
    origin: "v4新特性",
    meaning: "Tailwind v4大幅简化了配置流程",
    description: "Tailwind v4对配置进行了大幅简化，默认支持很多之前需要插件的特性（比如CSS容器查询、逻辑属性、宽高类扩展等），移除了很多不必要的配置项，构建速度提升了2-10倍，配置文件更加简洁，大部分项目甚至不需要配置文件就能使用。",
    examples: [
      {
        word: "Vite插件简化配置",
        meaning: "v4的Vite插件无需PostCSS配置",
        breakdown: { root: "v4新特性 - 简化配置" },
        explanation: "v4版本只需安装@tailwindcss/vite插件，在vite.config.js中引入即可，不需要单独配置postcss.config.js，也不需要安装autoprefixer，插件会自动处理，配置大大简化。"
      },
      {
        word: "默认启用特性",
        meaning: "很多之前需要手动启用的特性默认开启",
        breakdown: { root: "v4新特性 - 简化配置" },
        explanation: "v4默认支持逻辑属性（ps-4、pe-4等）、容器查询（@container、min-*等）、扩展的宽高值（w-128、h-144等）、aspect-ratio等，不需要额外安装插件或配置。"
      },
      {
        word: "更轻量的构建",
        meaning: "v4的构建速度更快，输出更小",
        breakdown: { root: "v4新特性 - 简化配置" },
        explanation: "v4使用了新的编译器，构建速度比v3快2-10倍，生产构建的CSS体积更小，Tree Shaking更加高效，开发时的热更新速度也更快，提升开发体验。"
      }
    ],
    quiz: {
      question: "关于Tailwind v4的描述错误的是？",
      options: ["构建速度比v3更快", "配置更加简化", "需要安装更多插件", "默认支持更多特性"],
      correctAnswer: 2
    }
  },
  {
    id: 20,
    root: "官方插件系统",
    origin: "生态系统",
    meaning: "Tailwind的官方插件，扩展更多功能",
    description: "Tailwind有丰富的官方插件，提供额外的功能和实用类，比如@tailwindcss/forms（美化表单样式）、@tailwindcss/typography（排版插件，美化文章内容）、@tailwindcss/aspect-ratio（宽高比类）、@tailwindcss/container-queries（容器查询支持）、@tailwindcss/line-clamp（文本截断）等，无需自己编写复杂的CSS。",
    examples: [
      {
        word: "Forms插件美化表单",
        meaning: "使用forms插件快速美化表单元素",
        breakdown: { root: "官方插件系统" },
        explanation: "安装@tailwindcss/forms插件后，无需添加额外类，表单元素会自动应用美观的默认样式：<input type=\"text\" class=\"w-full\"> <select class=\"w-full\"> <input type=\"checkbox\"> 都有统一美观的样式。"
      },
      {
        word: "Typography插件美化文章",
        meaning: "使用typography插件美化富文本内容",
        breakdown: { root: "官方插件系统" },
        explanation: "安装@tailwindcss/typography插件后，只需添加prose类：<div class=\"prose lg:prose-xl\">{{ article.content }}</div>，里面的h1、p、ul、ol、code、blockquote等元素都会自动应用美观的排版样式，非常适合博客、文档等内容展示。"
      },
      {
        word: "Aspect Ratio插件实现固定宽高比",
        meaning: "使用aspect-ratio插件实现固定比例的容器",
        breakdown: { root: "官方插件系统" },
        explanation: "安装插件后可以使用aspect-*类：<div class=\"aspect-video w-full\"><img src=\"...\" class=\"w-full h-full object-cover\"></div> → 实现16:9的视频比例容器，图片自动填充，不会变形。"
      }
    ],
    quiz: {
      question: "以下哪个官方插件用于美化富文本排版？",
      options: ["@tailwindcss/forms", "@tailwindcss/typography", "@tailwindcss/aspect-ratio", "@tailwindcss/line-clamp"],
      correctAnswer: 1
    }
  },
  {
    id: 21,
    root: "与React集成",
    origin: "框架集成",
    meaning: "在React项目中使用TailwindCSS",
    description: "Tailwind与React集成非常简单，支持Create React App、Vite + React、Next.js等各种React项目。只需安装Tailwind并配置好content路径扫描React相关文件（.jsx、.tsx），就可以直接在JSX中使用Tailwind实用类，还可以配合clsx、tailwind-merge等库动态拼接类名。",
    examples: [
      {
        word: "基础使用",
        meaning: "在React组件中使用Tailwind类",
        breakdown: { root: "与React集成" },
        explanation: "function Button({ children, primary = false }) {\n  return (\n    <button className={`px-4 py-2 rounded font-medium ${\n      primary ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-900'\n    }`}>\n      {children}\n    </button>\n  )\n}\n直接在className属性中使用Tailwind类，支持模板字符串动态切换。"
      },
      {
        word: "使用clsx动态拼接类名",
        meaning: "使用clsx库更方便地拼接动态类名",
        breakdown: { root: "与React集成" },
        explanation: "import clsx from 'clsx'\nfunction Button({ primary, disabled, size = 'md' }) {\n  return (\n    <button className={clsx(\n      'rounded font-medium transition-colors',\n      primary && 'bg-blue-500 text-white hover:bg-blue-600',\n      !primary && 'bg-gray-100 text-gray-900 hover:bg-gray-200',\n      disabled && 'opacity-50 cursor-not-allowed',\n      size === 'sm' && 'px-3 py-1 text-sm',\n      size === 'md' && 'px-4 py-2',\n      size === 'lg' && 'px-6 py-3 text-lg',\n    )}>\n      {children}\n    </button>\n  )\n}"
      },
      {
        word: "Next.js App Router集成",
        meaning: "在Next.js App Router中使用Tailwind",
        breakdown: { root: "与React集成" },
        explanation: "Next.js 13+ App Router默认支持Tailwind，只需在app/globals.css中引入@tailwind指令，tailwind.config.js中配置content路径包含app目录，就可以直接在所有Server Component和Client Component中使用Tailwind类，无需额外配置。"
      }
    ],
    quiz: {
      question: "以下哪个库常用于在React中动态拼接Tailwind类名？",
      options: ["classnames", "clsx", "tailwind-merge", "以上都是"],
      correctAnswer: 3
    }
  },
  {
    id: 22,
    root: "与Vue集成",
    origin: "框架集成",
    meaning: "在Vue项目中使用TailwindCSS",
    description: "Tailwind与Vue集成非常简单，支持Vite + Vue、Nuxt 3、Vue CLI等各种Vue项目。配置好content路径扫描.vue文件后，就可以直接在Vue组件的template中使用Tailwind实用类，支持动态绑定类名，还可以配合Nuxt的Tailwind模块实现零配置集成。",
    examples: [
      {
        word: "基础使用",
        meaning: "在Vue组件中使用Tailwind类",
        breakdown: { root: "与Vue集成" },
        explanation: "<template>\n  <button :class=\"[\n    'px-4 py-2 rounded font-medium',\n    primary ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-900'\n  ]\">\n    <slot />\n  </button>\n</template>\n<script setup>\ndefineProps({ primary: Boolean })\n</script>\n直接在class属性中使用Tailwind类，支持数组语法动态绑定。"
      },
      {
        word: "动态类名绑定",
        meaning: "在Vue中动态切换Tailwind类",
        breakdown: { root: "与Vue集成" },
        explanation: "<template>\n  <div :class=\"{\n    'bg-white text-gray-900': !isDark,\n    'bg-gray-900 text-white': isDark,\n    'p-6 rounded-lg shadow': true\n  }\">\n    内容\n  </div>\n</template> 使用对象语法根据条件动态添加类名，非常方便。"
      },
      {
        word: "Nuxt 3集成",
        meaning: "在Nuxt 3中使用Tailwind",
        breakdown: { root: "与Vue集成" },
        explanation: "Nuxt 3可以使用官方的@nuxtjs/tailwindcss模块，安装后在nuxt.config.ts中添加modules: ['@nuxtjs/tailwindcss']即可，零配置自动集成，支持Nuxt的所有特性，包括Server Component、自动导入等。"
      }
    ],
    quiz: {
      question: "在Vue中动态绑定类名的语法是？",
      options: [":class", "v-bind:class", "v-class", ":class 和 v-bind:class 都可以"],
      correctAnswer: 3
    }
  },
  {
    id: 23,
    root: "开发工具与插件",
    origin: "开发体验",
    meaning: "提升Tailwind开发体验的工具和插件",
    description: "Tailwind有丰富的开发工具和插件，大幅提升开发效率，包括VS Code扩展（Tailwind CSS IntelliSense，提供智能提示、自动补全、语法高亮、悬停预览）、ESLint插件（eslint-plugin-tailwindcss，检查类名顺序、无效类名等）、Prettier插件（prettier-plugin-tailwindcss，自动排序类名）、浏览器DevTools扩展等。",
    examples: [
      {
        word: "VS Code智能提示",
        meaning: "Tailwind CSS IntelliSense插件的功能",
        breakdown: { root: "开发工具与插件" },
        explanation: "安装VS Code的Tailwind CSS IntelliSense插件后，输入类名时会自动提示，悬停在类名上会显示对应的CSS代码，自动补全，还会提示自定义的主题类，大大提升开发速度，减少拼写错误。"
      },
      {
        word: "自动排序类名",
        meaning: "使用Prettier插件自动排序Tailwind类名",
        breakdown: { root: "开发工具与插件" },
        explanation: "安装prettier-plugin-tailwindcss插件后，Prettier会自动按照Tailwind推荐的顺序排序类名，保持代码风格统一，方便阅读和维护，不需要手动调整类名顺序。"
      },
      {
        word: "ESLint检查",
        meaning: "使用ESLint插件检查Tailwind使用问题",
        breakdown: { root: "开发工具与插件" },
        explanation: "安装eslint-plugin-tailwindcss插件后，可以检查无效的Tailwind类名、不必要的类名、建议使用简写类名、强制类名顺序等，提前发现问题，保持代码质量。"
      }
    ],
    quiz: {
      question: "以下哪个VS Code扩展提供Tailwind的智能提示？",
      options: ["Tailwind CSS IntelliSense", "Tailwind Helper", "Tailwind Autocomplete", "CSS IntelliSense"],
      correctAnswer: 0
    }
  },
  {
    id: 24,
    root: "性能优化最佳实践",
    origin: "最佳实践",
    meaning: "Tailwind项目的性能优化技巧",
    description: "Tailwind默认已经很注重性能，通过Tree Shaking只打包用到的实用类，生产环境CSS体积通常很小（10KB以内），但还有一些优化技巧可以进一步提升性能，比如开启生产环境压缩、使用content配置正确扫描文件、避免动态拼接完整类名、使用PurgeCSS优化、使用CDN托管CSS等。",
    examples: [
      {
        word: "正确配置content路径",
        meaning: "确保Tailwind扫描所有用到类名的文件",
        breakdown: { root: "性能优化最佳实践" },
        explanation: "在tailwind.config.js的content数组中包含所有用到Tailwind类的文件路径，包括HTML、JSX、TSX、Vue、Svelte等文件，这样Tailwind才能准确地Tree Shaking掉未使用的类，最小化CSS体积。"
      },
      {
        word: "避免动态拼接完整类名",
        meaning: "动态类名的正确写法",
        breakdown: { root: "性能优化最佳实践" },
        explanation: "❌ 错误写法：<div class=\"text-${color}-500\"></div> → Tailwind无法识别这种动态拼接的完整类名，不会打包进去；✅ 正确写法：<div class={color === 'red' ? 'text-red-500' : 'text-blue-500'}></div> 或者 把不变的部分写死：<div class=\"${color === 'red' ? 'text-red-500' : ''}\"></div>，确保所有类名完整出现在代码中。"
      },
      {
        word: "生产环境优化",
        meaning: "生产构建时的优化配置",
        breakdown: { root: "性能优化最佳实践" },
        explanation: "生产构建时确保开启CSS压缩（Vite、Webpack等构建工具默认会处理），使用Tailwind的minify选项，开启gzip或者Brotli压缩CSS文件，对于超大型项目可以考虑分割CSS或者按需加载，进一步提升加载速度。"
      }
    ],
    quiz: {
      question: "Tailwind中以下动态类名写法正确的是？",
      options: [
        "<div class=\"text-${color}-500\"></div>",
        "<div class=${color === 'red' ? 'text-red-500' : 'text-blue-500'}></div>",
        "<div class=\"text-[${color}]\"></div>",
        "以上都正确"
      ],
      correctAnswer: 1
    }
  },
  {
    id: 25,
    root: "组件提取最佳实践",
    origin: "最佳实践",
    meaning: "如何正确提取可复用的Tailwind组件",
    description: "使用Tailwind时，提取可复用组件是保持代码可维护性的重要方法，推荐的做法是：优先提取框架组件（React/Vue组件）而不是CSS类，只有当样式模式在多个地方重复使用且不涉及逻辑时才考虑使用@apply提取CSS类，避免过度使用@apply导致回到传统CSS的问题。",
    examples: [
      {
        word: "优先提取框架组件",
        meaning: "提取React/Vue组件是首选方式",
        breakdown: { root: "组件提取最佳实践" },
        explanation: "// 提取Button组件\nfunction Button({ children, variant = 'primary' }) {\n  return (\n    <button className={`px-4 py-2 rounded font-medium ${\n      variant === 'primary' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-900'\n    }`}>\n      {children}\n    </button>\n  )\n}\n// 直接使用\n<Button>提交</Button>\n<Button variant=\"secondary\">取消</Button> 这种方式最灵活，支持逻辑和样式一起复用。"
      },
      {
        word: "适度使用@apply",
        meaning: "适合用@apply的场景",
        breakdown: { root: "组件提取最佳实践" },
        explanation: "当纯样式模式在很多地方重复使用，且不需要任何逻辑时，可以用@apply提取：\n@layer components {\n  .btn-primary {\n    @apply bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-colors;\n  }\n}\n然后在HTML或组件中使用<button class=\"btn-primary\">按钮</button>，适合CMS、静态网站等场景。"
      },
      {
        word: "避免过早抽象",
        meaning: "不要过早提取组件，避免过度抽象",
        breakdown: { root: "组件提取最佳实践" },
        explanation: "不要一开始就把所有东西都提取成组件，当某个样式模式重复出现3次以上时再考虑提取，避免创建太多不必要的小组件，反而增加复杂度，保持开发效率和可维护性的平衡。"
      }
    ],
    quiz: {
      question: "使用Tailwind时，提取可复用组件的首选方式是？",
      options: ["使用@apply提取CSS类", "提取框架组件（React/Vue组件）", "创建全局CSS文件", "复制粘贴代码"],
      correctAnswer: 1
    }
  },
  {
    id: 26,
    root: "表单样式实现",
    origin: "实战技巧",
    meaning: "使用Tailwind实现美观的表单样式",
    description: "Tailwind可以很方便地实现各种表单样式，配合@tailwindcss/forms插件可以快速美化原生表单元素，实现统一的设计风格，支持各种表单状态（禁用、错误、成功、聚焦等），可以轻松实现美观且易用的表单界面。",
    examples: [
      {
        word: "基础输入框样式",
        meaning: "实现美观的输入框",
        breakdown: { root: "表单样式实现" },
        explanation: "<div>\n  <label class=\"block text-sm font-medium text-gray-700 mb-1\">邮箱</label>\n  <input type=\"email\" class=\"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition\">\n</div> 实现标签在上、输入框带边框、聚焦时有蓝色高亮效果的输入框。"
      },
      {
        word: "错误状态输入框",
        meaning: "表单验证错误时的样式",
        breakdown: { root: "表单样式实现" },
        explanation: "<div>\n  <label class=\"block text-sm font-medium text-gray-700 mb-1\">邮箱</label>\n  <input type=\"email\" class=\"w-full px-3 py-2 border border-red-500 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition\">\n  <p class=\"mt-1 text-sm text-red-600\">请输入有效的邮箱地址</p>\n</div> 错误状态下红色边框和提示文字。"
      },
      {
        word: "复选框和单选框",
        meaning: "美化复选框和单选框样式",
        breakdown: { root: "表单样式实现" },
        explanation: "<div class=\"flex items-center\">\n  <input id=\"remember\" type=\"checkbox\" class=\"h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded\">\n  <label for=\"remember\" class=\"ml-2 block text-sm text-gray-700\">记住我</label>\n</div> 配合forms插件可以实现美观的原生复选框样式，不需要自定义组件。"
      }
    ],
    quiz: {
      question: "以下哪个官方插件用于美化原生表单元素？",
      options: ["@tailwindcss/forms", "@tailwindcss/inputs", "@tailwindcss/form-styles", "@tailwindcss/custom-forms"],
      correctAnswer: 0
    }
  },
  {
    id: 27,
    root: "容器查询 (Container Queries)",
    origin: "高级特性",
    meaning: "Tailwind支持CSS容器查询，根据父容器大小应用样式",
    description: "Tailwind原生支持CSS容器查询，你可以给父容器添加@container类，然后使用@md、@lg等前缀根据容器的大小应用样式，而不是根据视口大小，非常适合实现组件级别的响应式，比如卡片在侧边栏窄时是垂直布局，在主内容区宽时是水平布局。",
    examples: [
      {
        word: "基础容器查询使用",
        meaning: "根据容器大小调整布局",
        breakdown: { root: "容器查询" },
        explanation: "<div class=\"@container p-4\">\n  <div class=\"flex flex-col @lg:flex-row gap-4\">\n    <img src=\"...\" class=\"@lg:w-32 h-32 object-cover rounded\">\n    <div>\n      <h3 class=\"text-lg font-bold\">标题</h3>\n      <p class=\"text-gray-600\">内容</p>\n    </div>\n  </div>\n</div> 容器宽度小于lg断点时垂直布局，大于等于lg时水平布局，和视口大小无关。"
      },
      {
        word: "命名容器",
        meaning: "使用命名容器实现嵌套容器查询",
        breakdown: { root: "容器查询" },
        explanation: "<div class=\"@container/sidebar p-4 w-64\">\n  <div class=\"@lg/sidebar:flex-row flex flex-col\">\n    <!-- 内容 -->\n  </div>\n</div> 给容器命名为sidebar，前缀使用@lg/sidebar，实现嵌套容器的查询，避免冲突。"
      },
      {
        word: "自定义容器查询断点",
        meaning: "自定义容器查询的断点值",
        breakdown: { root: "容器查询" },
        explanation: "在tailwind.config.js中配置：\nmodule.exports = {\n  theme: {\n    extend: {\n      containers: {\n        xs: '20rem',\n        '3xl': '100rem',\n      },\n    },\n  },\n}\n然后就可以使用@xs、@3xl等自定义容器查询前缀。"
      }
    ],
    quiz: {
      question: "Tailwind中标记容器为查询容器的类是？",
      options: ["container-query", "@container", "query-container", "container"],
      correctAnswer: 1
    }
  },
  {
    id: 28,
    root: "逻辑属性 (Logical Properties)",
    origin: "高级特性",
    meaning: "Tailwind支持CSS逻辑属性，支持国际化RTL布局",
    description: "Tailwind默认支持CSS逻辑属性，提供了ps/pe（padding-inline-start/end）、ms/me（margin-inline-start/end）、border-s/border-e（border-inline-start/end）等类，这些属性会根据文本方向自动适配，LTR（从左到右）语言下start是左end是右，RTL（从右到左）语言下start是右end是左，无需修改代码即可支持RTL布局。",
    examples: [
      {
        word: "逻辑内边距",
        meaning: "使用逻辑属性设置内边距",
        breakdown: { root: "逻辑属性" },
        explanation: "<div class=\"ps-4 pe-2\">内容</div> → LTR下左边内边距4，右边2；RTL下右边内边距4，左边2，自动适配文本方向，不需要写两套样式。"
      },
      {
        word: "逻辑外边距",
        meaning: "使用逻辑属性设置外边距",
        breakdown: { root: "逻辑属性" },
        explanation: "<div class=\"ms-auto\">右边对齐内容</div> → LTR下margin-left: auto，元素右对齐；RTL下margin-right: auto，元素左对齐，自动适配方向，非常适合导航项右对齐等场景。"
      },
      {
        word: "RTL布局支持",
        meaning: "轻松支持阿拉伯语等RTL语言",
        breakdown: { root: "逻辑属性" },
        explanation: "全站使用逻辑属性类替代物理属性类（pl→ps、pr→pe、ml→ms、mr→me等），然后只需要在html标签添加dir=\"rtl\"，整个网站就会自动适配RTL布局，不需要修改其他样式，大大降低国际化成本。"
      }
    ],
    quiz: {
      question: "以下哪个类是逻辑属性，对应padding-left（LTR）？",
      options: ["ps-4", "pl-4", "pe-4", "pr-4"],
      correctAnswer: 0
    }
  },
  {
    id: 29,
    root: "常用组件 - 导航栏",
    origin: "实战技巧",
    meaning: "使用Tailwind实现响应式导航栏",
    description: "使用Tailwind可以很方便地实现各种响应式导航栏，包括固定顶部、滚动时样式变化、移动端汉堡菜单、下拉菜单等功能，配合少量JavaScript就可以实现完整的导航交互，不需要依赖UI组件库。",
    examples: [
      {
        word: "基础响应式导航栏",
        meaning: "移动端汉堡菜单，桌面端完整导航",
        breakdown: { root: "常用组件 - 导航栏" },
        explanation: "<nav class=\"fixed top-0 left-0 right-0 bg-white shadow-md z-50\">\n  <div class=\"container mx-auto px-4 py-3 flex items-center justify-between\">\n    <a href=\"/\" class=\"text-xl font-bold text-gray-900\">Logo</a>\n    <!-- 桌面端导航 -->\n    <ul class=\"hidden md:flex items-center gap-6\">\n      <li><a href=\"/\" class=\"text-gray-600 hover:text-gray-900 font-medium\">首页</a></li>\n      <li><a href=\"/about\" class=\"text-gray-600 hover:text-gray-900 font-medium\">关于</a></li>\n    </ul>\n    <!-- 移动端汉堡按钮 -->\n    <button class=\"md:hidden text-gray-600\">\n      <svg class=\"h-6 w-6\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\">...</svg>\n    </button>\n  </div>\n</nav> 桌面端显示完整导航，移动端显示汉堡按钮。"
      },
      {
        word: "滚动时导航样式变化",
        meaning: "滚动时导航栏背景从透明变白色",
        breakdown: { root: "常用组件 - 导航栏" },
        explanation: "<nav id=\"navbar\" class=\"fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-sm z-50 transition-all\">\n  <!-- 导航内容 -->\n</nav>\n<script>\n  window.addEventListener('scroll', () => {\n    const navbar = document.getElementById('navbar')\n    if (window.scrollY > 20) {\n      navbar.classList.add('bg-white', 'shadow-md')\n      navbar.classList.remove('bg-white/80', 'shadow-sm')\n    } else {\n      navbar.classList.remove('bg-white', 'shadow-md')\n      navbar.classList.add('bg-white/80', 'shadow-sm')\n    }\n  })\n</script> 滚动时导航栏背景从半透明变实心，阴影加深。"
      },
      {
        word: "下拉菜单实现",
        meaning: "导航栏的下拉菜单组件",
        breakdown: { root: "常用组件 - 导航栏" },
        explanation: "<div class=\"relative\">\n  <button class=\"flex items-center gap-1 text-gray-600 hover:text-gray-900 font-medium\">\n    产品 <svg class=\"h-4 w-4\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\">...</svg>\n  </button>\n  <div class=\"absolute top-full right-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-2 hidden group-hover:block\">\n    <a href=\"/product1\" class=\"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded\">产品1</a>\n    <a href=\"/product2\" class=\"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded\">产品2</a>\n  </div>\n</div> 鼠标hover时显示下拉菜单。"
      }
    ],
    quiz: {
      question: "实现导航栏滚动时样式变化，需要用到什么API？",
      options: ["window.addEventListener('scroll')", "window.addEventListener('resize')", "document.addEventListener('DOMContentLoaded')", "IntersectionObserver API"],
      correctAnswer: 0
    }
  },
  {
    id: 30,
    root: "常用组件 - 模态框",
    origin: "实战技巧",
    meaning: "使用Tailwind实现模态框（弹窗）组件",
    description: "使用Tailwind可以很方便地实现模态框组件，包括半透明遮罩、居中弹窗、过渡动画、关闭按钮等，配合少量JavaScript就可以实现打开、关闭、禁止背景滚动等功能，满足大部分弹窗需求，不需要依赖第三方组件库。",
    examples: [
      {
        word: "基础模态框实现",
        meaning: "居中显示的弹窗，带遮罩",
        breakdown: { root: "常用组件 - 模态框" },
        explanation: "<!-- 模态框遮罩 -->\n<div id=\"modal\" class=\"fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center hidden\">\n  <!-- 模态框内容 -->\n  <div class=\"bg-white rounded-lg shadow-xl max-w-md w-full mx-4 p-6\">\n    <div class=\"flex items-center justify-between mb-4\">\n      <h3 class=\"text-xl font-bold text-gray-900\">模态框标题</h3>\n      <button onclick=\"closeModal()\" class=\"text-gray-400 hover:text-gray-600\">\n        <svg class=\"h-6 w-6\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\">...</svg>\n      </button>\n    </div>\n    <div class=\"text-gray-600 mb-6\">\n      模态框内容\n    </div>\n    <div class=\"flex justify-end gap-3\">\n      <button onclick=\"closeModal()\" class=\"px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200\">取消</button>\n      <button class=\"px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600\">确认</button>\n    </div>\n  </div>\n</div>"
      },
      {
        word: "模态框打开关闭功能",
        meaning: "实现模态框的打开和关闭逻辑",
        breakdown: { root: "常用组件 - 模态框" },
        explanation: "<script>\n  function openModal() {\n    const modal = document.getElementById('modal')\n    modal.classList.remove('hidden')\n    document.body.style.overflow = 'hidden' // 禁止背景滚动\n  }\n  \n  function closeModal() {\n    const modal = document.getElementById('modal')\n    modal.classList.add('hidden')\n    document.body.style.overflow = 'auto' // 恢复背景滚动\n  }\n\n  // 点击遮罩关闭模态框\n  document.getElementById('modal').addEventListener('click', (e) => {\n    if (e.target === document.getElementById('modal')) {\n      closeModal()\n    }\n  })\n</script>"
      },
      {
        word: "模态框过渡动画",
        meaning: "实现模态框的淡入淡出动画",
        breakdown: { root: "常用组件 - 模态框" },
        explanation: "给模态框添加过渡类：\n<div id=\"modal\" class=\"fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center opacity-0 pointer-events-none transition-opacity duration-300\">\n  <div class=\"bg-white rounded-lg shadow-xl max-w-md w-full mx-4 p-6 scale-95 transition-transform duration-300\">\n    <!-- 内容 -->\n  </div>\n</div>\n打开时添加classes: opacity-100 pointer-events-auto > div:scale-100，关闭时移除，实现淡入和缩放动画。"
      }
    ],
    quiz: {
      question: "禁止背景滚动的CSS属性是？",
      options: ["overflow: hidden", "scroll: none", "disable-scroll: true", "overflow: disable"],
      correctAnswer: 0
    }
  }
];
