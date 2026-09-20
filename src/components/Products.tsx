"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const products = [
  {
    id: "mutton",
    title: "Premium Mutton",
    tamilName: "மட்டன்",
    desc: "Tender, juicy, and rich in flavor. Perfect for biryani, chukka, or a hearty curry.",
    image: "/mutton.png", 
    color: "from-kari-red/30 to-transparent",
    glow: "hover:shadow-[0_15px_50px_-12px_rgba(155,17,30,0.5)] border-kari-red/50",
  },
  {
    id: "chicken",
    title: "Fresh Chicken",
    tamilName: "சிக்கன்",
    desc: "Clean, hormone-free, and fresh. Available in whole, curry cut, boneless, and lollipop cuts.",
    image: "/chicken.png", 
    color: "from-kari-gold/20 to-transparent",
    glow: "hover:shadow-[0_15px_50px_-12px_rgba(212,175,55,0.4)] border-kari-gold/50",
  }
];

export default function Products() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // SLOWER ANIMATION: Spread across [0, 1] instead of [0, 0.8]
  const slideUpY = useTransform(scrollYProgress, [0, 1], ["0vh", "-100vh"]);
  const fadeOutOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);
  
  const card2Scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const card2Opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <section id="products" className="bg-kari-dark relative border-t border-white/5">
      
      {/* DESKTOP TITLE */}
      <div className="hidden md:block text-center pt-24 pb-16 max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-serif font-bold text-white mb-4">Our Fresh Cuts</h2>
        <p className="text-gray-400 max-w-xl mx-auto text-lg">Available for in-store purchase.</p>
      </div>

      {/* MOBILE VIEW: Increased height to 160vh so it takes MORE scrolling to slide the card up (slower speed) */}
      <div ref={containerRef} className="block md:hidden h-[160vh] relative mb-4">
        <div className="sticky top-0 pt-28 pb-4 flex flex-col items-center px-4">
          
          <motion.div style={{ y: slideUpY, opacity: fadeOutOpacity }} className="text-center mb-6 z-20 w-full">
            <h2 className="text-4xl font-serif font-bold text-white mb-2">Our Fresh Cuts</h2>
            <p className="text-gray-400 text-sm">Available for in-store purchase.</p>
          </motion.div>

          <div className="relative w-full max-w-sm h-[480px]"> 
            {/* Card 2 (Bottom) */}
            <motion.div style={{ scale: card2Scale, opacity: card2Opacity }} className={`absolute inset-0 rounded-3xl bg-kari-surface border-t-2 border-white/10 p-6 shadow-2xl flex flex-col`}>
              <div className={`absolute inset-0 bg-gradient-to-bl ${products[1].color} opacity-40 rounded-3xl pointer-events-none`}></div>
              <div className="relative w-full h-40 mb-4 z-10">
                 <Image src={products[1].image} alt={products[1].title} fill className="object-contain drop-shadow-2xl" />
              </div>
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-serif font-bold text-white drop-shadow-md">{products[1].title}</h3>
                  <span className="text-xl font-bold text-kari-gold opacity-90">{products[1].tamilName}</span>
                </div>
                <p className="text-gray-300 text-[14px] leading-relaxed mb-4 flex-1">{products[1].desc}</p>
                <a href="#contact" className="inline-block text-sm font-bold text-kari-gold uppercase tracking-wider mt-auto">Visit Shop to Buy →</a>
              </div>
            </motion.div>

            {/* Card 1 (Top) */}
            <motion.div style={{ y: slideUpY, opacity: fadeOutOpacity }} className={`absolute inset-0 rounded-3xl bg-kari-surface border-t-2 border-white/10 p-6 shadow-2xl flex flex-col`}>
              <div className={`absolute inset-0 bg-gradient-to-bl ${products[0].color} opacity-40 rounded-3xl pointer-events-none`}></div>
              <div className="relative w-full h-40 mb-4 z-10">
                 <Image src={products[0].image} alt={products[0].title} fill className="object-contain drop-shadow-2xl" />
              </div>
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-serif font-bold text-white drop-shadow-md">{products[0].title}</h3>
                  <span className="text-xl font-bold text-kari-gold opacity-90">{products[0].tamilName}</span>
                </div>
                <p className="text-gray-300 text-[14px] leading-relaxed mb-4 flex-1">{products[0].desc}</p>
                <a href="#contact" className="inline-block text-sm font-bold text-kari-gold uppercase tracking-wider mt-auto">Visit Shop to Buy →</a>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* DESKTOP GRID ... (Keep exact same as before) */}
      <div className="hidden md:grid max-w-6xl mx-auto md:grid-cols-2 gap-10 px-8 pb-24">
        {products.map((product) => (
          <div key={product.id} className={`relative overflow-hidden rounded-3xl bg-kari-surface border-t-2 border-white/10 border-b border-x border-transparent p-10 cursor-pointer transition-all duration-500 hover:-translate-y-2 flex flex-col ${product.glow}`}>
            <div className={`absolute top-0 right-0 w-full h-full bg-gradient-to-bl ${product.color} opacity-40 pointer-events-none`}></div>
            <div className="relative z-10 flex gap-6 h-full items-center">
              <div className="flex-1">
                <div className="flex flex-col mb-4">
                  <h3 className="text-3xl font-serif font-bold text-white drop-shadow-md mb-1">{product.title}</h3>
                  <span className="text-xl font-bold text-kari-gold opacity-90">{product.tamilName}</span>
                </div>
                <p className="text-gray-300 mb-8 leading-relaxed text-lg">{product.desc}</p>
                <a href="#contact" className="inline-flex items-center text-sm font-bold text-white uppercase tracking-wider group-hover:text-kari-gold transition-colors">
                  <span className="border-b-2 border-kari-gold pb-1">Visit Shop to Buy</span>
                  <span className="ml-2 text-kari-gold transition-transform group-hover:translate-x-2 text-xl">→</span>
                </a>
              </div>
              <div className="relative w-48 h-48 flex-shrink-0">
                 <Image src={product.image} alt={product.title} fill className="object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-110" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}