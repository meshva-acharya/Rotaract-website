import React, { useState } from 'react';
import { Image, Video, Play, Download, Filter, Search, Calendar, User, Heart, Share2, Eye, Upload } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const MediaPage: React.FC = () => {
  const { user } = useAuth();
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMedia, setSelectedMedia] = useState<any>(null);

  const mediaItems = [
    {
      id: 1,
      type: 'image',
      title: 'Community Blood Drive 2025',
      description: 'Successful blood donation camp with 100+ donors',
      url: 'https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg?auto=compress&cs=tinysrgb&w=800',
      thumbnail: 'https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'events',
      date: '2025-01-20',
      photographer: 'John Doe',
      likes: 45,
      views: 234
    },
    {
      id: 2,
      type: 'video',
      title: 'Youth Leadership Summit Highlights',
      description: 'Best moments from our leadership development program',
      url: 'https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4',
      thumbnail: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'events',
      date: '2025-01-15',
      photographer: 'Media Team',
      likes: 78,
      views: 456,
      duration: '3:45'
    },
    {
      id: 3,
      type: 'image',
      title: 'Environmental Cleanup Initiative',
      description: 'Making our city cleaner, one step at a time',
      url: 'https://images.pexels.com/photos/2547565/pexels-photo-2547565.jpeg?auto=compress&cs=tinysrgb&w=800',
      thumbnail: 'https://images.pexels.com/photos/2547565/pexels-photo-2547565.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'community',
      date: '2025-01-10',
      photographer: 'Sarah Smith',
      likes: 62,
      views: 189
    },
    {
      id: 4,
      type: 'image',
      title: 'Annual Awards Ceremony',
      description: 'Celebrating achievements and recognizing excellence',
      url: 'https://images.pexels.com/photos/1863426/pexels-photo-1863426.jpeg?auto=compress&cs=tinysrgb&w=800',
      thumbnail: 'https://images.pexels.com/photos/1863426/pexels-photo-1863426.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'awards',
      date: '2024-12-20',
      photographer: 'Mike Johnson',
      likes: 89,
      views: 345
    },
    {
      id: 5,
      type: 'video',
      title: 'Cultural Festival Performances',
      description: 'Diverse cultural performances showcasing talent',
      url: 'https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4',
      thumbnail: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'cultural',
      date: '2024-12-15',
      photographer: 'Cultural Committee',
      likes: 134,
      views: 678,
      duration: '5:20'
    },
    {
      id: 6,
      type: 'image',
      title: 'Member Orientation Program',
      description: 'Welcoming new members to our Rotaract family',
      url: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      thumbnail: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'training',
      date: '2024-12-10',
      photographer: 'Training Team',
      likes: 67,
      views: 223
    }
  ];

  const categories = [
    { value: 'all', label: 'All Media', icon: Image },
    { value: 'events', label: 'Events', icon: Calendar },
    { value: 'community', label: 'Community Service', icon: Heart },
    { value: 'awards', label: 'Awards', icon: User },
    { value: 'cultural', label: 'Cultural', icon: Video },
    { value: 'training', label: 'Training', icon: Play }
  ];

  const filteredMedia = mediaItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === 'all' || item.category === activeFilter;
    return matchesSearch && matchesFilter;
  });

  const openMediaModal = (media: any) => {
    setSelectedMedia(media);
  };

  const closeMediaModal = () => {
    setSelectedMedia(null);
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">Media Gallery</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Capturing moments, preserving memories, and showcasing our impact
          </p>
        </div>

        {/* Upload Button for Members+ */}
        {user && user.role !== 'visitor' && (
          <div className="mb-8 text-center">
            <button className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all transform hover:scale-105 inline-flex items-center">
              <Upload className="w-5 h-5 mr-2" />
              Upload Media
            </button>
          </div>
        )}

        {/* Filters and Search */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 mb-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3.5 h-5 w-5 text-white/50" />
                <input
                  type="text"
                  placeholder="Search media..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setActiveFilter(category.value)}
                  className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all ${
                    activeFilter === category.value
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                      : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  <category.icon className="w-4 h-4 mr-2" />
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredMedia.map((media) => (
            <div
              key={media.id}
              className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all transform hover:scale-105 hover:shadow-2xl group cursor-pointer"
              onClick={() => openMediaModal(media)}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={media.thumbnail}
                  alt={media.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                
                {/* Media Type Indicator */}
                <div className="absolute top-2 left-2">
                  {media.type === 'video' ? (
                    <div className="bg-black/50 backdrop-blur-sm rounded p-1">
                      <Play className="w-4 h-4 text-white" />
                    </div>
                  ) : (
                    <div className="bg-black/50 backdrop-blur-sm rounded p-1">
                      <Image className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>

                {/* Duration for Videos */}
                {media.duration && (
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {media.duration}
                  </div>
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    {media.type === 'video' ? (
                      <Play className="w-12 h-12 text-white" />
                    ) : (
                      <Eye className="w-12 h-12 text-white" />
                    )}
                  </div>
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-white font-semibold mb-1 truncate">{media.title}</h3>
                <p className="text-white/60 text-sm mb-2 line-clamp-2">{media.description}</p>
                
                <div className="flex items-center justify-between text-xs text-white/50">
                  <span>{new Date(media.date).toLocaleDateString()}</span>
                  <div className="flex items-center space-x-2">
                    <span className="flex items-center">
                      <Heart className="w-3 h-3 mr-1" />
                      {media.likes}
                    </span>
                    <span className="flex items-center">
                      <Eye className="w-3 h-3 mr-1" />
                      {media.views}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredMedia.length === 0 && (
          <div className="text-center py-12">
            <Image className="w-16 h-16 text-white/30 mx-auto mb-4" />
            <p className="text-white/60 text-lg">No media found matching your criteria.</p>
          </div>
        )}

        {/* Media Modal */}
        {selectedMedia && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 max-w-4xl w-full max-h-[90vh] overflow-hidden">
              <div className="flex items-center justify-between p-4 border-b border-white/20">
                <h3 className="text-xl font-semibold text-white">{selectedMedia.title}</h3>
                <div className="flex items-center space-x-2">
                  <button className="text-white/70 hover:text-white transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                  <button className="text-white/70 hover:text-white transition-colors">
                    <Download className="w-5 h-5" />
                  </button>
                  <button
                    onClick={closeMediaModal}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    ✕
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  {selectedMedia.type === 'video' ? (
                    <video
                      controls
                      className="w-full rounded-lg"
                      poster={selectedMedia.thumbnail}
                    >
                      <source src={selectedMedia.url} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      src={selectedMedia.url}
                      alt={selectedMedia.title}
                      className="w-full rounded-lg"
                    />
                  )}
                </div>
                
                <div className="space-y-3">
                  <p className="text-white/80">{selectedMedia.description}</p>
                  <div className="flex items-center justify-between text-sm text-white/60">
                    <span>By {selectedMedia.photographer}</span>
                    <span>{new Date(selectedMedia.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-white/60">
                    <span className="flex items-center">
                      <Heart className="w-4 h-4 mr-1" />
                      {selectedMedia.likes} likes
                    </span>
                    <span className="flex items-center">
                      <Eye className="w-4 h-4 mr-1" />
                      {selectedMedia.views} views
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MediaPage;