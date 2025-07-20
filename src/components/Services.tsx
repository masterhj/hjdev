import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palette, Code2, ArrowRight } from "lucide-react";

const services = [
  {
    title: "UX Design",
    icon: Palette,
    description: "Creating intuitive and engaging user experiences through thoughtful design, wireframing, and prototyping that puts users first.",
    features: [
      "User Research & Analysis",
      "Wireframing & Prototyping", 
      "Interface Design",
      "Usability Testing"
    ],
    color: "neon-magenta"
  },
  {
    title: "Full-Stack Web Development",
    icon: Code2,
    description: "Building robust, scalable web applications from frontend to backend using modern technologies and best practices.",
    features: [
      "Frontend Development",
      "Backend Architecture",
      "Database Design",
      "API Development"
    ],
    color: "neon-cyan"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-6 bg-muted/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-center mb-16 neon-text">
          What I Offer
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index}
                className="card-cyber p-8 hover:scale-105 transition-all duration-300 group"
              >
                <div className="text-center mb-6">
                  <div className={`inline-flex p-4 rounded-full bg-${service.color}/10 border border-${service.color}/20 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`h-12 w-12 text-${service.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-primary font-orbitron mb-4">
                    {service.title}
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className={`w-2 h-2 bg-${service.color} rounded-full`}></div>
                      <span className="text-foreground/90">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <Button variant="outline" className="border-primary/30 hover:bg-primary/10 group">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-semibold text-primary mb-4 font-orbitron">
              Ready to Work Together?
            </h3>
            <p className="text-foreground/80 text-lg">
              Let's discuss your project and bring your ideas to life with cutting-edge technology and creative solutions.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-neon text-lg px-8 py-3">
              Hire Me
            </Button>
            <Button variant="outline" className="border-secondary/30 hover:bg-secondary/10 text-lg px-8 py-3">
              Request Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;