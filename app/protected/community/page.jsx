'use client'
import React, { useState } from 'react';
import { 
  Users, MessageSquare, Heart, Share2, Bookmark, Plus, 
  Search, Filter, TrendingUp, Clock, Award, CheckCircle,
  ThumbsUp, MessageCircle, Eye, MoreVertical, Send, X
} from 'lucide-react';

export default function CommunityPage() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [comment, setComment] = useState('');
  const [newPost, setNewPost] = useState({ title: '', content: '', category: '' });

  const posts = [
    {
      id: 1,
      author: { name: 'Emmanuel Okafor', avatar: 'EO', badge: 'Expert Farmer', verified: true },
      title: 'Best practices for maize farming in rainy season',
      content: 'After 15 years of farming, I\'ve learned that proper drainage is crucial during rainy season. Here are my top tips: 1) Create drainage channels every 10 meters 2) Plant on ridges rather than flat land 3) Use mulch to prevent soil erosion...',
      category: 'Tips & Tricks',
      timestamp: '2 hours ago',
      likes: 245,
      comments: 48,
      views: 1240,
      saved: false,
      liked: false,
      image: '🌽',
      tags: ['maize', 'rainy season', 'drainage']
    },
    {
      id: 2,
      author: { name: 'Aisha Mohammed', avatar: 'AM', badge: 'Organic Specialist', verified: true },
      title: 'Organic pest control methods that actually work',
      content: 'Struggled with pests? Try these natural solutions: Neem oil spray, companion planting with marigolds, and introducing beneficial insects. I reduced pest damage by 80% using these methods!',
      category: 'Pest Management',
      timestamp: '5 hours ago',
      likes: 189,
      comments: 34,
      views: 856,
      saved: false,
      liked: false,
      image: '🌿',
      tags: ['organic', 'pest control', 'natural']
    },
    {
      id: 3,
      author: { name: 'Chukwu Eze', avatar: 'CE', badge: 'Market Expert', verified: false },
      title: 'Cassava prices surge - perfect time to harvest!',
      content: 'Just sold my cassava harvest for ₦95,000 per ton! Prices are up 15% this month. If your cassava is ready, now is the time to sell. Markets in Lagos and Onitsha are paying premium rates.',
      category: 'Market News',
      timestamp: '1 day ago',
      likes: 312,
      comments: 67,
      views: 2140,
      saved: true,
      liked: true,
      image: '💰',
      tags: ['cassava', 'market', 'prices']
    },
    {
      id: 4,
      author: { name: 'Dr. Funmi Adeleke', avatar: 'FA', badge: 'Agricultural Scientist', verified: true },
      title: 'Soil testing changed my farming completely',
      content: 'Invested ₦15,000 in professional soil testing last year. Results showed my pH was too low and nitrogen deficient. After amendments, my yield increased by 40%! Don\'t guess, test your soil!',
      category: 'Soil Health',
      timestamp: '2 days ago',
      likes: 428,
      comments: 92,
      views: 3240,
      saved: true,
      liked: false,
      image: '🧪',
      tags: ['soil', 'testing', 'yield']
    }
  ];

  const categories = [
    'All Posts', 'Tips & Tricks', 'Pest Management', 'Market News', 
    'Soil Health', 'Technology', 'Success Stories', 'Questions'
  ];

  const topContributors = [
    { name: 'Emmanuel Okafor', posts: 124, likes: 3240, avatar: 'EO' },
    { name: 'Dr. Funmi Adeleke', posts: 98, likes: 2890, avatar: 'FA' },
    { name: 'Aisha Mohammed', posts: 87, likes: 2456, avatar: 'AM' },
    { name: 'Chukwu Eze', posts: 76, likes: 2120, avatar: 'CE' }
  ];

  const trendingTopics = [
    { tag: '#MaizeFarming', posts: 342 },
    { tag: '#OrganicFarming', posts: 289 },
    { tag: '#MarketPrices', posts: 256 },
    { tag: '#PestControl', posts: 198 },
    { tag: '#SoilHealth', posts: 176 }
  ];

  const [postsData, setPostsData] = useState(posts);

  const handleLike = (postId) => {
    setPostsData(prev => prev.map(post => 
      post.id === postId 
        ? { ...post, liked: !post.liked, likes: post.liked ? post.likes - 1 : post.likes + 1 }
        : post
    ));
  };

  const handleSave = (postId) => {
    setPostsData(prev => prev.map(post => 
      post.id === postId 
        ? { ...post, saved: !post.saved }
        : post
    ));
  };

  const PostCard = ({ post }) => (
    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:border-emerald-500/30 transition-all">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white font-bold">
            {post.author.avatar}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-white font-semibold">{post.author.name}</h3>
              {post.author.verified && <CheckCircle className="w-4 h-4 text-blue-400" />}
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 rounded-full">{post.author.badge}</span>
              <span>•</span>
              <span>{post.timestamp}</span>
            </div>
          </div>
        </div>
        <button className="p-2 hover:bg-white/10 rounded-lg text-gray-400 transition-all">
          <MoreVertical className="w-5 h-5" />
        </button>
      </div>

      <div className="mb-3">
        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded-full">
          {post.category}
        </span>
      </div>

      <h2 
        onClick={() => setSelectedPost(post)}
        className="text-xl font-bold text-white mb-3 cursor-pointer hover:text-emerald-400 transition-colors"
      >
        {post.title}
      </h2>
      <p className="text-gray-300 mb-4 line-clamp-3">{post.content}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.map((tag, i) => (
          <span key={i} className="px-2 py-1 bg-white/5 text-gray-400 text-xs rounded-lg hover:bg-white/10 cursor-pointer transition-all">
            #{tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-white/10">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => handleLike(post.id)}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
              post.liked 
                ? 'bg-red-500/20 text-red-400' 
                : 'hover:bg-white/10 text-gray-400 hover:text-white'
            }`}
          >
            <Heart className={`w-5 h-5 ${post.liked ? 'fill-current' : ''}`} />
            <span className="text-sm font-medium">{post.likes}</span>
          </button>
          <button 
            onClick={() => setSelectedPost(post)}
            className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="text-sm font-medium">{post.comments}</span>
          </button>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <Eye className="w-5 h-5" />
            <span>{post.views}</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={() => handleSave(post.id)}
            className={`p-2 rounded-lg transition-all ${
              post.saved 
                ? 'bg-emerald-500/20 text-emerald-400' 
                : 'hover:bg-white/10 text-gray-400 hover:text-white'
            }`}
          >
            <Bookmark className={`w-5 h-5 ${post.saved ? 'fill-current' : ''}`} />
          </button>
          <button className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-all">
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-4 md:p-6">
      <div className="grid lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Community Forum</h1>
              <p className="text-gray-400">Connect, learn, and share with fellow farmers</p>
            </div>
            <button 
              onClick={() => setShowCreatePost(true)}
              className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 rounded-xl text-white font-semibold flex items-center gap-2 transition-all shadow-lg hover:shadow-emerald-500/50"
            >
              <Plus className="w-5 h-5" />
              Create Post
            </button>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search posts..."
                className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div className="flex gap-2">
              {['all', 'following', 'trending'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-3 rounded-xl font-medium transition-all capitalize ${
                    activeTab === tab
                      ? 'bg-emerald-500/20 border-2 border-emerald-500/50 text-emerald-400'
                      : 'bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((cat, i) => (
              <button
                key={i}
                className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-gray-300 hover:text-white text-sm font-medium whitespace-nowrap transition-all"
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="space-y-6">
            {postsData.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-yellow-400" />
              <h2 className="text-lg font-bold text-white">Top Contributors</h2>
            </div>
            <div className="space-y-3">
              {topContributors.map((user, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 cursor-pointer transition-all">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white font-bold text-sm">
                    {user.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-medium text-sm truncate">{user.name}</p>
                    <p className="text-gray-400 text-xs">{user.posts} posts • {user.likes} likes</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-emerald-400" />
              <h2 className="text-lg font-bold text-white">Trending Topics</h2>
            </div>
            <div className="space-y-2">
              {trendingTopics.map((topic, i) => (
                <button key={i} className="w-full flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all text-left">
                  <span className="text-emerald-400 font-medium">{topic.tag}</span>
                  <span className="text-gray-400 text-sm">{topic.posts} posts</span>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 backdrop-blur-sm rounded-2xl border border-emerald-500/30 p-6">
            <h2 className="text-lg font-bold text-white mb-4">Community Stats</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Total Members</span>
                <span className="text-white font-bold">12,450</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Posts Today</span>
                <span className="text-emerald-400 font-bold">+48</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Active Now</span>
                <span className="text-emerald-400 font-bold">234</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto"
             onClick={() => setSelectedPost(null)}>
          <div className="bg-gray-900 rounded-2xl border border-white/10 max-w-3xl w-full max-h-[90vh] overflow-y-auto my-8"
               onClick={(e) => e.stopPropagation()}>
            <div className="p-6 border-b border-white/10 flex items-center justify-between sticky top-0 bg-gray-900 z-10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white font-bold">
                  {selectedPost.author.avatar}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-white font-semibold">{selectedPost.author.name}</h3>
                    {selectedPost.author.verified && <CheckCircle className="w-4 h-4 text-blue-400" />}
                  </div>
                  <p className="text-gray-400 text-sm">{selectedPost.timestamp}</p>
                </div>
              </div>
              <button onClick={() => setSelectedPost(null)} className="p-2 rounded-lg hover:bg-white/10 text-gray-400">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded-full">
                  {selectedPost.category}
                </span>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">{selectedPost.title}</h2>
                <p className="text-gray-300 leading-relaxed">{selectedPost.content}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {selectedPost.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-white/5 text-gray-400 text-sm rounded-lg">
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <button 
                  onClick={() => handleLike(selectedPost.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${
                    selectedPost.liked 
                      ? 'bg-red-500/20 text-red-400' 
                      : 'bg-white/5 hover:bg-white/10 text-gray-400'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${selectedPost.liked ? 'fill-current' : ''}`} />
                  <span className="font-medium">{selectedPost.likes}</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 transition-all">
                  <MessageCircle className="w-5 h-5" />
                  <span className="font-medium">{selectedPost.comments}</span>
                </button>
                <button 
                  onClick={() => handleSave(selectedPost.id)}
                  className={`ml-auto p-2 rounded-xl transition-all ${
                    selectedPost.saved 
                      ? 'bg-emerald-500/20 text-emerald-400' 
                      : 'bg-white/5 hover:bg-white/10 text-gray-400'
                  }`}
                >
                  <Bookmark className={`w-5 h-5 ${selectedPost.saved ? 'fill-current' : ''}`} />
                </button>
              </div>

              <div className="pt-6 border-t border-white/10">
                <h3 className="text-lg font-bold text-white mb-4">Comments ({selectedPost.comments})</h3>
                
                <div className="flex gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
                    JD
                  </div>
                  <div className="flex-1">
                    <input
                      type="text"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      placeholder="Write a comment..."
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 mb-2"
                    />
                    <button 
                      onClick={() => setComment('')}
                      className="px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-lg text-emerald-400 hover:bg-emerald-500/30 transition-all text-sm font-medium"
                    >
                      Post Comment
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="flex gap-3 p-4 bg-white/5 rounded-xl">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center text-white font-bold text-sm">
                        U{i}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-white font-medium">User {i}</span>
                          <span className="text-gray-500 text-xs">• 1h ago</span>
                        </div>
                        <p className="text-gray-300 text-sm">Great advice! I've been struggling with this issue too.</p>
                        <div className="flex items-center gap-3 mt-2">
                          <button className="text-gray-400 hover:text-emerald-400 text-xs font-medium transition-all">Reply</button>
                          <button className="text-gray-400 hover:text-red-400 text-xs font-medium transition-all flex items-center gap-1">
                            <Heart className="w-3 h-3" />
                            <span>12</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {showCreatePost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
             onClick={() => setShowCreatePost(false)}>
          <div className="bg-gray-900 rounded-2xl border border-white/10 max-w-2xl w-full"
               onClick={(e) => e.stopPropagation()}>
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Create Post</h2>
              <button onClick={() => setShowCreatePost(false)} className="p-2 rounded-lg hover:bg-white/10 text-gray-400">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                <select 
                  value={newPost.category}
                  onChange={(e) => setNewPost({...newPost, category: e.target.value})}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="" className="bg-gray-900">Select category</option>
                  {categories.slice(1).map((cat, i) => (
                    <option key={i} value={cat} className="bg-gray-900">{cat}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Title</label>
                <input
                  type="text"
                  value={newPost.title}
                  onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                  placeholder="What's your post about?"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Content</label>
                <textarea
                  value={newPost.content}
                  onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                  placeholder="Share your knowledge, experience, or questions..."
                  rows={6}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
                />
              </div>
              <div className="flex gap-3 pt-4">
                <button onClick={() => setShowCreatePost(false)} className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-gray-400 hover:bg-white/10 transition-all">
                  Cancel
                </button>
                <button className="flex-1 px-4 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl text-white hover:from-emerald-600 hover:to-teal-600 transition-all">
                  Publish Post
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}