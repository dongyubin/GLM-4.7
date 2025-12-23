
import React from 'react';

const ComparisonTable: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-6">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold mb-4">核心基准测评 (Benchmarks)</h3>
        <p className="text-slate-400">GLM-4.7 在多项主流权威榜单中表现卓越，全面对标国际顶级大模型</p>
      </div>
      
      <div className="overflow-x-auto rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
        <table className="w-full text-left">
          <thead className="border-b border-white/10 text-xs uppercase text-slate-500 font-bold bg-white/5">
            <tr>
              <th className="px-8 py-6">测评指标 (Score)</th>
              <th className="px-8 py-6 text-blue-400">GLM-4.7</th>
              <th className="px-8 py-6">GPT-4 Turbo</th>
              <th className="px-8 py-6">Llama 3-70B</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
              <td className="px-8 py-5 font-medium">MMLU (综合知识)</td>
              <td className="px-8 py-5 text-blue-400 font-bold">82.4</td>
              <td className="px-8 py-5">86.4</td>
              <td className="px-8 py-5">82.0</td>
            </tr>
            <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
              <td className="px-8 py-5 font-medium">C-Eval (中文综合)</td>
              <td className="px-8 py-5 text-blue-400 font-bold">90.2</td>
              <td className="px-8 py-5">88.5</td>
              <td className="px-8 py-5">N/A</td>
            </tr>
            <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
              <td className="px-8 py-5 font-medium">HumanEval (代码能力)</td>
              <td className="px-8 py-5 text-blue-400 font-bold">87.5</td>
              <td className="px-8 py-5">86.2</td>
              <td className="px-8 py-5">81.1</td>
            </tr>
            <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
              <td className="px-8 py-5 font-medium">GSM8K (数学计算)</td>
              <td className="px-8 py-5 text-blue-400 font-bold">94.1</td>
              <td className="px-8 py-5">93.5</td>
              <td className="px-8 py-5">93.0</td>
            </tr>
            <tr className="hover:bg-white/5 transition-colors">
              <td className="px-8 py-5 font-medium">MATH (数学竞赛级)</td>
              <td className="px-8 py-5 text-blue-400 font-bold">52.8</td>
              <td className="px-8 py-5">52.9</td>
              <td className="px-8 py-5">42.2</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs text-slate-500 italic">
        <span>* 数据采集自 ModelScope 及官方公开测评报告</span>
        <span className="hidden sm:inline">|</span>
        <span>* 测评结果可能因 Prompt 及随机种子略有浮动</span>
      </div>
    </div>
  );
};

export default ComparisonTable;
