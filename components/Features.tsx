
import React from 'react';

const FEATURE_DATA = [
  {
    title: "先进稠密架构",
    desc: "GLM-4.7 采用深度优化的稠密（Dense）模型架构，在参数效率与推理精度间达成完美平衡。",
    icon: (
      <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.691.387a6 6 0 01-3.86.517l-2.387-.477a2 2 0 00-1.022.547l-1.162 1.626a2 2 0 00.339 2.747l1.447 1.158a2 2 0 002.747-.339l1.162-1.626z"></path>
      </svg>
    )
  },
  {
    title: "128K 超长窗口",
    desc: "支持单次输入超过 10 万汉字。无论是长篇论文总结还是超大代码库理解，均能游刃有余。",
    icon: (
      <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
      </svg>
    )
  },
  {
    title: "代码与逻辑专家",
    desc: "在 HumanEval 及逻辑推理测试中稳居前列。专为复杂算法设计与业务逻辑实现而生。",
    icon: (
      <svg className="w-8 h-8 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
      </svg>
    )
  },
  {
    title: "中文深度语境",
    desc: "生于本土，深谙中华文化。成语、俗语、公文写作等场景表现更符合国人思维习惯。",
    icon: (
      <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5c-1 3.142-2.846 5.91-5.12 8.165"></path>
      </svg>
    )
  }
];

const Features: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {FEATURE_DATA.map((feature, idx) => (
          <div key={idx} className="glass-morphism p-8 rounded-3xl hover:border-blue-500/30 transition-all group">
            <div className="mb-6 p-4 bg-white/5 rounded-2xl inline-block group-hover:scale-110 transition-transform">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
            <p className="text-slate-400 leading-relaxed text-sm">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
