import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Eye } from "lucide-react";

const projects = [
  {
    title: "Concord",
    description: "A Raft-replicated payment ledger built in Go. Nodes agree on transaction order through Raft consensus, batch transactions to amortise consensus cost, and keep a hash-chained ledger of committed blocks. Wallets use ed25519 keypairs signed in the browser, with a React dashboard to watch the cluster in real time.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=250&fit=crop",
    technologies: ["Go", "Raft", "Distributed Systems", "React", "ed25519", "Ledger"],
    role: "Backend & Systems Developer",
    status: "Completed",
    links: {
      github: "https://github.com/masterhj/concord",
      demo: ""
    }
  },
  {
    title: "QuizFlow-AI",
    description: "AI-powered quiz and study platform with real-time learning tools. Features dynamic quiz generation, DSA practice tracks, a flashcard system with 3D flip animation, and a college notes revision hub with AI summarization.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Zustand", "Node.js", "OpenAI API"],
    role: "Full-Stack Developer",
    status: "Completed",
    links: {
      github: "https://github.com/masterhj/QuizFlow",
      demo: "https://quiz-flow-six.vercel.app"
    }
  },
  {
    title: "Algorithm Visualizer",
    description: "Brings sorting, searching, and pathfinding algorithms to life with real-time animations and an intuitive UI. Helps students and developers build intuition for complex algorithms visually.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop",
    technologies: ["React.js", "JavaScript", "Docker", "HTML", "MongoDB", "Postman"],
    role: "Frontend Developer",
    status: "Completed",
    links: {
      github: "https://github.com/masterhj/Algorithm-Visualizer",
      demo: "https://algorithm-visualizer-delta-eight.vercel.app"
    }
  },
  {
    title: "Restaurant Controller",
    description: "A digital menu and dining experience web app with server-side logic, API endpoints, and an AI ChatBox for the menu. Reduced API response times by 30% through optimized Node.js backend logic.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=250&fit=crop",
    technologies: ["HTML", "CSS", "JavaScript", "React.js", "React Native", "Bootstrap", "Node.js", "OpenAI"],
    role: "Full-Stack Developer",
    status: "Completed",
    links: {
      github: "https://github.com/masterhj/himanshu--hotel-card",
      demo: ""
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
                  <a 
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="w-full border-primary/30 hover:bg-primary/10 group"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </a>
                  {project.links.demo ? (
                    <a 
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button 
                        size="sm" 
                        className="w-full btn-neon text-sm py-2"
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        Demo
                      </Button>
                    </a>
                  ) : (
                    <Button 
                      size="sm" 
                      className="flex-1 btn-neon text-sm py-2 opacity-60 cursor-not-allowed"
                      disabled
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View more projects */}
        <div className="text-center mt-12">
          <a 
            href="https://github.com/masterhj"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" className="border-secondary/30 hover:bg-secondary/10 text-lg px-8 py-3">
              <ExternalLink className="mr-2 h-5 w-5" />
              View All Projects
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
