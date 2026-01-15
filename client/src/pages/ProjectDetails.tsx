import { useRoute, useLocation } from "wouter";
import { resumeData } from "@/data/resume";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Code, Share2 } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Background3D from "@/components/background/Background3D";
import { Badge } from "@/components/ui/badge";

export default function ProjectDetails() {
  const [match, params] = useRoute("/project/:id");
  const [, setLocation] = useLocation();
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!match) return null;

  const project = resumeData.projects.find(p => p.id === params.id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
           <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
           <Button onClick={() => setLocation("/")}>Go Back</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background relative">
      <Background3D />
      
      <div className="relative z-10 container max-w-4xl mx-auto px-4 py-12">
        <Button 
          variant="ghost" 
          className="mb-8 hover:bg-white/10"
          onClick={() => setLocation("/")}
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Portfolio
        </Button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass-card rounded-3xl overflow-hidden border border-white/10">
            <div className="relative h-[400px] w-full">
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-8 left-8 right-8 z-20">
                <div className="flex gap-2 mb-4">
                  {project.skills.map(skill => (
                    <Badge key={skill} className="bg-primary/80 hover:bg-primary border-none">{skill}</Badge>
                  ))}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold">{project.title}</h1>
              </div>
            </div>

            <div className="p-8 md:p-12 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Role</p>
                    <p className="font-medium">Data Analyst</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Date</p>
                    <p className="font-medium">2025</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <Code className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Tech Stack</p>
                    <p className="font-medium">{project.skills.slice(0, 2).join(", ")} +</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Project Overview</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {project.fullDescription}
                </p>
                
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="font-bold mb-4 flex items-center gap-2">
                    <Share2 className="w-4 h-4 text-primary" /> Key Outcomes
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex gap-3 text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      Executed advanced queries to extract meaningful insights from raw data.
                    </li>
                    <li className="flex gap-3 text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      Visualized data trends to support decision-making processes.
                    </li>
                    <li className="flex gap-3 text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      Improved operational efficiency through root cause analysis.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-8 flex gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">View Source Code</Button>
                <Button size="lg" variant="outline" className="border-white/10 hover:bg-white/5">Live Demo</Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
