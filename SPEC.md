# MMTI 猫猫性格测试 — 设计规格书

## 1. Concept & Vision

MMTI（Meow Meow Type Indicator）是一款以"你像什么样的猫猫"为主题的高级感性格测试网站。整体调性：温暖而克制，趣味而精致。像一本高端生活方式杂志和一只慵懒猫咪的结合体——专业的外壳下藏着治愈的内核。用户从进入页面的第一秒就能感受到：这不是一个廉价的趣味测试，而是一个值得分享的体验。

---

## 2. Design Language

### 2.1 Aesthetic Direction
**参考：** Vercel meets 猫咖 — 极简主义的留白、精致的细节，配合温暖的猫咪元素。大量留白让内容"呼吸"，但猫咪动效让空间"活着"。

### 2.2 Color Palette
| 角色 | 色值 | 用途 |
|------|------|------|
| Background | `#FAF8F5` | 主背景（温暖米白） |
| Surface | `#FFFFFF` | 卡片/容器 |
| Primary Text | `#1A1614` | 标题/正文 |
| Secondary Text | `#6B5E57` | 辅助文字 |
| Accent Gold | `#C9A96E` | 高亮/进度条/CTA |
| Accent Coral | `#E8A87C` | 猫咪元素/hover |
| Border | `#EDE8E3` | 分割线/边框 |
| Shadow | `rgba(26,22,20,0.06)` | 卡片阴影 |

### 2.3 Typography
- **Display / Headlines:** `Outfit` (Google Fonts) — weight 700, tracking `-0.03em`
- **Body:** `Outfit` — weight 400/500, line-height 1.7
- **Accent / Labels:** `Outfit` — weight 600, uppercase, tracking `0.08em`
- **禁止：** Inter, 思源黑体, Emoji

### 2.4 Spatial System
- 基础单位：`8px`
- 容器最大宽度：`720px`（测试内容居中）
- 卡片圆角：`24px`
- 按钮圆角：`16px`
- Section 间距：`80px`（移动端 `48px`）

### 2.5 Motion Philosophy
- **入场动画：** 淡入 + 轻微上移，`400ms cubic-bezier(0.16, 1, 0.3, 1)`
- **选项点击：** scale 0.97 → 1.02 → 1.0，弹簧物理
- **页面切换：** 滑入过渡，300ms
- **背景猫咪：** 缓慢漂浮动画（6-8s循环），悬浮在角落
- **进度条：** 宽度过渡 500ms ease-out
- **所有动画：** 禁用 `linear` 缓动，使用 spring 或 cubic-bezier

### 2.6 Visual Assets
- **图标库：** Phosphor Icons（stroke-width: 1.5）
- **猫咪图片：** 使用高质量猫咪照片（Unsplash 真实猫咪图），每个猫咪类型配一张
- **装饰元素：** 猫咪剪影 SVG（作为背景装饰和加载动画）
- **禁止：** emoji 表情，所有图标用 SVG/Icon 组件

---

## 3. Layout & Structure

### 3.1 Page Flow
```
[Intro Page] → [Question 1~N] → [Result Page]
```

### 3.2 Intro Page（首页）
- **Hero Section：** 大标题 "MMTI" 配合副标题 "探索你的猫咪灵魂"，居中偏左对齐
- **猫咪剪影动画：** 右下角一只漂浮的猫咪 SVG
- **开始按钮：** "开始测试" CTA，圆角胶囊按钮，hover 时轻微放大
- **介绍文字：** 2-3行关于测试的简介
- **底部：** 简约的"约15-20道题 · 3分钟完成"

### 3.3 Question Page（题目页）
- **顶部：** 进度条（当前题号 / 总题数）+ 进度条动画
- **题目区域：** 居中卡片，显示题目编号和内容
- **选项区域：** 2-4个选项按钮，垂直排列，点击后有选中态
- **底部：** 上一题/下一题导航（第一题无上一题，最后一题显示"查看结果"）
- **角落猫咪：** 右侧/左侧角落有1-2只小猫咪漂浮

### 3.4 Result Page（结果页）
- **猫咪图片：** 大图展示该类型的猫咪（顶部）
- **类型名称：** "你是 — [猫名]（[类型代码]）"
- **类型描述：** 2-3段详细性格解析
- **特质标签：** 3-5个关键词标签（如：高冷/黏人/好奇/慵懒）
- **分享按钮：** "分享结果" + "重新测试"
- **底部装饰猫咪：** 再次出现的漂浮猫咪

---

## 4. Features & Interactions

### 4.1 MMTI 16种猫咪类型
基于两个维度交叉：**活跃度**（高/低）× **社交性**（高/低），形成4种基础气质，再细分为16种具体猫咪：

| 代码 | 猫咪名 | 关键词 |
|------|--------|--------|
| M1 | 狮子猫 | 高冷, 独立, 优雅 |
| M2 | 布偶猫 | 温柔, 黏人, 忠诚 |
| M3 | 狸花猫 | 活泼, 好奇, 机智 |
| M4 | 英短 | 慵懒, 淡定, 治愈 |
| M5 | 美短 | 调皮, 精力充沛, 勇敢 |
| M6 | 缅因猫 | 霸气, 领袖, 稳重 |
| M7 | 暹罗猫 | 话痨, 聪明, 依赖 |
| M8 | 波斯猫 | 优雅, 安静, 高贵 |
| M9 | 三花猫 | 多变, 神秘, 直觉 |
| M10 | 橘猫 | 吃货, 友善, 随和 |
| M11 | 奶牛猫 | 猫中哈士奇, 搞笑, 神经质 |
| M12 | 无毛猫 | 独特, 深情, 敏感 |
| M13 | 阿比西尼亚猫 | 优雅, 活泼, 亲人 |
| M14 | 孟加拉猫 | 野性, 敏捷, 自信 |
| M15 | 折耳猫 | 安静, 陪伴, 温柔 |
| M16 | 俄罗斯蓝猫 | 神秘, 优雅, 慢热 |

