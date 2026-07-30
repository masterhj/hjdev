import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Server, Database, Cloud, Cpu, Globe, Brain } from "lucide-react";
import reactLogo from "@/assets/react-logo.svg";
import pythonLogo from "@/assets/python-logo.svg";
import jsLogo from "@/assets/javascript-logo.png";
import tsLogo from "@/assets/typescript-logo.svg";
import nodeLogo from "@/assets/nodejs-logo.svg";
import scalaLogo from "@/assets/scala-logo.png";

const techLogos: { [key: string]: string } = {
  "Java": "https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.png",
  "Python": pythonLogo,
  "Go": "https://go.dev/blog/go-brand/Go-Logo/SVG/go-logo-blue.svg",
  "Scala 3": scalaLogo,
  "C++": "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
  "C#": "https://upload.wikimedia.org/wikipedia/commons/b/bd/Logo_C_sharp.svg",
  "C": "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png",
  "JavaScript": jsLogo,
  "TypeScript": tsLogo,
  "React": reactLogo,
  "Next.js": "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
  "Node.js": nodeLogo,
  "Express": "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
  "Spring Boot": "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/spring-boot-icon.png",
  "Bootstrap": "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
  "Tailwind CSS": "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  "MongoDB": "https://www.mongodb.com/assets/images/global/favicon.ico",
  "MySQL": "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg",
  "Supabase": "https://seeklogo.com/images/S/supabase-logo-DCC634FFE8-seeklogo.com.png",
  "Docker": "https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png",
  "Kubernetes": "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/kubernetes-icon.png",
  "AWS": "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
  "NumPy": "https://upload.wikimedia.org/wikipedia/commons/3/31/NumPy_logo_2020.svg",
  "Pandas": "https://upload.wikimedia.org/wikipedia/commons/e/ed/Pandas_logo.svg",
  "TensorFlow": "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg",
  "PyTorch": "https://upload.wikimedia.org/wikipedia/commons/1/10/PyTorch_logo_icon.svg",
  "Scikit-learn": "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
  "Git": "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
  "GitHub": "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
};

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    color: "neon-blue",
    skills: ["Python", "Go", "Java", "JavaScript", "TypeScript", "C++", "C#", "C", "Scala 3"]
  },
  {
    title: "Frameworks & Libraries",
    icon: Server,
    color: "neon-green",
    skills: ["React", "Next.js", "Express", "Spring Boot", "Bootstrap", "Tailwind CSS", "Node.js"]
  },
  {
    title: "Machine Learning",
    icon: Brain,
    color: "neon-magenta",
    skills: ["NumPy", "Pandas", "Scikit-learn", "TensorFlow", "PyTorch", "LLM APIs"]
  },
  {
    title: "Databases",
    icon: Database,
    color: "neon-cyan",
    skills: ["MySQL", "MongoDB", "Supabase", "PostgreSQL"]
  },
  {
    title: "DevOps / Cloud",
    icon: Cloud,
    color: "neon-purple",
    skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Git", "GitHub"]
  },
  {
    title: "Core Concepts",
    icon: Cpu,
    color: "neon-orange",
    skills: ["DSA", "OOPS", "Operating System", "DBMS", "Computer Networks", "System Design", "RESTful APIs"]
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
                    <div key={skillIndex} className="flex items-center gap-1">
                      {techLogos[skill] && (
                        <img 
                          src={techLogos[skill]} 
                          alt={`${skill} logo`}
                          className="w-4 h-4 object-contain"
                        />
                      )}
                      <Badge 
                        variant="outline" 
                        className={`border-${category.color}/30 text-${category.color} hover:bg-${category.color}/10 transition-colors duration-200 cursor-default`}
                      >
                        {skill}
                      </Badge>
                    </div>
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
