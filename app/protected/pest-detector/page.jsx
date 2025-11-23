'use client'
import React, { useState, useRef } from 'react';
import { 
  Camera, Upload, Bug, AlertTriangle, CheckCircle, Search,
  Image, X, Zap, Leaf, Shield, Droplets, Sparkles, Clock,
  BookOpen, TrendingUp, ChevronRight, Info
} from 'lucide-react';

export default function PestDetectorPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState(null);
  const [showPestLibrary, setShowPestLibrary] = useState(false);
  const [selectedPest, setSelectedPest] = useState(null);
  const fileInputRef = useRef(null);

  const pestLibrary = [
    {
      id: 1,
      name: 'Fall Armyworm',
      scientificName: 'Spodoptera frugiperda',
      severity: 'high',
      commonCrops: ['Maize', 'Rice', 'Sorghum'],
      image: '🐛',
      symptoms: [
        'Large irregular holes in leaves',
        'Greenish-brown caterpillars with stripes',
        'Frass (insect droppings) visible',
        'Whorl damage in young plants'
      ],
      treatment: [
        'Apply neem-based pesticides',
        'Use biological control (Trichogramma wasps)',
        'Hand-pick larvae in early morning',
        'Plant resistant varieties'
      ],
      prevention: [
        'Regular field monitoring',
        'Crop rotation',
        'Remove crop residues',
        'Use pheromone traps'
      ]
    },
    {
      id: 2,
      name: 'Aphids',
      scientificName: 'Aphidoidea',
      severity: 'medium',
      commonCrops: ['Vegetables', 'Tomatoes', 'Peppers'],
      image: '🦗',
      symptoms: [
        'Curled or yellowing leaves',
        'Sticky honeydew on plants',
        'Small green/black insects on stems',
        'Stunted plant growth'
      ],
      treatment: [
        'Spray with soapy water solution',
        'Use neem oil',
        'Introduce ladybugs',
        'Apply insecticidal soap'
      ],
      prevention: [
        'Companion planting with garlic',
        'Use reflective mulch',
        'Encourage beneficial insects',
        'Regular plant inspection'
      ]
    },
    {
      id: 3,
      name: 'Whiteflies',
      scientificName: 'Aleyrodidae',
      severity: 'medium',
      commonCrops: ['Tomatoes', 'Cassava', 'Beans'],
      image: '🦟',
      symptoms: [
        'White insects fly when disturbed',
        'Yellow sticky leaves',
        'Sooty mold on leaves',
        'Weak plant growth'
      ],
      treatment: [
        'Yellow sticky traps',
        'Neem oil spray',
        'Insecticidal soap',
        'Remove infected leaves'
      ],
      prevention: [
        'Use row covers',
        'Plant trap crops',
        'Maintain proper spacing',
        'Regular monitoring'
      ]
    },
    {
      id: 4,
      name: 'Stem Borers',
      scientificName: 'Busseola fusca',
      severity: 'high',
      commonCrops: ['Maize', 'Rice', 'Sorghum'],
      image: '🪲',
      symptoms: [
        'Dead heart in young plants',
        'Holes in stems',
        'Broken stems',
        'Frass at stem entrance'
      ],
      treatment: [
        'Apply appropriate insecticides',
        'Use biological control agents',
        'Remove and destroy infected stems',
        'Plant resistant varieties'
      ],
      prevention: [
        'Early planting',
        'Destroy crop residues',
        'Use trap crops',
        'Regular field inspection'
      ]
    }
  ];

  const recentDetections = [
    { pest: 'Fall Armyworm', crop: 'Maize Field A', date: '2 days ago', severity: 'high' },
    { pest: 'Aphids', crop: 'Tomato Garden', date: '1 week ago', severity: 'medium' },
    { pest: 'Whiteflies', crop: 'Cassava Plot', date: '2 weeks ago', severity: 'medium' }
  ];

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
        setResult(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAnalyze = () => {
    setAnalyzing(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      const mockResult = {
        detected: true,
        pest: pestLibrary[0],
        confidence: 94,
        affectedArea: 'Leaves',
        severity: 'High',
        urgency: 'Immediate action recommended',
        recommendations: [
          'Apply neem-based pesticide within 24 hours',
          'Inspect neighboring plants for spread',
          'Consider biological control methods',
          'Monitor daily for next week'
        ]
      };
      setResult(mockResult);
      setAnalyzing(false);
    }, 3000);
  };

  const PestCard = ({ pest }) => (
    <div 
      onClick={() => setSelectedPest(pest)}
      className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:border-emerald-500/30 transition-all cursor-pointer group"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="text-4xl">{pest.image}</div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
          pest.severity === 'high' ? 'bg-red-500/20 text-red-400' :
          pest.severity === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
          'bg-green-500/20 text-green-400'
        }`}>
          {pest.severity.toUpperCase()}
        </span>
      </div>

      <h3 className="text-lg font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">
        {pest.name}
      </h3>
      <p className="text-gray-400 text-sm italic mb-3">{pest.scientificName}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {pest.commonCrops.slice(0, 2).map((crop, i) => (
          <span key={i} className="px-2 py-1 bg-white/5 text-gray-400 text-xs rounded-lg">
            {crop}
          </span>
        ))}
        {pest.commonCrops.length > 2 && (
          <span className="px-2 py-1 bg-white/5 text-gray-400 text-xs rounded-lg">
            +{pest.commonCrops.length - 2} more
          </span>
        )}
      </div>

      <button className="w-full py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-lg text-emerald-400 hover:bg-emerald-500/30 transition-all text-sm font-medium flex items-center justify-center gap-2">
        View Details
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );

  return (
    <div className="p-4 md:p-6">
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Header */}
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Pest Detector</h1>
            <p className="text-gray-400">AI-powered pest identification and treatment recommendations</p>
          </div>

          {/* Detection Card */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl">
                <Camera className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Upload or Capture</h2>
                <p className="text-gray-400 text-sm">Take a photo or upload an image of the affected plant</p>
              </div>
            </div>

            {!selectedImage ? (
              <div className="space-y-4">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="hidden"
                />
                
                <div className="grid md:grid-cols-2 gap-4">
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="flex flex-col items-center justify-center gap-3 p-8 bg-white/5 hover:bg-white/10 border-2 border-dashed border-white/20 hover:border-emerald-500/50 rounded-2xl transition-all group"
                  >
                    <Upload className="w-12 h-12 text-gray-400 group-hover:text-emerald-400 transition-colors" />
                    <div className="text-center">
                      <p className="text-white font-medium mb-1">Upload Image</p>
                      <p className="text-gray-400 text-sm">From your device</p>
                    </div>
                  </button>

                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="flex flex-col items-center justify-center gap-3 p-8 bg-white/5 hover:bg-white/10 border-2 border-dashed border-white/20 hover:border-emerald-500/50 rounded-2xl transition-all group"
                  >
                    <Camera className="w-12 h-12 text-gray-400 group-hover:text-emerald-400 transition-colors" />
                    <div className="text-center">
                      <p className="text-white font-medium mb-1">Take Photo</p>
                      <p className="text-gray-400 text-sm">Use camera</p>
                    </div>
                  </button>
                </div>

                <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
                  <div className="flex gap-3">
                    <Info className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-blue-400 font-medium text-sm mb-1">Tips for best results:</p>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Clear, well-lit photos work best</li>
                        <li>• Focus on affected areas</li>
                        <li>• Include close-up details</li>
                        <li>• Multiple angles help accuracy</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="relative">
                  <img 
                    src={selectedImage} 
                    alt="Selected" 
                    className="w-full h-64 object-cover rounded-xl"
                  />
                  <button
                    onClick={() => {
                      setSelectedImage(null);
                      setResult(null);
                    }}
                    className="absolute top-3 right-3 p-2 bg-black/60 hover:bg-black/80 rounded-lg text-white transition-all"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {!result && !analyzing && (
                  <button
                    onClick={handleAnalyze}
                    className="w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 rounded-xl text-white font-semibold flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-emerald-500/50"
                  >
                    <Sparkles className="w-5 h-5" />
                    Analyze Image
                  </button>
                )}

                {analyzing && (
                  <div className="bg-white/5 rounded-xl p-8 text-center">
                    <div className="inline-flex items-center gap-3">
                      <div className="w-8 h-8 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
                      <p className="text-white font-medium">Analyzing image...</p>
                    </div>
                  </div>
                )}

                {result && (
                  <div className="space-y-4">
                    <div className={`p-6 rounded-2xl border-2 ${
                      result.detected 
                        ? 'bg-red-500/10 border-red-500/30' 
                        : 'bg-green-500/10 border-green-500/30'
                    }`}>
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="text-4xl">{result.pest.image}</div>
                          <div>
                            <h3 className="text-xl font-bold text-white mb-1">
                              {result.pest.name}
                            </h3>
                            <p className="text-gray-400 text-sm italic">{result.pest.scientificName}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-white">{result.confidence}%</p>
                          <p className="text-gray-400 text-sm">Confidence</p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-3 gap-4 mb-4">
                        <div className="bg-white/5 rounded-lg p-3">
                          <p className="text-gray-400 text-xs mb-1">Affected Area</p>
                          <p className="text-white font-medium">{result.affectedArea}</p>
                        </div>
                        <div className="bg-white/5 rounded-lg p-3">
                          <p className="text-gray-400 text-xs mb-1">Severity</p>
                          <p className="text-red-400 font-medium">{result.severity}</p>
                        </div>
                        <div className="bg-white/5 rounded-lg p-3">
                          <p className="text-gray-400 text-xs mb-1">Urgency</p>
                          <p className="text-white font-medium text-xs">{result.urgency}</p>
                        </div>
                      </div>

                      <div className="bg-white/5 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                          <Zap className="w-4 h-4 text-yellow-400" />
                          Immediate Actions
                        </h4>
                        <ul className="space-y-2">
                          {result.recommendations.map((rec, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                              <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                              <span>{rec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <button
                      onClick={() => setSelectedPest(result.pest)}
                      className="w-full py-3 bg-emerald-500/20 border border-emerald-500/30 rounded-xl text-emerald-400 hover:bg-emerald-500/30 transition-all font-medium flex items-center justify-center gap-2"
                    >
                      <BookOpen className="w-5 h-5" />
                      View Complete Treatment Guide
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Pest Library */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-white">Common Pests</h2>
              <button 
                onClick={() => setShowPestLibrary(true)}
                className="text-emerald-400 hover:text-emerald-300 text-sm font-medium flex items-center gap-1"
              >
                View All
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {pestLibrary.slice(0, 4).map(pest => (
                <PestCard key={pest.id} pest={pest} />
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Recent Detections */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
            <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-emerald-400" />
              Recent Detections
            </h2>
            <div className="space-y-3">
              {recentDetections.map((detection, i) => (
                <div key={i} className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all cursor-pointer">
                  <div className="flex items-start justify-between mb-2">
                    <p className="text-white font-medium text-sm">{detection.pest}</p>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                      detection.severity === 'high' ? 'bg-red-500/20 text-red-400' :
                      'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {detection.severity}
                    </span>
                  </div>
                  <p className="text-gray-400 text-xs mb-1">{detection.crop}</p>
                  <p className="text-gray-500 text-xs">{detection.date}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Prevention Tips */}
          <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 backdrop-blur-sm rounded-2xl border border-emerald-500/30 p-6">
            <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-emerald-400" />
              Prevention Tips
            </h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium text-sm mb-1">Regular Monitoring</p>
                  <p className="text-gray-300 text-xs">Inspect crops weekly for early detection</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium text-sm mb-1">Crop Rotation</p>
                  <p className="text-gray-300 text-xs">Rotate crops to break pest cycles</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium text-sm mb-1">Beneficial Insects</p>
                  <p className="text-gray-300 text-xs">Encourage natural predators</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium text-sm mb-1">Field Hygiene</p>
                  <p className="text-gray-300 text-xs">Remove crop residues promptly</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
            <h2 className="text-lg font-bold text-white mb-4">Detection Stats</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Total Scans</span>
                <span className="text-white font-bold">247</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Pests Identified</span>
                <span className="text-white font-bold">34</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Accuracy Rate</span>
                <span className="text-emerald-400 font-bold">96%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pest Detail Modal */}
      {selectedPest && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto"
             onClick={() => setSelectedPest(null)}>
          <div className="bg-gray-900 rounded-2xl border border-white/10 max-w-3xl w-full max-h-[90vh] overflow-y-auto my-8"
               onClick={(e) => e.stopPropagation()}>
            <div className="p-6 border-b border-white/10 flex items-center justify-between sticky top-0 bg-gray-900 z-10">
              <div className="flex items-center gap-3">
                <div className="text-4xl">{selectedPest.image}</div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{selectedPest.name}</h2>
                  <p className="text-gray-400 italic">{selectedPest.scientificName}</p>
                </div>
              </div>
              <button onClick={() => setSelectedPest(null)} className="p-2 rounded-lg hover:bg-white/10 text-gray-400">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-yellow-400" />
                  Symptoms
                </h3>
                <ul className="space-y-2">
                  {selectedPest.symptoms.map((symptom, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300">
                      <span className="text-emerald-400">•</span>
                      <span>{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-red-400" />
                  Treatment
                </h3>
                <ul className="space-y-2">
                  {selectedPest.treatment.map((treatment, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{treatment}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-blue-400" />
                  Prevention
                </h3>
                <ul className="space-y-2">
                  {selectedPest.prevention.map((prev, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300">
                      <span className="text-blue-400">✓</span>
                      <span>{prev}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white mb-3">Common Crops Affected</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedPest.commonCrops.map((crop, i) => (
                    <span key={i} className="px-3 py-1 bg-white/10 text-white rounded-lg text-sm">
                      {crop}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}