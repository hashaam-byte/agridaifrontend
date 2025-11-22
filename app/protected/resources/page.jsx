'use client'
import React, { useState } from 'react';
import { 
  BookOpen, Search, Filter, Download, Eye, PlayCircle, 
  FileText, Video, Headphones, Star, Clock, Users, 
  Bookmark, Share2, ChevronRight, TrendingUp, Award
} from 'lucide-react';

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedResource, setSelectedResource] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Resources', icon: BookOpen },
    { id: 'guides', name: 'Farming Guides', icon: FileText },
    { id: 'videos', name: 'Video Tutorials', icon: Video },
    { id: 'podcasts', name: 'Podcasts', icon: Headphones },
    { id: 'courses', name: 'Courses', icon: Award }
  ];

  const resources = [
    {
      id: 1,
      title: 'Complete Guide to Maize Farming',
      description: 'Comprehensive guide covering everything from land preparation to harvest. Includes modern techniques and traditional methods.',
      type: 'guide',
      category: 'guides',
      duration: '45 min read',
      level: 'Beginner',
      rating: 4.8,
      reviews: 234,
      downloads: 1240,
      author: 'Dr. Funmi Adeleke',
      published: '2 weeks ago',
      icon: '🌽',
      tags: ['maize', 'planting', 'harvest'],
      content: '# Complete Guide to Maize Farming\n\n## Introduction\nMaize is one of the most important cereals...'
    },
    {
      id: 2,
      title: 'Organic Pest Management Video Series',
      description: '10-part video series on natural pest control methods. Learn to identify and manage common pests without chemicals.',
      type: 'video',
      category: 'videos',
      duration: '2.5 hours',
      level: 'Intermediate',
      rating: 4.9,
      reviews: 456,
      downloads: 2340,
      author: 'Aisha Mohammed',
      published: '1 month ago',
      icon: '🎥',
      tags: ['pests', 'organic', 'natural'],
      content: 'Video series covering natural pest management...'
    },
    {
      id: 3,
      title: 'Soil Health & Fertility Management',
      description: 'Learn advanced techniques for soil testing, amendment, and maintaining optimal soil health for maximum yields.',
      type: 'guide',
      category: 'guides',
      duration: '60 min read',
      level: 'Advanced',
      rating: 4.7,
      reviews: 189,
      downloads: 890,
      author: 'Emmanuel Okafor',
      published: '3 weeks ago',
      icon: '🌱',
      tags: ['soil', 'fertility', 'testing'],
      content: 'Comprehensive soil management guide...'
    },
    {
      id: 4,
      title: 'Market Intelligence Podcast',
      description: 'Weekly podcast discussing market trends, pricing strategies, and connecting with buyers. Expert guests share insights.',
      type: 'podcast',
      category: 'podcasts',
      duration: '45 min/episode',
      level: 'All Levels',
      rating: 4.6,
      reviews: 167,
      downloads: 3450,
      author: 'Chukwu Eze',
      published: '5 days ago',
      icon: '🎙️',
      tags: ['market', 'pricing', 'business'],
      content: 'Weekly market analysis and insights...'
    },
    {
      id: 5,
      title: 'Irrigation Systems Masterclass',
      description: 'Complete course on designing and installing efficient irrigation systems. Includes drip, sprinkler, and traditional methods.',
      type: 'course',
      category: 'courses',
      duration: '6 hours',
      level: 'Intermediate',
      rating: 4.9,
      reviews: 312,
      downloads: 1567,
      author: 'Ibrahim Musa',
      published: '2 months ago',
      icon: '💧',
      tags: ['irrigation', 'water', 'systems'],
      content: 'Learn professional irrigation techniques...'
    },
    {
      id: 6,
      title: 'Climate-Smart Agriculture',
      description: 'Adapt your farming practices to climate change. Learn resilient techniques and weather prediction methods.',
      type: 'guide',
      category: 'guides',
      duration: '50 min read',
      level: 'Intermediate',
      rating: 4.8,
      reviews: 278,
      downloads: 1123,
      author: 'Dr. Funmi Adeleke',
      published: '1 week ago',
      icon: '🌍',
      tags: ['climate', 'adaptation', 'resilience'],
      content: 'Climate-smart farming practices...'
    }
  ];

  const featuredResources = resources.slice(0, 3);
  const popularTopics = [
    { name: 'Crop Rotation', count: 45 },
    { name: 'Pest Management', count: 38 },
    { name: 'Soil Health', count: 32 },
    { name: 'Irrigation', count: 28 },
    { name: 'Market Access', count: 24 }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const ResourceCard = ({ resource }) => (
    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:border-emerald-500/30 transition-all group cursor-pointer"
         onClick={() => setSelectedResource(resource)}>
      <div className="flex items-start justify-between mb-4">
        <div className="text-4xl mb-3">{resource.icon}</div>
        <button className="p-2 rounded-lg hover:bg-white/10 text-gray-400 opacity-0 group-hover:opacity-100 transition-all">
          <Bookmark className="w-5 h-5" />
        </button>
      </div>

      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
        {resource.title}
      </h3>
      <p className="text-gray-300 text-sm mb-4 line-clamp-2">{resource.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {resource.tags.map((tag, i) => (
          <span key={i} className="px-2 py-1 bg-white/5 text-gray-400 text-xs rounded-lg">
            #{tag}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-3 mb-4 text-sm">
        <div className="flex items-center gap-1 text-yellow-400">
          <Star className="w-4 h-4 fill-current" />
          <span className="font-medium">{resource.rating}</span>
          <span className="text-gray-400">({resource.reviews})</span>
        </div>
        <span className="text-gray-400">•</span>
        <div className="flex items-center gap-1 text-gray-400">
          <Clock className="w-4 h-4" />
          <span>{resource.duration}</span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white text-xs font-bold">
            {resource.author.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <p className="text-white text-sm font-medium">{resource.author}</p>
            <p className="text-gray-400 text-xs">{resource.published}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 text-gray-400 text-sm">
            <Download className="w-4 h-4" />
            <span>{resource.downloads}</span>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
          resource.level === 'Beginner' ? 'bg-green-500/20 text-green-400' :
          resource.level === 'Intermediate' ? 'bg-blue-500/20 text-blue-400' :
          resource.level === 'Advanced' ? 'bg-purple-500/20 text-purple-400' :
          'bg-gray-500/20 text-gray-400'
        }`}>
          {resource.level}
        </span>
      </div>
    </div>
  );

  return (
    <div className="p-4 md:p-6">
      <div className="grid lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Resource Library</h1>
            <p className="text-gray-400">Access guides, videos, courses and more to improve your farming</p>
          </div>

          {/* Featured Resources */}
          <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 backdrop-blur-sm rounded-2xl border border-emerald-500/30 p-6">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-emerald-400" />
              Featured Resources
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {featuredResources.map(resource => (
                <div key={resource.id} className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all cursor-pointer"
                     onClick={() => setSelectedResource(resource)}>
                  <div className="text-3xl mb-2">{resource.icon}</div>
                  <h3 className="text-white font-semibold mb-1 text-sm">{resource.title}</h3>
                  <div className="flex items-center gap-1 text-yellow-400 text-xs">
                    <Star className="w-3 h-3 fill-current" />
                    <span>{resource.rating}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Search and Categories */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search resources..."
                className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-emerald-500/20 border-2 border-emerald-500/50 text-emerald-400'
                    : 'bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10'
                }`}
              >
                <cat.icon className="w-5 h-5" />
                {cat.name}
              </button>
            ))}
          </div>

          {/* Resources Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredResources.map(resource => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Popular Topics */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
            <h2 className="text-lg font-bold text-white mb-4">Popular Topics</h2>
            <div className="space-y-2">
              {popularTopics.map((topic, i) => (
                <button key={i} className="w-full flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all text-left">
                  <span className="text-white font-medium text-sm">{topic.name}</span>
                  <span className="text-gray-400 text-xs">{topic.count} resources</span>
                </button>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
            <h2 className="text-lg font-bold text-white mb-4">Library Stats</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Total Resources</span>
                <span className="text-white font-bold">{resources.length}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Downloads</span>
                <span className="text-emerald-400 font-bold">10.6K</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Contributors</span>
                <span className="text-white font-bold">24</span>
              </div>
            </div>
          </div>

          {/* Contribute CTA */}
          <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 backdrop-blur-sm rounded-2xl border border-emerald-500/30 p-6">
            <h2 className="text-lg font-bold text-white mb-2">Share Your Knowledge</h2>
            <p className="text-gray-300 text-sm mb-4">Help fellow farmers by contributing your own guides and resources</p>
            <button className="w-full px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-xl text-emerald-400 hover:bg-emerald-500/30 transition-all font-medium">
              Contribute Resource
            </button>
          </div>
        </div>
      </div>

      {/* Resource Detail Modal */}
      {selectedResource && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
             onClick={() => setSelectedResource(null)}>
          <div className="bg-gray-900 rounded-2xl border border-white/10 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
               onClick={(e) => e.stopPropagation()}>
            <div className="p-6 border-b border-white/10">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="text-5xl">{selectedResource.icon}</div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">{selectedResource.title}</h2>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1 text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="font-medium">{selectedResource.rating}</span>
                        <span className="text-gray-400">({selectedResource.reviews} reviews)</span>
                      </div>
                      <span className="text-gray-400">•</span>
                      <div className="flex items-center gap-1 text-gray-400">
                        <Clock className="w-4 h-4" />
                        <span>{selectedResource.duration}</span>
                      </div>
                      <span className="text-gray-400">•</span>
                      <div className="flex items-center gap-1 text-gray-400">
                        <Download className="w-4 h-4" />
                        <span>{selectedResource.downloads}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <button onClick={() => setSelectedResource(null)} className="p-2 rounded-lg hover:bg-white/10 text-gray-400">
                  ✕
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white mb-3">Description</h3>
                <p className="text-gray-300 leading-relaxed">{selectedResource.description}</p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedResource.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 text-gray-400 text-sm rounded-lg">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white font-bold">
                    {selectedResource.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-white font-medium">{selectedResource.author}</p>
                    <p className="text-gray-400 text-sm">Published {selectedResource.published}</p>
                  </div>
                </div>
                <div className="ml-auto">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    selectedResource.level === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                    selectedResource.level === 'Intermediate' ? 'bg-blue-500/20 text-blue-400' :
                    selectedResource.level === 'Advanced' ? 'bg-purple-500/20 text-purple-400' :
                    'bg-gray-500/20 text-gray-400'
                  }`}>
                    {selectedResource.level}
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl text-white hover:from-emerald-600 hover:to-teal-600 transition-all font-semibold flex items-center justify-center gap-2">
                  {selectedResource.type === 'video' ? <PlayCircle className="w-5 h-5" /> : 
                   selectedResource.type === 'podcast' ? <Headphones className="w-5 h-5" /> :
                   <Eye className="w-5 h-5" />}
                  {selectedResource.type === 'video' ? 'Watch Now' :
                   selectedResource.type === 'podcast' ? 'Listen Now' :
                   'Read Now'}
                </button>
                <button className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl text-white hover:bg-white/20 transition-all flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Download
                </button>
                <button className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl text-white hover:bg-white/20 transition-all">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}