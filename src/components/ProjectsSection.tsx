import { Button } from "./ui/button";
import { ExternalLink, Github, Code } from "lucide-react";
import project1Image from "@/assets/project1.jpg";
import project2Image from "@/assets/project2.jpg";
import project3Image from "@/assets/project3.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Web Application",
      description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      image: project1Image,
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      github: "https://github.com/praveengalaxy/ecommerce-app",
      live: "https://praveengalaxy-ecommerce.vercel.app",
      featured: true
    },
    {
      title: "IoT Home Automation System",
      description: "Smart home automation system using Arduino, sensors, and mobile app control. Includes temperature monitoring, lighting control, and security features.",
      image: project2Image,
      technologies: ["Arduino", "ESP32", "Flutter", "Firebase"],
      github: "https://github.com/praveengalaxy/smart-home",
      live: "#",
      featured: true
    },
    {
      title: "Task Management Mobile App",
      description: "Cross-platform mobile app for task management with real-time collaboration features. Built with React Native and Firebase backend.",
      image: project3Image,
      technologies: ["React Native", "Firebase", "Redux", "Expo"],
      github: "https://github.com/praveengalaxy/task-manager",
      live: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical projects and creative solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`bg-card rounded-lg overflow-hidden card-hover shadow-lg animate-fade-up ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3 pt-4">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  {project.live !== "#" && (
                    <Button variant="glow" size="sm" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/praveengalaxy" target="_blank" rel="noopener noreferrer">
              <Code className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;