'use client'
import React, { useState } from 'react';
import { 
  Leaf, Menu, X, Home, Sprout, Cloud, TrendingUp, MessageSquare, 
  Users, BookOpen, Calendar, Bug, DollarSign, Settings, Bell, 
  Search, User, LogOut, CloudRain, Wind, Droplets, Sun, 
  Eye, Gauge, CloudSnow, CloudDrizzle, CloudLightning, MapPin,
  ChevronRight, ArrowUp, ArrowDown, Thermometer
} from 'lucide-react';

// Protected Layout Component with Fixed Sidebar
function ProtectedLayout({ children, activePage = 'dashboard' }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const userData = {
    name: 'John Doe',
    primaryCrop: 'Maize/Corn',
    farmSize: '10 hectares',
    location: 'Lagos, Nigeria',
    initials: 'JD'
  };

  const menuItems = [
    { icon: Home, label: 'Dashboard', href: '/dashboard', id: 'dashboard' },
    { icon: Sprout, label: 'My Crops', href: '/crops', id: 'crops' },
    { icon: Cloud, label: 'Weather', href: '/weather', id: 'weather' },
    { icon: TrendingUp, label: 'Market Prices', href: '/market', id: 'market' },
    { icon: MessageSquare, label: 'AI Assistant', href: '/assistant', id: 'assistant' },
    { icon: Users, label: 'Community', href: '/community', id: 'community' },
    { icon: BookOpen, label: 'Resources', href: '/resources', id: 'resources' },
    { icon: Calendar, label: 'Crop Calendar', href: '/calendar', id: 'calendar' },
    { icon: Bug, label: 'Pest Detector', href: '/pest-detector', id: 'pest-detector' },
    { icon: DollarSign, label: 'Financial', href: '/financial', id: 'financial' },
    { icon: Settings, label: 'Settings', href: '/settings', id: 'settings' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-emerald-950 to-gray-950">
      {/* Desktop Sidebar */}
      <aside className={`fixed top-0 left-0 h-screen bg-gradient-to-b from-emerald-950/90 to-gray-950/90 backdrop-blur-xl border-r border-white/10 transition-all duration-300 z-40 ${
        sidebarOpen ? 'w-64' : 'w-20'
      } hidden lg:block overflow-hidden`}>
        <div className="flex flex-col h-full p-4">
          {/* Logo */}
          <div className={`flex items-center mb-8 transition-all duration-300 ${sidebarOpen ? 'gap-3' : 'justify-center'}`}>
            <div className="bg-gradient-to-br from-emerald-400 to-teal-500 p-2 rounded-lg flex-shrink-0">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <span className={`text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent whitespace-nowrap transition-all duration-300 ${
              sidebarOpen ? 'opacity-100 w-auto' : 'opacity-0 w-0 overflow-hidden'
            }`}>
              Agrid AI
            </span>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 space-y-2 overflow-y-auto">
            {menuItems.map((item, i) => (
              <a
                key={i}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all group relative ${
                  activePage === item.id
                    ? 'bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-400 border border-emerald-500/30'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                } ${!sidebarOpen && 'justify-center'}`}
                title={!sidebarOpen ? item.label : ''}
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                <span className={`text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  sidebarOpen ? 'opacity-100 w-auto' : 'opacity-0 w-0 overflow-hidden'
                }`}>
                  {item.label}
                </span>
                
                {/* Tooltip for collapsed sidebar */}
                {!sidebarOpen && (
                  <div className="absolute left-full ml-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50">
                    {item.label}
                  </div>
                )}
              </a>
            ))}
          </nav>

          {/* Toggle Button */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className={`mt-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all flex items-center justify-center ${
              !sidebarOpen && 'w-12 h-12'
            }`}
            title={sidebarOpen ? 'Collapse sidebar' : 'Expand sidebar'}
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* User Profile */}
          <div className={`mt-4 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all cursor-pointer ${
            !sidebarOpen && 'flex justify-center'
          }`}>
            <div className={`flex items-center transition-all duration-300 ${sidebarOpen ? 'gap-3' : 'justify-center'}`}>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                {userData.initials}
              </div>
              <div className={`flex-1 min-w-0 transition-all duration-300 ${
                sidebarOpen ? 'opacity-100 w-auto' : 'opacity-0 w-0 overflow-hidden'
              }`}>
                <p className="text-sm font-medium text-white truncate">{userData.name}</p>
                <p className="text-xs text-gray-400 truncate">{userData.location}</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Sidebar */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)}></div>
          <aside className="absolute top-0 left-0 h-screen w-64 bg-gradient-to-b from-emerald-950 to-gray-950 border-r border-white/10 p-4">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-br from-emerald-400 to-teal-500 p-2 rounded-lg">
                    <Leaf className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                    Agrid AI
                  </span>
                </div>
                <button onClick={() => setMobileMenuOpen(false)}>
                  <X className="w-6 h-6 text-gray-400" />
                </button>
              </div>

              <nav className="flex-1 space-y-2 overflow-y-auto">
                {menuItems.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                      activePage === item.id
                        ? 'bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-400 border border-emerald-500/30'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </a>
                ))}
              </nav>

              <button className="mt-4 flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 transition-all w-full">
                <LogOut className="w-5 h-5" />
                <span className="text-sm font-medium">Logout</span>
              </button>
            </div>
          </aside>
        </div>
      )}

      {/* Main Content */}
      <main className={`transition-all duration-300 ${sidebarOpen ? 'lg:ml-64' : 'lg:ml-20'} min-h-screen flex flex-col`}>
        <header className="sticky top-0 z-30 bg-gray-950/80 backdrop-blur-xl border-b border-white/10">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 rounded-lg hover:bg-white/10 text-gray-400"
              >
                <Menu className="w-6 h-6" />
              </button>
              
              <div>
                <h1 className="text-xl font-bold text-white">Welcome back, {userData.name.split(' ')[0]}!</h1>
                <p className="text-sm text-gray-400">{userData.primaryCrop} • {userData.farmSize}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 w-64"
                />
              </div>

              <button className="relative p-2 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-all">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              <button className="p-2 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-all">
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </div>
        </header>

        <div className="flex-1 pb-20 lg:pb-0">
          {children}
        </div>
      </main>

      {/* Mobile Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 bg-gray-950/90 backdrop-blur-xl border-t border-white/10 lg:hidden z-40">
        <div className="flex items-center justify-around p-4">
          {[
            { icon: Home, label: 'Home', href: '/dashboard', id: 'dashboard' },
            { icon: Sprout, label: 'Crops', href: '/crops', id: 'crops' },
            { icon: MessageSquare, label: 'AI', href: '/assistant', id: 'assistant' },
            { icon: User, label: 'Profile', href: '/settings', id: 'settings' }
          ].map((item, i) => (
            <a key={i} href={item.href} className="flex flex-col items-center gap-1">
              <item.icon className={`w-6 h-6 ${activePage === item.id ? 'text-emerald-400' : 'text-gray-400'}`} />
              <span className={`text-xs ${activePage === item.id ? 'text-emerald-400' : 'text-gray-400'}`}>{item.label}</span>
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
}

// Weather Page Content
function WeatherContent() {
  const [selectedDay, setSelectedDay] = useState(0);

  const currentWeather = {
    temp: 28,
    condition: 'Partly Cloudy',
    icon: Cloud,
    feelsLike: 31,
    humidity: 65,
    windSpeed: 12,
    visibility: 10,
    pressure: 1013,
    uvIndex: 7,
    sunrise: '06:15 AM',
    sunset: '06:45 PM'
  };

  const hourlyForecast = [
    { time: '12 PM', temp: 28, icon: Sun, rain: 10 },
    { time: '1 PM', temp: 29, icon: Sun, rain: 10 },
    { time: '2 PM', temp: 30, icon: Cloud, rain: 20 },
    { time: '3 PM', temp: 29, icon: Cloud, rain: 30 },
    { time: '4 PM', temp: 28, icon: CloudRain, rain: 60 },
    { time: '5 PM', temp: 27, icon: CloudRain, rain: 70 },
    { time: '6 PM', temp: 26, icon: CloudDrizzle, rain: 40 },
    { time: '7 PM', temp: 25, icon: Cloud, rain: 20 }
  ];

  const weekForecast = [
    { day: 'Today', high: 30, low: 24, icon: Cloud, rain: 40 },
    { day: 'Tomorrow', high: 29, low: 23, icon: CloudRain, rain: 70 },
    { day: 'Wed', high: 28, low: 22, icon: CloudRain, rain: 80 },
    { day: 'Thu', high: 27, low: 21, icon: CloudDrizzle, rain: 60 },
    { day: 'Fri', high: 29, low: 23, icon: Cloud, rain: 30 },
    { day: 'Sat', high: 30, low: 24, icon: Sun, rain: 10 },
    { day: 'Sun', high: 31, low: 25, icon: Sun, rain: 5 }
  ];

  const farmingAdvice = [
    { title: 'Optimal Planting', advice: 'Good conditions for planting in the next 3 days', icon: Sprout, color: 'emerald' },
    { title: 'Irrigation Alert', advice: 'Heavy rain expected tomorrow. Reduce watering', icon: Droplets, color: 'blue' },
    { title: 'Pest Risk', advice: 'High humidity may increase pest activity', icon: Bug, color: 'red' }
  ];

  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* Location Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Weather Forecast</h1>
          <div className="flex items-center gap-2 text-gray-400">
            <MapPin className="w-4 h-4" />
            <span>Lagos, Nigeria</span>
          </div>
        </div>
        <button className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all">
          Change Location
        </button>
      </div>

      {/* Current Weather Card */}
      <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-3xl border border-blue-500/30 p-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-4">
              <currentWeather.icon className="w-20 h-20 text-blue-400" />
              <div>
                <p className="text-6xl font-bold text-white">{currentWeather.temp}°C</p>
                <p className="text-xl text-gray-300">{currentWeather.condition}</p>
              </div>
            </div>
            <p className="text-gray-400">Feels like {currentWeather.feelsLike}°C</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Droplets, label: 'Humidity', value: `${currentWeather.humidity}%` },
              { icon: Wind, label: 'Wind Speed', value: `${currentWeather.windSpeed} km/h` },
              { icon: Eye, label: 'Visibility', value: `${currentWeather.visibility} km` },
              { icon: Gauge, label: 'Pressure', value: `${currentWeather.pressure} mb` }
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <item.icon className="w-5 h-5 text-blue-400 mb-2" />
                <p className="text-xs text-gray-400">{item.label}</p>
                <p className="text-lg font-bold text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 flex items-center gap-3">
            <ArrowUp className="w-6 h-6 text-yellow-400" />
            <div>
              <p className="text-xs text-gray-400">Sunrise</p>
              <p className="text-lg font-bold text-white">{currentWeather.sunrise}</p>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 flex items-center gap-3">
            <ArrowDown className="w-6 h-6 text-orange-400" />
            <div>
              <p className="text-xs text-gray-400">Sunset</p>
              <p className="text-lg font-bold text-white">{currentWeather.sunset}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hourly Forecast */}
      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
        <h2 className="text-xl font-bold text-white mb-6">Hourly Forecast</h2>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4 overflow-x-auto">
          {hourlyForecast.map((hour, i) => (
            <div key={i} className="flex flex-col items-center gap-2 p-4 bg-white/5 rounded-xl border border-white/10 min-w-[80px]">
              <p className="text-sm text-gray-400">{hour.time}</p>
              <hour.icon className="w-8 h-8 text-blue-400" />
              <p className="text-lg font-bold text-white">{hour.temp}°</p>
              <div className="flex items-center gap-1">
                <Droplets className="w-3 h-3 text-blue-400" />
                <p className="text-xs text-gray-400">{hour.rain}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 7-Day Forecast */}
      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
        <h2 className="text-xl font-bold text-white mb-6">7-Day Forecast</h2>
        <div className="space-y-3">
          {weekForecast.map((day, i) => (
            <div 
              key={i}
              onClick={() => setSelectedDay(i)}
              className={`flex items-center justify-between p-4 rounded-xl transition-all cursor-pointer ${
                selectedDay === i 
                  ? 'bg-emerald-500/20 border-2 border-emerald-500/50' 
                  : 'bg-white/5 border border-white/10 hover:bg-white/10'
              }`}
            >
              <p className="text-white font-medium w-20">{day.day}</p>
              <day.icon className="w-6 h-6 text-blue-400" />
              <div className="flex items-center gap-2">
                <Droplets className="w-4 h-4 text-blue-400" />
                <p className="text-sm text-gray-400 w-12">{day.rain}%</p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-white font-medium">{day.high}°</p>
                <p className="text-gray-400">/</p>
                <p className="text-gray-400">{day.low}°</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Farming Advice */}
      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
        <h2 className="text-xl font-bold text-white mb-6">Farming Recommendations</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {farmingAdvice.map((item, i) => (
            <div key={i} className={`p-6 rounded-xl bg-${item.color}-500/10 border border-${item.color}-500/30`}>
              <item.icon className={`w-8 h-8 text-${item.color}-400 mb-3`} />
              <h3 className="text-white font-bold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.advice}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Main Weather Page
export default function WeatherPage() {
  return (
    <ProtectedLayout activePage="weather">
      <WeatherContent />
    </ProtectedLayout>
  );
}