"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Handle scroll to change navbar background AND close mobile menu
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      if (mobileMenuOpen) setMobileMenuOpen(false); // Auto-close on scroll
    };

    // Handle clicking outside the menu to close it
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-kari-dark/90 backdrop-blur-md border-b border-white/10 shadow-xl" : "bg-gradient-to-b from-kari-dark/80 to-transparent"
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-kari-gold shadow-lg shadow-kari-gold/20">
              <Image 
                src="/karibhai-logo.png" 
                alt="KariBhai Logo" 
                fill 
                priority /* <--- ADD THIS LINE to load instantly */
                sizes="(max-width: 768px) 48px, 56px" /* <--- ADD THIS LINE for precise sizing */
                className="object-cover" 
              />
            </div>
            <span className="font-serif text-2xl md:text-3xl font-bold text-white tracking-wide drop-shadow-md">
              Kari<span className="text-kari-gold">Bhai</span>
            </span>
          </div>

          {/* DESKTOP/TABLET NAV */}
          {/* CHANGED: gap-4 lg:gap-10 prevents squishing on tablet. */}
          <div className="hidden md:flex gap-6 lg:gap-10 items-center">
            {['Home', 'Quality', 'Products', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-gray-200 hover:text-kari-gold font-medium transition-colors text-sm uppercase tracking-widest"
              >
                {item}
              </a>
            ))}
            
            {/* CHANGED: whitespace-nowrap prevents the 2-line break on tablets */}
            <a href="#contact" className="bg-kari-red hover:bg-red-700 text-white px-5 lg:px-7 py-2.5 rounded-full font-semibold transition-all shadow-lg shadow-kari-red/30 hover:shadow-kari-red/60 flex items-center gap-2 whitespace-nowrap">
              <MapPin size={18} />
              Locate Us
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-kari-gold hover:text-white transition-colors relative z-50" aria-label="Toggle Menu">
              {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* MODERN FLOATING MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            ref={menuRef}
            initial={{ opacity: 0, scale: 0.95, y: -20, x: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20, x: 20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden absolute top-20 right-4 w-64 bg-kari-surface/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="px-2 py-4 space-y-1 flex flex-col">
              {['Home', 'Quality', 'Products', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="block px-4 py-3 text-lg font-medium text-gray-200 hover:text-kari-gold hover:bg-white/5 rounded-xl transition-all"
                >
                  {item}
                </a>
              ))}
              <div className="pt-2 px-2">
                <a 
                  href="#contact" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex justify-center items-center gap-2 w-full bg-kari-red text-white py-3 rounded-xl font-bold"
                >
                  <MapPin size={18} />
                  Locate Us
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}