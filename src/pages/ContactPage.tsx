import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, User, MessageSquare, AlertCircle, CheckCircle, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    type: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'rotaract@ljiet.ac.in',
      description: 'Send us an email anytime'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+91 98765 43210',
      description: 'Call us during office hours'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: 'L.J. Institute of Engg. & Tech.',
      description: 'Ahmedabad, Gujarat, India'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: 'Mon - Fri: 9:00 AM - 6:00 PM',
      description: 'Saturday: 9:00 AM - 2:00 PM'
    }
  ];

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'membership', label: 'Membership' },
    { value: 'events', label: 'Event Information' },
    { value: 'volunteer', label: 'Volunteer Opportunities' },
    { value: 'partnership', label: 'Partnership' },
    { value: 'donation', label: 'Donation/Sponsorship' }
  ];

  const teamMembers = [
    {
      name: 'Priya Sharma',
      role: 'President',
      email: 'president@rotaract.ljiet.ac.in',
      phone: '+91 98765 43211',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Arjun Patel',
      role: 'Secretary',
      email: 'secretary@rotaract.ljiet.ac.in',
      phone: '+91 98765 43212',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Kavya Singh',
      role: 'Community Service Chair',
      email: 'community@rotaract.ljiet.ac.in',
      phone: '+91 98765 43213',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', url: '#', color: 'hover:text-blue-400' },
    { icon: Instagram, label: 'Instagram', url: '#', color: 'hover:text-pink-400' },
    { icon: Twitter, label: 'Twitter', url: '#', color: 'hover:text-blue-300' },
    { icon: Linkedin, label: 'LinkedIn', url: '#', color: 'hover:text-blue-500' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        type: 'general'
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Get in touch with us to learn more about our initiatives or to join our community
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all transform hover:scale-105 text-center group"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <info.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">{info.title}</h3>
              <p className="text-white font-medium mb-1">{info.details}</p>
              <p className="text-white/60 text-sm">{info.description}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-white/80 mb-2">
                    Inquiry Type
                  </label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {inquiryTypes.map((type) => (
                      <option key={type.value} value={type.value} className="bg-slate-800">
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-white/80 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Brief subject of your message"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              {submitStatus === 'success' && (
                <div className="flex items-center p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-300">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="flex items-center p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-300">
                  <AlertCircle className="w-5 h-5 mr-2" />
                  Failed to send message. Please try again.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                ) : (
                  <Send className="w-5 h-5 mr-2" />
                )}
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Team & Additional Info */}
          <div className="space-y-8">
            {/* Team Members */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6">Leadership Team</h2>
              <div className="space-y-4">
                {teamMembers.map((member, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg border border-white/10">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="text-white font-semibold">{member.name}</h3>
                      <p className="text-blue-300 text-sm">{member.role}</p>
                      <div className="flex flex-col space-y-1 mt-2">
                        <a href={`mailto:${member.email}`} className="text-white/60 text-xs hover:text-white transition-colors">
                          {member.email}
                        </a>
                        <a href={`tel:${member.phone}`} className="text-white/60 text-xs hover:text-white transition-colors">
                          {member.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6">Follow Us</h2>
              <p className="text-white/70 mb-6">
                Stay connected with us on social media for the latest updates, events, and community activities.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-white/70 ${social.color} transition-all transform hover:scale-110 hover:bg-white/20`}
                    title={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6">Location</h2>
              <div className="w-full h-48 bg-white/10 rounded-lg flex items-center justify-center border border-white/20">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-white/50 mx-auto mb-2" />
                  <p className="text-white/70">Interactive Map</p>
                  <p className="text-white/50 text-sm">L.J. Institute of Engineering & Technology</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;