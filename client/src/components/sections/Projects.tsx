import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import { useLocation } from "wouter";

export default function Projects() {
  const [, setLocation] = useLocation();

  return (
    <section className="py-20 px-4" id="projects">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="text-primary">Projects</span></h2>
          <p className="text-muted-foreground">Real-world data analysis and machine learning applications.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resumeData.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="glass-card border-none h-full flex flex-col overflow-hidden group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute bottom-4 left-4 z-20">
                    <Badge className="bg-primary hover:bg-primary text-white border-none">Featured</Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl line-clamp-1 group-hover:text-primary transition-colors">{project.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="flex-grow space-y-4">
                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {project.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, i) => (
                      <Badge key={i} variant="outline" className="bg-white/5 hover:bg-white/10 text-xs font-normal">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="pt-2">
                  <Button 
                    className="w-full group-hover:bg-primary transition-colors" 
                    variant="secondary"
                    onClick={() => setLocation(`/project/${project.id}`)}
                  >
                    Read More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
