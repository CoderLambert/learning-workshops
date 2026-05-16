const WordRoots = [
  // ========== CSS3 核心特性 ==========
  {
    id: 1,
    root: "CSS选择器进阶 (Selectors)",
    origin: "CSS3核心特性",
    meaning: "CSS3新增的多种选择器，让样式选择更精准",
    description: "CSS3引入了大量强大的选择器，包括属性选择器（[attr^=value]）、兄弟选择器（+、~）、子代选择器（>）、伪类选择器（:nth-child()、:not()）等。这些选择器让你可以在不修改HTML结构的情况下精准定位目标元素，减少对JS的依赖，让样式与结构解耦。",
    examples: [
      {
        word: "属性选择器",
        meaning: "根据元素属性精确匹配元素",
        breakdown: { root: "CSS选择器进阶" },
        explanation: "input[type=\"text\"] { border: 1px solid blue; } → 只选中type为text的input元素；[class^=\"icon-\"] → 匹配class以icon-开头的所有元素；[data-role~=\"admin\"] → 匹配data-role属性值中包含admin的元素。"
      },
      {
        word: "子代与兄弟选择器",
        meaning: "精确控制层级和兄弟关系",
        breakdown: { root: "CSS选择器进阶" },
        explanation: ".parent > .child { color: red; } → 只选择直接子元素（不包含孙辈）；h2 + p { margin-top: 0; } → 紧跟h2后的第一个p元素；h2 ~ p { color: gray; } → h2后的所有同级p元素。"
      },
      {
        word: "结构伪类选择器",
        meaning: "根据元素在DOM中的位置选择",
        breakdown: { root: "CSS选择器进阶" },
        explanation: "li:nth-child(2n) { background: #f0f0f0; } → 偶数行斑马纹；li:first-child { font-weight: bold; } → 第一个元素加粗；li:nth-last-child(-n+3) { color: red; } → 最后3个元素变红。"
      }
    ],
    quiz: {
      question: "以下哪个选择器只选择直接子元素？",
      options: ["selector descendant", "selector > child", "selector + sibling", "selector ~ siblings"],
      correctAnswer: 1
    }
  },
  {
    id: 2,
    root: "伪类与伪元素 (Pseudo)",
    origin: "CSS3核心特性",
    meaning: "使用伪类和伪元素为元素的不同状态或特定部分添加样式",
    description: "伪类用于定义元素的特殊状态（如:hover、:focus、:first-child、:not()），伪元素用于创建不在DOM中的虚拟元素（如::before、::after、::first-line、::placeholder）。::before和::after配合content属性是最强大的CSS技巧之一，可以在不修改HTML的情况下添加装饰性内容。",
    examples: [
      {
        word: "::before和::after装饰",
        meaning: "无需额外HTML元素实现装饰效果",
        breakdown: { root: "伪类与伪元素" },
        explanation: ".card::before { content: ''; position: absolute; top: 0; left: 0; width: 4px; height: 100%; background: linear-gradient(to bottom, #3B82F6, #8B5CF6); } → 在卡片左侧添加渐变色条，无需额外HTML元素。"
      },
      {
        word: ":not()排除选择",
        meaning: "排除特定元素应用样式",
        breakdown: { root: "伪类与伪元素" },
        explanation: "input:not([type=\"submit\"]) { width: 100%; margin-bottom: 12px; } → 除了submit类型的input外，所有input都占满宽度并带底部间距，避免按钮被意外拉伸。"
      },
      {
        word: "::placeholder自定义",
        meaning: "美化输入框占位符文字",
        breakdown: { root: "伪类与伪元素" },
        explanation: "input::placeholder { color: #9CA3AF; font-style: italic; font-size: 14px; } → 自定义占位符文字的颜色、字体样式和大小，提升表单用户体验。"
      }
    ],
    quiz: {
      question: "::before和::after伪元素必须配合哪个属性使用？",
      options: ["display", "content", "position", "visibility"],
      correctAnswer: 1
    }
  },
  {
    id: 3,
    root: "盒模型与box-sizing",
    origin: "CSS3核心特性",
    meaning: "理解CSS盒模型，使用box-sizing控制尺寸计算方式",
    description: "CSS盒模型定义了元素如何计算尺寸：content-box（默认）只计算内容区域，padding和border会增加总尺寸；border-box则将padding和border包含在width/height内，让布局计算更直观。现代开发中推荐全局设置* { box-sizing: border-box; }，这是所有CSS框架和Reset/Normalize的标配。",
    examples: [
      {
        word: "全局box-sizing重置",
        meaning: "让所有元素使用border-box计算",
        breakdown: { root: "盒模型与box-sizing" },
        explanation: "*, *::before, *::after { box-sizing: border-box; } → 全局重置后，设置width: 300px的元素无论加多少padding和border，总宽度都是300px，布局计算不再意外撑破容器。"
      },
      {
        word: "content-box vs border-box对比",
        meaning: "两种盒模型的尺寸计算差异",
        breakdown: { root: "盒模型与box-sizing" },
        explanation: "content-box: width: 200px + padding: 20px*2 + border: 2px*2 = 实际宽度244px；border-box: width: 200px（已包含padding和border）= 实际宽度200px。border-box让布局更加可预测。"
      },
      {
        word: "等宽两列布局",
        meaning: "使用border-box轻松实现等宽布局",
        breakdown: { root: "盒模型与box-sizing" },
        explanation: ".col { width: 50%; padding: 20px; float: left; border: 1px solid #ddd; } → 在border-box下，两个50%宽度的列可以并排显示，padding和border不会导致换行，这是content-box无法做到的。"
      }
    ],
    quiz: {
      question: "box-sizing: border-box的含义是？",
      options: ["只计算内容区域", "padding和border包含在width/height内", "只计算padding", "忽略margin"],
      correctAnswer: 1
    }
  },
  // ========== Flex/Grid 布局 ==========
  {
    id: 4,
    root: "Flexbox弹性布局",
    origin: "布局系统",
    meaning: "使用Flexbox实现一维布局，元素自动分配空间",
    description: "Flexbox是一维布局模型，擅长处理单行或单列的布局。通过display: flex激活后，子元素变成flex items，可以使用flex-direction控制方向、justify-content控制主轴对齐、align-items控制交叉轴对齐、flex-grow/shrink/basis控制伸缩比例，轻松实现垂直居中、等分、自适应等常见布局需求。",
    examples: [
      {
        word: "完美居中",
        meaning: "Flexbox实现水平垂直居中",
        breakdown: { root: "Flexbox弹性布局" },
        explanation: ".container { display: flex; justify-content: center; align-items: center; min-height: 100vh; } → 三行代码实现完美居中，无需计算margin或使用绝对定位，是Flexbox最经典的使用场景。"
      },
      {
        word: "导航栏两端分布",
        meaning: "使用justify-content: space-between实现",
        breakdown: { root: "Flexbox弹性布局" },
        explanation: "nav { display: flex; justify-content: space-between; align-items: center; padding: 0 24px; } → Logo在左，导航菜单在右，自动分配剩余空间，中间不留空白。"
      },
      {
        word: "自适应等分卡片",
        meaning: "flex-grow实现自动分配剩余空间",
        breakdown: { root: "Flexbox弹性布局" },
        explanation: ".card { flex: 1; min-width: 250px; } → flex: 1等于flex-grow: 1; flex-shrink: 1; flex-basis: 0%，所有卡片平分剩余空间，min-width防止卡片过窄。"
      }
    ],
    quiz: {
      question: "flex: 1 等同于以下哪个设置？",
      options: ["flex-grow: 1; flex-shrink: 0; flex-basis: auto", "flex-grow: 1; flex-shrink: 1; flex-basis: 0%", "flex-grow: 0; flex-shrink: 1; flex-basis: 100%", "flex-grow: 1; flex-shrink: 1; flex-basis: 100%"],
      correctAnswer: 1
    }
  },
  {
    id: 5,
    root: "Grid网格布局",
    origin: "布局系统",
    meaning: "使用CSS Grid实现二维网格布局",
    description: "Grid是二维布局系统，可以同时控制行和列。通过display: grid激活，使用grid-template-columns/rows定义网格轨道，gap设置间距，grid-column/row让项目跨越多行多列。配合repeat()、fr单位、minmax()、auto-fill/auto-fit等函数，可以实现极其复杂的响应式网格布局，且无需媒体查询。",
    examples: [
      {
        word: "响应式自动网格",
        meaning: "无需媒体查询实现响应式网格",
        breakdown: { root: "Grid网格布局" },
        explanation: ".grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; } → 自动根据容器宽度决定列数，每个卡片最小280px，最大占满剩余空间（1fr），一行写尽响应式。"
      },
      {
        word: "圣杯布局",
        meaning: "使用Grid实现经典三栏布局",
        breakdown: { root: "Grid网格布局" },
        explanation: ".layout { display: grid; grid-template-columns: 200px 1fr 200px; grid-template-rows: auto 1fr auto; } → header和footer跨3列，sidebar左200px，content占满中间，sidebar右200px，轻松实现经典圣杯布局。"
      },
      {
        word: "fr单位与minmax()",
        meaning: "使用fr和minmax实现灵活网格",
        breakdown: { root: "Grid网格布局" },
        explanation: ".grid { grid-template-columns: 1fr 2fr 1fr; } → 三列宽度比为1:2:1；.grid { grid-template-columns: minmax(200px, 1fr) 3fr; } → 第一列最小200px最大1fr，第二列固定3fr，灵活又有底线。"
      }
    ],
    quiz: {
      question: "Grid中repeat(auto-fill, minmax(280px, 1fr))的作用是？",
      options: ["固定3列布局", "自动根据宽度决定列数，每列最小280px", "每列固定280px", "只能填充4列"],
      correctAnswer: 1
    }
  },
  {
    id: 6,
    root: "Subgrid子网格",
    origin: "布局系统",
    meaning: "子元素继承父Grid的轨道，实现精准对齐",
    description: "Subgrid是Grid的进阶特性，允许嵌套的Grid继承父容器的网格轨道定义。通过grid-template-columns: subgrid声明，子网格可以沿用父级的列定义，解决嵌套Grid无法对齐的问题。这在卡片列表、表格布局、表单对齐等场景中非常有用，让多层嵌套的元素也能完美对齐。",
    examples: [
      {
        word: "卡片列表对齐",
        meaning: "卡片标题和内容列对齐",
        breakdown: { root: "Subgrid子网格" },
        explanation: ".cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }\n.card { display: grid; grid-template-rows: subgrid; grid-row: span 3; } → 所有卡片的标题区、内容区、底部区分别对齐，即使内容长度不同也能保持整齐。"
      },
      {
        word: "表单标签对齐",
        meaning: "多列表单的标签列完美对齐",
        breakdown: { root: "Subgrid子网格" },
        explanation: ".form-group { display: grid; grid-template-columns: subgrid; grid-column: span 2; }\n.form-group label { grid-column: 1; }\n.form-group input { grid-column: 2; } → 多行表单的标签列宽度一致，输入框列对齐，即使标签文字长度不同。"
      },
      {
        word: "兼容性说明",
        meaning: "Subgrid的浏览器支持情况",
        breakdown: { root: "Subgrid子网格" },
        explanation: "Subgrid在Firefox 71+、Chrome 117+、Safari 16+中已支持，覆盖绝大多数现代浏览器。对于不支持的浏览器，可以降级为普通Grid布局，使用@supports (grid-template-columns: subgrid)进行渐进增强。"
      }
    ],
    quiz: {
      question: "声明子网格继承父Grid轨道的语法是？",
      options: ["grid-template-columns: inherit", "grid-template-columns: subgrid", "grid-template-columns: nested", "grid-template-columns: auto"],
      correctAnswer: 1
    }
  },
  // ========== CSS动画 ==========
  {
    id: 7,
    root: "CSS过渡动画 (Transitions)",
    origin: "CSS动画",
    meaning: "使用transition实现平滑的CSS属性变化",
    description: "CSS Transition允许属性值在指定时间内平滑过渡，而非瞬间变化。通过transition-property指定要过渡的属性、transition-duration设置时长、transition-timing-function控制速度曲线（ease、linear、ease-in-out等）、transition-delay设置延迟。最常用于hover效果、菜单展开收起、模态框弹出等交互场景。",
    examples: [
      {
        word: "按钮hover效果",
        meaning: "平滑过渡按钮背景色和变换",
        breakdown: { root: "CSS过渡动画" },
        explanation: ".btn { background: #3B82F6; transform: translateY(0); transition: all 0.3s ease; }\n.btn:hover { background: #2563EB; transform: translateY(-2px); } → 鼠标悬停时按钮颜色变深并上移2px，过渡流畅自然。"
      },
      {
        word: "手风琴展开收起",
        meaning: "使用max-height实现平滑展开",
        breakdown: { root: "CSS过渡动画" },
        explanation: ".accordion-content { max-height: 0; overflow: hidden; transition: max-height 0.4s ease-out; }\n.accordion-content.open { max-height: 500px; } → 点击时max-height从0过渡到500px，实现平滑展开效果，比直接切换display更优雅。"
      },
      {
        word: "多属性过渡",
        meaning: "同时过渡多个CSS属性",
        breakdown: { root: "CSS过渡动画" },
        explanation: ".card { transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.2s linear; } → 变换和阴影用0.3s缓动，边框颜色用0.2s线性变化，不同属性可以设置不同的过渡时长和速度曲线。"
      }
    ],
    quiz: {
      question: "以下哪个timing-function表示先加速后减速的过渡？",
      options: ["linear", "ease-in", "ease-out", "ease-in-out"],
      correctAnswer: 3
    }
  },
  {
    id: 8,
    root: "CSS关键帧动画 (Animations)",
    origin: "CSS动画",
    meaning: "使用@keyframes和animation属性创建复杂动画",
    description: "CSS Animations比Transitions更强大，可以定义多个关键帧（0%到100%），实现多阶段动画。通过@keyframes定义动画序列，使用animation属性控制动画名称、时长、速度曲线、延迟、次数（infinite无限循环）、方向（normal/reverse/alternate）和填充模式（forwards/backwards）。无需JavaScript即可实现旋转、弹跳、闪烁、打字等丰富动画效果。",
    examples: [
      {
        word: "加载旋转动画",
        meaning: "无限旋转的加载指示器",
        breakdown: { root: "CSS关键帧动画" },
        explanation: "@keyframes spin { to { transform: rotate(360deg); } }\n.loader { width: 40px; height: 40px; border: 4px solid #ddd; border-top-color: #3B82F6; border-radius: 50%; animation: spin 1s linear infinite; } → 纯CSS实现加载旋转动画，无需任何JS。"
      },
      {
        word: "弹跳入场动画",
        meaning: "元素弹跳进入视口",
        breakdown: { root: "CSS关键帧动画" },
        explanation: "@keyframes bounceIn { 0% { transform: scale(0.3); opacity: 0; } 50% { transform: scale(1.05); } 70% { transform: scale(0.9); } 100% { transform: scale(1); opacity: 1; } }\n.element { animation: bounceIn 0.8s ease-out; } → 多关键帧实现弹跳效果，比简单淡入更有视觉冲击力。"
      },
      {
        word: "打字机光标效果",
        meaning: "模拟打字机光标闪烁",
        breakdown: { root: "CSS关键帧动画" },
        explanation: "@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }\n.cursor { display: inline-block; width: 2px; height: 1em; background: #333; animation: blink 1s step-end infinite; } → 使用step-end实现瞬时切换，模拟光标闪烁效果。"
      }
    ],
    quiz: {
      question: "animation: name 2s ease infinite中的infinite表示？",
      options: ["动画只播放一次", "动画无限循环播放", "动画反向播放", "动画延迟2秒"],
      correctAnswer: 1
    }
  },
  // ========== 响应式设计 ==========
  {
    id: 9,
    root: "响应式设计与媒体查询",
    origin: "响应式设计",
    meaning: "使用媒体查询实现不同屏幕尺寸的自适应布局",
    description: "响应式设计的核心是媒体查询（@media），可以根据视口宽度、设备类型、方向等条件应用不同的样式。推荐采用移动优先策略：先写移动端基础样式，再用min-width媒体查询逐步增强到大屏。现代响应式设计还结合了容器查询、Grid的auto-fill/minmax、clamp()等新技术，让响应式更加智能和精细。",
    examples: [
      {
        word: "移动优先媒体查询",
        meaning: "从小屏到大屏逐步增强",
        breakdown: { root: "响应式设计与媒体查询" },
        explanation: ".container { padding: 16px; }\n@media (min-width: 768px) { .container { padding: 24px; max-width: 720px; margin: 0 auto; } }\n@media (min-width: 1024px) { .container { max-width: 960px; } }\n@media (min-width: 1280px) { .container { max-width: 1200px; } } → 移动优先，逐步增强。"
      },
      {
        word: "响应式排版",
        meaning: "字号和行宽随屏幕自适应",
        breakdown: { root: "响应式设计与媒体查询" },
        explanation: "h1 { font-size: clamp(1.75rem, 4vw + 1rem, 3.5rem); }\n.container { max-width: min(90vw, 75ch); margin-inline: auto; } → clamp()让字号在小屏不小于1.75rem，大屏不超过3.5rem，中间随视口线性变化；75ch是最佳阅读宽度。"
      },
      {
        word: "响应式图片",
        meaning: "图片自适应容器宽度",
        breakdown: { root: "响应式设计与媒体查询" },
        explanation: "img { max-width: 100%; height: auto; display: block; } → 图片最大宽度不超过容器，高度自动保持比例，消除底部间隙（display: block），这是响应式图片的基础三件套。"
      }
    ],
    quiz: {
      question: "移动优先策略中，媒体查询应该使用？",
      options: ["max-width", "min-width", "device-width", "orientation"],
      correctAnswer: 1
    }
  },
  {
    id: 10,
    root: "流体排版与clamp()",
    origin: "响应式设计",
    meaning: "使用clamp()等CSS函数实现平滑的流体排版",
    description: "CSS流体排版让元素尺寸在不同视口下平滑变化，而非在断点处跳跃。clamp(min, preferred, max)函数限制值在最小和最大之间，preferred通常使用视口单位（vw）实现缩放。配合calc()、min()、max()等CSS数学函数，可以创建极其精细的响应式排版和间距系统，无需大量媒体查询。",
    examples: [
      {
        word: "流体标题字号",
        meaning: "标题字号随视口平滑变化",
        breakdown: { root: "流体排版与clamp()" },
        explanation: "h1 { font-size: clamp(2rem, 5vw + 0.5rem, 4rem); } → 最小2rem，最大4rem，中间根据视口宽度在5vw+0.5rem和最大/最小值之间取合适值，无需媒体查询实现平滑缩放。"
      },
      {
        word: "流体间距",
        meaning: "间距随视口平滑变化",
        breakdown: { root: "流体排版与clamp()" },
        explanation: ":root { --spacing-lg: clamp(1.5rem, 3vw + 0.5rem, 3rem); }\n.section { margin-bottom: var(--spacing-lg); } → 使用CSS变量+clamp()定义流体间距，在整个站点统一使用，间距随视口平滑变化。"
      },
      {
        word: "min()与max()函数",
        meaning: "设置最大/最小值约束",
        breakdown: { root: "流体排版与clamp()" },
        explanation: ".container { width: min(90%, 1200px); } → 容器宽度取90%视口宽度和1200px中较小的值，避免在大屏上过宽；.sidebar { width: max(250px, 20%); } → 侧边栏最小250px，但至少要占20%。"
      }
    ],
    quiz: {
      question: "clamp(1rem, 2vw + 0.5rem, 3rem)中，如果2vw+0.5rem=2rem，最终字号是？",
      options: ["1rem", "2rem", "3rem", "1.5rem"],
      correctAnswer: 1
    }
  },
  // ========== CSS变量与函数 ==========
  {
    id: 11,
    root: "CSS自定义属性 (Variables)",
    origin: "CSS变量与函数",
    meaning: "使用CSS变量实现可维护的主题和样式系统",
    description: "CSS自定义属性（CSS变量）以--开头声明，通过var()函数引用，具有级联特性。相比预处理器变量（Sass/Less），CSS变量可以在运行时修改、支持JavaScript交互、具有作用域（可在特定选择器内重新定义）。它们是构建主题切换、设计系统、动态样式的基石，现代CSS开发几乎离不开CSS变量。",
    examples: [
      {
        word: "设计令牌系统",
        meaning: "用CSS变量定义设计系统的核心值",
        breakdown: { root: "CSS自定义属性" },
        explanation: ":root {\n  --color-primary: #3B82F6;\n  --color-primary-hover: #2563EB;\n  --spacing-sm: 8px;\n  --spacing-md: 16px;\n  --spacing-lg: 24px;\n  --radius: 8px;\n  --shadow: 0 2px 8px rgba(0,0,0,0.1);\n} → 集中管理所有设计值，修改一处全局生效。"
      },
      {
        word: "主题切换",
        meaning: "运行时切换CSS变量值实现换肤",
        breakdown: { root: "CSS自定义属性" },
        explanation: ".dark {\n  --bg: #1a1a2e;\n  --text: #eee;\n  --card-bg: #16213e;\n}\nbody { background: var(--bg); color: var(--text); }\n.card { background: var(--card-bg); } → 只需在根元素切换class，所有使用变量的元素自动更新颜色，无需额外JS逻辑。"
      },
      {
        word: "组件级变量覆盖",
        meaning: "在特定组件内覆盖全局变量",
        breakdown: { root: "CSS自定义属性" },
        explanation: ".alert {\n  --alert-bg: #DBEAFE;\n  --alert-text: #1E40AF;\n  background: var(--alert-bg);\n  color: var(--alert-text);\n}\n.alert-danger {\n  --alert-bg: #FEE2E2;\n  --alert-text: #991B1B;\n} → 子组件通过重新定义变量实现变体，保持HTML结构一致。"
      }
    ],
    quiz: {
      question: "CSS自定义属性的声明格式是？",
      options: ["$variable-name", "@variable-name", "--variable-name", "var(variable-name)"],
      correctAnswer: 2
    }
  },
  {
    id: 12,
    root: "CSS函数 (calc/min/max/clamp)",
    origin: "CSS变量与函数",
    meaning: "CSS数学函数实现动态计算和约束",
    description: "CSS提供了一组数学函数：calc()进行加减乘除运算、min()取最小值、max()取最大值、clamp()在范围内取值。这些函数让CSS具备了计算能力，可以在运行时根据视口、变量、混合单位（px+vw+%）动态计算属性值，是实现流体排版、响应式组件、自适应布局的强大工具。",
    examples: [
      {
        word: "calc()动态计算",
        meaning: "混合单位计算实现精确布局",
        breakdown: { root: "CSS函数" },
        explanation: ".sidebar { width: calc(300px + 2rem); }\n.main { width: calc(100% - 300px - 2rem); gap: calc(var(--spacing) * 2); } → calc()支持混合单位（px+rem+%），还可以引用CSS变量进行数学运算，注意运算符两侧必须有空格。"
      },
      {
        word: "min()限制最大宽度",
        meaning: "优雅的响应式宽度控制",
        breakdown: { root: "CSS函数" },
        explanation: ".hero-img { width: min(100%, 800px); } → 图片宽度最大800px，在小屏下占满容器，大屏下不超过800px，一行代码实现响应式图片宽度。"
      },
      {
        word: "max()设置最小值",
        meaning: "确保元素不会过小",
        breakdown: { root: "CSS函数" },
        explanation: ".btn { padding: max(0.5rem, 2vw) max(1rem, 4vw); } → 内边距最小为0.5rem 1rem，随着视口增大而增大，确保按钮在小屏下不会过于紧凑。"
      }
    ],
    quiz: {
      question: "calc(100% - 2rem)的正确写法中，运算符两侧必须？",
      options: ["不需要空格", "必须有空格", "只能有一个空格", "可以用括号包裹"],
      correctAnswer: 1
    }
  },
  // ========== 现代CSS新特性 ==========
  {
    id: 13,
    root: "容器查询 (Container Queries)",
    origin: "CSS新特性",
    meaning: "根据父容器大小而非视口大小应用样式",
    description: "容器查询是CSS的革命性特性，让组件根据自身容器宽度而非视口宽度来调整样式。通过container-type定义查询容器，使用@container编写条件样式。这解决了组件在不同上下文（侧边栏vs主内容区）中需要不同布局的问题，是组件级响应式设计的关键，让真正的可复用组件成为可能。",
    examples: [
      {
        word: "基础容器查询",
        meaning: "组件根据容器宽度改变布局",
        breakdown: { root: "容器查询" },
        explanation: ".card-wrapper { container-type: inline-size; }\n@container (min-width: 500px) {\n  .card { display: flex; gap: 20px; }\n  .card img { width: 200px; }\n}\n/* 默认垂直布局 */\n.card { display: flex; flex-direction: column; } → 容器超过500px时水平排列，否则垂直排列，与视口无关。"
      },
      {
        word: "命名容器查询",
        meaning: "使用命名容器避免冲突",
        breakdown: { root: "容器查询" },
        explanation: ".sidebar { container-type: inline-size; container-name: sidebar; }\n@container sidebar (min-width: 300px) {\n  .widget { grid-template-columns: 1fr 1fr; }\n} → 给容器命名，查询时使用容器名，避免多层嵌套容器时的查询冲突。"
      },
      {
        word: "容器查询单位",
        meaning: "使用cqw/cqh/cqi等容器单位",
        breakdown: { root: "容器查询" },
        explanation: ".card-title { font-size: clamp(1rem, 4cqi + 0.5rem, 1.5rem); } → 使用cqi（容器内联尺寸单位）替代vw，让字号随容器宽度变化而非视口宽度，在侧边栏和主内容区中呈现不同的字号。"
      }
    ],
    quiz: {
      question: "声明元素为容器查询容器的属性是？",
      options: ["container: true", "container-type: inline-size", "query-container: yes", "container-query: on"],
      correctAnswer: 1
    }
  },
  {
    id: 14,
    root: "层叠层 (Cascade Layers)",
    origin: "CSS新特性",
    meaning: "使用@layer控制CSS规则的优先级",
    description: "@layer是CSS层叠层特性，允许开发者显式声明样式层的优先级顺序，解决!important滥用和选择器特异性竞争的问题。通过@layer声明层和定义优先级顺序，不同层中的样式按照层顺序而非特异性来决定胜负。这对于大型项目、设计系统、第三方库集成等场景特别有用，让CSS优先级变得可预测和可控。",
    examples: [
      {
        word: "声明层优先级顺序",
        meaning: "定义多个层的优先级关系",
        breakdown: { root: "层叠层" },
        explanation: "@layer reset, base, components, utilities;\n@layer reset { * { margin: 0; box-sizing: border-box; } }\n@layer base { body { font-family: sans-serif; } }\n@layer components { .btn { padding: 8px 16px; } }\n@layer utilities { .hidden { display: none; } } → 优先级：utilities > components > base > reset，无论选择器特异性如何。"
      },
      {
        word: "第三方库样式覆盖",
        meaning: "使用层叠层优雅覆盖第三方样式",
        breakdown: { root: "层叠层" },
        explanation: "@layer vendor, custom;\n@import 'vendor-lib.css' layer(vendor);\n@layer custom {\n  .vendor-component { /* 覆盖第三方库样式 */ }\n} → 将第三方库样式放在vendor层，自定义样式放在custom层，无需!important即可覆盖。"
      },
      {
        word: "嵌套层",
        meaning: "层可以嵌套，形成层级结构",
        breakdown: { root: "层叠层" },
        explanation: "@layer base {\n  @layer typography {\n    h1 { font-size: 2rem; }\n    p { line-height: 1.6; }\n  }\n  @layer layout {\n    .container { max-width: 1200px; }\n  }\n} → 层可以嵌套，typography和layout都属于base层，但它们之间的优先级由声明顺序决定。"
      }
    ],
    quiz: {
      question: "@layer reset, base, components; 中优先级最高的是？",
      options: ["reset", "base", "components", "三者相同"],
      correctAnswer: 2
    }
  },
  {
    id: 15,
    root: ":has() 选择器",
    origin: "CSS新特性",
    meaning: "CSS父选择器，根据子元素状态选择父元素",
    description: ":has()被称为\"CSS父选择器\"，允许根据子元素或后代元素的状态来选择父元素，这是CSS领域长久以来缺失的能力。例如可以选择包含特定子元素的父元素、选择有焦点子元素的父表单等。它的出现让很多以前需要JavaScript才能实现的功能现在可以纯CSS完成，大大减少了JS的使用场景。",
    examples: [
      {
        word: "条件样式",
        meaning: "根据子元素是否存在应用父元素样式",
        breakdown: { root: ":has() 选择器" },
        explanation: ".card:has(img) { display: grid; grid-template-columns: 1fr 1fr; }\n.card:not(:has(img)) { display: block; text-align: center; } → 有图片的卡片使用网格布局，没有图片的卡片使用块级居中布局，无需JS判断。"
      },
      {
        word: "表单状态反馈",
        meaning: "根据输入框状态设置父容器样式",
        breakdown: { root: ":has() 选择器" },
        explanation: ".form-group:has(input:focus) { border-color: #3B82F6; box-shadow: 0 0 0 3px rgba(59,130,246,0.1); }\n.form-group:has(input:invalid) { border-color: #EF4444; } → 输入框聚焦时父容器高亮，输入无效时父容器变红，纯CSS实现表单验证反馈。"
      },
      {
        word: "列表条件样式",
        meaning: "根据列表项数量应用不同样式",
        breakdown: { root: ":has() 选择器" },
        explanation: "ul:has(> li:nth-child(4)) { columns: 2; } → 当列表超过3项时自动分两列显示；\nav:has(a:hover) a:not(:hover) { opacity: 0.6; } → 导航栏中hover一个链接时，其他链接变淡，突出当前链接。"
      }
    ],
    quiz: {
      question: ":has() 选择器常被称为？",
      options: ["子选择器", "兄弟选择器", "CSS父选择器", "后代选择器"],
      correctAnswer: 2
    }
  },
  {
    id: 16,
    root: "CSS滚动吸附 (Scroll Snap)",
    origin: "CSS新特性",
    meaning: "使用Scroll Snap实现滚动对齐效果",
    description: "CSS Scroll Snap让滚动自动对齐到特定位置，无需JavaScript即可实现轮播图、全屏滚动、粘性章节等效果。通过scroll-snap-type在容器上定义吸附类型（x/y/both），使用scroll-snap-align在项目上定义吸附位置（start/center/end），配合scroll-snap-stop控制吸附强度。这是实现轮播和全屏滚动最简洁的CSS方案。",
    examples: [
      {
        word: "水平轮播图",
        meaning: "纯CSS实现水平滚动轮播",
        breakdown: { root: "CSS滚动吸附" },
        explanation: ".carousel { display: flex; overflow-x: auto; scroll-snap-type: x mandatory; gap: 16px; padding: 16px; }\n.carousel-item { flex: 0 0 100%; scroll-snap-align: center; } → 水平滚动时每个项目自动对齐到中心，支持触摸滑动，无需任何JS库。"
      },
      {
        word: "全屏滚动页面",
        meaning: "每次滚动完整屏切换",
        breakdown: { root: "CSS滚动吸附" },
        explanation: ".fullpage { height: 100vh; overflow-y: scroll; scroll-snap-type: y mandatory; }\n.section { height: 100vh; scroll-snap-align: start; } → 每次滚动自动对齐到下一个全屏section，适合单页展示网站、产品介绍页等场景。"
      },
      {
        word: "粘性章节导航",
        meaning: "滚动时章节标题吸附到顶部",
        breakdown: { root: "CSS滚动吸附" },
        explanation: ".article { scroll-snap-type: y proximity; }\n.article h2 { scroll-snap-align: start; position: sticky; top: 0; background: white; padding: 12px 0; border-bottom: 1px solid #eee; } → 滚动时每个h2章节标题吸附到顶部并sticky固定，形成自然的章节分隔效果。"
      }
    ],
    quiz: {
      question: "scroll-snap-type: x mandatory中mandatory的含义是？",
      options: ["滚动时可以不对齐", "滚动停止时必须对齐到吸附点", "只在x轴吸附", "禁止滚动"],
      correctAnswer: 1
    }
  },
  {
    id: 17,
    root: "现代CSS色彩系统",
    origin: "CSS新特性",
    meaning: "CSS新的色彩函数和宽色域支持",
    description: "CSS新增了多种色彩函数和色彩空间支持，包括oklch()、oklab()、color()、color-mix()、color-contrast()等。oklch基于人眼感知均匀分布，比hsl更自然；color-mix()可以混合两个颜色；新的语法支持P3和rec2020等宽色域，让网页色彩更加丰富和精确。这些是现代CSS色彩设计的未来标准。",
    examples: [
      {
        word: "oklch()色彩函数",
        meaning: "使用感知均匀的色彩空间",
        breakdown: { root: "现代CSS色彩系统" },
        explanation: ":root {\n  --primary: oklch(65% 0.25 250);\n  --primary-light: oklch(85% 0.12 250);\n  --primary-dark: oklch(45% 0.3 250);\n} → oklch(亮度 色度 色相)，相同亮度变化在视觉上感知一致，生成的色板比hsl更自然。"
      },
      {
        word: "color-mix()颜色混合",
        meaning: "在CSS中直接混合两个颜色",
        breakdown: { root: "现代CSS色彩系统" },
        explanation: ".btn:hover { background: color-mix(in oklch, var(--btn-bg) 80%, black); }\n.btn:active { background: color-mix(in oklch, var(--btn-bg) 90%, white); } → hover时混合20%黑色变深，active时混合10%白色变亮，无需预设多个颜色变量。"
      },
      {
        word: "相对颜色语法",
        meaning: "基于已有颜色创建变体",
        breakdown: { root: "现代CSS色彩系统" },
        explanation: ".card { background: oklch(from var(--primary) 95% 0.05 h); }\n.border { border-color: oklch(from var(--primary) l 0.3 h); } → 使用from语法基于主色调创建不同亮度和色度的变体，保持色相一致，自动生成配套色板。"
      }
    ],
    quiz: {
      question: "oklch()的三个参数分别代表？",
      options: ["红 绿 蓝", "色相 饱和度 亮度", "亮度 色度 色相", "透明度 色相 饱和度"],
      correctAnswer: 2
    }
  },
  // ========== 滚动与视口 ==========
  {
    id: 18,
    root: "滚动驱动动画 (Scroll-Driven)",
    origin: "CSS新特性",
    meaning: "使用CSS实现滚动触发的动画效果",
    description: "滚动驱动动画是CSS的最新特性，允许将动画进度绑定到滚动位置，无需JavaScript监听scroll事件。通过animation-timeline: scroll()或view()，可以创建进度条、视差滚动、滚动触发的淡入淡出等效果。这是CSS动画领域的重大突破，让复杂的滚动交互可以用纯CSS实现，性能远超JS方案。",
    examples: [
      {
        word: "页面阅读进度条",
        meaning: "顶部显示页面滚动进度条",
        breakdown: { root: "滚动驱动动画" },
        explanation: ".progress-bar {\n  position: fixed; top: 0; left: 0; height: 4px;\n  background: linear-gradient(90deg, #3B82F6, #8B5CF6);\n  animation: grow-progress auto linear;\n  animation-timeline: scroll(root);\n}\n@keyframes grow-progress { from { width: 0; } to { width: 100%; } } → 页面滚动时进度条从0%到100%，无需任何JS。"
      },
      {
        word: "滚动触发的元素淡入",
        meaning: "元素进入视口时淡入显示",
        breakdown: { root: "滚动驱动动画" },
        explanation: ".fade-in {\n  animation: fadeIn linear;\n  animation-timeline: view();\n  animation-range: entry 0% entry 30%;\n}\n@keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } } → 元素进入视口时自动淡入，30%的进入范围完成动画。"
      },
      {
        word: "视差滚动效果",
        meaning: "背景以不同速度滚动产生视差",
        breakdown: { root: "滚动驱动动画" },
        explanation: ".parallax-bg {\n  animation: parallax linear;\n  animation-timeline: scroll(root);\n}\n@keyframes parallax { from { transform: translateY(0); } to { transform: translateY(-100px); } } → 背景元素以较慢速度随滚动移动，产生视差效果，无需JS计算滚动位置。"
      }
    ],
    quiz: {
      question: "animation-timeline: scroll(root)中的root表示？",
      options: ["根元素<html>", "文档滚动容器", "最近的滚动容器", "视口"],
      correctAnswer: 1
    }
  }
];
window.wordData = { words: WordRoots };
