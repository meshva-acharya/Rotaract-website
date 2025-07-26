import React, { useState } from 'react';
import { Calendar, MapPin, Users, Clock, Filter, Search } from 'lucide-react';

const EventsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  const events = [
    {
      id: 1,
      title: 'Community Blood Drive',
      description: 'Help save lives by donating blood. Every donation can save up to three lives.',
      date: '2025-02-15',
      time: '09:00 AM - 05:00 PM',
      location: 'LJIET Campus, Main Auditorium',
      category: 'community',
      status: 'upcoming',
      attendees: 45,
      maxAttendees: 100,
      image: 'https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg?auto=compress&cs=tinysrgb&w=600',
      organizer: 'Health & Wellness Committee'
    },
    {
      id: 2,
      title: 'Youth Leadership Summit',
      description: 'Develop your leadership skills and connect with like-minded individuals.',
      date: '2025-02-28',
      time: '10:00 AM - 06:00 PM',
      location: 'Convention Center, Ahmedabad',
      category: 'professional',
      status: 'upcoming',
      attendees: 120,
      maxAttendees: 200,
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600',
      organizer: 'Professional Development Team'
    },
    {
      id: 3,
      title: 'Environmental Cleanup Drive',
      description: 'Join us in cleaning up the Sabarmati Riverfront and make our city cleaner.',
      date: '2025-03-10',
      time: '07:00 AM - 12:00 PM',
      location: 'Sabarmati Riverfront',
      category: 'environment',
      status: 'upcoming',
      attendees: 75,
      maxAttendees: 150,
      image: 'https://images.pexels.com/photos/2547565/pexels-photo-2547565.jpeg?auto=compress&cs=tinysrgb&w=600',
      organizer: 'Environment Committee'
    },
    {
      id: 4,
      title: 'Skill Development Workshop',
      description: 'Learn new skills in digital marketing, coding, and project management.',
      date: '2025-01-10',
      time: '02:00 PM - 06:00 PM',
      location: 'LJIET Campus, Computer Lab',
      category: 'professional',
      status: 'completed',
      attendees: 60,
      maxAttendees: 60,
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      organizer: 'Skills Development Team'
    },
    {
      id: 5,
      title: 'Cultural Festival',
      description: 'Celebrate diversity and culture with music, dance, and food from around the world.',
      date: '2025-03-20',
      time: '05:00 PM - 10:00 PM',
      location: 'LJIET Campus, Open Ground',
      category: 'cultural',
      status: 'upcoming',
      attendees: 200,
      maxAttendees: 500,
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600',
      organizer: 'Cultural Committee'
    },
    {
      id: 6,
      title: 'Fundraising Gala',
      description: 'Elegant evening to raise funds for our education initiative.',
      date: '2025-04-05',
      time: '07:00 PM - 11:00 PM',
      location: 'Grand Ballroom, Hotel Marriott',
      category: 'fundraising',
      status: 'upcoming',
      attendees: 30,
      maxAttendees: 200,
      image: 'https://images.pexels.com/photos/1863426/pexels-photo-1863426.jpeg?auto=compress&cs=tinysrgb&w=600',
      organizer: 'Fundraising Committee'
    }
  ];

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'community', label: 'Community Service' },
    { value: 'professional', label: 'Professional Development' },
    { value: 'environment', label: 'Environment' },
    { value: 'cultural', label: 'Cultural' },
    { value: 'fundraising', label: 'Fundraising' }
  ];

  const statuses = [
    { value: 'all', label: 'All Events' },
    { value: 'upcoming', label: 'Upcoming' },
    { value: 'completed', label: 'Completed' }
  ];

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || event.category === filterCategory;
    const matchesStatus = filterStatus === 'all' || event.status === filterStatus;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const getCategoryColor = (category: string) => {
    const colors = {
      community: 'bg-red-500/20 text-red-300',
      professional: 'bg-blue-500/20 text-blue-300',
      environment: 'bg-green-500/20 text-green-300',
      cultural: 'bg-purple-500/20 text-purple-300',
      fundraising: 'bg-yellow-500/20 text-yellow-300'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-500/20 text-gray-300';
  };

  const getStatusColor = (status: string) => {
    return status === 'upcoming' ? 'bg-blue-500/20 text-blue-300' : 'bg-gray-500/20 text-gray-300';
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">Events</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Discover and participate in our community events, workshops, and initiatives
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-3.5 h-5 w-5 text-white/50" />
              <input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-3.5 h-5 w-5 text-white/50" />
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
              >
                {categories.map((category) => (
                  <option key={category.value} value={category.value} className="bg-slate-800">
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Status Filter */}
            <div className="relative">
              <Calendar className="absolute left-3 top-3.5 h-5 w-5 text-white/50" />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
              >
                {statuses.map((status) => (
                  <option key={status.value} value={status.value} className="bg-slate-800">
                    {status.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all transform hover:scale-105 hover:shadow-2xl group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(event.category)}`}>
                    {event.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(event.status)}`}>
                    {event.status}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {event.title}
                </h3>
                <p className="text-white/70 text-sm mb-4 line-clamp-3">
                  {event.description}
                </p>

                <div className="space-y-2 text-sm text-white/60 mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{new Date(event.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    <span>{event.attendees}/{event.maxAttendees} attendees</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-white/60 text-sm">by {event.organizer}</span>
                  {event.status === 'upcoming' && (
                    <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105">
                      Register
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <Calendar className="w-16 h-16 text-white/30 mx-auto mb-4" />
            <p className="text-white/60 text-lg">No events found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventsPage;