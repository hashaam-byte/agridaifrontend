'use client'
import React, { useState } from 'react';
import { 
  Cloud, CloudRain, Sun, Wind, Droplets, Eye, Gauge, 
  CloudSnow, CloudDrizzle, CloudLightning, Sunrise, Sunset,
  MapPin, Calendar, AlertTriangle, TrendingUp, TrendingDown,
  Thermometer, Navigation
} from 'lucide-react';

export default function WeatherPage() {
  const [selectedDay, setSelectedDay] = useState(0);
  const [view, setView] = useState('forecast'); // 'forecast' or 'historical'

  // Mock weather data
  const currentWeather = {
    temperature: 28,
    feelsLike: 31,
    condition: 'Partly Cloudy',
    icon: Cloud,
    humidity: 65,
    windSpeed: 12,
    windDirection: 'NE',
    pressure: 1013,
    visibility: 10,
    uvIndex: 7,
    sunrise: '06:24 AM',
    sunset: '06:45 PM',
    location: 'Lagos, Nigeria',
    lastUpdated: '10 minutes ago'
  };

  const hourlyForecast = [
    { time: '9 AM', temp: 26, icon: Sun, rain: 0 },
    { time: '10 AM', temp: 27, icon: Sun, rain: 0 },
    { time: '11 AM', temp: 28, icon: Sun, rain: 5 },
    { time: '12 PM', temp: 29, icon: Cloud, rain: 10 },
    { time: '1 PM', temp: 30, icon: Cloud, rain: 15 },
    { time: '2 PM', temp: 29, icon: CloudRain, rain: 40 },
    { time: '3 PM', temp: 28, icon: CloudRain, rain: 60 },
    { time: '4 PM', temp: 27, icon: CloudRain, rain: 50 },
    { time: '5 PM', temp: 26, icon: Cloud, rain: 20 },
    { time: '6 PM', temp: 25, icon: Cloud, rain: 10 }
  ];

  const weeklyForecast = [
    { day: 'Today', date: 'Nov 22', high: 30, low: 24, icon: Cloud, condition: 'Partly Cloudy', rain: 20 },
    { day: 'Sat', date: 'Nov 23', high: 29, low: 23, icon: CloudRain, condition: 'Rain Showers', rain: 80 },
    { day: 'Sun', date: 'Nov 24', high: 27, low: 22, icon: CloudRain, condition: 'Heavy Rain', rain: 90 },
    { day: 'Mon', date: 'Nov 25', high: 28, low: 23, icon: CloudDrizzle, condition: 'Light Rain', rain: 40 },
    { day: 'Tue', date: 'Nov 26', high: 29, low: 24, icon: Cloud, condition: 'Cloudy', rain: 10 },
    { day: 'Wed', date: 'Nov 27', high: 31, low: 25, icon: Sun, condition: 'Sunny', rain: 0 },
    { day: 'Thu', date: 'Nov 28', high: 32, low: 26, icon: Sun, condition: 'Clear Sky', rain: 0 }
  ];

  const alerts = [
    {
      type: 'warning',
      title: 'Heavy Rainfall Expected',
      message: 'Expect heavy rainfall on Sunday. Consider postponing outdoor activities.',
      time: '2 hours ago',
      icon: CloudRain
    },
    {
      type: 'info',
      title: 'Optimal Planting Conditions',
      message: 'Weather conditions are favorable for planting this weekend.',
      time: '1 day ago',
      icon: Sun
    }
  ];

  const farmingInsights = [
    {
      title: 'Irrigation Recommendation',
      description: 'Expected rainfall will provide sufficient water. Reduce irrigation by 30%.',
      icon: Droplets,
      color: 'blue'
    },
    {
      title: 'Pest Activity',
      description: 'Humid conditions may increase pest activity. Monitor crops closely.',
      icon: AlertTriangle,
      color: 'yellow'
    },
    {
      title: 'Harvesting Window',
      description: 'Clear weather forecasted for next week. Ideal for harvesting.',
      icon: Calendar,
      color: 'emerald'
    }
  ];

  const getWeatherIcon = (IconComponent, size = 'w-8 h-8') => {
    return <IconComponent className={`${size} text-yellow-400`} />;
  };

  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Weather Forecast</h1>
          <div className="flex items-center gap-2 text-gray-400">
            <MapPin className="w-4 h-4" />
            <span>{currentWeather.location}</span>
            <span className="text-xs">• Updated {currentWeather.lastUpdated}</span>
          </div>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => setView('forecast')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              view === 'forecast' 
                ? 'bg-emerald-500/20 border border-emerald-500/50 text-emerald-400' 
                : 'bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10'
            }`}
          >
            Forecast
          </button>
          <button 
            onClick={() => setView('historical')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              view === 'historical' 
                ? 'bg-emerald-500/20 border border-emerald-500/50 text-emerald-400' 
                : 'bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10'
            }`}
          >
            Historical
          </button>
        </div>
      </div>

      {/* Weather Alerts */}
      {alerts.length > 0 && (
        <div className="space-y-3">
          {alerts.map((alert, i) => (
            <div key={i} className={`flex items-start gap-4 p-4 rounded-xl border backdrop-blur-sm ${
              alert.type === 'warning' 
                ? 'bg-yellow-500/10 border-yellow-500/30' 
                : 'bg-blue-500/10 border-blue-500/30'
            }`}>
              <div className={`p-2 rounded-lg ${
                alert.type === 'warning' ? 'bg-yellow-500/20' : 'bg-blue-500/20'
              }`}>
                <alert.icon className={`w-5 h-5 ${
                  alert.type === 'warning' ? 'text-yellow-400' : 'text-blue-400'
                }`} />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-semibold mb-1">{alert.title}</h3>
                <p className="text-gray-300 text-sm">{alert.message}</p>
                <p className="text-gray-500 text-xs mt-2">{alert.time}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Current Weather Card */}
      <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl border border-blue-500/30 p-6 md:p-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-6">
              {getWeatherIcon(currentWeather.icon, 'w-20 h-20')}
              <div>
                <div className="text-6xl font-bold text-white">{currentWeather.temperature}°</div>
                <p className="text-gray-300 text-lg mt-1">{currentWeather.condition}</p>
                <p className="text-gray-400 text-sm">Feels like {currentWeather.feelsLike}°C</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <Sunrise className="w-5 h-5 text-orange-400" />
                  <span className="text-sm text-gray-400">Sunrise</span>
                </div>
                <p className="text-lg font-semibold text-white">{currentWeather.sunrise}</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <Sunset className="w-5 h-5 text-orange-400" />
                  <span className="text-sm text-gray-400">Sunset</span>
                </div>
                <p className="text-lg font-semibold text-white">{currentWeather.sunset}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Droplets, label: 'Humidity', value: `${currentWeather.humidity}%`, color: 'blue' },
              { icon: Wind, label: 'Wind Speed', value: `${currentWeather.windSpeed} km/h`, color: 'cyan' },
              { icon: Gauge, label: 'Pressure', value: `${currentWeather.pressure} hPa`, color: 'purple' },
              { icon: Eye, label: 'Visibility', value: `${currentWeather.visibility} km`, color: 'emerald' },
              { icon: Navigation, label: 'Wind Dir.', value: currentWeather.windDirection, color: 'teal' },
              { icon: Sun, label: 'UV Index', value: currentWeather.uvIndex, color: 'yellow' }
            ].map((stat, i) => (
              <div key={i} className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <stat.icon className={`w-5 h-5 text-${stat.color}-400`} />
                  <span className="text-xs text-gray-400">{stat.label}</span>
                </div>
                <p className="text-xl font-bold text-white">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hourly Forecast */}
      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
        <h2 className="text-xl font-bold text-white mb-6">Hourly Forecast</h2>
        <div className="overflow-x-auto">
          <div className="flex gap-4 min-w-max pb-2">
            {hourlyForecast.map((hour, i) => (
              <div key={i} className="flex flex-col items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all cursor-pointer min-w-[100px]">
                <span className="text-sm text-gray-400 font-medium">{hour.time}</span>
                {getWeatherIcon(hour.icon)}
                <span className="text-lg font-bold text-white">{hour.temp}°</span>
                <div className="flex items-center gap-1">
                  <Droplets className="w-4 h-4 text-blue-400" />
                  <span className="text-xs text-gray-400">{hour.rain}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 7-Day Forecast */}
      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
        <h2 className="text-xl font-bold text-white mb-6">7-Day Forecast</h2>
        <div className="space-y-3">
          {weeklyForecast.map((day, i) => (
            <div 
              key={i}
              onClick={() => setSelectedDay(i)}
              className={`flex items-center justify-between p-4 rounded-xl border transition-all cursor-pointer ${
                selectedDay === i
                  ? 'bg-emerald-500/20 border-emerald-500/50'
                  : 'bg-white/5 border-white/10 hover:bg-white/10'
              }`}
            >
              <div className="flex items-center gap-4 flex-1">
                <div className="w-16">
                  <p className="text-white font-semibold">{day.day}</p>
                  <p className="text-gray-400 text-xs">{day.date}</p>
                </div>
                <div className="flex items-center gap-3">
                  {getWeatherIcon(day.icon, 'w-6 h-6')}
                  <p className="text-gray-300 text-sm hidden md:block">{day.condition}</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-1">
                  <Droplets className="w-4 h-4 text-blue-400" />
                  <span className="text-sm text-gray-400">{day.rain}%</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-white font-semibold">{day.high}°</span>
                  <span className="text-gray-400">{day.low}°</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Farming Insights */}
      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-emerald-400" />
          Farming Insights
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {farmingInsights.map((insight, i) => (
            <div key={i} className={`bg-${insight.color}-500/10 border border-${insight.color}-500/30 rounded-xl p-5`}>
              <div className={`p-3 rounded-lg bg-${insight.color}-500/20 w-fit mb-3`}>
                <insight.icon className={`w-6 h-6 text-${insight.color}-400`} />
              </div>
              <h3 className="text-white font-semibold mb-2">{insight.title}</h3>
              <p className="text-gray-300 text-sm">{insight.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Temperature & Rainfall Chart */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
          <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <Thermometer className="w-5 h-5 text-red-400" />
            Temperature Trend
          </h2>
          <div className="h-48 flex items-end justify-between gap-2">
            {weeklyForecast.map((day, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                <div className="relative w-full" style={{ height: `${(day.high / 35) * 100}%` }}>
                  <div className="absolute bottom-0 w-full bg-gradient-to-t from-red-500 to-orange-400 rounded-t-lg"></div>
                </div>
                <span className="text-xs text-gray-400">{day.day.slice(0, 3)}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
          <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <CloudRain className="w-5 h-5 text-blue-400" />
            Rainfall Probability
          </h2>
          <div className="h-48 flex items-end justify-between gap-2">
            {weeklyForecast.map((day, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                <div className="relative w-full" style={{ height: `${day.rain}%` }}>
                  <div className="absolute bottom-0 w-full bg-gradient-to-t from-blue-500 to-cyan-400 rounded-t-lg"></div>
                </div>
                <span className="text-xs text-gray-400">{day.day.slice(0, 3)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}