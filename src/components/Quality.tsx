"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, Utensils } from "lucide-react";

const features = [
  { 
    icon: <ShieldCheck size={36} className="text-kari-gold" />, 
    title: "100% Halal Certified", 
    desc: "Strictly adhering to Islamic laws, ensuring ethical preparation and purity." 
  },
  { 
    icon: <Sparkles size={36} className="text-kari-gold" />, 
    title: "Premium Hygiene", 
    desc: "Our butcher blocks and tools are sanitized constantly for your safety." 
  },
  { 
    icon: <Utensils size={36} className="text-kari-gold" />, 
    title: "Tender & Fresh", 
    desc: "No frozen stock. Processed daily to guarantee the most tender meat." 
  }
];

export default function Quality() {
  return (
    <section id="quality" className="bg-kari-dark relative border-t border-white/5">
      
      {/* DESKTOP TITLE */}
      <div className="hidden md:block text-center pt-24 pb-16 max-w-7xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-5xl font-serif font-bold text-white mb-4"
        >
          The <span className="text-kari-red">KariBhai</span> Standard
        </motion.h2>
        <div className="h-1 w-24 bg-gradient-to-r from-transparent via-kari-gold to-transparent mx-auto"></div>
      </div>

      {/* =========================================
          MOBILE VIEW: "Sticky Stack" Animation
          ========================================= */}
      <div className="block md:hidden px-6 pb-24">
        
        {/* Mobile Title */}
        <div className="text-center pt-24 pb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-3xl font-serif font-bold text-white mb-2"
          >
            The <span className="text-kari-red">KariBhai</span> Standard
          </motion.h2>
          <div className="h-1 w-16 bg-gradient-to-r from-transparent via-kari-gold to-transparent mx-auto"></div>
        </div>

        {/* The Stacking Container 
            CHANGES: 
            1. Changed gap-[40vh] to gap-24 (which is a much smaller, tighter gap).
            2. Adjusted the top values so there is a perfect 40px gap between each card layer.
        */}
        <div className="flex flex-col gap-24 relative">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className={`
                /* The magic CSS that makes them stick and stack with perfect 40px lips */
                ${index === 0 ? "sticky top-[100px] z-10" : ""}
                ${index === 1 ? "sticky top-[140px] z-20 shadow-[0_-20px_30px_-15px_rgba(0,0,0,0.8)]" : ""}
                ${index === 2 ? "sticky top-[180px] z-30 shadow-[0_-20px_30px_-15px_rgba(0,0,0,0.8)]" : ""}
                
                /* Base card styling */
                bg-kari-surface p-6 rounded-2xl border-t border-white/10 flex flex-col items-center text-center shadow-2xl min-h-[220px] justify-center
              `}
            >
              <div className="bg-kari-dark w-14 h-14 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-kari-gold/20">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2 font-serif">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* =========================================
          DESKTOP VIEW: Standard Grid 
          ========================================= */}
      <div className="hidden md:grid grid-cols-3 gap-8 max-w-7xl mx-auto px-8 pb-24">
        {features.map((feature, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-kari-surface p-8 rounded-2xl border-t border-white/10 hover:border-kari-gold/50 transition-colors group shadow-lg text-center flex flex-col items-center"
          >
            <div className="bg-kari-dark w-20 h-20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(212,175,55,0.1)] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-4 font-serif tracking-wide">{feature.title}</h3>
            <p className="text-gray-400 leading-relaxed text-lg">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}