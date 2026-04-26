"use client"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Wrench, TerminalSquare, ShieldCheck, CheckCircle2, ChevronRight, FileCode2, Package, Cpu } from "lucide-react";

const techStack = [
  { icon: <FileCode2 className="w-5 h-5 text-black" />, name: "Python 3", desc: "Core engine & UI (Tkinter)", color: "bg-[#FFD93D]" },
  { icon: <TerminalSquare className="w-5 h-5 text-black" />, name: "yt-dlp", desc: "Lossless audio extraction", color: "bg-[#FF6B6B]" },
  { icon: <Cpu className="w-5 h-5 text-black" />, name: "FFmpeg", desc: "Audio format conversion", color: "bg-[#6BCB77]" },
  { icon: <Package className="w-5 h-5 text-black" />, name: "Node.js", desc: "Local background server", color: "bg-[#4D96FF]" },
];

const setupSteps = [
  {
    title: "Install Prerequisites",
    description: "Before running the setup, ensure you have downloaded and installed Node.js and Python on your system. These are required for the background server and the core engine to function."
  },
  {
    title: "Run the Installer",
    description: "Launch Dropwave_Setup.exe. The wizard uses an Inno Setup script to automatically download FFmpeg and yt-dlp from secure sources and configures your Windows PATH variables without manual intervention."
  },
  {
    title: "Configure App Passwords",
    description: "Because Dropwave uses 'smtplib' to send tracks directly to your inbox, you need a Google App Password. Go to Google Account > Security > 2-Step Verification > App Passwords. Generate a 16-character code."
  },
  {
    title: "Link Your Credentials",
    description: "Open the Dropwave dashboard or the music_bot.py config. Paste your Gmail address and the 16-character App Password. This allows the bot to securely relay MP3 attachments bypassing standard 2FA blocks."
  },
  {
    title: "Start Curating",
    description: "Click 'Launch DROPWAVE' from your desktop. The background server will spin up, and you can instantly start pasting links or letting the Reel monitor do its job."
  }
];

export const SetupGuide = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="relative w-full py-32 bg-[#F9FAFB] text-zinc-900 overflow-hidden font-sans border-y-4 border-black">
      {/* Subtle halftone background to fit neo-brutalism */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

      <motion.div 
        style={{ scale, opacity }}
        className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10"
      >
        <div className="text-center mb-24 relative">
          <motion.div
            initial={{ opacity: 0, y: -20, rotate: -5 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-none bg-[#FFD93D] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-8"
          >
            <Wrench className="w-5 h-5 text-black" />
            <span className="text-xs font-black tracking-widest text-black uppercase">
              Architecture & Setup
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-5xl md:text-7xl font-black mb-6 text-black"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Under the Hood.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Tech Stack Widget (Left) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h3 className="text-2xl font-black mb-2 flex items-center gap-3 text-black" style={{ fontFamily: "'Outfit', sans-serif" }}>
              <TerminalSquare className="w-6 h-6" /> Dependencies
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {techStack.map((tech, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -50, y: 50 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, type: "spring", stiffness: 100 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`p-5 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-3 group relative overflow-hidden`}
                >
                  <div className={`absolute top-0 right-0 w-16 h-16 rounded-bl-full ${tech.color} opacity-20 group-hover:opacity-100 transition-opacity duration-300 -z-0`} />
                  <div className={`w-10 h-10 rounded-none border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center shrink-0 relative z-10 ${tech.color}`}>
                    {tech.icon}
                  </div>
                  <div className="relative z-10">
                    <h4 className="font-black text-xl text-black" style={{ fontFamily: "'Outfit', sans-serif" }}>{tech.name}</h4>
                    <p className="text-sm font-semibold text-zinc-600 mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>{tech.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, type: "spring" }}
              className="mt-4 p-6 bg-[#E8F9FD] border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden"
            >
              <div className="absolute -right-4 -bottom-4 opacity-10">
                <ShieldCheck className="w-32 h-32" />
              </div>
              <h4 className="font-black text-xl text-black flex items-center gap-2 mb-3 relative z-10">
                <ShieldCheck className="w-6 h-6" /> Auto-Provisioning
              </h4>
              <p className="text-black font-medium relative z-10">
                The setup wizard handles the dirty work. No need to mess with system variables or manually download binaries.
              </p>
            </motion.div>
          </div>

          {/* Interactive Setup Wizard Steps (Right) */}
          <div className="lg:col-span-7">
            <h3 className="text-2xl font-black mb-6 flex items-center gap-3 text-black" style={{ fontFamily: "'Outfit', sans-serif" }}>
              <CheckCircle2 className="w-6 h-6" /> Setup Protocol
            </h3>
            
            <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row min-h-[450px]">
              {/* Step Selector */}
              <div className="md:w-2/5 border-b-4 md:border-b-0 md:border-r-4 border-black bg-zinc-100 flex flex-col">
                {setupSteps.map((step, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    className="relative w-full text-left p-6 flex-1 flex items-center justify-between group overflow-hidden border-b-2 border-black last:border-b-0"
                  >
                    {activeStep === idx && (
                      <motion.div
                        layoutId="active-step"
                        className="absolute inset-0 bg-[#FF6B6B] border-r-4 border-black"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <div className="relative z-10">
                      <span className={`text-sm font-black tracking-widest mb-1 block ${activeStep === idx ? 'text-black' : 'text-zinc-500'}`}>STEP 0{idx + 1}</span>
                      <span className={`font-bold text-lg ${activeStep === idx ? 'text-white' : 'text-black'}`} style={{ fontFamily: "'Outfit', sans-serif" }}>{step.title}</span>
                    </div>
                    <ChevronRight className={`w-6 h-6 relative z-10 transition-transform ${activeStep === idx ? 'text-white translate-x-2' : 'text-zinc-400 group-hover:translate-x-1'}`} />
                  </button>
                ))}
              </div>
              
              {/* Step Content */}
              <div className="md:w-3/5 p-8 relative flex items-center bg-white overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, x: 50, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -50, scale: 0.95 }}
                    transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
                    className="absolute inset-8 flex flex-col justify-center"
                  >
                    <div className="w-12 h-12 bg-black text-white flex items-center justify-center font-black text-2xl mb-6 shadow-[4px_4px_0px_0px_#FFD93D]">
                      {activeStep + 1}
                    </div>
                    <h4 className="text-3xl font-black mb-4 text-black" style={{ fontFamily: "'Outfit', sans-serif" }}>{setupSteps[activeStep].title}</h4>
                    <p className="text-zinc-700 font-medium text-lg leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {setupSteps[activeStep].description}
                    </p>
                    
                    {activeStep === 2 && (
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mt-6 p-4 bg-[#1a1a1a] text-white font-mono text-sm border-l-8 border-[#6BCB77]"
                      >
                        <span className="text-zinc-500"># Example App Password format</span><br/>
                        <span className="text-[#6BCB77] font-bold text-lg tracking-widest mt-2 block">abcd efgh ijkl mnop</span>
                      </motion.div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

          </div>

        </div>
      </motion.div>
    </section>
  );
};
