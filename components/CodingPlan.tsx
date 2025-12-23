import React from 'react';

const CodingPlan: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="bg-gradient-to-br from-indigo-900/40 to-blue-900/20 border border-blue-500/20 rounded-[40px] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 overflow-hidden relative">
        <div className="flex-1 z-10">
          <div className="inline-block px-4 py-1 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-400 text-sm font-bold mb-6">
            开发者专项支持计划
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6">GLM Coding Plan</h2>
          <p className="text-lg text-slate-300 mb-8 leading-relaxed">
            加入我们的“代码英雄”计划，解锁 GLM-4.7 强大的编程潜力。
            不论是 Python、Java、C++ 还是前沿的 Web 开发，GLM-4.7 都能为你提供精准的代码辅助、
            漏洞检测及逻辑重构建议。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            <a 
              href="https://www.bigmodel.cn/glm-coding?ic=1BXH9NTPWX" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col p-5 bg-blue-600 rounded-2xl hover:bg-blue-500 transition-all group shadow-lg shadow-blue-500/20"
            >
              <span className="font-bold text-white mb-1">立即加入 Coding Plan</span>
              <span className="text-xs text-blue-100 opacity-80">获取专属 API 额度与技术扶持</span>
            </a>
            <a 
              href="https://bigmodel.cn/trialcenter/modeltrial/text?modelCode=glm-4.7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col p-5 bg-slate-800 rounded-2xl hover:bg-slate-700 transition-all border border-white/5"
            >
              <span className="font-bold text-white mb-1">体验中心 (BigModel)</span>
              <span className="text-xs text-slate-400">智谱 AI 官方模型试用专区</span>
            </a>
          </div>
          <ul className="space-y-4 text-slate-400 mb-4">
            <li className="flex items-center gap-3">
              <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
              <span>获得专属 API 额度，支持 128K 超长上下文</span>
            </li>
            <li className="flex items-center gap-3">
              <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
              <span>深度集成 VS Code 等主流 IDE 插件</span>
            </li>
          </ul>
        </div>
        <div className="flex-1 w-full max-w-md">
            <div className="relative">
                <div className="absolute inset-0 bg-blue-500/20 blur-[60px]"></div>
                <img 
                    src="https://picsum.photos/seed/coding-pro/600/600" 
                    alt="Coding Illustration" 
                    className="relative z-10 rounded-3xl border border-white/10 shadow-2xl"
                />
            </div>
        </div>
      </div>
    </div>
  );
};

export default CodingPlan;