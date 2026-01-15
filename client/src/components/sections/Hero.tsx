import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Mail } from "lucide-react";
import { resumeData } from "@/data/resume";
import generatedAvatar from "@assets/generated_images/professional_male_data_analyst_avatar.png";
import { FaChartBar } from "react-icons/fa";
import resumePdf from "@assets/DHRUV_GUPTA_RESUME_2026_(2)_1768467630098.pdf";

export default function Hero() {
  const handleScrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownloadResume = () => {
    window.open(resumePdf, "_blank");
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20 px-4">
      <div className="container max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-center md:text-left order-2 md:order-1"
        >
          <div className="inline-block px-4 py-2 rounded-full glass border border-primary/20 text-primary font-mono text-sm mb-4">
             &lt;Hello World /&gt;
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            I'm <span className="text-primary">{resumeData.personalInfo.name}</span>
          </h1>
          
          <div className="text-2xl md:text-3xl font-light h-[60px] text-muted-foreground">
            I am a{" "}
            <TypeAnimation
              sequence={[
                "Data Analyst",
                2000,
                "Business Analyst",
                2000,
                "Power BI Developer",
                2000,
                "Python Developer",
                2000
              ]}
              wrapper="span"
              speed={50}
              className="font-semibold text-white"
              repeat={Infinity}
            />
          </div>
          
          <p className="text-lg text-muted-foreground max-w-lg mx-auto md:mx-0 leading-relaxed">
            {resumeData.personalInfo.about}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white gap-2 h-12 px-8 rounded-full shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)] transition-all duration-300"
              onClick={handleScrollToContact}
            >
              Hire Me <Mail size={18} />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/10 bg-white/5 hover:bg-white/10 text-white gap-2 h-12 px-8 rounded-full backdrop-blur-md"
              onClick={handleDownloadResume}
            >
              View Resume <Download size={18} />
            </Button>
          </div>
        </motion.div>
        
        {/* Right Content - Avatar */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative order-1 md:order-2 flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Animated Rings */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-dashed border-primary/30"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4 rounded-full border border-dashed border-white/10"
            />
            
            {/* Avatar Image */}
            <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-white/5 shadow-2xl z-10">
              <img 
                src={generatedAvatar} 
                alt="Profile" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 glass px-4 py-2 rounded-xl border border-white/10 shadow-lg z-20"
            >
              <span className="font-bold text-primary">5★</span> SQL HackerRank
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 -left-8 glass px-4 py-2 rounded-xl border border-white/10 shadow-lg z-20 flex items-center gap-2"
            >
              <FaChartBar className="text-[#F2C811]" /> Power BI Expert
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest">Scroll Down</span>
          <ArrowRight className="rotate-90 w-4 h-4" />
        </div>
      </motion.div>
    </section>
  );
}
