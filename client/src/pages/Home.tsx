import { motion, AnimatePresence } from "framer-motion";
import Background3D from "@/components/background/Background3D";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Certificates from "@/components/sections/Certificates";
import Contact from "@/components/sections/Contact";
import { useEffect, useState } from "react";

export default function Home() {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative selection:bg-primary selection:text-white">
      <Background3D />
      
      {/* Floating Navbar */}
      <AnimatePresence>
        {showNav && (
          <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            className="fixed top-0 left-0 right-0 z-50 p-4 flex justify-center pointer-events-none"
          >
            <div className="glass px-6 py-3 rounded-full flex gap-6 pointer-events-auto shadow-2xl border border-white/10">
               {["Home", "Skills", "Experience", "Projects", "Certificates", "Contact"].map((item) => (
                 <button
                   key={item}
                   onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                   className="text-sm font-medium hover:text-primary transition-colors relative group"
                 >
                   {item}
                   <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                 </button>
               ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      <main className="relative z-10">
        <div id="home"><Hero /></div>
        <Skills />
        <Experience />
        <Projects />
        <Certificates />
        <Contact />
      </main>

      <footer className="relative z-10 py-8 text-center text-muted-foreground text-sm border-t border-white/5 bg-black/40">
        <p>© 2026 Dhruv Gupta. All rights reserved.</p>
        <p className="mt-2 text-xs opacity-50">Built with React & Tailwind</p>
      </footer>
    </div>
  );
}
