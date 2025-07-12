import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, BookOpen } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="glass-footer text-glass-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="/logo white.jpeg" 
                alt="CliniGlobal Logo" 
                className="h-10 w-10 md:h-12 md:w-12 mr-3 rounded-lg shadow-md opacity-90"
              />
              <h3 className="text-lg md:text-xl font-bold cliniglobal-brand font-poppins text-glass-white">
                <span className="cliniglobal-clini">Clini</span><span className="cliniglobal-global">Global</span>
              </h3>
            </div>
            <p className="text-glass-white opacity-80 leading-relaxed font-poppins text-sm md:text-base">
              India's leading healthcare training institute, transforming careers through comprehensive clinical research, 
              bioinformatics, and healthcare management programs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="glass p-2 rounded-lg text-glass-white hover:glass-card transition-all duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="glass p-2 rounded-lg text-glass-white hover:glass-card transition-all duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="glass p-2 rounded-lg text-glass-white hover:glass-card transition-all duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="glass p-2 rounded-lg text-glass-white hover:glass-card transition-all duration-300">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Courses */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-glass-white">Popular Courses</h4>
            <ul className="space-y-2">
              <li><a href="#crm-course" className="text-glass-white opacity-80 hover:opacity-100 hover:text-blue-300 transition-all duration-300 text-sm">PG Diploma in Clinical Research</a></li>
              <li><a href="#clinical-sas-course" className="text-glass-white opacity-80 hover:opacity-100 hover:text-blue-300 transition-all duration-300 text-sm">Advanced Diploma in Clinical SAS</a></li>
              <li><a href="#bioinformatics-course" className="text-glass-white opacity-80 hover:opacity-100 hover:text-blue-300 transition-all duration-300 text-sm">Advanced Diploma in Bioinformatics</a></li>
              <li><a href="#medical-coding-course" className="text-glass-white opacity-80 hover:opacity-100 hover:text-blue-300 transition-all duration-300 text-sm">Advanced Diploma in Medical Coding</a></li>
              <li><a href="#ai-ml-course" className="text-glass-white opacity-80 hover:opacity-100 hover:text-blue-300 transition-all duration-300 text-sm">PG Diploma in AI & ML Healthcare</a></li>
              <li><a href="#mba-course" className="text-glass-white opacity-80 hover:opacity-100 hover:text-blue-300 transition-all duration-300 text-sm">MBA in Healthcare Management</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-glass-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-glass-white opacity-80 hover:opacity-100 hover:text-blue-300 transition-all duration-300 text-sm">About Us</a></li>
              <li><a href="#admission" className="text-glass-white opacity-80 hover:opacity-100 hover:text-blue-300 transition-all duration-300 text-sm">Admission</a></li>
              <li><a href="#placements" className="text-glass-white opacity-80 hover:opacity-100 hover:text-blue-300 transition-all duration-300 text-sm">Placements</a></li>
              <li><a href="#testimonials" className="text-glass-white opacity-80 hover:opacity-100 hover:text-blue-300 transition-all duration-300 text-sm">Success Stories</a></li>
              <li><a href="#leadership" className="text-glass-white opacity-80 hover:opacity-100 hover:text-blue-300 transition-all duration-300 text-sm">Faculty</a></li>
              <li><a href="#blog" className="text-glass-white opacity-80 hover:opacity-100 hover:text-blue-300 transition-all duration-300 text-sm">Blog</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-glass-white">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-blue-300" />
                <div>
                  <p className="text-glass-white opacity-80 text-sm">+919052992967</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-blue-300" />
                <div>
                  <p className="text-glass-white opacity-80 text-sm">info@cliniglobal.com</p>
                  <p className="text-glass-white opacity-80 text-sm">admin@cliniglobal.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-blue-300 mt-1" />
                <div>
                  <p className="text-blue-300 font-medium text-sm">CliniGlobal Research Institute Private Limited</p>
                  <p className="text-glass-white opacity-80 text-sm">125, 7th Cross Road</p>
                  <p className="text-glass-white opacity-80 text-sm">Off Bannerghatta Road</p>
                  <p className="text-glass-white opacity-80 text-sm">Dollar Layout, BTM 2nd Stage</p>
                  <p className="text-glass-white opacity-80 text-sm">Bangalore, Karnataka 560068</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
              <p className="text-glass-white opacity-80 text-sm mobile-center">
                © 2024 CliniGlobal Research Institute Private Limited. All rights reserved.
              </p>
              <div className="flex items-center space-x-2 text-sm text-glass-white opacity-70 mobile-center">
                <span>Site Crafted & Powered by</span>
                <span className="relative group">
                  <span className="font-bold text-blue-300 animate-pulse hover:animate-none transition-all duration-300 text-base tracking-wider">
                    ManageOps
                  </span>
                </span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-4 md:mt-0">
              <a href="/privacy-policy" className="text-glass-white opacity-80 hover:opacity-100 hover:text-blue-300 text-sm transition-all duration-300">Privacy Policy</a>
              <a href="#" className="text-glass-white opacity-80 hover:opacity-100 hover:text-blue-300 text-sm transition-all duration-300">Terms & Conditions</a>
              <a href="#" className="text-glass-white opacity-80 hover:opacity-100 hover:text-blue-300 text-sm transition-all duration-300">Sitemap</a>
              <a href="#" className="text-glass-white opacity-80 hover:opacity-100 hover:text-blue-300 text-sm transition-all duration-300">Accessibility Statement</a>
              <a href="#" className="text-glass-white opacity-80 hover:opacity-100 hover:text-blue-300 text-sm transition-all duration-300">Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;