"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center border-b border-white/10">
      
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          poster="/hero-poster.jpg" 
          preload="metadata"
          className="object-cover w-full h-full scale-105"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>      
        <div className="absolute inset-0 bg-gradient-to-b from-kari-dark/90 via-kari-dark/60 to-kari-dark"></div>
      </div>

      {/* CHANGED: Match Navbar width padding perfectly */}
      <div className="w-full px-6 sm:px-8 lg:px-12 text-center relative z-10 pt-10">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col items-center justify-center space-y-8">
          
          <motion.div variants={itemVariants} className="bg-kari-surface border border-kari-gold/50 px-5 py-2 rounded-full flex items-center gap-2 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
            <span className="text-kari-gold text-sm font-bold uppercase tracking-widest">100% Halal Certified</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-tight drop-shadow-2xl">
            Premium Quality <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-kari-gold via-yellow-300 to-kari-gold">
              Mutton & Chicken
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="max-w-2xl text-lg md:text-xl text-gray-200 font-sans drop-shadow-lg mx-auto">
            Experience the finest, freshest, and most hygienic meat cuts in Tiruppur. 
            Prepared daily by <span className="text-white font-semibold">KariBhai</span>.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 pt-6 justify-center">
            <a href="#products" className="bg-kari-gold hover:bg-yellow-500 text-kari-dark px-10 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(212,175,55,0.4)]">
              Explore Products
            </a>
            <a href="#contact" className="bg-kari-surface/80 backdrop-blur-md border border-kari-red text-white hover:bg-kari-red px-10 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_10px_rgba(155,17,30,0.3)]">
              Visit Our Shop
            </a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}