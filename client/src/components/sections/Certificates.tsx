import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { Card, CardContent } from "@/components/ui/card";
import { Award, CheckCircle2 } from "lucide-react";

export default function Certificates() {
  return (
    <section className="py-20 px-4 bg-black/20" id="certificates">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Certifications & <span className="text-primary">Badges</span></h2>
          <p className="text-muted-foreground">Continuous learning and industry recognition.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resumeData.certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="glass-card border-none hover:bg-white/5 transition-all duration-300">
                <CardContent className="p-6 flex gap-4 items-start">
                  <div className="mt-1 bg-primary/20 p-3 rounded-full text-primary">
                    <Award className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg">{cert.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="text-white/80">{cert.issuer}</span>
                      <span>•</span>
                      <span>{cert.date}</span>
                    </div>
                    <p className="text-sm text-gray-400">
                      {cert.description}
                    </p>
                    <div className="pt-2 flex items-center gap-2 text-xs text-green-400">
                      <CheckCircle2 className="w-3 h-3" /> Verified Credential
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* Extra Curricular Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Leadership & Responsibility</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resumeData.leadership.map((role, idx) => (
              <div key={idx} className="bg-gradient-to-br from-white/5 to-transparent p-6 rounded-2xl border border-white/5">
                <h4 className="text-xl font-bold text-primary mb-2">{role.role}</h4>
                <div className="text-sm font-mono text-muted-foreground mb-4">{role.organization} | {role.period}</div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {role.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
