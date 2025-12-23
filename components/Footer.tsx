import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-sm">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-black text-xl italic text-white">G</div>
            <span className="text-xl font-bold">GLM-4.7</span>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed mb-6">
            智谱 AI 致力于打造新一代认知智能大模型。GLM-4.7 系列模型为用户提供前所未有的智能体验，赋能每一位开发者。
          </p>
          <div className="flex gap-4">
            <a href="https://github.com/dongyubin/GLM-4.7/tree/main" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                <svg className="w-5 h-5 text-slate-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 flex-1">
          <div>
            <h4 className="text-white font-bold mb-4">产品体验</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><a href="https://bigmodel.cn/trialcenter/modeltrial/text?modelCode=glm-4.7" className="hover:text-blue-500 transition-colors">API 体验中心</a></li>
              <li><a href="https://chatglm.cn/" className="hover:text-blue-500 transition-colors">智谱清言官网</a></li>
              <li><a href="https://open.bigmodel.cn/dev/api" className="hover:text-blue-500 transition-colors">API 开发文档</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">生态计划</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><a href="https://www.bigmodel.cn/glm-coding?ic=1BXH9NTPWX" className="hover:text-blue-500 transition-colors">GLM Coding Plan</a></li>
              <li><a href="https://z.ai/subscribe?ic=CFZENLANF5" className="hover:text-blue-500 transition-colors text-blue-400">z.ai 订阅邀请</a></li>
              <li><a href="https://modelscope.cn/models/ZhipuAI/GLM-4.7" className="hover:text-blue-500 transition-colors">ModelScope 开源</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">关于智谱</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><a href="https://zhipuai.cn/about" className="hover:text-blue-500 transition-colors">公司介绍</a></li>
              <li><a href="https://zhipuai.cn/careers" className="hover:text-blue-500 transition-colors">加入我们</a></li>
              <li><a href="https://zhipuai.cn/news" className="hover:text-blue-500 transition-colors">新闻动态</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 text-center text-xs text-slate-600">
        © 2024 Zhipu AI / BigModel.cn. 本页面由社区开发者维护。
      </div>
    </footer>
  );
};

export default Footer;