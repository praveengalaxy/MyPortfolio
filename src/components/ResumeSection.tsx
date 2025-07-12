import { Button } from "./ui/button";
import { Download, FileText, Eye } from "lucide-react";

const ResumeSection = () => {
  return (
    <section id="resume" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-up">
            <h2 className="text-4xl font-bold mb-4">Resume</h2>
            <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              Download my resume to learn more about my experience, skills, and achievements
            </p>
          </div>
          
          <div className="bg-card rounded-lg p-8 shadow-lg animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold">Praveen's Resume</h3>
                  <p className="text-muted-foreground">Engineering Student - Updated Dec 2024</p>
                  <p className="text-sm text-muted-foreground">PDF • 139 KB</p>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <Button variant="outline" size="lg" asChild>
                  <a href="/src/assets/Praveen_Resume.pdf" target="_blank" rel="noopener noreferrer">
                    <Eye className="w-5 h-5 mr-2" />
                    Preview
                  </a>
                </Button>
                <Button variant="glow" size="lg" asChild>
                  <a href="/src/assets/Praveen_Resume.pdf" download>
                    <Download className="w-5 h-5 mr-2" />
                    Download
                  </a>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              {
                title: "Skills & Technologies",
                description: "Comprehensive list of programming languages, frameworks, and tools I'm proficient in",
                icon: "🛠️"
              },
              {
                title: "Project Experience",
                description: "Detailed descriptions of academic and personal projects with technical specifications",
                icon: "💼"
              },
              {
                title: "Achievements",
                description: "Academic honors, certifications, and competition results throughout my journey",
                icon: "🏆"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-card rounded-lg p-6 card-hover animate-fade-up"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;