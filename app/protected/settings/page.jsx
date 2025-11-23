'use client'
import React, { useState } from 'react';
import { 
  User, Mail, Phone, MapPin, Briefcase, Camera, Save,
  Bell, Lock, Globe, Moon, Sun, Smartphone, Monitor,
  Shield, Key, Trash2, LogOut, CheckCircle, AlertCircle,
  CreditCard, Package, HelpCircle, MessageSquare, FileText,
  Eye, EyeOff, ChevronRight
} from 'lucide-react';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile');
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const [profileData, setProfileData] = useState({
    fullName: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+234 801 234 5678',
    location: 'Lagos, Nigeria',
    country: 'Nigeria',
    state: 'Lagos',
    city: 'Ikeja',
    farmName: 'Green Valley Farms',
    farmSize: '10',
    farmSizeUnit: 'hectares',
    primaryCrop: 'Maize/Corn',
    experience: '3-5 years',
    farmingType: 'Commercial',
    bio: 'Passionate farmer focused on sustainable agriculture and modern farming techniques.'
  });

  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    pushNotifications: true,
    smsNotifications: false,
    weatherAlerts: true,
    priceAlerts: true,
    pestAlerts: true,
    communityUpdates: true,
    marketingEmails: false,
    marketUpdates: true
  });

  const [appearance, setAppearance] = useState({
    theme: 'dark',
    language: 'en',
    fontSize: 'medium',
    units: 'metric'
  });

  const [passwords, setPasswords] = useState({
    current: '',
    new: '',
    confirm: ''
  });

  const tabs = [
    { id: 'profile', name: 'Profile', icon: User },
    { id: 'notifications', name: 'Notifications', icon: Bell },
    { id: 'security', name: 'Security', icon: Lock },
    { id: 'appearance', name: 'Appearance', icon: Monitor },
    { id: 'subscription', name: 'Subscription', icon: Package },
    { id: 'support', name: 'Support', icon: HelpCircle }
  ];

  const handleSaveProfile = () => {
    alert('Profile saved successfully!');
  };

  const handleUpdatePassword = () => {
    if (passwords.new !== passwords.confirm) {
      alert('New passwords do not match!');
      return;
    }
    if (passwords.new.length < 8) {
      alert('Password must be at least 8 characters long!');
      return;
    }
    alert('Password updated successfully!');
    setPasswords({ current: '', new: '', confirm: '' });
  };

  const toggleNotification = (key) => {
    setNotifications(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({ ...prev, [name]: value }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswords(prev => ({ ...prev, [name]: value }));
  };

  const renderProfileTab = () => (
    <div className="space-y-6">
      {/* Profile Picture */}
      <div className="flex items-center gap-6 pb-6 border-b border-white/10">
        <div className="relative">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white text-3xl font-bold">
            {profileData.fullName.split(' ').map(n => n[0]).join('')}
          </div>
          <button className="absolute bottom-0 right-0 p-2 bg-emerald-500 hover:bg-emerald-600 rounded-full text-white transition-all shadow-lg">
            <Camera className="w-4 h-4" />
          </button>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-1">{profileData.fullName}</h3>
          <p className="text-gray-400 text-sm">{profileData.email}</p>
          <p className="text-emerald-400 text-sm mt-1">{profileData.farmingType} Farmer • {profileData.experience}</p>
          <button className="mt-2 text-emerald-400 hover:text-emerald-300 text-sm font-medium">
            Change Photo
          </button>
        </div>
      </div>

      {/* Personal Information */}
      <div>
        <h3 className="text-lg font-bold text-white mb-4">Personal Information</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={profileData.fullName}
              onChange={handleProfileChange}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              value={profileData.email}
              onChange={handleProfileChange}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={profileData.phone}
              onChange={handleProfileChange}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Country</label>
            <input
              type="text"
              name="country"
              value={profileData.country}
              onChange={handleProfileChange}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">State/Province</label>
            <input
              type="text"
              name="state"
              value={profileData.state}
              onChange={handleProfileChange}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">City</label>
            <input
              type="text"
              name="city"
              value={profileData.city}
              onChange={handleProfileChange}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>
      </div>

      {/* Farm Information */}
      <div>
        <h3 className="text-lg font-bold text-white mb-4">Farm Information</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Farm Name</label>
            <input
              type="text"
              name="farmName"
              value={profileData.farmName}
              onChange={handleProfileChange}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Primary Crop</label>
            <select
              name="primaryCrop"
              value={profileData.primaryCrop}
              onChange={handleProfileChange}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="Maize/Corn" className="bg-gray-900">Maize/Corn</option>
              <option value="Rice" className="bg-gray-900">Rice</option>
              <option value="Wheat" className="bg-gray-900">Wheat</option>
              <option value="Cassava" className="bg-gray-900">Cassava</option>
              <option value="Vegetables" className="bg-gray-900">Vegetables</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Farm Size</label>
            <div className="flex gap-3">
              <input
                type="number"
                name="farmSize"
                value={profileData.farmSize}
                onChange={handleProfileChange}
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <select
                name="farmSizeUnit"
                value={profileData.farmSizeUnit}
                onChange={handleProfileChange}
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="hectares" className="bg-gray-900">Hectares</option>
                <option value="acres" className="bg-gray-900">Acres</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Experience</label>
            <select
              name="experience"
              value={profileData.experience}
              onChange={handleProfileChange}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="0-1 years" className="bg-gray-900">Less than 1 year</option>
              <option value="1-3 years" className="bg-gray-900">1-3 years</option>
              <option value="3-5 years" className="bg-gray-900">3-5 years</option>
              <option value="5-10 years" className="bg-gray-900">5-10 years</option>
              <option value="10+ years" className="bg-gray-900">10+ years</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Farming Type</label>
            <select
              name="farmingType"
              value={profileData.farmingType}
              onChange={handleProfileChange}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="Commercial" className="bg-gray-900">Commercial</option>
              <option value="Subsistence" className="bg-gray-900">Subsistence</option>
              <option value="Organic" className="bg-gray-900">Organic</option>
              <option value="Mixed" className="bg-gray-900">Mixed</option>
            </select>
          </div>
        </div>
      </div>

      {/* Bio */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Bio</label>
        <textarea
          name="bio"
          value={profileData.bio}
          onChange={handleProfileChange}
          rows={4}
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
        />
      </div>

      <button
        onClick={handleSaveProfile}
        className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl text-white font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all flex items-center gap-2 justify-center"
      >
        <Save className="w-5 h-5" />
        Save Changes
      </button>
    </div>
  );

  const renderNotificationsTab = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-bold text-white mb-2">Notification Preferences</h3>
        <p className="text-gray-400 mb-6">Choose how you want to receive updates and alerts</p>
      </div>

      <div>
        <h4 className="text-base font-semibold text-white mb-4">Communication Channels</h4>
        <div className="space-y-4">
          {[
            { key: 'emailNotifications', label: 'Email Notifications', description: 'Receive notifications via email' },
            { key: 'pushNotifications', label: 'Push Notifications', description: 'Receive push notifications on your devices' },
            { key: 'smsNotifications', label: 'SMS Notifications', description: 'Receive notifications via SMS' }
          ].map(item => (
            <div key={item.key} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
              <div>
                <p className="text-white font-medium">{item.label}</p>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
              <button
                onClick={() => toggleNotification(item.key)}
                className={`relative w-14 h-7 rounded-full transition-colors ${
                  notifications[item.key] ? 'bg-emerald-500' : 'bg-gray-600'
                }`}
              >
                <div className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${
                  notifications[item.key] ? 'translate-x-8' : 'translate-x-1'
                }`}></div>
              </button>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-base font-semibold text-white mb-4">Alert Types</h4>
        <div className="space-y-4">
          {[
            { key: 'weatherAlerts', label: 'Weather Alerts', description: 'Get notified about weather changes' },
            { key: 'priceAlerts', label: 'Price Alerts', description: 'Market price updates for your crops' },
            { key: 'pestAlerts', label: 'Pest & Disease Alerts', description: 'Pest outbreak warnings in your area' },
            { key: 'communityUpdates', label: 'Community Updates', description: 'New posts and discussions' },
            { key: 'marketUpdates', label: 'Market Updates', description: 'Price changes and market trends' },
            { key: 'marketingEmails', label: 'Marketing Emails', description: 'News and promotional content' }
          ].map(item => (
            <div key={item.key} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
              <div>
                <p className="text-white font-medium">{item.label}</p>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
              <button
                onClick={() => toggleNotification(item.key)}
                className={`relative w-14 h-7 rounded-full transition-colors ${
                  notifications[item.key] ? 'bg-emerald-500' : 'bg-gray-600'
                }`}
              >
                <div className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${
                  notifications[item.key] ? 'translate-x-8' : 'translate-x-1'
                }`}></div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSecurityTab = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-bold text-white mb-2">Security Settings</h3>
        <p className="text-gray-400 mb-6">Manage your password and security preferences</p>
      </div>

      <div>
        <h4 className="text-base font-semibold text-white mb-4">Change Password</h4>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Current Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type={showOldPassword ? 'text' : 'password'}
                name="current"
                value={passwords.current}
                onChange={handlePasswordChange}
                className="w-full pl-12 pr-12 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="••••••••"
              />
              <button
                onClick={() => setShowOldPassword(!showOldPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
              >
                {showOldPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">New Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type={showNewPassword ? 'text' : 'password'}
                name="new"
                value={passwords.new}
                onChange={handlePasswordChange}
                className="w-full pl-12 pr-12 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="••••••••"
              />
              <button
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
              >
                {showNewPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Confirm New Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirm"
                value={passwords.confirm}
                onChange={handlePasswordChange}
                className="w-full pl-12 pr-12 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="••••••••"
              />
              <button
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
              >
                {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>
          <button 
            onClick={handleUpdatePassword}
            className="px-6 py-3 bg-emerald-500/20 border border-emerald-500/30 rounded-xl text-emerald-400 hover:bg-emerald-500/30 transition-all font-medium"
          >
            Update Password
          </button>
        </div>
      </div>

      <div>
        <h4 className="text-base font-semibold text-white mb-4">Two-Factor Authentication</h4>
        <div className="p-4 bg-white/5 rounded-xl border border-white/10">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-white font-medium mb-1">Enhance your account security</p>
              <p className="text-gray-400 text-sm">Add an extra layer of protection to your account</p>
            </div>
            <button className="px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-lg text-emerald-400 hover:bg-emerald-500/30 transition-all text-sm font-medium">
              Enable
            </button>
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-base font-semibold text-white mb-4">Connected Devices</h4>
        <div className="space-y-3">
          {[
            { device: 'iPhone 13', location: 'Lagos, Nigeria', lastActive: 'Active now', current: true },
            { device: 'Chrome on Windows', location: 'Lagos, Nigeria', lastActive: '2 days ago', current: false }
          ].map((device, i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
              <div className="flex items-center gap-3">
                <Smartphone className="w-5 h-5 text-emerald-400" />
                <div>
                  <p className="text-white font-medium">{device.device}</p>
                  <p className="text-gray-400 text-sm">{device.location} • {device.lastActive}</p>
                </div>
              </div>
              {device.current ? (
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-lg text-xs font-medium">
                  Current
                </span>
              ) : (
                <button className="px-3 py-1 bg-red-500/20 text-red-400 rounded-lg text-xs font-medium hover:bg-red-500/30 transition-all">
                  Remove
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-red-400" />
          Danger Zone
        </h3>
        <div className="space-y-3">
          <button className="w-full p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-left flex items-center justify-between group transition-all">
            <div>
              <p className="text-white font-medium">Delete Account</p>
              <p className="text-gray-400 text-sm">Permanently delete your account and all data</p>
            </div>
            <Trash2 className="w-5 h-5 text-red-400" />
          </button>
        </div>
      </div>
    </div>
  );

  const renderAppearanceTab = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-bold text-white mb-2">Appearance Settings</h3>
        <p className="text-gray-400 mb-6">Customize your app experience</p>
      </div>

      <div>
        <h4 className="text-base font-semibold text-white mb-4">Theme</h4>
        <div className="grid grid-cols-3 gap-4">
          {[
            { id: 'light', name: 'Light', icon: Sun },
            { id: 'dark', name: 'Dark', icon: Moon },
            { id: 'system', name: 'System', icon: Monitor }
          ].map(theme => {
            const ThemeIcon = theme.icon;
            return (
              <button
                key={theme.id}
                onClick={() => setAppearance({...appearance, theme: theme.id})}
                className={`p-6 rounded-xl border-2 transition-all ${
                  appearance.theme === theme.id
                    ? 'border-emerald-500 bg-emerald-500/20'
                    : 'border-white/10 bg-white/5 hover:bg-white/10'
                }`}
              >
                <ThemeIcon className={`w-8 h-8 mx-auto mb-3 ${
                  appearance.theme === theme.id ? 'text-emerald-400' : 'text-gray-400'
                }`} />
                <p className={`text-center font-medium ${
                  appearance.theme === theme.id ? 'text-white' : 'text-gray-400'
                }`}>
                  {theme.name}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <h4 className="text-base font-semibold text-white mb-4">Language</h4>
        <select
          value={appearance.language}
          onChange={(e) => setAppearance({...appearance, language: e.target.value})}
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
        >
          <option value="en" className="bg-gray-900">English</option>
          <option value="fr" className="bg-gray-900">French</option>
          <option value="es" className="bg-gray-900">Spanish</option>
          <option value="yo" className="bg-gray-900">Yoruba</option>
          <option value="ig" className="bg-gray-900">Igbo</option>
          <option value="ha" className="bg-gray-900">Hausa</option>
        </select>
      </div>

      <div>
        <h4 className="text-base font-semibold text-white mb-4">Font Size</h4>
        <div className="grid grid-cols-3 gap-4">
          {['small', 'medium', 'large'].map(size => (
            <button
              key={size}
              onClick={() => setAppearance({...appearance, fontSize: size})}
              className={`py-3 rounded-xl border-2 transition-all capitalize ${
                appearance.fontSize === size
                  ? 'border-emerald-500 bg-emerald-500/20 text-white'
                  : 'border-white/10 bg-white/5 text-gray-400 hover:bg-white/10'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-base font-semibold text-white mb-4">Units</h4>
        <select
          value={appearance.units}
          onChange={(e) => setAppearance({...appearance, units: e.target.value})}
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
        >
          <option value="metric" className="bg-gray-900">Metric (kg, km, °C)</option>
          <option value="imperial" className="bg-gray-900">Imperial (lb, mi, °F)</option>
        </select>
      </div>
    </div>
  );

  const renderSubscriptionTab = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 rounded-2xl p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">Free Plan</h3>
            <p className="text-gray-300">You are currently on the free plan</p>
          </div>
          <span className="px-4 py-2 bg-emerald-500/20 text-emerald-400 rounded-lg text-sm font-medium">
            Active
          </span>
        </div>
        <button className="w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl text-white font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all">
          Upgrade to Premium
        </button>
      </div>

      <div>
        <h3 className="text-lg font-bold text-white mb-4">Current Plan Features</h3>
        <div className="space-y-3">
          {[
            'Weather forecasts',
            'Market price tracking',
            'AI assistant (limited)',
            'Community access',
            'Basic pest detector',
            'Crop calendar'
          ].map((feature, i) => (
            <div key={i} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
              <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <span className="text-white">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold text-white mb-4">Premium Features</h3>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            'Advanced AI insights',
            'Unlimited pest detection',
            'Priority support',
            'Custom alerts',
            'Export reports',
            'Ad-free experience'
          ].map((feature, i) => (
            <div key={i} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-emerald-500/30">
              <Shield className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <span className="text-white text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSupportTab = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-bold text-white mb-2">Support & Help</h3>
        <p className="text-gray-400 mb-6">Get assistance and learn more about Agrid AI</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <button className="p-6 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all text-left group">
          <HelpCircle className="w-8 h-8 text-emerald-400 mb-3 group-hover:scale-110 transition-transform" />
          <h3 className="text-white font-bold mb-2">Help Center</h3>
          <p className="text-gray-400 text-sm">Browse our knowledge base and FAQs</p>
        </button>
        <button className="p-6 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all text-left group">
          <MessageSquare className="w-8 h-8 text-blue-400 mb-3 group-hover:scale-110 transition-transform" />
          <h3 className="text-white font-bold mb-2">Contact Support</h3>
          <p className="text-gray-400 text-sm">Get help from our support team</p>
        </button>
        <button className="p-6 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all text-left group">
          <FileText className="w-8 h-8 text-purple-400 mb-3 group-hover:scale-110 transition-transform" />
          <h3 className="text-white font-bold mb-2">Documentation</h3>
          <p className="text-gray-400 text-sm">Learn how to use all features</p>
        </button>
        <button className="p-6 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all text-left group">
          <Globe className="w-8 h-8 text-yellow-400 mb-3 group-hover:scale-110 transition-transform" />
          <h3 className="text-white font-bold mb-2">Community Forum</h3>
          <p className="text-gray-400 text-sm">Connect with other farmers</p>
        </button>
      </div>

      <div className="bg-white/5 rounded-xl p-6 border border-white/10">
        <h3 className="text-lg font-bold text-white mb-4">App Information</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between py-2 border-b border-white/10">
            <span className="text-gray-400">Version</span>
            <span className="text-white font-medium">1.0.0</span>
          </div>
          <div className="flex items-center justify-between py-2 border-b border-white/10">
            <span className="text-gray-400">Last Updated</span>
            <span className="text-white font-medium">Nov 23, 2025</span>
          </div>
          <div className="flex items-center justify-between py-2">
            <span className="text-gray-400">Platform</span>
            <span className="text-white font-medium">Web App</span>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 rounded-xl p-6">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-emerald-500/20 rounded-lg">
            <MessageSquare className="w-6 h-6 text-emerald-400" />
          </div>
          <div className="flex-1">
            <h4 className="text-white font-bold mb-2">Need immediate help?</h4>
            <p className="text-gray-300 text-sm mb-4">Our support team is available 24/7 to assist you with any questions or issues.</p>
            <button className="px-6 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg text-white font-medium hover:from-emerald-600 hover:to-teal-600 transition-all text-sm">
              Chat with Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-emerald-950 to-gray-950 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 h-fit lg:sticky lg:top-6">
            <h1 className="text-2xl font-bold text-white mb-6">Settings</h1>
            <nav className="space-y-2">
              {tabs.map(tab => {
                const TabIcon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                      activeTab === tab.id
                        ? 'bg-emerald-500/20 border border-emerald-500/50 text-emerald-400'
                        : 'text-gray-400 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <TabIcon className="w-5 h-5" />
                    <span className="font-medium">{tab.name}</span>
                  </button>
                );
              })}
              
              <div className="pt-4 border-t border-white/10">
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 transition-all">
                  <LogOut className="w-5 h-5" />
                  <span className="font-medium">Logout</span>
                </button>
              </div>
            </nav>
          </div>

          {/* Content */}
          <div className="lg:col-span-3 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 md:p-8">
            {activeTab === 'profile' && renderProfileTab()}
            {activeTab === 'notifications' && renderNotificationsTab()}
            {activeTab === 'security' && renderSecurityTab()}
            {activeTab === 'appearance' && renderAppearanceTab()}
            {activeTab === 'subscription' && renderSubscriptionTab()}
            {activeTab === 'support' && renderSupportTab()}
          </div>
        </div>
      </div>
    </div>
  );
}