"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { DownloadCloud, Sparkles, Mail, Headphones, Activity } from "lucide-react";

const BrutalistCard = ({ children, className = "", delay = 0, hoverColor = "bg-white" }: { children: React.ReactNode, className?: string, delay?: number, hoverColor?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay, type: "spring", stiffness: 100 }}
      whileHover={{ y: -8, x: -8 }}
      className={`relative overflow-hidden rounded-2xl border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 group ${className}`}
    >
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0 ${hoverColor}`} />
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </motion.div>
  );
};

export const WhatIsDropwave = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-150, 150]);

  return (
    <div ref={containerRef} className="relative w-full min-h-[120vh] bg-[#f8fafc] text-black overflow-hidden py-32 font-sans border-t-4 border-black">
      {/* Brutalist Grid Background */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'linear-gradient(black 2px, transparent 2px), linear-gradient(90deg, black 2px, transparent 2px)', backgroundSize: '64px 64px' }}></div>
      
      {/* Floating Blobs (Made more solid/brutalist) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden flex items-center justify-center">
        <motion.div style={{ y: y1 }} className="absolute -left-[10%] top-[10%] w-[40vw] h-[40vw] rounded-full bg-[#4D96FF] mix-blend-multiply filter blur-[80px] opacity-40" />
        <motion.div style={{ y: y2 }} className="absolute -right-[10%] bottom-[10%] w-[40vw] h-[40vw] rounded-full bg-[#FF6B6B] mix-blend-multiply filter blur-[80px] opacity-40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-none bg-[#FFD93D] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-8 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all cursor-default"
          >
            <span className="flex h-3 w-3 rounded-none bg-black animate-pulse" />
            <span className="text-xs font-black tracking-widest text-black uppercase">
              Passive Music Curation
            </span>
          </motion.div>
          
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, type: "spring" }}
            className="text-5xl md:text-7xl font-black tracking-tighter mb-8 text-black uppercase" 
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Don't search for music. <br className="hidden md:block" />
            <span className="bg-[#6BCB77] px-4 py-1 border-4 border-black inline-block mt-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform -rotate-2">Let it find you.</span>
          </motion.h3>
        </div>

        {/* Brutalist Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[340px]">
          
          {/* Card 1: Large Span */}
          <BrutalistCard className="md:col-span-2 p-10 flex flex-col justify-between" hoverColor="bg-[#4D96FF]" delay={0.1}>
            <div className="relative z-20 flex flex-col h-full group-hover:text-white transition-colors duration-300">
              <div className="w-16 h-16 bg-white border-4 border-black flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all group-hover:translate-y-1">
                <Sparkles className="w-8 h-8 text-black" />
              </div>
              <h4 className="text-4xl font-black mb-4 uppercase" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Spectral Monitor
              </h4>
              <p className="font-bold text-lg max-w-md leading-relaxed group-hover:text-black/80" style={{ fontFamily: "'Inter', sans-serif" }}>
                Advanced audio fingerprinting detects when you've watched a reel 3+ times. It knows exactly what you're vibing with.
              </p>
            </div>
            
            {/* Brutalist Animated Waveform inside Card */}
            <div className="absolute right-[-5%] bottom-[-10%] w-[50%] h-[110%] opacity-20 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-end gap-3 justify-center">
              {[
                { i: 1, color: "bg-[#FFD93D]" },
                { i: 2, color: "bg-[#FF6B6B]" },
                { i: 3, color: "bg-[#6BCB77]" },
                { i: 4, color: "bg-[#9D4EDD]" },
                { i: 5, color: "bg-[#FF9F1C]" },
                { i: 6, color: "bg-[#4D96FF]" }
              ].map(({ i, color }) => (
                <motion.div
                  key={i}
                  animate={{ height: ["20%", "90%", "30%", "100%", "40%"] }}
                  transition={{ repeat: Infinity, duration: 2.0 + (i * 0.4), ease: "circInOut", repeatType: "mirror" }}
                  className={`w-10 ${color} border-x-4 border-t-4 border-black`}
                />
              ))}
            </div>
          </BrutalistCard>

          {/* Card 2: Medium */}
          <BrutalistCard className="md:col-span-1 p-10 flex flex-col justify-between" hoverColor="bg-[#FF6B6B]" delay={0.2}>
            <div className="relative z-20 flex flex-col h-full group-hover:text-white transition-colors duration-300">
              <div className="w-16 h-16 bg-white border-4 border-black flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <DownloadCloud className="w-8 h-8 text-black" />
              </div>
              <h4 className="text-3xl font-black mb-4 uppercase" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Instant Bypass
              </h4>
              <p className="font-bold leading-relaxed group-hover:text-black/80" style={{ fontFamily: "'Inter', sans-serif" }}>
                Don't want to wait? Drop a YouTube link directly into the UI for an instant, lossless rip.
              </p>
            </div>
          </BrutalistCard>

          {/* Card 3: Medium */}
          <BrutalistCard className="md:col-span-1 p-10 flex flex-col justify-between !bg-[#1A1A1A] !text-white" hoverColor="bg-[#FFD93D]" delay={0.3}>
            <div className="relative z-20 flex flex-col h-full group-hover:text-black transition-colors duration-300">
              <div className="w-16 h-16 bg-[#1A1A1A] border-4 border-white group-hover:border-black flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] group-hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                <Mail className="w-8 h-8 text-white group-hover:text-black transition-colors" />
              </div>
              <h4 className="text-3xl font-black mb-4 uppercase" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Direct to Inbox
              </h4>
              <p className="font-bold leading-relaxed text-zinc-400 group-hover:text-black/80 transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>
                Automatically routes the final HQ audio file securely to your connected Gmail address.
              </p>
            </div>
            {/* Giant Mail Icon */}
            <motion.div 
              animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="absolute right-0 bottom-0 opacity-10 group-hover:opacity-20 group-hover:text-black transition-colors"
            >
              <Mail className="w-48 h-48" strokeWidth={1} />
            </motion.div>
          </BrutalistCard>

          {/* Card 4: Large Span */}
          <BrutalistCard className="md:col-span-2 p-10 flex flex-col justify-between overflow-hidden" hoverColor="bg-[#6BCB77]" delay={0.4}>
            <div className="relative z-20 flex flex-col md:flex-row gap-8 items-center h-full group-hover:text-black transition-colors duration-300">
              <div className="flex-1">
                <div className="w-16 h-16 bg-white border-4 border-black flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <Headphones className="w-8 h-8 text-black" />
                </div>
                <h4 className="text-4xl font-black mb-4 uppercase" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  Studio Grade
                </h4>
                <p className="font-bold text-lg leading-relaxed max-w-md" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Dropwave doesn't compress. We extract the absolute highest bitrate available, preserving the artist's original master.
                </p>
              </div>
              
              <div className="flex-1 relative w-full h-full flex items-center justify-center">
                 <div className="relative w-48 h-48 flex items-center justify-center">
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                      className="absolute w-40 h-40 border-8 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                    />
                    <motion.div 
                      animate={{ rotate: -360 }}
                      transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                      className="absolute w-28 h-28 border-4 border-dashed border-black bg-white/50 backdrop-blur-sm"
                    />
                    <div className="w-16 h-16 bg-black text-white flex items-center justify-center relative z-10 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] group-hover:shadow-none transition-shadow">
                      <Activity className="w-8 h-8" />
                    </div>
                 </div>
              </div>
            </div>
          </BrutalistCard>

        </div>
      </div>
    </div>
  );
};
