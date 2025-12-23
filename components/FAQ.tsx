
import React, { useState } from 'react';

const FAQ_ITEMS = [
  {
    question: "GLM-4.7 与之前的版本有什么主要提升？",
    answer: "GLM-4.7 在推理性能、长文本理解（128k）和代码生成能力上有了质的飞跃。相比 GLM-4，它在复杂指令遵循、多跳逻辑推理以及中英双语的对齐上进行了深度优化，测评表现全面对标国际顶尖模型。"
  },
  {
    question: "GLM-4.7 是否提供开源版本？",
    answer: "智谱 AI 秉承开源精神，在 ModelScope 和 Hugging Face 等平台提供了 GLM-4-9B 等轻量级版本的开源下载。对于 GLM-4.7 的全量性能体验，推荐通过 bigmodel.cn API 或官方对话平台接入。"
  },
  {
    question: "128K 的上下文窗口能处理多大的数据量？",
    answer: "128K 上下文窗口意味着模型可以一次性处理约 10 万个汉字或数千行源代码。这使其非常适合整本书籍的深度总结、超长合同的风险分析以及大型软件项目的全量代码理解。"
  },
  {
    question: "GLM Coding Plan 如何帮助开发者？",
    answer: "该计划旨在通过 AI 赋能开发者。加入后，您可以获得专属的 API 免费额度、IDE 插件的优先体验权，以及参与智谱 AI 技术沙龙的机会，帮助您在日常开发中实现自动补全、代码纠错及架构设计。"
  },
  {
    question: "如何接入 GLM-4.7 的 API？",
    answer: "GLM-4.7 完全适配 OpenAI SDK 格式。您只需在 bigmodel.cn 获取 API Key，并将 Base URL 指向官方端点，即可无缝迁移现有的 AI 应用，享受国产顶尖模型的性能。"
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-4xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">常见问题解答 (FAQ)</h2>
        <p className="text-slate-400">关于 GLM-4.7 的核心能力与接入方式，您可能想了解这些</p>
      </div>
      
      <div className="space-y-4">
        {FAQ_ITEMS.map((item, index) => (
          <div key={index} className="glass-morphism rounded-2xl overflow-hidden border border-white/5">
            <button 
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
            >
              <span className="font-bold text-slate-200">{item.question}</span>
              <svg 
                className={`w-5 h-5 text-blue-500 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} 
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIndex === index && (
              <div className="px-8 pb-6 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
