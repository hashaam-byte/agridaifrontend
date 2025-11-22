'use client'
import React, { useState, useRef, useEffect } from 'react';
import { 
  Send, Mic, Paperclip, Sparkles, 
  MessageSquare, Leaf, Cloud, Bug, TrendingUp, Calendar,
  Camera, File, X, Bot, User, Lightbulb
} from 'lucide-react';

export default function AIAssistantPage() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content: "Hello! I'm your AI farming assistant. I can help you with crop recommendations, pest identification, weather insights, market prices, and farming best practices. How can I assist you today?",
      timestamp: new Date(Date.now() - 300000)
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);

  const quickActions = [
    { icon: Leaf, label: 'Crop Recommendations', query: 'What crops should I plant this season?' },
    { icon: Bug, label: 'Pest Identification', query: 'Help me identify a pest on my crops' },
    { icon: Cloud, label: 'Weather Advice', query: 'What should I do about the upcoming weather?' },
    { icon: TrendingUp, label: 'Market Insights', query: 'What are the current market trends?' },
    { icon: Calendar, label: 'Planting Calendar', query: 'When should I plant maize?' },
    { icon: Lightbulb, label: 'Farming Tips', query: 'Give me tips for improving soil health' }
  ];

  const aiResponses = {
    'crop': "Based on your location in Lagos and the current season, I recommend planting:\n\n🌽 **Maize** - High demand, 90-120 day cycle\n🌾 **Rice** - Excellent for wet season\n🍅 **Tomatoes** - Good market prices currently\n🥒 **Cucumbers** - Fast-growing, 60-day harvest\n\nWould you like detailed planting instructions for any of these?",
    'pest': "To help identify the pest, I'll need some information:\n\n📸 Can you upload a photo of the affected plant?\n🌱 What crop is affected?\n📍 Which part of the plant (leaves, stem, roots)?\n🔍 Any visible damage patterns?\n\nCommon pests in your region include fall armyworm, aphids, and mealybugs. Prevention tips: regular monitoring, crop rotation, and natural predators.",
    'weather': "Based on current forecasts for Lagos:\n\n☁️ **This Week**: Partly cloudy with 30% rain chance\n🌧️ **Weekend**: Heavy rainfall expected (80% probability)\n\n**Recommendations**:\n✅ Complete fertilizer application before Saturday\n✅ Ensure proper drainage systems\n✅ Harvest ripe tomatoes before heavy rains\n⚠️ Delay pesticide application until after rainfall\n\nWould you like a detailed 7-day forecast?",
    'market': "Current market analysis:\n\n📈 **Rising**: Maize (+8.5%), Tomatoes (+12.8%), Cocoa (+15.2%)\n📉 **Falling**: Rice (-3.2%), Pepper (-6.8%)\n\n**Key Insights**:\n• Maize demand high due to processing industry growth\n• Tomato prices up due to seasonal scarcity\n• Rice imports affecting local prices\n\n💡 **Opportunity**: Consider increasing maize production for next season. Current price: ₦145,000/ton\n\nWant detailed analysis for a specific crop?",
    'planting': "**Maize Planting Guide**:\n\n🗓️ **Best Planting Time**:\n• Early Season: March-April\n• Late Season: August-September\n\n🌱 **Preparation** (2-3 weeks before):\n• Clear land and plow deeply\n• Apply organic matter/compost\n• Test soil pH (optimal: 5.5-7.0)\n\n📏 **Planting**:\n• Spacing: 75cm x 25cm\n• Depth: 3-5cm\n• Seeds: 2-3 per hole (thin to 1 after germination)\n\n💧 **Care**:\n• Water regularly during dry spells\n• First fertilizer: 3 weeks after planting\n• Second fertilizer: 6-8 weeks\n\n⏱️ **Harvest**: 90-120 days\n\nNeed more details on any step?",
    'tips': "**Soil Health Improvement Tips**:\n\n🌿 **Organic Matter**:\n• Add compost or manure regularly\n• Use crop residues as mulch\n• Green manure crops (legumes)\n\n🔄 **Crop Rotation**:\n• Rotate between legumes and cereals\n• Avoid same crop family consecutively\n• Include nitrogen-fixing plants\n\n🚫 **Minimize Tillage**:\n• Reduces soil erosion\n• Preserves soil structure\n• Maintains beneficial organisms\n\n🧪 **Regular Testing**:\n• Test pH annually\n• Monitor nutrient levels\n• Adjust based on results\n\n💧 **Water Management**:\n• Proper drainage systems\n• Mulching to retain moisture\n• Irrigation timing\n\nImplement these gradually for best results!"
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const getAIResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('crop') || lowerMessage.includes('plant this') || lowerMessage.includes('recommend')) {
      return aiResponses.crop;
    } else if (lowerMessage.includes('pest') || lowerMessage.includes('insect') || lowerMessage.includes('bug')) {
      return aiResponses.pest;
    } else if (lowerMessage.includes('weather') || lowerMessage.includes('rain') || lowerMessage.includes('forecast')) {
      return aiResponses.weather;
    } else if (lowerMessage.includes('market') || lowerMessage.includes('price') || lowerMessage.includes('sell')) {
      return aiResponses.market;
    } else if (lowerMessage.includes('when') && (lowerMessage.includes('plant') || lowerMessage.includes('maize'))) {
      return aiResponses.planting;
    } else if (lowerMessage.includes('tip') || lowerMessage.includes('soil') || lowerMessage.includes('improve')) {
      return aiResponses.tips;
    } else {
      return "I'd be happy to help with that! I specialize in:\n\n🌱 Crop recommendations and planting guides\n🐛 Pest identification and management\n☁️ Weather forecasts and farming advice\n📈 Market prices and trends\n📅 Planting calendars and schedules\n💡 Best practices and farming tips\n\nCould you tell me more specifically what you'd like to know?";
    }
  };

  const handleSend = () => {
    if (!inputValue.trim() && !selectedFile) return;

    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      content: inputValue,
      file: selectedFile,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setSelectedFile(null);
    setIsTyping(true);

    // Simulate AI thinking
    setTimeout(() => {
      const aiMessage = {
        id: messages.length + 2,
        type: 'ai',
        content: getAIResponse(inputValue),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickAction = (query) => {
    setInputValue(query);
    setTimeout(() => handleSend(), 100);
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile({
        name: file.name,
        type: file.type,
        size: file.size
      });
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)] max-h-[900px]">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-sm border-b border-emerald-500/30 p-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">AI Farming Assistant</h1>
            <p className="text-emerald-300 text-sm">Powered by advanced agricultural AI • Always available</p>
          </div>
        </div>
      </div>

      {/* Quick Actions - Only show when no messages */}
      {messages.length === 1 && (
        <div className="p-6 space-y-4">
          <p className="text-gray-400 text-center">Quick actions to get started:</p>
          <div className="grid md:grid-cols-3 gap-3">
            {quickActions.map((action, i) => (
              <button
                key={i}
                onClick={() => handleQuickAction(action.query)}
                className="p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-500/30 rounded-xl transition-all text-left group"
              >
                <action.icon className="w-6 h-6 text-emerald-400 mb-2 group-hover:scale-110 transition-transform" />
                <p className="text-white font-medium text-sm">{action.label}</p>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex gap-3 ${message.type === 'user' ? 'flex-row-reverse' : ''}`}>
            <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
              message.type === 'ai' 
                ? 'bg-gradient-to-br from-emerald-400 to-teal-500' 
                : 'bg-gradient-to-br from-blue-400 to-purple-500'
            }`}>
              {message.type === 'ai' ? <Bot className="w-6 h-6 text-white" /> : <User className="w-6 h-6 text-white" />}
            </div>
            
            <div className={`flex-1 max-w-2xl ${message.type === 'user' ? 'flex flex-col items-end' : ''}`}>
              <div className={`p-4 rounded-2xl ${
                message.type === 'ai'
                  ? 'bg-white/10 border border-white/10'
                  : 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30'
              }`}>
                {message.file && (
                  <div className="mb-3 p-3 bg-white/5 rounded-lg border border-white/10 flex items-center gap-3">
                    <File className="w-5 h-5 text-emerald-400" />
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm truncate">{message.file.name}</p>
                      <p className="text-gray-400 text-xs">{(message.file.size / 1024).toFixed(1)} KB</p>
                    </div>
                  </div>
                )}
                <p className="text-white whitespace-pre-wrap leading-relaxed">{message.content}</p>
              </div>
              <p className="text-gray-500 text-xs mt-2">{formatTime(message.timestamp)}</p>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex gap-3">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div className="p-4 bg-white/10 border border-white/10 rounded-2xl">
              <div className="flex gap-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="border-t border-white/10 bg-gray-950/80 backdrop-blur-xl p-4">
        {selectedFile && (
          <div className="mb-3 p-3 bg-white/5 rounded-lg border border-white/10 flex items-center gap-3">
            <File className="w-5 h-5 text-emerald-400" />
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm truncate">{selectedFile.name}</p>
              <p className="text-gray-400 text-xs">{(selectedFile.size / 1024).toFixed(1)} KB</p>
            </div>
            <button 
              onClick={() => setSelectedFile(null)}
              className="p-1 hover:bg-white/10 rounded-lg text-gray-400 transition-all"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        <div className="flex items-end gap-3">
          <div className="flex gap-2">
            <input
              ref={fileInputRef}
              type="file"
              onChange={handleFileSelect}
              className="hidden"
              accept="image/*,.pdf"
            />
            <button 
              onClick={() => fileInputRef.current?.click()}
              className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-gray-400 hover:text-white transition-all"
              title="Attach file"
            >
              <Paperclip className="w-5 h-5" />
            </button>
            <button 
              className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-gray-400 hover:text-white transition-all"
              title="Take photo"
            >
              <Camera className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 relative">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask me anything about farming..."
              className="w-full px-4 py-3 pr-12 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button 
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-all"
              title="Voice input"
            >
              <Mic className="w-5 h-5" />
            </button>
          </div>

          <button
            onClick={handleSend}
            disabled={!inputValue.trim() && !selectedFile}
            className="p-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl text-white transition-all shadow-lg hover:shadow-emerald-500/50"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>

        <p className="text-gray-500 text-xs text-center mt-3">
          AI responses are for guidance only. Always consult local agricultural experts for critical decisions.
        </p>
      </div>
    </div>
  );
}