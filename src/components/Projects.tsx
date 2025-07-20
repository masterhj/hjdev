import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Eye } from "lucide-react";

const projects = [
  {
    title: "Hotel Management System",
    description: "A comprehensive hotel management system with booking, room management, and customer service features. Built with scalable architecture and modern UI.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=250&fit=crop",
    technologies: ["Java", "Spring Boot", "React", "MongoDB", "Docker"],
    role: "Full-Stack Developer",
    status: "Completed",
    links: {
      github: "#",
      demo: "#"
    }
  },
  {
    title: "Algo-Visualizer", 
    description: "An interactive algorithm visualization tool that helps students understand complex algorithms through animated step-by-step execution.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop",
    technologies: ["React", "D3.js", "TypeScript", "Node.js"],
    role: "Frontend Developer",
    status: "Completed",
    links: {
      github: "#",
      demo: "#"
    }
  },
  {
    title: "APIGate",
    description: "A robust API gateway solution with rate limiting, authentication, and load balancing capabilities for microservices architecture.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=250&fit=crop",
    technologies: ["Golang", "Docker", "Kubernetes", "Redis", "PostgreSQL"],
    role: "Backend Developer", 
    status: "In Progress",
    links: {
      github: "#",
      demo: "#"
    }
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-center mb-16 neon-text">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="card-cyber overflow-hidden hover:scale-105 transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                
                {/* Status badge */}
                <Badge 
                  className={`absolute top-4 right-4 ${
                    project.status === 'Completed' 
                      ? 'bg-neon-green/20 text-neon-green border-neon-green/30' 
                      : 'bg-neon-orange/20 text-neon-orange border-neon-orange/30'
                  }`}
                >
                  {project.status}
                </Badge>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-primary mb-2 font-orbitron">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Role: {project.role}
                  </p>
                  <p className="text-foreground/80 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="outline" 
                      className="border-primary/30 text-primary text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 border-primary/30 hover:bg-primary/10 group"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1 btn-neon text-sm py-2"
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View more projects */}
        <div className="text-center mt-12">
          <Button variant="outline" className="border-secondary/30 hover:bg-secondary/10 text-lg px-8 py-3">
            <ExternalLink className="mr-2 h-5 w-5" />
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;