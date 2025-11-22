'use client'
import React, { useState, useRef, useEffect } from 'react';
import { 
  Leaf, Menu, X, Home, Sprout, Cloud, TrendingUp, MessageSquare, 
  Users, BookOpen, Calendar, Bug, DollarSign, Settings, Bell, 
  Search, User, LogOut, ChevronLeft, ChevronRight, CheckCheck,
  Mail, AlertCircle, Package
} from 'lucide-react';

export default function ProtectedLayout({ children, activePage = 'dashboard' }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notificationDropdownOpen, setNotificationDropdownOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const notificationRef = useRef(null);
  const userDropdownRef = useRef(null);

  // Mock user data
  const userData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    primaryCrop: 'Maize/Corn',
    farmSize: '10 hectares',
    location: 'Lagos, Nigeria',
    experience: '3-5 years',
    initials: 'JD'
  };

  // Mock notifications
  const notifications = [
    {
      id: 1,
      title: 'Weather Alert',
      message: 'Heavy rain expected in your area tomorrow',
      time: '5 min ago',
      icon: Cloud,
      unread: true
    },
    {
      id: 2,
      title: 'Market Update',
      message: 'Maize prices increased by 12%',
      time: '1 hour ago',
      icon: TrendingUp,
      unread: true
    },
    {
      id: 3,
      title: 'Pest Alert',
      message: 'Fall armyworm detected in nearby farms',
      time: '3 hours ago',
      icon: Bug,
      unread: false
    },
    {
      id: 4,
      title: 'Community Post',
      message: 'New farming technique shared by AgriExpert',
      time: '1 day ago',
      icon: Users,
      unread: false
    }
  ];

  const menuItems = [
    { icon: Home, label: 'Dashboard', href: '/protected/dashboard', id: 'dashboard' },
    { icon: Sprout, label: 'My Crops', href: '/protected/crops', id: 'crops' },
    { icon: Cloud, label: 'Weather', href: '/protected/weather', id: 'weather' },
    { icon: TrendingUp, label: 'Market Prices', href: '/protected/market', id: 'market' },
    { icon: MessageSquare, label: 'AI Assistant', href: '/protected/assistant', id: 'assistant' },
    { icon: Users, label: 'Community', href: '/protected/community', id: 'community' },
    { icon: BookOpen, label: 'Resources', href: '/protected/resources', id: 'resources' },
    { icon: Calendar, label: 'Crop Calendar', href: '/protected/calendar', id: 'calendar' },
    { icon: Bug, label: 'Pest Detector', href: '/protected/pest-detector', id: 'pest-detector' },
    { icon: DollarSign, label: 'Financial', href: '/protected/financial', id: 'financial' },
    { icon: Settings, label: 'Settings', href: '/protected/settings', id: 'settings' }
  ];

  const mobileBottomNavItems = [
    { icon: Home, label: 'Home', href: '/protected/dashboard', id: 'dashboard' },
    { icon: Sprout, label: 'Crops', href: '/protected/crops', id: 'crops' },
    { icon: MessageSquare, label: 'AI', href: '/protected/assistant', id: 'assistant' },
    { icon: User, label: 'Profile', href: '/protected/settings', id: 'settings' }
  ];

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setNotificationDropdownOpen(false);
      }
      if (userDropdownRef.current && !userDropdownRef.current.contains(event.target)) {
        setUserDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-emerald-950 to-gray-950">
      {/* Desktop Sidebar */}
      <aside className={`fixed top-0 left-0 h-screen bg-gradient-to-b from-emerald-950/95 to-gray-950/95 backdrop-blur-xl border-r border-white/10 transition-all duration-300 z-40 hidden lg:block ${
        sidebarOpen ? 'w-64' : 'w-20'
      }`}>
        <div className="flex flex-col h-full">
          {/* Logo Section */}
          <div className={`flex items-center ${sidebarOpen ? 'justify-between' : 'justify-center'} p-4 border-b border-white/10`}>
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-emerald-400 to-teal-500 p-2 rounded-lg flex-shrink-0">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              {sidebarOpen && (
                <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent whitespace-nowrap">
                  Agrid AI
                </span>
              )}
            </div>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 p-4 space-y-2 overflow-y-auto scrollbar-thin scrollbar-thumb-emerald-500/20 scrollbar-track-transparent">
            {menuItems.map((item, i) => (
              <a
                key={i}
                href={item.href}
                title={!sidebarOpen ? item.label : ''}
                className={`flex items-center ${sidebarOpen ? 'gap-3 px-4' : 'justify-center px-3'} py-3 rounded-xl transition-all group ${
                  activePage === item.id
                    ? 'bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-400 border border-emerald-500/30'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                {sidebarOpen && (
                  <span className="text-sm font-medium whitespace-nowrap">{item.label}</span>
                )}
              </a>
            ))}
          </nav>

          {/* User Profile Section */}
          <div className="p-4 border-t border-white/10">
            <div className={`p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all cursor-pointer ${!sidebarOpen && 'flex justify-center'}`}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                  {userData.initials}
                </div>
                {sidebarOpen && (
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-white truncate">{userData.name}</p>
                    <p className="text-xs text-gray-400 truncate">{userData.location}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Toggle Button */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="mt-3 w-full p-3 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all flex items-center justify-center"
              title={sidebarOpen ? 'Collapse sidebar' : 'Expand sidebar'}
            >
              {sidebarOpen ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile Sidebar Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)}></div>
          <aside className="absolute top-0 left-0 h-screen w-64 bg-gradient-to-b from-emerald-950 to-gray-950 border-r border-white/10">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b border-white/10">
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

              <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
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

              <div className="p-4 border-t border-white/10">
                <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 transition-all w-full">
                  <LogOut className="w-5 h-5" />
                  <span className="text-sm font-medium">Logout</span>
                </button>
              </div>
            </div>
          </aside>
        </div>
      )}

      {/* Main Content Area */}
      <main className={`transition-all duration-300 ${sidebarOpen ? 'lg:ml-64' : 'lg:ml-20'} min-h-screen flex flex-col`}>
        {/* Top Bar */}
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
              {/* Search Bar - Desktop */}
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 w-64"
                />
              </div>

              {/* Notifications Dropdown */}
              <div className="relative" ref={notificationRef}>
                <button 
                  onClick={() => {
                    setNotificationDropdownOpen(!notificationDropdownOpen);
                    setUserDropdownOpen(false);
                  }}
                  className="relative p-2 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-all"
                >
                  <Bell className="w-5 h-5" />
                  {unreadCount > 0 && (
                    <span className="absolute top-1 right-1 w-5 h-5 bg-red-500 rounded-full text-white text-xs flex items-center justify-center font-bold">
                      {unreadCount}
                    </span>
                  )}
                </button>

                {notificationDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-80 bg-gray-900 border border-white/10 rounded-xl shadow-2xl overflow-hidden">
                    <div className="p-4 border-b border-white/10 flex items-center justify-between">
                      <h3 className="text-white font-semibold">Notifications</h3>
                      <button className="text-emerald-400 text-sm hover:text-emerald-300 flex items-center gap-1">
                        <CheckCheck className="w-4 h-4" />
                        Mark all read
                      </button>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {notifications.map((notification) => (
                        <div 
                          key={notification.id}
                          className={`p-4 border-b border-white/5 hover:bg-white/5 cursor-pointer transition-all ${
                            notification.unread ? 'bg-emerald-500/5' : ''
                          }`}
                        >
                          <div className="flex gap-3">
                            <div className={`p-2 rounded-lg flex-shrink-0 ${
                              notification.unread ? 'bg-emerald-500/20' : 'bg-white/5'
                            }`}>
                              <notification.icon className="w-5 h-5 text-emerald-400" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between gap-2">
                                <h4 className="text-white font-medium text-sm">{notification.title}</h4>
                                {notification.unread && (
                                  <span className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0 mt-1"></span>
                                )}
                              </div>
                              <p className="text-gray-400 text-sm mt-1">{notification.message}</p>
                              <p className="text-gray-500 text-xs mt-2">{notification.time}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="p-3 bg-white/5 text-center">
                      <a href="/protected/notifications" className="text-emerald-400 text-sm hover:text-emerald-300">
                        View all notifications
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Settings */}
              <button className="p-2 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-all">
                <Settings className="w-5 h-5" />
              </button>

              {/* User Dropdown - Desktop */}
              <div className="relative hidden md:block" ref={userDropdownRef}>
                <button 
                  onClick={() => {
                    setUserDropdownOpen(!userDropdownOpen);
                    setNotificationDropdownOpen(false);
                  }}
                  className="flex items-center gap-2 p-1 pr-3 rounded-lg hover:bg-white/10 transition-all"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white text-sm font-bold">
                    {userData.initials}
                  </div>
                  <span className="text-sm text-white">{userData.name.split(' ')[0]}</span>
                </button>

                {userDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-gray-900 border border-white/10 rounded-xl shadow-2xl overflow-hidden">
                    <div className="p-4 border-b border-white/10">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white font-bold">
                          {userData.initials}
                        </div>
                        <div>
                          <p className="text-white font-medium">{userData.name}</p>
                          <p className="text-gray-400 text-sm">{userData.email}</p>
                        </div>
                      </div>
                      <div className="mt-3 p-2 bg-white/5 rounded-lg">
                        <p className="text-xs text-gray-400">Farm Details</p>
                        <p className="text-sm text-white">{userData.primaryCrop}</p>
                        <p className="text-xs text-gray-400 mt-1">{userData.farmSize} • {userData.location}</p>
                      </div>
                    </div>
                    <div className="p-2">
                      <a href="/protected/profile" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 text-gray-300 hover:text-white transition-all">
                        <User className="w-4 h-4" />
                        <span className="text-sm">My Profile</span>
                      </a>
                      <a href="/protected/settings" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 text-gray-300 hover:text-white transition-all">
                        <Settings className="w-4 h-4" />
                        <span className="text-sm">Settings</span>
                      </a>
                      <a href="/protected/billing" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 text-gray-300 hover:text-white transition-all">
                        <Package className="w-4 h-4" />
                        <span className="text-sm">Subscription</span>
                      </a>
                      <a href="/protected/help" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 text-gray-300 hover:text-white transition-all">
                        <AlertCircle className="w-4 h-4" />
                        <span className="text-sm">Help & Support</span>
                      </a>
                    </div>
                    <div className="p-2 border-t border-white/10">
                      <button className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-red-500/10 text-red-400 hover:text-red-300 transition-all w-full">
                        <LogOut className="w-4 h-4" />
                        <span className="text-sm">Logout</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 pb-20 lg:pb-0">
          {children}
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-gray-950/90 backdrop-blur-xl border-t border-white/10 lg:hidden z-40">
        <div className="flex items-center justify-around p-4">
          {mobileBottomNavItems.map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="flex flex-col items-center gap-1"
            >
              <item.icon className={`w-6 h-6 ${activePage === item.id ? 'text-emerald-400' : 'text-gray-400'}`} />
              <span className={`text-xs ${activePage === item.id ? 'text-emerald-400 font-medium' : 'text-gray-400'}`}>
                {item.label}
              </span>
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
}