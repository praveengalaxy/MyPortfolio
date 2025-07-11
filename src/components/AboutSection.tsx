import profileImage from "@/assets/profile.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-up">
            <div className="relative">
              <img
                src={profileImage}
                alt="Praveen - Engineering Student"
                className="w-80 h-80 rounded-full object-cover mx-auto shadow-2xl"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 mx-auto w-80 h-80"></div>
            </div>
          </div>
          
          <div className="space-y-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div>
              <h2 className="text-4xl font-bold mb-4">About Me</h2>
              <div className="w-20 h-1 bg-primary rounded-full mb-6"></div>
            </div>
            
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                I am a third-year engineering student specializing in <span className="text-primary font-semibold">Electronics and Communication</span>. 
                I have experience in software development and I love working on projects that involve web technologies.
              </p>
              <p>
                My interests include <span className="text-primary font-semibold">robotics, IoT, and AI</span>. 
                Currently pursuing my Bachelor of Technology degree at XYZ University, I enjoy learning new programming 
                languages and frameworks.
              </p>
              <p>
                I am always eager to take on challenging technical problems and collaborate on innovative solutions 
                that make a real-world impact.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-4 bg-card rounded-lg card-hover">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg card-hover">
                <div className="text-3xl font-bold text-primary">3</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;