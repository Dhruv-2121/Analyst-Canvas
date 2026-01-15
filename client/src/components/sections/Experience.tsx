import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { Calendar, Building2, Award } from "lucide-react";

export default function Experience() {
  return (
    <section className="py-20 px-4 bg-black/20" id="experience">
      <div className="container max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Work <span className="text-primary">Experience</span></h2>
          <p className="text-muted-foreground">My professional journey and virtual internships</p>
        </motion.div>

        <div className="space-y-12">
          {resumeData.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline Line (Desktop) */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
              
              <div className={`md:flex items-center justify-between gap-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Date Side */}
                <div className="md:w-1/2 mb-4 md:mb-0 flex md:justify-end md:text-right">
                  <div className={`flex items-center gap-3 text-primary font-mono ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                    <Calendar className="w-5 h-5" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                
                {/* Center Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full md:-translate-x-1/2 shadow-[0_0_15px_var(--primary)] z-10 top-0 md:top-1/2 md:-translate-y-1/2">
                   <div className="absolute inset-0 animate-ping rounded-full bg-primary opacity-75"></div>
                </div>

                {/* Content Side */}
                <div className="md:w-1/2">
                  <div className="glass-card p-6 rounded-2xl hover:bg-white/5 transition-colors group">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{exp.role}</h3>
                      <span className="text-xs px-2 py-1 rounded bg-primary/20 text-primary border border-primary/20">{exp.type}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-muted-foreground mb-4">
                      <Building2 className="w-4 h-4" />
                      <span className="font-semibold">{exp.company}</span>
                    </div>
                    
                    <p className="text-sm text-gray-400 leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    <div className="flex items-center gap-2 text-xs text-primary/80 cursor-pointer hover:underline">
                      <Award className="w-4 h-4" />
                      <span>View Certificate</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
