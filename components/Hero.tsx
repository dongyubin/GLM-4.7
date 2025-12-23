
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-20 pb-16 px-6 text-center overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-8 animate-pulse">
            <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            GLM-4.7 现已全面升级
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
          赋能万物，智领未来 <br />
          <span className="text-gradient">全能大模型 GLM-4.7</span>
        </h1>
        
        <p className="text-xl text-slate-400 mb-12 leading-relaxed max-w-2xl mx-auto">
          Zhipu AI 年度力作。在逻辑、代码、长文本及多模态能力上全面对标国际顶尖模型。
          专为中文语境优化，速度更疾，理解更深。
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#experience" 
            className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 rounded-xl font-bold hover:bg-slate-100 transition-all transform hover:-translate-y-1 shadow-xl"
          >
            立即在线体验
          </a>
          <a 
            href="https://www.bigmodel.cn/glm-coding?ic=1BXH9NTPWX" 
            className="w-full sm:w-auto px-8 py-4 bg-slate-800 rounded-xl font-bold border border-slate-700 hover:bg-slate-700 transition-all flex items-center justify-center gap-2"
          >
            GLM Coding Plan 详情
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </a>
        </div>
      </div>

      {/* Decorative Grid */}
      <div className="mt-20 max-w-6xl mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative">
        <img 
            src="https://picsum.photos/seed/glm47/1200/600" 
            alt="GLM-4.7 Dashboard Preview" 
            className="w-full h-auto opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent"></div>
      </div>
    </div>
  );
};

export default Hero;
