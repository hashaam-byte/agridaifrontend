'use client'
import React, { useState } from 'react';
import { 
  Bell, CheckCheck, Trash2, Filter, Cloud, TrendingUp, Bug,
  Users, MessageSquare, Heart, Award, AlertTriangle, Package,
  Calendar, DollarSign, Settings, X, Check
} from 'lucide-react';

export default function NotificationsPage() {
  const [filter, setFilter] = useState('all'); // 'all', 'unread', 'weather', 'market', 'community', 'system'
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'weather',
      icon: Cloud,
      title: 'Heavy Rainfall Alert',
      message: 'Heavy rain expected in your area tomorrow. Consider postponing outdoor activities.',
      time: '5 min ago',
      unread: true,
      color: 'blue'
    },
    {
      id: 2,
      type: 'market',
      icon: TrendingUp,
      title: 'Maize Price Surge',
      message: 'Maize prices increased by 12% today. Current price: ₦145,000/ton',
      time: '1 hour ago',
      unread: true,
      color: 'emerald'
    },
    {
      id: 3,
      type: 'pest',
      icon: Bug,
      title: 'Pest Alert',
      message: 'Fall armyworm detected in farms within 5km of your location.',
      time: '3 hours ago',
      unread: true,
      color: 'red'
    },
    {
      id: 4,
      type: 'community',
      icon: Heart,
      title: 'Emmanuel Okafor liked your post',
      message: '"Best practices for maize farming in rainy season"',
      time: '5 hours ago',
      unread: false,
      color: 'pink'
    },
    {
      id: 5,
      type: 'community',
      icon: MessageSquare,
      title: 'New comment on your post',
      message: 'Aisha Mohammed commented: "Great advice! I\'ve been struggling with this."',
      time: '1 day ago',
      unread: false,
      color: 'purple'
    },
    {
      id: 6,
      type: 'achievement',
      icon: Award,
      title: 'Achievement Unlocked!',
      message: 'You earned the "Knowledge Sharer" badge for posting 10+ helpful tips.',
      time: '2 days ago',
      unread: false,
      color: 'yellow'
    },
    {
      id: 7,
      type: 'system',
      icon: Package,
      title: 'New Feature Available',
      message: 'Check out our new AI-powered crop disease detector in the Pest Detector section.',
      time: '3 days ago',
      unread: false,
      color: 'teal'
    },
    {
      id: 8,
      type: 'calendar',
      icon: Calendar,
      title: 'Upcoming Activity Reminder',
      message: 'Fertilizer application scheduled for tomorrow in Maize Field A.',
      time: '3 days ago',
      unread: false,
      color: 'indigo'
    },
    {
      id: 9,
      type: 'financial',
      icon: DollarSign,
      title: 'Monthly Report Ready',
      message: 'Your November financial report is ready for review.',
      time: '5 days ago',
      unread: false,
      color: 'green'
    },
    {
      id: 10,
      type: 'community',
      icon: Users,
      title: 'You have new followers',
      message: '5 farmers started following you this week.',
      time: '1 week ago',
      unread: false,
      color: 'blue'
    }
  ]);

  const filterOptions = [
    { id: 'all', label: 'All', icon: Bell },
    { id: 'unread', label: 'Unread', icon: Bell },
    { id: 'weather', label: 'Weather', icon: Cloud },
    { id: 'market', label: 'Market', icon: TrendingUp },
    { id: 'community', label: 'Community', icon: Users },
    { id: 'system', label: 'System', icon: Settings }
  ];

  const unreadCount = notifications.filter(n => n.unread).length;

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, unread: false })));
  };

  const markAsRead = (id) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, unread: false } : n
    ));
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const deleteAll = () => {
    if (window.confirm('Are you sure you want to delete all notifications?')) {
      setNotifications([]);
    }
  };

  const filteredNotifications = notifications.filter(n => {
    if (filter === 'all') return true;
    if (filter === 'unread') return n.unread;
    return n.type === filter || 
           (filter === 'pest' && n.type === 'pest') ||
           (filter === 'calendar' && n.type === 'calendar') ||
           (filter === 'achievement' && n.type === 'achievement') ||
           (filter === 'financial' && n.type === 'financial');
  });

  const NotificationItem = ({ notification }) => {
    const NotificationIcon = notification.icon;
    
    return (
      <div 
        className={`flex items-start gap-4 p-4 rounded-xl border transition-all cursor-pointer group ${
          notification.unread 
            ? 'bg-emerald-500/10 border-emerald-500/30 hover:bg-emerald-500/20' 
            : 'bg-white/5 border-white/10 hover:bg-white/10'
        }`}
        onClick={() => markAsRead(notification.id)}
      >
        <div className={`p-3 rounded-xl bg-${notification.color}-500/20 flex-shrink-0`}>
          <NotificationIcon className={`w-5 h-5 text-${notification.color}-400`} />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 className="text-white font-semibold">{notification.title}</h3>
            {notification.unread && (
              <div className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0 mt-2"></div>
            )}
          </div>
          <p className="text-gray-300 text-sm mb-2">{notification.message}</p>
          <p className="text-gray-500 text-xs">{notification.time}</p>
        </div>

        <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
          {notification.unread && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                markAsRead(notification.id);
              }}
              className="p-2 hover:bg-white/10 rounded-lg text-emerald-400 transition-all"
              title="Mark as read"
            >
              <Check className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={(e) => {
              e.stopPropagation();
              deleteNotification(notification.id);
            }}
            className="p-2 hover:bg-white/10 rounded-lg text-red-400 transition-all"
            title="Delete"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Notifications</h1>
          <p className="text-gray-400">
            {unreadCount > 0 ? `You have ${unreadCount} unread notification${unreadCount > 1 ? 's' : ''}` : 'All caught up!'}
          </p>
        </div>
        <div className="flex gap-3">
          {unreadCount > 0 && (
            <button
              onClick={markAllAsRead}
              className="px-6 py-3 bg-emerald-500/20 border border-emerald-500/30 rounded-xl text-emerald-400 hover:bg-emerald-500/30 transition-all font-medium flex items-center gap-2"
            >
              <CheckCheck className="w-5 h-5" />
              Mark all as read
            </button>
          )}
          {notifications.length > 0 && (
            <button
              onClick={deleteAll}
              className="px-6 py-3 bg-red-500/20 border border-red-500/30 rounded-xl text-red-400 hover:bg-red-500/30 transition-all font-medium flex items-center gap-2"
            >
              <Trash2 className="w-5 h-5" />
              Delete all
            </button>
          )}
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {filterOptions.map(option => {
          const OptionIcon = option.icon;
          const count = option.id === 'all' 
            ? notifications.length 
            : option.id === 'unread'
            ? unreadCount
            : notifications.filter(n => n.type === option.id).length;

          return (
            <button
              key={option.id}
              onClick={() => setFilter(option.id)}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all whitespace-nowrap ${
                filter === option.id
                  ? 'bg-emerald-500/20 border-2 border-emerald-500/50 text-emerald-400'
                  : 'bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10'
              }`}
            >
              <OptionIcon className="w-5 h-5" />
              <span>{option.label}</span>
              {count > 0 && (
                <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                  filter === option.id
                    ? 'bg-emerald-500/30 text-emerald-400'
                    : 'bg-white/10 text-gray-400'
                }`}>
                  {count}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Notifications List */}
      <div className="space-y-3">
        {filteredNotifications.length > 0 ? (
          filteredNotifications.map(notification => (
            <NotificationItem key={notification.id} notification={notification} />
          ))
        ) : (
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-12 text-center">
            <Bell className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">No notifications</h3>
            <p className="text-gray-400">
              {filter === 'all' 
                ? "You're all caught up! Check back later for updates."
                : `No ${filter} notifications at the moment.`}
            </p>
          </div>
        )}
      </div>

      {/* Notification Settings Link */}
      {notifications.length > 0 && (
        <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/30 rounded-2xl p-6 text-center">
          <Settings className="w-12 h-12 text-blue-400 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-white mb-2">Manage Notification Preferences</h3>
          <p className="text-gray-300 mb-4">Choose which notifications you want to receive</p>
          <a
            href="/protected/settings"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500/20 border border-blue-500/30 rounded-xl text-blue-400 hover:bg-blue-500/30 transition-all font-medium"
          >
            <Settings className="w-5 h-5" />
            Go to Settings
          </a>
        </div>
      )}
    </div>
  );
}