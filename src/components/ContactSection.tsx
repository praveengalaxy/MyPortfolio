import { Button } from "./ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Code } from "lucide-react";
import React, { useState } from "react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "praveen.hebbal2004@gmail.com",
      href: "mailto:praveen.hebbal2004@gmail.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bengaluru, India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/praveengalaxy",
      color: "hover:text-gray-400"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/praveen-hebbal-b73b94313",
      color: "hover:text-blue-400"
    },
    {
      icon: Code,
      label: "Portfolio",
      href: "https://my-portfolio-one-theta-42.vercel.app/",
      color: "hover:text-green-400"
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:praveen.hebbal2004@gmail.com",
      color: "hover:text-red-400"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div>
                <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
                <p className="text-muted-foreground mb-8">
                  Feel free to reach out via email or connect with me on social media. 
                  I'm always excited to collaborate on innovative projects or discuss 
                  opportunities in technology and engineering.
                </p>
              </div>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">{item.label}</p>
                      {item.href !== "#" ? (
                        <a 
                          href={item.href} 
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="pt-8">
                <h4 className="font-semibold mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="icon"
                      className={`w-12 h-12 rounded-full transition-colors ${social.color}`}
                      asChild
                    >
                      <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                        <social.icon className="w-5 h-5" />
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-card rounded-lg p-8 shadow-lg animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-2xl font-bold mb-6">Send me a message</h3>
              {submitted ? (
                <div className="text-green-600 font-semibold text-lg py-8 text-center">Thank you! Your message has been submitted.</div>
              ) : (
              <form className="space-y-6" onSubmit={async (e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const data = new FormData(form);
                const response = await fetch("https://formspree.io/f/mvgrejvj", {
                  method: "POST",
                  body: data,
                  headers: {
                    Accept: "application/json"
                  }
                });
                if (response.ok) {
                  setSubmitted(true);
                  form.reset();
                }
              }}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                    placeholder="john.doe@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                    placeholder="Project Collaboration"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={5}
                    name="message"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-colors resize-none"
                    placeholder="Tell me about your project or idea..."
                  ></textarea>
                </div>
                
                <Button variant="glow" size="lg" className="w-full">
                  <Mail className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;