
import React from 'react';

const SCENARIOS = [
  {
    title: "智能办公辅助",
    desc: "长文档摘要、周报撰写、公文纠错，大幅提升办公效率。",
    img: "https://picsum.photos/seed/office/400/300"
  },
  {
    title: "全栈编程辅助",
    desc: "复杂算法实现、Bug 诊断、老代码重构，开发者的 AI 副驾驶。",
    img: "https://picsum.photos/seed/code/400/300"
  },
  {
    title: "专业知识问答",
    desc: "法律、医学、金融等垂直领域的精准逻辑推理与知识检索。",
    img: "https://picsum.photos/seed/brain/400/300"
  }
];

const UsageScenarios: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">应用场景落地</h2>
        <p className="text-slate-400">从创意到生产，GLM-4.7 满足多维度的智能需求</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {SCENARIOS.map((s, i) => (
          <div key={i} className="group overflow-hidden rounded-3xl border border-white/5 hover:border-blue-500/30 transition-all">
            <div className="h-48 overflow-hidden">
              <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="p-6 bg-slate-900/50">
              <h4 className="text-xl font-bold mb-2">{s.title}</h4>
              <p className="text-sm text-slate-400">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsageScenarios;
