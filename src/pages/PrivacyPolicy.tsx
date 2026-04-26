import { motion } from "framer-motion";
import { ShieldAlert, Database, EyeOff, Lock } from "lucide-react";
import { useEffect } from "react";

export function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      icon: <Database className="w-8 h-8 text-black" />,
      color: "bg-[#4D96FF]",
      title: "Data We Collect",
      content: "Dropwave is designed to be as passive and unobtrusive as possible. The only data we actively process is the audio stream of the Instagram Reels you view. We do not store your browsing history, account credentials, or any personal identifiers on our remote servers. Your Google App Password is saved locally on your machine and is never transmitted to us."
    },
    {
      icon: <EyeOff className="w-8 h-8 text-black" />,
      color: "bg-[#FF6B6B]",
      title: "How We Use It",
      content: "The audio snippets are temporarily buffered in your local memory to generate a spectral fingerprint. Once the fingerprint is matched against Shazam's public database and downloaded via YouTube, the buffer is immediately flushed. We do not keep logs of the songs you download."
    },
    {
      icon: <Lock className="w-8 h-8 text-black" />,
      color: "bg-[#6BCB77]",
      title: "Security & 2FA",
      content: "We require a Google App Password strictly to automate the SMTP email delivery of your audio files. This limits Dropwave's access strictly to sending mail, ensuring it cannot read your inbox or modify your account settings. This is a standard security practice for local automation tools."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-black pt-32 pb-20 font-sans">
      {/* Background Grid */}
      <div className="fixed inset-0 opacity-[0.05] pointer-events-none z-0" style={{ backgroundImage: 'linear-gradient(black 2px, transparent 2px), linear-gradient(90deg, black 2px, transparent 2px)', backgroundSize: '64px 64px' }}></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#FFD93D] border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-8 transform -rotate-1">
            <ShieldAlert className="w-6 h-6 text-black" />
            <span className="text-sm font-black tracking-widest text-black uppercase">
              Legal Documentation
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Privacy <br /> Policy.
          </h1>
          <div className="w-32 h-4 bg-black mb-6"></div>
          <p className="text-xl font-bold text-zinc-600 max-w-2xl leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
            We believe in complete transparency. Here is exactly how Dropwave handles your data, your passwords, and your audio files.
          </p>
        </motion.div>

        {/* Content Sections */}
        <div className="space-y-12">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.15, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.02, x: 10 }}
              className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 md:p-10 relative overflow-hidden group"
            >
              {/* Hover Block */}
              <div className={`absolute top-0 right-0 w-24 h-24 ${section.color} border-b-4 border-l-4 border-black translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center`}>
                {section.icon}
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 ${section.color} border-4 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-none transition-shadow`}>
                    {section.icon}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black uppercase" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    {section.title}
                  </h2>
                </div>
                
                <p className="text-lg font-medium leading-relaxed text-zinc-700" style={{ fontFamily: "'Inter', sans-serif" }}>
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
          className="mt-20 p-6 bg-black text-white border-4 border-black font-bold text-center"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Last updated: April 2026. If you have any concerns, feel free to reach out via our Discord community.
        </motion.div>

      </div>
    </div>
  );
}
