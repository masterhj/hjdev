import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-center mb-16 neon-text">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-foreground/90">
                I am a full-stack developer dedicated to building robust and scalable applications 
                from concept to deployment. My professional passion is centered on system design, 
                where I focus on creating resilient architecture that can handle growth and complexity.
              </p>
              <p className="text-lg leading-relaxed text-foreground/90">
                I am motivated by solving intricate problems and engineering elegant, high-quality 
                code that forms the backbone of impactful products.
              </p>
            </div>
          </div>

          {/* Education Card */}
          <Card className="card-cyber p-8 hover:scale-105 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10 border border-primary/20">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-primary mb-2">Education</h3>
                <h4 className="text-lg font-medium text-foreground mb-2">
                  B.Tech in Computer Science and Engineering
                </h4>
                <p className="text-muted-foreground mb-3">IIIT Agartala</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Graduating 2027</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Timeline visualization */}
        <div className="mt-16 relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"></div>
          
          <div className="space-y-8">
            <div className="flex items-center justify-center">
              <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow-primary"></div>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-semibold text-primary">Present</h3>
              <p className="text-muted-foreground">Passionate Developer & Learner</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;