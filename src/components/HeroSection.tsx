import { Button } from "./ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/70"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-8 animate-fade-up">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold">
              Hello, I'm <span className="text-gradient">Praveen</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Engineering Student passionate about technology and innovation
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => scrollToSection('projects')}
              className="animate-scale-in"
              style={{ animationDelay: '0.2s' }}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              onClick={() => scrollToSection('contact')}
              className="animate-scale-in"
              style={{ animationDelay: '0.4s' }}
            >
              Get In Touch
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6 pt-8">
            {[
              { icon: Github, href: "https://github.com/praveengalaxy", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/praveengalaxy", label: "LinkedIn" },
              { icon: Mail, href: "mailto:praveen@example.com", label: "Email" }
            ].map((social, index) => (
              <Button
                key={social.label}
                variant="ghost"
                size="icon"
                className="w-12 h-12 rounded-full hover:bg-primary/20 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                asChild
              >
                <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                  <social.icon className="w-6 h-6" />
                </a>
              </Button>
            ))}
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scrollToSection('about')}
            className="rounded-full"
          >
            <ArrowDown className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;