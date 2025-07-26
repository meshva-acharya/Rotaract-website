import React from 'react';
import { ArrowRight, Calendar, Users, Heart, Award, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: 'Community Blood Drive',
      date: '2025-02-15',
      location: 'LJIET Campus',
      image: 'https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 2,
      title: 'Youth Leadership Summit',
      date: '2025-02-28',
      location: 'Convention Center',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 3,
      title: 'Environmental Cleanup Drive',
      date: '2025-03-10',
      location: 'Sabarmati Riverfront',
      image: 'https://images.pexels.com/photos/2547565/pexels-photo-2547565.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const stats = [
    { icon: Users, label: 'Active Members', value: '150+' },
    { icon: Calendar, label: 'Events Organized', value: '50+' },
    { icon: Heart, label: 'Lives Impacted', value: '1000+' },
    { icon: Award, label: 'Awards Won', value: '25+' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-purple-900/80"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div className="mb-6">
            <Sparkles className="w-16 h-16 mx-auto mb-4 text-yellow-400 animate-bounce" />
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
            Rotaract Club
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-200">
            of New L.J.I.E.T
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-white/80 leading-relaxed">
            Empowering young leaders to create positive change through service, fellowship, and professional development
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/events"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 hover:shadow-xl flex items-center justify-center group"
            >
              Explore Events
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/login"
              className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all transform hover:scale-105 backdrop-blur-sm"
            >
              Join Our Community
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                About Our Club
              </h2>
              <p className="text-white/80 text-lg mb-6 leading-relaxed">
                The Rotaract Club of New L.J.I.E.T is a dynamic community of young professionals and students committed to making a positive impact in our society. We focus on community service, professional development, and international understanding.
              </p>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                Through our various initiatives, we aim to develop leadership skills, build networks, and create lasting friendships while serving those in need.
              </p>
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 inline-flex items-center"
              >
                Learn More
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <img
                  src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Team collaboration"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Upcoming Events</h2>
            <p className="text-white/70 text-lg">Join us in making a difference</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:bg-white/15 transition-all transform hover:scale-105 hover:shadow-xl group">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{event.title}</h3>
                  <p className="text-white/70 mb-2 flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(event.date).toLocaleDateString()}
                  </p>
                  <p className="text-white/70 mb-4">{event.location}</p>
                  <button className="text-blue-400 hover:text-blue-300 font-semibold flex items-center group-hover:translate-x-1 transition-transform">
                    Learn More
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/events"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 inline-flex items-center"
            >
              View All Events
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-white/80 text-lg mb-8 leading-relaxed">
            Join our community of passionate individuals dedicated to creating positive change in the world. Together, we can achieve more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/login"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 hover:shadow-xl"
            >
              Become a Member
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all transform hover:scale-105 backdrop-blur-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;