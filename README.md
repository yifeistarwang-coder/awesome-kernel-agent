# Kernel Agent 学习手册

> 让 Agent 写对、写快 GPU Kernel —— 一份从零读到动手的中文学习站。

把散落在博客、GitHub README 和论文里的 Kernel Agent 资料，整理成一条**从概念到实践**的路径：
先理解问题 → 补 Agent 与 Kernel 两个基础 → 拆解两个真实 harness（KDA、Humanize）→ 沉淀 skills → 自建最小 harness。

在线阅读：**<https://yifeistarwang-coder.github.io/awesome-kernel-agent/>**

## 这个站讲什么

用两个真实项目做主线案例，讲清"为什么这样设计"，而不只是"用了什么工具"：

| 章节 | 核心问题 | 练习 |
| ---- | -------- | ---- |
| 0 导读 | 这个领域在解决什么 | 环境自检 |
| 1 Agent 与 harness 基础 | Agent 为什么需要 harness | 为一个任务写验收标准 |
| 2 GPU kernel 与性能基础 | 怎么判断一个 kernel 好不好 | 读一份 ncu 报告找瓶颈 |
| 3 KDA | 一套完整流程长什么样 | 复现最小 KDA 流程 |
| 4 Humanize 1/2 | 怎么保证"真做完了" | 设计 reviewer 检查清单 |
| 5 Skills 与经验沉淀 | 怎么让 Agent 冷启动更快 | 写一个自己的 skill |
| 6 自建 harness | 怎么把这些零件装成一个系统 | 设计自己的 v0 harness |

## 核心案例

- **KDA（Kernel Design Agents）** —— 以编码 Agent 为中心的 CUDA kernel 研究工作流：Coder 负责实现，Verifier 负责复核证据；用 `KernelWiki` 提供领域知识，用 `ncu-report` 提供性能证据。
- **Humanize（Judgement Engineering）** —— 写 / 判分离：Claude 写代码，Codex 用全新上下文 review，只有 reviewer 可以宣布完成；配 RLCR 轮次协议与 72 道机械检查。

两个案例共同指向一个结论：**Agent 越强，Evaluator 越重要。**

## 内容一览

- 7 篇正文（导读 + 6 章），每章统一结构：导语 → 学习目标 → 概念 → 架构 → 真实案例 → 常见误区 → 本章自检（含练习）→ 延伸阅读
- 术语表：82 条术语，附英文、解释与相关章节
- 练习册：10 道练习，分 L1 概念 / L2 分析 / L3 动手 / L4 综合四级，含验收标准、折叠提示与**无 GPU 替代方案**
- 4 张手绘 SVG 架构图（Agent 循环、KDA 流程、Humanize 写判分离、Flame Chase），深浅色自适应
- 资料库：官方项目、论文、解读与工具链，每条附一句话说明与核对日期
- 更新日志：记录版本演进

## 技术栈

- [Astro](https://astro.build) 7 + [Starlight](https://starlight.astro.build)
- Pagefind 全站搜索（深色优先主题）
- 纯手写 SVG 图示，无运行时图表依赖
- 部署到 GitHub Pages

## 本地开发

```bash
npm install
npm run dev      # 本地预览
npm run build    # 构建到 dist/
npm run preview  # 预览构建产物
```

## 目录结构

```
src/
├── components/          # Exercise、Figure、landing 组件、SVG 架构图
├── content/docs/        # 正文与附录（guide/ 为章节）
├── styles/custom.css    # 主题覆盖与视觉系统
└── content.config.ts
```

## 免责声明

本项目是**个人整理的学习笔记**，非 NVIDIA、MIT HAN Lab 或 Humanize 团队的官方教材。
所有事实、数字与链接均标注来源与核对日期（2026-10-29），但上游项目迭代很快，**具体细节请以官方仓库与论文为准**。

## 许可

内容与代码以 MIT 许可证发布；引用到的第三方项目、论文与资料版权归各自作者所有。
