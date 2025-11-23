'use client'
import React, { useState } from 'react';
import { 
  HelpCircle, Search, Book, Video, MessageCircle, Mail,
  Phone, Clock, ChevronRight, FileText, Zap, CheckCircle,
  AlertCircle, Send, X
} from 'lucide-react';

export default function HelpPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactForm, setContactForm] = useState({ subject: '', message: '', email: '' });

  const categories = [
    {
      id: 1,
      name: 'Getting Started',
      icon: Zap,
      color: 'emerald',
      articles: [
        { id: 1, title: 'How to create your account', views: 1240, helpful: 95 },
        { id: 2, title: 'Setting up your farm profile', views: 980, helpful: 92 },
        { id: 3, title: 'Understanding the dashboard', views: 1450, helpful: 97 },
        { id: 4, title: 'First steps after registration', views: 890, helpful: 88 }
      ]
    },
    {
      id: 2,
      name: 'Crops Management',
      icon: Book,
      color: 'blue',
      articles: [
        { id: 5, title: 'Adding and tracking crops', views: 2340, helpful: 96 },
        { id: 6, title: 'Understanding crop health metrics', views: 1890, helpful: 94 },
        { id: 7, title: 'Setting up crop alerts', views: 1120, helpful: 90 },
        { id: 8, title: 'Best practices for crop monitoring', views: 980, helpful: 93 }
      ]
    },
    {
      id: 3,
      name: 'Weather & Climate',
      icon: FileText,
      color: 'purple',
      articles: [
        { id: 9, title: 'Reading weather forecasts', views: 3450, helpful: 98 },
        { id: 10, title: 'Setting up weather alerts', views: 2100, helpful: 95 },
        { id: 11, title: 'Understanding climate data', views: 1670, helpful: 91 },
        { id: 12, title: 'Planning with weather predictions', views: 1340, helpful: 89 }
      ]
    },
    {
      id: 4,
      name: 'AI Assistant',
      icon: MessageCircle,
      color: 'yellow',
      articles: [
        { id: 13, title: 'How to use the AI assistant', views: 4200, helpful: 99 },
        { id: 14, title: 'Getting accurate recommendations', views: 2890, helpful: 96 },
        { id: 15, title: 'Uploading images for analysis', views: 2340, helpful: 94 },
        { id: 16, title: 'Understanding AI responses', views: 1890, helpful: 92 }
      ]
    }
  ];

  const faqs = [
    {
      question: 'How accurate is the weather forecast?',
      answer: 'Our weather forecasts are powered by leading meteorological services and have an accuracy rate of 85-95% for 7-day forecasts. Local conditions are updated every 6 hours.'
    },
    {
      question: 'Can I use Agrid AI offline?',
      answer: 'Currently, Agrid AI requires an internet connection for most features. However, we are working on offline mode that will allow you to access basic features and sync when connected.'
    },
    {
      question: 'How does the AI pest detector work?',
      answer: 'Our AI pest detector uses advanced machine learning models trained on thousands of pest images. Simply upload a clear photo of the affected plant, and our AI will identify the pest and suggest treatments.'
    },
    {
      question: 'Is my farm data secure?',
      answer: 'Yes! We use bank-level encryption to protect your data. Your information is stored securely and never shared with third parties without your explicit consent.'
    },
    {
      question: 'Can I export my data?',
      answer: 'Absolutely! You can export your financial records, crop data, and activity logs in CSV or PDF format from the respective sections.'
    }
  ];

  const quickLinks = [
    { title: 'Video Tutorials', icon: Video, count: '24 videos', color: 'red' },
    { title: 'Community Forum', icon: MessageCircle, count: '1.2K discussions', color: 'blue' },
    { title: 'API Documentation', icon: FileText, count: 'For developers', color: 'purple' },
    { title: 'Contact Support', icon: Mail, count: '24/7 available', color: 'emerald' }
  ];

  const handleSubmitContact = () => {
    alert('Support ticket submitted! We\'ll respond within 24 hours.');
    setShowContactForm(false);
    setContactForm({ subject: '', message: '', email: '' });
  };

  return (
    <div className="p-4 md:p-6 space-y-6">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4">How can we help you?</h1>
        <p className="text-gray-400 mb-8">Search our knowledge base or browse categories below</p>
        
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for help articles..."
            className="w-full pl-14 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {quickLinks.map((link, i) => (
          <button
            key={i}
            className={`p-6 bg-gradient-to-br from-${link.color}-500/20 to-${link.color}-500/10 border border-${link.color}-500/30 rounded-2xl hover:scale-105 transition-all text-left group`}
          >
            <link.icon className={`w-8 h-8 text-${link.color}-400 mb-3`} />
            <h3 className="text-white font-bold mb-1">{link.title}</h3>
            <p className="text-gray-400 text-sm">{link.count}</p>
          </button>
        ))}
      </div>

      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-6">Browse by Category</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map(category => {
            const CategoryIcon = category.icon;
            return (
              <div
                key={category.id}
                onClick={() => setSelectedCategory(category)}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:border-emerald-500/30 transition-all cursor-pointer group"
              >
                <div className={`p-3 bg-${category.color}-500/20 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform`}>
                  <CategoryIcon className={`w-6 h-6 text-${category.color}-400`} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {category.articles.length} articles
                </p>
                <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium">
                  <span>View articles</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 group"
            >
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                <ChevronRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform" />
              </summary>
              <p className="text-gray-300 mt-4 leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 rounded-2xl p-8">
        <div className="text-center">
          <MessageCircle className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">Still need help?</h2>
          <p className="text-gray-300 mb-6">Our support team is here to assist you</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowContactForm(true)}
              className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl text-white font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all flex items-center gap-2 justify-center"
            >
              <Mail className="w-5 h-5" />
              Contact Support
            </button>
            <button className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl text-white font-semibold hover:bg-white/20 transition-all flex items-center gap-2 justify-center">
              <Phone className="w-5 h-5" />
              Call Us
            </button>
          </div>
          <div className="mt-6 flex items-center justify-center gap-2 text-gray-400 text-sm">
            <Clock className="w-4 h-4" />
            <span>Average response time: 2 hours</span>
          </div>
        </div>
      </div>

      {selectedCategory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
             onClick={() => setSelectedCategory(null)}>
          <div className="bg-gray-900 rounded-2xl border border-white/10 max-w-3xl w-full max-h-[90vh] overflow-y-auto"
               onClick={(e) => e.stopPropagation()}>
            <div className="p-6 border-b border-white/10 flex items-center justify-between sticky top-0 bg-gray-900 z-10">
              <div className="flex items-center gap-3">
                <div className={`p-3 bg-${selectedCategory.color}-500/20 rounded-xl`}>
                  <selectedCategory.icon className={`w-6 h-6 text-${selectedCategory.color}-400`} />
                </div>
                <h2 className="text-2xl font-bold text-white">{selectedCategory.name}</h2>
              </div>
              <button onClick={() => setSelectedCategory(null)} className="p-2 rounded-lg hover:bg-white/10 text-gray-400">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-3">
              {selectedCategory.articles.map(article => (
                <button
                  key={article.id}
                  className="w-full flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all text-left group"
                >
                  <div className="flex-1">
                    <h3 className="text-white font-semibold mb-2 group-hover:text-emerald-400 transition-colors">
                      {article.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span>{article.views} views</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <CheckCircle className="w-4 h-4 text-emerald-400" />
                        {article.helpful}% helpful
                      </span>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {showContactForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
             onClick={() => setShowContactForm(false)}>
          <div className="bg-gray-900 rounded-2xl border border-white/10 max-w-md w-full"
               onClick={(e) => e.stopPropagation()}>
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Contact Support</h2>
              <button onClick={() => setShowContactForm(false)} className="p-2 rounded-lg hover:bg-white/10 text-gray-400">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  value={contactForm.subject}
                  onChange={(e) => setContactForm({...contactForm, subject: e.target.value})}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  value={contactForm.message}
                  onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
                  placeholder="Describe your issue..."
                />
              </div>
              <div className="flex gap-3 pt-4">
                <button
                  onClick={() => setShowContactForm(false)}
                  className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-gray-400 hover:bg-white/10 transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmitContact}
                  className="flex-1 px-4 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl text-white hover:from-emerald-600 hover:to-teal-600 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}