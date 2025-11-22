'use client'
import React from 'react';
import { 
  Cloud, CheckCircle, AlertTriangle, Activity, Sun, TrendingUp, 
  Droplets, ChevronRight
} from 'lucide-react';

export default function DashboardContent() {
  const alerts = [
    { type: 'warning', message: 'Heavy rainfall expected tomorrow', icon: Cloud },
    { type: 'success', message: 'Optimal planting conditions detected', icon: CheckCircle },
    { type: 'info', message: 'Fertilizer application recommended', icon: AlertTriangle }
  ];

  const quickStats = [
    { label: 'Soil Health', value: '8.7/10', change: '+0.3', icon: Activity, color: 'emerald' },
    { label: 'Weather', value: '24°C', change: 'Sunny', icon: Sun, color: 'yellow' },
    { label: 'Yield Forecast', value: '+12%', change: 'Above avg', icon: TrendingUp, color: 'blue' },
    { label: 'Water Usage', value: '1,240L', change: '-5%', icon: Droplets, color: 'cyan' }
  ];

  const recentActivity = [
    { action: 'Soil analysis completed', time: '2 hours ago', icon: Activity },
    { action: 'Weather alert received', time: '5 hours ago', icon: Cloud },
    { action: 'Market price updated', time: '1 day ago', icon: TrendingUp }
  ];

  const quickActions = [
    { icon: Cloud, label: 'Check Weather', color: 'blue', href: '/protected/weather' },
    { icon: Activity, label: 'Ask AI Assistant', color: 'emerald', href: '/protected/assistant' },
    { icon: TrendingUp, label: 'View Market', color: 'yellow', href: '/protected/market' },
    { icon: CheckCircle, label: 'Crop Calendar', color: 'purple', href: '/protected/calendar' }
  ];

  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* Alerts Section */}
      <div className="grid gap-4">
        {alerts.map((alert, i) => (
          <div key={i} className={`flex items-center gap-4 p-4 rounded-xl border backdrop-blur-sm transition-all hover:scale-[1.01] cursor-pointer ${
            alert.type === 'warning' ? 'bg-yellow-500/10 border-yellow-500/30' :
            alert.type === 'success' ? 'bg-emerald-500/10 border-emerald-500/30' :
            'bg-blue-500/10 border-blue-500/30'
          }`}>
            <alert.icon className={`w-6 h-6 ${
              alert.type === 'warning' ? 'text-yellow-400' :
              alert.type === 'success' ? 'text-emerald-400' :
              'text-blue-400'
            }`} />
            <p className="flex-1 text-white">{alert.message}</p>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        ))}
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {quickStats.map((stat, i) => (
          <div key={i} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:border-emerald-500/30 transition-all">
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-xl bg-${stat.color}-500/20`}>
                <stat.icon className={`w-6 h-6 text-${stat.color}-400`} />
              </div>
              <span className="text-xs text-emerald-400 bg-emerald-500/20 px-2 py-1 rounded-full">{stat.change}</span>
            </div>
            <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
            <p className="text-2xl font-bold text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Crop Performance */}
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white">Crop Performance Trends</h2>
            <button className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors">Last 30 Days</button>
          </div>
          <div className="space-y-4">
            {['Corn Yield', 'Tomato Yield'].map((crop, i) => (
              <div key={i}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">{crop}</span>
                  <span className="text-sm text-white font-medium">{85 - i * 10}%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transition-all duration-500"
                    style={{ width: `${85 - i * 10}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 h-40 flex items-end justify-between gap-2">
            {[...Array(12)].map((_, i) => (
              <div 
                key={i} 
                className="flex-1 bg-gradient-to-t from-emerald-500 to-teal-500 rounded-t-lg opacity-70 hover:opacity-100 transition-all cursor-pointer" 
                style={{ height: `${Math.random() * 100}%` }}
              ></div>
            ))}
          </div>
        </div>

        {/* Field Distribution */}
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white">Field Distribution</h2>
            <button className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors">Explore Statistics</button>
          </div>
          <div className="flex items-center justify-center h-48">
            <div className="relative w-48 h-48">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="96" cy="96" r="80" stroke="#1f2937" strokeWidth="32" fill="none" />
                <circle cx="96" cy="96" r="80" stroke="url(#gradient)" strokeWidth="32" fill="none" strokeDasharray="502" strokeDashoffset="125" className="transition-all duration-500" />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#14b8a6" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">75%</p>
                  <p className="text-sm text-gray-400">In Use</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="text-center p-4 bg-emerald-500/10 rounded-xl border border-emerald-500/30">
              <p className="text-2xl font-bold text-emerald-400">7.5 ha</p>
              <p className="text-xs text-gray-400 mt-1">Active Fields</p>
            </div>
            <div className="text-center p-4 bg-teal-500/10 rounded-xl border border-teal-500/30">
              <p className="text-2xl font-bold text-teal-400">2.5 ha</p>
              <p className="text-xs text-gray-400 mt-1">Fallow Land</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity & Quick Actions */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
          <h2 className="text-xl font-bold text-white mb-6">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all cursor-pointer">
                <div className="p-2 rounded-lg bg-emerald-500/20">
                  <item.icon className="w-5 h-5 text-emerald-400" />
                </div>
                <div className="flex-1">
                  <p className="text-white text-sm">{item.action}</p>
                  <p className="text-gray-400 text-xs">{item.time}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
          <h2 className="text-xl font-bold text-white mb-6">Quick Actions</h2>
          <div className="space-y-3">
            {quickActions.map((action, i) => (
              <a 
                key={i} 
                href={action.href}
                className={`w-full p-4 rounded-xl bg-${action.color}-500/10 border border-${action.color}-500/30 hover:bg-${action.color}-500/20 transition-all flex items-center gap-3 text-left group`}
              >
                <action.icon className={`w-5 h-5 text-${action.color}-400`} />
                <span className="text-white text-sm font-medium">{action.label}</span>
                <ChevronRight className="w-4 h-4 text-gray-400 ml-auto group-hover:translate-x-1 transition-transform" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* AI Insights Card */}
      <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 backdrop-blur-sm rounded-2xl border border-emerald-500/30 p-6">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl">
            <Activity className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-white mb-2">AI Recommendation</h3>
            <p className="text-gray-300 mb-4">
              Based on current weather patterns and soil conditions, this is an optimal time to apply organic fertilizer to your maize crops. Expected yield improvement: 8-12%.
            </p>
            <button className="px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-lg text-emerald-400 hover:bg-emerald-500/30 transition-all text-sm font-medium">
              View Full Analysis
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}