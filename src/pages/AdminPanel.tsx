import React, { useState } from 'react';
import { Users, Calendar, DollarSign, Settings, Bell, BarChart3, UserPlus, Edit, Trash2, Eye, Search, Filter, Download, Upload } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const AdminPanel: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data
  const stats = [
    { icon: Users, label: 'Total Members', value: '156', change: '+12', color: 'from-blue-500 to-blue-600' },
    { icon: Calendar, label: 'Active Events', value: '8', change: '+3', color: 'from-green-500 to-green-600' },
    { icon: DollarSign, label: 'Total Donations', value: '₹2,45,000', change: '+15%', color: 'from-yellow-500 to-yellow-600' },
    { icon: Bell, label: 'Pending Approvals', value: '5', change: '-2', color: 'from-red-500 to-red-600' }
  ];

  const members = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'member', status: 'active', joinDate: '2024-01-15', donations: '₹5,000' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'bod', status: 'active', joinDate: '2023-08-20', donations: '₹8,500' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', role: 'member', status: 'pending', joinDate: '2024-12-01', donations: '₹2,000' },
    { id: 4, name: 'Sarah Wilson', email: 'sarah@example.com', role: 'core', status: 'active', joinDate: '2023-05-10', donations: '₹12,000' },
  ];

  const events = [
    { id: 1, title: 'Blood Drive', date: '2025-02-15', status: 'upcoming', attendees: 45, budget: '₹15,000' },
    { id: 2, title: 'Leadership Summit', date: '2025-02-28', status: 'planning', attendees: 120, budget: '₹50,000' },
    { id: 3, title: 'Cleanup Drive', date: '2025-03-10', status: 'approved', attendees: 75, budget: '₹8,000' },
  ];

  const donations = [
    { id: 1, donor: 'Anonymous', amount: '₹10,000', date: '2025-01-20', purpose: 'Education Fund', status: 'completed' },
    { id: 2, donor: 'ABC Corporation', amount: '₹25,000', date: '2025-01-18', purpose: 'Healthcare Initiative', status: 'completed' },
    { id: 3, donor: 'John Doe', amount: '₹5,000', date: '2025-01-15', purpose: 'General Fund', status: 'pending' },
  ];

  const announcements = [
    { id: 1, title: 'New Member Orientation', content: 'Orientation for new members scheduled for next week.', date: '2025-01-25', priority: 'high', status: 'draft' },
    { id: 2, title: 'Monthly Meeting', content: 'Regular monthly meeting reminder.', date: '2025-01-24', priority: 'medium', status: 'published' },
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'members', label: 'Members', icon: Users },
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'donations', label: 'Donations', icon: DollarSign },
    { id: 'announcements', label: 'Announcements', icon: Bell },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const getRoleColor = (role: string) => {
    const colors = {
      admin: 'bg-red-500/20 text-red-300',
      core: 'bg-purple-500/20 text-purple-300',
      bod: 'bg-blue-500/20 text-blue-300',
      member: 'bg-green-500/20 text-green-300',
    };
    return colors[role as keyof typeof colors] || 'bg-gray-500/20 text-gray-300';
  };

  const getStatusColor = (status: string) => {
    const colors = {
      active: 'bg-green-500/20 text-green-300',
      pending: 'bg-yellow-500/20 text-yellow-300',
      inactive: 'bg-red-500/20 text-red-300',
      upcoming: 'bg-blue-500/20 text-blue-300',
      planning: 'bg-yellow-500/20 text-yellow-300',
      approved: 'bg-green-500/20 text-green-300',
      completed: 'bg-green-500/20 text-green-300',
      draft: 'bg-gray-500/20 text-gray-300',
      published: 'bg-blue-500/20 text-blue-300'
    };
    return colors[status as keyof typeof colors] || 'bg-gray-500/20 text-gray-300';
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <h1 className="text-3xl font-bold text-white mb-2">Admin Panel</h1>
            <p className="text-white/70">Manage your Rotaract Club operations</p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-8">
          <nav className="flex space-x-1 bg-white/10 backdrop-blur-md rounded-lg p-1 border border-white/20 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                <tab.icon className="w-4 h-4 mr-2" />
                {tab.label}
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
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white/70 text-sm">{stat.label}</p>
                      <p className="text-2xl font-bold text-white">{stat.value}</p>
                      <p className="text-sm text-green-400">{stat.change}</p>
                    </div>
                    <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Quick Actions</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <button className="bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 p-4 rounded-lg transition-all flex flex-col items-center">
                  <UserPlus className="w-6 h-6 mb-2" />
                  <span className="text-sm">Add Member</span>
                </button>
                <button className="bg-green-500/20 hover:bg-green-500/30 text-green-300 p-4 rounded-lg transition-all flex flex-col items-center">
                  <Calendar className="w-6 h-6 mb-2" />
                  <span className="text-sm">Create Event</span>
                </button>
                <button className="bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-300 p-4 rounded-lg transition-all flex flex-col items-center">
                  <Bell className="w-6 h-6 mb-2" />
                  <span className="text-sm">Send Announcement</span>
                </button>
                <button className="bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 p-4 rounded-lg transition-all flex flex-col items-center">
                  <Download className="w-6 h-6 mb-2" />
                  <span className="text-sm">Export Data</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'members' && (
          <div className="space-y-6">
            {/* Search and Filters */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3.5 h-5 w-5 text-white/50" />
                  <input
                    type="text"
                    placeholder="Search members..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all flex items-center">
                  <UserPlus className="w-4 h-4 mr-2" />
                  Add Member
                </button>
              </div>
            </div>

            {/* Members Table */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-white/10">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider">Member</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider">Role</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider">Join Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider">Donations</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {members.map((member) => (
                      <tr key={member.id} className="hover:bg-white/5">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <div className="text-sm font-medium text-white">{member.name}</div>
                            <div className="text-sm text-white/60">{member.email}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getRoleColor(member.role)}`}>
                            {member.role}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(member.status)}`}>
                            {member.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white/70">
                          {new Date(member.joinDate).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{member.donations}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex space-x-2">
                            <button className="text-blue-400 hover:text-blue-300">
                              <Eye className="w-4 h-4" />
                            </button>
                            <button className="text-yellow-400 hover:text-yellow-300">
                              <Edit className="w-4 h-4" />
                            </button>
                            <button className="text-red-400 hover:text-red-300">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'events' && (
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-white">Event Management</h3>
                <button className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  Create Event
                </button>
              </div>
              <div className="grid gap-4">
                {events.map((event) => (
                  <div key={event.id} className="bg-white/10 p-4 rounded-lg border border-white/10 flex items-center justify-between">
                    <div>
                      <h4 className="text-white font-semibold">{event.title}</h4>
                      <p className="text-white/60 text-sm">{event.date} • {event.attendees} attendees • {event.budget}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(event.status)}`}>
                        {event.status}
                      </span>
                      <div className="flex space-x-2">
                        <button className="text-blue-400 hover:text-blue-300">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="text-yellow-400 hover:text-yellow-300">
                          <Edit className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'donations' && (
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Donation Management</h3>
              <div className="grid gap-4">
                {donations.map((donation) => (
                  <div key={donation.id} className="bg-white/10 p-4 rounded-lg border border-white/10 flex items-center justify-between">
                    <div>
                      <h4 className="text-white font-semibold">{donation.donor}</h4>
                      <p className="text-white/60 text-sm">{donation.amount} • {donation.purpose} • {donation.date}</p>
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(donation.status)}`}>
                      {donation.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'announcements' && (
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-white">Announcements</h3>
                <button className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-yellow-600 hover:to-orange-700 transition-all flex items-center">
                  <Bell className="w-4 h-4 mr-2" />
                  New Announcement
                </button>
              </div>
              <div className="grid gap-4">
                {announcements.map((announcement) => (
                  <div key={announcement.id} className="bg-white/10 p-4 rounded-lg border border-white/10">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="text-white font-semibold">{announcement.title}</h4>
                        <p className="text-white/70 text-sm mt-1">{announcement.content}</p>
                        <p className="text-white/50 text-xs mt-2">{announcement.date}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(announcement.status)}`}>
                          {announcement.status}
                        </span>
                        <button className="text-blue-400 hover:text-blue-300">
                          <Edit className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">System Settings</h3>
              <div className="space-y-4">
                <div className="bg-white/10 p-4 rounded-lg border border-white/10">
                  <h4 className="text-white font-semibold mb-2">General Settings</h4>
                  <p className="text-white/70 text-sm">Configure general system preferences and defaults.</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg border border-white/10">
                  <h4 className="text-white font-semibold mb-2">User Permissions</h4>
                  <p className="text-white/70 text-sm">Manage role-based access and permissions.</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg border border-white/10">
                  <h4 className="text-white font-semibold mb-2">Email Settings</h4>
                  <p className="text-white/70 text-sm">Configure email notifications and templates.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;