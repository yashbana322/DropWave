import { motion } from "framer-motion";
import { Briefcase, Code2, Rocket, ExternalLink } from "lucide-react";
import { FaGithub, FaDiscord } from "react-icons/fa";
import { useEffect } from "react";

export function WannaWork() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      icon: <Code2 className="w-8 h-8 text-black" />,
      color: "bg-[#FF6B6B]",
      title: "I'm Yash Bana.",
      content: "I'm the developer behind Dropwave. I specialize in building high-performance, automation-driven tools and full-stack web applications with uncompromising, top-tier aesthetics."
    },
    {
      icon: <Rocket className="w-8 h-8 text-black" />,
      color: "bg-[#6BCB77]",
      title: "Let's Build It.",
      content: "Want to build something crazy like Dropwave? Need a sophisticated scraper, an automated pipeline, or a premium web application? Let's team up and turn that idea into a reality."
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
            <Briefcase className="w-6 h-6 text-black" />
            <span className="text-sm font-black tracking-widest text-black uppercase">
              Open to Opportunities
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Wanna <br /> Work?
          </h1>
          <div className="w-32 h-4 bg-black mb-6"></div>
          <p className="text-xl font-bold text-zinc-600 max-w-2xl leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
            Ready to bring your next big idea to life? I'm available for freelance development and consulting.
          </p>
        </motion.div>

        {/* Content Sections */}
        <div className="space-y-12 mb-16">
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

          {/* Links Section styled like a card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.02, x: 10 }}
            className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 md:p-10 relative overflow-hidden group"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-[#4D96FF] border-4 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-none transition-shadow">
                  <ExternalLink className="w-8 h-8 text-black" />
                </div>
                <h2 className="text-3xl md:text-4xl font-black uppercase" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  Reach Out To Me
                </h2>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6">
                <a
                  href="https://riaas.me"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-3 p-4 border-4 border-black font-black uppercase bg-[#FFD93D] hover:bg-black hover:text-white transition-colors"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  <ExternalLink className="w-5 h-5" /> Portfolio
                </a>
                <a
                  href="https://github.com/yashbana322"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-3 p-4 border-4 border-black font-black uppercase bg-white hover:bg-black hover:text-white transition-colors"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  <FaGithub className="w-5 h-5" /> GitHub
                </a>
                <a
                  href="#"
                  title="birthcanalstealer_16431"
                  className="flex-1 flex items-center justify-center gap-3 p-4 border-4 border-black font-black uppercase bg-[#9D4EDD] text-white hover:bg-black hover:text-white transition-colors overflow-hidden text-ellipsis whitespace-nowrap"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  <FaDiscord className="w-5 h-5 shrink-0" /> birthcanalstealer_16431
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer Note */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 p-6 bg-black text-white border-4 border-black font-bold text-center"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Let's build something beautiful.
        </motion.div>

      </div>
    </div>
  );
}
