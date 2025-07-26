import React, { useState } from 'react';
import { Calendar, Users, DollarSign, Bell, TrendingUp, Award, Heart, Activity } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { icon: Calendar, label: 'Events Attended', value: '12', color: 'from-blue-500 to-blue-600' },
    { icon: Heart, label: 'Community Hours', value: '48', color: 'from-red-500 to-red-600' },
    { icon: Award, label: 'Achievements', value: '8', color: 'from-yellow-500 to-yellow-600' },
    { icon: TrendingUp, label: 'Impact Score', value: '95', color: 'from-green-500 to-green-600' }
  ];

  const recentActivities = [
    { id: 1, action: 'Attended Blood Drive Event', date: '2025-01-20', type: 'event' },
    { id: 2, action: 'Completed Leadership Training', date: '2025-01-18', type: 'training' },
    { id: 3, action: 'Donated to Education Fund', date: '2025-01-15', type: 'donation' },
    { id: 4, action: 'Volunteered at Food Bank', date: '2025-01-12', type: 'volunteer' }
  ];

  const upcomingEvents = [
    { id: 1, title: 'Community Cleanup', date: '2025-02-05', status: 'registered' },
    { id: 2, title: 'Youth Mentorship Program', date: '2025-02-12', status: 'pending' },
    { id: 3, title: 'Fundraising Gala', date: '2025-02-20', status: 'interested' }
  ];

  const announcements = [
    { id: 1, title: 'New Member Orientation', date: '2025-01-25', priority: 'high' },
    { id: 2, title: 'Monthly Meeting Reminder', date: '2025-01-24', priority: 'medium' },
    { id: 3, title: 'Project Update: Education Initiative', date: '2025-01-23', priority: 'low' }
  ];

  const getRolePermissions = () => {
    const permissions = {
      visitor: ['view_events', 'view_media'],
      member: ['view_events', 'view_media', 'register_events', 'view_announcements'],
      bod: ['view_events', 'view_media', 'register_events', 'view_announcements', 'manage_events', 'view_members'],
      core: ['view_events', 'view_media', 'register_events', 'view_announcements', 'manage_events', 'view_members', 'manage_members', 'admin_panel'],
      admin: ['full_access']
    };
    return permissions[user?.role || 'visitor'] || [];
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-white">Welcome back, {user?.name}!</h1>
                <p className="text-white/70 mt-1">Role: <span className="text-blue-400 font-semibold capitalize">{user?.role}</span></p>
              </div>
              <div className="text-right">
                <div className="text-white/70 text-sm">Member Since</div>
                <div className="text-white font-semibold">January 2024</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <nav className="flex space-x-1 bg-white/10 backdrop-blur-md rounded-lg p-1 border border-white/20">
            {['overview', 'events', 'activities', 'announcements'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all transform hover:scale-105">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white/70 text-sm">{stat.label}</p>
                      <p className="text-2xl font-bold text-white">{stat.value}</p>
                    </div>
                    <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Recent Activities & Announcements */}
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <Activity className="w-5 h-5 mr-2" />
                  Recent Activities
                </h3>
                <div className="space-y-3">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <div>
                        <p className="text-white text-sm">{activity.action}</p>
                        <p className="text-white/60 text-xs">{activity.date}</p>
                      </div>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        activity.type === 'event' ? 'bg-blue-500/20 text-blue-300' :
                        activity.type === 'training' ? 'bg-green-500/20 text-green-300' :
                        activity.type === 'donation' ? 'bg-yellow-500/20 text-yellow-300' :
                        'bg-purple-500/20 text-purple-300'
                      }`}>
                        {activity.type}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <Bell className="w-5 h-5 mr-2" />
                  Announcements
                </h3>
                <div className="space-y-3">
                  {announcements.map((announcement) => (
                    <div key={announcement.id} className="p-3 bg-white/5 rounded-lg">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-white text-sm font-medium">{announcement.title}</p>
                          <p className="text-white/60 text-xs mt-1">{announcement.date}</p>
                        </div>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          announcement.priority === 'high' ? 'bg-red-500/20 text-red-300' :
                          announcement.priority === 'medium' ? 'bg-yellow-500/20 text-yellow-300' :
                          'bg-gray-500/20 text-gray-300'
                        }`}>
                          {announcement.priority}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'events' && (
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              Upcoming Events
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="bg-white/10 rounded-lg p-4 border border-white/10">
                  <h4 className="text-white font-semibold mb-2">{event.title}</h4>
                  <p className="text-white/70 text-sm mb-3">{event.date}</p>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    event.status === 'registered' ? 'bg-green-500/20 text-green-300' :
                    event.status === 'pending' ? 'bg-yellow-500/20 text-yellow-300' :
                    'bg-blue-500/20 text-blue-300'
                  }`}>
                    {event.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'activities' && (
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
              <Activity className="w-5 h-5 mr-2" />
              Activity History
            </h3>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="bg-white/10 rounded-lg p-4 border border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-white font-semibold">{activity.action}</h4>
                      <p className="text-white/70 text-sm">{activity.date}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      activity.type === 'event' ? 'bg-blue-500/20 text-blue-300' :
                      activity.type === 'training' ? 'bg-green-500/20 text-green-300' :
                      activity.type === 'donation' ? 'bg-yellow-500/20 text-yellow-300' :
                      'bg-purple-500/20 text-purple-300'
                    }`}>
                      {activity.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'announcements' && (
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
              <Bell className="w-5 h-5 mr-2" />
              All Announcements
            </h3>
            <div className="space-y-4">
              {announcements.map((announcement) => (
                <div key={announcement.id} className="bg-white/10 rounded-lg p-4 border border-white/10">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-white font-semibold">{announcement.title}</h4>
                      <p className="text-white/70 text-sm mt-1">{announcement.date}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      announcement.priority === 'high' ? 'bg-red-500/20 text-red-300' :
                      announcement.priority === 'medium' ? 'bg-yellow-500/20 text-yellow-300' :
                      'bg-gray-500/20 text-gray-300'
                    }`}>
                      {announcement.priority}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;