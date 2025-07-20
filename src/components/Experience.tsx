import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, ExternalLink } from "lucide-react";
import scalaLogo from "@/assets/scala-logo.png";
import reactLogo from "@/assets/react-logo.svg";
import pythonLogo from "@/assets/python-logo.svg";
import jsLogo from "@/assets/javascript-logo.png";
import tsLogo from "@/assets/typescript-logo.svg";
import nodeLogo from "@/assets/nodejs-logo.svg";

const techLogos: { [key: string]: string } = {
  "Scala 3": scalaLogo,
  "React": reactLogo,
  "JavaScript": jsLogo,
  "TypeScript": tsLogo,
  "Python": pythonLogo,
  "Node.js": nodeLogo,
};

const experiences = [
  {
    title: "Intern",
    company: "Scala Center",
    program: "Google Summer of Code",
    duration: "May 2025 – Aug 2025",
    location: "Remote",
    type: "Internship",
    status: "upcoming",
    description: "Selected for Google Summer of Code to contribute to Scala ecosystem projects.",
    technologies: ["Scala 3", "Open Source", "Functional Programming"],
    companyLogo: scalaLogo
  },
  {
    title: "Frontend Developer", 
    company: "BCCL",
    duration: "May 2024 – June 2024",
    location: "Remote",
    type: "Internship",
    status: "completed",
    description: "Developed responsive web applications and improved user interface components.",
    technologies: ["React", "JavaScript", "CSS3", "HTML5"],
    companyLogo: reactLogo
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-muted/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-center mb-16 neon-text">
          Experience
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex gap-8">
                {/* Timeline dot */}
                <div className="relative z-10">
                  <div className={`w-4 h-4 rounded-full border-4 border-background shadow-glow-primary ${
                    exp.status === 'upcoming' ? 'bg-accent animate-pulse-glow' : 'bg-primary'
                  }`}></div>
                </div>
                
                {/* Content card */}
                <Card className="card-cyber flex-1 p-6 hover:scale-[1.02] transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    {/* Company Logo */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-lg bg-background/50 border border-primary/20 p-2 flex items-center justify-center">
                        <img 
                          src={exp.companyLogo} 
                          alt={`${exp.company} logo`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      {exp.program === "Google Summer of Code" && (
                        <div className="mt-2 text-xs text-center">
                          <span className="px-2 py-1 bg-gradient-to-r from-blue-500 to-red-500 text-white rounded-full text-[10px] font-semibold">
                            GSoC
                          </span>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex-1">
                      {/* Header */}
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h3 className="text-xl font-semibold text-primary">{exp.title}</h3>
                        <Badge variant={exp.status === 'upcoming' ? 'default' : 'secondary'} 
                               className={exp.status === 'upcoming' ? 'bg-accent text-accent-foreground' : ''}>
                          {exp.status === 'upcoming' ? 'Upcoming' : 'Completed'}
                        </Badge>
                      </div>
                      
                      <h4 className="text-lg font-medium text-foreground mb-1">
                        {exp.company}
                        {exp.program && <span className="text-secondary"> • {exp.program}</span>}
                      </h4>
                      
                      {/* Meta info */}
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <p className="text-foreground/90 mb-4">{exp.description}</p>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <div key={techIndex} className="flex items-center gap-1">
                            {techLogos[tech] && (
                              <img 
                                src={techLogos[tech]} 
                                alt={`${tech} logo`}
                                className="w-4 h-4 object-contain"
                              />
                            )}
                            <Badge variant="outline" className="border-primary/30 text-primary">
                              {tech}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Action */}
                    <div className="flex-shrink-0">
                      <ExternalLink className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;