import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900/50 backdrop-blur-sm border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">R</span>
              </div>
              <span className="font-bold text-lg">Rotaract Club</span>
            </div>
            <p className="text-white/70 text-sm">
              Empowering young leaders to create positive change in our community through service, fellowship, and professional development.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-white/70">
              <li><a href="/events" className="hover:text-white transition-colors">Events</a></li>
              <li><a href="/media" className="hover:text-white transition-colors">Media Gallery</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="/login" className="hover:text-white transition-colors">Member Login</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3 text-white/70">
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span className="text-sm">rotaract@ljiet.ac.in</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span className="text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span className="text-sm">L.J.I.E.T, Ahmedabad</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-8 text-center text-white/60">
          <p>&copy; 2025 Rotaract Club of New L.J.I.E.T. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;