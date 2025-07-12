import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4">
          <div className="text-sm text-muted-foreground">
            © 2024 Praveen Prakash Hebbal. All rights reserved.
          </div>
          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>using React & TypeScript</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;