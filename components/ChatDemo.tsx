
import React, { useState, useRef, useEffect } from 'react';

interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

const ChatDemo: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: '您好！我是 GLM-4.7。请在下方输入您的 BigModel API Key 后即可开始对话。' }
  ]);
  const [input, setInput] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showKey, setShowKey] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    if (!apiKey.trim()) {
      alert('请先输入有效的 BigModel API Key 以开始体验 GLM-4.7 的强大能力。');
      return;
    }

    const userMsg = input.trim();
    setInput('');
    const newMessages: Message[] = [...messages, { role: 'user', content: userMsg }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      // Calling Zhipu AI (BigModel) API directly
      // Note: In a production environment, this should ideally be proxied to avoid exposing keys or CORS issues
      const response = await fetch('https://open.bigmodel.cn/api/paas/v4/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'glm-4', // Mapping GLM-4.7 request to the main GLM-4 API model
          messages: [
            { role: 'system', content: '你现在扮演 GLM-4.7，国产全能大模型的性能巅峰。你以智谱 AI 出品的大模型身份回答。语气专业、友好、且具备极强的逻辑和代码能力。' },
            ...newMessages
          ],
          stream: false
        })
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error?.message || '请求失败');
      }

      const data = await response.json();
      const aiContent = data.choices[0].message.content || '未获取到回复内容。';
      setMessages(prev => [...prev, { role: 'assistant', content: aiContent }]);
    } catch (error: any) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'assistant', content: `错误: ${error.message || '连接失败，请检查您的 API Key 是否正确及网络状况。'}` }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto glass-morphism rounded-3xl overflow-hidden shadow-2xl flex flex-col h-[650px] border border-white/10">
      <div className="px-6 py-4 bg-white/5 border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
          <span className="font-bold text-slate-200">GLM-4.7 原生 API 体验</span>
        </div>
        <div className="flex items-center gap-2 bg-slate-900/50 p-1.5 rounded-lg border border-white/5 w-full md:w-auto">
          <input 
            type={showKey ? "text" : "password"}
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="输入 BigModel API Key"
            className="bg-transparent text-xs px-2 focus:outline-none text-blue-400 w-full md:w-48"
          />
          <button 
            onClick={() => setShowKey(!showKey)}
            className="text-slate-500 hover:text-slate-300 p-1"
          >
            {showKey ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" /></svg>
            )}
          </button>
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide bg-[#0b0f1a]/50">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] px-5 py-3 rounded-2xl text-sm leading-relaxed ${
              msg.role === 'user' 
                ? 'bg-blue-600 text-white rounded-tr-none shadow-lg' 
                : 'bg-white/10 text-slate-200 border border-white/10 rounded-tl-none'
            }`}>
              {msg.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white/5 px-5 py-3 rounded-2xl rounded-tl-none border border-white/5 flex gap-1 items-center">
              <span className="text-xs text-slate-500 mr-2">GLM-4.7 正在思考</span>
              <span className="w-1 h-1 bg-blue-500 rounded-full animate-bounce"></span>
              <span className="w-1 h-1 bg-blue-500 rounded-full animate-bounce delay-100"></span>
              <span className="w-1 h-1 bg-blue-500 rounded-full animate-bounce delay-200"></span>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 bg-white/5 border-t border-white/10">
        <div className="flex gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder={apiKey ? "输入您的问题..." : "请先在上方输入 API Key"}
            disabled={!apiKey}
            className="flex-1 bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-white placeholder-slate-500 disabled:opacity-50"
          />
          <button
            onClick={handleSend}
            disabled={isLoading || !apiKey}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold transition-all disabled:opacity-50 text-white"
          >
            发送
          </button>
        </div>
        <p className="text-[10px] text-slate-600 mt-2 text-center">
          您的 API Key 仅保存在浏览器内存中，刷新页面即清除。请放心体验。
        </p>
      </div>
    </div>
  );
};

export default ChatDemo;
