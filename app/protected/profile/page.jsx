'use client'
import React, { useState } from 'react';
import { 
  User, Mail, Phone, MapPin, Briefcase, Camera, Save, Edit2,
  Award, TrendingUp, Calendar, Leaf, CheckCircle, Star,
  Users, MessageSquare, Heart, Share2, Trophy
} from 'lucide-react';

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    fullName: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+234 801 234 5678',
    location: 'Lagos, Nigeria',
    farmName: 'Green Valley Farms',
    farmSize: '10',
    farmSizeUnit: 'hectares',
    primaryCrop: 'Maize/Corn',
    experience: '3-5 years',
    bio: 'Passionate farmer focused on sustainable agriculture and modern farming techniques. Always eager to learn and share knowledge with the community.',
    joinedDate: 'January 2024'
  });

  const stats = [
    { label: 'Posts', value: '24', icon: MessageSquare, color: 'blue' },
    { label: 'Followers', value: '1.2K', icon: Users, color: 'purple' },
    { label: 'Crops Tracked', value: '8', icon: Leaf, color: 'emerald' },
    { label: 'Achievements', value: '12', icon: Trophy, color: 'yellow' }
  ];

  const achievements = [
    { id: 1, name: 'Early Adopter', description: 'Joined in first month', icon: Star, earned: true },
    { id: 2, name: 'Knowledge Sharer', description: 'Posted 10+ helpful tips', icon: MessageSquare, earned: true },
    { id: 3, name: 'Green Thumb', description: 'Tracked 5+ crops successfully', icon: Leaf, earned: true },
    { id: 4, name: 'Community Hero', description: '100+ helpful reactions', icon: Heart, earned: true },
    { id: 5, name: 'Weather Watcher', description: 'Checked forecasts 30 days straight', icon: TrendingUp, earned: false },
    { id: 6, name: 'Master Farmer', description: 'Used all premium features', icon: Trophy, earned: false }
  ];

  const recentActivity = [
    { id: 1, type: 'post', title: 'Shared tips on pest control', time: '2 hours ago', icon: MessageSquare },
    { id: 2, type: 'crop', title: 'Added Tomato Garden to crops', time: '1 day ago', icon: Leaf },
    { id: 3, type: 'achievement', title: 'Earned "Knowledge Sharer" badge', time: '3 days ago', icon: Award },
    { id: 4, type: 'comment', title: 'Commented on "Soil Testing Guide"', time: '5 days ago', icon: MessageSquare }
  ];

  const farmingStats = [
    { label: 'Total Harvest', value: '2.5 tons', change: '+15%', icon: TrendingUp },
    { label: 'Farm Efficiency', value: '87%', change: '+5%', icon: CheckCircle },
    { label: 'Active Days', value: '156', change: 'This year', icon: Calendar },
    { label: 'Community Rank', value: 'Top 10%', change: 'Expert', icon: Award }
  ];

  const handleSave = () => {
    setIsEditing(false);
    alert('Profile updated successfully!');
  };

  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* Profile Header */}
      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
        {/* Cover Image */}
        <div className="h-48 bg-gradient-to-r from-emerald-600 via-teal-600 to-lime-600 relative">
          <button className="absolute bottom-4 right-4 px-4 py-2 bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-lg text-white text-sm font-medium flex items-center gap-2 transition-all">
            <Camera className="w-4 h-4" />
            Change Cover
          </button>
        </div>

        {/* Profile Info */}
        <div className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Avatar */}
            <div className="relative -mt-20">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white text-4xl font-bold border-4 border-gray-900">
                JD
              </div>
              <button className="absolute bottom-2 right-2 p-2 bg-emerald-500 hover:bg-emerald-600 rounded-full text-white transition-all shadow-lg">
                <Camera className="w-4 h-4" />
              </button>
            </div>

            {/* Info */}
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-white mb-2">{profileData.fullName}</h1>
                  <p className="text-gray-400 mb-1">{profileData.farmName}</p>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{profileData.location}</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>Joined {profileData.joinedDate}</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="px-6 py-3 bg-emerald-500/20 border border-emerald-500/30 rounded-xl text-emerald-400 hover:bg-emerald-500/30 transition-all font-medium flex items-center gap-2"
                >
                  <Edit2 className="w-4 h-4" />
                  {isEditing ? 'Cancel' : 'Edit Profile'}
                </button>
              </div>

              {/* Bio */}
              {isEditing ? (
                <textarea
                  value={profileData.bio}
                  onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                  rows={3}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none mb-4"
                />
              ) : (
                <p className="text-gray-300 mb-4">{profileData.bio}</p>
              )}

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, i) => (
                  <div key={i} className="bg-white/5 rounded-xl p-4 text-center">
                    <stat.icon className={`w-5 h-5 text-${stat.color}-400 mx-auto mb-2`} />
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className="text-gray-400 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {isEditing && (
            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                  <input
                    type="text"
                    value={profileData.fullName}
                    onChange={(e) => setProfileData({...profileData, fullName: e.target.value})}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    value={profileData.email}
                    onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                  <input
                    type="tel"
                    value={profileData.phone}
                    onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Location</label>
                  <input
                    type="text"
                    value={profileData.location}
                    onChange={(e) => setProfileData({...profileData, location: e.target.value})}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>
              <button
                onClick={handleSave}
                className="mt-6 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl text-white font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all flex items-center gap-2"
              >
                <Save className="w-5 h-5" />
                Save Changes
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Farming Stats */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
            <h2 className="text-xl font-bold text-white mb-6">Farming Statistics</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {farmingStats.map((stat, i) => (
                <div key={i} className="bg-white/5 rounded-xl p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div className={`p-2 rounded-lg bg-emerald-500/20`}>
                      <stat.icon className="w-5 h-5 text-emerald-400" />
                    </div>
                    <span className="text-emerald-400 text-sm font-medium">{stat.change}</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
            <h2 className="text-xl font-bold text-white mb-6">Recent Activity</h2>
            <div className="space-y-4">
              {recentActivity.map(activity => (
                <div key={activity.id} className="flex items-start gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all">
                  <div className="p-2 rounded-lg bg-emerald-500/20">
                    <activity.icon className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-medium mb-1">{activity.title}</p>
                    <p className="text-gray-400 text-sm">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Farm Details */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
            <h2 className="text-lg font-bold text-white mb-4">Farm Details</h2>
            <div className="space-y-4">
              <div>
                <p className="text-gray-400 text-sm mb-1">Primary Crop</p>
                <p className="text-white font-medium">{profileData.primaryCrop}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Farm Size</p>
                <p className="text-white font-medium">{profileData.farmSize} {profileData.farmSizeUnit}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Experience</p>
                <p className="text-white font-medium">{profileData.experience}</p>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
            <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-yellow-400" />
              Achievements
            </h2>
            <div className="grid grid-cols-3 gap-3">
              {achievements.map(achievement => {
                const AchievementIcon = achievement.icon;
                return (
                  <button
                    key={achievement.id}
                    className={`p-4 rounded-xl transition-all ${
                      achievement.earned
                        ? 'bg-yellow-500/20 border-2 border-yellow-500/50'
                        : 'bg-white/5 border border-white/10 opacity-50'
                    }`}
                    title={achievement.description}
                  >
                    <AchievementIcon className={`w-6 h-6 mx-auto ${
                      achievement.earned ? 'text-yellow-400' : 'text-gray-600'
                    }`} />
                  </button>
                );
              })}
            </div>
            <p className="text-gray-400 text-sm mt-4 text-center">
              {achievements.filter(a => a.earned).length} of {achievements.length} earned
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}