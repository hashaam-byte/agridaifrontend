import React, { useState, useRef, useEffect } from 'react';
import { 
  Leaf, Menu, X, Home, Sprout, Cloud, TrendingUp, MessageSquare, 
  Users, BookOpen, Calendar, Bug, DollarSign, Settings, Send,
  Sparkles, Image, Paperclip, Mic, MoreVertical,
  Copy, ThumbsUp, ThumbsDown, RotateCcw
} from 'lucide-react';

export default function AIAssistant() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content: "Hello! I'm your Agrid AI farming assistant. I can help you with crop recommendations, weather insights, pest management, and much more. What would you like to know today?",
      timestamp: new Date(Date.now() - 3600000)
    },
    {
      id: 2,
      type: 'user',
      content: "What's the best time to plant maize in Lagos?",
      timestamp: new Date(Date.now() - 3000000)
    },
    {
      id: 3,
      type: 'ai',
      content: "Great question! In Lagos, Nigeria, the best time to plant maize is during the rainy season. Here are the optimal planting windows:\n\n**Early Season (March-April)**\n- Plant at the onset of rains\n- Ensure soil moisture is adequate\n- Expect harvest in 3-4 months\n\n**Late Season (August-September)**\n- Second planting window\n- Lower yields but still profitable\n- Watch out for army worms\n\n**Pro Tips:**\n- Soil temperature should be above 15°C\n- Prepare land 2 weeks before planting\n- Use quality certified seeds\n\nWould you like specific variety recommendations for your farm?",
      timestamp: new Date(Date.now() - 2900000)
    }
  ]);

  const menuItems = [
    { icon: Home, label: 'Dashboard', href: '/dashboard' },
    { icon: Sprout, label: 'My Crops', href: '/crops' },
    { icon: Cloud, label: 'Weather', href: '/weather' },
    { icon: TrendingUp, label: 'Market Prices', href: '/market' },
    { icon: MessageSquare, label: 'AI Assistant', href: '/assistant', active: true },
    { icon: Users, label: 'Community', href: '/community' },
    { icon: BookOpen, label: 'Resources', href: '/resources' },
    { icon: Calendar, label: 'Crop Calendar', href: '/calendar' },
    { icon: Bug, label: 'Pest Detector', href: '/pest-detector' },
    { icon: DollarSign, label: 'Financial', href: '/financial' },
    { icon: Settings, label: 'Settings', href: '/settings' }
  ];

  const quickPrompts = [
    { icon: Cloud, text: "What's today's weather?", color: "blue" },
    { icon: Bug, text: "Identify this pest", color: "red" },
    { icon: Sprout, text: "Best crops for my region", color: "green" },
    { icon: TrendingUp, text: "Current market prices", color: "yellow" }
  ];

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const newUserMessage = {
      id: messages.length + 1,
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newUserMessage]);
    setInputMessage('');
    setIsTyping(true);

    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        type: 'ai',
        content: "I'm analyzing your question about " + inputMessage.toLowerCase() + ". Based on your farm profile and current conditions, I recommend...",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 2000);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-emerald-950 to-gray-950">
      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 h-screen bg-gradient-to-b from-emerald-950/90 to-gray-950/90 backdrop-blur-xl border-r border-white/10 transition-all duration-300 z-40 ${
        sidebarOpen ? 'w-64' : 'w-20'
      } hidden lg:block`}>
        <div className="flex flex-col h-full p-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-gradient-to-br from-emerald-400 to-teal-500 p-2 rounded-lg">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            {sidebarOpen && (
              <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                Agrid AI
              </span>
            )}
          </div>

          <nav className="flex-1 space-y-2 overflow-y-auto">
            {menuItems.map((item, i) => (
              <a
                key={i}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  item.active
                    ? 'bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-400 border border-emerald-500/30'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                {sidebarOpen && <span className="text-sm font-medium">{item.label}</span>}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="mt-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all"
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className={`transition-all duration-300 ${sidebarOpen ? 'lg:ml-64' : 'lg:ml-20'} h-screen flex flex-col`}>
        {/* Header */}
        <header className="bg-gray-950/80 backdrop-blur-xl border-b border-white/10 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 rounded-lg hover:bg-white/10 text-gray-400"
              >
                <Menu className="w-6 h-6" />
              </button>
              
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-lg border border-emerald-500/30">
                  <Sparkles className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h1 className="text-lg font-bold text-white">AI Farming Assistant</h1>
                  <p className="text-xs text-gray-400 flex items-center gap-1">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                    Online & Ready to Help
                  </p>
                </div>
              </div>
            </div>

            <button className="p-2 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-all">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
          {/* Welcome Card */}
          {messages.length <= 3 && (
            <div className="max-w-3xl mx-auto">
              <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 backdrop-blur-sm rounded-2xl border border-emerald-500/30 p-8 text-center mb-6">
                <div className="inline-flex p-4 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full mb-4">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">Your Smart Farming Companion</h2>
                <p className="text-gray-400">Ask me anything about farming, crops, weather, pests, and market insights</p>
              </div>

              {/* Quick Prompts */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                {quickPrompts.map((prompt, i) => (
                  <button
                    key={i}
                    onClick={() => setInputMessage(prompt.text)}
                    className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/30 hover:bg-emerald-500/10 transition-all text-left group"
                  >
                    <prompt.icon className="w-5 h-5 text-emerald-400 mb-2" />
                    <p className="text-sm text-white">{prompt.text}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Messages */}
          <div className="max-w-3xl mx-auto space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                {message.type === 'ai' && (
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                )}

                <div className={`flex-1 max-w-[80%] ${message.type === 'user' ? 'flex justify-end' : ''}`}>
                  <div className={`rounded-2xl p-4 ${
                    message.type === 'user'
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white'
                      : 'bg-white/10 backdrop-blur-sm border border-white/10 text-white'
                  }`}>
                    <p className="text-sm whitespace-pre-line">{message.content}</p>
                    <p className="text-xs mt-2 opacity-70">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>

                  {message.type === 'ai' && (
                    <div className="flex items-center gap-2 mt-2 ml-2">
                      <button className="p-1.5 rounded-lg hover:bg-white/10 text-gray-400 hover:text-emerald-400 transition-all">
                        <Copy className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 rounded-lg hover:bg-white/10 text-gray-400 hover:text-emerald-400 transition-all">
                        <ThumbsUp className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 rounded-lg hover:bg-white/10 text-gray-400 hover:text-red-400 transition-all">
                        <ThumbsDown className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 rounded-lg hover:bg-white/10 text-gray-400 hover:text-blue-400 transition-all">
                        <RotateCcw className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>

                {message.type === 'user' && (
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center text-white font-bold">
                    JD
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-4">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input Area */}
        <div className="border-t border-white/10 bg-gray-950/80 backdrop-blur-xl p-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-3 flex items-end gap-3">
              <button className="p-2 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-all">
                <Paperclip className="w-5 h-5" />
              </button>

              <button className="p-2 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-all">
                <Image className="w-5 h-5" />
              </button>

              <textarea
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
                placeholder="Ask me anything about farming..."
                className="flex-1 bg-transparent text-white placeholder-gray-400 resize-none focus:outline-none min-h-[40px] max-h-[120px] py-2"
                rows={1}
              />

              <button className="p-2 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-all">
                <Mic className="w-5 h-5" />
              </button>

              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim()}
                className="p-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <Send className="w-5 h-5 text-white" />
              </button>
            </div>

            <p className="text-xs text-gray-500 text-center mt-2">
              AI Assistant can make mistakes. Verify important information.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}