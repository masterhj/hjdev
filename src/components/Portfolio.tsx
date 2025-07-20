import Navigation from "./Navigation";
import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";
import Services from "./Services";
import Projects from "./Projects";
import Contact from "./Contact";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <main>
        <div id="home">
          <Hero />
        </div>
        <About />
        <Experience />
        <Skills />
        <Services />
        <Projects />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="py-8 px-6 border-t border-primary/20 bg-background/50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground mb-4">
            Built with ❤️ using React, TypeScript & Tailwind CSS
          </p>
          <p className="text-sm text-muted-foreground">
            © 2024 Himanshu Jaiswal. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;