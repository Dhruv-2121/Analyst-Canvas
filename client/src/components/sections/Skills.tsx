import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { Card, CardContent } from "@/components/ui/card";

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <section className="py-20 px-4 relative z-10" id="skills">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical <span className="text-primary">Skills</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tools and technologies I use to transform raw data into actionable insights.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        >
          {resumeData.skills.map((skill, index) => (
            <motion.div key={index} variants={item}>
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-xl opacity-0 group-hover:opacity-75 blur transition duration-500"></div>
                <Card className="relative h-full bg-card border-white/5 hover:border-white/20 transition-all duration-300 overflow-hidden group-hover:-translate-y-2">
                  <CardContent className="p-6 flex flex-col items-center text-center gap-4 h-full justify-center">
                    <skill.icon className="w-12 h-12 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                    <h3 className="font-bold text-lg">{skill.name}</h3>
                    
                    {/* Tooltip-like reveal on hover */}
                    <div className="absolute inset-0 bg-black/90 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                      <p className="text-sm text-white font-medium">
                        {skill.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
