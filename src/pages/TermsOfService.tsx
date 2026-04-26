import { motion } from "framer-motion";
import { Scale, FileWarning, AlertTriangle, Zap } from "lucide-react";
import { useEffect } from "react";

export function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      icon: <FileWarning className="w-8 h-8 text-black" />,
      color: "bg-[#FF6B6B]",
      title: "Fair Use Policy",
      content: "Dropwave is intended strictly for personal, non-commercial use. The audio extracted from Instagram and YouTube remains the intellectual property of the original creators. You may not use Dropwave to mass-download copyrighted material for distribution, resale, or commercial broadcasting."
    },
    {
      icon: <Zap className="w-8 h-8 text-black" />,
      color: "bg-[#FFD93D]",
      title: "Service Availability",
      content: "Because Dropwave relies on third-party APIs and libraries (like yt-dlp and Google SMTP), we cannot guarantee 100% uptime. API changes from Instagram or YouTube may temporarily break functionality until an update is pushed."
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-black" />,
      color: "bg-[#4D96FF]",
      title: "Liability Limitation",
      content: "Dropwave is provided 'as is' without warranty of any kind. We are not responsible for any actions taken against your Google Account for violating their terms of service, nor are we responsible for any data loss, hardware damage, or legal repercussions resulting from your use of the software."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-black pt-32 pb-20 font-sans">
      <div className="fixed inset-0 opacity-[0.05] pointer-events-none z-0" style={{ backgroundImage: 'linear-gradient(black 2px, transparent 2px), linear-gradient(90deg, black 2px, transparent 2px)', backgroundSize: '64px 64px' }}></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-black border-4 border-black shadow-[6px_6px_0px_0px_#FF6B6B] mb-8 transform rotate-1">
            <Scale className="w-6 h-6 text-white" />
            <span className="text-sm font-black tracking-widest text-white uppercase">
              Legal Documentation
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Terms <br /> Of Service.
          </h1>
          <div className="w-32 h-4 bg-[#FF6B6B] mb-6 border-2 border-black"></div>
          <p className="text-xl font-bold text-zinc-600 max-w-2xl leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
            By using the Dropwave application, you agree to these terms. Please read them carefully before initiating the background monitor.
          </p>
        </motion.div>

        {/* Content Sections */}
        <div className="space-y-12">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.15, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 md:p-10 relative overflow-hidden group"
            >
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
                  <motion.div 
                    whileHover={{ rotate: 90 }}
                    className={`w-16 h-16 shrink-0 ${section.color} border-4 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}
                  >
                    {section.icon}
                  </motion.div>
                  <h2 className="text-3xl md:text-4xl font-black uppercase" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    {section.title}
                  </h2>
                </div>
                
                <p className="text-lg font-medium leading-relaxed text-zinc-700 bg-zinc-50 p-6 border-2 border-black" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {section.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 p-6 bg-[#FFD93D] text-black border-4 border-black font-black text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          By proceeding with the installation, you confirm your acceptance of these terms.
        </motion.div>

      </div>
    </div>
  );
}
