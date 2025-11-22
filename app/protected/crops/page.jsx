'use client'
import React, { useState } from 'react';
import { 
  Sprout, Plus, Search, Filter, Calendar, Droplets, Sun, 
  TrendingUp, AlertTriangle, CheckCircle, MoreVertical, Edit2, 
  Trash2, Eye, MapPin, Clock, Thermometer, Wind
} from 'lucide-react';

export default function CropsPage() {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [selectedCrop, setSelectedCrop] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all'); // 'all', 'healthy', 'warning', 'critical'

  // Mock crop data
  const [crops, setCrops] = useState([
    {
      id: 1,
      name: 'Maize Field A',
      type: 'Maize/Corn',
      area: '2.5 hectares',
      plantedDate: '2025-09-15',
      harvestDate: '2025-12-20',
      status: 'healthy',
      health: 92,
      waterLevel: 85,
      temperature: 28,
      humidity: 65,
      growth: 45,
      location: 'North Field',
      image: '🌽',
      notes: 'Growing well, regular watering maintained'
    },
    {
      id: 2,
      name: 'Rice Field B',
      type: 'Rice',
      area: '3.0 hectares',
      plantedDate: '2025-08-20',
      harvestDate: '2025-11-25',
      status: 'warning',
      health: 78,
      waterLevel: 92,
      temperature: 30,
      humidity: 80,
      growth: 65,
      location: 'East Field',
      image: '🌾',
      notes: 'Monitor for pests, increase nitrogen'
    },
    {
      id: 3,
      name: 'Tomato Garden',
      type: 'Vegetables',
      area: '0.5 hectares',
      plantedDate: '2025-10-01',
      harvestDate: '2025-12-15',
      status: 'healthy',
      health: 88,
      waterLevel: 75,
      temperature: 26,
      humidity: 70,
      growth: 30,
      location: 'South Garden',
      image: '🍅',
      notes: 'Good progress, maintain current care'
    },
    {
      id: 4,
      name: 'Cassava Plot',
      type: 'Cassava',
      area: '1.8 hectares',
      plantedDate: '2025-07-10',
      harvestDate: '2026-01-10',
      status: 'healthy',
      health: 85,
      waterLevel: 68,
      temperature: 29,
      humidity: 62,
      growth: 75,
      location: 'West Plot',
      image: '🥔',
      notes: 'Ready for harvest soon'
    }
  ]);

  const getStatusColor = (status) => {
    switch(status) {
      case 'healthy': return 'emerald';
      case 'warning': return 'yellow';
      case 'critical': return 'red';
      default: return 'gray';
    }
  };

  const getDaysUntilHarvest = (harvestDate) => {
    const today = new Date();
    const harvest = new Date(harvestDate);
    const diffTime = harvest - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const filteredCrops = crops.filter(crop => {
    const matchesSearch = crop.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         crop.type.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === 'all' || crop.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const CropCard = ({ crop }) => (
    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:border-emerald-500/30 transition-all group cursor-pointer"
         onClick={() => setSelectedCrop(crop)}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="text-4xl">{crop.image}</div>
          <div>
            <h3 className="text-lg font-bold text-white">{crop.name}</h3>
            <p className="text-sm text-gray-400">{crop.type}</p>
          </div>
        </div>
        <button className="p-2 rounded-lg hover:bg-white/10 text-gray-400 opacity-0 group-hover:opacity-100 transition-all">
          <MoreVertical className="w-5 h-5" />
        </button>
      </div>

      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-${getStatusColor(crop.status)}-500/20 border border-${getStatusColor(crop.status)}-500/30 mb-4`}>
        <div className={`w-2 h-2 rounded-full bg-${getStatusColor(crop.status)}-400`}></div>
        <span className={`text-xs font-medium text-${getStatusColor(crop.status)}-400 capitalize`}>{crop.status}</span>
      </div>

      <div className="space-y-3 mb-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-400">Health Score</span>
          <span className="text-sm font-medium text-white">{crop.health}%</span>
        </div>
        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
          <div 
            className={`h-full bg-gradient-to-r from-${getStatusColor(crop.status)}-500 to-${getStatusColor(crop.status)}-400 transition-all duration-500`}
            style={{ width: `${crop.health}%` }}
          ></div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-gray-400" />
          <span className="text-xs text-gray-400">{crop.location}</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-gray-400" />
          <span className="text-xs text-gray-400">{crop.area}</span>
        </div>
      </div>

      <div className="pt-4 border-t border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-emerald-400" />
          <span className="text-sm text-emerald-400">{getDaysUntilHarvest(crop.harvestDate)} days to harvest</span>
        </div>
        <div className={`w-12 h-12 rounded-full bg-${getStatusColor(crop.status)}-500/20 flex items-center justify-center`}>
          <span className="text-sm font-bold text-white">{crop.growth}%</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">My Crops</h1>
          <p className="text-gray-400">Monitor and manage all your crops in one place</p>
        </div>
        <button 
          onClick={() => setShowAddModal(true)}
          className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 rounded-xl text-white font-semibold flex items-center gap-2 transition-all shadow-lg hover:shadow-emerald-500/50"
        >
          <Plus className="w-5 h-5" />
          Add New Crop
        </button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Crops', value: crops.length, icon: Sprout, color: 'emerald' },
          { label: 'Total Area', value: '7.8 ha', icon: MapPin, color: 'blue' },
          { label: 'Healthy', value: crops.filter(c => c.status === 'healthy').length, icon: CheckCircle, color: 'green' },
          { label: 'Need Attention', value: crops.filter(c => c.status === 'warning').length, icon: AlertTriangle, color: 'yellow' }
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

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search crops..."
            className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
        <div className="flex gap-2">
          {['all', 'healthy', 'warning', 'critical'].map(status => (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              className={`px-4 py-3 rounded-xl font-medium transition-all capitalize ${
                filterStatus === status
                  ? 'bg-emerald-500/20 border-2 border-emerald-500/50 text-emerald-400'
                  : 'bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Crops Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCrops.map(crop => (
          <CropCard key={crop.id} crop={crop} />
        ))}
      </div>

      {/* Crop Detail Modal */}
      {selectedCrop && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
             onClick={() => setSelectedCrop(null)}>
          <div className="bg-gray-900 rounded-2xl border border-white/10 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
               onClick={(e) => e.stopPropagation()}>
            <div className="p-6 border-b border-white/10 flex items-center justify-between sticky top-0 bg-gray-900 z-10">
              <div className="flex items-center gap-3">
                <div className="text-4xl">{selectedCrop.image}</div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{selectedCrop.name}</h2>
                  <p className="text-gray-400">{selectedCrop.type}</p>
                </div>
              </div>
              <button onClick={() => setSelectedCrop(null)} className="p-2 rounded-lg hover:bg-white/10 text-gray-400">
                ✕
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Status and Growth */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Growth Stage</span>
                    <span className="text-lg font-bold text-white">{selectedCrop.growth}%</span>
                  </div>
                  <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-500" style={{ width: `${selectedCrop.growth}%` }}></div>
                  </div>
                </div>

                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Health Score</span>
                    <span className="text-lg font-bold text-white">{selectedCrop.health}%</span>
                  </div>
                  <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                    <div className={`h-full bg-gradient-to-r from-${getStatusColor(selectedCrop.status)}-500 to-${getStatusColor(selectedCrop.status)}-400`} 
                         style={{ width: `${selectedCrop.health}%` }}></div>
                  </div>
                </div>
              </div>

              {/* Environmental Conditions */}
              <div>
                <h3 className="text-lg font-bold text-white mb-4">Environmental Conditions</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="flex items-center gap-3 mb-2">
                      <Droplets className="w-5 h-5 text-blue-400" />
                      <span className="text-sm text-gray-400">Water Level</span>
                    </div>
                    <p className="text-2xl font-bold text-white">{selectedCrop.waterLevel}%</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="flex items-center gap-3 mb-2">
                      <Thermometer className="w-5 h-5 text-red-400" />
                      <span className="text-sm text-gray-400">Temperature</span>
                    </div>
                    <p className="text-2xl font-bold text-white">{selectedCrop.temperature}°C</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="flex items-center gap-3 mb-2">
                      <Wind className="w-5 h-5 text-cyan-400" />
                      <span className="text-sm text-gray-400">Humidity</span>
                    </div>
                    <p className="text-2xl font-bold text-white">{selectedCrop.humidity}%</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="flex items-center gap-3 mb-2">
                      <Sun className="w-5 h-5 text-yellow-400" />
                      <span className="text-sm text-gray-400">Sunlight</span>
                    </div>
                    <p className="text-2xl font-bold text-white">Good</p>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div>
                <h3 className="text-lg font-bold text-white mb-4">Crop Timeline</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-emerald-500/20">
                      <Calendar className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Planted</p>
                      <p className="text-sm text-gray-400">{new Date(selectedCrop.plantedDate).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-blue-500/20">
                      <TrendingUp className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Expected Harvest</p>
                      <p className="text-sm text-gray-400">{new Date(selectedCrop.harvestDate).toLocaleDateString()} ({getDaysUntilHarvest(selectedCrop.harvestDate)} days)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Notes */}
              <div>
                <h3 className="text-lg font-bold text-white mb-3">Notes</h3>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <p className="text-gray-300">{selectedCrop.notes}</p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <button className="flex-1 px-4 py-3 bg-emerald-500/20 border border-emerald-500/30 rounded-xl text-emerald-400 hover:bg-emerald-500/30 transition-all flex items-center justify-center gap-2">
                  <Edit2 className="w-5 h-5" />
                  Edit Details
                </button>
                <button className="flex-1 px-4 py-3 bg-blue-500/20 border border-blue-500/30 rounded-xl text-blue-400 hover:bg-blue-500/30 transition-all flex items-center justify-center gap-2">
                  <Eye className="w-5 h-5" />
                  View Analytics
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Crop Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
             onClick={() => setShowAddModal(false)}>
          <div className="bg-gray-900 rounded-2xl border border-white/10 max-w-md w-full"
               onClick={(e) => e.stopPropagation()}>
            <div className="p-6 border-b border-white/10">
              <h2 className="text-2xl font-bold text-white">Add New Crop</h2>
              <p className="text-gray-400 text-sm mt-1">Enter details about your new crop</p>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Crop Name</label>
                <input type="text" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="e.g., Maize Field C" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Crop Type</label>
                <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-500">
                  <option value="">Select crop type</option>
                  <option value="maize">Maize/Corn</option>
                  <option value="rice">Rice</option>
                  <option value="cassava">Cassava</option>
                  <option value="vegetables">Vegetables</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Area (hectares)</label>
                <input type="number" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="2.5" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Location</label>
                <input type="text" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="e.g., North Field" />
              </div>
              <div className="flex gap-3 pt-4">
                <button onClick={() => setShowAddModal(false)} className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-gray-400 hover:bg-white/10 transition-all">
                  Cancel
                </button>
                <button className="flex-1 px-4 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl text-white hover:from-emerald-600 hover:to-teal-600 transition-all">
                  Add Crop
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}