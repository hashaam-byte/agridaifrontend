'use client'
import React, { useState } from 'react';
import { Leaf, Cloud, TrendingUp, MessageSquare, Users, ChevronRight, Menu, X, Check, Globe, Lightbulb, AlertTriangle } from 'lucide-react';

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-green-900 to-teal-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full backdrop-blur-md bg-black/30 border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-br from-emerald-400 to-teal-500 p-2 rounded-lg">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">Agrid AI</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="hover:text-emerald-400 transition">Features</a>
              <a href="#how-it-works" className="hover:text-emerald-400 transition">How It Works</a>
              <a href="#team" className="hover:text-emerald-400 transition">Team</a>
              <a href="/auth/login" className="px-4 py-2 rounded-lg border border-white/20 hover:bg-white/10 transition">Login</a>
              <a href="/auth/register" className="px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 transition">Get Started</a>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-white/10">
            <div className="px-4 py-4 space-y-4">
              <a href="#features" className="block hover:text-emerald-400">Features</a>
              <a href="#how-it-works" className="block hover:text-emerald-400">How It Works</a>
              <a href="#team" className="block hover:text-emerald-400">Team</a>
              <a href="/auth/login" className="block px-4 py-2 rounded-lg border border-white/20 text-center">Login</a>
              <a href="/auth/register" className="block px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-center">Get Started</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-emerald-500/20 rounded-full border border-emerald-500/30">
            <span className="text-emerald-400 text-sm font-semibold">AI-Powered Farming Intelligence</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-teal-300 to-lime-400 bg-clip-text text-transparent">
            Empower Your Farm With AI Intelligence
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Smarter farming through AI-driven weather, soil, and crop insights. Make data-backed decisions to maximize yield and minimize losses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/register" className="px-8 py-4 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 transition flex items-center justify-center gap-2 text-lg font-semibold">
              Start Free Trial <ChevronRight className="w-5 h-5" />
            </a>
            <a href="#how-it-works" className="px-8 py-4 rounded-lg border border-white/20 hover:bg-white/10 transition text-lg font-semibold">
              Learn More
            </a>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
            {[
              { label: 'Active Farmers', value: '50K+' },
              { label: 'Countries', value: '25+' },
              { label: 'Crops Monitored', value: '100+' },
              { label: 'Accuracy', value: '95%' }
            ].map((stat, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <div className="text-3xl font-bold text-emerald-400">{stat.value}</div>
                <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section id="problems" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              The <span className="text-emerald-400">Problem</span>
            </h2>
            <p className="text-gray-400 text-lg">Modern farmers face increasing challenges</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: <Cloud className="w-8 h-8" />, title: 'Unpredictable weather', desc: 'disrupts crop yields.' },
              { icon: <TrendingUp className="w-8 h-8" />, title: 'Uninformed decisions', desc: 'lead to low yields and income losses.' },
              { icon: <Leaf className="w-8 h-8" />, title: 'Poor farming techniques', desc: 'lead to low output and high losses.' },
              { icon: <AlertTriangle className="w-8 h-8" />, title: 'Rural farmers lack access', desc: 'to real-time agricultural data.' }
            ].map((problem, i) => (
              <div key={i} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-emerald-500/50 transition">
                <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                  {problem.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{problem.title}</h3>
                <p className="text-gray-400">{problem.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              The <span className="text-emerald-400">Solution</span>
            </h2>
            <p className="text-gray-400 text-lg">Agrid AI empowers farmers with AI-driven insights for smarter, data-backed farming</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: <Cloud className="w-8 h-8" />, title: 'Real-time weather forecasts', desc: 'accurate, local, and reliable.' },
              { icon: <Leaf className="w-8 h-8" />, title: 'Real time environmental', desc: 'and ecological data' },
              { icon: <TrendingUp className="w-8 h-8" />, title: 'Crop recommendations', desc: 'AI picks what grows best for you.' },
              { icon: <MessageSquare className="w-8 h-8" />, title: 'AI assistant', desc: 'your smart farming advisor on demand.' }
            ].map((solution, i) => (
              <div key={i} className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/30 hover:border-emerald-500/60 transition">
                <div className="bg-gradient-to-br from-emerald-500/30 to-teal-500/30 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{solution.title}</h3>
                <p className="text-gray-400">{solution.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              How It <span className="text-emerald-400">Works</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { step: '1', icon: <Leaf className="w-6 h-6" />, title: 'Farmer Input' },
              { step: '2', icon: <Cloud className="w-6 h-6" />, title: 'AI Data Connection' },
              { step: '3', icon: <TrendingUp className="w-6 h-6" />, title: 'Smart Analysis' },
              { step: '4', icon: <MessageSquare className="w-6 h-6" />, title: 'Recommendations' },
              { step: '5', icon: <AlertTriangle className="w-6 h-6" />, title: 'Results & Alerts' }
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="bg-gradient-to-br from-emerald-500 to-teal-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {step.icon}
                </div>
                <div className="text-2xl font-bold text-emerald-400 mb-2">{step.step}</div>
                <h3 className="font-semibold">{step.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Market <span className="text-emerald-400">Opportunity</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Globe className="w-8 h-8" />, title: 'Agriculture drives over 20% of GDP', desc: 'in many developing nations.' },
              { icon: <TrendingUp className="w-8 h-8" />, title: 'The precision agriculture market', desc: 'exceeds $15 billion and keeps growing fast.' },
              { icon: <Users className="w-8 h-8" />, title: 'Over 500 million small farmers', desc: 'still lack access to AI technology.' },
              { icon: <Lightbulb className="w-8 h-8" />, title: 'Agrid AI bridges the gap', desc: 'between advanced AI and everyday farming.' }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="text-emerald-400 mb-4">{item.icon}</div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Advantage */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Competitive <span className="text-emerald-400">Advantage</span>
            </h2>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-6">Feature</th>
                  <th className="text-center py-4 px-6">Agrid AI</th>
                  <th className="text-center py-4 px-6">Others</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'AI-Powered Crop Forecasting', agrid: true, others: false },
                  { feature: 'Soil + Weather Integration', agrid: true, others: 'partial' },
                  { feature: 'Chat-based AI Assistant', agrid: true, others: false },
                  { feature: 'Offline Support (planned)', agrid: 'planned', others: false },
                  { feature: 'Affordable Access', agrid: true, others: false }
                ].map((row, i) => (
                  <tr key={i} className="border-b border-white/10">
                    <td className="py-4 px-6">{row.feature}</td>
                    <td className="text-center py-4 px-6">
                      {row.agrid === true && <Check className="w-6 h-6 text-emerald-400 mx-auto" />}
                      {row.agrid === 'planned' && <span className="text-blue-400 text-sm">Planned</span>}
                      {row.agrid === 'partial' && <AlertTriangle className="w-6 h-6 text-yellow-400 mx-auto" />}
                    </td>
                    <td className="text-center py-4 px-6">
                      {row.others === true && <Check className="w-6 h-6 text-emerald-400 mx-auto" />}
                      {row.others === false && <X className="w-6 h-6 text-red-400 mx-auto" />}
                      {row.others === 'partial' && <AlertTriangle className="w-6 h-6 text-yellow-400 mx-auto" />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              The <span className="text-emerald-400">Team</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { name: 'Bello Samuel', role: 'Team Lead' },
              { name: 'Idele Joshua', role: 'Backend Developer' },
              { name: 'Hashaam Mustafa', role: 'Frontend Developer' },
              { name: 'Obhahie Praise', role: 'Designer' }
            ].map((member, i) => (
              <div key={i} className="bg-white/5 bsackdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center hover:border-emerald-500/50 transition">
                <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-gray-400 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Farm?
          </h2>
          <p className="text-xl mb-8 text-emerald-50">
            Join thousands of farmers already using AI to maximize their yields
          </p>
          <a href="/register" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-white text-emerald-600 hover:bg-gray-100 transition text-lg font-semibold">
            Get Started Free <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-black/40 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="bg-gradient-to-br from-emerald-400 to-teal-500 p-2 rounded-lg">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold">Agrid AI</span>
          </div>
          <p className="text-gray-400 text-sm">© 2025 Agrid AI. Empowering farmers with intelligence.</p>
        </div>
      </footer>
    </div>
  );
}