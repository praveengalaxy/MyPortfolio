import { Button } from "./ui/button";
import { ExternalLink, Github, Code } from "lucide-react";
import project1Image from "@/assets/project1.jpg";
import project2Image from "@/assets/project2.jpg";
import project3Image from "@/assets/project3.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Rider Guardian System",
      description: "IoT-powered motorcycle safety platform with crash detection, health and fleet monitoring, and emergency alerting. Sensors (alcohol, heart rate, MPU6050, GPS, helmet) send real-time data to a Node.js backend via Arduino. Full-stack app using React, Vite, TypeScript, Tailwind CSS, and REST APIs. Features predictive maintenance, fleet dashboard, and Location Tracker.",
      image: project1Image,
      technologies: ["React", "Vite", "TypeScript", "Tailwind CSS", "Node.js", "Arduino", "REST APIs"],
      github: "https://github.com/praveengalaxy/rider-guardian-system",
      live: "#",
      featured: true
    },
    {
      title: "AI-Powered Cybersecurity Threat Detection System",
      description: "AI system to detect CAN bus cyberattacks (DoS, Fuzzy, Impersonation) in real time using Python and ML models (TensorFlow, Scikit-learn), trained on automotive datasets. Deployed with Flask/FastAPI, integrated real-time CAN monitoring and visualization (Matplotlib, Seaborn), with optional MySQL logging. Designed for future embedded deployment.",
      image: project2Image,
      technologies: ["Python", "TensorFlow", "Scikit-learn", "Flask", "FastAPI", "Matplotlib", "Seaborn", "MySQL"],
      github: "https://github.com/praveengalaxy/AI-Powered-Cybersecurity-Threat-Detection-System-in-Automotive-Systems",
      live: "#",
      featured: true
    },
    {
      title: "EduThon: AI-Powered Parental Learning Companion",
      description: "AI-powered education platform to help parents teach children through personalized concept explanations powered by Google Gemini, with multilingual support and analytics. Backend (Flask) serves AI explanations; frontend (React) features gamified lessons, quizzes, dashboards, and progress tracking for both parents and kids.",
      image: project3Image,
      technologies: ["React", "Flask", "Google Gemini", "Gamification", "Analytics"],
      github: "https://github.com/praveengalaxy/EduThon",
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