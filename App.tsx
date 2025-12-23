
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
      {/* Background Decorative Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[120px] rounded-full"></div>
      </div>

      <Navbar />
      
      <main>
        <Hero />
        
        <section id="features" className="py-24 px-4 bg-glow">
          <Features />
        </section>

        <section id="specs" className="py-24 px-4 container mx-auto max-w-7xl">
          <TechSpecs />
        </section>

        <section id="experience" className="py-24 px-4 container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">GLM-4.7 智慧交互</h2>
            <p className="text-slate-400 text-lg">基于 Gemini 引擎模拟 GLM-4.7 核心能力，即刻感受卓越的中文语义理解</p>
          </div>
          <ChatDemo />
        </section>

        <section id="scenarios" className="py-24 px-4">
          <UsageScenarios />
        </section>

        <section id="comparison" className="py-24 px-4 bg-slate-900/50">
          <ComparisonTable />
        </section>

        <section id="coding-plan" className="py-24 px-4">
          <CodingPlan />
        </section>

        <section id="faq" className="py-24 px-4 bg-slate-900/30">
          <FAQ />
        </section>

        <section id="trial" className="py-24 px-4 container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">开启智能新篇章</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                <a 
                    href="https://bigmodel.cn/trialcenter/modeltrial/text?modelCode=glm-4.7" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-8 bg-blue-600 hover:bg-blue-500 rounded-3xl font-bold transition-all transform hover:scale-105 shadow-xl shadow-blue-500/20"
                >
                    <span className="text-lg mb-1">开放平台免费体验</span>
                    <span className="text-xs opacity-70 font-normal">bigmodel.cn</span>
                </a>
                <a 
                    href="https://chat.z.ai/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-8 bg-white text-slate-900 hover:bg-slate-100 rounded-3xl font-bold transition-all transform hover:scale-105 shadow-xl"
                >
                    <span className="text-lg mb-1">极速 Web 对话</span>
                    <span className="text-xs opacity-70 font-normal">chat.z.ai</span>
                </a>
                <a 
                    href="https://chatglm.cn/main/alltoolsdetail?lang=zh" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-8 border border-slate-700 bg-slate-800/50 hover:bg-slate-800 rounded-3xl font-bold transition-all transform hover:scale-105"
                >
                    <span className="text-lg mb-1">智谱清言全量版</span>
                    <span className="text-xs opacity-70 font-normal">chatglm.cn</span>
                </a>
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
