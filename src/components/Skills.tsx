import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Server, Database, Cloud, Cpu, Globe } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    color: "neon-blue",
    skills: ["Java", "Python", "Golang", "Scala 3", "C++", "C"]
  },
  {
    title: "Backend Frameworks",
    icon: Server,
    color: "neon-green",
    skills: ["Spring Boot", "Django", "Node.js & Express"]
  },
  {
    title: "Frontend",
    icon: Globe,
    color: "neon-magenta",
    skills: ["React", "HTML5", "CSS3", "JavaScript", "TypeScript"]
  },
  {
    title: "Databases",
    icon: Database,
    color: "neon-cyan",
    skills: ["MongoDB", "PostgreSQL", "MySQL"]
  },
  {
    title: "DevOps/Cloud",
    icon: Cloud,
    color: "neon-purple",
    skills: ["Docker", "Kubernetes", "AWS", "CI/CD"]
  },
  {
    title: "Core Concepts",
    icon: Cpu,
    color: "neon-orange",
    skills: ["OOPS", "RESTful APIs", "Scalable Architecture", "System Design"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-center mb-16 neon-text">
          Skills & Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index} 
                className="card-cyber p-6 hover:scale-105 transition-all duration-300 group"
              >
                <div className="text-center mb-6">
                  <div className={`inline-flex p-4 rounded-full bg-${category.color}/10 border border-${category.color}/20 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`h-8 w-8 text-${category.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-primary font-orbitron">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="outline" 
                      className={`border-${category.color}/30 text-${category.color} hover:bg-${category.color}/10 transition-colors duration-200 cursor-default`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Skill level visualization */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-primary mb-8 font-orbitron">Proficiency Level</h3>
          <div className="flex justify-center items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-neon-green rounded-full shadow-glow-secondary"></div>
              <span>Expert</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded-full shadow-glow-primary"></div>
              <span>Advanced</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-accent rounded-full shadow-glow-accent"></div>
              <span>Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;