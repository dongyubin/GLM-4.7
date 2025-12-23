import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CodingPlan from './components/CodingPlan';
import ChatDemo from './components/ChatDemo';
import ComparisonTable from './components/ComparisonTable';
import TechSpecs from './components/TechSpecs';
import UsageScenarios from './components/UsageScenarios';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[120px] rounded-full"></div>
      </div>

      <Navbar />
      
      <main>
        <Hero />
        
        <section id="features" className="py-32 px-4 bg-glow">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl font-black mb-6">核心优势</h2>
            <p className="text-slate-400 text-lg">GLM-4.7 在预训练数据规模、逻辑对齐和模型架构上进行了深度迭代</p>
          </div>
          <Features />
        </section>

        <section id="specs" className="py-32 px-4 container mx-auto max-w-7xl">
          <TechSpecs />
        </section>

        <section id="experience" className="py-32 px-4 container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-6">GLM-4.7 智慧交互</h2>
            <p className="text-slate-400 text-lg">输入您的 API Key，即刻在浏览器中体验 GLM-4.7 巅峰性能</p>
          </div>
          <ChatDemo />
        </section>

        <section id="scenarios" className="py-32 px-4">
          <UsageScenarios />
        </section>

        <section id="comparison" className="py-32 px-4 bg-slate-900/40">
          <ComparisonTable />
        </section>

        <section id="coding-plan" className="py-32 px-4">
          <CodingPlan />
        </section>

        <section id="faq" className="py-32 px-4 bg-slate-900/30">
          <FAQ />
        </section>

        <section id="trial" className="py-32 px-4 container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">开启您的智能新篇章</h2>
            <p className="text-slate-400 mb-12 max-w-2xl mx-auto">无论您是个人开发者还是企业用户，GLM-4.7 都能为您提供最可靠的智能支持</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                <a href="https://bigmodel.cn/trialcenter/modeltrial/text?modelCode=glm-4.7" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-8 bg-blue-600 hover:bg-blue-500 rounded-3xl font-bold transition-all transform hover:scale-105 shadow-xl shadow-blue-500/20 group">
                    <span className="text-lg mb-1 text-white">官方免费体验</span>
                    <span className="text-xs text-blue-100 opacity-70 font-normal">bigmodel.cn</span>
                    <svg className="w-5 h-5 mt-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                </a>
                <a href="https://z.ai/subscribe?ic=CFZENLANF5" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-8 bg-gradient-to-br from-indigo-600 to-purple-700 hover:from-indigo-500 hover:to-purple-600 rounded-3xl font-bold transition-all transform hover:scale-105 shadow-xl shadow-purple-500/20 group">
                    <span className="text-lg mb-1 text-white">z.ai 订阅邀请</span>
                    <span className="text-xs text-purple-100 opacity-70 font-normal">社区专属订阅通道</span>
                    <svg className="w-5 h-5 mt-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                </a>
                <a href="https://chatglm.cn/main/alltoolsdetail?lang=zh" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-8 border border-slate-700 bg-slate-800/50 hover:bg-slate-800 rounded-3xl font-bold transition-all transform hover:scale-105 group">
                    <span className="text-lg mb-1 text-white">智谱清言全量版</span>
                    <span className="text-xs text-slate-400 font-normal">chatglm.cn</span>
                    <svg className="w-5 h-5 mt-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                </a>
                <a href="https://www.bigmodel.cn/glm-coding?ic=1BXH9NTPWX" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-8 bg-white text-slate-900 hover:bg-slate-100 rounded-3xl font-bold transition-all transform hover:scale-105 shadow-xl group">
                    <span className="text-lg mb-1">Coding Plan</span>
                    <span className="text-xs opacity-70 font-normal text-slate-500">开发者支持计划</span>
                    <svg className="w-5 h-5 mt-4 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                </a>
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;