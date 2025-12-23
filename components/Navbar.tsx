import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 glass-morphism border-b border-white/5 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-black text-xl italic text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]">G</div>
          <span className="text-xl font-bold tracking-tight">GLM-4.7 <span className="text-blue-500 text-[10px] align-top ml-1 font-black bg-blue-500/10 px-1.5 py-0.5 rounded border border-blue-500/20">PRO</span></span>
        </div>
        
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#features" className="hover:text-white transition-colors">核心优势</a>
          <a href="#specs" className="hover:text-white transition-colors">技术规格</a>
          <a href="#experience" className="hover:text-white transition-colors">实时体验</a>
          <a href="#coding-plan" className="hover:text-white transition-colors">Coding Plan</a>
        </div>

        <div className="flex items-center gap-3">
          <a 
            href="https://z.ai/subscribe?ic=CFZENLANF5" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden sm:inline-block px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            z.ai 订阅邀请
          </a>
          <a 
            href="https://bigmodel.cn/trialcenter/modeltrial/text?modelCode=glm-4.7" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full text-sm font-bold hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all transform hover:scale-105 active:scale-95 text-white"
          >
            立即接入
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;