"use client";

import { motion } from "framer-motion";
// Removed 'Instagram' from this import list
import { MapPin, Phone, Clock, ChevronRight } from "lucide-react";
import Image from "next/image";

// Custom SVG for Instagram to avoid library import errors
const InstagramIcon = ({ size = 20, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function Footer() {
  // Deep link to open Google Maps directly to the shop's pin
  const mapsLink = "https://maps.app.goo.gl/jL7j6HJ4jG67DxX78?g_st=aw";
  
  // Instagram link provided by you
  const instaLink = "https://www.instagram.com/karibhai__official?stkn=MXVsZnVseGhlbWtiNQ==";

  return (
    <footer id="contact" className="relative bg-kari-dark border-t border-white/5 pt-20 pb-10 overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-kari-red/10 rounded-t-full blur-[100px] pointer-events-none"></div>

      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          
          {/* Column 1: Brand Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-kari-gold shadow-lg shadow-kari-gold/20">
                <Image src="/karibhai-logo.png" alt="KariBhai Logo" fill className="object-cover" />
              </div>
              <span className="font-serif text-4xl font-bold text-white tracking-wide drop-shadow-md">
                Kari<span className="text-kari-gold">Bhai</span>
              </span>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed">
              Premium Quality Mutton & Chicken. <br/>
              100% Halal Certified and prepared fresh daily for the finest taste.
            </p>
            
            {/* Instagram Button */}
            <a 
              href={instaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white px-6 py-3 rounded-full font-semibold transition-transform hover:scale-105 shadow-lg"
            >
              <InstagramIcon size={20} />
              Follow on Instagram
            </a>
          </motion.div>

          {/* Column 2: Quick Contacts & Hours */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-serif font-bold text-white mb-6 border-b border-white/10 pb-4">Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 text-gray-300">
                <Clock className="text-kari-gold mt-1 flex-shrink-0" size={24} />
                <div>
                  <p className="font-bold text-white text-lg">Opening Hours</p>
                  <p>Mon - Sun: 6:00 AM - 9:00 PM</p>
                  <p className="text-sm text-gray-500 mt-1">Visit early for the best cuts!</p>
                </div>
              </div>

              <div className="flex items-start gap-4 text-gray-300">
                <Phone className="text-kari-gold mt-1 flex-shrink-0" size={24} />
                <div>
                  <p className="font-bold text-white text-lg">Phone</p>
                  <p>Available at the shop</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Column 3: Custom Map / Location Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-2xl font-serif font-bold text-white mb-6 border-b border-white/10 pb-4">Locate Us</h3>
            
            {/* Interactive Location Card */}
            <a 
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-kari-surface border-2 border-white/10 hover:border-kari-red/50 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_40px_-10px_rgba(155,17,30,0.5)] relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="bg-kari-dark w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:bg-kari-red transition-colors duration-300">
                  <MapPin className="text-kari-gold group-hover:text-white" size={24} />
                </div>
                
                <h4 className="text-xl font-bold text-white mb-2">KariBhai Shop</h4>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Pudur Pirivu Bus Stop,<br/>
                  Dharapuram Road,<br/>
                  Tiruppur.
                </p>
                
                <div className="flex items-center text-kari-gold font-semibold text-sm uppercase tracking-wider group-hover:text-white transition-colors">
                  Open in Google Maps
                  <ChevronRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          </motion.div>

        </div>

        {/* Copyright Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 font-medium tracking-wide">
          <p>&copy; {new Date().getFullYear()} KariBhai. All rights reserved.</p>
          <p>Designed for Premium Quality.</p>
        </div>
      </div>
    </footer>
  );
}