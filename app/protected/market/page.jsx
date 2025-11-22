'use client'
import React, { useState } from 'react';
import { 
  TrendingUp, TrendingDown, DollarSign, Search, Filter, 
  BarChart3, Calendar, MapPin, ShoppingCart, AlertCircle,
  RefreshCw, Bell, Bookmark, Share2, ArrowUpRight, ArrowDownRight,
  Package, Truck, Store
} from 'lucide-react';

export default function MarketPage() {
  const [selectedCrop, setSelectedCrop] = useState(null);
  const [view, setView] = useState('grid'); // 'grid' or 'list'
  const [timeRange, setTimeRange] = useState('7d'); // '24h', '7d', '30d', '1y'
  const [searchQuery, setSearchQuery] = useState('');

  // Mock market data
  const crops = [
    {
      id: 1,
      name: 'Maize/Corn',
      icon: '🌽',
      currentPrice: 145000,
      unit: 'ton',
      change: 8.5,
      trend: 'up',
      volume: '2,450 tons',
      lastUpdated: '5 min ago',
      high24h: 148000,
      low24h: 142000,
      market: 'Lagos Commodity',
      category: 'Grains',
      history: [142, 143, 145, 144, 146, 148, 145]
    },
    {
      id: 2,
      name: 'Rice',
      icon: '🌾',
      currentPrice: 425000,
      unit: 'ton',
      change: -3.2,
      trend: 'down',
      volume: '1,850 tons',
      lastUpdated: '12 min ago',
      high24h: 435000,
      low24h: 420000,
      market: 'National Market',
      category: 'Grains',
      history: [435, 432, 428, 430, 425, 422, 425]
    },
    {
      id: 3,
      name: 'Cassava',
      icon: '🥔',
      currentPrice: 85000,
      unit: 'ton',
      change: 5.1,
      trend: 'up',
      volume: '3,200 tons',
      lastUpdated: '8 min ago',
      high24h: 87000,
      low24h: 82000,
      market: 'Lagos Commodity',
      category: 'Tubers',
      history: [82, 83, 84, 85, 86, 87, 85]
    },
    {
      id: 4,
      name: 'Tomatoes',
      icon: '🍅',
      currentPrice: 95000,
      unit: 'ton',
      change: 12.8,
      trend: 'up',
      volume: '890 tons',
      lastUpdated: '3 min ago',
      high24h: 98000,
      low24h: 85000,
      market: 'Fresh Produce',
      category: 'Vegetables',
      history: [85, 88, 90, 92, 95, 98, 95]
    },
    {
      id: 5,
      name: 'Yam',
      icon: '🍠',
      currentPrice: 125000,
      unit: 'ton',
      change: -1.5,
      trend: 'down',
      volume: '1,450 tons',
      lastUpdated: '15 min ago',
      high24h: 128000,
      low24h: 124000,
      market: 'National Market',
      category: 'Tubers',
      history: [128, 127, 126, 125, 126, 124, 125]
    },
    {
      id: 6,
      name: 'Palm Oil',
      icon: '🌴',
      currentPrice: 1250000,
      unit: 'ton',
      change: 4.3,
      trend: 'up',
      volume: '650 tons',
      lastUpdated: '20 min ago',
      high24h: 1280000,
      low24h: 1220000,
      market: 'Oil & Fats',
      category: 'Oil Seeds',
      history: [1220, 1235, 1248, 1240, 1255, 1280, 1250]
    },
    {
      id: 7,
      name: 'Cocoa',
      icon: '🍫',
      currentPrice: 3500000,
      unit: 'ton',
      change: 15.2,
      trend: 'up',
      volume: '420 tons',
      lastUpdated: '10 min ago',
      high24h: 3600000,
      low24h: 3100000,
      market: 'Export',
      category: 'Cash Crops',
      history: [3100, 3200, 3350, 3400, 3500, 3600, 3500]
    },
    {
      id: 8,
      name: 'Pepper',
      icon: '🌶️',
      currentPrice: 450000,
      unit: 'ton',
      change: -6.8,
      trend: 'down',
      volume: '780 tons',
      lastUpdated: '7 min ago',
      high24h: 485000,
      low24h: 445000,
      market: 'Fresh Produce',
      category: 'Vegetables',
      history: [485, 475, 465, 460, 455, 445, 450]
    }
  ];

  const marketNews = [
    {
      title: 'Maize prices surge due to high demand',
      time: '2 hours ago',
      impact: 'positive',
      icon: TrendingUp
    },
    {
      title: 'Rice imports expected to stabilize prices',
      time: '5 hours ago',
      impact: 'neutral',
      icon: AlertCircle
    },
    {
      title: 'Tomato glut leads to price drop',
      time: '1 day ago',
      impact: 'negative',
      icon: TrendingDown
    }
  ];

  const topMovers = {
    gainers: crops.filter(c => c.trend === 'up').sort((a, b) => b.change - a.change).slice(0, 3),
    losers: crops.filter(c => c.trend === 'down').sort((a, b) => a.change - b.change).slice(0, 3)
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0
    }).format(price);
  };

  const filteredCrops = crops.filter(crop =>
    crop.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    crop.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const CropCard = ({ crop }) => (
    <div 
      onClick={() => setSelectedCrop(crop)}
      className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:border-emerald-500/30 transition-all cursor-pointer group"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="text-4xl">{crop.icon}</div>
          <div>
            <h3 className="text-lg font-bold text-white">{crop.name}</h3>
            <p className="text-xs text-gray-400">{crop.category}</p>
          </div>
        </div>
        <button className="p-2 rounded-lg hover:bg-white/10 text-gray-400 opacity-0 group-hover:opacity-100 transition-all">
          <Bookmark className="w-5 h-5" />
        </button>
      </div>

      <div className="mb-4">
        <div className="flex items-end gap-2 mb-2">
          <span className="text-3xl font-bold text-white">{formatPrice(crop.currentPrice)}</span>
          <span className="text-sm text-gray-400 mb-1">/{crop.unit}</span>
        </div>
        <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-sm font-medium ${
          crop.trend === 'up' 
            ? 'bg-emerald-500/20 text-emerald-400' 
            : 'bg-red-500/20 text-red-400'
        }`}>
          {crop.trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
          {Math.abs(crop.change)}%
        </div>
      </div>

      <div className="h-16 mb-4 flex items-end gap-1">
        {crop.history.map((val, i) => (
          <div 
            key={i}
            className={`flex-1 rounded-t transition-all ${
              crop.trend === 'up' ? 'bg-emerald-500/30' : 'bg-red-500/30'
            }`}
            style={{ height: `${(val / Math.max(...crop.history)) * 100}%` }}
          ></div>
        ))}
      </div>

      <div className="space-y-2 text-sm">
        <div className="flex items-center justify-between text-gray-400">
          <span>Volume</span>
          <span className="text-white font-medium">{crop.volume}</span>
        </div>
        <div className="flex items-center justify-between text-gray-400">
          <span>24h High</span>
          <span className="text-emerald-400">{formatPrice(crop.high24h)}</span>
        </div>
        <div className="flex items-center justify-between text-gray-400">
          <span>24h Low</span>
          <span className="text-red-400">{formatPrice(crop.low24h)}</span>
        </div>
        <div className="flex items-center justify-between text-gray-400">
          <span>Market</span>
          <span className="text-white text-xs">{crop.market}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Market Prices</h1>
          <p className="text-gray-400">Real-time commodity prices and market insights</p>
        </div>
        <button className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 rounded-xl text-white font-semibold flex items-center gap-2 transition-all shadow-lg hover:shadow-emerald-500/50">
          <Bell className="w-5 h-5" />
          Set Price Alert
        </button>
      </div>

      {/* Market Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Volume', value: '11.7K tons', icon: Package, color: 'blue' },
          { label: 'Active Markets', value: '24', icon: Store, color: 'purple' },
          { label: 'Avg. Growth', value: '+5.2%', icon: TrendingUp, color: 'emerald' },
          { label: 'Tracked Items', value: crops.length, icon: BarChart3, color: 'yellow' }
        ].map((stat, i) => (
          <div key={i} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-4">
            <div className={`p-2 rounded-lg bg-${stat.color}-500/20 w-fit mb-3`}>
              <stat.icon className={`w-5 h-5 text-${stat.color}-400`} />
            </div>
            <p className="text-2xl font-bold text-white">{stat.value}</p>
            <p className="text-sm text-gray-400">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Top Movers */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 backdrop-blur-sm rounded-2xl border border-emerald-500/30 p-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <ArrowUpRight className="w-6 h-6 text-emerald-400" />
            Top Gainers
          </h2>
          <div className="space-y-3">
            {topMovers.gainers.map((crop, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all cursor-pointer">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{crop.icon}</span>
                  <div>
                    <p className="text-white font-medium">{crop.name}</p>
                    <p className="text-xs text-gray-400">{formatPrice(crop.currentPrice)}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-emerald-400 font-bold">+{crop.change}%</p>
                  <p className="text-xs text-gray-400">{crop.volume}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-red-500/10 to-red-500/5 backdrop-blur-sm rounded-2xl border border-red-500/30 p-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <ArrowDownRight className="w-6 h-6 text-red-400" />
            Top Losers
          </h2>
          <div className="space-y-3">
            {topMovers.losers.map((crop, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all cursor-pointer">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{crop.icon}</span>
                  <div>
                    <p className="text-white font-medium">{crop.name}</p>
                    <p className="text-xs text-gray-400">{formatPrice(crop.currentPrice)}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-red-400 font-bold">{crop.change}%</p>
                  <p className="text-xs text-gray-400">{crop.volume}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search commodities..."
            className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
        <button className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl text-white hover:bg-white/20 transition-all flex items-center gap-2">
          <RefreshCw className="w-5 h-5" />
          Refresh
        </button>
      </div>

      {/* Market News */}
      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
        <h2 className="text-xl font-bold text-white mb-4">Market News</h2>
        <div className="space-y-3">
          {marketNews.map((news, i) => (
            <div key={i} className="flex items-start gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all cursor-pointer">
              <div className={`p-2 rounded-lg ${
                news.impact === 'positive' ? 'bg-emerald-500/20' :
                news.impact === 'negative' ? 'bg-red-500/20' :
                'bg-blue-500/20'
              }`}>
                <news.icon className={`w-5 h-5 ${
                  news.impact === 'positive' ? 'text-emerald-400' :
                  news.impact === 'negative' ? 'text-red-400' :
                  'text-blue-400'
                }`} />
              </div>
              <div className="flex-1">
                <p className="text-white font-medium">{news.title}</p>
                <p className="text-gray-400 text-xs mt-1">{news.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* All Commodities Grid */}
      <div>
        <h2 className="text-xl font-bold text-white mb-4">All Commodities</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCrops.map(crop => (
            <CropCard key={crop.id} crop={crop} />
          ))}
        </div>
      </div>

      {/* Crop Detail Modal */}
      {selectedCrop && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
             onClick={() => setSelectedCrop(null)}>
          <div className="bg-gray-900 rounded-2xl border border-white/10 max-w-3xl w-full max-h-[90vh] overflow-y-auto"
               onClick={(e) => e.stopPropagation()}>
            <div className="p-6 border-b border-white/10 flex items-center justify-between sticky top-0 bg-gray-900 z-10">
              <div className="flex items-center gap-3">
                <span className="text-4xl">{selectedCrop.icon}</span>
                <div>
                  <h2 className="text-2xl font-bold text-white">{selectedCrop.name}</h2>
                  <p className="text-gray-400">{selectedCrop.category} • {selectedCrop.market}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 rounded-lg hover:bg-white/10 text-gray-400">
                  <Share2 className="w-5 h-5" />
                </button>
                <button className="p-2 rounded-lg hover:bg-white/10 text-gray-400">
                  <Bookmark className="w-5 h-5" />
                </button>
                <button onClick={() => setSelectedCrop(null)} className="p-2 rounded-lg hover:bg-white/10 text-gray-400">
                  ✕
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Price Overview */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className="md:col-span-2 bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-6 border border-white/10">
                  <div className="flex items-end gap-3 mb-4">
                    <span className="text-4xl font-bold text-white">{formatPrice(selectedCrop.currentPrice)}</span>
                    <span className="text-gray-400 mb-2">per {selectedCrop.unit}</span>
                  </div>
                  <div className={`inline-flex items-center gap-2 px-3 py-2 rounded-full text-lg font-medium ${
                    selectedCrop.trend === 'up' 
                      ? 'bg-emerald-500/20 text-emerald-400' 
                      : 'bg-red-500/20 text-red-400'
                  }`}>
                    {selectedCrop.trend === 'up' ? <TrendingUp className="w-5 h-5" /> : <TrendingDown className="w-5 h-5" />}
                    {Math.abs(selectedCrop.change)}% (24h)
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-gray-400 text-sm mb-1">24h High</p>
                    <p className="text-emerald-400 text-xl font-bold">{formatPrice(selectedCrop.high24h)}</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-gray-400 text-sm mb-1">24h Low</p>
                    <p className="text-red-400 text-xl font-bold">{formatPrice(selectedCrop.low24h)}</p>
                  </div>
                </div>
              </div>

              {/* Chart */}
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-white">Price History</h3>
                  <div className="flex gap-2">
                    {['24h', '7d', '30d', '1y'].map(range => (
                      <button
                        key={range}
                        onClick={() => setTimeRange(range)}
                        className={`px-3 py-1 rounded-lg text-sm font-medium transition-all ${
                          timeRange === range
                            ? 'bg-emerald-500/20 text-emerald-400'
                            : 'bg-white/5 text-gray-400 hover:bg-white/10'
                        }`}
                      >
                        {range}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="h-48 flex items-end gap-2">
                  {selectedCrop.history.map((val, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-2">
                      <div className="relative w-full" style={{ height: `${(val / Math.max(...selectedCrop.history)) * 100}%` }}>
                        <div className={`absolute bottom-0 w-full rounded-t-lg ${
                          selectedCrop.trend === 'up' ? 'bg-gradient-to-t from-emerald-500 to-emerald-400' : 'bg-gradient-to-t from-red-500 to-red-400'
                        }`}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Market Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <p className="text-gray-400 text-sm mb-1">Trading Volume</p>
                  <p className="text-white text-xl font-bold">{selectedCrop.volume}</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <p className="text-gray-400 text-sm mb-1">Last Updated</p>
                  <p className="text-white text-xl font-bold">{selectedCrop.lastUpdated}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button className="flex-1 px-4 py-3 bg-emerald-500/20 border border-emerald-500/30 rounded-xl text-emerald-400 hover:bg-emerald-500/30 transition-all flex items-center justify-center gap-2">
                  <Bell className="w-5 h-5" />
                  Set Alert
                </button>
                <button className="flex-1 px-4 py-3 bg-blue-500/20 border border-blue-500/30 rounded-xl text-blue-400 hover:bg-blue-500/30 transition-all flex items-center justify-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Find Buyers
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}