// Vue 3 学习工坊 - 知识点数据
const wordData = {
  siteTitle: "Vue 3 学习工坊",
  siteDescription: "系统学习 Vue 3 核心特性，覆盖组合式 API、响应式系统、组件通信、状态管理等 18 个核心知识点。",
  siteEmoji: "🌿",
  words: [
    {
      id: 1,
      title: "响应式基础：ref 与 reactive",
      category: "响应式系统",
      difficulty: "入门",
      estimatedMinutes: 25,
      description: "理解 Vue 3 响应式系统的两种基本数据类型，ref 用于包装基本类型值，reactive 用于创建响应式对象。",
      examples: [
        {
          title: "ref — 响应式基本类型",
          code: `<script setup>\nimport { ref } from 'vue'\n\nconst count = ref(0)\nconst name = ref('Vue 3')\n\nfunction increment() {\n  count.value++  // ⚠️ 注意 .value\n}\n</script>\n\n<template>\n  <p>{{ count }} - {{ name }}</p>\n  <button @click="increment">+1</button>\n</template>`
        },
        {
          title: "reactive — 响应式对象",
          code: `<script setup>\nimport { reactive } from 'vue'\n\nconst state = reactive({\n  count: 0,\n  name: 'Vue 3',\n  todos: ['学习', '练习']\n})\n\nfunction addTodo() {\n  state.todos.push('实战')\n}\n</script>\n\n<template>\n  <p>{{ state.count }} - {{ state.name }}</p>\n  <ul>\n    <li v-for="todo in state.todos" :key="todo">{{ todo }}</li>\n  </ul>\n</template>`
        },
        {
          title: "ref vs reactive 选型建议",
          code: `// ✅ 推荐：基本类型用 ref\nconst count = ref(0)\nconst isActive = ref(true)\n\n// ✅ 推荐：对象/数组用 reactive\nconst form = reactive({\n  username: '',\n  password: ''\n})\nconst list = reactive([])\n\n// ✅ 统一使用 ref 也可以（更一致）\nconst user = ref({\n  name: 'Vue',\n  version: 3\n})\n// 使用时：user.value.name`
        }
      ],
      quiz: {
        question: "ref 包装的响应式变量在模板中使用时需要加 .value 吗？",
        options: [
          "需要，始终使用 ref.value",
          "不需要，模板中自动解包",
          "只有数字类型需要",
          "只有字符串类型不需要"
        ],
        correct: 1,
        explanation: "在 <template> 中 ref 会被自动解包，直接使用 {{ count }} 即可；但在 <script> 中必须使用 count.value。"
      }
    },
    {
      id: 2,
      title: "计算属性 computed",
      category: "响应式系统",
      difficulty: "入门",
      estimatedMinutes: 20,
      description: "computed 基于现有响应式状态派生新值，具有缓存特性，依赖不变时不会重新计算。",
      examples: [
        {
          title: "基本用法 — 派生值",
          code: `<script setup>\nimport { ref, computed } from 'vue'\n\nconst firstName = ref('张')\nconst lastName = ref('三')\n\nconst fullName = computed(() => {\n  return firstName.value + lastName.value\n})\n</script>\n\n<template>\n  <p>姓名：{{ fullName }}</p>\n</template>`
        },
        {
          title: "可写 computed",
          code: `<script setup>\nimport { ref, computed } from 'vue'\n\nconst firstName = ref('张')\nconst lastName = ref('三')\n\nconst fullName = computed({\n  get: () => firstName.value + lastName.value,\n  set: (value) => {\n    firstName.value = value.slice(0, 1)\n    lastName.value = value.slice(1)\n  }\n})\n</script>\n\n<template>\n  <input v-model="fullName" />\n  <p>姓：{{ firstName }}，名：{{ lastName }}</p>\n</template>`
        },
        {
          title: "computed vs 方法的区别",
          code: `// ❌ 使用函数 — 每次渲染都执行\nfunction totalPrice() {\n  return items.value.reduce((sum, i) => sum + i.price, 0)\n}\n\n// ✅ 使用 computed — 有缓存，依赖不变不重新计算\nconst totalPrice = computed(() => {\n  return items.value.reduce((sum, i) => sum + i.price, 0)\n})\n\n// 💡 什么时候用 computed：\n// 1. 基于响应式状态的派生值\n// 2. 计算成本较高的场景\n// 3. 多处使用的共享派生值`
        }
      ],
      quiz: {
        question: "computed 的核心优势是什么？",
        options: [
          "可以修改原始数据",
          "具有缓存特性，依赖不变时不重新计算",
          "可以替代 watch 监听变化",
          "可以在模板中直接使用 value"
        ],
        correct: 1,
        explanation: "computed 的核心优势是缓存机制。只有当依赖的响应式状态发生变化时才会重新计算，否则直接返回缓存值。"
      }
    },
    {
      id: 3,
      title: "监听器 watch 与 watchEffect",
      category: "响应式系统",
      difficulty: "进阶",
      estimatedMinutes: 25,
      description: "watch 精确监听特定数据源变化，watchEffect 自动追踪所有响应式依赖，适用于副作用场景。",
      examples: [
        {
          title: "watch — 精确监听",
          code: `<script setup>\nimport { ref, watch } from 'vue'\n\nconst count = ref(0)\n\n// 监听单个 ref\nwatch(count, (newVal, oldVal) => {\n  console.log('count 从', oldVal, '变为', newVal)\n})\n\n// 监听多个值\nconst name = ref('Vue')\nwatch([count, name], ([newCount, newName]) => {\n  console.log('count:', newCount, 'name:', newName)\n})\n</script>`
        },
        {
          title: "watchEffect — 自动追踪",
          code: `<script setup>\nimport { ref, watchEffect } from 'vue'\n\nconst count = ref(0)\nconst enabled = ref(true)\n\n// 自动追踪内部使用的所有响应式依赖\nwatchEffect(() => {\n  if (enabled.value) {\n    console.log('当前计数：', count.value)\n  }\n})\n\n// 返回值可用于清理\nwatchEffect((onCleanup) => {\n  const timer = setInterval(() => {\n    console.log('tick', count.value)\n  }, 1000)\n  onCleanup(() => clearInterval(timer))\n})`
        },
        {
          title: "watch vs watchEffect 对比",
          code: `// watch — 明确指定监听对象\nwatch(searchText, (newVal) => {\n  fetchResults(newVal)  // newVal 变化时才执行\n})\n\n// watchEffect — 自动追踪依赖\nwatchEffect(() => {\n  // searchText.value 和 page.value 任一变化都触发\n  fetchResults(searchText.value, page.value)\n})\n\n// 💡 选型建议：\n// ✅ 监听特定数据 → watch\n// ✅ 需要访问新旧值 → watch\n// ✅ 依赖可能动态变化 → watchEffect\n// ✅ 副作用依赖多个值 → watchEffect`
        }
      ],
      quiz: {
        question: "watchEffect 如何确定需要监听哪些响应式数据？",
        options: [
          "需要在第一个参数中明确指定",
          "自动追踪函数内部访问的所有响应式数据",
          "监听所有 ref 和 reactive 变量",
          "只监听函数返回的响应式数据"
        ],
        correct: 1,
        explanation: "watchEffect 会在执行时自动追踪函数内部访问的所有响应式数据（ref、reactive、computed），当任何依赖变化时重新执行。"
      }
    },
    {
      id: 4,
      title: "组合式 API 与 setup 语法糖",
      category: "组合式 API",
      difficulty: "入门",
      estimatedMinutes: 30,
      description: "<script setup> 是 Vue 3 推荐的组合式 API 写法，编译时优化带来更简洁的代码和更好的 TypeScript 支持。",
      examples: [
        {
          title: "<script setup> 基础",
          code: `<script setup>\n// 1. 导入\nimport { ref, computed } from 'vue'\n\n// 2. 响应式状态\nconst count = ref(0)\n\n// 3. 计算属性\nconst doubled = computed(() => count.value * 2)\n\n// 4. 方法（直接定义函数即可）\nfunction increment() {\n  count.value++\n}\n\n// 5. 所有内容自动暴露给模板\n// 无需 return！\n</script>\n\n<template>\n  <p>{{ count }} × 2 = {{ doubled }}</p>\n  <button @click="increment">增加</button>\n</template>`
        },
        {
          title: "组件导入与使用",
          code: `<script setup>\n// 自动注册！无需 components 选项\nimport MyButton from './MyButton.vue'\nimport MyIcon from './MyIcon.vue'\n\n// 动态导入\nimport { defineAsyncComponent } from 'vue'\nconst AsyncComponent = defineAsyncComponent(\n  () => import('./HeavyComponent.vue')\n)\n</script>\n\n<template>\n  <MyButton>点击</MyButton>\n  <MyIcon />\n  <AsyncComponent />\n</template>`
        },
        {
          title: "对比 Options API",
          code: `<!-- Options API（Vue 2 风格） -->\n<script>\nexport default {\n  data() {\n    return { count: 0 }\n  },\n  computed: {\n    doubled() { return this.count * 2 }\n  },\n  methods: {\n    increment() { this.count++ }\n  }\n}\n</script>\n\n<!-- <script setup>（Vue 3 推荐） -->\n<script setup>\nimport { ref, computed } from 'vue'\nconst count = ref(0)\nconst doubled = computed(() => count.value * 2)\nfunction increment() { count.value++ }\n</script>\n\n// 💡 <script setup> 的优势：\n// ✅ 更少的样板代码\n// ✅ 原生 TypeScript 支持\n// ✅ 更好的运行时性能\n// ✅ 逻辑复用更灵活（组合式函数）`
        }
      ],
      quiz: {
        question: "<script setup> 中定义的变量和方法，需要在模板中使用前做什么？",
        options: [
          "在 return 中显式返回",
          "什么都不做，自动暴露给模板",
          "使用 this. 前缀访问",
          "在 props 中声明"
        ],
        correct: 1,
        explanation: "<script setup> 会自动将顶层绑定的变量、函数、导入的组件暴露给模板，无需 return。"
      }
    },
    {
      id: 5,
      title: "生命周期钩子",
      category: "组合式 API",
      difficulty: "入门",
      estimatedMinutes: 20,
      description: "组合式 API 中的生命周期钩子以 onXxx 函数形式存在，需要在 setup 同步上下文中调用。",
      examples: [
        {
          title: "常用生命周期钩子",
          code: `<script setup>\nimport {\n  ref,\n  onMounted,\n  onUpdated,\n  onUnmounted,\n  onBeforeMount,\n  onBeforeUnmount\n} from 'vue'\n\nconst data = ref(null)\n\n// 挂载后（DOM 可用）\nonMounted(() => {\n  console.log('组件已挂载')\n  // 访问 DOM、发起请求、设置定时器\n  fetchData()\n})\n\n// 更新后\nonUpdated(() => {\n  console.log('组件已更新')\n})\n\n// 卸载前（清理资源）\nonBeforeUnmount(() => {\n  console.log('组件即将卸载')\n})\n\n// 卸载后\nonUnmounted(() => {\n  console.log('组件已卸载')\n  // 清理定时器、事件监听器等\n})\n</script>`
        },
        {
          title: "完整生命周期顺序",
          code: `// Vue 3 组合式 API 生命周期：\n// 1. setup()          → 组件初始化\n// 2. onBeforeMount    → 挂载前\n// 3. onMounted        → 挂载完成 ✅\n// 4. onBeforeUpdate   → 数据变化，DOM 更新前\n// 5. onUpdated        → DOM 更新完成 ✅\n// 6. onBeforeUnmount  → 卸载前\n// 7. onUnmounted      → 卸载完成\n// 8. onErrorCaptured  → 捕获子组件错误\n// 9. onRenderTracked  → 开发模式，追踪依赖\n// 10. onRenderTriggered → 开发模式，触发渲染\n\n// 💡 对比 Options API：\n// mounted        → onMounted\n// updated        → onUpdated\n// destroyed      → onUnmounted（改名了！）\n// beforeDestroy  → onBeforeUnmount（改名了！）`
        },
        {
          title: "实际案例：API 请求 + 清理",
          code: `<script setup>\nimport { ref, onMounted, onUnmounted } from 'vue'\n\nconst posts = ref([])\nconst timer = ref(null)\n\nonMounted(async () => {\n  // 组件加载时获取数据\n  const res = await fetch('/api/posts')\n  posts.value = await res.json()\n  \n  // 设置轮询\n  timer.value = setInterval(async () => {\n    const res = await fetch('/api/posts')\n    posts.value = await res.json()\n  }, 30000)\n})\n\nonUnmounted(() => {\n  // 组件卸载时清理\n  if (timer.value) {\n    clearInterval(timer.value)\n  }\n})\n</script>`
        }
      ],
      quiz: {
        question: "Vue 3 中哪个钩子最适合用来发起 API 请求？",
        options: [
          "onBeforeMount — 数据还没准备好",
          "onMounted — 组件已挂载，DOM 可用",
          "onUpdated — 每次更新都会触发",
          "setup — 同步执行，不能发异步请求"
        ],
        correct: 1,
        explanation: "onMounted 是最常用的数据请求钩子，此时组件已挂载到 DOM，可以安全地发起异步请求。"
      }
    },
    {
      id: 6,
      title: "Props — 父传子",
      category: "组件通信",
      difficulty: "入门",
      estimatedMinutes: 20,
      description: "Props 是父组件向子组件传递数据的方式，支持类型检查、默认值和必填校验。",
      examples: [
        {
          title: "defineProps 基础用法",
          code: `<!-- 子组件 Child.vue -->\n<script setup>\nconst props = defineProps({\n  title: String,\n  count: {\n    type: Number,\n    default: 0\n  },\n  tags: {\n    type: Array,\n    required: true\n  }\n})\n\n// TypeScript 推荐写法：\n// const props = defineProps<{\n//   title: string\n//   count?: number\n//   tags: string[]\n// }>()\n</script>\n\n<template>\n  <h2>{{ props.title }}</h2>\n  <span>数量：{{ props.count }}</span>\n  <span v-for="tag in props.tags" :key="tag">{{ tag }}</span>\n</template>`
        },
        {
          title: "父组件传递 Props",
          code: `<!-- 父组件 Parent.vue -->\n<script setup>\nimport Child from './Child.vue'\nimport { ref } from 'vue'\n\nconst count = ref(10)\nconst tags = ['Vue', '前端', '学习']\n</script>\n\n<template>\n  <!-- 静态传递 -->\n  <Child title="静态标题" :count="5" :tags="tags" />\n  \n  <!-- 动态绑定 -->\n  <Child\n    :title="'文章 ' + count"\n    :count="count"\n    :tags="tags"\n  />\n  \n  <!-- v-bind 传递所有属性 -->\n  <Child v-bind="{ title: '标题', count: 0, tags }" />\n</template>`
        },
        {
          title: "Props 单向数据流",
          code: `<!-- ⚠️ 错误：子组件直接修改 props -->\n<script setup>\nconst props = defineProps({ count: Number })\nprops.count++  // ❌ Vue 会发出警告！\n</script>\n\n<!-- ✅ 正确：使用本地副本 -->\n<script setup>\nimport { ref, watch } from 'vue'\n\nconst props = defineProps({ count: Number })\nconst localCount = ref(props.count)\n\n// 当 props 变化时同步\nwatch(() => props.count, (newVal) => {\n  localCount.value = newVal\n})\n\n// ✅ 或者用 computed\nconst displayCount = computed(() => props.count * 2)\n</script>`
        }
      ],
      quiz: {
        question: "子组件中可以直接修改从父组件传来的 props 吗？",
        options: [
          "可以，props 是可修改的",
          "不可以，props 是单向数据流，修改会触发警告",
          "只有数字类型可以修改",
          "在开发模式可以，生产模式不行"
        ],
        correct: 1,
        explanation: "Vue 遵循单向数据流原则，子组件不能直接修改 props。如果需要本地修改，应该基于 props 创建本地副本。"
      }
    },
    {
      id: 7,
      title: "Emits — 子传父",
      category: "组件通信",
      difficulty: "入门",
      estimatedMinutes: 20,
      description: "Emits 是子组件向父组件传递事件和数据的机制，支持事件校验和 TypeScript 类型定义。",
      examples: [
        {
          title: "defineEmits 基础",
          code: `<!-- 子组件 Child.vue -->\n<script setup>\nconst emit = defineEmits([\n  'update',\n  'delete',\n  'save'\n])\n\nfunction handleUpdate() {\n  emit('update', { id: 1, name: 'Vue 3' })\n}\n\nfunction handleDelete(id) {\n  emit('delete', id)\n}\n</script>\n\n<template>\n  <button @click="handleUpdate">更新</button>\n  <button @click="handleDelete(1)">删除</button>\n</template>`
        },
        {
          title: "父组件监听事件",
          code: `<!-- 父组件 Parent.vue -->\n<script setup>\nimport Child from './Child.vue'\n\nfunction onUpdate(data) {\n  console.log('收到更新：', data)\n}\n\nfunction onDelete(id) {\n  console.log('删除 ID：', id)\n}\n\n// TypeScript 类型定义：\n// const emit = defineEmits<{\n//   update: [data: { id: number; name: string }]\n//   delete: [id: number]\n// }>()\n</script>\n\n<template>\n  <Child\n    @update="onUpdate"\n    @delete="onDelete"\n    @save="console.log('保存成功')"\n  />\n</template>`
        },
        {
          title: "v-model 双向绑定",
          code: `<!-- 子组件 MyInput.vue -->\n<script setup>\nconst props = defineProps({\n  modelValue: String  // v-model 默认绑定的 prop\n})\nconst emit = defineEmits(['update:modelValue'])\n\nfunction onInput(e) {\n  emit('update:modelValue', e.target.value)\n}\n</script>\n\n<template>\n  <input :value="modelValue" @input="onInput" />\n</template>\n\n<!-- 父组件使用 -->\n<script setup>\nimport { ref } from 'vue'\nimport MyInput from './MyInput.vue'\n\nconst searchText = ref('')\n</script>\n\n<template>\n  <MyInput v-model="searchText" />\n  <p>当前搜索：{{ searchText }}</p>\n</template>`
        }
      ],
      quiz: {
        question: "v-model 在子组件中默认绑定哪个 prop 和 emit 哪个事件？",
        options: [
          "value 和 change",
          "modelValue 和 update:modelValue",
          "data 和 update",
          "input 和 input"
        ],
        correct: 1,
        explanation: "Vue 3 中 v-model 默认绑定 modelValue prop 并 emit update:modelValue 事件，支持多个 v-model（v-model:xxx）。"
      }
    },
    {
      id: 8,
      title: "Provide / Inject — 跨层级通信",
      category: "组件通信",
      difficulty: "进阶",
      estimatedMinutes: 25,
      description: "provide/inject 允许祖先组件向其所有后代注入依赖，避免深层组件多层传递 props。",
      examples: [
        {
          title: "基础用法",
          code: `<!-- 祖先组件 App.vue -->\n<script setup>\nimport { ref, provide } from 'vue'\n\nconst theme = ref('light')\nconst user = ref({ name: 'Vue', role: 'admin' })\n\nprovide('theme', theme)\nprovide('user', user)\n</script>\n\n<!-- 后代组件（任何层级） -->\n<script setup>\nimport { inject } from 'vue'\n\nconst theme = inject('theme')\nconst user = inject('user')\n\n// 带默认值\nconst lang = inject('language', 'zh-CN')\n\n// 响应式注入（接收工厂函数）\nconst theme = inject('theme', () => ref('light'))\n</script>\n\n<template>\n  <p>主题：{{ theme }}</p>\n  <p>用户：{{ user.name }}</p>\n</template>`
        },
        {
          title: "TypeScript 类型支持",
          code: `<script setup lang="ts">\nimport { inject, type Ref } from 'vue'\n\ninterface User {\n  name: string\n  role: string\n}\n\n// 带类型的 inject\nconst user = inject<Ref<User>>('user')\n\n// 带默认值 + 类型\nconst theme = inject<Ref<string>>('theme', ref('light'))\n</script>`
        },
        {
          title: "实际场景：主题切换",
          code: `<!-- App.vue — 顶层提供 -->\n<script setup>\nimport { ref, provide, computed } from 'vue'\n\nconst isDark = ref(false)\nconst theme = computed(() => isDark.value ? 'dark' : 'light')\n\nprovide('isDark', isDark)\nprovide('theme', theme)\n</script>\n\n<!-- ThemeToggle.vue — 任意后代使用 -->\n<script setup>\nimport { inject } from 'vue'\n\nconst isDark = inject('isDark')\nconst theme = inject('theme')\n\nfunction toggle() {\n  isDark.value = !isDark.value\n}\n</script>\n\n<template>\n  <button @click="toggle">\n    {{ theme === 'dark' ? '🌙 夜间' : '☀️ 日间' }}\n  </button>\n</template>`
        }
      ],
      quiz: {
        question: "provide/inject 适用于什么场景？",
        options: [
          "父子组件之间的简单数据传递",
          "跨多层级组件的依赖注入，避免 props 逐层传递",
          "子组件向父组件传递数据",
          "兄弟组件之间的数据共享"
        ],
        correct: 1,
        explanation: "provide/inject 主要用于跨层级通信，当父组件需要向深层子组件传递数据时，可以避免 props 逐层传递（prop drilling）。"
      }
    },
    {
      id: 9,
      title: "组件模板语法与指令",
      category: "模板语法",
      difficulty: "入门",
      estimatedMinutes: 25,
      description: "Vue 模板语法包括插值表达式、指令（v-bind, v-if, v-for, v-model 等）和事件处理。",
      examples: [
        {
          title: "常用指令一览",
          code: `<template>\n  <!-- 文本插值 -->\n  <p>{{ message }}</p>\n  <p>{{ count > 10 ? '很多' : '很少' }}</p>\n  \n  <!-- 属性绑定 -->\n  <img :src="imageUrl" :alt="title" />\n  <div :class="{ active: isActive }"></div>\n  \n  <!-- 条件渲染 -->\n  <div v-if="isAdmin">管理员面板</div>\n  <div v-else-if="isUser">用户面板</div>\n  <div v-else>访客</div>\n  \n  <!-- 显示/隐藏 -->\n  <div v-show="isVisible">可切换显示</div>\n  \n  <!-- 列表渲染 -->\n  <ul>\n    <li v-for="item in items" :key="item.id">\n      {{ item.name }}\n    </li>\n  </ul>\n</template>`
        },
        {
          title: "事件处理",
          code: `<template>\n  <!-- 基本事件 -->\n  <button @click="handleClick">点击</button>\n  <button @click="handleWithArg(item.id)">删除</button>\n  \n  <!-- 事件修饰符 -->\n  <form @submit.prevent="onSubmit">提交</form>\n  <a @click.stop="onClick">阻止冒泡</a>\n  <button @click.once="onceHandler">只触发一次</button>\n  \n  <!-- 按键修饰符 -->\n  <input @keyup.enter="onEnter" />\n  <input @keyup.esc="onEsc" />\n  \n  <!-- 内联事件 -->\n  <button @click="count++">+1</button>\n</template>\n\n<script setup>\nfunction handleClick(e) {\n  console.log('点击事件', e)\n}\n\nfunction handleWithArg(id) {\n  console.log('删除', id)\n}\n</script>`
        },
        {
          title: "动态 class 和 style",
          code: `<template>\n  <!-- 动态 class（对象语法） -->\n  <div :class="{ \n    active: isActive, \n    'text-danger': hasError \n  }"></div>\n  \n  <!-- 动态 class（数组语法） -->\n  <div :class="[baseClass, { active: isActive }]"></div>\n  \n  <!-- 动态 style（对象语法） -->\n  <div :style="{\n    color: activeColor,\n    fontSize: fontSize + 'px',\n    background: isDark ? '#333' : '#fff'\n  }"></div>\n  \n  <!-- 动态 style（数组语法） -->\n  <div :style="[baseStyles, overrideStyles]"></div>\n</template>\n\n<script setup>\nimport { ref } from 'vue'\nconst isActive = ref(true)\nconst baseClass = 'card'\nconst baseStyles = { display: 'flex' }\n</script>`
        }
      ],
      quiz: {
        question: "v-if 和 v-show 的主要区别是什么？",
        options: [
          "v-if 不支持 else，v-show 支持",
          "v-if 是真正的条件渲染（销毁/重建 DOM），v-show 只切换 CSS display",
          "v-if 只能用于 div，v-show 可用于任何元素",
          "v-show 性能更好，所有场景都应该用 v-show"
        ],
        correct: 1,
        explanation: "v-if 会真正销毁和重建 DOM 元素，切换开销大但初始渲染快；v-show 只切换 display CSS，初始渲染开销大但切换快。频繁切换用 v-show，条件很少改变用 v-if。"
      }
    },
    {
      id: 10,
      title: "插槽 Slots",
      category: "组件通信",
      difficulty: "进阶",
      estimatedMinutes: 25,
      description: "插槽允许父组件向子组件分发内容，支持默认插槽、具名插槽和作用域插槽三种模式。",
      examples: [
        {
          title: "默认插槽与具名插槽",
          code: `<!-- 子组件 Card.vue -->\n<template>\n  <div class="card">\n    <header>\n      <slot name="header">默认标题</slot>\n    </header>\n    <main>\n      <slot></slot>  <!-- 默认插槽 -->\n    </main>\n    <footer>\n      <slot name="footer">默认底部</slot>\n    </footer>\n  </div>\n</template>\n\n<!-- 父组件使用 -->\n<Card>\n  <template #header>\n    <h2>自定义标题</h2>\n  </template>\n  \n  <p>这是卡片内容</p>\n  \n  <template #footer>\n    <button>操作按钮</button>\n  </template>\n</Card>`
        },
        {
          title: "作用域插槽",
          code: `<!-- 子组件 DataTable.vue -->\n<script setup>\nconst props = defineProps({ items: Array })\n</script>\n\n<template>\n  <table>\n    <tr v-for="item in items" :key="item.id">\n      <!-- 将数据暴露给父组件 -->\n      <slot :row="item" :index="item.id">\n        <td>{{ item.name }}</td>\n      </slot>\n    </tr>\n  </table>\n</template>\n\n<!-- 父组件使用作用域插槽 -->\n<DataTable :items="users">\n  <template #default="{ row, index }">\n    <td>{{ index }}</td>\n    <td class="highlight">{{ row.name }}</td>\n    <td>{{ row.email }}</td>\n  </template>\n</DataTable>`
        },
        {
          title: "实战：可复用 Modal 组件",
          code: `<!-- Modal.vue -->\n<template>\n  <Teleport to="body">\n    <div v-if="isOpen" class="modal-overlay" @click.self="close">\n      <div class="modal">\n        <slot name="header">\n          <h2>提示</h2>\n        </slot>\n        <div class="modal-body">\n          <slot>内容</slot>\n        </div>\n        <div class="modal-footer">\n          <slot name="footer">\n            <button @click="close">关闭</button>\n          </slot>\n        </div>\n      </div>\n    </div>\n  </Teleport>\n</template>\n\n<!-- 使用 -->\n<Modal v-model:isOpen="showModal">\n  <template #header><h2>确认删除</h2></template>\n  <p>确定要删除这条记录吗？</p>\n  <template #footer>\n    <button @click="confirmDelete">删除</button>\n    <button @click="showModal = false">取消</button>\n  </template>\n</Modal>`
        }
      ],
      quiz: {
        question: "作用域插槽的主要用途是什么？",
        options: [
          "向子组件传递数据",
          "子组件向父组件暴露数据，让父组件决定渲染方式",
          "替代 props 传递数据",
          "在子组件中定义样式"
        ],
        correct: 1,
        explanation: "作用域插槽让子组件将数据传递给父组件的插槽内容，父组件可以使用这些数据自定义渲染方式。这在表格、列表等可复用组件中非常有用。"
      }
    },
    {
      id: 11,
      title: "Teleport — 传送门",
      category: "高级特性",
      difficulty: "进阶",
      estimatedMinutes: 15,
      description: "Teleport 将组件的 DOM 渲染到指定的 DOM 节点中，常用于模态框、通知等需要脱离组件层级的场景。",
      examples: [
        {
          title: "Teleport 基础",
          code: `<template>\n  <div class="local-component">\n    <h2>本地组件</h2>\n    \n    <!-- 将内容传送到 body -->\n    <Teleport to="body">\n      <div class="modal">\n        <p>这个 DOM 实际渲染在 <body> 下</p>\n      </div>\n    </Teleport>\n  </div>\n</template>\n\n<!-- 最终 DOM 结构： -->\n<!-- <div class="local-component">...</div> -->\n<!-- <body> -->\n<!--   <div class="modal">...</div> -->\n<!-- </body> -->`
        },
        {
          title: "模态框完整示例",
          code: `<!-- Modal.vue -->\n<script setup>\nimport { ref } from 'vue'\n\nconst props = defineProps({\n  isOpen: Boolean\n})\nconst emit = defineEmits(['close'])\n</script>\n\n<template>\n  <Teleport to="body">\n    <Transition name="modal">\n      <div v-if="isOpen" class="modal-overlay" @click.self="emit('close')">\n        <div class="modal-content">\n          <slot></slot>\n          <button @click="emit('close')">关闭</button>\n        </div>\n      </div>\n    </Transition>\n  </Teleport>\n</template>\n\n<style scoped>\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n</style>`
        },
        {
          title: "动态传送目标",
          code: `<script setup>\nimport { ref } from 'vue'\n\nconst target = ref('body')\n\n// 可以动态切换传送目标\nfunction changeTarget() {\n  target.value = target.value === 'body'\n    ? '#app-sidebar'\n    : 'body'\n}\n</script>\n\n<template>\n  <!-- :to 支持动态绑定 -->\n  <Teleport :to="target">\n    <div class="notification">通知内容</div>\n  </Teleport>\n  \n  <!-- 禁用 Teleport -->\n  <Teleport to="body" :disabled="!isEnabled">\n    <div>禁用时会渲染在原位置</div>\n  </Teleport>\n</template>`
        }
      ],
      quiz: {
        question: "Teleport 的 disabled 属性有什么作用？",
        options: [
          "禁用传送功能，内容渲染在原位置",
          "永久禁用该组件",
          "停止组件的响应式更新",
          "阻止事件冒泡"
        ],
        correct: 0,
        explanation: "当 disabled 为 true 时，Teleport 的内容不会传送到目标节点，而是渲染在原始位置。这在 SSR 或需要动态控制传送时很有用。"
      }
    },
    {
      id: 12,
      title: "Suspense — 异步组件处理",
      category: "高级特性",
      difficulty: "进阶",
      estimatedMinutes: 20,
      description: "Suspense 在等待异步组件加载时显示加载状态，提供更好的异步用户体验。",
      examples: [
        {
          title: "Suspense 基础",
          code: `<template>\n  <Suspense>\n    <!-- 默认内容（异步组件加载后显示） -->\n    <template #default>\n      <AsyncComponent />\n    </template>\n    \n    <!-- 加载中状态 -->\n    <template #fallback>\n      <div class="loading">\n        <p>加载中...</p>\n      </div>\n    </template>\n  </Suspense>\n</template>\n\n<script setup>\nimport { defineAsyncComponent } from 'vue'\n\nconst AsyncComponent = defineAsyncComponent({\n  loader: () => import('./HeavyComponent.vue'),\n  delay: 200,        // 延迟显示 loading\n  timeout: 3000,     // 超时时间\n  errorComponent: ErrorView,\n  loadingComponent: Spinner\n})\n</script>`
        },
        {
          title: "嵌套异步组件",
          code: `<template>\n  <Suspense>\n    <template #default>\n      <Dashboard>\n        <Suspense>\n          <template #default>\n            <UserList />\n          </template>\n          <template #fallback>\n            <p>用户列表加载中...</p>\n          </template>\n        </Suspense>\n        \n        <Suspense>\n          <template #default>\n            <StatsChart />\n          </template>\n          <template #fallback>\n            <p>图表加载中...</p>\n          </template>\n        </Suspense>\n      </Dashboard>\n    </template>\n    <template #fallback>\n      <p>仪表盘加载中...</p>\n    </template>\n  </Suspense>\n</template>`
        },
        {
          title: "async setup() 与 Suspense",
          code: `<!-- AsyncData.vue — async setup -->\n<script setup>\nconst res = await fetch('/api/data')\nconst data = await res.json()\n// async setup 自动被 Suspense 捕获\n</script>\n\n<template>\n  <div>\n    <p>数据条数：{{ data.length }}</p>\n  </div>\n</template>\n\n<!-- 使用 -->\n<Suspense>\n  <template #default>\n    <AsyncData />\n  </template>\n  <template #fallback>\n    <p>获取数据中...</p>\n  </template>\n</Suspense>`
        }
      ],
      quiz: {
        question: "Suspense 有几个具名插槽？",
        options: [
          "1 个：default",
          "2 个：default（默认内容）和 fallback（加载状态）",
          "3 个：default、loading、error",
          "不需要插槽，自动处理"
        ],
        correct: 1,
        explanation: "Suspense 有两个具名插槽：#default 显示异步内容，#fallback 显示加载中的状态。当 async setup 或异步组件完成时自动切换。"
      }
    },
    {
      id: 13,
      title: "Transition — 过渡与动画",
      category: "高级特性",
      difficulty: "进阶",
      estimatedMinutes: 30,
      description: "Vue 内置 <Transition> 和 <TransitionGroup> 组件，支持 CSS transition/animation 和 JavaScript 钩子实现流畅动画。",
      examples: [
        {
          title: "基础过渡",
          code: `<template>\n  <!-- 单个元素过渡 -->\n  <Transition name="fade">\n    <p v-if="show">淡入淡出效果</p>\n  </Transition>\n  \n  <Transition name="slide">\n    <div v-if="show">滑入滑出效果</div>\n  </Transition>\n  \n  <button @click="show = !show">切换</button>\n</template>\n\n<style>\n/* fade 过渡 */\n.fade-enter-active,\n.fade-leave-active {\n  transition: opacity 0.3s ease;\n}\n.fade-enter-from,\n.fade-leave-to {\n  opacity: 0;\n}\n\n/* slide 过渡 */\n.slide-enter-active,\n.slide-leave-active {\n  transition: transform 0.3s ease;\n}\n.slide-enter-from {\n  transform: translateX(-100%);\n}\n.slide-leave-to {\n  transform: translateX(100%);\n}\n</style>`
        },
        {
          title: "列表过渡 TransitionGroup",
          code: `<template>\n  <TransitionGroup name="list" tag="ul">\n    <li\n      v-for="(item, index) in items"\n      :key="item.id"\n      class="list-item"\n    >\n      {{ item.name }}\n      <button @click="remove(index)">删除</button>\n    </li>\n  </TransitionGroup>\n</template>\n\n<style>\n.list-enter-active,\n.list-leave-active {\n  transition: all 0.3s ease;\n}\n.list-enter-from {\n  opacity: 0;\n  transform: translateX(-30px);\n}\n.list-leave-to {\n  opacity: 0;\n  transform: translateX(30px);\n}\n.list-move {\n  transition: transform 0.3s ease;\n}\n</style>`
        },
        {
          title: "JavaScript 钩子动画",
          code: `<template>\n  <Transition\n    @before-enter="onBeforeEnter"\n    @enter="onEnter"\n    @after-enter="onAfterEnter"\n    @leave="onLeave"\n  >\n    <div v-if="show">JS 动画元素</div>\n  </Transition>\n</template>\n\n<script setup>\nimport { ref } from 'vue'\nimport gsap from 'gsap'\n\nconst show = ref(false)\n\nfunction onEnter(el, done) {\n  gsap.fromTo(el,\n    { opacity: 0, scale: 0.8 },\n    { opacity: 1, scale: 1, onComplete: done }\n  )\n}\n\nfunction onLeave(el, done) {\n  gsap.to(el,\n    { opacity: 0, scale: 0.8, onComplete: done }\n  )\n}\n</script>`
        }
      ],
      quiz: {
        question: "TransitionGroup 和 Transition 的主要区别是什么？",
        options: [
          "没有区别，只是名字不同",
          "TransitionGroup 用于列表/多个元素的过渡，Transition 用于单个元素",
          "TransitionGroup 只支持 CSS 动画，Transition 支持 JS 钩子",
          "TransitionGroup 不需要 name 属性"
        ],
        correct: 1,
        explanation: "Transition 用于单个元素或组件的进入/离开过渡，而 TransitionGroup 用于列表或 v-for 生成的多个元素的过渡，支持元素移动动画。"
      }
    },
    {
      id: 14,
      title: "Vue Router 路由系统",
      category: "路由与导航",
      difficulty: "进阶",
      estimatedMinutes: 35,
      description: "Vue Router 是 Vue 官方路由管理器，支持动态路由、嵌套路由、路由守卫和懒加载等核心功能。",
      examples: [
        {
          title: "路由配置基础",
          code: `// router/index.js\nimport { createRouter, createWebHistory } from 'vue-router'\nimport HomeView from '../views/HomeView.vue'\n\nconst routes = [\n  {\n    path: '/',\n    name: 'home',\n    component: HomeView\n  },\n  {\n    path: '/about',\n    name: 'about',\n    // 路由懒加载\n    component: () => import('../views/AboutView.vue')\n  },\n  {\n    path: '/user/:id',\n    name: 'user',\n    component: () => import('../views/UserView.vue'),\n    props: true  // 将 params 作为 props 传递\n  },\n  {\n    path: '/:pathMatch(.*)*',\n    component: () => import('../views/NotFound.vue')\n  }\n]\n\nconst router = createRouter({\n  history: createWebHistory(),\n  routes\n})\n\nexport default router`
        },
        {
          title: "路由导航与动态匹配",
          code: `<!-- 导航 -->\n<template>\n  <nav>\n    <router-link to="/">首页</router-link>\n    <router-link :to="{ name: 'about' }">关于</router-link>\n    <router-link :to="{ name: 'user', params: { id: 123 }}">\n      用户详情\n    </router-link>\n  </nav>\n  \n  <!-- 路由出口 -->\n  <router-view />\n</template>\n\n<!-- 获取路由参数 -->\n<script setup>\nimport { useRoute, useRouter } from 'vue-router'\n\nconst route = useRoute()\nconst router = useRouter()\n\n// 获取参数\nconsole.log(route.params.id)\nconsole.log(route.query.search)\n\n// 编程式导航\nrouter.push('/about')\nrouter.push({ name: 'user', params: { id: 456 } })\nrouter.replace('/home')  // 不留下历史记录\nrouter.back()            // 后退\n</script>`
        },
        {
          title: "导航守卫",
          code: `// 全局前置守卫\nrouter.beforeEach((to, from, next) => {\n  const isAuthenticated = localStorage.getItem('token')\n  \n  if (to.meta.requiresAuth && !isAuthenticated) {\n    next({ name: 'login' })\n  } else {\n    next()\n  }\n})\n\n// 路由独享守卫\nconst routes = [\n  {\n    path: '/admin',\n    component: AdminView,\n    beforeEnter: (to, from) => {\n      if (!isAdmin()) return '/login'\n    },\n    meta: { requiresAuth: true }\n  }\n]\n\n// 组件内守卫（组合式 API）\nimport { onBeforeRouteLeave } from 'vue-router'\n\nonBeforeRouteLeave((to, from) => {\n  if (hasUnsavedChanges.value) {\n    return confirm('确定要离开吗？未保存的修改将丢失。')\n  }\n})`
        }
      ],
      quiz: {
        question: "Vue Router 中实现路由懒加载的最佳方式是什么？",
        options: [
          "在 import 时使用 require()",
          "使用动态 import：component: () => import('./View.vue')",
          "所有路由都提前加载好",
          "使用 v-if 条件加载组件"
        ],
        correct: 1,
        explanation: "Vue Router 推荐使用动态 import() 实现路由懒加载，只有在访问该路由时才加载对应的组件代码，减少首屏加载体积。"
      }
    },
    {
      id: 15,
      title: "Pinia 状态管理",
      category: "状态管理",
      difficulty: "进阶",
      estimatedMinutes: 30,
      description: "Pinia 是 Vue 官方推荐的状态管理库，提供类型安全、模块化、DevTools 支持，比 Vuex 更简单直观。",
      examples: [
        {
          title: "定义 Store",
          code: `// stores/counter.js\nimport { defineStore } from 'pinia'\nimport { ref, computed } from 'vue'\n\nexport const useCounterStore = defineStore('counter', () => {\n  // state\n  const count = ref(0)\n  const name = ref('计数器')\n  \n  // getters\n  const doubled = computed(() => count.value * 2)\n  \n  // actions\n  function increment() {\n    count.value++\n  }\n  \n  function decrement() {\n    count.value--\n  }\n  \n  function reset() {\n    count.value = 0\n  }\n  \n  return { count, name, doubled, increment, decrement, reset }\n})`
        },
        {
          title: "使用 Store",
          code: `<script setup>\nimport { useCounterStore } from '@/stores/counter'\n\nconst counter = useCounterStore()\n\n// 直接访问 state、getters、actions\nconsole.log(counter.count)    // state\nconsole.log(counter.doubled)  // getter\n\nfunction handleIncrement() {\n  counter.increment()  // action\n}\n\n// 批量修改\nfunction handleBulkUpdate() {\n  counter.$patch({\n    count: counter.count + 5,\n    name: '批量更新'\n  })\n}\n\n// 重置\nfunction handleReset() {\n  counter.$reset()\n}\n</script>\n\n<template>\n  <p>{{ counter.name }}: {{ counter.count }}</p>\n  <p>翻倍值：{{ counter.doubled }}</p>\n  <button @click="counter.increment()">+1</button>\n</template>`
        },
        {
          title: "持久化存储",
          code: `// stores/user.js\nimport { defineStore } from 'pinia'\nimport { ref } from 'vue'\n\nexport const useUserStore = defineStore('user', () => {\n  const user = ref(null)\n  const token = ref('')\n  \n  function login(credentials) {\n    // 登录逻辑\n    token.value = 'xxx'\n    user.value = { name: 'Vue', role: 'admin' }\n    // 持久化\n    localStorage.setItem('token', token.value)\n  }\n  \n  function logout() {\n    user.value = null\n    token.value = ''\n    localStorage.removeItem('token')\n  }\n  \n  return { user, token, login, logout }\n}, {\n  // 从 localStorage 恢复\n  persist: true\n})`
        }
      ],
      quiz: {
        question: "Pinia 和 Vuex 的主要区别是什么？",
        options: [
          "Pinia 需要 mutations，Vuex 不需要",
          "Pinia 没有 mutations，直接修改 state，API 更简单",
          "Pinia 不支持 TypeScript",
          "Pinia 不能做模块化拆分"
        ],
        correct: 1,
        explanation: "Pinia 去掉了 Vuex 中的 mutations 概念，直接在 actions 中修改 state，API 更简洁。同时提供更好的 TypeScript 支持和模块化设计。"
      }
    },
    {
      id: 16,
      title: "自定义指令",
      category: "高级特性",
      difficulty: "进阶",
      estimatedMinutes: 20,
      description: "自定义指令允许你直接操作 DOM，实现聚焦、滚动、拖拽等底层交互效果。",
      examples: [
        {
          title: "全局自定义指令",
          code: `// main.js\nimport { createApp } from 'vue'\nimport App from './App.vue'\n\nconst app = createApp(App)\n\n// v-focus — 自动聚焦\napp.directive('focus', {\n  mounted: (el) => el.focus()\n})\n\n// v-color — 设置文字颜色\napp.directive('color', {\n  mounted: (el, binding) => {\n    el.style.color = binding.value\n  },\n  updated: (el, binding) => {\n    el.style.color = binding.value\n  }\n})\n\n// 使用：\n// <input v-focus />\n// <p v-color="'red'">红色文字</p>`
        },
        {
          title: "局部自定义指令",
          code: `<script setup>\nimport { ref } from 'vue'\n\nconst vScrollBottom = {\n  mounted: (el) => {\n    el.scrollTop = el.scrollHeight\n  },\n  updated: (el) => {\n    el.scrollTop = el.scrollHeight\n  }\n}\n\nconst messages = ref([])\n\nfunction addMessage(text) {\n  messages.value.push(text)\n  // 自动滚动到底部\n}\n</script>\n\n<template>\n  <div v-scroll-bottom class="chat-box">\n    <div v-for="msg in messages" :key="msg">{{ msg }}</div>\n  </div>\n  <input @keyup.enter="addMessage($event.target.value)" />\n</template>`
        },
        {
          title: "v-click-outside 实战",
          code: `// directives/clickOutside.js\nexport default {\n  beforeMount: (el, binding) => {\n    el.clickOutsideEvent = (event) => {\n      // 检查点击是否在元素外部\n      if (!(el === event.target || el.contains(event.target))) {\n        binding.value(event)\n      }\n    }\n    document.addEventListener('click', el.clickOutsideEvent)\n  },\n  unmounted: (el) => {\n    document.removeEventListener('click', el.clickOutsideEvent)\n  }\n}\n\n// 使用：\n// <template>\n//   <div class="dropdown" v-click-outside="closeDropdown">\n//     <button @click="open = !open">菜单</button>\n//     <ul v-show="open">\n//       <li>选项 1</li>\n//       <li>选项 2</li>\n//     </ul>\n//   </div>\n// </template>`
        }
      ],
      quiz: {
        question: "自定义指令的 unmounted 钩子在什么时候执行？",
        options: [
          "指令第一次绑定到元素时",
          "元素所在组件的 DOM 被卸载时",
          "绑定值发生变化时",
          "组件更新完成时"
        ],
        correct: 1,
        explanation: "unmounted 钩子在绑定元素所在组件的 DOM 被卸载时调用，适合做清理工作（移除事件监听器、定时器等）。"
      }
    },
    {
      id: 17,
      title: "组合式函数 Composables",
      category: "组合式 API",
      difficulty: "进阶",
      estimatedMinutes: 30,
      description: "Composables 是 Vue 3 中逻辑复用的核心模式，通过函数封装和组合响应式逻辑，替代 Vue 2 的 Mixins。",
      examples: [
        {
          title: "编写 Composable",
          code: `// composables/useMouse.js\nimport { ref, onMounted, onUnmounted } from 'vue'\n\nexport function useMouse() {\n  const x = ref(0)\n  const y = ref(0)\n  \n  function update(event) {\n    x.value = event.pageX\n    y.value = event.pageY\n  }\n  \n  onMounted(() => {\n    window.addEventListener('mousemove', update)\n  })\n  \n  onUnmounted(() => {\n    window.removeEventListener('mousemove', update)\n  })\n  \n  return { x, y }\n}`
        },
        {
          title: "使用 Composable",
          code: `<script setup>\nimport { useMouse } from './composables/useMouse'\nimport { useFetch } from './composables/useFetch'\nimport { useDark } from './composables/useDark'\n\n// 组合多个 composables\nconst { x, y } = useMouse()\nconst { data, error } = useFetch('/api/posts')\nconst { isDark, toggle } = useDark()\n</script>\n\n<template>\n  <p>鼠标位置：{{ x }}, {{ y }}</p>\n  <p v-if="error">加载失败</p>\n  <div v-else>\n    <div v-for="post in data" :key="post.id">\n      {{ post.title }}\n    </div>\n  </div>\n</template>`
        },
        {
          title: "useFetch — 网络请求封装",
          code: `// composables/useFetch.js\nimport { ref, watch } from 'vue'\n\nexport function useFetch(url) {\n  const data = ref(null)\n  const error = ref(null)\n  const loading = ref(true)\n  \n  const fetchData = async () => {\n    loading.value = true\n    error.value = null\n    try {\n      const res = await fetch(url.value)\n      data.value = await res.json()\n    } catch (e) {\n      error.value = e.message\n    } finally {\n      loading.value = false\n    }\n  }\n  \n  // url 变化时自动重新请求\n  watch(url, fetchData, { immediate: true })\n  \n  return { data, error, loading, refetch: fetchData }\n}\n\n// 使用：\n// const url = ref('/api/posts')\n// const { data, loading } = useFetch(url)`
        }
      ],
      quiz: {
        question: "Composables 和 Mixins 相比，最大的优势是什么？",
        options: [
          "Composables 可以修改 props",
          "Composables 的响应式状态隔离，不会相互污染，且数据来源清晰",
          "Composables 性能更好",
          "Composables 不需要 import"
        ],
        correct: 1,
        explanation: "Mixins 会导致命名冲突和数据来源不清晰的问题。Composables 通过函数返回值明确暴露响应式状态，每个调用都有独立的状态副本，不会相互影响。"
      }
    },
    {
      id: 18,
      title: "TypeScript 集成",
      category: "TypeScript",
      difficulty: "进阶",
      estimatedMinutes: 30,
      description: "Vue 3 原生支持 TypeScript，<script setup lang=\"ts\"> 提供了出色的类型推导和组件类型安全。",
      examples: [
        {
          title: "TypeScript Props 定义",
          code: `<script setup lang="ts">\ninterface Props {\n  title: string\n  count?: number\n  tags: string[]\n  user: {\n    id: number\n    name: string\n    email: string\n  }\n  onChange?: (value: string) => void\n}\n\nconst props = withDefaults(defineProps<Props>(), {\n  count: 0,\n  onChange: () => {}\n})\n\n// Props 类型自动推导\nconsole.log(props.title)    // string\nconsole.log(props.count)    // number\n</script>`
        },
        {
          title: "TypeScript Emits 定义",
          code: `<script setup lang="ts">\nconst emit = defineEmits<{\n  update: [value: string]\n  delete: [id: number]\n  change: [payload: { field: string; value: unknown }]\n}>()\n\n// 调用时有完整类型提示\nemit('update', 'new value')\nemit('delete', 123)\nemit('change', { field: 'name', value: 'Vue 3' })\n\n// ❌ 类型错误会被捕获：\n// emit('invalid')           // 事件名不存在\n// emit('delete', 'wrong')   // 参数类型错误\n</script>`
        },
        {
          title: "ref 类型推导",
          code: `<script setup lang="ts">\nimport { ref, reactive, computed } from 'vue'\n\n// ✅ 自动类型推导\nconst count = ref(0)           // Ref<number>\nconst name = ref('Vue')        // Ref<string>\n\n// ✅ 泛型 ref（联合类型或初始 null）\nconst status = ref<'pending' | 'success' | 'error'>('pending')\nconst user = ref<User | null>(null)\n\n// ✅ reactive 类型\ninterface User {\n  id: number\n  name: string\n  email: string\n}\n\nconst state = reactive({\n  users: [] as User[],\n  loading: false,\n  error: null as string | null\n})\n\n// ✅ computed 类型推导\nconst totalUsers = computed(() => state.users.length)\n// 类型：ComputedRef<number>\n</script>`
        }
      ],
      quiz: {
        question: "withDefaults 的作用是什么？",
        options: [
          "定义组件的 props 类型",
          "为 TypeScript 类型的 props 提供默认值",
          "校验 props 的类型是否正确",
          "将 props 转换为响应式对象"
        ],
        correct: 1,
        explanation: "withDefaults 配合 defineProps<T> 使用，可以为接口中定义的可选 props 提供默认值，避免在运行时检查默认值。"
      }
    }
  ]
}
