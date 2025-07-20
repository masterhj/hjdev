import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Linkedin, Github, Send, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "jaiswalhiman1410@gmail.com",
    href: "mailto:jaiswalhiman1410@gmail.com",
    color: "neon-blue"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 969302116",
    href: "tel:+91969302116",
    color: "neon-green"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "LinkedIn Profile",
    href: "#",
    color: "neon-cyan"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "GitHub Profile",
    href: "#",
    color: "neon-magenta"
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 px-6 bg-muted/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-center mb-16 neon-text">
          Get In Touch
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-6 font-orbitron">
                Let's Connect
              </h3>
              <p className="text-foreground/80 text-lg leading-relaxed mb-8">
                I'm always interested in discussing new opportunities, innovative projects, 
                and collaborating on exciting ventures. Feel free to reach out!
              </p>
            </div>

            <div className="grid gap-4">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <Card key={index} className="card-cyber p-4 hover:scale-105 transition-all duration-300">
                    <a 
                      href={contact.href}
                      className="flex items-center gap-4 group"
                    >
                      <div className={`p-3 rounded-full bg-${contact.color}/10 border border-${contact.color}/20 group-hover:scale-110 transition-transform`}>
                        <IconComponent className={`h-5 w-5 text-${contact.color}`} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{contact.label}</p>
                        <p className="text-foreground font-medium">{contact.value}</p>
                      </div>
                    </a>
                  </Card>
                );
              })}
            </div>

            {/* Location */}
            <Card className="card-cyber p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-neon-purple/10 border border-neon-purple/20">
                  <MapPin className="h-6 w-6 text-neon-purple" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary">Location</h4>
                  <p className="text-foreground/80">India • Available for Remote Work</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="card-cyber p-8">
            <h3 className="text-2xl font-semibold text-primary mb-6 font-orbitron">
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-background/50 border-primary/20 focus:border-primary neon-glow"
                />
              </div>
              
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-background/50 border-primary/20 focus:border-primary neon-glow"
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-background/50 border-primary/20 focus:border-primary neon-glow resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                className="btn-neon w-full text-lg py-3 group"
              >
                <Send className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>

        {/* Status badges */}
        <div className="text-center mt-16">
          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="bg-neon-green/20 text-neon-green border-neon-green/30 px-4 py-2">
              Available for Work
            </Badge>
            <Badge className="bg-neon-cyan/20 text-neon-cyan border-neon-cyan/30 px-4 py-2">
              Open to Collaborations
            </Badge>
            <Badge className="bg-neon-magenta/20 text-neon-magenta border-neon-magenta/30 px-4 py-2">
              Remote Friendly
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;