import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Linkedin, Send, Instagram, Facebook } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-20 px-4 relative" id="contact">
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Let's <span className="text-primary">Connect</span></h2>
              <p className="text-muted-foreground text-lg">
                I'm currently available for freelance work or full-time opportunities.
                If you have a project that needs some creative touch, let's talk.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="glass-card border-none">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="bg-primary/20 p-4 rounded-full text-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email Me</p>
                    <a href={`mailto:${resumeData.personalInfo.email}`} className="text-lg font-bold hover:text-primary transition-colors">
                      {resumeData.personalInfo.email}
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card border-none">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="bg-primary/20 p-4 rounded-full text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-lg font-bold">{resumeData.personalInfo.location}</p>
                  </div>
                </CardContent>
              </Card>

              <div className="flex gap-4 pt-4">
                <a 
                  href={resumeData.personalInfo.linkedin} 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href={resumeData.personalInfo.instagram} 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href={resumeData.personalInfo.facebook} 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="glass border border-white/10 p-8 h-full">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Name</label>
                    <Input placeholder="John Doe" className="bg-black/30 border-white/10" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input placeholder="john@example.com" type="email" className="bg-black/30 border-white/10" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <Input placeholder="Hiring for Data Analyst Role" className="bg-black/30 border-white/10" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea 
                    placeholder="Hello, I'd like to discuss a project..." 
                    className="bg-black/30 border-white/10 min-h-[150px]" 
                  />
                </div>
                
                <Button className="w-full bg-primary hover:bg-primary/90 h-12 text-lg">
                  Send Message <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
