import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Zap } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Futuristic background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-hero cyber-grid"></div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 z-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neon-cyan rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        {/* Profile Image */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-32 h-32 rounded-full border-4 border-primary shadow-glow-primary animate-pulse-glow">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" 
                alt="Himanshu Jaiswal"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="absolute -inset-2 rounded-full border border-neon-cyan/20 animate-spin"></div>
          </div>
        </div>

        {/* Name and Title */}
        <h1 className="font-orbitron text-5xl md:text-7xl font-black mb-4 animate-fadeInUp">
          <span className="neon-text">HIMANSHU</span>
          <br />
          <span className="text-foreground">JAISWAL</span>
        </h1>
        
        <div className="flex items-center justify-center gap-3 mb-6 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          <Code className="text-neon-cyan" size={24} />
          <p className="text-xl md:text-2xl text-muted-foreground font-exo">
            Full-Stack Developer | System Design Enthusiast
          </p>
          <Zap className="text-neon-magenta" size={24} />
        </div>

        <p className="text-lg md:text-xl text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
          Building robust and scalable applications from concept to deployment
        </p>

        {/* CTA Button */}
        <div className="animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
          <Button 
            onClick={scrollToProjects}
            className="btn-neon text-lg px-12 py-6 group"
          >
            Explore My Work
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;