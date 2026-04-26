"use client"
import AnimatedGradientBackground from "@/components/ui/animated-gradient-background";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const DemoVariant1 = () => {
  const words = "Automate your music collection.".split(" ");

  return (
    <div className="relative w-full min-h-screen overflow-hidden font-sans selection:bg-blue-500/30">
      {/* Gradient Background */}
      <AnimatedGradientBackground />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 md:px-6 pt-20 pb-20">
        
        {/* Top Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-200">Dropwave v2.0 is live</span>
          </div>
        </motion.div>

        {/* Main Title with Staggered Word Animation */}
        <div className="max-w-5xl text-center mb-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-6 leading-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  delay: i * 0.1 + 0.3,
                  duration: 0.8,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="inline-block mr-4 md:mr-6"
              >
                {word}
              </motion.span>
            ))}
            <br />
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
              className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 inline-block"
            >
              Without lifting a finger.
            </motion.span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-6 text-xl text-zinc-300 md:text-2xl max-w-3xl mx-auto font-light leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            An intelligent background agent that listens to the reels you watch, recognizes the loop, and drops the lossless audio file straight into your inbox.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
            className="mt-10 flex justify-center"
          >
            <a
              href="/Dropwave_Setup.exe"
              download="Dropwave_Setup.exe"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold text-lg rounded-full hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <Sparkles className="w-5 h-5" />
              Download Dropwave
            </a>
          </motion.div>
        </div>

        {/* The Lottie Animation (Now inside a sleek glass orb) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.8, duration: 1, ease: "backOut" }}
          className="mt-20 relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-purple-500/20 rounded-full blur-3xl mix-blend-screen" />
          <div className="relative z-10 w-full h-full drop-shadow-[0_0_50px_rgba(124,58,237,0.3)]">
            <DotLottieReact
              src="https://lottie.host/8cf4ba71-e5fb-44f3-8134-178c4d389417/0CCsdcgNIP.json"
              loop
              autoplay
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export { DemoVariant1 };
