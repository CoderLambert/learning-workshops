# 现代CSS学习工坊

系统学习现代CSS核心特性与最佳实践的交互式学习站点。

## 📚 知识点覆盖

### CSS3核心特性
- CSS选择器进阶
- 伪类与伪元素
- 盒模型与box-sizing

### 布局系统
- Flexbox弹性布局
- Grid网格布局
- Subgrid子网格

### CSS动画
- CSS过渡动画（Transitions）
- CSS关键帧动画（Animations）

### 响应式设计
- 响应式设计与媒体查询
- 流体排版与clamp()

### CSS变量与函数
- CSS自定义属性（Variables）
- CSS函数（calc/min/max/clamp）

### CSS新特性
- 容器查询（Container Queries）
- 层叠层（Cascade Layers）
- :has() 选择器
- CSS滚动吸附（Scroll Snap）
- 现代CSS色彩系统
- 滚动驱动动画（Scroll-Driven Animations）

## 🎯 功能特性

- **渐进式学习**：从基础到进阶的18个核心知识点
- **代码示例**：每个知识点包含3个实用代码示例
- **测验题**：每个知识点附带测验题，巩固学习成果
- **闪卡复习**：支持翻转卡片、键盘快捷键的闪卡模式
- **学习进度**：本地存储学习进度，跟踪掌握情况
- **知识点索引**：支持搜索和分类筛选
- **PWA支持**：可离线访问，支持添加到主屏幕
- **SEO优化**：完整的Open Graph和SEO元数据

## 🚀 部署

本项目为纯静态站点，可部署到任何静态托管平台：

### Vercel（推荐）
```bash
vercel deploy
```

### GitHub Pages
```bash
git push origin main
```

## 📁 项目结构

```
modern-css-workshop/
├── index.html          # 首页
├── learn.html          # 渐进式学习页
├── flashcard.html      # 闪卡复习页
├── roots.html          # 知识点索引页
├── root-detail.html    # 知识点详情页
├── progress.html       # 学习进度页
├── css/
│   └── minimal.css     # 全局样式
├── js/
│   ├── wordData.js     # 知识点数据
│   ├── siteConfig.js   # 站点配置
│   └── storage.js      # 本地存储管理
├── manifest.json       # PWA配置
├── sw.js               # Service Worker
├── vercel.json         # Verc部署配置
├── robots.txt          # SEO爬虫配置
└── sitemap.xml         # 站点地图
```

---

用纯CSS实现一切可能 ✨