### 4.2 题目设计（18道题）
每道题有3-4个选项，每个选项对应不同的性格维度得分。

**题目维度映射：**
- Q1-Q3：活跃度（高活跃/低活跃）
- Q4-Q6：社交性（社交型/独处型）
- Q7-Q9：好奇心（好奇/保守）
- Q10-Q12：情感表达（外放/内敛）
- Q13-Q15：领地意识（强/弱）
- Q16-Q18：适应能力（强/弱）

### 4.3 交互细节
- **选项点击：** 即时高亮，显示选中态（边框 + 背景色变化），禁用多选
- **答案自动进入下一题：** 选中选项后 600ms 自动滑动到下一题
- **进度条：** 实时反映进度，带有流畅的宽度动画
- **返回功能：** 可以返回上一题修改答案
- **结果计算：** 所有答案加权求和，映射到16种类型

### 4.4 状态处理
- **加载态：** 猫咪剪影 + "正在分析你的猫咪灵魂..."
- **空状态：** 不适用（所有题目必须作答）
- **错误态：** "出了点小意外，猫咪跑掉了" + 重试按钮

---

## 5. Component Inventory

### 5.1 `<ProgressBar />`
- 圆角条形进度条，背景 `#EDE8E3`，填充色 `#C9A96E`
- 过渡动画：`width 500ms ease-out`
- 显示文字：`"3 / 18"`

### 5.2 `<QuestionCard />`
- 白色圆角卡片，`shadow-[0_4px_24px_rgba(26,22,20,0.06)]`
- 题目编号：小字，金色，`"问题 5"`
- 题目内容：大字，深色，2行内
- 入场动画：淡入 + 上移

### 5.3 `<OptionButton />`
- 状态：Default（白底灰边）/ Hover（浅珊瑚边）/ Selected（金色边框 + 浅金背景）/ Disabled
- 点击效果：`scale(0.97)` → `scale(1.02)` → `scale(1)`
- 过渡：`200ms cubic-bezier(0.16, 1, 0.3, 1)`

### 5.4 `<FloatingCat />`
- 猫咪 SVG 或 PNG，position fixed
- 漂浮动画：`translateY(0) → translateY(-20px) → translateY(0)`，6s 循环
- 尺寸：120px ~ 200px，半透明（opacity 0.6）
- 位置：右下角或左侧边缘

### 5.5 `<ResultCard />`
- 猫咪图片：圆角 24px，max-height 300px
- 类型名称：Outfit 700，48px
- 描述文字：Outfit 400，18px，max-w 65ch
- 特质标签：胶囊形状，金色描边

### 5.6 `<CTAButton />`
- 背景色 `#C9A96E`，文字白色
- Hover：`scale(1.02)`，`box-shadow` 扩大
- Active：`scale(0.97)`
- 圆角 16px，padding `16px 40px`

---

## 6. Technical Approach

### 6.1 Framework
- **Next.js 14**（App Router）
- **React 18**（TypeScript）
- **CSS Modules**（不用 Tailwind，严格按照 taste-skill 的规范）
- **Framer Motion**（页面过渡 + 微交互动画）

### 6.2 项目结构
```
/mnt/d/软件开发/猫猫TI测试/
├── app/
│   ├── layout.tsx          # 全局布局 + 字体加载
│   ├── page.tsx            # 首页（Intro）
│   ├── test/page.tsx       # 测试题目页
│   ├── result/page.tsx     # 结果页
│   └── globals.css         # 全局样式 + CSS变量
├── components/
│   ├── ProgressBar.tsx
│   ├── QuestionCard.tsx
│   ├── OptionButton.tsx
│   ├── FloatingCat.tsx
│   ├── ResultCard.tsx
│   └── CTAButton.tsx
├── data/
│   └── questions.ts        # 18道题目数据
│   └── catTypes.ts         # 16种猫咪类型数据
├── public/
│   └── cats/               # 猫咪图片（从 Unsplash 获取）
├── package.json
└── next.config.js
```

### 6.3 猫咪图片策略
使用 Unsplash 真实猫咪图片，通过 URL 参数确保每次获取固定图片：
- 每个猫咪类型对应一张固定 Unsplash 图片
- 使用 `picsum.photos` 作为备用

### 6.4 数据流
- 测试答案存储在 React Context 或 zustand
- 最后一题提交后计算结果
- 结果通过路由参数传递（`/result?type=M5`）

### 6.5 部署
- 导出为静态站点（`next export`）或 Vercel 部署
- 最终交付：一个可访问的 URL

---

## 7. Animations Detail

### 7.1 页面过渡
```typescript
// 使用 Framer Motion
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}
```

### 7.2 猫咪漂浮
```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}
.caticon { animation: float 6s ease-in-out infinite; }
```

### 7.3 选项点击涟漪
使用 CSS `:active` + transform 实现，无需 JS

### 7.4 进度条
CSS transition `width 500ms ease-out`，由 React state 控制

---

*规格文档版本：1.0 | 日期：2026-04-21*
