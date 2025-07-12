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
                I am a Computer Science & Engineering student at <span className="text-primary font-semibold">RV College of Engineering, Bengaluru</span> (2022–2026, CGPA: 8.64).
                I am passionate about technology, AI, IoT, and innovation.
              </p>
              <p>
                <span className="text-primary font-semibold">Skills:</span> C, C++, HTML, CSS, JavaScript, Python, SQL<br/>
                <span className="text-primary font-semibold">Concepts:</span> DSA, OOP, Operating Systems, DBMS, AIML, Computer Networks, REST APIs<br/>
                <span className="text-primary font-semibold">Tools:</span> Git/GitHub, GeeksforGeeks, VS Code, TensorFlow, Scikit-learn, Google Colab
              </p>
              <p>
                <span className="text-primary font-semibold">Coding Profiles:</span><br/>
                LeetCode: <a href="https://leetcode.com/u/praveenphebbal/" className="text-primary underline" target="_blank" rel="noopener noreferrer">praveen-hebbal</a><br/>
                GeeksforGeeks: <a href="https://www.geeksforgeeks.org/user/praveenhehidy/" className="text-primary underline" target="_blank" rel="noopener noreferrer">praveen-hebbal</a>
              </p>
              <p>
                <span className="text-primary font-semibold">Achievement:</span> Secured award of merit in Enterprise Architecture conducted by The Open Group at New Delhi.
              </p>
              <p>
                <span className="text-primary font-semibold">Hobbies:</span> Exploring AI & IoT innovations, watching science fiction and movies, playing volleyball and cricket, reading tech blogs.
              </p>
            </div>
            
            {/* Removed the two section boxes for projects and experience */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;