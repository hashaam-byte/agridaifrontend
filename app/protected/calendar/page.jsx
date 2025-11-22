'use client'
import React, { useState } from 'react';
import { 
  Calendar, ChevronLeft, ChevronRight, Plus, 
  Sprout, Droplets, Bug, Scissors, Package, AlertCircle,
  Clock, CheckCircle, X, Edit2, Trash2
} from 'lucide-react';

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [showAddEvent, setShowAddEvent] = useState(false);
  const [view, setView] = useState('month');

  const events = [
    { id: 1, title: 'Plant Maize - Field A', date: '2025-11-25', type: 'planting', crop: 'Maize', icon: Sprout, color: 'emerald' },
    { id: 2, title: 'Fertilizer Application - Rice', date: '2025-11-26', type: 'fertilizer', crop: 'Rice', icon: Package, color: 'blue' },
    { id: 3, title: 'Pest Inspection - Tomatoes', date: '2025-11-28', type: 'pest', crop: 'Tomatoes', icon: Bug, color: 'yellow' },
    { id: 4, title: 'Irrigation Schedule', date: '2025-11-29', type: 'irrigation', crop: 'All Fields', icon: Droplets, color: 'cyan' },
    { id: 5, title: 'Harvest Cassava - Plot C', date: '2025-12-01', type: 'harvest', crop: 'Cassava', icon: Scissors, color: 'purple' },
    { id: 6, title: 'Soil Testing', date: '2025-12-03', type: 'other', crop: 'All Fields', icon: AlertCircle, color: 'orange' },
    { id: 7, title: 'Weed Control - Maize Field', date: '2025-12-05', type: 'other', crop: 'Maize', icon: AlertCircle, color: 'red' },
    { id: 8, title: 'Harvest Tomatoes', date: '2025-12-10', type: 'harvest', crop: 'Tomatoes', icon: Scissors, color: 'purple' }
  ];

  const activityTypes = [
    { id: 'planting', name: 'Planting', icon: Sprout, color: 'emerald' },
    { id: 'fertilizer', name: 'Fertilizer', icon: Package, color: 'blue' },
    { id: 'pest', name: 'Pest Control', icon: Bug, color: 'yellow' },
    { id: 'irrigation', name: 'Irrigation', icon: Droplets, color: 'cyan' },
    { id: 'harvest', name: 'Harvest', icon: Scissors, color: 'purple' },
    { id: 'other', name: 'Other', icon: AlertCircle, color: 'gray' }
  ];

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    return { daysInMonth, startingDayOfWeek };
  };

  const getEventsForDate = (day) => {
    const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return events.filter(event => event.date === dateStr);
  };

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentDate);
  const monthName = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const upcomingEvents = events
    .filter(event => new Date(event.date) >= new Date())
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, 5);

  return (
    <div className="p-4 md:p-6">
      <div className="grid lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Crop Calendar</h1>
              <p className="text-gray-400">Plan and track your farming activities</p>
            </div>
            <button 
              onClick={() => setShowAddEvent(true)}
              className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 rounded-xl text-white font-semibold flex items-center gap-2 transition-all shadow-lg hover:shadow-emerald-500/50"
            >
              <Plus className="w-5 h-5" />
              Add Activity
            </button>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setView('month')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                view === 'month'
                  ? 'bg-emerald-500/20 border border-emerald-500/50 text-emerald-400'
                  : 'bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10'
              }`}
            >
              Month View
            </button>
            <button
              onClick={() => setView('list')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                view === 'list'
                  ? 'bg-emerald-500/20 border border-emerald-500/50 text-emerald-400'
                  : 'bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10'
              }`}
            >
              List View
            </button>
          </div>

          {view === 'month' ? (
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">{monthName}</h2>
                <div className="flex gap-2">
                  <button
                    onClick={previousMonth}
                    className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-gray-400 hover:text-white transition-all"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextMonth}
                    className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-gray-400 hover:text-white transition-all"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-7 gap-2 mb-2">
                {dayNames.map(day => (
                  <div key={day} className="text-center text-gray-400 text-sm font-medium py-2">
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-2">
                {[...Array(startingDayOfWeek)].map((_, i) => (
                  <div key={`empty-${i}`} className="aspect-square" />
                ))}

                {[...Array(daysInMonth)].map((_, i) => {
                  const day = i + 1;
                  const dayEvents = getEventsForDate(day);
                  const isToday = new Date().getDate() === day && 
                                 new Date().getMonth() === currentDate.getMonth() &&
                                 new Date().getFullYear() === currentDate.getFullYear();

                  return (
                    <div
                      key={day}
                      onClick={() => setSelectedDate(day)}
                      className={`aspect-square p-2 rounded-xl border transition-all cursor-pointer ${
                        isToday 
                          ? 'bg-emerald-500/20 border-emerald-500/50' 
                          : dayEvents.length > 0
                          ? 'bg-white/5 border-white/10 hover:bg-white/10'
                          : 'bg-white/5 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      <div className={`text-sm font-medium mb-1 ${isToday ? 'text-emerald-400' : 'text-white'}`}>
                        {day}
                      </div>
                      <div className="space-y-1">
                        {dayEvents.slice(0, 2).map(event => (
                          <div
                            key={event.id}
                            className={`text-xs px-1 py-0.5 bg-${event.color}-500/20 text-${event.color}-400 rounded truncate`}
                          >
                            {event.title.length > 10 ? event.title.substring(0, 10) + '...' : event.title}
                          </div>
                        ))}
                        {dayEvents.length > 2 && (
                          <div className="text-xs text-gray-400">+{dayEvents.length - 2} more</div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {events.sort((a, b) => new Date(a.date) - new Date(b.date)).map(event => {
                const EventIcon = event.icon;
                return (
                  <div key={event.id} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:border-emerald-500/30 transition-all">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl bg-${event.color}-500/20`}>
                          <EventIcon className={`w-6 h-6 text-${event.color}-400`} />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white mb-1">{event.title}</h3>
                          <div className="flex items-center gap-3 text-sm text-gray-400">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                            </div>
                            <span>•</span>
                            <span>{event.crop}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-all">
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-red-400 transition-all">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
            <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-emerald-400" />
              Upcoming Activities
            </h2>
            <div className="space-y-3">
              {upcomingEvents.map(event => {
                const EventIcon = event.icon;
                const daysUntil = Math.ceil((new Date(event.date) - new Date()) / (1000 * 60 * 60 * 24));
                return (
                  <div key={event.id} className="flex items-start gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all cursor-pointer">
                    <div className={`p-2 rounded-lg bg-${event.color}-500/20`}>
                      <EventIcon className={`w-4 h-4 text-${event.color}-400`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-medium text-sm truncate">{event.title}</p>
                      <p className="text-gray-400 text-xs">{daysUntil === 0 ? 'Today' : daysUntil === 1 ? 'Tomorrow' : `In ${daysUntil} days`}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
            <h2 className="text-lg font-bold text-white mb-4">Activity Types</h2>
            <div className="space-y-2">
              {activityTypes.map(type => {
                const TypeIcon = type.icon;
                const count = events.filter(e => e.type === type.id).length;
                return (
                  <div key={type.id} className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                    <div className="flex items-center gap-2">
                      <div className={`p-2 rounded-lg bg-${type.color}-500/20`}>
                        <TypeIcon className={`w-4 h-4 text-${type.color}-400`} />
                      </div>
                      <span className="text-white text-sm font-medium">{type.name}</span>
                    </div>
                    <span className="text-gray-400 text-sm">{count}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 backdrop-blur-sm rounded-2xl border border-emerald-500/30 p-6">
            <h2 className="text-lg font-bold text-white mb-4">This Month</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Total Activities</span>
                <span className="text-white font-bold">{events.length}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Completed</span>
                <span className="text-emerald-400 font-bold">12</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Pending</span>
                <span className="text-yellow-400 font-bold">{events.length}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showAddEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
             onClick={() => setShowAddEvent(false)}>
          <div className="bg-gray-900 rounded-2xl border border-white/10 max-w-md w-full"
               onClick={(e) => e.stopPropagation()}>
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Add Activity</h2>
              <button onClick={() => setShowAddEvent(false)} className="p-2 rounded-lg hover:bg-white/10 text-gray-400">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Activity Type</label>
                <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-500">
                  <option value="" className="bg-gray-900">Select type</option>
                  {activityTypes.map(type => (
                    <option key={type.id} value={type.id} className="bg-gray-900">{type.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Title</label>
                <input type="text" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="e.g., Plant Maize" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Date</label>
                <input type="date" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Crop/Field</label>
                <input type="text" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="e.g., Maize Field A" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Notes (Optional)</label>
                <textarea rows={3} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none" placeholder="Additional details..."></textarea>
              </div>
              <div className="flex gap-3 pt-4">
                <button onClick={() => setShowAddEvent(false)} className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-gray-400 hover:bg-white/10 transition-all">
                  Cancel
                </button>
                <button className="flex-1 px-4 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl text-white hover:from-emerald-600 hover:to-teal-600 transition-all">
                  Add Activity
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}