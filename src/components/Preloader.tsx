"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Disable scrolling while loading
    document.body.style.overflow = "hidden";
    
    // Simulate loading time (2 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = ""; // Re-enable scrolling
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-kari-dark"
        >
          {/* Glowing Logo */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-28 h-28 mb-8"
          >
            <Image 
              src="/karibhai-logo.png" 
              alt="Loading KariBhai..." 
              fill 
              priority
              className="object-cover rounded-full border-2 border-kari-gold shadow-[0_0_40px_rgba(212,175,55,0.4)]" 
            />
          </motion.div>
          
          {/* Animated Progress Bar */}
          <div className="w-64 h-1.5 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-kari-red via-kari-gold to-kari-red bg-[length:200%_auto] animate-pulse"
            />
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-kari-gold font-serif tracking-widest uppercase text-sm"
          >
            Preparing Premium Cuts...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}