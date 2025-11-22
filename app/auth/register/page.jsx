'use client'
import React, { useState } from 'react';
import { Leaf, Mail, Lock, Eye, EyeOff, ArrowLeft, ArrowRight, User, MapPin, Sprout, TrendingUp, Calendar, Loader, Check } from 'lucide-react';

export default function RegisterPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    // Step 1: Account Info
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    
    // Step 2: Farming Experience
    yearsOfExperience: '',
    farmingType: '',
    
    // Step 3: Crop Preferences
    cropTypes: [],
    primaryCrop: '',
    
    // Step 4: Location & Farm Details
    country: '',
    state: '',
    city: '',
    farmSize: '',
    farmSizeUnit: 'hectares',
    
    // Step 5: Goals
    farmingGoals: [],
    challenges: []
  });

  const totalSteps = 5;
  
  const cropOptions = [
    'Maize/Corn', 'Rice', 'Wheat', 'Cassava', 'Yam', 'Beans', 
    'Sorghum', 'Millet', 'Plantain', 'Cocoa', 'Coffee', 'Palm Oil',
    'Vegetables', 'Fruits', 'Livestock'
  ];
  
  const goalOptions = [
    'Increase yield', 'Reduce costs', 'Better pest management',
    'Improve soil health', 'Market insights', 'Weather prediction',
    'Crop diversification', 'Sustainable farming'
  ];
  
  const challengeOptions = [
    'Unpredictable weather', 'Pest & diseases', 'Low market prices',
    'Limited resources', 'Poor soil quality', 'Water scarcity',
    'Lack of information', 'High input costs'
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleMultiSelect = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: prev[name].includes(value)
        ? prev[name].filter(item => item !== value)
        : [...prev[name], value]
    }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      window.location.href = '/protected/dashboard';
    }, 2000);
  };

  const renderStep = () => {
    switch(currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">Create Your Account</h2>
              <p className="text-gray-400">Let's get started with the basics</p>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                  placeholder="John Doe"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                  placeholder="farmer@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-12 pr-12 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full pl-12 pr-12 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">Farming Experience</h2>
              <p className="text-gray-400">Tell us about your farming background</p>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">How many years have you been farming?</label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  name="yearsOfExperience"
                  value={formData.yearsOfExperience}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all appearance-none cursor-pointer"
                >
                  <option value="" className="bg-gray-900">Select experience</option>
                  <option value="0-1" className="bg-gray-900">Less than 1 year</option>
                  <option value="1-3" className="bg-gray-900">1-3 years</option>
                  <option value="3-5" className="bg-gray-900">3-5 years</option>
                  <option value="5-10" className="bg-gray-900">5-10 years</option>
                  <option value="10+" className="bg-gray-900">10+ years</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">Type of farming</label>
              <div className="grid grid-cols-2 gap-3">
                {['Subsistence', 'Commercial', 'Organic', 'Mixed'].map(type => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => handleChange({ target: { name: 'farmingType', value: type }})}
                    className={`py-3 px-4 rounded-xl border-2 transition-all ${
                      formData.farmingType === type
                        ? 'border-emerald-500 bg-emerald-500/20 text-white'
                        : 'border-white/20 bg-white/5 text-gray-300 hover:border-white/40'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">Crop Preferences</h2>
              <p className="text-gray-400">What crops do you grow or want to grow?</p>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">Select all that apply</label>
              <div className="grid grid-cols-2 gap-3 max-h-80 overflow-y-auto p-1">
                {cropOptions.map(crop => (
                  <button
                    key={crop}
                    type="button"
                    onClick={() => handleMultiSelect('cropTypes', crop)}
                    className={`py-3 px-4 rounded-xl border-2 transition-all text-left flex items-center gap-2 ${
                      formData.cropTypes.includes(crop)
                        ? 'border-emerald-500 bg-emerald-500/20 text-white'
                        : 'border-white/20 bg-white/5 text-gray-300 hover:border-white/40'
                    }`}
                  >
                    {formData.cropTypes.includes(crop) && <Check className="w-4 h-4 text-emerald-400" />}
                    <span className="text-sm">{crop}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">Primary crop</label>
              <div className="relative">
                <Sprout className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  name="primaryCrop"
                  value={formData.primaryCrop}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all appearance-none cursor-pointer"
                >
                  <option value="" className="bg-gray-900">Select primary crop</option>
                  {formData.cropTypes.map(crop => (
                    <option key={crop} value={crop} className="bg-gray-900">{crop}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">Location & Farm Size</h2>
              <p className="text-gray-400">Where is your farm located?</p>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">Country</label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                  placeholder="e.g., Nigeria"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">State/Province</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                  placeholder="e.g., Lagos"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                  placeholder="e.g., Ikeja"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">Farm size</label>
              <div className="flex gap-3">
                <input
                  type="number"
                  name="farmSize"
                  value={formData.farmSize}
                  onChange={handleChange}
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                  placeholder="10"
                />
                <select
                  name="farmSizeUnit"
                  value={formData.farmSizeUnit}
                  onChange={handleChange}
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all appearance-none cursor-pointer"
                >
                  <option value="hectares" className="bg-gray-900">Hectares</option>
                  <option value="acres" className="bg-gray-900">Acres</option>
                  <option value="sqm" className="bg-gray-900">Sq. Meters</option>
                </select>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">Your Farming Goals</h2>
              <p className="text-gray-400">What do you want to achieve?</p>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">Select your goals</label>
              <div className="grid grid-cols-2 gap-3">
                {goalOptions.map(goal => (
                  <button
                    key={goal}
                    type="button"
                    onClick={() => handleMultiSelect('farmingGoals', goal)}
                    className={`py-3 px-4 rounded-xl border-2 transition-all text-left flex items-center gap-2 ${
                      formData.farmingGoals.includes(goal)
                        ? 'border-emerald-500 bg-emerald-500/20 text-white'
                        : 'border-white/20 bg-white/5 text-gray-300 hover:border-white/40'
                    }`}
                  >
                    {formData.farmingGoals.includes(goal) && <Check className="w-4 h-4 text-emerald-400" />}
                    <span className="text-sm">{goal}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">Current challenges</label>
              <div className="grid grid-cols-2 gap-3">
                {challengeOptions.map(challenge => (
                  <button
                    key={challenge}
                    type="button"
                    onClick={() => handleMultiSelect('challenges', challenge)}
                    className={`py-3 px-4 rounded-xl border-2 transition-all text-left flex items-center gap-2 ${
                      formData.challenges.includes(challenge)
                        ? 'border-emerald-500 bg-emerald-500/20 text-white'
                        : 'border-white/20 bg-white/5 text-gray-300 hover:border-white/40'
                    }`}
                  >
                    {formData.challenges.includes(challenge) && <Check className="w-4 h-4 text-emerald-400" />}
                    <span className="text-sm">{challenge}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-green-900 to-teal-950">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-lime-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-emerald-400/20 rounded-full"
            style={{
              width: Math.random() * 10 + 5 + 'px',
              height: Math.random() * 10 + 5 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: Math.random() * 5 + 's'
            }}
          ></div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-2xl">
          {/* Back Button */}
          <a 
            href="/" 
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-8 transition-all group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </a>

          {/* Registration Card */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl p-8 md:p-10">
            {/* Logo */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="bg-gradient-to-br from-emerald-400 to-teal-500 p-3 rounded-xl shadow-lg">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 via-teal-300 to-lime-400 bg-clip-text text-transparent">
                Agrid AI
              </span>
            </div>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-400">Step {currentStep} of {totalSteps}</span>
                <span className="text-sm text-emerald-400">{Math.round((currentStep / totalSteps) * 100)}%</span>
              </div>
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-500 ease-out"
                  style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                ></div>
              </div>
              
              {/* Step Indicators */}
              <div className="flex justify-between mt-4">
                {[...Array(totalSteps)].map((_, i) => (
                  <div 
                    key={i}
                    className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all ${
                      i + 1 < currentStep 
                        ? 'border-emerald-500 bg-emerald-500/20 text-emerald-400'
                        : i + 1 === currentStep
                        ? 'border-emerald-500 bg-emerald-500/10 text-emerald-400'
                        : 'border-white/20 bg-white/5 text-gray-500'
                    }`}
                  >
                    {i + 1 < currentStep ? <Check className="w-5 h-5" /> : i + 1}
                  </div>
                ))}
              </div>
            </div>

            {/* Step Content */}
            {renderStep()}

            {/* Navigation Buttons */}
            <div className="flex gap-4 mt-8">
              {currentStep > 1 && (
                <button
                  onClick={prevStep}
                  className="flex-1 py-4 rounded-xl border-2 border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white font-semibold transition-all flex items-center justify-center gap-2"
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span>Previous</span>
                </button>
              )}
              
              {currentStep < totalSteps ? (
                <button
                  onClick={nextStep}
                  className="flex-1 py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-lime-500 hover:from-emerald-600 hover:via-teal-600 hover:to-lime-600 text-white font-semibold shadow-lg hover:shadow-emerald-500/50 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  <span>Next</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="flex-1 py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-lime-500 hover:from-emerald-600 hover:via-teal-600 hover:to-lime-600 text-white font-semibold shadow-lg hover:shadow-emerald-500/50 transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader className="w-5 h-5 animate-spin" />
                      <span>Creating Account...</span>
                    </>
                  ) : (
                    <>
                      <span>Complete Setup</span>
                      <Check className="w-5 h-5" />
                    </>
                  )}
                </button>
              )}
            </div>

            {/* Login Link */}
            <div className="mt-8 text-center">
              <p className="text-gray-400">
                Already have an account?{' '}
                <a href="/auth/login" className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors">
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.2; }
          50% { transform: translateY(-100px) translateX(50px); opacity: 0.5; }
        }
      `}</style>
    </div>
  );
}