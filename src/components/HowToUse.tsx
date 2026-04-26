"use client"
import { motion } from "framer-motion";
import { Copy, Activity, MailCheck } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Toggle the Monitor",
    description: "Launch Dropwave in the background. It will silently listen for looping audio from Instagram Reels while you scroll natively.",
    icon: <Activity className="w-6 h-6" />
  },
  {
    number: "02",
    title: "Or Paste a Link",
    description: "Got a specific YouTube video? Just paste the URL directly into the Dropwave UI to bypass the background monitor and force a download.",
    icon: <Copy className="w-6 h-6" />
  },
  {
    number: "03",
    title: "Check Your Inbox",
    description: "Dropwave processes the audio, converts it to a pristine MP3 format, and securely emails it to your connected Gmail address.",
    icon: <MailCheck className="w-6 h-6" />
  }
];

export const HowToUse = () => {
  return (
    <section className="relative w-full py-32 bg-zinc-950 text-white overflow-hidden border-t border-zinc-800">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            How it <span className="text-blue-500">Works</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-zinc-400 max-w-2xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Three simple steps to automate your music library. Set it once, and let Dropwave handle the rest.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-purple-500/0"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center relative z-10 mb-8 group-hover:scale-110 group-hover:border-blue-500 transition-all duration-300 shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]">
                <span className="absolute -top-3 -right-3 text-sm font-bold text-zinc-500 bg-zinc-950 px-2 group-hover:text-blue-400 transition-colors">
                  {step.number}
                </span>
                <div className="text-zinc-300 group-hover:text-blue-400 transition-colors">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                {step.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
