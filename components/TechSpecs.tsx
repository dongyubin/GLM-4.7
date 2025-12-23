
import React from 'react';

const TechSpecs: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-3xl font-extrabold mb-6">技术规格详述</h2>
        <p className="text-slate-400 mb-10 leading-relaxed">
          GLM-4.7 汇聚了智谱 AI 在预训练阶段积累的多模态对齐、超大规模 Token 语料库以及高效推理框架等多项核心技术。
        </p>
        <div className="space-y-6">
          <div className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/10">
            <div className="w-12 h-12 flex-shrink-0 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 font-bold">128K</div>
            <div>
              <h4 className="font-bold text-slate-200">最大上下文长度</h4>
              <p className="text-xs text-slate-500">支持 128,000 Tokens 的长文本处理能力。</p>
            </div>
          </div>
          <div className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/10">
            <div className="w-12 h-12 flex-shrink-0 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-400 font-bold">Dense</div>
            <div>
              <h4 className="font-bold text-slate-200">稠密模型架构</h4>
              <p className="text-xs text-slate-500">提供比 MoE 模型更稳定的推理输出与更强的逻辑连贯性。</p>
            </div>
          </div>
          <div className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/10">
            <div className="w-12 h-12 flex-shrink-0 bg-green-500/10 rounded-xl flex items-center justify-center text-green-400 font-bold">API</div>
            <div>
              <h4 className="font-bold text-slate-200">标准 OpenAI 接口适配</h4>
              <p className="text-xs text-slate-500">平滑迁移，支持各类主流 Agent 框架与开发者工具。</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
        <div className="relative bg-slate-900 rounded-3xl p-8 border border-white/10">
            <div className="flex items-center gap-2 mb-6 text-xs font-mono text-slate-500">
                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span className="ml-2">glm47_config.json</span>
            </div>
            <pre className="text-xs sm:text-sm font-mono text-blue-400/90 leading-relaxed overflow-x-auto">
{`{
  "model_name": "glm-4.7",
  "architecture": "dense",
  "context_window": 131072,
  "max_out_tokens": 4096,
  "tokenizer": "tiktoken_based",
  "capabilities": [
    "long_context_understanding",
    "advanced_reasoning",
    "complex_code_gen",
    "multilingual_support"
  ],
  "status": "peak_performance"
}`}
            </pre>
        </div>
      </div>
    </div>
  );
};

export default TechSpecs;
