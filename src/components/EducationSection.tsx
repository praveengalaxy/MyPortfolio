import { GraduationCap, Calendar } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Electronics & Communication",
      institution: "XYZ University",
      period: "2021 - 2024",
      description: "Specializing in digital electronics, signal processing, and communication systems. Maintaining a strong academic record with focus on practical applications.",
      achievements: ["Dean's List", "Best Project Award", "Technical Society Member"]
    },
    {
      degree: "Pre-University (PUC)",
      institution: "ABC College",
      period: "2019 - 2021",
      description: "Completed with distinction in Physics, Chemistry, and Mathematics. Developed strong foundation in analytical thinking and problem-solving.",
      achievements: ["First Class with Distinction", "Science Olympiad Winner", "Mathematics Club President"]
    }
  ];

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey and the foundation that drives my passion for technology
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30"></div>
            
            <div className="space-y-12">
              {education.map((item, index) => (
                <div 
                  key={index}
                  className="relative flex items-start space-x-8 animate-fade-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-primary rounded-full">
                    <GraduationCap className="w-8 h-8 text-primary-foreground" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-card rounded-lg p-6 card-hover shadow-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="text-primary font-semibold">{item.period}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2">{item.degree}</h3>
                    <h4 className="text-primary font-semibold mb-4">{item.institution}</h4>
                    
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    
                    <div className="space-y-2">
                      <h5 className="font-semibold text-sm">Key Achievements:</h5>
                      <div className="flex flex-wrap gap-2">
                        {item.achievements.map((achievement, achievementIndex) => (
                          <span
                            key={achievementIndex}
                            className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                          >
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;