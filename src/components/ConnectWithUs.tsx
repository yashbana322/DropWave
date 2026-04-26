"use client"
import { motion } from "framer-motion";
import { FaGithub, FaDiscord } from "react-icons/fa";
import { Mail } from "lucide-react";

import { Link } from "react-router-dom";

export const ConnectWithUs = () => {
  return (
    <footer className="w-full bg-zinc-950 border-t border-zinc-900 py-20 overflow-hidden relative">
      {/* Glow effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[200px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Connect with Dropwave
          </h2>
          <p className="text-zinc-400 max-w-md mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
            Join the community. Report bugs, request features, or just say hi. We're building the future of automated curation.
          </p>
        </motion.div>

        <div className="flex gap-6 mb-16">
          {[
            { icon: <FaGithub className="w-6 h-6" />, href: "https://github.com/yashbana322", color: "hover:text-white hover:bg-zinc-800", title: "GitHub" },
            { icon: <FaDiscord className="w-6 h-6" />, href: "#", color: "hover:text-indigo-400 hover:bg-indigo-400/10", title: "Discord: birthcanalstealer_16431" },
            { icon: <Mail className="w-6 h-6" />, href: "mailto:banayash661@riaas.me", color: "hover:text-rose-400 hover:bg-rose-400/10", title: "Email" },
          ].map((social, index) => (
             <motion.a
              key={index}
              href={social.href}
              title={social.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -3 }}
              className={`w-14 h-14 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 transition-all duration-300 ${social.color}`}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent mb-8" />
        
        <div className="flex flex-col md:flex-row items-center justify-between w-full text-zinc-500 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
          <p>© 2026 Dropwave Automation. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/work" className="hover:text-zinc-300 transition-colors">Wanna Work?</Link>
            <Link to="/privacy" className="hover:text-zinc-300 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-zinc-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
