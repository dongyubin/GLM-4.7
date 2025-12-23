# GLM-4.7: 智谱 AI 顶尖全能大模型落地页 (SEO Friendly)

这是一个专为 **GLM-4.7** 模型量身定制的、高性能、SEO 友好的落地页面。该项目旨在展示智谱 AI（Zhipu AI）最新一代稠密大模型 GLM-4.7 的核心优势，并提供实时 API 调用体验、技术指标对比及开发者生态计划入口。

## 🚀 核心特性

- **SEO 深度优化**：
  - 完善的 Meta 标签（Title, Description, Keywords）。
  - 语义化 HTML5 结构，有利于搜索引擎抓取。
  - 针对 `GLM-4.7`, `智谱AI`, `代码大模型` 等高频词汇进行关键词布局。
- **原生 API 对话体验**：
  - 支持用户输入自己的 `BigModel API Key` 直接调用智谱官方接口。
  - 实时反馈，模拟原生 GLM-4.7 的逻辑推理与代码生成能力。
- **全方位的性能展示**：
  - **128K 超长上下文**：直观展示处理长文档、复杂合同与全量代码库的规格。
  - **权威基准测评**：对比 MMLU, C-Eval, HumanEval, GSM8K, MATH 等核心指标。
  - **稠密架构优势**：对比 MoE 架构，强调 GLM-4.7 的逻辑稳定性和精度。
- **开发者生态整合**：
  - **GLM Coding Plan**：内置专属邀请链接，助力开发者获取免费额度与技术支持。
  - **三端体验导航**：集成 bigmodel.cn, chat.z.ai 及智谱清言官方入口。
- **现代响应式 UI**：
  - 基于 Tailwind CSS 的玻璃拟态（Glassmorphism）设计。
  - 适配手机、平板及桌面端，极致的视觉交互。

## 🛠️ 技术架构

- **前端框架**: React 19 (通过 ESM Import Maps 引入)
- **样式处理**: Tailwind CSS
- **AI 交互**: Zhipu AI (BigModel) API - Chat Completion V4
- **部署环境**: 完美适配 Vercel 静态站点托管

## 📦 部署指南 (Vercel)

本项目支持一键部署至 Vercel，无需复杂的构建配置：

1. **准备代码**：将项目所有文件上传至您的 GitHub 仓库。
2. **连接项目**：在 [Vercel 控制台](https://vercel.com/) 点击 "Add New" -> "Project"。
3. **配置导入**：选择您的仓库。Vercel 会自动识别这是一个静态项目。
4. **发布**：点击 **Deploy**。

### 关于跨域 (CORS) 的提示
由于本项目直接在前端调用 `open.bigmodel.cn` 接口，如果遇到 CORS 限制，建议在 `vercel.json` 中配置重写（Rewrites）或使用简单的代理服务器。

## 🔗 快速链接

- **官方 API 体验**: [BigModel.cn](https://bigmodel.cn/trialcenter/modeltrial/text?modelCode=glm-4.7)
- **极速 Web 对话**: [chat.z.ai](https://chat.z.ai/)
- **开发者订阅邀请**: [z.ai Subscribe](https://z.ai/subscribe?ic=CFZENLANF5)
- **GLM Coding Plan**: [立即加入](https://www.bigmodel.cn/glm-coding?ic=1BXH9NTPWX)
- **开源模型下载**: [ModelScope (魔搭社区)](https://modelscope.cn/models/ZhipuAI/GLM-4.7)

## 📄 声明

本项目仅用于技术展示与生态推广。页面所涉及的 API Key 由用户自行保管，仅存储于浏览器内存，刷新即消失，不存储于任何服务器。
